# Product outcome metrics and strategic bet scorecard

**Review date:** 2026-07-18
**Status:** delivery control and Product Truth measurement contract, not runtime behavior

Research is aiming for faster, more usable, more trustworthy, and more automated Project work. Those words are not self-proving. This contract defines the outcome metrics and strategic-bet scorecards that decide whether an advanced feature is improving real work or only adding novelty, activity volume, model usage, or interface complexity.

The control is intentionally cross-cutting: it ties public user-opinion evidence, screened segment records, official research, analytics, user studies, benchmarks, automation scorecards, human-AI interaction reviews, advanced-feature incubation, and release evidence into one outcome framework.

## Source basis

Official and research references reviewed on 2026-07-18:

- [Google HEART research](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/) for mapping product goals to user-centered signals and metrics.
- [Nielsen Norman Group response-time guidance](https://www.nngroup.com/articles/website-response-times/) for perceived speed, flow, attention, and control thresholds.
- [Web.dev Core Web Vitals](https://web.dev/articles/vitals) and [Interaction to Next Paint](https://web.dev/articles/inp) for browser-level page and interaction responsiveness measures.
- [DORA 2025 AI-assisted software development report](https://dora.dev/research/2025/dora-report/) and [Google Cloud's DORA 2025 summary](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) for the finding that AI value depends on user-centricity, platform quality, fast feedback loops, and delivery stability controls.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai) for the widening gap between AI-tool usage and trust in AI accuracy.
- [Pew Research Center 2026 summary of AI attitudes](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/) and [Pew worker AI attitudes](https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/) for public concern, control needs, uneven workplace usage, and mixed confidence in AI output.
- [Nielsen Norman Group generative-AI UX research agenda](https://www.nngroup.com/articles/genai-ux-research-agenda/) for trust, overreliance, transparency, explainability, evolving interfaces, and agent-based UX research questions.
- [Nielsen Norman Group AI trust guidance](https://www.nngroup.com/articles/smarts-emotion-trust-ai/) for prioritizing competent task support over simulated personality in factual and work-oriented AI experiences.

Public and survey signals are directional unless validated through Research runtime evidence, observed tasks, customer evidence, or release benchmarks. They can shape metrics and guardrails, but they cannot become customer-facing market claims by themselves.

## Authority and relationship

This document governs the outcome layer for:

- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)

The Product Truth Board remains the decision authority. Outcome metrics inform TruthDecisions and NonActionDecisions, but they do not create a second roadmap, document authority, analytics authority, automation authority, or evidence authority.

## Product north star

Research's north-star outcome is:

```text
target users produce, verify, maintain, and safely automate evidence-backed Project work faster and with less review burden than ordinary chat, generic operating-system recall, generic browser agents, or generic automation tools.
```

Every advanced feature, automation surface, performance mode, user-experience change, or strategic bet must show which part of this north star it improves.

## Outcome dimensions

Each material surface has outcome metrics across these dimensions:

| Dimension | Measures |
|---|---|
| Trust | supported-claim rate, unsupported-claim block rate, citation correction rate, source coverage, contradiction resolution, Product Truth freshness, public/private projection correctness |
| Performance | first shell, first progress, first useful state, citation-ready state, final useful state, cancellation acknowledgement, reconnect, INP, LCP, queue age, p95 and p99 latency by mode |
| Usability | observed task success, setup steps, mode-selection comprehension, error recovery, correction rate, dismissal rate, support escalation, accessible journey completion |
| User experience | perceived wait clarity, confidence in partial/final/stale labels, control over scope and permissions, focus continuity, Workset restore usefulness, frustration and interruption signals |
| Automation value | accepted outputs, edited outputs, rejected outputs, ignored outputs, reversed outputs, cost per accepted outcome, approvals per accepted outcome, quiet-failure rate, recovery severity, safe-next-action completion, replay and fixture usefulness |
| Reviewability | source decision visibility, run debugger usefulness, dry-run comprehension, impact report correctness, scenario unknowns understood, reviewer time to decision |
| Recoverability | stale-plan rejection, undo/restore/replay/withdrawal correctness, compensation accuracy, reconciliation success, AutomationFailureRecoveryRecord resolution, quiet-wrong outcome detection, irreversible-effect comprehension |
| Advanced differentiation | evidence-native Work Packet usefulness, no-ambient-capture comprehension, Project Atlas impact accuracy, delegated-trust fatigue reduction without risk expansion |

No dimension can be replaced by generic activity metrics. Run count, model-call count, token volume, generated-word count, notification count, number of available actions, or "AI used" adoption is insufficient without a useful accepted outcome.

## Outcome records

Every measured product area creates or updates an `OutcomeMetricDefinition`:

```text
id
name
dimension
affected_requirements
governing_docs
source_basis
source_quality_records
user_research_segment_screener_refs
advanced_differentiation_benchmark_refs
owner_slice
metric_formula
denominator
good_event_definition
bad_event_definition
baseline
target
guardrail_metrics
segmentation
privacy_classification
collection_method
validation_method
release_evidence_refs
revisit_trigger
```

Every advanced or cross-cutting bet creates or updates a `StrategicBetScorecard`:

```text
id
name
status: draft | active | dogfood | beta | adopted | deferred | killed | non-action | stale | contradicted
objective_dimensions
user_problem
non_action_alternative
affected_requirements
governing_docs
source_basis
public_signal_confidence
official_reference_freshness
frontier_signal_review_refs
user_research_segment_screener_refs
baseline
expected_outcome_delta
guardrails
leading_indicators
lagging_indicators
benchmark_scenarios
advanced_differentiation_benchmark_refs
user_research_refs
human_ai_review_refs
advanced_incubation_refs
automation_scorecard_refs
Product Truth decision
release_evidence_refs
owner
revisit_trigger
```

Every launch, dogfood, beta, or post-launch review creates an `OutcomeReview`:

```text
id
reviewed_at
scope
commit_or_release_candidate
metric_definitions
scorecards
observed_results
user_research_findings
benchmark_runs
analytics_window
support_signals
accessibility_i18n_findings
privacy_security_findings
contradictions
decision: proceed | narrow | revise | defer | kill | non-action | block
decision_rationale
docs_updated
remaining_limitations
next_review
```

## Baseline policy

No metric is meaningful without a declared baseline. Acceptable baselines include:

- current manual workflow time and error rate;
- current Research runtime behavior at an earlier commit;
- first-run benchmark without the feature enabled;
- controlled dogfood cohort versus unexposed cohort;
- synthetic fixture baseline when runtime or customer data is not yet available;
- official product or competitor baseline only when the source-quality record says it is current and comparable.

Claims such as "saves time," "reduces review," "improves trust," "better UX," "faster automation," "advanced OS-level workflow," or "better than OS/browser/agent tools" are blocked unless the baseline, measurement method, comparator class, and evidence date are named.

## Strategic bet gates

Strategic bets move through stage gates. Passing one stage does not imply release readiness.

| Stage | Required outcome evidence |
|---|---|
| Opportunity | Source-quality-labeled signal, user problem, objective dimensions, non-action alternative, owner, and revisit trigger. |
| Prototype | StrategicBetScorecard, baseline, expected outcome delta, guardrails, kill criteria, and affected docs. |
| Dogfood | OutcomeMetricDefinitions, observed task evidence, support-safe feedback capture, human-AI review where applicable, and benchmark mapping. |
| Beta | user-research evidence package, benchmark runs, accessibility and i18n coverage where applicable, automation scorecard links, unresolved finding disposition, and Product Truth decision. |
| Release | release-candidate OutcomeReview, no blocker contradiction, current source watch items, AdvancedDifferentiationBenchmarkRecord where a comparative claim exists, launch evidence bundle, support/runbook readiness, and customer-claim limits. |
| Post-launch | observed metrics versus expected delta, support signals, corrections, reversals, cost, latency, user trust, accessibility issues, and decision to continue, revise, narrow, or retire. |

An advanced feature with weak outcome evidence can still be a strategic bet, but that state must be explicit. It cannot be promoted as validated, generally available, or superior to operating-system or competitor behavior.

## Required scorecards for accepted differentiators

The first production path does not ship all advanced features, but the scorecard framework is required before those features expand:

| Differentiator | Required scorecard questions |
|---|---|
| Evidence-native Work Packets | Do users resume faster, miss fewer blockers, and correct fewer next actions without ambient capture? |
| Spatial Workbench and Worksets | Do Worksets reduce setup time and tab/workspace clutter without stale, redacted, or inaccessible layout failure? |
| Project Atlas and Impact Reports | Do users find downstream affected claims, documents, automations, and publication blockers faster than search alone? |
| Scenario Lab and Reversible Work | Do users understand side effects, unknowns, stale plans, recovery choices, and irreversible effects before mutation? |
| Automation Registry, Run Debugger, and failure recovery | Do users diagnose failures, choose safe next actions, reconcile uncertain side effects, create replay fixtures, and accept useful automation outcomes with lower support burden? |
| Outcome-scored Automation | Are accepted outputs, cost, latency, approval burden, and safety blockers improving compared with the baseline? |
| Delegated Trust and Approval Load | Are prompts reduced only where risk stays bounded, revocation works, stale receipts fail closed, and reversals do not rise? |
| No-ambient-capture Native Companion | Do users understand what is and is not captured, and do tests prove no hidden OS/browser/private-content collection? |
| Product Truth Board | Do signals resolve into decisions, non-actions, documentation patches, or contradictions faster and with less drift? |

If a scorecard cannot answer these questions, the feature stays in research-more, prototype, dogfood, or non-action state.

## Anti-metrics

These measurements are explicitly rejected as success definitions:

- number of automations created;
- number of actions available in the command center;
- number of generated pages, words, diagrams, or artifacts;
- token spend, model-call count, or agent count;
- scheduled-run completion without accepted outcome evidence;
- reduced approvals without reversal, revocation, stale-receipt, and hard-stop evidence;
- lower latency that increases unsupported claims or hidden failures;
- higher AI usage despite lower trust or more corrections;
- more captured context when the capture is ambient, unclear, or not Project-native;
- broad public user-opinion popularity without source-quality, representativeness, bias, and validation review.

## Documentation and contradiction policy

Outcome evidence can force documentation changes in either direction:

- strengthen a requirement when evidence repeatedly supports the user problem;
- narrow a requirement when a feature only works for a limited segment or environment;
- defer a feature when dependencies, trust, accessibility, or performance evidence is weak;
- create a NonActionDecision when an advanced idea is attractive but violates Project authority, privacy, recovery, or user control;
- create a contradiction when product copy, requirements, implementation status, benchmark evidence, user research, or release claims disagree.

A change to a StrategicBetScorecard that changes product direction must update affected product docs, architecture docs, delivery gates, metadata, launch evidence, and Product Truth links in the same change.

## Launch gates

Before launch or customer-facing claims:

- every affected strategic bet has a current StrategicBetScorecard or explicit NonActionDecision;
- every launch-critical metric has an OutcomeMetricDefinition with baseline, denominator, target, guardrail, and privacy classification;
- every telemetry-backed metric has approved ProductTelemetryEventSpecs with allowed properties, prohibited properties, retention, sampling, aggregation, redaction tests, and release-claim limits;
- every automation-recoverability metric that depends on failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain runs links to current AutomationFailureRecoveryRecords and unresolved severity disposition;
- every user-opinion, survey, dogfood, beta, support, public-signal, or benchmark-participant input behind an outcome claim links to current `UserResearchSegmentScreener` records with target segment, excluded segment, denominator, sampling, representativeness, and bias limits;
- every user-opinion theme behind an outcome claim links to a reviewed UserOpinionSynthesisRecord with codebook version, coding assignments, negative-evidence review, contradiction state, AI-assist disclosure where applicable, owner, expiry, and blocked claims;
- every advanced feature claim links to an OutcomeReview at the release commit;
- every frontier-driven strategic bet, advanced feature claim, benchmark comparator change, or outcome claim links to a current FrontierSignalReview or runtime Product Truth equivalent;
- every comparative or advanced-differentiation claim links to a current `AdvancedDifferentiationBenchmarkRecord` with comparator source, same-task baseline, anti-metrics, measured scope, and Product Truth decision;
- every stronger-than-specification customer-facing outcome claim has a CustomerClaimEvidenceRecord whose allowed language names the measured baseline, denominator, segment, release scope, and excluded cases;
- user-opinion and survey signals are labeled as directional unless supported by runtime, user-research, or customer evidence;
- performance gains do not hide trust, accessibility, recovery, approval-load, privacy, or support regressions;
- automation gains distinguish accepted value from run volume and generated output;
- no unresolved `S0` or launch-impacting `S1` contradiction exists across outcome evidence, Product Truth, implementation status, and customer-facing claims.

## Documentation update rule

Changes to outcome dimensions, north-star metric policy, StrategicBetScorecards, OutcomeMetricDefinitions, OutcomeReviews, anti-metrics, baselines, or launch gates must update:

- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
