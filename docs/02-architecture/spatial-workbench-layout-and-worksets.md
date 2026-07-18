# Spatial workbench layout and worksets

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md). Advanced operating-layer Workset differentiation and explicit window-management non-actions are governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). Device capability, local cache, offline drafts, reconnect, and sync-conflict behavior is specified in [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md). This contract defines how Research stores Project-scoped layout state, Worksets, panes, snapshots, adaptive layout suggestions, and restore behavior without becoming a second source of truth or an operating-system workspace manager.

This document governs `LAYOUT-002` and supports `LAYOUT-001`.

## Goals

- Preserve Project work context across reloads, devices, screen sizes, and interruptions.
- Support named Worksets for writing, evidence review, source triage, publication preflight, automation debugging, Project Atlas inspection, and administration.
- Keep layout restore fast by returning a compact authorized shell before expensive pane hydration.
- Reauthorize every pane, Workset, resource ref, snapshot, API read, SDK read, MCP read, support view, export, and handoff.
- Keep layout state content-minimized and rebuildable from canonical Project records.
- Make adaptive layout suggestions visible, reversible, measurable, and accessibility-aware.

## Authority model

Spatial records are projections and preferences over:

- Project, membership, policy, entitlement, support-grant, and settings state;
- FocusState, ResumeCheckpoint, ResumeDigest, AttentionItem, and FocusSession state;
- WorkPacket, WorkContextSnapshot, NextActionCandidate, and WorkControlObservation state;
- CommandActionDescriptor, CommandInvocation, ShortcutBinding, and command catalog state;
- Conversation, message, IntentRecord, Operation, ActivityEvent, and ActionCard state;
- Source, SourceVersion, Claim, EvidenceSpan, Trust blocker, and Project Atlas state;
- Document, DocumentRevision, DocumentBlock, DocumentPatch, comment, review, and DecisionRecord state;
- Automation Recipe, RecipeRun, ApprovalRequest, ApprovalBatch, DelegatedTrustGrant, outcome scorecard, and adaptive recommendation state;
- Publication, export, billing, support, Product Truth, and release-evidence state.

If a Workset or pane conflicts with an owning domain record, the owning record wins. The layout projection is rebuilt, redacted, marked stale, or invalidated.

## Processing chain

```text
Project open, Workset switch, pane command, restore, or device resize
-> authenticate actor and Project
-> load compact SpatialWorkbenchState
-> reauthorize Workset, pane, and resource refs
-> compare expected versions, policy hash, Focus checkpoint, Activity cursor, and layout version
-> return compact shell with pane refs, stale/redacted state, and top commands
-> hydrate authorized panes progressively through owning domain readers
-> write user-visible ActivityEvent for material layout restore or shared Workset change
-> record content-minimized layout observation
```

Pane hydration is lazy and bounded. A document pane reads current document state from the document service, a source pane reads current SourceVersion state from source services, an evidence pane reads EvidenceSpan and Claim state, and an automation pane reads Operation, Activity, and recipe state.

## Records

### SpatialWorkbenchState

Representative fields:

```text
spatial_workbench_state_id
organization_id
project_id
viewer_id
active_workset_id
active_surface
active_pane_id
pane_layout_template_id
pane_instances[]
selected_resource_refs[]
viewport_class
input_mode
accessibility_mode
hydration_state
focus_state_ref
work_packet_ref
state_version
updated_at
```

This record is mutable user work-position state. It stores refs, versions, safe labels, layout constraints, and accessibility preferences only.

### Workset

Representative fields:

```text
workset_id
organization_id
project_id
owner_actor_id
visibility
title
purpose
mode
source_scope_ref
pane_layout_template_id
selected_resource_refs[]
comparison_set_refs[]
focus_checkpoint_ref
work_packet_ref
activity_cursor
policy_snapshot_hash
status
created_at
updated_at
archived_at
```

Visibility values include `personal`, `project_shared`, `handoff`, `review_item`, `support_diagnostic`, and `template`. A shared Workset does not grant access to resources; it only shares restorable references and layout intent.

### PaneLayoutTemplate

Representative fields:

```text
pane_layout_template_id
organization_id
project_id
scope
name
purpose
allowed_pane_types[]
breakpoint_rules
default_regions
accessibility_constraints
status
version
```

Templates can be built in, Project-owned, or Organization-owned. They cannot require a pane type that the viewer cannot access.

### PaneInstance

Representative fields:

```text
pane_instance_id
workset_id
pane_type
region
resource_ref
expected_version_ref
selection_ref
hydration_state
stale_reason
redaction_reason
blocked_reason
collapsed_state
pin_state
created_by_command_invocation_id
```

Pane types are controlled values such as `chat`, `document`, `source`, `evidence`, `claim`, `trust`, `activity`, `project_atlas`, `automation`, `approval`, `scorecard`, `settings`, `api_operation`, and `support_diagnostic`.

### WorksetSnapshot

Representative fields:

```text
workset_snapshot_id
organization_id
project_id
workset_id
viewer_id
reason
pane_instances[]
selected_resource_refs[]
source_scope_ref
document_revision_refs[]
source_version_refs[]
activity_cursor
focus_checkpoint_ref
work_packet_ref
policy_snapshot_hash
created_at
expires_at
```

Snapshots are immutable until retention or deletion policy applies. They are not bearer tokens and cannot preserve access after permissions change.

### SpatialLayoutSuggestion

Representative fields:

```text
layout_suggestion_id
organization_id
project_id
viewer_id
source_kind
source_ref
recommended_template_ref
target_workset_ref
reason_code
expected_improvement_class
accessibility_impact
dismissed_state
accepted_state
expires_at
```

Eligible `source_kind` values include `command`, `focus`, `work_packet`, `activity`, `trust_blocker`, `atlas_impact`, `automation_debug`, `publication_preflight`, `source_triage`, `collaboration_review`, and `user_repeat_pattern`.

### SpatialLayoutObservation

Representative fields:

```text
layout_observation_id
organization_id
project_id
viewer_id
workset_id
event_kind
latency_ms
viewport_class
input_mode
result_ref
correction_reason
created_at
```

Event kinds include `workset_opened`, `workset_switched`, `workset_suspended`, `workset_restored`, `pane_pinned`, `pane_closed`, `layout_suggestion_shown`, `layout_suggestion_accepted`, `layout_suggestion_dismissed`, `restore_failed`, `stale_ref_recovered`, and `redacted_ref_shown`.

## API and command exposure

Initial resource routes:

- `GET /v1/projects/{project_id}/spatial-workbench`
- `PATCH /v1/projects/{project_id}/spatial-workbench`
- `GET /v1/projects/{project_id}/worksets`
- `POST /v1/projects/{project_id}/worksets`
- `GET /v1/projects/{project_id}/worksets/{workset_id}`
- `PATCH /v1/projects/{project_id}/worksets/{workset_id}`
- `POST /v1/projects/{project_id}/worksets/{workset_id}/suspend`
- `POST /v1/projects/{project_id}/worksets/{workset_id}/restore`
- `POST /v1/projects/{project_id}/worksets/{workset_id}/snapshots`
- `GET /v1/projects/{project_id}/layout-suggestions`
- `POST /v1/projects/{project_id}/layout-suggestions/{suggestion_id}/resolve`

Mutations require idempotency keys, expected versions, policy checks, and ActivityEvents when a shared Workset, handoff Workset, review Workset, or support diagnostic changes. Personal local pane preference updates can be lightweight but still require authorization and expected state version.

Command Center exposes the spatial commands specified in the product contract. Commands bind to `CommandActionDescriptor` records and cannot invoke arbitrary client-side handlers for material Workset changes.

## Progressive hydration and cache policy

Spatial Workbench reads are interactive workload. The first response contains:

- active Workset identity and title;
- pane types, regions, safe resource labels, hydration states, stale or redacted reasons, and top commands;
- WorkPacket, FocusState, ResumeDigest, Activity cursor, and policy refs where available;
- viewport and accessibility layout hints.

Detailed content loads through owning domain APIs. Fast Paths may serve compact layout state only when actor, membership, policy, source scope, document revisions, source versions, FocusState, WorkPacket, command catalog, and layout version still match. Any material command revalidates before execution.

## Events

Activity and audit systems record material spatial events:

- `spatial.workset_created`
- `spatial.workset_updated`
- `spatial.workset_archived`
- `spatial.workset_shared`
- `spatial.workset_suspended`
- `spatial.workset_restored`
- `spatial.snapshot_created`
- `spatial.layout_suggestion_created`
- `spatial.layout_suggestion_resolved`
- `spatial.layout_invalidated`
- `spatial.restore_failed`

High-volume personal pane movements can remain product analytics events when content-minimized and policy-allowed. Shared Workset, handoff, support, review, publication, and approval-related layout changes produce durable ActivityEvents.

## Invalidation

Spatial records invalidate or partially redact when:

- membership, role, policy, support grant, entitlement, budget, residency, retention, or rights state changes;
- source addition, revocation, replacement, deletion, parser change, rights change, or SourceVersion policy changes;
- document revision, lock, publication, export, review, or comment state changes;
- Claim, EvidenceSpan, Trust blocker, contradiction, Product Truth, or official-reference freshness changes;
- command descriptor, shortcut, FocusState, WorkPacket, Activity cursor, Operation, Automation Recipe, ApprovalRequest, ApprovalBatch, DelegatedTrustGrant, or outcome scorecard changes;
- viewport, device capability, accessibility mode, or layout template compatibility changes.

Invalidation never deletes canonical content. It updates Workset and pane state to stale, redacted, blocked, unavailable, or needs-rebuild.

## Security and privacy

- Authorization runs before any Workset, pane, snapshot, or suggestion is returned.
- Shared Worksets expose only resource refs and safe labels that the viewer can currently see.
- Layout state cannot reveal private source titles, document names, reviewer identity, support metadata, billing details, or connector details to unauthorized users.
- Snapshots exclude raw source text, raw prompts, private document bodies, hidden reasoning, credentials, connector payloads, browser history, screen captures, clipboard contents, and operating-system window state.
- Support diagnostics default to redacted pane topology and reason codes.
- Adaptive suggestions must not be based on hidden model reasoning or raw private content.

## Tests

Required coverage:

- Workset, PaneInstance, WorksetSnapshot, and LayoutSuggestion schema validation;
- restore after reload, device switch, viewport change, and Project switch;
- restore after offline use, local-cache invalidation, reconnect, and sync conflict;
- authorization redaction after membership, source, connector, document, comment, review, and support-grant changes;
- stale state after document revision, source version, claim, evidence, Trust blocker, and Activity cursor changes;
- command descriptor routing for Workset create, switch, suspend, restore, share, and delete;
- Fast Path invalidation and progressive pane hydration;
- support, API, SDK, CLI, and MCP content minimization;
- keyboard, pointer, touch, screen-reader, reduced-motion, and narrow-screen journeys;
- load tests for large Projects, many Worksets, many panes, and background indexing or automation saturation.

## Launch gates

Spatial Workbench is production-ready only when:

- `LAYOUT-001` and `LAYOUT-002` are implemented;
- Worksets, panes, snapshots, suggestions, and observations are projections or preferences, not content authorities;
- every restore path reauthorizes linked resources before hydration;
- stale, redacted, deleted, unavailable, and conflict states render consistently across UI, API, SDK, CLI, MCP, support, and release evidence;
- adaptive layout suggestions are explainable, dismissible, reversible, measurable, and accessibility-aware;
- performance evidence proves Project open, Workset switch, pane hydration, and restore remain within interactive budgets under background load;
- privacy tests prove no raw content, prompt, hidden reasoning, credential, connector payload, screen capture, clipboard, browser history, or OS window state enters layout storage, telemetry, support, or analytics.

## Documentation update rule

Changes to SpatialWorkbenchState, Workset, PaneLayoutTemplate, PaneInstance, WorksetSnapshot, SpatialLayoutSuggestion, layout APIs, events, invalidation, or hydration policy must update:

- [`../01-product/spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md)
- [`../01-product/project-workspace.md`](../01-product/project-workspace.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md)
- [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`progressive-delivery-and-fast-path-cache-policy.md`](progressive-delivery-and-fast-path-cache-policy.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../08-build/ui-system-and-chatgpt-patterns.md`](../08-build/ui-system-and-chatgpt-patterns.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
