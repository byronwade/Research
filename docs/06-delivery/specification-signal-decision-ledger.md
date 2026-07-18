# Specification signal decision ledger

**Review date:** 2026-07-18
**Status:** specification-mode Product Truth decision ledger, not runtime behavior

Research has many public user-opinion signals and competitor capability signals. The risk is that a long source list becomes decorative: interesting evidence exists, but nobody can tell which product decision it changed, which non-action it justified, or which launch gate it created. This ledger keeps the current specification honest until the runtime Product Truth Board and SignalDecisionLedger exist.

This ledger does not create a second Product Truth authority. It is a specification-mode projection over [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md), [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md), [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md), [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md), [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md), [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md), [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md), [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md), [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md), [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md), and [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md).

Once Product Truth exists at runtime, these records migrate into Product Truth records or link to runtime SignalDecisionLedger entries.

## Source basis

Official and research references reviewed on 2026-07-18:

- [ChatGPT Workspace Agents for Enterprise and Business](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business), [Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/), and [OpenAI Workspace Agent API trigger guidance](https://developers.openai.com/cookbook/examples/chatgpt/workspace_agents/workspace-agents-api-trigger) for repeatable workflows, schedules, sharing, app connections, Slack use, API triggers, approvals, testing, publishing, and workspace RBAC.
- [Notion Custom Agents security features](https://www.notion.com/help/custom-agents-security-features), [Notion Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions), and [How Notion built security into Custom Agents](https://www.notion.com/blog/how-we-built-security-into-custom-agents) for explicit access selection, agent-owned permissions, editor access checks, default-deny setup, sharing visibility, and permission-boundary risk.
- [Microsoft Recall privacy and control](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience), [Microsoft Recall management](https://learn.microsoft.com/en-us/windows/client-management/manage-recall), [Copilot Journeys](https://support.microsoft.com/en-us/microsoft-copilot/copilot-journeys), and [Microsoft Edge AI browsing updates](https://blogs.windows.com/msedgedev/2026/05/13/new-updates-to-edge-across-desktop-and-mobile/) for optional recall, browser task grouping, multi-tab reasoning, history and chat context, screen sharing, and visual cues.
- [Apple advanced App Intents for Siri and Apple Intelligence](https://developer.apple.com/videos/play/wwdc2026/343/) and [new App Intents capabilities](https://developer.apple.com/videos/play/wwdc2026/345/) for app content discovery, on-screen awareness context, cross-app entity travel, cancellation-aware long-running intents, and system action surfaces.
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/), [Windows App Action JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json), and [caller filtering guidance](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-filter-caller) for atomic registered app actions, typed inputs and entities, invocation metadata, availability, caller filtering, and runtime enforcement limits.
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools), [Apps SDK MCP overview](https://developers.openai.com/apps-sdk/concepts/mcp-server), and [Apps SDK reference](https://developers.openai.com/apps-sdk/reference) for model-facing tool contracts, structured input and output schemas, metadata-driven discovery, read-only and destructive annotations, and UI/resource projection.
- [Microsoft PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights), [Microsoft Copilot troubleshooters](https://support.microsoft.com/en-us/support/get-help/copilot-troubleshooters), [LangSmith Observability](https://www.langchain.com/langsmith/observability), [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation), [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/), [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/), [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features), [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity), [Zapier agent statuses](https://help.zapier.com/hc/en-us/articles/36818600959501-Understand-your-agent-s-statuses), [Causely](https://arxiv.org/abs/2605.18327), and [Traccia](https://arxiv.org/abs/2607.14309) for diagnostic, causal, activity, trace, root-cause, and repair signals.
- [Perplexity Comet](https://www.perplexity.ai/comet/) and [Dia](https://www.diabrowser.com/) for AI-browser positioning around delegated browsing, personal-assistant browsing, scattered context, decks, meetings, and live work in tabs.
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for 2026 browser-choice findings about trick wording, obstruction, preselection, nagging, forced action, migration resets, and AI interfaces opening links in Edge despite user browser defaults.
- [How Agents Ask for Permission](https://arxiv.org/html/2607.13718v1), [Oversight Has a Capacity](https://arxiv.org/html/2606.08919v1), and [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/pdf/2605.24309) for current research on agent permissions, enforcement, approval fatigue, human-review capacity, and agent-human security design.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai), [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/), and [Pew worker AI attitudes](https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/) for directional trust, workplace adoption, accuracy concern, and control signals.

Public Reddit, Hacker News, community, and practitioner signals remain directional unless validated through Research user studies, runtime telemetry, dogfood evidence, customer feedback, or benchmark runs. They can create a research-more decision, non-action decision, prototype, or launch gate. They cannot become customer-facing market proof.

## Authority

This ledger operationalizes:

- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) for source-quality classes and allowed decisions;
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md) for watch cadence and stale-source blocking;
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) for FrontierSignalReview records and novelty-control promotion gates before fresh OS, browser, workspace-agent, app-intent, automation, connected-app, permission-governance, or user-opinion signals change scope;
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md) and [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md) for Product Truth records, contradiction handling, and non-actions;
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) for prototype, dogfood, beta, adopt, defer, kill, and non-action gates;
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md) for observed user validation;
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md) for `UserResearchSegmentScreener` records that keep user-opinion, survey, dogfood, beta, support, public-signal, and benchmark-participant evidence mapped to target and excluded segments before ledger decisions are treated as stronger than directional;
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) for the per-surface coverage gaps and blocked claims created by current signal decisions;
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) for `UserOpinionEvidenceItem`, `UserOpinionCodebook`, `UserOpinionCodingAssignment`, and `UserOpinionSynthesisRecord` controls that keep raw opinions, quotes, public signals, support notes, benchmark notes, telemetry follow-up, AI-assisted highlights, negative evidence, contradictions, and blocked claims auditable before they affect ledger decisions;
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md) for baselines, anti-metrics, StrategicBetScorecards, and OutcomeReviews;
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) for same-task comparator baselines and blocked comparative claims when signal decisions affect advanced differentiation;
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) for telemetry-backed signal boundaries, allowed and prohibited properties, event-quality checks, and release-claim limits;
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) for exact claim language, blocked language, allowed scope, CustomerClaimEvidenceRecords, and release evidence floors;
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md) and [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md) for same-change consistency and evidence retention.

If this ledger conflicts with canonical product, architecture, security, delivery, requirement, or implementation-status contracts, correct the governing contract first.

## Record shape

Each row is a `SpecificationSignalDecisionRecord`:

```text
id
source_cluster
source_quality
confidence
representativeness
bias_risks
user_research_segment_screener_refs
user_opinion_synthesis_record_refs
decision
decision_rationale
affected_objective_dimensions
accepted_scope
non_action_or_rejected_scope
affected_requirements
affected_docs
validation_needed
owner_slice
revisit_trigger
```

## Current decision ledger

| ID | Signal cluster | Decision | Accepted scope | Non-action or rejected scope | Validation needed |
|---|---|---|---|---|---|
| `SSD-2026-07-18-001` | OS recall, Edge Journeys, App Intents, and AI-browser resume features show strong market motion toward context resume and screen/tab-aware action. Public sentiment also shows privacy and trust resistance. | `accept-with-narrow-scope` | Project-native Work Packets, Resume Digests, Worksets, Project Atlas, and optional companion grants built from canonical Project records. | OS-wide screenshot recall, browser-history memory, clipboard history, camera, microphone, keylogging, and broad filesystem or window capture. | No-ambient-capture tests, privacy-comprehension studies, Work Packet usefulness, Workset restore correctness, and stale/redacted-state accessibility validation. |
| `SSD-2026-07-18-002` | Workspace agents are becoming shareable, schedulable, connected, testable, and permission-governed work systems. | `accept-with-dependencies` | Project-native Automation Registry, Automation Recipes, Run Debugger, dry-runs, schedules, canaries, outcome scorecards, and Activity-linked run evidence. | Generic agent-builder marketplace, unrestricted app automation, external writes without connector contracts, or prompt-only production changes. | Foundation, Activity, authorization, automation lifecycle, dry-run, replay, fixture creation, cost projection, and accepted-outcome evidence. |
| `SSD-2026-07-18-003` | Current agent-permission research and public practitioner signals show repeated prompts can reduce scrutiny while broad autonomy is unsafe. | `accept` | DelegatedTrustPolicies, ApprovalLoadBudgets, fatigue signals, mutation-boundary enforcement, scoped expiring grants, stale-receipt rejection, and hard-stop action classes. | Endless confirmation dialogs as the only safety control, chat-language approvals, notification-only approvals, or agent-selected oversight. | Approval fatigue tests, grant revocation tests, stale policy and payload drift tests, hard-stop bypass tests, and support-linked reversal review. |
| `SSD-2026-07-18-004` | AI browsers and OS assistants are moving toward multi-tab reasoning, decks, live work, screen sharing, and delegated browsing. | `research-more` | Evidence-aware Project Atlas, Studio artifacts with source dependencies, Workset tabs/panes, and Project-scoped browser/companion imports where they serve Sources, Documents, Claims, Publications, GitHub, or release evidence. | A generic browser, shopping, finance, email, calendar, or web-task delegate disconnected from Project evidence and review. | User studies comparing Project-native impact navigation versus search/browser tabs, artifact lineage tests, connector side-effect gates, and non-action review for generic browsing. |
| `SSD-2026-07-18-005` | User signals around AI accuracy, hallucinations, source quality, and public AI trust remain mixed even as usage grows. | `accept` | Trust Dashboard, exact citations, supported/unsupported/stale/disputed Claim states, model council disagreement, citation correction, abstention, and publication blockers. | Customer-facing claims that Research, any model, or public user sentiment proves correctness without runtime evidence. | Retrieval recall fixtures, citation precision, unsupported-claim blocking, source-quality review, observed correction tasks, and release-candidate Trust evidence. |
| `SSD-2026-07-18-006` | Users value automation when it saves real effort, but public signals call out cost surprise, brittle triggers, silent partial failure, and opaque traces. | `accept-with-guardrails` | Deterministic preflight, trigger dedupe, dry-run review, cost projection, run debugger, support-safe diagnostics, outcome scorecards, and adaptive recommendations. | Run count, generated words, model calls, token spend, or "completed" status as automation success. | Cost per accepted outcome, accepted/rejected/edited/reversed output tracking, replay safety, quiet-failure fixtures, and budget anomaly review. |
| `SSD-2026-07-18-007` | Window, tab, workspace, and browser products show setup and task-continuity demand, while public signals split between usefulness and confusion. | `accept-with-research-more-for-adaptation` | Task-aware Spatial Workbench and Worksets with evidence-aware splits, pane purpose, progressive hydration, stale labels, redaction, and accessible alternatives. | Decorative global graph or layout-first OS shell detached from Sources, Claims, Documents, Activity, and permissions. | Setup-time reduction, tab-clutter reduction, Workset restore errors, stale/redacted pane comprehension, layout-suggestion correction and dismissal, keyboard/touch/screen-reader validation. |
| `SSD-2026-07-18-008` | Public feedback-board and user-opinion signals are useful but biased, self-selected, and easily overpromoted. | `accept-as-governance-control` | Product Truth Board, source-quality records, SignalDecisionLedger entries, NonActionDecisions, contradiction radar, and current-source watch items. | Votes, Reddit threads, Hacker News comments, surveys without methodology, or generated summaries as direct roadmap authority. | Source-quality sweeps, confidence and representativeness labels, bias notes, affected-document links, non-action decisions, and semantic drift packets. |
| `SSD-2026-07-18-009` | Microsoft Edge Journeys and AI browsing show real task-continuity pressure, while Mozilla's 2026 browser-choice research shows that OS and browser AI surfaces can also override or steer user choices. | `accept-as-choice-guardrail` | Choice-respecting AI surfaces: opt-in activation, visible disable controls, no forced browser or assistant path, import/export where policy allows, no silent migration reset, and clear explanation when an AI surface is unavailable or policy-managed. | Forced default assistant, browser lock-in, hidden AI activation, nag loops, migration resets that silently re-enable Research surfaces, or copy that treats opt-in controls as friction to remove. | Choice-comprehension study, settings and onboarding task success, preference reset/export tests, disabled-reason accessibility, admin policy walk-through, and CustomerClaimEvidenceRecord blockers for "users trust it" or "respects choice" wording. |
| `SSD-2026-07-18-010` | Stack Overflow 2025 reports high AI-tool usage but low accuracy trust and strong agent security/privacy concern, while Pew 2025-2026 signals show broader public and worker concern about AI use. | `accept-as-trust-evidence-floor` | Treat trust, privacy, accuracy, agency, and control as launch evidence dimensions for every automation, companion, workspace, and AI-surface claim. | Adoption, productivity, or usage signals as proof that users trust agents, accept autonomy, or want broad AI surfaces. | Source-quality labels, screened user segments, observed trust and control tasks, negative-evidence review, accuracy and privacy comprehension, and OutcomeReviews before any stronger-than-specification trust or productivity claim. |
| `SSD-2026-07-18-011` | Agent-permission research and public local-agent discussions converge on a practical failure mode: prompt-only approvals and broad system access are insufficient when agents can delete, spend, email, publish, or mutate records. | `accept-as-structural-enforcement` | Runtime-enforced tool-call gates, tool risk classes, narrow grants, policy snapshots, payload hashes, revocation, stale-receipt rejection, and support-safe audit records. | System-prompt approvals, chat-language consent, agent-selected oversight, global filesystem access, or full-system memory as the default path to usefulness. | Permission-policy tests, destructive-tool boundary fixtures, approval-fatigue simulations, grant revocation tasks, cross-Project isolation tests, and hard-stop bypass tests. |
| `SSD-2026-07-18-012` | Apple App Intents, Windows App Actions, Gemini Connected Apps, OpenAI Apps SDK, and public MCP/automation practitioner signals show action surfaces becoming assistant, OS, connected-app, and model-tool integration points. The same signals show failure modes around vague context, overlarge tool catalogs, prose outputs, hidden handler behavior, and weak regression tests for tool descriptions. | `accept-as-typed-project-action-surface` | Project Action Surface: a server-owned projection of typed Project actions over Sources, Claims, Documents, Activity, Work Packets, Project Atlas, Maintenance, Automation Recipes, Impact Reports, settings, support, API, SDK, CLI, MCP, native companion, browser extension, and connected-app surfaces. Every action exposes descriptor refs, input and result schemas, side-effect class, approval class, preflight, expected-version policy, idempotency, disabled reasons, Activity, audit, and projection policy. | Broad cross-app takeover, OS or assistant authority over Project state, prompt-only direct mutation, generated handler code, source-defined actions, tool descriptions treated as non-breaking prose, connector writes without side-effect contracts, and action volume or schema size as value proof. | Project Action Surface descriptor schema tests, command/API/SDK/CLI/MCP/native/browser/recipe projection parity, compact tool metadata and lazy-load tests, action-comprehension study, app-intent-style same-task benchmark, prompt-injection fixtures, disabled-reason accessibility review, preflight denial tests, and CustomerClaimEvidenceRecord blockers for "agent-ready actions" or "safe app actions". |
| `SSD-2026-07-18-013` | PC diagnostics, agent activity logs, AI observability, trajectory evaluation, RCA, autofix, and public practitioner signals show a gap between seeing traces and knowing what safely caused, broke, or repaired user work. | `accept-as-causal-project-health-and-repair` | Project Health and Causal Repair: HealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, RepairPlaybooks, repair dry-runs, RepairRuns, SupportDiagnosticBundles, and RepairOutcomeObservations over authorized Project records, Activity, Operations, telemetry aggregates, run trajectories, Product Truth, release evidence, and automation recovery records. Findings preserve observed signals, suspected causes, cause confidence, counterevidence, unknowns, diagnostic-waste class, false-cause risk, repair eligibility, approval class, and outcome proof. | Raw trace wall as the Health product, telemetry volume as value, model-only "root cause", autonomous background self-heal, generic OS or device troubleshooting, support-only repair, raw prompt or source trace capture in analytics, AI-generated PRs or repairs without owner review and tests, or customer claims that Research fixes Project health before runtime evidence. | HealthLineageEdge tests, trace-to-finding benchmarks, trajectory comparison fixtures, content-minimized OpenTelemetry and GenAI redaction tests, false-cause and false-positive metrics, diagnostic-waste budgets, repair dry-run and outcome validation, support-bundle minimization, user comprehension studies, and CustomerClaimEvidenceRecord blockers for "AI root cause", "self-healing Projects", "debuggable agents", and "better than observability tools". |

## Decision implications

The current ledger reinforces these product decisions:

- Advanced features should be Project-native, evidence-linked, and outcome-measured before they are called differentiators.
- User opinion is valuable for discovery and risk framing, but it must flow through source-quality labels, screened segment records, Product Truth decisions, and validation gates.
- Automation value is accepted work with bounded risk, not activity volume.
- User choice is an advanced-product surface, not a compliance afterthought: AI features that improve performance or automation still lose product value when activation, defaults, browser paths, data use, or disable controls feel coercive.
- Performance and UX claims need baselines, task evidence, and guardrails against trust, accessibility, privacy, recovery, approval-load, and support regressions.
- Research should reject generic OS recall and generic browser takeover while accepting narrowly scoped companion, Work Packet, Workset, Atlas, recipe, and debugger features that improve sourced Project work.
- Typed action surfaces are an accepted pattern only when they project existing Project authority, not when they let an OS assistant, connected app, model tool, native companion, browser extension, API client, SDK, MCP server, or recipe invent a separate action authority.
- Causal Project Health is accepted only when it converts authorized evidence into reviewable findings, counterevidence, unknowns, safe repair, and outcome proof instead of exposing raw traces, hidden telemetry, or unsupported AI root-cause claims.

## Launch gates

Before customer-facing claims or launch promotion for a signal-driven capability:

- every affected signal has a current SpecificationSignalDecisionRecord or runtime Product Truth equivalent;
- every fresh frontier signal that could change scope, accepted differentiators, prototypes, benchmarks, implementation plans, or public claims has a current FrontierSignalReview or runtime Product Truth equivalent;
- accepted and research-more records link to affected requirements, docs, owner slices, validation evidence, and revisit triggers;
- non-actions are explicit when Research rejects a tempting competitor pattern;
- public-opinion and practitioner signals remain labeled as directional unless stronger evidence exists;
- user-opinion, survey, dogfood, beta, support, public-signal, and benchmark-participant records that affect scope link to current `UserResearchSegmentScreener` records with target and excluded segment limits;
- user-opinion themes that affect scope, validation gates, benchmark scenarios, Product Truth decisions, launch evidence, or customer-facing claims link to reviewed `UserOpinionSynthesisRecord` records with current codebook version, coding assignments, AI-assist disclosure, negative-evidence review, contradiction state, and blocked-claim scope;
- external watch items are current or marked stale with blocked claim scope;
- StrategicBetScorecards and OutcomeReviews exist for performance, usability, UX, automation, trust, reviewability, recoverability, or advanced-differentiation claims;
- AdvancedDifferentiationBenchmarkRecords exist for advanced or better-than OS, browser, workspace-agent, app-intent, generic automation, generic agent, or agent-observability claims;
- CustomerClaimEvidenceRecords exist for every stronger-than-specification public claim and their allowed language excludes unsupported source, segment, availability, beta, performance, privacy, testimonial, API, SDK, MCP, or advanced-feature scope;
- semantic drift review confirms affected docs, routing, status, launch evidence, and metadata moved together.

## Documentation update rule

Changes to signal decisions, accepted scope, non-actions, source-quality policy, source clusters, affected requirements, validation gates, or revisit triggers must update:

- [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md)
- [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`external-signal-refresh-and-competitive-watch.md`](external-signal-refresh-and-competitive-watch.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-research-segment-and-screener-matrix.md`](user-research-segment-and-screener-matrix.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
