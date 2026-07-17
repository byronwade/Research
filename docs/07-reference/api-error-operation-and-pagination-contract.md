# API errors, Operations, concurrency, and pagination

The public API is a versioned research platform, not a thin chat-completion wrapper. Browser, SDK, CLI, MCP, and external clients use the same domain contracts.

## Resource conventions

- Stable opaque IDs are strings and never encode authorization.
- Timestamps use RFC 3339 UTC and preserve provider timestamps separately when needed.
- Monetary usage uses integer minor units or explicitly named decimal units; floating-point currency is prohibited.
- Enumerations are open for reading: clients tolerate unknown values and use documented fallback behavior.
- Requests reject unknown mutation fields when accepting them could hide a client error.
- Resource responses include `created_at`, `updated_at`, and a version or ETag where concurrent edits matter.

## Error model

HTTP errors use Problem Details semantics (`application/problem+json`) with a stable application code.

```json
{
  "type": "https://research.example/problems/stale-document-version",
  "title": "Document version is stale",
  "status": 409,
  "code": "document_version_conflict",
  "detail": "The patch targets revision 41; the current revision is 43.",
  "instance": "/v1/operations/op_123",
  "request_id": "req_123",
  "retryable": false,
  "errors": [
    {
      "path": "expected_revision",
      "code": "stale",
      "message": "Expected 43."
    }
  ]
}
```

`detail` is safe for the caller and does not expose secrets, SQL, internal paths, provider credentials, private tenant data, or hidden model content. Support correlation uses `request_id` and authorized diagnostics.

## Stable error classes

| HTTP status | Representative application codes |
|---|---|
| 400 | `invalid_request`, `invalid_cursor`, `unsupported_media`, `schema_validation_failed` |
| 401 | `authentication_required`, `session_expired`, `invalid_service_token` |
| 403 | `permission_denied`, `policy_denied`, `capability_required`, `provider_not_allowed` |
| 404 | `resource_not_found` without confirming inaccessible resource existence |
| 409 | `version_conflict`, `idempotency_conflict`, `operation_state_conflict`, `duplicate_resource` |
| 412 | `precondition_failed`, `etag_mismatch` |
| 413 | `request_too_large`, `source_limit_exceeded`, `result_limit_exceeded` |
| 422 | `semantically_invalid`, `unsupported_transition`, `citation_validation_failed` |
| 429 | `rate_limited`, `quota_exceeded`, `concurrency_limited`, `budget_reservation_failed` |
| 500 | `internal_error` |
| 502/503/504 | normalized provider, dependency, capacity, and timeout errors |

Retry guidance is explicit. A retryable error may include `retry_after`, but clients still use bounded jitter and preserve idempotency keys.

## Asynchronous Operations

Material long-running commands return `202 Accepted` with an Operation.

```json
{
  "id": "op_123",
  "type": "research_run.create",
  "state": "accepted",
  "progress": {"sequence": 0, "phase": "queued"},
  "links": {
    "self": "/v1/operations/op_123",
    "events": "/v1/operations/op_123/events",
    "cancel": "/v1/operations/op_123/cancel"
  }
}
```

Operation state and behavior are governed by `durable-workflows-idempotency-and-outbox.md`. Terminal Operations link to created or changed resources. Partial results are explicit resources and are never confused with success.

## Idempotency

Mutation endpoints that can create resources, reserve budget, trigger work, publish, send, bill, or write externally accept `Idempotency-Key`. Scope, retention, semantic request hashing, and conflict behavior are documented per endpoint.

A client retry after a network timeout uses the same key. A new logical command uses a new key. Server-generated side effects derive their keys from the internal Operation and step identity.

## Optimistic concurrency

Mutable resources expose an ETag or integer revision. Updates use `If-Match`, `expected_version`, or a domain-specific expected base revision. A stale update returns 409 or 412 with current version metadata the caller is authorized to see.

Document and artifact patch APIs never use last-write-wins for overlapping edits. Membership, policy, billing, connector, and publication changes require current versions or explicit administrative override.

## Pagination

Collection endpoints use opaque cursor pagination with stable ordering.

```json
{
  "data": [],
  "page": {
    "next_cursor": "opaque",
    "previous_cursor": null,
    "has_more": true
  }
}
```

The cursor binds endpoint, tenant, filters, sort, schema version, and position, and is signed or otherwise tamper-evident. Invalid or expired cursors produce a stable error rather than silently restarting.

Default ordering includes a unique tie-breaker. Clients cannot request unbounded page sizes. High-volume exports use asynchronous export resources rather than pagination abuse.

## Filtering and sorting

Filters use documented typed parameters and allowlists. Free-form database expressions are prohibited. Time ranges define inclusive/exclusive behavior. Search endpoints distinguish lexical query, semantic query, metadata filters, source scope, and authorization policy.

## Sparse fields and expansion

The first version should prefer clear resource endpoints over arbitrary graph expansion. Any `include` or `fields` mechanism is allowlisted, depth-bounded, costed, and authorization-aware. It cannot reveal the existence of inaccessible relationships.

## Rate, quota, and budget metadata

Responses may include stable rate-limit metadata and Operation usage. Exact headers and fields are versioned. Limits do not reveal other tenants. A quota failure distinguishes hard entitlement from temporary rate, concurrency, provider, and cost-reservation limits.

## API versions and deprecation

Breaking changes require a new supported API version or explicit compatibility mechanism. Deprecation publishes affected endpoints/fields, replacement, dates, telemetry criteria, and SDK support. Server behavior cannot depend only on the newest generated client.

## Contract verification

OpenAPI is generated from implementation schemas and checked against committed expectations. TypeScript and Python clients run the same positive, negative authorization, idempotency, pagination, error, and concurrency fixtures.

Official references include RFC 9457 Problem Details, HTTP conditional request semantics, and the repository’s developer-platform and contract-evolution documents.
