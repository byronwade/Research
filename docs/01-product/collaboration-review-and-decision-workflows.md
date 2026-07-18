# Collaboration, review, and decision workflows

**Review date:** 2026-07-17
**Status:** product contract, not implemented runtime behavior

Research is built for durable work that multiple people, models, and agents can inspect over time. Collaboration must therefore be anchored to canonical Project objects, evidence, revisions, and decisions rather than scattered across chat messages, external comments, or private assistant transcripts.

This contract governs comments, mentions, assignments, suggestions, review requests, decision records, presence, collaborative editing expectations, and AI participation across Chat, Documents, Sources, Claims, Research Runs, Activity, Studio artifacts, GitHub proposals, publications, and Project settings.

## Sources reviewed

Official capability references:

- [OpenAI Help: Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [Claude Help: Projects](https://support.claude.com/en/articles/9517075-what-are-projects)
- [Gemini Notebook sharing help](https://support.google.com/notebooklm/answer/16206563?hl=en)
- [Google Help: comments, action items, and emoji reactions](https://support.google.com/docs/answer/65129?co=GENIE.Platform%3DDesktop&hl=en)
- [Google Help: suggest edits in Google Docs](https://support.google.com/docs/answer/6033474?co=GENIE.Platform%3DDesktop&hl=en)
- [Google Help: assign tasks from Google Docs](https://support.google.com/docs/answer/12048749?co=GENIE.Platform%3DDesktop&hl=en)
- [Notion Help: comments, mentions, and reminders](https://www.notion.com/help/comments-mentions-and-reminders)
- [Microsoft Support: Loop components in Teams chats](https://support.microsoft.com/en-us/teams/apps-service/send-a-loop-component-in-microsoft-teams-chats)
- [GitHub Docs: pull request reviews](https://docs.github.com/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- [Linear Docs: comments and reactions](https://linear.app/docs/comment-on-issues)

Public user-opinion and practitioner signals:

- [OpenAI community request for team collaboration workspace](https://community.openai.com/t/team-collaboration-workspace-in-chatgpt/1114924)
- [Claude Projects collaboration-gap discussion](https://www.reddit.com/r/ClaudeAI/comments/1u92t33/8_things_about_claude_projects_that_took_me_too/)
- [NotebookLM public sharing and moderation question](https://www.reddit.com/r/notebooklm/comments/1g3mcpk/how_to_share_a_notebooklm_i_made_to_the_public/)
- [Hacker News discussion of comments, suggestions, and history in AI knowledge tools](https://news.ycombinator.com/item?id=48675435)
- [Claude Code team-collaboration workflow discussion](https://www.reddit.com/r/ClaudeCode/comments/1rhswxk/how_are_you_actually_using_claude_code_as_a_team/)
- [Experienced developers discussion of AI and weaker team collaboration](https://www.reddit.com/r/ExperiencedDevs/comments/1uecvi7/has_ai_made_developers_less_collaborative_in_your/)

The product lesson is consistent: collaboration needs shared context, reviewable changes, comments, assignments, decision history, and clear visibility into who can see or change what. AI adds leverage only when it reduces coordination cost without creating hidden private work, stale decisions, or unreviewed mutations.

## Product purpose

Collaboration should answer:

- What needs review?
- Who owns the next decision?
- What exact block, claim, source span, patch, run step, artifact, publication, or setting is being discussed?
- What evidence supports the discussion?
- Which AI-generated change is proposed, accepted, rejected, superseded, or stale?
- Which decisions are durable Project context?
- What changed since the reviewer last looked?
- What can be resolved safely, and what requires approval or a new source?

Collaboration is not a parallel task manager. It is a Project-native layer over canonical content, evidence, activity, and decisions.

## Collaboration objects

Research supports these collaboration objects:

| Object | Purpose |
|---|---|
| `CommentThread` | Scoped discussion attached to a canonical resource, block, source locator, claim, run step, action card, or setting. |
| `Mention` | Notification and attention request for a user, group, role, or service account with access. |
| `Assignment` | Explicit owner and due state for a review, blocker, correction, source follow-up, patch, or decision. |
| `Suggestion` | Proposed human or AI change that can be accepted, rejected, revised, or converted to a typed patch. |
| `ReviewRequest` | Request for a person or group to review a document revision, AI patch, source decision, claim state, Research Run plan, publication, or external action. |
| `DecisionRecord` | Durable accepted, rejected, deferred, or superseded decision with rationale, evidence, authority, and affected resources. |
| `PresenceState` | Lightweight live awareness for who is viewing or editing a resource, without becoming the content authority. |

Each object belongs to one Project and is permission-checked independently.

## Anchoring model

Comments and reviews anchor to stable targets:

- document file, revision, block, range, heading, or patch operation;
- claim, evidence span, citation, trust blocker, or source locator;
- source, source version, parser warning, retrieval result, or rights decision;
- Research Run, plan step, section contract, worker task, or model-council disagreement;
- Studio artifact, component, chart, table, or notebook cell;
- publication candidate, snapshot, takedown, or export;
- activity event, action card, automation run, or settings change.

If a target changes, the thread remains attached to the immutable revision and may also project onto the current version with a stale, resolved, moved, or orphaned state. A comment is never silently moved to a different meaning.

## Review workflows

Research has review workflows for:

- AI document patches;
- human suggestions;
- source import or rights decisions;
- unsupported, stale, disputed, or missing-evidence claims;
- Research Run plans and section contracts;
- model-council disagreements;
- publication and export candidates;
- GitHub draft proposals;
- automation dry-runs and failed runs;
- high-risk Project settings changes;
- feedback themes and product non-action decisions.

Review states are:

```text
requested
-> in_review
-> changes_requested | approved | rejected | deferred | superseded | expired
```

Approval policy is governed by [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md), [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md), and [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md). A comment can explain an approval, but it is not an approval receipt by itself.

## Decision records

Decision records preserve Project judgment:

- what was decided;
- accepted and rejected alternatives;
- rationale;
- evidence, source versions, claims, comments, and reviews considered;
- actor or group authority;
- affected documents, sources, automations, settings, memories, or publications;
- status: proposed, accepted, rejected, deferred, superseded, stale, or revoked;
- review date and revisit trigger.

Accepted decisions may become Project memory, but memory remains governed by [`../03-ai/project-memory.md`](../03-ai/project-memory.md). A decision does not prove a factual claim without current authorized evidence.

## AI participation

AI can:

- summarize a long thread with links to exact comments and evidence;
- propose a review checklist;
- identify stale or contradicted comments after source changes;
- suggest assignees from ownership metadata;
- draft a decision record;
- convert accepted feedback into a typed document patch;
- detect repeated unresolved review themes.

AI cannot:

- resolve a human-assigned review without configured policy;
- approve its own patch;
- convert a comment into evidence;
- mention or assign users who cannot access the target;
- hide unresolved objections when publishing;
- silently rewrite decision history.

## User experience

Collaboration should be visible but not noisy:

- comments appear in context, with a Project-level unresolved view;
- mentions notify only users who can access the target;
- assignments appear in the review queue and notifications;
- AI patches and human suggestions share a familiar accept, reject, request-change flow;
- reviewers can compare current content, proposed content, and evidence side by side;
- decisions can be promoted from resolved discussions;
- presence shows live activity without creating pressure to respond synchronously;
- unread, changed-since-review, stale, blocked, and resolved states are explicit.

The default mode is asynchronous. Realtime editing is useful only when canonical revision, conflict, and audit behavior remain correct.

## Non-goals

- Do not become a generic chat, task-management, or meeting-notes product.
- Do not make comments, suggestions, or presence a second document authority.
- Do not let public sharing expose private comments, internal reviewer identity, or private source context by default.
- Do not treat AI summaries of discussions as decisions unless a decision record is accepted.
- Do not use mentions to bypass authorization, notification policy, or quiet hours.
- Do not require realtime multiplayer before asynchronous review and revision integrity work.

## Acceptance criteria

Collaboration is production-ready only when:

- `COLLAB-001` through `COLLAB-003` are implemented and tested;
- comments, suggestions, assignments, reviews, and decisions anchor to stable canonical resources;
- comments and mentions enforce authorization at create, notify, read, export, and publication time;
- AI and human suggestions produce typed patches or decision records with expected versions;
- unresolved, stale, orphaned, and superseded states are visible;
- Activity, notifications, review queue, memory, context packs, and launch evidence reflect collaboration state consistently;
- public/private projection tests prove private collaboration metadata does not leak;
- accessibility tests cover comment navigation, suggestion review, mentions, assignments, and keyboard-only resolution.

## Documentation update rule

Changes to collaboration, review, suggestion, decision, or presence behavior must update:

- [`documents-and-canvas.md`](documents-and-canvas.md)
- [`project-workspace.md`](project-workspace.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`../02-architecture/collaboration-comments-and-decisions.md`](../02-architecture/collaboration-comments-and-decisions.md)
- [`../03-ai/project-memory.md`](../03-ai/project-memory.md)
- [`../02-architecture/context-packs-and-agent-handoff.md`](../02-architecture/context-packs-and-agent-handoff.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
