# Reversal ledger and compensation engine

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

Product behavior is specified in [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md). This architecture defines how Research records reversibility eligibility, creates recovery action cards, restores canonical Project state, replays eligible Operations, withdraws projections, compensates external side effects, reconciles uncertain outcomes, and labels irreversible effects without creating a second authority.

This architecture governs `REV-002` and supports `REV-001`.

## Goals

- Provide a Project-owned recovery model that spans documents, sources, claims, publications, exports, Worksets, recipes, repairs, scenarios, settings, GitHub proposals, connector actions, notifications, billing-affecting work, webhooks, and release evidence.
- Separate direct restore from replay, retry, withdrawal, compensation, reconciliation, disaster restore, and irreversible effects.
- Prevent stale or unauthorized recovery from mutating current state.
- Preserve auditability after recovery; undo does not delete history.
- Make recovery eligibility available to UI, API, SDK, CLI, MCP, webhooks, support diagnostics, Activity, Scenario Lab, Project Atlas, and release evidence through the same records.

## Authority boundary

The reversal engine may read:

- ActivityEvents, audit events, Operations, workflow attempts, command invocations, approval requests, approval receipts, delegated-trust grants, side-effect ledgers, outbox rows, inbox rows, incidents, and support-safe diagnostic refs;
- Documents, DocumentBlocks, DocumentRevisions, patches, comments, decisions, publications, exports, locked regions, and public/private projection state;
- Sources, SourceVersions, parser runs, index manifests, rights decisions, connector sync state, and source-change proposals;
- Claims, EvidenceSpans, Trust blockers, Project Atlas neighborhoods, Impact Reports, Project Health findings, repair playbooks, RepairRuns, Scenario records, SimulationRuns, apply candidates, and outcome observations;
- Automation Recipes, Recipe Versions, RecipeRuns, canary gates, outcome scorecards, adaptive-routing recommendations, GitHub snapshots, branches, commits, pull-request proposals, settings change records, entitlements, usage, billing reservations, notification records, and webhook deliveries.

The reversal engine creates ReversalCapabilities, ReversalRecords, RecoveryActionCards, ReversalSnapshots, CompensationPlans, CompensationSteps, ReconciliationChecks, invalidations, and ReversalOutcomeObservations. It does not own current authoritative state for documents, sources, publications, recipes, billing, connectors, GitHub, or settings. Owning services perform mutation after authorization, preflight, expected-version checks, approvals, idempotency, and side-effect checks.

## Processing chain

```text
Material action completes, fails, or becomes uncertain
-> owning service records Activity, audit, Operation, and side-effect state
-> reversal engine classifies reversible scope and side-effect class
-> create or update ReversalCapability records
-> expose recovery card from Activity, resource detail, Work Packet, API, or support-safe diagnostics
-> user or automation requests recovery action
-> reauthorize actor, target, source scope, and current versions
-> assemble content-minimized ReversalSnapshot and drift summary
-> require Scenario Lab or Project Atlas preview when risk policy requires it
-> create RecoveryActionCard or direct low-risk restore request
-> owning service performs mutation, replay, withdrawal, compensation, or reconciliation
-> observe outcome and update Activity, audit, reversal, Product Truth, support, and release evidence
```

Recovery actions are invalidated when expected versions, policy, permissions, rights, residency, retention, source versions, document revisions, recipe versions, connector scopes, external target state, approval receipts, or side-effect ledger state change before mutation.

## Reversibility classes

Every material action receives one or more classes:

| Class | Meaning |
|---|---|
| `local_undo` | Client-side or uncommitted edit can be undone without authoritative mutation. |
| `canonical_restore` | A prior Project-owned version can become a new canonical revision or state transition. |
| `duplicate_as_draft` | Historical content or workflow state can be copied into a new draft without replacing current state. |
| `idempotent_retry` | Failed or uncertain work can retry the same logical effect safely. |
| `operation_replay` | Eligible work can rerun from declared inputs as a new Operation. |
| `publication_withdrawal` | A publication, export, public projection, notification, or webhook projection can stop serving or be superseded. |
| `external_compensation` | A new external action can offset but not erase a prior side effect. |
| `external_reconciliation` | Research must compare with provider state before proposing the next recovery action. |
| `disaster_restore` | Operational backup restore is required and governed by disaster-recovery runbooks. |
| `irreversible` | Research cannot reverse the effect and must label the limitation. |

Classes can coexist. For example, a document publication may support canonical document restore, public withdrawal, export replacement, and external compensation for notifications already sent.

## Core records

### ReversalCapability

Current eligibility projection for one target action or resource.

```text
reversal_capability_id
organization_id
project_id
target_resource_ref
original_operation_id
original_activity_event_id
original_audit_ref
intent_ref
approval_receipt_ref
reversibility_classes[]
side_effect_class
eligible_actions[]
disabled_reasons[]
expected_versions[]
policy_snapshot_hash
redaction_summary
expires_at
updated_at
```

Capabilities are projections. They can be rebuilt from domain, Activity, audit, Operation, side-effect, and approval records.

### ReversalRecord

Durable recovery attempt envelope.

```text
reversal_record_id
organization_id
project_id
actor_id
requested_action
target_resource_ref
target_expected_version
original_operation_id
reversal_capability_id
status
approval_class
idempotency_key
created_at
completed_at
```

Statuses include `draft`, `needs_preview`, `waiting_for_approval`, `ready`, `running`, `succeeded`, `failed`, `blocked`, `invalidated`, `cancelled`, `compensated`, and `irreversible_acknowledged`.

### ReversalSnapshot

Content-minimized before, after, and current-state snapshot.

```text
reversal_snapshot_id
project_id
reversal_record_id
before_refs[]
after_refs[]
current_refs[]
affected_resource_refs[]
hidden_dependency_summary
drift_summary
side_effect_refs[]
external_target_refs[]
input_hash
redaction_summary
created_at
expires_at
```

Snapshots store identifiers, versions, hashes, safe labels, dependency counters, reason codes, and redaction summaries. They exclude raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, screenshots, clipboard contents, browser history, operating-system state, and support notes.

### RecoveryActionCard

Typed review item for material recovery.

```text
recovery_action_card_id
project_id
reversal_record_id
objective
requested_action
effect_summary
scenario_id
impact_report_id
approval_request_id
preflight_result_ref
status
expires_at
```

High-risk recovery requires an ActionCard. Low-risk restore can still produce an ActionCard when the user needs explanation.

### CompensationPlan

Plan for effects that cannot be directly undone.

```text
compensation_plan_id
project_id
reversal_record_id
external_system
side_effect_refs[]
compensation_type
required_steps[]
manual_owner_ref
approval_request_id
status
created_at
```

Compensation types include correction notice, replacement publication, external draft replacement, GitHub revert proposal, billing adjustment, connector reconciliation, permission repair, and manual support remediation.

### CompensationStep

Individual compensating action owned by a service or human.

```text
compensation_step_id
project_id
compensation_plan_id
owning_service
target_ref
expected_external_state
idempotency_key
operation_id
status
created_at
completed_at
```

### ReconciliationCheck

Provider-state check after uncertainty or drift.

```text
reconciliation_check_id
project_id
reversal_record_id
external_system
target_ref
expected_state_hash
observed_state_hash
classification
next_action_ref
created_at
```

Classifications include `matches_expected`, `effect_missing`, `effect_present`, `partial_effect`, `conflict`, `permission_lost`, `provider_unknown`, and `manual_review_required`.

### ReversalOutcomeObservation

Post-recovery measurement.

```text
reversal_outcome_observation_id
project_id
reversal_record_id
metric_kind
expected_outcome
actual_outcome
classification
followup_action_ref
created_at
```

Outcome observations feed Activity, Project Health, automation outcome scorecards, Product Truth, support diagnostics, release evidence, and documentation/readiness follow-up. They do not become factual evidence for user documents.

## Mutation policy

The reversal engine never mutates owning state directly. It calls typed ports:

- document restore and duplicate-as-draft service;
- source retry, restore visibility, parser rerun, index rebuild, and connector reconciliation service;
- publication withdrawal, replacement, and export supersession service;
- recipe version restore, pause, canary rollback, retirement, and run replay service;
- Workset restore and stale-pane labeling service;
- settings change restore service;
- GitHub revert-branch, replacement-branch, validation, and pull-request proposal service;
- notification correction and webhook replay service;
- billing adjustment and entitlement reconciliation service.

Each port enforces authorization, expected versions, idempotency, approval receipts, side-effect ledgers, audit, Activity, and service-specific invariants.

## API and command exposure

Initial API families:

- `GET /v1/projects/{project_id}/history`
- `GET /v1/projects/{project_id}/reversal-capabilities`
- `GET /v1/projects/{project_id}/reversal-capabilities/{capability_id}`
- `POST /v1/projects/{project_id}/reversal-records`
- `GET /v1/projects/{project_id}/reversal-records/{reversal_record_id}`
- `POST /v1/projects/{project_id}/reversal-records/{reversal_record_id}/preview`
- `POST /v1/projects/{project_id}/reversal-records/{reversal_record_id}/submit`
- `POST /v1/projects/{project_id}/reversal-records/{reversal_record_id}/cancel`
- `POST /v1/projects/{project_id}/reversal-records/{reversal_record_id}/acknowledge-irreversible`
- `POST /v1/projects/{project_id}/compensation-plans/{compensation_plan_id}/steps`
- `POST /v1/projects/{project_id}/reconciliation-checks`

Command Center exposes:

- show Project history;
- show recovery options;
- undo local edit;
- restore prior version;
- duplicate historical version as draft;
- retry failed operation;
- replay operation;
- withdraw publication;
- compensate external effect;
- reconcile external state;
- acknowledge irreversible effect.

External clients cannot bypass current authorization, content minimization, expected versions, approval, Scenario Lab preview, Project Atlas impact checks, side-effect ledgers, or owning-service mutation boundaries.

## Storage model

Representative structures are defined in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md):

- `reversal_capabilities`
- `reversal_records`
- `reversal_snapshots`
- `recovery_action_cards`
- `compensation_plans`
- `compensation_steps`
- `reconciliation_checks`
- `reversal_invalidations`
- `reversal_outcome_observations`

Reversal rows are auditable projections, recovery intents, and outcome observations. Authoritative state remains in owning domain tables and immutable logs.

## Events

Reversal events include:

- `reversal.capability_created`
- `reversal.capability_updated`
- `reversal.record_created`
- `reversal.snapshot_created`
- `reversal.preview_required`
- `reversal.action_card_created`
- `reversal.submitted`
- `reversal.started`
- `reversal.completed`
- `reversal.failed`
- `reversal.blocked`
- `reversal.invalidated`
- `reversal.cancelled`
- `reversal.irreversible_acknowledged`
- `compensation.plan_created`
- `compensation.step_started`
- `compensation.step_completed`
- `compensation.step_failed`
- `reconciliation.check_created`
- `reconciliation.check_completed`
- `reversal.outcome_observed`

Events are content-minimized and safe for Activity projections, webhooks, SDKs, CLI, MCP, support diagnostics, observability, analytics, and release evidence.

## Security and privacy requirements

- Authorization happens before capability display, snapshot assembly, history search, recovery preview, mutation, compensation, reconciliation, support access, and webhook projection.
- Hidden resources cannot leak through eligible action counts, disabled reasons, recovery summaries, history filters, support diagnostics, analytics, or logs.
- Recovery snapshots cannot store raw content or provider payloads.
- Prompt-injection content from sources cannot redefine recovery eligibility, approval class, tool permissions, compensation plans, or reconciliation targets.
- Support access is metadata-first and time-bound.
- Irreversible side effects remain visible where policy allows; they are never erased from audit or release evidence.
- Disaster restore replays tombstones, retention policy, residency policy, and audit requirements before traffic is reopened.

## Tests and launch gates

Production readiness requires:

- unit tests for reversibility classes, schema validation, eligibility calculation, disabled reasons, invalidation, redaction, and outcome observation;
- integration tests for document restore, duplicate-as-draft, Workset restore, source parser retry, publication withdrawal, export supersession, recipe restore, automation replay, GitHub revert proposal, webhook replay, notification correction, billing adjustment, settings restore, and connector reconciliation;
- side-effect tests proving uncertain external outcomes are reconciled before retry or compensation;
- stale-plan tests proving current version, policy, permission, rights, residency, retention, budget, connector, approval, and external-state drift blocks recovery;
- authorization tests proving hidden resources cannot leak through Project history, recovery cards, webhooks, SDKs, CLI, MCP, support diagnostics, analytics, or logs;
- performance tests for large Activity timelines, high Operation volume, recipe-heavy Projects, publication-heavy Projects, and large Project Atlas dependency checks;
- accessibility tests for Project history, recovery cards, disabled reasons, impact previews, irreversible warnings, and keyboard command flows;
- release evidence for recovery success rate, stale recovery rejection, compensation accuracy, reconciliation accuracy, support usefulness, approval burden, privacy, authorization, audit, accessibility, and operational readiness.

## Documentation update rule

Changes to reversal capabilities, recovery records, snapshots, recovery cards, reversibility classes, compensation, reconciliation, irreversible labeling, APIs, events, storage, invalidation, or outcome observations must update:

- [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md)
- [`durable-workflows-idempotency-and-outbox.md`](durable-workflows-idempotency-and-outbox.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`scenario-simulation-engine.md`](scenario-simulation-engine.md)
- [`project-map-and-impact-analysis.md`](project-map-and-impact-analysis.md)
- [`project-health-diagnostics-and-repair.md`](project-health-diagnostics-and-repair.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../06-delivery/backup-restore-and-disaster-recovery.md`](../06-delivery/backup-restore-and-disaster-recovery.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../08-build/developer-platform-api-sdk.md`](../08-build/developer-platform-api-sdk.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
