# Product brief

## Problem

Research work is fragmented across chat histories, notebooks, files, web tabs, repositories, cloud documents, and one-off reports. Existing AI research products often provide strong answers but weak durability: source state is difficult to inspect, citations may not survive source changes, generated prose becomes detached from evidence, and public/private copies drift.

## Solution

Research creates a Project containing Chat, Documents, and Sources. Chat orchestrates questions and workflows. Sources preserve immutable versions and exact evidence. Documents form an organized Markdown knowledge base that users and agents can edit. Research Runs can discover external material, extract claims, detect contradictions, draft structured output, and propose reviewable updates.

## Differentiator

The key architecture is not retrieval-augmented chat. It is a traceable knowledge-maintenance chain:

```text
SourceVersion → EvidenceSpan → Claim → DocumentBlock → PublicationSnapshot
```

When a source changes or a feature disappears, dependent claims are revalidated and affected documents receive the smallest safe patch. Historical revisions remain immutable.

## Initial audience

- Researchers and analysts.
- Software teams creating project context and technical documentation.
- Organizations maintaining living policy, product, or operational knowledge.
- Developers consuming research through an API.

## First release

The first release supports Projects, persistent Chat, PDFs and web sources, exact citations, hybrid retrieval, editable Markdown documents, source controls, saved Research Runs, and export. Breadth follows only after citation quality and the grounded vertical slice are proven.

## Quality bar

Research must make a quick cited answer feel conversational while also supporting a 40,000–60,000-word, multi-document artifact that can be reopened, edited, audited, exported, and maintained when sources change.
