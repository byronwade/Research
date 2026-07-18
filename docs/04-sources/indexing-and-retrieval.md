# Indexing and retrieval

Retrieval is hybrid, permission-aware, and evidence-oriented.

## Candidate pipeline

```text
Query understanding and decomposition
→ authorization and source-status filtering
→ exact metadata and identifier lookup
→ PostgreSQL full-text search
→ pg_trgm fuzzy matching
→ pgvector semantic retrieval
→ entity and relationship retrieval
→ scholarly or repository-specific retrieval
→ reciprocal-rank fusion
→ bounded reranking
→ exact EvidenceSpan selection
→ context assembly
```

## Index units

Indexes preserve document structure and source locators. Units may include sections, paragraphs, tables, cells, figures, transcript segments, code symbols, definitions, references, issues, commits, and messages. Chunking never discards the ability to open the exact original location.

## Permission boundary

Authorization filters execute before candidate text is returned to the model or external reranker. Cross-tenant caches and embeddings are prohibited. Source revocation invalidates affected context packs and derived access.

Authorization also executes before language detection, translation, query expansion, embedding, cross-language reranking, model context assembly, or support diagnostics. Cross-language retrieval records query language, source language filters, translation route, unsupported-language limitations, and whether translated material is used only for discovery or also for user-visible presentation.

## Retrieval output

A retrieval result distinguishes:

- context material;
- direct evidence;
- corroborating evidence;
- contradictory evidence;
- examined but unused sources;
- and sources excluded by policy.

## Context packs

Retrieval may assemble context material into a versioned context pack for a model, agent, MCP client, SDK user, or human handoff. Pack assembly uses the same authorization-before-retrieval boundary, records source-version IDs and exclusions, and is invalidated by source revocation, policy change, memory deletion, or document revision changes. See [`../02-architecture/context-packs-and-agent-handoff.md`](../02-architecture/context-packs-and-agent-handoff.md).

## Quality evaluation

Evaluate candidate recall, reranking precision, evidence-span accuracy, citation entailment, source independence, freshness, latency, and cost on versioned fixtures. Vector similarity alone is not a success metric.

International retrieval evaluations include Unicode, accent, CJK, mixed-direction, RTL, translated-query, untranslated-source, locale-specific tokenization, and unsupported-language fixtures. Translated query matches are not counted as citation support unless the selected EvidenceSpan still entails the claim in the authorized source context.

## Caching

Cache immutable parsing derivatives, embeddings, and identical structured extraction when safe. Do not cache user-specific conversations or permission-sensitive context across principals. Cache keys include source-version IDs, parser or model version, configuration, and policy scope.
