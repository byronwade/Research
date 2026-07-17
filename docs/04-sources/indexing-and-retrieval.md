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

## Retrieval output

A retrieval result distinguishes:

- context material;
- direct evidence;
- corroborating evidence;
- contradictory evidence;
- examined but unused sources;
- and sources excluded by policy.

## Quality evaluation

Evaluate candidate recall, reranking precision, evidence-span accuracy, citation entailment, source independence, freshness, latency, and cost on versioned fixtures. Vector similarity alone is not a success metric.

## Caching

Cache immutable parsing derivatives, embeddings, and identical structured extraction when safe. Do not cache user-specific conversations or permission-sensitive context across principals. Cache keys include source-version IDs, parser or model version, configuration, and policy scope.
