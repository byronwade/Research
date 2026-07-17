# Runbook catalog and operational drills

A runbook is an executable operational contract with an owner, prerequisites, safety checks, observability links, commands or approved actions, rollback, reconciliation, verification, and escalation. A paragraph that says “restart the service” is not a runbook.

## Runbook template

Every runbook contains:

```text
purpose and triggering alert
severity and customer impact
owner and escalation
required roles and step-up
preconditions and evidence preservation
safe diagnostics
containment options
recovery or rollback steps
state reconciliation
customer and internal communication
verification and exit criteria
follow-up records
last exercise and next review
```

Commands are idempotent or clearly marked as one-time. Dangerous operations support dry-run and bounded scope. Secrets are referenced, not embedded.

## Required launch runbooks

### Application and deployment

- failed preview or staging build;
- failed production promotion;
- canary regression and traffic rollback;
- bad configuration or feature-flag rollout;
- application release rollback and forward recovery;
- incompatible migration or backfill pause;
- stale client/API compatibility incident.

### Identity and authorization

- identity-provider outage;
- mass session revocation;
- suspected cross-tenant access;
- service-account or API-key compromise;
- support break-glass grant and revocation;
- public-link or publication access leak.

### Data and storage

- Postgres failover or point-in-time restore;
- accidental destructive migration;
- Blob object loss, corruption, or permission failure;
- cache or index contamination;
- deletion pipeline failure or data resurrection;
- legal hold application and release;
- Project export or restore failure.

### Durable work

- workflow provider degradation;
- stuck or duplicated Operation;
- queue backlog and oldest-message breach;
- dead-letter reconciliation;
- outbox dispatcher failure;
- uncertain external side effect;
- scheduled research or notification storm.

### Sources and connectors

- upload or parser incident;
- malware or decompression-bomb detection;
- web acquisition SSRF or unsafe redirect attempt;
- connector token compromise or mass revocation;
- webhook forgery, replay, or backlog;
- GitHub App permission or installation incident;
- source freshness and index rebuild backlog.

### AI and research

- AI Gateway or provider outage;
- model regression or unsafe behavior;
- runaway cost or denial-of-wallet attack;
- indirect prompt-injection campaign;
- invalid citation or unsupported-claim spike;
- research workflow cancellation and partial-result recovery;
- model deprecation affecting in-flight work.

### Commercial and communications

- metering delay or duplicate usage;
- billing reconciliation discrepancy;
- entitlement outage;
- notification provider outage or duplicate sends;
- status-page and customer communication;
- takedown, publication withdrawal, or rights complaint.

## Standard containment controls

Operators can, with explicit authorization:

- place a Project or Organization into read-only mode;
- disable external writes while preserving reads;
- pause a connector, parser, research engine, model role, queue, or workflow type;
- revoke a capability, credential, webhook endpoint, public link, or service account;
- stop new budget reservations;
- disable publication and export;
- route to an allowed fallback provider;
- reduce concurrency or apply admission control;
- isolate a release or tenant cohort;
- freeze deletion or billing settlement pending reconciliation.

Controls are typed, scoped, audited, reversible, and tested. Broad database access is not the primary containment interface.

## Drill program

| Cadence | Exercise |
|---|---|
| Per release candidate | rollback, feature kill switch, migration preflight, synthetic grounded Chat |
| Monthly | provider fallback, queue backlog, webhook replay, credential revocation |
| Quarterly | full database/Blob/workflow restore, regional degradation, cross-functional incident |
| Twice yearly | cross-tenant and publication-leak tabletop, connector compromise, billing reconciliation |
| After material change | affected parser, storage, workflow, identity, model, connector, or release drill |

## Game-day requirements

A drill uses realistic scale and current artifacts in an isolated or controlled environment. Participants do not receive hidden shortcuts. Observers record detection, decision latency, manual steps, incorrect assumptions, missing access, unsafe commands, recovery time, data reconciliation, and customer-impact decisions.

## Evidence and remediation

Each exercise produces an immutable record with scenario, release, environment, actors, timeline, RPO/RTO result where applicable, commands, dashboards, artifacts, data volume, failures, and remediation owners. Failed objectives become blocking readiness items when they affect a production invariant.

Runbooks are updated from incidents and drills. A runbook that has not been reviewed or exercised within its declared validity window cannot satisfy `release-30` evidence.
