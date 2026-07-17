---
id: architecture-schema-contract-data-evolution
title: Schema, contract, and data evolution
status: accepted
owner: architecture
last_reviewed: 2026-07-17
---

# Schema, contract, and data evolution

## Purpose

Research contains long-lived Projects, immutable SourceVersions, evidence locators, Claims, Documents, Artifacts, ResearchRuns, workflow histories, public snapshots, API clients, and connectors. These objects will outlive individual deployments. This contract defines how their schemas evolve without losing meaning, provenance, authorization, or recoverability.

## Compatibility model

Every persisted or externally observed contract is versioned independently:

- Postgres schema and migration history;
- public and internal API schemas;
- domain and integration events;
- durable workflow definitions and step payloads;
- canonical Markdown/block and artifact schemas;
- parser `ParsedElement` and `EvidenceSpan` locator schemas;
- search/index documents and embedding profiles;
- Project export/import bundles;
- public publication manifests;
- model-tool schemas and Research Engine adapter receipts;
- TypeScript and Python SDKs.

Version numbers are not substitutes for compatibility rules. Each change is classified as additive-compatible, behavior-compatible, deprecating, migration-required, or breaking.

## Golden rules

1. Existing stored data must remain readable until a verified migration completes.
2. In-flight durable workflows must finish under their original definition or pass an explicit version transition.
3. Published citations must continue resolving to the exact historical SourceVersion and locator.
4. Public snapshots and exports are immutable historical facts; new readers may adapt, but old output is not rewritten silently.
5. Authorization and tenant boundaries are enforced by every old and new schema path during transition.
6. A schema migration may not erase provenance needed to explain a Claim, document revision, usage charge, approval, deletion, or support action.
7. Derived indexes may be rebuilt; canonical records may not be reconstructed from lossy derivatives.

## Database evolution

Database changes use timestamped, immutable migration files and a schema history table. Migrations record source commit, tool version, checksum, operator or workflow identity, start/end time, affected rows, and result.

The default production pattern is expand/backfill/switch/contract:

- add nullable columns, new tables, indexes, or dual-write targets;
- deploy code that tolerates both old and new representations;
- backfill in bounded, resumable, idempotent batches;
- verify row counts, checksums, tenant distribution, foreign keys, and sampled semantic equality;
- switch reads and writes using an audited rollout control;
- observe for at least one release window;
- remove old writers and later contract obsolete storage.

Large indexes and constraints use online or low-lock strategies where supported. Migration plans include lock expectations, statement and transaction timeouts, replication impact, disk growth, rollback/forward-fix, and the maximum safe batch size.

## API compatibility

The public API is additive by default. New optional fields and endpoints may be added without a major version when clients can ignore them safely. The following require deprecation or a new version:

- removing or renaming a field or operation;
- changing a field’s meaning, type, nullability, units, authorization, or ordering guarantee;
- changing error semantics, idempotency, pagination, webhook signature, or event delivery behavior;
- broadening data exposure or required scopes;
- changing an asynchronous operation into an untracked synchronous effect.

Deprecations publish an announcement, replacement, telemetry-based usage view, minimum support window, and final removal date. SDKs expose deprecation warnings without logging customer content.

## Events and outbox evolution

Events are immutable facts. Consumers must tolerate unknown additive fields. Event envelopes contain stable event name, schema version, event ID, aggregate/project/tenant identity, occurred time, causation, correlation, producer version, and payload hash.

A breaking event change creates a new event name or major schema version and runs dual publication during migration. Consumers declare supported versions. Replaying old events must not execute a newly introduced external side effect unless idempotency and authorization are re-evaluated.

## Durable workflow evolution

Workflow definitions are versioned and addressable. A deployment may not remove code required by non-terminal runs. Each run records workflow version, step schema versions, model/tool policy snapshot, and migration status.

Allowed strategies are:

- keep old workflow implementation until all runs terminate;
- route old runs to a compatibility worker;
- pause and migrate at a declared safe checkpoint;
- cancel truthfully and start a new linked run with user approval where semantics changed.

Silently replaying a changed workflow from the beginning is prohibited when it could duplicate research spend, notifications, repository writes, publications, or billing.

## Documents and artifacts

Canonical block and artifact schema changes ship with deterministic readers, writers, migration fixtures, and round-trip tests. A migration records original bytes/JSON, target version, tool version, warnings, and hash. Unknown blocks are preserved losslessly or cause an explicit unsupported state; they are never dropped silently.

Document revisions remain immutable. Migration creates a linked system revision or a derived read projection rather than mutating historical revisions in place. User-authored text, stable block IDs, citations, comments, approvals, and dependency edges must survive.

## Evidence and locator evolution

A locator schema change must preserve the historical locator and add a mapped locator or resolver version. Re-parsing cannot rewrite what a prior model saw. New extraction may create a new derivative and EvidenceSpan version linked to the same SourceVersion.

Migration quality is measured separately for text, page/line/time/cell/repository navigation, quote alignment, and citation activation. Failed mappings mark dependent Claims for review instead of fabricating a location.

## Search and embeddings

Every index record includes index schema version, chunker/parser profile, embedding model and dimensions, tokenizer, source/evidence IDs, authorization fields, and content hash. Reindexing occurs into a parallel generation. Read traffic switches only after:

- expected document and tenant counts match;
- authorization parity passes;
- retrieval and citation benchmarks pass;
- freshness lag is within target;
- a rollback pointer to the prior generation exists.

Embedding vectors are derived and may be rebuilt. Their removal must not remove canonical text or evidence.

## Imports, exports, and publications

Project bundles and publication manifests declare schema versions and checksums. Importers support a documented range and perform preflight without mutating the destination. Unsupported future versions fail clearly. Older bundles are upgraded through sequential, tested migrations.

Public snapshots never depend on mutable runtime schemas for interpretation; they preserve a manifest, render version, canonical revision, policy snapshot, and cited public evidence representations.

## Migration verification

Every non-trivial migration includes:

- representative fixtures, including large, multilingual, private, deleted, held, and malformed records;
- dry-run and impact report;
- backup or recoverable source state;
- idempotency and resume tests;
- old/new reader compatibility tests;
- tenant, authorization, and privacy tests;
- data count and semantic reconciliation;
- performance and lock measurements;
- operational dashboard and abort thresholds;
- post-migration audit record.

## Definition of done

Contract evolution is production-ready when the product can deploy old and new code concurrently, resume in-flight work, preserve historical evidence and documents, migrate canonical data without loss, rebuild derivatives, detect incompatibility before customer impact, and explain every transformation from immutable records.
