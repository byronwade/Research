# Delegated trust policy and approval engine

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The delegated-trust engine is the structural enforcement point for approvals, scoped trust grants, approval batching, and fatigue controls. It turns product policy from [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md) into runtime decisions that cannot be bypassed by Chat, Command Center, Automation Recipes, agents, API clients, MCP tools, connector callbacks, or worker code. Advanced operating-layer approval-load differentiation is governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md).

## Goals

- Ask for human approval only when judgment is needed.
- Enforce high-risk stops before side effects reach domain services, connectors, publication, billing, or administration.
- Convert repeated low-risk approval patterns into scoped, expiring delegated trust grants.
- Bind every approval and grant to exact intent, action, command, recipe, resource, scope, expected version, payload hash, policy snapshot, and expiry.
- Measure approval burden as a product, security, and automation-quality signal.
- Fail closed when policy, permissions, source state, payload, destination, or expected version drifts.

## Authority boundary

The delegated-trust engine may decide whether a proposed action can proceed, must ask, can be batched, can use a grant, or must be blocked. It does not own the canonical mutation. Domain services still own actual source, document, publication, connector, billing, repository, setting, and administration changes.

The engine reads:

- Project policy, membership, support grants, entitlements, budgets, residency, retention, and source-rights state;
- IntentRecords, PreflightChecks, ApprovalReceipts, CommandActionDescriptors, CommandInvocations, ActionCards, Operations, ActivityEvents, and audit events;
- Automation Recipes, RecipeVersions, RecipeRuns, simulations, canary policy, outcome scorecards, and adaptive recommendations;
- WorkPackets, NextActionCandidates, ProjectImpactReports, Trust blockers, Product Truth signals, and Focus state;
- connector scopes, destination identities, publication manifests, billing authority, and administrative privileges.

Source content, model output, and connector payloads are untrusted inputs. They cannot lower approval class, create grants, widen scope, or mark a high-risk action as safe.

## Processing chain

```text
Action proposal
-> resolve actor, Project, intent, command/action descriptor, target, payload hash, and expected versions
-> classify action class, side-effect class, approval class, reversibility, destination, budget, and evidence requirements
-> run deterministic preflight
-> search eligible DelegatedTrustGrant
-> evaluate approval-load budget and fatigue signals
-> decide allow / allow_with_grant / batch / ask / block / escalate
-> create ApprovalRequest, ApprovalBatch, ApprovalReceipt, ActionCard, or BlockedDecision
-> execute only after owning service verifies receipt or grant at the mutation boundary
-> record ActivityEvent, audit event, WorkControlObservation, and outcome linkage
```

Models may summarize risk for display after deterministic classification. They do not issue final approval decisions.

## Core records

### DelegatedTrustPolicy

Project or Organization policy defining allowed grant shapes:

```text
policy_id
organization_id
project_id
scope
allowed_action_classes[]
forbidden_action_classes[]
max_duration
max_cost
max_count
allowed_destination_kinds[]
requires_canary
requires_owner_review
fatigue_thresholds
created_at
updated_at
```

### DelegatedTrustGrant

Scoped future permission for a bounded action class:

```text
grant_id
organization_id
project_id
owner_id
actor_or_automation_ref
intent_ref
command_descriptor_refs[]
recipe_version_refs[]
action_class
side_effect_class
resource_scope_ref
source_scope_ref
connector_scope_ref
destination_refs[]
model_role_policy_ref
budget_policy_ref
expected_version_policy_ref
preflight_policy_hash
canary_policy_ref
outcome_metric_refs[]
status
expires_at
revoked_at
```

Grants are invalid if any declared scope, destination, policy hash, expected version policy, rights state, connector scope, budget cap, or outcome gate changes beyond the grant envelope.

### ApprovalRequest

Single decision request:

```text
approval_request_id
project_id
intent_ref
action_card_ref
command_invocation_ref
operation_ref
recipe_run_ref
target_resource_ref
payload_hash
expected_versions[]
action_class
approval_class
side_effect_class
destination_refs[]
risk_summary
recovery_path_ref
status
expires_at
```

### ApprovalBatch

Group of equivalent low-risk decisions:

```text
approval_batch_id
project_id
batch_reason
shared_policy_hash
shared_source_scope_ref
shared_destination_refs[]
max_action_class
approval_request_refs[]
excluded_high_risk_refs[]
status
expires_at
```

A batch cannot contain publication, destructive, billing, administration, connector-widening, or new-destination external-write actions unless a governing policy explicitly defines a higher-assurance batch type.

### ApprovalDecision

Human, owner, admin, or policy decision:

```text
decision_id
approval_request_id
approval_batch_id
decider_id
decision
reason_code
edits_to_scope
created_grant_id
policy_snapshot_hash
decided_at
```

### ApprovalLoadBudget

Product and safety threshold:

```text
approval_load_budget_id
project_id
actor_id
window
max_prompts
max_high_risk_prompts
max_batch_size
max_approval_wait
fatigue_action
created_at
updated_at
```

### ApprovalFatigueSignal

Derived but auditable signal:

```text
fatigue_signal_id
project_id
actor_id
window
signal_kind
source_metric_refs[]
severity
recommended_action
created_at
```

Signals can recommend grouping, simulation, grant proposal, downgrade, pause, owner review, or stronger challenge. They cannot approve a risky action.

## Decision policy

| Decision | Rule |
|---|---|
| `allow` | Read-only or reversible draft action is authorized, within policy, and below fatigue threshold. |
| `allow_with_grant` | A valid grant exactly covers actor, action, resource, scope, destination, budget, expected-version policy, and outcome gates. |
| `batch` | Multiple equivalent low-risk requests share scope, consequence, recovery path, and approver. |
| `ask` | Human judgment is needed for material risk, widened scope, new destination, publication, billing, destructive, administrative, or unusual work. |
| `block` | Action violates policy, lacks authority, cannot be made safe, or has stale scope, changed payload, missing recovery, or invalid evidence. |
| `escalate` | Security, legal, residency, support, or owner policy conflict requires a higher authority. |

The policy engine is deterministic and testable without model calls.

## Enforcement boundary

Every material domain mutation verifies one of:

- an explicit valid `ApprovalReceipt`;
- a valid `DelegatedTrustGrant` plus matching action envelope;
- a policy class that permits immediate execution.

Verification happens at the mutation boundary, not only in the UI. A notification, chat message, Slack ping, or model self-report is not approval. Timeout means no decision unless policy explicitly defines a safe no-op.

## Delegated trust lifecycle

```text
proposed
-> reviewed
-> active
-> canary
-> active
-> narrowed / paused / expired / revoked / retired
```

Grant proposals can come from Project settings, automation recipe simulation, repeated-work capture, Activity, Command Center, Work Packets, or owner review. Grants become active only after policy validation, owner approval, expected-version policy, budget caps, expiry, and outcome metrics are recorded.

## Invalidation

Approval requests, receipts, batches, and grants invalidate on:

- actor, role, membership, support grant, service account, or admin policy change;
- Project policy, retention, residency, rights, provider, or publication policy change;
- source version, parser status, claim support, Trust blocker, evidence coverage, or source scope change;
- document revision, lock, publication, export, repository, connector destination, or billing target change;
- payload hash, command descriptor version, recipe version, model-role policy, tool policy, or expected-version policy change;
- budget, quota, entitlement, canary, outcome scorecard, fatigue signal, or incident state change.

Invalidated approvals fail closed and surface the narrowest recovery action.

## API and command exposure

Initial resource families:

- `GET /v1/projects/{project_id}/approval-policy`
- `GET /v1/projects/{project_id}/approval-load`
- `GET /v1/projects/{project_id}/approval-requests`
- `POST /v1/projects/{project_id}/approval-requests/{request_id}/decide`
- `POST /v1/projects/{project_id}/approval-batches`
- `GET /v1/projects/{project_id}/delegated-trust-grants`
- `POST /v1/projects/{project_id}/delegated-trust-grants`
- `POST /v1/projects/{project_id}/delegated-trust-grants/{grant_id}/revoke`

Public APIs, SDKs, CLI, and MCP can expose approval state where authorized, but they cannot bypass policy. A client-supplied approval decision is only a request until server policy validates identity, scope, expected versions, and payload hash.

## Events

Activity and audit projections include:

- `approval.requested`
- `approval.batched`
- `approval.granted`
- `approval.rejected`
- `approval.expired`
- `approval.superseded`
- `approval.blocked`
- `delegated_trust.proposed`
- `delegated_trust.granted`
- `delegated_trust.narrowed`
- `delegated_trust.revoked`
- `delegated_trust.expired`
- `approval_load.threshold_crossed`
- `approval_fatigue.signal_recorded`

Telemetry is metadata-only. It must not contain raw source text, raw prompts, document bodies, credentials, hidden reasoning, full connector payloads, or private URLs.

## Tests

Required coverage:

- approval class classification for command, chat, recipe, API, MCP, connector, publication, billing, destructive, and administration paths;
- valid grant allows only exact covered scope;
- grant rejects widened source scope, connector scope, destination, budget, payload, action class, policy hash, or expected-version policy;
- batch creation excludes high-risk actions and separates dissimilar consequences;
- domain mutation fails closed without receipt or grant;
- stale receipt, expired grant, revoked connector, changed document revision, changed source version, changed policy, and changed payload are rejected;
- fatigue thresholds produce grouping, grant proposal, downgrade, pause, or stronger review without auto-approving risk;
- Activity, audit, WorkControlObservation, automation outcome, support, API, SDK, CLI, and MCP projections agree;
- accessibility tests cover approval cards, batch review, delegated-trust settings, revocation, and disabled reasons.

## Launch gates

Delegated-trust enforcement is production-ready only when:

- `APPROVAL-001` and `APPROVAL-002` are implemented;
- high-risk actions cannot reach side-effect code without verified receipt or grant;
- approval and grant decisions are replay-safe, expected-versioned, auditable, and idempotent;
- users and admins can inspect and revoke active grants;
- approval-load metrics are tied to accepted outcomes, denials, corrections, reversals, incidents, support cases, and automation scorecards;
- fatigue controls can pause, downgrade, batch, or route automation without deleting audit history;
- release evidence proves fail-closed behavior for stale receipts, invalid grants, connector widening, publication, deletion, billing, and administration paths.

## Documentation update rule

Changes to approval policy, delegated trust, grant lifecycle, approval batching, approval-load budgets, fatigue signals, or approval APIs must update:

- [`../01-product/delegated-trust-and-approval-load.md`](../01-product/delegated-trust-and-approval-load.md)
- [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`agent-development-lifecycle-and-automation-governance.md`](agent-development-lifecycle-and-automation-governance.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
