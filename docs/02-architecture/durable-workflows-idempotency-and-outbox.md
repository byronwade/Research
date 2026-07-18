# Durable workflows, idempotency, and the transactional outbox

Research performs long-running work across Postgres, Blob, queues, model providers, connectors, GitHub, notifications, exports, and publication. Correctness requires explicit durable state and side-effect ownership; an HTTP request is never the authoritative lifetime of that work.

## Operation model

Every material asynchronous command creates an addressable `Operation` before external work begins.

```text
Operation
├── id and idempotency key
├── organization and project
├── initiating actor and authorization snapshot
├── command type and validated input hash
├── state and progress sequence
├── workflow identity and version
├── budget and capability references
├── result resources
├── error and retry classification
└── created, started, completed, cancelled timestamps
```

Stable terminal states are `succeeded`, `failed`, `cancelled`, and `expired`. Non-terminal states include `accepted`, `running`, `waiting_for_approval`, `waiting_for_external_event`, `paused`, and `cancelling`.

## Transactional command boundary

A domain command that changes authoritative state writes, in one Postgres transaction:

1. domain rows and version checks;
2. an audit event;
3. an Operation or job record where needed;
4. a transactional outbox event;
5. idempotency and deduplication state.

A dispatcher publishes committed outbox rows to the durable workflow or queue. Publication failure cannot lose the command; replay cannot duplicate its logical effect.

## Idempotency

Mutation clients provide an idempotency key within a documented scope and retention window. The server stores actor, route or command, normalized input hash, result resource, status, and expiry.

- Same key and same semantic input returns the original result.
- Same key and different input is rejected.
- Retries after unknown network outcomes are safe.
- Provider idempotency keys are derived from internal operation and step identity, not arbitrary user text.
- Database uniqueness and state transitions enforce the invariant; application memory does not.

## Workflow and step rules

Each workflow has a stable type, schema version, compatibility policy, and step graph. A step:

- receives immutable validated input or a durable reference;
- declares allowed tools and external systems;
- records attempts, start, finish, output hash, usage, and errors;
- is idempotent or has an explicit compensation/reconciliation strategy;
- separates computation from irreversible side effects;
- persists progress before emitting client events;
- supports cancellation at safe boundaries;
- never assumes exactly-once message delivery.

## Side-effect ledger

External writes such as email, notification, publication, connector mutation, GitHub branch/commit/PR creation, billing settlement, and webhook delivery use a side-effect ledger keyed by Operation, step, target, and semantic effect. The ledger records requested, reserved, sent, acknowledged, reconciled, reversed, compensated, superseded, irreversible, or permanently failed state.

A step checks the ledger and external target before retrying an uncertain outcome. “The previous call timed out” is not proof that the effect did not happen.

Side-effect rows feed the reversal ledger defined in [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md). A workflow can declare that an effect supports direct reversal, withdrawal, compensation, reconciliation, or no recovery, but the owning mutation service still revalidates current state before any recovery action runs.

## Inbox and webhook processing

External events enter through an inbox table containing provider, installation or endpoint, external event ID, signature state, received time, payload hash, delivery attempt, and processing state. Unique constraints deduplicate replay. Processing occurs after signature, timestamp, schema, authorization, and resource checks.

Out-of-order events are reconciled against current provider state rather than blindly applied in arrival order.

## Progress streams

Progress is a persisted ordered event log, not only an in-memory stream. Clients reconnect using the last observed sequence or event ID. Events are compact, redacted, and stable enough for browser, SDK, CLI, and webhook consumers.

The event log distinguishes user-visible progress from internal logs and model reasoning. Private source content and hidden reasoning are never required to resume a stream.

Operation progress events feed the Project activity event spine defined in [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md) and the Progressive Delivery envelopes defined in [`progressive-delivery-and-fast-path-cache-policy.md`](progressive-delivery-and-fast-path-cache-policy.md). Workflow logs, provider traces, and raw telemetry cannot substitute for activity events because they do not carry the same Project authorization, redaction, review, and replay semantics.

## Retries and failure classes

- **Transient:** rate limit, timeout, temporary provider or network failure; exponential backoff with jitter and budget.
- **Content or input:** malformed file, unsupported type, invalid request; no blind retry.
- **Authorization:** permission loss, expired capability, revoked connector; pause or fail closed.
- **Budget:** token, cost, time, result-size, or concurrency limit; produce partial state where safe and request approval.
- **Invariant:** duplicate publication, missing source version, stale document base, cross-tenant reference; stop and alert.
- **Permanent provider:** unsupported capability, deleted external object; reconcile and surface an actionable result.

## Cancellation

Cancellation is a durable request. The workflow stops new work, attempts provider cancellation where supported, revokes unused capabilities, reconciles side effects, records recovery eligibility where applicable, persists useful Partial Results with explicit status, emits cancellation acknowledgement, and reaches a terminal state. Cancellation cannot roll back immutable research already used by an approved document revision; later maintenance or Reversible Work handles that dependency.

## Versioning

Workflow code changes follow `schema-contract-and-data-evolution.md`. In-flight runs continue with compatible code or migrate at explicit checkpoints. Deploying new code cannot reinterpret old serialized state silently.

## Verification

Tests cover duplicate submits, worker crash after commit, dispatcher replay, provider timeout after success, out-of-order webhook, workflow deployment during execution, cancellation at every boundary, permission revocation, stale approval, exhausted budget, dead-letter replay, side-effect compensation, irreversible-effect labeling, reversal-ledger handoff, and reconciliation after regional recovery.

Official implementation references include Vercel Workflow documentation and the application’s API Operation contract; provider-specific durability is never assumed to replace application-owned state.
