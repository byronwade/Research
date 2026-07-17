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

An EvidenceSpan stores a source-version identifier, exact locator, extracted text or structured value, content hash, retrieval time, parser provenance, and confidence. Locators may include a PDF page and bounding box, line range, timecode, spreadsheet range, repository path and commit SHA, message identifier, or web snapshot selector.

## Citation rules

- A citation attaches to the smallest claim or sentence it supports.
- The source must entail the attached assertion, not merely discuss the topic.
- Mutable URLs are accompanied by immutable snapshots and retrieval metadata.
- Derived summaries link back to upstream evidence and do not count as independent corroboration.
- Multiple citations are not treated as independent when they originate from the same underlying source.
- Unsupported factual blocks prevent publication unless explicitly allowed and labeled.

## Verification

Automated audits test entailment, attribution, source independence, contradiction, freshness, numeric consistency, entity consistency, permission visibility, and locator validity. High-risk claims may require a separate verifier model, authoritative source class, or human approval.

## Reuse and maintenance

Claims can support multiple documents and artifacts. When evidence changes, the claim is revalidated once and dependent outputs are traversed through the dependency graph. This prevents repeated, inconsistent reinterpretation of the same evidence.
