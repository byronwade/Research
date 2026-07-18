# Spatial workbench and worksets

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should make complex source work feel spatially stable without becoming a generic operating-system window manager. The Spatial Workbench is the Project-scoped layout and workset surface that lets users arrange, suspend, restore, and switch between evidence-aware work contexts across Chat, Documents, Sources, Activity, Trust, Project Atlas, Automations, and Settings.

This document governs `LAYOUT-001` and informs `LAYOUT-002`. Advanced operating-layer Workset differentiation and explicit window-management non-actions are governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). Command execution is governed by [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md), work-state recommendations by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md), adaptive personalization by [`adaptive-personalization-and-preference-controls.md`](adaptive-personalization-and-preference-controls.md), focus resume behavior by [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md), and offline, mobile, installed-app, reconnect, and local-cache behavior by [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md).

## Sources reviewed

Official capability references reviewed on 2026-07-18:

- [Microsoft PowerToys Workspaces](https://learn.microsoft.com/en-us/windows/powertoys/workspaces)
- [Microsoft Windows Snap](https://support.microsoft.com/en-us/windows/experience/snap-your-windows)
- [Microsoft PowerToys FancyZones](https://learn.microsoft.com/en-us/windows/powertoys/fancyzones)
- [Apple Stage Manager for Mac](https://support.apple.com/guide/mac-help/use-stage-manager-mchl534ba392/mac)
- [Apple Stage Manager for iPad](https://support.apple.com/guide/ipad/organize-windows-with-stage-manager-ipad1240f36f/ipados)
- [Microsoft Edge Workspaces](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-workspaces)
- [Google Chrome tab groups](https://support.google.com/chrome/answer/2391819)
- [Arc Spaces](https://resources.arc.net/hc/en-us/articles/19228064149143-Spaces-Distinct-Browsing-Areas)
- [Arc Profiles](https://resources.arc.net/hc/en-us/articles/19227964556183-Profiles-Separate-Work-Personal-Browsing)
- [Firefox Tab Groups](https://www.firefox.com/en-US/features/tab-groups/)

Public user-opinion and practitioner signals reviewed on 2026-07-18:

- [Tab overload and productivity discussion](https://www.reddit.com/r/productivity/comments/1nxwbhw/how_do_you_all_manage_tab_overload_without/)
- [Ask HN: too many open tabs](https://news.ycombinator.com/item?id=48934898)
- [Stage Manager positive workflow discussion](https://www.reddit.com/r/MacOS/comments/1r5tpr0/i_finally_understand_stage_manager_its_powerful/)
- [Stage Manager negative workflow discussion](https://www.reddit.com/r/mac/comments/1dt2h1d/does_anyone_else_find_stage_manager_incredibly/)
- [PowerToys Workspaces discussion](https://www.reddit.com/r/Windows11/comments/1f8w0nt/powertoys_v084_new_workspaces_utility/)
- [Browser workspace versus window-manager discussion](https://news.ycombinator.com/item?id=41323174)
- [Persistent browser workspaces discussion](https://news.ycombinator.com/item?id=14823807)

Research and HCI references reviewed on 2026-07-18:

- [The Hidden Cost of Window Management](https://arxiv.org/abs/1810.04673)
- [A Dynamic Take on Window Management](https://arxiv.org/abs/2511.17516)
- [CMU: Overcoming Tab Overload](https://www.cmu.edu/news/stories/archives/2021/may/overcoming-tab-overload.html)
- [Tabs.do: Task-Centric Browser Tab Management](https://dl.acm.org/doi/10.1145/3472749.3474777)
- [Orca: Browsing at Scale Through User-Driven and AI-Facilitated Knowledge Structuring](https://arxiv.org/html/2505.22831v1)
- [American Psychological Association: Multitasking switching costs](https://www.apa.org/topics/research/multitasking)

These sources show a consistent pattern: users want persistent task contexts, grouped windows or tabs, fast switching, and less cognitive load, but they dislike systems that feel unpredictable, cluttered, slow, or detached from the actual task. Research should use that lesson inside the Project boundary.

## Product purpose

The Spatial Workbench answers:

- What is the current work context and why is each pane visible?
- Which source, claim, document block, run, automation, review item, or setting is each pane showing?
- Can I switch from writing to evidence review, source triage, publication preflight, or automation debugging without rebuilding my layout?
- Can I suspend a research context without keeping dozens of tabs, panels, or source viewers open?
- Can the system suggest a better layout for the current task without hiding content, moving controls unpredictably, or weakening authorization?
- Can a teammate, agent, API client, or support user understand the same work context from minimized references?

Spatial Workbench state is a Project-scoped projection and user preference. Preference learning can suggest layout defaults only through the adaptive preference contract. It does not replace Chat, Documents, Sources, Focus State, Activity, Project Atlas, Work Packets, ContextPacks, or Project Memory.

## Core objects

### Spatial Workbench

The Spatial Workbench is the current Project layout surface. It includes active surface, pane arrangement, visible contextual panels, selected resources, open Workset, hydration state, accessibility preferences, and responsive breakpoint state.

It stores resource references, versions, pane identifiers, layout constraints, and safe labels. It must not store raw source text, raw prompts, full document bodies, hidden reasoning, credentials, connector payloads, browser history, screen captures, clipboard contents, or operating-system window state.

### Workset

A `Workset` is a named, suspendable Project context such as:

- "Write executive brief";
- "Verify citations";
- "Compare source versions";
- "Triage stale claims";
- "Prepare publication";
- "Debug automation run";
- "Review approvals";
- "Inspect Project Atlas impact."

A Workset records purpose, source scope, mode, selected resource refs, pane layout, open comparison set, relevant commands, active Work Packet refs, and resume checkpoint refs. It can be personal, shared with Project members, attached to a review item, or generated from a template.

### Pane

A `Pane` is a typed view over an authorized Project resource or projection. Initial pane types include Chat, Document, Source, Evidence, Claim, Trust, Project Atlas, Activity, Automation, Scorecard, Settings, API operation, and Support diagnostic.

Panes support pinned, transient, preview, comparison, collapsed, drawer, and narrow-screen sheet states. A transient pane can be promoted to pinned only through an explicit user action or safe command.

### Evidence-aware split

An evidence-aware split pairs or groups panes around a work purpose:

```text
Document block
-> linked Claim
-> exact EvidenceSpan
-> SourceVersion locator
-> Trust blocker or contradiction
```

The split is a navigation and review affordance, not a new evidence authority. If the Claim, EvidenceSpan, SourceVersion, or document revision changes, the split becomes stale or blocked until rebuilt.

### Workset Snapshot

A `WorksetSnapshot` records a restorable point in a Workset. It captures pane layout, selected refs, resource versions, source scope, Activity cursor, Focus checkpoint, Work Packet ref, and policy hash. It does not grant access. Every restore reauthorizes resources and redacts unavailable refs.

## Product behavior

### Task-aware layouts

Research should provide layout templates tuned to common Project work:

| Work mode | Default layout |
|---|---|
| Ask and inspect | Chat primary, Sources or Evidence secondary, Activity compact |
| Write with citations | Document primary, Evidence and Source split, Trust summary |
| Source triage | Sources primary, parser status and Activity secondary, Trust blockers |
| Claim verification | Claim list, Source locator, Document impact, Model Council where applicable |
| Publication preflight | Document preview, Trust blockers, rights and privacy checks, approval card |
| Automation debugging | Activity timeline, run step, ActionCard, outcome scorecard |
| Project mapping | Atlas primary, Impact Report, selected document or source |

Users can customize layouts, but customization cannot hide required blockers, approvals, publication warnings, or unavailable-state labels.

### Suspend and restore

Users can suspend a Workset when the current context is not needed immediately. Suspending closes expensive pane detail, records the restorable references, and leaves a compact Workset card in Project resume, Command Center, Activity, and Work Packet context.

Restoring a Workset returns a compact shell first, then hydrates panes progressively. Restored panes show stale, partial, redacted, deleted, unauthorized, unavailable, or conflict states when current Project state no longer matches the snapshot.

### Adaptive layout suggestions

Research can suggest a layout change when:

- the user repeatedly opens the same pane combination;
- a source, claim, document, or review item requires side-by-side inspection;
- a Work Packet next action has a known inspection layout;
- the current screen size makes the active layout inefficient;
- a keyboard-only, screen-reader, or reduced-motion preference requires a different structure.

Each suggestion must carry a PreferenceExplanation when it is based on learned behavior or accessibility state, and it must be dismissible, correctable, reversible, and resettable through the Preference Center.

Suggestions are visible, dismissible, and reversible. The system cannot silently rearrange the workspace during text entry, approval review, publication, destructive actions, or screen-reader navigation.

### Spatial command behavior

Command Center exposes:

- open, save, duplicate, rename, share, archive, suspend, restore, and delete Workset;
- switch to writing, citation review, source triage, publication preflight, automation debug, or Atlas impact layout;
- pin or unpin pane;
- open linked evidence split;
- compare source versions;
- move current resource to another Workset;
- restore previous layout;
- show stale or redacted pane refs;
- rebuild Workset from current Project state.

Spatial commands resolve through typed command descriptors and cannot bypass preflight, ActivityEvents, approval policy, or expected versions.

## Performance and accessibility

The Spatial Workbench is an interactive workload. It must open from a compact, authorized layout state before expensive panes hydrate.

Production validation measures:

- Project shell and Workset switch latency;
- layout snapshot save and restore latency;
- pane hydration time by resource type;
- stale and redacted pane recovery;
- keyboard-only Workset switching;
- screen-reader landmarks and pane announcements;
- touch and narrow-screen sheet behavior;
- large Project behavior without rendering the full Project graph or source inventory;
- user correction and restore-failure rates.

## Privacy and control

- Do not capture operating-system windows, screenshots, clipboard, browser history, or cross-app state.
- Do not infer authorization from a saved Workset, pane URL, snapshot, or shared layout.
- Reauthorize every pane and resource on open, restore, API read, SDK read, MCP read, support view, export, and handoff.
- Redact hidden resources with safe reason codes when policy allows; otherwise omit them.
- Keep layout analytics content-minimized.
- Let users reset personal layout state without deleting canonical Project records.

## Non-goals

- Do not become a general desktop, browser, or operating-system workspace manager.
- Do not mirror local tabs or windows as Project truth.
- Do not store private content in layout snapshots.
- Do not let layout templates become a second command, memory, evidence, document, source, activity, automation, or publication authority.
- Do not optimize for visual cleverness over predictable recovery, source truth, accessibility, and speed.

## Acceptance criteria

Spatial Workbench is production-ready only when:

- `LAYOUT-001` and `LAYOUT-002` are implemented and tested;
- Worksets and pane layouts remain projections over authorized Project state;
- Chat, Documents, Sources, Evidence, Trust, Activity, Project Atlas, Automations, Settings, and Support views use one compatible pane model;
- Workset restore reauthorizes every resource and labels stale, redacted, deleted, unavailable, and conflict states;
- layout changes are reachable through visible UI and Command Center;
- adaptive layout suggestions are explainable, dismissible, reversible, and accessibility-aware;
- Workset snapshots exclude raw content, prompts, hidden reasoning, credentials, connector payloads, screen captures, clipboard contents, and OS/browser history;
- Workset restore on another device, after offline use, or after reconnect reauthorizes every pane and labels local-only, stale, redacted, deleted, unavailable, or conflict state before hydration;
- browser tests cover desktop, narrow-screen, keyboard, screen-reader, touch, restore, stale refs, redaction, device switch, Project switch, and interrupted-run scenarios;
- performance tests prove Workset switching and pane hydration remain responsive under background indexing, research, export, and automation load;
- release evidence includes layout usability, accessibility, privacy, authorization, and performance results.

## Documentation update rule

Changes to Spatial Workbench, Worksets, pane models, layout templates, adaptive layout suggestions, snapshots, or restore behavior must update:

- [`project-workspace.md`](project-workspace.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md)
- [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../02-architecture/spatial-workbench-layout-and-worksets.md`](../02-architecture/spatial-workbench-layout-and-worksets.md)
- [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md)
- [`../02-architecture/focus-state-and-resume-digests.md`](../02-architecture/focus-state-and-resume-digests.md)
- [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md)
- [`../02-architecture/project-operating-layer-control-plane.md`](../02-architecture/project-operating-layer-control-plane.md)
- [`../02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](../02-architecture/progressive-delivery-and-fast-path-cache-policy.md)
- [`../08-build/ui-system-and-chatgpt-patterns.md`](../08-build/ui-system-and-chatgpt-patterns.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
