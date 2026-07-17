# Data retention, deletion, and portability

Research treats deletion and export as domain workflows over an evidence graph, not as one database statement or a ZIP of unrelated files.

## Data classification

Every stored object declares organization, Project, data class, sensitivity, authority, source, retention policy, legal hold state, residency, and deletion behavior. Derived data inherits the most restrictive applicable policy unless a reviewed rule proves otherwise.

Classes include account and membership data, source originals, immutable SourceVersions, parsed derivatives, indexes, Claims and EvidenceSpans, messages, Documents, Artifacts, ResearchRuns, connector credentials, publications, usage/billing records, operational telemetry, and audit evidence.

## Retention policy

Retention can be set by product default, organization policy, Project policy, contract, source rights, or legal obligation. Conflicts resolve to the most restrictive policy that remains legally and operationally valid. Policy decisions are versioned and attributable.

Expired data enters a deletion workflow. It is not merely hidden from the interface.

## Deletion workflow

```text
request or policy expiry
→ authorize and classify scope
→ place tombstone and block new use
→ revoke connector and model access
→ cancel or isolate affected Operations
→ delete authoritative content and credentials
→ delete or invalidate derivatives and indexes
→ update claims, documents, memory, artifacts, and publications
→ propagate to backups according to policy
→ verify absence and record evidence
```

Deletion is idempotent and resumable. Failures remain visible until reconciled.

## Evidence and document consequences

When evidence is deleted or access is revoked, dependent Claims become unavailable, stale, or unsupported. Documents and publications do not silently retain private quoted text. The maintenance system proposes safe redaction, withdrawal, or replacement while preserving only the audit metadata permitted by policy.

## Backups and legal holds

Backup retention is separately declared. Deleted data may remain in encrypted, access-restricted backups until expiry, but cannot return to active service during restore. Restore procedures reapply tombstones before reopening traffic.

Legal holds suspend applicable deletion while remaining narrowly scoped, authorized, logged, reviewable, and reversible. A hold cannot become ambient access for support or administrators.

## Project export

A portable Project bundle includes:

- manifest and schema version;
- canonical Markdown and revision history;
- source metadata and authorized originals or references;
- SourceVersion checksums and locators;
- Claims, EvidenceSpans, citations, and contradiction state;
- ResearchRun plans and results allowed by policy;
- artifact specifications and exports;
- memory items and decisions;
- membership and permission mappings suitable for review;
- audit and usage summaries permitted for export.

Secrets, provider tokens, internal service credentials, and non-portable third-party data are excluded or represented as reauthorization requirements.

## Restore and migration

Import validates checksums, schema compatibility, rights, malware, quotas, identifiers, and permissions before activation. Conflicts are reviewed rather than silently overwritten. Imported derived data is either verified against originals or rebuilt.

## User transparency

Users can see retention state, pending deletion, export progress, excluded material, failed propagation, and completion evidence. Product interfaces never imply immediate physical erasure when backup or legal constraints require a documented delay.
