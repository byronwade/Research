# Product-readiness gap audit

This audit separates specification completeness from production readiness. Research has a mature product and architecture specification, but runtime evidence has not yet been created.

## Current verdict

**Status:** implementation-ready specification, not production-ready runtime.

The next eligible slice is `foundation-01`. Production launch remains blocked until the 26-slice implementation plan records runtime evidence.

## Gap register

| Area | Current state | Required production evidence |
|---|---|---|
| Documentation governance, drift control, authoring quality, source-quality policy, and documentation-change evidence | Specified | `DOCS-001` through `DOCS-004`: canonical authority map, synchronized requirements, human-readable traceability matrix, routing, directory maps, indexes, `START-HERE` read order, status ledgers, production authoring standard, public-signal source-quality policy, documentation-change evidence log, document-type and reader-task audits, terminology consistency, examples, diagrams, source-quality sweeps, stale-claim sweeps, duplicate-authority review, dead-document retirement, automated status-ledger, README directory-map, indexed-doc, read-order, routed-doc, and requirement-traceability coverage, and `pnpm docs:check` evidence |
| Semantic drift and contradiction review | Specified | semantic drift review packets, contradiction severity, same-change consistency evidence, requirement/routing/status/launch/user-research/advanced-feature sweeps, Product Truth links, documentation-change evidence records, unresolved contradiction disposition, stale-count sweeps, orphan-document sweeps, and semantic contradiction review evidence |
| Runtime foundation | Not scaffolded | `FND-001` through `FND-003`: pinned pnpm/Turborepo workspace, TanStack Start, Hono, strict TypeScript, explicit package boundaries, typed configuration, deterministic bootstrap, provider simulators, generated-file freshness checks, CI, tests, architecture checks, supply-chain gates, foundation smoke tests, and provenance evidence |
| Identity and Projects | Specified | authenticated organizations, roles, Projects, policy tests |
| Persistence | Specified | migrations, rollback, audit log, outbox, Blob integration, restore drill |
| Source ingestion | Specified | upload, immutable source versions, parser isolation, source capability UI |
| Retrieval | Specified | authorization-before-retrieval tests, lexical and vector indexes, recall fixtures |
| Grounded chat | Specified | persistent streaming chat, citations, abstention, unsupported-claim handling |
| Intent capture and prompt-friction policy | Specified | `INTENT-001` through `INTENT-003`: versioned intent records, earned clarification, visible safe assumptions, deterministic preflight, approval receipts, idempotency, and prompt-friction telemetry |
| Command center and keyboard workflows | Specified | `UX-003` and `UX-004`: universal command discovery, keyboard-first workflows, Project Action Surface projection, typed command descriptors, shortcut conflict detection, compact action/tool metadata, API/SDK/CLI/MCP/native/browser/recipe descriptor parity, preflight, expected versions, approval classes, idempotency, activity evidence, disabled-reason accessibility, prompt-injection fixtures, and accessibility validation |
| Focus continuity and work resume | Specified | `UX-005` and `UX-006`: Focus State, Resume Checkpoints, Resume Digests, Focus Sessions, attention ranking, notification suppression, next-action grouping, command-center resume controls, authorization/redaction, invalidation, privacy inspection, accessibility, and performance validation |
| Spatial Workbench and Worksets | Specified | `LAYOUT-001` and `LAYOUT-002`: Project-scoped Worksets, task-aware pane layouts, evidence-aware splits, suspend and restore, progressive pane hydration, adaptive layout suggestions, stale and redacted resource handling, keyboard and assistive-technology alternatives, privacy inspection, API/SDK/MCP projections, and performance validation |
| Offline/device continuity and local cache policy | Specified | `DEVICE-001` and `DEVICE-002`: desktop, tablet, mobile, browser, installed-app, reload, reconnect, degraded-network, local-draft, local-cache, service-worker, background-sync, offline packet, cross-device handoff, queue visibility, sync-conflict, storage-eviction, policy invalidation, privacy, accessibility, and performance validation |
| Native companion and OS/browser integration | Specified | `NATIVE-001` and `NATIVE-002`: optional native companion, browser extension, active-tab capture, selected-text capture, OS share/import target, file-watch grant, global command entry, tray/menu status, notification deep-link, Project-scoped grants, revocation, signed update policy, server-owned preflight, content minimization, accessibility fallbacks, performance, and no-ambient-capture validation |
| Adaptive personalization and preference learning | Specified | `PREF-001` and `PREF-002`: Preference Center controls, adaptation modes, scope labels, preference explanations, correction, reset, export, model-context minimization, AI-surface choice preservation across onboarding, import, migration, browser extension install, native companion install, provider change, and policy change, no forced browser/assistant/companion path, no nag loops or preselected reversals, PreferenceObservations, PreferenceSuggestions, PreferenceConflicts, policy-managed mode, cross-Project isolation, support/API/SDK/MCP redaction, accessibility, privacy, and performance validation |
| Project Operating Layer and work control | Specified | `WORK-001` and `WORK-002`: Work Packets, WorkContextSnapshots, NextActionCandidates, recommendation observations, repeated-work capture, permission-safe next actions, stale/invalidation behavior, recipe-draft gating, accessibility, performance, privacy, and outcome validation |
| Project Health and causal repair | Specified | `HEALTH-001` and `HEALTH-002`: Project Health Console, HealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, suspected causes, counterevidence, unknowns, false-cause risk, diagnostic-waste classification, RepairPlaybooks, repair dry-runs, RepairRuns, SupportDiagnosticBundle refs, support-safe diagnostics, trace-to-finding benchmarks, trajectory comparison fixtures, repair outcome observations, false-positive and false-cause metrics, content-minimized OpenTelemetry and GenAI telemetry redaction tests, authorization/redaction tests, preflight, approval, idempotency, side-effect ledgers, performance, accessibility, and no-ambient-capture validation |
| Scenario Lab and change simulation | Specified | `SIM-001` and `SIM-002`: Scenario Lab cards, ScenarioInputSnapshots, SimulationPlans, SimulationRuns, SimulatedEffects, comparisons, decisions, stale-plan invalidation, live-test labeling, apply-candidate handoff, authorization/redaction tests, no-side-effect verification, performance, accessibility, and simulation accuracy evidence |
| Reversible Work and Project history | Specified | `REV-001` and `REV-002`: Project history, ReversalCapabilities, ReversalRecords, RecoveryActionCards, restore, replay, duplicate-as-draft, withdrawal, compensation plans, reconciliation checks, irreversible-effect labels, stale recovery rejection, authorization/redaction tests, performance, accessibility, and recovery outcome evidence |
| Delegated trust and approval-load control | Specified | `APPROVAL-001` and `APPROVAL-002`: scoped delegated-trust grants, approval batching, approval-load budgets, fatigue signals, stale receipt rejection, grant invalidation, revocation, hard-stop action classes, and fail-closed mutation enforcement |
| Abuse prevention and trust safety | Specified | `ABUSE-001` and `ABUSE-002`: source acquisition, deep research, public publishing, GitHub proposal, connector write, notification, export, API, MCP, support access, and recipe abuse preflight; AbusePolicies, AbuseSignals, AbuseDecisions, AbuseThrottles, AbuseReviews, AbuseAppeals, enforcement actions, provider-policy checks, tenant-scoped quotas, stable API errors, review queues, appeals, false-positive evidence, content-minimized telemetry, emergency controls, and release-blocking fixtures |
| Activity timeline and review queue | Specified | `ACT-001` through `ACT-003`: activity event spine, review queue, action cards, replay-safe run details, authorization/redaction tests, and cross-surface status consistency |
| Automation registry, dry-run review, and run debugger | Specified | `AUTO-002`: saved, scheduled, paused, failed, degraded, and retired automation registry rows; dry-run review; cost projections; failure taxonomy; Automation Run Debugger metadata; redacted step traces; trace comparison; replay eligibility; fixture creation; side-effect safety; support-safe diagnostics; outcome links; authorization/redaction; accessibility; and UI/API/SDK/CLI/MCP/webhook consistency |
| Automation failure recovery and learning loop | Specified | `AUTO-006`: AutomationFailureRecoveryRecords for failed, degraded, cancelled, stale, quiet-wrong, or side-effect-uncertain runs; recovery severity; user impact; affected resources; cause confidence; side-effect state; safe next action; disabled-action reasons; retry/replay/reconcile/compensate/rollback or withdrawal policy; owner and expiry; support-safe diagnostic refs; outcome evidence; learning artifacts; unresolved severity launch blockers; and customer-claim blockers |
| Collaboration, reviews, and decisions | Specified | `COLLAB-001` through `COLLAB-003`: anchored comments, mentions, assignments, suggestions, review requests, decision records, presence, stale/orphaned/superseded state, authorization and redaction tests, typed patch review, and public/private leakage tests |
| Trust dashboard and evidence coverage | Specified | claim-state dashboard, evidence coverage map, citation drill-down, rights/freshness/publication blockers, and typed recovery actions |
| Source-change maintenance and living docs | Specified | `MAINT-001`: SourceFreshnessPolicies, SourceChangeSets, SourceLocatorMappings, ClaimRevalidations, MaintenanceRuns, MaintenanceImpactSummaries, MaintenancePatchProposals, MaintenanceActionCards, MaintenanceSchedules, MaintenanceOutcomeObservations, publication/export blockers, official-reference review, scheduled upkeep, owner review, and no-silent-rewrite validation |
| Documents | Specified | stable Markdown blocks, revisions, canvas, raw editing, typed patches |
| Publication | Specified | public/private projection tests, privacy and rights checks, withdrawal |
| Deep research | Specified | durable runs, plans, progress, cancellation, budgets, claim verification |
| Model council and disagreement resolution | Specified | participant policy checks, persisted disagreement states, missing-evidence detection, cost controls, human-review gates, and evidence-not-consensus enforcement |
| Agents | Specified | bounded task packets, tool allowlists, audit, cost and failure containment |
| Context packs and handoff | Specified | minimized context-pack manifests, source-version dependencies, invalidation, MCP/API exposure, handoff state, and cross-tenant isolation tests |
| GitHub | Specified | GitHub App, commit-pinned evidence, sandboxed diffs, draft pull requests |
| Developer API | Specified | OpenAPI, operations, SSE, webhooks, SDKs, idempotency, stable errors |
| Commercial controls | Specified | entitlement snapshots, metering, budget enforcement, billing reconciliation |
| Governance | Specified | rights ledger, provider policy, data residency, deletion propagation |
| Operations | Specified | observability, runbooks, alerts, incident drills, backup and restore evidence |
| Accessibility | Specified | `A11Y-001`: WCAG 2.2 AA mapping, keyboard and screen-reader-critical journeys, focus return, live-region policy, reduced-motion and contrast checks, drag alternatives, accessible citations, accessible support diagnostics, AccessibleOutputManifests for generated documents, artifacts, exports, and public projections, and customer-claim evidence |
| International research and locale behavior | Specified | `I18N-001`: Unicode and grapheme fixtures, BCP 47 language tags, explicit direction metadata, LocaleProfiles, locale-neutral APIs, timezone-aware rendering, multilingual retrieval, translation-as-derived-material policy, RTL and mixed-direction document/citation/export tests, and unsupported-language limitation evidence |
| User-opinion and competitor signal loop | Specified | dated signal audits, source-quality records, advanced operating-layer differentiation policy, SignalDecisionLedger entries for accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, and non-action outcomes, requirement updates, contradiction review, and current-source refresh before customer-facing claims |
| External signal refresh and competitive watch | Specified | monthly and release-triggered watch refreshes for OS, workspace-agent, automation, performance, UX, trust, browser, model, and public-opinion signals; CompetitiveWatchItems with confidence, decision, validation, owner, and revisit trigger; stale-source blocking for launch claims |
| Frontier feature watch and novelty control | Specified | `BENCH-004`: FrontierSignalReview records for fresh OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, and public-opinion signals; source quality and currentness; user-opinion synthesis; affected requirements and docs; non-action alternatives; contradiction, copy-risk, and second-authority checks; benchmark, incubation, scorecard, and claim links; owner, expiry, revisit trigger, and customer-claim blockers |
| Specification signal decision ledger | Specified | SpecificationSignalDecisionRecords for accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, and non-action decisions; source-quality labels; confidence and representativeness labels; affected requirements and docs; owner slices; validation needs; revisit triggers; and migration path to runtime Product Truth |
| User-research segment and screener matrix | Specified | `FEEDBACK-003`: UserResearchSegmentScreeners for every opinion, interview, survey, dogfood cohort, beta cohort, support synthesis, public-signal synthesis, and benchmark participant run that can affect scope; target segments; excluded segments; job-to-be-done; agency preference; AI trust posture; automation maturity; accessibility, locale, device, privacy, security, buyer, user, operator, sampling, denominator, representativeness, bias, consent, retention, supported claims, blocked claims, owner, expiry, and revisit metadata |
| User-opinion research coverage matrix | Specified | UserOpinionCoverageRecords for each major product, automation, advanced operating-layer, AI-surface choice, typed Project action surface, accessibility, support, API, SDK, MCP, and synthetic-user research surface; target segments; required user-opinion methods; observed-task protocols; accessibility and locale coverage; synthetic-user limits; blocked claims; linked benchmarks; linked outcome metrics; owner slices; and revisit triggers |
| User-opinion coding and synthesis ledger | Specified | `FEEDBACK-004`: UserOpinionEvidenceItems, UserOpinionCodebooks, UserOpinionCodingAssignments, and UserOpinionSynthesisRecords for raw opinions, quotes, support notes, public signals, benchmark-participant notes, telemetry follow-up, and AI-assisted highlights; source locators; allowed excerpts; codebook versions; coder identity; AI-assist disclosure; negative-evidence review; contradiction state; promotion thresholds; blocked claims; Product Truth and SignalDecisionLedger links; owner, expiry, and revisit metadata |
| Telemetry and experience instrumentation matrix | Specified | ProductTelemetryEventSpecs for each launch-relevant product, performance, usability, automation, accessibility, support, API, SDK, MCP, and advanced operating-layer surface; event families; user-value questions; allowed and prohibited properties; privacy classification; retention; sampling; redaction tests; outcome metric links; benchmark links; user-opinion coverage links; Product Truth links; and blocked customer-facing claims |
| Customer-facing claim and evidence boundary matrix | Specified | `READY-004`: CustomerClaimEvidenceRecords for exact public, SDK, API, MCP, support, security, privacy, release-note, demo, testimonial, marketplace, and in-product claim language, including typed action, app-action, agent-ready, choice, control, opt-in, no-lock-in, no-forced-default, no-nag, AI-surface trust, and agency wording; allowed wording; blocked wording; source-quality records; runtime scope; user-research, telemetry, benchmark, outcome, security, privacy, accessibility, Product Truth, release-evidence, owner, approval, limitation, expiry, and revisit metadata before stronger-than-specification language is released |
| Advanced feature opportunity register | Specified | AdvancedOpportunity records, user-pain and Research-native-advantage scoring, accepted/rejected/deferred/research-more/non-action disposition, dependency readiness, validation expectations, sequencing behind the first production proof path, and launch gates for advanced OS, browser, workspace-agent, automation, performance, and UX opportunities |
| Advanced feature incubation and prototype governance | Specified | AdvancedFeatureIncubation records, AdvancedPrototypeRuns, prototype type, dogfood and beta flags, hypotheses, success metrics, guardrails, kill criteria, feature-flag lifecycle, privacy/security constraints, accessibility constraints, benchmark scenarios, user-research plans, Product Truth decisions, and explicit adopt/defer/kill/non-action outcomes |
| User research and experience validation | Specified | ExperienceValidationPlans, ExperienceStudySessions, ExperienceFindings, ExperienceEvidencePackages, participant coverage, task success, perceived-usability measures, performance-perception validation, automation acceptance evidence, dogfood limits, accessibility participant findings, unresolved-severity disposition, Product Truth links, and launch-blocking thresholds |
| Human-AI interaction and automation UX review | Specified | `READY-003`: HumanAIInteractionReview and HumanAIInteractionFinding records covering AI capability boundaries, source evidence, uncertainty, confidence, progress, permissions, approval load, user control, recovery, accessibility, internationalization, failure diagnosis, automation outcome value, Product Truth linkage, unresolved finding disposition, and launch-blocking review gates |
| Product outcome metrics and strategic bet scorecards | Specified | OutcomeMetricDefinitions, StrategicBetScorecards, OutcomeReviews, north-star outcome dimensions, baselines, denominators, good-event definitions, guardrails, anti-metrics, stage gates, Product Truth decisions, and launch-blocking scorecard evidence for performance, usability, user experience, automation, trust, reviewability, recoverability, and advanced differentiation |
| Research experience benchmark suite | Specified | ExperienceBenchmarkScenarios, ExperienceBenchmarkRuns, source-signal confidence labels, task setup, good-event definitions, bad-event definitions, performance budgets, perceived-UX measures, automation outcome measures, accessibility coverage, privacy and security checks, benchmark blockers, benchmark regressions, waived-scenario limits, and release-evidence linkage |
| Product truth board and contradiction radar | Specified | `TRUTH-001` through `TRUTH-003`: evidence-linked truth signals, provenance and bias labels, official-reference freshness, SignalDecisionLedger traceability, truth links across requirements, documents, slices, runtime evidence, experiments, release evidence, public claims, non-action decisions, and contradiction resolution evidence |
| UX, automation, and performance modes | Specified | visible quick/focused/deep/scheduled modes, coverage indicators, progress, cancellation, budget estimates, and measured performance budgets |
| Latency-aware progressive workflows | Specified | `PERF-005` and `PERF-006`: immediate authorized shell/status, Progressive Delivery, Partial Results, permission-safe Fast Paths, cache/prefetch policy, SpeculativePreparation ladder and budget gates, stale labels, cancellation, recovery, invalidation, hit/miss and denied-level evidence, wasted-work ceilings, and perceived-latency validation |
| Project Atlas and impact navigation | Specified | `MAP-001` and `MAP-002`: local graph neighborhoods, path queries, Impact Reports, missing-link suggestions, permission-filtered map projections, redaction, invalidation, large-Project performance, accessibility, and high-risk change gating |
| Automation outcome scorecards and adaptive routing | Specified | `AUTO-003` and `PERF-004`: accepted outcomes, rejected or edited work, stale-claim resolution, cost, latency, approval burden, user corrections, safety blockers, adaptive recommendations, and scorecard rebuild evidence |
| Composable automation recipes and playbooks | Specified | `AUTO-004` and `AUTO-005`: typed recipe graphs, reusable playbooks, explicit triggers, deterministic and bounded-AI steps, Project Action Surface descriptor binding, action-catalog composition, simulation, dry-run connector profiles, owner approval, canary activation, trigger dedupe, expected versions, ActionCards, Automation Run Debugger traces, replay eligibility, fixture creation, rollback or withdrawal paths, and outcome scorecard evidence |
| Project settings and administration | Specified | `ADMIN-001` and `ADMIN-002`: effective inherited policy visibility, AI-surface choice controls, settings change records, support grants, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, usage and budget visibility, high-risk change preflight, approval, audit, revocation, break-glass review, disabled-reason accessibility, migration/import preservation, and in-flight-work behavior |
| Support operations and customer diagnostics | Specified | `SUPPORT-001` and `SUPPORT-002`: customer-visible SupportDiagnosticBundles, metadata-first diagnosis, support case linkage, support access request approval or denial, support session expiry and revocation, audit exports, break-glass review, privacy minimization, and support usefulness evidence |
| Performance, capacity, and load engineering | Specified | service-class SLOs, capacity plans, fair admission, bounded queues and streams, load tests, degradation behavior, and budget regression evidence |
| Agent lifecycle and automation governance | Specified | automation registry, lifecycle states, dry-runs, approval classes, deterministic preflight, run debugger, replay, and cost projections |
| Continuous discovery and user feedback | Specified | governed feedback intake, consent and retention policy, discovery themes linked to SignalDecisionLedger entries, requirements, experiments, implementation slices, documentation patches, release evidence, or non-action decisions, and closed-loop follow-up |

## First production proof path

The first proof remains narrow:

```text
Create Project
-> upload one PDF
-> create immutable SourceVersion
-> parse and index it
-> ask a question in Chat
-> retrieve authorized evidence
-> stream a cited answer
-> create editable Markdown
-> persist and reopen it
```

No broad connector work, artifact gallery, or uncontrolled multi-agent system should outrun this path.

## Documentation gaps closed by this audit

This repository now includes explicit contracts for:

- documentation governance and drift control;
- documentation quality, authoring shape, document taxonomy, reader-task classification, terminology, examples, diagrams, stale-document retirement, and production documentation review checklist;
- documentation-change evidence log for preserving specification-mode semantic drift packets, validation commands, unresolved contradiction status, source refreshes, and deliberate non-changes;
- semantic drift and contradiction review protocol for same-change consistency, contradiction severity, user-research and public-signal labels, advanced-feature scope checks, and launch evidence;
- public-signal source quality and citation policy for classifying public, customer, survey, research, official, runtime, generated, and documentation-sweep evidence before it changes Product Truth, requirements, launch gates, or customer-facing claims;
- specification signal decision ledger for mapping user-opinion and competitive signals to accepted, rejected, deferred, research-more, accepted-risk, stale, contradicted, and non-action decisions before runtime Product Truth exists;
- user-research segment and screener matrix for mapping user-opinion, interview, survey, dogfood, beta, support, public-signal, and benchmark-participant evidence to target segments, excluded segments, sampling limits, representativeness, bias, supported claims, and blocked claims before it changes scope;
- user-opinion research coverage matrix for mapping every major product, automation, advanced operating-layer, accessibility, support, API, SDK, MCP, and synthetic-user research surface to target segments, required methods, blocked claims, owner slices, and launch-evidence needs;
- user-opinion coding and synthesis ledger for converting raw opinions, quotes, support notes, public signals, benchmark-participant notes, telemetry follow-up, and AI-assisted highlights into reviewed synthesis records with codebooks, coding assignments, negative evidence, contradiction state, AI-assist disclosure, blocked claims, and Product Truth links;
- customer-facing claim and evidence boundary matrix for mapping availability, AI accuracy, trust, performance, usability, automation value, privacy, security, accessibility, supportability, enterprise, API, SDK, MCP, testimonial, and advanced-differentiation wording to exact evidence floors and blocked language;
- activity timeline, review queue, action cards, and replay-safe event spine;
- collaboration comments, mentions, assignments, suggestions, review requests, decision records, presence, and permission-safe visibility;
- onboarding and imports;
- Project settings, administration, support grants, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support audit exports, usage visibility, and high-risk settings change control;
- notifications and scheduled automation;
- entitlements, metering, and billing;
- analytics, feedback, and experimentation;
- continuous discovery and user-feedback operations;
- trust dashboard and evidence coverage;
- context packs and agent handoff;
- intent capture, earned clarification, deterministic preflight, and approval receipts;
- command center, keyboard workflows, shortcut governance, Project Action Surface projection, typed command descriptors, action-catalog composition, and command execution safety;
- focus continuity, Focus State, Resume Checkpoints, Resume Digests, Focus Sessions, attention ranking, notification suppression, and privacy-safe resume controls;
- Spatial Workbench, Worksets, pane layouts, evidence-aware splits, suspend and restore, progressive pane hydration, adaptive layout suggestions, stale or redacted resource recovery, and projection-safe layout state;
- offline/device continuity, mobile and installed-app capability labels, recoverable local drafts, local-cache policy, service-worker controls, background-sync limits, reconnect review, sync conflicts, and policy-bound local storage;
- optional native companion, browser extension, active-tab capture, selected-text capture, OS share/import target, file-watch grant, global command entry, notification deep-link, signed update, revocation, and no-ambient-capture policy;
- adaptive personalization, Preference Center controls, preference explanations, scope separation, correction, reset, export, model-context minimization, and policy-bound preference learning;
- Project Operating Layer, Work Packets, next safe actions, repeated-work capture, recommendation observations, and work-control telemetry;
- Project Health Console, HealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, causal diagnostics, trace-to-finding conversion, false-cause controls, diagnostic-waste budgets, repair playbook dry-runs, RepairRuns, SupportDiagnosticBundle refs, support-safe diagnostics, repair outcomes, and no-ambient-capture repair policy;
- Scenario Lab, ScenarioInputSnapshots, SimulationPlans, SimulationRuns, SimulatedEffects, option comparison, stale-plan rejection, live-test labeling, apply-candidate handoff, and simulation outcome observations;
- delegated trust, approval batching, approval-load budgets, fatigue signals, grant revocation, and fail-closed approval enforcement;
- abuse prevention, trust-safety enforcement, review queues, appeals, false-positive measurement, provider-policy checks, tenant-scoped throttles, and content-minimized abuse telemetry;
- model council and disagreement resolution;
- content rights, AI governance, and residency;
- source-change maintenance, living-doc review, ClaimRevalidations, MaintenanceActionCards, and no-silent-rewrite patch policy;
- continuous knowledge maintenance;
- living dependency graph;
- production launch evidence;
- test strategy, release engineering, observability, runbooks, backup and restore, migration, and performance-capacity controls;
- link validation and documentation controls;
- user-opinion and competitive-signal audit;
- advanced operating-layer differentiation policy, accepted Research differentiators, rejected non-actions, and future advanced-feature decision rules;
- external signal refresh and competitive watch protocol for keeping OS, workspace-agent, automation, performance, UX, trust, browser, model, and user-opinion evidence current;
- frontier feature watch and novelty control for `BENCH-004`, FrontierSignalReview records, novelty-control promotion ladder, copy-risk and second-authority checks, user-opinion synthesis, benchmark and incubation links, non-action alternatives, contradiction review, and public-claim blockers;
- advanced feature opportunity register for scoring, sequencing, validating, rejecting, and deferring advanced OS, browser, workspace-agent, automation, performance, and UX opportunities;
- advanced differentiation benchmark matrix for `BENCH-003`, same-task comparator baselines, AdvancedDifferentiationBenchmarkRecords, anti-metrics, and blocked better-than OS, browser, workspace-agent, app-intent, automation, and agent-observability claims;
- advanced feature incubation and prototype governance for moving novel opportunities through scoped prototype, dogfood, beta, adoption, deferral, kill, or non-action decisions without launch drift;
- user research and experience validation protocol for observed-task studies, user opinions, dogfood limits, performance perception, automation outcomes, accessibility participants, unresolved severity, and launch evidence;
- user-research segment and screener matrix for preventing unscreened opinions, survey results, dogfood, beta, support, public-signal, and benchmark-participant evidence from becoming broader product or launch claims;
- user-opinion coding and synthesis ledger for preventing uncoded opinions, public-signal-only themes, generated summaries, or synthetic-user outputs from becoming Product Truth, launch evidence, outcome claims, benchmark scope, or customer-facing claims;
- human-AI interaction and automation UX review protocol for AI capability boundaries, trust calibration, permission and approval UX, progress labels, recovery, accessibility, failure diagnosis, and automation outcome value before prototype, beta, benchmark, or release claims;
- product outcome metrics and strategic bet scorecards for north-star outcomes, baselines, anti-metrics, OutcomeReviews, and measurable performance, usability, user-experience, automation, trust, reviewability, recoverability, and advanced-differentiation gates;
- research experience benchmark suite for repeatable first-Project, progressive wait, resume/Workset, automation debugger, Scenario Lab, native companion, Product Truth, mobile, offline, and accessibility benchmarks tied to release evidence;
- product truth board, truth graph, contradiction radar, signal provenance, source-quality records, bias controls, and non-action decisions;
- automation, UX, and performance principles;
- latency-aware progressive workflows and permission-safe fast paths;
- Project Atlas, path queries, Impact Reports, map suggestions, and permission-safe local graph navigation;
- automation outcome scorecards, good-event definitions, adaptive workflow routing, and cost-per-accepted-outcome controls;
- composable automation recipes, playbooks, trigger policy, simulation, canary activation, and recipe-run evidence;
- Automation registry, dry-run review, Automation Run Debugger, searchable execution metadata, redacted step traces, failure taxonomy, replay eligibility, trace comparison, fixture creation, side-effect safety, support-safe diagnostics, and outcome links;
- automation failure recovery records, severity, side-effect reconciliation, safe next actions, quiet-wrong outcome handling, recovery learning artifacts, and launch or customer-claim blockers;
- AI work OS and agent-automation signal audit;
- agent development lifecycle and automation governance.
- accessibility, internationalization, locale profiles, language and direction metadata, accessible output manifests, translation-as-derived-material policy, RTL fixtures, and accessible export gates.

## Open decisions before implementation

The decision workflow and initial open-decision register are governed by [`implementation-decision-records-and-open-decisions.md`](implementation-decision-records-and-open-decisions.md). The items below must remain explicit open implementation decisions until their owning slices accept current evidence:

- managed Postgres provider;
- authentication provider;
- billing provider;
- transactional email provider;
- initial model-route policy;
- local development service topology;
- staging and production environment naming;
- first supported export formats;
- first public publication shape.

These are implementation decisions. They should be recorded in the relevant slice, not decided implicitly by documentation prose.

## Readiness rule

A gap can move from open to closed only when:

1. code exists;
2. tests and evaluations pass;
3. migration and rollback are documented;
4. security and privacy checks pass;
5. release evidence records the exact commit;
6. `docs/06-delivery/implementation-status.md` is updated.
