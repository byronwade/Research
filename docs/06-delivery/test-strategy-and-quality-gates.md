# Test strategy and quality gates

Research tests domain invariants, authorization, evidence quality, durable behavior, and user outcomes. A large unit-test count does not compensate for missing tenant, migration, retrieval, or recovery evidence.

## Test layers

### Static and structural

- strict TypeScript and schema validation;
- formatting, linting, dependency and package-boundary checks;
- dead-code and unused-export checks;
- lockfile, license, vulnerability, secret, and workflow-policy checks;
- documentation routes, requirement ownership, and migration metadata.

### Unit and property tests

Use deterministic tests for pure domain rules, parsers, locators, policy evaluation, patch operations, usage calculation, serialization, and state transitions. Property tests cover idempotency, deterministic Markdown, content hashing, permission monotonicity, and patch/revision round trips.

### Database and authorization

Run real Postgres tests for constraints, transactions, row ownership, outbox behavior, concurrency, migrations, and query plans. Negative tests must attempt cross-tenant reads, writes, search, caching, exports, publications, connector access, and administrative operations.

### Contract and integration

- Hono/OpenAPI requests and generated clients;
- events, webhooks, retries, signatures, and idempotency;
- parser and connector adapters through recorded fixtures;
- AI Gateway provider routes and normalized tool events;
- workflow pause, retry, resume, cancellation, deployment change, and version compatibility;
- Blob, queue, search, and Sandbox boundaries.

### Retrieval and research evaluation

Evaluation sets label relevant evidence, exact support spans, contradictions, freshness, and expected abstention. Track retrieval recall, reranking quality, citation entailment, citation attribution, unsupported claims, contradiction discovery, source independence, document coherence, and cost.

Model or prompt changes cannot rely only on an LLM judge. Use deterministic checks, human-reviewed fixtures, adversarial cases, and model-independent evidence validation.

### End-to-end journeys

Browser and API suites cover Project creation, upload, parse, search, cited Chat, document patching, research progress, reconnect, public/private projection, export, connector revocation, GitHub draft PR, deletion, and restore.

### Non-functional tests

- accessibility and keyboard behavior;
- internationalization, Unicode, locale, and RTL;
- load, soak, spike, fairness, backpressure, and degraded providers;
- security, prompt injection, SSRF, upload bombs, webhook replay, and unsafe tool requests;
- backup restore, rollback, regional degradation, and billing reconciliation.

## Test data

Fixtures are synthetic or explicitly licensed, versioned, deterministic, and isolated by organization. Sensitive production content is not copied into routine test systems. Large-corpus fixtures include PDFs, Office documents, images, audio, video, websites, repositories, spreadsheets, contradictory sources, malicious instructions, and evolving source versions.

## Pull-request gates

A normal slice requires documentation/agent checks, typecheck, lint, unit tests, relevant integration tests, migration checks, dependency review, and changed-path security tests. Affected package boundaries determine additional suites.

## Release gates

A release candidate adds full conformance, migration compatibility, load and capacity, security, accessibility, restore, rollback, canary, and operational-readiness evidence. Waivers require owner, reason, compensating control, expiry, and follow-up issue. Security and tenant-isolation blockers cannot be waived for general availability.

## Flake policy

A flaky test is a defect. Quarantine is time-bounded, owned, visible, and excluded from passing evidence. Retrying until green does not establish correctness.

## Evidence retention

Store test identity, code and fixture versions, environment, artifact digest, configuration, model/provider versions where relevant, results, logs, traces, and approvals. Release evidence must be reproducible and attributable.
