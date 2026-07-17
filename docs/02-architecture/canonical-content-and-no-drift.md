# Canonical content and no-drift architecture

Research prevents drift by modeling dependencies explicitly instead of maintaining disconnected generated copies.

## Dependency chain

```text
Source
→ SourceVersion
→ ParsedElement
→ EvidenceSpan
→ ClaimEvidence
→ Claim
→ DocumentBlock / MemoryItem / ArtifactComponent
→ DocumentRevision / ArtifactVersion
→ PublicationSnapshot / Export
```

## Canonical rules

- Source versions and publication snapshots are immutable.
- Documents have one canonical revision history.
- Public and private outputs are projections from canonical blocks and claims.
- Editor state is a view; deterministic Markdown is the durable interchange form.
- Memory records accepted knowledge and decisions with provenance; it does not replace evidence.
- Artifacts reuse claims rather than copying unsupported prose.

## Change propagation

When an external object changes:

1. Create a new SourceVersion.
2. Compute structural and semantic differences.
3. Map previous locators where possible.
4. Revalidate affected ClaimEvidence.
5. Mark dependent claims supported, weakened, contradicted, stale, removed, or unresolved.
6. Traverse dependent blocks, memory items, artifacts, and publications.
7. Generate the smallest safe typed patches.
8. Show what changed, why, and which source caused it.
9. Commit approved revisions.
10. Preserve historical revisions and publication snapshots.

## Feature removal

If a repository, specification, or product source removes a feature, the system must not continue describing it from old summaries. Every dependent claim and block becomes a maintenance candidate. Depending on evidence, the patch may remove the reference, mark it historical, replace it, or open an unresolved question.

## Conflict behavior

Contradictory sources are never silently blended. Claims can hold direct support, indirect support, corroboration, contradiction, and context relationships. The document may present the dispute, choose an authority according to Project policy, or block publication pending review.
