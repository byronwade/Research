# Entitlements, metering, and billing

Commercial controls must be application-owned. External billing providers may process money, but Research owns product entitlements, usage decisions, quotas, credits, and customer-visible state.

Customer-facing plan, usage, budget, and settings visibility is specified in [`../01-product/project-settings-and-administration.md`](../01-product/project-settings-and-administration.md).

## Scope

This contract covers:

- plan and entitlement resolution;
- feature access;
- usage metering;
- quota enforcement;
- credits and budgets;
- billing-provider synchronization;
- invoices and receipts;
- customer-visible limits;
- admin and support operations.

## Entitlement model

Entitlements are resolved from:

- organization plan;
- workspace or Project policy;
- user role;
- trial or promotional grant;
- feature flag;
- compliance or provider restriction;
- support or incident override.

The resolved entitlement snapshot is recorded on operations that can affect cost, access, publication, connector use, or external actions.

## Metered dimensions

Initial dimensions:

- seats;
- Projects;
- stored source bytes;
- parsed source pages or elements;
- indexed chunks and embeddings;
- model input and output usage;
- research-run steps;
- workflow and queue usage;
- exports;
- public publication bandwidth;
- connector synchronization volume;
- API operations.

Dimensions must be defined before billing. Ambiguous counters create customer disputes and launch risk.

## Budget controls

Budgets exist at organization, Project, run, and user-action level. Expensive work requires:

- estimated range;
- hard or soft cap;
- behavior on cap hit;
- retry and resume rules;
- user-visible progress;
- final actual cost record.

Provider fallback cannot bypass a customer budget or policy.

Recurring automations additionally show projected monthly usage before activation. Deterministic preflight, cache reuse, and rule-based routing should run before model calls where they reduce cost without weakening correctness or auditability.

## Enforcement

Enforcement occurs before:

- source ingestion;
- model calls;
- research runs;
- exports;
- connector synchronization;
- publication;
- API operations;
- scheduled automation.

Denied operations return stable product errors and explain the required action without leaking tenant details.

## Billing synchronization

External billing events are ingested through idempotent webhooks and reconciled against Research-owned state. The system records:

- customer mapping;
- subscription state;
- invoice state;
- payment status;
- entitlement impact;
- retry and dead-letter state;
- operator action.

Billing-provider downtime does not grant unlimited access or erase customer data. Degraded behavior is explicit.

## Customer transparency

Customers can inspect:

- current plan;
- enabled capabilities;
- usage by period;
- active budgets;
- scheduled work expected to consume quota;
- overage or cap behavior;
- invoices and receipts when applicable;
- upgrade, downgrade, and cancellation effects.

Project-level summaries must reconcile to authoritative entitlement and metering records and cannot be edited as settings.

## Launch gates

Commercial controls are production-ready only when:

- entitlement snapshots are tested;
- usage events are idempotent;
- quota denial is clear and safe;
- billing webhook replay works;
- invoices reconcile with product usage;
- support can resolve disputes without private content access;
- cost dashboards detect abuse and provider anomalies.
