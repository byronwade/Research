# Events, webhooks, and delivery idempotency

Domain events describe committed facts. Commands request change. Progress events describe an Operation. Webhooks deliver selected public event envelopes to an authorized external endpoint. These concepts use related infrastructure but are not interchangeable.

## Event envelope

```json
{
  "id": "evt_01H...",
  "type": "research_run.completed",
  "version": 1,
  "occurred_at": "2026-07-17T12:00:00Z",
  "recorded_at": "2026-07-17T12:00:00.100Z",
  "organization_id": "org_123",
  "project_id": "proj_123",
  "actor": {
    "type": "user",
    "id": "usr_123"
  },
  "resource": {
    "type": "research_run",
    "id": "run_123",
    "version": 7
  },
  "correlation_id": "op_123",
  "causation_id": "evt_01G...",
  "data": {},
  "metadata": {
    "schema": "research_run.completed.v1"
  }
}
```

The external webhook projection can omit internal actor, policy, source, provider, or audit data. Event existence and fields are authorization-sensitive.

## Event categories

- Project and membership lifecycle.
- Source, SourceVersion, ingestion, parsing, indexing, and connector synchronization.
- Chat messages and user-visible tool activity.
- ResearchRun and Operation state.
- Claim, contradiction, and stale-evidence state.
- Document, revision, patch, artifact, and publication lifecycle.
- GitHub workspace and change-proposal lifecycle.
- Entitlement, usage, invoice, credit, and budget state.
- Notification, export, deletion, support, and administrative audit state.

No event type is introduced without an owner, versioned schema, retention classification, and consumer inventory.

## Domain event rules

- Emitted only after the authoritative transaction commits.
- Immutable once recorded.
- Identified by a globally unique event ID.
- At-least-once delivery; consumers must deduplicate.
- Per-resource ordering is supported through resource version, not assumed from global delivery order.
- Event payload contains the minimum stable fact; consumers fetch current authorized resources when appropriate.
- Sensitive source content, prompts, document bodies, credentials, hidden reasoning, and raw provider payloads are excluded.

## Schema evolution

Additive optional fields are preferred. Renaming, changing meaning or type, removing a field, or altering ordering guarantees requires a new schema or event version and a compatibility window.

Consumers tolerate unknown fields and unknown event types. Producers do not reuse a field for a new meaning. Enum readers use a documented unknown fallback.

## Webhook endpoints

A webhook endpoint declares URL, Organization, subscribed event patterns, API version, signing secret version, enabled state, filters, delivery policy, and failure status. Project-specific endpoints cannot receive other Projects unless an Organization-level scope is explicitly authorized.

Endpoint verification prevents sending private data to an unconfirmed target. Redirects are not followed during delivery unless the endpoint is revalidated.

## Signing

Research signs the exact raw request body with an endpoint-specific secret and includes:

```text
Webhook-Id
Webhook-Timestamp
Webhook-Signature
Research-Event-Type
Research-Event-Version
User-Agent
```

The signature scheme, canonical input, supported algorithms, and key rotation are versioned. Receivers verify signature before JSON parsing, enforce a bounded timestamp window, compare in constant time, and deduplicate `Webhook-Id`.

During rotation, an endpoint can have an active and previous secret for a short declared overlap. Secret plaintext is displayed only at creation/rotation and never appears in logs or support tools.

## Delivery

Each endpoint/event pair creates a delivery record with stable ID, attempt count, next attempt, response classification, timing, payload hash, secret version, and terminal state.

- 2xx acknowledges delivery.
- 408, 409 where explicitly documented, 425, 429, and 5xx can be retried.
- Most other 4xx responses require endpoint correction and do not retry indefinitely.
- `Retry-After` is honored within platform limits.
- Exponential backoff uses jitter and a finite retention window.
- Operators and customers can inspect redacted attempts and request replay.

Retries send the same logical event and stable webhook ID unless replay is explicitly represented as a new delivery of the same event.

## Replay and recovery

Manual replay is authorized and audited. It cannot change the historical event or bypass current endpoint authorization. Consumers process by event ID and resource version so replay does not duplicate effects.

After an outage, Research resumes from durable delivery state. Lost webhook delivery cannot imply lost domain state; clients can reconcile through list or export APIs.

## Inbound webhooks

Connector webhooks use the inbox pattern in `durable-workflows-idempotency-and-outbox.md`: raw-byte signature verification, timestamp and replay checks, provider event ID deduplication, schema validation, installation authorization, and current-state reconciliation.

Inbound webhook handlers acknowledge quickly after durable acceptance. Expensive parsing, sync, model use, or external writes run asynchronously.

## Progress streams versus webhooks

SSE provides low-latency, replayable user-facing Operation progress. Webhooks notify external systems of durable state transitions. Neither contains private internal traces or model chain-of-thought. Polling remains available for reconciliation.

## Verification

Tests cover valid and invalid signatures, body mutation, timestamp expiry, duplicate delivery, out-of-order delivery, endpoint deletion, secret rotation, redirect, DNS/IP changes, 429 and 5xx retry, long outage, manual replay, tenant filter, unknown event version, and payload redaction.

Official references include GitHub’s webhook signature-validation guidance and the repository’s API and durable-workflow contracts.
