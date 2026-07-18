# System architecture

## Runtime topology

Research starts as one TanStack Start application with a Hono API mounted under `/api`. Domain packages remain framework-independent. Durable and high-cost work is executed by Vercel Workflows and isolated workers. Optional native companion and browser extension surfaces are adapter clients over the same API and policy boundary, not separate product authorities.

```text
Browser
  ↕ streaming UI, SSE, HTTP
Native companion / browser extension
  ↕ explicit capture, command, notification, and deep-link APIs
TanStack Start + Hono
  ↕ domain services and policy
Postgres / Blob / cache / search
  ↕ workflows, queues, and workers
AI Gateway / parsers / browsers / connectors / research engines
```

## Frontend

- TanStack Router, Query, Form, Table, and Virtual.
- Tailwind CSS and shadcn/ui on Radix.
- AI Elements for AI-native message parts, citations, plans, tools, artifacts, and attachments.
- A restrained ChatGPT-inspired interaction model without copied branding or trade dress.
- Persistent, resumable streams, Focus State, Resume Digests, Spatial Workbench Worksets, progressive pane hydration, and optimistic local interactions.

## API

Hono exposes internal and public routes using shared schemas. Mutations support idempotency keys. Versioned resources use ETags and expected-base-version checks. Long-running operations return `202 Accepted` and an Operation resource with polling, SSE, cancellation, approvals, usage, and errors.

## Background execution

- Workflows: research runs, source ingestion, connector synchronization, document maintenance, publication, GitHub edits, imports, and billing reconciliation.
- Queues: fan-out parsing, embedding, index updates, webhook processing, notifications, resume digest rebuilds, spatial layout invalidations, and export rendering.
- Sandbox: untrusted parsing, code execution, repository validation, archive expansion, and risky transformations.

## Observability

Every request and workflow carries organization, Project, user, feature, run, model, provider, operation, Workset, pane, and layout-suggestion identifiers where applicable. Logs and traces redact source content by default. Cost, tokens, latency, retrieval quality, citation quality, workflow retries, layout restore quality, pane hydration, and user corrections are separately measurable.

## Extraction rule

A package or worker becomes a separate deployed service only when security, residency, scaling, language runtime, or failure-isolation evidence requires it. The modular monolith avoids premature distributed complexity while preserving clean extraction ports.
