# Foundation runtime scaffold

This build blueprint turns `foundation-01` from "create the app" into a concrete runtime contract. It is not implementation evidence. It defines the minimum repository shape, commands, gates, and exit criteria that must exist before any customer-visible workflow can begin.

## Authority

This document expands:

- `FND-001` for the reproducible pnpm and Turborepo workspace;
- `FND-002` for non-interactive local bootstrap and deterministic simulators;
- `FND-003` for repeatable quality, supply-chain, and provenance gates.

It sits below product, architecture, security, and delivery contracts. If this blueprint conflicts with those contracts, correct the governing contract first.

## Source basis

The foundation scaffold references current primary documentation reviewed on 2026-07-18:

- TanStack Start React setup for Vite, the Start Vite plugin, Router integration, generated route tree, router setup, and client/server entry files;
- Hono TypeScript guidance for portable `fetch` handlers, chained route composition, middleware variable typing, and request validation;
- Turborepo guidance for task graphs, dependency-aware package tasks, cacheable build/type/lint/test tasks, non-cached persistent dev tasks, and pnpm-based CI.

These references do not override Research contracts. They only shape the initial app, API, and task runner wiring.

## Target repository shape

`foundation-01` creates the smallest runtime that can carry the later product slices without a second authority:

```text
apps/
  web/
    src/
      routes/
      api/
      client.tsx
      router.tsx
      routeTree.gen.ts
      server.tsx
    vite.config.ts
packages/
  config/
  contracts/
  domain/
  observability/
  simulators/
  testing/
  ui/
tooling/
  typescript/
  scripts/
```

The exact package names may change only if the same package boundaries remain explicit. A single application package is acceptable, but domain, configuration, contract, simulator, testing, and UI ownership must not collapse into framework-local files.

## Root workspace contract

The root workspace is complete only when it includes:

- `packageManager` pinned to the supported pnpm version;
- `engines.node` aligned with local and CI setup;
- `pnpm-workspace.yaml` with explicit app, package, and tooling globs;
- committed lockfile generated from a clean install;
- `turbo.json` with dependency-aware `build`, `typecheck`, `lint`, `test`, `test:integration`, `test:e2e`, `docs:check`, `check`, and `dev` task definitions;
- shared TypeScript configuration with strict mode, project references or equivalent package boundary checks, and no implicit `any`;
- import boundary checks that prevent app packages from bypassing domain, contract, configuration, simulator, and policy packages;
- root commands that are the same commands CI runs.

The root `check` command must include documentation validation. Runtime code cannot be considered ready while docs routing or requirement ownership is broken.

## TanStack Start application

`apps/web` owns the browser and server application shell. The foundation slice wires only a minimal shell, health route, and typed integration points. It must include:

- TanStack Start and React Router dependencies installed through pnpm;
- Vite configuration with the TanStack Start plugin and React plugin in the documented order;
- generated route tree committed or generated through a deterministic command, with stale generated files detected in CI;
- `router.tsx`, client entry, and server entry files;
- a root route that renders the implementation status honestly as a scaffold, not a working product;
- app-level error boundary, not-found route, and accessibility-friendly document shell;
- server-side access to shared configuration and observability without importing browser-only modules;
- no customer data, live providers, or production credentials.

The shell may display the current next slice and health status, but it must not imply Project creation, upload, retrieval, Chat, Documents, Sources, Worksets, or automation are implemented before their owner slices complete.

## Hono API boundary

The API boundary is mounted under `/api` and remains framework-adapter code over domain packages. Foundation wiring must include:

- a Hono app exported through a portable fetch handler;
- versioned route grouping, starting with health, readiness, build metadata, and simulator status endpoints;
- route composition that preserves TypeScript inference for future generated clients;
- middleware for request IDs, operation IDs where applicable, timing, structured error responses, and content limits;
- typed validation for params, query, headers, and JSON bodies;
- no direct database, provider, source, or document mutation until those owning slices exist;
- stable API error shape aligned with [`../07-reference/api-error-operation-and-pagination-contract.md`](../07-reference/api-error-operation-and-pagination-contract.md).

Every route added during foundation must be testable without live external services.

## Package boundaries

Foundation packages establish ownership before product code expands:

| Package | Initial responsibility |
|---|---|
| `config` | Typed environment parsing, public/server/secret separation, safe local defaults, and production-hostname denial in development. |
| `contracts` | Shared request, response, event, operation, health, and simulator schemas. |
| `domain` | Pure domain primitives and invariant tests that do not import framework code. |
| `observability` | Request logging, timing, redaction helpers, and testable telemetry envelopes. |
| `simulators` | Deterministic model, search, email, billing, connector, object-store, queue, and workflow simulator contracts used by later slices. |
| `testing` | Fixtures, test utilities, MSW handlers, browser-test helpers, accessibility helpers, and fake clock helpers. |
| `ui` | Source-owned UI primitives, tokens, shadcn/Radix wrappers, and accessibility patterns without product authority. |

Application code may import packages. Domain packages must not import app code, provider SDKs, browser globals, or framework-specific routing.

## Deterministic simulators

`foundation-01` does not need full provider behavior, but it must create the simulator pattern so later slices do not require live services for ordinary development and CI. The simulator registry records:

- simulator name and version;
- supported capabilities;
- deterministic fixture inputs and outputs;
- failure injection modes;
- latency controls;
- audit/event envelopes;
- redaction behavior;
- live-provider opt-in boundary.

Any future live-provider test must be explicit, budgeted, non-default, and prevented from using production tenants.

## Bootstrap command

The foundation bootstrap command must be non-interactive and idempotent. It verifies or creates:

1. Node and pnpm versions.
2. Dependency install from lockfile.
3. Local ignored environment file from `.env.example`.
4. Typed configuration validation.
5. Local service availability or documented simulator fallback.
6. Synthetic fixture availability.
7. Health, readiness, and simulator status endpoints.
8. Unit, type, lint, docs, and boundary checks.
9. A printed local URL and explicitly safe test credentials only when identity simulation exists.

Failures must identify the observed state, expected state, and recovery command. A bootstrap that leaves the app partially running without a failing exit code is not acceptable.

## Turbo tasks and CI

The first CI workflow must run the same command graph a developer can run locally. Minimum gates:

- frozen pnpm install from the lockfile;
- generated-file freshness checks;
- `docs:check`;
- typecheck across all packages;
- lint or Biome checks;
- unit tests;
- package-boundary checks;
- dependency and lockfile integrity checks;
- secret scanning;
- license and vulnerability policy checks;
- build;
- foundation smoke test against the local app and Hono health routes;
- provenance or artifact metadata capture.

`dev` tasks are persistent and not cached. Build, type, lint, docs, and test tasks declare inputs and outputs so cache hits cannot hide stale configuration, generated contracts, or environment-dependent behavior.

## Required files before completion

`foundation-01` is incomplete unless the repository contains, at minimum:

- root workspace files and committed lockfile;
- app package with TanStack Start route/server/client wiring;
- Hono API module and tests;
- shared package manifests and TypeScript configs;
- `.env.example` with descriptions and no secrets;
- bootstrap script and cleanup/reset guidance;
- CI workflow;
- supply-chain policy commands;
- minimal fixtures and simulator registry;
- implementation-status update that names the exact commit and validation commands.

## Non-goals

The foundation slice must not implement:

- real authentication or organization membership;
- durable Project persistence;
- real source upload, parsing, retrieval, Chat, document editing, publication, billing, notification, connector, or automation behavior;
- live model or search provider calls by default;
- broad UI polish beyond accessible shell, status, and health surfaces;
- optional native companion, browser extension, offline sync, Worksets, Project Atlas, Scenario Lab, or Project Health runtime behavior.

Those surfaces remain specified until their owner slices provide runtime evidence.

## Completion evidence

The foundation completion record must include:

- exact commit;
- Node, pnpm, and lockfile identifiers;
- commands run locally and in CI;
- generated-file freshness result;
- docs validation result;
- type, lint, test, build, boundary, and smoke-test results;
- supply-chain, secret, license, vulnerability, and provenance results;
- bootstrap run and rerun evidence;
- known limitations and next slice handoff notes.

## Documentation update rule

Changes to the foundation scaffold, app/API/package boundaries, bootstrap contract, simulator policy, root commands, Turbo tasks, or CI gates must update:

- [`../06-delivery/developer-environment-and-bootstrap.md`](../06-delivery/developer-environment-and-bootstrap.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../05-security/secure-software-supply-chain.md`](../05-security/secure-software-supply-chain.md)
- [`../06-delivery/implementation-status.md`](../06-delivery/implementation-status.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
