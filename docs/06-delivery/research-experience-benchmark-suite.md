# Research experience benchmark suite

**Review date:** 2026-07-18
**Status:** delivery benchmark and release-evidence contract, not runtime behavior

Research must prove that production journeys feel useful, fast, understandable, controllable, accessible, and recoverable under realistic work. Green CI, broad SLOs, and positive internal demos are not enough. This suite turns source-quality-labeled public user-opinion signals, screened segment records, reviewed user-opinion synthesis, official usability guidance, performance budgets, automation goals, and Product Truth decisions into repeatable end-to-end benchmark scenarios.

The suite exists to answer one question for every launch candidate: can a target user complete the intended research work with correct evidence, visible state, bounded automation, and a trustworthy recovery path?

## Source basis

Official and methodology references reviewed on 2026-07-18:

- [Nielsen Norman Group, Website Response Times](https://www.nngroup.com/articles/website-response-times/) for user-perceived latency thresholds around instant response, uninterrupted flow, and attention loss.
- [Web.dev Core Web Vitals](https://web.dev/articles/vitals) for page-experience thresholds including Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift.
- [Web.dev Interaction to Next Paint](https://web.dev/articles/inp) for interaction responsiveness measurement and percentile handling.
- [Google Research, Measuring the User Experience on a Large Scale](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/) for HEART-style goals, signals, and metrics.
- [Microsoft Research, Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/) for AI behavior across first use, regular interaction, failure, and adaptation.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) for accessibility criteria and human-evaluation expectations.

Directional public user and practitioner signals reviewed on 2026-07-18:

- [Hacker News discussion of AI waiting and vigilance fatigue](https://news.ycombinator.com/item?id=46934404).
- [Hacker News discussion of agent permission fatigue](https://news.ycombinator.com/item?id=48308376).
- [Hacker News discussion of filesystem permission and sandbox expectations](https://news.ycombinator.com/item?id=47550282).
- [Hacker News discussion of approval gates and agent resume behavior](https://news.ycombinator.com/item?id=47096253).
- [Reddit discussion of Windows Recall usefulness and safety](https://www.reddit.com/r/Windows11/comments/1kuywg3/should_i_enable_recall/).
- [Reddit discussion of Apple Shortcuts power and authoring friction](https://www.reddit.com/r/shortcuts/comments/1ldedpg/i_feel_like_the_shortcuts_app_is_so_powerful_and/).
- [Reddit discussion of Stage Manager workflow quality](https://www.reddit.com/r/MacOS/comments/1r5tpr0/i_finally_understand_stage_manager_its_powerful/).
- [Reddit discussion of tab overload and mental clutter](https://www.reddit.com/r/productivity/comments/1nxwbhw/how_do_you_all_manage_tab_overload_without/).
- [Carnegie Mellon University, Overcoming Tab Overload](https://www.cmu.edu/news/stories/archives/2021/may/overcoming-tab-overload.html).

Public discussions are directional discovery inputs only and must follow [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md). They can justify a benchmark scenario, confidence label, non-action decision, or user-research lane. They cannot prove demand, usability, accessibility, trust, safety, or readiness without runtime and user evidence.

## Authority and relationship

This suite complements the existing control plane:

- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md) owns study protocol, participant coverage, dogfood limits, and experience evidence packages.
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) owns `UserResearchSegmentScreener` records for benchmark participant runs, dogfood cohorts, beta cohorts, public-signal synthesis, survey synthesis, support synthesis, target segments, excluded segments, sampling, representativeness, and blocked claims.
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) owns the surface coverage matrix that determines which user-opinion gaps, blocked claims, target segments, and synthetic-user boundaries must be represented by benchmark scenarios.
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) owns codebooks, coding assignments, AI-assisted analysis review, negative-evidence review, and UserOpinionSynthesisRecords for opinion-backed benchmark scenario seeds and claim blockers.
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md) and [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md) own automated test layers and validation gates.
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md) owns SLOs, load tests, capacity, and service budgets.
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) owns ProductTelemetryEventSpecs, event families, allowed and prohibited properties, privacy classification, redaction tests, and release-claim limits for benchmark instrumentation.
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) owns CustomerClaimEvidenceRecords, allowed language, blocked language, release scope, and excluded cases for benchmark-backed public claims.
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) owns release promotion and immutable release bundles.
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md) owns recurring source refresh for OS, workspace-agent, automation, browser, model, performance, UX, trust, and public-opinion signals.
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) owns source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions for benchmark inputs.
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md) owns pre-benchmark review records for AI capability boundaries, uncertainty, permissions, progress, recovery, accessibility, and automation outcome value.
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md) owns AutomationFailureRecoveryRecords, recovery severity, safe next actions, side-effect reconciliation, quiet-wrong outcome handling, and learning artifacts for benchmarked automation failures.
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md) owns OutcomeMetricDefinitions, StrategicBetScorecards, baselines, anti-metrics, and OutcomeReviews that connect benchmark scenarios to north-star user outcomes.
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) owns prototype, dogfood, beta, adoption, deferral, kill, and non-action controls before advanced opportunities can depend on these benchmarks for launch scope.
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) owns same-task comparator baselines, AdvancedDifferentiationBenchmarkRecords, anti-metrics, and better-than claim blockers for benchmark-backed advanced differentiation.
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md) owns advanced opportunity scoring, sequencing, validation expectations, and non-actions.
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) owns same-change consistency and unresolved contradiction disposition.

If a benchmark exposes a conflict between product, architecture, implementation status, runtime evidence, user research, or customer-facing claims, Product Truth records the contradiction before the benchmark can pass.

## Benchmark scenario record

Every scenario is recorded as an `ExperienceBenchmarkScenario`:

```text
id
name
status: draft | ready | active | blocked | retired
source_signal
source_quality_record
user_research_segment_screener_refs
user_opinion_synthesis_record_refs
human_ai_review_refs
outcome_metric_refs
strategic_bet_scorecard_refs
advanced_differentiation_benchmark_refs
reviewed_at
user_problem
target_segments
affected_requirements
owner_slice
governing_docs
task_setup
success_path
good_event_definition
bad_event_definitions
performance_budget
perceived_ux_measures
automation_outcome_measures
accessibility_coverage
privacy_security_checks
fixtures_and_data
instrumentation
blocking_thresholds
release_evidence
owner
revisit_trigger
```

The scenario record links source signals to product requirements and release evidence. A scenario is not active until its fixtures, instrumentation, success path, bad-event definitions, and blocking thresholds are specific enough for another team member to rerun it.

## Benchmark run record

Every execution records an `ExperienceBenchmarkRun`:

```text
scenario_id
run_id
commit
environment
participant_or_fixture
user_research_segment_screener_refs
device_browser_assistive_technology
started_at
result: pass | fail | partial | blocked | inconclusive
measured_latencies
task_outcome
perceived_ux_result
automation_outcome_result
accessibility_result
privacy_security_result
findings
regressions
waivers
Product Truth links
release_evidence
advanced_differentiation_benchmark_refs
```

Benchmark runs must name the commit, environment, fixture or participant class, device/browser coverage, assistive-technology coverage where relevant, and any missing evidence. A run without these fields is a note, not release evidence.

## Benchmark principles

1. User opinion becomes a scenario, not proof.
2. A good event requires task success, truthful state, user control, and recovery; speed alone is insufficient.
3. Latency measurement includes first authorized shell, first progress, first useful state, citation-ready state, final state, cancellation acknowledgement, and recovery path.
4. Automation measurement includes accepted outcome, rejected output, cost, latency, approval burden, failure diagnosis, replay readiness, and safety blockers.
5. Accessibility, mobile, offline, narrow-screen, and assistive-technology behavior are first-class when a surface ships.
6. Benchmark evidence cannot pass when documentation, implementation status, release evidence, or Product Truth claims contradict the observed behavior.
7. A benchmark can pass for a limited scope only when the limitation is explicit, user-visible, linked to a Product Truth decision, and excluded from customer-facing claims.
8. No benchmark may rely on private customer content unless the consent, retention, minimization, access, and redaction policy is explicit.
9. Any benchmark seeded by user-opinion synthesis links to a reviewed UserOpinionSynthesisRecord with codebook version, coding assignments, negative evidence, contradiction state, and blocked claims.
10. Any benchmark used for advanced or better-than claims links to a current AdvancedDifferentiationBenchmarkRecord with comparator source date, same-task baseline, anti-metrics, telemetry, outcome review, and CustomerClaimEvidenceRecord.

## Core benchmark scenarios

The initial production suite includes these scenarios. Additional scenarios are required when new launch claims, advanced opportunities, or release surfaces introduce materially different user work.

### `bench-first-grounded-project`

A clean-account user creates one Project, uploads one PDF, gets a cited answer, creates editable Markdown, reopens it, and inspects the supporting source.

Good event requirements:

- Project, Chat, Documents, and Sources are discoverable without broad setup.
- The source version is immutable and status is visible.
- The answer includes exact citations and abstains from unsupported claims.
- The generated document is durable, editable, deterministic, and traceable.
- First shell, first progress, first useful state, citation-ready state, and final state meet the declared budgets.
- Keyboard and screen-reader citation inspection work for the primary journey.

### `bench-progressive-wait-confidence`

A user starts a long-running research task and safely continues work while Research reports progress, partial results, stale/degraded states, budget, cancellation, and recovery.

Good event requirements:

- The user sees an immediate authorized shell and first progress.
- Partial, final, stale, blocked, and degraded states are distinguishable.
- Cancellation acknowledgement and reconnect behavior are visible.
- The user is not forced to supervise every model step to avoid hidden failure.
- Performance-perception measures show wait clarity, task-switch confidence, and no false-completion belief.

### `bench-resume-workset-focus`

A user leaves the Project, returns later, opens a Resume Digest, switches Worksets, and restores panes that include stale, redacted, or changed resources.

Good event requirements:

- The digest summarizes blockers, changed sources, stale items, and next actions without leaking unauthorized resource details.
- Workset switch and pane hydration meet budgets without layout instability.
- Redacted or stale resources are understandable and recoverable.
- The workflow reduces tab overload without relying on OS-wide capture.

### `bench-automation-dry-run-debug-outcome`

A user accepts a recipe draft, reviews a dry-run, activates a bounded canary, observes a failure or quiet wrong outcome, opens the Automation Run Debugger, follows the AutomationFailureRecoveryRecord safe next action, creates a replay or reconciliation case, and sees accepted-outcome scoring.

Good event requirements:

- Trigger, scope, side effects, approval class, budget, and stop condition are clear before activation.
- The dry-run does not perform external writes.
- The Automation Run Debugger explains failure without exposing private source content.
- The recovery record shows severity, affected resources, side-effect state, cause confidence, disabled-action reasons, owner, and safe next action.
- Side-effect uncertainty routes to reconciliation before retry or replay.
- Outcome scorecards distinguish accepted value from activity volume.
- Expansion blocks when accepted outcome, cost, approval burden, or safety evidence regresses.

### `bench-scenario-reversible-change`

A user previews a high-impact change in Scenario Lab, compares options, sees unknowns and live-test labels, rejects a stale plan, applies an accepted candidate, and uses the recovery path if the outcome fails.

Good event requirements:

- Simulated effects, unknowns, redactions, cost, latency, approval class, and irreversible effects are visible.
- Stale plans fail closed.
- Apply candidates pass owning-service preflight before mutation.
- Reversal, compensation, reconciliation, or irreversible acknowledgement is accurate.

### `bench-native-companion-no-ambient`

A user installs the optional companion or browser extension, captures active-tab or selected context with explicit invocation, reviews the preview, revokes the grant, and verifies no ambient capture.

Good event requirements:

- Active-tab, selected-context, file-watch, OS share/import, notification, and command-bridge scopes are distinct.
- No capture occurs without user invocation or an explicit scoped grant.
- Revocation is discoverable and takes effect across local and server state.
- Users can explain the no-ambient-capture boundary after the task.

### `bench-trust-product-truth-contradiction`

A user or internal reviewer finds a factual contradiction, submits a correction, sees Product Truth disposition, and verifies that affected requirements, documents, release evidence, and public claims update together.

Good event requirements:

- The contradiction links to source evidence, public-signal confidence, affected documents, requirements, implementation slices, and launch claims.
- Non-action decisions are explicit and revisitable.
- Same-change consistency checks prevent one document from claiming behavior another document blocks.

### `bench-mobile-offline-accessibility`

A user completes the primary Project journey on a narrow mobile viewport and through keyboard or assistive technology coverage, then loses connectivity, saves local work, reconnects, and resolves a sync conflict.

Good event requirements:

- Mobile, touch, keyboard, and screen-reader paths expose equivalent task control.
- Offline draft state never becomes canonical truth without current preflight.
- Reconnect and conflict review are understandable.
- WCAG 2.2 AA-critical journeys, focus return, live-region behavior, reduced motion, target size, and accessible output evidence pass for shipped surfaces.

## Release gates

A release candidate includes:

- the active `ExperienceBenchmarkScenario` inventory;
- benchmark runs for affected scenarios at the release commit;
- unresolved benchmark blockers by severity and owner;
- regressions since the previous candidate;
- waivers with reason, compensating control, expiry, customer effect, and Product Truth link;
- scenarios excluded from scope and the exact launch claims they block;
- passing human-AI interaction review records for changed AI, agentic, and automation surfaces, with unresolved finding disposition;
- current OutcomeMetricDefinitions, StrategicBetScorecards, and AdvancedDifferentiationBenchmarkRecords for any benchmark-backed performance, usability, automation, user-experience, or advanced-differentiation claim;
- current UserResearchSegmentScreeners for every participant-backed benchmark run, dogfood cohort, beta cohort, or public-signal-derived benchmark scenario that affects launch scope;
- reviewed UserOpinionSynthesisRecords for every user-opinion-derived benchmark scenario that affects launch scope, including codebook version, coding assignments, negative evidence, contradiction state, AI-assist disclosure where applicable, and blocked claims;
- current AutomationFailureRecoveryRecords, unresolved severity disposition, recovery outcomes, and learning artifacts for every benchmarked automation failure, quiet wrong outcome, or side-effect uncertainty that affects launch scope;
- official-source review dates, source-quality classes, representativeness, bias, and public-signal confidence labels for benchmark inputs.

No customer-facing claim can rely on a scenario that is failed, blocked, stale, or unrun. Benchmark-backed wording also needs a CustomerClaimEvidenceRecord that names the scenario scope, comparator, evidence date, limitation, and excluded cases. No unresolved `S0` benchmark blocker may ship. No unresolved `S1` benchmark blocker may affect a launch journey. Waivers cannot convert a failed benchmark into a pass.

## Documentation update rule

When benchmark scenarios, thresholds, or findings change product direction, update affected contracts in the same change:

- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md)
- [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md)
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- relevant product, architecture, AI, source, security, delivery, and build contracts

If a benchmark changes public positioning, Product Truth records the decision and launch evidence records the exact release impact before the documentation change is treated as complete.
