# Database schema blueprint

Postgres is the transactional authority for identity, authorization, Projects, source metadata, document structure, evidence, durable commands, usage, and audit. Blob owns immutable bytes. Search and vector structures are derived from authoritative versions.

This document defines logical boundaries and invariants. Exact migrations are created during their owning implementation slices.

## Schema boundaries

Prefer explicit Postgres schemas or equivalent ownership boundaries:

```text
identity       organizations, memberships, sessions, service accounts
projects       projects, policies, directives, templates
sources        sources, source_versions, derivatives, parsed elements, locators
search         chunks, lexical documents, embeddings, entities, index manifests
research       conversations, messages, research_runs, steps, claims, evidence
content        documents, blocks, revisions, patches, artifacts, publications
collaboration  comments, mentions, assignments, suggestions, reviews, decisions, presence
product_truth  truth signals, evidence references, themes, opportunities, links, SignalDecisionLedger projections, contradictions, truth decisions, non-action decisions
command_center command descriptors, catalog entries, shortcut bindings, invocations, recommendations, macro drafts
workspace_layout spatial workbench state, worksets, pane templates, pane instances, snapshots, suggestions, observations, invalidations
approval_policy delegated trust policies, grants, approval requests, batches, decisions, load budgets, fatigue signals, invalidations
focus_state   focus states, resume checkpoints, resume digests, attention items, focus sessions, notification suppressions
device_continuity device capability profiles, local cache policies, cache manifests, offline drafts, offline action queue items, sync attempts, sync conflicts, continuity links, local-cache invalidations
native_companion native installs, permission grants, context packets, capture intents, file-watch grants, command bridges, notification bindings, queue items, support-safe diagnostics, revocations
preference_learning preference policies, items, observations, adaptive interface profiles, suggestions, explanations, conflicts, invalidations
progressive_delivery latency budgets, envelopes, events, partial results, fast-path snapshots, speculative preparation, invalidations
project_map   atlas views, map queries, node projections, edge projections, impact reports, suggestions, invalidations
project_health snapshots, signals, findings, repair playbooks, repair runs, support diagnostic refs, support diagnostics, outcome observations, invalidations
abuse_prevention policies, signals, cases, decisions, throttles, reviews, appeals, enforcement actions, outcome observations
scenario_simulation scenarios, input snapshots, plans, runs, effects, comparisons, decisions, apply candidates, invalidations, outcome observations
reversal      capabilities, records, snapshots, recovery action cards, compensation plans, compensation steps, reconciliation checks, outcome observations
automation     recipes, recipe versions, triggers, steps, gates, simulations, runs, debug traces, templates, outcome windows, observations, scorecards, adaptive recommendations
maintenance    source freshness policies, source change sets, locator mappings, claim revalidations, maintenance runs, impact summaries, patch proposals, action cards, schedules, outcome observations
accessibility_i18n accessibility profiles, locale profiles, language direction metadata, accessible output manifests, translation artifacts, localized summaries
connectors     connections, external objects, sync cursors, webhook inbox
operations     operations, progress events, outbox, side effects, schedules
commercial     plans, entitlements, reservations, usage, credits, invoices
platform       API clients, webhook endpoints, deliveries, feature assignments
security       capabilities, key references, policy decisions, audit events
support        cases, access requests, grants, access sessions, diagnostic bundles, diagnostics, repair commands, audit exports
```

Exposed API schemas remain minimal. Internal tables, functions, audit, credentials, and outbox structures are not directly exposed to untrusted clients.

## Identity and tenancy

Core tables:

- `organizations`
- `users` or identity-provider mapping
- `organization_memberships`
- `service_accounts`
- `service_account_credentials`
- `sessions` and revocation metadata where application-owned
- `projects`
- `project_memberships`
- `project_policies`

Every tenant-owned row includes an `organization_id`; Project-owned rows also include `project_id`. Composite foreign keys or constraints prevent a child from referencing a resource in another Organization or Project.

Authorization does not rely on IDs alone. Database roles, row policies where used, and application queries reinforce the same Project relationship.

## Sources and evidence

Representative structures:

```text
sources
source_versions
source_objects
source_derivatives
processing_attempts
parsed_elements
evidence_spans
claims
claim_evidence
source_decisions
source_permissions
```

`source_versions` are immutable and content-addressed. Originals and derivatives store Blob object identity, checksum, byte size, media type, encryption/key reference, residency, and retention class.

`evidence_spans` reference one SourceVersion and a typed locator. `claim_evidence` uses a relationship type such as direct support, indirect support, corroboration, contradiction, or context. Derived summaries cannot independently corroborate their upstream Claims.

## Conversations and research

- `conversations`
- `messages`
- `message_parts`
- `model_generations`
- `tool_calls`
- `research_runs`
- `research_steps`
- `research_tasks`
- `research_budgets`
- `research_source_candidates`

Messages and parts persist stable UI-compatible structures. Provider payloads are normalized and redacted; raw provider details are retained only when necessary, encrypted, and policy-allowed.

Research steps point to model/configuration versions, source snapshots, tool policy, attempts, usage, and result resources. Long-form sections have explicit contracts and dependency order.

## Documents and artifacts

```text
documents
document_blocks
document_revisions
document_revision_blocks
document_patches
document_patch_operations
artifacts
artifact_versions
artifact_components
publications
publication_snapshots
```

Document revisions are immutable. A document points to its current revision. Stable block IDs and revision membership support diffs, provenance, locking, and typed patches.

Public/private projections are not separate editable documents. PublicationSnapshot stores the approved immutable projection, evidence ledger, policy result, and export identities.

## Collaboration

```text
comment_threads
comments
mentions
assignments
suggestions
review_requests
decision_records
presence_sessions
collaboration_events
```

Collaboration rows belong to one Project and anchor to immutable resource versions through typed AnchorRefs. Suggestions and review requests carry expected versions. Decision records can link to comments, reviews, claims, evidence spans, source versions, memory items, and affected resources, but they do not prove factual claims without evidence.

## Product truth

```text
truth_signals
truth_evidence_references
truth_themes
truth_opportunities
truth_links
truth_contradictions
truth_decisions
truth_non_action_decisions
truth_action_cards
truth_documentation_patch_proposals
official_reference_reviews
```

Product-truth rows belong to one Project unless a benchmark reference is explicitly promoted to a shared reference catalog. `truth_signals` record source type, provenance, confidence, recency, segment, consent, retention, viewer policy, bias assessment, and allowed excerpt policy. They link to feedback records, public user-opinion references, official-reference reviews, analytics aggregates, experiment results, runtime evidence, implementation evidence, requirements, documentation blocks, slices, release evidence, and non-action decisions.

`truth_links` use typed relationships such as supports, contradicts, updates, supersedes, duplicates, blocks, implements, documents, tests, waives, and needs review. The SignalDecisionLedger is a projection over `truth_signals`, `truth_themes`, `truth_opportunities`, `truth_links`, `truth_decisions`, `truth_non_action_decisions`, `truth_documentation_patch_proposals`, experiments, implementation issues, and release-evidence links. It stores reviewed decision state, objective dimension, affected requirements, affected documents, affected owner slices, validation evidence, owner, and revisit trigger without becoming a second roadmap or implementation-status ledger. `truth_contradictions` preserve detector, severity, affected authorities, lifecycle state, owner, due date, resolution, and validation evidence. AI clustering can propose themes and patch drafts, but canonical requirements, documents, and implementation status change only through reviewed patches and auditable decisions.

## Command center

```text
command_descriptors
command_catalog_entries
command_context_snapshots
shortcut_bindings
command_invocations
command_recommendations
command_macro_drafts
command_aliases
```

Command Center tables belong to one Project unless a descriptor is explicitly promoted to a shared library. Descriptors are versioned and point to owning packages, input schema, result schema, action class, required capabilities, preflight policy, approval class, idempotency scope, ActivityEvent type, and accessibility label.

Catalog entries are permission-filtered projections for fast search. They store safe titles, aliases, groups, shortcut hints, target type, action class, approval class, disabled reason, and rank metadata. They do not store private source text, raw prompts, hidden reasoning, credentials, private document bodies, or full connector payloads.

Shortcut bindings store user, Project, Organization, and default scopes, platform context, key chord or sequence, conflict status, enabled state, and descriptor version. Invocation rows link to IntentRecords, Operations, ActionCards, ActivityEvents, expected versions, preflight results, and idempotency keys.

## Delegated trust and approvals

```text
delegated_trust_policies
delegated_trust_grants
approval_requests
approval_batches
approval_decisions
approval_load_budgets
approval_fatigue_signals
approval_policy_invalidations
```

Delegated trust and approval policy rows belong to one Project unless an Organization policy explicitly owns the default. Grants store actor or automation refs, intent refs, command descriptor refs, recipe version refs, action class, side-effect class, resource scope, source scope, connector scope, destinations, model-role policy, budget policy, expected-version policy, preflight policy hash, canary policy, outcome metric refs, status, expiry, and revocation.

Approval requests and batches store target resource refs, payload hashes, expected versions, approval class, side-effect class, destination refs, risk summaries, recovery paths, shared policy hashes, excluded high-risk refs, status, and expiry. Approval decisions store decider, decision, reason code, scope edits, created grant refs, policy snapshot hash, and decision time.

Approval-load budgets and fatigue signals are derived policy and telemetry records. They store counters, classifications, thresholds, severity, recommended actions, and source metric refs, not private source text, prompts, document bodies, connector payloads, credentials, or hidden reasoning.

`approval_receipts` can remain in the operations schema when they are execution-bound receipts. Delegated-trust grants do not replace approval receipts for high-risk actions unless the delegated-trust policy explicitly allows that action class and the mutation boundary verifies the grant envelope.

## Spatial workbench and worksets

```text
spatial_workbench_states
worksets
pane_layout_templates
pane_instances
workset_snapshots
spatial_layout_suggestions
spatial_layout_observations
spatial_layout_invalidations
```

Spatial Workbench rows belong to one Project and one viewer unless a Workset is explicitly shared, created for handoff, attached to a review item, or created as a support diagnostic. They store resource refs, expected versions, safe labels, pane types, layout constraints, viewport classes, accessibility preferences, hydration state, stale reasons, redaction reasons, Activity cursors, Focus refs, WorkPacket refs, and policy hashes.

Worksets and snapshots are restorable references, not authorization grants. Every restore, API read, SDK read, CLI read, MCP read, support view, export, or handoff reauthorizes linked resources and labels stale, redacted, deleted, unavailable, blocked, or conflict state before pane hydration.

Spatial layout records do not store raw source text, raw prompts, private document bodies, hidden reasoning, credentials, connector payloads, browser history, screen captures, clipboard contents, or operating-system window state.

## Focus state and resume

```text
focus_states
resume_checkpoints
resume_digests
attention_items
focus_sessions
focus_notification_suppressions
focus_state_events
```

Focus and resume rows belong to one Project and one viewer unless explicitly created as a governed handoff or support diagnostic. They store resource references, version IDs, cursors, classifications, safe labels, suppression state, and reason codes. They do not store raw source text, raw prompts, hidden reasoning, private document bodies, credentials, screen captures, clipboard contents, or full connector payloads.

Focus State is mutable user work-position state with expected-version updates. Resume Checkpoints are immutable cursor records. Resume Digests and AttentionItems are rebuildable projections over ActivityEvents, Operations, ActionCards, notifications, document revisions, source versions, command invocations, collaboration state, automation outcomes, and Product Truth signals. Authorization, deletion, source revocation, rights, retention, policy, and membership changes invalidate affected projections.

## Device continuity and local cache

```text
device_capability_profiles
local_cache_policies
local_cache_manifests
offline_drafts
offline_action_queue_items
sync_attempts
sync_conflicts
device_continuity_links
local_cache_invalidations
```

Device continuity rows belong to one Project and one viewer or session unless an Organization-level policy owns defaults. They store browser, platform, install, viewport, input, network, service-worker, storage, push, and background capability classes; safe labels; policy hashes; source-scope hashes; dependency hashes; expiry; invalidation state; queue status; conflict kind; and redaction summaries.

LocalCacheManifests describe local projection classes and dependency hashes for one device context. They do not store local private content bodies server-side. OfflineDrafts and OfflineActionQueueItems are local work before server acceptance and cannot create canonical DocumentRevisions, SourceVersions, Claims, publications, external writes, billing records, approval receipts, or audit-critical records without owning-service preflight, expected versions, idempotency, ActivityEvents, and audit where required.

SyncAttempts and SyncConflicts provide content-minimized reconnect diagnostics and review state. They do not store raw source text, raw prompts, private document bodies, private comments, credentials, connector payloads, private URLs, screenshots, clipboard contents, browser history, operating-system state, hidden reasoning, raw provider traces, or support notes. Reconnect reauthorizes membership, Project policy, source rights, retention, residency, provider policy, abuse policy, budget, expected versions, and local lease before any local state is used.

## Native companion and OS/browser adapters

```text
native_companion_installs
native_permission_grants
native_context_packets
native_capture_intents
native_file_watch_grants
native_command_bridges
native_notification_bindings
native_companion_queue_items
native_support_diagnostics
native_companion_revocations
```

Native companion rows belong to one Organization, actor, install, and Project where they reference Project work. Organization-level policy can disable or restrict surfaces by platform, browser family, extension ID, desktop app ID, version, update channel, managed-device state, data class, or source class.

NativePermissionGrants store grant kind, surface, source scope hash, destination ref, allowed action classes, content classes, local retention, expiry, revocation, and policy hash. A grant is not a retrieval, model, connector, publication, billing, or support access grant.

NativeContextPackets and NativeCaptureIntents store origin surface, origin gesture, locator hashes, payload refs where policy allows, payload hashes, redaction summaries, rights and sensitivity outcomes, destination, preflight result, Operation refs, ActivityEvent refs, expiry, and blocked reasons. They do not become evidence until a Source workflow creates an immutable SourceVersion and locator.

NativeFileWatchGrants store path alias, path hash, allowed extension or MIME classes, size/rate limits, symlink policy, pause/revoke state, and last event metadata. They do not store broad filesystem indexes or raw path values when redaction is required.

NativeCommandBridges and NativeNotificationBindings store descriptor refs, shortcut conflict state, notification policy refs, deep-link policy refs, allowed action classes, disabled reasons, and revocation state. They can propose command or notification action input but cannot execute material effects without owning-service authorization, preflight, expected versions, idempotency, ActivityEvents, audit, and approvals where required.

Native companion tables exclude ambient screenshots, screen recordings, browser history, clipboard contents, keystrokes, camera, microphone, OS window state, local file contents outside approved Source workflows, raw prompts, private document bodies, credentials, connector payloads, hidden reasoning, and raw provider traces.

## Adaptive preference learning

```text
preference_policies
preference_items
preference_observations
adaptive_interface_profiles
preference_suggestions
preference_explanations
preference_conflicts
preference_invalidations
```

Preference rows belong to one Project and one viewer unless an Organization policy explicitly owns defaults or a user-level setting is promoted through a governed account preference. They store preference class, scope, provenance class, confidence, status, policy hash, correction history, safe labels, reason codes, explanation refs, export state, reset state, and invalidation dependencies.

PreferenceObservations are content-minimized signals from commands, Worksets, Focus, notification choices, mode selection, correction, dismissal, accessibility state, locale state, and explicit settings. They do not store raw source text, raw prompts, private document bodies, private comments, credentials, connector payloads, private URLs, screenshots, clipboard contents, browser history, operating-system state, hidden reasoning, raw provider traces, or support notes.

AdaptiveInterfaceProfiles are rebuildable projections. They cannot override authorization, evidence support, approval policy, privacy controls, accessibility requirements, locale policy, provider policy, data residency, abuse decisions, delegated-trust grants, or user corrections. Preference reset, deletion, Project membership changes, policy changes, source revocation, context-pack invalidation, and model-context policy changes invalidate affected profiles and summaries.

## Project operating layer and work control

```text
work_packets
work_context_snapshots
next_action_candidates
work_control_observations
recipe_draft_candidates
work_packet_invalidations
```

Work control tables are rebuildable projections over canonical Project records. Work Packets store viewer, active surface, selected resource refs, IntentRecord refs, source scope refs, Focus State refs, Operation refs, Activity cursor, Atlas refs, Trust blocker refs, recipe refs, ActionCard refs, Product Truth refs, available command refs, disabled command refs, NextActionCandidate refs, status, staleness, redaction summary, generated summary refs, and expiry.

Work Context Snapshots store identifiers, versions, hashes, labels, and classifications for the bounded inputs used to build a Work Packet. They do not store raw private source text, full document bodies, raw prompts, hidden reasoning, credentials, screen captures, clipboard contents, or connector payloads.

Next Action Candidates record source kind, target resource, command descriptor, ActionCard, Operation, recipe draft, reason code, rank, effect summary, approval class, side-effect class, cost class, latency class, expected versions, recovery path, blocked reason, dismissal or correction state, outcome ref, and expiry. Work Control Observations record shown, opened, dismissed, deferred, invoked, blocked, failed, corrected, accepted, rejected, converted-to-recipe, and expired events for recommendation quality.

Recipe draft candidates created by repeated-work capture remain non-runnable until recipe validation, simulation, owner approval, canary limits, and outcome metric definitions are recorded in the Automation Recipe tables.
Scenario-sourced next actions remain recommendations until a current ScenarioApplyCandidate is revalidated by the owning service. SimulatedEffects cannot mutate canonical state.

## Project health and repair

```text
project_health_snapshots
health_signals
health_findings
repair_playbooks
repair_playbook_versions
repair_dry_runs
repair_runs
repair_outcome_observations
support_diagnostic_bundle_refs
health_support_diagnostics
health_invalidations
```

Project health tables belong to one Project. Health Snapshots are rebuildable projections over authorized Project records and store identifiers, versions, hashes, safe labels, classifications, counters, and reason codes. They do not store raw source text, raw prompts, private document bodies, hidden reasoning, credentials, screen captures, clipboard contents, browser history, operating-system state, full connector payloads, or unredacted support notes.

Health Findings store affected resource refs, expected versions, health domain, finding type, severity, user impact, evidence refs, redaction summary, status, owner, expiry, and repair playbook refs. Findings cannot independently mutate sources, claims, documents, publications, automations, Worksets, policies, or support grants.

Repair Playbooks are versioned typed templates owned by application services. Repair dry-runs and Repair Runs store input hashes, expected versions, idempotency keys, preflight refs, approval refs, operation refs, side-effect refs, reversal refs, status, and outcome refs. Material repair uses owning-domain commands, ActivityEvents, audit events where required, and reversal, compensation, or withdrawal notes. Repair outcome observations link before and after classifications to release evidence, automation outcomes, Product Truth, or support runbooks without becoming factual evidence for user documents.

SupportDiagnosticBundles created from Project Health store case refs, finding refs, operation refs, activity refs, repair refs, scenario refs, reversal refs, automation debug refs, policy snapshots, support grant refs, support access request refs, data classes, content absence flags, redaction summaries, retention class, export policy, status, creator, expiry, and audit refs. They are customer-visible diagnostic projections, not content stores or mutation authority.

## Abuse prevention

```text
abuse_policies
abuse_policy_snapshots
abuse_signals
abuse_cases
abuse_decisions
abuse_throttles
abuse_reviews
abuse_appeals
abuse_enforcement_actions
abuse_outcome_observations
```

Abuse prevention rows belong to one Organization and, when Project-scoped, one Project. Policies can be Organization-owned defaults, Project overrides, route-specific policies, client-specific policies, recipe policies, source-acquisition policies, publication policies, or emergency controls.

AbuseSignals and AbuseDecisions store identifiers, versions, hashes, safe labels, reason categories, action class, side-effect class, route class, provider-policy refs, content-safety category where available, quota window, budget class, throttle state, retry class, and expected-version refs. They do not store raw source text, raw prompts, private document bodies, private comments, credentials, connector payloads, private URLs, screenshots, clipboard contents, browser history, operating-system state, unredacted support notes, hidden reasoning, or raw provider traces.

AbuseCases group signals and decisions for review without becoming mutation authority. AbuseReviews and AbuseAppeals store reviewer refs, decision state, narrowed scope, appeal outcome, false-positive classification, support case refs, policy update refs, expiry, and audit refs. Private-content review requires a SupportAccessRequest and SupportAccessSession; possession of an AbuseCase does not grant private content access.

AbuseThrottles support tenant-scoped rate, quota, concurrency, cooldown, and retry-after behavior for API routes, MCP tools, source acquisition, public publishing, exports, notifications, connector writes, GitHub proposals, recipe triggers, and support-sensitive actions. Limits are scoped and cannot reveal other tenants' usage.

## Support operations

```text
support_cases
support_access_requests
support_grants
support_access_sessions
support_diagnostic_bundles
support_diagnostic_bundle_items
support_session_audit_events
support_audit_exports
support_break_glass_reviews
support_repair_command_refs
```

Support rows belong to one Organization and, when scoped to product work, one Project. Cases link to customer-visible issue, incident, or support request state. Access requests store requester, support operator, manager approval where required, customer approver, purpose, requested data classes, resource scope, allowed action classes, expected start, duration, approval state, policy snapshot hash, risk summary, expiry, and denial or revocation reason.

SupportAccessSessions store request ref, support grant ref, actor, step-up state, session state, effective scope, allowed actions, start, expiry, revocation, break-glass class, monitoring refs, and immutable audit refs. Sessions are read-only by default and cannot widen source scope, connector scope, Project membership, billing state, publication state, deletion state, or model-evaluation use. Each viewed resource and attempted action writes a support session audit event with content-minimized resource refs and redacted change summaries.

SupportDiagnosticBundles and bundle items store safe labels, identifiers, versions, hashes, redaction summaries, absence flags, telemetry aggregate refs, Operation refs, HealthFinding refs, HealthLineageEdge refs, suspected-cause summaries, counterevidence refs, unknown-state summaries, false-cause classifications, diagnostic-waste classes, Automation Run Debugger refs, Scenario refs, Reversal refs, incident refs, and release-evidence refs. They do not store raw source text, raw prompts, raw completions, raw tool payloads, private document bodies, private comments, hidden reasoning, credentials, private URLs, screenshots, clipboard contents, browser history, operating-system state, full connector payloads, raw OpenTelemetry span bodies, raw GenAI trace content, or unredacted support notes.

Support audit exports are immutable generated artifacts with requester, approver, filters, schema version, checksum, retention, destination, and delivery status. Exported records remain content-minimized and are policy-filtered at export time.

## Accessibility and internationalization

```text
accessibility_profiles
locale_profiles
language_direction_metadata
accessible_output_manifests
accessible_output_manifest_items
translation_artifacts
localized_human_summaries
accessibility_validation_runs
i18n_validation_runs
```

Accessibility and internationalization rows belong to one Organization and, when Project-scoped, one Project. Viewer preferences can be user-scoped with optional Project overrides. These records do not grant access to content and cannot change authorization, evidence support, retention, support priority, billing, or audit meaning.

AccessibilityProfiles store presentation and interaction preferences such as keyboard density, shortcut hint level, reduced motion, contrast preference, target size preference, announcement verbosity, drag-alternative preference, and caption or transcript preference. They do not store disability status or assistive-technology identity.

LocaleProfiles store UI locale, content locale, timezone, calendar system, number system, date and time formatting policy, currency display policy, and fallback locales. Canonical data remains locale-neutral: timestamps are timezone-aware, money uses integer minor units, stable API errors use codes, and localized summaries are optional projections.

LanguageDirectionMetadata stores BCP 47 language tag, script, region, direction, detection source, confidence, metadata scope, and review state for sources, parsed elements, document blocks, messages, citations, generated outputs, exports, and public projections. Direction is explicit and can be `ltr`, `rtl`, `auto`, `mixed`, or `unknown`.

AccessibleOutputManifests store semantic structure status, reading order status, heading status, alt text status, caption and transcript status, table header status, chart fallback status, language direction status, known degradations, publication blockers, and validation evidence refs for generated documents, artifacts, exports, and public projections.

TranslationArtifacts store source resource refs, source version refs, source language, target language, translator type, model or provider refs where applicable, human reviewer state, purpose, claim-support policy, quality state, and revalidation policy. They are derived material and cannot independently corroborate Claims without an authoritative source.

Accessibility, locale, translation, and output-manifest records do not store raw source text, raw prompts, private document bodies, private comments, hidden reasoning, credentials, full connector payloads, screenshots, clipboard contents, browser history, operating-system state, or unredacted support notes unless a stricter content store explicitly owns that data class.

## Scenario simulation

```text
scenarios
scenario_options
scenario_input_snapshots
simulation_plans
simulation_runs
simulated_effects
scenario_comparisons
scenario_decisions
scenario_apply_candidates
scenario_invalidations
simulation_outcome_observations
```

Scenario simulation tables belong to one Project. They store target resource refs, expected versions, option refs, input hashes, analyzer refs, affected resource refs, side-effect class, approval class, cost class, latency class, confidence class, live-test class, stale-state reason, redaction summaries, ActionCard refs, Operation refs, idempotency keys, and outcome classifications.

ScenarioInputSnapshots are content-minimized projections over authorized Project records. They do not store raw source text, raw prompts, private document bodies, private comments, hidden reasoning, credentials, private URLs, screen captures, clipboard contents, browser history, operating-system state, full connector payloads, or unredacted support notes.

ScenarioApplyCandidates are not authority to mutate. Owning services re-run authorization, expected-version, preflight, approval, budget, side-effect, idempotency, rights, residency, and release gates before material work. Stale dependencies invalidate candidates before use. Simulation outcome observations compare predicted and actual classifications without becoming factual evidence for user documents.

## Reversal ledger and compensation

```text
reversal_capabilities
reversal_records
reversal_snapshots
recovery_action_cards
compensation_plans
compensation_steps
reconciliation_checks
reversal_outcome_observations
```

Reversal tables belong to one Project. They store operation refs, resource refs, expected versions, reversibility class, stale-state reason, side-effect refs, approval refs, safe labels, redaction summaries, compensation state, reconciliation state, irreversible acknowledgements, and outcome classifications.

Reversal records are recovery intents and audit projections, not independent mutation authority. Owning services re-run authorization, expected-version, preflight, approval, side-effect, compensation, reconciliation, retention, residency, and release gates before restore, replay, withdrawal, duplicate-as-draft, or compensation work. They do not store raw source text, raw prompts, private document bodies, private comments, hidden reasoning, credentials, private URLs, screenshots, clipboard contents, browser history, operating-system state, full connector payloads, or unredacted support notes.

## Progressive delivery and fast paths

```text
latency_budget_policies
progressive_delivery_envelopes
progressive_delivery_events
partial_results
fast_path_snapshots
speculative_preparations
progressive_delivery_invalidations
```

Progressive delivery rows belong to one Project and are projections over authoritative Operations, ActivityEvents, SourceVersions, DocumentRevisions, Claims, EvidenceSpans, IntentRecords, CommandInvocations, Focus State, automation outcomes, and Product Truth signals.

`progressive_delivery_envelopes` store the first authorized response metadata for long-running or staged work. `progressive_delivery_events` are ordered, replayable, content-minimized stage events. `partial_results` preserve support, coverage, freshness, blocker, and allowed-transition state so an intermediate answer, outline, patch, artifact, or export cannot be promoted as final without evidence checks.

`fast_path_snapshots` and `speculative_preparations` store safe projection metadata, cache-key hashes, policy hashes, source-version sets, document-revision hashes, parser/index/model-role versions, freshness state, invalidation state, and expiry. `speculative_preparations` also store trigger source, preparation level, preparation kind, expected latency benefit, privacy class, risk class, budget class, material-spend state, user-visible state, denial reason, provider or resource ref, hit/miss/cancelled/expired outcome, and wasted-work cost. They do not store raw private source text, raw prompts, hidden reasoning, credentials, private document bodies, or full connector payloads unless a stricter encrypted data-class policy explicitly allows it. Authorization, membership, rights, retention, policy, source, parser, index, document, claim, comment, automation, budget, and Product Truth changes invalidate affected projections.

## Project map and impact analysis

```text
project_map_views
project_map_queries
project_map_node_projections
project_map_edge_projections
project_impact_reports
project_impact_report_items
project_map_suggestions
project_map_invalidations
```

Project map tables are rebuildable projections over canonical Project records. They store safe resource references, safe labels, status tags, risk tags, redaction state, edge authority, provenance references, traversal constraints, Impact Report summaries, suggestion state, and invalidation dependencies. They do not store raw source text, private document bodies, raw prompts, hidden reasoning, credentials, connector payloads, private comments, or unredacted support data.

Impact reports record target resource, expected version, change intent, direct and indirect dependent counts, redacted dependent summary, affected resource refs, blocked reasons, recommended actions, cost and latency class, confidence, unknowns, approval class, expiry, and status. Authoritative mutations remain in owning domain tables.

## Automation recipes

```text
automation_recipes
recipe_versions
recipe_triggers
recipe_steps
recipe_gates
recipe_simulations
recipe_runs
recipe_templates
recipe_library_entries
recipe_recommendations
recipe_invalidations
```

Automation recipe tables belong to one Project unless a locked template is explicitly promoted to an Organization or shared library scope. `automation_recipes` store ownership, purpose, resource scope, lifecycle state, and current version. `recipe_versions` are immutable after approval except for lifecycle metadata. `recipe_triggers` store typed event, schedule, selector, condition, dedupe, cooldown, authorization, and replay policy. `recipe_steps` store input and output schema references, dependencies, tool policy, model role, context-pack policy, retry, timeout, failure behavior, and cost class.

`recipe_gates` pause execution for approval, missing evidence, publication risk, budget, external writes, connector widening, destructive actions, or policy exceptions. `recipe_simulations` record synthetic and authorized historical fixture coverage, dry-run connector profile, branch coverage, cost estimate, blocked reasons, recovery policy, and side-effect-free proposed outputs. `recipe_runs` link recipe version, trigger identity, Operation, Progressive Delivery, ActivityEvents, gates, side effects, reversal records, compensation plans, cost, latency, outputs, outcome observations, debug traces, divergence markers, replay eligibility, fixture candidates, and failure state.

Recipes do not store raw source text, raw prompts, hidden reasoning, credentials, private document bodies, or full connector payloads. Canonical mutations require expected versions and owning-domain records.

## Automation outcomes

```text
automation_definitions
automation_versions
automation_runs
automation_run_steps
automation_run_debug_traces
automation_run_debug_events
automation_debug_failure_annotations
automation_debug_replay_cases
automation_outcome_windows
automation_outcome_metric_definitions
automation_outcome_observations
automation_outcome_attributions
automation_outcome_scorecards
automation_friction_events
adaptive_routing_policies
adaptive_routing_recommendations
```

Automation outcome and debug tables belong to one Project and reference automation versions, RecipeVersions, RecipeRuns, Activity events, Operations, DocumentPatches, Claims, EvidenceSpans, TruthSignals, feedback records, and release evidence by typed links. Debug trace tables store searchable execution metadata, step graph hashes, context-pack refs, model-role refs, tool-call refs, policy-check refs, side-effect refs, divergence markers, failure taxonomy, replay eligibility, comparison-run refs, fixture candidates, and redaction summaries. Scorecards are rebuildable projections. Metric definitions are versioned so cost, latency, acceptance, approval burden, and safety comparisons do not silently change meaning.

Outcome records store classifications, identifiers, counters, time, status, and safe excerpts only where policy allows. They do not store raw source text, raw prompts, hidden reasoning, private document bodies, credentials, or full connector payloads.

## Operations and reliability

```text
operations
operation_progress_events
idempotency_records
outbox_events
inbox_events
side_effects
workflow_checkpoints
approvals
schedules
jobs
dead_letters
```

State transitions use constrained enums or lookup tables and compare-and-set versions. Outbox rows are written with domain changes. Side effects have uniqueness constraints that prevent duplicate logical external writes.

Progress events use an Operation-scoped sequence. Idempotency records bind key, actor, command, semantic input hash, result, and expiry.

## Connectors and GitHub

- `connections` and encrypted credential references
- `connection_scopes`
- `external_objects`
- `external_object_versions`
- `sync_cursors`
- `connector_webhook_events`
- `github_installations`
- `github_repositories`
- `github_snapshots`
- `repository_symbols`
- `repository_references`
- `change_proposals`
- `change_proposal_files`
- `change_validations`

External IDs are unique within provider and installation scope. GitHub evidence always includes repository and commit SHA. Change proposals record base SHA, patch identity, sandbox, validation, approval, branch, commit, and pull request.

## Memory and maintenance

```text
memory_items
memory_versions
memory_provenance
source_freshness_policies
source_change_sets
source_locator_mappings
claim_revalidations
dependency_edges
maintenance_runs
maintenance_impact_summaries
maintenance_proposals
maintenance_schedules
maintenance_outcome_observations
```

Dependency edges connect SourceVersions and EvidenceSpans to Claims, blocks, memory, artifacts, and publications. They support targeted invalidation and maintenance without making the graph database the source of truth.

Maintenance rows belong to one Project and reference immutable SourceVersions, EvidenceSpans, Claims, DocumentBlocks, PublicationSnapshots, Product Truth records, ActivityEvents, Operations, and patch proposals by expected version. They store status, materiality, reason categories, safe summaries, policy hashes, owner refs, budget class, approval class, and outcome classes; they do not store raw private source text, private document bodies, prompts, hidden reasoning, connector payloads, credentials, or unredacted support notes.

## Commercial and platform

Entitlements and usage use immutable or append-only ledgers where correction is represented as a new entry. Reservations settle into usage events. Provider-reported usage is reconciled but does not replace internal command identity.

API clients, OAuth grants, webhook endpoints, deliveries, and SDK versions remain separate from customer connector credentials.

## Audit

Audit events are append-only and capture actor, effective authorization, Organization/Project, action, resource, request/Operation, policy result, time, source IP or client metadata where permitted, and redacted change summary.

Audit data is access-controlled and protected from the normal application role. High-impact operations include capability and approval identities.

## Data types and constraints

- Use timezone-aware timestamps.
- Use integer minor units for currency and explicit units for tokens, bytes, and durations.
- Use JSON only for versioned flexible payloads; important ownership, status, and query fields remain typed columns.
- Use checksums and unique constraints for immutable identity and deduplication.
- Use foreign keys unless a measured partitioning or lifecycle reason requires an explicit alternative.
- Use `NOT NULL`, check constraints, and state-transition guards for invariants.
- Soft deletion alone is not privacy deletion; tombstone and deletion workflow state are explicit.

## Indexing and partitioning

Indexes follow measured queries and authorization predicates. Expected candidates include Organization/Project/time composites, source/version checksums, current document revision, Operation state, outbox readiness, external event IDs, and evidence relationships.

High-volume append-only tables such as audit, progress, usage, webhook delivery, and model usage can be time-partitioned after measured need. Partitioning cannot weaken tenant filtering or retention.

## Migration and verification

All changes follow `schema-contract-and-data-evolution.md`. Migrations include preconditions, lock/runtime analysis, backfill plan, observability, rollback/forward-recovery, and mixed-version tests. Database fixtures verify tenant constraints, lifecycle rules, referential integrity, deletion, restore, and query plans.
