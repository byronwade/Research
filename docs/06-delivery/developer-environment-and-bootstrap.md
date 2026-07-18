# Developer environment and bootstrap

A new contributor or coding agent must be able to create a safe, reproducible local environment without access to production credentials, customer content, or undocumented operator knowledge.

This document governs `FND-001` and `FND-002`. The foundation slice is not ready if a developer can only start a page; readiness means the same pinned workspace, configuration contract, services, simulators, fixtures, migrations, and health checks work locally and in CI. The concrete app/API/package/task scaffold is defined in [`../08-build/foundation-runtime-scaffold.md`](../08-build/foundation-runtime-scaffold.md).

## Supported baseline

The repository pins the package manager, Node.js runtime range, workspace tools, database extensions, container images, and external command-line dependencies used by CI. The lockfile and tool-version files are committed. Floating `latest` versions are not part of the supported bootstrap path.

Local development targets the same architectural boundaries as production:

- TanStack Start application;
- Hono API;
- Postgres and required extensions;
- object-storage adapter;
- queue and cache adapters;
- durable-workflow development runtime;
- provider simulators or explicitly enabled development providers;
- isolated parser and execution workers.

A developer may replace managed infrastructure with compatible local adapters, but the contract and test suite remain the same.

## Bootstrap command

The finished repository shall expose one documented, non-interactive bootstrap command that:

1. verifies runtime and package-manager versions;
2. installs dependencies from the lockfile;
3. starts required local services;
4. creates an isolated local database;
5. applies migrations from zero;
6. creates object-storage buckets and local queues;
7. loads synthetic fixtures;
8. creates a local user, organization, and sample Project;
9. configures provider simulators;
10. runs health and contract checks;
11. prints the application URL and safe test credentials.

The command is idempotent. Re-running it repairs supported local state or reports a precise blocking condition.

## Configuration

`.env.example` contains names and descriptions, never working secrets. Local setup generates development-only values into an ignored file. Every variable is validated by the typed configuration contract.

Configuration is divided into:

- browser-safe public values;
- server-only internal values;
- secrets;
- encryption and signing key references;
- optional provider capabilities.

Missing optional providers disable their capabilities explicitly. They do not cause unrelated startup failures or silent fallback to production services.

## Provider simulation

Normal development and CI do not require paid model, search, email, billing, or connector calls. Simulators provide deterministic streaming, tool calls, structured outputs, embeddings, reranking, web results, webhook delivery, rate limits, retries, and failure injection.

Live-provider tests are separately labeled, budgeted, opt-in, and prevented from using production tenants. Their outputs are never committed automatically.

## Database workflow

Developers can create a database from zero, apply all migrations, seed fixtures, reset derived indexes, and verify migration status. Schema changes follow the documented expand, backfill, switch, and contract process.

Local iteration may use disposable databases, but committed changes always include forward migration, compatibility impact, rollback or restoration plan, and representative data tests.

## Source and media fixtures

The repository maintains a small, licensed synthetic corpus covering:

- simple and complex PDFs;
- images and OCR;
- Word and presentation documents;
- spreadsheets;
- HTML and captured websites;
- audio, video, and transcripts;
- Git repositories and diffs;
- malformed, oversized, encrypted, duplicate, and hostile inputs.

Fixtures include expected normalized elements and exact locators so parser and citation regressions are visible.

## Safe isolation

Local credentials cannot authenticate to production. Production hostnames and project identifiers are denied by default in development and test configuration. Connector callbacks, email, webhooks, public publication, and destructive operations target local sinks or explicit sandboxes.

The bootstrap process never downloads customer data. Reproduction of a customer issue uses a sanitized support bundle with explicit approval and expiry.

## Development modes

The supported modes are:

- offline mode using deterministic provider simulators;
- integration mode using local infrastructure and selected sandbox providers;
- UI mode using fixture APIs for rapid component work;
- worker mode for parser, indexing, workflow, and queue development;
- live-provider qualification mode with explicit budgets and audit records.

Each mode declares which capabilities are real, simulated, or unavailable.

## Common commands

The implemented repository shall provide commands for:

- development server;
- unit and integration tests;
- browser tests;
- AI and retrieval evaluations;
- type, lint, boundary, and dead-code checks;
- migration create, apply, verify, and reset;
- fixture import;
- index rebuild;
- worker execution;
- local webhook replay;
- agent status and context;
- complete pre-push validation.

## Troubleshooting

Bootstrap failures identify the failed dependency, observed version or state, expected state, and recovery command. Runbooks cover port conflicts, container health, migration drift, stale generated contracts, expired local OIDC credentials, parser dependencies, and corrupted fixture state.

Deleting the local environment must be safe and complete. The repository documents which directories, volumes, databases, buckets, and credentials are removed.

## Definition of ready

A development environment is ready only when the sample Project can upload a fixture source, complete ingestion, retrieve evidence, stream a simulated cited response, persist a document revision, and pass tenant-isolation checks. A page that merely renders is not a successful bootstrap.
