---
id: security-threat-model
title: Threat model
status: accepted
owner: security
last_reviewed: 2026-07-16
---

# Threat model

## Scope

This threat model covers the browser application, optional native companion and browser extension surfaces, TanStack Start server runtime, Hono API, Postgres, Blob, search indexes, Workflows, Queues, Sandbox, AI Gateway/providers, web fetchers, source parsers, connectors, MCP servers, and public documentation delivery.

The system holds private research corpora and may expose selected public projections. Confidentiality and provenance failures are therefore as serious as conventional account compromise.

## Assets

- user identities, sessions, memberships, and organization policy;
- connector grants and refresh credentials;
- uploaded and connected source originals;
- immutable SourceVersions and locators;
- private documents, chats, claims, and evidence;
- private comments, assignments, review requests, decision records, and presence metadata;
- approval requests, approval receipts, delegated-trust grants, approval batches, approval-load budgets, and fatigue signals;
- SpatialWorkbenchStates, Worksets, PaneInstances, WorksetSnapshots, layout suggestions, and spatial observations;
- ProjectHealthSnapshots, HealthSignals, HealthLineageEdges, HealthFindings, RepairPlaybooks, RepairRuns, support-safe diagnostics, and repair outcome observations;
- SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, support cases, and support audit evidence;
- AccessibilityProfiles, LocaleProfiles, LanguageDirectionMetadata, AccessibleOutputManifests, TranslationArtifacts, localized summaries, and unsupported-language limitation records;
- PreferencePolicies, PreferenceItems, PreferenceObservations, AdaptiveInterfaceProfiles, PreferenceSuggestions, PreferenceExplanations, PreferenceConflicts, preference exports, resets, and invalidations;
- AbusePolicies, AbuseSignals, AbuseCases, AbuseDecisions, AbuseThrottles, AbuseReviews, AbuseAppeals, AbuseEnforcementActions, provider-policy classifications, false-positive observations, and abuse outcome evidence;
- ReversalCapabilities, ReversalRecords, RecoveryActionCards, CompensationPlans, CompensationSteps, ReconciliationChecks, irreversible acknowledgements, and reversal outcome observations;
- progressive delivery envelopes, Partial Results, FastPathSnapshots, and stale projections;
- SourceFreshnessPolicies, SourceChangeSets, SourceLocatorMappings, ClaimRevalidations, MaintenanceRuns, MaintenanceImpactSummaries, MaintenancePatchProposals, MaintenanceActionCards, MaintenanceSchedules, MaintenanceOutcomeObservations, source-change blockers, and maintenance invalidations;
- NativeCompanionInstalls, NativePermissionGrants, NativeContextPackets, NativeCaptureIntents, NativeFileWatchGrants, NativeCommandBridges, NativeNotificationBindings, companion queue metadata, extension IDs, native app IDs, and update-channel policy;
- public disclosure and publication policy;
- model inputs, outputs, tool calls, and usage;
- audit records and deletion evidence;
- billing and budget state;
- application signing and webhook secrets.

## Trust boundaries

```text
untrusted browser
native companion / browser extension
  │ authenticated request
  ▼
application edge / Hono policy boundary
  │ authorized identifiers only
  ├── database and private Blob
  ├── workflow/queue control plane
  ├── AI provider boundary
  ├── connector/provider boundary
  ├── public internet fetch boundary
  └── isolated Sandbox boundary

public publication delivery is a separate read path over approved snapshots
```

Source content remains untrusted after authentication. A private PDF can be malicious even when uploaded by a legitimate user.

## Principal threats and controls

| Threat | Example | Primary controls |
|---|---|---|
| broken object authorization | changing `projectId` exposes another Project | Project-scoped query APIs, centralized policy, negative tests |
| cross-tenant search leakage | vector search returns another tenant's chunk | authorization filter before retrieval, Project-partitioned indexes, no shared final caches |
| public/private disclosure failure | private citation appears on public page | immutable public snapshot pipeline, disclosure manifest, release-blocking leak tests |
| collaboration metadata leakage | private comments, reviewer identity, or unresolved objections appear in a public export | collaboration-aware projection policy, redaction tests, publication blockers, support-safe diagnostics |
| focus or resume metadata leakage | stale Resume Digest or notification summary reveals a now-unauthorized source, comment, document, or connector exists | viewer-scoped projections, read-time authorization, invalidation, redacted tombstones, content-minimized support diagnostics |
| local cache or offline sync leakage | browser storage, service worker cache, offline packet, local draft, queue item, sync conflict, or handoff link exposes private content or applies stale work after authorization changes | LocalCachePolicy, no credentials or prohibited private content in browser storage, offline lease expiry, reconnect reauthorization, expected-version checks, high-risk offline-action denial, SyncConflict review, content-minimized diagnostics |
| native companion or browser extension overreach | extension, desktop shell, global shortcut, file watcher, notification action, or deep link captures active tabs, selected text, clipboard, screenshots, browser history, keystrokes, camera, microphone, OS windows, or broad filesystem content without explicit Project-scoped grant and user invocation | optional install, minimal manifest permissions, active-tab gesture, NativePermissionGrant, NativeContextPacket minimization, file-watch path bounds, no ambient capture, server-owned preflight, update signing, emergency revocation, content-minimized diagnostics |
| hidden personalization or preference leakage | adaptive defaults, suggestions, model-context summaries, preference exports, or explanations reveal hidden resources, cross Project boundaries, preserve revoked context, or make unverifiable inferences feel authoritative | visible Preference Center controls, scoped PreferencePolicies, content-minimized observations, explanation and correction paths, reset/export, model-context minimization, dependency invalidation, no preference-as-evidence behavior |
| spatial layout metadata leakage | Workset restore, pane titles, layout suggestions, or stale pane errors reveal a now-unauthorized source, document, comment, connector, or hidden Project resource exists | projection-safe layout state, restore-time authorization, redacted tombstones, dependency invalidation, content-minimized diagnostics, no ambient OS/browser capture |
| health diagnostic metadata leakage | HealthFinding, support-safe diagnostic, repair dry-run, or repair error reveals a now-unauthorized source, document, comment, connector, Workset, or hidden Project resource exists | viewer-scoped health snapshots, read-time authorization, redacted reason categories, support-grant checks, dependency invalidation, no ambient OS/browser/device capture |
| support session or diagnostic bundle leakage | SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, support export, or break-glass review reveals hidden Project resources, private content, unredacted notes, or stale access after revocation | metadata-first bundles, explicit content absence flags, support access requests, time-bounded sessions, step-up, expiry, revocation, self-approval rejection, immutable audit, break-glass review, export minimization |
| accessibility or locale metadata leakage | accessibility preferences, locale settings, language diagnostics, translation artifacts, or output manifests reveal private content, assistive-technology identity, disability status, hidden source existence, or cross-tenant language metadata | content-minimized profiles, no assistive-technology identity capture, locale-neutral APIs, source-version lineage, translation provider policy, accessible-output manifests, redacted diagnostics, and authorization before language processing |
| unsafe repair execution | repair playbook publishes, deletes, bills, widens permission, sends data, or writes externally without exact approval | typed repair playbooks, deterministic preflight, expected versions, idempotency, ActionCards, side-effect ledgers, approval receipts, delegated-trust fail-closed checks |
| unsafe or leaky simulation | Scenario simulation reveals hidden resources, treats a live connector write as a no-side-effect preview, or lets a stale simulated plan mutate Project state | authorization before snapshot assembly, content-minimized ScenarioInputSnapshots, live-test classification, stale-plan invalidation, apply-candidate revalidation, owning-service mutation boundaries, Activity and audit evidence |
| unsafe or leaky recovery | Project history or recovery cards reveal hidden resources, promise rollback for irreversible effects, replay an external write twice, or compensate the wrong resource | authorization before capability display, expected-version revalidation, irreversible labels, side-effect ledger reconciliation, compensation plans, RecoveryActionCards, Activity and audit evidence |
| progressive cache, preload, or hidden speculation leakage | Fast Path, stale projection, preloaded route data, or speculative provider/browser work reveals a now-unauthorized source, Partial Result, citation state, document revision, private content, or budget-affecting intent | reauthorize before cache read, policy/source/document-version cache keys, SpeculativePreparation ladder, default-deny Level 5 speculation, projection invalidation, redacted stale state, no private preloading or material preparation without explicit policy, intent, budget, and approval |
| unsafe or leaky source-change maintenance | source refresh, official-reference sweep, repository webhook, or scheduled maintenance hides source changes, leaves stale public output unblocked, rewrites canonical documents silently, exposes private affected claims in diagnostics, or creates broad patches without review | immutable SourceVersions, SourceFreshnessPolicy, content-minimized SourceChangeSets, ClaimRevalidations, Impact Reports, typed MaintenancePatchProposals, MaintenanceActionCards, expected versions, approval gates, publication blockers, support-safe diagnostics, and no-silent-rewrite tests |
| prompt injection | repository file tells model to upload secrets | source/data separation, tool allowlists, intent and approval policy outside source text, code authorization, verifier |
| credential theft | model output or log captures OAuth token | token broker, opaque connection IDs, redaction, no secrets in context |
| SSRF | imported URL targets cloud metadata or internal service | URL normalization, DNS/IP revalidation, private-range block, redirect limits |
| parser compromise | crafted document exploits converter | Sandbox isolation, patched images, resource/network limits |
| archive bomb | nested compressed upload exhausts resources | preflight limits, bounded expansion, quotas |
| malicious external tool | MCP server returns hostile instructions or exfiltrates input | allowlist, narrow schemas/scopes, output limits, no broad context |
| unauthorized external write | model opens PR or sends email | separate write grant, exact approval binding, audit |
| approval fatigue or delegated-trust abuse | repeated low-risk prompts train blind approval, or a stale grant permits a widened action | approval-load budgets, scoped expiring grants, hard-stop classes, fail-closed mutation checks, fatigue signals, audit |
| abuse-prevention miss or overblock | automated source acquisition, publication, API fanout, connector writes, GitHub proposals, notifications, exports, or recipe triggers are used for spam, policy evasion, cost abuse, or harmful output; or legitimate work is repeatedly blocked without a review path | deterministic abuse preflight, AbusePolicies, AbuseSignals, AbuseDecisions, tenant-scoped AbuseThrottles, provider-policy checks, content-safety normalization, review ActionCards, appeals, false-positive measurement, emergency controls, and content-minimized telemetry |
| source tampering | mutable URL changes after citation | immutable snapshots and hashes |
| replay/duplicate mutation | webhook or client retry creates duplicate source/run | signatures, timestamps, idempotency keys, receipts |
| model/provider data-policy violation | restricted source sent to unapproved route | policy-aware routing before request construction |
| stored XSS | generated Markdown contains scripts | sanitization, CSP, safe renderer, no arbitrary HTML |
| supply-chain compromise | parser or package update exfiltrates data | lockfiles, provenance, dependency scanning, least-privilege runtime |
| billing abuse | automated deep research exhausts budget | rate limits, budgets, quotas, anomaly detection |
| denial of service | huge uploads or repeated workflows | staged quotas, signed uploads, concurrency and queue limits |
| insider misuse | administrator or support operator browses private data without need | scoped roles, metadata-first support diagnostics, SupportAccessRequests, SupportAccessSessions, support access workflow, audit, break-glass review |

## Public/private attack paths

Public rendering is high risk because filtering private content after generation is insufficient. The safe path begins with canonical blocks eligible for public disclosure, maps citations through an approved public representation, scans the resulting snapshot, and publishes immutable bytes.

Public endpoints cannot call general Project search, private document loaders, connector APIs, or model tools.

## AI-specific attack paths

### Instruction confusion

A model interprets source text as policy. Mitigations: labeled source envelopes, stage prompts, schema-bound tools, code-level permissions, intent/preflight policy governed by [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md), output review.

### Indirect exfiltration

A malicious source asks the model to include another source in a public answer or tool call. Mitigations: Project and disclosure context at executor, public snapshot pipeline, secret scanning, exact action approval.

### Citation laundering

A generated summary cites itself or several derivatives as independent support. Mitigations: upstream provenance and independence groups.

### Tool argument smuggling

Model places a URL, command, SQL fragment, or file path in an allowed tool. Mitigations: semantic validation, allowlists, safe resolvers, Sandbox, parameterized queries.

### Context poisoning

Repeated low-quality sources dominate retrieval. Mitigations: source-quality signals, independence grouping, source caps, contradiction search, user pin/exclude controls.

## Abuse cases

- using the service to crawl prohibited or unauthorized material;
- uploading illegal or harmful content;
- attempting to identify private source existence through timing or errors;
- mass-generating public misinformation with fabricated citations;
- using connected systems beyond the user's authorization;
- using Sandbox for cryptomining, network abuse, or persistence;
- creating excessive model spend through scripted requests.
- repeatedly triggering false positives that block legitimate research without a review, appeal, or policy-correction path.

Acceptable-use enforcement, rate limiting, content handling procedures, review queues, appeal paths, false-positive measurement, emergency controls, and incident response must exist before public launch.

## Security verification

Release gates include:

- SAST, dependency, secret, and infrastructure checks;
- API authorization matrix tests;
- cross-Project and cross-organization search tests;
- public/private publication fixtures;
- webhook replay and signature tests;
- SSRF and URL parser tests;
- malicious document/archive corpus;
- prompt-injection and tool-policy evaluations;
- native companion and browser extension minimal-permission, explicit-grant, active-tab gesture, selected-context capture, file-watch path-bound, revocation, emergency-disable, update-signing, no ambient screen/clipboard/history/filesystem/keylogging/camera/microphone/window capture, and content-minimized diagnostic tests;
- source-change maintenance source-diff, ClaimRevalidation, private affected-claim redaction, publication-blocker, typed patch proposal, expected-version, approval-gate, failed-refresh, support-safe diagnostic, and no-silent-rewrite tests;
- Spatial Workbench and Workset restore reauthorization, redaction, stale-pane, and no-ambient-capture tests;
- PreferencePolicy enforcement, PreferenceObservation minimization, PreferenceExplanation accuracy, PreferenceSuggestion correction, preference reset/export, model-context preference redaction, cross-Project isolation, stale-profile invalidation, and hidden-profile complaint tests;
- Project Health finding redaction, support-safe diagnostic minimization, repair dry-run authorization, RepairRun preflight, approval, idempotency, side-effect, and no-ambient-capture tests;
- SupportDiagnosticBundle minimization, SupportAccessRequest approval and denial, SupportAccessSession expiry and revocation, self-approval rejection, stale-policy rejection, audit export redaction, and break-glass review tests;
- AccessibilityProfile and LocaleProfile minimization, LanguageDirectionMetadata authorization, TranslationArtifact lineage, accessible-output manifest redaction, translation provider policy, locale-neutral API, RTL citation association, and no assistive-technology identity capture tests;
- AbusePolicy, AbuseSignal, AbuseDecision, AbuseThrottle, AbuseReview, AbuseAppeal, provider-policy, content-safety, publication-spam, GitHub-spam, connector-write-spam, notification-spam, API-fanout, recipe-runaway, appeal-reversal, false-positive, emergency-control, and no-shadow-content-store tests;
- Scenario snapshot minimization, hidden-resource redaction, live-test labeling, stale-plan rejection, apply-candidate preflight, no-side-effect simulation, and outcome-observation tests;
- Reversible Work capability minimization, hidden-resource redaction, stale recovery rejection, irreversible-label accuracy, compensation authorization, reconciliation-before-retry, and recovery outcome tests;
- approval-load, delegated-trust, stale-receipt, and grant-invalidation tests;
- deletion and revocation exercises;
- third-party penetration testing before enterprise release.

## Residual risk

Models can still misinterpret evidence, external providers can fail, irreversible effects can only be compensated, and novel parser/model attacks can bypass classifiers. The architecture therefore limits blast radius, preserves auditability, requires review for material publication and external writes, labels irreversible effects, and supports subsystem kill switches.
