# Research project status

**Repository:** `byronwade/Research`  
**Maturity:** implementation-ready specification  
**Runtime:** not scaffolded  
**Canonical branch:** `main`  
**Next implementation slice:** `foundation-01` — Monorepo and quality foundation

Research is currently a fully organized, machine-validated product and architecture specification. It is not yet a working application. The repository defines the product, source and evidence model, AI control plane, research workflows, document system, GitHub integration, public/private publishing, developer API, security posture, commercial operations, and a dependency-controlled build sequence.

## Current implementation truth

| Area | Status |
|---|---|
| Product and UX contracts | Complete specification |
| Architecture and domain boundaries | Complete specification |
| Canonical requirements | 295 requirements, each with one primary implementation owner |
| Implementation plan | 55 dependency-controlled slices |
| Agent entry and routing | Ready |
| Runtime monorepo | Not scaffolded |
| TanStack Start application | Not implemented |
| Hono API | Not implemented |
| Source ingestion and indexing | Not implemented |
| Research engines and agents | Not implemented |
| Document canvas and publishing | Not implemented |
| Production operations | Not implemented |

## Start here

Humans should read:

1. [`README.md`](README.md)
2. [`REPOSITORY_GUIDE.md`](REPOSITORY_GUIDE.md)
3. [`docs/START-HERE.md`](docs/START-HERE.md)
4. [`docs/00-foundation/product-brief.md`](docs/00-foundation/product-brief.md)
5. [`docs/08-blueprint/implementation-backlog.md`](docs/08-blueprint/implementation-backlog.md)

Coding agents must begin with:

1. [`AGENTS.md`](AGENTS.md)
2. [`docs/START-HERE.md`](docs/START-HERE.md)
3. `node scripts/agent-status.mjs`
4. `node scripts/agent-context.mjs`

## Required first build

Do not start with connector breadth, multi-agent complexity, or dozens of artifact types. Implement `foundation-01`, then prove the narrow grounded-research path:

```text
Create Project
→ upload one PDF
→ parse and index it
→ ask a question
→ retrieve exact evidence
→ stream a cited answer
→ save an editable Markdown document
→ reopen it after refresh
```

## Status changes

A slice may move to `complete` only when its dependency checks pass and an append-only completion record contains the exact commit, pull request when applicable, and validation evidence. Product documentation must never describe a capability as implemented before the runtime and release evidence support that statement.
