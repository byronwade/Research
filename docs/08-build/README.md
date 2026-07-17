# Implementation blueprint

This directory translates product and architecture contracts into concrete engineering choices.

## Reference stack

- pnpm and Turborepo.
- TanStack Start and Hono.
- Tailwind CSS, shadcn/ui on Radix, AI Elements, Lucide, `cmdk`, and resizable panels.
- Plate, CodeMirror, `unified`, `remark`, and MDAST for documents.
- Vercel AI SDK, AI Gateway, Workflows, Queues, Blob, and Sandbox.
- Postgres, full-text search, `pg_trgm`, pgvector, and Redis for ephemeral coordination.
- Uppy/tus, Docling, Tika, GROBID, OCR, FFmpeg, faster-whisper, Playwright, Readability, and PDF.js.
- Tree-sitter, ripgrep, ast-grep, Git, and Octokit for repositories.
- Excalidraw, React Flow, Vega-Lite, code notebooks, and typed export adapters for Studio.
- Biome, dependency-cruiser, Knip, Vitest, Testing Library, MSW, Testcontainers, Playwright, axe-core, Promptfoo, OpenTelemetry, and supply-chain scanners.

## Build rule

Open-source tools accelerate adapters and interface primitives. They do not become the authority for Projects, permissions, Sources, Claims, Documents, Memory, Research Runs, publications, or entitlements.

## First implementation command

```bash
node scripts/agent-status.mjs
node scripts/agent-context.mjs
```

Then implement `foundation-01` only.

## First product proof

```text
Create Project
→ upload PDF
→ immutable source version
→ parse and index
→ cited Chat answer
→ editable Markdown document
→ persist and reopen
```

Do not expand connector breadth or agent complexity until that path is reliable and evaluated.
