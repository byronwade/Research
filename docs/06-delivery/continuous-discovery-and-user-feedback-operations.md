# Continuous discovery and user-feedback operations

**Review date:** 2026-07-18
**Status:** planning evidence, not customer-facing claims

Research must improve from real user evidence without letting feedback become an unmanaged shadow roadmap. User feedback is a governed signal stream: it can influence requirements, experiments, documentation, support priorities, and automation behavior only when its source, consent, scope, confidence, and downstream changes are recorded.

The Product Truth Board and Contradiction Radar are the governed product-control surface for this loop. They are specified in [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md) and [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md), and they own `TRUTH-001` through `TRUTH-003`.

User research plans, observed-task studies, dogfood limits, perceived-usability measures, accessibility participant coverage, automation-outcome validation, performance-perception evidence, and experience evidence packages are governed by [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md). Participant screening, target and excluded segments, job-to-be-done, agency preference, AI trust posture, automation maturity, sampling, denominator, representativeness, and bias are governed by [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md). Surface-level coverage for those studies is governed by [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) so every major Research surface has target segments, required methods, blocked claims, and synthetic-user boundaries. Coding, codebook versioning, AI-assisted analysis review, negative-evidence review, contradiction handling, and promotion thresholds for raw opinions are governed by [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md). Discovery signals can trigger those studies, but study results must still flow back through Product Truth.
Recurring official-source and public-signal refresh for competitor, OS, workspace-agent, automation, and advanced operating-layer evidence is governed by [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md).
Advanced-feature prototype, dogfood, beta, adoption, deferral, kill, and non-action decisions are governed by [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md).
Source-quality classification, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence are governed by [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md).
Exact customer-facing claim language, allowed wording, blocked wording, evidence floors, testimonial limits, and release-scope exclusions are governed by [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md).
Until runtime Product Truth exists, current external and public-signal decisions are preserved in [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md).
North-star outcome metrics, StrategicBetScorecards, baselines, anti-metrics, and OutcomeReviews are governed by [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md).

## Sources reviewed

Official product references:

- [Linear Customer Requests](https://linear.app/customer-requests)
- [PostHog feature flags](https://posthog.com/docs/feature-flags)
- [PostHog surveys](https://posthog.com/surveys)
- [Pendo AI-assisted feedback integrations](https://support.pendo.io/hc/en-us/articles/44030459419675-Use-AI-assisted-integrations-to-collect-product-feedback)
- [Pendo feedback insights](https://support.pendo.io/hc/en-us/articles/18906566175131-View-feedback-insights)
- [Dovetail customer intelligence platform](https://dovetail.com/)
- [Intercom AI insights](https://www.intercom.com/help/en/articles/10576273-measure-customer-service-with-ai-insights-built-for-the-ai-agent-era)

Public user-opinion signals:

- [Product-management feedback tooling discussion](https://www.reddit.com/r/ProductManagement/comments/1eks2qe/hey_pms_what_is_your_go_to_tool_for_gathering_and/)
- [Dovetail alternatives discussion](https://www.reddit.com/r/UXResearch/comments/1amzfdh/alternatives_to_dovetail/)
- [Pendo product analytics discussion](https://www.reddit.com/r/ProductManagement/comments/15y9qtx/pendo_product_analytics_and_engagement/)
- [Product analytics cost and setup discussion](https://www.reddit.com/r/ProductManagement/comments/1pb6s9b/looking_for_advice_product_analytics/)

## Market baseline

Current product-feedback systems converge on five useful capabilities:

1. intake from customer-facing channels such as support, sales, CRM, email, Slack, calls, surveys, and in-product prompts;
2. request or theme objects linked to customer, account, revenue, segment, product area, and delivery work;
3. AI-assisted summarization, topic clustering, product-area classification, and trend detection;
4. safe rollout primitives such as feature flags, staged launches, beta programs, remote configuration, and kill switches;
5. dashboards that connect qualitative feedback, user behavior, support volume, and delivery status.

Research should adopt the operating lesson, not a new authority model. Feedback can propose changes, but the canonical authorities remain Projects, Sources, Claims, Documents, Memory, Research Runs, publications, requirements, and release evidence.

## Signal sources

Feedback can enter Research from:

- in-product ratings, labels, comments, and correction actions;
- answer, citation, source-parse, document-patch, artifact, publication, and research-run feedback;
- support conversations and incident follow-ups;
- customer interviews, sales notes, community posts, and advisory sessions;
- onboarding drop-off, failed imports, accessibility blockers, and performance complaints;
- context-switching friction, tab overload, lost Project layout, Workset restore failures, pane hydration delays, stale or redacted pane confusion, and layout suggestion reversals;
- accepted, rejected, or manually edited AI patches;
- automation pauses, failures, escalations, replays, and cost overruns;
- automation outcome scorecards, adaptive-routing recommendations, accepted outputs, rejected work, and user corrections;
- approval fatigue reports, repeated approval loops, approval batch confusion, delegated-trust grant acceptance, grant narrowing, grant revocation, stale receipt recovery, and hard-stop objections;
- API errors, SDK integration friction, webhooks, and developer-support cases.

Each source family has a policy record covering source-quality class, consent, retention, redaction, authorized viewers, allowed aggregation, allowed excerpt, confidence, representativeness, bias, and whether it can be used for evaluation, experimentation, requirement changes, launch evidence, or customer-facing claims.

## Evidence chain

Research models discovery evidence as a typed chain:

```text
FeedbackItem
-> SourceQualityRecord
-> UserResearchSegmentScreener
-> UserOpinionEvidenceItem
-> UserOpinionCodingAssignment
-> UserOpinionSynthesisRecord
-> TruthSignal
-> DiscoverySignal
-> Theme
-> Opportunity
-> SignalDecisionLedgerEntry
-> Requirement, TruthDecision, or NonActionDecision
-> Experiment, implementation slice, or documentation patch
-> Release evidence and follow-up result
```

The chain prevents a loud anecdote from masquerading as validated demand. A `FeedbackItem` preserves the original event metadata and allowed excerpt. A `SourceQualityRecord` classifies source type, confidence, representativeness, bias, freshness, and allowed decisions before the signal is promoted. A `UserResearchSegmentScreener` records the target segment, excluded segments, job-to-be-done, agency preference, AI trust posture, automation maturity, sampling source, denominator, representativeness, bias, supported claims, and blocked claims before a user-opinion signal is treated as stronger than anecdote. A `UserOpinionEvidenceItem` preserves the codable unit, locator, allowed excerpt, method context, segment, surface, and privacy policy. A `UserOpinionCodingAssignment` records the codebook version, code, polarity, severity, confidence, coder type, AI-assist role, uncertainty, raw locators, and contradicting evidence. A `UserOpinionSynthesisRecord` aggregates reviewed codes into a theme, opportunity, Product Truth signal, non-action decision, launch blocker, or claim candidate with negative evidence and blocked claims visible. A `TruthSignal` gives every internal, public, official, runtime, and implementation signal one provenance-bearing record before it affects product truth. A `DiscoverySignal` normalizes the issue without exposing raw private content. A `Theme` aggregates repeated signals. An `Opportunity` states the user problem, affected personas, evidence strength, product area, and non-goals. A `SignalDecisionLedgerEntry` records whether Research will act, defer, research more, accept bounded risk, supersede, or explicitly not act. Requirements, slices, documentation patches, experiments, and non-action decisions are changed only by explicit review.

## Decision ledger policy

Every discovery-driven change must answer the same questions before it moves into canonical documentation or implementation:

| Question | Required answer |
|---|---|
| What moved? | Linked feedback, public user-opinion, official reference, runtime evidence, experiment, support-safe diagnostic, implementation evidence, strategic decision, and source-quality record. |
| Why does it matter? | User problem, affected segment, linked `UserResearchSegmentScreener`, severity, frequency or confidence, bias assessment, and objective dimension. |
| What changes? | Requirement, product contract, architecture contract, test gate, experiment, implementation issue, support/runbook action, or launch evidence. |
| What does not change? | Non-goals, rejected alternatives, unsafe shortcuts, or explicit non-action decision. |
| What proves closure? | Validation command, experiment result, release evidence, runtime metric, support follow-up, or documentation validation. |
| When is it revisited? | Date, source freshness rule, volume threshold, customer segment trigger, contradiction trigger, or implementation milestone. |

Advanced feature proposals must include at least one objective dimension: performance, usability, user experience, automation leverage, trust, reviewability, recoverability, maintainability, commercial viability, or security. Public discussion signals can justify investigation and planning controls, but they remain directional until supported by stronger product, customer, runtime, or official evidence.

## Signal confidence

Feedback-derived conclusions use explicit confidence states:

| State | Meaning |
|---|---|
| `anecdote` | One or a small number of reports that may reveal a real problem but are not trend evidence. |
| `repeated-signal` | Multiple independent reports or behavior signals point to the same problem. |
| `validated-theme` | Qualitative and quantitative evidence support the theme for a named user segment. |
| `strategic-bet` | Leadership accepts an evidence-informed direction despite incomplete validation. |
| `contradicted` | New evidence conflicts with the theme or requirement and requires review. |
| `stale` | The underlying feedback or product state is too old to guide current decisions without refresh. |

Customer-facing claims must not cite these states as market proof. They are internal product-planning controls.

## Closed-loop workflow

1. Capture feedback with minimization and source policy.
2. Normalize it into discovery signals without copying private content into general analytics.
3. Link signals to affected product surfaces, requirements, slices, documents, launch gates, and truth-board records.
4. Aggregate signals into themes only when the evidence and segment are explicit.
5. Promote coded evidence into a `UserOpinionSynthesisRecord` only after codebook version, negative evidence, AI-assisted analysis role, contradiction state, owner, and blocked claims are explicit.
6. Decide whether the response is a documentation correction, support article, UX change, automation rule, bug, experiment, or product requirement.
7. Record the accepted action, non-action decision, contradiction, and owner.
8. Attach release evidence when the change ships.
9. Measure whether the change improved the original outcome.
10. Close the loop with users or customer-facing teams when policy allows.

If feedback changes product direction, update the governing contract before implementation work proceeds.

## Metrics

Discovery metrics focus on product truth and user outcomes:

- time to first cited answer;
- source import completion and failure recovery;
- citation correction rate;
- unsupported-claim and stale-claim rates;
- document patch acceptance, rejection, and manual-edit reasons;
- research-run completion, cancellation, and replay rates;
- automation failure, escalation, and recovery rates;
- automation accepted-outcome, rejected-output, approval-burden, adaptive-routing, and cost-per-accepted-outcome rates;
- approval request rate, batch acceptance, delegated-trust grant use, approval-load threshold crossings, fatigue warnings, stale receipt rejections, revocations, reversals, and hard-stop bypass attempts;
- cost-surprise and quota-friction events;
- onboarding activation and return-to-project rates;
- Resume Digest correctness, missed-blocker, over-prioritization, stale-digest, and Focus Session interruption rates;
- Workset switch completion, Workset restore correctness, pane hydration latency, stale or redacted pane recovery, evidence-split use, layout suggestion acceptance, layout suggestion dismissal, and layout reversal rates;
- accessibility blockers and keyboard-only completion;
- support issues by product area and severity;
- user-reported trust, confidence, and usefulness labels.

Raw source text, prompt bodies, document bodies, private URLs, credentials, full citations, and private support transcripts must not be stored in general analytics.

## Experimentation and rollout

Feedback can drive experiments only when the experiment has:

- a hypothesis tied to a theme or requirement;
- eligible population and exclusion rules;
- success, guardrail, and rollback metrics;
- privacy and accessibility review;
- feature-flag owner, default, kill switch, and expiry;
- support visibility for affected users;
- a post-experiment decision recorded in requirements, docs, or release evidence.

Experiments cannot silently weaken authorization, evidence requirements, deletion behavior, billing, provider policy, publication rules, or support access.

## Product truth board

Research differentiates with a **living product truth board**:

- feedback themes linked to exact product surfaces, requirements, documents, and release evidence;
- open contradictions between user signals, official references, product docs, and implementation status;
- customer-request impact weighted by segment, revenue, trust risk, accessibility impact, and frequency;
- one-click generation of a reviewed requirement patch, documentation patch, or experiment proposal;
- automation that detects when shipped changes did not improve the original user outcome.

This is not a generic roadmap board. It is an evidence-maintained product-control surface for keeping Research's own documentation and implementation honest.

Contradiction Radar promotes mismatches into reviewable records instead of letting them hide in chat, planning notes, stale docs, public copy, or partial implementation status. A feedback-driven feature can be rejected, deferred, or accepted as a strategic bet, but the reason and revisit trigger must remain visible.

## Launch gates

Before production launch, Research must prove:

- feedback capture uses allowlisted fields and minimization;
- feedback records preserve source, consent, retention, and viewer policy;
- raw private content is excluded from general analytics and support tooling;
- discovery themes link to requirements, slices, or explicit non-action decisions;
- truth-board records link feedback, official references, public user-opinion signals, source-quality records, requirements, documents, slices, experiments, runtime evidence, release evidence, and non-action decisions;
- SignalDecisionLedger entries exist for accepted, rejected, deferred, research-more, accepted-risk, contradicted, stale, and superseded signals that affect scope;
- SpecificationSignalDecisionRecords cover material signal decisions until runtime SignalDecisionLedger entries replace them;
- UserResearchSegmentScreeners exist for every user-opinion, interview, survey, dogfood, beta, support, benchmark-participant, or public-signal synthesis that affects scope, including target segments, excluded segments, sampling source, denominator, representativeness, known bias, supported claims, and blocked claims;
- UserOpinionEvidenceItems, UserOpinionCodingAssignments, and UserOpinionSynthesisRecords exist for every user-opinion theme, Product Truth signal, non-action decision, launch blocker, or claim candidate that affects scope, including codebook version, AI-assist disclosure, negative-evidence review, contradiction state, owner, expiry, and blocked claims;
- advanced-feature ledger entries name their objective dimension, affected requirements or non-action rationale, validation expectation, owner, and revisit trigger;
- strategic-bet scorecards name baseline, expected outcome delta, guardrails, anti-metrics, validation evidence, owner, and revisit trigger before discovery-driven advanced features claim user-value improvement;
- external-signal watch items are current for accepted competitor, OS, workspace-agent, automation, model, browser, public user-opinion, and advanced operating-layer claims;
- blocker or high-severity contradictions are resolved, accepted as bounded risk, or explicitly deferred before release promotion;
- feature flags have owners, kill switches, review dates, and cleanup paths;
- experiments record assignment, metrics, guardrails, and final decisions;
- user-research and experience evidence packages exist for affected primary journeys, with participant segments, task outcomes, qualitative findings, telemetry windows, unresolved severity, dogfood limits, and SignalDecisionLedger links;
- UserOpinionCoverageRecords or runtime Product Truth equivalents exist for affected surfaces, with blocked claims and missing-coverage state visible before release promotion;
- user-visible feedback flows work for answer, citation, document patch, source parse, Workset restore, pane layout, layout suggestion, approval fatigue, delegated-trust grant behavior, and automation failures;
- support and product teams can close the loop without exposing private Project content;
- requirement and documentation changes triggered by feedback pass `pnpm docs:check`.

## Documentation update rule

When discovery evidence changes product direction, update all affected documents in the same change:

- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- relevant product, architecture, AI, source, security, and build contracts

If a feedback-driven change creates a contradiction, the contradiction must be resolved before validation passes.
