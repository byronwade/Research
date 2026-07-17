# Launch readiness and release evidence

General availability is an evidence decision over one immutable release candidate. It is not declared from feature count, a successful demo, documentation completeness, or one green CI run.

## Release evidence bundle

Every candidate records:

```text
release_id
source commit and repository state
immutable artifact digest
build environment and toolchain
lockfile and dependency graph
SBOM and provenance attestations
configuration schema and sanitized snapshot
feature-flag and model-role snapshot
database migrations and compatibility window
API, event, workflow, index, export, and SDK versions
test and evaluation reports
security and privacy reports
performance, load, cost, and capacity report
backup freshness and restore report
canary policy and metrics
rollback and forward-recovery targets
runbooks and operational owners
approvals, waivers, and expiry
customer-facing release and incident communication
```

The bundle is addressable, access-controlled, and retained according to release and audit policy.

## Entry criteria

Before a release candidate enters staging qualification:

- its owning implementation slices are complete with accepted evidence;
- no uncommitted production configuration or prompt change exists;
- the artifact was built from a protected reviewed commit;
- required migrations are backward-compatible with deployed code;
- provider, connector, model, and region policies are valid;
- test fixtures and evaluation datasets are versioned;
- the rollback target and responsible operator are known.

## Product gates

- Project, Chat, Documents, and Sources journeys work from a clean account.
- Grounded answers resolve exact citations and abstain when support is insufficient.
- Documents remain deterministic and editable after AI and human changes.
- Long-form research is coherent, inspectable, resumable, and selectively regenerable.
- Source updates and feature removals propagate through the dependency graph.
- Public/private projections cannot leak or drift.
- GitHub changes remain proposed, validated, approved, and draft-PR based.
- API, SDK, webhook, SSE, CLI, and MCP behaviors match committed contracts.

## Security, privacy, and governance gates

- tenant-isolation and broken-object-authorization suites pass;
- prompt injection and excessive-agent-authority suites pass;
- upload, parser, SSRF, webhook, cache, and public-link defenses pass;
- secrets, keys, dependencies, Actions, SBOM, provenance, vulnerability, and license policies pass;
- retention, deletion, restore tombstones, residency, provider policy, source rights, and takedown behavior pass;
- support and administrative access use tested step-up, scope, expiry, and audit controls.

Cross-tenant exposure, irreversible data-loss risk, credential leakage, unauthorized external action, public/private leakage, deletion resurrection, or untested restore is non-waivable for general availability.

## Reliability and performance gates

- service-level objectives and error budgets are declared;
- representative load, spike, soak, fairness, backpressure, and degraded-provider tests pass;
- queue age, workflow resume, cancellation, and side-effect reconciliation pass;
- budget reservations and cost guardrails behave under abuse and provider failure;
- database and index query plans meet headroom targets;
- staging uses production-shaped topology and the same release artifact;
- backup restore and complete disaster-recovery exercises meet approved RPO/RTO.

## Accessibility and user-operation gates

- keyboard and screen-reader journeys pass for primary surfaces;
- focus, contrast, target size, error handling, authentication, drag alternatives, and dynamic announcements meet the declared accessibility baseline;
- Unicode, multilingual, locale, time, number, and RTL fixtures pass where supported;
- loading, empty, offline/reconnect, conflict, permission loss, partial result, and failure states are understandable;
- onboarding, import, export, deletion, support, limits, cost, and publication state are transparent.

## Operational gates

Every paging alert has an owner and exercised runbook. Operators can safely contain external writes, publication, connectors, models, queues, billing settlement, and tenant cohorts. Support can diagnose without ambient private-content access. Incident communication and status ownership are defined.

## Canary

Canary exposure starts with an explicit tenant or traffic cohort. Metrics include user-visible errors, stream and research completion, retrieval and citation quality, provider fallback, cost, queue age, authorization denials, publication failures, and support signals.

Stop conditions are declared before rollout. A canary does not expand automatically when correctness, privacy, billing, or security telemetry is missing.

## Approval and waivers

Approvers represent engineering, product, security/privacy, operations, and support for material launches. A waiver records the exact failed gate, bounded impact, compensating control, owner, expiry, customer effect, and rollback condition.

A waiver cannot change a failed result into a pass. Expired or widened waivers block promotion.

## Launch and post-launch

Production promotion uses the verified artifact. Initial rollout remains observable and reversible. After launch, the team verifies migrations, source ingestion, grounded Chat, durable workflows, public output, usage settlement, notifications, and restore signals.

A post-launch review compares expected and actual reliability, cost, quality, support volume, security signals, and user outcomes. Follow-up work enters the requirement and implementation control plane with owners.

## Stable-release rule

A release is “stable” only after the observation window meets declared SLO, correctness, citation, cost, security, and support criteria without unresolved blocking incidents. Marketing or version labels do not override operational evidence.
