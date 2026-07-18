# Telemetry and experience instrumentation matrix

**Review date:** 2026-07-18
**Status:** delivery instrumentation contract, not runtime behavior

Research needs evidence about performance, usability, user experience, automation value, trust, reviewability, recoverability, and advanced operating-layer differentiation. Telemetry can help answer those questions only when it is intentionally designed. An event stream that records everything creates privacy risk, trust loss, noisy metrics, and a second shadow authority.

This contract defines the product telemetry and experience instrumentation matrix that connects analytics events to screened segments, user-opinion coverage, user-opinion synthesis, outcome metrics, benchmark scenarios, privacy minimization, Product Truth decisions, and release claims.

## Source basis

Official, standards, research, and user-attitude references reviewed on 2026-07-18:

- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/) for standardized attributes across traces, metrics, logs, events, profiles, and resources.
- [OpenTelemetry semantic conventions for events](https://opentelemetry.io/docs/specs/semconv/general/events/) for event naming, timestamps, severity, attributes, and event body boundaries.
- [OpenTelemetry Signals](https://opentelemetry.io/docs/concepts/signals/) and [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/) for trace, metric, log, baggage, GenAI span, token, and tool telemetry boundaries, including the need to avoid raw prompt, completion, and tool content capture unless explicitly authorized.
- [LangSmith Observability](https://www.langchain.com/langsmith/observability), [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation), [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/), [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features), and [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity) for current observability, trajectory evaluation, RCA, AI-assisted fix, and agent-activity evidence patterns.
- [W3C Privacy Principles](https://www.w3.org/TR/privacy-principles/) for data minimization and privacy-by-design expectations.
- [Web.dev Web Vitals](https://web.dev/articles/vitals), [Web.dev Interaction to Next Paint](https://web.dev/articles/inp), and [W3C Long Animation Frames API](https://www.w3.org/TR/long-animation-frames/) for user-facing web responsiveness measurement.
- [Google HEART research](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/) for mapping goals to signals and metrics.
- [Nielsen Norman Group analytics and UX](https://www.nngroup.com/courses/analytics-and-user-experience/) for using analytics as quantitative behavioral evidence alongside user research.
- [Pew public and expert AI attitudes](https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/) and [Pew data privacy attitudes](https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/) for user concern around AI accuracy, data misuse, and responsible data handling.

These sources shape instrumentation policy. They do not prove Research runtime quality, user demand, usability, accessibility, automation value, or production readiness by themselves.

## Authority and relationship

This document governs the event-specification layer for:

- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md)

The Product Truth Board remains the decision authority. Telemetry can become a TruthSignal, benchmark input, OutcomeReview input, incident input, or release-evidence snapshot. It cannot create a second roadmap, user-research, evidence, publication, support, or automation authority.

## Event specification record

Every product analytics event, experience signal, and derived aggregate that can influence a requirement, Product Truth decision, benchmark, scorecard, experiment, release gate, or customer-facing claim creates or updates a `ProductTelemetryEventSpec`:

```text
id
event_name
status: draft | active | deprecated | blocked | retired
event_family
user_value_question
affected_requirements
owning_surface
owner_slice
governing_docs
source_basis
source_quality_refs
OutcomeMetricDefinition refs
StrategicBetScorecard refs
UserResearchSegmentScreener refs
UserOpinionCoverageRecord refs
UserOpinionSynthesisRecord refs
ExperienceBenchmarkScenario refs
AdvancedDifferentiationBenchmarkRecord refs
ExperienceValidationPlan refs
HumanAIInteractionReview refs
Product Truth links
collection_trigger
allowed_properties
prohibited_properties
privacy_classification
retention_class
sampling_policy
aggregation_policy
consent_or_policy_basis
access_policy
redaction_tests
quality_checks
release_evidence_refs
revisit_trigger
```

An event without an owner, user-value question, allowed-property list, prohibited-property list, privacy classification, retention class, and linked outcome or reliability purpose is not approved telemetry.

## Instrumentation principles

1. Instrument the user-value question, not every click.
2. Prefer event names, state classes, durations, counts, hashes, opaque IDs, and safe labels over content.
3. Raw source text, raw prompts, document bodies, citations, private comments, selected text, local draft bodies, private URLs, screenshots, clipboard contents, browser history, operating-system state, credentials, raw provider traces, hidden reasoning, and unredacted support notes are prohibited from general product analytics.
4. Session replay is disabled on source, document, chat, support, companion, local-cache, approval, and admin surfaces unless a separate diagnostic workflow obtains explicit authorization, minimization, masking, expiry, and customer-visible audit.
5. A telemetry event cannot prove user intent, trust, satisfaction, accessibility, or demand without observed user research, screened segment records, or stronger customer evidence.
6. A faster event is not a good event when source scope, partial/stale state, recovery, cancellation, authorization, or supportability gets worse.
7. Automation telemetry measures accepted outcomes, rejected work, edited work, reversals, quiet failures, AutomationFailureRecoveryRecords, safe-next-action completion, reconciliation outcomes, approval burden, cost, latency, and safety blockers. It does not treat run count or generated output volume as value.
8. Event schemas are versioned and migration-safe. Dashboard queries may not silently change denominators for OutcomeMetricDefinitions or StrategicBetScorecards.
9. Analytics samples, retention, and aggregation must preserve enough evidence for regression analysis without creating private-content stores.
10. Telemetry cannot bypass customer policy, opt-out, data residency, legal hold, deletion, or support-access controls.

## Instrumentation matrix

| Instrumentation ID | Surface or journey | Required event evidence | Prohibited telemetry | Claim blocked when missing |
|---|---|---|---|---|
| `TEL-001` | First Project, source import, cited answer, durable Markdown | Project created, upload started/completed/failed, SourceVersion stored, parse searchable, evidence retrieved, citation opened, unsupported claim blocked, document created/reopened, first shell/progress/useful/citation-ready/final timing. | Raw PDF text, raw extracted text, prompt bodies, document body, full citation text, private file names where policy requires redaction. | "Easy first use", "trustworthy cited answer", "durable document workflow", "fast first project". |
| `TEL-002` | Progressive delivery and performance perception | immediate shell state, first progress, Partial Result state, stale/degraded/blocked label shown, cancellation requested/acknowledged, reconnect, queue age, INP, LCP, Long Animation Frame class, wait-confidence survey link. | Full partial-result body, source excerpts, private run trace, hidden model reasoning, raw URL lists. | "Faster", "less waiting", "usable long-running work", "safe background progress". |
| `TEL-003` | Automation Registry, Recipes, dry-runs, Run Debugger, recovery loop, outcome scorecards | recipe draft created, dry-run viewed, activation scope confirmed, canary result, failure class, recovery severity, recovery state, side-effect state, safe-next-action class, reconciliation outcome, debugger opened, replay case created, fixture or learning artifact created, accepted/rejected/edited/reversed output, cost per accepted outcome, approval burden. | Tool payloads, connector secrets, raw private outputs, raw trace bodies, source text in logs, private URLs, support-only notes, document bodies. | "Automation saves time", "debuggable agents", "recoverable automation", "safe scheduled work", "outcome-scored automation". |
| `TEL-004` | Command Center, Work Packets, next-action control | command opened, command search/filter latency, disabled reason viewed, preflight shown, action invoked/cancelled, next action shown/opened/dismissed/corrected/invoked, stale packet shown, recovery path viewed. | Typed search terms when they contain private content, raw command payload, hidden ranking prompt, private selected text. | "Keyboard-first", "low-friction work control", "better operating layer", "explainable next actions". |
| `TEL-005` | Spatial Workbench, Worksets, Focus, Resume Digests | Workset switch/restore, pane hydration, stale/redacted pane shown, layout suggestion shown/accepted/dismissed/reversed, Resume Digest viewed, missed blocker correction, focus session start/end, caught-up checkpoint. | Pane contents, full digest body, hidden resource details, screen capture, operating-system window state. | "Reduces tab clutter", "better resume", "advanced workspace UX", "privacy-safe continuity". |
| `TEL-006` | Native Companion, browser extension, device continuity, offline/local cache | grant proposed/accepted/revoked, capture mode, active-tab or selected-context preview opened, no-ambient-capture block, local draft saved, offline queue inspected, reconnect preflight, sync conflict reviewed, storage eviction recovery. | Selected text, active-tab content, local file content, raw file paths where redaction required, browser history, clipboard, screenshot, OS window state, local draft body. | "No ambient capture", "trusted native integration", "offline tolerant", "mobile/device continuity". |
| `TEL-007` | Scenario Lab, Reversible Work, Project Health, causal diagnostics, support-safe repair | simulation started/completed/failed, unknowns inspected, stale plan rejected, apply candidate created/cancelled, recovery option shown, restore/replay/compensation result, health finding opened, causal lineage edge inspected, suspected cause confidence viewed, counterevidence viewed, unknown evidence state viewed, trace-to-finding conversion class, diagnostic-waste class, false-cause outcome, repeated-finding class, repair dry-run/run/outcome, support bundle generated/revoked. | Private document body, source text, prompt body, completion body, raw tool payload, raw connector payload, unredacted support notes, raw diagnostic trace, hidden dependent content, screenshots, clipboard, browser history, operating-system state, raw OpenTelemetry span body, raw GenAI trace content outside authorized diagnostics. | "Safe what-if workflows", "reversible work", "repairable Project health", "AI root cause", "self-healing Projects", "debuggable agents", "supportable recovery". |
| `TEL-008` | Product Truth, contradiction radar, feedback, discovery, experiments | feedback submitted, source-quality class, theme linked, contradiction opened/resolved, non-action viewed, SignalDecisionLedger decision, experiment assignment/result, docs-updated link, unresolved severity. | Raw public thread scrape beyond policy excerpts, private customer verbatims without consent, raw support transcript, private comments. | "Learns from users", "keeps docs consistent", "prevents roadmap drift", "closed-loop discovery". |
| `TEL-009` | Accessibility, internationalization, mobile, public/private publishing | keyboard journey completed, screen-reader-critical status, focus return, live-region result, reduced-motion path, target-size issue class, language/direction metadata, locale fixture result, accessible export manifest, mobile viewport journey. | Disability status, assistive-technology identity, raw personal content, document body, private output, private URL. | "Accessible", "mobile-ready", "global-ready", "accessible exports". |
| `TEL-010` | API, SDK, MCP, Project Action Surface, agent-as-user, developer automation | API operation status, error code class, idempotency key outcome, SSE reconnect, webhook delivery, SDK command preflight, action descriptor projection, compact tool metadata size class, schema lazy-load event, MCP capability inspection, permission denial, disabled-reason recovery path, projection parity fixture, agent-as-user compatibility fixture. | API request bodies containing private source text, credentials, tokens, private URLs, raw webhook payloads beyond approved diagnostics, raw tool payloads, selected text, document bodies, or connector secrets. | "Agent-ready platform", "developer-friendly automation", "safe MCP/API control", "agent-ready actions", "safe app actions". |
| `TEL-011` | Admin, billing, support access, trust safety | policy viewed/changed, usage threshold, budget alert, support access requested/narrowed/denied/revoked, audit export, abuse decision, appeal, false-positive result, break-glass review. | Billing identifiers beyond safe reference classes, unredacted support notes, raw customer content, private investigation details, credentials. | "Enterprise-ready", "admin-safe", "supportable", "auditable trust controls". |
| `TEL-012` | Synthetic-user and AI-assisted research workflow | synthetic artifact created, planning-only label shown, real-user gap linked, researcher accepted/rejected AI analysis, overtrust warning shown, source-quality audit, Product Truth non-action link. | Synthetic output stored as real-user evidence, private notes sent to unapproved providers, unlabeled generated summaries, raw study recordings. | "Always-on user research", "synthetic users validate demand", "AI-generated feedback proves direction". |

## Event approval gates

A `ProductTelemetryEventSpec` is approved only when:

- the event answers a named user-value, reliability, safety, or operational question;
- it links to affected requirements and governing docs;
- allowed properties are explicit and machine-checkable;
- prohibited properties are explicit and covered by tests or static review where possible;
- privacy classification, retention, sampling, aggregation, and access policies are declared;
- the event does not duplicate an ActivityEvent, Product Truth record, support record, release-evidence record, or model-evaluation dataset;
- dashboard denominators match OutcomeMetricDefinitions;
- comparator-backed denominators match current AdvancedDifferentiationBenchmarkRecords when telemetry is interpreted as an advanced or better-than outcome;
- telemetry-backed segment claims link to current `UserResearchSegmentScreener` records when the metric is interpreted as user opinion, adoption, trust, satisfaction, usability, accessibility, or automation value for a named audience;
- telemetry-backed user-opinion conclusions link to reviewed UserOpinionSynthesisRecords when a metric is interpreted as evidence for a theme, claim, Product Truth decision, or outcome improvement;
- event schema tests include representative redaction and blocked-content fixtures;
- automation failure events link to current AutomationFailureRecoveryRecords when the metric is interpreted as failure recovery, quiet-wrong outcome handling, side-effect reconciliation, or automation recoverability;
- release evidence identifies which claims the event can and cannot support.

Telemetry can support a launch claim only when it agrees with relevant user research, current `UserResearchSegmentScreener` records, reviewed UserOpinionSynthesisRecords where opinion-backed themes are involved, benchmark runs, AdvancedDifferentiationBenchmarkRecords where comparative or advanced claims exist, outcome reviews, human-AI interaction reviews, accessibility evidence, security/privacy review, Product Truth decisions, and implementation status.
Any telemetry-backed customer-facing wording also needs a CustomerClaimEvidenceRecord whose allowed language matches the measured scope, denominator, sampling policy, and excluded cases.

## Contradiction handling

Instrumentation creates contradictions when:

- a customer-facing claim relies on an event with missing denominator, stale schema, unapproved properties, or unclear sampling;
- a segment-level conclusion relies on telemetry without a current `UserResearchSegmentScreener` that states the audience, excluded groups, denominator, sampling, representativeness, and bias limits;
- a user-opinion conclusion relies on telemetry without a reviewed synthesis record that states codebook version, negative evidence, contradiction state, AI-assist role, and blocked claims;
- an analytics improvement conflicts with observed user research, accessibility evidence, support evidence, or benchmark results;
- a performance metric improves while trust, unsupported-claim, cancellation, recovery, approval-load, or quiet-failure guardrails regress;
- an automation scorecard counts activity volume instead of accepted outcomes;
- a session-replay or diagnostic capture pathway collects data prohibited by this contract;
- an event schema duplicates or bypasses canonical Activity, Product Truth, release-evidence, support, or audit records.

Every contradiction links to Product Truth or, before runtime Product Truth exists, to [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md) and [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md).

## Documentation update rule

Changes to event families, ProductTelemetryEventSpecs, prohibited telemetry, instrumentation IDs, release-claim support, dashboard denominators, or telemetry launch gates must update:

- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`performance-capacity-and-load-engineering.md`](performance-capacity-and-load-engineering.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
