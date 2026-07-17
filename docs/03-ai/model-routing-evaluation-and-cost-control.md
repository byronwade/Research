# Model routing, evaluation, and cost control

Research lets users choose an allowed model while defaulting to `Auto`. Auto is a capability and policy router, not a hidden hardcoded provider choice.

## Model registry

The registry is synchronized from current provider and AI Gateway catalogs and stores:

```text
model_id and provider
modalities and context limits
tool, structured-output, reasoning, citation, and image capabilities
region and data-processing eligibility
retention and training-use policy
latency and availability history
input, cached-input, output, search, and tool cost
rate limits and concurrency
known incompatibilities
quality evaluation versions
status and deprecation date
```

Product code refers to stable roles such as `fast-classifier`, `query-planner`, `evidence-extractor`, `research-frontier`, `citation-verifier`, `long-form-writer`, `vision-parser`, `embedding`, and `reranker`. Environment and tenant policy resolve those roles to currently eligible models.

## Routing inputs

Routing considers:

- requested user model or Auto;
- task role and required tools;
- modality, language, context size, and structured-output schema;
- Project data classification, region, provider allowlist, and retention policy;
- latency objective and interactive/background service class;
- remaining Operation and Organization budget;
- observed provider health and rate-limit state;
- evaluation score for the exact task family;
- fallback compatibility and reproducibility requirements.

A cheaper or faster model is never selected if it cannot satisfy evidence, privacy, schema, tool, or reliability requirements.

## Gateway and provider boundaries

Vercel AI Gateway is the default text and multimodal access layer for unified model discovery, routing, fallback, usage attribution, and observability. Direct provider SDKs are used only for capabilities the Gateway does not expose or where a security, embedding, regional, or contractual requirement demands them.

Provider-specific request and response fields are normalized at the adapter boundary. Domain code consumes internal messages, tool events, usage, citations, files, errors, and finish reasons.

## Fallback policy

Fallback is declared per role and operation. It must preserve required modality, tools, structured-output behavior, data policy, and minimum quality.

- A fallback caused by provider failure is recorded in user-visible run activity and usage.
- Model changes during a sectioned long-form run are reflected in section provenance.
- A verifier should not automatically inherit the same model and prompt configuration as the generator when independent checking is valuable.
- Provider errors never cause silent expansion to an otherwise disallowed provider.

## Prompt and configuration versioning

System instructions, tool definitions, schemas, retrieval policy, temperature or reasoning settings, and model-role mappings have stable versions. Every generation records the effective versions, source snapshot, model, provider route, usage, and result identity.

Prompt changes are treated as code changes: reviewed, evaluated, canaried, monitored, and reversible. Production prompts are not edited only in a dashboard without a repository or configuration record.

## Evaluation program

Each role has a representative versioned evaluation set. Measurements include:

- task success and structured-output validity;
- retrieval and evidence selection quality;
- citation entailment, attribution, coverage, and source independence;
- unsupported claims and contradiction discovery;
- long-form structure, consistency, duplication, and selective-regeneration stability;
- tool-call correctness and unsafe-action refusal;
- multilingual and multimodal performance;
- latency, availability, token use, tool/search use, and total cost;
- robustness to indirect prompt injection and malformed content.

Evaluation combines deterministic assertions, human-reviewed fixtures, adversarial cases, and calibrated model-assisted scoring. A single aggregate LLM-judge score cannot approve a model change.

## Online quality signals

Production tracks acceptance of document patches, citation corrections, research cancellations, fallback rate, repeated prompts, unsupported-claim audits, user feedback, latency, cost, and provider errors. These signals generate evaluation candidates; they do not automatically train or alter production memory.

## Budgets and reservations

Before expensive work, Research estimates and reserves limits for tokens, searches, tool calls, wall time, provider cost, result bytes, parallel workers, and export compute. Durable steps settle actual use against the reservation and release unused capacity.

Budget policy exists at platform, plan, Organization, Project, user, Operation, stage, and model-role levels. Users see estimates, current consumption, material fallback changes, and partial-result options.

## Cost controls

- cache safe deterministic transformations and embeddings by content and model identity;
- deduplicate identical ingestion and generation work within authorization boundaries;
- use staged retrieval and bounded reranking rather than placing the entire corpus in every prompt;
- route classification and extraction to qualified efficient models;
- cap worker fan-out and speculative searches;
- stop when coverage and verification criteria are met;
- retain expensive generations and research evidence instead of regenerating them after refresh;
- attribute usage by Organization, Project, user, feature, Operation, stage, model, and provider.

## Model lifecycle

New models enter shadow or benchmark evaluation, then controlled canary. Deprecated models have replacement mapping, compatibility tests, migration plans for resumable workflows, and user communication. Runtime availability is discovered rather than assumed from stale hardcoded IDs.

Official references: Vercel AI Gateway documentation, AI SDK provider/model documentation, and each provider’s current data-use and model-capability documentation.
