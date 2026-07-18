# Automation, UX, and performance principles

Research should feel faster and more reliable than general chat while supporting deeper automation than ordinary research tools. The user experience must make tradeoffs visible instead of hiding them behind a single answer box.

This contract is informed by [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md).
It is also informed by [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md) for workspace-agent, scheduled-work, and automation-governance signals.
Advanced operating-layer differentiators and explicit non-actions are governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md).
Clarification behavior is governed by [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md).
Outcome scoring and adaptive workflow recommendations are governed by [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md).
North-star product outcomes, strategic-bet scorecards, baselines, and anti-metrics are governed by [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md).
Reusable recipe and playbook automation is governed by [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md).
Project automation registry, dry-run review, and run debugging are governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md).
Project-wide action discovery, keyboard workflows, shortcuts, and command safety are governed by [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md).
Spatial Workbench, Worksets, evidence-aware splits, and projection-safe layout state are governed by [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md).
Project Operating Layer Work Packets, next safe actions, repeated-work capture, and cross-surface work control are governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md).
Project Health findings, diagnostic snapshots, repair playbooks, repair runs, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, and support-safe diagnostics are governed by [`project-health-and-repair.md`](project-health-and-repair.md) and [`project-settings-and-administration.md`](project-settings-and-administration.md).
Scenario Lab and Project-wide change simulation are governed by [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md).
Reversible Work, Project History, restore, replay, withdrawal, compensation, reconciliation, and irreversible-state labeling are governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md).
Progressive response behavior, Partial Results, permission-safe Fast Paths, and preloading are governed by [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md).
Delegated-trust grants, approval batching, approval-load budgets, and fatigue controls are governed by [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md).
Source-change maintenance, living-document review, maintenance ActionCards, and stale-claim patch proposals are governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md).
Human-AI interaction and automation UX reviews for capability boundaries, trust calibration, progress, permission, recovery, accessibility, and outcome value are governed by [`../06-delivery/human-ai-interaction-and-automation-ux-review.md`](../06-delivery/human-ai-interaction-and-automation-ux-review.md).

## Product objective

Research should help users move from source intake to trustworthy output with as little wasted motion as possible:

```text
authorize source
-> understand coverage
-> ask or automate
-> inspect evidence
-> save durable output
-> keep it current
```

## UX principles

1. **Context is visible.** Users can see active Project, source scope, model mode, permissions, budget, and output target.
2. **Coverage is visible.** Users can see what was stored, parsed, searched, cited, partially processed, skipped, or failed.
3. **The next action is obvious.** Empty, loading, partial, blocked, degraded, and conflict states each present a concrete recovery path.
4. **Questions are earned.** The system asks clarifying questions only when the answer changes scope, risk, cost, source choice, approval, or output structure, and otherwise proceeds with visible safe assumptions.
5. **Progress is inspectable.** Long-running work exposes plan, current stage, source decisions, cost, blockers, and partial results.
6. **Edits are reviewable.** AI work becomes typed patches, not silent rewrites.
7. **Outputs persist.** Useful work becomes documents, artifacts, memory, source records, claims, or run records, not transient chat residue.

## Performance principles

Research uses explicit modes:

| Mode | User expectation | System behavior |
|---|---|---|
| Quick answer | fast orientation | shallow retrieval, small context, citation when available, clear incompleteness |
| Focused retrieval | trustworthy answer over selected sources | authorized retrieval, citation verification, moderate latency |
| Deep research | thorough synthesis | research contract, plan review, durable run, broader source work, higher cost and latency |
| Scheduled automation | continuing maintenance | queued execution, budget policy, quiet hours, reviewable patches |

Each mode declares expected time, cost class, source scope, and completeness. A slower mode must produce visibly better evidence, not only longer prose. All modes return immediate authorized status, then progressively reveal coverage, Partial Results, citations, blockers, cancellation, and recovery where the work outlives the first response.

## Automation principles

Automation is Project-scoped and policy-bound:

- repeated work can be captured as typed, versioned Automation Recipes;
- it inherits Project instructions and source policy;
- it declares allowed tools and prohibited actions;
- it reserves budget and capacity before expensive work;
- it has stop conditions;
- it emits durable progress events;
- it pauses for configured approvals;
- it can use scoped delegated-trust grants only when the approved envelope exactly matches the repeated low-risk work;
- it records external side effects;
- it can be cancelled without orphaned writes;
- it produces reviewable output.

Automation cannot silently publish, delete sources, widen connectors, merge code, approve unsupported claims, reuse stale approvals, expand delegated-trust grants, approve support access, extend SupportAccessSessions, or change billing state.

## Automation management

Every Project has an automation registry with:

- active, paused, failed, degraded, and retired automations;
- next run time and trigger;
- owner and approval policy;
- source and connector scope;
- expected cost class and monthly projection;
- recent run status;
- last useful output;
- failure reason and recovery action.

Users can pause, resume, edit, delete, retire, or dry-run automations according to permission. Detailed registry fields, dry-run review, failure taxonomy, replay eligibility, and Automation Run Debugger behavior are governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md). The registry is the only place scheduled or recurring work may be enabled.
Recipes and Playbooks appear in the same registry with recipe version, trigger, simulation status, canary state, owner, last run, scorecard, and activation blocker visible before unattended execution.

## Advanced feature bar

An advanced feature is eligible only when it improves at least one of:

- trust;
- speed;
- source coverage;
- reviewability;
- collaboration;
- maintenance;
- recoverability;
- user control.

Novelty is not sufficient. A feature that creates a second truth store, hides evidence, increases permission risk, or makes failures harder to diagnose is not advanced for Research's purposes.
When an advanced feature originates from public user opinion, competitor movement, runtime evidence, or a strategic bet, the Product Truth Board must have a SignalDecisionLedger entry that records the objective dimension, affected requirements, affected documents, validation expectation, owner, and non-action alternatives considered.
Strategic bets also need a StrategicBetScorecard with baseline, expected outcome delta, guardrails, anti-metrics, and release evidence before they can become customer-facing claims.
Operating-layer features must also pass the decision rules in [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md) before entering implementation scope.

## Priority advanced features

1. **Trust dashboard:** claim, citation, source-rights, stale-source, and publication-blocker status in one view, governed by [`trust-dashboard-and-evidence-coverage.md`](trust-dashboard-and-evidence-coverage.md).
2. **Evidence coverage map:** visual coverage of which source spans support each section and artifact, without creating a second evidence authority.
3. **Model council for verification:** multiple models or engines surface agreement, disagreement, and missing evidence under [`../03-ai/model-council-and-disagreement-resolution.md`](../03-ai/model-council-and-disagreement-resolution.md).
4. **Project Atlas and Impact Reports:** local graph neighborhoods, path queries, downstream impact previews, missing-link suggestions, and permission-safe map navigation governed by [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md).
5. **Spatial Workbench and Worksets:** Project-scoped task layouts, evidence-aware splits, suspend/restore, progressive pane hydration, and adaptive layout suggestions governed by [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md).
6. **Project Operating Layer and Work Packets:** current work state, next safe actions, repeated-work capture, recommendation observations, and cross-surface recovery governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md).
7. **Project Health and causal repair:** user-facing findings, diagnostic snapshots, causal lineage, suspected causes, counterevidence, unknowns, false-cause controls, diagnostic-waste budgets, repair playbook dry-runs, ActionCards, repair runs, and outcome evidence governed by [`project-health-and-repair.md`](project-health-and-repair.md).
8. **Support Operations Center:** customer-visible SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, audit exports, revocation, and break-glass review governed by [`project-settings-and-administration.md`](project-settings-and-administration.md).
9. **Scenario Lab and change simulation:** Project-wide what-if previews, option comparison, live-test labeling, stale-plan invalidation, and apply-candidate handoff governed by [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md).
10. **Reversible Work and Project History:** recovery cards, undo, restore, replay, withdrawal, compensation, reconciliation, and irreversible-state labeling governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md).
11. **Activity timeline and review queue:** replayable history of research, source refresh, approvals, document patches, blockers, and user decisions, governed by [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md).
12. **Living artifacts:** charts, maps, diagrams, and tables linked to claims and source versions.
13. **Source-change maintenance:** scheduled monitoring, Claim revalidation, Impact Reports, blocked-output labels, and minimal safe patches governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md).
14. **Prompt-friction governor:** intent capture and clarification policy governed by [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md), avoiding unnecessary back-and-forth while preserving approval and source-scope safety.
15. **Performance mode switch:** explicit quick, focused, deep, and scheduled modes with visible tradeoffs.
16. **Progressive delivery and Fast Paths:** immediate shell/status, Partial Results, stale-while-revalidate projections, safe preloading, cache reauthorization, and cancellation/recovery governed by [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md).
17. **Run debugger:** structured step, tool, source, cost, approval, retry, replay, trace-comparison, and failure inspection for each automation run, governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md).
18. **Dry-run preview:** proposed source reads, document patches, connector actions, notifications, side-effect classes, approval gates, recovery paths, and cost before execution, governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md).
19. **Automation outcome scorecard:** accepted outputs, rejected work, stale-claim resolution, cost, latency, approval burden, failures, user corrections, safety blockers, and adaptive recommendations measured as useful outcomes instead of activity volume.
20. **Composable automation recipes and playbooks:** Project-native reusable recipes for source maintenance, research runs, document patches, publication checks, feedback triage, GitHub proposals, notifications, exports, and review routing, governed by [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md).
21. **Universal command center:** keyboard-first navigation, mode switching, source-scope control, action cards, run controls, automation dry-runs, scorecards, and safe shortcuts exposed through typed command descriptors.
22. **Delegated trust and approval-load control:** scoped grants, approval batches, load budgets, fatigue warnings, hard stops, stale receipt rejection, and revocation governed by [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md).

## Acceptance criteria

UX, performance, and automation work is not complete until:

- primary workflows meet accessibility requirements;
- source coverage and claim support are visible;
- expensive work has estimates and cancellation;
- intent, assumptions, clarification decisions, and approval requirements are visible where they materially affect the result;
- automation outputs are replayable and auditable;
- automation registry, dry-run review, and run-debugger behavior expose lifecycle state, cost projection, side-effect safety, failure taxonomy, replay eligibility, fixture creation, redaction, and outcome links consistently;
- source-change maintenance runs expose freshness, affected Claims, blocked outputs, patch proposals, review decisions, and outcome observations;
- automation outcomes distinguish accepted value from run volume, token spend, and generated-but-rejected work;
- reusable recipes compile to typed triggers, steps, gates, budgets, simulations, and outputs before activation;
- command workflows expose target, effect, approval class, expected version, and recovery path before material execution;
- Worksets preserve user-controlled task context, reauthorize panes before restore, expose stale or redacted resources, and provide keyboard and assistive-technology alternatives to spatial manipulation;
- Work Packets and next-action recommendations are explainable, dismissible, content-minimized, and measured by accepted outcomes and corrections;
- Project Health findings and repair playbooks are evidence-linked, authorization-filtered, dry-run capable, approval-aware, and measured by repair outcomes rather than retry volume;
- SupportDiagnosticBundles are metadata-first, customer-reviewable, expiring, revocable, exportable where policy allows, and measured by support usefulness without exposing private content;
- Scenario Lab simulations are authorization-filtered, content-minimized, explicit about unknowns, clear about live-test boundaries, invalidated on stale dependencies, and routed through owning services before mutation;
- Reversible Work actions distinguish undo, restore, replay, retry, withdrawal, compensation, reconciliation, and irreversible effects, and they revalidate current state before mutation;
- adaptive workflow changes are visible, reversible, and approval-gated when they affect permissions, side effects, publication, billing, or high-risk evidence state;
- delegated-trust grants are scoped, expiring, revocable, visible in Activity, and fail closed when source scope, connector scope, destination, budget, expected version, or action class drifts;
- progressive delivery labels complete, partial, stale, queued, degraded, blocked, unsupported, and cancelled state consistently across surfaces;
- Fast Paths, cached projections, preloading, SpeculativePreparation, and optimistic UI are reauthorized, version-aware, budgeted, reversible where appropriate, visible when they affect user resources, and never treated as final evidence without validation;
- performance budgets are measured;
- user feedback can be attached to answers, citations, patches, and runs;
- affected AI, agentic, and automation surfaces pass HumanAIInteractionReview gates before prototype expansion, beta, benchmark reliance, release promotion, or customer-facing claims;
- affected strategic bets have current OutcomeMetricDefinitions, StrategicBetScorecards, and OutcomeReviews before launch claims rely on performance, usability, user-experience, automation, or advanced-differentiation improvements;
- user-opinion, competitor, runtime, or strategic-bet signals that change advanced-feature scope have SignalDecisionLedger disposition;
- documentation and requirements stay synchronized.
