# User opinion research coverage matrix

**Review date:** 2026-07-18
**Status:** delivery coverage matrix for user-opinion and experience evidence, not runtime behavior

Research has a broad product surface: Project creation, Sources, Chat, Documents, Worksets, Focus, Native Companion, Project Operating Layer, Project Health, Scenario Lab, Reversible Work, delegated trust, automation recipes, automation recovery, Product Truth, benchmarks, support, administration, API, SDK, and MCP. The risk is uneven evidence: one advanced feature may have current public signals while another has only internal intuition or a competitor screenshot.

This matrix answers a practical question for each material surface:

```text
Whose opinion, observed behavior, accessibility evidence, benchmark evidence, and telemetry are still required before Research can claim this surface improves performance, usability, user experience, automation, trust, reviewability, recoverability, or advanced differentiation?
```

The matrix does not create a second roadmap, Product Truth authority, research repository, analytics system, recovery authority, or release-evidence store. It is a specification-era coverage projection over [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md), [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md), [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md), [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md), [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md), [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md), [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md), [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md), [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md), [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md), and [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md).

Once runtime Product Truth and release evidence exist, each row becomes Product Truth, ExperienceValidationPlan, ExperienceEvidencePackage, ExperienceBenchmarkScenario, OutcomeReview, or NonActionDecision state.

## Source basis

Methodology, survey, and current market references reviewed on 2026-07-18:

- [Nielsen Norman Group generative-AI UX research agenda](https://www.nngroup.com/articles/genai-ux-research-agenda/) for the need to research both AI interfaces and new AI-shaped interaction methods.
- [Nielsen Norman Group AI agents as users](https://www.nngroup.com/articles/ai-agents-as-users/) for the current shift where AI agents interact with interfaces, while human users still own goals, accountability, control, and accessibility expectations.
- [Nielsen Norman Group AI-simulated behavior review](https://www.nngroup.com/articles/ai-simulations-studies/) and [Synthetic Users](https://www.nngroup.com/articles/synthetic-users/) for the narrow uses and limits of simulated participants.
- [User Interviews State of User Research 2025](https://www.userinterviews.com/state-of-user-research-report) and [State of Synthetic Users](https://www.userinterviews.com/state-of-synthetic-users-report) for researcher adoption of AI tooling, skepticism about synthetic users, concerns about accuracy, overtrust, and bias, and the need for team guidance.
- [Microsoft Work Trend Index 2026](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization) for workplace-agent adoption pressure, leadership/user alignment gaps, and organizational conditions around agentic work.
- [Glean Work AI Index 2026](https://www.glean.com/work-ai-institute/reports/work-ai-index) for survey evidence that AI usage and perceived personal productivity do not automatically translate into organizational outcomes, especially when AI supervision work is untracked.
- [Okta AI Agents at Work 2026](https://www.okta.com/newsroom/articles/ai-agents-at-work-2026-agentic-enterprise-security/) for executive and worker gaps around agent visibility, connections, and permissions.
- [Future of Work with AI Agents](https://arxiv.org/abs/2506.06576) for task-level worker preferences about automation versus augmentation and the Human Agency Scale framing.
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for browser-choice, migration reset, forced-action, preselection, nagging, and AI-interface routing signals that affect whether advanced AI surfaces preserve user agency.
- [How Agents Ask for Permission](https://arxiv.org/html/2607.13718v1) and [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/html/2605.24309v1) for current permission, runtime approval, cognitive-burden, approval-fatigue, and scope-creep risks that user studies must cover.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai), [Pew public and expert AI attitudes](https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/), and [Pew 2026 AI attitude summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/) for trust, accuracy, control, and public concern signals.
- [Apple App Intents](https://developer.apple.com/documentation/appintents), [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/), [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools), and [Gemini Connected Apps](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en) for current typed action, entity, tool, and connected-app patterns that affect agent-as-user and human comprehension studies.
- [LangSmith Observability](https://www.langchain.com/langsmith/observability), [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation), [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/), [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/), [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features), [Microsoft PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights), and [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity) for current diagnostic, observability, RCA, activity, and AI-assisted repair patterns that affect Project Health comprehension studies.
- Directional public practitioner signals reviewed on 2026-07-18 include Reddit discussions of Power Automate Copilot missing flow context, Shortcuts authoring unpredictability, MCP structured-output tradeoffs, MCP schema context budget, MCP tool-description regression testing, LangChain debugging gaps, production agent silent failures, trajectory evaluation, causal history, action ledgers, and Hacker News discussion of observability noise and cost.

These references do not prove Research demand. They define the current research-risk envelope: real users must be observed, source quality must be explicit, public opinion remains directional, and synthetic users cannot satisfy launch evidence.

## Authority and relationship

This matrix operationalizes:

- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md) for study plans, sessions, findings, evidence packages, participant coverage, severity, and launch thresholds;
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) for `UserResearchSegmentScreener` records, target and excluded segment definitions, job-to-be-done, agency preference, AI trust posture, automation maturity, sampling source, denominator, representativeness, bias, consent, retention, supported claims, and blocked claims;
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) for raw user-opinion evidence items, versioned codebooks, coding assignments, AI-assisted analysis review, negative-evidence review, synthesis records, promotion thresholds, contradiction handling, and blocked claims;
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md) for expert review before AI and automation surfaces rely on user-research or benchmark evidence;
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md) for AutomationFailureRecoveryRecords, user-facing safe next actions, side-effect reconciliation, quiet-wrong outcome handling, and recovery learning artifacts;
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md) for baselines, anti-metrics, StrategicBetScorecards, and OutcomeReviews;
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md) for repeatable scenario evidence;
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) for same-task comparator baselines and blocked advanced-differentiation claims;
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) for FrontierSignalReview records, source-quality limits, user-opinion synthesis links, and blocked claims before fresh frontier signals can affect covered surfaces;
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) for source-quality class, confidence, representativeness, bias, and allowed decisions;
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) for exact customer-facing claim language, blocked wording, evidence floors, and CustomerClaimEvidenceRecords;
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md) for specification-mode accepted, rejected, research-more, and non-action decisions;
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) for prototype, dogfood, beta, adoption, deferral, kill, and non-action gates;
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md) for immutable release evidence and claim blocking.

If this matrix conflicts with a product, architecture, security, AI, source, delivery, reference, or `_meta` contract, correct the governing contract first.

## Coverage record

Each material surface creates or updates a `UserOpinionCoverageRecord`:

```text
id
surface
status: missing | public-signal-only | planned | dogfood | observed-users | benchmarked | telemetry-backed | release-ready | stale | contradicted
source_signal_refs
source_quality_records
user_research_segment_screener_refs
target_segments
excluded_segments
primary_user_opinion_questions
observed_task_protocol
accessibility_and_locale_coverage
automation_or_agent_coverage
automation_failure_recovery_coverage
synthetic_or_simulated_use_allowed: none | planning-only | gap-fill-only
blocked_claims_until_complete
linked_requirements
linked_docs
linked_benchmark_scenarios
linked_outcome_metrics
Product Truth links
owner_slice
revisit_trigger
```

Coverage is `release-ready` only when source quality, `UserResearchSegmentScreener` records, user research, benchmark evidence, telemetry or runtime evidence where applicable, accessibility coverage, unresolved-severity disposition, AutomationFailureRecoveryRecord disposition where automation recovery affects launch scope, Product Truth decision, and launch evidence agree.

## Evidence classes

| Evidence class | Allowed role | Not allowed |
|---|---|---|
| Public user opinion | Discovery, hypothesis, benchmark seed, non-action trigger, stale-source watch item | Customer-facing proof, prevalence claim, launch evidence by itself |
| Representative or disclosed-method survey | Directional quantitative signal when method, population, denominator, and bias are clear | Segment-specific Research demand without target-user validation |
| Customer or prospect interview | Problem discovery, workflow depth, buyer/user risk, segment-specific Product Truth signal | Broad market claim from one account |
| Observed task study | Usability, comprehension, performance-perception, trust, approval-load, and workflow evidence | Production behavior outside the tested environment |
| Dogfood | Internal feasibility, documentation maintenance, automation-debugger and Product Truth workflow proof | External launch approval by itself |
| Benchmark run | Repeatable good-event, bad-event, regression, accessibility, and performance evidence | Human comprehension proof without participant evidence |
| Runtime telemetry | Denominator-backed production-shaped behavior | Motivation or qualitative explanation without research follow-up |
| Synthetic user or AI-simulated participant | Planning prompt, question audit, edge-case inventory, incomplete-survey gap filling only when labeled | Replacing real users, accessibility participants, customer evidence, launch evidence, or Product Truth proof |
| Agent-as-user test | API/interface legibility for automation, MCP, SDK, command, or browser-agent clients | Human usability, trust, consent, accountability, or accessibility evidence |

## Surface coverage matrix

All rows are currently specification coverage. Runtime evidence is absent until implementation slices produce it.

| ID | Surface | Required user-opinion coverage | Primary methods | Blocked claims until coverage exists |
|---|---|---|---|---|
| `UOC-001` | First Project, source import, cited answer, durable Markdown | Researchers, analysts, developers, and skeptical AI users must explain source status, cite support, unsupported claims, document durability, and first-run confidence. | Observed task study, first-use benchmark, citation trust task, support-safe feedback capture, dogfood on this docs repo. | "Easy first use", "trustworthy cited answers", "production-ready source import", "documented evidence workflow". |
| `UOC-002` | Progressive delivery, performance perception, quick/focused/deep modes | Users must judge whether waits are understandable, whether Partial Results are useful, and whether mode/budget choices reduce vigilance instead of increasing supervision work. | Moderated long-running task, benchmark latency run, perceived-wait survey, cancellation/reconnect test, telemetry window. | "Faster", "less waiting", "safer background work", "better UX than chat". |
| `UOC-003` | Automation Registry, Recipes, dry-runs, Run Debugger, failure recovery, outcome scorecards | Automation power users, operators, and support owners must predict scope, cost, side effects, failure reason, recovery severity, safe next action, disabled-action reason, reconciliation need, replay readiness, learning artifact, and accepted outcome. | Dry-run comprehension study, failed-run diagnosis task, recovery-action walkthrough, dogfood maintenance recipe, benchmark automation scenario, support-diagnostic walkthrough. | "Automation saves time", "debuggable agents", "recoverable automation", "safe scheduled work", "adaptive automation value". |
| `UOC-004` | Delegated trust, approvals, permission grants, approval-load budgets | Users must understand grant scope, hard stops, stale receipts, revocation, approval batching, and fatigue warnings without rubber-stamping. | Permission comprehension study, approval-fatigue simulation, revocation task, hard-stop recognition benchmark, Product Truth review. | "Low-friction approvals", "trusted autonomy", "safe delegation", "less review burden". |
| `UOC-005` | Focus, Resume Digests, Worksets, Project Atlas, tab/workspace reduction | Users must decide whether Project-native resume and Worksets reduce setup time, tab clutter, missed blockers, and context loss without relying on OS-wide capture. | Resume task study, Workset restore benchmark, Atlas path-finding task, tab-overload comparison, accessibility walkthrough. | "Better than OS recall", "reduces tab overload", "keeps users oriented", "advanced workspace UX". |
| `UOC-006` | Native Companion, browser extension, active-tab/selected-context capture, no-ambient-capture boundary | Privacy-sensitive users and admins must understand what is captured, what is not captured, how grants are revoked, and how companion failure falls back to web behavior. | Grant-scope comprehension, no-ambient-capture validation, revocation task, admin policy walkthrough, assistive-technology check. | "Privacy-safe companion", "no hidden capture", "OS/browser integration users trust". |
| `UOC-007` | Scenario Lab, Reversible Work, Project Health, causal diagnostics, support-safe repair | Users must understand simulated effects, unknowns, stale plans, irreversible actions, recovery options, observed health signals, suspected causes, confidence, counterevidence, false-cause state, diagnostic-waste state, repair dry-runs, repair outcomes, and support-safe diagnostics before risky work. | Scenario comparison task, stale-plan rejection benchmark, recovery walkthrough, causal-finding comprehension task, trace-to-finding review, repair dry-run study, support-bundle review, false-cause and unknown-state walkthrough. | "Safe what-if automation", "reversible work", "repairable Project health", "AI root cause", "self-healing Projects", "debuggable agents", "reliable recovery". |
| `UOC-008` | Product Truth Board, contradiction radar, feedback correction, non-action decisions | Product, support, and documentation owners must submit corrections, see disposition, understand why Research did not act, and verify affected docs moved together. | Feedback disposition study, contradiction task, non-action comprehension review, documentation dogfood, benchmark truth scenario. | "Learns from users", "keeps docs current", "prevents roadmap drift", "transparent product decisions". |
| `UOC-009` | Accessibility, internationalization, mobile, offline, local cache | Keyboard, screen-reader, low-vision, reduced-motion, mobile, low-connectivity, multilingual, and RTL users must complete primary journeys with equivalent control and recovery. | Assistive-technology sessions, locale fixtures, offline/reconnect task, mobile benchmark, accessible export review. | "Accessible", "mobile-ready", "offline-tolerant", "global-ready". |
| `UOC-010` | Agent-as-user, API, SDK, MCP, command execution, automation clients | Developers and automation builders must verify that agents can inspect capabilities, preflight, stable errors, permissions, and recovery paths without bypassing human authority. | API/SDK/MCP usability task, agent-as-user compatibility test, command preflight fixture, developer documentation study. | "Agent-ready platform", "developer-friendly automation", "safe MCP/API control". |
| `UOC-011` | Administration, billing, support access, diagnostics, trust-safety | Admins and operators must understand inherited policy, usage, support grants, SupportDiagnosticBundles, access sessions, audit export, abuse decisions, and false-positive appeal. | Admin task study, support-case simulation, billing/usage comprehension, support-access revocation task, abuse false-positive review. | "Enterprise-ready", "supportable", "admin-safe", "auditable trust controls". |
| `UOC-012` | Synthetic-user and AI-assisted research workflow | Researchers must know when AI can help plan studies or analyze notes and when real users remain required. Stakeholders must not overtrust synthetic findings. | Researcher-method study, synthetic-output red-team review, source-quality audit, Product Truth non-action review. | "Always-on user research", "synthetic users validate demand", "AI-generated feedback proves product direction". |
| `UOC-013` | Choice-respecting AI surfaces, defaults, migration/import, browser/assistant/companion choice | Skeptical AI users, developers, admins, privacy-sensitive users, and accessibility participants must understand which AI surfaces are enabled, disabled, policy-managed, or unavailable; prove disabled or narrowed choices survive onboarding, import, migration, browser extension install, native companion install, provider change, and policy change; and reject forced browser, assistant, companion, notification, automation-recommendation, or default-setting paths. | Choice-comprehension study, settings/onboarding/import/migration task, disable/reset/export task, admin policy walkthrough, no-nag copy review, assistive-technology journey, negative-evidence review. | "Users stay in control", "respects choice", "no lock-in", "privacy-safe AI surfaces", "non-coercive assistant", "easy to disable". |
| `UOC-014` | Typed Project Action Surface, action catalog, app-intent-style entities, API/SDK/CLI/MCP/native/browser action projection, recipe action composition | Developers, automation builders, admins, power users, skeptical AI users, and accessibility participants must understand what each action will read, write, publish, bill, notify, delete, or request; distinguish read-only, draft, review, mutation, external-write, destructive, billing, and administrative actions; recover from disabled or policy-managed states; and verify that natural language cannot bypass typed descriptors. | Action-comprehension study, command/API/SDK/MCP/native/browser parity task, recipe action-selection task, app-intent comparator task, disabled-reason accessibility walkthrough, prompt-only mutation red-team, tool-description regression fixture review. | "Agent-ready actions", "safe app actions", "developer-friendly action catalog", "natural language runs safe automation", "drop-in MCP automation", "users understand every action". |

## Coverage gates

Every row must satisfy these gates before broad launch claims:

1. Public, survey, practitioner, competitor, official, customer, dogfood, benchmark, telemetry, and synthetic signals are source-quality classified.
2. Every accepted or rejected signal maps to a SpecificationSignalDecisionRecord or runtime SignalDecisionLedger entry.
3. Every fresh frontier signal that affects a surface's scope, prototype, benchmark, outcome claim, or customer-facing claim links to a current FrontierSignalReview or runtime Product Truth equivalent.
4. Every surface has current `UserResearchSegmentScreener` records that name target segments, excluded segments, job-to-be-done, agency preference, AI trust posture, automation maturity, sampling source, denominator, representativeness, bias, supported claims, and blocked claims.
5. Every user-opinion theme, launch blocker, Product Truth signal, non-action decision, or claim candidate links to a reviewed UserOpinionSynthesisRecord with codebook version, coding assignments, negative-evidence review, contradiction state, AI-assist disclosure, owner, expiry, and blocked claims.
6. Every surface has at least one ExperienceValidationPlan that links those screener and synthesis records and names task protocol, denominator expectations, accessibility coverage, and Product Truth decision relationship.
7. Every advanced surface has a HumanAIInteractionReview before user-study findings are treated as launch evidence.
8. Every performance, usability, automation, trust, reviewability, recoverability, or advanced-differentiation claim links to an OutcomeMetricDefinition or StrategicBetScorecard, and automation-recoverability claims link to current AutomationFailureRecoveryRecords with no unresolved launch-blocking severity.
9. Every primary journey has an ExperienceBenchmarkScenario and at least one passing run at the release commit.
10. Every synthetic or AI-simulated user artifact is labeled as planning-only or gap-fill-only and cannot satisfy a launch gate.
11. Every unresolved `S0` or launch-impacting `S1` finding blocks the affected claim.
12. Every missing row becomes an explicit excluded-scope statement in release evidence and CustomerClaimEvidenceRecords.

## Immediate research backlog

Before `foundation-01` is treated as more than an implementation scaffold, Research should prepare:

- a first-run observed-task script for `UOC-001`;
- a dogfood evidence capture template for maintaining this documentation repository with Research itself;
- a public-signal-to-study mapping for `UOC-002`, `UOC-003`, `UOC-004`, `UOC-005`, and `UOC-006`, including `AUTO-006` recovery comprehension signals for `UOC-003`;
- a causal-health and repair-comprehension study plan for `UOC-007`, including trace-to-finding review, false-cause recognition, unknown-state handling, diagnostic-waste comprehension, support-bundle minimization, and repair-outcome validation;
- a choice-comprehension and migration/import preservation study plan for `UOC-013`;
- an action-comprehension and descriptor-projection study plan for `UOC-014`;
- `UserResearchSegmentScreener` templates covering skeptical AI users, automation power users, developers, product/support owners, admins, accessibility participants, executives, and AI-assisted research practitioners;
- a synthetic-user prohibition checklist for launch evidence;
- an agent-as-user compatibility checklist for API, SDK, MCP, command, and automation-client surfaces.

## Documentation update rule

Changes to user-opinion coverage state, target segments, methods, blocked claims, synthetic-user policy, agent-as-user policy, surface rows, linked benchmarks, or launch gates must update:

- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

If a coverage update exposes a mismatch between product claims, public signal interpretation, user research, benchmark evidence, implementation status, or launch evidence, Product Truth records a contradiction before the change is treated as complete.
