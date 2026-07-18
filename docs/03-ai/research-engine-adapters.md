# Research engine adapters

Research can use managed and open-source research engines, but none of them own product truth. Engines are adapters behind Research contracts, policies, and evidence requirements.

## Adapter responsibilities

An adapter translates a Research task packet into an engine-specific request and translates the response back into typed product data.

Each adapter must declare:

- supported source types;
- maximum context and output sizes;
- citation behavior;
- tool and web access behavior;
- streaming and progress support;
- cancellation behavior;
- retention and training policy;
- provider regions and subprocessors;
- cost model;
- known failure modes.

## Task packet

Adapters receive immutable packets:

```text
project_id
research_run_id
actor_id
allowed_sources
prohibited_sources
tool_allowlist
provider_policy
budget
deadline
output_schema
completion_criteria
audit_context
```

Adapters do not receive ambient tenant access. They receive only the data and tools needed for one task.

## Output contract

Adapters return structured results:

- findings;
- candidate claims;
- evidence references;
- citations or citation gaps;
- discovered sources;
- uncertainty;
- contradictions;
- costs and token usage;
- tool actions;
- warnings and policy exceptions.

Research verifies outputs before they become claims, document patches, memory, artifacts, or publication content.

## Isolation classes

| Class | Use |
|---|---|
| Managed provider | API-based research or model provider with product policy controls. |
| Isolated open-source worker | Engine executed in a sandbox or controlled worker. |
| Reference-only | Project informs design, but code is not executed in production. |
| Rejected | Does not meet security, licensing, provenance, or control requirements. |

## Evaluation criteria

Adapters are evaluated on:

- retrieval recall;
- citation precision;
- abstention behavior;
- contradiction detection;
- source acquisition quality;
- long-form coherence;
- cost;
- latency;
- resumability;
- policy compliance;
- repeatability;
- operator visibility.

## Failure policy

An adapter failure cannot corrupt canonical content. Failure states are recorded on the run and may produce reviewable partial results, but they cannot silently approve claims, publish content, widen permissions, or create external side effects.

## Implementation sequence

1. Implement internal research contracts and durable runs.
2. Add managed provider adapters with strict schema validation.
3. Add isolated open-source workers only after sandboxing, licensing, and resource limits are proven.
4. Add engine comparison fixtures and regression tests.
5. Promote adapters only when release evidence covers provider policy, retention, cost, and failure behavior.
