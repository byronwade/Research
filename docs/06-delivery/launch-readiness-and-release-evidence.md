# Launch readiness and release evidence

General availability is an evidence decision over one immutable release candidate. It is not declared from feature count, a successful demo, documentation completeness, or one green CI run.

## Release evidence bundle

Every candidate records:

```text
release_id
source commit and repository state
immutable artifact digest
build environment and toolchain
lockfile and dependency graph
SBOM and provenance attestations
configuration schema and sanitized snapshot
documentation validation, document-type, terminology, authoring-quality, stale-document, duplicate-authority, dead-document, and unresolved-contradiction snapshot
semantic drift review packet, contradiction severity, same-change consistency, and unresolved semantic-drift snapshot
implementation-decision register, accepted decision, open decision, waiver, expiry, and review-trigger snapshot
public-signal source-quality, confidence, representativeness, bias, allowed-decision, citation, stale-source, and generated-summary lineage snapshot
UserResearchSegmentScreener, target segment, excluded segment, job-to-be-done, agency preference, AI trust posture, automation maturity, accessibility, locale, device, privacy, security, buyer/user/operator role, sampling, denominator, representativeness, bias, consent, retention, supported-claim, blocked-claim, owner, expiry, and revisit-trigger snapshot
UserOpinionEvidenceItem, UserOpinionCodebook, UserOpinionCodingAssignment, UserOpinionSynthesisRecord, codebook version, source locator, allowed excerpt, coding rationale, AI-assist disclosure, negative-evidence review, contradiction state, blocked-claim, owner, expiry, and revisit-trigger snapshot
feature-flag and model-role snapshot
feedback, discovery-theme, and experiment snapshot
product-truth graph, SignalDecisionLedger, contradiction, non-action decision, and official-reference freshness snapshot
external signal watch, competitor/OS/workspace-agent/model/browser capability refresh, stale-source, public-opinion confidence, and accepted/non-action decision snapshot
specification signal decision ledger or runtime SignalDecisionLedger snapshot with accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, and non-action decisions
FrontierSignalReview, frontier source-quality, currentness, user-opinion synthesis, affected requirements and docs, non-action alternative, copy-risk, second-authority risk, benchmark/incubation links, customer-claim blocker, owner, expiry, and revisit-trigger snapshot
AdvancedFeatureIncubation, AdvancedPrototypeRun, prototype type, dogfood flag, beta flag, kill criteria, guardrail metric, non-action alternative, and incubation decision snapshot
HumanAIInteractionReview, HumanAIInteractionFinding, AI capability boundary, source evidence, uncertainty, progress, permission, approval-load, recovery, accessibility, automation-outcome, unresolved-finding, and review-waiver snapshot
OutcomeMetricDefinition, StrategicBetScorecard, OutcomeReview, baseline, denominator, good-event definition, anti-metric, guardrail, outcome delta, and strategic-bet decision snapshot
ProductTelemetryEventSpec, instrumentation ID, event family, user-value question, allowed property, prohibited property, privacy classification, retention, sampling, aggregation, redaction-test, event-quality, and release-claim support snapshot
CustomerClaimEvidenceRecord, exact claim text, claim surface, allowed language, blocked language, scope, excluded case, source-quality, screened segment, runtime, user-research, telemetry, benchmark, outcome, security, privacy, accessibility, Product Truth, release-evidence, owner, approval, limitation, expiry, and revisit-trigger snapshot
ExperienceValidationPlan, ExperienceStudySession, ExperienceFinding, ExperienceEvidencePackage, dogfood limit, task-success, perceived-usability, performance-perception, automation-acceptance, accessibility participant, and unresolved-severity snapshot
UserOpinionCoverageRecord, surface coverage state, target segment, excluded segment, observed-task protocol, synthetic-user boundary, agent-as-user coverage, blocked claim, missing evidence, and revisit-trigger snapshot
ExperienceBenchmarkScenario, ExperienceBenchmarkRun, scenario good-event, benchmark blocker, benchmark regression, excluded-scenario, public-signal confidence, and benchmark waiver snapshot
AccessibilityProfile, LocaleProfile, LanguageDirectionMetadata, AccessibleOutputManifest, TranslationArtifact, WCAG journey, Unicode fixture, RTL fixture, and accessible export snapshot
AbusePolicy, AbuseSignal, AbuseCase, AbuseDecision, AbuseThrottle, AbuseReview, AbuseAppeal, AbuseEnforcementAction, abuse outcome, false-positive, and provider-policy snapshot
Project Action Surface descriptor, command catalog, shortcut binding, command invocation, action projection parity, compact tool metadata, disabled-reason, and command safety snapshot
focus state, resume checkpoint, resume digest, attention ranking, focus session, and notification suppression snapshot
spatial workbench state, Workset, pane layout template, pane instance, Workset snapshot, layout suggestion, and layout observation snapshot
native companion install, permission grant, context packet, capture intent, file-watch grant, command bridge, notification binding, queue, signed update, revocation, no-forced-browser-or-assistant path, and support-safe diagnostic snapshot
preference policy, preference item, AI-surface choice policy, observation, suggestion, explanation, conflict, adaptive interface profile, reset, export, migration or import review state, and preference invalidation snapshot
work packet, work context snapshot, next-action candidate, repeated-work capture, recommendation observation, and recipe-draft candidate snapshot
Project health snapshot, health signal, HealthLineageEdge, health finding, suspected cause, counterevidence, unknown, cause confidence, diagnostic-waste class, false-cause risk, trace-to-finding benchmark, repair playbook, repair dry-run, repair run, SupportDiagnosticBundle ref, support diagnostic, and repair outcome snapshot
support case, SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, support audit export, break-glass review, and support revocation snapshot
Scenario, ScenarioInputSnapshot, SimulationPlan, SimulationRun, SimulatedEffect, ScenarioComparison, ScenarioDecision, ScenarioApplyCandidate, scenario invalidation, and simulation outcome snapshot
ReversalCapability, ReversalRecord, RecoveryActionCard, CompensationPlan, CompensationStep, ReconciliationCheck, irreversible acknowledgement, and reversal outcome snapshot
delegated-trust policy, grant, approval request, approval batch, approval decision, approval receipt, approval-load budget, and fatigue-signal snapshot
progressive delivery, Partial Result, Fast Path, stale projection, SpeculativePreparation policy, hit/miss, denial, expiry, preloading, and cache-invalidation snapshot
Project Atlas, path query, Impact Report, map suggestion, redaction, and invalidation snapshot
SourceFreshnessPolicy, SourceChangeSet, SourceLocatorMapping, ClaimRevalidation, MaintenanceRun, MaintenanceImpactSummary, MaintenancePatchProposal, MaintenanceActionCard, MaintenanceSchedule, MaintenanceOutcomeObservation, source-change blocker, and no-silent-rewrite snapshot
automation recipe, recipe version, trigger, Project Action Surface descriptor binding, simulation, canary, recipe-run, and activation-blocker snapshot
automation run debugger, failure taxonomy, replay case, fixture candidate, automation outcome scorecard, adaptive-routing recommendation, and cost-per-accepted-outcome snapshot
AutomationFailureRecoveryRecord, recovery severity, side-effect state, safe next action, disabled-action reason, reconciliation outcome, compensation or withdrawal state, AutomationFailureLearningRecord, unresolved severity, launch blocker, and customer-claim blocker snapshot
Project settings, inherited policy, AI-surface choice, support-grant, and usage snapshot
activity-event schema and review-queue snapshot
collaboration schema, review-state, decision-record, and redaction snapshot
intent policy, preflight, clarification-decision, and approval-receipt snapshot
trust-dashboard and evidence-coverage snapshot
context-pack schema and invalidation snapshot
model-council configuration and disagreement-state snapshot
database migrations and compatibility window
API, event, workflow, index, export, and SDK versions
test and evaluation reports
security and privacy reports
performance, load, cost, and capacity report
backup freshness and restore report
canary policy and metrics
rollback, reversal, compensation, reconciliation, irreversible-effect, and forward-recovery targets
runbooks and operational owners
approvals, waivers, and expiry
customer-facing release and incident communication
```

The bundle is addressable, access-controlled, and retained according to release and audit policy.

## Entry criteria

Before a release candidate enters staging qualification:

- its owning implementation slices are complete with accepted evidence;
- no uncommitted production configuration or prompt change exists;
- all documents that changed for the candidate have a clear authority level, primary reader task, update rule, and current validation evidence;
- implementation decisions required by the affected slices are accepted, current, linked to evidence, and not past their review trigger;
- the artifact was built from a protected reviewed commit;
- required migrations are backward-compatible with deployed code;
- provider, connector, model, and region policies are valid;
- test fixtures and evaluation datasets are versioned;
- the rollback target and responsible operator are known.

## Product gates

- Project, Chat, Documents, and Sources journeys work from a clean account.
- Intent records, safe assumptions, grouped clarification, deterministic preflight, and approval receipts match canonical Chat, Research Run, automation, API, and activity state.
- Command Center catalog entries, Project Action Surface projections, shortcut bindings, command invocations, command recommendations, preflight, ActionCards, Operations, and ActivityEvents match canonical descriptor and policy state across UI, API, SDK, CLI, MCP, native companion, browser extension, connected-app, and recipe surfaces.
- Focus State, Resume Checkpoints, Resume Digests, Focus Sessions, attention items, notification suppression, caught-up state, and continue/catch-up commands match canonical Project, Activity, Operation, notification, command, collaboration, and automation state.
- SpatialWorkbenchStates, Worksets, PaneLayoutTemplates, PaneInstances, WorksetSnapshots, SpatialLayoutSuggestions, restore state, stale labels, redaction summaries, and invalidations match canonical Project, Focus, Command, Activity, Operation, source, document, policy, retention, and authorization state.
- DeviceCapabilityProfiles, LocalCachePolicies, LocalCacheManifests, OfflineDrafts, OfflineActionQueueItems, SyncAttempts, SyncConflicts, DeviceContinuityLinks, service-worker state, installed-app state, mobile/tablet layouts, reconnect state, local queue state, and storage-eviction handling match canonical Project, source, document, Focus, Workset, policy, retention, rights, budget, abuse, approval, and authorization state.
- NativeCompanionInstalls, NativePermissionGrants, NativeContextPackets, NativeCaptureIntents, NativeFileWatchGrants, NativeCommandBridges, NativeNotificationBindings, companion queues, signed update state, emergency revocations, notification deep links, no-forced-browser-or-assistant behavior, and support-safe diagnostics match canonical Project, Command, Source, Document, Notification, Activity, Operation, policy, retention, rights, budget, abuse, approval, and authorization state.
- PreferencePolicies, PreferenceItems, AI-surface choice policies, PreferenceObservations, AdaptiveInterfaceProfiles, PreferenceSuggestions, PreferenceExplanations, PreferenceConflicts, reset/export state, migration/import review state, model-context preference summaries, and invalidations match canonical Project, Memory, ContextPack, Activity, Workset, Focus, Command, notification, automation, policy, privacy, and authorization state.
- Work Packets, WorkContextSnapshots, NextActionCandidates, repeated-work capture, recommendation observations, stale packet invalidation, redaction, and recipe-draft candidates match canonical Project, Focus, Command, Activity, Atlas, Trust, Product Truth, Recipe, Operation, source, document, policy, and authorization state.
- ProjectHealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, suspected causes, counterevidence, unknowns, cause confidence, diagnostic-waste classes, false-cause risks, RepairPlaybooks, repair dry-runs, RepairRuns, support-safe diagnostics, repair outcome observations, redaction, and invalidations match canonical Project, Activity, Operation, Source, Claim, Document, WorkPacket, Workset, Recipe, approval, policy, telemetry, support, Product Truth, release-evidence, and authorization state.
- Support cases, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, break-glass reviews, redaction, expiry, revocation, and customer-visible decision history match canonical Project, policy, Activity, audit, Health, Operation, telemetry, Product Truth, incident, release-evidence, and authorization state.
- Scenarios, ScenarioInputSnapshots, SimulationPlans, SimulationRuns, SimulatedEffects, comparisons, decisions, apply candidates, live-test labels, stale-plan invalidations, redaction, and outcome observations match canonical Project, Activity, Operation, Source, Claim, Document, WorkPacket, Workset, Recipe, Atlas, Health, approval, policy, telemetry, support, Product Truth, release-evidence, and authorization state.
- DelegatedTrustPolicies, DelegatedTrustGrants, ApprovalRequests, ApprovalBatches, ApprovalDecisions, ApprovalReceipts, approval-load budgets, fatigue signals, revocations, and invalidations match canonical intent, command, ActionCard, recipe, automation, connector, publication, billing, administration, audit, and mutation-boundary state.
- ProgressiveDeliveryEnvelopes, ProgressiveDeliveryEvents, PartialResults, FastPathSnapshots, SpeculativePreparations, stale projections, cache invalidations, and cancellation acknowledgements match canonical Project, Operation, Activity, source, document, policy, authorization, privacy, and budget state.
- Project Atlas neighborhoods, path queries, Impact Reports, map suggestions, redaction state, and invalidations match canonical source, evidence, document, activity, recipe, publication, GitHub, Product Truth, and release-evidence state.
- SourceFreshnessPolicies, SourceChangeSets, SourceLocatorMappings, ClaimRevalidations, MaintenanceRuns, MaintenanceImpactSummaries, MaintenancePatchProposals, MaintenanceActionCards, MaintenanceSchedules, MaintenanceOutcomeObservations, publication blockers, official-reference reviews, and maintenance invalidations match canonical SourceVersion, EvidenceSpan, Claim, DocumentBlock, PublicationSnapshot, Product Truth, Activity, Operation, policy, authorization, and release-evidence state.
- Activity timeline, review queue, action cards, operation status, and replay-safe run details match canonical domain, audit, operation, and side-effect state.
- Comments, mentions, assignments, suggestions, review requests, decision records, and presence preserve anchors, expected versions, authorization, stale state, and public/private redaction.
- Grounded answers resolve exact citations and abstain when support is insufficient.
- Trust dashboard counts, evidence coverage, citation drill-down, and publication blockers match canonical graph state.
- Model-council disagreement states attach to canonical claims and cannot convert unsupported consensus into supported evidence.
- Documents remain deterministic and editable after AI and human changes.
- Long-form research is coherent, inspectable, resumable, and selectively regenerable.
- Source updates and feature removals propagate through the dependency graph.
- Public/private projections cannot leak or drift.
- GitHub changes remain proposed, validated, approved, and draft-PR based.
- API, SDK, webhook, SSE, CLI, MCP, action-catalog discovery, descriptor projection, schema lazy-loading, and action invocation behaviors match committed contracts.
- Context packs and agent handoff preserve authorization, minimization, source-version dependencies, invalidation, and audit behavior across UI, API, SDK, CLI, and MCP use.
- Feedback capture, discovery themes, experiments, SignalDecisionLedger entries, and non-action decisions link back to requirements, slices, documents, validation evidence, or release evidence.
- SpecificationSignalDecisionRecords or runtime Product Truth equivalents link every material external or user-opinion signal to accepted scope, rejected scope, affected requirements, affected docs, validation evidence, screened segment records where user opinion affects scope, owner, and revisit trigger.
- FrontierSignalReviews or runtime Product Truth equivalents link every frontier OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion signal that affects accepted scope, differentiators, prototypes, benchmarks, implementation plans, or public claims to source quality, user-opinion synthesis, non-action alternatives, contradiction review, owner, expiry, and blocked claim scope.
- UserOpinionEvidenceItems, UserOpinionCodebooks, UserOpinionCodingAssignments, and UserOpinionSynthesisRecords link every opinion-backed launch claim, Product Truth signal, benchmark scenario, outcome claim, advanced-feature decision, or non-action to source-quality records, screened segments, coverage records, negative evidence, AI-assist disclosure where applicable, contradiction state, blocked claims, owner, expiry, and revisit trigger.
- AdvancedFeatureIncubations, AdvancedPrototypeRuns, dogfood flags, beta flags, guardrails, kill criteria, benchmark scenarios, user-research plans, human-AI interaction review records, and adoption, deferral, kill, or non-action decisions link back to requirements, slices, documents, Product Truth decisions, validation evidence, or release evidence.
- HumanAIInteractionReviews and HumanAIInteractionFindings for affected AI, agentic, and automation surfaces link capability boundaries, source evidence, uncertainty, confidence, progress, permissions, approval load, user control, recovery, accessibility, internationalization, failure diagnosis, automation outcome value, Product Truth decisions, benchmark scenarios, user-research plans, and unresolved finding disposition.
- AutomationFailureRecoveryRecords for affected failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain runs link recovery severity, user impact, side-effect state, safe next action, disabled-action reasons, reconciliation outcome, compensation or withdrawal state, learning artifacts, owner, expiry, Product Truth decisions, benchmark scenarios, customer-claim blockers, and unresolved severity disposition.
- OutcomeMetricDefinitions, StrategicBetScorecards, and OutcomeReviews for affected performance, usability, user-experience, automation, trust, reviewability, recoverability, and advanced-differentiation claims link baselines, denominators, good events, guardrails, anti-metrics, screened segment records, user-research evidence, benchmark runs, human-AI review records, Product Truth decisions, and release evidence.
- AdvancedDifferentiationBenchmarkRecords for affected advanced or better-than OS, browser, workspace-agent, app-intent, app-action, connected-app, MCP, generic automation, generic agent, and agent-observability claims link current comparator sources, same-task baselines, anti-metrics, telemetry, benchmark scenarios, screened segments, OutcomeReviews, Product Truth decisions, CustomerClaimEvidenceRecords, and release evidence.
- ProductTelemetryEventSpecs or runtime equivalents cover affected performance, usability, automation, accessibility, support, API, SDK, MCP, and advanced operating-layer claims; missing, unapproved, stale, privacy-unsafe, or denominator-unclear instrumentation blocks affected telemetry-backed release claims.
- CustomerClaimEvidenceRecords or runtime Product Truth equivalents cover exact customer-facing wording for affected availability, AI accuracy, trust, performance, usability, automation value, privacy, user choice, opt-in/default control, typed action, app-action, agent-ready, security, accessibility, supportability, enterprise readiness, API, SDK, MCP, testimonial, and advanced-differentiation claims; missing, stale, overbroad, unscreened, contradicted, or evidence-mismatched records block affected public copy, demos, release notes, support claims, SDK docs, marketplace listings, and in-product claim language.
- ExperienceValidationPlans, ExperienceStudySessions, ExperienceFindings, ExperienceEvidencePackages, dogfood limits, task outcomes, perceived-usability measures, performance-perception observations, automation acceptance evidence, accessibility participant findings, UserResearchSegmentScreeners, ExperienceBenchmarkScenarios, ExperienceBenchmarkRuns, good-event definitions, benchmark blockers, and benchmark regressions link back to requirements, slices, documents, Product Truth decisions, validation evidence, or release evidence.
- UserOpinionCoverageRecords and UserResearchSegmentScreeners or runtime Product Truth equivalents cover affected product, automation, advanced operating-layer, typed action surface, accessibility, support, API, SDK, MCP, and synthetic-user research surfaces; missing coverage or missing screened segment records block affected claims and appear in release scope.
- UserOpinionSynthesisRecords or runtime Product Truth equivalents cover opinion-backed claims and affected user-opinion themes; missing synthesis, stale codebook, unreviewed AI suggestions, missing negative-evidence review, unresolved contradiction, or public-signal-only synthesis blocks affected claims and appears in release scope.
- Product Truth Board records link feedback, official references, public user-opinion signals, analytics, experiments, runtime evidence, requirements, documents, implementation slices, release evidence, SignalDecisionLedger decisions, and explicit non-action decisions without unresolved blocker contradictions.
- AccessibilityProfile, LocaleProfile, LanguageDirectionMetadata, AccessibleOutputManifest, and TranslationArtifact records match canonical Project, source, document, citation, export, public projection, support, Activity, privacy, and release-evidence state.
- AbusePolicies, AbuseSignals, AbuseCases, AbuseDecisions, AbuseThrottles, AbuseReviews, AbuseAppeals, AbuseEnforcementActions, provider-policy decisions, review queues, appeal outcomes, false-positive observations, and emergency controls match canonical Project, Organization, source, publication, connector, GitHub, API, MCP, support, automation, Activity, audit, entitlement, quota, and release-evidence state.
- Automation Recipes compile to typed versioned graphs, prove trigger specificity and dedupe, simulate without side effects, canary within explicit limits, pause on permission, evidence, cost, or policy drift, and expose ActionCards for high-risk steps.
- Automation Run Debugger traces expose searchable execution metadata, redacted step traces, context-pack refs, tool and model decisions, policy checks, divergence markers, trace comparison, replay eligibility, side-effect safety, and fixture creation without private-content leakage.
- Automation outcome scorecards distinguish accepted value from activity volume, expose cost, latency, approval burden, rejected work, user corrections, safety blockers, and adaptive recommendations, and block expansion when outcome evidence regresses.
- Project settings show effective inherited policy, usage, support grants, SupportDiagnosticBundles, support access requests and sessions, disabled-control reasons, high-risk change preflight, and in-flight-work behavior.

## Security, privacy, and governance gates

- tenant-isolation and broken-object-authorization suites pass;
- prompt injection and excessive-agent-authority suites pass;
- upload, parser, SSRF, webhook, cache, and public-link defenses pass;
- secrets, keys, dependencies, Actions, SBOM, provenance, vulnerability, and license policies pass;
- retention, deletion, restore tombstones, residency, provider policy, source rights, and takedown behavior pass;
- acceptable-use, abuse-prevention, provider-policy, content-safety, rate, quota, budget, review, appeal, false-positive, emergency-kill-switch, and content-minimized telemetry controls pass for source acquisition, research, publication, GitHub, connector, notification, export, API, MCP, support, and recipe workflows;
- local cache, service worker, offline draft, offline packet, local queue, background sync, device capability, handoff, reconnect, conflict, storage eviction, sign-out, and device revocation controls pass without storing prohibited private content or bypassing current policy;
- native companion and browser extension install, active-tab gesture, selected-context capture, OS share/import, file-watch path bounds, deep links, signed updates, revocation, support-safe diagnostics, and telemetry controls pass without ambient screen, clipboard, browser-history, keylogging, camera, microphone, OS-window, or broad filesystem capture;
- preference learning, adaptive interface profiles, model-context preference summaries, reset/export flows, and correction controls pass without hidden profiling, cross-Project leakage, authorization bypass, unsupported evidence claims, or private-content telemetry;
- support and administrative access use tested SupportDiagnosticBundle minimization, step-up, scope, expiry, revocation, self-approval rejection, stale-policy rejection, audit export, and break-glass review controls.
- accessibility and locale systems preserve authorization, privacy, source-version lineage, translation-as-derived-material policy, language and direction metadata, and accessible-output manifests without storing private content in diagnostics or telemetry.
- Scenario simulations prove content minimization, hidden-resource redaction, stale-plan rejection, live-test classification, apply-candidate preflight, and no-side-effect behavior before release.
- SpeculativePreparation tests prove Level 5 denial, no hidden private-content model calls, no connector widening, no external writes, no hidden material spend, and budget-policy enforcement before release.

Cross-tenant exposure, irreversible data-loss risk, credential leakage, unauthorized external action, public/private leakage, deletion resurrection, inaccessible primary citation inspection, translated material treated as independent evidence, direction metadata that changes meaning, or untested restore is non-waivable for general availability.

## Reliability and performance gates

- service-level objectives and error budgets are declared;
- representative load, spike, soak, fairness, backpressure, and degraded-provider tests pass;
- queue age, workflow resume, cancellation, and side-effect reconciliation pass;
- first shell, first progress, first useful result, Partial Result, citation-ready, reconnect, stale projection, Fast Path, SpeculativePreparation hit/miss, Level 5 denial, material-preparation budget, cache invalidation, and cancellation acknowledgement budgets pass;
- user-perceived wait clarity, partial/final/stale label comprehension, cancellation discovery, safe task-switching confidence, and performance-frustration findings pass the affected lane thresholds in [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md);
- affected experience benchmark scenarios in [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md) pass at the release commit for first grounded Project, progressive wait confidence, resume and Workset focus, automation dry-run/debug/outcome, Scenario Lab and reversible change, optional native companion no-ambient-capture behavior, Product Truth contradiction handling, and mobile/offline/accessibility coverage where those surfaces ship;
- automation failure recovery scenarios pass for safe next action comprehension, side-effect reconciliation before retry or replay, quiet-wrong outcome handling, recovery learning artifact creation, and unresolved `AFR-0` or launch-relevant `AFR-1` blocking;
- affected advanced-differentiation benchmark records in [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md), including typed Project action surface records where app-action or agent-ready wording is used, are current and passed-limited or better for any advanced or comparative release claim;
- offline fallback, service-worker update, local draft save and restore, local queue listing, reconnect preflight, sync conflict review, mobile input latency, storage pressure, storage eviction, and cross-device resume budgets pass;
- native companion side-panel open, active-tab prompt to preview, selected-text preview, OS share/import preview, file-watch event batching, companion queue inspection, notification deep-link authorization, global command entry, update check, revocation propagation, extension overhead, and desktop companion overhead budgets pass where companion surfaces ship;
- PreferencePolicy evaluation, Preference Center load, AI-surface choice preservation, preference explanation rendering, correction, reset, export, AdaptiveInterfaceProfile rebuild, model-context summary assembly, and preference invalidation budgets pass without hiding scope, policy-managed state, disabled state, or stale inferences;
- Workset switch, Workset restore, pane hydration, layout suggestion, stale-resource recovery, and redacted-resource recovery budgets pass without hiding authorization or incompleteness state;
- source freshness read, source-change detection, locator mapping, Claim revalidation, Impact Report handoff, patch proposal rendering, maintenance ActionCard review, schedule read/write, blocked-publication projection, and maintenance cancellation budgets pass without hiding authorization, evidence state, or incompleteness;
- Project Health first status, top finding rank, causal finding lineage, trace-to-finding conversion, false-cause classification, diagnostic-waste sampling, repair dry-run, repair progress, support-safe diagnostic, SupportDiagnosticBundle generation/export, SupportAccessRequest decision, SupportAccessSession expiry/revocation, and repair outcome budgets pass without hiding authorization, redaction, approval, or incompleteness state;
- Scenario Lab card load, simulation start, comparison, stale-plan recovery, apply-candidate handoff, and outcome-observation budgets pass without hiding authorization, redaction, live-test state, approval, or incompleteness state;
- budget reservations and cost guardrails behave under abuse and provider failure;
- tenant-scoped abuse throttles, API limits, recipe-trigger limits, source-acquisition limits, public-publishing limits, connector-write limits, notification limits, GitHub proposal limits, review queues, appeals, and false-positive measurement behave under burst, bot-shaped, and legitimate high-volume loads;
- database and index query plans meet headroom targets;
- staging uses production-shaped topology and the same release artifact;
- backup restore and complete disaster-recovery exercises meet approved RPO/RTO.

## Accessibility and user-operation gates

- keyboard and screen-reader journeys pass for primary surfaces;
- user-research evidence validates primary launch journeys with current UserResearchSegmentScreeners, target participant segments, observed task outcomes, assistive-technology coverage where relevant, unresolved severity, and dogfood limits recorded in an ExperienceEvidencePackage;
- user-opinion synthesis evidence validates opinion-backed launch claims with current codebooks, reviewed coding assignments, source-quality records, screened segments, coverage records, negative-evidence review, contradiction state, AI-assist disclosure where applicable, and blocked-claim disposition;
- affected AI, agentic, and automation launch surfaces have passing HumanAIInteractionReviews with no unresolved `S0` or `S1` findings, and all `S2` and `S3` findings have owner, risk, validation method, and Product Truth disposition;
- keyboard, pointer, touch, and screen-reader journeys pass for command discovery, shortcut remapping, disabled reasons, command preview, and review resolution;
- keyboard, pointer, touch, and screen-reader journeys pass for Project resume, Resume Digest review, Focus Session controls, next-action navigation, caught-up checkpoints, and redacted/partial digest states;
- keyboard, pointer, touch, and screen-reader journeys pass for mobile and tablet Project navigation, installed-app state, offline fallback, capability labels, local draft recovery, sync queue inspection, reconnect, conflict review, disabled reasons, and clear-cache controls;
- keyboard, pointer, touch, and screen-reader journeys pass for native companion and browser extension capture previews, Project destination choice, grant review, revoke, pause, retry, clear-local-state, command bridge, notification deep link, fallback paths, and focus return where companion surfaces ship;
- keyboard, pointer, touch, and screen-reader journeys pass for Preference Center review, adaptation mode changes, AI-surface choice controls, scope inspection, preference explanation, wrong-inference correction, reset, export, disabled reasons, and policy-managed controls;
- keyboard, pointer, touch, and screen-reader journeys pass for disabled or narrowed AI-surface preservation, onboarding/import/migration review, browser extension install, native companion install, provider change, no-forced-browser/assistant/companion/provider flows, and no-nag dismissal where AI surfaces ship;
- keyboard, pointer, touch, and screen-reader journeys pass for Workset switching, pane pinning, pane resizing alternatives, evidence-aware splits, layout suggestion review, suspend/restore, and stale or redacted pane recovery;
- keyboard, pointer, touch, and screen-reader journeys pass for Work Packet inspection, next-action explanation, dismissal, correction, invocation, stale or redacted packet state, and recipe-draft candidate review;
- keyboard, pointer, touch, and screen-reader journeys pass for Project Health overview, finding detail, severity, redaction summary, suspected cause, confidence, counterevidence, unknown state, diagnostic-waste state, false-cause state, dry-run, repair ActionCard, repair progress, cancellation, failed repair, snooze, dismissal, SupportDiagnosticBundle review, support access request decision, session revocation, audit export, break-glass review, and outcome review;
- keyboard, pointer, touch, and screen-reader journeys pass for Scenario Lab cards, option comparison, unknowns, redaction summaries, live-test warnings, stale-plan recovery, apply-candidate review, and outcome observation;
- keyboard, pointer, touch, and screen-reader journeys pass for approval cards, approval batches, delegated-trust grant inspection, grant narrowing, grant revocation, stale receipt recovery, and fatigue warning states;
- keyboard, pointer, touch, and screen-reader journeys pass for progress announcements, Partial Result labels, stale/degraded states, cancellation, reconnect, and recovery commands;
- keyboard, pointer, touch, and screen-reader journeys pass for Atlas graph, table, search, path query, Impact Report, map suggestion, and command flows;
- keyboard, pointer, touch, and screen-reader journeys pass for maintenance status, source freshness, affected Claim review, blocker explanation, patch proposal review, batch review, defer/reject/edit actions, schedule controls, and failed-refresh recovery;
- keyboard, pointer, touch, and screen-reader journeys pass for recipe authoring, simulation review, run inspection, Automation Run Debugger trace review, failure classification, replay-case creation, activation blockers, and canary or pause controls;
- keyboard, pointer, touch, and screen-reader journeys pass for AutomationFailureRecoveryRecord review, severity, affected-resource inspection, side-effect state, safe next action, disabled-action reasons, reconciliation-first recovery, compensation or withdrawal handoff, learning artifact creation, and non-action decision review;
- focus, contrast, target size, error handling, authentication, drag alternatives, and dynamic announcements meet the declared accessibility baseline;
- Unicode, multilingual, BCP 47 language tag, explicit direction metadata, locale-neutral API, timezone, date, time, number, currency, grapheme, mixed-direction, translated-derived-material, and RTL fixtures pass where supported;
- generated documents, citations, tables, charts, diagrams, Studio artifacts, exports, and public projections have AccessibleOutputManifest evidence or explicit degraded/blocking state;
- loading, empty, offline/reconnect, conflict, permission loss, partial result, and failure states are understandable;
- onboarding, import, export, deletion, support, limits, cost, and publication state are transparent.

## Operational gates

Every paging alert has an owner and exercised runbook. Operators can safely contain external writes, publication, connectors, models, queues, billing settlement, support access sessions, and tenant cohorts. Support can diagnose from SupportDiagnosticBundles without ambient private-content access. Incident communication and status ownership are defined.

## Documentation gates

- canonical product, architecture, AI, source, security, delivery, reference, and build documents state enough scope, examples, states, non-goals, launch gates, and update rules to reject incorrect implementations;
- `docs/_meta/requirements.json`, `docs/_meta/implementation-build-plan.json`, `docs/_meta/agent-routing.json`, `docs/README.md`, `docs/START-HERE.md`, `docs/07-reference/requirements-traceability-matrix.md`, `PROJECT_STATUS.md`, status-ledger validation, README directory-map validation, indexed-doc coverage, `START-HERE` read-order validation, routed-doc coverage, requirement-traceability coverage, and implementation ledgers agree;
- new or changed documents have a document type and primary reader task consistent with [`documentation-quality-and-authoring-standard.md`](documentation-quality-and-authoring-standard.md);
- stale, duplicate, superseded, and dead documents are updated, redirected, deleted, or explicitly retained as evidence;
- official references and public user-opinion signals have review dates, SignalDecisionLedger disposition, and are not converted into unsupported public claims;
- specification signal decision records are current for material public, practitioner, competitor, OS, workspace-agent, browser, model, automation, and survey signals until runtime Product Truth records replace them;
- frontier signal reviews are current for fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, and public-opinion signals that affect scope, accepted differentiators, prototypes, benchmarks, implementation plans, or public claims until runtime Product Truth records replace them;
- public, customer, survey, research, official, runtime, generated, and documentation-sweep evidence that affects scope has source-quality class, confidence, representativeness, bias, allowed decision, citation policy, and screened segment limitations recorded where user-opinion or participant evidence is involved;
- user-opinion coding and synthesis records are current for material opinion-backed scope, claim, benchmark, outcome, advanced-feature, or Product Truth decisions until runtime Product Truth records replace them;
- accepted competitor, OS, workspace-agent, automation, model, browser, public user-opinion, and advanced operating-layer claims have current watch items or explicit no-change refresh records;
- no stale external watch item supports a launch claim;
- benchmark scenarios, benchmark runs, good-event definitions, unresolved blockers, waived scenarios, and excluded-scenario claim limits are current for changed user-facing surfaces;
- advanced-differentiation benchmark records, comparator source dates, same-task baselines, anti-metrics, customer-claim blockers, and excluded comparative claims are current for changed advanced, action-surface, and app-action surfaces;
- advanced-feature incubation records, prototype-run decisions, feature-flag lifecycle, guardrails, kill criteria, non-action alternatives, and documentation consistency plans are current for advanced surfaces that moved through prototype, dogfood, or beta;
- human-AI interaction review records and unresolved finding disposition are current for changed AI, agentic, automation, permission, approval, progress, source-evidence, recovery, and advanced surfaces;
- AutomationFailureRecoveryRecords, unresolved `AFR-0` through `AFR-3` severity disposition, recovery outcomes, learning artifacts, non-action decisions, and customer-claim blockers are current for failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain automation surfaces;
- outcome metric definitions, strategic-bet scorecards, baselines, anti-metrics, and OutcomeReviews are current for changed performance, usability, automation, user-experience, and advanced-differentiation claims;
- customer-facing claim records are current for changed public copy, SDK/API/MCP docs, release notes, support pages, security/privacy pages, demos, testimonials, availability labels, and in-product claim language;
- documentation validation evidence includes `pnpm docs:check`, stale-count sweeps, orphan-document sweeps, document-type review, semantic drift review packets, unresolved severity, and semantic contradiction review results.
- material documentation changes link to a documentation-change evidence record, implementation evidence entry, PR record, or release-evidence entry that names deliberate non-changes and unresolved contradiction severity.
- no unresolved `S0` semantic contradiction exists, and no unresolved `S1` semantic contradiction affects a launch journey.

## Canary

Canary exposure starts with an explicit tenant or traffic cohort. Metrics include user-visible errors, stream and research completion, retrieval and citation quality, provider fallback, cost, queue age, authorization denials, abuse allow/limit/review/block rates, false-positive and appeal reversal rates, emergency-control use, SpeculativePreparation hit/miss and denial rates, wasted-work cost, prepared-state cancellation, recipe trigger correctness, Scenario simulation-to-apply drift, recipe simulation-to-run drift, publication failures, SupportDiagnosticBundle usefulness, support access request denial or narrowing rate, session revocation, break-glass review timeliness, support signals, feedback themes, and experiment guardrails.

Stop conditions are declared before rollout. A canary does not expand automatically when correctness, privacy, billing, or security telemetry is missing.

## Approval and waivers

Approvers represent engineering, product, security/privacy, operations, and support for material launches. A waiver records the exact failed gate, bounded impact, compensating control, owner, expiry, customer effect, and rollback condition.

A waiver cannot change a failed result into a pass. Expired or widened waivers block promotion.

## Launch and post-launch

Production promotion uses the verified artifact. Initial rollout remains observable and reversible. After launch, the team verifies migrations, source ingestion, grounded Chat, durable workflows, public output, usage settlement, notifications, and restore signals.

A post-launch review compares expected and actual reliability, cost, quality, support volume, security signals, abuse decisions, false-positive rates, appeal reversal rates, emergency-control use, provider-policy blocks, feedback themes, SignalDecisionLedger accuracy, experiment outcomes, command workflow completion, shortcut conflict rates, resume-digest correctness, focus-session interruption rates, notification suppression corrections, Workset switch latency, Workset restore failures, pane hydration latency, stale or redacted pane recovery, layout suggestion acceptance and dismissal, preference explanation usefulness, wrong-inference correction, reset/export use, cross-Project isolation, hidden-profile complaints, model-context preference invalidation, Work Packet freshness, next-action acceptance and correction rates, repeated-work capture quality, Project Health false positives, Project Health false causes, trace-to-finding accuracy, diagnostic waste, repair success, repeated repair frequency, repair approval burden, SupportDiagnosticBundle usefulness, support access request decisions, session revocations, break-glass review timeliness, support audit export usefulness, Scenario false-safe rate, stale-plan rejection, live-test warning comprehension, apply-candidate success, simulation cost and latency estimate accuracy, delegated-trust grant use, approval-load thresholds, stale-receipt rejection, fatigue signals, grant revocations, Progressive Delivery first-response and completion behavior, Partial Result correctness, stale-label correctness, Fast Path safety, SpeculativePreparation hit/miss, denial, wasted-work, and visible prepared-state behavior, Atlas path-query accuracy, Impact Report correctness, map redaction behavior, maintenance stale-claim resolution, maintenance patch acceptance, maintenance false-positive rate, maintenance cost, maintenance latency, blocked-publication correctness, Automation Run Debugger usefulness, fixture conversion, replay safety, failure-taxonomy quality, automation outcome scorecards, adaptive-routing recommendations, contradiction records, official-reference freshness, and user outcomes. Follow-up work enters the requirement, truth-board, and implementation control plane with owners.

## Stable-release rule

A release is “stable” only after the observation window meets declared SLO, correctness, citation, cost, security, and support criteria without unresolved blocking incidents. Marketing or version labels do not override operational evidence.
