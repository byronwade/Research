# AI work OS and agent automation signal audit

**Review date:** 2026-07-18
**Status:** planning evidence, not customer-facing claims

Research is not trying to become a generic office suite. The relevant market movement is narrower and more important: teams increasingly expect AI systems to combine workspace context, governed automation, durable deliverables, and measurable execution. This audit records current public signals for that "AI work OS" direction and converts them into Research requirements.

Signals in this audit are routed through the Product Truth Board and SignalDecisionLedger defined in [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md). Advanced automation ideas are accepted only when the ledger records the objective dimension, non-goals, affected requirements, affected documents, validation expectation, owner, and revisit trigger.
Accepted operating-layer differentiators and explicit non-actions are governed by [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md).
Recurring official-source and public-signal refresh for OS, workspace-agent, automation, performance, UX, trust, and advanced operating-layer evidence is governed by [`../06-delivery/external-signal-refresh-and-competitive-watch.md`](../06-delivery/external-signal-refresh-and-competitive-watch.md).
Advanced opportunity scoring, sequencing, dependency readiness, and non-action disposition are governed by [`advanced-feature-opportunity-register.md`](advanced-feature-opportunity-register.md).
Source-quality classification, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence are governed by [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md).
Until Product Truth exists at runtime, accepted, rejected, deferred, research-more, and non-action decisions from these signals are summarized in [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md).

## Sources reviewed

Official capability references:

- [OpenAI Help: ChatGPT agent](https://help.openai.com/en/articles/11752874-chatgpt-agent)
- [OpenAI Help: Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)
- [OpenAI Help: ChatGPT workspace agents](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business)
- [OpenAI: Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
- [OpenAI Help: ChatGPT release notes for scheduled tasks](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [OpenAI Help: Scheduled Tasks in ChatGPT](https://help.openai.com/en/articles/10291617-tasks-in-chatgpt)
- [OpenAI: Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/)
- [ChatGPT Work](https://chatgpt.com/work/)
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools)
- [OpenAI Apps SDK MCP server concepts](https://developers.openai.com/apps-sdk/concepts/mcp-server)
- [OpenAI Apps SDK reference](https://developers.openai.com/apps-sdk/reference)
- [Google Gemini Connected Apps help](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en)
- [Notion AI](https://www.notion.com/product/ai)
- [Glean Agents announcement](https://www.glean.com/press/glean-makes-horizontal-ai-agents-for-enterprises-expands-work-ai-with-glean-agents)
- [Glean Agent Development Lifecycle announcement](https://www.glean.com/press/glean-introduces-the-enterprise-agent-development-lifecycle-codifying-how-enterprises-build-govern-and-measure-ai-agents)
- [Glean Agent Development Lifecycle documentation](https://docs.glean.com/agents/agent-development-lifecycle/adlc)
- [Zapier Agents](https://zapier.com/agents)
- [Zapier Agents guide](https://zapier.com/blog/zapier-agents-guide/)
- [Zapier agent statuses](https://help.zapier.com/hc/en-us/articles/36818600959501-Understand-your-agent-s-statuses)
- [Atlassian Rovo agents](https://support.atlassian.com/rovo/docs/agents/)
- [Atlassian Rovo agents in automations](https://support.atlassian.com/rovo/docs/agents-in-automations/)
- [Apple Shortcuts User Guide](https://support.apple.com/guide/shortcuts/welcome/ios)
- [Apple Shortcuts personal automation](https://support.apple.com/guide/shortcuts/intro-to-personal-automation-apd690170742/ios)
- [Apple Shortcuts enable or disable personal automation](https://support.apple.com/guide/shortcuts/enable-or-disable-a-personal-automation-apd602971e63/ios)
- [Apple App Intents](https://developer.apple.com/documentation/appintents)
- [Apple App Intents adoption guide](https://developer.apple.com/documentation/appintents/adopting-app-intents-to-support-system-experiences)
- [Microsoft Recall management](https://learn.microsoft.com/en-us/windows/client-management/manage-recall)
- [Microsoft Click to Do management](https://learn.microsoft.com/en-us/windows/client-management/manage-click-to-do)
- [Microsoft PowerToys Command Palette](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/overview)
- [Microsoft PowerToys Command Palette Dock](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/dock)
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/)
- [Microsoft App Actions JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json)
- [Microsoft App Actions caller filtering](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-filter-caller)
- [Microsoft PowerToys Workspaces](https://learn.microsoft.com/en-us/windows/powertoys/workspaces)
- [Microsoft Windows Snap](https://support.microsoft.com/en-us/windows/experience/snap-your-windows)
- [Microsoft PowerToys FancyZones](https://learn.microsoft.com/en-us/windows/powertoys/fancyzones)
- [Apple Stage Manager for Mac](https://support.apple.com/guide/mac-help/use-stage-manager-mchl534ba392/mac)
- [Apple Stage Manager for iPad](https://support.apple.com/guide/ipad/organize-windows-with-stage-manager-ipad1240f36f/ipados)
- [Microsoft Edge Workspaces](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-workspaces)
- [Chrome tab groups](https://support.google.com/chrome/answer/2391819)
- [Firefox tab groups](https://www.firefox.com/en-US/features/tab-groups/)
- [Arc Spaces](https://resources.arc.net/hc/en-us/articles/19228064149143-Spaces-Distinct-Browsing-Areas)
- [Arc Profiles](https://resources.arc.net/hc/en-us/articles/19227964556183-Profiles-Separate-Work-Personal-Browsing)
- [Raycast Manual](https://manual.raycast.com/)
- [Raycast AI Extensions](https://manual.raycast.com/ai/ai-extensions)
- [Microsoft Power Automate documentation](https://learn.microsoft.com/en-us/power-automate/)
- [Power Automate Copilot cloud flow creation](https://learn.microsoft.com/en-us/power-automate/create-cloud-flow-using-copilot)
- [Microsoft Copilot Studio agent flows](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)
- [Microsoft Copilot Studio autonomous agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/autonomous-agents)
- [Notion Custom Agents](https://www.notion.com/help/custom-agents)
- [Notion Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions)
- [Notion Custom Agents security features](https://www.notion.com/help/custom-agents-security-features)
- [Microsoft Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals)
- [Glean agents: how agents work](https://docs.glean.com/agents/how-agents-work)
- [Atlassian Rovo agent tools](https://support.atlassian.com/rovo/docs/agent-actions/)
- [n8n AI Agent node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)

Public user-opinion and practitioner signals:

- [Notion AI Agent comparison discussion](https://www.reddit.com/r/Notion/comments/1t92oc2/comparing_notion_ai_agent_in_may_2026_to_claude/)
- [Notion Custom Agents pricing concern](https://www.reddit.com/r/Notion/comments/1rdd3av/petition_the_new_pricing_of_notion_custom_agents/)
- [Notion AI Agents cost criticism](https://www.reddit.com/r/Notion/comments/1rebn56/notion_ai_agents_steer_clear_just_like_a_drug/)
- [Coordinated Notion agents practitioner writeup](https://www.reddit.com/r/Notion/comments/1rex1ze/i_built_11_coordinated_notion_agents_heres_what/)
- [ChatGPT agent usefulness and limitations discussion](https://www.reddit.com/r/OpenAI/comments/1m49e7d/chatgpt_agent_is_much_more_useful_than_i_thought/)
- [ChatGPT agent Hacker News discussion](https://news.ycombinator.com/item?id=44595492)
- [ChatGPT clarification-friction discussion](https://www.reddit.com/r/ChatGPT/comments/1mn8o6j/gpt5_wastes_your_responses_by_asking_way_too_many/)
- [Agent approval durability discussion](https://www.reddit.com/r/AI_Agents/comments/1r7cm9k/approvals_arent_enough_what_i_learned_building_an/)
- [Agent approval-fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uvveom/how_are_you_handling_credentials_and_2FA_for_agents_that_need_to_do_authenticated_workflows/)
- [Agentic AI business usefulness discussion](https://www.reddit.com/r/datascience/comments/1jzml32/is_agentic_ai_remotely_useful_for_real_business/)
- [ChatGPT agent EU launch Hacker News safety discussion](https://news.ycombinator.com/item?id=44847368)
- [Workspace agents and Notion usability discussion](https://news.ycombinator.com/item?id=47866860)
- [AI agent issues in 2026 discussion](https://www.reddit.com/r/ArtificialInteligence/comments/1qsr4b9/ai_agent_issues_in_2026/)
- [Zapier pricing and reliability discussion](https://www.reddit.com/r/automation/comments/1o1rl8h/tired_of_zapier/)
- [Zapier agent usage-limits discussion](https://www.reddit.com/r/zapier/comments/1qz8uua/how_have_you_used_zapier_agents/)
- [Agent workflow reliability discussion](https://www.reddit.com/r/AI_Agents/comments/1s4xjz0/when_to_use_zapiermake_vs_ai_agent_builders_a/)
- [Hacker News discussion of whether agents do real work](https://news.ycombinator.com/item?id=42629498)
- [Hacker News discussion of AI-agent rule breaking](https://news.ycombinator.com/item?id=46067995)
- [AI agents get fragile when workflows get messy](https://www.reddit.com/r/AI_Agents/comments/1thmc08/ai_agents_feel_impressive_until_the_workflow_gets/)
- [Shortcuts power versus clunky authoring discussion](https://www.reddit.com/r/shortcuts/comments/1ldedpg/i_feel_like_the_shortcuts_app_is_so_powerful_and/)
- [Power Automate Copilot context and flow-authoring discussion](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/)
- [MCP structured-output discussion](https://www.reddit.com/r/mcp/comments/1uw8gjr/the_best_thing_i_did_for_my_mcp_server_was_stop/)
- [MCP schema context-budget discussion](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/)
- [MCP tool-description regression testing discussion](https://www.reddit.com/r/mcp/comments/1uofaco/how_do_you_test_that_an_mcp_server_change_didnt/)
- [Apple App Intents Siri AI developer discussion](https://developer.apple.com/forums/thread/832602)
- [AI agents reliability discussion](https://news.ycombinator.com/item?id=43535653)
- [Boring AI workflows versus autonomous agents discussion](https://www.reddit.com/r/AI_Agents/comments/1u1j6wk/i_trust_boring_ai_workflows_more_than_autonomous/)
- [Agent permission-fatigue discussion](https://news.ycombinator.com/item?id=48308376)
- [AI agent approval fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uws7ct/anybody_else_struggling_with_constant_approvals/)
- [Human approval layers for agents discussion](https://www.reddit.com/r/AI_Agents/comments/1uya9qt/the_three_layer_problem_with_human_approval_for/)
- [AI waiting and flow-state fatigue discussion](https://news.ycombinator.com/item?id=46934404)
- [Tab overload management discussion](https://www.reddit.com/r/productivity/comments/1nxwbhw/how_do_you_all_manage_tab_overload_without/)
- [Hacker News discussion of too many browser tabs](https://news.ycombinator.com/item?id=48934898)
- [Stage Manager positive workflow discussion](https://www.reddit.com/r/MacOS/comments/1r5tpr0/i_finally_understand_stage_manager_its_powerful/)
- [Stage Manager frustration discussion](https://www.reddit.com/r/mac/comments/1dt2h1d/does_anyone_else_find_stage_manager_incredibly/)
- [PowerToys Workspaces discussion](https://www.reddit.com/r/Windows11/comments/1f8w0nt/powertoys_v084_new_workspaces_utility/)
- [Browser workspace versus window manager discussion](https://news.ycombinator.com/item?id=41323174)
- [Persistent browser workspace discussion](https://news.ycombinator.com/item?id=14823807)
- [Hidden Cost of Window Management](https://arxiv.org/abs/1810.04673)
- [A Dynamic Take on Window Management](https://arxiv.org/abs/2511.17516)
- [CMU tab-overload research summary](https://www.cmu.edu/news/stories/archives/2021/may/overcoming-tab-overload.html)
- [Tabs.do: Task-centric Browser Tab Management](https://dl.acm.org/doi/10.1145/3472749.3474777)
- [Orca: Browsing at Scale with Memory-Augmented Agents](https://arxiv.org/html/2505.22831v1)
- [APA task switching cost summary](https://www.apa.org/topics/research/multitasking)
- [State-machine pattern for agentic workflows discussion](https://www.reddit.com/r/AI_Agents/comments/1ssf0f9/why_i_stopped_building_autonomous_agents_for/)
- [Power Automate unintuitive and brittle discussion](https://www.reddit.com/r/MicrosoftFlow/comments/1avn82s/am_i_stupid_or_is_power_automate_wildly/)
- [Boring AI workflows versus autonomous agents discussion](https://www.reddit.com/r/AI_Agents/comments/1u1j6wk/i_trust_boring_ai_workflows_more_than_autonomous/)
- [Zapier cost and broken-trigger discussion](https://www.reddit.com/r/zapier/)
- [AI agent fatigue and engineering discussion](https://www.reddit.com/r/automation/comments/1ppfdrs/the_ai_agent_fatigue_is_real_can_we_talk_about/)
- [Automation failure at scale discussion](https://www.reddit.com/r/AI_Agents/comments/1r64ieo/the_real_reason_automation_fails_at_scale_and_how/)
- [n8n workflow versus AI agent discussion](https://www.reddit.com/r/n8n/comments/1ieka5u/its_not_ai_agent_its_automated_workflow/)
- [Habituation at the Gate: Rising Approval and Declining Scrutiny in Human Review of AI Agent Code](https://arxiv.org/abs/2606.22721)
- [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/abs/2605.24309)
- [How Agents Ask for Permission: User Permissions for AI Agents, from Interfaces to Enforcement](https://arxiv.org/abs/2607.13718)

## Market direction

### Workspaces are becoming action surfaces

Notion positions AI as an embedded team capability that can complete multi-step work using workspace context, connected apps, and the web. Per public product copy, custom agents automate repetitive work, Notion Agent can build and edit inside the workspace, and verified pages help freshness show up in search and citations.

Research implication: Research should treat Project context, documents, sources, claims, and publication state as the action surface. Automation should not require users to copy context into a separate agent builder. That action surface must resolve to typed, server-owned descriptors with permissions, side effects, expected versions, approval class, and recovery paths; copied context, prompt-only handlers, source content, and connector payloads cannot define executable Project actions.

### Enterprise agents are becoming lifecycle-managed systems

Glean frames agents as a horizontal enterprise environment with broad data access, actions, orchestration, governance, and an Agent Development Lifecycle. Its positioning explicitly moves from isolated experiments to governed production systems with measurable business impact.

Research implication: Research needs an internal agent lifecycle before broad automation ships: design, test, approve, run, observe, evaluate, retire. This should apply to saved research contracts, source refreshes, document maintenance, GitHub proposals, exports, and customer-facing automations.

### Automation platforms are moving toward "AI teammates"

Zapier positions agents as specialized workers connected to live business data and thousands of apps. Public copy emphasizes building agents, monitoring activity, chatting when needed, web work, and running work "on command and while you sleep."

Research implication: Research should borrow the useful operating model, not the generic app-automation scope. Project automations should have durable activity, supervision, live source sync, human handoff, and app/web actions only through governed connectors.

### Chat agents are converging with scheduled work

OpenAI's current help surface states ChatGPT agent has moved toward ChatGPT Work for longer multi-step tasks and finished deliverables. Release notes for scheduled tasks emphasize one place to view active tasks, run windows, pause/resume/edit/delete controls, connected-app monitoring, and useful notifications.

Research implication: scheduled research and maintenance need a first-class management surface. Recurring work must be discoverable, pausable, editable, deletable, budgeted, and auditable.

## User opinion themes

### Cost predictability matters as much as capability

Notion user discussions show concern that credit-based agents can make experimentation expensive, especially for daily routines. Practitioners optimize by mixing deterministic rules with LLM reasoning so predictable cases do not spend credits.

Research commitment:

- every automation has a budget and expected cost class;
- deterministic filters run before model calls where safe;
- repeated jobs show projected monthly usage;
- users can pause or downgrade expensive automation;
- cost anomalies create review events.

### Reliability and debuggability remain weak spots

Agentic AI discussions repeatedly cite fragile tool use, authentication failures, schema changes, weak recovery, and difficulty debugging LLM-driven systems.

Research commitment:

- each automation run has structured steps, inputs, outputs, tool calls, state transitions, retries, and failure reasons;
- a failed automation creates a repairable state, not an opaque chat apology;
- tool schemas and connector permissions are versioned;
- replay uses idempotency keys and dry-run modes where possible.

### Outcomes matter more than activity

Official products increasingly expose activity, schedules, permissions, statuses, analytics, and lifecycle controls. Practitioner discussions add a sharper bar: teams want to know whether agents produced accepted work, reduced manual effort, stayed reliable over time, and justified their cost. Run count, lead count, generated text, or "completed" status can hide rejected work, approval churn, hallucinated actions, cost spikes, and brittle workflows.

Research commitment:

- every saved or scheduled automation has outcome metrics before broad rollout;
- accepted, edited, rejected, ignored, reverted, and blocked outputs are measured separately;
- cost, latency, approval burden, and safety blockers are evaluated per accepted outcome;
- adaptive workflow recommendations are visible, reversible, and approval-gated;
- activity volume cannot substitute for useful evidence-linked output.

### Users want fewer prompts, not less control

Positive user signals emphasize agents that keep trying, complete work, and reduce manual coordination. Negative signals often call out unnecessary questions, unclear limits, or overbroad autonomy.

Research commitment:

- clarification questions are governed by [`../01-product/intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md);
- automation plans ask before irreversible, costly, risky, or ambiguous actions;
- low-risk deterministic steps proceed without unnecessary confirmation;
- all approvals are scoped, logged, and explain their consequence.

### Delegated trust should replace prompt spam, not remove oversight

Apps, workspace agents, custom agents, approval workflows, audit logs, and admin directories show the industry moving toward controllable agent permissions. Public and research signals show why simple human-in-the-loop prompts are not enough: too many routine approvals can reduce scrutiny, while insufficient approvals make external actions unsafe.

Research commitment:

- approval prompts are managed as approval-load budgets tied to accepted outcomes;
- repeated low-risk decisions can become scoped, expiring, revocable DelegatedTrustGrants;
- high-risk actions keep hard stops for publication, deletion, billing, administration, connector widening, new destinations, and irreversible external writes;
- grants and receipts are verified at the mutation boundary and fail closed on scope, payload, destination, expected-version, policy, or outcome drift;
- fatigue signals can group, slow, pause, downgrade, or route automation to review without deleting audit history.

### Workspace-level context is valuable only when permissions are clear

Users value Notion, Glean, and Zapier-style context across tools, but they also raise concerns about data access, connector limits, support, and silent behavior.

Research commitment:

- Project context is explicit and inspectable;
- connector scopes are source-specific and revocable;
- automation cannot infer permission from mere presence in a workspace;
- support diagnostics show metadata first and avoid private content exposure.

### Operating-layer UX should coordinate work without OS-wide capture

Microsoft Recall and Click to Do show where operating systems are headed: local recall, screen-aware actions, and contextual operations over what the user saw. Apple Shortcuts, PowerToys Command Palette, and Raycast show that users want fast command access, triggers, docks, extensions, and tool invocation. Workspace-agent products add reusable agents, schedules, sharing, analytics, and controls. Public user discussions add the sharper bar: users want fewer surprises, fewer approval prompts, fewer unpredictable waits, better debugging, and workflows that stop before quiet mistakes become real.

Research commitment:

- Project Operating Layer Work Packets coordinate Command Center, Focus, Activity, Atlas, Trust, Recipes, outcome scorecards, and Product Truth around current Project state;
- next-action recommendations are explainable, dismissible, content-minimized, and tied to authoritative records;
- repeated work creates only draft recipes until simulation, approval, canary limits, and outcome metrics pass;
- Research does not use ambient screen capture, clipboard history, cross-app surveillance, or OS-wide recall to infer Project memory;
- recommendation quality is measured by accepted outcomes, corrections, dismissals, recovery success, approval burden, cost, and latency.

### Action surfaces need typed contracts, not hidden tool names

Apple App Intents, Microsoft App Actions, OpenAI Apps SDK model tools, Gemini connected apps, command palettes, and shortcut systems all point toward a shared pattern: products increasingly expose actions as machine-readable descriptors. Public practitioner signals add the product risk: action catalogs become brittle when schemas are too large, descriptions drift, natural-language builders lose context, or a tool appears safe while hiding material side effects.

Research commitment:

- Project Action Surface descriptors are the only way Project commands, recipes, API clients, SDKs, CLIs, MCP clients, native companions, browser extensions, and future connected-app projections expose Project actions;
- compact projections and lazy-loaded schemas can reduce context size, but cannot remove target, effect, source scope, permissions, side-effect class, approval class, disabled reason, expected version, idempotency, Activity, Operation, ActionCard, or recovery metadata needed for safe execution;
- natural language may search, select, parameterize, and draft actions, but cannot create executable handler names or bypass descriptor validation;
- tool descriptions, compact metadata, and connector descriptions are treated as behavior-bearing contracts that require regression tests when changed;
- source content and generated summaries remain untrusted data and cannot define, override, hide, or widen Project actions.

### Spatial workbenches should reduce setup cost without becoming an OS shell

PowerToys Workspaces, Windows Snap, FancyZones, Stage Manager, Edge Workspaces, Chrome and Firefox tab groups, and Arc Spaces all point at the same user need: people want to preserve task context without manually rebuilding windows, tabs, panes, and tools. Public discussions show the unresolved tension. Users value persistent work areas when they reduce setup time, but they object when layout systems feel confusing, intrusive, or disconnected from the actual task. HCI and tab-management research reinforces that window and tab management carries measurable switching and organization cost.

Research commitment:

- Spatial Workbench state is Project-scoped and derived from canonical Project records, not operating-system windows, browser history, screenshots, or clipboard contents;
- named Worksets preserve task layouts, pane purpose, pinned resources, and restore state so source review, drafting, verification, and release work can resume quickly;
- Workset restore reauthorizes every pane and labels stale, deleted, unavailable, conflict, or redacted resources before display;
- adaptive layout suggestions are explainable, dismissible, reversible, and measured by accepted outcomes, not by novelty or automatic rearrangement;
- narrow screens, keyboard-only use, screen readers, and touch input have explicit alternatives to drag-only spatial manipulation.

### Recipe authoring and trigger clarity decide whether automation feels powerful or brittle

Apple Shortcuts, Power Automate, Copilot Studio, Notion Custom Agents, Glean, Rovo, Zapier, and n8n all point toward reusable work definitions with triggers, schedules, tools, steps, activity, and human review. Public discussions add the harder lesson: users like leverage, but they lose confidence when authoring is clunky, triggers are vague, sessions lose context, cost is surprising, or a long workflow silently half-fails.

Research commitment:

- repeated source, evidence, document, publication, feedback, GitHub, notification, export, and review work can become Project-native Automation Recipes;
- natural language and observed repeated work create non-runnable draft recipes until typed validation, simulation, and approval complete;
- every trigger has a source, selector, condition, dedupe key, cooldown, and replay rule;
- recipes separate deterministic steps from bounded AI steps and high-risk ActionCards;
- recipe runs expose Activity, Progressive Delivery, cost, side effects, outcome evidence, and support-safe diagnostics.

### Hybrid workflows beat prompt-only autonomy

Practitioner signals repeatedly prefer deterministic workflow edges with AI used for bounded reasoning, extraction, classification, verification, or drafting. The risk is not only hallucination; it is plausible output that looks done while a prerequisite, connector, source, or final write failed.

Research commitment:

- recipes compile to typed graphs and workflow plans rather than arbitrary hidden prompts;
- deterministic preflight, source scope, permissions, budgets, expected versions, and stop conditions run before AI work;
- final mutations, external writes, publication, billing, connector widening, and repository changes remain approval-gated;
- quiet-failure detection considers evidence gaps, untested branches, outcome regressions, and side-effect reconciliation.

## Product opportunities

1. **Automation registry:** one Project surface for saved, scheduled, paused, failed, and retired automations.
2. **Run debugger:** structured timeline of steps, model calls, tools, costs, source scope, retries, approvals, and outputs.
3. **Deterministic preflight:** rule-based filters and source checks before model reasoning.
4. **Agent development lifecycle:** draft, test, approve, canary, monitor, evaluate, revise, retire.
5. **Dry-run mode:** show proposed source reads, writes, document patches, connector actions, and cost before execution.
6. **Monthly cost projection:** convert recurring automations into expected usage before they are enabled.
7. **Outcome scorecard:** measure whether automation produced accepted patches, useful artifacts, fewer stale claims, lower manual work, lower cost per accepted outcome, and fewer safety blockers, governed by [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md).
8. **Handoff queue:** send uncertain, failed, high-risk, or policy-blocked work to a human review queue with context.
9. **Composable recipes and playbooks:** turn repeated Project work into typed, versioned, simulated, canaried, and outcome-measured recipe graphs governed by [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md).
10. **Spatial Workbench and Worksets:** preserve task layouts, pane groups, evidence-aware splits, and restore state without ambient OS or browser capture, governed by [`../01-product/spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md).
11. **Project Operating Layer:** assemble Work Packets and next safe actions over Project state, governed by [`../01-product/project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md).
12. **Delegated trust and approval-load control:** approve risk envelopes instead of repeated prompts, governed by [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md).
13. **Advanced operating-layer differentiation:** Project-native Work Packets, claim-aware next actions, no-ambient-capture companion surfaces, scenario-before-side-effect workflows, and outcome-measured automation governed by [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md).
14. **Project Action Surface:** typed action descriptors and compact projections across Command Center, API, SDK, CLI, MCP, native companion, browser extension, connected-app, and Automation Recipe surfaces, governed by [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md) and [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md).

## Non-goals

- Do not become a generic Zapier replacement.
- Do not ship autonomous external writes before draft, review, approval, and rollback paths are proven.
- Do not hide agent limits behind marketing terms like teammate, coworker, or autopilot.
- Do not optimize for benchmark demos over recoverable, auditable work.
- Do not introduce a second source, document, memory, or publication authority.
- Do not promote a public-opinion-only automation idea into scope without source-quality classification, SignalDecisionLedger disposition, and a stronger validation path.
- Do not treat generic OS recall, generic window restoration, or generic app automation as Research differentiation unless [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md) accepts the feature with governing docs and validation expectations.
- Do not let OS assistants, connected apps, MCP clients, browser extensions, native companions, recipes, connector payloads, source content, or prompt-only action names bypass the Project Action Surface.
- Do not treat action count, tool count, schema length, or connector breadth as value proof without same-task outcome, safety, latency, approval-burden, recovery, and user-comprehension evidence.

## Documentation update rule

When this audit changes the product direction, update:

- [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md)
- [`automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [`composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md)
- [`command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md)
- [`spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md)
- [`project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md)
- [`delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md)
- [`intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md)
- [`intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md)
- [`agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [`automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md)
- [`developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`spatial-workbench-layout-and-worksets.md`](../02-architecture/spatial-workbench-layout-and-worksets.md)
- [`project-operating-layer-control-plane.md`](../02-architecture/project-operating-layer-control-plane.md)
- [`delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`notifications-and-scheduled-automation.md`](../01-product/notifications-and-scheduled-automation.md)
- [`entitlements-metering-and-billing.md`](../02-architecture/entitlements-metering-and-billing.md)
- [`requirements.json`](../_meta/requirements.json)
- [`implementation-build-plan.json`](../_meta/implementation-build-plan.json)
- [`external-signal-refresh-and-competitive-watch.md`](../06-delivery/external-signal-refresh-and-competitive-watch.md)
- [`specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md)
- [`public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md)
- [`advanced-feature-opportunity-register.md`](advanced-feature-opportunity-register.md)
- Product Truth Board, SignalDecisionLedger, contradiction, and non-action records
