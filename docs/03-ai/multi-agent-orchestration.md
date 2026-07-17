# Multi-agent orchestration

Research uses bounded specialist workers inside a deterministic workflow. It does not use an uncontrolled swarm.

## Worker roles

- Contract compiler
- Planner
- Project-corpus researcher
- Web source scout
- Scholarly researcher
- Repository analyst
- Data and code analyst
- Claim extractor
- Skeptic and contradiction researcher
- Section writer
- Evidence integrator
- Global document integrator
- Citation auditor
- Consistency auditor
- Maintenance planner

## Task packet

Every worker receives an immutable packet containing:

- exact question and deliverable;
- authorized source-version snapshot;
- tool allowlist;
- model role and fallback policy;
- time, token, search, and cost budgets;
- required output schema;
- dependencies and completion criteria;
- prohibited actions;
- and parent Research Run identifiers.

## Boundaries

Workers cannot publish, delete sources, widen connector scopes, modify Project policy, update accepted memory, push protected branches, merge pull requests, or directly rewrite canonical documents. They return typed proposals to the workflow.

## Parallelism

Parallel workers are used for independent source families, perspectives, repository areas, evidence extraction, contradiction search, and section drafting. The coordinator enforces deduplication, shared terminology, source independence, budget caps, cancellation, and deterministic integration.

## Failure behavior

Steps are idempotent and retry according to typed failure classes. Partial results remain inspectable. Budget exhaustion, provider failure, permission change, stale source snapshots, or unresolved contradictions produce explicit blocked or partial states rather than fabricated completion.
