# Model council and disagreement resolution

**Review date:** 2026-07-17
**Status:** AI contract, not implemented runtime behavior

Research uses a model council only when independent reasoning, verification, or perspective diversity improves trust more than it increases cost, latency, and complexity. A council compares models, research engines, prompts, or verifier configurations against the same authorized evidence and task contract. It is not a way to vote facts into existence.

The product goal is to surface agreement, disagreement, missing evidence, weak assumptions, and verification gaps so users can decide what to trust and what to review.

## Sources reviewed

Official references:

- [Perplexity Model Council and Deep Research changelog](https://www.perplexity.ai/changelog/what-we-shipped---february-6th-2026)
- [Perplexity Model Council in Computer changelog](https://www.perplexity.ai/changelog/what-we-shipped---march-6-2026)
- [Perplexity memory in Model Council changelog](https://www.perplexity.ai/changelog/what-we-shipped---february-13-2026)
- [OpenAI evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices)
- [OpenAI: Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/)
- [Anthropic: Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [Google DeepMind FACTS Grounding](https://deepmind.google/blog/facts-grounding-a-new-benchmark-for-evaluating-the-factuality-of-large-language-models/)
- [Google Gemini grounding overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/grounding/overview)

Public user-opinion signals:

- [Perplexity Model Council public discussion](https://www.reddit.com/r/perplexity_ai/comments/1qw49a5/perplexity_building_model_council_for_research/)
- [Perplexity Model Council launch discussion](https://www.reddit.com/r/perplexity_ai/comments/1qwqp6i/were_launching_perplexity_model_council_for_all/)
- [Perplexity Deep Research hallucination warning](https://www.reddit.com/r/perplexity_ai/comments/1iyylmo/warning_worst_case_of_hallucination_using/)
- [ChatGPT hallucination frustration from a researcher](https://www.reddit.com/r/ChatGPT/comments/1m7oje7/i_love_chatgpt_but_the_hallucinations_have_gotten/)
- [Hacker News discussion of hallucinated citations](https://news.ycombinator.com/item?id=46181466)

These signals support one product principle: multiple models can help find disagreement, but the final authority remains evidence, policy, and human review where required.

## When to use a council

A council is eligible for:

- high-impact factual claims;
- disputed or conflicting evidence;
- weak citations or low source coverage;
- long-form section audits;
- model-generated data transformations;
- financial, legal, medical, safety, or policy-sensitive research;
- strategic decisions where assumptions matter;
- publication candidates with unresolved blockers;
- customer-reported citation or hallucination issues;
- evaluation of model, prompt, retrieval, or research-engine changes.

A council is not eligible when a deterministic check, exact source lookup, schema validation, or direct human review is the correct control.

## Council contract

Every council run declares:

- Project, actor, objective, and risk class;
- exact question or claim set;
- authorized source scope and context pack version;
- required evidence and citation behavior;
- participant roles and provider/model eligibility;
- chair or synthesis role;
- budget, latency class, and stop conditions;
- required output schema;
- disagreement categories;
- publication and approval policy;
- retention and audit policy.

Participant models receive the same authorized task packet unless a deliberate comparison is testing context, prompt, or retrieval variants. Differences in context, tools, or policy must be recorded.

## Participant roles

| Role | Purpose |
|---|---|
| `generator` | Produces an initial answer, section, extraction, or plan. |
| `verifier` | Tests whether claims are supported by evidence and policy. |
| `challenger` | Searches for contradiction, missing assumptions, and weak evidence. |
| `specialist` | Applies domain or source-type expertise such as code, finance, scholarly, legal, or visual parsing. |
| `chair` | Synthesizes agreement, disagreement, unresolved gaps, and next actions. |

The chair does not decide truth by majority. It organizes evidence and disagreement for the user, automation, or publication gate.

## Disagreement model

Council output records disagreement as structured state:

| State | Meaning |
|---|---|
| `agreement-supported` | Participants agree and evidence directly supports the claim. |
| `agreement-unsupported` | Participants agree but evidence does not support the claim. |
| `disagreement-evidence` | Participants disagree because they cite different or conflicting evidence. |
| `disagreement-interpretation` | Participants accept the same evidence but interpret implications differently. |
| `disagreement-assumption` | Participants rely on different assumptions, definitions, or scope. |
| `disagreement-policy` | Provider, source, rights, residency, or publication policy changes the allowed answer. |
| `missing-evidence` | Participants cannot resolve the claim with authorized sources. |
| `tool-or-context-failure` | A participant failed because of retrieval, parser, tool, context, or provider failure. |

These states can attach to Claims, EvidenceSpans, DocumentBlocks, ResearchRun tasks, Trust dashboard blockers, and release-evaluation cases.

## Evidence rules

- Evidence beats model consensus.
- Multiple models citing the same weak source do not create independent corroboration.
- A council cannot mark a claim supported without an authorized EvidenceSpan or accepted inference state.
- Disagreement is preserved when unresolved; it is not smoothed into confident prose.
- A council run may recommend source acquisition, human review, or publication blocking.
- Generated summaries remain derived material and cannot corroborate their upstream claims.
- High-risk conclusions expose the exact evidence, assumptions, and dissenting positions.

## User experience

Council results show:

- where models agree;
- where they disagree;
- what evidence each position used;
- what assumptions differ;
- what evidence is missing;
- which claims or sections are blocked;
- cost and latency spent;
- the next safe action.

Users should be able to expand from a concise summary into per-model reasoning artifacts, citations, source spans, and verifier notes. Hidden chain-of-thought is not displayed; structured rationales, evidence links, and decision records are.

## Automation rules

Automation may invoke a council to:

- verify high-risk claims before publication;
- audit long-form sections;
- compare research-engine outputs;
- review source-change patches;
- evaluate model or prompt changes;
- create a Trust dashboard blocker or recommendation.

Automation may not:

- use council agreement to bypass evidence requirements;
- publish or externally write without the configured approval class;
- expand provider or source policy;
- hide dissenting outputs;
- run unbounded parallel models without budget reservation;
- repeatedly invoke councils when deterministic blockers remain.

## Evaluation and calibration

Council behavior is evaluated separately from ordinary model routing:

- participant independence and diversity;
- citation entailment;
- contradiction discovery;
- missing-evidence detection;
- false confidence reduction;
- false positive blocker rate;
- cost per resolved blocker;
- latency by risk class;
- agreement with human reviewers on calibrated cases;
- robustness to prompt injection and source manipulation.

Judge models require calibration against human-reviewed fixtures. As OpenAI, Anthropic, and Google guidance all emphasize, evaluations need task-specific success criteria, production-shaped cases, and human calibration rather than generic scores.

## Cost and performance

Council mode is explicit because it can multiply model calls, retrieval work, and latency. Before a council run starts, Research shows:

- participant count and model roles;
- expected latency class;
- cost estimate and budget reservation;
- source and context scope;
- whether partial results are useful;
- cancellation behavior.

The system stops council work when the governing claim is already resolved by deterministic evidence, an approval blocker, exhausted source scope, budget policy, or user cancellation.

## Non-goals

- Do not turn every answer into a council run.
- Do not market model voting as factual certainty.
- Do not let the chair overwrite evidence state.
- Do not expose private source data to additional providers without policy approval.
- Do not use councils to avoid writing deterministic validators.
- Do not collapse disagreements into a single unsupported recommendation.

## Launch gates

Model council is production-ready only when:

- council runs are persisted with participant, model, provider, context, prompt, tool, cost, and source snapshots;
- disagreement states attach to Claims, DocumentBlocks, ResearchRuns, and Trust blockers;
- citation and evidence rules are enforced before supported states are emitted;
- provider, residency, budget, and permission policy are applied per participant;
- cancellation and partial-result behavior are tested;
- high-risk outputs require human review or publication blocking when unresolved;
- evaluation fixtures prove improved contradiction and missing-evidence detection without unacceptable cost, latency, or false confidence;
- telemetry records council quality without storing private source text or hidden reasoning.

## Documentation update rule

Changes to model-council behavior must update:

- [`model-routing-evaluation-and-cost-control.md`](model-routing-evaluation-and-cost-control.md)
- [`model-evaluation-and-change-management.md`](model-evaluation-and-change-management.md)
- [`claims-evidence-citations.md`](claims-evidence-citations.md)
- [`research-engine-fabric.md`](research-engine-fabric.md)
- [`../01-product/trust-dashboard-and-evidence-coverage.md`](../01-product/trust-dashboard-and-evidence-coverage.md)
- [`../01-product/automation-ux-and-performance-principles.md`](../01-product/automation-ux-and-performance-principles.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)

If council output conflicts with evidence, authorization, provider policy, or publication blockers, the governing contract wins and the council output becomes a review signal, not accepted truth.
