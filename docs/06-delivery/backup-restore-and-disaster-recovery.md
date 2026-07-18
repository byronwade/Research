# Backup, restore, and disaster recovery

Recovery protects the evidence chain, not only database rows. A successful restore must preserve the relationships among Projects, Sources, immutable SourceVersions, EvidenceSpans, Claims, Documents, ResearchRuns, Artifacts, Publications, ReversalRecords, CompensationPlans, ReconciliationChecks, permissions, usage records, and audit events.

## Recovery classes

| Class | Examples | Target |
|---|---|---|
| Critical metadata | authorization, Project state, document revisions, claims, evidence links, billing ledger | Lowest RPO and RTO |
| Immutable content | uploaded originals, snapshots, media derivatives, exports | Content-addressed recovery with integrity verification |
| Durable execution | workflows, queues, outbox, approvals, scheduled operations, recovery actions | Replay or resume without duplicate effects |
| Reversal and compensation | recovery capabilities, reversal records, compensation plans, reconciliation checks, irreversible acknowledgements | Preserve current recovery truth without promising impossible rollback |
| Rebuildable indexes | full-text, vectors, symbols, relationship indexes | Rebuild from authoritative versions |
| Ephemeral state | caches, locks, rate-limit counters | Recreate; never treated as authority |

Concrete production RPO and RTO values are declared before `conformance-26` and tested against realistic data volume.

## Authoritative recovery sources

- Postgres backups and point-in-time recovery for transactional authority.
- Versioned private Blob objects and object inventory for originals and immutable derivatives.
- Transactional outbox and idempotency records for event reconciliation.
- Workflow provider history and application checkpoints for in-flight work.
- Side-effect ledgers, reversal records, compensation plans, and reconciliation checks for recovery truth.
- Source-version and parser manifests for rebuilding derived elements and indexes.
- Release artifacts, migrations, configuration schemas, and feature-flag snapshots for runtime restoration.

## Backup controls

Backups are encrypted, access-controlled, region-aware, monitored, and protected from routine application credentials. Backup deletion follows a separately authorized lifecycle. Jobs report freshness, completeness, object counts, and integrity failures.

A backup is not accepted because a provider reports success. Research periodically restores it into an isolated environment and validates domain invariants.

## Restore sequence

```text
contain writes
→ select recovery point and release
→ restore transactional authority
→ restore or verify immutable objects
→ reconcile outbox, queues, and durable workflows
→ reconcile side-effect ledgers, reversal records, compensation plans, and irreversible acknowledgements
→ rebuild derived indexes
→ run tenant, evidence, citation, publication, reversal, compensation, and billing invariants
→ resume in limited mode
→ verify customer outcomes
→ reopen normal traffic
```

## Required restore checks

- organization and Project memberships remain isolated;
- source and evidence checksums match;
- document revisions resolve to existing claims and evidence;
- public snapshots contain only approved projections;
- deleted or revoked data does not reappear;
- usage and billing totals reconcile;
- in-flight operations resume or terminate once, without duplicate publication or repository writes;
- ReversalCapabilities reflect restored current state, stale recovery candidates are invalidated, irreversible acknowledgements remain auditable, and compensation plans reconcile with side-effect ledgers;
- index versions match their authoritative source-version set;
- audit continuity and incident timestamps remain intact.

## Disaster scenarios

Exercises cover accidental migration damage, primary database loss, Blob loss or corruption, queue replay, workflow-provider outage, regional unavailability, connector credential compromise, model-provider outage, cache poisoning, publication leakage, recovery replay duplication, stale ReversalCapability restoration, compensation-plan corruption, irreversible-effect label loss, and deletion-pipeline failure.

## Degraded operation

When full restoration is not immediately safe, Research can enter read-only mode, disable external actions, pause recovery replays, block compensation execution, pause ingestion, stop publication, freeze billing settlement, or serve already verified immutable content. Degraded modes are explicit, observable, and reversible.

## Exercise cadence and evidence

Component restores run regularly; complete cross-system recovery exercises run at least quarterly before general availability and after material storage, Reversal Ledger, compensation, reconciliation, or workflow changes. Each exercise records recovery point, elapsed time, data volume, release, reversal and compensation validation, failures, manual steps, unresolved risks, and follow-up owners.
