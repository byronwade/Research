# Data migration and backfill runbook

This runbook governs production changes to transactional schemas, canonical document formats, evidence locators, source metadata, workflow state, indexes, usage records, and other persisted contracts.

A migration is a product and operational change. Generating SQL or passing it once against an empty database is not sufficient evidence of safety.

## Change record

Every migration records:

- owner and reviewers;
- implementation slice and requirements;
- affected tables, objects, events, workflows, APIs, indexes, exports, and SDKs;
- expected data volume and growth;
- compatibility window;
- forward steps;
- rollback or restoration strategy;
- lock, I/O, replication, queue, and cost risk;
- privacy, retention, residency, and deletion impact;
- observability and abort thresholds;
- rehearsal results;
- completion and cleanup criteria.

## Expand, backfill, switch, contract

### Expand

Add compatible structures without removing or reinterpreting fields used by deployed code or in-flight workflows. New columns are nullable or have safe database-side defaults where table rewrite and lock behavior are understood. New indexes are built with an online strategy appropriate to the database.

Writers may dual-write only after idempotency, consistency, and failure behavior are defined. Readers continue to support the old representation.

### Backfill

Backfills run as resumable, idempotent, rate-limited jobs with durable checkpoints. They process bounded batches, expose progress and lag, and yield to customer traffic.

Every batch records selected range, attempted rows, changed rows, skipped rows, errors, latency, database load, and retry state. Poison records are isolated for review rather than causing unbounded retries.

Backfills preserve tenant authorization, retention, legal hold, and deletion state. They must not recreate deleted data from stale derivatives or backups.

### Verify

Verification compares old and new representations using counts, checksums, invariants, sampled semantic comparisons, tenant boundaries, and application-level reads. For documents and citations, verification includes deterministic serialization and locator resolution. For usage and billing, it includes reconciliation to immutable source events.

Material discrepancies stop progression. A global percentage alone cannot waive a severe tenant, authorization, financial, or publication discrepancy.

### Switch

Readers switch through a server-side flag or versioned capability after compatibility and backfill criteria pass. The old path remains available during an observation window. The switch has automatic and manual abort conditions.

Writers stop producing the old representation only when rollback no longer requires it or a reverse transformation is proven.

### Contract

Destructive cleanup occurs in a later release after deployed readers, in-flight workflows, export consumers, SDKs, support tools, restoration procedures, and rollback targets no longer depend on the old contract.

Contract steps require a fresh dependency search and approval. Unused-looking columns, events, and object paths may still be part of recovery or compliance procedures.

## Pre-production rehearsal

Rehearse against representative scale and data shape, including large tenants, sparse and malformed records, old schema versions, deletion tombstones, archived Projects, long documents, high-cardinality indexes, and active workflows.

Measure:

- lock acquisition and duration;
- transaction and statement time;
- WAL or replication impact;
- CPU, memory, I/O, and storage growth;
- queue and workflow lag;
- application error and latency change;
- backfill throughput and remaining duration;
- rollback and restoration duration.

A small empty fixture database is not a production-scale rehearsal.

## Deployment sequencing

The release record specifies exact order for schema expansion, application deployment, dual reads or writes, backfill start, switch, observation, cleanup, and old-code retirement.

Application versions deployed during the compatibility window tolerate both schema states. Rolling deployment, canary, rollback, and worker version skew are tested explicitly.

In-flight durable workflows are pinned to compatible step code and schemas. A deployment cannot strand paused or retrying runs with missing code or transformed state.

## Abort conditions

Abort or pause when any of the following exceed the approved threshold:

- lock wait or blocked transaction duration;
- database CPU, I/O, storage, or replication lag;
- error or latency SLO burn;
- queue age or workflow failure;
- tenant-isolation, authorization, or reconciliation discrepancy;
- unexpected row count or checksum difference;
- cost or completion-time projection;
- customer-facing degradation;
- inability to execute rollback or restore.

The operator with abort authority is named before execution.

## Rollback and forward recovery

Rollback may mean disabling a read path, reverting the application, restoring prior values, halting a backfill, or restoring from backup. Schema deletion is rarely the first rollback action.

When reversal risks greater data loss, use forward recovery with explicit incident command and customer-impact review. The release record states which transitions become irreversible and what restoration source remains available.

## Special data classes

### Documents and Markdown

Format migrations preserve stable block identity, human edits, locks, provenance, revisions, public/private projections, and deterministic export. Old revisions remain readable.

### Evidence and citations

Locator migrations preserve immutable source-version identity and map old locators to new ones with confidence and audit. Unmappable evidence becomes unresolved rather than silently pointing elsewhere.

### Search and embeddings

Index and embedding changes build a versioned parallel index. Retrieval can compare old and new versions before switching. Canonical data never depends on successful retention of a derived index.

### Usage and billing

Backfills originate from immutable usage events, use deterministic calculations, and produce reconciliation records. Corrections are append-only and customer-visible where applicable.

### Encryption

Key and ciphertext migrations are resumable, tenant-safe, and maintain decryptability through the approved transition. Key retirement occurs only after coverage verification and backup considerations.

## Completion

A migration is complete only when:

- the new contract is fully populated and verified;
- all intended readers and writers use it;
- monitoring shows a stable observation window;
- rollback or restoration state is updated;
- support and incident runbooks reflect the new contract;
- old paths and flags are removed or have a dated removal issue;
- evidence is attached to the release record;
- the implementation and documentation ledgers are updated.
