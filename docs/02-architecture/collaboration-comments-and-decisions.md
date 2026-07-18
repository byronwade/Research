# Collaboration comments and decisions

**Review date:** 2026-07-17
**Status:** architecture contract, not implemented runtime behavior

Research collaboration is a Project-scoped domain layer over canonical content, evidence, runs, artifacts, activity, memory, publications, and settings. It does not replace Documents, Sources, Claims, Activity, or Project memory, and it never becomes a second authority for factual claims.

This architecture supports the product contract in [`../01-product/collaboration-review-and-decision-workflows.md`](../01-product/collaboration-review-and-decision-workflows.md).

## Domain records

The collaboration package owns these records:

| Record | Authority |
|---|---|
| `CommentThread` | The durable conversation container anchored to one Project resource. |
| `Comment` | A content-minimized message inside a thread with author, revision, edit, redaction, and resolution metadata. |
| `Mention` | A notification intent for a user, group, role, or service account that has access to the target. |
| `Assignment` | An accountable owner, due state, and resolution policy for review, correction, blocker, source follow-up, patch, or decision work. |
| `Suggestion` | A proposed change represented as a typed patch or a request to create one. |
| `ReviewRequest` | A version-bound request for approval, rejection, change request, deferral, or expiry. |
| `DecisionRecord` | A durable Project decision with rationale, alternatives, authority, evidence links, and revisit policy. |
| `PresenceSession` | Ephemeral live awareness for viewers and editors. |
| `CollaborationEvent` | Domain lifecycle event emitted into Activity, audit, notifications, webhooks, and release evidence. |

All durable records carry `organization_id`, `project_id`, actor attribution, expected version where mutable, retention class, redaction class, and policy snapshot. Presence sessions are short-lived and cannot authorize edits.

## Anchor references

Collaboration objects attach through an `AnchorRef`:

```text
anchor_id
organization_id
project_id
resource_type
resource_id
resource_version
document_block_id?
document_range?
source_locator?
claim_id?
evidence_span_id?
patch_operation_id?
run_step_id?
artifact_component_id?
settings_key?
publication_snapshot_id?
activity_event_id?
anchor_hash
projection_state
created_at
```

`resource_version` is required for reviewable resources. If the current resource changes, the original anchor remains valid against the immutable version and may project onto the latest version as `current`, `moved`, `stale`, `orphaned`, `resolved`, or `superseded`.

Anchors are never silently remapped to different meaning. A remap that changes semantics creates a new anchor and links the old one as superseded.

## Comment lifecycle

Comment threads move through these states:

```text
open
-> resolved
-> reopened
```

Threads can additionally carry lifecycle flags:

- `stale`: the target changed after the last material comment or review.
- `orphaned`: the target no longer exists in the current projection.
- `superseded`: a later thread, patch, review, or decision replaced the discussion.
- `deleted`: hidden by actor-initiated deletion policy while audit metadata remains where required.
- `redacted`: content suppressed by security, privacy, residency, legal, or support policy.

Resolution records store actor, timestamp, reason, expected version, and linked patch, review, decision, or activity event. Resolving a comment does not approve a patch or validate a factual claim.

## Suggestions and patches

Suggestions are reviewable inputs, not content mutations. A suggestion must resolve to one of:

- a typed document patch;
- a source, claim, evidence, or citation correction request;
- a Research Run plan or section-contract change;
- an artifact component patch;
- a Project settings change request;
- a non-action decision with rationale.

Every patch-producing suggestion records expected base revision, affected anchors, generated diff, author or model route, preflight result, and review state. A stale base revision blocks automatic apply and opens a conflict review.

AI-generated suggestions use the same patch and review path as human suggestions, with an explicit AI author and model/tool provenance. AI cannot approve its own suggestion.

## Review state machine

Review requests are version-bound:

```text
requested
-> in_review
-> changes_requested | approved | rejected | deferred | superseded | expired
```

Review state is separate from comments. A review decision requires reviewer authority, expected target version, decision timestamp, rationale, and any approval receipt required by [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md).

A review becomes stale when:

- the target version changes;
- the source scope or rights decision changes;
- a linked claim changes status;
- an approval receipt expires;
- the reviewer loses access;
- the patch payload changes;
- a blocking comment, assignment, or decision is opened after review start.

Stale reviews cannot be applied until refreshed.

## Decision records

Decision records preserve Project judgment without becoming evidence:

```text
decision_id
project_id
status
decision_type
statement
alternatives
rationale
authority_actor_or_group
affected_resource_refs
evidence_span_refs
claim_refs
source_version_refs
comment_thread_refs
review_request_refs
memory_item_refs
revisit_trigger
review_by
created_at
accepted_at?
superseded_by?
revoked_at?
```

Decision status values are `proposed`, `accepted`, `rejected`, `deferred`, `superseded`, `stale`, and `revoked`.

Accepted decisions can feed Project memory only through the memory consolidation path in [`../03-ai/project-memory.md`](../03-ai/project-memory.md). If source evidence later changes, dependent decisions and memory items can become stale without rewriting history.

## Authorization and redaction

Authorization is enforced at:

- thread, comment, mention, assignment, suggestion, review, and decision creation;
- notification fanout;
- read projections;
- context-pack assembly;
- API, SDK, CLI, MCP, webhook, and export exposure;
- public/private publication projection;
- support diagnostics and incident evidence access.

Mentions and assignments are valid only for principals that can access the target at creation time. If a principal later loses access, notification payloads and projections are minimized or suppressed.

Public outputs do not expose private comments, reviewer identity, internal objections, source context, access-control metadata, support notes, or presence history by default. Publication validators must prove unresolved collaboration blockers are either resolved, intentionally withheld with policy, or represented as public-safe caveats.

## Presence

Presence is ephemeral awareness:

- viewer identity or role where policy allows;
- resource and current view mode;
- cursor or selection only when collaboration policy allows;
- last heartbeat and expiry;
- editing intent.

Presence data is not retained as canonical content, not exported, not used as factual evidence, and not required for asynchronous review. It can inform conflict warnings and lightweight awareness only.

## Activity, notifications, and events

Collaboration emits Activity and webhook-visible lifecycle events for:

- thread opened, commented, resolved, reopened, stale, orphaned, redacted;
- mention created, delivered, suppressed, failed;
- assignment created, accepted, reassigned, due, blocked, completed, expired;
- suggestion created, converted to patch, accepted, rejected, conflicted, superseded;
- review requested, started, changed, approved, rejected, deferred, expired, superseded;
- decision proposed, accepted, rejected, deferred, superseded, stale, revoked;
- presence joined, changed, and left only as ephemeral UI events unless audit policy requires a minimal security record.

Events follow [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md), notification policy follows [`../01-product/notifications-and-scheduled-automation.md`](../01-product/notifications-and-scheduled-automation.md), and public API exposure follows [`developer-platform-api.md`](developer-platform-api.md).

## API and MCP surface

The public platform exposes collaboration through versioned resources:

- `/projects/{projectId}/comment-threads`;
- `/projects/{projectId}/suggestions`;
- `/projects/{projectId}/review-requests`;
- `/projects/{projectId}/assignments`;
- `/projects/{projectId}/decisions`;
- `/projects/{projectId}/presence`.

Mutations require idempotency keys, expected versions, authorization checks, and operation results for long-running work. MCP resources are read-first and expose only authorized, minimized collaboration summaries unless a tool invocation passes the same preflight and approval path as the API.

## Validation

Tests cover:

- cross-tenant and cross-Project isolation;
- authorization at create, notify, read, export, publication, API, MCP, and support views;
- anchor projection after document, source, claim, artifact, run, settings, and publication changes;
- stale, orphaned, superseded, redacted, and resolved thread behavior;
- typed patch conversion and stale base-revision rejection;
- review state transitions, reviewer authority, approval receipts, and expiry;
- AI suggestion provenance and self-approval prevention;
- decision-to-memory handoff and stale decision propagation;
- public/private projection redaction;
- notification quiet hours and inaccessible mention suppression;
- keyboard-only navigation and screen-reader names for comments, suggestions, reviews, assignments, and decisions.

## Documentation update rule

Changes to collaboration architecture must update:

- [`../01-product/collaboration-review-and-decision-workflows.md`](../01-product/collaboration-review-and-decision-workflows.md)
- [`canonical-content-and-no-drift.md`](canonical-content-and-no-drift.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`context-packs-and-agent-handoff.md`](context-packs-and-agent-handoff.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../03-ai/project-memory.md`](../03-ai/project-memory.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
