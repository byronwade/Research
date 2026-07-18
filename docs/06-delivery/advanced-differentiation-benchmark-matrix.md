# Advanced differentiation benchmark matrix

**Review date:** 2026-07-18
**Status:** comparative benchmark and release-claim control, not runtime behavior

Research should become more than a documented research app, but "advanced" is not a launch claim. Operating systems, browsers, workspace agents, automation platforms, and agent-observability tools are all adding recall, screen context, tab reasoning, app intents, workspaces, repeatable agents, and debugging traces. Research can only claim meaningful differentiation when it proves the same target user task performs better inside Project-native evidence, document, source, permission, Activity, automation, and Product Truth controls.

This matrix defines the comparative proof required before Research can say an advanced surface is more useful, safer, faster, more controllable, more reviewable, less fatiguing, or better than an OS, browser, workspace-agent, generic automation, or generic agent-observability baseline.

## Source basis

Official comparator references reviewed on 2026-07-18:

- [Microsoft Support: Privacy and control over Recall](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience) for optional Recall snapshots, local processing, Windows Hello controls, pause, filtering, deletion, and no-continuous-video boundaries.
- [Microsoft Edge Blog: desktop and mobile AI browsing updates](https://blogs.windows.com/msedgedev/2026/05/13/new-updates-to-edge-across-desktop-and-mobile/) for Copilot tab reasoning, mobile tab context, browsing-history context, Copilot Vision, and Journeys.
- [Microsoft PowerToys Workspaces](https://learn.microsoft.com/en-us/windows/powertoys/workspaces) for app and window capture, launch, positioning, CLI arguments, shortcuts, and launch status.
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/), [Action definition JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json), and [App Action caller filtering](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-filter-caller) for atomic action registration, typed entities, input combinations, availability, invocation, and caller-query limits.
- [Apple Developer: Explore advanced App Intents features for Siri and Apple Intelligence](https://developer.apple.com/videos/play/wwdc2026/343/) for App Intents, semantic indexing, structured search, entity ownership, and on-screen awareness.
- [Apple Developer: Apple Intelligence for developers](https://developer.apple.com/apple-intelligence/) for personal context, app actions, on-screen awareness, semantic index, Shortcuts assembly, Foundation Models, and Visual Intelligence.
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools), [Apps SDK MCP overview](https://developers.openai.com/apps-sdk/concepts/mcp-server), and [Apps SDK reference](https://developers.openai.com/apps-sdk/reference) for MCP-backed tools, input and output schemas, structured content, metadata-driven discovery, read-only and destructive annotations, and UI projection.
- [Gemini Connected Apps](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en) for permissioned connected apps, app selection, and account or device variation.
- [Microsoft PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights), [Microsoft Copilot troubleshooters](https://support.microsoft.com/en-us/support/get-help/copilot-troubleshooters), [LangSmith Observability](https://www.langchain.com/langsmith/observability), [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation), [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/), [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/), [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features), [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity), [Zapier agent statuses](https://help.zapier.com/hc/en-us/articles/36818600959501-Understand-your-agent-s-statuses), [Causely](https://arxiv.org/abs/2605.18327), and [Traccia](https://arxiv.org/abs/2607.14309) for diagnostic, trace, trajectory, causal, RCA, and AI-assisted repair baselines.

Research and user-attitude references reviewed on 2026-07-18:

- [Future of Work with AI Agents](https://futureofwork.saltlab.stanford.edu/) and [WORKBank paper](https://arxiv.org/abs/2506.06576) for automation versus augmentation expectations and human-agency variation by task and occupation.
- [Reddit discussion of agent observability gaps](https://www.reddit.com/r/AI_Agents/comments/1qv6wow/observability_is_broken/) for practitioner complaints about logs without invariants, trace/span structure, replay, deterministic tool mocks, and online checks.
- [Reddit discussion of Power Automate Copilot flow-authoring context gaps](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/) for practitioner concerns about generic steps, missing flow context, hallucinated connector behavior, and the need for actual flow definitions.
- [Reddit discussion of MCP structured output](https://www.reddit.com/r/mcp/comments/1uw8gjr/the_best_thing_i_did_for_my_mcp_server_was_stop/) and [MCP schema context-budget discussion](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/) for directional practitioner signals about structured results, concise descriptors, schema loading, routing accuracy, latency, and token cost.
- [Hacker News discussion of Apache Burr](https://news.ycombinator.com/item?id=48477400) for practitioner concerns that agent frameworks can obscure task-specific code and make control flow harder to maintain.
- [Reddit discussion of LangChain agent debugging gaps](https://www.reddit.com/r/LangChain/comments/1udre9c/im_curious_how_people_building_ai_agents_handle/), [AI agents in production](https://www.reddit.com/r/AI_Agents/comments/1rtiplc/running_ai_agents_in_production_what_does_your/), [observability noise and cost](https://news.ycombinator.com/item?id=46617744), [causal history for agents](https://www.reddit.com/r/AI_Agents/comments/1uw82dv/you_need_to_go_beyond_mere_observability_ai/), [trajectory evaluation](https://www.reddit.com/r/LangChain/comments/1rh2cvq/evaluating_langchain_agents_beyond_final_output/), and [durable state and action ledgers](https://www.reddit.com/r/AI_Agents/comments/1uf7ihq/does_running_a_reliable_production_agent_with/) for directional signals about why raw traces, success status, and log volume do not prove diagnosis or repair quality.

These references set comparator baselines and failure modes. They do not prove Research demand, superiority, usability, accessibility, trust, automation value, or launch readiness. Public discussions are directional inputs only and follow [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md).

## Authority and relationship

This matrix governs `BENCH-003` and supports `BENCH-001`, `BENCH-002`, `BENCH-004`, `READY-001` through `READY-004`, `TRUTH-001` through `TRUTH-003`, `PERF-001` through `PERF-006`, `AUTO-002` through `AUTO-005`, `UX-003` through `UX-006`, `LAYOUT-001`, `LAYOUT-002`, `NATIVE-001`, `NATIVE-002`, `MAP-001`, and `MAP-002`.

It is a projection over:

- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)

If a differentiator lacks a current record in this matrix, it can remain a specification idea, prototype, or non-action. It cannot become a comparative product claim.

## Advanced differentiation benchmark record

Every accepted advanced differentiator that might support comparative wording creates an `AdvancedDifferentiationBenchmarkRecord`:

```text
id
differentiator
status: missing | planned | active | passed-limited | release-eligible | failed | stale | contradicted | excluded
comparator_class: os-recall | screen-action | browser-journey | workspace-layout | app-intent | generic-agent | generic-automation | agent-observability
comparator_sources
source_quality_records
reviewed_at
frontier_signal_review_refs
target_user_job
target_segments
user_research_segment_screener_refs
user_opinion_coverage_refs
user_opinion_synthesis_refs
research_native_advantage
non_action_alternative
objective_dimensions
comparator_task
research_task
baseline_method
good_event_definition
anti_metrics
measured_metrics
required_telemetry
required_benchmark_scenarios
required_human_ai_review
required_outcome_scorecard
required_customer_claim_record
Product Truth links
blocked_claims_until_pass
owner_slice
release_evidence_refs
revisit_trigger
```

A record is `passed-limited` only when the limits are explicit, user-visible, linked to Product Truth, excluded from broader claims, and named in the release evidence bundle. A record is `release-eligible` only when the same-task comparison, anti-metrics, telemetry, OutcomeReview, CustomerClaimEvidenceRecord, Product Truth state, and release evidence agree for the exact claim scope.

## Evidence floor

An `AdvancedDifferentiationBenchmarkRecord` can support release scope only when all evidence below exists:

1. Current official comparator sources, or an explicit no-change watch record, define the baseline capability and date.
2. Frontier-driven comparator or feature changes have current FrontierSignalReviews or Product Truth equivalents.
3. Public user-opinion or practitioner signals have SourceQualityRecords and are labeled directional, repeated-signal, validated-theme, stale, or contradicted.
4. Target user segments have current `UserResearchSegmentScreener` records and excluded segments.
5. User-opinion themes behind the differentiator link to reviewed UserOpinionSynthesisRecords with codebook version, coding assignments, negative-evidence review, contradiction state, AI-assist disclosure where applicable, owner, expiry, and blocked claims.
6. The same user job is tested in Research and in the comparator class, or the reason same-task comparison is impossible is documented.
7. The record measures first useful state, setup steps, recovery, stale or redacted state comprehension, permission comprehension, privacy comprehension, approval burden, accepted outcome, debug/replay usefulness, accessibility, and mobile/offline behavior where relevant.
8. Anti-metrics pass. Research may not win by capturing more ambient data, hiding uncertainty, increasing irreversible side effects, increasing approval fatigue, leaking private content, or counting activity volume as value.
9. ProductTelemetryEventSpecs, ExperienceBenchmarkRuns, HumanAIInteractionReviews, OutcomeReviews, and CustomerClaimEvidenceRecords agree with the claimed scope.
10. Product Truth has no unresolved launch-impacting contradiction touching the differentiator, comparator, evidence, or claim language.

## Benchmark matrix

All rows are specification controls until runtime evidence exists.

| ID | Differentiator | Comparator baseline | Same-task benchmark | Required proof | Blocked claims until pass |
|---|---|---|---|---|---|
| `ADB-001` | Evidence-native Work Packets and Resume Digests | OS Recall, browser Journeys, browser history, tab groups, and workspace restore. | Resume a sourced Project after interruption, changed source, permission loss, stale claim, and missed blocker. | `bench-resume-workset-focus`, `TEL-004`, `TEL-005`, `UOC-005`, OutcomeReview, Product Truth decision, accessible restore task, and current comparator watch item. | "Better than OS recall", "keeps users oriented", "reduces tab overload", "Project memory beats browser history". |
| `ADB-002` | No-ambient-capture companion and browser entry points | Recall snapshots, Click to Do style screen action, Copilot Vision, Apple on-screen awareness, Visual Intelligence, and generic screen-share assistants. | Capture selected or active context, preview it, route it to a Project, revoke grant, and verify no ambient capture after revocation. | `bench-native-companion-no-ambient`, `TEL-006`, `NATIVE-001`, `NATIVE-002`, security/privacy review, user comprehension task, prohibited-telemetry test, and support-safe diagnostic review. | "No hidden capture", "privacy-safe OS integration", "trusted native companion", "safer than screen-aware AI". |
| `ADB-003` | Scenario-before-side-effect and Reversible Work | App Intents, Shortcuts, Power Automate, Zapier, generic agent actions, and AI browser actions. | Preview a high-risk change, compare unknowns, reject a stale plan, apply an accepted candidate, observe outcome, and recover or compensate. | `bench-scenario-reversible-change`, `TEL-007`, stale-plan rejection tests, side-effect ledger, recovery evidence, approval-load review, and HumanAIInteractionReview. | "Safe what-if automation", "reversible work", "automation without surprises", "safer than generic agents". |
| `ADB-004` | Automation Registry, Run Debugger, replay fixtures, and outcome scorecards | Generic agent logs, workflow execution history, observability dashboards, and framework traces. | Diagnose a failed automation, find the policy/tool/model divergence, create a replay fixture, and decide whether the run created accepted value. | `bench-automation-dry-run-debug-outcome`, `TEL-003`, redacted trace tests, fixture safety, failure-taxonomy coverage, cost per accepted outcome, and support-safe debugger review. | "Debuggable agents", "observability that explains what to fix", "automation saves time", "outcome-scored automation". |
| `ADB-005` | Task-aware Spatial Workbench and Worksets | PowerToys Workspaces, Stage Manager, browser workspaces, tab groups, and window managers. | Restore a research work context with evidence panes, draft documents, stale resources, redacted resources, accessibility constraints, and mobile/narrow layout changes. | `bench-resume-workset-focus`, `TEL-005`, Workset restore budgets, keyboard and screen-reader task, stale/redacted pane recovery, and tab/workspace comparator baseline. | "Advanced workspace UX", "reduces setup time", "better than window workspaces", "less context switching". |
| `ADB-006` | Product Truth and contradiction-aware documentation maintenance | Generic notes, docs, chat summaries, agent memory, and standalone knowledge-base automation. | Correct a contradiction and verify affected requirements, docs, release evidence, customer claims, Product Truth state, and non-action decisions update together. | `bench-trust-product-truth-contradiction`, `TEL-008`, semantic drift review, CustomerClaimEvidenceRecord, source-quality record, and release-evidence snapshot. | "Keeps docs current", "prevents roadmap drift", "self-maintaining documentation", "truth-aware operating layer". |
| `ADB-007` | Project Atlas and Impact Reports | Global search, browser history, OS recall search, generic knowledge graphs, dependency graphs, and workspace-agent summaries. | Find downstream impacts before a source, parser, model, recipe, document, GitHub, policy, or release-candidate change proceeds. | Project Atlas benchmark scenario, `TEL-004`, `TEL-007`, `MAP-001`, `MAP-002`, path-query accuracy, redaction review, and release-candidate impact evidence. | "Understands project impact", "finds what changes before you do", "better than search", "safer release planning". |
| `ADB-008` | Typed Project Action Surface | Apple App Intents, Windows App Actions, Gemini Connected Apps, OpenAI Apps SDK, generic MCP servers, command palettes, Shortcuts, Power Automate, and generic agent tool calls. | Discover, inspect, simulate, approve, execute, deny, retry, and audit the same Project action from Command Center, API, SDK, CLI, MCP, native companion, browser extension, and Automation Recipe contexts while preserving expected versions, disabled reasons, side-effect class, approval class, idempotency, Activity, and recovery. | Project Action Surface descriptor schema tests, projection parity fixtures, compact/lazy-loaded tool metadata benchmarks, prompt-injection fixtures, `UX-004`, `API-001`, `API-002`, `AUTO-004`, `AUTO-005`, `UOC-010`, `UOC-014`, `TEL-010`, HumanAIInteractionReview, and CustomerClaimEvidenceRecord. | "Agent-ready actions", "safe app actions", "better than App Intents", "better than Windows App Actions", "drop-in MCP automation", "natural language can run safe actions". |
| `ADB-009` | Project Health and Causal Repair | LangSmith-style observability/evaluation, OpenTelemetry dashboards, Sentry Seer, GitHub/Copilot Autofix, Zapier activity/statuses, generic workflow logs, and Microsoft PC diagnostics/troubleshooters. | Diagnose a slow, stale, blocked, quiet-wrong, or failed Project workflow; distinguish observed signal from suspected cause; inspect counterevidence and unknowns; dry-run a repair; validate the outcome; and create a support-safe bundle without exposing raw private content. | `HEALTH-001`, `HEALTH-002`, `TEL-007`, `UOC-007`, `CCL-008`, HealthLineageEdge tests, trace-to-finding fixture, trajectory comparison benchmark, false-cause and false-positive metrics, diagnostic-waste and cost budget, support-safe redaction tests, repair dry-run evidence, RepairOutcomeObservation, HumanAIInteractionReview, and CustomerClaimEvidenceRecord. | "AI root cause", "self-healing Projects", "autofixes Project health", "debuggable agents", "better than observability tools", "reliable repair", "zero-touch repair". |

## Comparator task rules

Comparator tasks must be concrete enough that another reviewer can rerun them:

- name the comparator product, version or service state, date, account or device class, plan, feature flag, and known limitations;
- use the same starting work artifact, privacy constraint, and user job where allowed by license and policy;
- record setup steps and grant prompts before the task begins;
- preserve screenshots, trace metadata, or notes only when policy allows and private content is minimized;
- separate factual capability observations from opinions about quality;
- label any synthetic comparator task or simulated competitor task as synthetic and non-launch proof;
- rerun or expire the record when official comparator behavior, pricing, beta status, device availability, policy, or public claim language changes.

## Claim boundary

Comparative wording is blocked unless the exact `AdvancedDifferentiationBenchmarkRecord` is current and release-eligible:

- "better than OS recall";
- "safer than screen-aware AI";
- "faster than browser agents";
- "reduces tab overload";
- "less approval fatigue";
- "debuggable agents";
- "trusted autonomy";
- "advanced workspace UX";
- "prevents documentation drift";
- "keeps users oriented";
- "automation that saves time".

When evidence is incomplete, allowed language is limited to specification wording such as "Research is designed to compare Project-native resume against OS and browser baselines before launch claims are made."

## Launch gates

Before an advanced differentiator ships beyond internal preview:

1. Its `AdvancedOpportunity` and `AdvancedFeatureIncubation` records are current.
2. Its FrontierSignalReviews or Product Truth equivalents are current where fresh frontier signals affected scope, comparator selection, or claim language.
3. Its `AdvancedDifferentiationBenchmarkRecord` is `passed-limited` or `release-eligible`.
4. A same-task Research benchmark and comparator baseline are attached or the non-comparability rationale is approved by Product Truth.
5. ProductTelemetryEventSpecs cover the measured user-value questions and prohibit ambient source, screen, browser-history, clipboard, file-path, and prompt-body capture unless a separate diagnostic workflow allows it.
6. HumanAIInteractionReviews pass for permissions, progress, uncertainty, user control, recovery, accessibility, approval load, and automation outcome value.
7. OutcomeReviews show improvement in declared user outcomes without anti-metric regression.
8. UserOpinionSynthesisRecords are current for opinion-backed differentiator claims and cannot be public-signal-only, generated-summary-only, or synthetic-user-only.
9. CustomerClaimEvidenceRecords block overbroad public wording and name the comparator, scope, method, denominator, date, and excluded cases for any comparative claim.
10. ReleaseEvidenceBundles include the benchmark record, comparator source snapshot, FrontierSignalReview refs where applicable, limitations, watch expiry, and revisit trigger.

## Documentation update rule

Changes to advanced differentiators, comparator classes, benchmark IDs, evidence floors, blocked comparative claims, launch gates, or `AdvancedDifferentiationBenchmarkRecord` fields must update:

- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- entry indexes and required-reading lists

If the comparator source changes before release, the benchmark record becomes stale until refreshed or explicitly waived as a non-comparative claim.
