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

This phase establishes the persistent chat, Spatial Workbench, Worksets, command center, keyboard workflows, focus continuity, device capability labels, offline-aware draft and reconnect status, optional native companion entry points and grant states, Project Operating Layer Work Packets, Project Health status, Scenario Lab entry points, Reversible Work history entry points, delegated-trust approval controls, progressive shell/status behavior, source ledger, evidence viewer, document canvas, and citation chain.
It also introduces Project Atlas as a bounded local-neighborhood and impact-preview surface where this helps users understand source, evidence, and document relationships without making a global graph the first-run experience.
Adaptive personalization enters as visible preference controls and explainable low-risk defaults only; preference learning does not become evidence, memory authority, or a permission system.

## Phase 2 — Deep research

- Research contracts and editable plans.
- Durable Research Runs with progressive delivery, Partial Results, progress streaming, interruption, retries, and approval pauses.
- Web discovery and capture.
- Claims, evidence extraction, corroboration, contradiction, and citation verification.
- Managed research-engine adapters and Project-native workers.
- Long-form section contracts, global consistency ledgers, and document assembly.

## Phase 3 — Living documentation

- Source synchronization and immutable version diffs.
- Stale-claim detection.
- Source-change maintenance review with freshness policy, Claim revalidation, patch proposals, and blocked-output labels.
- Project Atlas impact reports for source changes, publication, exports, recipes, and deletion or retention changes.
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
- Replayable server-sent events and progressive delivery envelopes.
- Signed webhooks.
- TypeScript and Python SDKs.
- OpenAPI 3.1, Scalar documentation, CLI, MCP resources, and capability discovery.
- Command catalog discovery and safe command invocation where policy allows.
- Native companion install, grant, capture-preview, deep-link, and support-safe diagnostic metadata resources where policy allows.
- Idempotency, ETags, expected-base-version concurrency, budgets, usage, and cost estimates.

## Phase 6 — Commercial and enterprise readiness

- Onboarding, templates, imports, portability, and restoration.
- Entitlements, metering, quotas, credits, and billing reconciliation.
- Notifications, scheduled research, Resume Digests, Focus Sessions, attention controls, and quiet hours.
- Mobile, tablet, desktop, installed-app, offline-tolerant draft, reconnect, local queue, local cache, and sync-conflict validation.
- Optional native companion and browser extension validation for active-tab capture, selected-text capture, OS share/import targets, scoped file-watch grants, global command entry, notifications, deep links, revocation, and no-ambient-capture guarantees.
- Adaptive preference controls, Preference Center reset/export paths, wrong-inference correction, model-context preference minimization, and policy-bound preference learning.
- Spatial Workbench usability controls, Workset restore quality, pane hydration latency, and layout accessibility evidence.
- Project Operating Layer next-action quality, repeated-work capture, and work-control telemetry.
- Project Health findings, repair playbook dry-runs, SupportDiagnosticBundle refs, support-safe diagnostics, repair outcome evidence, and repeated-repair escalation.
- Scenario Lab option comparison, stale-plan rejection, live-test labeling, apply-candidate handoff, and simulation accuracy evidence.
- Reversible Work restore, retry, replay, withdrawal, compensation, reconciliation, and irreversible-label evidence.
- Delegated-trust grants, approval-load budgets, fatigue controls, and fail-closed approval enforcement.
- Automation registry, dry-run review, Automation Run Debugger, failure taxonomy, trace comparison, replay eligibility, fixture creation, side-effect safety, support-safe diagnostics, and outcome links.
- Composable automation recipes, playbooks, simulation, canary controls, and outcome-measured activation.
- Source-change maintenance schedules, official-reference review, repository/webhook refresh, stale-claim sweeps, owner review, and publication-blocker evidence.
- Product analytics, feedback, evaluations, experiments, and feature flags.
- SSO, SCIM, domain policy, residency, provider governance, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, break-glass review, and support operations.
- WCAG 2.2 AA journeys, accessible citations, accessible generated outputs, Unicode, language and direction metadata, locale-neutral APIs, RTL and mixed-direction presentation, accessible exports, abuse prevention, review queues, appeals, false-positive evidence, trust-safety telemetry, disaster recovery, and launch conformance.

## Launch rule

Production launch requires runtime evidence, not documentation completeness. Required gates include grounded citation quality, permission isolation, prompt-injection resistance, abuse prevention, false-positive handling, long-form conformance, source-change maintenance and propagation, automation registry and run-debugger correctness, dry-run and replay safety, restore exercises, device continuity, policy-bound local cache and sync behavior, optional native companion no-ambient-capture guarantees where companion surfaces ship, accessibility, internationalization, accessible export behavior, cost controls, incident operations, and customer-facing product truth.
Adaptive personalization launch claims require evidence for visible controls, cross-Project isolation, preference reset, explanation quality, model-context minimization, policy-managed mode, and rejection of hidden profiling.
UX, performance, automation, native companion, and advanced operating-layer launch claims require user-research and experience-validation evidence for observed task success, perceived usability, wait clarity, automation accepted outcomes, accessibility participant coverage, dogfood limits, unresolved severity, and Product Truth disposition.
Advanced operating-layer launch claims require accepted Product Truth decisions, explicit non-actions, no-ambient-capture evidence, outcome-based automation evidence, scenario and reversal validation, delegated-trust safety evidence, and consistency with [`docs/00-foundation/advanced-operating-layer-differentiation.md`](docs/00-foundation/advanced-operating-layer-differentiation.md).
