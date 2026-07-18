# Developer platform API

Research exposes the same domain capabilities used by the browser through a versioned Hono API.

## Resource families

- Organizations, memberships, service accounts, and Projects.
- Conversations, messages, branches, attachments, and tool events.
- Sources, source versions, parsing jobs, synchronization, search, and context packs governed by [`context-packs-and-agent-handoff.md`](context-packs-and-agent-handoff.md).
- Command descriptors, Project Action Surface projections, command catalog entries, shortcut bindings, command invocations, recommendations, and permitted command execution governed by [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md).
- SpatialWorkbenchState, Worksets, PaneLayoutTemplates, PaneInstances, WorksetSnapshots, SpatialLayoutSuggestions, and layout observations governed by [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md).
- Focus State, Resume Checkpoints, Resume Digests, AttentionItems, Focus Sessions, and notification suppression governed by [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md).
- DeviceCapabilityProfiles, LocalCachePolicies, LocalCacheManifests, OfflineDrafts, OfflineActionQueueItems, SyncAttempts, SyncConflicts, DeviceContinuityLinks, and local-cache invalidations governed by [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md).
- NativeCompanionInstalls, NativePermissionGrants, NativeContextPackets, NativeCaptureIntents, NativeFileWatchGrants, NativeCommandBridges, NativeNotificationBindings, companion queues, deep-link resolution, and support-safe diagnostic summaries governed by [`native-companion-shell-and-os-adapter-policy.md`](native-companion-shell-and-os-adapter-policy.md).
- PreferencePolicies, PreferenceItems, PreferenceObservations, AdaptiveInterfaceProfiles, PreferenceSuggestions, PreferenceExplanations, PreferenceConflicts, reset/export resources, and preference invalidations governed by [`adaptive-preference-learning-and-interface-policy.md`](adaptive-preference-learning-and-interface-policy.md).
- WorkPackets, WorkContextSnapshots, NextActionCandidates, WorkControlObservations, repeated-work capture, and recipe draft candidates governed by [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md).
- ProjectHealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, RepairPlaybooks, RepairRuns, support-safe diagnostics, and repair outcome observations governed by [`project-health-diagnostics-and-repair.md`](project-health-diagnostics-and-repair.md).
- Support cases, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, and break-glass reviews governed by [`tenancy-authorization-and-capabilities.md`](tenancy-authorization-and-capabilities.md), [`project-health-diagnostics-and-repair.md`](project-health-diagnostics-and-repair.md), and [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md).
- AbusePolicies, AbuseSignals, AbuseCases, AbuseDecisions, AbuseThrottles, AbuseReviews, AbuseAppeals, AbuseEnforcementActions, and AbuseOutcomeObservations governed by [`abuse-prevention-policy-and-enforcement.md`](abuse-prevention-policy-and-enforcement.md).
- AccessibilityProfiles, LocaleProfiles, LanguageDirectionMetadata, AccessibleOutputManifests, TranslationArtifacts, and locale-aware export summaries governed by [`accessibility-internationalization-and-locale-policy.md`](accessibility-internationalization-and-locale-policy.md).
- Scenarios, ScenarioInputSnapshots, SimulationPlans, SimulationRuns, SimulatedEffects, ScenarioComparisons, ScenarioDecisions, ScenarioApplyCandidates, invalidations, and SimulationOutcomeObservations governed by [`scenario-simulation-engine.md`](scenario-simulation-engine.md).
- ReversalCapabilities, ReversalRecords, ReversalSnapshots, RecoveryActionCards, CompensationPlans, CompensationSteps, ReconciliationChecks, invalidations, and ReversalOutcomeObservations governed by [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md).
- ProgressiveDeliveryEnvelopes, ProgressiveDeliveryEvents, PartialResults, LatencyBudgetPolicies, FastPathSnapshots, SpeculativePreparations, and speculative-preparation diagnostics governed by [`progressive-delivery-and-fast-path-cache-policy.md`](progressive-delivery-and-fast-path-cache-policy.md).
- Project Atlas views, map queries, local neighborhoods, path queries, Impact Reports, suggestions, and invalidations governed by [`project-map-and-impact-analysis.md`](project-map-and-impact-analysis.md).
- Intent records, clarification decisions, preflight summaries, and approval receipts governed by [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md).
- DelegatedTrustPolicies, DelegatedTrustGrants, ApprovalRequests, ApprovalBatches, ApprovalDecisions, ApprovalLoadBudgets, ApprovalFatigueSignals, revocations, and invalidations governed by [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md).
- Claims, evidence spans, contradictions, and verification.
- Product truth signals, evidence references, themes, opportunities, truth links, SignalDecisionLedger entries, contradiction records, truth decisions, non-action decisions, and documentation patch proposals governed by [`product-truth-graph-and-contradiction-detection.md`](product-truth-graph-and-contradiction-detection.md).
- Automation Recipes, RecipeVersions, triggers, steps, gates, simulations, recipe runs, Automation Run Debugger traces, recipe templates, library entries, recommendations, and invalidations governed by [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md).
- Automation outcome scorecards, metric definitions, observations, friction events, adaptive-routing recommendations, and outcome action cards governed by [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md).
- Research Runs, tasks, plans, approvals, usage, and partial artifacts.
- Documents, revisions, blocks, patches, and exports.
- Comment threads, mentions, assignments, suggestions, review requests, decision records, and presence governed by [`collaboration-comments-and-decisions.md`](collaboration-comments-and-decisions.md).
- Artifacts and artifact versions.
- Memory and Project directives.
- Publications and public/private projections.
- GitHub workspaces, snapshots, indexes, change proposals, and pull-request operations.
- Operations, webhooks, events, quotas, usage, and billing views.

## Asynchronous operations

Long-running commands return `202 Accepted`:

```http
POST /v1/projects/{projectId}/research-runs
Idempotency-Key: ...
```

The response contains an Operation URL and ProgressiveDeliveryEnvelope linked to the normalized intent version. Clients can poll, consume replayable server-sent events, reconnect with `Last-Event-ID`, cancel eligible work, approve blocked stages, and inspect Partial Results, stale labels, cache state, usage, warnings, assumptions, preflight summaries, and stable error details.

## API guarantees

- OpenAPI 3.1 generated from shared schemas.
- Stable Problem Details errors.
- OAuth and service-account scopes.
- Idempotency keys on mutations.
- ETags and expected-base-version concurrency.
- Cursor pagination and consistent filtering.
- Signed, replay-protected webhooks.
- Dry-run and estimate modes for costly or destructive operations.
- Scenario simulation modes for Project-wide option comparison, with live connector tests labeled separately from no-side-effect simulations.
- Reversible Work modes for Project History, recovery eligibility, restore, replay, withdrawal, compensation, reconciliation, and irreversible acknowledgement, with current-state revalidation before mutation.
- Server-owned command descriptor resolution, shortcut conflict checks, command preflight, and ActivityEvent writing for command-originated work.
- Server-owned Project Action Surface projection for API, SDK, CLI, MCP, native companion, browser extension, connected-app, and recipe action exposure, with compact discovery metadata, schema lazy-loading where allowed, disabled reasons, descriptor refs, preflight, approval, expected-version, idempotency, and ActivityEvent linkage.
- Server-owned Spatial Workbench and Workset reauthorization, stale or redacted pane labeling, snapshot restore, layout suggestion resolution, ActivityEvent writing for shared or material layout changes, and progressive pane hydration.
- Server-owned focus-state expected-version checks, resume-digest rebuilds, attention-item redaction, Focus Session notification suppression, and caught-up checkpoint writes.
- Server-owned device capability projection, local-cache policy summaries, local-cache manifest invalidation, offline-draft submission, offline-queue blocked-state handling, reconnect reauthorization, SyncConflict creation, DeviceContinuityLink expiry, and clear-cache or sign-out effects with authorization, redaction, expected-version, idempotency, and preflight checks.
- Server-owned native companion install projection, permission-grant verification, capture preview, context-packet minimization, file-watch policy, command-bridge descriptor resolution, notification deep-link authorization, queue reauthorization, emergency revocation, and support-safe diagnostic projection with authorization, redaction, expected-version, idempotency, and preflight checks.
- Server-owned PreferencePolicy selection, PreferenceItem update and correction, PreferenceObservation minimization, AdaptiveInterfaceProfile rebuild, PreferenceSuggestion resolution, PreferenceExplanation generation, PreferenceConflict routing, preference reset/export, model-context summary assembly, and invalidation propagation with authorization, redaction, expected-version, idempotency, and policy-managed control checks.
- Server-owned WorkPacket assembly, NextActionCandidate ranking, recommendation dismissal, correction, invocation, repeated-work capture, and recipe-draft candidate creation with authorization, redaction, stale-state, and expected-version checks.
- Server-owned source-change maintenance APIs for SourceFreshnessPolicy reads, MaintenanceRun inspection, ClaimRevalidation projection, MaintenancePatchProposal review, MaintenanceActionCard resolution, MaintenanceSchedule controls, blocked-publication projection, and outcome observations with authorization, expected-version, preflight, idempotency, approval, and redaction checks.
- Server-owned Project Health snapshot assembly, HealthFinding classification, repair-playbook dry-runs, RepairRun creation, support-safe diagnostic packaging, and repair outcome observation with authorization, redaction, expected-version, idempotency, preflight, approval, and side-effect checks.
- Server-owned support case projection, SupportDiagnosticBundle assembly, SupportAccessRequest decisioning, SupportAccessSession start, expiry, revocation, break-glass review, audit export, and support event publication with authorization, redaction, content-minimization, step-up, approval, expected-version, and audit checks.
- Server-owned abuse preflight, policy snapshot selection, provider-policy normalization, throttle evaluation, review ActionCard creation, appeal handling, false-positive outcome recording, enforcement release, and emergency-control activation with authorization, redaction, content-minimization, expected-version, idempotency, audit, and ActivityEvent checks.
- Server-owned accessibility and locale profile updates, language and direction metadata persistence, accessible-output manifest validation, translation-artifact lineage, locale-neutral canonical fields, localized summary projection, and export degradation/blocker state with authorization, privacy, source-version, evidence, and retention checks.
- Server-owned Scenario input snapshot assembly, SimulationPlan execution, SimulatedEffect classification, live-test labeling, stale-plan invalidation, comparison, decision recording, apply-candidate creation, and outcome observation with authorization, redaction, expected-version, idempotency, preflight, approval, and side-effect checks.
- Server-owned reversal capability calculation, Project History filtering, recovery snapshot assembly, recovery action-card creation, compensation planning, reconciliation checking, irreversible-effect acknowledgement, and outcome observation with authorization, redaction, expected-version, idempotency, preflight, approval, and side-effect checks.
- Server-owned progressive-delivery envelopes, stream replay cursors, Partial Result state, Fast Path reauthorization, stale projection labels, cache invalidation, SpeculativePreparation ladder evaluation, speculative budget enforcement, and cancellation acknowledgement.
- Server-owned Atlas query authorization, graph depth limits, path query redaction, Impact Report generation, map suggestion ActionCards, and projection invalidation.
- Server-owned intent normalization, clarification, deterministic preflight, and approval receipt validation.
- Server-owned delegated-trust policy evaluation, grant proposal, grant verification, approval request creation, approval batch grouping, approval decision recording, stale receipt rejection, fatigue-signal routing, revocation, and mutation-boundary fail-closed enforcement.
- Server-owned product-truth classification, SignalDecisionLedger projection, contradiction detection, and reviewed decision transitions for requirements, documentation, implementation status, and release evidence.
- Server-owned recipe draft compilation, Project Action Surface descriptor binding, validation, simulation, trigger dedupe, owner approval, canary activation, expected-version checks, recipe-run inspection, Automation Run Debugger redaction, trace comparison, replay eligibility, and fixture creation for recipe-originated work.
- Server-owned automation outcome definitions, scorecard rebuilds, and adaptive-routing recommendations that preserve authorization, expected versions, and approval classes.
- Capability discovery for models, source types, artifact types, connectors, and tools.
- TypeScript and Python SDKs generated from the canonical contract.
- Read-first MCP resources and bounded tools.

## Security

API authorization is Project- and resource-aware. A service account receives explicit scopes and source visibility. API logs, analytics, and webhook payloads minimize source content and never expose secrets or hidden reasoning traces. High-impact actions require approvals or separately granted write scopes that pass delegated-trust policy at the mutation boundary. Device continuity APIs are metadata-first; a local-cache manifest, offline lease, queued item, or DeviceContinuityLink cannot grant access or imply hidden resource existence after policy changes. Native companion APIs are metadata-first; an install, extension ID, grant, active-tab invocation, folder-watch ref, deep-link URL, or context-packet ref cannot grant access, bypass browser/OS permission boundaries, or expose raw selected text, browser history, screenshots, clipboard contents, local file contents, credentials, prompts, private document bodies, or hidden reasoning. Preference APIs are visible-control-first; PreferenceItems, explanations, exports, and model-context summaries cannot reveal hidden resources, cross Project boundaries, become factual evidence, or bypass policy-managed personalization state. Abuse APIs are content-minimized and cannot be used to infer private source existence, inspect private content, bypass throttles, retry blocked work under a new identity, or appeal by spam. Accessibility and locale APIs use stable locale-neutral canonical fields; localized summaries are projections and cannot change audit or evidence meaning. Support APIs are metadata-first; private-content support access requires a SupportAccessRequest and SupportAccessSession, never possession of a diagnostic bundle URL. SimulatedEffects are advisory records; API clients must use ScenarioApplyCandidates and owning mutation routes for any material change. ReversalCapabilities are advisory eligibility projections; API clients must use RecoveryActionCards and owning mutation routes for restore, replay, withdrawal, compensation, or reconciliation.
