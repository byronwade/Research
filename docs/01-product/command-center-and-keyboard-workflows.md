# Command center and keyboard workflows

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research needs one fast, safe way to navigate, switch modes, control runs, resolve review items, switch Worksets, and invoke contextual actions without forcing users through scattered buttons or repeated prompts. The Command Center is the Project-wide action surface for that work. Spatial Workbench and Workset behavior is governed by [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md). Adaptive personalization and Preference Center controls are governed by [`adaptive-personalization-and-preference-controls.md`](adaptive-personalization-and-preference-controls.md). The Project Operating Layer and Work Packet model are governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md); Command Center suggestions and next-action commands must use that shared work-control state instead of maintaining a separate recommendation system.

This document governs `UX-003` and `UX-004`. Optional global command entry through native companion or browser extension surfaces is governed by [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md); those surfaces reuse the Command Center catalog and cannot bypass command safety.

## Sources reviewed

Official capability references:

- [Raycast Manual](https://manual.raycast.com/)
- [Raycast AI Extensions](https://manual.raycast.com/ai/ai-extensions)
- [Microsoft PowerToys Command Palette](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/overview)
- [Microsoft PowerToys Command Palette extension model](https://learn.microsoft.com/en-us/windows/powertoys/command-palette/extensibility-overview)
- [Linear Search](https://linear.app/docs/search)
- [Linear Select issues](https://linear.app/docs/select-issues)
- [GitHub keyboard shortcuts](https://docs.github.com/en/get-started/accessibility/keyboard-shortcuts)
- [Visual Studio Code command palette patterns](https://code.visualstudio.com/docs/editing/tips-and-tricks)
- [Visual Studio Code keybindings](https://code.visualstudio.com/docs/configure/keybindings)
- [Slack shortcuts](https://slack.com/help/articles/360057554553-Use-shortcuts-to-take-actions-in-Slack)
- [Notion keyboard shortcuts and slash commands](https://www.notion.com/help/keyboard-shortcuts)
- [Apple App Intents](https://developer.apple.com/documentation/appintents) and [Adopting App Intents to support system experiences](https://developer.apple.com/documentation/appintents/adopting-app-intents-to-support-system-experiences)
- [Microsoft App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/) and [Action definition JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json)
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools) and [Apps SDK reference](https://developers.openai.com/apps-sdk/reference)
- [Gemini Connected Apps](https://support.google.com/gemini/answer/13695044?co=GENIE.Platform%3DAndroid&hl=en)

Public user-opinion and practitioner signals:

- [Keyboard-first web app discussion](https://www.reddit.com/r/webdev/comments/1pu471y/what_web_app_has_a_great_keyboard_ux_shortcuts/)
- [PowerToys Run versus Command Palette discussion](https://www.reddit.com/r/PowerToys/comments/1tbcksp/powertoys_run_or_command_palette/)
- [GitHub command-palette shortcut collision discussion](https://github.com/orgs/community/discussions/15255)
- [Hacker News command palette interface discussion](https://news.ycombinator.com/item?id=27378590)
- [Hacker News user-driven UI discussion](https://news.ycombinator.com/item?id=35985085)
- [Power Automate Copilot flow-authoring context discussion](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/)
- [MCP structured-output practitioner discussion](https://www.reddit.com/r/mcp/comments/1uw8gjr/the_best_thing_i_did_for_my_mcp_server_was_stop/)
- [MCP schema and context-budget practitioner discussion](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/)

The directional lesson is clear: command palettes are now expected in serious web tools, but users still need discoverability, customization, visible effects, accessible non-keyboard paths, and protection from shortcut conflicts or unsafe hidden actions.

## Product purpose

The Command Center answers:

- Where can I go next in this Project?
- What can I do with the current selection, document block, source, claim, run, automation, or review item?
- What mode, source scope, budget, or approval class will this action use?
- Will this run immediately, attach to an existing Operation, return a Partial Result, or start a progressive workflow?
- Is the action safe to run now, or does it need preflight, a draft, an action card, or approval?
- What changed after I invoked it?

The Command Center is not a second Chat surface. It can accept typed search and short natural-language phrases, but any material effect resolves to a typed command or action card before execution. Approval-load and delegated-trust behavior for material commands is governed by [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md).

## Typed Project action surface

The Command Center is the primary user-facing projection of the Project Action Surface. Platform signals around App Intents, Windows App Actions, connected apps, and MCP-style tools show that assistants and operating systems increasingly discover work through typed action descriptors rather than hidden UI flows. Research adapts that direction only where it stays Project-native.

A Project action is valid only when it resolves to a `CommandActionDescriptor`, `RecipeDraftCandidate`, ActionCard, API operation, SDK operation, CLI command, MCP tool, NativeCommandBridge entry, browser-extension action, or Automation Recipe step owned by the same canonical descriptor contract. Natural language can search, select, or draft; it cannot create a private mutation path.

Project Action Surface descriptors must expose:

- owning Project or shared-library scope;
- target resource type and entity binding;
- required input schema and result schema;
- side-effect class and approval class;
- preflight policy, expected-version policy, and idempotency scope;
- disabled, unavailable, policy-managed, stale, redacted, or unsupported reason;
- ActivityEvent and audit linkage;
- API, SDK, CLI, MCP, native companion, browser extension, and automation projection policy where the action is exposed outside the web UI.

The action catalog must stay compact, permission-filtered, and searchable. External or model-facing projections can use shorter descriptors for discovery, but execution still resolves server-side against the full descriptor version before any mutation, external write, billing effect, publication, connector widening, destructive action, or administrative action.

## Entry points

Research exposes the Command Center through:

- a visible Project header control;
- a configurable keyboard shortcut, with browser and operating-system conflict detection;
- optional native companion, browser extension, tray/menu, or OS command entry where the user and policy enable it;
- contextual action affordances on selected sources, document blocks, claims, citations, comments, runs, automations, and action cards;
- mobile and narrow-screen sheets that preserve the same command catalog;
- screen-reader reachable landmarks and labels.

Keyboard access is a power path, not the only path. A capability hidden only behind a shortcut is not production-ready.

## Command groups

Initial command groups:

- **Navigate:** open Project, Chat, Documents, Sources, Activity, Trust Dashboard, Project Atlas, Settings, or a recent resource.
- **Spatial workbench:** open, switch, save, suspend, restore, duplicate, share, archive, or delete Worksets; pin panes; restore previous layout; open evidence-aware split; compare source versions; or rebuild a layout from current Project state.
- **Search:** search authorized sources, documents, claims, comments, activity, automations, and commands.
- **Mode:** switch quick, focused, deep, scheduled, patch, publish, export, or external-action mode where policy allows.
- **Source scope:** include, exclude, pin, quarantine, refresh, or inspect authorized sources.
- **Document:** create, rename, open, outline, cite, save answer, propose patch, compare revisions, export, or inspect blockers.
- **Evidence and trust:** open EvidenceSpan, Claim status, contradiction, stale-source blocker, coverage neighborhood, Atlas path, or Impact Report.
- **Run control:** start, pause, resume, cancel, retry, replay, debug, or inspect a Research Run or automation run.
- **Focus and resume:** continue where I left off, show Resume Digest, mark caught up, start Focus Session, end Focus Session, open next attention item, or rebuild a context pack.
- **Work control:** open current Work Packet, show next safe action, explain recommendation, dismiss recommendation, rebuild work state, convert repeated work to recipe draft, or inspect redacted hidden-state summary.
- **Review:** approve, reject, request changes, defer, assign, convert to issue, or open an ActionCard.
- **Automation:** open recipe library, create draft recipe, simulate recipe, dry-run, edit trigger, view registry, inspect scorecard, resolve adaptive recommendation, activate, pause, canary, retire, or restore.
- **Developer and platform:** inspect Operation, webhook delivery, API resource, SDK example, MCP resource, action descriptor, action projection, tool schema, or command invocation where the actor has permission.

Every command declares whether it is navigation, read-only inspection, draft creation, review request, mutation, external side effect, billing-affecting action, publication action, destructive action, or administrative action.

## Context awareness

Command results are scoped by:

- actor permissions and Project policy;
- active surface and selected resource;
- current intent version, source scope, and mode;
- expected resource versions;
- approval class and side-effect class;
- budget, quota, and provider availability;
- current operation and automation state;
- current Work Packet, NextActionCandidate, recommendation observation, and repeated-work capture state;
- current Spatial Workbench, Workset, PaneInstance, snapshot, and layout suggestion state;
- current progressive delivery, cache, stale, partial, cancellation, and recovery state;
- current native companion install, grant, active-tab invocation, selected-context, share target, file-watch, notification, and deep-link state where policy allows;
- accessibility mode and device constraints.

Unavailable commands can be shown with a disabled reason when this helps users recover. The product should not silently hide a command when the user needs to understand a permission, version, budget, or policy blocker.

## Action preview

Before a command mutates state or starts costly work, the Command Center shows:

- target resource and expected version;
- proposed effect;
- source scope and evidence standard;
- approval class;
- estimated cost and latency class where relevant;
- expected progressive states, Partial Result rules, cache/stale behavior, and cancellation path where relevant;
- external side effects;
- rollback, withdrawal, or recovery path;
- validation status or missing validation;
- disabled or blocked reason if execution is unsafe.

Low-risk navigation and read-only commands can execute immediately or through permission-safe Fast Paths. Draft creation and reversible local UI changes can execute with visible recovery. Canonical document changes, external writes, publication, billing, deletion, connector widening, repository mutation, and high-risk automation changes require the existing intent, preflight, ActionCard, delegated-trust, and approval receipt contracts.

## Suggestions and learning

The Command Center can recommend commands when a user is blocked, repeatedly navigates the same path, or selects a resource with an obvious next action. Recommendations must come from the Work Packet and NextActionCandidate pipeline, show why they appear, remain dismissible and correctable, and route any learned preference signal through the adaptive preference policy instead of hidden client-side profiling.

Research should support:

- recent commands;
- favorites;
- aliases;
- remappable shortcuts;
- visible shortcut hints in ordinary UI;
- searchable keyboard reference;
- onboarding nudges for high-value workflows;
- conflict warnings when a shortcut collides with browser, operating-system, assistive-technology, or text-editor behavior.

Customization cannot bypass authorization, approval policy, source permissions, billing policy, or publication gates.

## Performance and accessibility

The Command Center should open and filter from a content-minimized local catalog, then refine with server-authorized results. It should not wait for broad retrieval, model calls, or source indexing before opening.

Production readiness requires:

- stable focus behavior;
- no layout shift while results update;
- keyboard-only completion for primary workflows;
- pointer and touch alternatives;
- screen-reader announcements for result count, selected command, disabled reason, and command result;
- visible focus and shortcut hints;
- reduced-motion behavior;
- deterministic no-result recovery.

## Non-goals

- Do not make the Command Center a second document, source, memory, workflow, evidence, or automation authority.
- Do not let natural language directly mutate canonical state without a typed command descriptor.
- Do not expose a Project action to an OS assistant, connected app, MCP client, native companion, browser extension, API, SDK, or automation recipe unless the same server-owned descriptor, preflight, expected-version, approval, idempotency, Activity, and audit rules apply.
- Do not treat action volume, tool count, schema length, or model tool selection as proof that the action surface is usable or valuable.
- Do not hide core workflows behind keyboard-only discovery.
- Do not treat command usage frequency as proof that a workflow is valuable without outcome evidence.
- Do not let aliases, macros, favorites, or shortcut bindings widen permissions.
- Do not expose hidden model reasoning, raw prompts, private source text, credentials, or full connector payloads in command results.

## Acceptance criteria

Command Center work is production-ready only when:

- `UX-003` and `UX-004` are implemented and tested;
- every primary Project workflow is reachable by visible UI and keyboard;
- command search and shortcut bindings are authorization-aware;
- material commands resolve to typed descriptors with expected versions, preflight, side-effect class, approval class, and audit linkage;
- Project Action Surface descriptors project consistently across Command Center, API, SDK, CLI, MCP, native companion, browser extension, and Automation Recipe surfaces without creating private handler paths;
- action discovery, descriptor search, model-facing tool metadata, and loaded schemas are tested for compactness, permission filtering, disabled reasons, and routing accuracy;
- high-risk commands create or open ActionCards rather than silently executing;
- command invocation, success, cancellation, denial, and failure produce ActivityEvents;
- work-control commands expose Work Packet state, recommendation reason, dismissal, correction, invocation, and outcome links without storing raw private content in command results;
- spatial commands expose Workset purpose, pane refs, stale or redacted resources, hydration state, restore behavior, and recovery actions without storing raw private content in command results;
- delegated-trust commands expose approval-load state, active grants, revocation, disabled reasons, and hard-stop policy without weakening approval class;
- progressive command results expose partial, stale, queued, degraded, blocked, unsupported, cancelled, and final state consistently with Operations and Activity;
- command suggestions are explainable, dismissible, and content-minimized;
- focus and resume commands use Focus State, Resume Checkpoint, Resume Digest, Focus Session, notification suppression, and attention-item policy without storing raw private content in command results;
- shortcut customization detects common conflicts and remains accessible;
- native or browser companion command entry resolves to canonical command descriptors, respects companion grant state, and cannot execute material commands without server-owned preflight;
- browser tests cover Project, Chat, Documents, Sources, Activity, automation, and review queue command paths;
- recipe authoring, simulation, manual run, canary, pause, and retirement commands resolve through typed descriptors with the same preflight, expected-version, ActivityEvent, and approval behavior as other automation commands;
- release evidence includes accessibility, performance, authorization, and idempotency validation.

## Documentation update rule

Changes to the Command Center, command catalog, shortcut behavior, command suggestions, or command execution safety must update:

- [`project-workspace.md`](project-workspace.md)
- [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md)
- [`chat.md`](chat.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md)
- [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md)
- [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md)
- [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md)
- [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md)
- [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md)
- [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md)
- [`../02-architecture/spatial-workbench-layout-and-worksets.md`](../02-architecture/spatial-workbench-layout-and-worksets.md)
- [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/focus-state-and-resume-digests.md`](../02-architecture/focus-state-and-resume-digests.md)
- [`../08-build/ui-system-and-chatgpt-patterns.md`](../08-build/ui-system-and-chatgpt-patterns.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
