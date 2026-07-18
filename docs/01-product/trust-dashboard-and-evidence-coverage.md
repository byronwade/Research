# Trust dashboard and evidence coverage

**Review date:** 2026-07-17
**Status:** product contract, not implemented runtime behavior

Research should make trust inspectable before users publish, export, automate, or rely on generated work. The Trust dashboard is a contextual Project surface that summarizes whether documents, answers, artifacts, sources, and automations are supported, current, authorized, and publication-ready. The evidence coverage map is the drill-down view that shows exactly which claims and document sections are supported by which source versions. Source-change maintenance, maintenance ActionCards, and maintenance patch proposals are governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md). Project Atlas and Impact Reports are governed by [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md) when a user needs broader local neighborhoods, path queries, or downstream impact preview.

This surface is not a generic analytics dashboard. It is a product-control surface over Research's canonical evidence graph.

## Signals reviewed

Official and tooling references:

- [Ragas metrics](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/)
- [LangSmith RAG evaluation tutorial](https://docs.langchain.com/langsmith/evaluate-rag-tutorial)
- [TruLens RAG Triad](https://www.trulens.org/getting_started/core_concepts/rag_triad/)
- [Arize Phoenix evaluations](https://arize.com/docs/phoenix/evaluation/llm-evals)
- [OpenAI Deep Research help](https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt)
- [Gemini Notebook source and citation documentation](https://support.google.com/gemininotebook/answer/16215270?co=GENIE.Platform%3DDesktop&hl=en)
- [Claude search-result citation documentation](https://platform.claude.com/docs/en/build-with-claude/search-results)

Public user-opinion signals:

- [NotebookLM limitations discussion](https://www.reddit.com/r/notebooklm/comments/1l2aosy/i_now_understand_notebook_llms_limitations_and/)
- [Perplexity Deep Research hallucination warning](https://www.reddit.com/r/perplexity_ai/comments/1iyylmo/warning_worst_case_of_hallucination_using/)
- [Perplexity source-quality discussion](https://www.reddit.com/r/perplexity_ai/comments/1l4va7f/whats_the_1_reason_to_use_perplexity_over_chatgpt/)
- [AI citation concerns in scientific literature](https://www.reddit.com/r/technology/comments/1sd0khs/hallucinated_citations_are_polluting_the/)
- [Hacker News discussion of hallucinated ICLR citations](https://news.ycombinator.com/item?id=46181466)
- [PromptEngineering discussion on correct source use](https://www.reddit.com/r/PromptEngineering/comments/1m368sn/how_do_you_get_an_ai_to_actually_use_and_cite/)

These signals point to the same product lesson: citations are valuable only when users can see source scope, support strength, coverage gaps, and the exact recovery path.

## User jobs

Users need to answer:

- Can I trust this answer, document, artifact, or publication candidate?
- Which claims are directly supported, inferred, disputed, stale, removed, unsupported, or unresolved?
- Which sections depend on low-confidence parsing, partial source coverage, stale source versions, or private sources?
- Which citations point to exact evidence, and which only provide weak topical relevance?
- What changed since the last trusted revision?
- What is blocking publication or export?
- What can Research safely fix with a patch, and what needs human review?

The dashboard must turn trust problems into reviewable actions, not just scores.

## Dashboard summary

At Project, document, artifact, source, run, and publication-candidate scope, the dashboard shows:

- claim-state counts;
- unsupported, disputed, stale, removed, and unresolved claim lists;
- citation support and locator validity;
- source coverage by document section and artifact component;
- parser confidence and warnings;
- source rights, privacy, provider-policy, residency, and publication blockers;
- AbusePolicy, content-safety, provider-policy, public-spam, review, appeal, and false-positive blockers where they affect publication, export, automation, or API use;
- freshness and source-change impact;
- model or research-engine disagreement governed by [`../03-ai/model-council-and-disagreement-resolution.md`](../03-ai/model-council-and-disagreement-resolution.md);
- automation patch queue and failed maintenance runs;
- feedback and correction signals tied to claims or citations.

Summary numbers always link to the underlying claims, source versions, and document blocks. A score without inspection is not accepted evidence.

## Evidence coverage map

The coverage map visualizes how canonical content depends on source evidence:

```text
Document / Artifact
-> Section / Component
-> DocumentBlock / ArtifactComponent
-> Claim
-> ClaimEvidence relationship
-> EvidenceSpan
-> ParsedElement
-> SourceVersion
```

Coverage can be viewed by source, section, claim state, citation type, parser confidence, source freshness, rights policy, user segment, or publication target.

Coverage states:

| State | Meaning |
|---|---|
| `covered` | Every factual claim in scope has valid support or accepted inference. |
| `partial` | Some claims are supported, but coverage is incomplete or source parsing is partial. |
| `weak` | Evidence is topically related but does not strongly entail the claim. |
| `conflicted` | Supporting and disputing evidence both exist. |
| `stale` | Source freshness policy requires revalidation. |
| `blocked` | Unsupported, removed, restricted, rights-blocked, provider-policy-blocked, or abuse-policy-blocked content prevents publication or export. |
| `unknown` | Required evidence has not been parsed, indexed, authorized, or evaluated. |

## Claim inspector

Each claim inspector shows:

- claim text and state;
- document blocks, artifacts, answers, memory items, and publications that use it;
- direct support, indirect support, contradiction, and background-context evidence;
- exact locators, source version, parser provenance, confidence, and content hash;
- source visibility and publication eligibility;
- source language, direction, translation state, and whether any displayed translation is derived material;
- verifier results and model-disagreement notes;
- user corrections and feedback;
- suggested actions.

Suggested actions include cite stronger evidence, mark as inferred, request source, re-run parsing, start verification, propose document patch, suppress from publication, open abuse review, appeal an overblock where policy allows, or escalate to human review.
When the safest action depends on downstream effects, the Trust dashboard opens an Atlas Impact Report instead of asking the user to infer risk from counts alone.

## Automation

Trust automation may:

- scan changed sources for affected claims;
- re-run citation and locator verification;
- compare model or engine judgments for high-risk claims;
- group publication blockers by owner and risk;
- propose minimal document patches;
- notify owners about stale or unsupported claims;
- open a review queue item with exact evidence.

Trust automation may not:

- silently mark unsupported claims as supported;
- approve publication;
- delete sources;
- widen connector permissions;
- treat model confidence as source support;
- hide disputed or stale evidence to improve a score;
- rewrite locked or published content without review.

## UX requirements

The dashboard should be useful on first inspection:

1. Show the highest-risk blockers first.
2. Distinguish trust risk from task progress and from system health.
3. Use plain labels for claim state, source coverage, rights, and freshness.
4. Explain what changed and why it matters.
5. Offer the next safe action for every blocker.
6. Support keyboard navigation through claims, citations, and source spans.
7. Preserve context when moving from dashboard to document, source, or artifact.
8. Avoid graph overload by defaulting to summaries, filters, and focused paths.

The dashboard must remain fast for large Projects by loading aggregates first, then paginated blockers, then focused graph neighborhoods. It must not require loading the entire dependency graph into the browser.

## Metrics

Measure:

- unsupported claim count and age;
- stale claim count and age;
- invalid locator rate;
- citation entailment pass rate;
- source coverage by document and artifact;
- parser-confidence distribution;
- publication blocker count and time to resolution;
- abuse blocker count, review age, appeal reversal rate, and false-positive rate where blockers affect trust-critical work;
- user citation corrections;
- accepted trust-related document patches;
- automation false-positive and false-negative reports;
- time from source change to reviewed patch.

Metrics are product quality signals, not customer-facing guarantees unless release evidence supports the claim.

## Non-goals

- Do not create a single opaque trust score.
- Do not imply that high model confidence equals factual support.
- Do not hide weak evidence behind many citations.
- Do not create a second evidence model outside Claims, EvidenceSpans, and the dependency graph.
- Do not make the Trust dashboard a mandatory first-run surface before the grounded PDF path works.
- Do not expose private-source metadata through public trust summaries.

## Launch gates

The Trust dashboard and evidence coverage map are launch-ready only when:

- claim states and coverage states are derived from canonical evidence, not duplicated fields;
- dashboard counts match graph queries and publication blockers;
- abuse and provider-policy blockers agree with AbuseDecisions, review queues, appeal outcomes, and content-minimized policy snapshots;
- unsupported, disputed, stale, removed, and rights-blocked content is visible;
- source revocation removes unauthorized graph nodes from dashboard views;
- citation drill-down opens exact source context;
- automated trust patches are typed, reviewable, and auditable;
- performance tests cover large Projects without full-graph browser loading;
- Atlas Impact Reports agree with Trust Dashboard blocker counts and evidence coverage neighborhoods;
- accessibility and internationalization tests cover blocker navigation, citation drill-down, source language and direction display, translated-derived-material labels, and RTL citation association;
- telemetry records aggregate quality signals without storing private source text.

## Documentation update rule

Changes to this surface must update:

- [`../03-ai/claims-evidence-citations.md`](../03-ai/claims-evidence-citations.md)
- [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md)
- [`../02-architecture/living-dependency-graph.md`](../02-architecture/living-dependency-graph.md)
- [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md)
- [`../02-architecture/continuous-knowledge-maintenance.md`](../02-architecture/continuous-knowledge-maintenance.md)
- [`../01-product/automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)

If dashboard terminology diverges from claim states, citation rules, publication blockers, or source capability states, update the governing contract first.
