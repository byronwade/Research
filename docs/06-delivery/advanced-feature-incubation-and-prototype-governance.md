# Advanced feature incubation and prototype governance

**Review date:** 2026-07-18
**Status:** delivery and Product Truth incubation contract, not runtime behavior

Research needs advanced operating-layer features that generic operating systems, browsers, and workspace agents do not combine well: evidence-native resume, Project-scoped work packets, no-ambient-capture companion entry points, scenario-before-side-effect workflows, reversible work, automation debugging, outcome-scored automation, and contradiction-aware documentation maintenance. The risk is that novelty can outrun evidence, usability, performance, privacy, accessibility, and documentation consistency.

This contract defines how advanced opportunities move from signal to prototype, dogfood, beta, adoption, deferral, or explicit non-action. It keeps ambitious features testable without letting prototypes become product claims, hidden second authorities, or contradictory requirements.

## Source basis

Official and methodology references reviewed on 2026-07-18:

- [Apple Intelligence 2026 platform announcement](https://www.apple.com/newsroom/2026/06/apple-intelligence-brings-powerful-ai-capabilities-into-everyday-experiences/) for system-integrated AI, app actions, developer testing, beta availability, privacy architecture, regional and device limits, and usage limits.
- [Apple Developer: What's new in Shortcuts, WWDC26](https://developer.apple.com/videos/play/wwdc2026/310/) for automations, app-content integration, LLM-facing App Entity refinement, and synced shortcut storage.
- [Anthropic, Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) for multi-turn agent evaluation, task/trial/grader/trace/outcome/harness definitions, and the need to evaluate the model plus harness together.
- [OpenAI and Anthropic pilot safety evaluation](https://openai.com/index/openai-anthropic-safety-evaluation/) for cross-organization evaluation and challenging scenario coverage.
- [Nielsen Norman Group, Iterative Design and Prototype Testing](https://www.nngroup.com/articles/case-study-iterative-design-prototyping/) and [The Most Important Usability Activity](https://www.nngroup.com/articles/the-most-important-usability-activity/) for early prototype testing and user testing before major design decisions harden.
- [LaunchDarkly flag lifecycle documentation](https://launchdarkly.com/docs/home/flags/flag-status), [LaunchDarkly operational feature flag guidance](https://launchdarkly.com/blog/operational-flags-best-practices/), and [Optimizely feature experimentation concepts](https://support.optimizely.com/hc/en-us/articles/38931713970189-Core-concepts-of-Feature-Experimentation) for staged exposure, flag lifecycle, targeted delivery, rollback, kill switches, and experiments.

Directional public user and practitioner signals reviewed on 2026-07-18:

- [Hacker News discussion of AI-assisted coding in professional work](https://news.ycombinator.com/item?id=47388646), including practitioner concerns about agents being blind to running systems and repeated restart loops.
- [Hacker News discussion of deterministic UX, replayable specifications, and AI uncertainty](https://news.ycombinator.com/item?id=44243050).
- [Hacker News discussion of agent reliability concerns](https://news.ycombinator.com/item?id=43535653).
- [Hacker News discussion of agent observability](https://news.ycombinator.com/item?id=47205382).
- [Hacker News discussion of LLM observability and evals](https://news.ycombinator.com/item?id=45398467).

Public discussions are directional signals only and must follow [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md). They can justify an incubation candidate, failure mode, prototype task, or non-action decision. They cannot prove demand, usability, trust, accessibility, safety, or production readiness without stronger Product Truth, user research, benchmark, and runtime evidence.

## Authority and relationship

This contract complements the existing control surfaces:

- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md) owns opportunity scoring, sequencing, validation expectations, and non-action disposition.
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md) owns accepted differentiators and rejected unsafe operating-layer patterns.
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md) owns current official-source and public-signal refresh.
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) owns FrontierSignalReview records, novelty-control rules, copy-risk checks, promotion gates, and claim blockers before fresh frontier signals can become advanced opportunities or prototypes.
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) owns source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions for incubation inputs.
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md) owns specification-mode accepted, rejected, research-more, and non-action decisions for current external signals until runtime Product Truth exists.
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md) owns interaction review records for AI capability boundaries, trust calibration, progress, permissions, approval load, user control, recovery, accessibility, and automation outcome value before advanced surfaces can expand.
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md) owns AutomationFailureRecoveryRecords, recovery severity, safe next actions, side-effect reconciliation, quiet-wrong outcome handling, and learning artifacts for advanced automation failures.
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md) owns discovery evidence intake and closed-loop follow-up.
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) owns `UserResearchSegmentScreener` records so advanced-opportunity evidence from public signals, dogfood, beta cohorts, surveys, support, and benchmark participants stays bounded to target and excluded segments.
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) owns surface-level user-opinion coverage, target segments, blocked claims, and synthetic-user boundaries for advanced opportunities.
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) owns codebooks, coding assignments, AI-assisted analysis review, negative-evidence review, UserOpinionSynthesisRecords, promotion thresholds, contradictions, and blocked claims for advanced-opportunity evidence.
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md) owns event schemas, feature flags, experiments, minimization, and analytics.
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md) owns OutcomeMetricDefinitions, StrategicBetScorecards, baselines, anti-metrics, and OutcomeReviews for advanced opportunities that claim measurable performance, usability, user-experience, automation, trust, reviewability, recoverability, or advanced-differentiation value.
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) owns ProductTelemetryEventSpecs, prohibited telemetry, event-quality checks, and release-claim limits for advanced-feature dogfood, beta, and adoption evidence.
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) owns allowed language, blocked language, and CustomerClaimEvidenceRecords before advanced-feature prototypes, dogfood runs, beta evidence, or adoption decisions become customer-facing claims.
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md) owns study plans, observed-task evidence, dogfood limits, and experience evidence packages.
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md) owns repeatable scenario benchmarks and release-blocking benchmark runs.
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) owns current comparator sources, same-task baselines, anti-metrics, and claim blockers for advanced or better-than OS, browser, workspace-agent, app-intent, automation, and agent-observability claims.
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) owns production promotion.

An incubation record is not product authority by itself. It can propose a requirement, prototype, experiment, benchmark, implementation issue, or non-action, but the governing product, architecture, security, and delivery contracts remain authoritative.

## Incubation record

Every material advanced-feature exploration uses an `AdvancedFeatureIncubation` record:

```text
id
name
status: signal | scoped | prototype | dogfood | beta | adopted | deferred | killed | non-action | stale | contradicted
source_basis
source_quality_record
reviewed_at
frontier_signal_review_refs
user_problem
target_segments
user_research_segment_screener_refs
user_opinion_synthesis_record_refs
objective_dimensions
non_action_alternatives
affected_requirements
governing_docs
prototype_type: paper | clickable | workflow-simulation | sandbox-spike | dogfood-flag | beta-flag
hypothesis
success_metrics
guardrail_metrics
strategic_bet_scorecard
advanced_differentiation_benchmark_refs
kill_criteria
privacy_security_constraints
accessibility_constraints
performance_constraints
automation_constraints
data_and_fixture_policy
feature_flag_plan
benchmark_scenarios
advanced_differentiation_benchmark_refs
user_research_plan
human_ai_interaction_review
Product Truth links
owner
review_date
revisit_trigger
```

The record must be specific enough to show what will be learned, what will not be learned, and what decision becomes possible after the prototype. A vague "try AI for this" idea is not an incubation record.

## Prototype run record

Every prototype execution records an `AdvancedPrototypeRun`:

```text
incubation_id
run_id
commit_or_artifact
environment
prototype_type
participant_or_fixture
feature_flag_or_access_scope
started_at
result: pass | fail | partial | blocked | inconclusive | killed
task_outcome
measured_latencies
accepted_outcome
rejected_output
approval_burden
failure_mode
privacy_security_result
accessibility_result
benchmark_links
automation_failure_recovery_refs
advanced_differentiation_benchmark_refs
user_research_links
Product Truth decision
documentation_changes
next_decision
```

Prototype runs are evidence only for the stated scope. A clickable prototype cannot prove runtime reliability. A sandbox spike cannot prove user comprehension. Dogfood cannot prove customer readiness. A beta cannot bypass launch gates.

## Incubation stages

### Signal

Entry criteria:

- a current official source, public signal, customer signal, support signal, dogfood failure, runtime observation, or strategic bet is recorded;
- source-quality class, confidence, representativeness, bias, recency, and directionality are explicit;
- user-opinion themes link to reviewed UserOpinionSynthesisRecords when they affect the incubation decision;
- the affected objective dimension is named.

Exit decision:

- `non-action` when the idea violates invariants, lacks Research-native advantage, or worsens trust, drift, reviewability, performance, accessibility, or automation quality;
- `scoped` when the user problem, non-action alternatives, constraints, and learning goal are clear.

### Scoped

Entry criteria:

- the governing docs and affected requirements are named;
- the prototype type and learning question are selected;
- kill criteria, guardrail metrics, and privacy/security constraints are written before build work begins.

Exit decision:

- `prototype` when the team can learn without customer risk or second-authority behavior;
- `deferred` when dependencies are missing;
- `killed` when the scoped plan cannot satisfy guardrails.

### Prototype

Allowed prototype types:

- `paper`: storyboard, script, or low-fidelity flow;
- `clickable`: non-production UI that demonstrates interaction, labels, and recovery paths;
- `workflow-simulation`: deterministic scenario over synthetic Project state;
- `sandbox-spike`: isolated technical spike with no customer data and no production side effects;
- `dogfood-flag`: internal-only runtime path with owner, telemetry, kill switch, and narrow scope;
- `beta-flag`: limited external cohort only after dogfood and benchmark gates pass.

Exit decision:

- `dogfood` when prototype evidence shows the task is understandable and safe enough for internal use;
- `deferred` when value is plausible but dependencies, usability, performance, accessibility, or evidence are weak;
- `killed` when kill criteria trigger.

### Dogfood

Dogfood validates whether the Research team can use the feature to maintain Research itself. It must record failures, workarounds, rejected outputs, manual repairs, approval load, and documentation drift.

Exit decision:

- `beta` only when dogfood passes the affected benchmark scenarios, no `S0` or `S1` blocker remains, and no unresolved `AFR-0` or launch-relevant `AFR-1` automation recovery blocker remains;
- `killed` when the feature creates repeated hidden work, false confidence, approval fatigue, privacy confusion, inaccessible primary paths, or documentation drift.

### Beta

Beta exposure uses explicit cohorts, current `UserResearchSegmentScreener` records, flags, owner, rollback, support visibility, privacy notice, and Product Truth links. Beta users must know the feature is limited and must have a safe opt-out where policy requires it.

Exit decision:

- `adopted` only when benchmark, user research, performance, accessibility, security, support, advanced-differentiation comparator records where applicable, and release evidence support the launch scope;
- `deferred`, `killed`, or `non-action` when evidence fails, contradicts the opportunity, or shows weaker user value than the non-action alternative.

## Required gates before implementation scope expands

Before an advanced prototype becomes an implementation slice, all of these must exist:

1. `FrontierSignalReview` or Product Truth equivalent when the prototype came from a fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion signal.
2. `AdvancedOpportunity` or Product Truth equivalent.
3. `AdvancedFeatureIncubation` record.
4. Current official-source review or no-change watch snapshot.
5. Source-quality record and directional public-signal label where public user opinion, practitioner discussion, news analysis, survey, or generated summary evidence is involved.
6. Current `UserResearchSegmentScreener` records where user opinion, survey, dogfood, beta, support, public-signal, or benchmark-participant evidence affects scope.
7. Non-action alternatives and rejected unsafe shortcuts.
8. Governing product, architecture, security, delivery, and reference docs.
9. StrategicBetScorecard with baseline, expected outcome delta, guardrails, and anti-metrics.
10. Success metrics, guardrail metrics, and kill criteria.
11. Feature flag or exposure plan with owner, default, kill switch, expiry, telemetry, and cleanup path.
12. Privacy, security, abuse, accessibility, internationalization, and support constraints.
13. Human-AI interaction and automation UX review plan for affected AI, agentic, automation, permission, progress, recovery, and advanced surfaces.
14. Automation failure recovery plan for failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain prototype runs where automation is involved.
15. Benchmark scenario mapping and user-research plan.
16. AdvancedDifferentiationBenchmarkRecord refs when the prototype can support comparative or better-than claims.
17. Documentation consistency plan naming every affected contract and metadata file.

## Kill criteria

Kill or defer an advanced prototype when it:

- creates or depends on a second source, document, evidence, workflow, memory, publication, Product Truth, or automation authority;
- depends on ambient screen, clipboard, browser-history, broad filesystem, camera, microphone, keylogging, or OS-window capture;
- hides source scope, stale state, uncertainty, cost, approval class, side effects, or failure state;
- leaves failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain automation without an AutomationFailureRecoveryRecord, safe next action, owner, and learning or non-action decision;
- makes debugging, replay, or support diagnosis weaker;
- increases approval fatigue without structurally reducing risk;
- produces useful-looking output that users reject, heavily edit, reverse, or cannot explain;
- fails first-use, progressive wait, resume, automation, scenario, native companion, Product Truth, mobile, offline, or accessibility benchmark gates for the affected scope;
- cannot be rolled back, revoked, disabled, or removed without customer harm;
- requires customer-facing claims stronger than the current evidence supports.

## Prototype families to prioritize

These families are eligible for incubation because they combine Research-native source, evidence, document, Activity, Product Truth, automation, and release-evidence state in ways generic operating systems and browsers usually do not:

1. **Evidence-native resume and Work Packets:** rebuild current work from Project records, not screenshots or browser history.
2. **Live-observed Project Health:** connect support-safe runtime observations, test output, traces, source status, and document blockers to Project Health without exposing raw private content.
3. **Scenario-first automation activation:** preview source, document, publication, repository, notification, connector, cost, and approval effects before any activation.
4. **Outcome-scored automation cockpit:** make accepted value, rejected work, cost, latency, failure diagnosis, replay readiness, and approval burden visible together.
5. **Contradiction-aware document maintenance:** turn source changes, user corrections, and external watch refreshes into minimal typed patches and Product Truth decisions.
6. **No-ambient-capture companion entry:** provide explicit active-tab, selected-text, OS share/import, notification, global command, and file-watch entry points without broad device memory.
7. **Task-aware Worksets:** restore evidence-aware layouts, stale labels, redactions, and next actions from Project state instead of OS windows.

These are not automatic roadmap commitments. Each family still needs an incubation record, benchmark mapping, reviewed user-opinion synthesis where opinion evidence is used, user research, and launch evidence before any customer claim. Any family that wants comparative or better-than language also needs a current `AdvancedDifferentiationBenchmarkRecord`.

## Documentation update rule

When incubation changes product direction, update affected contracts in the same change:

- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- relevant product, architecture, AI, source, security, and build contracts

If a prototype exposes a contradiction, the contradiction is recorded in Product Truth and resolved or explicitly deferred before implementation scope expands.
