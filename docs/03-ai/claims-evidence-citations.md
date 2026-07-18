# Claims, evidence, and citations

The evidence layer sits between retrieval and generated prose.

```text
SourceVersion → EvidenceSpan → Claim → DocumentBlock
```

## Claim states

- Supported
- Corroborated
- Disputed
- Inferred
- User-provided premise
- Unsupported
- Stale
- Removed
- Unresolved

## Evidence relationships

- Direct support
- Indirect support
- Corroboration
- Contradiction
- Background context

## Evidence span

An EvidenceSpan stores a source-version identifier, exact locator, extracted text or structured value, content hash, retrieval time, parser provenance, language and direction metadata, and confidence. Locators may include a PDF page and bounding box, line range, timecode, spreadsheet range, repository path and commit SHA, message identifier, or web snapshot selector.

## Citation rules

- A citation attaches to the smallest claim or sentence it supports.
- The source must entail the attached assertion, not merely discuss the topic.
- Mutable URLs are accompanied by immutable snapshots and retrieval metadata.
- Derived summaries link back to upstream evidence and do not count as independent corroboration.
- Translated excerpts, localized summaries, generated alt text, captions, chart alternatives, and accessible-output manifests are derived material unless a separate authoritative source supports them.
- Citation display may be localized, but citation support remains tied to the original SourceVersion, EvidenceSpan, source language, and exact locator.
- Multiple citations are not treated as independent when they originate from the same underlying source.
- Unsupported factual blocks prevent publication unless explicitly allowed and labeled.

## Verification

Automated audits test entailment, attribution, source independence, contradiction, freshness, numeric consistency, entity consistency, permission visibility, and locator validity. High-risk claims may require a separate verifier model, authoritative source class, or human approval.

Model council can add disagreement, missing-evidence, and verifier notes to claims, but it cannot mark a claim supported without authorized evidence. See [`model-council-and-disagreement-resolution.md`](model-council-and-disagreement-resolution.md).

## Reuse and maintenance

Claims can support multiple documents and artifacts. When evidence changes, the claim is revalidated once and dependent outputs are traversed through the dependency graph. This prevents repeated, inconsistent reinterpretation of the same evidence.

## Trust surface

The Trust dashboard and evidence coverage map are projections of this evidence model. They may summarize claim states, citation support, source coverage, freshness, and publication blockers, but they cannot invent a separate score or parallel evidence authority. Source-change maintenance uses the same Claim states and EvidenceSpan lineage when proposing patches; see [`../01-product/source-change-maintenance-and-living-docs.md`](../01-product/source-change-maintenance-and-living-docs.md) and [`../01-product/trust-dashboard-and-evidence-coverage.md`](../01-product/trust-dashboard-and-evidence-coverage.md).
