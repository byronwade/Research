# Customer-facing claim and evidence boundary matrix

**Review date:** 2026-07-18
**Status:** delivery claim-control matrix, not runtime behavior

Research has many planned advantages: grounded answers, durable Markdown, progressive work, automation, Worksets, Project Truth, native companion capture, Scenario Lab, Reversible Work, Project Health, accessibility, API, SDK, MCP, and enterprise controls. Each advantage can be described in specification docs before runtime exists, but it cannot become a customer-facing claim until the exact evidence boundary is visible.

This matrix answers one release question:

```text
What may Research say externally about a product capability, and what evidence must exist before that wording is stronger than specification, preview, beta, or limited-scope language?
```

The matrix does not create a second marketing authority, legal authority, Product Truth store, analytics system, user-research repository, or release-evidence store. It is a claim-control projection over [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md), [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md), [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md), [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md), [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md), [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md), [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md), [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md), [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md), [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md), [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md), [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md), [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md), and Product Truth.

Once runtime Product Truth and release evidence exist, each row becomes a `CustomerClaimEvidenceRecord`, Product Truth claim link, ReleaseEvidenceBundle claim snapshot, or explicit NonActionDecision.

## Source basis

Advertising, AI-claim, review, and product-availability references reviewed on 2026-07-18:

- [FTC Policy Statement Regarding Advertising Substantiation](https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation) for the rule that objective express and implied claims need a reasonable basis before dissemination.
- [Federal Register policy statement concerning AI accuracy](https://www.federalregister.gov/documents/2026/07/07/2026-13628/policy-statement-concerning-the-suppression-of-accuracy-in-artificial-intelligence-systems) and the related [FTC announcement](https://www.ftc.gov/news-events/news/press-releases/2026/07/ftc-seeks-public-comment-policy-statement-addressing-ai-accuracy) for current FTC framing that AI products are not exempt from ordinary unfair or deceptive practice rules and that AI effectiveness, suitability, performance, and output-objective claims can be material.
- [FTC Workado AI detection order announcement](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-order-requires-workado-back-artificial-intelligence-detection-claims) for the requirement that AI accuracy and efficacy claims match competent and reliable evidence for the represented use case.
- [FTC AI privacy and confidentiality commitments guidance](https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2024/01/ai-companies-uphold-your-privacy-confidentiality-commitments) for treating promotional, contractual, marketplace, omission, data-use, and confidentiality statements as enforceable product commitments.
- [FTC Consumer Reviews and Testimonials Rule guidance](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers), [FTC final rule announcement](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials), and [FTC endorsement guidance](https://www.ftc.gov/news-events/topics/truth-advertising/advertisement-endorsements) for honest, non-misleading endorsement, testimonial, review, disclosure, and AI-generated review boundaries.
- [BBB National Programs National Advertising Division Apple Intelligence decision summary](https://bbbprograms.org/media/newsroom/decisions/apple-intelligence) for current advertising self-regulatory scrutiny of AI feature availability and clear-disclosure claims.
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for browser-choice, AI-interface routing, migration reset, forced-action, preselection, and nagging patterns that can make "choice", "control", or "no lock-in" claims misleading.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai), [Pew Research Center 2026 AI attitude summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/), and [How Agents Ask for Permission](https://arxiv.org/html/2607.13718v1) for directional accuracy, security, privacy, control, permission, and approval-fatigue signals that raise the evidence floor for AI trust and agency claims.
- [Apple App Intents](https://developer.apple.com/documentation/appintents), [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/), [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools), and [Gemini Connected Apps](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en) for typed action, tool, entity, and connected-app patterns that raise the evidence floor for action-surface, agent-ready, MCP, app-action, and automation safety claims.
- [LangSmith Observability](https://www.langchain.com/langsmith/observability), [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation), [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/), [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/), [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features), [Microsoft Copilot Autofix for Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-code-scanning-autofix), [Microsoft PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights), and [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity) for the claim floor around diagnostic, root-cause, repair, AI autofix, activity, and observability wording.

These sources do not determine Research product scope. They set the minimum claim discipline: objective, comparative, availability, AI, privacy, user-opinion, testimonial, and performance statements must be scoped, substantiated, current, and not misleading.

## Authority and relationship

This matrix governs `READY-004` and supports `DOCS-002`, `DOCS-004`, `TRUTH-002`, `TRUTH-003`, `BENCH-001` through `BENCH-004`, `PERF-001` through `PERF-006`, `AUTO-003`, `AUTO-006`, `A11Y-001`, `I18N-001`, `READY-001`, `READY-002`, and `READY-003`.

It applies to:

- public website copy;
- release notes and launch communications;
- sales, investor, analyst, and customer-facing decks;
- support, admin, trust, security, privacy, and compliance pages;
- marketplace listings and integration directories;
- README, SDK, MCP, CLI, API, and developer-facing public docs;
- screenshots, demos, benchmark pages, case studies, testimonials, and public status claims;
- in-product copy when the wording asserts capability, availability, safety, trust, privacy, performance, or production readiness.

If this matrix conflicts with product, architecture, security, AI, source, privacy, publication, or Product Truth contracts, correct the governing contract first. Material external claims still require the organization's legal, security, privacy, and release approvals where policy requires them.

## Claim evidence record

Every customer-facing claim stronger than specification-only language creates or updates a `CustomerClaimEvidenceRecord`:

```text
id
claim_family
claim_text
claim_surface: website | docs | release-note | sales | support | security | privacy | sdk | mcp | api | marketplace | in-product | status | incident | case-study | testimonial
status: specified-only | draft | blocked | internal-preview | beta-limited | release-eligible | released | stale | contradicted | retired
allowed_language
blocked_language
scope_and_exclusions
affected_requirements
governing_docs
source_quality_records
FrontierSignalReview refs
Product Truth links
UserResearchSegmentScreener refs
UserOpinionCoverageRecord refs
UserOpinionSynthesisRecord refs
ProductTelemetryEventSpec refs
ExperienceBenchmarkScenario refs
ExperienceBenchmarkRun refs
AdvancedDifferentiationBenchmarkRecord refs
ExperienceValidationPlan refs
ExperienceEvidencePackage refs
HumanAIInteractionReview refs
AutomationFailureRecoveryRecord refs
OutcomeMetricDefinition refs
StrategicBetScorecard refs
OutcomeReview refs
security_privacy_review_refs
accessibility_i18n_evidence_refs
release_evidence_refs
commit_or_release_candidate
owner_slice
approver_roles
reviewed_at
expires_or_revisit_trigger
```

A claim without an owner, evidence floor, scope, excluded cases, release candidate, and revisit trigger remains `blocked` or `specified-only`.

## Evidence states

Claim strength is determined by the weakest required evidence input.

| State | Meaning | Allowed public language |
|---|---|---|
| `specified-only` | The behavior exists only in canonical docs. | "Research is specified to...", "The design requires...", "Planned production gate..." |
| `internal-preview` | Runtime behavior exists for internal or dogfood users, but launch gates are incomplete. | "Internal preview", "dogfood", "early implementation", with explicit limitations. |
| `beta-limited` | A bounded cohort has passing evidence for named scope, with unresolved limitations disclosed. | "Beta for [segment/scope]", "limited preview", "currently supports [bounded case]". |
| `release-eligible` | Runtime, user research, benchmark, telemetry, accessibility, privacy, security, Product Truth, and release evidence agree for the claim scope. | Exact scoped claim approved in the release evidence bundle. |
| `released` | The approved claim matches the deployed release and current support policy. | Same claim, no broader implication. |
| `stale` | Evidence may have changed because implementation, provider behavior, official references, or user evidence changed. | No current claim until refreshed. |
| `contradicted` | Evidence conflicts with product copy, implementation status, user evidence, telemetry, support, security, or Product Truth. | No public claim until Product Truth resolves the contradiction. |

## Boundary rules

1. Specification docs may describe required behavior, but public claims must say that behavior is specified, planned, or not yet implemented until runtime evidence exists.
2. "AI", "agent", "autonomous", "accurate", "verified", "secure", "private", "accessible", "enterprise-ready", "production-ready", "fast", "saves time", and "better than" are objective or implied objective claims when used in customer-facing material.
3. Comparative claims require the comparator, baseline, test method, sample, denominator, environment, statistical or benchmark limits, guardrails, date, and current AdvancedDifferentiationBenchmarkRecord when the claim is about advanced OS, browser, workspace-agent, app-intent, automation, or agent-observability differentiation; if fresh frontier signals affected the comparator, scope, or wording, the claim also requires a current FrontierSignalReview.
4. Availability claims require the feature to be shipped to the stated audience at the time the claim is made, or the limitation must be close to the triggering claim and impossible to miss.
5. AI accuracy, citation quality, hallucination, unsupported-claim, and correctness claims require evidence for the represented content types, segments, source classes, languages, and workflows.
6. User-opinion claims require method, participant segment, linked `UserResearchSegmentScreener`, task context, denominator when quantified, unresolved severity, coverage state, reviewed UserOpinionSynthesisRecord, codebook version, negative-evidence review, contradiction state, AI-assist disclosure where applicable, and blocked-claim state. Public posts, anecdotes, vote counts, and generated summaries are never customer-facing proof.
7. Synthetic-user, AI-generated feedback, and agent-as-user results are never testimonials, customer reviews, market proof, accessibility evidence, or launch evidence.
8. Privacy, no-ambient-capture, data-use, support-access, residency, deletion, and confidentiality claims must match current technical controls and disclosures. Omissions count as claim risk.
9. Screenshots, demo videos, benchmark charts, generated examples, and "available now" labels are claim surfaces.
10. A narrow claim must not imply broader production readiness, broader customer availability, broader platform support, broader privacy coverage, or broader AI reliability.

## Claim boundary matrix

All rows are currently specification boundaries. Runtime evidence is absent until implementation slices produce it.

| ID | Claim family | Allowed pre-runtime language | Blocked language until evidence exists | Required release evidence |
|---|---|---|---|---|
| `CCL-001` | First grounded Project, immutable source, cited answer, durable Markdown | "Specified first production proof path for one Project, one PDF, immutable SourceVersion, cited Chat answer, and editable Markdown document." | "Production-ready research app", "trusted cited answers", "turn sources into verified docs", "works with your documents today". | Completed first proof path at release commit, `EVID-001` through `EVID-003`, source import tests, retrieval authorization tests, citation opening, unsupported-claim blocks, document persistence, `UOC-001`, `TEL-001`, benchmark run, Product Truth snapshot, release bundle. |
| `CCL-002` | AI accuracy, groundedness, hallucination, unsupported claims | "Claims are modeled as supported, unsupported, disputed, stale, or blocked by source evidence." | "Hallucination-free", "always accurate", "verified AI", "guaranteed factual", "98% accurate" without the represented test scope. | Evaluation dataset, retrieval quality and faithfulness metrics, unsupported-claim rate, correction rate, model-council disagreement handling where high risk, content-type and language scope, source-quality records, user trust evidence, release evidence. |
| `CCL-003` | Speed, latency-aware progressive delivery, Fast Paths, less waiting | "Specified progressive delivery, Partial Results, cancellation, stale labels, and permission-safe Fast Paths." | "Instant research", "faster than chat", "less waiting", "real-time answers", "safe background progress" without measured baselines. | Service-class SLOs, first shell/progress/useful/citation-ready/final timings, p95/p99, INP/LCP where relevant, cancellation/reconnect behavior, `PERF-005`, `PERF-006`, `UOC-002`, `TEL-002`, benchmark runs, performance-perception study, guardrail outcomes. |
| `CCL-004` | Automation saves time, outcome-scored automation, recoverable automation, agent productivity | "Specified automation registry, dry-run review, run debugger, replay candidates, failure recovery records, learning artifacts, and outcome scorecards." | "Automation saves time", "agents do the work for you", "safe scheduled work", "debuggable agents", "recoverable automation", "adaptive automation value" without accepted-outcome and recovery evidence. | Accepted, edited, rejected, reversed output evidence; cost and latency per accepted outcome; approval burden; quiet-failure rate; dry-run comprehension; run-debugger task success; AutomationFailureRecoveryRecords; no unresolved `AFR-0` or claim-affecting `AFR-1`; learning artifacts; `AUTO-002` through `AUTO-006`; `UOC-003`; `TEL-003`; benchmark and OutcomeReview. |
| `CCL-005` | Delegated trust, safe autonomy, lower approval load | "Specified delegated-trust grants, approval batching, hard stops, stale receipts, and revocation controls." | "Trusted autonomy", "set-and-forget agents", "low-friction approvals", "less review burden" without fail-closed and fatigue evidence. | Grant-scope comprehension, revocation tests, stale-receipt rejection, hard-stop coverage, approval-load budgets, fatigue signals, reversal outcomes, `APPROVAL-001`, `APPROVAL-002`, `READY-003`, `UOC-004`, telemetry, Product Truth decision. |
| `CCL-006` | Native companion, browser extension, OS integration, no ambient capture | "Specified optional companion and extension with active-tab or selected-context capture only after user gesture and Project-scoped grant." | "Privacy-safe companion", "no hidden capture", "OS-level memory", "browser integration users trust" without technical proof and user comprehension. | Install, permission, capture preview, no-ambient-capture tests, revocation, signed update, support-safe diagnostics, prohibited telemetry checks, admin policy walkthrough, accessibility fallback, `NATIVE-001`, `NATIVE-002`, `UOC-006`, `TEL-006`, security/privacy review. |
| `CCL-007` | Worksets, Focus, Resume Digests, Project Atlas, advanced workspace UX | "Specified Project-scoped Worksets, resume state, Focus Sessions, and Impact Reports over authorized records." | "Better than OS recall", "reduces tab overload", "keeps users oriented", "advanced workspace UX" without measured user outcomes. | Workset switch/restore budgets, resume task success, Atlas path-query accuracy, stale/redacted recovery, privacy inspection, accessibility tasks, tab/workspace comparison baseline, current FrontierSignalReview where fresh OS, browser, app-intent, or workspace-agent signals affect wording, `BENCH-004`, `ADB-001`, `ADB-005`, `ADB-007`, `UOC-005`, `TEL-005`, `MAP-001`, `MAP-002`, OutcomeReview. |
| `CCL-008` | Scenario Lab, Reversible Work, Project Health, causal diagnostics, repair and recovery | "Specified simulations, recovery options, irreversible labels, causal health findings, suspected causes, counterevidence, unknowns, and support-safe repair dry-runs." | "Safe what-if automation", "reversible work", "repairable Project health", "AI root cause", "self-healing Projects", "autofixes Project health", "debuggable agents", "better than observability tools", "reliable recovery" without side-effect, diagnostic, and recovery evidence. | Stale-plan rejection, no-side-effect simulation tests, recovery/restore/replay/compensation outcomes, trace-to-finding benchmark, HealthLineageEdge tests, false-cause and false-positive metrics, diagnostic-waste budget, repair dry-run evidence, repair outcome observations, support-bundle minimization, content-minimized OpenTelemetry and GenAI redaction tests, irreversible and causal-finding comprehension, `SIM`, `REV`, `HEALTH`, `SUPPORT`, `ADB-009`, `UOC-007`, `TEL-007`, benchmark runs, HumanAIInteractionReview, CustomerClaimEvidenceRecord. |
| `CCL-009` | Product Truth, contradiction radar, no drift, living docs | "Specified Product Truth Board, SignalDecisionLedger, contradiction radar, and source-change maintenance for docs and claims." | "Learns from users", "keeps docs current", "prevents roadmap drift", "self-maintaining documentation" without closed-loop runtime evidence. | TruthSignal records, source-quality records, contradiction resolution time, maintenance run outcomes, source-change Claim revalidation, docs-updated links, non-action decisions, `TRUTH-001` through `TRUTH-003`, `MAINT-001`, `UOC-008`, `TEL-008`, benchmark truth scenario. |
| `CCL-010` | User-research-backed, customer-loved, synthetic-user evidence | "Public and synthetic signals are planning inputs; real user evidence is required for launch claims." | "Customers love it", "research-backed demand", "validated by synthetic users", "always-on user research proves direction" without approved evidence. | ExperienceValidationPlans, UserResearchSegmentScreeners, observed-task sessions, target segments, disclosed survey method where quantified, reviewed UserOpinionSynthesisRecords, codebook version, negative-evidence review, AI-assist disclosure, customer/reference approval when named, synthetic-user labels, unresolved finding disposition, `UOC-012`, SourceQualityRecords, Product Truth decisions. |
| `CCL-011` | Accessibility, mobile, offline, global, internationalization | "Specified WCAG 2.2 AA journey expectations, mobile/offline controls, locale metadata, RTL fixtures, and accessible export manifests." | "Accessible", "mobile-ready", "offline-tolerant", "global-ready", "accessible exports" without release-scope evidence. | Keyboard and screen-reader journeys, mobile viewport runs, offline queue and reconnect tests, local-cache privacy checks, WCAG mapping, language/direction fixtures, assistive-technology participant evidence, `A11Y-001`, `I18N-001`, `DEVICE`, `UOC-009`, `TEL-009`. |
| `CCL-012` | API, SDK, MCP, CLI, agent-ready platform | "Specified typed API, SDK, webhook, SSE, idempotency, stable errors, MCP capability inspection, and command preflight." | "Agent-ready platform", "developer-friendly automation", "safe MCP/API control", "drop-in SDK" before contracts and compatibility evidence pass. | OpenAPI and SDK version evidence, stable error and idempotency tests, SSE reconnect, webhook delivery, MCP capability tests, agent-as-user fixtures, recovery paths, docs task study, `API-001`, `API-002`, `UOC-010`, `TEL-010`, release evidence. |
| `CCL-013` | Enterprise-ready, admin-safe, supportable, auditable, secure, private, residency | "Specified controls for policy visibility, support grants, diagnostics, audit exports, abuse decisions, security, privacy, and residency." | "Enterprise-ready", "secure by default", "private", "admin-safe", "auditable", "data-resident" without complete scoped evidence. | Tenant isolation, security suites, support access approval/revocation, SupportDiagnosticBundle minimization, audit export, residency map, deletion/retention tests, abuse false-positive evidence, runbooks, `ADMIN`, `SUPPORT`, `SEC`, `GOV`, `RESIDENCY`, `ABUSE`, `UOC-011`, `TEL-011`. |
| `CCL-014` | Availability, beta, GA, production readiness, roadmap timing | "Implementation-ready specification", "not scaffolded", "planned slice", "internal preview", or exact bounded beta wording. | "Available now", "generally available", "production-ready", "shipping soon", "stable" unless release status, support policy, and deployment scope match. | Implementation ledger, protected commit, release bundle, feature flag state, support policy, known limitations, release notes, launch approvals, stable-release observation window, no stale watch item, no blocker contradiction. |
| `CCL-015` | Testimonials, reviews, case studies, customer outcomes, public quotes | "Customer feedback will be governed by source-quality, consent, retention, segment, and reference policy." | Fake reviews, AI-generated customer reviews, unrepresentative testimonials, undisclosed incentives, synthetic-user quotes, or public posts treated as customer proof. | Consent and reference approval, material-connection disclosure, representative or typical-results context where needed, method/denominator for quantified outcomes, excerpt policy, retention policy, SourceQualityRecord, Product Truth link, legal/release approval. |
| `CCL-016` | Choice-respecting AI surfaces, user agency, opt-in/default controls | "Specified AI-surface choices are governed as opt-in where material, reversible, inspectable, exportable where policy allows, and policy-explainable." | "Users stay in control", "respects choice", "no lock-in", "non-coercive AI", "privacy-safe assistant", "never nags", "no forced defaults", or "easy to disable" without scoped user evidence and technical proof. | `UOC-013`, Preference Center and Project settings task success, disable/reset/export evidence, onboarding/import/migration preservation tests, no forced browser/assistant/companion/provider path, no nag/preselection review, accessibility evidence, admin policy walkthrough, HumanAIInteractionReview, Product Truth decision, release bundle. |
| `CCL-017` | Typed Project Action Surface, agent-ready actions, app-action integrations, MCP action catalog, safe natural-language action execution | "Specified Project actions resolve through typed descriptors, preflight, approval, expected-version, idempotency, Activity, and audit controls before material effects." | "Agent-ready actions", "safe app actions", "better than App Intents", "drop-in MCP automation", "natural language safely runs actions", "any assistant can control your Project", or "users understand every action" without scoped runtime, benchmark, and user evidence. | Project Action Surface descriptor schema tests, projection parity across Command Center/API/SDK/CLI/MCP/native/browser/recipe surfaces, compact and lazy-loaded tool metadata tests, prompt-injection fixtures, disabled-reason accessibility evidence, `ADB-008`, `UOC-014`, `TEL-010`, `UX-004`, `API-001`, `API-002`, `AUTO-004`, `AUTO-005`, HumanAIInteractionReview, security/privacy review, Product Truth decision, release bundle. |

## Launch gates

Before a customer-facing claim can be released:

1. The exact claim text is recorded as a `CustomerClaimEvidenceRecord`.
2. The claim maps to at least one matrix row and does not exceed that row's allowed language.
3. The source-quality record states confidence, representativeness, freshness, bias, allowed decision, and citation or internal evidence reference.
4. Runtime behavior exists for the claimed release candidate and segment.
5. Current `UserResearchSegmentScreener` records exist for every user-opinion, survey, dogfood, beta, support, benchmark-participant, testimonial, or public-signal input the claim depends on.
6. User-opinion coverage, reviewed UserOpinionSynthesisRecords, telemetry coverage, benchmark runs, OutcomeReviews, HumanAIInteractionReviews, AutomationFailureRecoveryRecords where automation recoverability is claimed, accessibility evidence, security/privacy evidence, and support evidence exist where the row requires them.
7. Every opinion-backed claim names codebook version, coding assignments, negative-evidence review, contradiction state, AI-assist disclosure where applicable, owner, expiry, and blocked claims.
8. Every advanced or better-than OS, browser, workspace-agent, app-intent, automation, or agent-observability claim links to a current AdvancedDifferentiationBenchmarkRecord.
9. Every claim influenced by a fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion signal links to a current FrontierSignalReview or runtime Product Truth equivalent.
10. Every comparative, performance, automation, trust, accuracy, accessibility, privacy, residency, or enterprise claim names its scope, baseline, method, denominator, and excluded cases.
11. Choice, control, agency, opt-in, no-lock-in, no-forced-default, no-nag, or easy-disable claims for AI surfaces link to `UOC-013` and tests proving disabled or narrowed choices survive onboarding, import, migration, browser extension install, native companion install, provider change, and policy change.
12. Every unavailable, beta, preview, limited, unsupported, degraded, stale, or excluded capability is disclosed close to the triggering claim.
13. No unresolved `S0` or launch-impacting `S1` contradiction touches the claim, its evidence, or its governing docs.
14. Release evidence includes the claim text, owner, approvers, commit or release candidate, evidence refs, limitations, expiry, and revisit trigger.

## Contradiction handling

A contradiction is created when:

- public copy implies runtime behavior that implementation status says is not implemented;
- release notes say a feature is available while feature flags, permissions, support policy, or deployment scope say otherwise;
- a performance, automation, accessibility, trust, privacy, or AI-accuracy claim lacks the baseline or evidence represented by the wording;
- an AI-surface choice, onboarding, import, migration, browser extension, native companion, provider, or policy flow re-enables disabled behavior, widens data use, forces a browser/assistant/companion/provider path, or uses nagging or preselection while public copy implies user control;
- a customer quote, public post, AI-generated review, synthetic-user artifact, or anecdote is used as broader proof;
- telemetry suggests improvement while user research, accessibility evidence, support evidence, security review, or benchmark evidence regresses;
- an official reference, competitor state, provider policy, model capability, pricing, beta status, or platform behavior is stale but still supports public copy.

Until Product Truth exists at runtime, contradictions are recorded in [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md) and governed by [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md).

## Documentation update rule

Changes to claim families, allowed language, blocked language, release-evidence floors, evidence states, availability policy, testimonial policy, or launch gates must update:

- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- entry indexes and required-reading lists

If stronger public language is useful but evidence is missing, keep the claim blocked, downgrade the wording, or record a Product Truth NonActionDecision with the missing evidence and revisit trigger.
