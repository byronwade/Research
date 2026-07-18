# User research and experience validation

**Review date:** 2026-07-18
**Status:** delivery and launch-evidence contract, not runtime behavior

Research must validate experience quality with real users, observed tasks, product telemetry, and governed decision records. Public opinions, competitor behavior, dogfooding, usability sessions, analytics, support signals, and accessibility findings all matter, but none of them can become a launch claim or roadmap mandate until their source quality, provenance, segment, task context, confidence, bias, and Product Truth disposition are explicit.

This document owns the study protocol and evidence package for usability, performance perception, automation usefulness, automation recovery comprehension, delegated trust, accessibility, native companion comprehension, Worksets, Scenario Lab, Reversible Work, Product Truth, and advanced operating-layer claims. Participant segmentation, screening, sampling limits, and excluded audiences are governed by [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md). Surface-by-surface coverage expectations, blocked claims, target segments, and synthetic-user boundaries are tracked in [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md).

## Source basis

Methodology and official references reviewed on 2026-07-18:

- [Nielsen Norman Group, Success Rate: The Simplest Usability Metric](https://www.nngroup.com/articles/success-rate-the-simplest-usability-metric/) for task-completion measurement and its limits.
- [Nielsen Norman Group, Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/) for qualitative, quantitative, moderated, and unmoderated usability testing.
- [Nielsen Norman Group, Recruiting and Screening Candidates for User Research Projects](https://www.nngroup.com/articles/recruiting-screening-research-candidates/) for target-audience recruiting, eligibility criteria, exclusion criteria, and sampling-bias controls.
- [Nielsen Norman Group, Beyond the NPS: Measuring Perceived Usability with SUS, NASA-TLX, and SEQ](https://www.nngroup.com/articles/measuring-perceived-usability/) for perceived-usability and task-satisfaction instruments.
- [Google Research, Measuring the User Experience on a Large Scale](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/) for the HEART goals, signals, and metrics framework.
- [AAPOR Best Practices for Survey Research](https://aapor.org/standards-and-ethics/best-practices/) for survey objectives, sampling frame, mode, representativeness, and mixed-method limits.
- [People + AI Guidebook](https://pair.withgoogle.com/guidebook/) for human-centered AI product decisions.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) for accessibility expectations.

Directional public user and practitioner signals reviewed on 2026-07-18:

- [Hacker News discussion of AI waiting and vigilance fatigue](https://news.ycombinator.com/item?id=46934404).
- [Hacker News discussion of human-in-the-loop supervision fatigue](https://news.ycombinator.com/item?id=48942000).
- [Reddit product-management discussion of AI features teams do not use themselves](https://www.reddit.com/r/ProductManagement/comments/1uxxmbc/do_you_see_product_teams_talking_up_features_they/).
- [Reddit UX research discussion of mixed-method AI synthesis tooling](https://www.reddit.com/r/UXResearch/comments/1tg5q01/best_ai_synthesis_tool_for_mixedmethod_research/).
- [Reddit UX research discussion of method selection](https://www.reddit.com/r/UXResearch/comments/1rdnvjb/how_do_you_decide_which_ux_research_methods_to/).
- [Reddit UX research discussion of synthetic users](https://www.reddit.com/r/UXResearch/comments/12sfz39/synthetic_users/).

Public discussions are directional discovery evidence only and must follow [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md). They can trigger a study, a non-action decision, a strategic bet, or a Product Truth review; they cannot prove current demand, usability, accessibility, trust, or production readiness by themselves.

## Authority and relationship

This contract complements, but does not replace, the existing control surfaces:

- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md) owns feedback intake, source policy, themes, opportunities, SignalDecisionLedger entries, and closed-loop follow-up.
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) owns the `UserResearchSegmentScreener` records that map each study, dogfood cohort, beta cohort, public-signal synthesis, support synthesis, survey, interview round, or benchmark participant run to target segments, excluded segments, job-to-be-done, agency preference, AI trust posture, automation maturity, sampling, denominator, representativeness, bias, consent, retention, supported claims, and blocked claims.
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) owns the coverage matrix that keeps user-opinion work comprehensive across product, automation, advanced operating-layer, accessibility, support, API, SDK, MCP, and synthetic-user research surfaces.
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) owns codebooks, coding assignments, AI-assisted analysis review, negative-evidence review, contradiction handling, synthesis records, promotion thresholds, and blocked claims before raw opinions can affect Product Truth, requirements, launch evidence, or customer-facing claims.
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md) owns event schemas, experiment governance, feature flags, minimization, and analytics.
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) owns ProductTelemetryEventSpecs, allowed and prohibited telemetry properties, privacy classification, redaction tests, and release-claim limits for telemetry that supports study or dogfood interpretation.
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) owns prototype, dogfood, beta, adoption, deferral, kill, and non-action controls for advanced opportunities before they become launch scope.
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) owns FrontierSignalReview records, novelty-control promotion gates, user-opinion synthesis links, and blocked-claim limits before fresh frontier signals can become study scope, prototypes, benchmarks, implementation plans, or claims.
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) owns source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence.
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) owns CustomerClaimEvidenceRecords, allowed language, blocked language, scope, and excluded cases before study findings become customer-facing claims.
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md) owns expert review records for AI capability boundaries, trust calibration, source evidence, progress, permissions, approval load, recovery, accessibility, and automation outcome value before those surfaces can rely on user research or benchmark evidence for launch.
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md) owns AutomationFailureRecoveryRecords, safe next actions, side-effect reconciliation, quiet-wrong outcome handling, and recovery learning artifacts that must be understandable in observed automation tasks.
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md) owns OutcomeMetricDefinitions, StrategicBetScorecards, baselines, anti-metrics, and OutcomeReviews so study evidence maps to measurable performance, usability, user-experience, automation, trust, reviewability, recoverability, and advanced-differentiation outcomes.
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md) and [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md) own automated test layers and release-quality gates.
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md) owns repeatable end-to-end scenario benchmarks, benchmark-run records, good-event criteria, and launch-blocking benchmark regression thresholds derived from research signals.
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) owns the immutable release bundle and launch-promotion decision.
- This document owns user-research plans, study lanes, participant coverage, observed-task evidence, perceived-usability measures, dogfood limits, experience-severity definitions, and the experience evidence package.

If this protocol conflicts with a canonical requirement or architecture contract, correct the governing contract first. Do not silently weaken the validation protocol because a feature is already built or easy to demo.

## Core principle

A validated experience requires a triangulated evidence package:

- qualitative observation explains why a workflow succeeds, fails, or feels risky;
- task metrics show whether users complete the intended work;
- product telemetry shows production-shaped behavior at the right denominator;
- support, accessibility, privacy, and security review identify hidden harm;
- Product Truth records the decision, non-action, strategic bet, revisit trigger, and affected requirements.

Synthetic users, model-only critique, internal demos, prototype walkthroughs, and public internet anecdotes cannot satisfy real-user launch gates.
Prototype walkthroughs can inform an `AdvancedFeatureIncubation` record, but they cannot replace observed-task study evidence, benchmark runs, or release evidence for a shipped surface.

## Required objects

Experience validation uses typed records so findings remain auditable:

### UserResearchSegmentScreener

Every validation plan, dogfood cohort, beta cohort, public-signal synthesis, support-feedback synthesis, survey, interview round, and benchmark participant run that can affect scope links to at least one current `UserResearchSegmentScreener`.

The screener records:

- target and excluded segments;
- job-to-be-done and role context;
- agency preference, AI trust posture, and automation maturity;
- accessibility, locale, device, connectivity, privacy, and security sensitivity;
- buyer, user, operator, and support/admin relationship;
- sampling source, denominator, representativeness, known bias, consent, retention, owner, expiry, and revisit trigger;
- claims the evidence may support and claims it must block.

### ExperienceValidationPlan

The plan records:

- linked requirement IDs and implementation slices;
- linked `UserResearchSegmentScreener` IDs and excluded-segment rationale;
- target user segments and exclusion rules;
- journey and product surfaces under study;
- task protocol, study script, and environment assumptions;
- device, browser, assistive technology, locale, and connectivity coverage;
- consent, retention, redaction, and viewer policy;
- success, guardrail, and stop metrics;
- owner, review date, and launch decision relationship.

### ExperienceStudySession

Each session records:

- participant segment and recruitment source;
- environment, device class, input method, assistive technology, language, locale, and connection quality where relevant;
- task sequence and task outcome;
- observed errors, recoveries, hesitations, corrections, and abandoned paths;
- allowed excerpts or redacted notes only;
- facilitator interventions;
- recording, transcript, and retention policy where allowed;
- links to analytics windows, support-safe diagnostics, feedback records, and Product Truth signals.

### ExperienceFinding

Each finding records:

- affected user segment, journey, requirement, document, and implementation slice;
- severity, confidence, frequency or study denominator, and bias assessment;
- task evidence, telemetry evidence, support evidence, accessibility evidence, and direct user language where allowed;
- recommended action, explicit non-action, or research-more decision;
- owner, due milestone, validation method, and revisit trigger.

### ExperienceEvidencePackage

The release-ready package includes:

- validation plan and session set;
- relevant `HumanAIInteractionReview` records and unresolved finding disposition;
- relevant OutcomeMetricDefinitions, StrategicBetScorecards, and OutcomeReview links;
- relevant FrontierSignalReviews where fresh frontier signals affected the study scope, prototype, benchmark, implementation plan, or claim;
- task metrics and qualitative synthesis;
- telemetry and experiment windows;
- support, accessibility, privacy, security, and policy observations;
- dogfood results and limits;
- unresolved findings by severity;
- SignalDecisionLedger links;
- launch recommendation, non-action decisions, and follow-up owners.

## Participant coverage

Launch evidence must cover the users that Research claims to serve, and each included or excluded group must be traceable to a current `UserResearchSegmentScreener`. Candidate segments include:

- researchers and analysts who produce cited long-form work;
- technical teams and developers who maintain documentation, repositories, APIs, and implementation plans;
- product, operations, and support owners who need status, evidence, and correction workflows;
- admins who manage policy, grants, usage, support access, and risk controls;
- skeptical AI users who expect failure, citation drift, hidden capture, cost surprises, and confusing autonomy;
- automation power users who will push recipes, scheduled work, dry-runs, replay, and delegated trust;
- keyboard-only, screen-reader, reduced-motion, low-vision, and accessibility-review participants;
- mobile, tablet, desktop, installed-app, narrow-screen, low-connectivity, and offline-tolerant users where the surface ships;
- privacy-sensitive users evaluating native companion, browser extension, source capture, support diagnostics, and local-cache behavior.

Internal dogfood is mandatory for Research's own documentation, source import, document maintenance, automation debugger, Product Truth Board, and release evidence flow. It is not sufficient for launch claims. Teams must use their own advanced AI and automation features successfully before shipping them broadly, but dogfood cannot replace external segment evidence.

## Validation lanes

Every launch candidate identifies the lanes it affects and records evidence for those lanes.

### First-run activation and source import

Users must understand Project creation, source upload or import, immutable source versions, source status, parse failures, unsupported formats, deletion, and recovery.

Required evidence includes task success, time to first useful Project, import failure recovery, source-status comprehension, and onboarding drop-off telemetry.

### Grounded answer and citation trust

Users must understand when an answer is supported, inferred, disputed, stale, incomplete, or blocked. They must be able to inspect exact evidence without losing task context.

Required evidence includes task success, citation-open rate, citation correction rate, unsupported-claim recognition, trust/confidence labels, and screen-reader citation navigation.

### Document creation, editing, and patch review

Users must be able to create, edit, review, accept, reject, and preserve stable Markdown documents without confusing chat output with durable documentation.

Required evidence includes edit success, patch acceptance and rejection reasons, manual correction rate, stable-block preservation, public/private projection comprehension, and document-quality review.

### Progressive delivery and performance perception

Users must understand what has started, what is partial, what is final, what is stale, what can be cancelled, and when it is safe to switch tasks.

Required evidence includes first shell, first progress, first useful state, time to citation-ready state, cancellation discovery, stale-label comprehension, wait confidence, and qualitative reactions to long-running AI work.

### Command Center and keyboard workflows

Users must find commands, understand disabled reasons, invoke safe actions, review preflight, resolve shortcut conflicts, and recover focus after command completion.

Required evidence includes command discovery, keyboard-only completion, shortcut conflict recovery, preflight comprehension, and command-outcome telemetry.

### Focus, resume, and Worksets

Users must safely leave, resume, switch Worksets, restore pane layouts, understand stale or redacted resources, and recover from missing authorization.

Required evidence includes resume correctness, missed blocker rate, Workset switch completion, pane hydration latency, stale/redacted recovery, layout suggestion acceptance or reversal, and accessibility coverage.

### Native companion and no-ambient-capture comprehension

Users must understand optional companion scope, active-tab capture, selected-context capture, OS share/import, file-watch grants, command bridge behavior, notification deep links, support diagnostics, revocation, and no-ambient-capture guarantees.

Required evidence includes grant-scope comprehension, capture preview success, revocation success, no-ambient-capture comprehension, fallback discovery, and privacy objection handling.

### Automation registry, recipes, dry-runs, debugger, and recovery

Users must be able to find all saved, scheduled, paused, failed, degraded, and retired automations; predict cost, scope, and side effects; inspect dry-runs; debug failures; understand AutomationFailureRecoveryRecords; choose only enabled safe next actions; create replay or reconciliation cases; and distinguish accepted outcome from activity volume.

Required evidence includes dry-run comprehension, cost-surprise rate, accepted-output rate, rejected-output rate, approval burden, failure diagnosis time, recovery-severity comprehension, side-effect-state comprehension, disabled-action reason comprehension, reconciliation-first success, replay readiness, fixture conversion, recovery learning artifact creation, and outcome-scorecard linkage.

### Delegated trust and approval load

Users must understand grant scope, hard stops, approval batching, stale receipts, revocation, fatigue warnings, and why Research asks for approval.

Required evidence includes approval-decision quality, grant narrowing, revocation success, hard-stop recognition, fatigue signal rate, reversal rate, and user-reported trust.

### Scenario Lab and Reversible Work

Users must understand simulated effects, unknowns, stale plans, live-test labels, apply candidates, recovery eligibility, irreversible actions, compensation, and reconciliation.

Required evidence includes scenario comparison success, stale-plan rejection, live-test warning comprehension, apply-candidate success, restore success, false-undo detection, irreversible-label comprehension, and recovery outcome telemetry.

### Product Truth and feedback correction

Users and internal teams must be able to submit corrections, see feedback disposition where policy allows, understand non-action decisions, and trace changed requirements or documentation back to evidence.

Required evidence includes feedback capture success, Product Truth linkage, contradiction resolution, non-action clarity, follow-up closure, and documentation patch validation.

### Accessibility, internationalization, mobile, and offline behavior

Users must complete primary journeys with supported assistive technology, input methods, language/direction metadata, local-draft recovery, reconnect, and conflict handling.

Required evidence includes keyboard, screen-reader, pointer, touch, RTL, mixed-direction, Unicode, local-cache, reconnect, conflict-review, and accessible-export results.

### Support and administration diagnostics

Customers and operators must understand support grants, SupportDiagnosticBundles, access sessions, audit exports, break-glass review, usage visibility, and disabled controls.

Required evidence includes support-grant decision success, bundle usefulness, revocation success, audit-export clarity, admin task success, and privacy-minimized diagnostic review.

## Metrics

The default metric set is:

- task outcome: complete, partial, failed, blocked, or abandoned;
- time on task and time to first useful state;
- first error, recovery path, and number of facilitator interventions;
- task confidence or Single Ease Question where useful;
- System Usability Scale or equivalent perceived-usability instrument where benchmarkable;
- HEART-style goals, signals, and metrics for product areas that need longitudinal tracking;
- trust, confidence, usefulness, and citation-confidence labels;
- documentation clarity and patch-review confidence;
- automation accepted outcome, rejected output, cost surprise, approval burden, failure diagnosis time, recovery-severity comprehension, safe-next-action comprehension, side-effect reconciliation success, and replay readiness;
- performance perception: wait clarity, progress clarity, stale/partial/final label comprehension, cancellation discovery, and task-switch confidence;
- accessibility completion, focus return, screen-reader naming, live-region comprehension, reduced-motion behavior, target size, and keyboard alternative coverage;
- privacy comprehension: no-ambient-capture understanding, grant-scope understanding, support-access scope, data retention, and revocation success.

Metrics must declare denominator, segment, environment, sampling window, confidence limitations, and known bias. Run count, generated text length, token volume, model agreement, notification volume, or successful background execution cannot be treated as user value without accepted outcome evidence.

## Severity model

Severity is user-impact based:

- `S0 release blocker`: unsafe or unauthorized action, hidden-capture belief, false completion, citation trust failure, inaccessible primary journey, unreviewable high-risk mutation, data-loss risk, or inability to recover.
- `S1 launch blocker for affected surface`: repeated task failure, severe performance confusion, automation debugging or recovery failure, approval fatigue that degrades decision quality, native-grant misunderstanding, or inability to diagnose a primary workflow.
- `S2 required before broad rollout`: inefficient but recoverable workflow, unclear labels, high correction rate, repeated dismissal, weak documentation comprehension, or notable accessibility friction outside the primary path.
- `S3 backlog`: low-frequency polish, preference tuning, wording improvements, or narrow-segment friction with an accepted workaround.

Every `S0` must be resolved before production promotion. No unresolved `S1` may remain in a launch journey. `S2` and `S3` findings require owner, risk statement, revisit trigger, and Product Truth disposition.

## Evidence thresholds

Research does not use one universal numeric threshold for every surface because journeys differ in risk and complexity. A release candidate must still satisfy these minimum conditions:

1. All `S0` findings are resolved and revalidated.
2. No unresolved `S1` finding affects a primary launch journey.
3. Every primary journey has qualitative sessions with target segments, current `UserResearchSegmentScreener` links, and at least one instrumented end-to-end test.
4. Quantitative metrics declare denominator, segment, window, confidence limits, sampling limits, and known bias.
5. Accessibility and assistive-technology evidence exists for primary journeys.
6. Performance evidence includes both system budgets and user-perceived wait clarity.
7. Automation evidence measures accepted outcomes, rejected work, cost, latency, approval burden, safety blockers, failure diagnosis, recovery completion, side-effect reconciliation, and learning artifacts, not activity volume.
8. UserOpinionEvidenceItems, UserOpinionCodingAssignments, and UserOpinionSynthesisRecords exist for user-opinion themes that affect Product Truth, requirements, launch evidence, or customer-facing claims.
9. Native companion, browser extension, local-cache, or support-access claims have direct privacy-comprehension evidence where those surfaces ship.
10. Public launch claims are backed by runtime and user evidence, not public anecdotes, dogfood, or synthetic users alone.
11. Every unresolved `S2` or `S3` has an owner, risk, revisit trigger, and SignalDecisionLedger entry.

## Dogfood rule

Research's own team must use Research to maintain this documentation set, validate source import, patch canonical docs, operate automation debugging, and update Product Truth. Dogfood evidence records:

- who used the workflow and under which role;
- the Project and source classes used;
- failures, manual workarounds, and unsupported claims;
- automation outcomes and corrections;
- documentation patches accepted, edited, or rejected;
- Product Truth decisions produced from dogfood;
- linked `UserResearchSegmentScreener` records and segment limitations;
- where dogfood evidence is not representative of customer segments.

Dogfood can block launch when the team cannot succeed with its own feature. Dogfood cannot approve launch by itself.

## Documentation update rule

When experience validation changes product direction, update affected contracts in the same change:

- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`test-strategy-and-quality-gates.md`](test-strategy-and-quality-gates.md)
- [`testing-and-validation-strategy.md`](testing-and-validation-strategy.md)
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md)
- relevant product, architecture, AI, source, security, and build contracts

If the finding exposes a contradiction between documentation, implementation, analytics, user evidence, or public claims, Product Truth must record the contradiction before validation passes.
