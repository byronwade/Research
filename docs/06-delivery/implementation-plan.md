# Implementation plan

Implementation proceeds through dependency-controlled slices. Each slice owns exact requirements, required reading, a deliverable, validation, and completion evidence.

## Sequence

1. `foundation-01` — pnpm/Turborepo, TanStack Start, Hono, TypeScript, CI, tests, and package boundaries.
2. `identity-02` — authentication, organizations, membership, Projects, and authorization.
3. `persistence-03` — Postgres schema, migrations, outbox, audit, Blob, and local development services.
4. `workspace-04` — Chat/Documents/Sources shell and navigation.
5. `uploads-05` — resumable upload and immutable SourceVersion creation.
6. `parsing-06` — PDF parsing, normalized elements, locators, and evidence viewer.
7. `indexing-07` — lexical, vector, metadata, and retrieval evaluation.
8. `chat-08` — persistent streaming chat, model registry, attachments, and tool events.
9. `grounding-09` — authorized retrieval, exact citations, claims, and evidence.
10. `documents-10` — canonical Markdown, canvas, revisions, and typed patches.
11. `vertical-11` — complete PDF-to-cited-document product proof.
12. `web-12` — discovery, capture, snapshots, and source candidates.
13. `research-13` — contracts, plans, durable Research Runs, and approvals.
14. `engines-14` — provider-neutral managed and open-source research adapters.
15. `agents-15` — bounded specialist workers and orchestrator integration.
16. `longform-16` — section contracts, consistency ledger, assembly, and audits.
17. `maintenance-17` — source synchronization, stale claims, and no-drift patches.
18. `publishing-18` — public/private projections and immutable snapshots.
19. `studio-19` — typed artifacts, canvases, and exports.
20. `github-20` — GitHub App, indexing, sandboxed changes, and draft pull requests.
21. `connectors-21` — Google, MCP, connector SDK, and additional source families.
22. `platform-22` — public API, operations, SSE, webhooks, SDKs, and MCP.
23. `memory-23` — inspectable Project memory and accepted decisions.
24. `commercial-24` — onboarding, portability, entitlements, billing, notifications, analytics, and support.
25. `enterprise-25` — SSO, SCIM, residency, accessibility, abuse controls, and recovery.
26. `conformance-26` — long-form, security, restore, cost, and launch gates.

## Completion rule

A slice moves to complete only when dependencies pass, runtime code exists, migrations and rollback are documented, automated tests pass, observability exists, relevant threat-model checks pass, and the completion ledger records the exact commit and evidence.
