# Living dependency graph

The dependency graph explains why a document says what it says. It is the backbone for citation inspection, maintenance, publication safety, deletion, restore, and audits.

The user-facing source-change maintenance surface is specified in [`../01-product/source-change-maintenance-and-living-docs.md`](../01-product/source-change-maintenance-and-living-docs.md), with architecture in [`continuous-knowledge-maintenance.md`](continuous-knowledge-maintenance.md). The user-facing Project Atlas and Impact Reports are specified in [`../01-product/project-atlas-and-impact-navigator.md`](../01-product/project-atlas-and-impact-navigator.md), with architecture in [`project-map-and-impact-analysis.md`](project-map-and-impact-analysis.md). Atlas is a projection over this graph and related canonical records, not a replacement for them.

## Graph authority

Postgres owns graph metadata. Blob owns immutable object payloads. Derived indexes accelerate retrieval but do not become the authority for evidence or dependency state.

## Core nodes

| Node | Purpose |
|---|---|
| `Project` | Tenant-scoped workspace boundary. |
| `Source` | User-authorized external object or collection. |
| `SourceVersion` | Immutable snapshot, upload, commit, or synchronized version. |
| `ParsedElement` | Normalized extracted structure from a source version. |
| `EvidenceSpan` | Exact citable locator over a source version or parsed element. |
| `Claim` | Factual assertion with lifecycle state. |
| `ClaimEvidence` | Relationship between claim and supporting, disputing, or inferred evidence. |
| `DocumentBlock` | Stable Markdown block with citations and dependencies. |
| `MemoryItem` | Accepted decision or reusable Project context. |
| `ArtifactComponent` | Typed Studio element backed by evidence or data. |
| `PublicationSnapshot` | Immutable public/private projection snapshot. |
| `Export` | Generated file with source revision and policy metadata. |

## Edge types

- `derived_from`
- `supports`
- `disputes`
- `infers`
- `cites`
- `renders`
- `publishes`
- `exports`
- `replaces`
- `redacts`
- `depends_on`
- `invalidates`

Edges carry provenance, actor, timestamp, policy scope, source version, and confidence where applicable.

## Permission model

Graph traversal is policy-filtered. A user or model may only see nodes and edges allowed by Project membership, source permission, publication policy, connector scope, and provider policy.

Unauthorized nodes must not leak through:

- search result counts;
- embeddings;
- generated summaries;
- analytics;
- traces;
- support tooling;
- public publication metadata.

## Mutation rules

- Source versions are immutable.
- Parsed elements are derived and reproducible.
- Claims change state through explicit evidence transitions.
- Document blocks change through revisions and typed patches.
- Publications create immutable snapshots.
- Deletes create tombstones and suppression records before physical cleanup.

## Query patterns

The implementation must support:

- "show evidence for this sentence";
- "show all documents affected by this source change";
- "show public outputs that cite this source";
- "show claims that became stale after this date";
- "show all derived artifacts to delete or suppress";
- "show source versions used by this release candidate";
- "show unsupported claims blocking publication".
- "show source-change maintenance blockers and pending patch proposals".
- "show trust blockers and evidence coverage for this document, artifact, or Project".
- "show a bounded Atlas neighborhood around this resource".
- "show the path between two Project resources".
- "show an Impact Report before this change proceeds".

## Operational controls

The graph participates in:

- trust dashboard and evidence coverage summaries;
- deletion propagation;
- restore suppression;
- publication withdrawal;
- incident scoping;
- support diagnostics;
- cost attribution;
- Project Atlas local neighborhoods and Impact Reports;
- source-change maintenance runs, ClaimRevalidations, and patch proposal review;
- data export;
- customer portability.

## Launch evidence

Product-readiness tests must prove that graph traversal remains correct under:

- source replacement;
- source revocation;
- parser rerun;
- document branch and merge;
- publication snapshot and withdrawal;
- backup restore;
- cross-tenant access attempts;
- partial maintenance failure.
- Atlas path query or impact report generation under redacted, stale, or partial graph state.
