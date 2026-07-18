---
id: architecture-continuous-knowledge-maintenance
title: Continuous knowledge maintenance
status: accepted
owner: maintenance
last_reviewed: 2026-07-18
---

# Continuous knowledge maintenance

Research exists to keep documents alive after the first answer or report. Maintenance is a first-class architecture concern, not a scheduled rewrite prompt.

This architecture supports [`../01-product/source-change-maintenance-and-living-docs.md`](../01-product/source-change-maintenance-and-living-docs.md) and governs `MAINT-001`. Dependency traversal is specified in [`living-dependency-graph.md`](living-dependency-graph.md), public/private projection safety is specified in [`canonical-content-and-no-drift.md`](canonical-content-and-no-drift.md), and maintenance review events flow through [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md).

## Sources reviewed

Current platform and documentation-maintenance references reviewed on 2026-07-18:

- [GitHub Dependabot version updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates)
- [GitHub webhooks documentation](https://docs.github.com/en/webhooks)
- [GitHub repository webhooks REST API](https://docs.github.com/rest/webhooks/repos)
- [Notion wikis and verified pages](https://www.notion.com/help/wikis-and-verified-pages)
- [Docusaurus versioning](https://docusaurus.io/docs/versioning)

These sources inform scheduling, webhook, verification, ownership, and versioning patterns. Research still uses its own canonical SourceVersion, Claim, DocumentRevision, PublicationSnapshot, and ActivityEvent model as the product authority.

## Goals

- Detect source changes.
- Identify affected Claims, DocumentBlocks, MemoryItems, ArtifactComponents, PublicationSnapshots, exports, recipes, Product Truth records, and public claims.
- Revalidate support, freshness, locator validity, rights, provider policy, and publication eligibility.
- Propose the smallest safe typed patches and review actions.
- Preserve public/private no-drift guarantees.
- Keep users in control of material changes.

## Authority boundary

Maintenance can create SourceVersions, source change sets, claim revalidations, impact summaries, patch proposals, ActivityEvents, Operation progress, Product Truth signals, and review ActionCards.

Maintenance cannot directly mutate canonical Documents, MemoryItems, Publications, Product Truth decisions, requirements, implementation status, connector scope, support access, billing state, external systems, or public outputs. Mutations proceed through the owning domain service with expected versions, preflight, idempotency, approval policy, ActivityEvents, audit, and release-evidence linkage.

## Record model

```text
SourceFreshnessPolicy
SourceChangeSet
SourceLocatorMapping
ClaimRevalidation
MaintenanceRun
MaintenanceImpactSummary
MaintenancePatchProposal
MaintenanceActionCard
MaintenanceOutcomeObservation
MaintenanceSchedule
```

`SourceFreshnessPolicy` defines source type, claim risk class, review horizon, refresh trigger, stale threshold, public-output threshold, owner, and escalation path.

`SourceChangeSet` records changed SourceVersion refs, structural diff, semantic diff summary, removed locator refs, new locator refs, source rights deltas, provider-policy deltas, parser-version delta, and materiality classification.

`ClaimRevalidation` records affected Claim, prior state, new state, evidence refs, locator mapping refs, confidence, freshness, rights state, verifier result, publication blocker state, and reason category.

`MaintenanceRun` records trigger, source scope, schedule ref, Operation ref, budget reservation, queue state, stage state, cancellation state, idempotency key, expected versions, policy hashes, and result refs.

`MaintenancePatchProposal` references expected document revision, stable block IDs, affected Claims, proposed Markdown operations, risk class, approval class, blocker class, confidence, rationale, and recovery path. It is a typed patch proposal, not a document revision.

`MaintenanceOutcomeObservation` records accepted, edited, rejected, deferred, manually rewritten, superseded, false-positive, false-negative, cost, latency, approval burden, and stale-claim resolution outcomes for the Automation Outcome Scorecard and Product Truth Board.

## Maintenance inputs

Maintenance can be triggered by:

- a new `SourceVersion`;
- a repository webhook;
- a scheduled web recrawl;
- connector synchronization;
- user-requested refresh;
- official-reference review expiry;
- provider, model, pricing, legal, or policy change;
- deleted, revoked, or withdrawn source access;
- Product Truth contradiction or stale-reference signal;
- publication candidate review;
- stale-claim threshold.

All triggers create an auditable `MaintenanceRun`. Background jobs do not silently mutate canonical documents.

## Run state machine

```text
not_configured
-> scheduled
-> queued
-> checking_source
-> diff_found | no_material_change
-> mapping_locators
-> revalidating_claims
-> impact_ready
-> patches_proposed
-> waiting_for_review
-> partially_applied | applied | blocked | failed | cancelled | stale
```

State transitions emit ActivityEvents and Operation progress. `failed`, `blocked`, `cancelled`, and `stale` states preserve enough reason categories for user recovery, support-safe diagnostics, automation scorecards, and launch evidence.

## Dependency traversal

The maintenance run starts from changed objects and walks the dependency graph:

```text
SourceVersion
-> ParsedElement
-> EvidenceSpan
-> ClaimEvidence
-> Claim
-> DocumentBlock / MemoryItem / ArtifactComponent
-> DocumentRevision / ArtifactVersion
-> PublicationSnapshot / Export
-> Recipe / Product Truth signal / Release evidence
```

The traversal records:

- changed content;
- removed content;
- locator movement;
- parser differences;
- permission changes;
- source rights and provider-policy changes;
- freshness horizon;
- confidence and risk;
- publication and export blockers;
- Product Truth or official-reference implications.

Graph traversal is authorization-filtered for user views and support views. Internal maintenance jobs can process authorized Project records but may only expose content-minimized results according to viewer policy.

## Claim outcomes

Each affected Claim receives one canonical state:

- `supported`: still supported by current evidence;
- `corroborated`: supported by multiple independent allowed sources;
- `disputed`: credible evidence conflicts;
- `inferred`: explicit reasoning from evidence, not directly stated;
- `unsupported`: no current allowed evidence;
- `stale`: evidence is too old for the claim type;
- `removed`: upstream content was deleted or withdrawn;
- `unresolved`: revalidation could not complete.

Unsupported, disputed, stale, removed, unresolved, rights-blocked, provider-policy-blocked, and abuse-policy-blocked Claims cannot be silently published. Publication candidates, exports, public projections, model-context packs, and external webhooks receive blocked or redacted projections rather than stale private detail.

## Patch policy

Maintenance creates typed patch proposals with:

- expected base document revision;
- affected stable block IDs;
- Claim and evidence changes;
- proposed Markdown diff;
- confidence and risk class;
- approval class;
- user-visible rationale;
- rollback or recovery path.

Low-risk patches may be batch-approved by policy only when the Project explicitly enables that behavior and every member of the batch shares source scope, destination, risk class, approval class, owner, and recovery behavior. Published, public, locked, rights-sensitive, legal, billing-impacting, connector-widening, GitHub-writing, support-access, or external-write content always requires the configured approval gate.

## Scheduling and automation

Refresh cadence is source-specific:

- uploaded files refresh only when replaced or reparsed;
- web sources use configured crawl intervals and change heuristics;
- repositories follow webhook and branch policy;
- connected systems follow connector sync policy and rate limits;
- official references have review dates and expiry rules;
- public publications have stricter stale-claim thresholds.

Scheduling decisions respect entitlements, budgets, source rights, provider policy, quiet hours, abuse limits, delegated-trust policy, and owner review. Recurring maintenance appears in the Automation Registry and can be paused, resumed, dry-run, canaried, retired, or converted into an Automation Recipe only through the recipe policy.

## API and event behavior

The API exposes:

- source freshness and materiality status;
- maintenance run list and detail;
- affected Claim and blocker projections;
- Impact Report handoff refs;
- patch proposal list and detail;
- review ActionCard refs;
- schedule and policy views;
- outcome observations where policy allows.

Events include:

- `maintenance.run_scheduled`;
- `maintenance.run_started`;
- `maintenance.source_change_detected`;
- `maintenance.no_material_change`;
- `maintenance.locators_mapped`;
- `maintenance.claim_revalidated`;
- `maintenance.impact_ready`;
- `maintenance.patch_proposed`;
- `maintenance.review_requested`;
- `maintenance.patch_applied`;
- `maintenance.run_blocked`;
- `maintenance.run_failed`;
- `maintenance.run_cancelled`;
- `maintenance.outcome_observed`.

External webhook projections expose only authorized metadata, state, counts, reason categories, safe refs, and redacted summaries. They cannot expose raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, or unsupported private claim text.

## Failure handling

Maintenance degrades safely:

- failed source fetches mark affected Claims as unverified, stale, or unresolved, not current;
- parser drift is isolated to derived artifacts and patch proposals;
- provider outages pause runs without losing dependency state;
- permission loss removes content from retrieval, model context, support views, and public projections;
- partial results remain reviewable but cannot be represented as complete;
- repeated false positives create outcome observations and Product Truth signals instead of silent suppression;
- cancellation preserves reviewed partial work and reason categories.

## Testing and validation

Tests cover:

- source diff detection;
- material versus non-material change classification;
- locator mapping and invalid locator recovery;
- Claim revalidation state transitions;
- public/private projection behavior;
- stale, removed, unsupported, disputed, unresolved, rights-blocked, provider-policy-blocked, and abuse-policy-blocked publication blocking;
- deleted source suppression after restore;
- patch proposal generation, review, edit, rejection, batching, and application through the document service;
- Impact Report agreement with Trust Dashboard blockers;
- Product Truth signal creation for official-reference and public user-opinion maintenance changes;
- schedule, budget, quiet-hour, and owner policy;
- replay and idempotency;
- support-safe diagnostic minimization;
- cross-tenant isolation;
- cost, queue backpressure, and cancellation.

Load tests cover webhook bursts, source refresh bursts, repository sync bursts, official-reference expiry sweeps, large-Project dependency traversal, high-cardinality Claim revalidation, patch proposal queues, publication blocker fanout, and concurrent Automation Recipe triggers.

## Documentation update rule

Changes to maintenance architecture, source freshness, source diffing, claim revalidation, maintenance scheduling, patch proposals, or maintenance event behavior must update:

- [`../01-product/source-change-maintenance-and-living-docs.md`](../01-product/source-change-maintenance-and-living-docs.md)
- [`living-dependency-graph.md`](living-dependency-graph.md)
- [`canonical-content-and-no-drift.md`](canonical-content-and-no-drift.md)
- [`project-map-and-impact-analysis.md`](project-map-and-impact-analysis.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`product-truth-graph-and-contradiction-detection.md`](product-truth-graph-and-contradiction-detection.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- launch, readiness, routing, and implementation metadata
