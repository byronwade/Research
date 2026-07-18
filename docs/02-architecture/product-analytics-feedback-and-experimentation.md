# Product analytics, feedback, and experimentation

Research needs product intelligence without turning analytics into a shadow content store. Analytics, feedback, and experimentation must be designed around minimization, consent, and product truth.

The Product Truth Graph is the authority for converting analytics, feedback, official-reference changes, public user-opinion signals, experiments, runtime evidence, and implementation evidence into reviewed product decisions. Its SignalDecisionLedger projection records why a signal was accepted, rejected, deferred, marked research-more, accepted as risk, or converted into a non-action decision. It is specified in [`product-truth-graph-and-contradiction-detection.md`](product-truth-graph-and-contradiction-detection.md); the product surface is specified in [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md).
Public, customer, survey, research-literature, official, runtime, generated-summary, and documentation-sweep evidence that feeds analytics or experimentation decisions follows [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md).
Automation outcome metrics and adaptive routing are governed by [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md). Work-control recommendation observations are governed by [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md).
Delegated-trust grants, approval batching, approval-load budgets, and fatigue signals are governed by [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md).
Spatial Workbench, Worksets, pane layout state, and layout suggestions are governed by [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md).
Adaptive preference learning, Preference Center controls, preference explanations, correction, reset, export, and model-context preference summaries are governed by [`adaptive-preference-learning-and-interface-policy.md`](adaptive-preference-learning-and-interface-policy.md).
Project Health findings, repair playbooks, RepairRuns, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, and support-safe diagnostics are governed by [`project-health-diagnostics-and-repair.md`](project-health-diagnostics-and-repair.md), [`tenancy-authorization-and-capabilities.md`](tenancy-authorization-and-capabilities.md), and [`../01-product/project-settings-and-administration.md`](../01-product/project-settings-and-administration.md).
Scenario simulations, comparisons, apply candidates, invalidations, and outcome observations are governed by [`scenario-simulation-engine.md`](scenario-simulation-engine.md).
Reversible Work records, recovery cards, compensation plans, reconciliation checks, irreversible labels, and outcome observations are governed by [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md).
User research plans, observed-task validation, dogfood limits, perceived-usability instruments, performance-perception evidence, accessibility participant coverage, and experience evidence packages are governed by [`../06-delivery/user-research-and-experience-validation.md`](../06-delivery/user-research-and-experience-validation.md).
North-star outcome metrics, StrategicBetScorecards, OutcomeReviews, baselines, anti-metrics, and launch gates for performance, usability, user experience, automation, trust, reviewability, recoverability, and advanced differentiation are governed by [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md).
Product telemetry event specifications, event families, allowed and prohibited properties, privacy classification, redaction tests, event quality checks, and release-claim limits are governed by [`../06-delivery/telemetry-and-experience-instrumentation-matrix.md`](../06-delivery/telemetry-and-experience-instrumentation-matrix.md).
Customer-facing claim wording, allowed language, blocked language, scope, and CustomerClaimEvidenceRecords are governed by [`../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md).
Advanced-feature incubation, prototype runs, dogfood flags, beta flags, kill criteria, and non-action decisions are governed by [`../06-delivery/advanced-feature-incubation-and-prototype-governance.md`](../06-delivery/advanced-feature-incubation-and-prototype-governance.md).

## Analytics principles

1. Track behavior needed to improve reliability, usability, quality, and cost.
2. Prefer event names and classified metadata over raw content.
3. Never store source text, prompt bodies, document bodies, credentials, private URLs, or full citations in general analytics.
4. Separate product analytics from model evaluation datasets.
5. Make customer and organization policy part of event filtering.

## Event categories

- activation events;
- source lifecycle events;
- chat and citation quality events;
- document editing and patch review events;
- research-run progress events;
- publication and export events;
- connector health events;
- quota and budget events;
- focus and resume events such as digest viewed, next action opened, Focus Session started, Focus Session ended, notification suppressed, digest marked caught up, stale digest shown, and user correction recorded;
- spatial workbench events such as Workset switched, pane pinned, pane unpinned, evidence split opened, Workset suspended, Workset restored, stale pane shown, redacted pane shown, layout suggestion shown, layout suggestion accepted, layout suggestion dismissed, and layout observation recorded;
- adaptive preference events such as Preference Center opened, adaptation mode changed, preference explanation opened, preference suggestion accepted, preference suggestion dismissed, preference corrected, preference reset, preference exported, policy-managed control viewed, model-context preference summary included, and preference invalidated;
- work-control events such as Work Packet viewed, next action shown, next action dismissed, next action corrected, next action invoked, stale packet shown, repeated work captured, recipe-draft candidate created, and recommendation outcome recorded;
- maintenance events such as source freshness viewed, maintenance run opened, SourceChangeSet reviewed, ClaimRevalidation reviewed, MaintenanceImpactSummary opened, MaintenancePatchProposal accepted, MaintenancePatchProposal edited, MaintenancePatchProposal rejected, maintenance ActionCard deferred, blocked publication opened, failed refresh retried, MaintenanceSchedule paused, and maintenance outcome recorded;
- project-health and support events such as health snapshot viewed, top finding opened, finding snoozed, finding dismissed, repair dry-run created, repair ActionCard opened, RepairRun started, RepairRun cancelled, RepairRun failed, RepairRun completed, SupportDiagnosticBundle generated, support access requested, support access narrowed, support access denied, SupportAccessSession revoked, support audit exported, break-glass reviewed, and repair outcome observed;
- scenario events such as Scenario Lab opened, scenario created, simulation started, simulation completed, simulation failed, unknowns inspected, live-test warning shown, comparison viewed, option selected, stale-plan rejected, apply candidate created, apply candidate cancelled, and simulation outcome observed;
- reversible-work events such as Project history opened, recovery options shown, RecoveryActionCard opened, restore started, replay started, duplicate-as-draft created, publication withdrawal started, compensation plan created, reconciliation check started, stale recovery rejected, irreversible effect acknowledged, recovery completed, recovery failed, and recovery outcome observed;
- approval-control events such as approval request created, approval card viewed, approval batch created, approval batch decided, delegated-trust grant proposed, grant narrowed, grant accepted, grant used, grant revoked, stale receipt rejected, approval-load threshold crossed, fatigue signal created, and hard-stop block recorded;
- accessibility and error-state events;
- support and incident-safe events;
- automation outcome events such as accepted output, rejected output, cost anomaly, approval burden, stale-claim resolution, adaptive recommendation, and scorecard update.

Each event has an owner, schema, allowed properties, prohibited properties, retention, sampling, aggregation, privacy classification, and ProductTelemetryEventSpec link.

## Feedback and discovery signals

User feedback can attach to:

- answer;
- citation;
- document patch;
- source parse result;
- generated artifact;
- research run;
- publication preview;
- Resume Digest, Focus Session, or attention item;
- SpatialWorkbenchState, Workset, PaneInstance, WorksetSnapshot, or SpatialLayoutSuggestion;
- PreferenceItem, PreferenceSuggestion, PreferenceExplanation, PreferenceConflict, AdaptiveInterfaceProfile, or model-context preference summary;
- Work Packet, NextActionCandidate, or recipe-draft candidate;
- SourceChangeSet, ClaimRevalidation, MaintenanceImpactSummary, MaintenancePatchProposal, MaintenanceActionCard, MaintenanceSchedule, or MaintenanceOutcomeObservation;
- ProjectHealthSnapshot, HealthFinding, RepairPlaybook, RepairRun, SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, support-safe diagnostic, or RepairOutcomeObservation;
- Scenario, ScenarioInputSnapshot, SimulationRun, SimulatedEffect, ScenarioComparison, ScenarioDecision, ScenarioApplyCandidate, or SimulationOutcomeObservation;
- ApprovalRequest, ApprovalBatch, DelegatedTrustGrant, ApprovalDecision, ApprovalLoadBudget, or ApprovalFatigueSignal;
- developer API operation.

Feedback records the user intent, rating or label, optional comment, affected object IDs, and whether the content can be used for evaluation. Feedback does not automatically authorize model training or provider sharing.

External customer signals can come from support, sales, interviews, community posts, in-product surveys, customer-request systems, onboarding failures, API-support cases, accessibility reports, and automation failures. These signals are normalized through the governed discovery loop in [`../06-delivery/continuous-discovery-and-user-feedback-operations.md`](../06-delivery/continuous-discovery-and-user-feedback-operations.md).

Feedback-derived product changes must preserve this chain:

```text
FeedbackItem
-> SourceQualityRecord
-> TruthSignal
-> DiscoverySignal
-> Theme
-> Opportunity
-> SignalDecisionLedgerEntry
-> Requirement, TruthDecision, or NonActionDecision
-> Experiment, implementation slice, or documentation patch
-> Release evidence and follow-up result
```

General analytics stores only allowlisted metadata and signal classifications. Private source text, prompt bodies, document bodies, full citations, private URLs, support transcripts, credentials, and private model traces remain outside product analytics.

`TruthSignal` records preserve provenance, confidence, recency, segment, consent, retention, viewer policy, source type, and bias assessment. They can link to analytics aggregates, feedback records, experiments, requirements, implementation slices, release evidence, documentation patches, official-reference reviews, and explicit non-action decisions. AI may cluster and summarize truth signals, but deterministic policies decide whether a change is accepted, rejected, stale, contradicted, or publish-blocking.

Automation outcome analytics use metric definitions with explicit good-event denominators. Run count, token volume, generated text length, or notification volume cannot be treated as success without accepted outcome evidence.
Work-control analytics use content-minimized recommendation observations. A recommendation is not counted as successful merely because it was shown; accepted, corrected, dismissed, ignored, blocked, expired, and reversed outcomes are separate signals.
Maintenance analytics use content-minimized outcome observations. A maintenance run is not counted as successful merely because it completed; stale-claim resolution, patch acceptance, patch edit/rejection, blocked-publication correctness, failed-refresh recovery, false-positive rate, false-negative rate, cost, latency, approval burden, and user correction are separate signals.
Project Health and support analytics use content-minimized finding, repair, bundle, request, session, and audit-export observations. A repair is not counted as successful merely because it ran, and support is not counted as successful merely because a case closed; resolved findings, user-visible improvement, repeated repair frequency, false positives, dismissals, approval burden, SupportDiagnosticBundle usefulness, access request denial or narrowing, session revocation, break-glass timeliness, audit export usefulness, and side effects are separate signals.
Scenario analytics use content-minimized simulation and outcome observations. A simulation is not counted as successful merely because it completed; stale-plan rejection, false-safe rate, false-block rate, live-test warning comprehension, option selection, user correction, apply-candidate success, cost and latency estimate accuracy, approval burden, and recovery quality are separate signals.
Reversible Work analytics use content-minimized recovery observations. A recovery path is not counted as successful merely because an operation completed; eligibility accuracy, stale recovery rejection, user comprehension of irreversible labels, restore success, replay safety, compensation accuracy, reconciliation accuracy, support escalation, and repeated recovery frequency are separate signals.
Approval-load analytics use content-minimized risk and outcome classes. Fewer prompts are not a success if delegated-trust grants widened scope, increased reversals, hid hard-stop actions, delayed revocation, or reduced review quality.
Spatial Workbench analytics use content-minimized layout observations. A layout is not counted as successful merely because it was restored; successful outcomes require low-friction switching, preserved user control, accessible keyboard and screen-reader paths, correct stale or redacted labeling, and low reversal or correction rates.
Adaptive preference analytics use content-minimized preference events. Personalization is not counted as successful merely because an adaptive default was applied; success requires explanation usefulness, correction rate, reset/export discoverability, cross-Project isolation, policy-managed control clarity, and no hidden-profile complaints.

## Experimentation

Experiments may change:

- onboarding;
- UI layout;
- source recommendations;
- retrieval ranking;
- model-role routing;
- document patch presentation;
- notification timing;
- Resume Digest grouping, Focus Session defaults, and attention ranking;
- Workset defaults, pane ordering, split ratios, compact-mode adaptations, and layout suggestion ranking;
- adaptation mode defaults, Preference Center entry points, preference explanation wording, suggestion ranking, correction flows, reset/export discoverability, and model-context preference summary presentation;
- Work Packet layout, next-action ranking weights, recommendation explanations, dismissal reasons, and repeated-work capture prompts;
- Project Health grouping, finding explanation order, repair recommendation wording, dry-run presentation, SupportDiagnosticBundle presentation, support access request wording, and support-safe diagnostic entry points;
- Scenario Lab card layout, comparison ranking labels, unknowns presentation, live-test warning wording, stale-plan recovery, and apply-candidate explanation;
- Project history card grouping, recovery-action wording, irreversible-effect warning presentation, compensation-plan ordering, and reconciliation-status explanation;
- approval card layout, approval batch grouping, delegated-trust grant copy, fatigue-warning timing, and revocation entry points.

Each experiment must link back to a theme, opportunity, requirement, or strategic-bet decision in the Product Truth Graph. Results are stored as evidence references and converted into a `TruthDecision`, `NonActionDecision`, or follow-up contradiction record.
If an experiment comes from a public user-opinion or competitor signal, its SignalDecisionLedger entry must preserve the directional evidence label, objective dimension, affected requirement, guardrails, and non-action alternatives considered.
If an experiment advances an advanced operating-layer opportunity, it must also link to an `AdvancedFeatureIncubation` record with prototype type, guardrail metrics, kill criteria, feature-flag plan, benchmark scenarios, user-research plan, and documentation consistency plan.

Experiments may not silently change:

- authorization;
- Workset restore reauthorization, stale or redacted resource handling, or pane visibility rules;
- preference scope, correction, reset, export, model-context minimization, policy-managed controls, cross-Project isolation, or no-preference-as-evidence rules;
- HealthFinding authorization, support-grant policy, SupportDiagnosticBundle minimization, SupportAccessRequest decisioning, SupportAccessSession expiry or revocation, repair approval class, RepairRun preflight, side-effect policy, or private-content minimization;
- Scenario authorization, content minimization, live-test classification, stale-plan invalidation, apply-candidate preflight, side-effect policy, or approval class;
- ReversalCapability eligibility, recovery authorization, expected-version checks, compensation requirements, reconciliation policy, irreversible-effect labeling, or RecoveryActionCard approval class;
- approval classes, delegated-trust grant envelopes, revocation behavior, mutation-boundary checks, or hard-stop policy;
- privacy policy;
- provider data handling;
- publication rules;
- deletion behavior;
- audit, reversal, compensation, or irreversible-effect retention behavior;
- billing;
- support access;
- evidence or citation requirements.

## Feature flags

Flags are typed and owned. Each flag records:

- purpose;
- owner;
- rollout scope;
- default state;
- kill switch;
- dependencies;
- telemetry;
- expiry or review date;
- customer impact.

Long-lived flags must become product configuration or be removed.

## Evaluation datasets

Evaluation datasets derived from customer activity require explicit approval covering:

- data categories;
- consent or contractual basis;
- minimization;
- retention;
- access controls;
- deletion path;
- provider restrictions;
- customer communication where needed.

Synthetic and public fixtures are preferred for regression tests.

## Launch gates

Analytics and experiments require:

- schema review;
- OutcomeMetricDefinition and StrategicBetScorecard review for any affected performance, usability, automation, user-experience, trust, reviewability, recoverability, or advanced-differentiation claim;
- CustomerClaimEvidenceRecord review for any stronger-than-specification analytics-backed public, release-note, support, SDK, API, MCP, marketplace, demo, or in-product claim;
- privacy inspection;
- event sampling tests;
- session-replay masking or disablement on sensitive surfaces;
- feature-flag kill-switch tests;
- experiment assignment audit;
- advanced-feature incubation links from prototype, dogfood, beta, adoption, deferral, kill, and non-action decisions to Product Truth, feature flags, benchmark scenarios, user-research plans, affected requirements, affected documents, and release evidence;
- feedback consent, retention, and aggregation review;
- discovery-theme links to requirements, implementation slices, or explicit non-action decisions;
- truth-board links from feedback, analytics, experiments, official references, and runtime evidence to affected requirements, documents, slices, and release evidence;
- SignalDecisionLedger links from feedback, analytics, official references, public user-opinion, experiments, runtime evidence, and implementation evidence to accepted decisions, rejected decisions, deferrals, research-more tasks, non-action decisions, affected requirements, affected documents, and validation evidence;
- experience-validation links from user-research plans, study sessions, findings, task outcomes, perceived-usability measures, dogfood limits, and evidence packages to affected requirements, Product Truth decisions, launch evidence, and unresolved severity;
- outcome-scorecard links from automation analytics to accepted outputs, rejected work, cost, latency, approval burden, safety blockers, user corrections, and adaptive-routing recommendations;
- focus-continuity links from resume, attention, and notification analytics to user corrections, missed blockers, stale-digest rates, accessibility failures, and affected requirements;
- spatial-workbench links from Workset, pane, restore, hydration, stale-resource, redaction, layout-suggestion, accessibility, and reversal analytics to affected requirements, documents, slices, and release evidence;
- adaptive-preference links from PreferenceItems, PreferenceSuggestions, PreferenceExplanations, PreferenceConflicts, reset/export, user corrections, policy-managed controls, and model-context summary observations to affected requirements, documents, slices, Product Truth decisions, and release evidence;
- work-control links from recommendation analytics to Work Packets, NextActionCandidates, accepted outcomes, corrections, dismissals, stale packet rates, approval burden, repeated-work capture, recipe-draft candidates, and affected requirements;
- maintenance links from source freshness, source changes, ClaimRevalidations, impact summaries, patch proposals, maintenance schedules, publication blockers, official-reference reviews, failed refreshes, accepted patches, rejected patches, false positives, false negatives, cost, latency, approval burden, and user corrections to affected requirements, documents, slices, Product Truth decisions, and release evidence;
- project-health and support links from HealthLineageEdges, HealthFindings, suspected causes, counterevidence, unknown states, false-cause classifications, diagnostic-waste classes, RepairPlaybooks, repair dry-runs, RepairRuns, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, support-safe diagnostics, repeated repairs, false positives, dismissals, approval burden, and repair outcomes to affected requirements, documents, slices, Product Truth decisions, and release evidence;
- scenario links from Scenarios, SimulationRuns, SimulatedEffects, comparisons, decisions, stale-plan rejections, apply candidates, live-test warnings, user corrections, and outcome observations to affected requirements, documents, slices, Product Truth decisions, and release evidence;
- reversible-work links from ReversalCapabilities, ReversalRecords, RecoveryActionCards, CompensationPlans, CompensationSteps, ReconciliationChecks, irreversible acknowledgements, stale recovery rejections, user corrections, and recovery outcome observations to affected requirements, documents, slices, Product Truth decisions, and release evidence;
- approval-control links from ApprovalRequests, ApprovalBatches, DelegatedTrustGrants, ApprovalDecisions, ApprovalReceipts, ApprovalLoadBudgets, and ApprovalFatigueSignals to user corrections, reversals, stale receipt rejections, revocations, hard-stop blocks, automation outcomes, affected requirements, and release evidence;
- no unresolved blocker or high-severity contradictions in the affected product area;
- customer opt-out where required;
- support and incident runbooks.
