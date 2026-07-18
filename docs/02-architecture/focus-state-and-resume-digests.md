# Focus state and resume digests

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/focus-continuity-and-work-resume.md`](../01-product/focus-continuity-and-work-resume.md). Spatial Workbench and Workset layout state is specified in [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md). Device capability, local draft, local cache, reconnect, and sync-conflict policy is specified in [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md). This contract defines how Research persists Project work state, rebuilds resume summaries, ranks attention, and exposes focus controls without creating a second memory authority, notification authority, layout authority, local-cache authority, or activity log.

## Goals

- Preserve enough user-controlled state to safely continue work across reloads, devices, Project switches, handoffs, and interruptions.
- Produce a viewer-specific Resume Digest from authoritative Project records.
- Keep attention ranking explainable, reversible, and policy-bound.
- Avoid ambient screen capture, raw private content, hidden reasoning, and cross-app surveillance.
- Make focus and resume behavior available through UI, Command Center, API, SDK, CLI, MCP, support diagnostics, and release evidence without changing authorization rules.
- Provide bounded inputs to Project Operating Layer WorkPackets without making FocusState or ResumeDigest the next-action authority.

## Authority model

Focus and resume records are projections. They reference but never override:

- Project membership, policy, and settings;
- Conversations, messages, and IntentRecords;
- SourceVersions, EvidenceSpans, Claims, and Trust blockers;
- Documents, revisions, blocks, patches, comments, reviews, and decisions;
- Operations, workflow progress, ActivityEvents, ActionCards, and audit events;
- notifications, schedules, automations, outcome scorecards, and adaptive recommendations;
- SpatialWorkbenchState, Worksets, PaneInstances, and WorksetSnapshots for active layout refs;
- CommandActionDescriptors, ShortcutBindings, and CommandInvocations;
- ContextPacks, MemoryItems, Product Truth signals, and release evidence.

If a focus projection conflicts with authoritative state, the owning domain record wins and the projection is rebuilt or invalidated.

## Processing chain

```text
Project open, Project switch, manual checkpoint, Focus Session, handoff, or absence
-> load actor, Project policy, and prior FocusState
-> reauthorize referenced resources
-> compare ResumeCheckpoint cursors with current Activity, Operation, notification, and domain versions
-> derive candidate attention items
-> rank, group, suppress, or promote items by policy
-> build ResumeDigest projection
-> provide minimized refs for WorkPacket assembly when requested
-> return compact shell payload
-> lazy-load details through owning domain readers
-> record user action, correction, dismissal, or caught-up checkpoint
```

The initial shell payload is bounded. It contains labels, resource references, version IDs, event IDs, counts, statuses, safe summaries, and optional WorkPacket references. Detail panels fetch current authorized resources rather than trusting digest payloads as content authority.

## Core records

### FocusState

Representative fields:

```text
focus_state_id
organization_id
project_id
user_id
active_surface
active_workset_id
active_resource_refs
selected_resource_refs
pane_layout_refs
source_scope_ref
mode
budget_class
active_intent_id
active_operation_id
active_action_card_id
active_automation_id
recent_command_invocation_ids
recent_filter_state
draft_resource_refs
last_resume_checkpoint_id
focus_session_id
state_version
updated_at
```

FocusState is mutable user preference and work-position state. It references canonical records and stores only safe labels where a label is needed before detail loading. A stale or unauthorized reference is kept only as a redacted tombstone long enough to explain that the item became unavailable.

### ResumeCheckpoint

Representative fields:

```text
resume_checkpoint_id
organization_id
project_id
user_id
reason
active_surface
resource_version_refs
activity_cursor
operation_cursor
notification_cursor
command_invocation_cursor
document_revision_refs
source_version_refs
policy_snapshot_hash
created_at
expires_at
```

Checkpoints are immutable after creation except for retention and deletion state. A checkpoint can be personal, handoff-specific, or support-diagnostic according to policy. It is not a bearer token and does not grant access.

### ResumeDigest

Representative fields:

```text
resume_digest_id
organization_id
project_id
user_id
checkpoint_id
status
generated_from_cursors
attention_item_count
top_action_ref
group_summaries
redaction_summary
stale_reason
partial_reason
generated_at
expires_at
```

ResumeDigest is rebuildable. If source, document, comment, membership, provider, retention, or policy state changes, affected digests are marked stale or invalid and rebuilt before use.

### AttentionItem

Representative fields:

```text
attention_item_id
organization_id
project_id
user_id
digest_id
source_family
resource_ref
action_class
priority_class
reason_code
rank_inputs
suppression_state
command_descriptor_ref
activity_event_refs
action_card_ref
operation_ref
created_at
resolved_at
```

AttentionItem rows are projections. Resolution occurs by changing the owning ActionCard, Operation, document, source, notification, command, or collaboration record, then rebuilding the projection.

### FocusSession

Representative fields:

```text
focus_session_id
organization_id
project_id
user_id
scope_refs
started_at
ends_at
ended_at
notification_policy_ref
allowed_interrupt_classes
suppressed_item_count
checkpoint_id
created_by_command_invocation_id
```

FocusSession policy controls notification delivery and resume checkpointing. It never suppresses security incidents, deletion/publication approvals, irreversible external writes, budget exhaustion, or other events that organization policy marks as immediate.

## Digest inputs

ResumeDigest builders read from:

- ActivityEvent projections;
- Operation and workflow progress state;
- ActionCards and approvals;
- notifications, quiet-hour state, and scheduled automation records;
- document revisions, patches, comments, suggestions, review requests, and decision records;
- source versions, parser state, evidence coverage, stale claims, contradictions, and Trust blockers;
- Research Runs, automation runs, outcome scorecards, and adaptive recommendations;
- command invocations, shortcut conflicts, command recommendations, and macro drafts;
- Spatial Workbench, Workset, pane, snapshot, and layout suggestion state;
- ContextPack lifecycle, handoff state, and invalidation records;
- Product Truth signals, contradiction records, and documentation patch proposals where they affect Project work.

Builders use current authorization and redaction rules for every input. They can reference a hidden item only as an unavailable or redacted count with a safe reason.

## Ranking and suppression

Attention ranking is deterministic before any model-generated prose. The policy considers:

- user ownership, assignment, mention, or active resource relationship;
- blocking status and approval class;
- destructive, publication, billing, connector, or external-write risk;
- source revocation, source freshness, evidence coverage, or contradiction severity;
- operation status, queue age, budget class, and failure class;
- FocusSession scope and quiet-hour policy;
- user preferences, explicit snoozes, and previous corrections;
- organization-required delivery classes.

A model may help phrase a digest summary only after ranking and redaction are complete. Model output cannot promote, hide, or resolve an attention item by itself.

## Command and notification integration

Focus commands resolve through [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md). Mutating focus commands create CommandInvocations and ActivityEvents:

- `focus_state.updated`
- `resume_checkpoint.created`
- `resume_digest.generated`
- `resume_digest.marked_caught_up`
- `focus_session.started`
- `focus_session.extended`
- `focus_session.ended`
- `attention_item.snoozed`
- `attention_item.routed`

Notification delivery follows [`../01-product/notifications-and-scheduled-automation.md`](../01-product/notifications-and-scheduled-automation.md). FocusSession suppression writes durable state so users and support can explain why an item was batched, delayed, promoted, or suppressed.

## Context pack and handoff integration

Context packs can include minimized FocusState, ResumeCheckpoint, and selected AttentionItems only when the pack purpose requires them. Agent handoff packs may include the next safe action, blocked steps, active source scope, and resume constraints, but downstream agents must reauthorize linked resources before use.

FocusState cannot preserve access to content that a ContextPack, SourceVersion, document revision, or comment would no longer expose.

## API, SDK, CLI, and MCP exposure

Supported surfaces can expose:

- get current FocusState;
- update safe UI-state preferences;
- create ResumeCheckpoint;
- build or fetch ResumeDigest;
- mark digest caught up;
- start, extend, or end FocusSession;
- snooze or route eligible AttentionItems;
- list redacted digest and focus diagnostic metadata.

External clients receive stable errors for stale checkpoint, unauthorized resource, invalidated digest, policy-required immediate delivery, unsupported suppression, and conflicting expected version. Mutations require idempotency keys and expected FocusState versions where applicable.

## Storage model

Representative tables are defined in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md):

- `focus_states`
- `resume_checkpoints`
- `resume_digests`
- `attention_items`
- `focus_sessions`
- `focus_notification_suppressions`
- `focus_state_events`

High-volume attention projections can be rebuilt from ActivityEvents and domain records. Audit-critical focus decisions such as notification suppression for high-impact work, support diagnostics, and handoff checkpoints follow retention policy.

## Privacy and governance

- Focus and resume records are Project-owned and user-scoped unless explicitly created as a handoff or support diagnostic.
- Raw source text, raw prompts, document bodies, hidden reasoning, credentials, screen captures, clipboard contents, and connector payloads are excluded.
- Personal FocusState can be reset or deleted according to policy; audit-critical domain records remain governed by their owning retention rules.
- Support views default to metadata and redacted reason codes.
- Digest generation telemetry uses allowlisted metadata and does not become session replay.
- Cross-device resume uses authenticated application state only, not operating-system history.

## Failure behavior

If FocusState loading fails, the Project opens without restored pane state and shows a recoverable warning.

If ResumeDigest generation fails, the Project opens with Activity and Review Queue links plus a diagnostic ID. Commands that require a fresh digest fail closed only when stale or missing focus data would create an unsafe mutation, external write, publication, billing change, or destructive action.

If authorization changes during digest generation, the builder drops or redacts affected items and records a partial reason. A stale digest cannot be used to infer the existence of a now-hidden resource.

## Performance and capacity

Focus reads and compact digest generation are interactive workload. Detailed digest rebuilds, large Project comparisons, and model-written summaries are background workload. Interactive Project open retains reserved capacity during indexing, research, export, and automation saturation. WorkPacket assembly may reuse compact FocusState and ResumeDigest inputs, but stale or missing focus data cannot block Project open unless a material mutation depends on it.

Performance budgets cover:

- FocusState read and write path;
- checkpoint creation;
- compact digest query;
- large Project digest rebuild;
- attention ranking;
- notification suppression lookup;
- keyboard command latency for continue, catch up, and focus controls;
- cache invalidation after membership, source, policy, document, or comment changes.

## Tests

Required coverage:

- FocusState schema validation and expected-version updates;
- checkpoint creation for close, Project switch, FocusSession start, handoff, and mark-caught-up;
- digest rebuild from ActivityEvents, Operations, ActionCards, document revisions, source changes, comments, commands, notifications, and automation outcomes;
- authorization redaction after membership, source, connector, document, and comment permission changes;
- deletion, retention, and source revocation invalidation;
- quiet-hour and FocusSession suppression rules;
- high-priority override behavior;
- idempotent resume, catch-up, snooze, route, and focus commands;
- stale checkpoint and partial digest states;
- cross-device resume without leaking local-only state;
- reconnect handoff that reauthorizes FocusState, ResumeCheckpoint, local draft refs, Workset refs, and queued local actions before use;
- support-safe diagnostics;
- keyboard, screen-reader, pointer, touch, and narrow-screen resume journeys;
- load tests for large Projects and notification storms.

## Launch gates

Focus continuity is production-ready only when:

- `UX-005` and `UX-006` are implemented;
- FocusState and ResumeDigest records remain projections over canonical Project state;
- Project open, continue, catch up, next review, Focus Session, and handoff paths are reachable through visible UI and Command Center;
- WorkPacket assembly reauthorizes FocusState, ResumeDigest, and AttentionItem references before showing next-action recommendations;
- authorization, redaction, deletion, retention, source revocation, and rights policies invalidate affected projections;
- notification suppression and high-priority overrides are durable and explainable;
- API, SDK, CLI, MCP, support, and webhook views expose compatible minimized schemas;
- performance tests prove Project open and command latency under background saturation;
- Workset restore and FocusState restore agree on active surface, selected resources, stale refs, and redaction summaries;
- accessibility tests prove keyboard and screen-reader resume flows;
- release evidence records digest correctness, user correction rate, privacy inspection, and load behavior.

## Documentation update rule

Changes to focus state, resume digest, attention ranking, Focus Sessions, notification suppression, or resume API behavior must update:

- [`../01-product/focus-continuity-and-work-resume.md`](../01-product/focus-continuity-and-work-resume.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md)
- [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`context-packs-and-agent-handoff.md`](context-packs-and-agent-handoff.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
