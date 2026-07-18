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
    ├── Command Center and keyboard workflows
    ├── Spatial Workbench and Worksets
    ├── Focus continuity and resume digests
    ├── Offline, device continuity, and mobile behavior
    ├── Native companion and OS/browser integration
    ├── Adaptive personalization and preference controls
    ├── Project Operating Layer and work control
    ├── Project Health and causal repair
    ├── Scenario Lab and change simulation
    ├── Reversible Work and Project history
    ├── Delegated trust and approval-load control
    ├── Progressive delivery and permission-safe fast paths
    ├── Project Atlas and impact navigation
    ├── Source-change maintenance and living docs
    ├── Automation registry, dry-run review, and run debugger
    ├── Composable automation recipes and playbooks
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

Research synchronizes available model catalogs at runtime and maps product roles such as `research-frontier`, `fast-extractor`, and `vision-parser` to currently eligible model IDs through Project and workspace policy. Provider-specific capabilities are optional adapters, never architectural dependencies. Implementation pull requests must recheck official provider and gateway documentation, record the review date, and avoid customer-facing claims based on remembered model names.

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

- [User opinion and competitive signal audit](docs/00-foundation/user-opinion-and-competitive-signal-audit.md)
- [AI work OS and agent automation signal audit](docs/00-foundation/ai-work-os-and-agent-automation-signal-audit.md)
- [Advanced operating-layer differentiation](docs/00-foundation/advanced-operating-layer-differentiation.md)
- [Advanced feature opportunity register](docs/00-foundation/advanced-feature-opportunity-register.md)
- [Gemini Notebook capability benchmark](docs/00-foundation/notebooklm-capability-benchmark.md)
- [Project workspace](docs/01-product/project-workspace.md)
- [Sources experience](docs/01-product/sources.md)
- [Documents and canvas](docs/01-product/documents-and-canvas.md)
- [Collaboration, review, and decision workflows](docs/01-product/collaboration-review-and-decision-workflows.md)
- [Command center and keyboard workflows](docs/01-product/command-center-and-keyboard-workflows.md)
- [Spatial Workbench and Worksets](docs/01-product/spatial-workbench-and-worksets.md)
- [Focus continuity and work resume](docs/01-product/focus-continuity-and-work-resume.md)
- [Offline, device continuity, and mobile experience](docs/01-product/offline-device-continuity-and-mobile-experience.md)
- [Native workspace companion and OS integration](docs/01-product/native-workspace-companion-and-os-integration.md)
- [Adaptive personalization and preference controls](docs/01-product/adaptive-personalization-and-preference-controls.md)
- [Project Operating Layer and work control](docs/01-product/project-operating-layer-and-work-control.md)
- [Project Health and repair](docs/01-product/project-health-and-repair.md)
- [Scenario Lab and change simulation](docs/01-product/scenario-lab-and-change-simulation.md)
- [Reversible Work and Project history](docs/01-product/reversible-work-and-project-history.md)
- [Delegated trust and approval-load control](docs/01-product/delegated-trust-and-approval-load.md)
- [Automation, UX, and performance principles](docs/01-product/automation-ux-and-performance-principles.md)
- [Latency-aware progressive workflows](docs/01-product/latency-aware-progressive-workflows.md)
- [Project Atlas and impact navigator](docs/01-product/project-atlas-and-impact-navigator.md)
- [Automation outcome scorecard and adaptive workflows](docs/01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [Composable automation recipes and playbooks](docs/01-product/composable-automation-recipes-and-playbooks.md)
- [Automation registry, dry-run review, and run debugger](docs/01-product/automation-registry-and-run-debugger.md)
- [Automation failure recovery and learning loop](docs/06-delivery/automation-failure-recovery-and-learning-loop.md)
- [Intent capture and prompt-friction policy](docs/01-product/intent-capture-and-prompt-friction.md)
- [Activity timeline and review queue](docs/01-product/activity-timeline-and-review-queue.md)
- [Product truth board and contradiction radar](docs/01-product/product-truth-board-and-contradiction-radar.md)
- [Trust dashboard and evidence coverage](docs/01-product/trust-dashboard-and-evidence-coverage.md)
- [Source-change maintenance and living docs](docs/01-product/source-change-maintenance-and-living-docs.md)
- [Agent development lifecycle and automation governance](docs/02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [Public/private publishing](docs/01-product/public-private-publishing.md)
- [Canonical content and no-drift architecture](docs/02-architecture/canonical-content-and-no-drift.md)
- [Collaboration comments and decisions architecture](docs/02-architecture/collaboration-comments-and-decisions.md)
- [Context packs and agent handoff](docs/02-architecture/context-packs-and-agent-handoff.md)
- [Activity event log and replay](docs/02-architecture/activity-event-log-and-replay.md)
- [Command action routing and shortcuts](docs/02-architecture/command-action-routing-and-shortcuts.md)
- [Spatial Workbench layout and Worksets](docs/02-architecture/spatial-workbench-layout-and-worksets.md)
- [Focus state and resume digests](docs/02-architecture/focus-state-and-resume-digests.md)
- [Offline sync, local cache, and device policy](docs/02-architecture/offline-sync-local-cache-and-device-policy.md)
- [Native companion shell and OS adapter policy](docs/02-architecture/native-companion-shell-and-os-adapter-policy.md)
- [Adaptive preference learning and interface policy](docs/02-architecture/adaptive-preference-learning-and-interface-policy.md)
- [Project Operating Layer control plane](docs/02-architecture/project-operating-layer-control-plane.md)
- [Project health diagnostics and repair](docs/02-architecture/project-health-diagnostics-and-repair.md)
- [Scenario simulation engine](docs/02-architecture/scenario-simulation-engine.md)
- [Reversal ledger and compensation engine](docs/02-architecture/reversal-ledger-and-compensation-engine.md)
- [Delegated trust policy and approval engine](docs/02-architecture/delegated-trust-policy-and-approval-engine.md)
- [Progressive delivery and fast-path cache policy](docs/02-architecture/progressive-delivery-and-fast-path-cache-policy.md)
- [Project map and impact analysis](docs/02-architecture/project-map-and-impact-analysis.md)
- [Intent preflight and clarification policy](docs/02-architecture/intent-preflight-and-clarification-policy.md)
- [Automation outcome evaluation and adaptive routing](docs/02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [Automation recipe graph and execution policy](docs/02-architecture/automation-recipe-graph-and-execution-policy.md)
- [Product truth graph and contradiction detection](docs/02-architecture/product-truth-graph-and-contradiction-detection.md)
- [Research orchestrator](docs/03-ai/research-orchestrator.md)
- [Model council and disagreement resolution](docs/03-ai/model-council-and-disagreement-resolution.md)
- [Research engine adapters](docs/03-ai/research-engine-adapters.md)
- [Multi-agent orchestration](docs/03-ai/multi-agent-orchestration.md)
- [Continuous knowledge maintenance](docs/02-architecture/continuous-knowledge-maintenance.md)
- [Developer platform API](docs/02-architecture/developer-platform-api.md)
- [Claims, evidence, and citations](docs/03-ai/claims-evidence-citations.md)
- [Ingestion pipeline](docs/04-sources/ingestion-pipeline.md)
- [Threat model](docs/05-security/threat-model.md)
- [Documentation governance and drift control](docs/06-delivery/documentation-governance-and-drift-control.md)
- [Documentation quality and authoring standard](docs/06-delivery/documentation-quality-and-authoring-standard.md)
- [Semantic drift and contradiction review](docs/06-delivery/semantic-drift-and-contradiction-review.md)
- [Documentation change evidence log](docs/06-delivery/documentation-change-evidence-log.md)
- [Requirements traceability matrix](docs/07-reference/requirements-traceability-matrix.md)
- [Implementation plan](docs/06-delivery/implementation-plan.md)
- [Implementation blueprint](docs/08-build/README.md)
- [Foundation runtime scaffold](docs/08-build/foundation-runtime-scaffold.md)
- [Open-source tooling landscape](docs/08-build/open-source-tooling-landscape.md)
- [UI system and ChatGPT interaction patterns](docs/08-build/ui-system-and-chatgpt-patterns.md)
- [Deep research and long-form generation](docs/08-build/deep-research-and-long-form-generation.md)
- [GitHub integration and repository editing](docs/08-build/github-integration-and-repository-editing.md)
- [Gemini Notebook feature teardown](docs/00-foundation/notebooklm-feature-teardown.md)
- [Research engine fabric](docs/03-ai/research-engine-fabric.md)
- [Multi-agent research control plane](docs/03-ai/multi-agent-research-control-plane.md)
- [Research Studio and canvas tooling](docs/08-build/research-studio-and-canvas-tooling.md)
- [Living dependency graph](docs/02-architecture/living-dependency-graph.md)
- [Developer platform API and SDK](docs/08-build/developer-platform-api-sdk.md)
- [Open-source research platform catalog](docs/08-build/open-source-research-platform-catalog.md)
- [Terminology](docs/07-reference/terminology.md)
- [Onboarding and Project portability](docs/01-product/onboarding-activation-and-imports.md)
- [Project settings and administration](docs/01-product/project-settings-and-administration.md)
- [Commercial control plane](docs/02-architecture/entitlements-metering-and-billing.md)
- [Product analytics, feedback, and experimentation](docs/02-architecture/product-analytics-feedback-and-experimentation.md)
- [Notifications and scheduled automation](docs/01-product/notifications-and-scheduled-automation.md)
- [Rights, AI governance, and residency](docs/05-security/content-rights-ai-governance-and-data-residency.md)
- [Continuous discovery and user-feedback operations](docs/06-delivery/continuous-discovery-and-user-feedback-operations.md)
- [User research and experience validation](docs/06-delivery/user-research-and-experience-validation.md)
- [User research segment and screener matrix](docs/06-delivery/user-research-segment-and-screener-matrix.md)
- [User-opinion research coverage matrix](docs/06-delivery/user-opinion-research-coverage-matrix.md)
- [User-opinion coding and synthesis ledger](docs/06-delivery/user-opinion-coding-and-synthesis-ledger.md)
- [Human-AI interaction and automation UX review](docs/06-delivery/human-ai-interaction-and-automation-ux-review.md)
- [Product outcome metrics and strategic bet scorecard](docs/06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md)
- [Telemetry and experience instrumentation matrix](docs/06-delivery/telemetry-and-experience-instrumentation-matrix.md)
- [Customer-facing claim and evidence boundary matrix](docs/06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md)
- [Research experience benchmark suite](docs/06-delivery/research-experience-benchmark-suite.md)
- [Advanced differentiation benchmark matrix](docs/06-delivery/advanced-differentiation-benchmark-matrix.md)
- [Advanced feature incubation and prototype governance](docs/06-delivery/advanced-feature-incubation-and-prototype-governance.md)
- [Public signal source quality and citation policy](docs/06-delivery/public-signal-source-quality-and-citation-policy.md)
- [External signal refresh and competitive watch](docs/06-delivery/external-signal-refresh-and-competitive-watch.md)
- [Frontier feature watch and novelty control](docs/06-delivery/frontier-feature-watch-and-novelty-control.md)
- [Specification signal decision ledger](docs/06-delivery/specification-signal-decision-ledger.md)
- [Performance, capacity, and load engineering](docs/06-delivery/performance-capacity-and-load-engineering.md)
- [Product-readiness gap audit](docs/06-delivery/product-readiness-gap-audit.md)

## Repository status

This repository is an implementation-ready specification and starter structure. It includes the research product contract, open-source tooling catalog, ChatGPT-pattern interface, ingestion/indexing/GitHub/memory/long-form workflows, Spatial Workbench worksets, device continuity and local-cache policy, optional native companion and OS/browser adapter policy, adaptive personalization and preference controls, Project Operating Layer work control, advanced operating-layer differentiation policy, advanced differentiation benchmark controls, frontier feature watch and novelty-control gates, Project Health diagnostics and safe repair playbooks, Scenario Lab change simulation, Reversible Work recovery controls, delegated-trust approval controls, progressive delivery and fast-path policy, Project Atlas impact navigation, source-change maintenance and living-doc controls, composable automation recipes, automation failure recovery and learning controls, public developer platform, source-quality controls for public and customer signals, user-research segment and screener controls, user-opinion coverage controls across major product surfaces, user-opinion coding and synthesis controls that preserve codebooks, negative evidence, AI-assist disclosure, contradictions, and claim blockers, telemetry and experience instrumentation controls, human-AI interaction review gates for automation and AI UX, product-outcome metrics for strategic bets, customer-facing claim evidence boundaries, and a machine-validated product-readiness gap register covering onboarding, portability, commercial controls, product intelligence, continuous discovery, user research, experience validation, notifications, governance, enterprise identity, residency, and customer operations. Code should be added only when it conforms to those contracts or updates them through an Architecture Decision Record.

The first implementation slice, `foundation-01`, is governed by `FND-001` through `FND-003`: reproducible workspace, idempotent bootstrap, deterministic provider simulators, CI quality gates, supply-chain controls, and provenance evidence.

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
15. Preference learning is visible, scoped, resettable, and cannot override evidence, authorization, approval, privacy, provider, residency, or security policy.
16. Native and browser companions are optional, Project-scoped adapters; they cannot perform ambient screen, clipboard, browser-history, filesystem, camera, microphone, keylogging, or OS-window capture.

## Official references

The detailed reference list is maintained in [docs/07-reference/official-references.md](docs/07-reference/official-references.md). Primary sources include current framework, platform, model, research, source, connector, and product-benchmark documentation reviewed at implementation time.
