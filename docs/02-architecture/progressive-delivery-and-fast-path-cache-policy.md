# Progressive delivery and fast-path cache policy

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md). This contract defines how Research returns immediate state, streams durable progress, labels Partial Results, and uses Fast Paths, preloading, and stale-while-revalidate projections without weakening authorization, evidence, retention, or no-drift rules. Offline, local cache, device capability, and reconnect behavior is governed by [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md).

## Goals

- Make Project, Spatial Workbench, Worksets, Chat, Documents, Sources, Activity, WorkPackets, automation, and API workflows responsive before expensive work finishes.
- Preserve honest final, partial, stale, queued, degraded, blocked, unsupported, and cancelled states.
- Keep cache and speculative preparation permission-safe, version-aware, and auditable.
- Provide replayable progress for browser, SDK, CLI, MCP, webhook, support, and release-evidence consumers.
- Prevent performance optimizations from creating a second content, memory, evidence, workflow, or authorization authority.

## Authority model

Progressive delivery records are projections over authoritative state:

- Project membership, policy, entitlements, budgets, retention, and residency;
- IntentRecords, PreflightChecks, ApprovalReceipts, and CommandInvocations;
- Operations, workflow checkpoints, progress events, outbox records, and ActivityEvents;
- SourceVersions, parsing/index generations, EvidenceSpans, Claims, and Trust blockers;
- Document revisions, blocks, patches, comments, reviews, artifacts, and publications;
- SpatialWorkbenchState, Worksets, Focus State, Resume Digests, notifications, automation outcomes, Product Truth signals, WorkPackets, and NextActionCandidates.

If a progressive projection conflicts with an owning domain record, the owning record wins and the projection is rebuilt, redacted, invalidated, or marked stale.

## Processing chain

```text
request or navigation intent
-> authenticate actor and resolve Project policy
-> classify intent, service class, risk, and latency budget
-> run deterministic preflight over authorization, expected versions, source scope, rights, residency, budget, retention, and provider policy
-> evaluate Fast Path and cache eligibility
-> evaluate SpeculativePreparation ladder, privacy class, and budget eligibility
-> return immediate ProgressiveDeliveryEnvelope
-> start or attach to Operation, workflow, stream, or read projection
-> emit ordered ProgressiveDeliveryEvents
-> attach PartialResults with coverage, citation, freshness, and pending-stage state
-> finalize, cancel, degrade, or block
-> invalidate or refresh affected FastPathSnapshots
-> write ActivityEvent, audit, metrics, and release-evidence hooks
```

The immediate envelope must be small, authorized, and useful. It can contain safe labels, counts, statuses, cursor IDs, operation IDs, compact Workset refs, compact WorkPacket refs, expected next events, and available commands. Detail panels fetch current authorized resources from owning services.

## Core records

### LatencyBudgetPolicy

Representative fields:

```text
latency_budget_policy_id
organization_id
project_id
service_class
surface
route_or_command
first_shell_budget_ms
first_progress_budget_ms
first_useful_result_budget_ms
finalization_budget_ms
reconnect_budget_ms
cancellation_ack_budget_ms
good_event_definition
degradation_policy_ref
version
updated_at
```

LatencyBudgetPolicy records are configuration and release-evidence inputs. They do not override admission control, authorization, or provider policy.

### ProgressiveDeliveryEnvelope

Representative fields:

```text
delivery_id
organization_id
project_id
viewer_id
intent_id
operation_id
surface
service_class
mode
source_scope_ref
status
completeness_state
freshness_state
cost_class
latency_budget_ref
available_commands
next_event_cursor
redaction_summary
created_at
```

The envelope is the first response for progressive work. It is not a durable content authority; it points to Operations, domain records, and projections.

### ProgressiveDeliveryEvent

Representative fields:

```text
delivery_event_id
delivery_id
operation_id
sequence
event_type
status
stage
resource_ref
partial_result_id
coverage_summary
citation_state
freshness_state
degradation_reason
queued_reason
redaction_summary
occurred_at
```

Delivery events are ordered, replayable, redacted, and safe for browser, SDK, CLI, MCP, and support surfaces. They can reference ActivityEvents but do not replace ActivityEvents.

### PartialResult

Representative fields:

```text
partial_result_id
organization_id
project_id
intent_id
operation_id
resource_ref
result_kind
support_state
coverage_state
source_version_refs
document_revision_ref
claim_refs
evidence_span_refs
pending_stage_refs
stale_reason
blocker_reason
allowed_transitions
expires_at
```

PartialResult records can be saved as drafts or intermediate artifacts only when the partial label, upstream refs, and invalidation rules remain attached.

### FastPathSnapshot

Representative fields:

```text
fast_path_snapshot_id
organization_id
project_id
viewer_or_capability_hash
projection_kind
cache_key_hash
source_version_set_hash
document_revision_hash
policy_version_hash
retention_version_hash
index_generation_hash
parser_version_hash
model_role_hash
status
freshness_state
created_at
expires_at
invalidated_at
```

FastPathSnapshot rows store safe projections or encrypted policy-bound derived results. They do not store raw private source text unless a governing data-class policy explicitly allows encrypted storage and viewer-bound use.

### SpeculativePreparation

Representative fields:

```text
speculative_preparation_id
organization_id
project_id
viewer_id
intent_or_route_hint
trigger_source
preparation_level
preparation_kind
objective
expected_benefit_ms
max_preparation_budget_ref
privacy_class
risk_class
policy_result
denial_reason
budget_class
material_spend_state
user_visible_state
provider_or_resource_ref
hit_or_miss_state
wasted_work_cost
status
cancelled_at
expires_at
```

Speculation is allowed only for read-only or reversible preparation within explicit policy. Hidden material spending, hidden private-content model calls, connector widening, external writes, and side effects are prohibited.

## Speculation ladder and eligibility

Every speculative decision chooses the lowest sufficient level:

1. **Level 0, public assets:** public route modules, static assets, and CDN-cacheable pages with no Project state.
2. **Level 1, authorized shell:** authenticated Project shell, empty panes, command metadata, safe labels, and capability-filtered navigation.
3. **Level 2, authorized metadata:** source inventories, Work Packet refs, index manifests, policy-safe counters, and stale summaries without raw source text or private document bodies.
4. **Level 3, reversible draft:** local edit buffers, draft-only previews, deterministic dry-run inputs, and UI state that can be discarded without canonical mutation.
5. **Level 4, material preparation:** provider warmup, model-role reservation, browser or Sandbox reservation, non-cacheable origin fetches, or connector readiness checks after explicit intent, budget policy, privacy policy, and approval class allow the work.
6. **Level 5, prohibited speculation:** hidden private-content model calls, connector scope widening, external writes, publication, deletion, billing, repository pushes, notification sends, permission changes, unbounded browser work, or any work that would be unsafe if the user abandons the predicted path.

Material preparation means any speculative work that consumes paid provider quota, starts a browser or Sandbox allocation, calls a connector, fetches non-cacheable private data from origin, reserves model capacity, or can affect billing, audit, user trust, or external state. Level 4 decisions require visible user intent, a budget ref, a policy ref, expiry, cancellation behavior, and release-evidence metrics. Level 5 decisions are denied and recorded with a reason category; they do not start work.

## Fast-path eligibility

A Fast Path can be used only when all of these checks pass:

- actor, Project, membership, role, and capability still authorize the projected data;
- Project policy, source rights, residency, retention, and provider policy still allow use;
- source-version, parser, index, document-revision, claim, and evidence dependencies still match;
- the result kind is safe to serve as current, stale, partial, or draft;
- cache key includes tenant, Project, viewer or capability, policy, source scope, source versions, document revisions, parser/index generations, model role or deterministic transform version, and data classification where applicable;
- the surface can display freshness, partiality, and recovery state;
- the operation does not perform publication, external write, deletion, billing, connector widening, or high-risk mutation.

When any check fails, the projection is redacted, invalidated, rebuilt, or replaced with a normal workflow.

## Cache and preloading rules

- Cache entries that can contain private or derived content are Project-scoped and policy-bound.
- Authorization is checked before cache read and again before returning data to the caller.
- Cache keys include all dimensions that can change the answer or viewer authorization.
- Stale-while-revalidate projections are labeled stale and cannot satisfy publication, external-write, or final-answer requirements.
- Preloading can warm route modules, public assets, safe catalogs, index manifests, and bounded metadata after authorization.
- Preloading cannot fetch private source excerpts, run model calls over private content, widen source scope, call connectors, or reserve material budget unless the user intent and policy permit it.
- Service-worker, browser-storage, offline-draft, local-queue, and offline-packet behavior follows LocalCachePolicy and cannot use Progressive Delivery cache rules to bypass local cache, reconnect, or conflict-review gates.
- SpeculativePreparation records must include preparation level, trigger source, policy result, privacy class, budget class, expected benefit, expiry, user-visible state, and outcome.
- User-visible prepared state is required for Level 3 and Level 4 work; Level 0 through Level 2 work may be silent only when it carries no Project-private content and no material budget.
- Invalidation occurs on membership, policy, retention, rights, source-version, parser, index, document, claim, publication, comment, automation, focus, or Product Truth changes that affect the projection.
- Cache telemetry records metadata only; it cannot become a shadow store of prompts, source text, document bodies, credentials, or citations.

## Streaming and resumability

Progress streams are durable Operation projections:

- every stream event has a stable sequence or event ID;
- reconnect uses the last observed cursor;
- replay windows are bounded by retention policy;
- server memory is bounded for slow or disconnected clients;
- cancellation acknowledgement is a high-priority control event;
- aborting model output, resuming model output, and replaying durable progress are separate states;
- hidden reasoning and raw provider payloads are never required to resume user-visible progress.

If a provider stream cannot be resumed after cancellation or disconnect, Research resumes from the durable Operation and explains the recovery path rather than pretending the original stream is still live.

## Optimistic UI rules

Optimistic UI is permitted for:

- local view state;
- Workset switching and pane hydration state;
- reversible draft creation;
- focus, filter, sort, and pane preferences;
- queued command previews;
- unsaved document edits before canonical patch submission.

Optimistic UI is not permitted for:

- canonical document revisions;
- SourceVersions and evidence state;
- claims, citation support, or publication blockers;
- external writes, repository pushes, notifications, deletion, billing, connector scope, approvals, or policy changes.

Canonical mutation remains behind expected versions, idempotency, deterministic preflight, and ActivityEvents.

## Activity, API, and support exposure

Progressive delivery exposes:

- Operation polling and SSE;
- stable API status fields for final, partial, stale, queued, degraded, blocked, cancelled, unsupported, and failed states;
- Activity timeline events for user-visible stage transitions;
- WorkPacket status refs and next-action refresh hints when progressive work changes current Project work state;
- SpeculativePreparation policy, level, denial, expiry, cancellation, hit, miss, and wasted-work diagnostics;
- support-safe diagnostic IDs and redacted summaries;
- webhook events for durable state transitions, not raw incremental model text unless a specific public API projection allows it.

The developer API is governed by [`developer-platform-api.md`](developer-platform-api.md). Event and webhook naming follows [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md).

## Storage model

Representative structures are defined in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md):

- `latency_budget_policies`
- `progressive_delivery_envelopes`
- `progressive_delivery_events`
- `partial_results`
- `fast_path_snapshots`
- `speculative_preparations`
- `progressive_delivery_invalidations`

High-volume delivery events may be partitioned or compacted according to retention policy. Compaction cannot remove audit-critical status, cancellation, approval, publication, external-write, billing, or evidence-state transitions.

## Failure behavior

If Fast Path evaluation fails, Research falls back to the normal authorized path and records the miss reason.

If a progressive stream fails, the Operation remains queryable and Activity exposes degraded status, last durable stage, retry state, and recovery commands.

If a Partial Result becomes invalid because a source, permission, claim, document, or policy changed, the user sees stale or blocked state and cannot promote it to final output until it is rebuilt.

If SpeculativePreparation is denied, Research continues through the normal authorized path and records the denied level and reason. If prepared work is unused, expired, invalidated, or cancelled, the outcome is recorded without retrying material work in the background.

If the status system is saturated, cancellation, status polling, and Project shell reads retain reserved capacity before background work.

## Tests

Required coverage:

- cache-key construction for tenant, Project, viewer, policy, source scope, source versions, document revisions, parser/index generations, model role, and retention;
- cache reauthorization and invalidation after membership, source, rights, retention, policy, document, claim, and index changes;
- ProgressiveDeliveryEnvelope shape and redaction;
- ordered stream replay, reconnect, slow-client backpressure, and cancellation acknowledgement;
- PartialResult lifecycle, stale labeling, citation state, and blocked promotion;
- SpeculativePreparation ladder selection, policy denial, user-visible prepared-state exposure, hit/miss outcome, expiry, cancellation, and budget enforcement;
- speculative preparation denial for hidden private-content model calls, connector widening, external writes, publication, deletion, billing, repository pushes, notification sends, permission changes, unbounded browser work, and material budget without intent;
- optimistic UI downgrade for expected-version conflicts;
- route preloading without private data leakage;
- API, SDK, CLI, MCP, Activity, and support views using compatible status vocabulary;
- WorkPacket and NextActionCandidate refresh behavior when progressive stages change current work state;
- Spatial Workbench and Workset hydration, stale labels, redaction, and restore behavior;
- LocalCacheManifest invalidation, OfflineDraft submission, OfflineActionQueueItem blocked-state handling, reconnect reauthorization, SyncConflict creation, service-worker stale-cache behavior, and storage-eviction recovery;
- accessibility announcements for progress, partiality, completion, cancellation, and errors;
- load tests proving status and cancellation availability under background saturation and provider degradation.

## Launch gates

Progressive delivery is production-ready only when:

- `PERF-005` and `PERF-006` are implemented;
- latency budgets and good-event definitions exist for primary surfaces;
- first shell, first progress, first useful result, citation-ready, reconnect, cancellation, and finalization metrics are recorded;
- cache hit/miss, stale-while-revalidate, invalidation, and permission-redaction evidence is captured;
- SpeculativePreparation level distribution, denial rates, hit/miss rates, wasted-work ceilings, material-preparation approvals, and privacy-denial evidence are captured;
- Partial Results cannot be published or treated as complete without evidence and source-coverage checks;
- Activity, API, SDK, CLI, MCP, webhooks, support diagnostics, and release evidence agree on status semantics;
- load, accessibility, authorization, and privacy tests cover both fast and degraded paths.

## Documentation update rule

Changes to ProgressiveDeliveryEnvelope, PartialResult, FastPathSnapshot, SpeculativePreparation, status vocabulary, cache key policy, or resumable-stream behavior must update:

- [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md)
- [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`durable-workflows-idempotency-and-outbox.md`](durable-workflows-idempotency-and-outbox.md)
- [`tenancy-authorization-and-capabilities.md`](tenancy-authorization-and-capabilities.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
