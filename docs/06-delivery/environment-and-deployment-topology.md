# Environment and deployment topology

Research separates environments by data, credentials, connector installations, queues, storage, and release authority. Environment labels are not cosmetic aliases over shared mutable state.

## Environments

| Environment | Purpose | Data policy | Deployment policy |
|---|---|---|---|
| Local | Fast developer feedback | Synthetic fixtures; optional isolated developer data | Local processes and emulators |
| Preview | Pull-request UI and API review | Seeded synthetic tenant only | Immutable preview per commit |
| Integration | Cross-package, migration, workflow, and connector tests | Resettable synthetic organizations | Automatic from verified candidate artifacts |
| Staging | Production-shaped qualification | Sanitized or generated representative data | Promotion of the release candidate artifact |
| Canary | Limited production exposure | Real authorized tenants selected by policy | Progressive traffic or tenant cohort |
| Production | Customer service | Production data under declared residency and retention | Approved promotion of the verified artifact |

## Isolation rules

- Each environment has separate databases, Blob stores, queues, workflow namespaces, caches, encryption keys, OAuth applications, webhook secrets, model budgets, and observability destinations.
- Preview deployments never receive production database credentials, connector tokens, service-role keys, or private source content.
- Staging cannot send external email, publish public documents, open real pull requests, or mutate production connectors unless an explicit sandbox is used.
- Cache and vector namespaces include organization, Project, environment, model, parser, and index-version boundaries where applicable.

## Build and promotion

```text
commit
→ source and dependency verification
→ reproducible build
→ tests and security evidence
→ immutable artifact + SBOM + provenance
→ preview/integration
→ staging qualification
→ canary
→ production promotion
```

Production is never rebuilt from a moving branch. Promotion records artifact digest, source commit, migrations, configuration schema version, feature-flag snapshot, approvals, rollout policy, rollback target, and validation evidence.

## Database and workflow rollout

Application rollout follows the compatibility order in `schema-contract-and-data-evolution.md`. New code must tolerate the currently deployed schema and in-flight durable workflow versions. Destructive contraction waits until telemetry proves old readers, writers, events, jobs, and SDKs are outside the support window.

## Regional strategy

The first release may use one primary write region, but the architecture must declare:

- authoritative write region;
- read and cache regions;
- Blob placement;
- workflow and queue region behavior;
- connector egress restrictions;
- model-provider region eligibility;
- failover and degraded-mode behavior;
- residency constraints that prohibit automatic failover.

## Environment acceptance

An environment is ready only when configuration validation, migrations, authorization probes, health checks, synthetic grounded-chat checks, workflow resume tests, storage checks, and telemetry delivery pass. A green deployment without those checks is not promotable.
