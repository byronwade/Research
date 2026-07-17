# Research

Research is a source-native workspace for turning conversations, files, connected systems, and public-web research into durable, structured documentation.

The product is intentionally simple:

1. A user creates a **Project**.
2. The Project contains **Chat**, **Documents**, and **Sources**.
3. Chat orchestrates research and proposes edits.
4. Documents are an ever-growing, organized set of logical `.md` files that users and models can edit through a canvas or raw Markdown view.
5. Sources preserve the exact evidence used to create every factual claim.
6. Public and private documentation are deterministic views of the same canonical content and evidence graph, so they cannot silently drift apart.

Research is designed for researchers, technical teams, content-intensive workflows, and developers who need high-quality context that humans and language models can both understand.

## Product thesis

Chat should not be the final resting place for important work. Chat is the orchestration interface. The durable output is a versioned body of documentation backed by inspectable sources, claims, and citations.

The core relationship is:

```text
Project
├── Chat
├── Documents
│   ├── Private projection
│   └── Public projection
├── Sources and immutable source versions
└── Contextual systems
    ├── Studio artifacts and canvases
    ├── Claims and evidence spans
    └── Research runs and audit history
```

A factual document block must be traceable through a claim to one or more exact evidence spans in immutable source versions.

## Technology direction

The implementation target is a modular TypeScript monolith deployed on Vercel:

- **TanStack Start** for the full-stack React application, routing, SSR, streaming, and server entrypoints.
- **Hono** for the typed domain API mounted under `/api` in the same deployable application.
- **Vercel AI SDK 6** for streaming chat, structured output, tool calling, agents, and generative UI.
- **Vercel AI Gateway** for model access, routing, fallbacks, spend controls, embeddings, reranking, and observability.
- **Vercel Workflows** for durable multi-step research, source processing, approvals, and document-update runs.
- **Postgres** for transactional data, permissions, document structure, claims, evidence, and hybrid search metadata.
- **Vercel Blob** for immutable originals, snapshots, media derivatives, and exports.
- **pgvector plus full-text search** for hybrid retrieval.
- **Vercel Sandbox** for untrusted parsing, archive expansion, media processing, and code execution.

The first deployment remains one application and one API surface. Domain packages are separated internally so individual services can be extracted later without redesigning the product.

## Open-source acceleration

The implementation blueprint maintains a machine-validated tooling catalog and records explicit adopt, isolated, evaluate, reference, defer, or reject decisions. The highest-leverage selections are:

- **Interface:** Tailwind, source-owned shadcn/ui on Radix, Lucide, AI Elements, Plate, CodeMirror, TanStack Table/Virtual/Form, resizable panels, and accessible drag-and-drop.
- **Ingestion:** Uppy/tus, Docling, Apache Tika, GROBID, Tesseract, faster-whisper, FFmpeg, Sharp, LibreOffice, Playwright, Readability, and PDF.js.
- **Retrieval and code:** PostgreSQL full-text/`pg_trgm`, pgvector, Tree-sitter, ripgrep, ast-grep, Git, and Octokit.
- **Research engines:** OpenAI/Gemini/Tavily/Perplexity adapters plus evaluated GPT Researcher, Open Deep Research, STORM, PaperQA2, DeerFlow, and scholarly workers.
- **Studio/canvas:** Plate, Excalidraw, React Flow, Vega-Lite, CodeMirror/Monaco, media viewers, Sandpack/JupyterLite, and typed export adapters.
- **Research output:** unified/remark/rehype, Citation.js, Shiki, Mermaid, KaTeX, Pandoc, Typst, PptxGenJS, DOCX, spreadsheet, and PDF adapters.
- **Quality:** Biome, dependency-cruiser, Knip, Vitest, Testing Library, MSW, Testcontainers, Playwright, axe-core, Promptfoo, OpenTelemetry, and supply-chain scanners.
- **Product operations:** OpenFeature as the stable flag interface, with OpenMeter/Lago, Novu, PostHog, Unleash, and Better Auth enterprise identity capabilities evaluated behind application-owned ports.

The machine-readable decision authority is [`docs/_meta/tooling-catalog.json`](docs/_meta/tooling-catalog.json); the implementation rationale and sequence are in [`docs/08-build/`](docs/08-build/README.md).

## Model strategy

Users may select any model allowed by the workspace. The default is **Auto**, resolved by a capability-based model registry rather than hardcoded UI logic.

As of July 16, 2026, OpenAI documents the GPT-5.6 family with `gpt-5.6-sol` as its flagship capability model, while Vercel AI Gateway exposes a dynamic model catalog. Research therefore synchronizes available Gateway models at runtime and maps product roles such as `research-frontier`, `fast-extractor`, and `vision-parser` to currently available model IDs. Provider-specific capabilities are optional adapters, never architectural dependencies.

## Documentation map

Start here:

- [Product specification](PRODUCT.md)
- [System architecture](ARCHITECTURE.md)
- [Delivery roadmap](ROADMAP.md)
- [Documentation index](docs/README.md)
- [AI and coding-agent entry point](docs/START-HERE.md)
- [Agent instructions](AGENTS.md)
- [Current implementation status](docs/06-delivery/implementation-status.md)
- [Security policy](SECURITY.md)

Key design documents:

- [Gemini Notebook capability benchmark](docs/00-foundation/notebooklm-capability-benchmark.md)
- [Project workspace](docs/01-product/project-workspace.md)
- [Sources experience](docs/01-product/sources.md)
- [Documents and canvas](docs/01-product/documents-and-canvas.md)
- [Public/private publishing](docs/01-product/public-private-publishing.md)
- [Canonical content and no-drift architecture](docs/02-architecture/canonical-content-and-no-drift.md)
- [Research orchestrator](docs/03-ai/research-orchestrator.md)
- [Research engine adapters](docs/03-ai/research-engine-adapters.md)
- [Multi-agent orchestration](docs/03-ai/multi-agent-orchestration.md)
- [Continuous knowledge maintenance](docs/02-architecture/continuous-knowledge-maintenance.md)
- [Developer platform API](docs/02-architecture/developer-platform-api.md)
- [Claims, evidence, and citations](docs/03-ai/claims-evidence-citations.md)
- [Ingestion pipeline](docs/04-sources/ingestion-pipeline.md)
- [Threat model](docs/05-security/threat-model.md)
- [Implementation plan](docs/06-delivery/implementation-plan.md)
- [Implementation blueprint](docs/08-build/README.md)
- [Open-source tooling landscape](docs/08-build/open-source-tooling-landscape.md)
- [UI system and ChatGPT interaction patterns](docs/08-build/ui-system-and-chatgpt-patterns.md)
- [Deep research and long-form generation](docs/08-build/deep-research-and-long-form-generation.md)
- [GitHub integration and repository editing](docs/08-build/github-integration-and-repository-editing.md)
- [Gemini Notebook feature teardown](docs/00-foundation/notebooklm-feature-teardown.md)
- [Gemini Notebook capability benchmark](docs/00-foundation/notebooklm-capability-benchmark.md)
- [Research engine fabric](docs/03-ai/research-engine-fabric.md)
- [Multi-agent research control plane](docs/03-ai/multi-agent-research-control-plane.md)
- [Research Studio and canvas tooling](docs/08-build/research-studio-and-canvas-tooling.md)
- [Living dependency graph](docs/02-architecture/living-dependency-graph.md)
- [Developer platform API and SDK](docs/08-build/developer-platform-api-sdk.md)
- [Open-source research platform catalog](docs/08-build/open-source-research-platform-catalog.md)
- [Onboarding and Project portability](docs/01-product/onboarding-activation-and-imports.md)
- [Commercial control plane](docs/02-architecture/entitlements-metering-and-billing.md)
- [Product analytics and release controls](docs/02-architecture/product-analytics-feedback-and-experimentation.md)
- [Notifications and scheduled automation](docs/01-product/notifications-and-scheduled-automation.md)
- [Rights, AI governance, and residency](docs/05-security/content-rights-ai-governance-and-data-residency.md)
- [Product-readiness gap audit](docs/06-delivery/product-readiness-gap-audit.md)

## Repository status

This repository is an implementation-ready specification and starter structure. It includes the research product contract, open-source tooling catalog, ChatGPT-pattern interface, ingestion/indexing/GitHub/memory/long-form workflows, public developer platform, and a machine-validated product-readiness gap register covering onboarding, portability, commercial controls, product intelligence, notifications, governance, enterprise identity, residency, and customer operations. Code should be added only when it conforms to those contracts or updates them through an Architecture Decision Record.

Coding agents enter through [`AGENTS.md`](AGENTS.md) and [`docs/START-HERE.md`](docs/START-HERE.md), then run `node scripts/agent-status.mjs` and `node scripts/agent-context.mjs`. The machine-validated build plan owns dependency order and exact primary requirement coverage; the implementation-status ledger prevents documentation placeholders from being reported as working software.

## Non-negotiable invariants

1. Every domain object belongs to exactly one Project unless explicitly promoted to a shared library.
2. Public and private documents are projections of one canonical revision, not independently edited copies.
3. Source versions are immutable.
4. Every factual document block has support, an explicit inference label, or a publish-blocking unsupported state.
5. Retrieval permissions are enforced before search results reach a model.
6. Source content is untrusted data and can never redefine system instructions or tool permissions.
7. Agents propose document patches; they do not silently rewrite published content.
8. Every model call, tool action, source decision, and publication is attributable and auditable.
9. User uploads are never silently deleted by an agent.
10. Provider-specific features are isolated behind adapters.
11. Source acquisition and publication require an attributable rights decision and takedown path.
12. Entitlement, budget, usage, and billing decisions remain application-owned even when external providers are used.
13. Product analytics and support telemetry do not become shadow stores of prompts, source text, document bodies, or credentials.
14. Support access is metadata-first, time-bound, least-privilege, and audited; operators do not receive ambient tenant access.

## Official references

The detailed reference list is maintained in [docs/07-reference/official-references.md](docs/07-reference/official-references.md). Primary sources include the current TanStack Start, Hono, Vercel AI SDK, AI Gateway, Workflows, OpenAI Deep Research, GPT-5.6, Gemini Notebook (formerly NotebookLM), and Claude Research documentation.
