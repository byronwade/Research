# Open-source tooling landscape

Open-source tooling should accelerate Research without becoming the authority for product state. This document expands the machine-readable decisions in [`../_meta/tooling-catalog.json`](../_meta/tooling-catalog.json).

## Decision states

| State | Meaning |
|---|---|
| `adopt` | Use directly in the implementation plan. |
| `evaluate` | Build a narrow proof before accepting. |
| `isolate` | Run behind a sandbox, worker, or adapter boundary. |
| `reference` | Learn from the project but do not depend on it. |
| `defer` | Keep out of the first release. |
| `reject` | Do not use because of security, license, fit, or operational concerns. |

## Application and API

- TanStack Start owns routing, SSR, streaming, and server entrypoints.
- Hono owns the typed HTTP API boundary.
- Turborepo and pnpm own workspace orchestration.
- TypeScript strict mode is required from `foundation-01`.

The application shell may change, but domain packages must remain portable enough to extract services later.

## Interface

Recommended starting stack:

- Tailwind CSS;
- source-owned shadcn/ui components;
- Radix primitives;
- Lucide icons;
- AI Elements patterns where they fit;
- TanStack Table, Virtual, and Form;
- accessible drag-and-drop;
- resizable panels.

UI dependencies cannot define Project, Source, Document, Claim, Memory, or Publication state.

## Documents

Recommended starting stack:

- Plate for rich editing;
- CodeMirror for raw Markdown;
- `unified`, `remark`, `rehype`, and MDAST for Markdown processing;
- Shiki, Mermaid, KaTeX, and citation processors where needed;
- Pandoc, Typst, DOCX, spreadsheet, PDF, and presentation adapters after the canonical path works.

Markdown serialization and stable block IDs remain product-owned.

## Ingestion and parsing

Candidate tools:

- Uppy and tus for resumable uploads;
- Docling, Apache Tika, GROBID, PDF.js, OCR, FFmpeg, faster-whisper, Sharp, and LibreOffice for parsing and derivation;
- Playwright and Readability for web capture;
- Tree-sitter, ripgrep, ast-grep, Git, and Octokit for repository sources.

Untrusted parsing and code execution must run behind isolation and resource limits.

## Retrieval

Initial retrieval should combine:

- authorization filters;
- PostgreSQL full-text search;
- `pg_trgm`;
- pgvector;
- metadata filters;
- entity and locator filters;
- evaluation fixtures.

Vector similarity is not evidence. It only proposes candidates for verification.

## Quality and operations

Recommended starting stack:

- Biome;
- dependency-cruiser;
- Knip;
- Vitest;
- Testing Library;
- MSW;
- Testcontainers;
- Playwright;
- axe-core;
- Grafana k6;
- Promptfoo;
- OpenTelemetry;
- dependency, license, secret, SBOM, and provenance scanners.

Every executable slice should add tests and observability for the behavior it introduces.

## Review rule

Before implementation, recheck current primary documentation, license, release status, security posture, and maintenance activity. Record the review date in the implementation pull request or completion evidence.
