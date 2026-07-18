# Project health diagnostics and repair

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

Project Health is a rebuildable diagnostic and repair projection over canonical Research state. It explains Project health, proposes bounded repairs, and records outcomes without becoming a second source of truth for documents, sources, automations, reversible work, activity, support, observability, or audit.

Product behavior is governed by [`../01-product/project-health-and-repair.md`](../01-product/project-health-and-repair.md). Recovery behavior is governed by [`../01-product/reversible-work-and-project-history.md`](../01-product/reversible-work-and-project-history.md) and [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md). This architecture governs `HEALTH-002` and supports `HEALTH-001`.

## Goals

- Compose Project health from authoritative domain records in bounded, permission-filtered reads.
- Expose consistent diagnostics across UI, API, SDK, CLI, MCP, support, and release evidence.
- Transform authorized telemetry and trace signals into causal lineage and repairable findings without exposing raw private data.
- Turn supported findings into typed repair playbooks, dry-runs, ActionCards, RecoveryActionCards, Operations, or no-repair explanations.
- Keep diagnostics content-minimized and safe for customer-visible support workflows.
- Measure repair outcomes so repeated failures become product, automation, or documentation work instead of hidden retries.

## Authority boundary

Project Health may read:

- Project, membership, policy, entitlement, budget, residency, and support-grant state;
- ActivityEvents, audit refs, Operations, progress events, side effects, ReversalCapabilities, ReversalRecords, CompensationPlans, ReconciliationChecks, incidents, and runbook drill results;
- Sources, SourceVersions, processing attempts, parser state, index manifests, connector sync state, and rights decisions;
- Claims, EvidenceSpans, Trust blockers, contradiction records, and citation state;
- Documents, document revisions, patches, comments, reviews, publication snapshots, exports, and locked-region state;
- Command descriptors, CommandInvocations, ActionCards, approval requests, delegated-trust grants, and approval-load signals;
- Spatial Workbench state, Worksets, PaneInstances, WorksetSnapshots, layout suggestions, Focus State, Resume Digests, and WorkPackets;
- Project Atlas projections, Impact Reports, Scenario simulations, ScenarioApplyCandidates, ReversalRecords, RecoveryActionCards, Product Truth signals, automation recipes, recipe runs, outcome scorecards, feedback records, and release evidence;
- content-minimized telemetry aggregates, OpenTelemetry-compatible signal summaries, GenAI telemetry summaries where allowed, and SLO state for Research-owned services.

Project Health must not own canonical mutations for those resources. It creates snapshots, findings, playbook candidates, dry-run records, repair runs, outcome observations, SupportDiagnosticBundles, Scenario Lab inputs where material, RecoveryActionCard context, and action links. Owning services still perform authorization, validation, mutation, reversal, compensation, reconciliation, auditing, and release evidence.

Raw prompt bodies, completion bodies, tool payloads, connector payloads, source excerpts, private document content, hidden reasoning, screenshots, clipboard content, browser history, operating-system state, and full traces are not general Health inputs. They can enter only a narrowly scoped diagnostic workflow with explicit authorization, redaction, expiry, customer-visible audit, and a SupportAccessRequest where policy requires one.

## Processing chain

```text
HealthRequest or scheduled diagnostic trigger
-> authorize actor, Project, support grant, and requested scope
-> collect bounded health inputs from authoritative records
-> classify deterministic HealthSignals
-> derive HealthLineageEdges from authorized records, causal rules, dependency edges, and run trajectory comparisons
-> create DiagnosticSnapshot with redaction summary
-> separate observed facts, suspected causes, counterevidence, unknowns, and missing evidence
-> rank HealthFindings by user impact and safety
-> attach eligible RepairPlaybooks or no-repair explanations
-> create SupportDiagnosticBundle when support or operator diagnosis is requested
-> create Scenario Lab repair preview when options, external effects, cost, publication, deletion, or policy risk need comparison
-> preflight selected RepairActionCards or RepairRuns
-> execute only approved, idempotent, policy-valid repairs
-> observe outcome and invalidate affected projections
```

Model-generated explanations may summarize a finding after the snapshot is assembled and redacted. Models do not decide authorization, approval class, repair eligibility, cost policy, or mutation safety.

## Records

### ProjectHealthSnapshot

`ProjectHealthSnapshot` is a rebuildable diagnostic projection:

```text
id
project_id
viewer_id
scope
policy_version
membership_version
support_grant_ref
source_version_refs[]
document_revision_refs[]
activity_cursor
operation_cursor
work_packet_refs[]
recipe_run_refs[]
telemetry_window_ref
health_signal_refs[]
health_lineage_ref
finding_confidence_summary
diagnostic_sampling_policy_ref
redaction_summary
status
created_at
expires_at
```

Snapshots store identifiers, versions, hashes, safe labels, classifications, counters, and reason codes. They exclude raw source text, raw prompts, private document bodies, hidden reasoning, credentials, screenshots, clipboard contents, browser history, operating-system state, full connector payloads, and unredacted support notes.

### HealthSignal

`HealthSignal` is a normalized input:

```text
id
project_id
snapshot_id
domain
reason_code
resource_ref
source_event_ref
correlation_key
lineage_edge_refs[]
observed_value
expected_value
severity_hint
freshness
redaction_class
created_at
```

Signals can come from deterministic validators, domain status rows, Operation states, ActivityEvents, scorecards, telemetry aggregates, policy checks, and release evidence. Signals are inputs, not diagnoses.

### HealthFinding

`HealthFinding` is a diagnosis:

```text
id
project_id
snapshot_id
domain
finding_type
affected_resource_ref
expected_versions[]
severity
user_impact
evidence_refs[]
suspected_cause_refs[]
counterevidence_refs[]
unknowns[]
cause_confidence
diagnostic_waste_class
false_cause_risk
redaction_summary
repair_playbook_refs[]
status
owner_ref
expires_at
resolved_at
```

Statuses include `open`, `snoozed`, `dismissed`, `repairing`, `resolved`, `superseded`, `unsupported`, and `expired`.

### HealthLineageEdge

`HealthLineageEdge` records why one authorized Project state is treated as related to another during diagnosis:

```text
id
project_id
snapshot_id
from_ref
to_ref
relation
relation_basis
evidence_ref
confidence
counterevidence_refs[]
redaction_class
invalidation_policy_ref
created_at
```

Relations include `depends_on`, `observed_with`, `suspected_caused_by`, `invalidated_by`, `retries_as`, `repairs`, `contradicts`, `blocks_publication`, `blocks_retrieval`, `increases_cost`, and `resolved_by`. Edges are diagnostic projections, not factual evidence for user documents.

### RepairPlaybook

`RepairPlaybook` is a typed repair template:

```text
id
project_id
name
finding_type
input_schema_ref
step_descriptors[]
approval_class
side_effect_class
cost_class
latency_class
dry_run_required
rollback_or_withdrawal_policy
reversal_policy_ref
owning_service
status
created_at
```

Playbooks are application-owned and versioned. They may call owning services through typed commands, but they cannot bypass those services.

### RepairRun

`RepairRun` records a repair attempt:

```text
id
project_id
finding_id
playbook_id
intent_ref
operation_id
actor_id
input_hash
expected_versions[]
preflight_result_ref
approval_request_ref
approval_receipt_ref
idempotency_key
dry_run_ref
status
outcome_ref
created_at
completed_at
```

Repair runs are Operations when they outlive the request. Material repairs emit ActivityEvents, audit events where required, reversal eligibility updates where applicable, and projection invalidations.

### SupportDiagnosticBundle

`SupportDiagnosticBundle` is a customer-visible support package:

```text
id
project_id
support_case_id
health_snapshot_id
finding_refs[]
operation_refs[]
activity_event_refs[]
repair_run_refs[]
automation_debug_trace_refs[]
scenario_refs[]
reversal_refs[]
policy_snapshot_ref
support_grant_ref
support_access_request_ref
data_classes[]
redaction_summary
private_content_absence_flags[]
retention_class
export_policy
status
created_by
created_at
expires_at
```

Statuses include `draft`, `available`, `pending_customer_review`, `access_requested`, `approved_for_session`, `exported`, `revoked`, `expired`, and `superseded`.

Bundles store identifiers, versions, hashes, classifications, reason codes, counters, latency summaries, queue state, provider-route summaries, feature-flag refs, and safe labels. They do not store raw source text, raw prompts, private document bodies, private comments, hidden reasoning, credentials, screenshots, clipboard contents, browser history, operating-system state, full connector payloads, or unredacted support notes. A bundle that requires private content creates a SupportAccessRequest and waits for the support access policy in [`tenancy-authorization-and-capabilities.md`](tenancy-authorization-and-capabilities.md).

### RepairOutcomeObservation

`RepairOutcomeObservation` measures whether the repair helped:

```text
id
project_id
repair_run_id
finding_id
metric_kind
before_value
after_value
classification
cause_validated
finding_accuracy_classification
followup_action_ref
created_at
```

Outcome observations can feed automation outcome scorecards, Product Truth signals, documentation gap audits, and support runbooks. They do not become factual evidence for user documents.

## Finding domains

Initial domains:

- `source_intake`
- `retrieval_indexing`
- `evidence_claims`
- `documents`
- `publication`
- `automation`
- `work_control`
- `spatial_workbench`
- `focus_resume`
- `performance`
- `cost_capacity`
- `permissions_policy`
- `support_operations`
- `reversible_work`
- `release_readiness`
- `causal_diagnostics`

Each domain has deterministic reason codes. Free-form model labels are allowed only as explanations attached to canonical reason codes.

## Repair policy

Repairs are classified before execution:

| Class | Examples | Required control |
|---|---|---|
| Metadata refresh | rebuild safe projection, recalculate finding, refresh WorkPacket | authorization, expected version, Activity where material |
| Deterministic rebuild | rebuild index manifest, re-run parser derivative, regenerate projection | idempotency, budget check, progressive status |
| Reviewable patch | stale-claim fix, document patch, publication blocker resolution | dry run, ActionCard, expected version |
| External side effect | connector reconnect, notification retry, GitHub proposal | preflight, approval, side-effect ledger, reconciliation plan |
| High risk | deletion, publication, billing, permission widening, support access | hard-stop approval, audit, reversal policy, compensation or withdrawal plan |

Delegated trust can satisfy only low-risk repair envelopes that exactly match the approved grant. High-risk repairs fail closed at the mutation boundary.

## API and command exposure

Initial API families:

- `GET /v1/projects/{project_id}/health`
- `POST /v1/projects/{project_id}/health/snapshots`
- `GET /v1/projects/{project_id}/health/findings`
- `GET /v1/projects/{project_id}/health/findings/{finding_id}`
- `POST /v1/projects/{project_id}/health/findings/{finding_id}/snooze`
- `POST /v1/projects/{project_id}/health/findings/{finding_id}/dismiss`
- `GET /v1/projects/{project_id}/repair-playbooks`
- `POST /v1/projects/{project_id}/repair-playbooks/{playbook_id}/dry-run`
- `POST /v1/projects/{project_id}/repair-runs`
- `GET /v1/projects/{project_id}/repair-runs/{repair_run_id}`
- `POST /v1/projects/{project_id}/repair-runs/{repair_run_id}/cancel`
- `POST /v1/projects/{project_id}/support/diagnostic-bundles`
- `GET /v1/projects/{project_id}/support/diagnostic-bundles/{bundle_id}`
- `POST /v1/projects/{project_id}/support/diagnostic-bundles/{bundle_id}/export`
- `POST /v1/projects/{project_id}/support/diagnostic-bundles/{bundle_id}/revoke`

Command Center exposes:

- open Project Health;
- explain top blocker;
- rebuild health snapshot;
- dry-run repair;
- start safe repair;
- simulate repair options;
- open repair ActionCard;
- snooze or dismiss finding;
- inspect repair outcome;
- create support-safe diagnostic package.
- open SupportDiagnosticBundle;
- request scoped support access;
- revoke support diagnostic access.

Mutating routes require idempotency keys, expected versions, policy checks, ActivityEvents, and reversal-ledger handoff where the repair changes user-visible or external state. High-risk repair selection returns an ActionCard, RecoveryActionCard, or approval request rather than silently executing.

## Progressive delivery and cache policy

Project Health reads are interactive workload. The first response should include:

- overall status band;
- top findings;
- stale or partial labels;
- active repair runs;
- unavailable or redacted summary;
- safe next command.

Detailed evidence links, telemetry windows, Atlas neighborhoods, Scenario Lab repair previews, Trust drill-downs, recipe simulations, and model explanations load progressively.

Cached Health Snapshots are allowed only when actor, membership, policy, source scope, source versions, document revisions, Activity cursor, Operation cursor, WorkPacket refs, recipe state, telemetry window, and redaction state still match. Any material repair revalidates before mutation.

## Events

Activity and webhook-safe projections can include:

- `health.snapshot_created`
- `health.snapshot_expired`
- `health.finding_created`
- `health.finding_snoozed`
- `health.finding_dismissed`
- `health.finding_resolved`
- `health.finding_superseded`
- `repair.playbook_dry_run_created`
- `repair.action_card_created`
- `repair.run_started`
- `repair.run_blocked`
- `repair.run_cancelled`
- `repair.run_completed`
- `repair.run_failed`
- `repair.outcome_observed`
- `support.diagnostic_bundle_created`
- `support.diagnostic_bundle_exported`
- `support.diagnostic_bundle_revoked`
- `support.diagnostic_bundle_expired`

External webhook projections expose only authorized metadata, reason categories, affected resource refs where allowed, status, and redacted summaries. They cannot expose raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, support notes, screenshots, clipboard contents, browser history, or operating-system state.

## Invalidation

Health Snapshots and Findings invalidate on:

- membership, role, policy, support-grant, entitlement, budget, residency, or connector-scope change;
- source addition, revocation, deletion, processing attempt, parser version, rights decision, connector sync, or source-version change;
- index manifest, retrieval evaluation, claim, evidence, Trust blocker, contradiction, or publication blocker change;
- document revision, patch, comment, review, lock, publication, export, or public/private projection change;
- CommandInvocation, ActionCard, Operation, Activity cursor, WorkPacket, Workset, Focus State, or Project Atlas projection change;
- Scenario, SimulationRun, ScenarioApplyCandidate, or simulation invalidation change;
- recipe version, simulation, recipe run, automation outcome, approval, delegated-trust grant, approval-load, or fatigue-signal change;
- telemetry SLO window, incident, runbook drill, release evidence, support case, or Product Truth decision change.

Invalidation does not delete historical repair evidence required for audit, support, release, billing, or incident review.

## Security and privacy

- Authorization runs before any health input is assembled.
- Health APIs cannot reveal hidden resource existence unless policy allows a redaction summary.
- Support-safe diagnostics are metadata-first and time-bounded by support grants where sensitive detail is required.
- SupportDiagnosticBundles are customer-visible, content-minimized, expiring, and tied to support cases, support grants, SupportAccessRequests, SupportAccessSessions, ActivityEvents, audit events, and redaction summaries.
- Health telemetry is classified product/operations metadata and follows minimization policy.
- General Health snapshots cannot store raw OpenTelemetry spans, raw GenAI content, prompts, completions, tool arguments, tool outputs, connector payloads, source text, or document bodies.
- Diagnostic trace content capture is opt-in, scoped to a finding or support case, redacted before storage, expiring, customer-visible in Activity or support audit, and unavailable for broad analytics or model training.
- Health does not inspect operating-system state, browser state, clipboard, screenshots, or local files outside explicit Project sources.
- Repair playbooks cannot call provider SDKs, connector APIs, billing APIs, publishing, deletion, GitHub writes, or administration changes except through owning typed ports with preflight and approval.
- Scenario Lab repair previews cannot be represented as successful repair evidence and cannot create mutation authority without owning-service preflight, expected versions, approval, idempotency, and side-effect checks.
- Repair previews that promise rollback, restore, replay, withdrawal, or compensation must reference a current ReversalCapability and cannot hide irreversible effects, stale eligibility, or reconciliation uncertainty.
- Cross-tenant leakage, hidden repair execution, support-only mutation paths, support bundle leakage, stale support access, stale repair mutation, and health telemetry containing private content are non-waivable launch blockers.

## Tests

Required coverage:

- unit tests for signal normalization, finding classification, severity ranking, redaction, snapshot expiry, and repair eligibility;
- unit tests for HealthLineageEdge construction, cause-confidence calculation, counterevidence preservation, unknown-state handling, false-cause classification, and diagnostic-waste classification;
- integration tests with Project policy, Activity, Operations, ReversalRecords, Sources, Claims, Documents, WorkPackets, Worksets, recipes, approvals, support grants, telemetry, and release evidence;
- integration tests for trace-to-finding conversion over content-minimized OpenTelemetry-compatible signals, run trajectory comparisons, AutomationFailureRecoveryRecords, Activity, Operations, release evidence, and Product Truth records;
- negative authorization tests proving hidden resources do not enter snapshots, findings, SupportDiagnosticBundles, support diagnostics, webhooks, or repair dry-runs;
- e2e tests for Health Console, finding detail, dry-run, ActionCard escalation, RecoveryActionCard escalation, repair progress, cancellation, failure, snooze, dismissal, repeated failure, and resolved state;
- performance tests for Project open health status, snapshot rebuild, top finding rank, SupportDiagnosticBundle generation, support-safe diagnostics, and repair progress under large Project and background load;
- privacy tests proving no raw source text, prompt, completion, tool payload, hidden reasoning, private document body, connector payload, credential, screenshot, clipboard, browser history, operating-system state, raw OpenTelemetry span, raw GenAI trace content, or unredacted support note enters health projections, SupportDiagnosticBundles, or telemetry outside an authorized diagnostic workflow.

## Launch gates

Project Health is production-ready only when:

- `HEALTH-001` and `HEALTH-002` pass implementation and conformance tests;
- Health Snapshots, HealthSignals, HealthLineageEdges, HealthFindings, RepairPlaybooks, RepairRuns, and RepairOutcomeObservations are rebuildable or auditable as specified;
- every finding can explain its canonical evidence links or declare an explicit unknown or unsupported state;
- every causal finding can explain observed signal, suspected cause, confidence, counterevidence, unknowns, false-cause risk, and repair validation path;
- trace-to-finding benchmarks, trajectory comparison fixtures, false-cause rate, false-positive rate, repeated-finding rate, diagnostic-waste budget, and redaction tests meet release thresholds;
- repair runs use expected versions, idempotency, preflight, budget reservation, approval, side-effect ledgers, reversal records, compensation or withdrawal notes, and Activity evidence according to repair class;
- repair Scenario simulations label unknowns, stale inputs, live-test boundaries, cost, latency, approval class, side-effect class, and recovery path before any apply candidate is accepted;
- delegated-trust use is exact-scope, expiring, revocable, and fail-closed on drift;
- SupportDiagnosticBundles and support-safe diagnostic views are content-minimized, customer-reviewable, expiring, revocable, and audited;
- release evidence includes repair success, false positives, false causes, recurring repairs, diagnostic waste, privacy checks, authorization checks, latency, cost, approval burden, accessibility, support readiness, and customer-understandability validation.

## Documentation update rule

Changes to Project Health diagnostics, health APIs, repair playbooks, repair events, repair policy, support diagnostics, invalidation, or launch gates must update:

- [`../01-product/project-health-and-repair.md`](../01-product/project-health-and-repair.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`scenario-simulation-engine.md`](scenario-simulation-engine.md)
- [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../06-delivery/implementation-status.md`](../06-delivery/implementation-status.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../06-delivery/observability-and-incident-operations.md`](../06-delivery/observability-and-incident-operations.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
