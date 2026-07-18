# Frontier feature watch and novelty control

**Review date:** 2026-07-18
**Status:** delivery and Product Truth frontier-signal control, not runtime behavior

This contract defines `BENCH-004`. It closes the gap between current-source watch, user-opinion synthesis, advanced opportunity scoring, prototype incubation, same-task benchmarking, and customer-claim boundaries. A frontier signal can be a new operating-system capability, AI browser feature, workspace-agent behavior, automation platform control, app-intent surface, research finding, public user-opinion pattern, support issue, dogfood failure, or competitor claim. The signal is evidence to evaluate, not permission to expand scope.

Research wants advanced capabilities that generic operating systems, browsers, and workspace agents do not combine well. Novelty is still not a product strategy. A feature is only allowed to move forward when it improves performance, usability, user experience, automation leverage, trust, reviewability, recoverability, maintainability, commercial viability, or security without creating a second authority or weakening the first production proof path.

## Source basis

Official references reviewed on 2026-07-18:

- [Microsoft Recall privacy and control](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience) and [Click to Do](https://support.microsoft.com/en-us/windows/ai/ai-features/click-to-do-do-more-with-what-s-on-your-screen) for opt-in snapshots, local processing, pause, filters, deletion, visible entry points, screen-aware text and image action, temporary files, and online-provider handoff.
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/), [Action definition JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json), [caller filtering guidance](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-filter-caller), and [App Action availability](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-availability) for registered atomic actions, typed entities, inputs, outputs, availability, invocation metadata, and runtime caller limits.
- [Apple advanced App Intents for Siri and Apple Intelligence](https://developer.apple.com/videos/play/wwdc2026/343/) and [WWDC26 Apple Intelligence guide](https://developer.apple.com/wwdc26/guides/apple-intelligence/) for App Intents, semantic search, on-screen awareness, view annotations, natural-language app actions, and system-path testing.
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools), [Apps SDK MCP overview](https://developers.openai.com/apps-sdk/concepts/mcp-server), and [Apps SDK reference](https://developers.openai.com/apps-sdk/reference) for model-facing tool descriptors, input and output schemas, discovery metadata, read-only and destructive annotations, structured content, and UI resource projection.
- [ChatGPT Workspace Agents for Enterprise and Business](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business) for repeatable workspace agents, drafts, testing, publishing, schedules, API triggers, apps, tools, RBAC, Slack use, and Codex-based configuration.
- [Notion Custom Agents](https://www.notion.com/help/custom-agents) and [Notion Custom Agents security features](https://www.notion.com/help/custom-agents-security-features) for recurring background workflows, triggers, explicit access grants, activity logs, version history, model selection, external app access, audit logs, and permission levels.
- [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity) and [Zapier log streams](https://help.zapier.com/hc/en-us/articles/43732241361421-Set-up-log-streams-to-monitor-Zap-activity) for agent run activity, run-detail inspection, event streams, execution outcomes, asset-management events, and monitoring integration.
- [Microsoft PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights), [Microsoft Copilot troubleshooters](https://support.microsoft.com/en-us/support/get-help/copilot-troubleshooters), [LangSmith Observability](https://www.langchain.com/langsmith/observability), [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation), [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/), [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/), [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features), [Causely](https://arxiv.org/abs/2605.18327), and [Traccia](https://arxiv.org/abs/2607.14309) for PC diagnostics, traces, trajectory evaluation, causal history, AI RCA, autofix, and trace-governance signals.
- [Atlassian Rovo Agents](https://support.atlassian.com/rovo/docs/agents/), [Rovo Studio](https://support.atlassian.com/studio/docs/what-is-rovo-studio/), and [Rovo usage allowance](https://support.atlassian.com/rovo/docs/rovo-usage-limits/) for agents in work surfaces, AI-powered builder workspaces, no-code apps, automation flows, agent tools, usage credits, and budget visibility.
- [Glean Agent Development Lifecycle](https://docs.glean.com/agents/agent-development-lifecycle/adlc) and [Glean agent evaluation guidance](https://www.glean.com/blog/enterprise-agent-evaluation-guide) for lifecycle-managed agent design, testing, governance, measurement, evaluation, and retirement.
- [Gemini Connected Apps](https://support.google.com/gemini/answer/13695044?hl=en) for permissioned connected-app behavior, app selection, and account or device variation.
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for browser-choice, AI-interface default, migration, nagging, forced-action, and harmful-design signals that affect whether advanced AI surfaces preserve user agency.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai), [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/), and [Pew worker AI attitudes](https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/) for current trust, accuracy, security, privacy, productivity, concern, worry, and overwhelm signals.
- [How Agents Ask for Permission](https://arxiv.org/html/2607.13718v1) and [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/html/2605.24309v1) for agent permission taxonomies, enforcement gaps, approval fatigue, cognitive burden, and scope creep.

Directional public and practitioner signals reviewed on 2026-07-18 include Hacker News and Reddit discussions of Recall privacy, Click to Do and screen action, AI browser usefulness and trust, Notion agent pricing, workspace-agent reliability, Shortcuts authoring friction, approval and permission fatigue, tab overload, Stage Manager and workspace UX, agent observability, and automation reliability. Public user-opinion signals are directional inputs only. They cannot prove demand, usability, trust, accessibility, production readiness, or customer-facing claims without source-quality records, screened segment context, reviewed UserOpinionSynthesisRecords where they affect scope, benchmarks, runtime evidence, and Product Truth decisions.

## Authority and relationship

This contract operationalizes:

- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md) for recurring watch cadence, source currentness, and stale-source blocking.
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md) for accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, and non-action decisions before runtime Product Truth exists.
- [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md) and [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md) for dated capability and user-opinion snapshots.
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md) for accepted differentiators and rejected operating-layer non-actions.
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md) for AdvancedOpportunity scoring, sequencing, validation expectations, and non-action disposition.
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) for prototype, dogfood, beta, adoption, deferral, kill, and non-action records after a frontier signal is scoped.
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) for same-task comparator baselines, anti-metrics, and blocked comparative claims.
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) for converting raw public posts, support notes, dogfood notes, benchmark notes, telemetry follow-up, and AI-assisted highlights into reviewed UserOpinionSynthesisRecords before they affect scope.
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) and [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) for target segments, excluded segments, opinion coverage, synthetic-user limits, and blocked claims.
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) for same-change consistency when a frontier signal touches requirements, docs, launch evidence, or status.
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md), [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md), [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md), [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md), and [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) for measurable user-value, telemetry, benchmark, UX, and claim gates.

This contract does not replace any Product Truth, source-quality, user-research, benchmark, implementation-status, launch-readiness, or security authority. It is the intake control that decides whether a fresh signal should update those authorities.

## Frontier signal review record

Every material frontier signal uses a `FrontierSignalReview` record:

```text
id
source_cluster
source_urls
source_quality_records
reviewed_at
signal_type: official-capability | public-opinion | practitioner | customer | support | dogfood | runtime | research | generated-summary
frontier_domain: os-recall | screen-action | app-intent | ai-browser | workspace-agent | generic-automation | agent-observability | connected-app | workbench-ux | performance-ux | permission-governance | other
capability_or_opinion_summary
target_user_problem
affected_objective_dimensions
affected_requirements
affected_docs
current_research_position: accept | adapt | reject | defer | research-more | non-action | stale | contradicted
research_native_advantage
copy_risk
second_authority_risk
privacy_security_risk
permission_approval_risk
performance_usability_risk
automation_recovery_risk
user_opinion_synthesis_record_refs
user_research_segment_screener_refs
advanced_opportunity_refs
incubation_refs
advanced_differentiation_benchmark_refs
strategic_bet_scorecard_refs
customer_claim_blockers
semantic_drift_packet_refs
decision_owner
expiry
revisit_trigger
```

A review record can live in this document during specification mode, in the SpecificationSignalDecisionLedger, or in Product Truth after runtime Product Truth exists. It must be discoverable from the affected requirement, opportunity, benchmark, and claim records.

## Promotion ladder

Frontier signals move through this ladder:

1. `seen`: a current official source, public discussion, customer note, support issue, dogfood observation, runtime event, or research reference is identified.
2. `classified`: source type, source quality, confidence, representativeness, bias, expiry, and objective dimension are recorded.
3. `bounded`: affected requirements, affected docs, non-action alternatives, and rejected unsafe shortcuts are named.
4. `synthesized`: public-opinion or user-opinion themes that affect scope link to a current UserOpinionSynthesisRecord, not raw posts alone.
5. `decided`: the signal becomes accept, adapt, reject, defer, research-more, non-action, stale, or contradicted in Product Truth or the specification ledger.
6. `scoped`: accepted or research-more signals create or update an AdvancedOpportunity, benchmark mapping, user-research plan, or implementation decision.
7. `validated`: prototype, dogfood, beta, benchmark, telemetry, outcome, UX, security, accessibility, and release evidence prove the exact scope.
8. `claimed`: CustomerClaimEvidenceRecords permit only exact language supported by current release evidence.

Skipping a step blocks implementation scope expansion unless a governing Architecture Decision Record explicitly accepts the risk and records mitigation, owner, expiry, and customer impact.

## Novelty control rules

Use these rules before changing any requirement or accepted differentiator:

- Do not copy ambient capture, screen history, browser history, clipboard history, keylogging, camera, microphone, broad filesystem indexing, or operating-system window memory.
- Do not copy generic browser or app-agent takeover unless the action is Project-native, source-bound, permissioned, reviewable, and recoverable.
- Do not convert a public thread, generated summary, trend article, vendor launch post, or competitor demo into accepted scope without source-quality classification and Product Truth disposition.
- Do not let a new advanced feature create a second source, document, evidence, workflow, memory, publication, Product Truth, automation, telemetry, benchmark, support, or release-evidence authority.
- Do not use comparative wording when the comparator source is stale, beta-limited, pricing-limited, device-limited, region-limited, or not tested on the same user task.
- Do not count model calls, run count, generated words, action volume, or apparent completion as user value.
- Do not let prototype evidence prove what it cannot prove: paper and clickable prototypes cannot prove runtime reliability, dogfood cannot prove market demand, and synthetic users cannot prove launch usability.

## Current frontier posture

| Frontier domain | Current signal | Research posture | Required next evidence |
|---|---|---|---|
| OS recall and screen action | Microsoft Recall and Click to Do show opt-in local recall, visible controls, screen selection, local analysis, provider handoff, temporary-file behavior, and admin/privacy boundaries. | `adapt`: keep no-ambient-capture native companion, selected-context import, Work Packets, and Project-native context; reject OS-wide memory. | No-ambient-capture tests, privacy-comprehension study, `ADB-002`, `NATIVE-001`, `NATIVE-002`, and CustomerClaimEvidenceRecord limits. |
| App intents and typed action surfaces | Apple App Intents, Windows App Actions, Gemini Connected Apps, and OpenAI Apps SDK show system, app, connected-app, and model-facing action surfaces over typed entities, schemas, availability, and tool metadata. | `adapt`: model Project entities, Commands, Work Packets, Project Atlas, Maintenance, API/SDK/CLI/MCP actions, native/browser companion actions, and Automation Recipe drafts through one server-owned Project Action Surface without giving the OS, assistant, connected app, model, or external client Project authority. | Project Action Surface descriptor benchmark, command/API/SDK/CLI/MCP/native/browser/recipe projection parity, action-comprehension study, permission review, compact tool schema tests, disabled-reason accessibility review, prompt-injection fixtures, and non-action decision against broad cross-app takeover. |
| Workspace agents and custom agents | ChatGPT Workspace Agents, Notion Custom Agents, Rovo, Glean, and Zapier show repeatable agents, schedules, API triggers, tools, access controls, activity logs, usage visibility, evaluation, and lifecycle language. | `adapt`: accept lifecycle-governed Project Automation Recipes, Run Debugger, outcome scorecards, recovery records, and support-safe traces; reject generic agent-builder marketplace scope. | `AUTO-002` through `AUTO-006`, `BENCH-002`, `BENCH-003`, outcome scorecards, recovery records, budget evidence, and support-safe diagnostics. |
| AI browsers and tab context | AI browsers and Edge-style browsing updates point toward tab reasoning, live task context, delegated browsing, journeys, and assistant actions. | `research-more`: use Project Atlas, Worksets, Studio lineage, and selected source imports where they serve Sources, Claims, Documents, Publications, GitHub, or release evidence; reject generic browsing as the product. | Same-task comparison against browser tabs and AI browsers, tab-overload/user-research synthesis, Project Atlas benchmark, Workset benchmark, and no-ambient-capture proof. |
| Connected apps and MCP-style tooling | Connected apps, agent tools, app actions, API triggers, MCP-like servers, and connected Slack/Jira/Notion behavior are becoming normal. | `adapt`: connector actions are explicit Project-scoped capabilities with destination scope, side-effect class, approval class, Activity, audit, recovery, and support-safe diagnostics. | Connector capability records, mutation-boundary enforcement tests, approval-load review, abuse-preflight review, and customer-claim blockers for app coverage. |
| Agent observability, causal diagnostics, and safe repair | Zapier activity/log streams, LangSmith-style observability/evaluation, OpenTelemetry GenAI signals, Sentry Seer, GitHub/Copilot Autofix, PC insights, and current research show growing need for run visibility, trajectory evaluation, suspected causes, repair recommendations, and governance evidence. Public practitioner signals also warn that raw traces can be noisy, expensive, and insufficient to explain why an agent failed. | `adapt`: Research accepts Project Health and Causal Repair over canonical Project records, Activity, Operations, telemetry aggregates, run trajectories, AutomationFailureRecoveryRecords, Product Truth, and release evidence. It rejects raw trace walls, model-only root-cause guesses, generic OS troubleshooting, support-only repair, hidden trace capture, and autonomous self-heal. | `HEALTH-001`, `HEALTH-002`, `TEL-007`, `ADB-009`, `UOC-007`, `CCL-008`, HealthLineageEdge tests, trace-to-finding benchmark, false-cause metrics, diagnostic-waste budget, support-safe redaction tests, repair-outcome validation, and CustomerClaimEvidenceRecord blockers for root-cause or self-healing wording. |
| Choice-respecting AI surfaces | Browser-choice research, AI-browser adoption friction, Stack Overflow agent concerns, and Pew AI concern signals show that advanced AI surfaces can fail by feeling forced, confusing, risky, or hard to disable. | `adapt`: Research makes AI surfaces opt-in, reversible, inspectable, exportable where policy allows, policy-aware, and non-coercive; advanced features must preserve user browser, Project, preference, and companion choices. | Onboarding and settings choice-comprehension tasks, Preference Center reset/export tests, no forced assistant or browser path, disabled-reason accessibility, policy-managed state review, and CustomerClaimEvidenceRecord blockers for trust or choice claims. |

## Required decisions

When a frontier signal is material, record one of these decisions:

- `accept`: update requirements, docs, tests, launch gates, and metadata because the signal improves a Research objective without violating invariants.
- `adapt`: accept the user problem or market direction, but implement only the Project-native version.
- `reject`: explicitly reject the behavior because it violates invariants, worsens trust, weakens reviewability, increases hidden capture, or lacks Research-native advantage.
- `defer`: record the opportunity but block it on missing foundations or validation.
- `research-more`: create a user-research, benchmark, prototype, or support-analysis plan before scope changes.
- `non-action`: preserve why a tempting signal does not change Research.
- `stale`: block the signal until refreshed.
- `contradicted`: route through Product Truth and semantic drift before implementation proceeds.

## Launch gates

Before a frontier-driven capability ships beyond internal preview:

1. A current FrontierSignalReview or Product Truth equivalent exists.
2. Official sources are current or explicitly marked no-change.
3. Public, practitioner, survey, customer, support, dogfood, runtime, research, generated-summary, and synthetic signals have source-quality labels.
4. User-opinion themes that affect scope, benchmark scenarios, outcome claims, Product Truth decisions, launch evidence, or customer-facing language link to reviewed UserOpinionSynthesisRecords.
5. Target and excluded segments are represented by current UserResearchSegmentScreener records where user evidence affects scope.
6. Accepted or research-more signals have AdvancedOpportunity and AdvancedFeatureIncubation records where implementation or prototype work is proposed.
7. Comparative or better-than claims have current AdvancedDifferentiationBenchmarkRecords and same-task evidence.
8. OutcomeMetricDefinitions, StrategicBetScorecards, and OutcomeReviews cover the claimed performance, usability, user-experience, automation, trust, reviewability, recoverability, or advanced-differentiation value.
9. HumanAIInteractionReviews pass for permissions, progress, uncertainty, user control, recovery, accessibility, approval load, and automation outcome value.
10. Semantic drift review confirms requirements, docs, metadata, implementation status, launch evidence, and customer-claim boundaries moved together.
11. CustomerClaimEvidenceRecords block any stronger-than-specification wording not proven by runtime release evidence.

## Documentation update rule

Changes to frontier domains, source basis, promotion ladder, novelty rules, current frontier posture, required decisions, launch gates, or `BENCH-004` ownership must update:

- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md)
- [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- entry indexes and required-reading lists

If a frontier signal contradicts an accepted differentiator, rejected non-action, implementation status, security invariant, launch gate, or customer-facing claim boundary, record the contradiction before implementation proceeds.
