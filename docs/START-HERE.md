# Start here

This is the canonical navigation entry for humans and coding agents building Research.

## Product in one sentence

Research turns Project conversations and authorized sources into durable, continuously maintained Markdown documentation backed by exact evidence.

## Primary user model

```text
Project
├── Chat
├── Documents
└── Sources
```

Chat is the control plane. Documents are the durable product. Sources are the evidence system. Studio, Evidence, Memory, Research Runs, GitHub, Activity, Publish, and Settings are contextual views around those three primary surfaces.

## Read in this order

### Foundation

1. [`../PRODUCT.md`](../PRODUCT.md)
2. [`../ARCHITECTURE.md`](../ARCHITECTURE.md)
3. [`00-foundation/product-brief.md`](00-foundation/product-brief.md)
4. [`00-foundation/product-principles.md`](00-foundation/product-principles.md)

### Product surfaces

5. [`01-product/project-workspace.md`](01-product/project-workspace.md)
6. [`01-product/chat.md`](01-product/chat.md)
7. [`01-product/documents-and-canvas.md`](01-product/documents-and-canvas.md)
8. [`01-product/sources.md`](01-product/sources.md)
9. [`01-product/public-private-publishing.md`](01-product/public-private-publishing.md)
10. [`01-product/research-studio.md`](01-product/research-studio.md)

### Architecture and AI

11. [`02-architecture/system-architecture.md`](02-architecture/system-architecture.md)
12. [`02-architecture/canonical-content-and-no-drift.md`](02-architecture/canonical-content-and-no-drift.md)
13. [`02-architecture/domain-model.md`](02-architecture/domain-model.md)
14. [`03-ai/research-orchestrator.md`](03-ai/research-orchestrator.md)
15. [`03-ai/claims-evidence-citations.md`](03-ai/claims-evidence-citations.md)
16. [`03-ai/multi-agent-orchestration.md`](03-ai/multi-agent-orchestration.md)
17. [`03-ai/project-memory.md`](03-ai/project-memory.md)

### Sources, security, and delivery

18. [`04-sources/ingestion-pipeline.md`](04-sources/ingestion-pipeline.md)
19. [`04-sources/indexing-and-retrieval.md`](04-sources/indexing-and-retrieval.md)
20. [`04-sources/github-integration.md`](04-sources/github-integration.md)
21. [`05-security/threat-model.md`](05-security/threat-model.md)
22. [`05-security/data-governance.md`](05-security/data-governance.md)
23. [`06-delivery/implementation-plan.md`](06-delivery/implementation-plan.md)
24. [`06-delivery/implementation-status.md`](06-delivery/implementation-status.md)
25. [`08-build/README.md`](08-build/README.md)

## Agent workflow

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
```

The first command identifies the next dependency-eligible implementation slice. The second prints the exact documents and requirements needed for that slice.

## Current implementation truth

The specification is mature; the runtime is not yet scaffolded. The first executable slice is `foundation-01`, which creates the pnpm/Turborepo workspace, TanStack Start application, Hono API boundary, strict TypeScript configuration, quality gates, and CI.

The first product proof after foundation work is deliberately narrow:

```text
Create Project
→ upload one PDF
→ create an immutable source version
→ parse and index it
→ ask a question in Chat
→ retrieve exact evidence
→ stream a cited answer
→ create an editable Markdown document
→ persist and reopen it
```

Do not begin with broad connector coverage, an uncontrolled agent swarm, dozens of artifact types, billing, or enterprise administration before this grounded vertical path works.
