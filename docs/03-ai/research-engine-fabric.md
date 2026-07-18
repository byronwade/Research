# Research engine fabric

The research engine fabric coordinates source acquisition, retrieval, model reasoning, specialist workers, evidence extraction, and document production. It is a control plane, not an uncontrolled agent swarm.

## Fabric layers

```text
Research contract
-> durable Research Run
-> planner
-> task graph
-> source acquisition
-> retrieval and evidence extraction
-> claim verification
-> model council when risk or disagreement requires it
-> section generation
-> editorial and citation audit
-> document patch proposal
```

## Research contract

Every substantial run begins with:

- objective;
- audience;
- source scope;
- allowed acquisition channels;
- output type;
- required citations;
- depth and time budget;
- cost budget;
- approval points;
- completion criteria.

The contract is user-visible and revisioned.

## Task graph

The planner decomposes work into bounded tasks. Each task declares:

- inputs;
- source permissions;
- tool allowlist;
- model role;
- expected schema;
- budget;
- retry policy;
- dependencies;
- reviewer or approval rule.

Task results are append-only and replayable. Side effects use idempotency keys.

## Evidence-first generation

The fabric does not start by drafting a final answer. It first creates an evidence inventory:

- relevant source versions;
- candidate evidence spans;
- extracted claims;
- support and contradiction links;
- freshness status;
- rights and publication constraints.

Writing stages consume this inventory and must mark unsupported gaps.

## Model-role routing

Models are selected by product role:

- `planner`;
- `source-classifier`;
- `extractor`;
- `retriever-reranker`;
- `claim-verifier`;
- `writer`;
- `editor`;
- `citation-auditor`;
- `safety-reviewer`.

Provider and model IDs are runtime configuration, not hardcoded product behavior.

Model council is a bounded verification stage, not the default reasoning path. It runs only when the research contract, risk class, claim state, Trust blocker, or evaluation plan requires independent comparison. Council behavior is defined in [`model-council-and-disagreement-resolution.md`](model-council-and-disagreement-resolution.md).

## Human control

Users can:

- inspect the plan;
- adjust source scope;
- approve new source acquisition;
- pause or cancel runs;
- accept, edit, or reject patches;
- request regeneration for one section;
- view cost and progress;
- preserve rejected drafts for audit.

## Production readiness

The fabric is production-ready only when it proves:

- resumability across deploys and provider outages;
- cancellation without orphaned external actions;
- citation quality regression tests;
- cost and budget enforcement;
- bounded tool authority;
- replayable audit history;
- long-form coherence and section consistency;
- safe degradation when sources or providers fail.
