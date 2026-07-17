# Observability and incident operations

Research observes user outcomes, domain operations, durable workflows, providers, and infrastructure without copying private source material into telemetry.

## Telemetry model

Every request, Operation, ResearchRun, ingestion job, connector sync, document patch, publication, export, and repository edit carries stable correlation identifiers:

```text
request_id
organization_id
project_id
operation_id
research_run_id
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
- authorization denials and suspicious enumeration patterns;
- publication and export success;
- client crashes, failed optimistic updates, and stale-version conflicts.

### Research and AI

- model, provider, route, fallback, tokens, cost, cache state, and latency;
- tool-call counts, failures, denials, and approval waits;
- research stage duration, retries, fan-out, cancellation, and budget consumption;
- retrieval candidate counts, reranker latency, citation coverage, unsupported-claim rate, and contradiction state;
- long-form section completion and integration failures.

### Sources and workflows

- upload throughput, parser errors, quarantine decisions, OCR/transcription quality, and index lag;
- queue depth, oldest-message age, retry rate, dead-letter volume, and tenant fairness;
- connector freshness, webhook delay, rate-limit pressure, permission loss, and token refresh failure;
- maintenance backlog, stale claims, and unapplied document patches.

## Service objectives

Each service class has an SLO, an error budget, and an owner. Interactive Chat and source inspection receive tighter latency and availability objectives than background ingestion, maintenance, export, or deep research. Correctness and authorization are never traded for latency.

## Alert design

Alerts require an actionable condition, owner, runbook, severity, and recovery signal. Prefer symptoms that affect users over raw resource thresholds. Page on sustained SLO burn, cross-tenant risk, data loss, widespread authorization failure, stuck durable work, publication leakage, billing corruption, or restore failure.

## Incident levels

- **SEV-0:** confirmed cross-tenant exposure, irreversible data loss, active credential compromise, or unsafe autonomous external action.
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
→ reconcile durable state
→ verify customer outcomes
→ complete post-incident review
```

Prompt injection, compromised connectors, and unsafe agent behavior require capability revocation and evidence preservation, not only model or prompt changes.

## Runbook minimum

Every paging alert identifies dashboards, queries, safe diagnostics, containment commands, rollback or degradation actions, data-reconciliation steps, customer communication owner, and escalation contacts. Runbooks are exercised; untested prose is not recovery evidence.

## Post-incident requirements

Reviews are blameless and evidence-based. They identify technical and organizational causes, detection gaps, affected invariants, corrective owners, due dates, verification tests, and documentation changes. High-severity actions enter the implementation and readiness control plane rather than remaining in a private incident note.
