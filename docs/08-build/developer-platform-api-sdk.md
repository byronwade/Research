# Developer platform API and SDK

The developer platform exposes Research capabilities without bypassing the product control plane. The API must preserve Project boundaries, source permissions, idempotency, evidence, and auditability.

See also [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md).

## API principles

- Long-running operations are asynchronous.
- Mutations are idempotent.
- Concurrency uses expected base versions.
- Restore, replay, withdrawal, compensation, and reconciliation commands revalidate current recovery capability.
- Server-owned intent normalization, clarification policy, preflight, and approval receipts cannot be bypassed.
- Delegated-trust grants, approval batches, approval-load budgets, fatigue signals, and revocations cannot bypass mutation-boundary policy checks.
- AbusePolicies, AbuseDecisions, AbuseThrottles, AbuseReviews, AbuseAppeals, and enforcement actions cannot be bypassed by API keys, SDK retries, MCP tools, cursor pagination, webhook replay, service-account fanout, or alternate provider routes.
- Errors are stable and documented.
- Events are replayable.
- Webhooks are signed.
- SDKs are thin typed wrappers over public contracts.
- API access cannot bypass UI policy.
- Accessibility, language, direction, and locale APIs preserve locale-neutral canonical fields; localized summaries are projections.

## Core resources

- Projects;
- Sources;
- SourceVersions;
- Documents;
- DocumentRevisions;
- Claims;
- EvidenceSpans;
- CommandActionDescriptors;
- CommandInvocations;
- ShortcutBindings;
- SpatialWorkbenchStates;
- Worksets;
- PaneLayoutTemplates;
- PaneInstances;
- WorksetSnapshots;
- SpatialLayoutSuggestions;
- ProjectHealthSnapshots;
- HealthSignals;
- HealthLineageEdges;
- HealthFindings;
- RepairPlaybooks;
- RepairRuns;
- RepairOutcomeObservations;
- SupportDiagnosticBundles;
- SupportAccessRequests;
- SupportAccessSessions;
- SupportAuditExports;
- AbusePolicies;
- AbuseSignals;
- AbuseCases;
- AbuseDecisions;
- AbuseThrottles;
- AbuseReviews;
- AbuseAppeals;
- AbuseEnforcementActions;
- AbuseOutcomeObservations;
- AccessibilityProfiles;
- LocaleProfiles;
- LanguageDirectionMetadata;
- AccessibleOutputManifests;
- TranslationArtifacts;
- Scenarios;
- SimulationRuns;
- ScenarioApplyCandidates;
- SimulationOutcomeObservations;
- ReversalCapabilities;
- ReversalRecords;
- RecoveryActionCards;
- CompensationPlans;
- CompensationSteps;
- ReconciliationChecks;
- ReversalOutcomeObservations;
- TruthSignals;
- TruthThemes;
- TruthLinks;
- SignalDecisionLedger entries;
- Contradictions;
- TruthDecisions and NonActionDecisions;
- AutomationOutcomeScorecards;
- AdaptiveRoutingRecommendations;
- AutomationRunDebugTraces;
- ContextPacks;
- IntentRecords and PreflightChecks;
- DelegatedTrustPolicies;
- DelegatedTrustGrants;
- ApprovalRequests;
- ApprovalBatches;
- ApprovalDecisions;
- ApprovalLoadBudgets;
- ApprovalFatigueSignals;
- LatencyBudgetPolicies;
- ProgressiveDeliveryEnvelopes;
- ProgressiveDeliveryEvents;
- PartialResults;
- FastPathSnapshots;
- SpeculativePreparations;
- ResearchRuns;
- Operations;
- Publications;
- Exports;
- Webhooks;
- API keys and service accounts.

## Operation pattern

Long operations return:

```text
operation_id
intent_id
status
resource_type
resource_id
progress
created_at
updated_at
links
error
```

Clients can poll or subscribe through server-sent events. Cancellation is explicit and audited.

## SDKs

Initial SDK targets:

- TypeScript;
- Python.

SDKs should include:

- typed client;
- retry and backoff;
- idempotency helpers;
- operation polling;
- SSE helpers;
- webhook signature verification;
- upload helpers;
- examples using synthetic data.

## CLI

The CLI should support:

- authentication;
- Project inspection;
- source upload;
- document export;
- operation watch;
- recovery options;
- recovery action watch;
- webhook test;
- local diagnostics.
- support diagnostic bundle inspection and export where policy allows;
- support access request approval, denial, narrowing, and revocation where policy allows.
- abuse decision inspection, review resolution, appeal submission, throttle inspection, and enforcement release where policy allows;
- accessibility profile and locale profile inspection;
- accessible-output manifest inspection for exports and public projections;
- language and direction metadata inspection for sources, citations, document blocks, and exports.

The CLI does not replace the API contract.

## MCP

MCP resources can expose:

- Project context;
- document trees;
- source inventories;
- claim and evidence summaries;
- product-truth board summaries, SignalDecisionLedger entries, contradiction records, truth links, and official-reference freshness state;
- automation run debug traces, failure annotations, replay cases, automation outcome scorecards, metric definitions, adaptive recommendations, and outcome action cards;
- context-pack manifests and authorized payloads;
- operation state.
- progressive delivery, Partial Result, Fast Path, stale projection, SpeculativePreparation policy, hit/miss, denial, cancellation, and expiry summaries.
- approval request, approval batch, delegated-trust grant, approval-load budget, and fatigue-signal summaries.
- Spatial Workbench, Workset, pane, snapshot, stale-ref, redaction, and layout-suggestion summaries.
- Project Health, HealthLineageEdge, finding, suspected-cause, counterevidence, unknown-state, false-cause, diagnostic-waste, repair playbook, repair dry-run, RepairRun, and repair outcome summaries.
- SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, support audit export, and break-glass review summaries.
- AbusePolicy, AbuseSignal, AbuseCase, AbuseDecision, AbuseThrottle, AbuseReview, AbuseAppeal, AbuseEnforcementAction, provider-policy, false-positive, and abuse outcome summaries.
- AccessibilityProfile, LocaleProfile, LanguageDirectionMetadata, AccessibleOutputManifest, TranslationArtifact, localized summary, and unsupported-language limitation summaries.
- Scenario, simulation run, simulated effect, option comparison, stale-plan, live-test warning, apply-candidate, and simulation outcome summaries.
- ReversalCapability, ReversalRecord, RecoveryActionCard, CompensationPlan, ReconciliationCheck, irreversible acknowledgement, and recovery outcome summaries.
- command catalog entries and permitted command descriptors.

MCP tools must enforce the same authorization, idempotency, expected-version, and audit rules as the API. Context-pack resources follow [`../02-architecture/context-packs-and-agent-handoff.md`](../02-architecture/context-packs-and-agent-handoff.md); pack URIs are identifiers, not bearer secrets.
MCP tools that discover or invoke commands follow [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md); they may propose or invoke permitted descriptors, but they cannot bypass shortcut conflict checks, preflight, approval, idempotency, expected versions, side-effect ledgers, or ActivityEvents.
MCP tools that start or approve work also follow [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md).
MCP tools that inspect, create, switch, suspend, restore, share, or delete Worksets follow [`../02-architecture/spatial-workbench-layout-and-worksets.md`](../02-architecture/spatial-workbench-layout-and-worksets.md); they cannot treat Workset refs as authorization, expose raw content through layout snapshots, or bypass pane reauthorization.
MCP tools that inspect health, causal lineage, dry-run repairs, start RepairRuns, or resolve HealthFindings follow [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md); they cannot bypass diagnostic authorization, expected versions, preflight, approval, support-grant policy, side-effect ledgers, causal evidence boundaries, or content minimization.
MCP tools that inspect SupportDiagnosticBundles, decide SupportAccessRequests, revoke SupportAccessSessions, or export support audit evidence follow [`../02-architecture/tenancy-authorization-and-capabilities.md`](../02-architecture/tenancy-authorization-and-capabilities.md), [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md), and [`../02-architecture/project-health-diagnostics-and-repair.md`](../02-architecture/project-health-diagnostics-and-repair.md); they cannot treat bundle refs as bearer credentials, expose private content by default, approve their own access, extend session scope, bypass step-up, mutate Project state, or omit Activity and audit evidence.
MCP tools that inspect AbusePolicies, AbuseDecisions, AbuseCases, AbuseReviews, AbuseAppeals, AbuseThrottles, AbuseEnforcementActions, or AbuseOutcomeObservations follow [`../02-architecture/abuse-prevention-policy-and-enforcement.md`](../02-architecture/abuse-prevention-policy-and-enforcement.md); they cannot bypass abuse preflight, retry blocked work under a new identity, expose private content through diagnostics, create appeal spam, infer hidden source existence, suppress emergency controls, lower provider-policy restrictions, or omit Activity and audit evidence.
MCP tools that inspect or modify accessibility and locale settings, language and direction metadata, accessible output manifests, or translation artifacts follow [`../02-architecture/accessibility-internationalization-and-locale-policy.md`](../02-architecture/accessibility-internationalization-and-locale-policy.md); they cannot infer language from location alone, treat translation as source evidence, expose private content through locale diagnostics, change canonical values through localized presentation, or bypass authorization before translation, OCR, transcription, embedding, reranking, or model context assembly.
MCP tools that inspect scenarios, start simulations, compare options, create apply candidates, or observe simulation outcomes follow [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md); they cannot bypass snapshot authorization, live-test labeling, stale-plan invalidation, expected versions, preflight, approval, side-effect ledgers, or content minimization.
MCP tools that inspect Project history, show recovery options, restore, replay, withdraw, compensate, reconcile, or acknowledge irreversible effects follow [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md); they cannot bypass recovery authorization, expected versions, stale eligibility checks, approval, side-effect reconciliation, compensation policy, irreversible-effect labels, or content minimization.
MCP tools that inspect, propose, approve, batch, revoke, or rely on delegated-trust grants also follow [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md); they cannot widen grants, suppress hard stops, reuse stale receipts, or perform side effects without server-owned verification.
MCP tools that inspect progressive state or use prepared resources also follow [`../02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](../02-architecture/progressive-delivery-and-fast-path-cache-policy.md); they cannot bypass Fast Path reauthorization, SpeculativePreparation ladder checks, budget policy, privacy policy, prepared-state visibility, cancellation, expiry, or hit/miss outcome recording.
MCP tools that propose or resolve product-truth changes follow [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md); they may inspect SignalDecisionLedger entries and propose documentation patches, implementation issues, and decision records, but they cannot silently rewrite canonical requirements or status ledgers.
MCP tools that expose or resolve automation outcome recommendations follow [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md); they may create action cards, but they cannot silently widen permissions, publish, bill, send, merge, delete, or lower approval class.
MCP tools that inspect automation debug traces follow [`../02-architecture/activity-event-log-and-replay.md`](../02-architecture/activity-event-log-and-replay.md) and [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md); they cannot expose raw private content, hidden reasoning, credentials, full provider traces, or connector payloads, and they cannot replay, retry, or repair without the owning ActionCard or command route.

## Launch gates

The developer platform requires:

- OpenAPI 3.1;
- generated SDK fixtures;
- stable error catalog;
- idempotency tests;
- command descriptor, shortcut, preflight, approval-class, ActivityEvent, and content-minimization tests;
- Spatial Workbench, Workset, pane, snapshot, stale-ref, redaction, restore, progressive hydration, and layout-suggestion tests;
- Project Health snapshot, HealthLineageEdge, finding, suspected-cause, counterevidence, unknown-state, false-cause, diagnostic-waste, repair playbook, repair dry-run, RepairRun, support-safe diagnostic, authorization, approval, and private-content minimization tests;
- SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, support audit export, break-glass review, expiry, revocation, self-approval rejection, stale-policy rejection, and private-content minimization tests;
- AbusePolicy, AbuseSignal, AbuseDecision, AbuseThrottle, AbuseReview, AbuseAppeal, AbuseEnforcementAction, AbuseOutcomeObservation, provider-policy denial, content-safety block, review queue, appeal, false-positive, emergency-control, rate-limit, and private-content minimization tests;
- AccessibilityProfile, LocaleProfile, LanguageDirectionMetadata, AccessibleOutputManifest, TranslationArtifact, stable localized summary, locale-neutral API field, Unicode, RTL, mixed-direction, accessible export, unsupported-language limitation, and private-content minimization tests;
- Scenario snapshot, simulation plan, simulated effect, comparison, live-test labeling, stale-plan rejection, apply-candidate, authorization, approval, and private-content minimization tests;
- Reversal capability, Project history, RecoveryActionCard, restore, replay, withdrawal, compensation, reconciliation, irreversible-effect, authorization, approval, stale recovery, and private-content minimization tests;
- intent, preflight, and approval-receipt tests;
- delegated-trust policy, grant, approval batch, approval-load budget, fatigue-signal, revocation, stale receipt, and mutation-boundary fail-closed tests;
- progressive delivery, Partial Result, Fast Path, SpeculativePreparation ladder, speculative budget, privacy denial, hit/miss, cancellation, and expiry tests;
- product-truth authorization, SignalDecisionLedger projection, contradiction-transition, official-reference freshness, and non-action decision tests;
- automation run debugger authorization, trace redaction, failure taxonomy, replay-case, fixture-creation, scorecard rebuild, adaptive-routing, approval-class, and private-content minimization tests;
- webhook replay tests;
- SSE reconnect tests;
- rate-limit and quota behavior;
- audit and support runbooks.
