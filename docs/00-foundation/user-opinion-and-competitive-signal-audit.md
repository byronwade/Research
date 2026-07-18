# User opinion and competitive signal audit

**Review date:** 2026-07-18
**Status:** planning evidence, not customer-facing claims

This audit captures current public product capabilities and user sentiment signals for research workspaces, deep research, artifacts, citations, and automation. It is used to sharpen Research's product requirements without copying competitor trade dress or treating anecdotes as statistical proof.

Any signal in this audit that changes product direction must resolve through the Product Truth Board and SignalDecisionLedger defined in [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md). The ledger records whether the signal was accepted, rejected, deferred, marked research-more, accepted as bounded risk, contradicted, stale, superseded, or converted into a non-action decision.
Operating-layer differentiators and explicit non-actions derived from these signals are governed by [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md).
Recurring official-source and public-signal refresh is governed by [`../06-delivery/external-signal-refresh-and-competitive-watch.md`](../06-delivery/external-signal-refresh-and-competitive-watch.md). This audit is a reviewed snapshot, not a permanent substitute for current source checks.
Advanced opportunity scoring, sequencing, validation readiness, and explicit non-actions are governed by [`advanced-feature-opportunity-register.md`](advanced-feature-opportunity-register.md).
Source-quality classification, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence are governed by [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md).
Until Product Truth exists at runtime, accepted, rejected, deferred, research-more, and non-action decisions from this audit are summarized in [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md).

## Sources reviewed

Official capability references:

- [Gemini Notebook Audio Overview help](https://support.google.com/gemininotebook/answer/16212820?hl=en)
- [Gemini Notebook source types and limitations](https://support.google.com/gemininotebook/answer/16215270?co=GENIE.Platform%3DDesktop&hl=en)
- [Gemini Notebook FAQ and limits](https://support.google.com/notebooklm/answer/16269187?hl=en)
- [OpenAI Help: Deep research in ChatGPT](https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt)
- [OpenAI Help: ChatGPT agent](https://help.openai.com/en/articles/11752874-chatgpt-agent)
- [OpenAI Help: Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools)
- [OpenAI Apps SDK MCP server concepts](https://developers.openai.com/apps-sdk/concepts/mcp-server)
- [OpenAI Apps SDK reference](https://developers.openai.com/apps-sdk/reference)
- [Perplexity Help: Projects](https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces)
- [Perplexity changelog: upgraded Deep Research and Model Council](https://www.perplexity.ai/changelog/what-we-shipped---february-6th-2026)
- [Perplexity Research](https://research.perplexity.ai/)
- [Claude Help: Projects](https://support.claude.com/en/articles/9517075-what-are-projects)
- [Claude Help: Artifacts](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them)
- [Claude Platform Docs: search result citations](https://platform.claude.com/docs/en/build-with-claude/search-results)
- [OpenAI Help: Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [Gemini Notebook sharing help](https://support.google.com/notebooklm/answer/16206563?hl=en)
- [Google Gemini Connected Apps help](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en)
- [Google Gemini Workspace app help](https://support.google.com/gemini/answer/15229592?hl=en)
- [Google Help: comments, action items, and emoji reactions](https://support.google.com/docs/answer/65129?co=GENIE.Platform%3DDesktop&hl=en)
- [Google Help: suggest edits in Google Docs](https://support.google.com/docs/answer/6033474?co=GENIE.Platform%3DDesktop&hl=en)
- [Google Help: assign tasks from Google Docs](https://support.google.com/docs/answer/12048749?co=GENIE.Platform%3DDesktop&hl=en)
- [Notion Help: comments, mentions, and reminders](https://www.notion.com/help/comments-mentions-and-reminders)
- [GitHub Docs: pull request reviews](https://docs.github.com/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- [Linear Docs: comments and reactions](https://linear.app/docs/comment-on-issues)
- [Productboard AI](https://support.productboard.com/hc/en-us/articles/15113485128467-Productboard-AI)
- [Productboard customer insights](https://www.productboard.com/use-cases/customer-insights/)
- [Productboard customer feedback tool](https://www.productboard.com/customer-feedback-tool/)
- [Canny feature request management](https://canny.io/use-cases/feature-request-management)
- [Linear Docs: Customer Requests](https://linear.app/docs/customer-requests)
- [Dovetail AI overview](https://docs.dovetail.com/help/dovetail-ai/overview)
- [Dovetail AI dashboards](https://dovetail.com/product/ai-dashboards/)
- [Raycast Manual](https://manual.raycast.com/)
- [Microsoft PowerToys Command Palette](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/overview)
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/)
- [Microsoft App Actions JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json)
- [Microsoft App Actions caller filtering](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-filter-caller)
- [Linear Docs: Search](https://linear.app/docs/search)
- [GitHub Docs: keyboard shortcuts](https://docs.github.com/en/get-started/accessibility/keyboard-shortcuts)
- [Visual Studio Code command palette tips](https://code.visualstudio.com/docs/editing/tips-and-tricks)
- [Slack shortcuts](https://slack.com/help/articles/360057554553-Use-shortcuts-to-take-actions-in-Slack)
- [Notion keyboard shortcuts](https://www.notion.com/help/keyboard-shortcuts)
- [Apple Shortcuts personal automation](https://support.apple.com/guide/shortcuts/intro-to-personal-automation-apd690170742/ios)
- [Apple Shortcuts automation enablement and confirmation controls](https://support.apple.com/guide/shortcuts/enable-or-disable-a-personal-automation-apd602971e63/ios)
- [Apple App Intents](https://developer.apple.com/documentation/appintents)
- [Apple App Intents adoption guide](https://developer.apple.com/documentation/appintents/adopting-app-intents-to-support-system-experiences)
- [Slack new Activity view](https://slack.com/help/articles/46751260742035-Introducing-the-new-Activity-view-in-Slack)
- [Slack Focus Mode](https://slack.com/whats-new)
- [Linear Docs: Inbox](https://linear.app/docs/inbox)
- [Notion Help: Inbox and notifications](https://www.notion.com/help/updates-and-notifications)
- [Microsoft Support: Retrace your steps with Recall](https://support.microsoft.com/en-us/windows/ai/ai-features/retrace-your-steps-with-recall)
- [Microsoft Learn: Manage Click to Do](https://learn.microsoft.com/en-us/windows/client-management/manage-click-to-do)
- [Microsoft Support: Focus in Windows](https://support.microsoft.com/en-us/windows/experience/focus-stay-on-task-without-distractions-in-windows)
- [Microsoft PowerToys Workspaces](https://learn.microsoft.com/en-us/windows/powertoys/workspaces)
- [Microsoft Windows Snap](https://support.microsoft.com/en-us/windows/experience/snap-your-windows)
- [Microsoft PowerToys FancyZones](https://learn.microsoft.com/en-us/windows/powertoys/fancyzones)
- [Apple Support: Stage Manager on Mac](https://support.apple.com/guide/mac-help/use-stage-manager-mchl534ba392/mac)
- [Apple Support: Stage Manager on iPad](https://support.apple.com/guide/ipad/organize-windows-with-stage-manager-ipad1240f36f/ipados)
- [Microsoft Edge Workspaces](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-workspaces)
- [Chrome tab groups](https://support.google.com/chrome/answer/2391819)
- [Firefox tab groups](https://www.firefox.com/en-US/features/tab-groups/)
- [Arc Spaces](https://resources.arc.net/hc/en-us/articles/19228064149143-Spaces-Distinct-Browsing-Areas)
- [Arc Profiles](https://resources.arc.net/hc/en-us/articles/19227964556183-Profiles-Separate-Work-Personal-Browsing)
- [Apple Support: notification summaries and Reduce Interruptions](https://support.apple.com/guide/iphone/summarize-notifications-reduce-interruptions-iph1fbe7d2b9/ios)
- [Apple Support: Focus](https://support.apple.com/guide/iphone/set-up-a-focus-iphd6288a67f/ios)
- [Web.dev Core Web Vitals](https://web.dev/articles/vitals)
- [Web.dev Interaction to Next Paint](https://web.dev/articles/inp)
- [Material Design progress indicators](https://m3.material.io/components/progress-indicators/overview)
- [Apple Human Interface Guidelines: progress indicators](https://developer.apple.com/design/human-interface-guidelines/progress-indicators)
- [Microsoft Fluent 2 Skeleton](https://fluent2.microsoft.design/components/web/react/core/skeleton/usage)
- [Vercel AI SDK streaming foundations](https://ai-sdk.dev/docs/foundations/streaming)
- [Vercel AI SDK resumable chat streams](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot-resume-streams)
- [TanStack Router data loading](https://tanstack.com/router/v1/docs/guide/data-loading)
- [TanStack Router preloading](https://tanstack.com/router/v1/docs/guide/preloading)
- [MDN offline and background operation for PWAs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Web.dev service workers](https://web.dev/learn/pwa/service-workers)
- [MDN Storage quotas and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Web.dev storage for the web](https://web.dev/articles/storage-for-the-web)
- [Microsoft Edge PWA background sync](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/background-syncs)
- [Microsoft Edge PWA offline storage](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/offline)
- [Apple Handoff overview](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html)
- [Microsoft responsive design techniques](https://learn.microsoft.com/en-us/windows/apps/design/layout/responsive-design)
- [Apple Support: Spotlight on Mac](https://support.apple.com/guide/mac-help/search-with-spotlight-mchlp1008/mac)
- [Microsoft Learn: Manage Recall](https://learn.microsoft.com/en-us/windows/client-management/manage-recall)
- [Microsoft PowerToys Command Palette Dock](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/dock)
- [Raycast AI Extensions](https://manual.raycast.com/ai/ai-extensions)
- [OpenAI Help: ChatGPT workspace agents for Enterprise and Business](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business)
- [OpenAI: Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
- [OpenAI: Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/)
- [OpenAI Help: Tasks in ChatGPT](https://help.openai.com/en/articles/10291617-tasks-in-chatgpt)
- [Notion Help: Custom Agents](https://www.notion.com/help/custom-agents)
- [Notion Help: Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions)
- [Notion Help: Custom Agents security features](https://www.notion.com/help/custom-agents-security-features)
- [Glean: Agent Development Lifecycle](https://www.glean.com/blog/agent-dev-lifecycle-2026)
- [Microsoft Learn: Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals)
- [Notion Help: relations and rollups](https://www.notion.com/help/relations-and-rollups)
- [Notion Help: links and backlinks](https://www.notion.com/help/create-links-and-backlinks)
- [Obsidian Help: Graph view](https://obsidian.md/help/plugins/graph)
- [Obsidian Help: Backlinks](https://obsidian.md/help/plugins/backlinks)
- [Obsidian Help: Outgoing links](https://obsidian.md/help/plugins/outgoing-links)
- [GitHub Docs: dependency graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph)

Public user-opinion signals:

- [NotebookLM limitations discussion](https://www.reddit.com/r/notebooklm/comments/1l2aosy/i_now_understand_notebook_llms_limitations_and/)
- [NotebookLM use-case praise](https://www.reddit.com/r/notebooklm/comments/1gi5b07/notebook_lm_is_amazing/)
- [NotebookLM source and hallucination concerns](https://www.reddit.com/r/notebooklm/comments/1o1dhc9/beware_of_relying_on_notebooklm_for_schoolwork/)
- [Perplexity Deep Research comparison](https://www.reddit.com/r/perplexity_ai/comments/1j7dl2m/how_good_is_perplexity_deep_research/)
- [Perplexity source quality discussion](https://www.reddit.com/r/perplexity_ai/comments/1l4va7f/whats_the_1_reason_to_use_perplexity_over_chatgpt/)
- [Perplexity reliability and citation criticism](https://www.reddit.com/r/perplexity_ai/comments/1q0vchs/gemini_vs_perplexity_for_my_2026/)
- [ChatGPT hallucination frustration from a researcher](https://www.reddit.com/r/ChatGPT/comments/1m7oje7/i_love_chatgpt_but_the_hallucinations_have_gotten/)
- [ChatGPT clarification-friction discussion](https://www.reddit.com/r/ChatGPT/comments/1mn8o6j/gpt5_wastes_your_responses_by_asking_way_too_many/)
- [ChatGPT task-deferral discussion](https://www.reddit.com/r/ChatGPT/comments/1mlmsrr/feels_like_chatgpt_5_is_programmed_to_asking/)
- [Claude Projects praise](https://www.reddit.com/r/ClaudeAI/comments/1f7my1u/the_project_feature_is_phenomenal/)
- [Claude Projects and citation concern](https://www.reddit.com/r/ClaudeAI/comments/1i1wbwg/anyone_using_claude_projects_regularly_what_are/)
- [Claude artifact collaboration gap](https://www.reddit.com/r/ClaudeAI/comments/1u92t33/8_things_about_claude_projects_that_took_me_long_to_figure_out/)
- [Claude Research export-source gap](https://www.reddit.com/r/ClaudeAI/comments/1roxy16/export_claude_research_result_with_the_sources/)
- [Claude artifact reliability issue](https://news.ycombinator.com/item?id=45182381)
- [OpenAI community request for team collaboration workspace](https://community.openai.com/t/team-collaboration-workspace-in-chatgpt/1114924)
- [NotebookLM public sharing and moderation question](https://www.reddit.com/r/notebooklm/comments/1g3mcpk/how_to_share_a_notebooklm_i_made_to_the_public/)
- [Hacker News discussion of comments, suggestions, and history in AI knowledge tools](https://news.ycombinator.com/item?id=48675435)
- [Claude Code team-collaboration workflow discussion](https://www.reddit.com/r/ClaudeCode/comments/1rhswxk/how_are_you_actually_using_claude_code_as_a_team/)
- [Experienced developers discussion of AI and weaker team collaboration](https://www.reddit.com/r/ExperiencedDevs/comments/1uecvi7/has_ai_made_developers_less_collaborative_in_your/)
- [Product managers discussing feedback-board bias and effort](https://www.reddit.com/r/ProductManagement/comments/1hdwl2h/why_some_teams_never_use_feedback_tools_like/)
- [Product managers discussing votes versus real product decisions](https://www.reddit.com/r/ProductManagement/comments/1rg551y/pms_who_use_feedback_boards_canny_productboard/)
- [Product managers discussing qualitative feedback at scale](https://www.reddit.com/r/ProductManagement/comments/1l7n9lr/how_do_you_deal_with_qualitative_feedback_as_you/)
- [Productboard alternatives and insight-gathering discussion](https://www.reddit.com/r/ProductManagement/comments/1i8ee7b/any_recommendations_on_productboard_alternatives/)
- [Hacker News discussion of product roadmap and feedback tools](https://news.ycombinator.com/item?id=22827275)
- [Keyboard-first web app discussion](https://www.reddit.com/r/webdev/comments/1pu471y/what_web_app_has_a_great_keyboard_ux_shortcuts/)
- [PowerToys Run versus Command Palette discussion](https://www.reddit.com/r/PowerToys/comments/1tbcksp/powertoys_run_or_command_palette/)
- [GitHub command-palette shortcut collision discussion](https://github.com/orgs/community/discussions/15255)
- [Hacker News command palette interface discussion](https://news.ycombinator.com/item?id=27378590)
- [Hacker News user-driven UI discussion](https://news.ycombinator.com/item?id=35985085)
- [Message mental-load discussion](https://www.reddit.com/r/productivity/comments/1otsw7l/how_do_you_manage_the_mental_load_of_messages/)
- [ChatGPT Projects continuity complaint](https://www.reddit.com/r/ChatGPTPro/comments/1i4h83m/why_is_the_chatgpt_projects_feature_so_terrible/)
- [Human-in-the-loop fatigue discussion](https://news.ycombinator.com/item?id=48942000)
- [Context switching and work setup discussion](https://news.ycombinator.com/item?id=46933529)
- [Tab overload management discussion](https://www.reddit.com/r/productivity/comments/1nxwbhw/how_do_you_all_manage_tab_overload_without/)
- [Hacker News discussion of too many browser tabs](https://news.ycombinator.com/item?id=48934898)
- [Stage Manager positive workflow discussion](https://www.reddit.com/r/MacOS/comments/1r5tpr0/i_finally_understand_stage_manager_its_powerful/)
- [Stage Manager frustration discussion](https://www.reddit.com/r/mac/comments/1dt2h1d/does_anyone_else_find_stage_manager_incredibly/)
- [PowerToys Workspaces discussion](https://www.reddit.com/r/Windows11/comments/1f8w0nt/powertoys_v084_new_workspaces_utility/)
- [Browser workspace versus window manager discussion](https://news.ycombinator.com/item?id=41323174)
- [Persistent browser workspace discussion](https://news.ycombinator.com/item?id=14823807)
- [Slack notification interruption complaint](https://www.reddit.com/r/ADHD/comments/1d3eyjs/slack_is_like_a_torture_device_for_adhd_people/)
- [ChatGPT long-chat latency and continuity complaint](https://www.reddit.com/r/ChatGPTPro/comments/1kg620f/anyone_found_a_good_workaround_for_chatgpt_chats/)
- [Perplexity Deep Research comparison](https://www.reddit.com/r/perplexity_ai/comments/1j7dl2m/how_good_is_perplexity_deep_research/)
- [Perplexity versus ChatGPT source and depth tradeoff discussion](https://www.reddit.com/r/perplexity_ai/comments/1l4va7f/whats_the_1_reason_to_use_perplexity_over_chatgpt/)
- [Hacker News discussion of optimistic UI and data locality](https://news.ycombinator.com/item?id=35626015)
- [Hacker News PWA mobile app experience discussion](https://news.ycombinator.com/item?id=41762614)
- [Hacker News successful PWA product discussion](https://news.ycombinator.com/item?id=40724774)
- [Reddit offline-first conflict discussion](https://www.reddit.com/r/programming/comments/pxkzdf/offline_first_is_not_about_having_no_internet/)
- [Hacker News local-first adoption discussion](https://news.ycombinator.com/item?id=45333021)
- [Hacker News local-first web development discussion](https://news.ycombinator.com/item?id=34857435)
- [Obsidian graph view usefulness debate](https://www.reddit.com/r/ObsidianMD/comments/1efesl5/graph_view_is_so_fucking_useless/)
- [Obsidian local graph usefulness discussion](https://www.reddit.com/r/ObsidianMD/comments/1qk2mfh/how_is_the_knowledge_graph_useful_to_you/)
- [Hacker News discussion of graph maps for agent memory](https://news.ycombinator.com/item?id=48514124)
- [Windows Recall privacy and usefulness discussion](https://www.reddit.com/r/Windows11/comments/1d1fedu/what_do_you_think_about_windows_recalls_new/)
- [Spotlight search degradation discussion](https://www.reddit.com/r/MacOS/comments/1guyo7t/am_i_the_only_one_who_finds_spotlight_search_has/)
- [macOS Finder tags and organization discussion](https://www.reddit.com/r/mac/comments/13502sg/do_you_use_tags_in_finder_if_yes_how_do_you_use_it/)
- [Apple Shortcuts power and authoring-friction discussion](https://www.reddit.com/r/shortcuts/comments/1ldedpg/i_feel_like_the_shortcuts_app_is_so_powerful_and/)
- [Power Automate Copilot context and flow-authoring discussion](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/)
- [MCP structured-output discussion](https://www.reddit.com/r/mcp/comments/1uw8gjr/the_best_thing_i_did_for_my_mcp_server_was_stop/)
- [MCP schema context-budget discussion](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/)
- [MCP tool-description regression testing discussion](https://www.reddit.com/r/mcp/comments/1uofaco/how_do_you_test_that_an_mcp_server_change_didnt/)
- [Apple App Intents Siri AI developer discussion](https://developer.apple.com/forums/thread/832602)
- [Hacker News discussion of agent reliability and predictable workflows](https://news.ycombinator.com/item?id=43535653)
- [AI agents discussion preferring boring, guarded workflows](https://www.reddit.com/r/AI_Agents/comments/1u1j6wk/i_trust_boring_ai_workflows_more_than_autonomous/)
- [Hacker News discussion of approval and permission fatigue](https://news.ycombinator.com/item?id=48308376)
- [AI agent approval fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uws7ct/anybody_else_struggling_with_constant_approvals/)
- [Agent credentials and 2FA approval-fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uvveom/how_are_you_handling_credentials_and_2fa_for/)
- [Human approval layers for agents discussion](https://www.reddit.com/r/AI_Agents/comments/1uya9qt/the_three_layer_problem_with_human_approval_for/)
- [Hacker News discussion of AI waiting and vigilance fatigue](https://news.ycombinator.com/item?id=46934404)
- [AI agents discussion of state-machine workflows](https://www.reddit.com/r/AI_Agents/comments/1ssf0f9/why_i_stopped_building_autonomous_agents_for/)
- [Habituation at the Gate: Rising Approval and Declining Scrutiny in Human Review of AI Agent Code](https://arxiv.org/abs/2606.22721)
- [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/abs/2605.24309)
- [How Agents Ask for Permission: User Permissions for AI Agents, from Interfaces to Enforcement](https://arxiv.org/abs/2607.13718)
- [Hidden Cost of Window Management](https://arxiv.org/abs/1810.04673)
- [A Dynamic Take on Window Management](https://arxiv.org/abs/2511.17516)
- [CMU tab-overload research summary](https://www.cmu.edu/news/stories/archives/2021/may/overcoming-tab-overload.html)
- [Tabs.do: Task-centric Browser Tab Management](https://dl.acm.org/doi/10.1145/3472749.3474777)
- [Orca: Browsing at Scale with Memory-Augmented Agents](https://arxiv.org/html/2505.22831v1)
- [APA task switching cost summary](https://www.apa.org/topics/research/multitasking)

## Capability baseline

### Gemini Notebook

Gemini Notebook is strong at source-centered notebooks, summaries, Audio Overviews, Mind Maps, study-style artifacts, and source-based learning flows. Current official docs show background artifact generation, configurable Audio Overview formats, source type limits, and explicit AI-inaccuracy warnings for generated audio.

Research implication: match the simple source-to-understanding loop, but exceed it with inspectable source coverage, document-grade outputs, source-change maintenance, and publication-ready evidence state.

### ChatGPT Deep Research

OpenAI's help docs emphasize user-controlled source selection, editable research plans, progress visibility, interruption, structured reports, citations or source links, activity history, and downloads in Markdown, Word, and PDF. It also clearly distinguishes fast search from slower deep research.

Research implication: Research needs plan review, source-scope control, progress, interruption, activity history, exports, and a visible speed-vs-depth mode. The durable output should be canonical Markdown, not only a report in chat history.

### Perplexity

Perplexity Projects combine workspaces, custom instructions, files, connected sources, collaboration, and Computer tasks. Its changelog highlights upgraded Deep Research, Model Council for parallel model comparison and disagreement synthesis, learning mode, memory improvements, and browser-agent automation.

Research implication: automation must inherit Project context, but it must also remain policy-bound, auditable, interruptible, and reversible. Model comparison and disagreement surfacing should be treated as verification tools, not novelty features.

### Claude

Claude Projects provide self-contained workspaces with chat history, project knowledge, instructions, RAG for larger project knowledge on paid plans, and sharing controls. Claude Artifacts separate substantial reusable content from chat and support apps, visualizations, and standalone content. Anthropic's search-result API docs show structured source attribution for RAG-style applications.

Research implication: users want durable artifacts and project knowledge, but Research should avoid artifact drift by making documents and artifacts projections of canonical content with stable IDs, citations, and revision history.

## User opinion themes

### Trust and citation precision

Users praise source-grounded tools when citations make work verifiable, but complaints recur around hallucinated citations, citations that do not support the stated claim, and documents that are not read completely.

Research commitment:

- every factual block has claim status;
- citations resolve to immutable source versions and exact locators;
- citation entailment is tested;
- source coverage is visible;
- unsupported, stale, disputed, or unresolved claims block publication.

### Hidden context and source limits

Users are confused when a tool appears to have uploaded or accepted a source but does not actually reason over all of it. Official product docs also expose meaningful source/file/query limits.

Research commitment:

- each source exposes stored, parsed, searchable, citable, and richly-understood capability independently;
- large files show coverage and omissions;
- answers show whether they used complete source coverage, sampled evidence, or partial retrieval;
- imports never imply full understanding before parsing and indexing prove it.

### Speed versus depth

Users distinguish fast search, focused search, and slower deep research. Some value Perplexity's speed and source breadth; others value ChatGPT's more thorough reports but note time and usage-cost tradeoffs.

Research commitment:

- expose explicit modes such as quick answer, focused retrieval, deep research, and monitored automation;
- show expected latency and cost before expensive work;
- preserve cancellation and status paths under saturation;
- make partial results useful without presenting them as complete.

### Latency and progressive delivery

Official web and design-system guidance emphasizes responsiveness, real progress state, skeletons only when structure and wait length fit, streaming for long AI output, resumable streams, and route/data preloading. Public discussions add the practical research-workflow pain: long AI chats become sluggish, users want fast source-oriented digging for quick work, and deep reports are acceptable only when the extra time buys better coverage.

Research commitment:

- return an immediate authorized Project shell, Operation state, and next action before expensive work finishes;
- progressively deliver source scope, retrieval coverage, Partial Results, citation readiness, document patches, exports, automation state, cancellation, and recovery;
- label partial, stale, queued, degraded, blocked, unsupported, cancelled, and final states consistently;
- allow Fast Paths, stale-while-revalidate projections, route preloading, optimistic UI, and provider warmup only after authorization, policy, source-version, document-revision, retention, budget, and invalidation checks;
- keep status and cancellation paths available during provider degradation and background saturation.

### Durable outputs and artifact drift

Users value artifacts, reports, and project knowledge, but public discussions show pain around artifacts that disappear into chat, cannot be shared across a team, lose source metadata on export, or become static snapshots disconnected from live data.

Research commitment:

- documents are canonical Markdown with stable blocks;
- artifacts declare source and claim dependencies;
- exported reports include source and citation metadata where policy allows;
- shared Project outputs are first-class objects, not frozen chat leftovers;
- generated artifacts cannot become a second truth store.

### Collaboration and shared decisions

Official collaboration products make comments, suggestions, assignments, reviews, sharing, and tasks familiar baseline behavior. Public AI-tool discussions add a sharper concern: private chat work, hidden agent activity, weak shared context, missing comments or suggestions, and unclear decision history make team workflows harder to trust.

Research commitment:

- comments, mentions, assignments, suggestions, and review requests attach to exact Project resources;
- AI and human changes use the same reviewable patch path;
- accepted decisions preserve rationale, alternatives, evidence, authority, and revisit triggers;
- unresolved objections, stale threads, and orphaned anchors stay visible;
- public outputs do not leak private comments, reviewer identity, source context, or internal objections.

### Product truth and feedback bias

Official feedback and roadmap tools centralize requests, link customer evidence to feature ideas, cluster themes, and close loops with requesters. Public practitioner discussions add the operating risk: public boards and upvotes can overrepresent vocal power users, feature wording can hide the underlying job, and qualitative feedback needs PM review before it becomes roadmap truth.

Research commitment:

- every feedback, public user-opinion, official-reference, runtime, implementation, and documentation signal enters a provenance-bearing Product Truth Board with source-quality, confidence, recency, segment, and bias labels;
- votes, comments, AI clusters, and anecdotes are labeled by confidence, recency, segment, and bias rather than treated as ranked build instructions;
- contradictions between product docs, requirements, implementation status, public claims, official references, experiments, and release evidence stay visible until resolved;
- rejected, deferred, and strategic-bet decisions are preserved as explicit non-action or truth decisions with revisit triggers;
- documentation and requirement patches generated from signals remain reviewable patches, not silent rewrites.

### Automation with control

Competitors are moving toward project-scoped computer tasks, browser agents, model councils, memories, and research automation. Users want the leverage but also complain when tools ask needless questions, overrun limits, or silently fail.

Research commitment:

- automations inherit Project context and policy;
- automations require explicit scope, budget, tools, approval gates, and stop conditions;
- users can pause, interrupt, replay, and inspect automation;
- model disagreement, evidence conflict, and uncertainty are surfaced as review states;
- external writes remain draft, reviewable, and reversible.

### Keyboard-first command control

Official products across launchers, issue trackers, developer tools, collaboration apps, and writing tools make command palettes, keyboard shortcuts, slash commands, and contextual quick actions a familiar baseline. Public discussions add the product risk: shortcuts collide, hidden command surfaces reduce discoverability, and fast launchers are frustrating when they obscure target, effect, or recovery state.

Research commitment:

- every primary Project workflow has both visible UI and keyboard-first command access;
- commands show target, effect, risk, approval class, expected version, and recovery path before material execution;
- shortcuts are remappable and conflict-aware;
- command suggestions are explainable and dismissible;
- command invocation uses typed descriptors, preflight, idempotency, approval, and ActivityEvents rather than component-local hidden behavior.

### Typed action surfaces need inspectable contracts

Official App Intents, App Actions, model tools, connected apps, and shortcut ecosystems show a market pattern toward discoverable action catalogs. Public practitioner signals show why Research cannot stop at action names: natural-language builders can lose context, tool schemas can consume model budget, structured outputs improve reliability, and tool-description changes can alter behavior enough to require regression testing.

Research commitment:

- Project Action Surface descriptors are server-owned projections over canonical Project commands and domain services, not independent handler systems;
- action descriptors include target, effect, source scope, side-effect class, approval class, expected version, disabled reason, idempotency, Activity, Operation, ActionCard, and recovery metadata before material execution;
- the same descriptors govern Command Center, visible UI, API, SDK, CLI, MCP, native companion, browser extension, connected-app, and Automation Recipe projections;
- compact action catalogs and lazy-loaded schemas are allowed only when they preserve policy, authorization, disabled reasons, and recovery;
- source content, connector payloads, generated summaries, prompt-only handler names, and external assistant actions cannot define, override, or hide Project actions.

### Focus continuity and attention control

Official products now expose overlapping solutions for returning to work: Slack Activity gathers messages and reminders into one action surface, Linear Inbox centralizes issue updates, Notion Inbox groups page and comment-thread updates, ChatGPT Projects presents ongoing work context, ChatGPT Deep Research shows activity history and interruptible progress, ChatGPT Scheduled Tasks remembers previous monitoring runs, Microsoft Recall provides opt-in local activity recall, and Apple and Windows Focus systems reduce notification interruptions.

Public discussions point to the unresolved gap: users want fewer inboxes, less context switching, reliable AI project continuity, and a way to return to work without reconstructing state manually. They also react strongly against noisy notifications and opaque or privacy-invasive recall.

Research commitment:

- preserve Focus State as minimized references to canonical Project state, not as a hidden transcript or screen recording;
- rebuild Resume Digests from ActivityEvents, Operations, ActionCards, source changes, document revisions, collaboration state, notifications, command invocations, automation outcomes, and Product Truth signals;
- group resume information by next action, blocker, risk, and source of change rather than raw notification order;
- make Focus Sessions suppress or batch low-priority interruptions while preserving required approvals, incidents, destructive-risk alerts, and recovery paths;
- expose continue, catch up, next review, start focus, and end focus through visible UI and the Command Center;
- invalidate or redact focus and resume projections when permissions, source rights, retention, deletion, or Project policy changes.

### Offline tolerance and device continuity need capability labels

Official browser guidance supports service workers, local storage APIs, installation, offline fallbacks, and background sync patterns, but the same guidance also shows that browser storage can be quota-limited or evicted and that background capabilities vary by browser and installation context. Apple Handoff and operating-system continuity patterns show that users expect cross-device resume, while responsive-design guidance reinforces that mobile and tablet behavior must be designed, not squeezed.

Public discussions add the practical product risk: users want work to survive flaky networks and device switches, but they distrust web apps that lose local data, hide PWA limitations, or silently overwrite remote state after reconnect. Offline-first praise is usually about resilience and ownership; complaints are usually about sync conflicts, storage surprises, and native-feature gaps.

Research commitment:

- label device, browser, install, storage, push, background-sync, input, and viewport capabilities before relying on them;
- preserve recoverable local drafts, queue status, and reconnect state without treating local cache as canonical Project truth;
- reauthorize local drafts, offline packets, queued intents, Workset refs, Focus refs, and handoff refs before use;
- block high-risk offline execution for publication, deletion, billing, permissions, support access, connector writes, GitHub pushes, and public notifications;
- route sync conflicts through review with expected versions, current server state, local draft effect, approval class, and recovery path;
- validate mobile, tablet, desktop, installed-app, private-browsing, storage-eviction, service-worker-update, keyboard, touch, pointer, and screen-reader journeys.

### Spatial workbenches beat tab sprawl when they stay task-aware

Official window and browser products now expose many versions of task layout: PowerToys Workspaces can launch groups of apps into saved positions, Windows Snap and FancyZones arrange windows, Stage Manager groups app windows, Edge Workspaces shares browser tabs, browser tab groups organize related pages, and Arc separates work areas through Spaces and Profiles. Public discussions show the product risk: users want preserved context, but layout tools lose trust when they feel confusing, decorative, or detached from the work object. HCI and tab-overload research points to real setup and switching cost, so Research should treat layout as a workflow contract rather than visual decoration.

Research commitment:

- Spatial Workbench state belongs to one Project and stores minimized Workset, pane, and layout references rather than OS windows, browser history, screenshots, clipboard content, or raw source text;
- Worksets preserve source review, drafting, verification, collaboration review, publication, and release-readiness layouts without creating a fourth primary surface;
- evidence-aware splits bring a claim, supporting source span, draft block, and review context together while keeping Sources, Claims, and Documents authoritative;
- Workset restore must reauthorize panes, label stale or redacted resources, and offer clear recovery instead of implying hidden access;
- adaptive layout suggestions remain explainable, reversible, and measured by reduced switching friction, restore correctness, accessibility, and user corrections.

### Local maps and impact previews beat decorative global graphs

Official products expose pieces of the pattern: Spotlight searches across apps and files, Recall offers a local timeline and natural-language recall with strict opt-in and management controls, Notion and Obsidian expose relations, backlinks, outgoing links, graph views, and local graphs, and GitHub's dependency graph shows dependency paths and pull-request impact for vulnerable packages. Public discussions add the practical lesson: users often dismiss global graph views as decorative, but they value local graph neighborhoods, path finding, backlinks, filters, dependency impact, and search results that explain where an item lives and what depends on it.

Research commitment:

- Project Atlas opens focused neighborhoods, path queries, and Impact Reports instead of making a whole-Project graph the default surface;
- map nodes and edges are projections over canonical Sources, Claims, Documents, Activity, Recipes, Product Truth, GitHub, publications, and release evidence;
- Impact Reports are required before high-risk source, document, publication, recipe, policy, retention, parser, model-role, or release-candidate changes with downstream effects;
- Atlas does not capture ambient OS activity or screen snapshots;
- global graph views remain secondary to searchable local neighborhoods, accessible tables, and safe next actions.

### Project operating layers beat OS-wide recall and generic autonomy

Official capabilities show OS and workspace tools converging on recall, screen action, personal automation, command palettes, persistent docks, AI extensions, shared agents, schedules, permissions, analytics, and lifecycle governance. Public signals point to the unresolved product constraint: users want leverage, but they reject clunky automation editors, unpredictable agents, approval fatigue, quiet plausible failures, and long waits that require constant vigilance.

Research commitment:

- assemble Work Packets from canonical Project state, not from screen, clipboard, or cross-app ambient capture;
- make next actions link to commands, ActionCards, Operations, Atlas, Trust, Focus, Recipes, Product Truth, Sources, Documents, and Activity state;
- show target, effect, expected version, source scope, cost, latency, approval class, and recovery path before material execution;
- make recommendations dismissible, correctable, attributable, and measured by accepted outcomes, corrections, dismissals, stale rates, approval burden, and reversals;
- convert repeated work into non-runnable RecipeDraftCandidates until validation, simulation, owner approval, canary limits, and outcome metrics pass;
- prohibit hidden autonomy and OS-wide recall semantics from the Project Operating Layer.

### Approval must become delegated risk policy, not repeated confirmation

Official products expose app permission controls, per-agent approval behavior, takeover moments, agent directories, audit logs, analytics, resource-access warnings, owner-transfer rules, and structured approval workflows. Public discussions and current research point to the product failure mode: repeated prompts can habituate reviewers, while removing prompts creates uncontrolled autonomy. The better design is structural enforcement with scoped delegation, not endless yes/no dialogs.

Research commitment:

- treat approval prompts as a scarce user-attention budget;
- batch equivalent low-risk approvals only when the risk envelope, source scope, destination, expected version, and recovery path match;
- turn repeated safe decisions into expiring, revocable DelegatedTrustGrants with explicit scope, budget, destinations, canary rules, and outcome metrics;
- preserve hard stops for publication, deletion, billing, administration, connector widening, new destinations, larger budgets, and irreversible external writes;
- enforce approvals and grants at the mutation boundary, not through chat language or notification-only prompts;
- measure approval-load quality by accepted outcomes, corrections, denials, reversals, stale receipts, support cases, and fatigue signals.

## Advanced feature opportunities

These are promising only if they preserve Research's evidence and no-drift architecture. Operating-layer opportunities must also satisfy [`advanced-operating-layer-differentiation.md`](advanced-operating-layer-differentiation.md).

1. **Evidence coverage map:** visual source coverage by document section, claim, and artifact.
2. **Model council for verification:** parallel model or engine comparison focused on disagreement, citation support, and missing evidence.
3. **Automation timeline:** a replayable timeline of source changes, research tasks, approvals, and document patches.
4. **Living artifact graph:** Studio artifacts that stay connected to claims, sources, and document blocks.
5. **Source-change autopilot:** scheduled source monitoring that proposes minimal patches and explains why each change matters.
6. **Prompt-friction governor:** intent-first automation that asks clarifying questions only when missing information changes the outcome, cost, source authority, risk, output structure, or approval path, governed by [`../01-product/intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md).
7. **Trust dashboard:** Project-level view of unsupported claims, stale sources, citation confidence, source rights, and publication blockers.
8. **Performance mode switch:** explicit quick, balanced, deep, and scheduled modes with visible tradeoffs.
9. **Review and decision layer:** anchored comments, AI/human suggestions, assignments, review requests, decision records, and presence that preserve async team context without becoming a second content or evidence authority.
10. **Product truth board and contradiction radar:** evidence-linked feedback, user-opinion, official-reference, analytics, experiment, runtime, requirement, documentation, implementation, and release signals that keep product decisions current without becoming a popularity-driven roadmap.
11. **Outcome-scored automation:** automation scorecards and adaptive workflow recommendations that measure accepted output, stale-claim reduction, cost, latency, approval burden, and safety blockers instead of treating run volume as user value.
12. **Universal command center:** Project-wide command discovery, keyboard workflows, shortcut governance, action previews, run control, review resolution, automation dry-runs, and typed command execution safety governed by [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md).
13. **Focus continuity and Resume Digests:** privacy-safe Project resume, Focus Sessions, attention ranking, next-action grouping, notification suppression, and caught-up checkpoints governed by [`../01-product/focus-continuity-and-work-resume.md`](../01-product/focus-continuity-and-work-resume.md).
14. **Offline/device continuity and local sync:** capability-labeled desktop, tablet, mobile, installed-app, reload, reconnect, local-draft, local-cache, queue, and sync-conflict behavior governed by [`../01-product/offline-device-continuity-and-mobile-experience.md`](../01-product/offline-device-continuity-and-mobile-experience.md).
15. **Latency-aware progressive workflows:** immediate authorized status, Partial Results, Fast Paths, stale-while-revalidate projections, preloading, cache safety, cancellation, and recovery governed by [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md).
16. **Project Atlas and Impact Reports:** focused map neighborhoods, path queries, downstream impact previews, missing-link suggestions, and permission-safe redaction governed by [`../01-product/project-atlas-and-impact-navigator.md`](../01-product/project-atlas-and-impact-navigator.md).
17. **Spatial Workbench and Worksets:** Project-scoped task layouts, evidence-aware splits, pane hydration, suspend/restore, and projection-safe layout state governed by [`../01-product/spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md).
18. **Project Operating Layer and Work Packets:** Project-scoped current-work packets, next safe actions, repeated-work capture, recommendation observations, and work-control telemetry governed by [`../01-product/project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md).
19. **Delegated trust and approval-load control:** scoped grants, approval batching, approval budgets, fatigue signals, revocation, and fail-closed enforcement governed by [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md).
20. **Project Action Surface:** typed action descriptor catalog, compact projection, schema lazy loading, disabled-reason recovery, and parity across Command Center, API, SDK, CLI, MCP, native companion, browser extension, connected-app, and Automation Recipe surfaces governed by [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md) and [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md).

## Product guardrails

- Do not position anecdotal user posts as market proof.
- Do not use any public, survey, news-analysis, customer, runtime, official, or generated signal for a stronger decision than its source-quality class allows.
- Do not copy competitor language or interface patterns directly.
- Do not claim a competitor capability without current official-source review.
- Do not add advanced automation before source authority, citation support, document persistence, and auditability are working.
- Do not trade trust, permissions, or recoverability for speed.
- Do not add an advanced feature from this audit unless its SignalDecisionLedger entry names the objective dimension, affected requirements, affected documents, validation expectation, owner, and revisit trigger.
- Do not treat OS-wide recall, generic app automation, raw trace views, global graphs, or window restoration as Research differentiation unless the advanced operating-layer policy accepts the scoped version and records the non-action alternative.
- Do not let external assistants, OS action systems, MCP clients, native companions, browser extensions, connected apps, recipes, source content, or prompt-only handler names bypass the Project Action Surface.
- Do not use action count, tool count, schema length, connector breadth, or app-action presence as value proof without outcome, safety, latency, approval-burden, recovery, and user-comprehension evidence.

## Documentation update rule

When this audit changes a product requirement, update all affected canonical docs in the same change:

- product contract;
- source, evidence, document, AI, and automation contracts;
- command and Project Action Surface contracts;
- advanced operating-layer differentiation policy;
- advanced feature opportunity register;
- implementation plan;
- requirement registry;
- launch gates;
- Product Truth Board and SignalDecisionLedger disposition;
- specification signal decision ledger;
- source-quality records and confidence labels;
- official-reference and public-signal records;
- external signal refresh and competitive watch records;
- user-facing status language.

If a change would make one document contradict another, the conflict must be resolved before validation passes.
