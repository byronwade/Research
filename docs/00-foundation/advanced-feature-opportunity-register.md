# Advanced feature opportunity register

**Review date:** 2026-07-18
**Status:** foundation and Product Truth prioritization contract, not implemented runtime behavior

Research needs advanced features that beat generic operating-system, browser, and workspace-agent behavior, but novelty is not a product strategy. This register defines how advanced opportunities are selected, rejected, deferred, researched, validated, and kept consistent with canonical requirements.

This document does not approve implementation by itself. It turns source-quality-labeled external capability evidence, public user-opinion signals, user-research findings, dogfood evidence, Product Truth decisions, and semantic drift checks into an ordered opportunity register so Research can improve performance, usability, user experience, and automation without creating a second authority or drifting into unsafe scope.

## Source basis

Official capability references reviewed on 2026-07-18:

- [Microsoft Learn: Manage Click to Do](https://learn.microsoft.com/en-us/windows/client-management/manage-click-to-do) for screen-aware local analysis, on-device actions, policy controls, app handoff, and temporary-file behavior.
- [Microsoft Learn: WindowsAI policy CSP](https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-windowsai) for managed-device Recall defaults and administrator control over Windows AI components.
- [Apple Developer: Explore advanced App Intents features for Siri and Apple Intelligence](https://developer.apple.com/videos/play/wwdc2026/343/) for App Intents, semantic indexing, structured search, on-screen awareness, interaction donations, and system action surfaces.
- [Apple Developer: App Intents](https://developer.apple.com/documentation/appintents), [App entities](https://developer.apple.com/documentation/appintents/app-entities), and [Adopting App Intents to support system experiences](https://developer.apple.com/documentation/appintents/adopting-app-intents-to-support-system-experiences) for app-owned actions and entities exposed across system experiences.
- [Microsoft Learn: App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/), [Action definition JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json), and [Toggle availability of an App Action](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-availability) for typed action registration, inputs, outputs, availability, and invocation metadata.
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools), [Apps SDK MCP overview](https://developers.openai.com/apps-sdk/concepts/mcp-server), and [Apps SDK reference](https://developers.openai.com/apps-sdk/reference) for tool contracts, input/output schemas, discovery metadata, read-only and destructive hints, and structured content.
- [Apple Support: Use Apple Intelligence in Shortcuts on iPhone](https://support.apple.com/guide/iphone/use-apple-intelligence-in-shortcuts-iph78c41eaf8/ios) for Shortcuts model actions and user-selectable model paths.
- [Google Help: Use and manage Connected Apps in Gemini](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en) for permissioned app connections, app selection, connected-app settings, and device or account variation.
- [Google Help: Search your screen with Circle to Search](https://support.google.com/websearch/answer/14508957?hl=en) for screen-search permission requirements.
- [Microsoft Edge for Business: AI browsing](https://www.microsoft.com/en-us/edge/business/ai-browsing) and [Microsoft Edge Blog: desktop and mobile AI browsing updates](https://blogs.windows.com/msedgedev/2026/05/13/new-updates-to-edge-across-desktop-and-mobile/) for cross-tab reasoning, data-protection framing, browsing-history and past-chat context, journeys, and mobile tab reasoning.
- [Perplexity Comet](https://www.perplexity.ai/comet/) and [Dia](https://www.diabrowser.com/) for AI-browser positioning around delegated browsing, scattered context, live work, decks, meetings, and work objects in tabs.
- [Carnegie Mellon University: Overcoming Tab Overload](https://www.cmu.edu/news/stories/archives/2021/may/overcoming-tab-overload.html) for research evidence that browser tabs create attention and organization friction.
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for browser-choice, migration reset, AI-interface routing, and harmful-design signals that affect whether advanced AI surfaces preserve user agency.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai), [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/), and [Pew worker AI attitudes](https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/) for current AI adoption, productivity, trust, accuracy, security, privacy, worry, and overwhelm signals.
- [Microsoft Support: PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights), [Microsoft Support: Copilot troubleshooters](https://support.microsoft.com/en-us/support/get-help/copilot-troubleshooters), [LangSmith Observability](https://www.langchain.com/langsmith/observability), [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation), [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/), [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/), [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features), [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity), [Zapier agent statuses](https://help.zapier.com/hc/en-us/articles/36818600959501-Understand-your-agent-s-statuses), [Causely](https://arxiv.org/abs/2605.18327), and [Traccia](https://arxiv.org/abs/2607.14309) for current signals around diagnostics, observability, agent trajectories, RCA, AI-assisted repair, and trace governance.

Directional public user and practitioner signals reviewed on 2026-07-18:

- [Hacker News discussion of AI waiting and vigilance fatigue](https://news.ycombinator.com/item?id=46934404).
- [Hacker News discussion of AI agent permission fatigue](https://news.ycombinator.com/item?id=48308376).
- [Hacker News discussion of sandbox and filesystem permission expectations](https://news.ycombinator.com/item?id=47550282).
- [Hacker News discussion of approval gates and agent resume behavior](https://news.ycombinator.com/item?id=47096253).
- [Reddit discussion of Windows Recall usefulness and safety](https://www.reddit.com/r/Windows11/comments/1kuywg3/should_i_enable_recall/).
- [Reddit discussion of Shortcuts power, authoring friction, limitations, and bugs](https://www.reddit.com/r/shortcuts/comments/1ldedpg/i_feel_like_the_shortcuts_app_is_so_powerful_and/).
- [Reddit discussion of Power Automate Copilot flow-authoring context gaps](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/).
- [Reddit discussion of MCP structured-output and prose-output tradeoffs](https://www.reddit.com/r/mcp/comments/1uw8gjr/the_best_thing_i_did_for_my_mcp_server_was_stop/).
- [Reddit discussion of MCP tool schemas, routing, context budget, and lazy loading](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/).
- [Reddit discussion of Stage Manager usefulness, slowness, and workspace expectations](https://www.reddit.com/r/MacOS/comments/1r5tpr0/i_finally_understand_stage_manager_its_powerful/).
- [Reddit discussion of tab overload, mental clutter, and project folders](https://www.reddit.com/r/productivity/comments/1nxwbhw/how_do_you_all_manage_tab_overload_without/).
- [Reddit discussion of LangChain agent debugging gaps](https://www.reddit.com/r/LangChain/comments/1udre9c/im_curious_how_people_building_ai_agents_handle/).
- [Reddit discussion of AI agents in production](https://www.reddit.com/r/AI_Agents/comments/1rtiplc/running_ai_agents_in_production_what_does_your/).
- [Hacker News discussion of observability noise and cost](https://news.ycombinator.com/item?id=46617744).
- [Reddit discussion of causal history for agents](https://www.reddit.com/r/AI_Agents/comments/1uw82dv/you_need_to_go_beyond_mere_observability_ai/).
- [Reddit discussion of trajectory evaluation beyond final output](https://www.reddit.com/r/LangChain/comments/1rh2cvq/evaluating_langchain_agents_beyond_final_output/).
- [Reddit discussion of production agent durable state and action ledgers](https://www.reddit.com/r/AI_Agents/comments/1uf7ihq/does_running_a_reliable_production_agent_with/).

Public user-opinion sources are directional discovery evidence only and must follow [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md). They can raise an opportunity, sharpen a non-action, or require user research. They cannot prove demand, usability, trust, accessibility, production readiness, or customer-facing claims.

## Authority

This register operationalizes:

- [`user-opinion-and-competitive-signal-audit.md`](user-opinion-and-competitive-signal-audit.md) for official capability and public-signal intake;
- [`ai-work-os-and-agent-automation-signal-audit.md`](ai-work-os-and-agent-automation-signal-audit.md) for workspace-agent and automation-governance signals;
- [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md) for accepted differentiators and explicit non-actions;
- [`../06-delivery/external-signal-refresh-and-competitive-watch.md`](../06-delivery/external-signal-refresh-and-competitive-watch.md) for current-source refresh;
- [`../06-delivery/frontier-feature-watch-and-novelty-control.md`](../06-delivery/frontier-feature-watch-and-novelty-control.md) for FrontierSignalReview records, novelty-control rules, copy-risk checks, promotion gates, and customer-claim blockers before fresh external or user-opinion signals can become opportunities;
- [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md) for specification-mode accepted, rejected, deferred, research-more, and non-action decisions before runtime Product Truth exists;
- [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md) for source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions;
- [`../06-delivery/advanced-feature-incubation-and-prototype-governance.md`](../06-delivery/advanced-feature-incubation-and-prototype-governance.md) for moving promising opportunities through prototype, dogfood, beta, adoption, deferral, kill, or non-action decisions;
- [`../06-delivery/advanced-differentiation-benchmark-matrix.md`](../06-delivery/advanced-differentiation-benchmark-matrix.md) for same-task comparator baselines, anti-metrics, and CustomerClaimEvidenceRecord blockers before advanced or better-than claims;
- [`../06-delivery/user-research-and-experience-validation.md`](../06-delivery/user-research-and-experience-validation.md) for real-user validation evidence;
- [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md) for OutcomeMetricDefinitions, StrategicBetScorecards, baselines, anti-metrics, and OutcomeReviews that prove advanced bets improve measurable user outcomes;
- [`../06-delivery/semantic-drift-and-contradiction-review.md`](../06-delivery/semantic-drift-and-contradiction-review.md) for same-change consistency;
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md) and [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md) for TruthSignals, SignalDecisionLedger decisions, contradictions, and non-actions.

If this register conflicts with accepted product, architecture, security, delivery, or requirement contracts, correct the governing contract first. Do not use an opportunity score to bypass invariants.

## Opportunity record

Every material advanced opportunity uses an `AdvancedOpportunity` shape:

```text
id:
name:
status: accepted | rejected | deferred | research-more | accepted-risk | non-action | stale | contradicted
source_basis:
source_quality_record:
reviewed_at:
user_problem:
current_system_gap:
research_native_advantage:
affected_requirements:
governing_docs:
non_action_alternative:
objective_dimensions: performance | usability | user-experience | automation | trust | reviewability | recoverability | security | commercial-viability
user_opinion_confidence: directional | repeated-signal | validated-theme | customer-validated | stale | contradicted
validation_needed:
strategic_bet_scorecard:
advanced_differentiation_benchmark_refs:
performance_guardrails:
automation_guardrails:
privacy_security_guardrails:
launch_blockers:
owner:
revisit_trigger:
```

During specification work, the record can live in this register, the advanced operating-layer policy, Product Truth docs, or release evidence. Once Product Truth exists at runtime, the canonical record lives in the SignalDecisionLedger and this register links to it.

## Scoring dimensions

Opportunity scoring is a routing aid, not proof. Each dimension is scored qualitatively as `high`, `medium`, `low`, `unknown`, or `negative`.

| Dimension | Question |
|---|---|
| User pain | Is the problem visible in official capabilities, public signals, dogfood, support, usability research, or customer feedback? |
| Research-native advantage | Does Research solve this through Project state, Sources, Claims, Documents, Activity, Product Truth, permissions, and release evidence rather than through generic OS or browser capture? |
| Objective value | Does the feature improve performance, usability, user experience, automation leverage, trust, reviewability, recoverability, commercial viability, or security? |
| Evidence freshness | Are official references current, are source-quality records present, and are public user signals labeled as directional rather than proof? |
| Dependency readiness | Can the feature wait for source authority, document authority, authorization, Activity, Product Truth, automation lifecycle, and release evidence instead of outrunning foundations? |
| Risk profile | Does the feature avoid hidden capture, permission widening, false completion, quiet failure, approval fatigue, data loss, customer leakage, and unsupported launch claims? |
| Validation clarity | Can the team define observed tasks, metrics, stop conditions, dogfood evidence, accessibility coverage, performance budgets, and launch gates? |
| Comparator proof | Can Research compare the same user job against current OS, browser, workspace-agent, generic automation, app-intent, or agent-observability baselines without overclaiming from stale or anecdotal evidence? |

An opportunity with high novelty but weak validation clarity or negative risk profile is rejected or deferred. An opportunity with high user pain and high Research-native advantage can still be deferred when dependencies are not ready.

## Current opportunity register

### Evidence-native Work Packets and Resume Digests

**Status:** accepted, dependency-gated
**Why:** OS recall, browser journeys, AI browsers, and workspace agents are converging on "pick up where you left off." Public signals show users also worry about privacy, missing use cases, tab overload, and unpredictable AI waits.

Research opportunity:

- rebuild current work from authorized Project records, not screenshots, browser history, clipboard data, or operating-system windows;
- combine ActivityEvents, Sources, Claims, DocumentBlocks, Worksets, Focus State, Automation Recipes, Product Truth, and release evidence into a user-controlled Work Packet;
- show first useful status quickly, then progressive state, blockers, stale labels, approval needs, and next safe actions.

Validation required:

- observed resume tasks after reload, device switch, Project switch, interrupted automation, and permission change;
- perceived wait clarity, missed-blocker rate, task-switch confidence, correction and dismissal rates, Work Packet usefulness, and accessibility evidence;
- no-ambient-capture privacy comprehension.

### Scenario-before-side-effect and Reversible Work

**Status:** accepted, foundation-dependent
**Why:** Screen-aware actions and AI-browser delegation make actions easier to launch, while user and practitioner signals keep pointing to approval fatigue, quiet failure, and hard-to-resume agent state.

Research opportunity:

- preview source, document, publication, automation, repository, settings, cost, and policy effects before mutation;
- require stale-plan invalidation, expected versions, side-effect classes, approval classes, and recovery paths;
- preserve undo, restore, replay, withdrawal, compensation, reconciliation, and irreversible-effect labels without pretending every action is reversible.

Validation required:

- users correctly compare scenarios, reject stale plans, identify irreversible effects, and recover from failed or partial changes;
- high-risk actions cannot bypass approvals, Activity, audit, idempotency, or side-effect ledgers.

### Automation Registry, Run Debugger, and Outcome Scorecards

**Status:** accepted, foundation-dependent
**Why:** Workspace-agent and automation products expose schedules, activity, permissions, and lifecycle controls. Public signals add that users need predictable cost, failure diagnosis, replay, and useful outcomes rather than raw activity.

Research opportunity:

- centralize saved, scheduled, paused, failed, degraded, canary, and retired automations;
- expose dry-runs, cost projections, trigger dedupe, connector scope, failure taxonomy, replay eligibility, fixture creation, trace comparison, and support-safe diagnostics;
- measure accepted outcomes, rejected work, edited work, stale-claim reduction, approval burden, latency, cost, and safety blockers.

Validation required:

- users can predict what an automation will read, write, patch, publish, export, notify, bill, or ask for before it runs;
- failures create repairable states and fixtures rather than opaque chat apologies;
- scorecards cannot count run volume, tokens, generated words, or "completed" status as value by themselves.

### Project Health and Causal Repair

**Status:** accepted, foundation-dependent
**Why:** Observability, activity feeds, AI RCA, code autofix, and PC diagnostics are converging on easier diagnosis, but user and practitioner signals show that raw traces often explain what happened without explaining why, silent failures can look successful, and excessive telemetry creates cost and review burden.

Research opportunity:

- convert authorized Project records, Activity, Operations, release evidence, Product Truth, telemetry aggregates, run trajectories, AutomationFailureRecoveryRecords, and SupportDiagnosticBundles into causal HealthFindings;
- preserve observed signal, suspected cause, cause confidence, counterevidence, unknowns, diagnostic-waste class, false-cause risk, repair eligibility, dry-run plan, approval class, and outcome observation;
- keep raw trace content, prompt bodies, source excerpts, connector payloads, screenshots, clipboard data, browser history, and operating-system state out of general health analytics;
- feed repeated false causes, unresolved unknowns, repair failures, and diagnostic waste into Product Truth, fixtures, runbooks, documentation defects, or implementation backlog instead of hidden retry loops.

Validation required:

- trace-to-finding benchmarks against same-task agent-observability, activity-log, RCA, and autofix baselines;
- HealthLineageEdge, cause-confidence, counterevidence, false-cause, false-positive, diagnostic-waste, and repair-outcome tests;
- support-safe redaction tests for OpenTelemetry-compatible and GenAI telemetry inputs;
- user comprehension studies for finding reason, confidence, unknowns, repair dry-run, support handoff, and outcome validation;
- CustomerClaimEvidenceRecord blockers for "AI root cause", "self-healing Projects", "autofixes Project health", "debuggable agents", and "better than observability tools".

### Project Atlas and Impact Reports

**Status:** accepted, dependency-gated
**Why:** Search, graph, dependency, and workspace tools help users find things, but global graphs often become decorative. Research's advantage is local, evidence-aware impact around claims, source versions, documents, recipes, Product Truth, GitHub, publications, and release evidence.

Research opportunity:

- open focused neighborhoods and path queries instead of a whole-Project graph by default;
- require Impact Reports before high-risk source, document, publication, recipe, policy, parser, model-route, repository, or release-candidate changes;
- show hidden or redacted dependents without leaking private content.

Validation required:

- users find affected claims, documents, automations, and publication blockers faster than with search alone;
- map suggestions reduce missed dependencies and do not become a second authority.

### No-ambient-capture Native Companion

**Status:** accepted with hard guardrails
**Why:** Microsoft, Apple, Google, and AI browsers are moving toward screen, tab, action, and connected-app context. User signals around Recall show that usefulness does not erase privacy and trust objections.

Research opportunity:

- provide active-tab capture, selected-text capture, file-watch grants, OS share/import, notification deep links, tray/menu status, and global command entry only through explicit Project-scoped grants;
- make grant state inspectable and revocable;
- route all material effects through server-owned preflight, expected versions, Activity, audit, and approvals.

Validation required:

- users understand what is captured and what is not;
- tests prove no screenshots, clipboard monitoring, browser-history capture, keylogging, camera, microphone, broad filesystem indexing, or OS-window capture;
- fallback web journeys remain viable.

### Task-aware Worksets and Spatial Workbench

**Status:** accepted, research-more for adaptive suggestions
**Why:** Stage Manager, PowerToys Workspaces, browser workspaces, tab groups, and AI browsers all address setup friction. Public signals are split: users like task grouping when it reduces setup cost but reject layouts that are slow, confusing, or detached from the actual work.

Research opportunity:

- store Project-scoped Worksets, pane purposes, evidence-aware splits, pinned resources, and restore snapshots over canonical state;
- hydrate panes progressively, label stale or redacted resources, and preserve keyboard, touch, narrow-screen, and screen-reader alternatives;
- suggest layout changes only when explainable, dismissible, reversible, and outcome-measured.

Validation required:

- Worksets reduce setup time and tab overload without hiding source, claim, document, or permission state;
- adaptive layout suggestions have acceptance, reversal, correction, accessibility, and performance evidence.

### Choice-respecting AI surfaces

**Status:** accepted, dependency-gated
**Why:** OS and browser AI features increasingly use task resume, tab context, memory, link routing, and assistant surfaces as default parts of the environment. Browser-choice and user-trust signals show that advanced capability loses value when users feel steered, locked in, or unable to disable the AI surface.

Research opportunity:

- make AI surfaces opt-in where material, reversible, inspectable, and explainable when policy-managed;
- preserve user browser, companion, Project, model, automation, notification, personalization, import, export, and local-data choices across sessions and migrations;
- treat disable, reset, export, policy-managed, unsupported, and degraded states as first-class UX rather than obscure settings.

Validation required:

- users can find, understand, disable, reset, export where allowed, and recover AI-surface choices without support intervention;
- migration, onboarding, and Project import do not silently re-enable disabled AI surfaces, widen data use, or force a browser or assistant path;
- no customer-facing trust, privacy, agency, or choice claim ships without observed-task evidence, source-quality records, and CustomerClaimEvidenceRecord approval.

### Typed Project Action Surface

**Status:** accepted, foundation-dependent
**Why:** OS, assistant, connected-app, and model-tool ecosystems are moving toward typed actions and entities. Public practitioner signals around Shortcuts, Power Automate Copilot, and MCP tooling show the risk: action authoring becomes brittle when the system lacks real context, hides side effects, returns prose instead of structured data, or overloads the model with ambiguous tool descriptions.

Research opportunity:

- expose Sources, Claims, Documents, Activity, Work Packets, Project Atlas, Impact Reports, Maintenance, Automation Recipes, Project settings, support, API, SDK, CLI, MCP, native companion, browser extension, and connected-app affordances through one Project Action Surface;
- make each action inspectable through descriptor refs, input schema, result schema, entity binding, side-effect class, approval class, preflight, expected-version policy, idempotency, disabled reason, ActivityEvent, audit, and projection policy;
- let natural language search, select, and draft actions while forcing every material effect through server-owned descriptor resolution and deterministic preflight;
- project compact action metadata to model-facing or external clients, with lazy-loaded schemas where needed, without weakening authorization, approvals, side-effect policy, or recovery.

Validation required:

- users can inspect what an action will read, write, publish, bill, notify, delete, or request before running it;
- descriptor projection parity holds across Command Center, API, SDK, CLI, MCP, native companion, browser extension, connected-app, and recipe surfaces;
- prompt-injection fixtures prove source content, generated summaries, public comments, connector payloads, and model output cannot create actions, hide disabled reasons, or widen policy;
- same-task comparator work tests Research action discovery and execution against App Intents, Windows App Actions, connected apps, and generic MCP/tool-calling baselines without claiming OS-level authority.

### Natural-language Recipe Drafting

**Status:** deferred and research-more
**Why:** Apple Shortcuts, Power Automate, Copilot Studio, Notion Custom Agents, Glean, Rovo, Zapier, n8n, Dia, and Comet all point toward natural-language or low-code automation. Public signals also show authoring friction, brittle triggers, unclear session state, cost surprise, and limitations.

Research opportunity:

- convert repeated Project work and natural-language intent into non-runnable RecipeDraftCandidates;
- require typed graph compilation, deterministic preflight, dry-run simulation, trigger dedupe, cost projection, owner approval, canary activation, and outcome scorecard gates before activation;
- separate deterministic steps from bounded AI steps and hard-stop ActionCards.

Validation required before acceptance:

- users can edit and understand recipes without hidden prompt logic;
- dry-runs make trigger, source scope, side effects, cost, approval, recovery, and failure states clear;
- no recipe can run production side effects from natural language alone.

### Ambient Cross-app Recall

**Status:** rejected non-action
**Why:** Screen, tab, and recall features are becoming common, but Research's durable value depends on explicit Project truth, source authority, evidence, and permissions.

Rejected behavior:

- OS-wide screenshot recall;
- clipboard history, browser-history scraping, camera, microphone, keylogging, broad filesystem indexing, or OS-window memory;
- private-content model calls based on ambient device context.

Revisit trigger:

- only an explicit Architecture Decision Record can reopen this, and it must preserve Project authority, no-drift docs, deterministic grants, no hidden capture, and stronger user/privacy evidence than the current signal set provides.

### Generic Browser or App Agent Takeover

**Status:** rejected non-action
**Why:** Comet, Dia, Edge, Gemini, and workspace agents show that delegation is becoming common. Research should not become a generic browser, generic RPA system, or app-action agent.

Rejected behavior:

- unrestricted browser control as a primary product surface;
- generic shopping, email, calendar, finance, social, and web task delegation without Project source, document, claim, publication, or repository context;
- external writes without explicit connector contracts, side-effect ledgers, approval gates, and recovery plans.

Revisit trigger:

- a customer segment proves a Project-native action is material to source import, evidence verification, document maintenance, publication, GitHub proposal, support, or release workflow.

## Sequencing rule

Advanced features must not outrun the first production proof path:

```text
Create Project
-> upload one PDF
-> create immutable SourceVersion
-> parse and index it
-> ask a grounded question
-> retrieve authorized evidence
-> stream a cited answer
-> create editable Markdown
-> persist and reopen it
```

After that path is proven, advanced work sequences through:

1. command, Activity, and progressive status;
2. Worksets, Focus, and Work Packets;
3. Product Truth, contradiction, and source-change maintenance;
4. Project Health, causal diagnostics, and support-safe repair;
5. Scenario Lab, Reversible Work, and approval-load control;
6. Automation Registry, RecipeDraftCandidates, Run Debugger, and Outcome Scorecards;
7. optional native companion and broader connector action surfaces only after no-ambient-capture and support-safe diagnostics are proven.

## Launch gates

Before any advanced opportunity becomes a customer-facing launch claim:

- the opportunity has a current `FrontierSignalReview` or Product Truth equivalent when it was triggered by a fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion signal;
- the opportunity has an `AdvancedOpportunity` record or Product Truth equivalent;
- any prototype, dogfood, or beta path has an `AdvancedFeatureIncubation` record with hypothesis, guardrails, feature-flag plan, benchmark mapping, user-research plan, kill criteria, and Product Truth links;
- the opportunity has a StrategicBetScorecard with baseline, expected outcome delta, guardrails, anti-metrics, and launch-blocking OutcomeReview before any performance, usability, user-experience, automation, or advanced-differentiation claim is made;
- any advanced-differentiation or better-than claim has a current `AdvancedDifferentiationBenchmarkRecord` with current comparator sources, same-task baseline, anti-metrics, required telemetry, benchmark scenarios, CustomerClaimEvidenceRecord, and Product Truth decision;
- official sources are current or marked no-change through the external signal watch;
- public user-opinion signals are source-quality classified, labeled directional, and cannot stand alone;
- affected requirements, product docs, architecture docs, security docs, launch evidence, and metadata move in the same change;
- semantic drift review finds no unresolved `S0` contradiction and no unresolved `S1` affecting the launch journey;
- user research covers task success, performance perception, automation usefulness, trust, privacy comprehension, accessibility, and dogfood limits for the affected surface;
- runtime implementation status, tests, release evidence, and public claims agree.

## Documentation update rule

When this register changes direction, update the affected docs in the same change:

- [`user-opinion-and-competitive-signal-audit.md`](user-opinion-and-competitive-signal-audit.md)
- [`ai-work-os-and-agent-automation-signal-audit.md`](ai-work-os-and-agent-automation-signal-audit.md)
- [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md)
- [`../06-delivery/external-signal-refresh-and-competitive-watch.md`](../06-delivery/external-signal-refresh-and-competitive-watch.md)
- [`../06-delivery/frontier-feature-watch-and-novelty-control.md`](../06-delivery/frontier-feature-watch-and-novelty-control.md)
- [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md)
- [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md)
- [`../06-delivery/advanced-differentiation-benchmark-matrix.md`](../06-delivery/advanced-differentiation-benchmark-matrix.md)
- [`../06-delivery/advanced-feature-incubation-and-prototype-governance.md`](../06-delivery/advanced-feature-incubation-and-prototype-governance.md)
- [`../06-delivery/user-research-and-experience-validation.md`](../06-delivery/user-research-and-experience-validation.md)
- [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`../06-delivery/semantic-drift-and-contradiction-review.md`](../06-delivery/semantic-drift-and-contradiction-review.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- relevant product and architecture contracts;
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

If a new opportunity would contradict an accepted differentiator, rejected non-action, requirement, launch gate, implementation status, or security invariant, resolve that contradiction before implementation proceeds.
