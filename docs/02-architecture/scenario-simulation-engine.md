# Scenario simulation engine

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

Product behavior is specified in [`../01-product/scenario-lab-and-change-simulation.md`](../01-product/scenario-lab-and-change-simulation.md). This architecture defines the Project-wide simulation engine that creates content-minimized snapshots, runs deterministic-first analyzers, records simulated effects, compares options, invalidates stale plans, and hands apply candidates to owning mutation services.

This architecture governs `SIM-002` and supports `SIM-001`.

## Goals

- Preview Project changes before mutation across sources, claims, documents, publications, recipes, repairs, recovery actions, Work Packets, policies, model routes, budgets, repositories, and release candidates.
- Separate simulation from mutation so previews cannot perform hidden side effects.
- Make unknowns, unsupported checks, live-test boundaries, stale inputs, redactions, costs, latency, and approval class visible.
- Reuse existing Project authorities rather than creating a second evidence, document, workflow, approval, health, map, recipe, publication, or release system.
- Measure whether simulations predicted real outcomes accurately enough for production use.

## Authority boundary

The simulation engine may read:

- Project, membership, policy, entitlement, usage, budget, residency, retention, and support-grant state;
- Sources, SourceVersions, parser runs, index manifests, connector sync state, rights decisions, and source-change proposals;
- Claims, EvidenceSpans, Trust blockers, contradiction records, freshness state, and citation coverage;
- Documents, DocumentBlocks, revisions, patches, comments, reviews, decisions, publications, exports, and locked regions;
- ActivityEvents, Operations, ActionCards, approval requests, approval receipts, delegated-trust grants, side-effect ledgers, ReversalCapabilities, ReversalRecords, CompensationPlans, ReconciliationChecks, audit refs, and incidents;
- Spatial Workbench state, Worksets, PaneInstances, Focus State, Resume Digests, Work Packets, and NextActionCandidates;
- Project Atlas neighborhoods, Impact Reports, graph invalidations, Project Health snapshots, findings, repair playbooks, and repair runs;
- Automation Recipes, RecipeVersions, RecipeRuns, canary gates, outcome scorecards, adaptive-routing recommendations, and launch gates;
- Product Truth signals, official references, feedback themes, experiments, release evidence, GitHub snapshots, validation runs, branches, commits, and pull-request proposals;
- content-minimized telemetry aggregates and SLO state for Research-owned services.

The simulation engine creates Scenario records, input snapshots, simulation plans, simulation runs, simulated effects, comparisons, decisions, apply candidates, invalidations, and outcome observations. It cannot mutate the authoritative resources it analyzes. Owning services remain responsible for authorization, preflight, mutation, approval enforcement, idempotency, auditing, rollback, withdrawal, compensation, reconciliation, and irreversible-state labeling.

## Processing chain

```text
Scenario request
-> authorize actor, Project, scope, and target resource
-> normalize ScenarioIntent and option set
-> assemble ScenarioInputSnapshot from canonical records
-> resolve deterministic SimulationPlan and required analyzers
-> run policy, graph, health, recipe, document, publication, cost, latency, and security analyzers
-> run sandboxed or mocked connector checks only when policy allows and label live tests explicitly
-> attach model-estimated explanations only after redaction
-> record SimulatedEffects and unknowns
-> compare options when requested
-> create ScenarioDecision or ActionCard
-> revalidate before apply candidate
-> hand apply candidate to owning mutation service
-> observe real outcome and update simulation accuracy metrics
```

Every step is bounded by depth, node count, source scope, time window, token budget, workflow budget, cost class, latency class, and policy limits. Over-limit simulations return `partial`, `unsupported`, `degraded`, or `blocked` state with safe next actions.

## Core records

### Scenario

User-facing scenario envelope.

```text
scenario_id
organization_id
project_id
actor_id
scenario_type
target_resource_ref
target_expected_version
source_scope_ref
option_refs[]
intent_ref
status
created_at
expires_at
```

Statuses include `draft`, `simulating`, `ready`, `partial`, `blocked`, `expired`, `superseded`, `decided`, and `applied_candidate_created`.

### ScenarioInputSnapshot

Content-minimized input snapshot.

```text
scenario_input_snapshot_id
project_id
scenario_id
policy_version
membership_version
source_version_refs[]
document_revision_refs[]
claim_refs[]
recipe_version_refs[]
health_snapshot_refs[]
impact_report_refs[]
activity_cursor
operation_cursor
telemetry_window_ref
redaction_summary
input_hash
created_at
expires_at
```

Snapshots store identifiers, versions, hashes, safe labels, counters, reason codes, and redaction summaries. They exclude raw source text, document bodies, prompts, private comments, hidden reasoning, credentials, screenshots, clipboard contents, browser history, operating-system state, and full connector payloads.

### SimulationPlan

Engine-owned execution plan.

```text
simulation_plan_id
project_id
scenario_id
input_snapshot_id
analyzer_refs[]
required_authorities[]
mock_policy_ref
live_test_policy_ref
cost_budget_ref
latency_budget_ref
known_limitations[]
status
created_at
expires_at
```

The plan is not an approval to mutate. It describes how the simulation was performed and why any areas are unsupported.

### SimulationRun

Execution record for a plan.

```text
simulation_run_id
project_id
scenario_id
simulation_plan_id
actor_id
operation_id
idempotency_key
started_at
completed_at
status
failure_reason
```

Long simulations are Operations and emit progressive status events.

### SimulatedEffect

Individual predicted or detected effect.

```text
simulated_effect_id
project_id
simulation_run_id
effect_type
affected_resource_ref
affected_expected_version
authority_ref
confidence_class
evidence_ref
side_effect_class
approval_class
cost_class
latency_class
recovery_policy
redaction_summary
unknowns[]
created_at
```

`confidence_class` values include `deterministic`, `observed_fixture`, `mocked`, `model_estimated`, `unsupported`, and `unknown`.

### ScenarioComparison

Comparison over scenario options.

```text
scenario_comparison_id
project_id
scenario_id
option_refs[]
ranking_policy_ref
tradeoff_summary
blocked_option_refs[]
created_at
```

Comparisons must preserve tradeoffs. They cannot collapse cost, speed, evidence risk, publication risk, approval load, and recovery into one unexplained score.

### ScenarioDecision

Decision trail.

```text
scenario_decision_id
project_id
scenario_id
actor_id
selected_option_ref
rationale
action_card_id
approval_request_id
apply_candidate_id
status
created_at
```

Decisions do not mutate state by themselves.

### ScenarioApplyCandidate

Revalidated handoff to an owning service.

```text
scenario_apply_candidate_id
project_id
scenario_id
selected_option_ref
target_resource_ref
expected_versions[]
preflight_result_ref
approval_receipt_ref
idempotency_key
owning_service
status
created_at
expires_at
```

Apply candidates become invalid when any dependency changes before mutation.

### SimulationOutcomeObservation

Post-action accuracy record.

```text
simulation_outcome_observation_id
project_id
scenario_id
apply_candidate_id
actual_operation_id
metric_kind
predicted_value
actual_value
classification
followup_action_ref
created_at
```

Outcome observations feed automation outcome scorecards, Product Truth, quality gates, support diagnostics, and release evidence. They do not become factual evidence for user documents.

## Analyzer families

Initial analyzer families:

- `authorization_policy`: membership, capability, support grant, residency, retention, rights, and delegated trust.
- `dependency_impact`: Project Atlas and living dependency graph traversal.
- `source_change`: source refresh, revocation, deletion, parser, index, rights, and connector impact.
- `claim_document`: claim support, citation coverage, stale claims, document patch, locked block, and publication blockers.
- `publication_export`: public/private projection, export package, takedown, withdrawal, and rights validation.
- `automation_recipe`: recipe validation, dry-run, fixture coverage, trigger dedupe, canary gate, side effect, and outcome scorecard.
- `project_health_repair`: HealthFinding, repair playbook, repeated repair, and support-safe diagnostic checks.
- `reversal_recovery`: ReversalCapability, ReversalRecord, RecoveryActionCard, CompensationPlan, reconciliation state, irreversible labels, and stale recovery blockers.
- `work_control`: Work Packet, next action, Workset restore, Focus, Resume Digest, and Activity queue impact.
- `cost_latency_capacity`: budget reservation, queue pressure, cache eligibility, model route, and SLO impact.
- `security_privacy`: prompt-injection exposure, data minimization, external side effect, support access, audit, and abuse checks.
- `release_readiness`: migration, rollback, operational readiness, implementation status, launch claim, and waiver impact.

Analyzers return structured effects, not prose. Model-generated summaries may explain effects after redaction and classification.

## Live-test policy

Some external systems cannot be tested without side effects. The engine must classify every connector check as one of:

- `no_side_effect`: deterministic local validation, read-only authorized API check, or owned fixture.
- `mocked`: fixture or provider simulator, explicitly labeled.
- `sandboxed`: isolated execution with no production destination.
- `live_read`: production read with authorization and minimization.
- `live_write`: real side effect; not allowed inside no-side-effect simulation.

`live_write` checks require an ActionCard or owning-service operation outside simulation. They must be named as live tests in UI, API, SDK, CLI, MCP, Activity, and release evidence.

## Invalidation

Scenario snapshots, plans, runs, comparisons, decisions, and apply candidates invalidate when:

- membership, policy, entitlement, budget, support grant, residency, retention, rights, or connector scope changes;
- SourceVersion, parser generation, index manifest, Claim, EvidenceSpan, DocumentRevision, PublicationSnapshot, Export, RecipeVersion, WorkPacket, Workset, HealthFinding, ImpactReport, ActivityEvent, Operation, ApprovalReceipt, or Product Truth record changes;
- model route policy, cost policy, latency budget, feature flag, release gate, or support diagnostic policy changes;
- a redaction policy changes;
- an analyzer version changes.

Invalidation records the authoritative dependency, old version, new version where visible, reason code, affected scenario records, and next safe action.

## API and command exposure

Initial API families:

- `GET /v1/projects/{project_id}/scenarios`
- `POST /v1/projects/{project_id}/scenarios`
- `GET /v1/projects/{project_id}/scenarios/{scenario_id}`
- `POST /v1/projects/{project_id}/scenarios/{scenario_id}/simulate`
- `GET /v1/projects/{project_id}/simulation-runs/{simulation_run_id}`
- `POST /v1/projects/{project_id}/scenarios/{scenario_id}/compare`
- `POST /v1/projects/{project_id}/scenarios/{scenario_id}/decisions`
- `POST /v1/projects/{project_id}/scenarios/{scenario_id}/apply-candidates`
- `GET /v1/projects/{project_id}/scenario-apply-candidates/{apply_candidate_id}`
- `POST /v1/projects/{project_id}/scenario-apply-candidates/{apply_candidate_id}/cancel`

Command Center exposes:

- open Scenario Lab;
- simulate source change;
- simulate publication;
- simulate recipe activation;
- simulate repair playbook;
- simulate recovery action;
- compare options;
- inspect unknowns;
- create ActionCard;
- create apply candidate;
- explain stale simulation;
- observe outcome.

External clients cannot bypass authorization, content minimization, expected versions, invalidation, approval policy, live-test labeling, idempotency, or owning-service mutation boundaries.

## Storage model

Representative structures are defined in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md):

- `scenarios`
- `scenario_options`
- `scenario_input_snapshots`
- `simulation_plans`
- `simulation_runs`
- `simulated_effects`
- `scenario_comparisons`
- `scenario_decisions`
- `scenario_apply_candidates`
- `scenario_invalidations`
- `simulation_outcome_observations`

Simulation rows are auditable projections and decision records. Recovery-shaped apply candidates reference ReversalRecords, CompensationPlans, and current reconciliation state rather than copying private resource content. Authoritative state remains in owning domain tables.

## Events

Scenario events include:

- `scenario.created`
- `scenario.input_snapshot_created`
- `scenario.simulation_started`
- `scenario.effect_recorded`
- `scenario.simulation_completed`
- `scenario.simulation_failed`
- `scenario.comparison_created`
- `scenario.decision_recorded`
- `scenario.apply_candidate_created`
- `scenario.invalidated`
- `scenario.outcome_observed`

Events are content-minimized and safe for Activity projections, webhooks, SDKs, CLI, MCP, support diagnostics, observability, and release evidence.

## Security and privacy requirements

- Authorization happens before simulation input collection.
- Raw content cannot be copied into simulation records.
- Redacted resources cannot leak through labels, counts, option rankings, hidden effect summaries, or support diagnostics.
- Simulation cannot perform external writes, billing, publication, deletion, permission widening, repository mutation, notification sending, or administration changes.
- Apply candidates re-run deterministic preflight and approval checks immediately before mutation.
- Recovery apply candidates re-run reversal-ledger eligibility, expected-version, approval, impact, compensation, reconciliation, and irreversible-effect checks immediately before mutation.
- Support access uses metadata-first simulation diagnostics and time-bound grants.
- Every live connector check is classified and visible.
- Prompt-injection content from sources cannot redefine simulation policy, analyzer selection, approval class, or tool permissions.

## Tests and launch gates

Production readiness requires:

- unit tests for scenario schemas, analyzer contracts, invalidation, redaction, live-test classification, and apply-candidate state transitions;
- integration tests across source change, document patch, publication, recipe activation, repair playbook, recovery action, settings change, repository proposal, and release-candidate scenarios;
- authorization tests proving hidden resources do not leak through simulation effects, comparison rankings, redaction counts, webhooks, SDKs, CLI, MCP, support diagnostics, analytics, or logs;
- stale-plan tests proving changed dependencies block apply candidates;
- side-effect tests proving no external write occurs during no-side-effect simulation;
- performance tests for bounded snapshots, large Project graphs, recipe-heavy Projects, high Activity volume, and queue pressure;
- accessibility tests for Scenario Lab cards, comparison tables, unknowns, redactions, live-test warnings, and keyboard command flows;
- release evidence for simulation accuracy, false-safe rate, false-block rate, stale-plan rejection, user correction, cost estimate accuracy, latency estimate accuracy, privacy, support, and operational readiness.

## Documentation update rule

Changes to the simulation engine, analyzers, live-test policy, invalidation, events, API, storage, apply candidates, recovery-action simulation, or outcome observations must update:

- [`../01-product/scenario-lab-and-change-simulation.md`](../01-product/scenario-lab-and-change-simulation.md)
- [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`project-health-diagnostics-and-repair.md`](project-health-diagnostics-and-repair.md)
- [`project-map-and-impact-analysis.md`](project-map-and-impact-analysis.md)
- [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../08-build/developer-platform-api-sdk.md`](../08-build/developer-platform-api-sdk.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
