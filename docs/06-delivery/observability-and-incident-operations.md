# Observability and incident operations

Research observes user outcomes, domain operations, durable workflows, providers, and infrastructure without copying private source material into telemetry.

## Telemetry model

Every request, Operation, ProgressiveDeliveryEnvelope, ResearchRun, ingestion job, connector sync, document patch, publication, export, and repository edit carries stable correlation identifiers:

```text
request_id
organization_id
project_id
operation_id
project_map_query_id / project_impact_report_id
spatial_workbench_id / workset_id / pane_instance_id / workset_snapshot_id / layout_suggestion_id
work_packet_id / work_context_snapshot_id / next_action_candidate_id
project_health_snapshot_id / health_finding_id / repair_playbook_id / repair_run_id
support_case_id / support_diagnostic_bundle_id / support_access_request_id / support_access_session_id / support_audit_export_id
abuse_policy_id / abuse_case_id / abuse_decision_id / abuse_review_id / abuse_appeal_id / abuse_enforcement_action_id
scenario_id / simulation_run_id / scenario_apply_candidate_id
reversal_record_id / recovery_action_card_id / compensation_plan_id / reconciliation_check_id
approval_request_id / approval_batch_id / delegated_trust_grant_id / approval_decision_id
delivery_id
research_run_id
automation_recipe_id / recipe_version_id / recipe_run_id
workflow_run_id
source_id / source_version_id
artifact_id / document_revision_id
provider_request_id
release_id
```

Identifiers are access-controlled and pseudonymized where telemetry leaves the primary trust boundary. Raw prompts, source text, document bodies, model outputs, credentials, and connector payloads are prohibited in routine logs and analytics.

## Signals

### User-facing service

- request rate, errors, latency, saturation;
- stream start time, first useful token, reconnect success, and completion time;
- first shell, first progress, first useful result, Partial Result, citation-ready, stale projection, Fast Path, invalidation, reconnect, and cancellation acknowledgement timings;
- Workset switch, Workset restore, pane hydration, stale-pane recovery, redacted-pane recovery, layout suggestion creation, layout suggestion acceptance, layout suggestion dismissal, and spatial invalidation timings;
- Project history first load, recovery option calculation, RecoveryActionCard render, restore, replay, withdrawal, compensation step, reconciliation check, stale recovery rejection, irreversible acknowledgement, and recovery outcome timings;
- approval request creation, approval card render, approval batch grouping, delegated-trust grant match, grant invalidation, revocation, stale receipt rejection, fatigue warning, and hard-stop decision timings;
- authorization denials and suspicious enumeration patterns;
- publication and export success;
- client crashes, failed optimistic updates, and stale-version conflicts.

### Research and AI

- model, provider, route, fallback, tokens, cost, cache state, and latency;
- cache hit/miss, Fast Path eligibility, stale-while-revalidate behavior, projection invalidation, and permission-redaction results;
- Spatial Workbench state age, Workset switch count, pane hydration success, restore failure class, stale or redacted pane count, layout suggestion source, layout suggestion outcome, and spatial observation volume;
- Work Packet assembly latency, snapshot age, candidate count, recommendation invocation, dismissal, correction, stale packet invalidation lag, repeated-work capture rate, recipe-draft candidate conversion, approval burden, and recommendation outcome quality;
- ReversalCapability calculation rate, Project history query latency, recovery card disabled-reason distribution, stale recovery rejection rate, restore success rate, replay duplication-prevention rate, withdrawal success, compensation accuracy, reconciliation-before-retry success, irreversible acknowledgement rate, and recovery outcome quality;
- Project Health snapshot latency, snapshot age, signal volume, finding count, false-positive rate, finding dismissal, repair dry-run rate, RepairRun progress, repair failure class, repeated-repair frequency, repair outcome quality, support-safe diagnostic generation, and health invalidation lag;
- support case age, SupportDiagnosticBundle generation latency, bundle redaction class, bundle export latency, SupportAccessRequest decision latency, denied, narrowed, and approved rates, SupportAccessSession duration, step-up success, audit-write latency, expiry, revocation propagation, stale-session rejection, break-glass rate, break-glass review age, and support audit export volume;
- abuse allow, limit, challenge, review, block, suspend, appeal, and resolve rates; AbuseThrottle pressure; provider-policy denied routes; content-safety blocks; review queue depth; appeal reversal rate; false-positive rate; enforcement-release latency; emergency-control activation; and support-safe abuse diagnostic volume;
- Scenario Lab card latency, SimulationRun queue age, SimulatedEffect volume, unknown count, live-test warning rate, stale-plan rejection rate, apply-candidate creation, apply-candidate failure class, simulation outcome quality, false-safe rate, false-block rate, and scenario invalidation lag;
- approval-load budget consumption, repeated approval prompts by risk class, delegated-trust grant proposal acceptance, grant use rate, grant narrowing rate, revocation rate, fatigue-signal rate, and mutation-boundary fail-closed blocks;
- Atlas query latency, path-query completion, Impact Report coverage, redacted node and edge counts, map invalidation lag, and over-limit partial state;
- tool-call counts, failures, denials, and approval waits;
- research stage duration, retries, fan-out, cancellation, and budget consumption;
- retrieval candidate counts, reranker latency, citation coverage, unsupported-claim rate, and contradiction state;
- long-form section completion and integration failures.

### Sources and workflows

- upload throughput, parser errors, quarantine decisions, OCR/transcription quality, and index lag;
- queue depth, oldest-message age, retry rate, dead-letter volume, and tenant fairness;
- connector freshness, webhook delay, rate-limit pressure, permission loss, and token refresh failure;
- maintenance backlog, stale claims, and unapplied document patches.
- recipe trigger rate, dedupe rate, simulation coverage, canary drift, approval wait, ActionCard backlog, delegated-trust grant eligibility, recipe-run failure class, side-effect reconciliation, recovery-policy accuracy, and cost per accepted recipe outcome.

## Service objectives

Each service class has an SLO, an error budget, and an owner. Interactive Chat, progressive status and cancellation, and source inspection receive tighter latency and availability objectives than background ingestion, maintenance, export, or deep research. Correctness and authorization are never traded for latency.

## Alert design

Alerts require an actionable condition, owner, runbook, severity, and recovery signal. Prefer symptoms that affect users over raw resource thresholds. Page on sustained SLO burn, cross-tenant risk, data loss, widespread authorization failure, repeated stale approval reuse, delegated-trust grant abuse, abuse-control bypass, public-publication spam, API fanout, connector-write spam, notification spam, provider-policy bypass, emergency-control failure, false-positive spike on core workflows, stuck durable work, support access leakage, stale SupportAccessSession acceptance, break-glass review breach, publication leakage, billing corruption, restore failure, compensation failure, reconciliation failure, or irreversible-effect labeling failure.

## Incident levels

- **SEV-0:** confirmed cross-tenant exposure, irreversible data loss, active credential compromise, support access to private content outside an approved SupportAccessSession or break-glass path, abuse-control bypass that enables broad harmful public output, provider-policy bypass for restricted content, emergency-control failure during active abuse, or unsafe autonomous external action, including a recipe-triggered external write outside approval policy, a RepairRun external write outside approval policy, a Scenario apply candidate mutating outside owning-service preflight, a recovery replay duplicating an external effect, a compensation action targeting the wrong resource, or a delegated-trust grant used outside its approved envelope.
- **SEV-1:** broad outage, publication privacy failure, billing corruption, or critical workflow failure.
- **SEV-2:** material feature degradation with a workaround or bounded tenant impact.
- **SEV-3:** low-impact defect, delayed background work, or non-urgent operational issue.

## Incident workflow

```text
detect
→ appoint incident commander
→ establish scope and tenant impact
→ contain capabilities and traffic
→ preserve evidence
→ communicate status
→ restore or roll back
→ calculate reversal, compensation, and irreversible-effect state
→ reconcile durable state
→ verify customer outcomes
→ complete post-incident review
```

Prompt injection, compromised connectors, and unsafe agent behavior require capability revocation and evidence preservation, not only model or prompt changes.

## Runbook minimum

Every paging alert identifies dashboards, queries, safe diagnostics, support diagnostic bundles where appropriate, containment commands, rollback, reversal, compensation, or degradation actions, data-reconciliation steps, customer communication owner, and escalation contacts. Runbooks are exercised; untested prose is not recovery evidence.

## Post-incident requirements

Reviews are blameless and evidence-based. They identify technical and organizational causes, detection gaps, affected invariants, corrective owners, due dates, verification tests, and documentation changes. High-severity actions enter the implementation and readiness control plane rather than remaining in a private incident note.
