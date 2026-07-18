# Advanced operating-layer differentiation

**Review date:** 2026-07-18
**Status:** planning evidence and product differentiation policy, not implemented runtime behavior

This document translates current operating-system, workspace-agent, automation, window-management, and user-opinion signals into accepted Research differentiators and explicit non-actions. It does not create customer-facing claims. Runtime behavior is implemented only when the governing product, architecture, security, and delivery contracts record validation evidence.

Research should not compete with operating systems by capturing more ambient activity or compete with generic agent builders by promising broader autonomy. Research should differentiate by using canonical Project state, evidence, claims, documents, sources, permissions, Activity, Product Truth, automation lifecycle, and release evidence to help users do sourced knowledge work faster, with less drift and better control.

Signals in this document must resolve through the Product Truth Board and SignalDecisionLedger governed by [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md). Accepted signals update the governing contracts listed here. Rejected or deferred signals become explicit non-action decisions with revisit triggers.
Recurring refresh of OS, workspace-agent, automation, UX, performance, trust, and public-opinion evidence is governed by [`../06-delivery/external-signal-refresh-and-competitive-watch.md`](../06-delivery/external-signal-refresh-and-competitive-watch.md). Differentiators in this document cannot support launch claims when their watch items are stale.
Frontier OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion signals must pass [`../06-delivery/frontier-feature-watch-and-novelty-control.md`](../06-delivery/frontier-feature-watch-and-novelty-control.md) before they can change accepted differentiators, rejected non-actions, implementation plans, benchmark scope, or public claims.
Prioritization, sequencing, validation readiness, and non-action disposition for advanced opportunities are governed by [`advanced-feature-opportunity-register.md`](advanced-feature-opportunity-register.md).
Prototype, dogfood, beta, adoption, deferral, kill, and non-action decisions for advanced opportunities are governed by [`../06-delivery/advanced-feature-incubation-and-prototype-governance.md`](../06-delivery/advanced-feature-incubation-and-prototype-governance.md).
Source-quality classes, confidence labels, representativeness, bias, citation policy, and allowed decisions for public, customer, survey, research, official, runtime, and generated evidence are governed by [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md).
Outcome metrics, strategic-bet scorecards, baselines, anti-metrics, and launch-blocking OutcomeReviews are governed by [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md).
Same-task comparator baselines and blockers for advanced or better-than claims are governed by [`../06-delivery/advanced-differentiation-benchmark-matrix.md`](../06-delivery/advanced-differentiation-benchmark-matrix.md).
Specification-mode signal decisions for accepted differentiators, rejected non-actions, and research-more items are summarized in [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md) until runtime Product Truth exists.

## Sources reviewed

Official capability references:

- [Microsoft Support: Privacy and control over Recall](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience)
- [Microsoft Support: Retrace your steps with Recall](https://support.microsoft.com/en-us/windows/ai/ai-features/retrace-your-steps-with-recall)
- [Microsoft Support: Click to Do in Recall](https://support.microsoft.com/en-us/windows/ai/ai-features/click-to-do-in-recall-do-more-with-what-s-on-your-screen)
- [Microsoft PowerToys Workspaces](https://learn.microsoft.com/en-us/windows/powertoys/workspaces)
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/)
- [OpenAI Academy: Workspace Agents](https://openai.com/academy/workspace-agents/)
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools)
- [OpenAI: Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
- [Apple App Intents](https://developer.apple.com/documentation/appintents)
- [Gemini Connected Apps](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en)
- [Notion AI](https://www.notion.com/product/ai)
- [Notion Custom Agents](https://www.notion.com/product/agents)
- [Notion Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions)
- [Notion Custom Agents security features](https://www.notion.com/help/custom-agents-security-features)
- [Glean Agent Development Lifecycle](https://docs.glean.com/agents/agent-development-lifecycle/adlc)
- [Atlassian Rovo](https://www.atlassian.com/software/rovo)
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/)
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai)
- [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/)
- [Microsoft Support: PC insights](https://support.microsoft.com/en-us/microsoft-copilot/pc-insights)
- [LangSmith Observability](https://www.langchain.com/langsmith/observability)
- [LangSmith Evaluation](https://www.langchain.com/langsmith/evaluation)
- [OpenTelemetry GenAI observability](https://opentelemetry.io/blog/2026/genai-observability/)
- [Sentry Seer](https://docs.sentry.io/product/ai-in-sentry/seer/)
- [GitHub security and quality AI features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features)
- [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity)
- [Zapier agent statuses](https://help.zapier.com/hc/en-us/articles/36818600959501-Understand-your-agent-s-statuses)
- [Causely: What agents really need is causal history](https://arxiv.org/abs/2605.18327)
- [Traccia: OpenTelemetry-based agent governance](https://arxiv.org/abs/2607.14309)

Directional user-opinion and practitioner signals:

- [LangChain agent-debugging discussion](https://www.reddit.com/r/LangChain/comments/1udre9c/im_curious_how_people_building_ai_agents_handle/)
- [Hacker News discussion of AI waiting and vigilance fatigue](https://news.ycombinator.com/item?id=46934404)
- [ChatGPT workspace agents experience discussion](https://www.reddit.com/r/AI_Agents/comments/1tkwnm1/your_experience_with_chatgpt_workspace_agents/)
- [PowerToys Workspaces and multiple Chrome windows discussion](https://www.reddit.com/r/PowerToys/comments/1m7yqzd/workspaces_with_multiple_chrome_windows/)
- [PowerToys Workspaces and web apps discussion](https://www.reddit.com/r/PowerToys/comments/1f8uq73/workspaces_and_web_apps/)
- [Windows Recall privacy discussion](https://www.reddit.com/r/sysadmin/comments/1cyt4bv/windows_11_recall_capture_every_moment_on_your_pc/)
- [Experienced developers AI-agent skepticism discussion](https://www.reddit.com/r/ExperiencedDevs/comments/1i02lyn/what_are_your_thoughts_on_ai_agents_have_you_seen/)
- [Power Automate Copilot flow-authoring context discussion](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/)
- [MCP structured-output discussion](https://www.reddit.com/r/mcp/comments/1uw8gjr/the_best_thing_i_did_for_my_mcp_server_was_stop/)
- [MCP schema context-budget discussion](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/)
- [Stage Manager workflow discussion](https://www.reddit.com/r/MacOS/comments/1l4pgck/for_anyone_who_ignored_stage_manager_on_mac_its/)
- [macOS window-management discussion](https://www.reddit.com/r/macapps/comments/11q9p9k/whats_a_good_window_management_app_similar_to/)
- [AI agents in production discussion](https://www.reddit.com/r/AI_Agents/comments/1rtiplc/running_ai_agents_in_production_what_does_your/)
- [Hacker News observability cost and noise discussion](https://news.ycombinator.com/item?id=46617744)
- [Agent causal history discussion](https://www.reddit.com/r/AI_Agents/comments/1uw82dv/you_need_to_go_beyond_mere_observability_ai/)
- [LangChain trajectory evaluation discussion](https://www.reddit.com/r/LangChain/comments/1rh2cvq/evaluating_langchain_agents_beyond_final_output/)
- [Production agent durable-state and action-ledger discussion](https://www.reddit.com/r/AI_Agents/comments/1uf7ihq/does_running_a_reliable_production_agent_with/)

User-opinion sources are directional signals only. They are not statistical proof and must not be used as customer-facing claims. Any signal that changes differentiation scope needs a source-quality record before Product Truth accepts, rejects, defers, or records a non-action.

## Market convergence

### Operating systems are adding recall and screen action

Current OS direction includes optional local activity recall, current-screen actions, privacy controls, filters, deletion paths, and policy management. These capabilities are useful evidence of user demand for resume, context, and action, but they also create privacy and trust pressure.

Research implication: Research should not build OS-wide recall. It should rebuild Project context from canonical Project records and explicit companion grants.

### Workspace agents are adding shared repeatable work

Workspace-agent products are converging on repeatable workflows, triggers, tools, connected systems, permissions, shared agents, analytics, audit trails, and lifecycle controls.

Research implication: Research should not become a generic agent-builder canvas. It should make Project-native research, maintenance, citation, publication, feedback, GitHub, and review automation lifecycle-managed and evidence-linked.

### Enterprise agent governance is becoming table stakes

Enterprise guidance increasingly treats agents as nondeterministic systems that need design, testing, ownership, versioning, monitoring, least privilege, metrics, and retirement.

Research implication: saved research contracts, Automation Recipes, maintenance schedules, source refreshes, and external-action proposals need lifecycle governance before broad automation ships.

### Window and workspace tools reduce setup cost but rarely understand evidence

OS and browser workspaces restore apps, windows, tabs, positions, and grouped work areas. Practitioner discussion points to brittleness around browsers, web apps, profiles, and restore details.

Research implication: Research Worksets should restore task context, evidence splits, source-review state, and document-review state from Project records, not from OS window capture.

### Users are reacting to privacy, brittleness, waiting, and weak debugging

Public discussions repeatedly point to concern about ambient capture, clunky automation editors, brittle workflows, unclear trigger behavior, cost and limit surprises, repeated approvals, unpredictable waits, and traces that show failure without explaining what to fix.

Research implication: advanced features must reduce operational burden, not add a new layer of opaque activity.

### AI surfaces can undermine choice even when capability improves

Browser and operating-system AI surfaces are moving into defaults, onboarding, task resume, search, browsing history, and link handling. Current browser-choice research shows that users can experience advanced AI surfaces as coercive when activation, migration, defaults, nagging, or browser routing override their intent.

Research implication: Research should treat choice-respecting behavior as part of advanced UX. AI surfaces must be opt-in where material, easy to disable, explainable when policy-managed, portable where policy allows, and never dependent on forced browser, assistant, companion, or default-setting control.

## Differentiation thesis

Research wins by being Project-native:

- not OS-wide memory, but evidence-linked Project recall;
- not generic app automation, but source, claim, document, publication, feedback, and repository automation;
- not hidden autonomy, but typed plans, simulations, dry-runs, approvals, and reversible paths;
- not global graph spectacle, but local impact and next safe action;
- not activity metrics, but accepted outcomes and maintained truth;
- not broad model traces, but support-safe debugging tied to canonical Project records.

## Accepted differentiators

| Differentiator | User problem | What Research does | Governing docs | Validation expectation |
|---|---|---|---|---|
| Evidence-native Work Packets | Users need to resume work without trusting screen history or hidden memory. | Assemble current work from Project, Source, Claim, Document, Activity, Focus, Atlas, Recipe, Trust, and Product Truth records. | [`../01-product/project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md), [`../02-architecture/project-operating-layer-control-plane.md`](../02-architecture/project-operating-layer-control-plane.md) | Work Packets rebuild after reload, Project switch, device switch, and permission changes without raw ambient capture. |
| Claim-aware next actions | Users need guidance that knows what is unsupported, stale, contradicted, or publication-blocking. | Rank next safe actions from authoritative Claim, EvidenceSpan, Trust, Atlas, Activity, and release-readiness state. | [`../01-product/trust-dashboard-and-evidence-coverage.md`](../01-product/trust-dashboard-and-evidence-coverage.md), [`../03-ai/claims-evidence-citations.md`](../03-ai/claims-evidence-citations.md), [`../01-product/project-atlas-and-impact-navigator.md`](../01-product/project-atlas-and-impact-navigator.md) | Recommendations show target, effect, evidence link, approval class, recovery path, dismissal, correction, and outcome observation. |
| No-ambient-capture native companion | Users want quick capture and deep links without OS-wide surveillance. | Support explicit active-tab, selected-text, file-watch, share/import, notification, and global command grants that remain Project-scoped and revocable. | [`../01-product/native-workspace-companion-and-os-integration.md`](../01-product/native-workspace-companion-and-os-integration.md), [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md), [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md) | Release evidence proves no screen history, clipboard scraping, browser-history scraping, keylogging, camera, microphone, or hidden OS-window capture. |
| Scenario-before-side-effect | Users need to understand likely consequences before risky automation or maintenance. | Route high-risk changes through Scenario Lab simulations, dry-runs, stale-plan checks, live-test labels, and apply-candidate handoff. | [`../01-product/scenario-lab-and-change-simulation.md`](../01-product/scenario-lab-and-change-simulation.md), [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md), [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md) | Simulations are authorization-filtered, content-minimized, stale-aware, no-side-effect by default, and measured against actual outcomes after approval. |
| Automation registry and run debugger | Users need to know what automation exists, what it did, why it failed, and whether it was useful. | Centralize automation status, dry-run review, trace comparison, failure taxonomy, replay eligibility, support-safe diagnostics, and outcome links. | [`../01-product/automation-registry-and-run-debugger.md`](../01-product/automation-registry-and-run-debugger.md), [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md) | Every saved or scheduled automation exposes lifecycle state, owner, budget, scope, side-effect class, run evidence, failure reason, and accepted-outcome linkage. |
| Project Health and causal repair | Users need to know why a Project is slow, stale, blocked, costly, quiet-wrong, or failing without reading raw traces or trusting unsupported AI root-cause guesses. | Convert authorized Project state, Activity, Operations, telemetry aggregates, run trajectories, support diagnostics, Product Truth, release evidence, and automation recovery records into causal HealthFindings with counterevidence, unknowns, confidence, repair eligibility, dry-runs, and outcome proof. | [`../01-product/project-health-and-repair.md`](../01-product/project-health-and-repair.md), [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md), [`../06-delivery/telemetry-and-experience-instrumentation-matrix.md`](../06-delivery/telemetry-and-experience-instrumentation-matrix.md), [`../06-delivery/advanced-differentiation-benchmark-matrix.md`](../06-delivery/advanced-differentiation-benchmark-matrix.md) | Trace-to-finding benchmarks, HealthLineageEdge tests, false-cause and false-positive metrics, diagnostic-waste budgets, support-safe redaction tests, repair dry-run and outcome evidence, and user comprehension studies pass before any root-cause, self-healing, or better-than-observability claim. |
| Maintenance patches instead of hidden rewrites | Users need living documentation without silent drift or unreviewed regeneration. | Detect source changes, revalidate claims, propose minimal typed patches, and block publication when support is stale or missing. | [`../01-product/source-change-maintenance-and-living-docs.md`](../01-product/source-change-maintenance-and-living-docs.md), [`../02-architecture/continuous-knowledge-maintenance.md`](../02-architecture/continuous-knowledge-maintenance.md) | Maintenance runs preserve source versions, expected document revisions, patch review decisions, stale-claim labels, and no-silent-rewrite evidence. |
| Task Worksets over app windows | Users want fast task setup without brittle OS window restoration. | Preserve Project-scoped Worksets, pane purposes, evidence-aware splits, pinned resources, stale labels, redaction, and keyboard/touch/screen-reader alternatives. | [`../01-product/spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md), [`../02-architecture/spatial-workbench-layout-and-worksets.md`](../02-architecture/spatial-workbench-layout-and-worksets.md), [`../01-product/focus-continuity-and-work-resume.md`](../01-product/focus-continuity-and-work-resume.md) | Workset restore validates authorization and versions, avoids layout-only authority, and reduces setup friction without hiding source or document state. |
| Approval-load control through delegated risk policy | Users need fewer prompts without losing control over high-risk actions. | Convert repeated low-risk choices into scoped, expiring, revocable DelegatedTrustGrants while preserving hard stops. | [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md), [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md) | Grants fail closed on drift, fatigue signals are measured, high-risk action classes remain blocked without fresh receipts, and all receipts are auditable. |
| Progressive delivery with truth labels | Users should not stare at uncertain long-running work or mistake partial output for final evidence. | Return immediate authorized shell/status, Partial Results, cancellation, stale labels, cache labels, Fast Path boundaries, and recovery paths. | [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md), [`../02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](../02-architecture/progressive-delivery-and-fast-path-cache-policy.md) | First useful status, cancellation, cache safety, stale labels, denied Fast Paths, and final evidence readiness are measured separately. |
| Product Truth Board and contradiction radar | Teams need market/user/implementation/docs signals to stay current without becoming popularity-driven. | Route official references, user opinions, feedback, analytics, experiments, runtime evidence, requirements, docs, launch evidence, and public claims into provenance-bearing truth decisions. | [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md), [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md), [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md) | Signals preserve source quality, source, confidence, representativeness, bias, affected requirements, affected docs, decision, non-action alternative, owner, evidence, and revisit trigger. |
| Choice-respecting AI surfaces | Users need advanced AI help without hidden activation, forced defaults, nag loops, or browser/assistant lock-in. | Keep AI surfaces opt-in where material, reversible, policy-explainable, exportable where allowed, and disconnected from forced browser, assistant, companion, or default-setting control. | [`../01-product/adaptive-personalization-and-preference-controls.md`](../01-product/adaptive-personalization-and-preference-controls.md), [`../01-product/project-settings-and-administration.md`](../01-product/project-settings-and-administration.md), [`../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](../06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md) | Users can find, understand, disable, reset, export, and recover AI-surface choices; migration does not silently re-enable disabled behavior; claims about trust or user choice stay blocked until user evidence exists. |
| Typed Project Action Surface | Users and developer-clients need actions that are discoverable, inspectable, compact, safe, and consistent across UI, automation, API, SDK, CLI, MCP, native/browser companion, and connected-app surfaces. | Project actions are server-owned descriptor projections with input schema, result schema, side-effect class, approval class, preflight, expected-version policy, idempotency, disabled reasons, Activity, audit, and projection policy. Natural language can search or draft but cannot mutate without descriptor resolution. | [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md), [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md), [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md), [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md), [`../06-delivery/advanced-differentiation-benchmark-matrix.md`](../06-delivery/advanced-differentiation-benchmark-matrix.md) | Projection parity, compact metadata, disabled-reason accessibility, prompt-injection denial, action-comprehension study, app-action same-task benchmark, and CustomerClaimEvidenceRecord blockers prove the action surface before any app-action or agent-ready claim. |

## Explicit non-actions

These are rejected unless a future Architecture Decision Record changes the governing contract with stronger evidence:

- no OS-wide screenshot recall;
- no hidden browser-history, clipboard, filesystem, keylogging, camera, microphone, or OS-window memory;
- no generic Zapier, Shortcuts, or Power Automate replacement;
- no prompt-only agents that run production changes;
- no OS, assistant, MCP client, native companion, browser extension, connector, or recipe action that bypasses Project Action Surface descriptors, server-owned preflight, expected versions, approvals, idempotency, Activity, and audit;
- no source-defined actions, generated handler code, prompt-created action names, or tool descriptions treated as non-breaking prose when they change model-facing behavior;
- no global graph-first workspace UI as the default experience;
- no raw trace UI as the product debugger;
- no raw trace wall, telemetry volume, token volume, or log-retention volume treated as Project Health value;
- no "AI root cause", "self-healing Projects", or "autofix Project health" claim without canonical evidence, deterministic safeguards, owner-visible review, and repair outcome validation;
- no general observability backend, OS/device troubleshooting assistant, or support-only repair path as the Project Health surface;
- no forced AI assistant, browser, companion, or default-setting path as the cost of using Research;
- no nag loops, trick wording, migration resets, or preselected AI controls that override a user's previously expressed choice;
- no run count, token volume, activity volume, or generated-word count as automation success;
- no customer-facing competitor or market claim sourced only from directional public posts;
- no advanced feature that creates a second document, source, evidence, workflow, memory, publication, Product Truth, or automation authority.

## Decision rules for future advanced features

An advanced operating-layer feature is eligible only when it improves at least one objective:

- trust;
- speed;
- source coverage;
- reviewability;
- collaboration;
- maintenance;
- recoverability;
- user control.

Every accepted feature must name:

- the user problem;
- the affected requirement IDs;
- the governing product, architecture, security, and delivery docs;
- the non-action alternative considered;
- the validation evidence required before any production claim;
- the StrategicBetScorecard and baseline required before claiming user-value improvement;
- the owner and revisit trigger in the SignalDecisionLedger.

Reject or defer a feature when it:

- introduces a second authority;
- depends on hidden ambient capture;
- widens permissions without explicit grants;
- makes debugging harder;
- makes approval fatigue worse;
- hides cost, latency, partial state, or failure state;
- promotes unsupported public claims;
- expands broad automation before source, citation, authorization, document, and audit foundations are proven.

## Validation expectations

This document is complete as planning evidence only. Runtime launch of the differentiators above requires:

- first-shell and perceived-latency evidence for Work Packets and progressive status;
- Work Packet usefulness, dismissal, correction, stale-rate, and accepted-outcome metrics;
- source/citation trust and stale-claim recovery validation;
- no-ambient-capture tests for native and browser companion surfaces;
- dry-run, replay, idempotency, fixture-creation, and side-effect safety tests for automation;
- outcome scorecard acceptance tests that separate accepted work from generated or ignored activity;
- delegated-trust drift, revocation, hard-stop, stale-receipt, and fatigue tests;
- Workset restore, accessibility, mobile, narrow-screen, keyboard, touch, and screen-reader validation;
- support-safe diagnostic redaction and export checks;
- causal Project Health trace-to-finding conversion, HealthLineageEdge construction, false-cause classification, diagnostic-waste control, repair-outcome validation, and support-safe redaction checks;
- Product Truth contradiction, non-action, and source-refresh evidence before customer-facing claims.
- StrategicBetScorecard and OutcomeReview evidence that the differentiator improved declared performance, usability, user-experience, automation, trust, reviewability, recoverability, or advanced-differentiation outcomes without relying on rejected anti-metrics.
- AdvancedDifferentiationBenchmarkRecord evidence that any OS, browser, workspace-agent, app-intent, app-action, connected-app, MCP, automation, or agent-observability comparison used the same target user task, current comparator sources, anti-metrics, telemetry, benchmark runs, and CustomerClaimEvidenceRecord limits.

## Documentation update rule

When advanced operating-layer differentiation changes, update all affected docs in the same change:

- [`user-opinion-and-competitive-signal-audit.md`](user-opinion-and-competitive-signal-audit.md)
- [`ai-work-os-and-agent-automation-signal-audit.md`](ai-work-os-and-agent-automation-signal-audit.md)
- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md)
- [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md)
- [`../01-product/composable-automation-recipes-and-playbooks.md`](../01-product/composable-automation-recipes-and-playbooks.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`../01-product/project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md)
- [`../01-product/spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md)
- [`../01-product/native-workspace-companion-and-os-integration.md`](../01-product/native-workspace-companion-and-os-integration.md)
- [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md)
- [`../01-product/scenario-lab-and-change-simulation.md`](../01-product/scenario-lab-and-change-simulation.md)
- [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md)
- [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../06-delivery/external-signal-refresh-and-competitive-watch.md`](../06-delivery/external-signal-refresh-and-competitive-watch.md)
- [`../06-delivery/frontier-feature-watch-and-novelty-control.md`](../06-delivery/frontier-feature-watch-and-novelty-control.md)
- [`../06-delivery/specification-signal-decision-ledger.md`](../06-delivery/specification-signal-decision-ledger.md)
- [`../06-delivery/public-signal-source-quality-and-citation-policy.md`](../06-delivery/public-signal-source-quality-and-citation-policy.md)
- [`../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](../06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`../06-delivery/advanced-differentiation-benchmark-matrix.md`](../06-delivery/advanced-differentiation-benchmark-matrix.md)
- [`../06-delivery/advanced-feature-incubation-and-prototype-governance.md`](../06-delivery/advanced-feature-incubation-and-prototype-governance.md)
- [`advanced-feature-opportunity-register.md`](advanced-feature-opportunity-register.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
