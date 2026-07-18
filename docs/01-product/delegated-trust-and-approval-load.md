# Delegated trust and approval load

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research needs approvals that protect users without turning automation into a stream of meaningless prompts. The product rule is: approve risk, not busywork. Low-risk, reversible work should proceed under explicit policy; high-risk, widening, unusual, or irreversible work should stop at a clear ActionCard with exact consequences.

This document governs `APPROVAL-001` and `APPROVAL-002`. Advanced operating-layer approval-load differentiation is governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md).

## Sources reviewed

Official capability references:

- [OpenAI Help: Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)
- [OpenAI Help: ChatGPT workspace agents](https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business)
- [OpenAI: Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/)
- [Notion Help: Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions)
- [Notion Help: Custom Agents security features](https://www.notion.com/help/custom-agents-security-features)
- [Microsoft Learn: Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals)

Public user-opinion and practitioner signals:

- [AI agent approval fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uws7ct/anybody_else_struggling_with_constant_approvals/)
- [Agent credentials and 2FA approval-fatigue discussion](https://www.reddit.com/r/AI_Agents/comments/1uvveom/how_are_you_handling_credentials_and_2fa_for/)
- [Hacker News permission-fatigue discussion](https://news.ycombinator.com/item?id=48308376)
- [Human approval layers for agents discussion](https://www.reddit.com/r/AI_Agents/comments/1uya9qt/the_three_layer_problem_with_human_approval_for/)
- [Habituation at the Gate: Rising Approval and Declining Scrutiny in Human Review of AI Agent Code](https://arxiv.org/abs/2606.22721)
- [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/abs/2605.24309)
- [How Agents Ask for Permission: User Permissions for AI Agents, from Interfaces to Enforcement](https://arxiv.org/abs/2607.13718)

These signals are directional planning evidence. Public discussions are not statistical proof, and papers are not runtime evidence for Research.

## Product lesson

Current products expose app permissions, per-agent controls, takeover or approval moments, agent directories, audit logs, analytics, owner transfer, access warnings, and approval workflows. Public and research signals point to the remaining product risk: repeated safe-looking prompts train users to approve without reading, while removing approvals creates hidden autonomy.

Research should make approval a scarce, meaningful interaction. The user should be asked only when judgment is actually needed, and the system should prove why the decision is needed.

## Approval load model

Approval load is a product budget, not only a security event count. Research tracks:

- prompts per accepted outcome;
- prompts per run, recipe, Project session, and user day;
- repeated approvals for equivalent low-risk work;
- approval wait time and abandoned work;
- denial, correction, expiration, supersession, and stale-receipt rates;
- actions that were approved but later reverted, rejected, or caused support work;
- high-risk prompts shown after too many low-risk prompts in the same session.

The goal is not fewer approvals at any cost. The goal is fewer low-value approvals and stronger stops for actions that matter.

## Delegated trust

A `DelegatedTrustGrant` is a user or administrator approved policy that lets a bounded class of future work proceed without prompting every time.

Every grant must declare:

- actor, Project, owner, and eligible automation or command;
- allowed action class: read, inspect, draft, internal patch proposal, external draft, external write, publication, billing, destructive, or administration;
- exact resources, source scope, connector scope, model roles, and destinations;
- maximum cost, count, cadence, time window, and concurrency;
- allowed deterministic preflight result;
- required evidence state and expected versions;
- stop conditions and escalation rules;
- expiry, revocation path, and review owner;
- outcome metrics that can downgrade, pause, or retire the grant.

Delegated trust is not blanket permission. It cannot widen source scope, connector scope, budget, destination, approval class, publication rights, billing effect, deletion effect, or administrative authority.

## User experience

Approval UX should make the risk obvious before the user reads details:

- one-line consequence;
- action class and approval class;
- target, expected version, and affected resources;
- source scope, connector scope, destination, and external side effects;
- cost and latency class;
- rollback, withdrawal, or reconciliation path;
- why this cannot proceed under an existing grant;
- what will happen if the user approves, rejects, defers, or edits policy.

Low-risk repeated approvals should be grouped into a batch with one clear risk envelope. High-risk actions should not be buried inside a batch.

Users can inspect, pause, narrow, expire, or revoke delegated trust from Project settings, Activity, Automation registry, Command Center, and Work Packet surfaces.

## Approval classes

| Class | Typical behavior |
|---|---|
| Read-only | Can run under Project policy if authorization, retention, and source rights allow it. |
| Draft | Can create reversible drafts, patches, simulations, or proposed notifications without canonical mutation. |
| Internal mutation | Requires expected version and either explicit approval or a narrow delegated grant. |
| External draft | Requires destination visibility and may run under a destination-scoped grant. |
| External write | Requires explicit approval unless a narrow recurring grant has passed canary and outcome checks. |
| Publication | Requires rights, privacy, evidence, expected version, and explicit approval. |
| Billing | Requires entitlement and budget authority with explicit approval or an admin-owned cap. |
| Destructive | Requires explicit owner approval, recovery evidence, and cannot be hidden in a batch. |
| Administration | Requires elevated policy, audit, and expiry; ordinary delegated trust cannot grant it. |

## Fatigue controls

Research should reduce approval fatigue by:

- converting repeated low-risk decisions into scoped delegated grants;
- batching equivalent low-risk items with shared evidence and rollback;
- using simulation and dry run before approval;
- showing deltas since the last approved version;
- requiring hard stops for new destinations, broader permissions, larger budgets, publication, deletion, billing, and administration;
- pausing or downgrading automations when corrections, denials, reversals, or ignored recommendations rise;
- preventing "always allow" preferences from bypassing high-risk policy.

If the system detects a fatigue pattern, such as rapid repeated approvals after many low-risk prompts, it should slow down, group the remaining work, or require a stronger review for high-risk actions.

## Non-goals

- Do not make approval dialogs the main security architecture.
- Do not use chat language as the approval authority.
- Do not let the model decide whether it needs oversight.
- Do not create "never ask" switches for publication, deletion, billing, administration, connector widening, or external writes to new destinations.
- Do not treat an accepted prompt as evidence that the user understood the risk.
- Do not make delegated trust a second permission, entitlement, or workflow authority.

## Acceptance criteria

Delegated trust and approval-load control are production-ready only when:

- `APPROVAL-001` and `APPROVAL-002` are implemented and tested;
- every high-risk action resolves through deterministic policy before execution;
- approval receipts, delegated grants, and batched approvals bind to exact intent, command, action, recipe, target, expected version, source scope, connector scope, payload hash, and expiry;
- external writes, publication, billing, destructive actions, administration, and connector widening fail closed without valid policy and approval;
- users can inspect, narrow, revoke, and audit delegated trust;
- approval-load telemetry is content-minimized and linked to accepted outcomes, corrections, denials, reversals, support cases, and automation scorecards;
- fatigue controls can pause or downgrade automation without deleting audit history;
- accessibility tests cover approval cards, batches, delegated-trust settings, revocation, and disabled reasons;
- release evidence includes approval-load budgets, delegated-trust invalidation, stale-receipt rejection, fatigue detection, and hard-stop behavior.

## Documentation update rule

Changes to delegated trust, approval load, approval batching, approval classes, fatigue controls, or grant revocation must update:

- [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md)
- [`project-settings-and-administration.md`](project-settings-and-administration.md)
- [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md)
- [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md)
- [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`../02-architecture/automation-recipe-graph-and-execution-policy.md`](../02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
