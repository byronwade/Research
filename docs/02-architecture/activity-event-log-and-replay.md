# Activity event log and replay

Activity is the application-owned event spine that connects durable operations, audit, review queues, automation debugging, release evidence, support diagnostics, and user-facing progress. It is not a raw observability stream and it is not a replacement for canonical domain state.

This architecture supports the product surface in [`../01-product/activity-timeline-and-review-queue.md`](../01-product/activity-timeline-and-review-queue.md).

## Event authorities

Research separates event-like data into distinct authorities:

- **Domain rows:** current authoritative state for Projects, Sources, Claims, Documents, Publications, Automations, and Entitlements.
- **Audit events:** immutable compliance and security facts for privileged actions and material changes.
- **Operation progress events:** user-visible progress for long-running work, reconnect, SDK polling, and webhooks.
- **Progressive delivery events:** immediate shell/status and staged Partial Result delivery governed by [`progressive-delivery-and-fast-path-cache-policy.md`](progressive-delivery-and-fast-path-cache-policy.md).
- **Activity events:** content-minimized Project timeline and review-queue cards assembled from domain, audit, operation, workflow, and side-effect records.
- **Command invocations:** user-visible command attempts, shortcut executions, ActionCard openings, and command results governed by [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md).
- **Spatial workbench events:** material Workset create, share, suspend, restore, snapshot, layout suggestion, restore failure, and invalidation events governed by [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md).
- **Approval policy events:** approval requests, delegated-trust grants, approval batches, receipts, revocations, load thresholds, and fatigue signals governed by [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md).
- **Focus and resume projections:** Focus State updates, Resume Checkpoints, Resume Digests, Focus Sessions, attention items, and notification suppression state governed by [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md).
- **Device continuity projections:** DeviceCapabilityProfiles, LocalCacheManifests, OfflineDrafts, OfflineActionQueueItems, SyncAttempts, SyncConflicts, DeviceContinuityLinks, and local-cache invalidations governed by [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md).
- **Work control projections:** WorkPackets, NextActionCandidates, repeated-work capture, and recommendation observations governed by [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md).
- **Project health, support, and repair projections:** Health Snapshots, HealthSignals, HealthLineageEdges, HealthFindings, repair playbook dry-runs, RepairRuns, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support-safe diagnostics, and repair outcome observations governed by [`project-health-diagnostics-and-repair.md`](project-health-diagnostics-and-repair.md), [`tenancy-authorization-and-capabilities.md`](tenancy-authorization-and-capabilities.md), and [`../01-product/project-settings-and-administration.md`](../01-product/project-settings-and-administration.md).
- **Scenario simulation projections:** Scenarios, input snapshots, simulation plans, simulated effects, comparisons, decisions, apply candidates, invalidations, and outcome observations governed by [`scenario-simulation-engine.md`](scenario-simulation-engine.md).
- **Reversal projections:** ReversalCapabilities, ReversalRecords, ReversalSnapshots, RecoveryActionCards, CompensationPlans, ReconciliationChecks, irreversible acknowledgements, invalidations, and outcome observations governed by [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md).
- **Outcome observations:** derived but rebuildable measurements of useful automation outcomes, governed by [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md).
- **Telemetry:** traces, metrics, and logs for engineering observability, stripped of private content where possible.

Activity may reference these authorities but cannot override them.

## Event envelope

Every material activity event stores:

```text
activity_event_id
organization_id
project_id
event_type
event_version
resource_type
resource_id
actor_type
actor_id
operation_id
workflow_id
automation_id
intent_id
intent_version
causation_id
correlation_id
idempotency_key
source_scope_snapshot
policy_snapshot
approval_class
status
occurred_at
visible_after
retention_class
redaction_class
summary
links
payload_hash
```

Payloads are typed by `event_type` and `event_version`. Private source text, hidden model reasoning, credentials, raw prompts, full connector payloads, and unredacted document bodies are not stored in activity payloads.

## Event families

Initial event families:

- source: uploaded, parsed, indexed, refreshed, skipped, failed, revoked, deleted, restored;
- command: catalog opened, command searched, command invoked, command denied, command cancelled, command failed, shortcut conflict detected, command recommendation dismissed;
- spatial workbench: Workset created, Workset shared, Workset suspended, Workset restored, snapshot created, layout suggestion created, layout suggestion resolved, layout invalidated, restore failed;
- intent: captured, assumption recorded, clarification requested, clarification answered, preflight passed, preflight blocked, plan accepted;
- retrieval: query started, candidate set built, authorization denied, evaluation failed;
- progressive delivery: envelope created, Fast Path used, Fast Path denied, Partial Result emitted, stale projection served, revalidation started, revalidation completed, stage degraded, cancellation acknowledged;
- claim and evidence: claim created, support changed, contradiction found, stale state changed, publication blocker opened;
- document: revision created, patch proposed, patch accepted, patch rejected, conflict detected, export created;
- research run: contract created, plan changed, source acquired, section drafted, audit failed, run paused, run completed;
- model and tool: model role invoked, provider fallback used, tool allowed, tool denied, tool failed;
- model council: council started, disagreement found, missing evidence recorded, human review requested;
- automation: preflight passed, dry run created, run started, budget threshold hit, run failed, run replayed, automation paused;
- automation debug: trace captured, divergence marked, failure classified, replay case created, evaluation fixture created, trace comparison created;
- automation outcome: outcome window created, accepted output observed, rejected output observed, cost anomaly observed, scorecard updated, adaptive recommendation created, adaptive recommendation resolved;
- work control: packet built, packet invalidated, next action shown, next action invoked, next action dismissed, next action corrected, recipe draft suggested, recommendation outcome recorded;
- project health: snapshot created, finding opened, finding snoozed, finding dismissed, finding resolved, repair dry run created, repair action card created, repair run started, repair run blocked, repair run completed, repair run failed, repair outcome observed;
- scenario: created, input snapshot created, simulation started, effect recorded, simulation completed, simulation failed, comparison created, decision recorded, apply candidate created, invalidated, outcome observed;
- reversal: capability created, capability updated, record created, snapshot created, preview required, action card created, submitted, started, completed, failed, blocked, invalidated, cancelled, irreversible acknowledged, compensation plan created, compensation step started, compensation step completed, compensation step failed, reconciliation check created, reconciliation check completed, outcome observed;
- focus and resume: focus state updated, resume checkpoint created, resume digest generated, digest marked caught up, focus session started, focus session ended, attention item snoozed, attention item routed;
- device continuity: capability profile observed, local cache manifest created, local cache invalidated, offline draft created, offline draft submitted, offline draft discarded, offline queue item queued, offline queue item blocked, offline queue item cancelled, sync attempt started, sync attempt completed, sync conflict created, sync conflict resolved, continuity link created, continuity link used;
- approval: requested, batched, granted, rejected, expired, escalated, superseded, blocked;
- delegated trust: proposed, granted, narrowed, revoked, expired;
- approval load: threshold crossed, fatigue signal recorded;
- side effect: notification sent, webhook delivered, GitHub branch created, public snapshot published, billing reservation settled;
- governance: rights decision recorded, residency blocker opened, connector scope revoked, support grant opened, SupportDiagnosticBundle created, SupportAccessRequest decided, SupportAccessSession started, revoked, or expired, support audit exported, break-glass reviewed;
- feedback: correction received, theme linked, non-action decision recorded.

## Write path

Activity events are written from the same application services that own domain state. A command that changes authoritative state writes:

1. domain changes;
2. audit event where applicable;
3. operation or workflow progress event where applicable;
4. side-effect ledger entry where applicable;
5. activity event or projection invalidation.

The transaction boundary follows [`durable-workflows-idempotency-and-outbox.md`](durable-workflows-idempotency-and-outbox.md). Activity cannot be emitted only from a client, worker log, or provider callback.

## Projection and delivery

Activity is read through bounded projections:

- Project timeline;
- resource-local timeline;
- operation detail;
- command invocation detail;
- Spatial Workbench and Workset detail;
- focus state and resume digest detail;
- device capability, local queue, sync attempt, and sync conflict detail;
- progressive delivery and Partial Result detail;
- automation run debugger;
- automation run debug trace, failure taxonomy, replay case, fixture-creation, and trace-comparison views;
- automation outcome scorecard;
- Project Health Console, finding detail, repair run detail, and support-safe diagnostic view;
- Scenario Lab, simulation run detail, comparison detail, stale-plan detail, apply-candidate detail, and simulation outcome view;
- Project History, recovery card, compensation plan, reconciliation check, irreversible acknowledgement, and reversal outcome view;
- review queue;
- release evidence subset;
- support-safe diagnostic view;
- API, SDK, CLI, MCP, SSE, and webhook views.

Large Projects use pagination, time windows, server-side filters, and neighborhood queries around selected resources. Browser clients do not render the entire Project graph.

## Redaction and authorization

Authorization is evaluated at read time and projection time:

- users see only events for Projects and resources they can access;
- source-linked details are hidden when the viewer lacks source permission;
- external connector fields are minimized to provider, target, status, and safe identifiers;
- model and tool details disclose role, route, result status, cost, and safe metadata, not hidden reasoning;
- support views default to metadata-only and require time-bounded grants for sensitive detail.

If authorization changes, cached activity projections are invalidated or filtered before delivery.

## Replay semantics

Replay means re-running an eligible operation or automation against declared immutable inputs. It is not a blind event reapplication and not the same as restore, withdrawal, compensation, reconciliation, or disaster recovery.

Replay requires:

- immutable source versions or explicit source refresh decision;
- workflow and tool schema compatibility;
- operation type that supports replay;
- idempotency and side-effect ledger checks;
- budget reservation;
- approval for external writes, publication, billing, or destructive work;
- a new activity event linking original and replayed runs.

Replay can use stored model/tool outputs for debugging when policy allows, but production replay of user-visible decisions must respect current provider policy, rights, authorization, and source freshness.

Restore, withdrawal, compensation, and reconciliation use the reversal ledger defined in [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md). Activity can expose those states, but it cannot delete or rewrite the original ActivityEvent, audit event, or side-effect ledger entry.

## Automation Run Debugger projections

Automation Run Debugger projections are derived views over existing authorities. They do not create a new trace authority and cannot repair or replay work by themselves.

Representative projection fields:

```text
debug_trace_id
organization_id
project_id
automation_or_recipe_ref
run_ref
operation_id
trigger_ref
source_scope_snapshot
context_pack_ref
step_graph_hash
model_role_refs
tool_call_refs
policy_check_refs
side_effect_refs
outcome_refs
failure_taxonomy_refs
divergence_markers
replay_eligibility
comparison_run_refs
fixture_candidate_refs
redaction_summary
created_at
```

Debugger projections store identifiers, hashes, classifications, summaries, and safe excerpts only where policy allows. They can mark likely divergence points, but any inferred root cause is labeled as inferred until confirmed by deterministic replay, fixture evaluation, or human review. Debugger findings can create ActionCards, recipe simulation cases, evaluation fixtures, Product Truth signals, or adaptive-routing recommendations; they cannot silently change automation behavior.

## Retention

Activity retention is classified:

- short-lived progress detail;
- Project activity summary;
- audit-critical security and approval events;
- billing and entitlement evidence;
- publication and release evidence;
- support diagnostic evidence.

Deletion and export follow source and Project policy. Deleting a chat, automation, connector, or document does not erase audit-critical activity needed for compliance, billing, publication, or recovery.

## Failure behavior

If activity projection fails, authoritative domain state remains intact. The user sees a degraded Activity state with affected time range, missing projection, retry status, and support-safe diagnostic ID.

If activity event writing fails inside a command that requires audit or review evidence, the command fails closed. If a non-critical projection update fails after commit, the projection is rebuilt from domain, audit, operation, and outbox records.

## Validation

Tests cover:

- event envelope validation;
- unknown event version handling;
- projection pagination and filters;
- cross-tenant event reads;
- source-permission redaction;
- operation reconnect and replay windows;
- ProgressiveDeliveryEnvelope, PartialResult, stale projection, and FastPathSnapshot reconstruction;
- Automation Run Debugger projection, failure taxonomy, trace-comparison, replay-case, and fixture-creation reconstruction;
- duplicate, delayed, and out-of-order events;
- approval expiry and supersession;
- delegated-trust grant invalidation, approval batch reconstruction, and fatigue signal projection;
- side-effect replay without duplicate external writes;
- intent, clarification, preflight, and approval receipt reconstruction;
- command descriptor, shortcut binding, invocation, and result reconstruction;
- SpatialWorkbenchState, Workset, PaneInstance, WorksetSnapshot, layout suggestion, restore, stale ref, and redaction reconstruction;
- Focus State, Resume Checkpoint, Resume Digest, Focus Session, attention item, and notification suppression reconstruction;
- DeviceCapabilityProfile, LocalCacheManifest, OfflineDraft, OfflineActionQueueItem, SyncAttempt, SyncConflict, DeviceContinuityLink, and local-cache invalidation reconstruction;
- WorkPacket, NextActionCandidate, repeated-work capture, and recommendation observation reconstruction;
- ProjectHealthSnapshot, HealthFinding, RepairPlaybook, RepairRun, support-safe diagnostic, and repair outcome reconstruction;
- Scenario, ScenarioInputSnapshot, SimulationRun, SimulatedEffect, ScenarioComparison, ScenarioDecision, ScenarioApplyCandidate, and SimulationOutcomeObservation reconstruction;
- ReversalCapability, ReversalRecord, ReversalSnapshot, RecoveryActionCard, CompensationPlan, ReconciliationCheck, irreversible acknowledgement, and ReversalOutcomeObservation reconstruction;
- automation outcome scorecard rebuild and adaptive recommendation projection;
- activity rebuild from audit and operation records;
- support-safe diagnostic access.
