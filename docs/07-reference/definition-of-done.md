# Definition of done

“Done” means the declared behavior is implemented, verified, operable, documented, and recorded. A merged file, passing happy-path test, deployed preview, or completed design is not sufficient by itself.

## Implementation-slice completion

Every slice provides:

1. **Scope:** the slice ID, owned requirements, dependencies, and explicit non-goals.
2. **Code:** production implementation within the declared package and service boundaries.
3. **Data:** migrations, backfills, constraints, indexes, retention behavior, and rollback impact where applicable.
4. **Contracts:** API, event, workflow, document, connector, artifact, and SDK changes with compatibility rules.
5. **Authorization:** positive and negative access tests, including cross-tenant attempts.
6. **Reliability:** idempotency, retry, cancellation, timeout, concurrency, and recovery behavior.
7. **Security:** threat-model updates, dependency review, secret handling, input and output controls, and relevant adversarial tests.
8. **Observability:** structured events, metrics, traces, dashboards, alerts, and runbook links without sensitive content.
9. **Performance:** representative latency, throughput, queue, cost, and resource evidence when the slice affects a service objective.
10. **User experience:** accessible keyboard, loading, empty, error, reconnect, conflict, and narrow-screen states.
11. **Documentation:** governing contracts, ADRs, environment variables, operations, and user/developer guidance updated.
12. **Evidence:** exact commands, test reports, artifact or deployment identifiers, reviewer, and completion commit recorded in the implementation ledger.

A slice cannot be marked complete while a dependency is incomplete or while its acceptance criteria rely on a placeholder, mock, disabled test, or undocumented manual step.

## Pull-request completion

A pull request identifies:

- implementation slice and requirements;
- user and developer impact;
- architectural and security impact;
- migrations and compatibility window;
- provider, connector, model, and cost impact;
- tests and evidence;
- rollout, flags, monitoring, and rollback;
- documentation changed;
- deferred work with owners.

Unrelated changes are separated. Review comments are resolved or explicitly dispositioned. Required checks pass on the final commit.

## Feature completion

A user-facing feature is complete when the full journey works across authentication, authorization, persistence, reconnect, source provenance, audit, billing/entitlement, accessibility, telemetry, support diagnostics, deletion, and export as applicable. The interface does not advertise a capability whose backend, permissions, or operational support is incomplete.

## Production completion

A release additionally requires:

- one immutable artifact promoted through environments;
- SBOM, provenance, dependency, license, and vulnerability evidence;
- compatible schema, event, workflow, index, export, and SDK state;
- conformance, accessibility, localization, security, performance, load, and degraded-mode results;
- canary metrics and stop conditions;
- tested rollback and forward-recovery paths;
- backup freshness and successful restore exercise;
- secret/key and connector revocation readiness;
- operational owners, dashboards, alerts, runbooks, support, and customer communication;
- no unresolved blocking item in the product-readiness register.

## Documentation completion

A document is accepted when its purpose is unique, authority is clear, links resolve, terminology matches canonical usage, requirements and slice ownership are synchronized, time-sensitive claims are sourced and reviewed, and it distinguishes specified from implemented behavior.

## Evidence expiry

Performance, security, restore, provider, and operational evidence can become stale. The readiness system records validity windows and forces requalification after material code, infrastructure, dependency, model, data-volume, region, or policy changes.
