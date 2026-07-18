# Automation outcome evaluation and adaptive routing

**Review date:** 2026-07-17
**Status:** architecture contract, not implemented

Automation outcome evaluation turns automation activity into product decisions without treating run volume as value. It connects Activity events, Automation Recipe runs, automation execution records, WorkPacket recommendation observations, analytics aggregates, user feedback, Product Truth Board signals, release evidence, and adaptive-routing recommendations.

This architecture supports [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md).
Delegated-trust grants, approval batches, approval-load budgets, and fatigue signals are governed by [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md).
Cross-product OutcomeMetricDefinitions, StrategicBetScorecards, OutcomeReviews, baselines, and anti-metrics are governed by [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md).
AutomationFailureRecoveryRecords, AutomationFailureLearningRecords, reconciliation-first behavior, and recovery launch blockers are governed by [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md).

## Authority boundary

Outcome evaluation may read authoritative records, create outcome records, create Product Truth Board signals, and propose action cards. It cannot directly mutate canonical Documents, Claims, Sources, Publications, Project policy, billing state, connector scope, model policy, or implementation status.

Canonical authorities remain:

- Automation Recipe versions, triggers, simulations, gates, recipe runs, automation definitions, and execution records for automation state;
- AutomationFailureRecoveryRecords and AutomationFailureLearningRecords for failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain run recovery state;
- Activity events for user-visible progress and review state;
- WorkControlObservations for next-action recommendation exposure, dismissal, correction, invocation, and outcome state;
- ApprovalRequests, ApprovalBatches, ApprovalDecisions, ApprovalReceipts, DelegatedTrustGrants, ApprovalLoadBudgets, ApprovalFatigueSignals, revocations, and invalidations for approval-load and delegated-trust outcomes;
- audit events for privileged actions;
- Claims and EvidenceSpans for factual support;
- Document revisions and patches for content changes;
- Product Truth Board for product decisions, contradictions, and non-action decisions;
- release evidence for production promotion.

## Record types

```text
AutomationOutcomeWindow
OutcomeMetricDefinition
OutcomeObservation
OutcomeAttribution
OutcomeScorecard
WorkflowFrictionEvent
AdaptiveRoutingPolicy
AdaptiveRoutingRecommendation
OutcomeActionCard
OutcomeEvaluationRun
```

`AutomationOutcomeWindow` defines the Project, automation or Automation Recipe, version, baseline period, evaluation period, source scope, metric set, and owner.

`OutcomeObservation` records one measured result such as accepted patch, rejected patch, citation correction, stale claim resolved, clarification avoided, approval requested, approval batched, approval rejected, delegated-trust grant proposed, grant accepted, grant used, grant revoked, stale receipt rejected, fatigue signal created, cost anomaly, retry, failure, replay success, reconciliation success, quiet wrong outcome, recovery action resolved, learning artifact created, or support escalation.

`OutcomeAttribution` links an observation to allowed evidence such as ActivityEvent, Operation, Research Run, RecipeRun, RecipeSimulation, WorkPacket, NextActionCandidate, WorkControlObservation, DocumentPatch, Claim, EvidenceSpan, TruthSignal, ReleaseEvidence, feedback record, analytics aggregate, or support-safe diagnostic.

`OutcomeScorecard` stores the current projection for users and APIs. It is derived from observations and can be rebuilt.

`AdaptiveRoutingRecommendation` proposes a mode, schedule, budget, source-scope, model-role, approval, template, pause, downgrade, canary, or retirement change. Accepted recommendations become typed action cards.

## Good-event definitions

Each metric has a good-event definition, denominator, exclusion rules, and allowed interpretation.

Examples:

| Metric | Good event | Not a good event |
|---|---|---|
| Accepted patch rate | A proposed patch is accepted with no unresolved contradiction or private-content leak | A patch is generated but ignored, rejected, or manually rewritten |
| Stale-claim resolution | A stale claim is revalidated, updated, removed, or blocked from publication with evidence | A stale claim is mentioned in a summary without changing canonical state |
| Cost per accepted outcome | Cost is tied to accepted patch, resolved claim, verified source update, or user-approved artifact | Token spend from exploratory runs with no accepted output |
| Approval efficiency | Required approvals are batched, contextual, grant-backed where safe, and accepted without repeated clarification | Avoiding approval by lowering risk classification, reusing stale receipts, or widening a grant |
| Time to useful result | User reaches cited answer, accepted patch, or actionable blocker faster than baseline | Fast incomplete answer presented as complete |
| Automation safety | Unsafe action is blocked or routed to review before side effect | Side effect succeeds but violates source, permission, or publication policy |

Good-event definitions are versioned. Changing a definition creates a new metric version and invalidates incompatible comparisons.

## Evaluation flow

```text
ActivityEvent / ExecutionRecord / AutomationFailureRecoveryRecord / FeedbackRecord
-> OutcomeObservation
-> OutcomeAttribution
-> OutcomeScorecard projection
-> TruthSignal when product behavior or requirement impact exists
-> AdaptiveRoutingRecommendation when policy threshold is met
-> OutcomeActionCard when a user or policy can act
```

The evaluator prefers deterministic calculations. AI may classify user feedback, cluster failure reasons, summarize patterns, or propose recommendations, but it cannot finalize outcome state, change scorecard definitions, or approve adaptive routing.

## Adaptive routing policy

Adaptive routing can recommend:

- mode changes among quick, focused, deep, and scheduled;
- budget or concurrency changes;
- model-role changes through the capability registry;
- reduced agent depth or deterministic-first routing;
- additional preflight checks;
- delegated-trust grant proposal, narrowing, expiry reduction, or revocation;
- source-scope narrowing or expansion requests;
- schedule pause, lower frequency, canary, or retirement;
- recipe trigger refinement, simulation expansion, canary rollback, or recipe retirement;
- human-review escalation;
- template extraction from repeated successful runs.

Adaptive routing cannot:

- widen source, connector, or external-write permission silently;
- lower approval class for a side effect;
- widen or rely on a delegated-trust grant outside its exact envelope;
- publish, send, merge, delete, bill, or revoke without action-card approval;
- hide degraded quality behind faster latency;
- use private content in analytics or support diagnostics;
- override Product Truth Board contradiction state.

## Privacy and minimization

Outcome records store identifiers, classifications, counters, timing, cost, status, and safe excerpts only when policy allows. They do not store raw source text, raw prompt bodies, hidden reasoning, private document bodies, credentials, full connector payloads, or unredacted support transcripts.

Support views use metadata first. Sensitive drill-down requires source permission or a time-bounded support grant.

## API and event behavior

The public API exposes:

- scorecard list and detail;
- metric definitions and windows;
- outcome observations with authorization-filtered links;
- adaptive-routing recommendations;
- action-card creation and resolution;
- scorecard export in release evidence where policy allows.
- recipe-linked outcome evidence, simulation coverage, canary result, and activation blocker projection where policy allows.

Events include:

- `automation.outcome_window_created`;
- `automation.outcome_observed`;
- `automation.scorecard_updated`;
- `automation.recommendation_created`;
- `automation.recommendation_accepted`;
- `automation.recommendation_rejected`;
- `automation.recommendation_expired`;
- `work.recommendation_outcome_recorded`.

Events are content-minimized and follow [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md).

## Testing and validation

Tests cover:

- metric-definition versioning and denominator correctness;
- accepted, rejected, edited, ignored, reverted, blocked, and expired outcome states;
- attribution to Activity, Claim, EvidenceSpan, DocumentPatch, TruthSignal, release evidence, and feedback records;
- recommendation observations from WorkPackets and NextActionCandidates distinguish accepted, corrected, dismissed, ignored, blocked, and expired work-control suggestions;
- approval-load observations from ApprovalRequests, ApprovalBatches, ApprovalDecisions, ApprovalReceipts, DelegatedTrustGrants, ApprovalLoadBudgets, ApprovalFatigueSignals, revocations, stale receipt rejections, and hard-stop blocks;
- cross-tenant scorecard isolation;
- source-permission filtering;
- private-content minimization;
- adaptive recommendation thresholds;
- action-card expected versions and approval classes;
- scorecard rebuild from authoritative records;
- recovery-record linkage for failures, quiet wrong outcomes, side-effect uncertainty, learning artifacts, and non-action decisions;
- release gate behavior when outcome evidence is missing or regressed.

Load and performance tests include scorecard projection rebuilds for large Projects, recurring automation bursts, approval-request bursts, delegated-trust grant verification, revocation fanout, and release evidence export.

## Documentation update rule

Changes to outcome evaluation records, metric definitions, adaptive routing, scorecard projections, or automation-good-event definitions must update:

- [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`agent-development-lifecycle-and-automation-governance.md`](agent-development-lifecycle-and-automation-governance.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md)
- [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`../06-delivery/automation-failure-recovery-and-learning-loop.md`](../06-delivery/automation-failure-recovery-and-learning-loop.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- launch, readiness, routing, and requirement metadata
