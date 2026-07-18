# Implementation blueprint

This directory translates product and architecture contracts into concrete engineering choices.

## Reference stack

- pnpm and Turborepo.
- TanStack Start and Hono.
- Tailwind CSS, shadcn/ui on Radix, AI Elements, Lucide, `cmdk`, and resizable panels.
- TanStack Virtual, persisted split-pane state, roving focus patterns, and accessible resize controls for Spatial Workbench Worksets.
- Service workers, Cache API, IndexedDB, OPFS where supported, and browser storage adapters only through the local-cache policy contract.
- Optional browser extension and desktop companion adapters only through the native companion policy contract; the web app remains the primary implementation target until runtime evidence justifies companion shipping.
- Preference Center controls, adaptive interface profiles, and model-context preference summaries only through the adaptive preference policy contract.
- Plate, CodeMirror, `unified`, `remark`, and MDAST for documents.
- Vercel AI SDK, AI Gateway, Workflows, Queues, Blob, and Sandbox.
- Postgres, full-text search, `pg_trgm`, pgvector, and Redis for ephemeral coordination.
- Uppy/tus, Docling, Tika, GROBID, OCR, FFmpeg, faster-whisper, Playwright, Readability, and PDF.js.
- Tree-sitter, ripgrep, ast-grep, Git, and Octokit for repositories.
- Excalidraw, React Flow, Vega-Lite, code notebooks, and typed export adapters for Studio.
- Biome, dependency-cruiser, Knip, Vitest, Testing Library, MSW, Testcontainers, Playwright, axe-core, Grafana k6, Promptfoo, OpenTelemetry, and supply-chain scanners.

## Build rule

Open-source tools accelerate adapters and interface primitives. They do not become the authority for Projects, permissions, Sources, Claims, Documents, Memory, Research Runs, Worksets, native companion grants, preferences, local caches, offline drafts, reversible work, publications, or entitlements.

## First implementation command

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
```

Then implement `foundation-01` only.

`foundation-01` is governed by `FND-001`, `FND-002`, and `FND-003`: build the reproducible workspace, idempotent local bootstrap, deterministic provider simulators, quality gates, and supply-chain provenance before beginning customer-visible workflows.

The concrete runtime scaffold contract is [`foundation-runtime-scaffold.md`](foundation-runtime-scaffold.md). A visible app shell is not enough; the slice must also establish package boundaries, typed configuration, simulators, generated-file checks, root commands, CI, and supply-chain gates.

## First product proof

```text
Create Project
→ upload PDF
→ immutable source version
→ parse and index
→ cited Chat answer
→ restore a projection-safe Workset around the answer and document
→ editable Markdown document
→ persist and reopen
```

Do not expand connector breadth or agent complexity until that path is reliable and evaluated.

## Build blueprints

- [`foundation-runtime-scaffold.md`](foundation-runtime-scaffold.md)
- [`open-source-tooling-landscape.md`](open-source-tooling-landscape.md)
- [`ui-system-and-chatgpt-patterns.md`](ui-system-and-chatgpt-patterns.md)
- [`deep-research-and-long-form-generation.md`](deep-research-and-long-form-generation.md)
- [`github-integration-and-repository-editing.md`](github-integration-and-repository-editing.md)
- [`research-studio-and-canvas-tooling.md`](research-studio-and-canvas-tooling.md)
- [`developer-platform-api-sdk.md`](developer-platform-api-sdk.md)
- [`open-source-research-platform-catalog.md`](open-source-research-platform-catalog.md)
