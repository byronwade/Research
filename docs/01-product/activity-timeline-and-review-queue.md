# Activity timeline and review queue

**Review date:** 2026-07-18
**Status:** specification, not implemented

Activity is the user-visible control plane for work that outlives one chat turn. It shows what happened, what is waiting, what changed, what failed, what can be recovered, and what needs a human decision across Chat, intent capture, Sources, Documents, comments, assignments, reviews, decisions, Research Runs, automations, publications, GitHub proposals, connectors, billing-affecting work, Reversible Work, AbuseDecisions, AbuseReviews, AbuseAppeals, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, and support-safe diagnostics.

This document governs `ACT-001`, `ACT-002`, and `ACT-003`.

## External signals

Official product signals show that activity and review surfaces are becoming a baseline for AI work systems:

- [Zapier agent activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity) exposes runs, status, apps used, run details, and selected field information.
- [Zapier Activity dashboard](https://zapier.com/blog/zapier-agents-pods-dashboards/) emphasizes complete run logs, "Needs action" filtering, app visibility, completed-task review, and intervention.
- [OpenAI Scheduled Tasks](https://help.openai.com/en/articles/10291617-tasks-in-chatgpt) exposes a task list where users can view, pause, resume, edit, delete, inspect previous task responses, and manage monitoring tasks.
- [OpenAI ChatGPT workspace agents](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business) expose draft-plan review, write-action approvals, and connector action constraints.
- [Notion release notes](https://www.notion.com/releases) describe Custom Agent activity in the audit log so teams can see when an agent runs, what changed, and who triggered it.
- [Glean ADLC](https://www.glean.com/press/glean-introduces-the-enterprise-agent-development-lifecycle-codifying-how-enterprises-build-govern-and-measure-ai-agents) frames enterprise agents as governed production systems with launch, monitoring, measurement, and continuous improvement.
- [n8n AI agent debugging guidance](https://blog.n8n.io/how-to-debug-failures-or-missteps-in-ai-agent-behavior/) emphasizes searchable execution metadata, step-by-step decision traces, parameter comparison, and turning repeated failures into evaluations.
- [Temporal Web UI](https://docs.temporal.io/web-ui) exposes workflow history, workers, relationships, pending activities, queries, metadata, downloadable event history, cancellation, reset, and call-stack views.
- [Temporal Event History](https://docs.temporal.io/workflow-execution/event) treats workflow history as an append-only, durable audit log used for recovery and debugging.
- [LangSmith n8n tracing](https://docs.langchain.com/langsmith/trace-with-n8n) shows how AI workflow runs can be forwarded into an agent-run trace UI.
- [Knowledge-Based Zero-Replay Debugging of Multi-Agent LLM Traces](https://arxiv.org/abs/2606.14805), [AgentTrace](https://arxiv.org/abs/2602.10133), and [XAI for Coding Agent Failures](https://arxiv.org/abs/2603.05941) point toward structured trace graphs, failure taxonomies, and human-readable explanations instead of raw logs as the debugging surface.

Practitioner signals point in the same direction: agent builders want topology, step inspection, cost, trace comparison, record/replay, and local debugging instead of opaque logs. Research should make this native to the Project, not bolt it on as a separate observability tool.

## Product purpose

The Activity surface answers:

- What happened in this Project?
- What is running now?
- What needs my decision?
- What changed a document, source, claim, artifact, publication, automation, connector, or GitHub proposal?
- What did the system read, write, skip, retry, or block?
- What intent, assumptions, clarification, and preflight decision led to the work?
- What did the work cost in time, tokens, credits, and capacity?
- Can I resume, replay, retry, approve, reject, cancel, or hand off safely?
- Where did an automation diverge from expected context, tool choice, schema, evidence, policy, or outcome?
- Can I convert a repeated failure into a fixture, evaluation case, recipe validation, or outcome-scorecard threshold?

Activity is not a raw log viewer. It is a work surface for trust, automation, recovery, and collaboration. Collaboration objects and decision semantics are governed by [`collaboration-review-and-decision-workflows.md`](collaboration-review-and-decision-workflows.md).
Automation outcome scorecards and adaptive workflow recommendations are governed by [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md).
Project automation registry, dry-run review, failure taxonomy, replay eligibility, fixture creation, and detailed Automation Run Debugger behavior are governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md). Activity records and opens those states; it does not own them.
Automation recipe authoring, simulation, activation, and playbooks are governed by [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md).
Source-change maintenance runs, maintenance ActionCards, stale-claim review, and maintenance patch proposals are governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md).
Command Center action discovery, shortcuts, and command execution safety are governed by [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md).
Delegated trust, approval batching, approval-load budgets, and fatigue controls are governed by [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md).
Abuse prevention, trust-safety reviews, appeals, false-positive outcomes, provider-policy blocks, and emergency controls are governed by [`abuse-prevention-and-trust-safety.md`](abuse-prevention-and-trust-safety.md).
Focus State, Resume Checkpoints, Resume Digests, Focus Sessions, attention ranking, and caught-up state are governed by [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md). Activity provides source events and review state for resume, but a digest cannot rewrite Activity history. Progressive Delivery, Partial Results, Fast Paths, stale labels, and cancellation or recovery state are governed by [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md); Activity is the user-visible timeline for those states, not their hidden backend log.
Project Atlas neighborhoods and Impact Reports are governed by [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md); Activity can open the relevant map path, but map projections cannot rewrite Activity history.
Scenario Lab simulations, option comparisons, stale-plan invalidations, decisions, apply candidates, and outcome observations are governed by [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md); Activity records those lifecycle events but cannot treat a simulated effect as a committed fact.
Reversible Work, Project History, recovery cards, undo, restore, replay, withdrawal, compensation, reconciliation, irreversible acknowledgements, and recovery outcome observations are governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md); Activity records recovery lifecycle events but cannot erase the original history.
Project Operating Layer Work Packets and NextActionCandidates are governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md); Activity records recommendation exposure, dismissal, correction, invocation, and outcome observations without becoming the recommendation authority.

## Timeline model

Every Project has an ordered activity timeline with compact event cards. Cards include:

- event type and status;
- progressive status such as partial, stale, queued, degraded, blocked, unsupported, cancelled, or final;
- actor or system identity;
- Project, resource, and operation links;
- source scope and policy snapshot where relevant;
- intent version, assumptions, clarification, or preflight summary where relevant;
- model role, provider route, tool, connector, or workflow step where relevant;
- cost, latency, and capacity class where relevant;
- created, started, completed, failed, or cancelled times;
- result, blocker, or next action;
- redacted details safe for the viewer's authorization level.

Timeline filters include resource, source, document, automation, actor, event type, status, approval class, abuse decision state, time range, cost class, provider, tool, connector, and publication impact.

## Review queue

The review queue is a filtered Activity view for items that need human action. Queue items include:

- approval request;
- delegated-trust grant proposal, revocation, approval batch, or approval-load threshold;
- clarification required or preflight blocked;
- failed or degraded automation;
- recipe validation, simulation, canary, trigger ambiguity, or activation blocker;
- stale, blocked, unsupported, or over-age Partial Result that cannot be promoted safely;
- source-change maintenance patch, stale-claim revalidation, failed refresh, official-reference expiry, or blocked publication waiting for review;
- budget threshold;
- unsupported, stale, disputed, or missing-evidence claim;
- unresolved comment, assignment, suggestion, review request, or decision record;
- publication blocker;
- Impact Report waiting for review before source revocation, publication, recipe activation, deletion, retention, policy, parser, model-role, or release-candidate change;
- Scenario Lab simulation waiting for decision, stale-plan revalidation, live-test approval, or apply-candidate handoff;
- recovery card waiting for restore, replay, withdrawal, compensation, reconciliation, or irreversible-effect acknowledgement;
- source rights or provider-policy blocker;
- abuse review, abuse challenge, appeal, false-positive review, throttle, capability suspension, provider-policy denial, content-safety block, or emergency-control release;
- connector revocation or permission loss;
- GitHub draft proposal waiting for validation or approval;
- model-council disagreement requiring a policy decision;
- feedback theme or user correction requiring product disposition.
- automation outcome regression, cost anomaly, repeated rejected output, or adaptive-routing recommendation requiring owner review.
- focus resume item requiring user attention because a digest found changed sources, stale evidence, interrupted work, suppressed notifications, or a next action tied to the user's current Focus State.

Each queue item exposes the safest next action. Users can approve, reject, request changes, assign, defer, cancel, retry, convert to issue, or open the governing source, run, claim, patch, publication, or automation.
These actions may be invoked from the queue UI or Command Center, but both paths resolve to the same ActionCard state transition, preflight, expected version, approval receipt, and ActivityEvent.

## Action cards

Action cards are typed, reviewable commands. They include:

- objective;
- intent version and assumptions;
- proposed effect;
- affected resources;
- expected base versions;
- source and evidence references;
- approval class;
- budget and external side effects;
- rollback, withdrawal, or recovery path;
- validation evidence or missing validation;
- approval receipt or pending receipt state;
- expiry and owner.

An action card cannot grant itself more authority. A card that mutates canonical content, publishes, sends notifications, creates external drafts, performs connector writes, changes billing, or deletes data follows the approval class in [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md). Intent and approval-receipt semantics are governed by [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md). Delegated-trust grants and approval batches are governed by [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md), and must remain revocable and visible from Activity. Abuse reviews and appeals are governed by [`../02-architecture/abuse-prevention-policy-and-enforcement.md`](../02-architecture/abuse-prevention-policy-and-enforcement.md), and cannot expose private content, bypass emergency controls, or retry blocked work under a new identity.
Comments can discuss an action card, but approval requires the action-card or review-request state transition defined in [`../02-architecture/collaboration-comments-and-decisions.md`](../02-architecture/collaboration-comments-and-decisions.md).
Command descriptors can open, filter, and resolve action cards, but they cannot weaken the approval class or skip expected-version checks.

## Replay and debugging

Users can open a run or automation from Activity through the Automation Run Debugger governed by [`automation-registry-and-run-debugger.md`](automation-registry-and-run-debugger.md). The debugger is a redacted work surface over Activity, Operation, workflow, recipe, side-effect, outcome, and support-safe diagnostic records. It is not a raw telemetry console and it does not expose hidden reasoning.

The debugger supports:

- plan and step graph;
- recipe version, trigger, simulation coverage, canary policy, and activation blocker where relevant;
- Scenario Lab input snapshot, simulation plan, simulated effects, option comparison, stale dependency, and apply candidate where relevant;
- ReversalCapability, ReversalSnapshot, RecoveryActionCard, CompensationPlan, ReconciliationCheck, irreversible-effect label, and recovery outcome where relevant;
- accepted intent version, assumptions, clarification decisions, and preflight result;
- source versions and context pack used;
- model roles and provider routes, without hidden reasoning;
- tool calls and external side effects;
- retries, fallbacks, interruptions, approvals, and cancellations;
- output resources and rejected candidates;
- accepted, edited, rejected, ignored, blocked, or reverted outcomes linked to the automation scorecard;
- cost, latency, token, queue, and capacity events;
- divergence markers for missing context, ambiguous tool choice, invalid parameters, schema failure, stale source, permission drift, unsupported claim, cost anomaly, approval mismatch, side-effect uncertainty, or model-route mismatch;
- comparison across run versions, recipe versions, model roles, parameters, source scopes, and deterministic gates;
- conversion of a debug finding into a test fixture, recipe simulation case, evaluation case, ActionCard, Product Truth signal, or adaptive-routing recommendation.

Debugger views have three levels:

1. **Summary:** status, trigger, owner, source scope, outcome, cost, latency, failed stage, safest next action, and redaction summary.
2. **Trace:** step graph, inputs and outputs by schema, tool calls, model roles, context-pack refs, policy checks, retries, gates, side effects, and outcome links.
3. **Compare and learn:** diff against a successful run, rerun or replay eligibility, model/parameter comparison, failure taxonomy, evaluation fixture creation, and scorecard impact.

Replay is bounded by the architecture contract in [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md). Replay never duplicates external writes, publishes, sends notifications, changes billing, or mutates repositories without a new explicit action card.

## UX rules

- Activity must be useful at a glance before requiring graph inspection.
- "Needs review" is a first-class state, not an error hidden in a log.
- Empty, running, failed, blocked, and completed states each show a next action.
- Users can distinguish system work, human work, automation work, provider work, and external-system work.
- Users can distinguish raw timeline events from Resume Digest groupings and Focus Session suppression state.
- Users can distinguish durable Activity state from Progressive Delivery stage events and know when a Partial Result is not final.
- Cost and latency are visible for expensive or recurring work.
- Useful outcomes are visible separately from run count, token spend, or generated output volume.
- Debugger findings are explicit about whether they are deterministic, inferred from trace structure, model-suggested, or user-confirmed.
- A repeated failure pattern must offer a path to a fixture, test, simulation, scorecard threshold, or non-action decision.
- Activity cards redact private content unless the viewer has source permission.
- Deleting or retiring an automation does not erase Project audit history.
- The timeline supports keyboard navigation, screen readers, deep links, and narrow screens.
- Review, retry, defer, approve, reject, and cancel commands remain reachable by keyboard with visible disabled reasons.

## Non-goals

- Do not expose hidden model reasoning.
- Do not make raw telemetry the product interface.
- Do not let Activity become a second source, evidence, document, memory, or publication authority.
- Do not allow activity deletion to erase compliance, billing, evidence, or publication history.
- Do not summarize away exact evidence needed to review a high-risk action.

## Launch gates

Activity and review are production-ready only when:

- material operations write activity events through the application-owned event spine;
- review queue counts match source, claim, publication, automation, and approval state;
- event cards enforce authorization and content minimization;
- replay and retry use idempotency and side-effect ledgers;
- action cards carry expected versions and approval classes;
- action cards bind approval receipts to exact intent/action versions and idempotency keys;
- delegated-trust grant proposals, active grants, revocations, approval batches, and fatigue signals are visible and auditable without exposing private content;
- abuse decisions, challenges, reviews, appeals, throttles, suspensions, enforcement releases, and false-positive outcomes are visible and auditable without exposing private content;
- collaboration cards expose stale, orphaned, superseded, unresolved, and permission-redacted states consistently;
- users can resolve or defer blockers without reading backend logs;
- Resume Digests, Focus Sessions, caught-up checkpoints, and notification suppression state agree with Activity, Operation, ActionCard, command, collaboration, and notification records;
- command invocations that resolve review items produce the same activity and audit evidence as direct UI actions;
- Work Packet recommendation exposure, dismissal, correction, invocation, and outcome observations are visible without exposing raw private content;
- Scenario Lab creation, simulation, comparison, decision, invalidation, apply-candidate, and outcome-observation state are visible without treating simulated effects as committed facts;
- Reversible Work capability, restore, replay, withdrawal, compensation, reconciliation, irreversible acknowledgement, invalidation, and outcome-observation state are visible without deleting original Activity or audit history;
- API, SDK, CLI, MCP, webhook, and UI consumers see compatible operation status;
- validation proves cross-tenant isolation, redaction, stale-event handling, and replay safety;
- automation outcome scorecard state, adaptive-routing recommendations, run debugger state, and review queue state agree for the same automation.
- Automation Run Debugger views expose searchable execution metadata, step traces, failure taxonomy, trace comparison, replay eligibility, side-effect safety, and fixture creation without raw private content or hidden reasoning.
- recipe validation, simulation, trigger dedupe, canary, run state, ActionCard, outcome scorecard, and Activity state agree for the same Automation Recipe version.
- Progressive Delivery, Operation, Activity, API, SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, and support diagnostic states agree for partial, stale, queued, degraded, blocked, unsupported, cancelled, revoked, expired, and final work.
