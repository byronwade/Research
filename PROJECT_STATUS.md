# Research project status

**Repository:** `byronwade/Research`
**Maturity:** implementation-ready specification
**Runtime:** not scaffolded
**Canonical branch:** `main`
**Next implementation slice:** `foundation-01` — Monorepo and quality foundation

Research is currently a fully organized, machine-validated product and architecture specification. It is not yet a working application. The repository defines the product, source and evidence model, source-quality controls for public and customer signals, specification-mode signal decision ledger, frontier feature watch and novelty-control gates, user-research segment and screener controls, user-opinion research coverage matrix, user-opinion coding and synthesis controls, telemetry and experience instrumentation matrix, customer-facing claim evidence boundaries, human-AI interaction review gates for AI and automation UX, product-outcome metrics for strategic bets, advanced differentiation benchmark controls, AI control plane, research workflows, document system, source-change maintenance and living-doc controls, automation registry, dry-run review and run-debugger controls, automation failure recovery and learning-loop controls, device continuity and local-cache policy, optional native companion and OS/browser adapter policy, adaptive personalization and preference learning controls, GitHub integration, public/private publishing, developer API, security posture, commercial operations, and a dependency-controlled build sequence.

## Current implementation truth

| Area | Status |
|---|---|
| Product and UX contracts | Complete specification |
| Architecture and domain boundaries | Complete specification |
| Canonical requirements | 124 requirements, each with one primary implementation owner |
| Implementation plan | 26 dependency-controlled slices |
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
5. [`docs/06-delivery/implementation-plan.md`](docs/06-delivery/implementation-plan.md)

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
