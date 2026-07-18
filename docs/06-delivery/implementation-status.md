# Implementation status

**Maturity:** implementation-ready specification
**Runtime:** not scaffolded
**Canonical branch:** `main`
**Next slice:** `foundation-01` - Monorepo and quality foundation

## Current truth

| Area | Status |
|---|---|
| Product and UX contracts | Specified |
| Architecture and domain boundaries | Specified |
| Agent entry and documentation routing | Ready |
| Implementation decision register | Specified |
| Runtime monorepo | Not implemented |
| TanStack Start application | Not implemented |
| Hono API | Not implemented |
| Authentication and Projects | Not implemented |
| Source ingestion and indexing | Not implemented |
| Persistent grounded chat | Not implemented |
| Spatial Workbench and Worksets | Specified |
| Offline/device continuity and local cache policy | Specified |
| Native companion and OS/browser integration | Specified |
| Adaptive personalization and preference learning | Specified |
| Project Health and causal repair | Specified |
| Scenario Lab and change simulation | Specified |
| Reversible Work and Project history | Specified |
| Document canvas and publishing | Not implemented |
| Deep research and agents | Not implemented |
| GitHub integration | Not implemented |
| Developer API | Not implemented |
| Delegated trust and approval-load controls | Specified |
| Production operations | Not implemented |

## First deliverable

`foundation-01` creates the repository runtime foundation. The first customer-visible milestone then proves Project creation, one PDF upload, immutable source versioning, parsing, indexing, cited Chat, editable Markdown, and persistence across refresh.

`foundation-01` owns `FND-001`, `FND-002`, and `FND-003`. Completion requires a reproducible pnpm/Turborepo workspace, TanStack Start app shell, Hono API boundary, explicit package boundaries, typed configuration, idempotent local bootstrap with deterministic provider simulators, generated-file freshness checks, strict quality gates, supply-chain checks, foundation smoke tests, and provenance evidence in CI. The concrete scaffold contract is [`foundation-runtime-scaffold.md`](../08-build/foundation-runtime-scaffold.md). A rendered shell without those controls is not the foundation deliverable. Spatial Workbench, Worksets, pane layouts, Focus continuity, Resume Digests, Focus Sessions, attention controls, device capability labels, offline-aware drafts, local cache policy, sync conflict review, native companion install/grant/capture/deep-link states, adaptive preference controls, Preference Center reset/export paths, preference explanations, Work Packets, next-action recommendations, repeated-work capture, Project Health findings, repair playbook dry-runs, safe RepairRuns, Scenario Lab cards, simulation snapshots, live-test labels, stale-plan rejection, apply candidates, Reversible Work recovery cards, reversal ledger, compensation plans, reconciliation checks, irreversible-effect labels, delegated-trust grants, approval batches, approval-load budgets, fatigue signals, and work-control telemetry remain specified behavior until `workspace-04` and dependent persistence, activity, automation, platform, analytics, security, and conformance evidence exist.

## Status discipline

A document may describe intended behavior, but it must not label that behavior as implemented. Status changes require code, tests, migration evidence, security checks, and a completion record with an exact commit.
