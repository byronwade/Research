# Implementation plan

Implementation proceeds through dependency-controlled slices. Each slice owns exact requirements, required reading, a deliverable, validation, and completion evidence.

## Sequence

1. `foundation-01` — `FND-001` through `FND-003`: pinned pnpm/Turborepo workspace, TanStack Start, Hono, strict TypeScript, package boundaries, deterministic bootstrap, provider simulators, CI, tests, supply-chain gates, and provenance evidence.
2. `identity-02` — authentication, organizations, membership, Projects, and authorization.
3. `persistence-03` — Postgres schema, migrations, outbox, audit, Blob, and local development services.
4. `workspace-04` — Chat/Documents/Sources shell, Spatial Workbench, Worksets, command center, keyboard workflows, focus continuity, resume digests, device capability labels, offline-aware draft and reconnect status, native companion entry points and grant states, adaptive preference controls, Project Operating Layer Work Packets, next safe actions, Project Health Console, delegated-trust approval surfaces, accessible navigation, and locale-aware shell foundations.
5. `uploads-05` — resumable upload and immutable SourceVersion creation.
6. `parsing-06` — PDF parsing, normalized elements, locators, and evidence viewer.
7. `indexing-07` — lexical, vector, metadata, and retrieval evaluation.
8. `chat-08` — persistent streaming chat, model registry, attachments, and tool events.
9. `grounding-09` — authorized retrieval, exact citations, claims, and evidence.
10. `documents-10` — canonical Markdown, canvas, revisions, collaboration anchors, reviews, decisions, and typed patches.
11. `vertical-11` — complete PDF-to-cited-document product proof.
12. `web-12` — discovery, capture, snapshots, and source candidates.
13. `research-13` — contracts, plans, durable Research Runs, and approvals.
14. `engines-14` — provider-neutral managed and open-source research adapters.
15. `agents-15` — bounded specialist workers and orchestrator integration.
16. `longform-16` — section contracts, consistency ledger, assembly, and audits.
17. `maintenance-17` — source synchronization, stale claims, and no-drift patches.
18. `publishing-18` — public/private projections, collaboration redaction, and immutable snapshots.
19. `studio-19` — typed artifacts, canvases, and exports.
20. `github-20` — GitHub App, indexing, sandboxed changes, and draft pull requests.
21. `connectors-21` — Google, MCP, connector SDK, and additional source families.
22. `platform-22` — public API, operations, SSE, webhooks, SDKs, MCP, command catalog discovery, Spatial Workbench and Workset resources, device continuity and sync-conflict resources, native companion install/grant/capture/deep-link resources, preference and adaptive interface resources, Work Packet and next-action resources, Project Health and repair resources, abuse-decision resources, approval and delegated-trust resources, and automation outcome resources.
23. `memory-23` — inspectable Project memory and accepted decisions.
24. `commercial-24` — onboarding, portability, Project settings, entitlements, billing, notifications, analytics, device continuity controls, offline draft and local queue visibility, native companion grant and notification controls where companion surfaces ship, adaptive preference controls, Spatial Workbench usability controls, Project Operating Layer work control, Project Health causal diagnostics and safe repair playbooks, delegated-trust approval-load budgets, automation outcome scorecards, and customer-visible support diagnostics.
25. `enterprise-25` — SSO, SCIM, residency, WCAG 2.2 AA journeys, language and direction metadata, locale-neutral APIs, accessible exports, policy-bound local cache and sync controls, native companion no-ambient-capture and signed-update controls where companion surfaces ship, policy-bound preference learning controls, abuse controls, review queues, appeals, false-positive measurement, content-minimized trust-safety telemetry, delegated-trust mutation-boundary enforcement, and recovery.
26. `conformance-26` — long-form, security, restore, cost, accessibility, internationalization, accessible export, abuse-prevention gates, command-center safety, focus continuity, device continuity and local-cache gates, native companion no-ambient-capture gates where companion surfaces ship, adaptive preference learning gates, Spatial Workbench and Workset gates, Project Operating Layer work-control gates, Project Health and repair gates, delegated-trust approval-load gates, product-truth contradiction, adaptive automation outcome, and launch gates.

## Completion rule

A slice moves to complete only when dependencies pass, runtime code exists, migrations and rollback are documented, automated tests pass, observability exists, relevant threat-model checks pass, and the completion ledger records the exact commit and evidence.
