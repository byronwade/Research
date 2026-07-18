---
id: delivery-implementation-decision-records-open-decisions
title: Implementation decision records and open decisions
status: accepted
owner: product-engineering
last_reviewed: 2026-07-18
---

# Implementation decision records and open decisions

## Purpose

Research intentionally keeps provider, environment, deployment, and operational choices out of product prose until the owning implementation slice can verify them. This document defines how those choices are proposed, accepted, reopened, superseded, and linked to launch evidence.

An implementation decision record is not a runtime capability. It is the repository control that prevents "we probably use X" from becoming undocumented architecture.

## Scope

Use an implementation decision record for choices that materially affect:

- hosting, environment naming, topology, or promotion;
- authentication, identity, billing, email, notification, storage, database, cache, queue, workflow, search, model, parser, browser, connector, or observability providers;
- data residency, retention, privacy, support access, abuse policy, security posture, or customer-facing claim boundaries;
- SDK, API, event, schema, migration, export, or public projection compatibility;
- cost, capacity, service ownership, rollback, or incident operations.

Do not use this register for ordinary code review choices, local refactors, variable names, or implementation details that remain inside one package and do not change a documented contract.

## Authority

Accepted implementation decision records sit below non-negotiable invariants and accepted architecture decision records, and above implementation blueprints and local package choices. They cannot override product requirements, security controls, canonical terminology, or implementation status.

If a decision conflicts with a product, architecture, security, or delivery contract, correct the governing contract first. If a decision reveals that a requirement is wrong or incomplete, update the requirement and implementation plan in the same change.

## Record format

Each record uses a stable identifier:

```text
IDR-YYYY-NNN
```

Required fields:

| Field | Requirement |
|---|---|
| ID | Stable identifier. Never reused. |
| Title | Specific decision, not a generic theme. |
| Status | `open`, `researching`, `proposed`, `accepted`, `rejected`, `deferred`, `superseded`, or `expired`. |
| Owner | Person, team, or implementation slice accountable for evidence and review. |
| Decision class | `provider`, `topology`, `security`, `commercial`, `runtime`, `developer-experience`, `data`, `migration`, `public-output`, or `operational`. |
| Affected slices | Exact implementation slices blocked, guided, or informed. |
| Affected docs | Product, architecture, security, delivery, reference, and build documents that must stay synchronized. |
| Options considered | Named options, including "defer" or "custom implementation" where relevant. |
| Evidence reviewed | Current official references with review dates, runtime tests, cost estimates, security review, user or support evidence, and rejected assumptions. |
| Decision | Accepted choice, or the reason the decision remains open. |
| Consequences | Expected benefits, constraints, migration needs, cost, support impact, and operational risk. |
| Validation | Commands, fixtures, rehearsals, proofs, or provider checks required before implementation can mark the choice production-ready. |
| Rollback or exit | How the product degrades, migrates, switches provider, or recovers if the decision fails. |
| Expiry or review trigger | Date, provider policy change, pricing change, security advisory, scale threshold, customer segment, or implementation milestone that reopens the decision. |

Records may live in a dedicated ADR or decision folder once the runtime repository exists. Until then, the canonical open-decision register in this document is enough if it contains the required fields.

## Initial open-decision register

These items are open implementation decisions. They are not blockers for `foundation-01` unless they affect local bootstrap, provider simulators, CI, or supply-chain controls.

| ID | Decision | Status | Owner slice | Required before |
|---|---|---|---|---|
| `IDR-2026-001` | Managed Postgres provider and regional posture | open | `persistence-03` | production-shaped staging and migration rehearsal |
| `IDR-2026-002` | Authentication and organization identity provider | open | `identity-02` | authenticated Projects leave local simulation |
| `IDR-2026-003` | Billing, entitlement, and usage-settlement provider | open | `commercial-24` | paid plans, quotas, or customer billing claims |
| `IDR-2026-004` | Transactional email and notification provider | open | `connectors-21` | external notification delivery beyond local sinks |
| `IDR-2026-005` | Initial model-route policy and live-provider qualification path | open | `engines-14` | live model use outside deterministic simulators |
| `IDR-2026-006` | Local, preview, integration, staging, canary, and production environment names | open | `foundation-01` | deployment automation or environment approvals |
| `IDR-2026-007` | First supported export formats and renderer ownership | open | `publishing-18` | customer-visible export commitments |
| `IDR-2026-008` | First public publication shape and withdrawal mechanism | open | `publishing-18` | public sharing or marketing claims about publication |

## Decision workflow

1. Create or update the open decision with owner, slice, affected docs, and review trigger.
2. Gather current official references for unstable provider, pricing, package, model, policy, security, and legal facts.
3. Record user, support, market, or operator evidence when the choice affects workflow, trust, usability, cost, or compliance.
4. Compare at least two options unless one is forced by a higher-authority contract.
5. Run local proofs, simulators, cost estimates, security checks, migration rehearsals, or spike code needed to reject unsafe options.
6. Update affected product, architecture, security, delivery, reference, build, and `_meta` files in the same change.
7. Record validation commands and remaining limitations.
8. Link the accepted decision from implementation evidence, release evidence, and affected runbooks.

Decisions are reviewed before implementation, at staging qualification, before production promotion, and whenever a review trigger fires.

## Provider decision rules

Provider choices must state:

- data classes allowed;
- training, retention, deletion, and human-review posture;
- supported regions and residency limits;
- security posture, contract status, and subprocessors;
- rate, quota, cost, and support boundaries;
- simulator and test strategy;
- fallback, degradation, and exit plan;
- customer-facing claims that are allowed and prohibited, with CustomerClaimEvidenceRecords required when stronger-than-specification wording depends on the decision.

Provider-specific features remain adapters. A provider decision cannot make provider memory, provider search, provider workflow history, provider billing records, or provider logs the canonical source for Research domain state.

## Environment decision rules

Environment decisions must state:

- exact environment names and promotion order;
- data policy and credential policy for each environment;
- provider and connector installation boundaries;
- allowed external side effects;
- deployment approval rules;
- observability and incident ownership;
- rollback, read-only, and degraded-mode behavior.

Staging is not production-shaped if it uses a different artifact class, schema path, queue topology, identity model, model-provider policy, or migration sequence from production.

## Acceptance criteria

Implementation decision governance is production-ready only when:

- every open implementation decision has an ID, owner, affected slices, required-before milestone, and review trigger;
- accepted decisions link current official references when they depend on provider, pricing, package, model, platform, security, legal, or policy behavior;
- implementation slices cannot mark completion when a required open decision is missing or stale;
- release evidence includes a decision-register snapshot and any accepted waivers;
- decisions with customer-facing impact update support, runbook, launch, public-claims guidance, and CustomerClaimEvidenceRecord scope;
- expired or superseded decisions are not used as implementation authority;
- `pnpm docs:check` passes after every decision-register update.

## Documentation update rule

Changes to implementation-decision governance, accepted decisions, open decisions, provider choices, environment names, public-output commitments, or decision workflow must update:

- [`documentation-governance-and-drift-control.md`](documentation-governance-and-drift-control.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`release-engineering-and-change-control.md`](release-engineering-and-change-control.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`environment-and-deployment-topology.md`](environment-and-deployment-topology.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
