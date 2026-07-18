# Project operating layer control plane

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The Project Operating Layer is a coordination projection over canonical Project state. It unifies Work Packets, next-action ranking, command routing, Focus, Activity, Project Atlas, Project Health, Scenario Lab, Reversible Work, Progressive Delivery, Trust, Automation Recipes, outcome scorecards, and Product Truth without creating a new source of truth.

Product behavior is governed by [`../01-product/project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md). Advanced operating-layer differentiators and explicit non-actions are governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md).

## Goals

- Compose current work state from authoritative records in bounded, permission-filtered reads.
- Expose one consistent work-control model across UI, API, SDK, CLI, MCP, support, and release evidence.
- Recommend next actions from typed commands, ActionCards, Operations, Atlas reports, Trust blockers, Focus items, recipe state, and Product Truth signals.
- Include Project Health findings, causal lineage, and safe repair playbooks as next-action inputs only after health snapshots are authorized, redacted, and separated into observed signal, suspected cause, counterevidence, unknowns, and repair eligibility.
- Include Scenario simulations as next-action inputs only after simulation snapshots are authorized, redacted, current, and linked to owning resources.
- Include Reversible Work actions only after reversal capabilities are authorized, current, content-minimized, and linked to owning resources and side-effect ledgers.
- Convert repeated user work into non-runnable recipe drafts only after deterministic policy checks.
- Keep Project open, command search, and next-action ranking responsive under background load.
- Make every recommendation attributable, dismissible, measurable, and rebuildable.

## Authority boundary

The operating layer may read:

- Project, membership, policy, entitlement, usage, support-grant, SupportDiagnosticBundle, SupportAccessRequest, and SupportAccessSession state;
- DelegatedTrustGrants, ApprovalRequests, ApprovalBatches, approval-load budgets, and fatigue signals;
- Focus State, Resume Checkpoints, Resume Digests, and AttentionItems;
- SpatialWorkbenchState, Worksets, PaneInstances, WorksetSnapshots, and SpatialLayoutSuggestions;
- CommandActionDescriptors, command catalog entries, shortcut bindings, and CommandInvocations;
- Operations, Research Runs, ActivityEvents, outbox state, and progressive envelopes;
- Sources, SourceVersions, Claims, EvidenceSpans, Trust blockers, and citation state;
- Documents, document revisions, patches, comments, reviews, DecisionRecords, publications, and exports;
- Project Atlas neighborhoods, ProjectImpactReports, and map suggestions;
- ProjectHealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, RepairPlaybooks, RepairRuns, and repair outcome observations;
- Scenarios, ScenarioInputSnapshots, SimulationRuns, SimulatedEffects, ScenarioComparisons, ScenarioDecisions, ScenarioApplyCandidates, and SimulationOutcomeObservations;
- ReversalCapabilities, ReversalRecords, RecoveryActionCards, CompensationPlans, ReconciliationChecks, irreversible acknowledgements, and ReversalOutcomeObservations;
- Automation Recipes, recipe versions, recipe simulations, recipe runs, ActionCards, and outcome scorecards;
- Product Truth signals, contradiction records, feedback themes, experiments, and non-action decisions.

The operating layer must not own canonical mutations for these resources. It creates projections, recommendations, draft recipe proposals, and action links. Owning services still perform authorization, validation, mutation, auditing, and release evidence.

## Processing chain

```text
WorkControlRequest
-> authorize actor and Project
-> resolve active surface, selected resource, intent, mode, and source scope
-> load active Workset and pane refs where available
-> assemble bounded WorkContextSnapshot
-> join eligible commands, operations, blockers, focus items, Atlas nodes, recipes, outcomes, and truth signals
-> redact hidden or unauthorized state
-> rank NextActionCandidates deterministically
-> attach progressive status, cost, latency, approval, and recovery metadata
-> emit WorkPacket projection
-> record recommendation exposure, dismissal, correction, invocation, and outcome observations
```

Model-generated summaries may explain a Work Packet only after the snapshot is assembled and redacted. Models do not decide authorization, approval class, cost policy, or whether a recommendation is executable.

## Records

### WorkPacket

`WorkPacket` is a rebuildable projection:

```text
id
project_id
viewer_id
active_surface
selected_resource_ref
intent_ref
source_scope_ref
mode
focus_state_ref
workset_ref
operation_refs[]
activity_cursor
atlas_view_ref
scenario_refs[]
trust_blocker_refs[]
recipe_refs[]
action_card_refs[]
product_truth_refs[]
health_finding_refs[]
available_command_refs[]
disabled_command_refs[]
next_action_refs[]
status
staleness
redaction_summary
generated_summary_ref
created_at
expires_at
```

`WorkPacket` rows may be cached, but they are not authoritative. A stale or expired packet must be rebuilt before material action.

### WorkContextSnapshot

`WorkContextSnapshot` records the bounded, content-minimized inputs used to build a Work Packet:

```text
id
project_id
viewer_id
resource_refs[]
policy_version
membership_version
source_version_refs[]
document_revision_refs[]
activity_cursor
spatial_workbench_version
operation_cursor
command_catalog_version
recipe_catalog_version
atlas_projection_version
scenario_simulation_version
truth_graph_version
created_at
```

The snapshot stores identifiers, versions, hashes, labels, and classifications. It excludes raw private source text, full document bodies, hidden reasoning, prompts, credentials, screenshots, clipboard contents, and connector payloads.

### NextActionCandidate

`NextActionCandidate` is a projected recommendation:

```text
id
work_packet_id
source_kind
source_ref
target_resource_ref
command_descriptor_ref
action_card_ref
operation_ref
recipe_draft_ref
reason_code
rank
effect_summary
approval_class
side_effect_class
cost_class
latency_class
expected_versions[]
recovery_path_ref
blocked_reason
dismissed_state
outcome_ref
expires_at
```

Eligible `source_kind` values include `command`, `spatial-workbench`, `focus`, `activity`, `operation`, `action-card`, `health-finding`, `repair-playbook`, `scenario`, `scenario-apply-candidate`, `trust-blocker`, `atlas-impact`, `recipe`, `automation-outcome`, `product-truth`, `collaboration`, `publication`, `export`, `api`, and `support`.

### WorkControlObservation

`WorkControlObservation` links recommendation quality to outcomes:

```text
id
project_id
work_packet_id
candidate_id
event_kind
actor_id
result_ref
latency_ms
cost_class
correction_reason
created_at
```

Event kinds include `shown`, `opened`, `dismissed`, `deferred`, `invoked`, `blocked`, `failed`, `corrected`, `accepted`, `rejected`, `converted_to_recipe`, and `expired`.

## Next-action ranking

Ranking is deterministic and explainable. Inputs include:

- safety and approval class;
- valid delegated-trust grant state, approval-load budget, and fatigue signals;
- whether work is blocked, stale, over budget, failed, or waiting on the viewer;
- whether a Project Health finding has an authorized repair playbook, dry-run result, or unresolved repair failure;
- whether a Scenario simulation is current, deterministic, partial, blocked, stale, live-test-limited, or ready for an apply candidate;
- source, evidence, claim, publication, or deletion risk;
- relation to selected resource and active intent;
- relation to active Workset, pane purpose, and layout suggestion state;
- user-owned assignments, mentions, and review requests;
- Focus Session and notification policy;
- recipe outcome scorecard and adaptive recommendation state;
- deadline, schedule, and canary policy;
- prior user dismissals, corrections, and accepted outcomes.

Ranking must not use raw private content or hidden model reasoning. Learned ranking models, if later introduced, remain advisory and must expose feature classes, confidence, and fallback deterministic rank.

## Repeated-work capture

The operating layer may detect repeated command sequences, review paths, source maintenance flows, citation checks, publication preflights, export routines, GitHub proposal loops, or feedback triage. Detection creates only a `RecipeDraftCandidate`.

Before a repeated workflow can run:

1. normalize the sequence into typed commands and recipe steps;
2. prove every trigger has a source, selector, condition, dedupe key, cooldown, and replay rule;
3. separate deterministic steps from bounded AI steps and high-risk ActionCards;
4. run recipe validation and simulation;
5. reserve cost and capacity;
6. require owner approval and canary policy;
7. attach outcome scorecard definitions.

Repeated-work capture must not record raw content, screen activity, hidden browser state, or cross-app behavior outside authorized Project integrations.

## API and command exposure

Initial resource families:

- `GET /v1/projects/{project_id}/work-packets/current`
- `POST /v1/projects/{project_id}/work-packets/rebuild`
- `GET /v1/projects/{project_id}/work-packets/{work_packet_id}`
- `GET /v1/projects/{project_id}/next-actions`
- `POST /v1/projects/{project_id}/next-actions/{candidate_id}/dismiss`
- `POST /v1/projects/{project_id}/next-actions/{candidate_id}/invoke`
- `POST /v1/projects/{project_id}/recipe-draft-candidates`

Mutating routes require idempotency keys, expected versions, policy checks, and ActivityEvents. Invoking a high-risk candidate returns or opens an ActionCard rather than silently executing.
Invoking a Scenario-sourced candidate revalidates the ScenarioApplyCandidate and then hands the work to the owning service; the operating layer cannot turn a SimulatedEffect into a mutation.

Command Center exposes:

- open current Work Packet;
- show next safe action;
- explain why this is recommended;
- dismiss recommendation;
- rebuild work state;
- convert repeated work to recipe draft;
- inspect hidden or redacted state summary;
- open related Health finding, repair dry-run, repair run, Scenario card, Scenario comparison, stale-plan warning, Atlas impact, Trust blocker, Activity event, Focus item, Operation, or scorecard.

## Progressive delivery and cache policy

Work Packet reads are interactive workload. The first response should include compact status, selected resource, top next action, running Operations, urgent blockers, and available commands. Detailed Atlas neighborhoods, Scenario simulations, Trust drill-downs, large Activity searches, recipe simulations, and model explanations load progressively.

Fast Paths may return cached packets only when:

- actor, membership, policy, source scope, source versions, document revisions, command catalog, recipe catalog, Focus state, and Activity cursor still match;
- redaction state is current;
- stale labels are visible;
- any SpeculativePreparation used to build compact packet state is policy-approved, budgeted, visible when user resources are affected, and recorded with hit, miss, denied, cancelled, or expired outcome;
- material action revalidates before execution.

## Events

The Activity spine records:

- `work.packet_built`
- `work.packet_invalidated`
- `work.next_action_shown`
- `work.next_action_invoked`
- `work.next_action_dismissed`
- `work.next_action_corrected`
- `work.recipe_draft_suggested`
- `work.recommendation_outcome_recorded`

Health-originated recommendations also link to `health.finding_created`, `repair.playbook_dry_run_created`, `repair.run_started`, and `repair.outcome_observed` where applicable.
Scenario-originated recommendations also link to `scenario.simulation_completed`, `scenario.decision_recorded`, `scenario.apply_candidate_created`, `scenario.invalidated`, and `scenario.outcome_observed` where applicable.

Telemetry is content-minimized and must not contain raw source text, raw prompts, document bodies, credentials, screenshots, clipboard contents, or connector payloads.

## Invalidation

Work Packets invalidate on:

- membership, role, policy, support-grant, entitlement, budget, or residency change;
- delegated-trust grant, approval batch, approval receipt, approval-load, or fatigue-signal change;
- source addition, revocation, replacement, reprocessing, rights change, parser change, or source-version deletion policy;
- document revision, publication, export, lock, or review state change;
- claim, evidence, Trust blocker, contradiction, Product Truth, or official-reference freshness change;
- command catalog, shortcut binding, recipe version, recipe simulation, recipe run, outcome scorecard, or adaptive recommendation change;
- Scenario, ScenarioInputSnapshot, SimulationRun, SimulatedEffect, ScenarioComparison, ScenarioDecision, ScenarioApplyCandidate, or simulation invalidation change;
- Activity cursor, Operation state, Focus checkpoint, notification policy, or Atlas projection change;
- Health Snapshot, HealthFinding, RepairPlaybook, RepairRun, repair outcome, SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, support diagnostic, or health invalidation change;
- Spatial Workbench, Workset, PaneInstance, WorksetSnapshot, or layout suggestion change.

## Security and privacy

- Authorization runs before any Project state is assembled into a Work Packet.
- Redaction summaries can reveal that hidden state exists only when policy allows.
- Support tooling sees metadata-first diagnostics, SupportDiagnosticBundles, and redacted packet structure, not private content.
- Recommendation telemetry is classified as product analytics and follows minimization policy.
- Permission prompts are grouped by meaningful risk so low-risk actions do not train users to accept dangerous actions.
- SimulatedEffects cannot authorize mutation; apply candidates always revalidate expected versions, policy, approval, idempotency, and side-effect rules at the owning service boundary.
- Cross-tenant leakage, external-write without approval, hidden recipe activation, and stale packet mutation are non-waivable launch blockers.

## Tests

Required coverage:

- unit tests for packet assembly, redaction, invalidation, ranking, stale labels, and candidate expiry;
- integration tests with Project policy, command routing, Focus, Activity, Atlas, Scenario Lab, Trust, recipes, outcome scorecards, and Product Truth;
- negative authorization tests proving hidden resources do not enter packets or recommendations;
- e2e tests for Project open, next-action invocation, recommendation dismissal, ActionCard escalation, recipe-draft conversion, source-change recovery, stale packet rebuild, and failed Operation recovery;
- performance tests for Project open, command search, next-action ranking, packet rebuild, and recommendation telemetry under background saturation;
- accessibility tests for keyboard, pointer, touch, screen reader, disabled reasons, redaction summaries, and progressive updates.

## Launch gates

The operating layer is production-ready only when:

- `WORK-001` and `WORK-002` pass implementation and conformance tests;
- Work Packets and NextActionCandidates are rebuildable projections, not authority stores;
- Workset and pane refs can influence ranking only after reauthorization and cannot become content, evidence, permission, or memory authority;
- high-risk candidates require preflight and approval receipts;
- health-originated repair candidates require diagnostic evidence, dry-run behavior where material, and owning-service preflight before mutation;
- scenario-originated candidates require current input snapshots, stale-plan rejection, live-test labeling, and owning-service apply-candidate preflight before mutation;
- delegated-trust grants can satisfy only exact covered candidate envelopes and fail closed on drift;
- recommendation quality is measured by accepted outcomes, corrections, dismissals, recovery success, latency, cost, and approval burden;
- privacy tests prove no screen, clipboard, raw prompt, raw source, hidden reasoning, or connector payload enters packets, telemetry, support, or analytics;
- release evidence includes packet invalidation, authorization, ranking, repeated-work capture, recipe-draft conversion, and stale-state behavior.

## Documentation update rule

Changes to Work Packets, next-action ranking, repeated-work capture, operating-layer API routes, events, cache policy, telemetry, or invalidation must update:

- [`../01-product/project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md)
- [`../01-product/project-workspace.md`](../01-product/project-workspace.md)
- [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md)
- [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`project-map-and-impact-analysis.md`](project-map-and-impact-analysis.md)
- [`project-health-diagnostics-and-repair.md`](project-health-diagnostics-and-repair.md)
- [`scenario-simulation-engine.md`](scenario-simulation-engine.md)
- [`progressive-delivery-and-fast-path-cache-policy.md`](progressive-delivery-and-fast-path-cache-policy.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md)
- [`product-truth-graph-and-contradiction-detection.md`](product-truth-graph-and-contradiction-detection.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
