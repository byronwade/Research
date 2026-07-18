# Research system architecture

## Architectural style

Research begins as a modular TypeScript monolith deployed on Vercel. The web application and Hono API share one deployment and one transactional data model, while expensive or risky work is delegated to durable workflows, queues, and isolated workers.

```text
TanStack Start application
├── Chat and streaming UI
├── Document canvas
├── Source ledger, evidence viewer, Trust dashboard, and maintenance review
├── Studio and GitHub surfaces
└── Hono API under /api
        │
        ├── Domain services and policy enforcement
        ├── AI SDK and AI Gateway
        ├── Vercel Workflows and queues
        ├── Parser, browser, research, and export workers
        └── Postgres, Blob, cache, and search indexes
```

## Domain packages

- `projects`: Project identity, membership, policy, and lifecycle.
- `chat`: conversations, messages, branches, attachments, and tool events.
- `documents`: canonical Markdown, stable blocks, revisions, patches, and exports.
- `collaboration`: comments, mentions, assignments, suggestions, reviews, decision records, presence, and collaboration-safe projections.
- `sources`: source lifecycle, immutable versions, parsing derivatives, permissions, and synchronization.
- `evidence`: evidence spans, claims, support relations, contradiction, and freshness.
- `retrieval`: lexical, vector, metadata, entity, scholarly, and code retrieval.
- `research`: research contracts, runs, tasks, budgets, approvals, and integration.
- `activity`: Project activity timeline, review queue, action cards, automation registry projections, Automation Run Debugger projections, activity projections, and replay-safe event views.
- `command-center`: command descriptors, command catalog, shortcut bindings, command invocations, recommendations, and command execution routing.
- `spatial-workbench`: Project-scoped Worksets, pane layouts, layout snapshots, adaptive layout suggestions, progressive pane hydration, and projection-safe restore behavior.
- `focus-state`: per-user Project Focus State, Resume Checkpoints, Resume Digests, Focus Sessions, attention items, and notification suppression projections.
- `device-continuity`: DeviceCapabilityProfiles, LocalCachePolicies, LocalCacheManifests, OfflineDrafts, OfflineActionQueueItems, SyncAttempts, SyncConflicts, DeviceContinuityLinks, service-worker policy, mobile and installed-app capability labels, reconnect policy, and local-cache invalidations.
- `native-companion`: optional desktop shell, browser extension, OS share target, active-tab capture, selected-context capture, global command bridge, tray/menu status, notification deep-link bridge, file-watch grants, NativeContextPackets, NativeCaptureIntents, NativePermissionGrants, version policy, and emergency revocation controls.
- `preference-learning`: PreferencePolicies, PreferenceItems, PreferenceObservations, AdaptiveInterfaceProfiles, PreferenceSuggestions, PreferenceExplanations, PreferenceConflicts, personalization scope enforcement, model-context minimization, and preference invalidations.
- `work-control`: Project Operating Layer projections, Work Packets, WorkContextSnapshots, NextActionCandidates, repeated-work capture, recommendation observations, and cross-surface invalidation.
- `project-health`: Project Health Snapshots, HealthSignals, HealthLineageEdges, HealthFindings, RepairPlaybooks, RepairRuns, SupportDiagnosticBundle refs, support-safe diagnostics, outcome observations, false-cause controls, diagnostic-waste records, and repair invalidations.
- `scenario-simulation`: Scenario records, input snapshots, simulation plans, simulated effects, option comparisons, decisions, apply candidates, invalidations, live-test classification, and outcome observations.
- `reversal`: ReversalCapabilities, ReversalRecords, ReversalSnapshots, RecoveryActionCards, CompensationPlans, CompensationSteps, ReconciliationChecks, invalidations, and recovery outcome observations.
- `approval-policy`: delegated trust policies, approval requests, approval batches, approval receipts, grant lifecycle, fatigue signals, and fail-closed mutation enforcement.
- `progressive-delivery`: latency budgets, ProgressiveDeliveryEnvelopes, PartialResults, FastPathSnapshots, SpeculativePreparation, status vocabulary, stream replay, and permission-safe cache policy.
- `project-map`: Project Atlas views, local neighborhoods, path queries, Impact Reports, map suggestions, redaction, invalidation, and large-Project projection policy.
- `intent-policy`: intent records, clarification decisions, deterministic preflight, approval receipts, and safe-assumption policy.
- `research-engines`: provider-neutral managed and open-source engine adapters.
- `model-council`: bounded multi-model or multi-engine comparison, disagreement, and verification workflows over authorized evidence.
- `agent-control-plane`: bounded workers, task packets, model roles, and tool policies.
- `automation-recipes`: Project-native recipe graphs, recipe versions, triggers, typed steps, gates, simulations, dry-run review inputs, recipe runs, templates, library entries, recommendations, and invalidations.
- `automation-outcomes`: outcome windows, scorecards, friction events, adaptive routing recommendations, and useful-outcome evaluation.
- `context-packs`: minimized, versioned, policy-bound context bundles for models, agents, MCP clients, SDK users, and human handoff.
- `memory`: inspectable Project memory and accepted decisions.
- `artifacts`: Studio artifact contracts and versioning.
- `github`: GitHub App connections, repository snapshots, code indexes, and contribution proposals.
- `publishing`: public/private projections and immutable publication snapshots.
- `maintenance`: SourceFreshnessPolicies, SourceChangeSets, locator mappings, ClaimRevalidations, MaintenanceRuns, MaintenanceImpactSummaries, MaintenancePatchProposals, MaintenanceActionCards, MaintenanceSchedules, MaintenanceOutcomeObservations, source-change propagation, publication blockers, and no-drift updates.
- `platform-api`: asynchronous public API, operations, webhooks, SSE, and MCP.
- `support`: SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, and break-glass reviews.
- `accessibility-i18n`: AccessibilityProfiles, LocaleProfiles, LanguageDirectionMetadata, AccessibleOutputManifests, TranslationArtifacts, locale-neutral API policy, and accessible-output validation.
- `abuse-prevention`: AbusePolicies, AbuseSignals, AbuseCases, AbuseDecisions, AbuseThrottles, AbuseReviews, AbuseAppeals, AbuseEnforcementActions, outcome observations, provider-policy normalization, and content-minimized enforcement.
- `entitlements`, `notifications`, `product-analytics`, `feedback`, `governance`, and `admin`: commercial and operating systems.
- `product-truth`: feedback and competitor signals, themes, SignalDecisionLedger projections, contradictions, requirements impact, documentation impact, release-evidence links, and non-action decisions.

## Canonical data chain

```text
External object
→ Source
→ immutable SourceVersion
→ ParsedElement
→ EvidenceSpan
→ ClaimEvidence
→ Claim
→ DocumentBlock / MemoryItem / ArtifactComponent
→ DocumentRevision / ArtifactVersion
→ PublicationSnapshot / Export
```

Raw source snapshots are immutable. Parsing, chunks, embeddings, summaries, and indexes are derived and reproducible. Citations always resolve to a source version and an exact locator.

## Persistence

- Postgres is the transactional authority.
- PostgreSQL full-text search and `pg_trgm` support lexical retrieval.
- pgvector supports semantic candidate retrieval.
- Vercel Blob stores immutable originals, snapshots, media derivatives, generated files, and exports.
- Redis is limited to locks, ephemeral caches, idempotency coordination, and rate limits.
- Durable workflow state is recorded through Vercel Workflows and mirrored into application-owned run records.

## AI boundary

The domain never depends directly on one provider model. Product roles such as `classifier`, `planner`, `extractor`, `verifier`, `writer`, `research-frontier`, and `vision-parser` resolve through a capability registry. AI Gateway supplies provider routing, fallback, usage attribution, and observability. Provider-specific features remain optional adapters.

## Workflow boundary

Long-running work uses a deterministic outer workflow with bounded agentic stages. Each stage receives an immutable task packet with source permissions, tool allowlists, budgets, schemas, and completion criteria. Agents return typed results; they do not directly mutate canonical documents, memory, publications, or repositories.

## Authorization boundary

Authorization is enforced before retrieval, reranking, model context assembly, export, publication, support access, and connector actions. Private source content must not leak through analytics, traces, SupportDiagnosticBundles, support tools, caches, or public projections.

Fast Paths, preloading, stale-while-revalidate projections, SpeculativePreparation, and progressive delivery envelopes are also behind the authorization boundary. A cached or speculative result is usable only after current Project policy, source-version, retention, rights, expected-version, viewer-capability, privacy, budget, prepared-state visibility, and invalidation checks pass.

Device continuity, local cache, offline drafts, service workers, push, background sync, and installed-app behavior are also behind this boundary. Local state is a projection, draft, or pending intent over canonical Project records; reconnect reauthorizes every local cache manifest, offline packet, queued command, handoff ref, Workset ref, and draft before use.

Native companion and browser extension behavior is also behind this boundary. Active-tab capture, selected text, share targets, file-watch grants, global shortcuts, notification actions, and deep links create minimized context packets or command invocations; they cannot perform ambient OS/browser capture or canonical mutation without server-owned authorization, preflight, expected versions, idempotency, ActivityEvents, audit, and approvals where required.

Source-change maintenance is also behind this boundary. Source refresh, repository webhooks, connector synchronization, official-reference reviews, stale-claim sweeps, and maintenance schedules create content-minimized maintenance runs and typed patch proposals; they cannot silently mutate Documents, MemoryItems, Publications, Product Truth decisions, requirements, external systems, or public outputs without the owning service revalidating authorization, expected versions, source policy, publication blockers, idempotency, ActivityEvents, audit, and approval requirements.

Automation registry, dry-run review, and run-debugger projections are also behind this boundary. Automation rows, dry-run previews, debug traces, failure classes, replay eligibility, trace comparisons, fixture candidates, support-safe diagnostics, and outcome links are assembled only from authorized Project records and cannot expose hidden reasoning, raw private content, connector payloads, credentials, private URLs, or support-only notes without an explicit governing access path.

Adaptive personalization is also behind this boundary. Preference records, adaptive interface profiles, correction observations, and model-context preference summaries are scoped projections over authorized Project state and explicit user controls; they cannot grant access, satisfy evidence requirements, change approval class, widen connector scope, override provider or residency policy, or create hidden cross-Project profiles.

Accessibility and internationalization metadata never bypass this boundary. Language detection, translation, OCR, transcription, locale rendering, accessible-output manifests, and support diagnostics operate only on authorized Project records and preserve source-version, evidence, retention, residency, and audit lineage.

Abuse prevention also sits behind this boundary. Source acquisition, public publishing, automation, API, MCP, GitHub proposals, connector writes, notifications, exports, and support actions run deterministic abuse preflight over authorization, rights, provider policy, quotas, budget, expected versions, and action class before side effects. Abuse telemetry stores content-minimized refs, hashes, counters, safe labels, policy snapshots, and review outcomes, not private source bodies, prompts, document bodies, connector payloads, credentials, hidden reasoning, screenshots, or private URLs.

## Deployment boundary

The first release uses one web/API deployment plus isolated workers. Services are extracted only when workload, security, residency, or scaling evidence requires it. Internal package ports preserve that option without adding premature distributed-system complexity.
