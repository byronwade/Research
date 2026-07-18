# Intent capture and prompt-friction policy

**Review date:** 2026-07-17
**Status:** product contract, not implemented runtime behavior

Research should ask fewer questions than generic chat while still stopping for the questions that materially protect outcome quality, cost, permissions, or user control. The product rule is: ask less, ask better, and make assumptions visible when proceeding is safe.

This contract governs Chat, deep research, document patches, source work, saved automation, scheduled work, connector actions, GitHub proposals, publication, exports, and handoff.
Command Center invocations that start or change material work follow the same intent, preflight, and approval policy.
Delegated trust, approval batching, approval-load budgets, and fatigue controls are governed by [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md).

## Sources reviewed

Official capability references:

- [OpenAI Help: Deep research in ChatGPT](https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt)
- [OpenAI Help: ChatGPT agent](https://help.openai.com/en/articles/11752874-chatgpt-agent)
- [OpenAI Help: ChatGPT workspace agents](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business)
- [Notion Help: Notion Agent](https://www.notion.com/help/notion-agent)
- [Notion Help: Security best practices for Agent connections](https://www.notion.com/help/security-best-practices-for-agent-connections)
- [Zapier Help: Review your agent's activity](https://help.zapier.com/hc/en-us/articles/33336184962573-Review-your-agent-s-activity)

Public user-opinion and practitioner signals:

- [ChatGPT clarification-friction discussion](https://www.reddit.com/r/ChatGPT/comments/1mn8o6j/gpt5_wastes_your_responses_by_asking_way_too_many/)
- [ChatGPT task-deferral discussion](https://www.reddit.com/r/ChatGPT/comments/1mlmsrr/feels_like_chatgpt_5_is_programmed_to_asking/)
- [Agent approval durability discussion](https://www.reddit.com/r/AI_Agents/comments/1r7cm9k/approvals_arent_enough_what_i_learned_building_an/)
- [Agent approval-fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uvveom/how_are_you_handling_credentials_and_2FA_for_agents_that_need_to_do_authenticated_workflows/)
- [Hacker News clarification-before-assumption signal](https://news.ycombinator.com/item?id=47032998)

The directional lesson is balanced: users resent low-value repeated questions, but they also resent confident work built on wrong assumptions. Production agents also need approvals that are durable artifacts, not informal chat acknowledgements.

## Intent contract

Every non-trivial user request produces an internal intent record before expensive model work, external side effects, canonical document mutation, or automation activation.

The user-facing view stays compact, but the record captures:

- objective;
- non-goals and excluded work;
- mode: quick, focused, deep, scheduled, patch, publish, export, or external action;
- source scope and source authority assumptions;
- output target and format;
- evidence standard and citation expectation;
- audience, tone, jurisdiction, time range, or domain constraints where relevant;
- budget, latency class, and expected completeness;
- tools, connectors, and prohibited actions;
- approval class;
- assumptions made without asking;
- unresolved questions and why they matter;
- expected versions for documents, sources, automations, and external targets.

An intent record is not a second memory store. It is a typed execution contract linked to the resulting messages, plans, operations, activity events, patches, action cards, approvals, and release evidence.

## When to ask

The system asks a clarifying question only when the missing answer would materially change one of these fields:

| Field | Ask when missing or conflicting | Proceed when safe |
|---|---|---|
| Scope | requested output, target audience, geography, time range, or topic boundary would change materially | scope can be inferred from Project context and revised later |
| Source authority | source choice changes correctness, rights, freshness, or citation standard | authorized Project sources are sufficient for a first pass |
| Risk | the action may publish, delete, bill, notify, write externally, expose private data, or alter permissions | the action is read-only or creates a draft |
| Cost or latency | the request may trigger deep research, large context, paid connectors, or recurring automation | quick or focused mode can answer with stated limits |
| Output structure | the output target is irreversible, contractual, or hard to restructure later | format can be adjusted from a draft |
| Approval path | approval owner, policy, action version, or rollback path is unclear | no approval is needed until a later typed action card |
| Contradiction | Project instructions, source evidence, or user instructions conflict | the conflict is non-material and can be noted as an assumption |

Questions are grouped. The product should avoid sequential one-question interviews unless the user explicitly chooses guided planning.

## Safe defaults

When it can proceed safely, Research should:

- state the assumption inline or in the plan;
- choose the smallest reversible step;
- prefer draft output over mutation;
- prefer authorized Project sources over broad external discovery;
- use quick or focused mode before deep mode unless depth is requested;
- keep expensive or high-risk stages behind an editable plan, preflight, or action card;
- make the next recovery action visible.

Examples:

- If a user asks for "a production-ready docs audit," proceed with the current canonical docs and state that runtime implementation is not yet verified.
- If a user asks for "update the release doc," create a typed patch against the current base revision rather than asking about every formatting preference.
- If a user asks for "publish this publicly," pause for rights, privacy, expected version, and approval because the side effect is material.

## User experience

Chat exposes intent without turning the composer into a form:

- a mode chip that can be changed before execution;
- a compact "I will..." plan for deep, expensive, or high-risk work;
- visible assumptions with one-click edit where practical;
- a "use safe defaults" path for low-risk ambiguity;
- a grouped clarification card only when the answer is required;
- a review queue action card for approvals and blockers;
- Command Center previews for mode changes, source-scope changes, run control, and high-risk actions;
- activity timeline entries for intent, clarification, preflight, approval, execution, and cancellation.

The default user experience should feel decisive. The system should not end a response with a question merely to create engagement.

## Friction budget

Prompt friction is measured and managed:

- number of clarification turns before first useful output;
- time to first useful draft;
- user edits to system assumptions;
- abandoned runs after clarification;
- approvals per accepted outcome;
- approval expiry and auto-approval rate;
- cost saved by preflight versus cost added by excessive review;
- support cases caused by wrong assumptions or approval fatigue.

Metrics are segmented by mode and risk class. Reducing questions is not success if wrong assumptions increase rework, unsupported claims, or unsafe actions.

## Approval policy

Approvals are typed, scoped, and durable:

- the action card states actor, intent version, target, payload or diff summary, expected version, approval class, expiry, rollback or withdrawal path, and consequence;
- approval applies only to that exact intent/action version;
- retries verify the approval receipt and idempotency key;
- stale approvals expire when source versions, document revisions, policy, connector scope, or target payload changes;
- approval denial records a reason and safe alternative where possible;
- repeated low-risk approval patterns can propose a scoped delegated-trust grant, but the grant must be explicit, expiring, revocable, and invalidated by scope, payload, expected-version, policy, or outcome drift.

Chat language can explain approvals, but it cannot be the approval authority by itself.

## Non-goals

- Do not create a long wizard before normal Chat can answer.
- Do not ask formatting, tone, or preference questions when a reasonable default can be revised.
- Do not let "Never ask" style preferences bypass high-risk approval policy.
- Do not treat an approval as blanket permission for retries, related actions, or widened scope.
- Do not infer source, connector, billing, publication, or deletion permission from conversational enthusiasm.

## Acceptance criteria

Intent capture and prompt-friction work is production-ready only when:

- `INTENT-001` through `INTENT-003` are implemented and tested;
- Chat, Research Runs, automation, document patches, and external actions all produce intent records;
- clarification policy is deterministic enough to test with fixtures;
- safe-default paths produce visible assumptions and reversible output;
- approval receipts are tied to exact action versions and idempotency keys;
- activity timeline and review queue expose intent, preflight, approvals, blockers, and execution state;
- Command Center actions that mutate state or start costly work create or reference the relevant intent record;
- telemetry can distinguish helpful clarification from avoidable friction without storing raw private content;
- approval-load telemetry can distinguish meaningful risk decisions from avoidable repeated prompts;
- accessibility tests cover grouped questions, assumption edits, and action cards.

## Documentation update rule

Changes to intent capture, clarification behavior, or prompt-friction rules must update:

- [`chat.md`](chat.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md)
- [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md)
- [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`../03-ai/research-orchestrator.md`](../03-ai/research-orchestrator.md)
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
