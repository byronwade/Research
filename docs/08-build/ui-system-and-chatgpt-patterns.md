# UI system and ChatGPT interaction patterns

Research should feel like a focused workbench: fast chat, durable documents, visible sources, and reviewable AI actions. The interface should be simple on entry and deep when users need control.

## Product frame

The primary Project layout is:

```text
Project
├── Chat
├── Documents
└── Sources
```

Studio, Evidence, Focus, Memory, Research Runs, Project History, GitHub, Activity, Approvals, Publish, and Settings are contextual surfaces. They should not crowd the first-run experience.
Spatial Workbench and Workset behavior is governed by [`../01-product/spatial-workbench-and-worksets.md`](../01-product/spatial-workbench-and-worksets.md). It owns task-aware pane layouts, evidence-aware splits, suspend/restore, and adaptive layout suggestions without changing the primary Project frame.
Offline, device continuity, mobile, tablet, installed-app, reconnect, local-draft, and sync-conflict behavior is governed by [`../01-product/offline-device-continuity-and-mobile-experience.md`](../01-product/offline-device-continuity-and-mobile-experience.md). The UI should label capabilities and local state clearly instead of promising blanket offline support.
Optional native companion, browser extension, OS share/import, active-tab capture, selected-text capture, file-watch grants, notifications, deep links, and global command entry are governed by [`../01-product/native-workspace-companion-and-os-integration.md`](../01-product/native-workspace-companion-and-os-integration.md). The UI should make grants, previews, blocked reasons, and revocation visible instead of relying on broad background permissions.
Adaptive personalization, Preference Center controls, explanations, correction, reset, export, and policy-managed states are governed by [`../01-product/adaptive-personalization-and-preference-controls.md`](../01-product/adaptive-personalization-and-preference-controls.md). The UI should make personalization visible and reversible instead of surprising users with hidden profile behavior.
The Project Operating Layer described in [`../01-product/project-operating-layer-and-work-control.md`](../01-product/project-operating-layer-and-work-control.md) may surface a compact Work Packet and next safe actions across those surfaces, but it does not replace Chat, Documents, or Sources as the primary frame.
Reversible Work and Project History behavior is governed by [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md). It owns recovery cards, restore, replay, withdrawal, compensation, reconciliation, and irreversible-effect labels without turning Activity or history into a second mutation authority.

## Spatial workbench patterns

The Project shell should support named Worksets for writing, evidence review, source triage, publication preflight, automation debugging, Project Atlas impact review, and administration. Worksets should feel like restorable task contexts, not browser tab dumps.

Workbench surfaces should show:

- active Workset title, purpose, source scope, stale state, and restore state;
- pane regions with stable labels, landmarks, and keyboard order;
- pinned, transient, preview, comparison, collapsed, drawer, and narrow-screen sheet states;
- stale, redacted, deleted, unavailable, blocked, and conflict states when a saved pane ref no longer matches current Project state;
- suspend, restore, rename, duplicate, share, archive, delete, pin pane, open evidence split, compare versions, and restore previous layout controls.

Evidence-aware splits should keep the document block, Claim, EvidenceSpan, SourceVersion locator, Trust blocker, and contradiction state together. The UI must make clear that the split is a navigation aid and not new evidence.

Adaptive layout suggestions should appear as small, reversible suggestions tied to a Work Packet, command, Trust blocker, source triage state, publication preflight, automation debug state, repeated layout pattern, or accessibility need. They must not rearrange panes while the user is typing, approving, publishing, deleting, or using a screen reader.
Suggestions based on learned behavior must expose a concise preference explanation and a direct correction or reset path.

Workset switching returns a compact authorized shell first, then hydrates pane details progressively. A restored Workset must never appear fully current until resource authorization, expected versions, and stale/redaction checks complete.

## Chat patterns

Chat should support:

- persistent messages and branches;
- mode chips, visible assumptions, and grouped clarification cards governed by [`../01-product/intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md);
- visible source scope;
- source chips with capability indicators;
- streaming answers;
- tool and research-run progress;
- citation cards;
- unsupported-claim warnings;
- "save to document" and "propose patch" actions;
- interruption and retry;
- cost and budget signals for expensive work.

Chat is the orchestration surface. It is not the durable output.

## Command Center patterns

The Project shell should expose the Command Center described in [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md). It is the shared path for keyboard-first navigation, source-scope changes, mode switching, run control, review queue actions, automation dry-runs, scorecards, and contextual document/source/evidence actions.

Command results should show:

- command group, target, and expected version;
- action class and approval class;
- source scope, budget, cost, and latency where relevant;
- delegated-trust grant coverage, batch eligibility, approval-load state, and fatigue warning where relevant;
- disabled reason, recovery action, irreversible-effect label, or compensation requirement;
- shortcut hint and remapping state;
- safe preview for mutation, publication, recovery, billing, external-write, destructive, or administrative commands.

The implementation should use a local content-minimized command index for fast opening and filtering, then refine through server-authorized results. Command execution must resolve through [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md), not through component-local callbacks that bypass preflight, activity, or approval.

## Focus and resume patterns

The Project shell should expose focus continuity described in [`../01-product/focus-continuity-and-work-resume.md`](../01-product/focus-continuity-and-work-resume.md). Resume is a compact work surface, not a modal that blocks every return.

Resume surfaces should show:

- last trusted checkpoint and active Project scope;
- top next action with target, reason, and command;
- grouped Resume Digest items for approvals, review, stale evidence, failed automation, collaboration, and completed work;
- running or paused Operations with cancellation and review paths;
- recent recovery cards, stale recovery blockers, or irreversible acknowledgements when they are the next safe action;
- Focus Session state and notification suppression summary;
- redacted, stale, or partial digest state when policy prevents full detail.

The shell should restore safe pane layout and selected resource references only after reauthorization. It should load compact Focus State and Resume Digest data before detailed Activity, Trust, source, document, and automation views. The Command Center remains the fast path for continue, catch up, next review, start focus, end focus, and rebuild context pack commands.

## Device continuity patterns

Device continuity surfaces should show:

- current device capability state, including browser, installation, viewport, input, storage, service-worker, push, and background-sync support where relevant;
- offline, degraded, reconnecting, local-only, sync-pending, sync-conflict, unsupported, and storage-risk states in plain language;
- local draft count, local queue count, last sync, retry, cancel, export draft where allowed, discard, and clear-cache controls;
- conflict review with target, base version, local effect, current server version, approval class, side-effect class, and recovery path;
- mobile and tablet layouts that preserve Chat, Documents, Sources, Activity, Focus, Worksets, settings, and Command Center without hover-only controls.

Local cache, service worker, offline packet, and queue behavior must resolve through [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md). Client-only state cannot become a mutation path.

## Native companion patterns

Native companion and browser extension surfaces should show:

- installed, disabled, enabled-no-grants, Project-granted, folder-granted, tab-invoked, policy-blocked, revoked, stale-version, and unsupported states;
- Project destination, source type, capture mode, selected text length, URL or file class, local queue state, privacy label, rights state, and blocked reason before capture;
- browser active-tab, side-panel, context-menu, selected-text, URL-only, OS share/import, file picker, folder-watch, notification, deep-link, tray/menu, and global command entry states where supported;
- revoke, pause, reauthorize, clear-local-state, open settings, retry, discard, and inspect Activity controls;
- browser-only and web-app fallback paths for primary workflows when native installation is unavailable or blocked.

Companion UI must avoid background productivity theatre. It should never imply that Research is watching the screen, clipboard, browser history, local files, camera, microphone, or operating-system windows. Companion actions resolve through [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md), [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md), and owning Source, Document, Notification, Operation, and Activity contracts before canonical state changes.

## Work control patterns

The Project shell should expose a compact Work Packet when it helps the user continue, inspect risk, or choose a next safe action. It should not become a noisy assistant feed.

Work Packet and next-action surfaces should show:

- active Project, surface, resource, and source scope;
- top action, reason, target, effect, expected version, approval class, cost, latency, and recovery path;
- links to the related command, ActionCard, RecoveryActionCard, Operation, Atlas report, Trust blocker, Focus state, Recipe, Product Truth signal, ReversalRecord, or ActivityEvent;
- stale, partial, redacted, blocked, dismissed, corrected, invoked, and expired states;
- dismiss, correct, defer, assign, invoke, and create recipe draft controls when authorized.

Recommendations must come from the server-owned work-control pipeline in [`../02-architecture/project-operating-layer-control-plane.md`](../02-architecture/project-operating-layer-control-plane.md). They may not be generated only by client-side heuristics or ambient screen capture.

## Approval and delegated-trust patterns

Approval surfaces should reduce repeated confirmation without hiding risk. They are governed by [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md) and [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md).

Approval cards should show:

- action class, approval class, Project, actor, source scope, connector scope, destination, budget, cadence, and expected versions;
- exact changed resources or an explicit batch item count with inspectable details;
- what is allowed once, what can be safely batched, and what would require a delegated-trust grant;
- disabled or hard-stop reasons for publication, recovery, compensation, external writes, billing, destructive changes, administration, connector widening, new destinations, larger budgets, irreversible effects, or permission escalation;
- approve, deny, narrow, defer, inspect evidence, and open Activity controls when authorized.

Delegated-trust grant surfaces should show:

- grant envelope, expiry, revocation control, owner, policy snapshot, evidence requirements, outcome metrics, stop conditions, and recent use;
- active, proposed, narrowed, expired, revoked, stale, and blocked states;
- why the grant is being proposed, which prompts it replaces, and which actions remain hard stops;
- a one-step path to revoke the grant and inspect affected ActivityEvents.

Approval batches should group only equivalent low-risk work with the same risk envelope. Batch UI must expose per-item details, count, destinations, resources, expected versions, and the reason the batch is safe to review together.

## Source patterns

Sources should expose:

- ingestion status;
- immutable versions;
- capability matrix;
- parser warnings;
- searchable and citable state;
- permissions;
- refresh schedule;
- derived artifacts;
- evidence viewer.

Users should know when a source is stored, searchable, citable, or only referenced.

## Document patterns

Documents need:

- tree and outline navigation;
- canvas editor;
- raw Markdown mode;
- stable block identity;
- comments;
- locked regions;
- revision history;
- citation side panel;
- AI patch review;
- public/private projection preview;
- export actions.

AI edits should be visible patches with expected base revision and rationale.

## Evidence patterns

Evidence inspection should answer:

- what claim is being made;
- which source version supports it;
- where the exact span is;
- whether support is direct or inferred;
- whether there is conflicting evidence;
- whether the source is stale, removed, or restricted.

Evidence UI should make absence of support visible rather than hiding it in prose.

## Trust patterns

Trust views should answer:

- which claims block publication or export;
- which sections have weak, partial, stale, or conflicted coverage;
- which sources, parser outputs, rights decisions, or provider policies create risk;
- which safe action resolves the blocker.

Trust summaries load before graph drill-down. Large Projects use focused neighborhoods, filters, and paginated blocker queues instead of rendering the full dependency graph in the browser.

## Research-run patterns

Long-running research should show:

- contract;
- plan;
- task progress;
- source acquisition decisions;
- budget and elapsed time;
- current findings;
- approvals needed;
- pause and cancel controls;
- final evidence and patch bundle.

Users should be able to resume work without reading logs.

Deep, costly, or high-risk UI states should expose intent, preflight, approval, and activity state through the shared contracts in [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md) and [`../01-product/activity-timeline-and-review-queue.md`](../01-product/activity-timeline-and-review-queue.md).

## Accessibility baseline

Accessibility and internationalization behavior is governed by [`../01-product/accessibility-internationalization-and-inclusive-research.md`](../01-product/accessibility-internationalization-and-inclusive-research.md) and [`../02-architecture/accessibility-internationalization-and-locale-policy.md`](../02-architecture/accessibility-internationalization-and-locale-policy.md). The UI system must treat those contracts as implementation inputs, not release polish.

Primary workflows require:

- keyboard navigation;
- visible focus;
- screen-reader labels;
- drag alternatives;
- sufficient contrast;
- predictable landmarks;
- non-color-only status;
- accessible streaming updates;
- error recovery;
- responsive layouts.
- keyboard-first command completion for primary paths with pointer and touch alternatives.
- offline fallback, device capability labels, local draft recovery, local queue inspection, sync conflict review, clear-cache controls, mobile, tablet, and installed-app paths with keyboard, pointer, touch, and screen-reader support.
- Work Packet and next-action inspection, correction, dismissal, invocation, stale-state, and recipe-draft review with keyboard, pointer, touch, and screen-reader support.
- approval card, approval batch, delegated-trust grant inspection, grant narrowing, grant revocation, stale receipt recovery, and fatigue warning paths with keyboard, pointer, touch, and screen-reader support.
- Workset switching, pane pinning, evidence-aware splits, layout suggestions, stale-ref recovery, and Workset restore flows with keyboard, pointer, touch, and screen-reader support.
- Project History, recovery option inspection, RecoveryActionCard review, restore, replay, duplicate-as-draft, withdrawal, compensation, reconciliation, stale recovery rejection, and irreversible acknowledgement flows with keyboard, pointer, touch, and screen-reader support.

Implementation rules:

- Prefer semantic HTML before ARIA. Use ARIA Authoring Practices for composite widgets such as command palette, tabs, combobox, tree, grid, menu, dialog, feed, and tooltip.
- Do not create an AI accessibility overlay or summary-only alternate page as a substitute for accessible product structure.
- Preserve deterministic focus return after command execution, AI patch review, Workset restore, support access decisions, repair actions, scenario decisions, and publication preflight.
- Use measured live-region policy for streaming and progressive work so users hear stage changes, blockers, completion, cancellation, and errors without announcement floods.
- Provide list or table alternatives for graph, spatial, drag, canvas, and chart-heavy surfaces.
- Attach language and direction metadata to source labels, document blocks, citations, generated outputs, and exports.
- Use AccessibleOutputManifest evidence for generated charts, diagrams, tables, exports, and public projections.
- Treat translated text as derived material and keep citation support tied to the original SourceVersion.

Accessibility is part of launch evidence, not a post-launch polish item.

## Internationalization baseline

The first implementation must keep APIs locale-neutral while allowing product presentation to respect viewer locale, Project language, Project timezone, source language, document block language, output language, and export locale.

Required UI behavior:

- never choose a language solely from physical location;
- show language and direction when it affects source interpretation, citation display, document editing, export, or publication;
- preserve Unicode, accented text, CJK text, emoji and grapheme clusters, long unbroken tokens, right-to-left text, and mixed-direction citations without clipping, reordering, or changing meaning;
- render dates, times, numbers, and currency through LocaleProfile while storing canonical values in neutral formats;
- label unsupported language, translation, OCR, transcript, table-structure, chart-data, or reading-order limitations before publication;
- keep RTL and mixed-direction testing in browser, document, source, and export journeys.

## First UI milestone

The first UI milestone should prove:

```text
Project shell
-> open Command Center
-> source upload status
-> grounded chat answer with citations
-> save to Markdown document
-> inspect citation
-> reopen after refresh
```

Additional artifacts should wait until this path is reliable.
