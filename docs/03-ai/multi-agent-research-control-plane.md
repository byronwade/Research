# Multi-agent research control plane

Research uses specialist workers only when decomposition improves quality, speed, or safety. The product does not rely on autonomous agents with broad ambient authority.

## Agent types

| Worker | Responsibility |
|---|---|
| Coordinator | Owns the run plan, dependencies, budgets, and approval points. |
| Source scout | Finds candidate sources within allowed channels. |
| Source reviewer | Assesses source fit, rights, risk, and acquisition value. |
| Extractor | Produces normalized evidence spans and candidate claims. |
| Verifier | Checks support, contradiction, freshness, and citation precision. |
| Writer | Produces section drafts from verified evidence. |
| Editor | Enforces structure, tone, consistency, and unsupported-claim handling. |
| Publisher reviewer | Checks privacy, rights, policy, and public/private projection safety. |

## Authority model

Each worker receives:

- immutable task packet;
- scoped source access;
- limited tools;
- budget;
- deadline;
- output schema;
- prohibited actions;
- idempotency context;
- audit context.

Workers return typed results. They do not directly mutate canonical documents, memory, publications, repositories, entitlements, or connector state.

## Coordination rules

- A worker cannot create another worker without coordinator approval.
- A worker cannot widen source scope.
- A worker cannot approve its own output for publication.
- A worker cannot convert generated summaries into independent evidence.
- A worker cannot bypass retrieval authorization.
- A worker cannot merge repository changes or publish content.

## Failure containment

Worker failures produce:

- failed task status;
- structured error;
- partial output if safe;
- cost record;
- retry eligibility;
- human-visible impact.

Coordinator retries are bounded. Persistent failure pauses the run and preserves evidence already collected.

## Evaluation

The control plane is evaluated separately from model quality:

- plan correctness;
- task decomposition quality;
- authorization adherence;
- cost predictability;
- cancellation and resume behavior;
- evidence coverage;
- contradiction surfacing;
- patch acceptance rate;
- operator diagnosability.

## Launch requirement

Multi-agent behavior is not required for the first grounded PDF-to-document vertical slice. It becomes eligible after durable runs, exact citations, document patches, and budget enforcement are working.
