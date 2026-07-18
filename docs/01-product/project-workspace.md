# Project workspace

A Project is the primary authorization, research, chat, document, source, memory, publication, and audit boundary.

## Primary navigation

```text
Project
├── Chat
├── Documents
└── Sources
```

The interface may expose contextual panels and commands for Evidence, Trust, Project Atlas, Activity, Collaboration, Focus, Outline, Memory, Research Runs, Studio, GitHub, Publish, Reversible Work, and Settings. These are not separate competing product centers. The Spatial Workbench and Workset model is governed by [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md) and owns task-aware pane layouts, evidence-aware splits, suspend/restore, and layout suggestions. The Project Operating Layer is governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md) and coordinates Work Packets and next safe actions across those contextual systems. Reversible Work and Project History are governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md) and own recovery cards, restore, replay, withdrawal, compensation, reconciliation, and irreversible-state labeling. The command layer is governed by [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md), focus and resume behavior is governed by [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md), adaptive personalization and preference controls are governed by [`adaptive-personalization-and-preference-controls.md`](adaptive-personalization-and-preference-controls.md), offline, mobile, installed-app, reconnect, and local-draft behavior is governed by [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md), optional native companion and OS/browser integration is governed by [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md), progressive shell/status behavior is governed by [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md), Atlas map and impact behavior is governed by [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md), source-change maintenance and living-document review are governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md), settings behavior is governed by [`project-settings-and-administration.md`](project-settings-and-administration.md), and collaboration behavior is governed by [`collaboration-review-and-decision-workflows.md`](collaboration-review-and-decision-workflows.md).

## Desktop layout

- A compact Project rail for Projects and cross-Project navigation.
- A primary pane showing Chat or the Document canvas.
- A contextual pane showing Sources, Evidence, Trust, Atlas, Maintenance, Outline, Activity, Memory, or GitHub.
- Resizable panes with preserved user preferences.
- Named Worksets for writing, evidence review, source triage, publication preflight, automation debugging, and Project Atlas impact review.
- Evidence-aware splits that keep document blocks, claims, EvidenceSpans, and SourceVersion locators together without creating a second evidence authority.
- On narrow screens, contextual views become sheets or drawers.

## Project header

The header provides Project title, sharing state, active Workset, active document or conversation, model mode, source-scope status, source-change maintenance status where relevant, device capability state, companion grant or blocked-capture state where relevant, local queue or sync-conflict state, adaptive preference state where relevant, progressive operation state, research progress, unresolved collaboration state, Focus Session state, resume-digest count, Work Packet state, top next safe action, and a restrained Command Center entry point. The shell returns a bounded authorized state before expensive panels load and labels partial, stale, queued, degraded, blocked, unsupported, offline, reconnecting, policy-managed personalization, companion-disabled, companion-revoked, and cancelled work consistently. The Command Center must make target, effect, risk, approval class, expected versions, and recovery path visible before material commands execute.

## Project lifecycle

Projects can be created blank, from a template, imported, duplicated, archived, exported, restored, and deleted according to retention policy. A Project records objectives, audience, terminology, date and geographic scope, source preferences, prohibited sources, publishing policy, model policy, budgets, and instructions.

## Empty-state activation

A new user can:

- start with a sample Project;
- choose a research, paper, product, or software template;
- upload sources before asking a question;
- begin in Chat and let the system propose structure;
- or import a portable Project bundle.

## User control

The user can include, exclude, pin, quarantine, archive, or replace sources; edit plans and outlines; create, suspend, restore, share, archive, and delete Worksets; interrupt runs; inspect Partial Results and stale state; inspect Atlas neighborhoods and Impact Reports; inspect source-change maintenance runs, affected Claims, blocked outputs, and maintenance patch proposals; open the current Work Packet; accept, dismiss, or correct next-action recommendations; inspect, correct, reset, or export adaptive preferences; inspect device capability labels; inspect, pause, revoke, or clear native companion and browser extension grants; recover local drafts; review sync conflicts and blocked captures; clear local cache where policy allows; open Project History; undo local edits; restore prior versions; replay eligible Operations; withdraw publications; compensate external effects; lock document regions; comment, assign, review, and decide on proposed changes; approve patches; choose models or Auto; inspect citations and trust blockers; resume prior work, start or end Focus Sessions, and export or publish selected projections. Primary actions remain reachable through visible UI and keyboard-first command workflows.
