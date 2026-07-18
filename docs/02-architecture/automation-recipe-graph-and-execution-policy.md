# Automation recipe graph and execution policy

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md). User-facing automation registry, dry-run review, run debugging, failure taxonomy, replay eligibility, and fixture creation are specified in [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md). AutomationFailureRecoveryRecords, severity, safe next actions, and failure-learning artifacts are governed by [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md). This contract defines how Automation Recipes are represented, versioned, simulated, triggered, executed, and audited without becoming a second workflow authority or a prompt-only agent builder. Source-change maintenance runs, ClaimRevalidations, MaintenancePatchProposals, and blocked-output behavior are governed by [`continuous-knowledge-maintenance.md`](continuous-knowledge-maintenance.md); recipes may schedule or compose maintenance but cannot bypass its patch, publication, or review policy. Project-wide activation comparison and apply-candidate behavior are governed by [`scenario-simulation-engine.md`](scenario-simulation-engine.md). Restore, replay, rollback, withdrawal, compensation, and irreversible-effect handling are governed by [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md).

## Goals

- Represent reusable automation as typed, versioned recipe graphs.
- Separate authoring, simulation, approval, canary, activation, execution, evaluation, and retirement.
- Compile natural-language intent into draft recipes that require review before execution.
- Make triggers, source scope, budgets, permissions, steps, approval gates, recovery policy, and outputs inspectable.
- Detect quiet failures, ambiguous triggers, duplicate firing, cost anomalies, permission drift, and stale evidence before they become production automation.

## Authority model

Recipe records reference but never override:

- Project policy, membership, entitlements, budgets, retention, and residency;
- IntentRecords, CommandActionDescriptors, CommandInvocations, PreflightChecks, ApprovalReceipts, and ActionCards;
- Project Action Surface projections for command, API, SDK, CLI, MCP, native companion, browser extension, connected-app, and automation action exposure;
- DelegatedTrustPolicies, DelegatedTrustGrants, ApprovalRequests, ApprovalBatches, approval-load budgets, and fatigue signals from [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md);
- AbusePolicies, AbuseDecisions, AbuseThrottles, AbuseReviews, AbuseAppeals, and enforcement actions from [`abuse-prevention-policy-and-enforcement.md`](abuse-prevention-policy-and-enforcement.md);
- WorkPackets, NextActionCandidates, and repeated-work capture proposals from [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md);
- MaintenanceRuns, ClaimRevalidations, MaintenancePatchProposals, MaintenanceActionCards, and MaintenanceOutcomeObservations from [`continuous-knowledge-maintenance.md`](continuous-knowledge-maintenance.md);
- Scenarios, ScenarioComparisons, ScenarioDecisions, ScenarioApplyCandidates, and SimulationOutcomeObservations from [`scenario-simulation-engine.md`](scenario-simulation-engine.md);
- ReversalCapabilities, ReversalRecords, RecoveryActionCards, CompensationPlans, ReconciliationChecks, and ReversalOutcomeObservations from [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md);
- AutomationFailureRecoveryRecords and AutomationFailureLearningRecords from [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md);
- Operations, workflow checkpoints, ProgressiveDeliveryEnvelopes, ActivityEvents, audit events, outbox records, and side-effect ledgers;
- SourceVersions, parser/index generations, EvidenceSpans, Claims, Trust blockers, and Product Truth signals;
- Document revisions, patches, comments, reviews, decisions, artifacts, publications, and GitHub proposals;
- automation definitions, runs, outcome scorecards, adaptive-routing recommendations, and lifecycle state.

If recipe state conflicts with the owning domain record, the owning record wins and the recipe projection is rebuilt, paused, invalidated, or routed for review.

## Processing chain

```text
recipe draft requested
-> normalize objective, trigger, source scope, steps, gates, budget, outputs, and non-goals
-> create draft RecipeVersion
-> run deterministic validation
-> simulate against fixtures and authorized historical events
-> show dry-run impact, costs, branches, blockers, approvals, and recovery policy
-> owner review and approval
-> optional canary activation
-> trigger evaluation with dedupe and idempotency
-> abuse preflight and throttle evaluation
-> create Operation and ProgressiveDeliveryEnvelope
-> execute deterministic workflow with bounded AI steps
-> emit ActivityEvents and side-effect ledger entries
-> collect accepted, edited, rejected, ignored, reverted, blocked, and failed outcomes
-> create recovery and learning records for failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain runs
-> update AutomationOutcomeScorecard and adaptive recommendations
```

Recipes compile to workflow plans and Project Action Surface descriptor references. They do not execute arbitrary user code and do not give models direct mutation authority.

## Core records

### AutomationRecipe

Representative fields:

```text
automation_recipe_id
organization_id
project_id
owner_id
title
purpose
non_goals
resource_scope
current_recipe_version_id
lifecycle_state
created_from_ref
created_at
updated_at
```

### RecipeVersion

Representative fields:

```text
recipe_version_id
automation_recipe_id
version_number
status
trigger_refs
step_graph_ref
gate_refs
budget_policy_ref
abuse_policy_ref
abuse_decision_ref
source_scope_ref
output_policy_ref
simulation_suite_ref
approval_receipt_id
canary_policy_ref
expected_outcome_metric_refs
created_by
created_at
activated_at
retired_at
```

RecipeVersion rows are immutable after approval except for lifecycle metadata and retention state.

### RecipeTrigger

Representative fields:

```text
recipe_trigger_id
recipe_version_id
trigger_family
event_type
resource_selector
schedule
condition_expression_ref
dedupe_key_template
cooldown_policy
abuse_throttle_ref
authorization_policy_ref
enabled
```

Trigger evaluation is deterministic. AI may help draft trigger definitions, but runtime trigger truth comes from typed events, schedules, selectors, and conditions.

### RecipeStep

Representative fields:

```text
recipe_step_id
recipe_version_id
step_key
step_type
input_schema_ref
output_schema_ref
depends_on_step_keys
tool_policy_ref
model_role
context_pack_policy_ref
retry_policy_ref
timeout_policy_ref
failure_policy_ref
cost_class
```

Step types include deterministic check, retrieval, AI transform, claim verification, document patch proposal, human gate, notification, connector draft, external write, branch, loop, wait, join, and sub-recipe call.

When a step invokes an existing Project capability, it stores a descriptor ref from the Project Action Surface plus normalized input. It does not store a prompt-only action name, generated handler code, client callback, or connector SDK call as the authority for execution.

### RecipeGate

Representative fields:

```text
recipe_gate_id
recipe_version_id
gate_type
approval_class
condition_ref
owner_or_group_ref
expiry_policy
required_evidence_refs
failure_behavior
```

Gates pause execution for approval, missing evidence, confidence-band review, publication risk, external write, budget, connector widening, destructive action, or policy exception.

### RecipeSimulation

Representative fields:

```text
recipe_simulation_id
recipe_version_id
fixture_set_ref
historical_event_cursor
source_version_refs
document_revision_refs
dry_run_connector_profile
result_status
coverage_summary
cost_estimate
branch_coverage
blocked_reasons
created_at
```

Simulation is side-effect free. It can produce draft patches, proposed notifications, and estimated operations, but cannot mutate canonical resources.

### RecipeRun

RecipeRun is a typed automation run linked to an Operation. It records trigger identity, dedupe key, recipe version, source scope, step results, gates, side effects, recovery eligibility refs, AutomationFailureRecoveryRecord refs where required, cost, latency, output refs, outcome refs, debug-trace refs, divergence markers, replay eligibility, fixture candidates, and failure state.

## Trigger and dedupe policy

Every trigger declares:

- event source;
- resource selector;
- condition;
- dedupe key;
- cooldown or rate limit;
- expected authorization state;
- event cursor;
- replay behavior;
- disabled reason.

Trigger ambiguity blocks activation. Duplicate events return the existing Operation or no-op record. A trigger that repeatedly fires unexpectedly is paused and routed to the review queue and, where thresholds require it, an AbuseReview.

## Execution policy

- Deterministic preflight runs before model calls.
- AbusePolicy, AbuseThrottle, provider-policy, quota, and budget checks run before model calls, connector actions, notifications, GitHub proposals, publication, export, or API side effects.
- AI steps receive minimized context packs and typed output schemas.
- Step outputs are stored as typed records or draft resources, not hidden transcript state.
- Canonical mutations require expected versions.
- External writes require side-effect ledger entries and approval policy.
- Publication, deletion, billing, connector widening, repository mutation, and high-risk evidence changes pause for ActionCards unless a valid delegated-trust grant exactly covers the action envelope and the delegated-trust engine verifies it at the mutation boundary.
- Permission, source, policy, retention, rights, or budget drift pauses future steps.
- AbuseDecision, provider-policy, quota, budget, or emergency-control drift pauses future steps and invalidates stale apply candidates.
- Quietly plausible failures are routed by confidence bands, evidence gaps, historical error rates, and outcome scorecard regressions, not only model self-assessment.

## Versioning, canary, and migration

Recipe activation follows the automation lifecycle in [`agent-development-lifecycle-and-automation-governance.md`](agent-development-lifecycle-and-automation-governance.md):

```text
draft -> validated -> approved -> canary -> active -> paused/degraded -> deprecated -> retired
```

A recipe canary limits Project, source set, trigger count, schedule window, cost, or user cohort. Migration between versions is explicit. In-flight runs remain pinned unless a compatible migration checkpoint is recorded.

## API and command exposure

The platform API can expose:

- list recipe library;
- create draft recipe;
- compile natural-language recipe draft;
- validate recipe;
- simulate recipe;
- approve recipe version;
- enable, pause, resume, canary, deprecate, or retire recipe;
- run recipe manually;
- inspect RecipeRun, gates, side effects, and outcomes.
- inspect Automation Run Debugger traces, failure taxonomy, comparison runs, replay cases, and fixture candidates.

Command Center actions use typed CommandActionDescriptors. A natural-language command or WorkPacket repeated-work recommendation can propose a recipe draft, but activation uses the recipe lifecycle, Project Action Surface descriptor binding, preflight, expected versions, and approval receipts.

API, SDK, CLI, and MCP clients can inspect the same action catalog used by the recipe editor where policy allows. Action catalog inspection is read-only unless a client submits a permitted descriptor ref through server-owned validation, simulation, approval, and activation routes.

## Storage model

Representative structures are defined in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md):

- `automation_recipes`
- `recipe_versions`
- `recipe_triggers`
- `recipe_steps`
- `recipe_gates`
- `recipe_simulations`
- `recipe_runs`
- `recipe_templates`
- `recipe_library_entries`
- `recipe_recommendations`
- `recipe_invalidations`

High-volume step logs can be compacted when authoritative Operation, Activity, audit, side-effect, reversal, compensation, reconciliation, and outcome records remain sufficient for debugging, support, replay, recovery, and release evidence.

## Failure behavior

If validation fails, the recipe remains draft with typed blockers.

If simulation coverage is incomplete, activation is blocked or canary-only depending on risk policy.
If Project-wide impact, approval load, cost, publication, source, or policy tradeoffs need comparison, activation also requires a Scenario Lab record. Recipe simulation remains the recipe-specific fixture proof; Scenario simulation is the cross-Project decision record.

If a trigger fires with stale authorization, missing source scope, changed policy, changed retention, changed AbusePolicy, or changed provider-policy state, the run is denied or paused before model work.

If execution fails, degrades, is cancelled, becomes stale, creates a quiet wrong outcome, or has uncertain side effects, the RecipeRun records failed step, partial outputs, side effects, retry eligibility, recovery eligibility, compensation needs, reconciliation state, safe next action, severity, owner, and AutomationFailureRecoveryRecord. Failed recipes enter Activity and Review Queue. Unknown external side-effect state must route to reconciliation before retry or replay.

If a recipe produces accepted-looking but later rejected output, the outcome scorecard can pause the recipe, require wider review, create a quiet-wrong recovery record, or recommend deterministic gates, fixtures, recipe simulation cases, Product Truth signals, scorecard thresholds, support runbooks, documentation patches, or reviewed non-action decisions.

## Tests

Required coverage:

- recipe schema validation and graph cycle detection;
- Project Action Surface descriptor binding, projection parity, disabled-reason preservation, and stale-descriptor invalidation for recipe steps;
- natural-language draft compilation into typed non-runnable recipes;
- trigger specificity, dedupe, cooldown, replay, and idempotency;
- source scope, policy, rights, retention, budget, and capability preflight;
- AbusePolicy, AbuseDecision, AbuseThrottle, provider-policy, review, appeal, emergency-control, and false-positive behavior;
- simulation over synthetic and authorized historical fixtures with no side effects;
- Scenario Lab integration for activation, canary, widening, pause, retirement, stale-plan rejection, and apply-candidate handoff where Project-wide effects are material;
- Reversal Ledger integration for restore, replay, withdrawal, compensation, reconciliation, irreversible labels, stale recovery rejection, and outcome observation;
- approval gates, ActionCards, and approval receipt binding;
- expected-version conflicts for document, source, claim, publication, repository, connector, and billing steps;
- canary limits and migration checkpoints;
- cancellation, pause, resume, retry, replay, restore, withdrawal, compensation, and retirement;
- quiet-failure routing from evidence gaps, confidence bands, and outcome regressions;
- Automation Run Debugger trace reconstruction, divergence markers, replay eligibility, fixture creation, and trace comparison;
- AutomationFailureRecoveryRecord creation, severity blocking, reconciliation-first behavior, safe-next-action projection, and learning-record promotion;
- API, SDK, CLI, MCP, Command Center, Activity, support, and webhook projections;
- prompt-injection fixtures proving source content, model output, public comments, and connector payloads cannot create recipe actions, rewrite descriptor refs, or suppress preflight and approval policy;
- accessibility for recipe authoring, simulation review, and run inspection.

## Launch gates

Recipe automation is production-ready only when:

- `AUTO-004` and `AUTO-005` are implemented;
- recipe drafts cannot run until validation, simulation, owner approval, budget, stop condition, and output policy are recorded;
- trigger correctness and dedupe are proven with fixtures;
- high-risk steps create ActionCards and approval receipts;
- recurring low-risk steps can use delegated-trust grants only when simulation, canary policy, scope, expiry, revocation, and outcome metrics are recorded;
- abuse thresholds pause runaway triggers, publication spam, notification spam, low-signal GitHub proposal bursts, connector-write fanout, and API abuse before side effects;
- every run links Operation, Progressive Delivery, Activity, audit, side-effect, reversal, compensation, reconciliation, and outcome records;
- repeated-work capture creates only non-runnable RecipeDraftCandidates until validation, simulation, owner approval, canary limits, and outcome metric definitions pass;
- recipe steps that invoke Project actions bind to current descriptor refs and fail closed on missing, stale, unauthorized, disabled, overbroad, or policy-managed descriptors;
- recipe versioning, canary, pause, cancellation, restore, replay, withdrawal, compensation, and retirement are observable;
- Automation Run Debugger exposes step graph, context-pack refs, tool/model decisions, policy checks, side-effect state, divergence markers, and fixture creation without private-content leakage;
- failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain recipe runs create AutomationFailureRecoveryRecords and learning artifacts before activation, canary widening, or customer-facing automation claims can proceed;
- outcome scorecards can pause or downgrade recipes that create rejected, ignored, unsafe, or costly work;
- support diagnostics expose metadata and redacted step state without private content;
- release evidence records simulation coverage, recovery-policy accuracy, compensation effectiveness, cost estimate accuracy, quiet-failure detection, and accepted outcome behavior.
- release evidence records Scenario Lab comparison accuracy and stale-plan rejection for material recipe activations.

## Documentation update rule

Changes to AutomationRecipe, RecipeVersion, RecipeTrigger, RecipeStep, RecipeGate, RecipeSimulation, RecipeRun, recipe APIs, trigger policy, simulation, or recipe lifecycle must update:

- [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md)
- [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`scenario-simulation-engine.md`](scenario-simulation-engine.md)
- [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md)
- [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md)
- [`abuse-prevention-policy-and-enforcement.md`](abuse-prevention-policy-and-enforcement.md)
- [`agent-development-lifecycle-and-automation-governance.md`](agent-development-lifecycle-and-automation-governance.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md)
- [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`durable-workflows-idempotency-and-outbox.md`](durable-workflows-idempotency-and-outbox.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
