---
id: delivery-performance-capacity-load-engineering
title: Performance, capacity, and load engineering
status: accepted
owner: operations
last_reviewed: 2026-07-18
---

# Performance, capacity, and load engineering

## Purpose

Research combines interactive chat, large uploads, parsing, crawling, hybrid retrieval, long-running research, multi-agent fan-out, document editing, Project history, recovery actions, GitHub indexing, exports, notifications, and public reads. Average latency is insufficient: the system must remain fair, bounded, observable, and truthful under concurrency, provider degradation, and unusually large Projects.

This contract is informed by current official guidance from [Web.dev Core Web Vitals](https://web.dev/articles/vitals), [Web.dev Interaction to Next Paint](https://web.dev/articles/inp), [Chrome Speculation Rules guidance](https://developer.chrome.com/docs/web-platform/implementing-speculation-rules), [MDN Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API), [OpenTelemetry](https://opentelemetry.io/docs/), [Grafana k6](https://grafana.com/docs/k6/latest/), and [Playwright](https://playwright.dev/). These references define general measurement and testing practices; Research-specific SLOs are calibrated from beta evidence and release data. Product-level progressive delivery behavior is governed by [`../01-product/latency-aware-progressive-workflows.md`](../01-product/latency-aware-progressive-workflows.md), architecture-level cache/preload policy is governed by [`../02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](../02-architecture/progressive-delivery-and-fast-path-cache-policy.md), north-star outcome baselines and anti-metrics are governed by [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md), telemetry event specifications and release-claim limits are governed by [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md), CustomerClaimEvidenceRecords and allowed speed wording are governed by [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md), and repeatable user-facing scenario benchmarks that connect budgets to task outcomes are governed by [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md).

## Service classes

Capacity is planned by workload class rather than one global request rate:

| Class | Examples | Primary objective |
|---|---|---|
| Interactive | navigation, source filtering, document reads, chat start | low latency and predictable admission |
| Focus and resume | Project open, Focus State save, Resume Digest read, next-action navigation | immediate continuity without hiding stale or unauthorized state |
| Device continuity | capability labeling, offline fallback, local draft save, queue inspection, reconnect preflight, sync conflict review, mobile and installed contexts | reliable work recovery without local state becoming canonical |
| Native companion | browser side panel, active-tab capture, selected-text preview, OS share/import, file-watch queue, global command entry, notification deep link, tray/menu status | fast explicit capture and command entry without ambient OS or browser surveillance |
| Adaptive preferences | Preference Center reads, adaptation mode changes, preference explanations, correction, reset, export, adaptive interface profile rebuilds, model-context preference summaries | useful personalization without hidden profiling, cross-Project leakage, or stale inferences |
| Spatial workbench | Workset switch, pane hydration, layout restore, evidence-aware splits, layout suggestions | fast context switching without hidden state, tab overload, or authorization leakage |
| Work control | Work Packet assembly, next-action ranking, repeated-work capture, recommendation observation | fast explainable next actions without stale, unauthorized, or noisy recommendations |
| Project health | health snapshot read, top finding rank, repair dry-run, repair progress, support-safe diagnostics | fast diagnosis and bounded repair without hidden autonomy or private-content leakage |
| Support operations | SupportDiagnosticBundle read/export, SupportAccessRequest decision, SupportAccessSession start/revoke/expire, support audit export | fast customer-controlled diagnosis without private-content leakage, stale access, or support escalation delay |
| Scenario simulation | Scenario Lab card load, simulation run, option comparison, stale-plan invalidation, apply-candidate handoff, outcome observation | preview confidence without hidden side effects or slow decision loops |
| Reversible work | Project history read, recovery option calculation, restore, replay, withdrawal, compensation, reconciliation, irreversible acknowledgement | fast, trustworthy recovery without duplicate effects, hidden irreversible state, or authorization leakage |
| Approval control | approval request creation, approval batch grouping, delegated-trust grant verification, fatigue-signal routing, stale receipt rejection | low-friction oversight without unsafe autonomy or prompt spam |
| Abuse prevention | abuse preflight, throttle evaluation, review queue, appeal state, enforcement release, emergency controls | safe limits and review without arbitrary blocks, tenant leakage, or private-content telemetry |
| Streaming | chat and research progress | fast first event, stable reconnect, bounded buffering |
| Progressive delivery | Project shell, Partial Results, stale projections, Fast Paths, SpeculativePreparation, cancellation/status | immediate authorized state without false completion, hidden spend, or private preload leakage |
| Knowledge maintenance | source freshness reads, SourceChangeSets, locator mapping, ClaimRevalidations, MaintenanceRuns, MaintenancePatchProposals, MaintenanceActionCards, MaintenanceSchedules, blocker projections | living documentation without hidden rewrites, stale public output, unbounded background cost, or review overload |
| Automation debugging | Automation Run Debugger summary, trace reconstruction, failure taxonomy, trace comparison, replay-case creation, fixture creation | fast diagnosis without raw private-content leakage or unbounded trace storage |
| Background | parsing, OCR, indexing, source refresh, exports | durable throughput and fair scheduling |
| Research | web discovery, agents, verification, long-form assembly | bounded concurrency, cost, and completion visibility |
| External write | GitHub PR, publication, notification, connector mutation | idempotency, approval, and low duplication risk |
| Public read | published documents and assets | cacheability, abuse resistance, and origin protection |

Every workload declares tenant, Project, user, operation, cost, memory, CPU, I/O, model, network, and storage dimensions used for admission and scheduling.

## Service-level objectives

Initial production SLOs are hypotheses and must be calibrated with beta evidence. At minimum, measure:

- Core Web Vitals and route-level browser responsiveness for Project, Chat, Documents, Sources, and public publication pages;
- Command Center open latency, filter latency, shortcut capture, disabled-reason rendering, and command preview latency for primary routes;
- Focus State read/write latency, Resume Digest compact-read latency, digest rebuild latency, attention-ranking latency, caught-up checkpoint latency, and next-action navigation latency for primary Project routes;
- DeviceCapabilityProfile evaluation, offline fallback, local draft save and restore, LocalCacheManifest read, queue listing, reconnect preflight, SyncConflict review, clear-cache command, service-worker update, storage-eviction recovery, mobile input latency, tablet navigation, and installed-app launch state;
- NativeCompanionInstall projection, browser side-panel open, active-tab prompt to preview, selected-text preview, OS share/import preview, file-watch event batching, companion queue listing, command bridge invocation, notification click to authorized Project view, deep-link resolution, signed update check, revocation propagation, extension overhead, and desktop companion overhead;
- PreferencePolicy evaluation, Preference Center load latency, adaptation mode write latency, PreferenceExplanation rendering, PreferenceSuggestion resolution latency, preference reset/export latency, AdaptiveInterfaceProfile rebuild latency, model-context preference-summary assembly, and preference invalidation propagation;
- Workset switch latency, Workset restore latency, pane hydration latency, pane collapse or expansion latency, evidence-aware split readiness, stale or redacted pane recovery latency, layout suggestion generation latency, and layout suggestion resolution latency;
- Work Packet compact-read latency, WorkContextSnapshot rebuild latency, NextActionCandidate ranking latency, candidate explanation payload size, stale-packet invalidation latency, recommendation observation write latency, repeated-work capture latency, and recipe-draft candidate review latency;
- source freshness read latency, source-change detection latency, SourceChangeSet build latency, SourceLocatorMapping latency, ClaimRevalidation throughput, MaintenanceImpactSummary latency, MaintenancePatchProposal render latency, MaintenanceActionCard review latency, MaintenanceSchedule read/write latency, blocked-publication projection latency, maintenance cancellation acknowledgement, and maintenance outcome observation latency;
- Project Health first-status latency, HealthSnapshot rebuild latency, top finding rank latency, finding detail payload size, repair dry-run latency, RepairRun progress latency, repair outcome observation write latency, health invalidation latency, and support-safe diagnostic generation latency;
- SupportDiagnosticBundle generation, compact read, export, expiry, revocation, SupportAccessRequest render and decision latency, SupportAccessSession start, step-up, audit-write, expiry, revocation, and break-glass review latency;
- Scenario Lab card latency, ScenarioInputSnapshot build latency, SimulationRun queue age, SimulatedEffect count and payload size, comparison latency, stale-plan invalidation latency, apply-candidate handoff latency, and simulation outcome observation write latency;
- Project history first-load latency, ReversalCapability calculation latency, RecoveryActionCard render latency, stale recovery rejection latency, restore or duplicate-as-draft latency, replay queue age, withdrawal latency, compensation step latency, reconciliation check latency, irreversible acknowledgement latency, and reversal outcome observation write latency;
- ApprovalRequest creation latency, approval card response latency, ApprovalBatch grouping latency, DelegatedTrustGrant verification latency, stale receipt rejection latency, revocation propagation latency, approval-load budget projection latency, and fatigue-signal routing latency;
- AbuseDecision latency, AbuseThrottle evaluation latency, review ActionCard latency, AbuseAppeal open and resolution latency, false-positive outcome write latency, enforcement-release propagation latency, emergency-control propagation latency, and stable error response latency;
- Automation Run Debugger summary latency, trace reconstruction latency, failure classification latency, trace-comparison latency, replay-case creation latency, fixture-creation latency, and redaction correctness;
- Project shell and document/source list server response latency;
- Chat request acceptance, first ProgressiveDeliveryEnvelope, first streamed event, first useful answer event, Partial Result emission, citation-ready state, reconnect success, and visible cancellation acknowledgement;
- citation activation to exact source context;
- upload session creation and resumable progress;
- source time-to-stored, time-to-searchable, and time-to-citable by format/size;
- Research Run queue delay, stage duration, completion, cancellation, and partial-result rate;
- public publication availability and cache hit rate;
- workflow/event backlog age;
- retrieval latency, candidate count, rerank latency, and citation verification latency;
- Fast Path eligibility, cache hit safety, stale-while-revalidate latency, projection invalidation latency, and permission-redaction correctness;
- SpeculativePreparation level distribution, allowed versus denied preparation, prepared-state latency benefit, hit/miss rate, wasted-work cost, material-preparation approval rate, privacy-denial rate, cancellation and expiry behavior, and user-visible prepared-state clarity;
- provider latency, error, throttle, fallback, token, and cost distributions.

SLOs use percentiles and good-event definitions, not averages. Error budgets govern release velocity for affected service classes.

An interaction is not a good event if it is technically fast but hides source scope, leaves the user without a recovery path, drops cancellation, or presents a partial result as complete.
Progressive delivery is not a good event if the first response is fast but omits authorization state, stale labels, source coverage, citation readiness, pending stages, cancellation, or recovery.
Command Center use is not a good event if it opens quickly but invokes the wrong target, hides disabled reasons, conflicts with text editing or assistive technology, skips preflight, or fails to expose approval and recovery state.
Resume is not a good event if it opens quickly but omits a blocker, leaks private or now-unauthorized resource details, hides that the digest is stale or partial, ranks low-risk activity ahead of required action, or suppresses an immediate notification that policy requires.
Device continuity is not a good event if the app opens offline but loses draft work, hides storage or browser limitations, syncs stale work without current preflight, lets local cache imply canonical truth, leaks local content into telemetry, or resolves a material conflict with last-write-wins.
Native companion use is not a good event if capture is fast but uses broad permissions, hides Project destination, reads a tab without user invocation, follows a file-watch path escape, leaks selected text or local file details into telemetry, skips preview, bypasses command preflight, or makes revocation hard to find.
Adaptive personalization is not a good event if it saves clicks by building hidden profiles, crossing Project or policy boundaries, injecting preferences as factual evidence, hiding why an interface changed, ignoring corrections, or making reset and export hard to find.
Spatial Workbench use is not a good event if a Workset switches quickly but restores unauthorized panes, hides stale or deleted resources, drops the user's pinned layout, creates a keyboard trap, obscures source coverage, or suggests a layout without explaining the triggering observations and reversal path.
Work control is not a good event if a Work Packet loads quickly but recommends an unauthorized, stale, unexplained, noisy, or irreversible action, hides recovery and approval state, or fails to record dismissal, correction, invocation, and outcome observations.
Knowledge maintenance is not a good event if it refreshes quickly but hides changed source scope, fails to revalidate dependent Claims, leaves stale public output unblocked, proposes broad rewrites instead of minimal typed patches, bypasses review, or runs unbounded scheduled work without owner, budget, and stop conditions.
Project Health is not a good event if it loads quickly but hides the evidence behind a finding, omits stale or redacted state, proposes a repair without preflight and approval class, leaks hidden resource existence, or reports a repair as successful before the owning state and outcome observation support it.
Scenario simulation is not a good event if it loads quickly but hides unknowns, redactions, live-test boundaries, stale dependencies, side effects, approval class, cost, latency, or recovery path, or if it lets a SimulatedEffect proceed without owning-service preflight.
Approval control is not a good event if it reduces prompts by widening authority, hides batch contents, reuses a stale receipt, ignores revocation, fails to explain a hard stop, or lets a mutation proceed without exact delegated-trust coverage.
Abuse prevention is not a good event if it blocks legitimate work without a safe explanation, review, appeal, retry, or scope-narrowing path where policy allows; allows abusive work to proceed through a second route; exposes private content in diagnostics; hides provider-policy decisions; or lets a stale decision authorize a mutation.
Automation is not a good event if it runs successfully but produces rejected work, unresolved contradictions, avoidable approval loops, cost anomalies, or outputs that users ignore or reverse. Outcome-scored automation and adaptive routing are governed by [`../01-product/automation-outcome-scorecard-and-adaptive-workflows.md`](../01-product/automation-outcome-scorecard-and-adaptive-workflows.md) and [`../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md`](../02-architecture/automation-outcome-evaluation-and-adaptive-routing.md).

## Capacity model

A quarterly capacity plan records:

- active organizations, Projects, users, sources, document bytes, chunks, vectors, evidence spans, and revisions;
- upload and sync arrival distributions;
- parsing/OCR/transcription CPU and memory per format;
- database connections, transaction rate, table/index growth, WAL and replication lag;
- object operations and egress;
- retrieval QPS, vector dimensions, index build time, and cache behavior;
- progressive envelope rate, stream event rate, Partial Result volume, Fast Path hit/miss behavior, invalidation fanout, and preload effectiveness;
- SpeculativePreparation trigger volume, level distribution, hit/miss rate, denied-level count, wasted-work ceiling, material-spend reservation volume, cancellation rate, and expiry fanout;
- DeviceCapabilityProfile volume, LocalCacheManifest size, OfflineDraft metadata volume, OfflineActionQueueItem count, sync retry count, SyncConflict count, offline packet size, service-worker cache size, storage-quota pressure, and mobile route payload size;
- NativeCompanionInstall volume, NativePermissionGrant count, NativeContextPacket metadata volume, NativeCaptureIntent rate, NativeFileWatchGrant count, file-watch event rate, companion queue size, blocked-capture count, notification deep-link rate, command bridge invocation rate, extension update population, revocation fanout, and companion diagnostic volume;
- PreferencePolicy count, PreferenceItem cardinality, PreferenceObservation write volume, AdaptiveInterfaceProfile rebuild rate, PreferenceSuggestion volume, PreferenceExplanation payload size, PreferenceConflict rate, reset/export volume, model-context summary size, and preference invalidation fanout;
- Workset count, pane instance count, template cardinality, snapshot frequency, restore failure rate, pane hydration fanout, layout suggestion rate, and spatial invalidation fanout;
- Work Packet rebuild rate, WorkContextSnapshot cardinality, next-action candidate volume, repeated-work capture volume, recommendation observation writes, and invalidation fanout;
- source refresh volume, SourceChangeSet size, SourceLocatorMapping count, ClaimRevalidation fanout, affected DocumentBlock count, MaintenanceImpactSummary cardinality, MaintenancePatchProposal queue depth, MaintenanceActionCard backlog, MaintenanceSchedule count, blocked-publication count, official-reference review expiry volume, stale-claim sweep rate, maintenance cancellation rate, and outcome observation writes;
- HealthSnapshot rebuild rate, HealthSignal volume, HealthFinding cardinality, repair dry-run rate, RepairRun concurrency, repair outcome observation writes, support diagnostic volume, repeated-repair frequency, and health invalidation fanout;
- support case volume, SupportDiagnosticBundle volume, bundle item cardinality, support access request rate, session concurrency, session audit event volume, audit export volume, break-glass review volume, support revocation fanout, and support evidence retention growth;
- Scenario volume, option count, effect count, hidden-dependent count, stale-plan invalidation rate, apply-candidate rate, live-test warning rate, simulation outcome-observation volume, and scenario invalidation fanout;
- approval request volume, batch cardinality, delegated-trust grant count, grant-verification QPS, revocation fanout, approval-load projection volume, fatigue-signal rate, stale receipt rejection rate, and hard-stop block volume;
- AbuseSignal volume, AbuseDecision volume, AbuseThrottle cardinality, review queue depth, appeal queue depth, false-positive rate, provider-policy denial rate, content-safety block rate, enforcement action count, emergency-control fanout, API quota pressure, source-acquisition pressure, public-publication pressure, notification pressure, connector-write pressure, GitHub proposal pressure, and recipe-trigger pressure;
- Automation Run Debugger trace volume, debug-event fanout, comparison-run cardinality, replay-case count, fixture-candidate count, failure-taxonomy cardinality, trace-retention class, and redaction workload;
- concurrent streams, workflows, agents, browser sessions, Sandboxes, and provider requests;
- queue backlog and drain rate;
- expected peak, seasonal, launch, migration, and incident multipliers;
- provider and regional quota headroom.

Capacity thresholds produce alerts and an owned remediation date before exhaustion. Storage growth includes immutable-history and deletion/retention behavior, not only current visible content.

## Admission control and fairness

The system reserves capacity before starting expensive work. Admission evaluates entitlement, current usage, tenant/project/user concurrency, estimated cost, source size, model/tool quotas, provider health, queue delay, and regional capacity.

Scheduling uses weighted fairness so one organization, large import, crawler, or runaway agent cannot starve interactive work. Interactive reads and cancellation/control commands retain reserved capacity during background saturation.

When work cannot start, the API returns an explicit queued, deferred, downgraded, or rejected state with reason and retry guidance. It must not accept work and then leave it indefinitely invisible.

## Backpressure

Every bounded queue has a maximum depth or age, dead-letter policy, retry class, and shedding strategy. Producers respond to downstream saturation by slowing, aggregating, deferring, or rejecting work rather than creating unbounded memory or database growth.

Streams have bounded event sizes, heartbeat intervals, replay windows, and client-consumption limits. Slow or disconnected clients do not retain unbounded server memory. Durable events remain available for reconnection according to retention policy.

## Load test portfolio

Load tests include:

1. Normal interactive traffic with representative Project sizes.
2. Burst traffic after a launch, webhook storm, or scheduled refresh boundary.
3. Large uploads and concurrent parsing across mixed formats.
4. Hybrid retrieval over small, medium, and very large source corpora.
5. Deep research fan-out with provider throttling and partial failures.
6. Long-form 40,000–60,000-word assembly and export.
7. GitHub repository sync and change-proposal validation.
8. Public traffic with cache misses and abuse-shaped request patterns.
9. Database migration/backfill while ordinary reads and writes continue.
10. Workset switching, pane hydration, layout restore, and spatial invalidation under large Project, narrow-screen, and multi-device conditions.
11. Offline fallback, local draft save/restore, local queue inspection, reconnect preflight, sync conflict review, storage pressure, storage eviction, service-worker update, mobile/tablet Project navigation, and installed-app state.
12. Adaptive preference profile rebuild, suggestion generation, explanation rendering, reset/export, correction, model-context summary assembly, and invalidation under large Project, multi-device, and policy-change load.
13. Project Health snapshot rebuild, top finding rank, repair dry-run, RepairRun progress, repeated repair, and support-safe diagnostic generation under large Project and background load.
14. SupportDiagnosticBundle generation, customer review, export, SupportAccessRequest decisions, SupportAccessSession expiry and revocation, audit writes, and break-glass review under large Project, support incident, and background load.
15. Approval-request bursts, approval-batch review, delegated-trust grant verification, revocation storms, fatigue warning projection, and stale receipt rejection under concurrent automation.
16. Scenario simulation bursts, large Impact Report handoff, stale-plan invalidation storms, live-test warning rendering, and apply-candidate handoff under concurrent source, document, recipe, repair, and publication load.
17. Maintenance source-refresh bursts, repository webhook storms, official-reference expiry sweeps, large-Project ClaimRevalidation fanout, patch proposal backlog, blocked-publication projection, and maintenance ActionCard review under concurrent source, document, recipe, repair, and publication load.
18. SpeculativePreparation bursts with mixed Level 0 through Level 4 eligibility, denial storms for Level 5 attempts, provider warmup under budget pressure, and prepared-state expiry under Project policy changes.
19. Abuse throttle bursts, appeal backlog, false-positive reversal, API fanout, source-acquisition abuse, publication spam, GitHub proposal spam, connector-write spam, notification spam, recipe runaway loops, and emergency-control propagation.
20. Regional/provider degradation, queue backlog recovery, and reconnect storms.

Tests use synthetic or approved fixtures and may not copy customer research into load environments. Results record environment equivalence, dataset profile, generator version, thresholds, bottlenecks, and remediation.

## Performance budgets

The repository maintains budgets for:

- browser JavaScript, route chunks, CSS, fonts, images, and editor/viewer lazy loading;
- Command Center catalog size, index load time, open latency, filter latency, server refinement latency, and command preview response size;
- Focus State payload size, checkpoint write cost, Resume Digest compact payload, digest rebuild cost, attention item count, notification suppression lookup, redaction filtering, and stale-digest invalidation fanout;
- DeviceCapabilityProfile payload size, LocalCacheManifest size, OfflineDraft metadata size, OfflineActionQueueItem count, sync retry count, SyncConflict count, offline packet size, service-worker cache size, storage-quota pressure, and mobile route payload size;
- PreferencePolicy payload size, PreferenceItem cardinality, PreferenceObservation redaction cost, AdaptiveInterfaceProfile rebuild cost, PreferenceSuggestion queue size, PreferenceExplanation payload size, PreferenceConflict routing, reset/export cost, model-context preference-summary size, and preference invalidation fanout;
- Spatial Workbench compact payload size, Workset switch cost, pane instance payload size, pane hydration fanout, Workset snapshot write cost, restore reauthorization cost, stale-pane invalidation fanout, layout suggestion generation cost, and narrow-screen adaptation cost;
- Work Packet compact payload size, WorkContextSnapshot rebuild cost, NextActionCandidate ranking cost, explanation payload size, stale-packet invalidation fanout, repeated-work capture dedupe, recommendation observation write cost, and recipe-draft candidate review latency;
- SourceChangeSet payload size, SourceLocatorMapping cardinality, ClaimRevalidation batch size, MaintenanceImpactSummary payload size, MaintenancePatchProposal payload size, MaintenanceActionCard backlog, MaintenanceSchedule cardinality, blocked-output projection fanout, official-reference review queue size, stale-claim sweep budget, and maintenance outcome observation cost;
- Project Health compact payload size, HealthSnapshot rebuild cost, HealthSignal volume, HealthFinding ranking cost, finding explanation payload size, repair dry-run cost, RepairRun progress event size, repair outcome observation cost, support-safe diagnostic payload size, and health invalidation fanout;
- SupportDiagnosticBundle compact payload size, bundle item limit, bundle generation cost, export generation cost, support access request payload size, support session audit event size, revocation fanout, break-glass review payload, and support evidence retention cost;
- Scenario Lab compact payload size, ScenarioInputSnapshot build cost, SimulationPlan analyzer count, SimulatedEffect payload size, comparison payload size, apply-candidate payload size, outcome observation cost, live-test warning payload, and scenario invalidation fanout;
- ApprovalRequest payload size, ApprovalBatch size, delegated-trust grant matching cost, grant invalidation fanout, approval-load projection cost, fatigue-warning payload, and stale-receipt recovery latency;
- AbuseSignal payload size, AbuseDecision payload size, AbuseThrottle lookup cost, review queue payload, appeal payload, false-positive observation write cost, enforcement-release propagation, emergency-control fanout, and abuse event redaction cost;
- Automation Run Debugger summary payload, trace event size, trace reconstruction query budget, comparison-run window, failure-taxonomy payload, replay-case payload, fixture-candidate payload, and retention/compaction thresholds;
- ProgressiveDeliveryEnvelope payload size, progress event frequency, Partial Result size, stale projection TTL, cache-key cardinality, FastPathSnapshot storage, SpeculativePreparation budget, allowed-level mix, prepared-state payload, hit/miss telemetry, wasted-work ceiling, preload budget, and invalidation fanout;
- server response, database query count and time, serialization, and response size;
- search candidate/rerank counts and context assembly;
- message/event size and stream frequency;
- model input/output tokens, tool calls, agent depth, and research concurrency;
- automation outcome projection time, scorecard rebuild time, adaptive recommendation latency, and cost per accepted outcome;
- source processing CPU, memory, temporary disk, archive expansion, page/frame count, and elapsed time;
- export render time and artifact size.

A changed critical path that exceeds budget requires an accepted tradeoff, a staged rollout, or remediation before release.

## Database and search engineering

Critical queries have explain plans, representative cardinalities, index ownership, and regression tests. Request paths may not perform unbounded scans or N+1 queries. Tenant filters are present in query plans before private data is returned.

Connection pools are sized against database limits across regions and deployment concurrency. Long transactions, idle sessions, locks, bloat, vacuum lag, replication lag, and index-build progress are monitored. Derived index generations support parallel build and atomic switch.

## Provider-aware degradation

Model, search, browser, OCR, and connector providers receive per-provider concurrency, timeout, retry, circuit-breaker, and budget policies. Fallback may reduce quality or delay work only within Project privacy, residency, model, source, and cost policy. The user sees when a run is queued, partial, or degraded.

## Continuous production verification

Synthetic checks exercise Project open, source retrieval, chat stream start, citation navigation, and public publication from representative regions. Real-user and server telemetry is aggregated without retaining private research content. Performance regressions are linked to release candidates and flags.

## Definition of done

Performance readiness requires measured SLOs, reproducible load tests, capacity headroom, fair admission, bounded queues and streams, migration-under-load evidence, provider degradation behavior, Command Center latency and shortcut-conflict evidence, Focus State and Resume Digest latency, DeviceCapabilityProfile latency, offline fallback latency, local draft save/restore latency, LocalCacheManifest read latency, local queue inspection latency, reconnect preflight latency, SyncConflict review latency, storage-eviction recovery evidence, mobile/tablet input latency, installed-app launch evidence, PreferencePolicy evaluation, Preference Center load, PreferenceExplanation rendering, wrong-inference correction, reset/export, AdaptiveInterfaceProfile rebuild, model-context preference summary, and preference invalidation evidence under load, Workset switch, restore, pane hydration, layout suggestion, stale-pane, and redacted-pane recovery evidence, Work Packet compact-read and rebuild latency, next-action ranking correctness under load, recommendation observation write latency, SourceChangeSet build, SourceLocatorMapping, ClaimRevalidation fanout, MaintenanceImpactSummary, MaintenancePatchProposal, MaintenanceActionCard, MaintenanceSchedule, blocked-output projection, and maintenance cancellation evidence under load, Project Health first status, top finding, HealthLineageEdge construction, trace-to-finding conversion, false-cause classification, diagnostic-waste sampling, repair dry-run, RepairRun progress, support-safe diagnostic, SupportDiagnosticBundle generation/export, SupportAccessRequest decision, SupportAccessSession expiry/revocation, support audit write, break-glass review, and repair outcome evidence under load, Scenario Lab card, simulation run, option comparison, stale-plan invalidation, live-test warning, apply-candidate, and outcome-observation evidence under load, approval-request, approval-batch, delegated-trust grant, fatigue-signal, revocation, and stale-receipt evidence under load, Automation Run Debugger summary, trace reconstruction, failure taxonomy, trace comparison, replay-case, fixture-creation, and redaction evidence under load, Progressive Delivery first-response, first-progress, first-useful-result, Partial Result, citation-ready, Fast Path, stale projection, SpeculativePreparation hit/miss, Level 5 denial, material-preparation budget, cache invalidation, reconnect, and cancellation evidence, active experience benchmark runs for affected user-facing scenarios, notification suppression correctness, automation outcome scorecards, adaptive-routing regression checks, and operational controls that keep cancellation and status paths available during saturation.
