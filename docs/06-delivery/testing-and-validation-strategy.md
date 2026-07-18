# Testing and validation strategy

Research treats testing as release evidence, not as a single CI command. Every implementation slice defines the smallest executable proof that its product, data, authorization, AI, operational, and compatibility contracts hold.

Automated tests are necessary but do not prove experience quality by themselves. User-research plans, observed-task sessions, dogfood limits, perceived-usability measures, accessibility participant coverage, performance-perception validation, and experience evidence packages are governed by [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md). Human-AI interaction and automation UX reviews are governed by [`human-ai-interaction-and-automation-ux-review.md`](human-ai-interaction-and-automation-ux-review.md). Automation failure recovery records, safe next actions, side-effect reconciliation, quiet-wrong outcome handling, and recovery learning artifacts are governed by [`automation-failure-recovery-and-learning-loop.md`](automation-failure-recovery-and-learning-loop.md). OutcomeMetricDefinitions, StrategicBetScorecards, OutcomeReviews, baselines, and anti-metrics are governed by [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md). ProductTelemetryEventSpecs, event-quality checks, prohibited telemetry, redaction tests, and release-claim limits are governed by [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md). CustomerClaimEvidenceRecords, exact allowed language, blocked language, scope, availability boundaries, and testimonial limits are governed by [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md). Repeatable end-to-end benchmark scenarios that convert those signals into release evidence are governed by [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md). Public, customer, survey, research-literature, official, runtime, generated-summary, and documentation-sweep evidence that affects release claims follows [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md).

## Test layers

### Static and structural checks

Run formatting, linting, strict TypeScript, unused-code detection, dependency-boundary checks, generated-contract drift checks, lockfile validation, secret scanning, workflow pinning, license policy, and documentation routing on every pull request.

Static checks are necessary but never sufficient evidence that a user journey works.

### Unit tests

Unit tests cover pure domain policy, SourceQualityRecord validation, HumanAIInteractionReview state and finding severity validation, OutcomeMetricDefinition denominator and baseline validation, StrategicBetScorecard state and anti-metric validation, OutcomeReview decision validation, AccessibilityProfile validation, LocaleProfile validation, LanguageDirectionMetadata validation, AccessibleOutputManifest state transitions, TranslationArtifact derived-material policy, AbusePolicy validation, AbuseSignal minimization, AbuseDecision state transitions, AbuseThrottle windows, AbuseReview scope, AbuseAppeal outcomes, false-positive classification, AbuseEnforcementAction release, provider-policy normalization, DeviceCapabilityProfile validation, LocalCachePolicy selection, LocalCacheManifest invalidation, OfflineDraft state transitions, OfflineActionQueueItem eligibility, SyncAttempt classification, SyncConflict state transitions, DeviceContinuityLink expiry, spatial layout constraints, Workset snapshot validation, stale or redacted pane classification, Project Health snapshot minimization, HealthSignal normalization, HealthLineageEdge construction, HealthFinding classification, cause-confidence calculation, counterevidence preservation, unknown-state handling, false-cause classification, diagnostic-waste classification, RepairPlaybook eligibility, RepairRun preflight, repair outcome classification, SupportDiagnosticBundle minimization, SupportAccessRequest scope validation, SupportAccessSession expiry and revocation, support audit export redaction, break-glass review state, ScenarioInputSnapshot minimization, SimulationPlan validation, SimulatedEffect classification, live-test classification, stale-plan invalidation, ScenarioApplyCandidate state transitions, ReversalCapability eligibility, ReversalRecord invalidation, RecoveryActionCard disabled reasons, compensation plan classification, reconciliation check transitions, irreversible-effect labeling, delegated-trust grant envelopes, approval batch grouping, approval-load budget thresholds, fatigue-signal classification, stale receipt rejection, SpeculativePreparation ladder eligibility, denial reasons, prepared-state visibility, hit/miss outcome transitions, AutomationFailureRecoveryRecord severity, recovery-state transitions, side-effect-state classification, safe-next-action policy, AutomationFailureLearningRecord linkage, state transitions, schema validation, permission decisions, billing calculations, Unicode normalization policy, grapheme-aware visible limits, locale-neutral serialization, content normalization, locator conversion, retry classification, budget accounting, and deterministic document transformations.

Tests use explicit clocks, identifiers, random seeds, model fixtures, and provider responses. Hidden dependence on wall-clock time, global process state, network access, or execution order is prohibited.

### Integration tests

Integration tests run against real Postgres, object storage adapters, queues, caches, and local provider simulators where practical. They prove transaction boundaries, outbox delivery, idempotency, row-level authorization, migrations, derived-index rebuilds, LocaleProfile rendering, LanguageDirectionMetadata persistence, TranslationArtifact lineage, AccessibleOutputManifest validation, localized API summary stability, abuse preflight, policy snapshot selection, provider-policy normalization, content-safety decision normalization, throttle evaluation, review ActionCard creation, appeal decisioning, false-positive outcome observation, enforcement release, emergency-control activation, stable API error generation, abuse event projection, DeviceCapabilityProfile projection, LocalCachePolicy selection, LocalCacheManifest invalidation, OfflineDraft submission, OfflineActionQueueItem blocked-state handling, SyncAttempt projection, SyncConflict ActionCard creation, DeviceContinuityLink expiry, Spatial Workbench projection rebuilds, Workset restore reauthorization, pane hydration invalidation, Work Packet assembly and invalidation, next-action recommendation observation, Project Health snapshot assembly, finding classification, repair dry-run, RepairRun creation, SupportDiagnosticBundle assembly, support-safe diagnostics, support access request approval, denial, narrowing, stale-policy rejection, self-approval rejection, SupportAccessSession start, expiry, revocation, audit write, support audit export redaction, break-glass review, repair outcome observation, Scenario simulation assembly, hidden-resource redaction, stale-plan rejection, live-test labeling, apply-candidate handoff, ReversalCapability calculation, RecoveryActionCard creation, stale recovery rejection, restore, replay, withdrawal, compensation, reconciliation-before-retry, irreversible-effect acknowledgement, approval request creation, approval batch grouping, delegated-trust grant matching, grant revocation, mutation-boundary fail-closed enforcement, progressive-delivery stream replay, SpeculativePreparation policy denial, budget enforcement, hit/miss outcome, Automation Run Debugger trace reconstruction, AutomationFailureRecoveryRecord creation, disabled unsafe-action projection, side-effect reconciliation, replay-case creation, AutomationFailureLearningRecord linkage, fixture creation, cache invalidation, webhook verification, and cleanup behavior.

Mocks may isolate a provider boundary. They must not replace the database, permission system, or persistence layer in tests whose purpose is to verify those systems.

### Contract tests

Contract tests verify Hono routes, OpenAPI schemas, events, webhooks, workflow inputs and outputs, source adapters, parser adapters, research-engine adapters, generated SDKs, MCP resources, and stored document formats.

Consumer and provider versions are tested across the documented compatibility window. A schema change cannot merge until old readers, old in-flight workflows, and rollback targets are accounted for.

### Browser and journey tests

Playwright tests exercise representative user journeys through the real application boundary:

- create and reopen a Project;
- upload, inspect, exclude, restore, and delete a source;
- ask a grounded question and open an exact citation;
- inspect citations with keyboard and screen-reader-critical paths, including source language and direction status;
- edit a generated Markdown document and review an AI patch;
- edit document language and direction metadata without losing stable block identity;
- interrupt and resume a Research Run;
- leave and resume a Project with Focus State, Resume Digest, next action, and redacted or stale digest behavior;
- use desktop, tablet, mobile, and installed-app layouts; inspect device capability labels; recover local drafts; open offline fallback; inspect local queue state; reconnect; review sync conflicts; clear local cache; and continue on another authorized device without leaking local-only state;
- switch Worksets, pin and unpin panes, review an evidence-aware split, suspend and restore a Workset, and recover from stale or redacted pane references;
- inspect, dismiss, correct, invoke, and measure a Work Packet next-action recommendation;
- inspect Project Health, drill into a HealthFinding, inspect suspected cause, confidence, counterevidence, unknowns, false-cause state, and diagnostic-waste state, dry-run a repair, open a repair ActionCard, run or cancel a RepairRun, and verify a repair outcome;
- inspect a SupportDiagnosticBundle, approve, deny, narrow, or revoke a SupportAccessRequest, confirm SupportAccessSession expiry, export support audit evidence, and review break-glass evidence;
- inspect Scenario Lab, create a scenario, compare options, inspect unknowns and redactions, reject a stale plan, review a live-test warning, create or cancel an apply candidate, and verify a simulation outcome;
- inspect Project history, open recovery options, restore a prior version, duplicate as draft, replay an eligible run, withdraw a publication, review a compensation plan, run reconciliation before retry, reject a stale recovery candidate, acknowledge an irreversible effect, and verify a recovery outcome;
- inspect an abuse limit, open an abuse review ActionCard, complete a challenge, appeal a block, see a false-positive correction, recover from provider-policy denial, and verify that private content is absent from abuse diagnostics;
- inspect, narrow, approve, deny, batch-review, and revoke approval and delegated-trust controls, including stale receipt recovery and fatigue warning states;
- inspect an Automation Run Debugger trace, classify a failure, review the AutomationFailureRecoveryRecord, understand disabled unsafe actions, run side-effect reconciliation before retry, create a replay case, and convert a repeated failure into an evaluation fixture or recovery learning artifact;
- start work that returns an immediate ProgressiveDeliveryEnvelope, emits a Partial Result, exposes allowed SpeculativePreparation state where applicable, reconnects, cancels, and preserves stale or degraded status honestly;
- publish and withdraw a public projection;
- revoke a collaborator or connector and confirm access disappears;
- recover from refresh, disconnection, provider failure, and stale versions;
- use keyboard-only and screen-reader-critical paths.
- exercise RTL, mixed-direction, localized number/date/time, Unicode grapheme, accessible export, and public projection fixtures where supported.

The browser suite runs against preview or integration environments with isolated synthetic tenants. Production customer data is never copied into test fixtures.

### AI and retrieval evaluation

AI behavior is tested with versioned datasets rather than ad hoc prompt inspection. Evaluation sets cover retrieval recall, citation entailment, attribution, unsupported claims, contradiction handling, Partial Result correctness, stale-label correctness, source independence, long-form consistency, tool selection, refusal behavior, prompt injection, cost, and latency.

Model output is probabilistic. Release gates therefore define confidence intervals, repeated trials where needed, deterministic fixtures for non-model logic, and explicit variance budgets. A model or prompt change cannot be accepted solely because a small sample looks better.

### Security tests

Security tests include tenant-isolation matrices, object-level authorization, session and CSRF behavior, CORS and CSP, signed webhooks, upload validation, archive expansion, parser isolation, SSRF, IDOR, cache partitioning, accessibility and locale preference minimization, translation-provider policy enforcement, locale-diagnostic redaction, abuse decision redaction, abuse appeal redaction, abuse event redaction, provider-policy denial, content-safety blocking, API fanout throttling, source-acquisition abuse, public-publication spam, GitHub PR spam, connector-write spam, notification spam, recipe runaway-loop blocking, legitimate high-volume false-positive reversal, emergency-control activation, local-cache manifest isolation, offline draft redaction, prohibited queue action rejection, device capability minimization, service-worker stale-cache invalidation, storage-eviction recovery, reconnect reauthorization, SyncConflict redaction, sign-out clear behavior, device revocation, Spatial Workbench projection isolation, Workset restore reauthorization, pane redaction, Project Health finding redaction, RepairRun authorization, SupportDiagnosticBundle minimization, SupportAccessRequest approval and denial, SupportAccessSession expiry and revocation, self-approval rejection, stale-policy rejection, support audit export redaction, break-glass review, support-safe diagnostic minimization, Scenario hidden-resource redaction, live-write mislabeling, stale apply-candidate rejection, no ambient operating-system capture, Fast Path and preloading isolation, SpeculativePreparation Level 5 denial, hidden material-spend denial, progressive-delivery redaction, prompt injection, tool escalation, excessive agency, delegated-trust abuse, stale approval reuse, approval fatigue, denial of wallet, secret exposure, and deletion propagation.

High-risk negative tests are release blockers and run against every affected boundary.

### Performance, resilience, and recovery tests

Load tests use representative source sizes, concurrent tenants, Workset and pane counts, HealthFinding counts, RepairRun shapes, SupportDiagnosticBundle volume, SupportAccessSession concurrency, support audit event volume, AbuseSignal volume, AbuseDecision volume, AbuseThrottle windows, appeal queue volume, false-positive review volume, Scenario counts, SimulatedEffect counts, apply-candidate shapes, Research Run shapes, model latencies, connector rates, approval bursts, delegated-trust grant verification, SpeculativePreparation bursts, denied-level storms, material-preparation budget pressure, Automation Run Debugger trace volume, AutomationFailureRecoveryRecord volume, reconciliation queue pressure, and document lengths. They verify SLOs, queue age, fairness, backpressure, admission control, abuse throttle latency, review queue latency, appeal resolution latency, Workset switch and pane hydration budgets, Project Health first-status and repair progress budgets, SupportDiagnosticBundle generation/export, support access decision, session expiry/revocation, audit-write budgets, Scenario Lab card, simulation, comparison, stale-plan, and apply-candidate budgets, SpeculativePreparation hit/miss rate, wasted-work ceilings, debugger trace reconstruction latency, recovery-record creation latency, fixture-creation latency, cost ceilings, and degraded modes.

Resilience tests inject provider timeouts, partial streams, duplicate events, worker termination, deployment during active workflows, database failover, object-store errors, and webhook redelivery. Restore exercises prove that backups are application-readable and preserve tenant boundaries and evidence traceability.

## Test data

Fixtures are synthetic, licensed for testing, or explicitly approved. Each fixture records classification, owner, retention, and permitted environments. Secrets and real customer content are forbidden in source control, snapshots, screenshots, traces, and recorded model conversations.

Golden files are reviewed like code. They include schema versions and intentional update commands so broad snapshot replacement cannot hide regressions.

## Flake policy

A failing test is not retried until green and forgotten. Flakes are classified, assigned, and measured. Quarantining a test requires an owner, issue, expiration date, and a compensating release control. Security, authorization, migration, billing, and deletion tests may not be silently quarantined.

## Pull-request evidence

Every pull request identifies:

- the implementation slice and requirements changed;
- tests added or updated;
- migration and rollback impact;
- authorization and privacy impact;
- observability added;
- performance or cost impact;
- generated contract changes;
- manual validation that remains necessary.

## Release evidence

The release record links the exact source commit and artifact digest to static checks, unit and integration results, browser journeys, user-research and experience-validation packages, source-quality records for public and customer evidence inputs, HumanAIInteractionReview records, AutomationFailureRecoveryRecords, AutomationFailureLearningRecords, OutcomeMetricDefinitions, StrategicBetScorecards, OutcomeReviews, ProductTelemetryEventSpecs, CustomerClaimEvidenceRecords, AI evaluations, security tests, load results, migration rehearsal, restore exercise, canary observations, approvals, and known accepted risks.

Passing tests establish only the behavior they cover. Unmeasured behavior remains unverified and must not be represented as production-ready.
