# Research implementation roadmap

The roadmap is dependency-driven. A later feature is not eligible merely because it is attractive or easy to demo.

## Phase 0 — Foundation

- pnpm and Turborepo workspace.
- TanStack Start application.
- Hono API boundary.
- Strict TypeScript, linting, formatting, unit tests, browser tests, and architecture checks.
- Environment validation, migrations, observability, and CI.
- Authentication, organizations, Projects, and authorization policy.

## Phase 1 — Grounded vertical slice

Prove the smallest complete product path:

```text
Create Project
→ upload one PDF
→ create immutable SourceVersion
→ parse document structure
→ build lexical and vector indexes
→ ask a question in Chat
→ retrieve authorized evidence
→ stream an answer with exact citations
→ save an editable Markdown document
→ reopen it after refresh
```

This phase establishes the persistent chat, source ledger, evidence viewer, document canvas, and citation chain.

## Phase 2 — Deep research

- Research contracts and editable plans.
- Durable Research Runs with progress streaming, interruption, retries, and approval pauses.
- Web discovery and capture.
- Claims, evidence extraction, corroboration, contradiction, and citation verification.
- Managed research-engine adapters and Project-native workers.
- Long-form section contracts, global consistency ledgers, and document assembly.

## Phase 3 — Living documentation

- Source synchronization and immutable version diffs.
- Stale-claim detection.
- Dependency-driven document patches.
- Public/private projections and immutable publication snapshots.
- Memory, accepted decisions, open questions, and maintenance review.
- Studio artifacts and export adapters.

## Phase 4 — GitHub and connectors

- GitHub App installation and repository selection.
- Webhook synchronization and commit-pinned source versions.
- Tree, symbol, import, dependency, and documentation indexes.
- Sandboxed repository edits, validation, reviewable diffs, branches, commits, and draft pull requests.
- Google Workspace, MCP, email, collaboration, databases, and a public connector SDK.

## Phase 5 — Developer platform

- Complete asynchronous Hono API.
- Replayable server-sent events.
- Signed webhooks.
- TypeScript and Python SDKs.
- OpenAPI 3.1, Scalar documentation, CLI, MCP resources, and capability discovery.
- Idempotency, ETags, expected-base-version concurrency, budgets, usage, and cost estimates.

## Phase 6 — Commercial and enterprise readiness

- Onboarding, templates, imports, portability, and restoration.
- Entitlements, metering, quotas, credits, and billing reconciliation.
- Notifications, scheduled research, digests, and quiet hours.
- Product analytics, feedback, evaluations, experiments, and feature flags.
- SSO, SCIM, domain policy, residency, provider governance, and support operations.
- Accessibility, internationalization, abuse prevention, disaster recovery, and launch conformance.

## Launch rule

Production launch requires runtime evidence, not documentation completeness. Required gates include grounded citation quality, permission isolation, prompt-injection resistance, long-form conformance, source-change propagation, restore exercises, accessibility, cost controls, incident operations, and customer-facing product truth.
