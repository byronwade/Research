# Focus continuity and work resume

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should let a user return to a Project and understand the next safe action without rereading chat history, scanning raw logs, or trusting ambient memory. Focus continuity is the Project-level product surface for preserving work state, summarizing what changed, and helping users protect attention while long-running research, automation, collaboration, and source maintenance continue.

This document governs `UX-005` and `UX-006`. Spatial Workbench and Workset layout behavior is governed by [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md). Adaptive personalization, Preference Center controls, and policy-bound preference learning are governed by [`adaptive-personalization-and-preference-controls.md`](adaptive-personalization-and-preference-controls.md). Offline, mobile, installed-app, reconnect, local draft, and device capability behavior is governed by [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md). Project Operating Layer behavior and Work Packets are governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md); Resume Digests and Focus State provide inputs to Work Packets but do not own next-action execution.

## Sources reviewed

Official capability references:

- [Slack new Activity view](https://slack.com/help/articles/46751260742035-Introducing-the-new-Activity-view-in-Slack)
- [Slack Focus Mode](https://slack.com/whats-new)
- [Linear Inbox](https://linear.app/docs/inbox)
- [Notion Inbox and notifications](https://www.notion.com/help/updates-and-notifications)
- [OpenAI Help: Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [OpenAI Help: Deep research in ChatGPT](https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt)
- [OpenAI Help: Scheduled Tasks in ChatGPT](https://help.openai.com/en/articles/10291617-tasks-in-chatgpt)
- [Microsoft Support: Retrace your steps with Recall](https://support.microsoft.com/en-us/windows/ai/ai-features/retrace-your-steps-with-recall)
- [Microsoft Learn: Recall overview for Windows apps](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/)
- [Microsoft Support: Focus in Windows](https://support.microsoft.com/en-us/windows/experience/focus-stay-on-task-without-distractions-in-windows)
- [Apple Support: Summarize notifications and reduce interruptions](https://support.apple.com/guide/iphone/summarize-notifications-reduce-interruptions-iph1fbe7d2b9/ios)
- [Apple Support: Set up a Focus](https://support.apple.com/guide/iphone/set-up-a-focus-iphd6288a67f/ios)

Public user-opinion and practitioner signals:

- [Mental load of messages from every app](https://www.reddit.com/r/productivity/comments/1otsw7l/how_do_you_manage_the_mental_load_of_messages/)
- [ChatGPT Projects continuity complaint](https://www.reddit.com/r/ChatGPTPro/comments/1i4h83m/why_is_the_chatgpt_projects_feature_so_terrible/)
- [Human-in-the-loop fatigue discussion](https://news.ycombinator.com/item?id=48942000)
- [Context switching and the right work setup discussion](https://news.ycombinator.com/item?id=46933529)
- [Slack notification interruption complaint](https://www.reddit.com/r/ADHD/comments/1d3eyjs/slack_is_like_a_torture_device_for_adhd_people/)

The directional lesson is clear: modern products are converging on inboxes, activity streams, task lists, focus modes, notification summaries, AI project context, and activity recall. Users still struggle when those systems are noisy, cross-app, opaque, privacy-invasive, or disconnected from the actual work state. Research should make continuity native to the Project while preserving explicit evidence, permission checks, and canonical state.

## Product purpose

Focus continuity answers:

- Where did I leave off in this Project?
- What changed since I last trusted the workspace?
- What needs my attention now, and what can wait?
- Which Research Runs, automations, source updates, comments, review requests, commands, or document changes affected my current work?
- What context will be restored if I continue?
- Which notifications were suppressed, batched, or promoted while I was focused?
- What is the next safe action, and what approval, source scope, expected version, or recovery path applies?

This is not a global operating-system recorder and not a second memory system. It is a Project-scoped projection from ActivityEvents, Operations, ActionCards, document revisions, source versions, collaboration state, notifications, command invocations, context packs, automation outcome evidence, PreferenceItems where policy allows, and Product Truth signals.

## Core objects

### Focus State

`FocusState` is the per-user, per-Project current work-state projection. It records safe references to the active surface, active Workset, selected resources, open operation, source scope, mode, pane layout refs, recent commands, unsaved draft references, review filters, and last trusted checkpoint.

Focus State stores references, versions, cursors, hashes, classifications, and minimized labels. It must not store raw private source text, raw prompts, hidden model reasoning, full document bodies, credentials, or connector payloads.

### Resume Checkpoint

`ResumeCheckpoint` records the moment from which "changed since I left" is calculated. Checkpoints can be created when a user closes the Project, switches Projects, starts a Focus Session, marks a digest as caught up, hands work to a teammate or agent, or explicitly saves a work state.

The checkpoint records viewer, Project, active resources, document revision IDs, source version IDs, ActivityEvent cursor, Operation cursor, notification cursor, command invocation cursor, and policy snapshot.

### Resume Digest

`ResumeDigest` is a rebuildable, viewer-specific summary of material changes since a checkpoint. It groups changes by next action rather than by raw event order:

- needs approval;
- needs review;
- changed source or stale evidence;
- changed document or patch;
- running or paused work;
- failed or degraded automation;
- collaboration update;
- publication or export risk;
- usage, budget, or policy issue;
- completed work ready to inspect;
- low-priority informational update.

A digest links to exact ActivityEvents, ActionCards, Operations, source versions, document revisions, claims, comments, automation runs, and command invocations. Generated summaries in a digest are explanatory only and cannot independently support factual claims.

### Focus Session

`FocusSession` is a user-controlled attention boundary for a Project or selected resource set. During a Focus Session, Research suppresses or batches non-urgent notifications, preserves the work-state checkpoint, and keeps cancellation, approval, incident, permission-loss, and destructive-risk alerts visible according to policy.

Focus Sessions can be timed, manual, scheduled, or tied to explicit work such as "review this document," "finish cited answer," or "debug this automation." They do not change authorization, evidence rules, or approval classes.

## Resume experience

When a user opens a Project after meaningful absence, Research shows a compact resume surface before asking the user to hunt:

1. current Project state and active surface;
2. last trusted checkpoint time and scope;
3. top next action with target, reason, and safe command;
4. material changes grouped by action class;
5. running, paused, failed, or blocked Operations;
6. source, evidence, and document changes affecting the current work;
7. collaboration items requiring review or response;
8. dismissed, suppressed, or batched notifications where policy allows;
9. a "continue where I left off" command and a "review changes first" command;
10. the current Workset and layout restore state when available;
11. the current Work Packet when a bounded packet exists for the viewer and selected Project state.

The resume surface must be useful at a glance, then deep-link into Activity, Trust Dashboard, Documents, Sources, comments, automation debugger, Command Center, and context packs when the user needs detail.

## Attention policy

Research prioritizes attention by effect and recovery need, not by event volume.

High-priority attention items include:

- approvals that block active work;
- publication, deletion, external-write, billing, or connector-scope changes;
- source permission loss, source revocation, or stale evidence affecting a trusted document;
- failed, paused, degraded, or over-budget automation;
- unresolved contradictions or unsupported claims blocking publication;
- direct mentions, assignments, review requests, and decisions on resources the user owns;
- incidents, restore state, or security-sensitive policy changes.

Low-priority items should default to digest or Activity search:

- completed background maintenance without blockers;
- repeated low-risk sync events;
- informational command usage;
- automation outcome observations that do not change a recommendation;
- broad workspace activity unrelated to the user's selected resources.

Users can tune Focus Session, digest window, in-app inbox, email digest, and webhook behavior through Project settings. Organization policy can enforce minimum delivery for security, billing, support, publication, and compliance events.

Adaptive defaults may suggest digest grouping, quiet-window hints, or focus timing only when the Preference Center exposes the source preference, scope, explanation, correction path, and reset behavior. Preference learning cannot suppress policy-required alerts or promote an inferred preference above a current user correction.

## Command Center integration

The Command Center exposes:

- continue where I left off;
- open current Work Packet;
- show next safe action;
- show what changed since last checkpoint;
- mark digest caught up;
- start, extend, pause, or end Focus Session;
- open next review item;
- open current blocker;
- restore previous pane layout;
- restore or switch Workset;
- rebuild context pack for this work;
- hand off current work state;
- snooze, defer, or route attention item where policy allows.

These commands resolve through typed descriptors, expected versions, preflight, ActivityEvents, and approval rules in [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md).

## User control and trust

Users can inspect:

- what Focus State includes and excludes;
- why a Resume Digest item is ranked;
- which checkpoint and event cursor produced a digest;
- which resources were hidden by authorization, deletion, retention, or rights policy;
- whether the digest was generated, cached, stale, partial, or rebuilt;
- what will be stored when a work state is saved or handed off.

Users can reset or delete personal Focus State according to retention policy. Deleting personal Focus State does not delete domain records, ActivityEvents, audit records, release evidence, collaboration objects, billing records, or source history.

## Privacy and security rules

- Do not capture ambient screen images, clipboard contents, operating-system activity, or cross-app behavior to produce Focus State.
- Do not infer access from a checkpoint, digest URI, notification, or command result.
- Re-evaluate authorization before reading, rebuilding, exporting, notifying, or handing off any focus or resume data.
- Suppress or minimize digest details when a user loses access to a source, document, comment, connector, or Project.
- Never expose hidden reasoning, raw prompts, full private source text, credentials, or full connector payloads in resume surfaces, notifications, telemetry, or support diagnostics.
- Treat generated resume prose as derived material with explicit upstream links.

## Performance expectations

Resume must not make Project open feel slow. The Project shell should load a bounded Focus State and compact Resume Digest first, then lazy-load detailed Activity, Trust, source, document, and automation context.

Production validation measures:

- Project open latency with and without a digest;
- Focus State read and write latency;
- Resume Digest rebuild latency by Project size;
- Work Packet availability and freshness on Project open;
- attention item ranking and suppression correctness;
- notification batching and quiet-hour behavior;
- keyboard-only resume completion;
- stale, partial, and authorization-redacted digest states;
- user corrections when the digest misses or over-prioritizes work.

## Non-goals

- Do not create an operating-system-wide Recall-style recorder.
- Do not make Focus State the source of truth for documents, sources, claims, comments, memory, operations, or automations.
- Do not treat a summarized digest as evidence for factual claims.
- Do not hide required approvals or failures to preserve a clean focus view.
- Do not let notification ranking become an opaque automation that users cannot inspect or correct.
- Do not optimize for inbox zero while unresolved evidence, approval, security, or publication blockers remain open.

## Acceptance criteria

Focus continuity is production-ready only when:

- `UX-005` and `UX-006` are implemented and tested;
- every Focus State field is a minimized reference to canonical state or user preference;
- Resume Digests rebuild from authoritative Activity, Operation, domain, collaboration, notification, command, and automation records;
- authorization and redaction are enforced at checkpoint, digest, notification, API, SDK, MCP, support, and export boundaries;
- the Project shell exposes continue, catch up, next review, and focus controls through visible UI and Command Center;
- Work Packet next actions derived from Focus State, Resume Digest, AttentionItems, Activity, Operations, and ActionCards agree with the current authorized Project state;
- Workset restore state and Focus State agree on active surface, selected resources, pane layout refs, stale refs, and redaction summaries;
- cross-device resume and reconnect paths reauthorize Focus State, Resume Checkpoint, local draft refs, Workset refs, and AttentionItems before display or mutation;
- Focus Sessions suppress, batch, or promote notifications according to explicit policy and quiet hours;
- digest ranking is explainable, dismissible, and correctable;
- deletion, revocation, source rights, and retention changes invalidate affected focus and resume projections;
- browser tests cover reload, device switch, Project switch, notification batching, keyboard resume, redacted digest, stale checkpoint, and interrupted run scenarios;
- release evidence includes performance, accessibility, privacy, authorization, and user-outcome validation.

## Documentation update rule

Changes to Focus State, Resume Checkpoints, Resume Digests, Focus Sessions, attention ranking, or resume commands must update:

- [`project-workspace.md`](project-workspace.md)
- [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md)
- [`notifications-and-scheduled-automation.md`](notifications-and-scheduled-automation.md)
- [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`../02-architecture/focus-state-and-resume-digests.md`](../02-architecture/focus-state-and-resume-digests.md)
- [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md)
- [`../02-architecture/spatial-workbench-layout-and-worksets.md`](../02-architecture/spatial-workbench-layout-and-worksets.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/context-packs-and-agent-handoff.md`](../02-architecture/context-packs-and-agent-handoff.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
