# Project operating layer and work control

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should feel like a high-performance workbench for sourced knowledge work, not a pile of panels. The Project Operating Layer is the user-controlled layer that coordinates Spatial Workbench, Worksets, Command Center, Focus, Project Atlas, Project Health, Scenario Lab, Reversible Work, Activity, Progressive Delivery, Automation Recipes, outcome scorecards, Product Truth, Sources, Documents, and Chat into one next-action experience.

This document governs `WORK-001` and `WORK-002`. Advanced operating-layer differentiators and explicit non-actions are governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). Project health findings and repair playbooks are governed by [`project-health-and-repair.md`](project-health-and-repair.md). Project-wide what-if previews and simulation apply candidates are governed by [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md). Reversible Work, Project History, recovery cards, compensation, reconciliation, and irreversible-state labeling are governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md).

## Sources reviewed

Official capability references:

- [Microsoft Learn: Manage Recall for Windows clients](https://learn.microsoft.com/en-us/windows/client-management/manage-recall)
- [Microsoft Learn: Manage Click to Do for Windows clients](https://learn.microsoft.com/en-us/windows/client-management/manage-click-to-do)
- [Apple Support: Intro to personal automation in Shortcuts](https://support.apple.com/guide/shortcuts/intro-to-personal-automation-apd690170742/ios)
- [Apple Support: Enable or disable a personal automation](https://support.apple.com/guide/shortcuts/enable-or-disable-a-personal-automation-apd602971e63/ios)
- [Microsoft Learn: PowerToys Command Palette](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/overview)
- [Microsoft Learn: Command Palette Dock](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/dock)
- [Raycast Manual](https://manual.raycast.com/)
- [Raycast AI Extensions](https://manual.raycast.com/ai/ai-extensions)
- [OpenAI Help: ChatGPT workspace agents](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business)
- [OpenAI: Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
- [OpenAI Help: Scheduled Tasks in ChatGPT](https://help.openai.com/en/articles/10291617-tasks-in-chatgpt)
- [Notion Help: Custom Agents](https://www.notion.com/help/custom-agents)
- [Notion Help: Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions)
- [Glean: Agent Development Lifecycle](https://www.glean.com/blog/agent-dev-lifecycle-2026)

Public user-opinion and practitioner signals:

- [Shortcuts power versus clunky authoring discussion](https://www.reddit.com/r/shortcuts/comments/1ldedpg/i_feel_like_the_shortcuts_app_is_so_powerful_and/)
- [AI agents reliability discussion](https://news.ycombinator.com/item?id=43535653)
- [Boring AI workflows versus autonomous agents discussion](https://www.reddit.com/r/AI_Agents/comments/1u1j6wk/i_trust_boring_ai_workflows_more_than_autonomous/)
- [Agent permission-fatigue discussion](https://news.ycombinator.com/item?id=48308376)
- [AI waiting and flow-state fatigue discussion](https://news.ycombinator.com/item?id=46934404)
- [State-machine pattern for agentic workflows discussion](https://www.reddit.com/r/AI_Agents/comments/1ssf0f9/why_i_stopped_building_autonomous_agents_for/)
- [AI agent approval fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uws7ct/anybody_else_struggling_with_constant_approvals/)

These user-opinion sources are directional signals only. They are not statistical proof and must not become customer-facing claims.

## Product lesson

Operating systems and launchers are converging on fast command access, screen-aware actions, local recall, personal automation, and AI tool invocation. Workspace AI products are converging on reusable agents, schedules, permissions, analytics, and team sharing.

The gap for Research is different: those systems are rarely source-native, evidence-aware, claim-aware, publication-aware, and Project-scoped at the same time. Research should not compete by recording every screen or by offering generic app automation. It should provide a governed work-control layer over the exact Project state that already matters.

## Product purpose

The Project Operating Layer answers:

- What am I doing in this Project right now?
- What sources, claims, documents, runs, recipes, comments, blockers, and policies are currently relevant?
- What is the next safe action, and why?
- Which actions can run immediately, which need a draft, which need simulation, and which need approval?
- Which background work is still running, stale, blocked, or ready to inspect?
- What changed while I was away, and what should be resumed or ignored?
- Is this repeated work worth turning into a recipe, shortcut, or scheduled automation?
- What evidence proves that the recommended action is safe and useful?

This layer is a projection over canonical Project state. It is not a fourth primary surface and not a second authority for documents, sources, memory, workflows, claims, evidence, publication, permissions, or automations.

## Work Packet

A `WorkPacket` is the visible, rebuildable unit of current work. It connects:

- actor and Project;
- active surface, selected resource, source scope, mode, and output target;
- current IntentRecord, Operation, Research Run, Automation Recipe run, ActionCard, or review item;
- relevant Focus State, Resume Digest, ActivityEvents, Project Atlas neighborhood, Scenario Lab simulation state, Reversible Work eligibility, Project Health findings, Trust blockers, Product Truth signals, and collaboration state;
- available commands, disabled commands, approval class, cost class, latency class, and recovery path;
- current progressive state: complete, partial, stale, queued, degraded, blocked, unsupported, cancelled, or final;
- next-action candidates and explanation links.

Work Packets store references, cursors, versions, classifications, and compact labels. They must not store raw source text, raw prompts, hidden reasoning, full document bodies, credentials, screen captures, clipboard contents, or connector payloads.

## Work control loop

The operating layer uses a visible loop:

```text
Observe Project state
-> assemble Work Packet
-> rank next safe actions
-> preview effect, cost, latency, and approval class
-> execute command, create draft, start Operation, or open ActionCard
-> verify outcome against evidence and acceptance state
-> update Activity, Focus, Atlas, recipe, scorecard, and Product Truth projections
```

The loop is deterministic first. Model assistance may help summarize, classify, draft, or explain, but cannot silently choose unsafe actions, widen permissions, publish, delete, spend, merge code, or mark unsupported claims as supported.

## Next-action behavior

Next-action candidates are eligible when they:

- come from a typed command, ActionCard, recipe draft, run state, Trust blocker, Atlas impact report, Focus item, or Product Truth signal;
- include target resource, expected version, source scope, effect, approval class, cost class, latency class, and recovery path;
- explain why they are recommended using content-minimized upstream links;
- can be dismissed, deferred, converted to issue, assigned, or turned into a recipe draft where policy allows;
- never become evidence of completion until the owning state changes and validation passes.

Examples:

```text
Source changed
-> Work Packet shows affected document sections and stale claims
-> next action opens Project Atlas impact report
-> user starts a maintenance run
-> run proposes typed patches
-> review queue records accepted, rejected, or deferred outcomes
```

```text
User repeats "refresh source -> recheck claims -> update weekly brief"
-> Work Packet detects repeatable sequence
-> command proposes a non-runnable recipe draft
-> Scenario Lab simulation previews source scope, cost, trigger, dedupe, live-test limits, and approval gates
-> owner can canary or reject the recipe
```

## Advanced capabilities

Research should support capabilities operating systems and generic AI tools usually do not combine. The accepted differentiation thesis, rejected non-actions, and future feature decision rules are governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md).

- evidence-aware command recommendations;
- task-aware Worksets and evidence-aware pane layouts that switch context without tab overload;
- Project-scoped work packets that join source, claim, document, activity, recipe, and release state;
- Project Health findings, causal lineage, and safe repair playbooks that explain suspected causes and fix broken Project state without generic operating-system capture or raw diagnostic content capture;
- Project-wide Scenario Lab previews that compare options before publication, repair, source, recipe, policy, repository, or release-candidate changes;
- Project-wide Reversible Work recovery that distinguishes undo, restore, replay, withdrawal, compensation, reconciliation, and irreversible effects;
- next-action ranking that distinguishes urgent blockers from noisy activity;
- repeat-work capture that becomes a typed draft recipe, not a hidden macro;
- permission-safe local neighborhoods and Impact Reports before high-risk changes;
- progressive delivery and Fast Paths that show useful state immediately without false completion;
- outcome-scored automation that measures accepted value instead of run volume;
- user-correctable attention and recommendation ranking;
- support-safe diagnostics over work state without private content exposure.

## Entry points

The operating layer appears contextually through:

- Project open and resume surfaces;
- Spatial Workbench and Workset cards;
- Command Center;
- selected document blocks, claims, evidence spans, sources, comments, recipes, runs, ActionCards, and Atlas nodes;
- Activity timeline and review queue;
- Trust Dashboard;
- Automation registry and run debugger;
- Project Atlas and Impact Reports;
- Project Health Console and repair findings;
- Scenario Lab cards, comparisons, and stale-plan warnings;
- Reversible Work history cards, recovery actions, compensation plans, reconciliation checks, and irreversible-effect labels;
- API, SDK, CLI, and MCP resources where authorized.

It should feel ambient inside the Project, but it must remain inspectable and controllable. A user must be able to understand what state produced a suggestion.

## Privacy and control

Research must not use ambient operating-system capture to build Work Packets. Specifically:

- no screen recording, screenshot history, clipboard scraping, cross-app surveillance, browser history scraping, or hidden device activity capture;
- no permission inference from a command result, notification, digest, or previous access;
- no raw private content in recommendation telemetry, support diagnostics, or analytics;
- no hidden background automation outside the automation registry;
- no approval-fatigue pattern where low-risk prompts train users to approve high-risk actions.

Low-risk commands should run without unnecessary prompts. Repeated low-risk approvals can propose scoped delegated trust governed by [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md). High-risk actions should be grouped into meaningful ActionCards with exact consequences, expected versions, recovery paths, and hard-stop rules.

## Non-goals

- Do not become an operating-system shell, screen recorder, generic launcher, or generic app automation platform.
- Do not create a second document, source, evidence, memory, workflow, activity, or automation authority.
- Do not use a global timeline or screenshot search as the basis for Project memory.
- Do not recommend actions from raw model guesses without canonical state links.
- Do not hide unsafe autonomy behind labels such as autopilot, teammate, or coworker.
- Do not optimize for novelty over predictable, recoverable work.

## Acceptance criteria

The Project Operating Layer is production-ready only when:

- `WORK-001` and `WORK-002` are implemented and tested;
- Work Packets rebuild from authoritative Project state and survive reload, reconnect, Project switch, and device switch;
- Work Packets can reference active Worksets and pane state without making layout records authoritative for content, evidence, or permissions;
- next-action recommendations are authorization-filtered, explainable, dismissible, and content-minimized;
- Project Health findings can become next-action candidates only after their diagnostic snapshot is authorized, redacted, and linked to canonical Project records;
- Scenario Lab simulations can become next-action inputs only after their input snapshot is authorized, redacted, not stale, and linked to the owning resources and apply-candidate policy;
- Reversible Work actions can become next-action inputs only after their reversal capability is authorized, current, redacted, and linked to side-effect ledgers and owning mutation services;
- commands, recipes, ActionCards, Operations, Focus, Activity, Atlas, Trust, Reversible Work, and outcome scorecards show consistent target, effect, status, cost, latency, approval, and recovery state;
- delegated-trust state and approval-load signals are visible where they explain why a next action can run, must ask, must batch, or must stop;
- repeated-work capture creates only non-runnable draft recipes until simulation, owner approval, and canary policy pass;
- high-risk actions use deterministic preflight and approval receipts;
- browser tests cover Project open, resume, command, source-change, stale-claim, recipe-draft, ActionCard, Atlas impact, and failed-run recovery paths;
- performance tests prove Project open, command search, and next-action ranking remain responsive under background indexing, research, export, and automation load;
- accessibility tests cover keyboard, pointer, touch, and screen-reader control of Work Packets and next actions;
- release evidence includes recommendation-quality, dismissal-rate, correction-rate, latency, approval-burden, privacy, authorization, and outcome validation.

## Documentation update rule

Changes to the Project Operating Layer, Work Packets, next-action ranking, repeated-work capture, or work-control recommendations must update:

- [`project-workspace.md`](project-workspace.md)
- [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md)
- [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md)
- [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md)
- [`project-health-and-repair.md`](project-health-and-repair.md)
- [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md)
- [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`product-truth-board-and-contradiction-radar.md`](product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/project-operating-layer-control-plane.md`](../02-architecture/project-operating-layer-control-plane.md)
- [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md)
- [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md)
- [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md)
- [`../02-architecture/spatial-workbench-layout-and-worksets.md`](../02-architecture/spatial-workbench-layout-and-worksets.md)
- [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md)
- [`../02-architecture/focus-state-and-resume-digests.md`](../02-architecture/focus-state-and-resume-digests.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
