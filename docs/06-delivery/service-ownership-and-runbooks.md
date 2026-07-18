# Service ownership and runbooks

Production stability requires a named human and operational model for every customer-visible capability, data store, workflow, connector, and external dependency. A dashboard without an owner is not an operated service.

## Service catalog

Each runtime component and major product capability has a catalog entry containing:

- name and purpose;
- owning team and accountable owner;
- source paths and deployment unit;
- upstream and downstream dependencies;
- canonical and derived data owned;
- data classifications and regions;
- APIs, events, queues, schedules, and public endpoints;
- SLOs and error budget;
- capacity envelope and dominant cost drivers;
- dashboards, alerts, logs, and traces;
- runbooks and recovery procedures;
- secrets, keys, provider accounts, and rotation owners;
- backup and restoration class;
- vendor and connector escalation paths;
- current lifecycle state.

Catalog entries are reviewed with architecture and ownership changes. Orphaned components block release.

## Ownership boundaries

The initial modular monolith may deploy as one application, but ownership remains aligned to domain boundaries: identity and Projects, Project settings and administration, Sources, ingestion and parsing, retrieval, Chat, claims and evidence, Documents, Research Runs, Studio, delegated-trust approval policy, abuse prevention and trust safety, GitHub, publication, usage and billing, developer platform, and operations.

Shared infrastructure has an explicit platform owner. SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, and break-glass reviews have a support operations owner plus security/privacy review ownership. A shared package does not erase responsibility for product behavior that depends on it.

## On-call model

Every production page routes to a staffed escalation path with access to the required dashboards and safe operational tools. The schedule defines primary, secondary, incident commander, security escalation, privacy escalation, and vendor escalation.

On-call access follows least privilege and is reviewed regularly. Emergency access is time-bound and audited. Operators are not expected to browse raw customer content to diagnose ordinary failures; SupportDiagnosticBundles are the default diagnostic artifact before private-content access is requested.

## Alert quality

A page must indicate an actionable threat to an SLO, security invariant, data integrity, customer access, financial correctness, or recovery objective. Every paging alert includes:

- affected service and environment;
- current symptom and threshold;
- likely customer impact;
- dashboard and trace links;
- first diagnostic steps;
- safe mitigation, degradation, or rollback action;
- owner and escalation path.

Alerts without action are converted to dashboards or removed. Repeated manual correlation becomes an observability improvement.

## Runbook structure

Each runbook includes:

1. purpose and triggering signals;
2. affected capabilities and likely customer impact;
3. prerequisites and permissions;
4. tenant-safe diagnostics;
5. decision tree;
6. bounded mitigation steps;
7. rollback or recovery steps;
8. verification of restored behavior;
9. communication requirements;
10. evidence to preserve;
11. cleanup and follow-up tasks;
12. last exercise date and owner.

Commands are copy-safe, environment-explicit, and idempotent where possible. Destructive commands require a typed target, preview, second approval, and audit record.

## Required runbooks

Before launch, runbooks exist and are exercised for:

- authentication and session failure;
- authorization or cross-tenant anomaly;
- database saturation, failover, and restoration;
- object-storage unavailability or corruption;
- queue backlog and poison messages;
- stuck or incompatible durable workflows;
- parser, OCR, media, or sandbox failure;
- retrieval degradation or index rebuild;
- model, AI Gateway, search, or research-engine outage;
- cost spike or denial-of-wallet attack;
- connector token revocation and webhook failure;
- citation or evidence-locator corruption;
- document revision or publication failure;
- accidental public exposure and takedown;
- billing and usage reconciliation;
- Project settings or support-grant misconfiguration;
- SupportDiagnosticBundle generation failure, overbroad bundle detection, SupportAccessRequest backlog, SupportAccessSession expiry or revocation failure, support audit export failure, and break-glass review breach;
- delegated-trust grant abuse, approval fatigue threshold breach, stale receipt reuse, approval batch widening, and grant revocation failure;
- abuse-control bypass, false-positive spike, appeal backlog, source-acquisition abuse, public-publication spam, API fanout, MCP abuse, GitHub proposal spam, connector-write spam, notification spam, recipe-trigger abuse, provider-policy bypass, content-safety block spike, and emergency-control failure;
- key compromise or rotation failure;
- regional degradation and disaster recovery;
- rollback and forward recovery.

## Operational commands

Administrative and repair actions use application-owned typed commands rather than ad hoc database edits. Commands validate environment, tenant, object version, authorization, and preconditions. They support dry run, bounded scope, idempotency, audit, and post-condition verification.

Direct database or object-store intervention is reserved for documented emergency procedures and always produces an incident or change record.

## Change handoff

A feature cannot be released until ownership has accepted:

- SLOs and dashboards;
- alert and escalation behavior;
- capacity and cost assumptions;
- known failure modes;
- feature flags and kill switches;
- migration and rollback procedures;
- customer-support diagnostics;
- abuse review, appeal, false-positive, emergency-control, and content-minimized trust-safety diagnostics;
- support access request, support session, audit export, and break-glass review procedures;
- security, privacy, and deletion implications;
- runbooks and game-day scenarios.

The implementation team remains engaged through the post-release observation window.

## Error budgets

Error budgets inform release pace and reliability investment. Sustained budget burn pauses risky rollouts and prioritizes remediation. Teams do not improve a local metric by shifting failures, latency, cost, or manual work to another service or customers.

Research quality indicators—invalid citations, unsupported claims, failed patches, abandoned Research Runs, and stale documents—are treated alongside infrastructure availability where they represent customer-visible failure.

## Vendor dependencies

Every critical provider has an owner, status source, support path, rate and quota limits, data policy, region behavior, fallback policy, and exit or degradation plan. Provider incidents are not opaque excuses; the product reports which capability is degraded and what remains safe.

Fallbacks are tested. They do not silently violate Project policy, reduce citation standards, change data residency, or increase cost without bounds.

## Exercises

Runbooks are exercised through scheduled game days and after material incidents or architecture changes. Exercises include realistic scale, partial failure, ambiguous signals, operator handoff, communication, and recovery verification.

Results record elapsed detection, decision, mitigation, recovery, customer impact, operator friction, missing access, documentation defects, and follow-up owners.

## Documentation and review

Runbooks live with the code and contracts they operate. Reviews are required when APIs, schemas, workflows, providers, ownership, alerts, keys, or recovery objectives change.

A runbook that has not been exercised within its required interval is unverified. Release readiness reports unverified runbooks explicitly rather than treating their existence as evidence.
