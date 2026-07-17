# Database schema blueprint

Postgres is the transactional authority for identity, authorization, Projects, source metadata, document structure, evidence, durable commands, usage, and audit. Blob owns immutable bytes. Search and vector structures are derived from authoritative versions.

This document defines logical boundaries and invariants. Exact migrations are created during their owning implementation slices.

## Schema boundaries

Prefer explicit Postgres schemas or equivalent ownership boundaries:

```text
identity       organizations, memberships, sessions, service accounts
projects       projects, policies, directives, templates
sources        sources, source_versions, derivatives, parsed elements, locators
search         chunks, lexical documents, embeddings, entities, index manifests
research       conversations, messages, research_runs, steps, claims, evidence
content        documents, blocks, revisions, patches, artifacts, publications
connectors     connections, external objects, sync cursors, webhook inbox
operations     operations, progress events, outbox, side effects, schedules
commercial     plans, entitlements, reservations, usage, credits, invoices
platform       API clients, webhook endpoints, deliveries, feature assignments
security       capabilities, key references, policy decisions, audit events
support        cases, grants, diagnostics, repair commands
```

Exposed API schemas remain minimal. Internal tables, functions, audit, credentials, and outbox structures are not directly exposed to untrusted clients.

## Identity and tenancy

Core tables:

- `organizations`
- `users` or identity-provider mapping
- `organization_memberships`
- `service_accounts`
- `service_account_credentials`
- `sessions` and revocation metadata where application-owned
- `projects`
- `project_memberships`
- `project_policies`

Every tenant-owned row includes an `organization_id`; Project-owned rows also include `project_id`. Composite foreign keys or constraints prevent a child from referencing a resource in another Organization or Project.

Authorization does not rely on IDs alone. Database roles, row policies where used, and application queries reinforce the same Project relationship.

## Sources and evidence

Representative structures:

```text
sources
source_versions
source_objects
source_derivatives
processing_attempts
parsed_elements
evidence_spans
claims
claim_evidence
source_decisions
source_permissions
```

`source_versions` are immutable and content-addressed. Originals and derivatives store Blob object identity, checksum, byte size, media type, encryption/key reference, residency, and retention class.

`evidence_spans` reference one SourceVersion and a typed locator. `claim_evidence` uses a relationship type such as direct support, indirect support, corroboration, contradiction, or context. Derived summaries cannot independently corroborate their upstream Claims.

## Conversations and research

- `conversations`
- `messages`
- `message_parts`
- `model_generations`
- `tool_calls`
- `research_runs`
- `research_steps`
- `research_tasks`
- `research_budgets`
- `research_source_candidates`

Messages and parts persist stable UI-compatible structures. Provider payloads are normalized and redacted; raw provider details are retained only when necessary, encrypted, and policy-allowed.

Research steps point to model/configuration versions, source snapshots, tool policy, attempts, usage, and result resources. Long-form sections have explicit contracts and dependency order.

## Documents and artifacts

```text
documents
document_blocks
document_revisions
document_revision_blocks
document_patches
document_patch_operations
artifacts
artifact_versions
artifact_components
publications
publication_snapshots
comments
assignments
approvals
```

Document revisions are immutable. A document points to its current revision. Stable block IDs and revision membership support diffs, provenance, locking, and typed patches.

Public/private projections are not separate editable documents. PublicationSnapshot stores the approved immutable projection, evidence ledger, policy result, and export identities.

## Operations and reliability

```text
operations
operation_progress_events
idempotency_records
outbox_events
inbox_events
side_effects
workflow_checkpoints
approvals
schedules
jobs
dead_letters
```

State transitions use constrained enums or lookup tables and compare-and-set versions. Outbox rows are written with domain changes. Side effects have uniqueness constraints that prevent duplicate logical external writes.

Progress events use an Operation-scoped sequence. Idempotency records bind key, actor, command, semantic input hash, result, and expiry.

## Connectors and GitHub

- `connections` and encrypted credential references
- `connection_scopes`
- `external_objects`
- `external_object_versions`
- `sync_cursors`
- `connector_webhook_events`
- `github_installations`
- `github_repositories`
- `github_snapshots`
- `repository_symbols`
- `repository_references`
- `change_proposals`
- `change_proposal_files`
- `change_validations`

External IDs are unique within provider and installation scope. GitHub evidence always includes repository and commit SHA. Change proposals record base SHA, patch identity, sandbox, validation, approval, branch, commit, and pull request.

## Memory and maintenance

```text
memory_items
memory_versions
memory_provenance
source_change_sets
claim_revalidations
dependency_edges
maintenance_runs
maintenance_proposals
```

Dependency edges connect SourceVersions and EvidenceSpans to Claims, blocks, memory, artifacts, and publications. They support targeted invalidation and maintenance without making the graph database the source of truth.

## Commercial and platform

Entitlements and usage use immutable or append-only ledgers where correction is represented as a new entry. Reservations settle into usage events. Provider-reported usage is reconciled but does not replace internal command identity.

API clients, OAuth grants, webhook endpoints, deliveries, and SDK versions remain separate from customer connector credentials.

## Audit

Audit events are append-only and capture actor, effective authorization, Organization/Project, action, resource, request/Operation, policy result, time, source IP or client metadata where permitted, and redacted change summary.

Audit data is access-controlled and protected from the normal application role. High-impact operations include capability and approval identities.

## Data types and constraints

- Use timezone-aware timestamps.
- Use integer minor units for currency and explicit units for tokens, bytes, and durations.
- Use JSON only for versioned flexible payloads; important ownership, status, and query fields remain typed columns.
- Use checksums and unique constraints for immutable identity and deduplication.
- Use foreign keys unless a measured partitioning or lifecycle reason requires an explicit alternative.
- Use `NOT NULL`, check constraints, and state-transition guards for invariants.
- Soft deletion alone is not privacy deletion; tombstone and deletion workflow state are explicit.

## Indexing and partitioning

Indexes follow measured queries and authorization predicates. Expected candidates include Organization/Project/time composites, source/version checksums, current document revision, Operation state, outbox readiness, external event IDs, and evidence relationships.

High-volume append-only tables such as audit, progress, usage, webhook delivery, and model usage can be time-partitioned after measured need. Partitioning cannot weaken tenant filtering or retention.

## Migration and verification

All changes follow `schema-contract-and-data-evolution.md`. Migrations include preconditions, lock/runtime analysis, backfill plan, observability, rollback/forward-recovery, and mixed-version tests. Database fixtures verify tenant constraints, lifecycle rules, referential integrity, deletion, restore, and query plans.
