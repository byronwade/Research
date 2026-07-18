# Research documentation

Research documentation is organized by authority and implementation purpose.

## Directory map

| Directory | Purpose |
|---|---|
| `00-foundation` | Product thesis, principles, scope, and competitive benchmarks |
| `01-product` | User-facing behavior and Project surfaces |
| `02-architecture` | System boundaries, domain model, persistence, APIs, and no-drift architecture |
| `03-ai` | Model routing, research orchestration, claims, agents, memory, and evaluation |
| `04-sources` | Ingestion, parsing, indexing, retrieval, connectors, web, scholarly, and GitHub sources |
| `05-security` | Threat model, authorization, privacy, governance, prompt injection, abuse prevention, and recovery |
| `06-delivery` | Implementation sequence, status, launch gates, operations, and conformance |
| `07-reference` | Terminology, official references, schemas, events, environments, and route catalogs |
| `08-build` | Concrete stack choices, open-source tooling, automation flows, and implementation blueprints |
| `_meta` | Machine-readable requirements, routing, implementation status, and documentation controls |

## Full Documentation Index

### Foundation

- [`00-foundation/product-brief.md`](00-foundation/product-brief.md)
- [`00-foundation/product-principles.md`](00-foundation/product-principles.md)
- [`00-foundation/user-opinion-and-competitive-signal-audit.md`](00-foundation/user-opinion-and-competitive-signal-audit.md)
- [`00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](00-foundation/ai-work-os-and-agent-automation-signal-audit.md)
- [`00-foundation/advanced-operating-layer-differentiation.md`](00-foundation/advanced-operating-layer-differentiation.md)
- [`00-foundation/advanced-feature-opportunity-register.md`](00-foundation/advanced-feature-opportunity-register.md)
- [`00-foundation/notebooklm-capability-benchmark.md`](00-foundation/notebooklm-capability-benchmark.md)
- [`00-foundation/notebooklm-feature-teardown.md`](00-foundation/notebooklm-feature-teardown.md)

### Product

- [`01-product/project-workspace.md`](01-product/project-workspace.md)
- [`01-product/spatial-workbench-and-worksets.md`](01-product/spatial-workbench-and-worksets.md)
- [`01-product/chat.md`](01-product/chat.md)
- [`01-product/documents-and-canvas.md`](01-product/documents-and-canvas.md)
- [`01-product/collaboration-review-and-decision-workflows.md`](01-product/collaboration-review-and-decision-workflows.md)
- [`01-product/command-center-and-keyboard-workflows.md`](01-product/command-center-and-keyboard-workflows.md)
- [`01-product/focus-continuity-and-work-resume.md`](01-product/focus-continuity-and-work-resume.md)
- [`01-product/offline-device-continuity-and-mobile-experience.md`](01-product/offline-device-continuity-and-mobile-experience.md)
- [`01-product/native-workspace-companion-and-os-integration.md`](01-product/native-workspace-companion-and-os-integration.md)
- [`01-product/adaptive-personalization-and-preference-controls.md`](01-product/adaptive-personalization-and-preference-controls.md)
- [`01-product/project-operating-layer-and-work-control.md`](01-product/project-operating-layer-and-work-control.md)
- [`01-product/project-health-and-repair.md`](01-product/project-health-and-repair.md)
- [`01-product/scenario-lab-and-change-simulation.md`](01-product/scenario-lab-and-change-simulation.md)
- [`01-product/reversible-work-and-project-history.md`](01-product/reversible-work-and-project-history.md)
- [`01-product/delegated-trust-and-approval-load.md`](01-product/delegated-trust-and-approval-load.md)
- [`01-product/sources.md`](01-product/sources.md)
- [`01-product/public-private-publishing.md`](01-product/public-private-publishing.md)
- [`01-product/research-studio.md`](01-product/research-studio.md)
- [`01-product/automation-ux-and-performance-principles.md`](01-product/automation-ux-and-performance-principles.md)
- [`01-product/automation-registry-and-run-debugger.md`](01-product/automation-registry-and-run-debugger.md)
- [`01-product/latency-aware-progressive-workflows.md`](01-product/latency-aware-progressive-workflows.md)
- [`01-product/project-atlas-and-impact-navigator.md`](01-product/project-atlas-and-impact-navigator.md)
- [`01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](01-product/automation-outcome-scorecard-and-adaptive-workflows.md)
- [`01-product/composable-automation-recipes-and-playbooks.md`](01-product/composable-automation-recipes-and-playbooks.md)
- [`01-product/intent-capture-and-prompt-friction.md`](01-product/intent-capture-and-prompt-friction.md)
- [`01-product/activity-timeline-and-review-queue.md`](01-product/activity-timeline-and-review-queue.md)
- [`01-product/product-truth-board-and-contradiction-radar.md`](01-product/product-truth-board-and-contradiction-radar.md)
- [`01-product/trust-dashboard-and-evidence-coverage.md`](01-product/trust-dashboard-and-evidence-coverage.md)
- [`01-product/source-change-maintenance-and-living-docs.md`](01-product/source-change-maintenance-and-living-docs.md)
- [`01-product/accessibility-internationalization-and-inclusive-research.md`](01-product/accessibility-internationalization-and-inclusive-research.md)
- [`01-product/abuse-prevention-and-trust-safety.md`](01-product/abuse-prevention-and-trust-safety.md)
- [`01-product/onboarding-activation-and-imports.md`](01-product/onboarding-activation-and-imports.md)
- [`01-product/project-settings-and-administration.md`](01-product/project-settings-and-administration.md)
- [`01-product/notifications-and-scheduled-automation.md`](01-product/notifications-and-scheduled-automation.md)

### Architecture

- [`02-architecture/system-architecture.md`](02-architecture/system-architecture.md)
- [`02-architecture/domain-model.md`](02-architecture/domain-model.md)
- [`02-architecture/canonical-content-and-no-drift.md`](02-architecture/canonical-content-and-no-drift.md)
- [`02-architecture/tenancy-authorization-and-capabilities.md`](02-architecture/tenancy-authorization-and-capabilities.md)
- [`02-architecture/configuration-and-feature-flags.md`](02-architecture/configuration-and-feature-flags.md)
- [`02-architecture/durable-workflows-idempotency-and-outbox.md`](02-architecture/durable-workflows-idempotency-and-outbox.md)
- [`02-architecture/activity-event-log-and-replay.md`](02-architecture/activity-event-log-and-replay.md)
- [`02-architecture/collaboration-comments-and-decisions.md`](02-architecture/collaboration-comments-and-decisions.md)
- [`02-architecture/command-action-routing-and-shortcuts.md`](02-architecture/command-action-routing-and-shortcuts.md)
- [`02-architecture/spatial-workbench-layout-and-worksets.md`](02-architecture/spatial-workbench-layout-and-worksets.md)
- [`02-architecture/focus-state-and-resume-digests.md`](02-architecture/focus-state-and-resume-digests.md)
- [`02-architecture/offline-sync-local-cache-and-device-policy.md`](02-architecture/offline-sync-local-cache-and-device-policy.md)
- [`02-architecture/native-companion-shell-and-os-adapter-policy.md`](02-architecture/native-companion-shell-and-os-adapter-policy.md)
- [`02-architecture/adaptive-preference-learning-and-interface-policy.md`](02-architecture/adaptive-preference-learning-and-interface-policy.md)
- [`02-architecture/project-operating-layer-control-plane.md`](02-architecture/project-operating-layer-control-plane.md)
- [`02-architecture/project-health-diagnostics-and-repair.md`](02-architecture/project-health-diagnostics-and-repair.md)
- [`02-architecture/scenario-simulation-engine.md`](02-architecture/scenario-simulation-engine.md)
- [`02-architecture/reversal-ledger-and-compensation-engine.md`](02-architecture/reversal-ledger-and-compensation-engine.md)
- [`02-architecture/delegated-trust-policy-and-approval-engine.md`](02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](02-architecture/progressive-delivery-and-fast-path-cache-policy.md)
- [`02-architecture/project-map-and-impact-analysis.md`](02-architecture/project-map-and-impact-analysis.md)
- [`02-architecture/intent-preflight-and-clarification-policy.md`](02-architecture/intent-preflight-and-clarification-policy.md)
- [`02-architecture/schema-contract-and-data-evolution.md`](02-architecture/schema-contract-and-data-evolution.md)
- [`02-architecture/data-retention-deletion-and-portability.md`](02-architecture/data-retention-deletion-and-portability.md)
- [`02-architecture/context-packs-and-agent-handoff.md`](02-architecture/context-packs-and-agent-handoff.md)
- [`02-architecture/agent-development-lifecycle-and-automation-governance.md`](02-architecture/agent-development-lifecycle-and-automation-governance.md)
- [`02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](02-architecture/automation-outcome-evaluation-and-adaptive-routing.md)
- [`02-architecture/automation-recipe-graph-and-execution-policy.md`](02-architecture/automation-recipe-graph-and-execution-policy.md)
- [`02-architecture/continuous-knowledge-maintenance.md`](02-architecture/continuous-knowledge-maintenance.md)
- [`02-architecture/living-dependency-graph.md`](02-architecture/living-dependency-graph.md)
- [`02-architecture/developer-platform-api.md`](02-architecture/developer-platform-api.md)
- [`02-architecture/entitlements-metering-and-billing.md`](02-architecture/entitlements-metering-and-billing.md)
- [`02-architecture/product-analytics-feedback-and-experimentation.md`](02-architecture/product-analytics-feedback-and-experimentation.md)
- [`02-architecture/product-truth-graph-and-contradiction-detection.md`](02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`02-architecture/accessibility-internationalization-and-locale-policy.md`](02-architecture/accessibility-internationalization-and-locale-policy.md)
- [`02-architecture/abuse-prevention-policy-and-enforcement.md`](02-architecture/abuse-prevention-policy-and-enforcement.md)

### AI

- [`03-ai/research-orchestrator.md`](03-ai/research-orchestrator.md)
- [`03-ai/claims-evidence-citations.md`](03-ai/claims-evidence-citations.md)
- [`03-ai/model-routing-evaluation-and-cost-control.md`](03-ai/model-routing-evaluation-and-cost-control.md)
- [`03-ai/model-evaluation-and-change-management.md`](03-ai/model-evaluation-and-change-management.md)
- [`03-ai/model-council-and-disagreement-resolution.md`](03-ai/model-council-and-disagreement-resolution.md)
- [`03-ai/multi-agent-orchestration.md`](03-ai/multi-agent-orchestration.md)
- [`03-ai/multi-agent-research-control-plane.md`](03-ai/multi-agent-research-control-plane.md)
- [`03-ai/project-memory.md`](03-ai/project-memory.md)
- [`03-ai/research-engine-adapters.md`](03-ai/research-engine-adapters.md)
- [`03-ai/research-engine-fabric.md`](03-ai/research-engine-fabric.md)

### Sources

- [`04-sources/ingestion-pipeline.md`](04-sources/ingestion-pipeline.md)
- [`04-sources/source-capability-and-format-matrix.md`](04-sources/source-capability-and-format-matrix.md)
- [`04-sources/web-acquisition-search-and-citation.md`](04-sources/web-acquisition-search-and-citation.md)
- [`04-sources/indexing-and-retrieval.md`](04-sources/indexing-and-retrieval.md)
- [`04-sources/github-integration.md`](04-sources/github-integration.md)

### Security

- [`05-security/threat-model.md`](05-security/threat-model.md)
- [`05-security/data-governance.md`](05-security/data-governance.md)
- [`05-security/privacy-and-compliance-operations.md`](05-security/privacy-and-compliance-operations.md)
- [`05-security/web-application-security-baseline.md`](05-security/web-application-security-baseline.md)
- [`05-security/secrets-encryption-and-configuration.md`](05-security/secrets-encryption-and-configuration.md)
- [`05-security/secure-software-supply-chain.md`](05-security/secure-software-supply-chain.md)
- [`05-security/content-rights-ai-governance-and-data-residency.md`](05-security/content-rights-ai-governance-and-data-residency.md)
- [`05-security/security-verification-matrix.md`](05-security/security-verification-matrix.md)

### Delivery

- [`06-delivery/implementation-plan.md`](06-delivery/implementation-plan.md)
- [`06-delivery/implementation-status.md`](06-delivery/implementation-status.md)
- [`06-delivery/documentation-governance-and-drift-control.md`](06-delivery/documentation-governance-and-drift-control.md)
- [`06-delivery/documentation-quality-and-authoring-standard.md`](06-delivery/documentation-quality-and-authoring-standard.md)
- [`06-delivery/semantic-drift-and-contradiction-review.md`](06-delivery/semantic-drift-and-contradiction-review.md)
- [`06-delivery/documentation-change-evidence-log.md`](06-delivery/documentation-change-evidence-log.md)
- [`06-delivery/product-readiness-gap-audit.md`](06-delivery/product-readiness-gap-audit.md)
- [`06-delivery/launch-readiness-and-release-evidence.md`](06-delivery/launch-readiness-and-release-evidence.md)
- [`06-delivery/developer-environment-and-bootstrap.md`](06-delivery/developer-environment-and-bootstrap.md)
- [`06-delivery/environment-and-deployment-topology.md`](06-delivery/environment-and-deployment-topology.md)
- [`06-delivery/implementation-decision-records-and-open-decisions.md`](06-delivery/implementation-decision-records-and-open-decisions.md)
- [`06-delivery/release-engineering-and-change-control.md`](06-delivery/release-engineering-and-change-control.md)
- [`06-delivery/test-strategy-and-quality-gates.md`](06-delivery/test-strategy-and-quality-gates.md)
- [`06-delivery/testing-and-validation-strategy.md`](06-delivery/testing-and-validation-strategy.md)
- [`06-delivery/performance-capacity-and-load-engineering.md`](06-delivery/performance-capacity-and-load-engineering.md)
- [`06-delivery/observability-and-incident-operations.md`](06-delivery/observability-and-incident-operations.md)
- [`06-delivery/service-ownership-and-runbooks.md`](06-delivery/service-ownership-and-runbooks.md)
- [`06-delivery/runbook-catalog-and-operational-drills.md`](06-delivery/runbook-catalog-and-operational-drills.md)
- [`06-delivery/backup-restore-and-disaster-recovery.md`](06-delivery/backup-restore-and-disaster-recovery.md)
- [`06-delivery/data-migration-and-backfill-runbook.md`](06-delivery/data-migration-and-backfill-runbook.md)
- [`06-delivery/continuous-discovery-and-user-feedback-operations.md`](06-delivery/continuous-discovery-and-user-feedback-operations.md)
- [`06-delivery/user-research-and-experience-validation.md`](06-delivery/user-research-and-experience-validation.md)
- [`06-delivery/user-research-segment-and-screener-matrix.md`](06-delivery/user-research-segment-and-screener-matrix.md)
- [`06-delivery/user-opinion-research-coverage-matrix.md`](06-delivery/user-opinion-research-coverage-matrix.md)
- [`06-delivery/user-opinion-coding-and-synthesis-ledger.md`](06-delivery/user-opinion-coding-and-synthesis-ledger.md)
- [`06-delivery/human-ai-interaction-and-automation-ux-review.md`](06-delivery/human-ai-interaction-and-automation-ux-review.md)
- [`06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`06-delivery/telemetry-and-experience-instrumentation-matrix.md`](06-delivery/telemetry-and-experience-instrumentation-matrix.md)
- [`06-delivery/automation-failure-recovery-and-learning-loop.md`](06-delivery/automation-failure-recovery-and-learning-loop.md)
- [`06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md)
- [`06-delivery/research-experience-benchmark-suite.md`](06-delivery/research-experience-benchmark-suite.md)
- [`06-delivery/advanced-differentiation-benchmark-matrix.md`](06-delivery/advanced-differentiation-benchmark-matrix.md)
- [`06-delivery/advanced-feature-incubation-and-prototype-governance.md`](06-delivery/advanced-feature-incubation-and-prototype-governance.md)
- [`06-delivery/public-signal-source-quality-and-citation-policy.md`](06-delivery/public-signal-source-quality-and-citation-policy.md)
- [`06-delivery/external-signal-refresh-and-competitive-watch.md`](06-delivery/external-signal-refresh-and-competitive-watch.md)
- [`06-delivery/frontier-feature-watch-and-novelty-control.md`](06-delivery/frontier-feature-watch-and-novelty-control.md)
- [`06-delivery/specification-signal-decision-ledger.md`](06-delivery/specification-signal-decision-ledger.md)

### Reference

- [`07-reference/api-error-operation-and-pagination-contract.md`](07-reference/api-error-operation-and-pagination-contract.md)
- [`07-reference/database-schema-blueprint.md`](07-reference/database-schema-blueprint.md)
- [`07-reference/definition-of-done.md`](07-reference/definition-of-done.md)
- [`07-reference/event-webhook-and-idempotency-contract.md`](07-reference/event-webhook-and-idempotency-contract.md)
- [`07-reference/official-references.md`](07-reference/official-references.md)
- [`07-reference/terminology.md`](07-reference/terminology.md)
- [`07-reference/requirements-traceability-matrix.md`](07-reference/requirements-traceability-matrix.md)

### Build

- [`08-build/README.md`](08-build/README.md)
- [`08-build/foundation-runtime-scaffold.md`](08-build/foundation-runtime-scaffold.md)
- [`08-build/open-source-tooling-landscape.md`](08-build/open-source-tooling-landscape.md)
- [`08-build/ui-system-and-chatgpt-patterns.md`](08-build/ui-system-and-chatgpt-patterns.md)
- [`08-build/deep-research-and-long-form-generation.md`](08-build/deep-research-and-long-form-generation.md)
- [`08-build/github-integration-and-repository-editing.md`](08-build/github-integration-and-repository-editing.md)
- [`08-build/research-studio-and-canvas-tooling.md`](08-build/research-studio-and-canvas-tooling.md)
- [`08-build/developer-platform-api-sdk.md`](08-build/developer-platform-api-sdk.md)
- [`08-build/open-source-research-platform-catalog.md`](08-build/open-source-research-platform-catalog.md)

### Machine-Readable Controls

- [`_meta/requirements.json`](_meta/requirements.json)
- [`_meta/agent-routing.json`](_meta/agent-routing.json)
- [`_meta/implementation-build-plan.json`](_meta/implementation-build-plan.json)
- [`_meta/tooling-catalog.json`](_meta/tooling-catalog.json)

## Canonical entry points

- [`START-HERE.md`](START-HERE.md)
- [`../AGENTS.md`](../AGENTS.md)
- [`../PRODUCT.md`](../PRODUCT.md)
- [`../ARCHITECTURE.md`](../ARCHITECTURE.md)
- [`../ROADMAP.md`](../ROADMAP.md)
- [`06-delivery/implementation-status.md`](06-delivery/implementation-status.md)
- [`08-build/README.md`](08-build/README.md)

## Production documentation set

These files convert the product specification into production controls:

- [`06-delivery/product-readiness-gap-audit.md`](06-delivery/product-readiness-gap-audit.md) records the launch gaps that remain after the specification is complete.
- [`06-delivery/launch-readiness-and-release-evidence.md`](06-delivery/launch-readiness-and-release-evidence.md) defines the evidence bundle required for staging and production promotion.
- [`06-delivery/documentation-governance-and-drift-control.md`](06-delivery/documentation-governance-and-drift-control.md) defines `DOCS-001` and `DOCS-002` so canonical docs, metadata, routing, status, and validation evidence move together.
- [`06-delivery/documentation-quality-and-authoring-standard.md`](06-delivery/documentation-quality-and-authoring-standard.md) defines `DOCS-003` for production-grade authoring shape, document taxonomy, primary reader tasks, terminology, examples, diagrams, stale-document retirement, launch gates, source review dates, and validation evidence.
- [`06-delivery/public-signal-source-quality-and-citation-policy.md`](06-delivery/public-signal-source-quality-and-citation-policy.md) defines `DOCS-004` so public discussions, customer feedback, surveys, research literature, official references, runtime observations, generated summaries, and documentation sweeps carry source-quality, confidence, representativeness, bias, excerpt, and allowed-decision metadata before they can change Product Truth, requirements, launch gates, or customer-facing claims.
- [`06-delivery/semantic-drift-and-contradiction-review.md`](06-delivery/semantic-drift-and-contradiction-review.md) defines the semantic sweep protocol for finding contradictions across requirements, docs, routing, status, launch evidence, Product Truth, user research, and implementation claims.
- [`06-delivery/documentation-change-evidence-log.md`](06-delivery/documentation-change-evidence-log.md) preserves specification-mode documentation-change evidence, semantic drift packet summaries, validation commands, unresolved severity, source refreshes, and deliberate non-changes before runtime Product Truth and release-evidence storage exist.
- [`07-reference/requirements-traceability-matrix.md`](07-reference/requirements-traceability-matrix.md) maps requirement IDs to governing contracts, owner slices, and validation surfaces so humans do not have to reverse-engineer `_meta` JSON.
- [`06-delivery/implementation-decision-records-and-open-decisions.md`](06-delivery/implementation-decision-records-and-open-decisions.md) keeps provider, environment, export, publication, and other pre-production choices explicit until owning slices accept them with current evidence.
- [`06-delivery/developer-environment-and-bootstrap.md`](06-delivery/developer-environment-and-bootstrap.md), [`05-security/secure-software-supply-chain.md`](05-security/secure-software-supply-chain.md), [`08-build/README.md`](08-build/README.md), and [`08-build/foundation-runtime-scaffold.md`](08-build/foundation-runtime-scaffold.md) define `FND-001` through `FND-003` for the first runtime slice.
- [`06-delivery/performance-capacity-and-load-engineering.md`](06-delivery/performance-capacity-and-load-engineering.md), [`06-delivery/observability-and-incident-operations.md`](06-delivery/observability-and-incident-operations.md), and [`06-delivery/test-strategy-and-quality-gates.md`](06-delivery/test-strategy-and-quality-gates.md) define production quality, load, telemetry, and validation controls.
- [`06-delivery/user-research-and-experience-validation.md`](06-delivery/user-research-and-experience-validation.md) defines launch-blocking user-research, usability, performance-perception, automation-outcome, accessibility, dogfood, and experience-evidence protocols.
- [`06-delivery/user-research-segment-and-screener-matrix.md`](06-delivery/user-research-segment-and-screener-matrix.md) defines `FEEDBACK-003` so every opinion, survey, dogfood cohort, beta cohort, support synthesis, benchmark participant run, and public-signal synthesis that can affect scope maps to target segments, excluded segments, job-to-be-done, agency preference, trust posture, automation maturity, sampling, bias, supported claims, and blocked claims.
- [`06-delivery/user-opinion-research-coverage-matrix.md`](06-delivery/user-opinion-research-coverage-matrix.md) maps each major product, automation, advanced operating-layer, accessibility, support, API, SDK, MCP, and synthetic-user research surface to required user-opinion coverage, observed-task methods, blocked claims, owner slices, and launch evidence.
- [`06-delivery/user-opinion-coding-and-synthesis-ledger.md`](06-delivery/user-opinion-coding-and-synthesis-ledger.md) defines `FEEDBACK-004`, versioned codebooks, coding assignments, synthesis records, negative-evidence review, AI-assist disclosure, contradiction handling, and promotion thresholds before user opinions can affect Product Truth, requirements, launch evidence, or customer-facing claims.
- [`06-delivery/human-ai-interaction-and-automation-ux-review.md`](06-delivery/human-ai-interaction-and-automation-ux-review.md) defines `READY-003` so AI, agentic, and automation surfaces pass human-AI interaction, trust-calibration, permission, progress, recovery, accessibility, and automation-outcome review before prototype expansion, beta, benchmark reliance, release promotion, or customer-facing claims.
- [`06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md`](06-delivery/product-outcome-metrics-and-strategic-bet-scorecard.md) defines the north-star outcome layer, OutcomeMetricDefinitions, StrategicBetScorecards, OutcomeReviews, baselines, anti-metrics, and launch gates that keep performance, usability, user experience, automation, and advanced OS-level bets tied to measurable user value.
- [`06-delivery/telemetry-and-experience-instrumentation-matrix.md`](06-delivery/telemetry-and-experience-instrumentation-matrix.md) defines ProductTelemetryEventSpecs, instrumentation IDs, prohibited telemetry, privacy classification, release-claim support, and event-to-outcome links for performance, usability, automation, accessibility, support, API, SDK, MCP, and advanced operating-layer evidence.
- [`06-delivery/automation-failure-recovery-and-learning-loop.md`](06-delivery/automation-failure-recovery-and-learning-loop.md) defines `AUTO-006` so failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain automation runs create recovery records with severity, user impact, safe next action, retry/replay/reconcile/compensate policy, owner, outcome evidence, learning artifacts, and launch or claim blockers.
- [`06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md) defines `READY-004` and maps public claim families to allowed pre-runtime wording, blocked language, evidence floors, release-scope limits, and CustomerClaimEvidenceRecord controls before any stronger customer-facing claim is made.
- [`06-delivery/research-experience-benchmark-suite.md`](06-delivery/research-experience-benchmark-suite.md) defines repeatable end-to-end scenario benchmarks, benchmark-run records, good-event definitions, blockers, waivers, and release-evidence rules for user-facing production journeys.
- [`06-delivery/advanced-differentiation-benchmark-matrix.md`](06-delivery/advanced-differentiation-benchmark-matrix.md) defines `BENCH-003`, AdvancedDifferentiationBenchmarkRecords, comparator classes, same-task baselines, anti-metrics, and customer-claim blockers before Research can claim advanced or better-than OS, browser, workspace-agent, automation, or agent-observability outcomes.
- [`06-delivery/advanced-feature-incubation-and-prototype-governance.md`](06-delivery/advanced-feature-incubation-and-prototype-governance.md) defines how novel OS, browser, workspace-agent, automation, UX, performance, and Product Truth opportunities move through prototype, dogfood, beta, adoption, deferral, kill, or non-action decisions without launch drift.
- [`06-delivery/external-signal-refresh-and-competitive-watch.md`](06-delivery/external-signal-refresh-and-competitive-watch.md) defines the recurring official-source and public-signal refresh protocol for OS, workspace-agent, automation, performance, UX, and advanced operating-layer evidence.
- [`06-delivery/frontier-feature-watch-and-novelty-control.md`](06-delivery/frontier-feature-watch-and-novelty-control.md) defines `BENCH-004`, FrontierSignalReview records, novelty-control rules, copy-risk checks, promotion gates, benchmark and incubation links, and launch blockers before fresh OS, browser, workspace-agent, app-intent, connected-app, automation, or user-opinion signals can change Research scope.
- [`06-delivery/specification-signal-decision-ledger.md`](06-delivery/specification-signal-decision-ledger.md) maps current external and public user-opinion signals to accepted scope, rejected scope, research-more decisions, validation needs, owner slices, and revisit triggers until runtime Product Truth exists.
- [`00-foundation/user-opinion-and-competitive-signal-audit.md`](00-foundation/user-opinion-and-competitive-signal-audit.md) records official competitor capabilities and public user-opinion signals that shape requirements.
- [`00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](00-foundation/ai-work-os-and-agent-automation-signal-audit.md) records workspace-agent, scheduled-work, and automation-governance market signals.
- [`00-foundation/advanced-operating-layer-differentiation.md`](00-foundation/advanced-operating-layer-differentiation.md) converts OS, workspace-agent, automation, and user-opinion signals into accepted Research differentiators, rejected non-actions, and future advanced-feature decision rules.
- [`00-foundation/advanced-feature-opportunity-register.md`](00-foundation/advanced-feature-opportunity-register.md) ranks advanced OS, browser, workspace-agent, automation, performance, and UX opportunities by user pain, Research-native advantage, risk, dependency readiness, validation needs, and explicit non-actions.
- [`05-security/content-rights-ai-governance-and-data-residency.md`](05-security/content-rights-ai-governance-and-data-residency.md) owns rights, AI-provider policy, and residency controls.
- [`01-product/onboarding-activation-and-imports.md`](01-product/onboarding-activation-and-imports.md) defines first-run activation, templates, imports, and Project portability.
- [`01-product/project-settings-and-administration.md`](01-product/project-settings-and-administration.md) defines `ADMIN-001`, `ADMIN-002`, `SUPPORT-001`, and `SUPPORT-002` for effective policy visibility, Project administration, usage settings, support grants, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, break-glass review, and high-risk settings change control.
- [`01-product/automation-ux-and-performance-principles.md`](01-product/automation-ux-and-performance-principles.md) defines explicit speed, depth, usability, and automation tradeoffs.
- [`01-product/automation-registry-and-run-debugger.md`](01-product/automation-registry-and-run-debugger.md) defines `AUTO-002` for Project automation registry, dry-run review, Automation Run Debugger, failure taxonomy, trace comparison, replay eligibility, fixture creation, side-effect safety, support-safe diagnostics, and outcome links; [`06-delivery/automation-failure-recovery-and-learning-loop.md`](06-delivery/automation-failure-recovery-and-learning-loop.md) defines `AUTO-006` for the recovery and learning loop that follows failed, degraded, quiet-wrong, or side-effect-uncertain runs.
- [`01-product/latency-aware-progressive-workflows.md`](01-product/latency-aware-progressive-workflows.md) and [`02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](02-architecture/progressive-delivery-and-fast-path-cache-policy.md) define `PERF-005` and `PERF-006` for immediate authorized shell/status, Partial Results, progress, cancellation, recovery, cache safety, preloading, stale labels, and permission-safe Fast Paths.
- [`01-product/project-atlas-and-impact-navigator.md`](01-product/project-atlas-and-impact-navigator.md) and [`02-architecture/project-map-and-impact-analysis.md`](02-architecture/project-map-and-impact-analysis.md) define `MAP-001` and `MAP-002` for local Project graph neighborhoods, path queries, Impact Reports, missing-link suggestions, permission-safe redaction, and large-Project map performance.
- [`01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](01-product/automation-outcome-scorecard-and-adaptive-workflows.md) and [`02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](02-architecture/automation-outcome-evaluation-and-adaptive-routing.md) define `AUTO-003` and `PERF-004` so automation is judged by accepted outcomes, cost, latency, approval burden, safety, and adaptive workflow evidence rather than activity volume.
- [`01-product/composable-automation-recipes-and-playbooks.md`](01-product/composable-automation-recipes-and-playbooks.md) and [`02-architecture/automation-recipe-graph-and-execution-policy.md`](02-architecture/automation-recipe-graph-and-execution-policy.md) define `AUTO-004` and `AUTO-005` for typed, versioned recipe and playbook automation with explicit triggers, dry-run simulation, canary activation, approval gates, budgets, stop conditions, and outcome evidence.
- [`01-product/command-center-and-keyboard-workflows.md`](01-product/command-center-and-keyboard-workflows.md) and [`02-architecture/command-action-routing-and-shortcuts.md`](02-architecture/command-action-routing-and-shortcuts.md) define `UX-003` and `UX-004` for universal command discovery, keyboard-first workflows, typed command descriptors, shortcut governance, preflight, approval, idempotency, and activity evidence.
- [`01-product/spatial-workbench-and-worksets.md`](01-product/spatial-workbench-and-worksets.md) and [`02-architecture/spatial-workbench-layout-and-worksets.md`](02-architecture/spatial-workbench-layout-and-worksets.md) define `LAYOUT-001` and `LAYOUT-002` for Project-scoped Worksets, pane layouts, evidence-aware splits, suspend/restore, progressive hydration, adaptive layout suggestions, and projection-safe layout state.
- [`01-product/focus-continuity-and-work-resume.md`](01-product/focus-continuity-and-work-resume.md) and [`02-architecture/focus-state-and-resume-digests.md`](02-architecture/focus-state-and-resume-digests.md) define `UX-005` and `UX-006` for resumable Project state, Focus Sessions, Resume Digests, attention ranking, notification suppression, command integration, authorization, and privacy-safe continuity.
- [`01-product/offline-device-continuity-and-mobile-experience.md`](01-product/offline-device-continuity-and-mobile-experience.md) and [`02-architecture/offline-sync-local-cache-and-device-policy.md`](02-architecture/offline-sync-local-cache-and-device-policy.md) define `DEVICE-001` and `DEVICE-002` for mobile, installed, offline-tolerant, local-draft, reconnect, sync-conflict, and policy-bound local cache behavior.
- [`01-product/native-workspace-companion-and-os-integration.md`](01-product/native-workspace-companion-and-os-integration.md) and [`02-architecture/native-companion-shell-and-os-adapter-policy.md`](02-architecture/native-companion-shell-and-os-adapter-policy.md) define `NATIVE-001` and `NATIVE-002` for optional native companion, browser extension, active-tab capture, selected-text capture, OS share/import target, scoped file-watch grant, global command entry, tray/menu status, notification deep-link, revocation, content minimization, and no-ambient-capture behavior.
- [`01-product/adaptive-personalization-and-preference-controls.md`](01-product/adaptive-personalization-and-preference-controls.md) and [`02-architecture/adaptive-preference-learning-and-interface-policy.md`](02-architecture/adaptive-preference-learning-and-interface-policy.md) define `PREF-001` and `PREF-002` for user-controlled adaptive defaults, Preference Center controls, preference explanations, scope separation, reset/export, model-context minimization, and policy-bound preference learning.
- [`01-product/project-operating-layer-and-work-control.md`](01-product/project-operating-layer-and-work-control.md) and [`02-architecture/project-operating-layer-control-plane.md`](02-architecture/project-operating-layer-control-plane.md) define `WORK-001` and `WORK-002` for Work Packets, next safe actions, repeated-work capture, recommendation observations, cross-surface invalidation, and Project-scoped work control without OS-wide capture or a second authority.
- [`01-product/project-health-and-repair.md`](01-product/project-health-and-repair.md) and [`02-architecture/project-health-diagnostics-and-repair.md`](02-architecture/project-health-diagnostics-and-repair.md) define `HEALTH-001` and `HEALTH-002` for Project Health findings, diagnostic snapshots, HealthLineageEdges, causal diagnostics, safe repair playbooks, dry-runs, ActionCards, repair runs, SupportDiagnosticBundle refs, support-safe diagnostics, false-cause controls, diagnostic-waste budgets, and outcome evidence without ambient operating-system capture, raw diagnostic content capture, or hidden autonomy.
- [`01-product/scenario-lab-and-change-simulation.md`](01-product/scenario-lab-and-change-simulation.md) and [`02-architecture/scenario-simulation-engine.md`](02-architecture/scenario-simulation-engine.md) define `SIM-001` and `SIM-002` for Project-wide what-if previews, option comparison, content-minimized simulation snapshots, live-test labeling, stale-plan invalidation, apply candidates, and outcome observations before mutation.
- [`01-product/reversible-work-and-project-history.md`](01-product/reversible-work-and-project-history.md) and [`02-architecture/reversal-ledger-and-compensation-engine.md`](02-architecture/reversal-ledger-and-compensation-engine.md) define `REV-001` and `REV-002` for Project History, recovery cards, undo, restore, replay, retry, withdrawal, compensation, reconciliation, irreversible labeling, and recovery outcome evidence without a second authority or false undo claims.
- [`01-product/delegated-trust-and-approval-load.md`](01-product/delegated-trust-and-approval-load.md) and [`02-architecture/delegated-trust-policy-and-approval-engine.md`](02-architecture/delegated-trust-policy-and-approval-engine.md) define `APPROVAL-001` and `APPROVAL-002` for scoped delegated-trust grants, approval batching, approval-load budgets, fatigue controls, and fail-closed approval enforcement.
- [`01-product/intent-capture-and-prompt-friction.md`](01-product/intent-capture-and-prompt-friction.md) and [`02-architecture/intent-preflight-and-clarification-policy.md`](02-architecture/intent-preflight-and-clarification-policy.md) define `INTENT-001` through `INTENT-003` for intent records, earned clarification, safe assumptions, preflight, and approval receipts.
- [`01-product/activity-timeline-and-review-queue.md`](01-product/activity-timeline-and-review-queue.md) and [`02-architecture/activity-event-log-and-replay.md`](02-architecture/activity-event-log-and-replay.md) define `ACT-001` through `ACT-003` for timeline, review-queue, action-card, and replay-safe activity behavior.
- [`01-product/collaboration-review-and-decision-workflows.md`](01-product/collaboration-review-and-decision-workflows.md) and [`02-architecture/collaboration-comments-and-decisions.md`](02-architecture/collaboration-comments-and-decisions.md) define `COLLAB-001` through `COLLAB-003` for anchored comments, mentions, assignments, suggestions, reviews, decision records, presence, and permission-safe collaboration visibility.
- [`01-product/product-truth-board-and-contradiction-radar.md`](01-product/product-truth-board-and-contradiction-radar.md) and [`02-architecture/product-truth-graph-and-contradiction-detection.md`](02-architecture/product-truth-graph-and-contradiction-detection.md) define `TRUTH-001` through `TRUTH-003` for evidence-linked product truth, contradiction detection, and signal provenance controls.
- [`01-product/trust-dashboard-and-evidence-coverage.md`](01-product/trust-dashboard-and-evidence-coverage.md) defines the advanced evidence-trust surface for claim health, coverage, source rights, freshness, and publication blockers.
- [`01-product/source-change-maintenance-and-living-docs.md`](01-product/source-change-maintenance-and-living-docs.md) and [`02-architecture/continuous-knowledge-maintenance.md`](02-architecture/continuous-knowledge-maintenance.md) define `MAINT-001` for user-visible maintenance runs, source freshness, Claim revalidation, Impact Reports, maintenance ActionCards, typed patch proposals, publication blockers, and scheduled source-change upkeep.
- [`01-product/accessibility-internationalization-and-inclusive-research.md`](01-product/accessibility-internationalization-and-inclusive-research.md) and [`02-architecture/accessibility-internationalization-and-locale-policy.md`](02-architecture/accessibility-internationalization-and-locale-policy.md) define `A11Y-001` and `I18N-001` for WCAG 2.2 AA expectations, accessible citations, assistive-technology journeys, Unicode, language and direction metadata, locale-neutral APIs, multilingual retrieval, RTL presentation, and accessible exports.
- [`01-product/abuse-prevention-and-trust-safety.md`](01-product/abuse-prevention-and-trust-safety.md) and [`02-architecture/abuse-prevention-policy-and-enforcement.md`](02-architecture/abuse-prevention-policy-and-enforcement.md) define `ABUSE-001` and `ABUSE-002` for acceptable-use enforcement, abuse-aware automation and publication controls, provider-policy checks, review queues, appeals, false-positive measurement, tenant-scoped quotas, and content-minimized trust-safety telemetry.
- [`03-ai/model-council-and-disagreement-resolution.md`](03-ai/model-council-and-disagreement-resolution.md) defines multi-model and multi-engine disagreement handling for high-risk verification.
- [`02-architecture/context-packs-and-agent-handoff.md`](02-architecture/context-packs-and-agent-handoff.md) defines minimized, policy-bound context bundles for models, agents, MCP clients, SDK users, and human handoff.
- [`02-architecture/agent-development-lifecycle-and-automation-governance.md`](02-architecture/agent-development-lifecycle-and-automation-governance.md) defines lifecycle states, dry-runs, approval classes, debugging, and replay for automations, including recipes compiled from reusable playbooks.
- [`02-architecture/continuous-knowledge-maintenance.md`](02-architecture/continuous-knowledge-maintenance.md) and [`02-architecture/living-dependency-graph.md`](02-architecture/living-dependency-graph.md) define the architecture for keeping documents current without public/private drift.
- [`02-architecture/entitlements-metering-and-billing.md`](02-architecture/entitlements-metering-and-billing.md), [`02-architecture/product-analytics-feedback-and-experimentation.md`](02-architecture/product-analytics-feedback-and-experimentation.md), and [`01-product/notifications-and-scheduled-automation.md`](01-product/notifications-and-scheduled-automation.md) define commercial and operating-plane behavior.
- [`06-delivery/continuous-discovery-and-user-feedback-operations.md`](06-delivery/continuous-discovery-and-user-feedback-operations.md) defines how customer feedback, discovery evidence, experiments, and documentation updates stay governed and closed-loop.
- [`06-delivery/user-research-and-experience-validation.md`](06-delivery/user-research-and-experience-validation.md) defines how Research gets and validates user opinions about usability, performance, trust, automation, accessibility, and advanced operating-layer behavior before launch claims.
- [`06-delivery/user-research-segment-and-screener-matrix.md`](06-delivery/user-research-segment-and-screener-matrix.md) keeps user opinions segmented by job, role, agency preference, AI trust posture, automation maturity, accessibility, locale, device, privacy/security sensitivity, sampling source, denominator, representativeness, and bias before they can affect Product Truth or launch evidence.
- [`06-delivery/user-opinion-research-coverage-matrix.md`](06-delivery/user-opinion-research-coverage-matrix.md) keeps that user-opinion work comprehensive by naming required coverage for every major Research surface and blocking synthetic-user or anecdote-only evidence from launch claims.
- [`06-delivery/user-opinion-coding-and-synthesis-ledger.md`](06-delivery/user-opinion-coding-and-synthesis-ledger.md) defines how raw opinions, quotes, support notes, public signals, benchmark-participant notes, telemetry follow-up, and AI-assisted highlights become reviewed synthesis records without losing source quality, negative evidence, contradiction state, or claim blockers.
- [`06-delivery/human-ai-interaction-and-automation-ux-review.md`](06-delivery/human-ai-interaction-and-automation-ux-review.md) defines the expert review record and failure gates for AI capability boundaries, uncertainty, source evidence, approval load, permissions, progress labels, recovery, accessibility, and automation value before user research or benchmark evidence can be treated as launch-ready.
- [`06-delivery/telemetry-and-experience-instrumentation-matrix.md`](06-delivery/telemetry-and-experience-instrumentation-matrix.md) keeps product telemetry tied to user-value questions, explicit allowed properties, prohibited private content, outcome metrics, benchmarks, user-opinion coverage, Product Truth, and launch evidence.
- [`06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md`](06-delivery/customer-facing-claim-and-evidence-boundary-matrix.md) keeps public, SDK, support, security, release-note, demo, testimonial, and in-product claim language tied to exact source-quality, runtime, benchmark, user-research, telemetry, accessibility, security, privacy, Product Truth, and release evidence.
- [`06-delivery/research-experience-benchmark-suite.md`](06-delivery/research-experience-benchmark-suite.md) defines how Research turns those signals into repeatable benchmark scenarios for first-use, progressive waits, resume, automation, Scenario Lab, native companion, Product Truth, mobile, offline, and accessibility launch evidence.
- [`06-delivery/advanced-differentiation-benchmark-matrix.md`](06-delivery/advanced-differentiation-benchmark-matrix.md) defines how Research proves advanced differentiation against current OS recall, screen-action, browser-journey, workspace-layout, app-intent, generic automation, generic agent, and agent-observability comparators before making better-than claims.
- [`06-delivery/advanced-feature-incubation-and-prototype-governance.md`](06-delivery/advanced-feature-incubation-and-prototype-governance.md) defines how Research safely tests advanced features that other operating systems or AI tools do not combine, including guardrails, kill criteria, feature-flag plans, benchmark links, and Product Truth outcomes.
- [`06-delivery/public-signal-source-quality-and-citation-policy.md`](06-delivery/public-signal-source-quality-and-citation-policy.md) defines how Research classifies source quality, confidence, representativeness, bias, allowed excerpts, and allowed decisions before public, survey, customer, official, runtime, generated, or documentation-sweep signals can influence scope.
- [`06-delivery/external-signal-refresh-and-competitive-watch.md`](06-delivery/external-signal-refresh-and-competitive-watch.md) defines how Research keeps OS, workspace-agent, automation, model, browser, user-opinion, and practitioner evidence current without turning competitor motion into unmanaged scope.
- [`06-delivery/frontier-feature-watch-and-novelty-control.md`](06-delivery/frontier-feature-watch-and-novelty-control.md) defines the intake gate for frontier OS, browser, app-intent, workspace-agent, connected-app, automation, agent-observability, performance-UX, permission-governance, and user-opinion signals before they become accepted scope, prototypes, benchmarks, or claims.
- [`06-delivery/specification-signal-decision-ledger.md`](06-delivery/specification-signal-decision-ledger.md) keeps current public and competitive signals tied to explicit Product Truth-style decisions while the runtime ledger is not implemented.
- [`00-foundation/advanced-feature-opportunity-register.md`](00-foundation/advanced-feature-opportunity-register.md) keeps advanced opportunities sequenced behind source, citation, document, authorization, Activity, Product Truth, automation lifecycle, and release-evidence foundations.
- [`_meta/tooling-catalog.json`](_meta/tooling-catalog.json) is the machine-readable tooling decision catalog used by implementation planning.

## Documentation rules

1. Each accepted contract has a single, stable purpose.
2. Requirements use durable identifiers and one primary implementation owner.
3. Architecture changes require an ADR or an explicit update to the governing contract.
4. Overview files navigate; they do not override canonical contracts.
5. Documentation must distinguish specification, partial implementation, and verified runtime behavior.
6. Every implementation slice identifies required reading, dependencies, deliverables, and completion evidence.
7. Machine-readable `_meta` files are validated in CI and must remain synchronized with prose contracts.
8. Time-sensitive provider and tooling claims include a review date and official reference.
9. Canonical documents must have a clear document type, primary reader task, examples or acceptance criteria where implementation could drift, and a stale-document retirement path.
10. Status ledgers must remain synchronized with the implementation build plan, all first-level docs directories must remain mapped with concrete purpose text in the `docs/README.md` directory map, all canonical docs must remain indexed in `docs/README.md`, indexed in a contiguous duplicate-free `docs/START-HERE.md` read order, routed through agent metadata, every requirement must appear in the human-readable traceability matrix, and local links must remain valid through `pnpm docs:check` before documentation changes are accepted.

## Current maturity

Research is an implementation-ready specification. Runtime implementation begins with `foundation-01` and proceeds through dependency-controlled slices. `foundation-01` owns the reproducible workspace, bootstrap, simulators, quality gates, supply-chain controls, and provenance evidence. No document may imply that a specified capability is already working unless the implementation ledger contains evidence.
