# Intent preflight and clarification policy

**Review date:** 2026-07-17
**Status:** architecture contract, not implemented runtime behavior

Intent handling is the control layer between conversational input and durable execution. It decides whether Research can proceed with safe assumptions, must ask a clarification question, must run preflight, must create an approval action card, or must block the operation.

The product-facing behavior is specified in [`../01-product/intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md). Command-specific routing is specified in [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md). Delegated trust, approval batching, approval-load budgets, and fatigue enforcement are specified in [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md). This contract defines the state, policy, and integration points needed to make that behavior auditable and replay-safe.

## Goals

- Convert user requests into versioned execution intent before expensive work or side effects.
- Reduce avoidable back-and-forth without hiding assumptions.
- Bind approvals to exact intent and action versions.
- Route repeated low-risk approval patterns to scoped delegated-trust proposals instead of repeated prompts.
- Run deterministic preflight before model calls where it can avoid cost, risk, or wasted work.
- Preserve enough state for replay, support, billing, security review, and product analytics without storing private content unnecessarily.

## Processing chain

```text
Incoming message, command, shortcut, API call, or trigger
-> classify operation and risk
-> draft IntentRecord
-> resolve Project policy, source scope, tools, budget, and output target
-> run deterministic preflight checks
-> decide ask / proceed / plan / approve / block
-> create visible assumption, clarification, plan, action card, or operation
-> emit activity events and execution records
```

The classifier may use a model, but policy checks and final gating are application code.

## Core records

### IntentRecord

An `IntentRecord` is versioned and belongs to one Project.

Required fields:

- `intent_id`
- `project_id`
- `actor_id` or system identity
- `origin`: chat, scheduled automation, API, webhook, MCP, CLI, or internal workflow
- `origin_command_id` and command version where applicable
- `objective`
- `non_goals`
- `mode`
- `source_scope`
- `output_target`
- `evidence_standard`
- `budget_policy`
- `tool_policy`
- `approval_class`
- `risk_class`
- `assumptions`
- `open_questions`
- `preflight_summary`
- `expected_versions`
- `idempotency_key`
- `status`
- `created_at` and `updated_at`

Intent versions are immutable after execution begins. A user edit creates a new version linked to the prior version.

### ClarificationDecision

A `ClarificationDecision` records why the system asked or did not ask.

Required fields:

- `intent_id` and `intent_version`
- `decision`: ask, proceed_with_assumptions, create_plan, require_approval, block, or escalate
- `materiality_reason`
- `question_group` when asking
- `assumptions_used` when proceeding
- `policy_snapshot`
- `decided_by`: deterministic policy, model suggestion, or human operator
- `trace_id`

The reason must map to one of the materiality dimensions in the product policy: scope, source authority, risk, cost, output structure, approval path, or contradiction.

### PreflightCheck

Preflight checks are deterministic where practical. They run before model calls when the result could save cost or prevent unsafe work.

Check families:

- authorization and Project membership;
- source availability, source versions, parser coverage, freshness, and quarantine state;
- rights, publication, residency, retention, and provider policy;
- connector availability, scopes, and action constraints;
- budget, quota, monthly projection, queue admission, and expected latency;
- document expected version and lock status;
- external target expected version and idempotency key;
- approval class, owner, expiry, and rollback or withdrawal path;
- delegated-trust grant eligibility, batch eligibility, approval-load budget, and fatigue state;
- source-content prompt-injection risk and untrusted-instruction handling.

Preflight output is content-minimized and can be shown in Chat, Research Runs, automation dry-runs, review queue action cards, and activity timeline details.

### ApprovalReceipt

An approval receipt is a short-lived authorization artifact, not a chat message.

Required fields:

- `receipt_id`
- `intent_id` and `intent_version`
- `action_card_id`
- `actor_id`
- `approval_class`
- `target_resource`
- `payload_hash` or diff hash
- `expected_version`
- `policy_snapshot_hash`
- `idempotency_key`
- `expires_at`
- `status`

Execution verifies the receipt before the side effect. A retry cannot reuse approval for a changed payload, widened scope, changed policy, or stale expected version.
Delegated-trust grants can replace repeated receipts only when the grant exactly covers the actor, action class, resource, source scope, connector scope, destination, budget, policy snapshot, and expected-version policy.

## Decision policy

| Decision | Condition | Result |
|---|---|---|
| `proceed_with_assumptions` | ambiguity is low risk, reversible, and does not alter source authority, cost, output target, or approval class | record assumptions and continue |
| `ask` | missing answer materially changes scope, risk, cost, source authority, output structure, approval path, or contradiction handling | create grouped clarification |
| `create_plan` | work is deep, expensive, long-running, multi-step, or likely to produce durable patches | create editable plan and freeze intent before execution |
| `require_approval` | operation writes externally, publishes, bills, deletes, changes permissions, mutates canonical content outside policy, or crosses configured thresholds | create review queue action card |
| `block` | operation violates policy, lacks authorization, requests disallowed content, or cannot be made safe with available controls | return typed blocker and recovery path |
| `escalate` | policy conflict or incident-risk ambiguity cannot be resolved by product rules | route to owner or security review |

Model suggestions can inform the decision, but the persisted decision is produced by the policy engine.

## Integration points

### Chat

Chat creates or updates an `IntentRecord` for material requests. Low-risk responses may proceed with assumptions. Deep, patch, publish, export, repository, connector, or scheduled-work paths show the relevant intent plan, assumptions, preflight, or action card.

### Research Runs

Research contracts are compiled from an accepted intent version. Research Runs record the intent version, plan version, source scope, budget, approval points, and completion criteria. A major user edit creates a linked successor run rather than mutating already-executed history.

### Automation

Saved automation stores its originating intent. Each run creates a run-specific intent version with trigger, source scope, preflight result, budget reservation, and approval policy. Background work may proceed only inside the approved lifecycle state in [`agent-development-lifecycle-and-automation-governance.md`](agent-development-lifecycle-and-automation-governance.md).

### Activity timeline and review queue

Intent, clarification, preflight, approval, cancellation, block, retry, and execution events flow through [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md). Review queue action cards reference the exact intent and expected versions they govern. Approval-load and delegated-trust events flow through the same Activity spine and cannot be implemented as notification-only prompts.

### Command Center

Command Center invocations that start costly work, mutate state, or create side effects resolve to a `CommandActionDescriptor` before execution. Descriptor version, target resource, expected version, input schema, shortcut binding, and side-effect class become part of preflight and approval receipt validation.

### Context packs and handoff

Context packs include the accepted intent version, assumptions, non-goals, tool policy, approval class, open risks, and next safe action where relevant. A handoff pack never grants additional authority beyond the linked intent and Project policy.

### API and MCP

Public APIs, SDKs, CLI commands, and MCP tools that start long-running operations accept idempotency keys and return Operations linked to intent records. External clients may supply a proposed intent, but server policy owns normalization, preflight, clarification, and approval decisions.

## Security and privacy

Intent records must not store raw private source text, credentials, hidden reasoning, or full connector payloads unless required by a governed evidence or action record. Store hashes, locators, classifications, and summaries where possible.

Source content is untrusted. It cannot change clarification policy, approval policy, tool permissions, budget policy, model selection policy, or system instructions.

## Observability

Telemetry records:

- clarification decision counts by mode and materiality reason;
- time to first useful output;
- assumptions edited by users;
- wrong-assumption corrections;
- approval waits, denials, expiries, and stale receipt attempts;
- delegated-trust grant use, grant invalidation, approval batching, fatigue signals, and prompts per accepted outcome;
- preflight cost saved and preflight false blocks;
- blocked operations by policy reason;
- retries attempted with valid or invalid receipts.

Analytics events are metadata-only and follow [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md).

## Tests

Required coverage:

- ambiguous low-risk requests proceed with visible assumptions;
- high-risk, costly, or irreversible requests ask or create action cards;
- grouped clarification preserves accessibility and keyboard flow;
- preflight blocks unauthorized source, revoked connector, stale document, missing approval owner, and exceeded budget cases before model calls;
- approval receipt rejects changed payload, stale expected version, expired receipt, widened scope, and duplicate side effects;
- delegated-trust grant rejects changed payload, widened destination, widened connector scope, stale policy, exceeded budget, and unsupported action class;
- user edits create linked intent versions;
- replay preserves original intent and cannot duplicate external writes;
- content-minimized telemetry does not store private source text.

## Launch gates

Intent handling is production-ready only when:

- `INTENT-001` through `INTENT-003` are implemented;
- the policy engine is testable without model nondeterminism;
- Chat, Research Runs, automation, document patches, publication, export, connector actions, API operations, and MCP tools share the same intent model;
- action cards and approval receipts are bound to intent versions and idempotency keys;
- delegated-trust grants and approval batches are enforced by the delegated-trust engine and fail closed on drift;
- activity events can reconstruct ask/proceed/approve/block decisions;
- support diagnostics can explain decisions without private-content exposure;
- performance tests show preflight reduces wasted expensive work without materially increasing low-risk Chat latency.

## Documentation update rule

Changes to intent records, preflight, clarification, or approval receipts must update:

- [`../01-product/intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md)
- [`../01-product/chat.md`](../01-product/chat.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md)
- [`../03-ai/research-orchestrator.md`](../03-ai/research-orchestrator.md)
- [`agent-development-lifecycle-and-automation-governance.md`](agent-development-lifecycle-and-automation-governance.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`context-packs-and-agent-handoff.md`](context-packs-and-agent-handoff.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
