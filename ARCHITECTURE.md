# Research system architecture

## Architectural style

Research begins as a modular TypeScript monolith deployed on Vercel. The web application and Hono API share one deployment and one transactional data model, while expensive or risky work is delegated to durable workflows, queues, and isolated workers.

```text
TanStack Start application
├── Chat and streaming UI
├── Document canvas
├── Source ledger and evidence viewer
├── Studio and GitHub surfaces
└── Hono API under /api
        │
        ├── Domain services and policy enforcement
        ├── AI SDK and AI Gateway
        ├── Vercel Workflows and queues
        ├── Parser, browser, research, and export workers
        └── Postgres, Blob, cache, and search indexes
```

## Domain packages

- `projects`: Project identity, membership, policy, and lifecycle.
- `chat`: conversations, messages, branches, attachments, and tool events.
- `documents`: canonical Markdown, stable blocks, revisions, patches, comments, and exports.
- `sources`: source lifecycle, immutable versions, parsing derivatives, permissions, and synchronization.
- `evidence`: evidence spans, claims, support relations, contradiction, and freshness.
- `retrieval`: lexical, vector, metadata, entity, scholarly, and code retrieval.
- `research`: research contracts, runs, tasks, budgets, approvals, and integration.
- `research-engines`: provider-neutral managed and open-source engine adapters.
- `agent-control-plane`: bounded workers, task packets, model roles, and tool policies.
- `memory`: inspectable Project memory and accepted decisions.
- `artifacts`: Studio artifact contracts and versioning.
- `github`: GitHub App connections, repository snapshots, code indexes, and contribution proposals.
- `publishing`: public/private projections and immutable publication snapshots.
- `maintenance`: source-change propagation and no-drift updates.
- `platform-api`: asynchronous public API, operations, webhooks, SSE, and MCP.
- `entitlements`, `notifications`, `product-analytics`, `governance`, and `admin`: commercial and operating systems.

## Canonical data chain

```text
External object
→ Source
→ immutable SourceVersion
→ ParsedElement
→ EvidenceSpan
→ ClaimEvidence
→ Claim
→ DocumentBlock / MemoryItem / ArtifactComponent
→ DocumentRevision / ArtifactVersion
→ PublicationSnapshot / Export
```

Raw source snapshots are immutable. Parsing, chunks, embeddings, summaries, and indexes are derived and reproducible. Citations always resolve to a source version and an exact locator.

## Persistence

- Postgres is the transactional authority.
- PostgreSQL full-text search and `pg_trgm` support lexical retrieval.
- pgvector supports semantic candidate retrieval.
- Vercel Blob stores immutable originals, snapshots, media derivatives, generated files, and exports.
- Redis is limited to locks, ephemeral caches, idempotency coordination, and rate limits.
- Durable workflow state is recorded through Vercel Workflows and mirrored into application-owned run records.

## AI boundary

The domain never depends directly on one provider model. Product roles such as `classifier`, `planner`, `extractor`, `verifier`, `writer`, `research-frontier`, and `vision-parser` resolve through a capability registry. AI Gateway supplies provider routing, fallback, usage attribution, and observability. Provider-specific features remain optional adapters.

## Workflow boundary

Long-running work uses a deterministic outer workflow with bounded agentic stages. Each stage receives an immutable task packet with source permissions, tool allowlists, budgets, schemas, and completion criteria. Agents return typed results; they do not directly mutate canonical documents, memory, publications, or repositories.

## Authorization boundary

Authorization is enforced before retrieval, reranking, model context assembly, export, publication, and connector actions. Private source content must not leak through analytics, traces, support tools, caches, or public projections.

## Deployment boundary

The first release uses one web/API deployment plus isolated workers. Services are extracted only when workload, security, residency, or scaling evidence requires it. Internal package ports preserve that option without adding premature distributed-system complexity.
