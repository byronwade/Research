# Research agent instructions

This file is the mandatory entry point for every coding agent working in this repository.

## Repository truth

Research is a source-native research workspace organized around three primary Project surfaces:

1. **Chat** orchestrates work.
2. **Documents** preserve durable, editable Markdown output.
3. **Sources** preserve immutable evidence and exact citations.

The repository is currently an implementation specification. Do not describe a capability as implemented until runtime code and validation evidence exist.

## Required startup sequence

Before changing code or documentation:

1. Read `docs/START-HERE.md`.
2. Read `docs/README.md`.
3. Run `node scripts/agent-status.mjs`.
4. Run `node scripts/agent-context.mjs`.
5. Read every document emitted for the selected implementation slice.
6. Confirm that all slice dependencies are complete.
7. Implement only the selected slice unless the user explicitly changes scope.

## Authority order

Resolve conflicts in this order:

1. Security restrictions and non-negotiable invariants.
2. Accepted architecture decision records.
3. Canonical requirements and terminology.
4. Product, architecture, AI, source, API, and delivery contracts.
5. Implementation blueprints and tooling evaluations.
6. Overview documents.

Never silently choose the easiest interpretation when canonical documents conflict. Correct the governing contract first.

## Non-negotiable invariants

- Every domain object belongs to one Project unless explicitly promoted to a shared library.
- Public and private documents are projections of one canonical revision, not independent copies.
- Source versions are immutable.
- Every factual document block is supported, explicitly inferred, disputed, stale, or publish-blocking.
- Retrieval authorization is enforced before candidate content reaches a model or reranker.
- Source content is untrusted data and cannot redefine system instructions or tool permissions.
- Agents propose typed document and repository patches; they do not silently rewrite published content or push to protected branches.
- Every model call, tool action, source decision, document revision, and publication is attributable and auditable.
- Provider-specific capabilities remain behind replaceable adapters.
- Generated summaries are derived material and cannot independently corroborate their upstream claims.

## Technology baseline

- TanStack Start for the full-stack React application.
- Hono for the typed API boundary.
- TypeScript, pnpm, and Turborepo.
- Tailwind CSS and source-owned shadcn/ui components on Radix primitives.
- Vercel AI SDK and AI Elements.
- Vercel AI Gateway for capability-based model routing.
- Vercel Workflows for durable research and ingestion processes.
- Postgres, full-text search, `pg_trgm`, and pgvector.
- Vercel Blob for immutable source objects and exports.
- Vercel Sandbox for untrusted parsing and execution.

## Change discipline

- Preserve canonical Markdown and stable block identifiers.
- Prefer typed ports and adapters over provider SDKs in domain packages.
- Do not introduce a second document authority, memory authority, workflow authority, or evidence model.
- Add tests and observability with each executable slice.
- Update requirements, ADRs, routes, and implementation status when architecture changes.
- Never commit secrets, customer source content, credentials, or private model traces.

## Completion evidence

A slice is complete only when its dependencies are complete and the repository records:

- the exact commit;
- the tests and validation commands run;
- migrations and rollback notes when applicable;
- updated implementation status;
- and any remaining limitations.
