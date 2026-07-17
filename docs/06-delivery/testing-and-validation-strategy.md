# Testing and validation strategy

Research treats testing as release evidence, not as a single CI command. Every implementation slice defines the smallest executable proof that its product, data, authorization, AI, operational, and compatibility contracts hold.

## Test layers

### Static and structural checks

Run formatting, linting, strict TypeScript, unused-code detection, dependency-boundary checks, generated-contract drift checks, lockfile validation, secret scanning, workflow pinning, license policy, and documentation routing on every pull request.

Static checks are necessary but never sufficient evidence that a user journey works.

### Unit tests

Unit tests cover pure domain policy, state transitions, schema validation, permission decisions, billing calculations, content normalization, locator conversion, retry classification, budget accounting, and deterministic document transformations.

Tests use explicit clocks, identifiers, random seeds, model fixtures, and provider responses. Hidden dependence on wall-clock time, global process state, network access, or execution order is prohibited.

### Integration tests

Integration tests run against real Postgres, object storage adapters, queues, caches, and local provider simulators where practical. They prove transaction boundaries, outbox delivery, idempotency, row-level authorization, migrations, derived-index rebuilds, webhook verification, and cleanup behavior.

Mocks may isolate a provider boundary. They must not replace the database, permission system, or persistence layer in tests whose purpose is to verify those systems.

### Contract tests

Contract tests verify Hono routes, OpenAPI schemas, events, webhooks, workflow inputs and outputs, source adapters, parser adapters, research-engine adapters, generated SDKs, MCP resources, and stored document formats.

Consumer and provider versions are tested across the documented compatibility window. A schema change cannot merge until old readers, old in-flight workflows, and rollback targets are accounted for.

### Browser and journey tests

Playwright tests exercise representative user journeys through the real application boundary:

- create and reopen a Project;
- upload, inspect, exclude, restore, and delete a source;
- ask a grounded question and open an exact citation;
- edit a generated Markdown document and review an AI patch;
- interrupt and resume a Research Run;
- publish and withdraw a public projection;
- revoke a collaborator or connector and confirm access disappears;
- recover from refresh, disconnection, provider failure, and stale versions;
- use keyboard-only and screen-reader-critical paths.

The browser suite runs against preview or integration environments with isolated synthetic tenants. Production customer data is never copied into test fixtures.

### AI and retrieval evaluation

AI behavior is tested with versioned datasets rather than ad hoc prompt inspection. Evaluation sets cover retrieval recall, citation entailment, attribution, unsupported claims, contradiction handling, source independence, long-form consistency, tool selection, refusal behavior, prompt injection, cost, and latency.

Model output is probabilistic. Release gates therefore define confidence intervals, repeated trials where needed, deterministic fixtures for non-model logic, and explicit variance budgets. A model or prompt change cannot be accepted solely because a small sample looks better.

### Security tests

Security tests include tenant-isolation matrices, object-level authorization, session and CSRF behavior, CORS and CSP, signed webhooks, upload validation, archive expansion, parser isolation, SSRF, IDOR, cache partitioning, prompt injection, tool escalation, excessive agency, denial of wallet, secret exposure, and deletion propagation.

High-risk negative tests are release blockers and run against every affected boundary.

### Performance, resilience, and recovery tests

Load tests use representative source sizes, concurrent tenants, Research Run shapes, model latencies, connector rates, and document lengths. They verify SLOs, queue age, fairness, backpressure, admission control, cost ceilings, and degraded modes.

Resilience tests inject provider timeouts, partial streams, duplicate events, worker termination, deployment during active workflows, database failover, object-store errors, and webhook redelivery. Restore exercises prove that backups are application-readable and preserve tenant boundaries and evidence traceability.

## Test data

Fixtures are synthetic, licensed for testing, or explicitly approved. Each fixture records classification, owner, retention, and permitted environments. Secrets and real customer content are forbidden in source control, snapshots, screenshots, traces, and recorded model conversations.

Golden files are reviewed like code. They include schema versions and intentional update commands so broad snapshot replacement cannot hide regressions.

## Flake policy

A failing test is not retried until green and forgotten. Flakes are classified, assigned, and measured. Quarantining a test requires an owner, issue, expiration date, and a compensating release control. Security, authorization, migration, billing, and deletion tests may not be silently quarantined.

## Pull-request evidence

Every pull request identifies:

- the implementation slice and requirements changed;
- tests added or updated;
- migration and rollback impact;
- authorization and privacy impact;
- observability added;
- performance or cost impact;
- generated contract changes;
- manual validation that remains necessary.

## Release evidence

The release record links the exact source commit and artifact digest to static checks, unit and integration results, browser journeys, AI evaluations, security tests, load results, migration rehearsal, restore exercise, canary observations, approvals, and known accepted risks.

Passing tests establish only the behavior they cover. Unmeasured behavior remains unverified and must not be represented as production-ready.
