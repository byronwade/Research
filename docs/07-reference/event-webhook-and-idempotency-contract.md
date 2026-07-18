# Events, webhooks, and delivery idempotency

Domain events describe committed facts. Commands request change. Progress events describe an Operation. Webhooks deliver selected public event envelopes to an authorized external endpoint. These concepts use related infrastructure but are not interchangeable.

## Event envelope

```json
{
  "id": "evt_01H...",
  "type": "research_run.completed",
  "version": 1,
  "occurred_at": "2026-07-17T12:00:00Z",
  "recorded_at": "2026-07-17T12:00:00.100Z",
  "organization_id": "org_123",
  "project_id": "proj_123",
  "actor": {
    "type": "user",
    "id": "usr_123"
  },
  "resource": {
    "type": "research_run",
    "id": "run_123",
    "version": 7
  },
  "correlation_id": "op_123",
  "causation_id": "evt_01G...",
  "data": {},
  "metadata": {
    "schema": "research_run.completed.v1"
  }
}
```

The external webhook projection can omit internal actor, policy, source, provider, or audit data. Event existence and fields are authorization-sensitive.

## Event categories

- Project and membership lifecycle.
- Command descriptor, catalog, shortcut binding, invocation, recommendation, and command result state.
- Focus State, Resume Checkpoint, Resume Digest, AttentionItem, Focus Session, and notification suppression state.
- DeviceCapabilityProfile, LocalCachePolicy, LocalCacheManifest, OfflineDraft, OfflineActionQueueItem, SyncAttempt, SyncConflict, DeviceContinuityLink, and local-cache invalidation state.
- NativeCompanionInstall, NativePermissionGrant, NativeContextPacket, NativeCaptureIntent, NativeFileWatchGrant, NativeCommandBridge, NativeNotificationBinding, companion queue, support-safe diagnostic, and companion revocation state.
- PreferencePolicy, PreferenceItem, PreferenceObservation, AdaptiveInterfaceProfile, PreferenceSuggestion, PreferenceExplanation, PreferenceConflict, preference reset/export, and preference invalidation state.
- SpatialWorkbenchState, Workset, PaneLayoutTemplate, PaneInstance, WorksetSnapshot, SpatialLayoutSuggestion, SpatialLayoutObservation, and spatial invalidation state.
- WorkPacket, WorkContextSnapshot, NextActionCandidate, WorkControlObservation, repeated-work capture, recipe draft candidate, and work-packet invalidation state.
- ProjectHealthSnapshot, HealthSignal, HealthLineageEdge, HealthFinding, RepairPlaybook, repair dry-run, RepairRun, SupportDiagnosticBundle ref, support diagnostic, repair outcome observation, and health invalidation state.
- AbusePolicy, AbuseSignal, AbuseCase, AbuseDecision, AbuseThrottle, AbuseReview, AbuseAppeal, AbuseEnforcementAction, and AbuseOutcomeObservation state.
- Scenario, ScenarioInputSnapshot, SimulationPlan, SimulationRun, SimulatedEffect, ScenarioComparison, ScenarioDecision, ScenarioApplyCandidate, ScenarioInvalidation, and SimulationOutcomeObservation state.
- DelegatedTrustPolicy, DelegatedTrustGrant, ApprovalRequest, ApprovalBatch, ApprovalDecision, ApprovalReceipt, ApprovalLoadBudget, ApprovalFatigueSignal, and approval-policy invalidation state.
- ProgressiveDeliveryEnvelope, ProgressiveDeliveryEvent, PartialResult, FastPathSnapshot, SpeculativePreparation, stale projection, cancellation acknowledgement, and delivery invalidation state.
- Project Atlas view, map query, path query, Impact Report, map suggestion, and map invalidation state.
- SourceFreshnessPolicy, SourceChangeSet, SourceLocatorMapping, ClaimRevalidation, MaintenanceRun, MaintenanceImpactSummary, MaintenancePatchProposal, MaintenanceActionCard, MaintenanceSchedule, MaintenanceOutcomeObservation, and maintenance invalidation state.
- Intent, clarification, preflight, and approval receipt lifecycle.
- Source, SourceVersion, ingestion, parsing, indexing, and connector synchronization.
- Chat messages and user-visible tool activity.
- ResearchRun and Operation state.
- Automation Recipe, RecipeVersion, RecipeTrigger, RecipeSimulation, RecipeRun, recipe gate, recipe template, recipe recommendation, and recipe invalidation state.
- Automation run debug trace, failure annotation, replay case, outcome scorecard, metric definition, observation, friction event, and adaptive recommendation state.
- ReversalCapability, ReversalRecord, RecoveryActionCard, CompensationPlan, CompensationStep, ReconciliationCheck, irreversible acknowledgement, and reversal outcome state.
- AccessibilityProfile, LocaleProfile, LanguageDirectionMetadata, AccessibleOutputManifest, TranslationArtifact, localized summary, and accessibility/i18n validation state.
- Claim, contradiction, and stale-evidence state.
- Document, revision, patch, artifact, and publication lifecycle.
- Comment thread, mention, assignment, suggestion, review request, decision record, and presence lifecycle.
- GitHub workspace and change-proposal lifecycle.
- Entitlement, usage, invoice, credit, and budget state.
- Notification, export, deletion, support case, SupportDiagnosticBundle, SupportAccessRequest, SupportAccessSession, support audit export, break-glass review, and administrative audit state.

No event type is introduced without an owner, versioned schema, retention classification, and consumer inventory.

Recipe event families include `automation.recipe_created`, `automation.recipe_version_validated`, `automation.recipe_simulated`, `automation.recipe_approved`, `automation.recipe_canary_started`, `automation.recipe_activated`, `automation.recipe_paused`, `automation.recipe_run_started`, `automation.recipe_run_blocked`, `automation.recipe_run_completed`, `automation.recipe_run_failed`, `automation.recipe_recommendation_created`, and `automation.recipe_invalidated`. External webhook projections are content-minimized and cannot expose private source text, draft patches, connector payloads, or approval secrets.

Automation debug event families include `automation.debug_trace_created`, `automation.debug_divergence_marked`, `automation.debug_failure_classified`, `automation.debug_comparison_created`, `automation.debug_replay_case_created`, and `automation.debug_fixture_created`. External webhook projections expose only authorized metadata, failure class, run refs, redacted summary, and resulting action-card or fixture refs where allowed; they cannot expose raw private source text, prompts, hidden reasoning, private document bodies, connector payloads, credentials, or provider trace payloads.

Atlas event families include `project_map.query_started`, `project_map.query_completed`, `project_map.query_blocked`, `project_map.impact_report_created`, `project_map.impact_report_expired`, `project_map.suggestion_created`, `project_map.suggestion_accepted`, `project_map.suggestion_rejected`, and `project_map.invalidated`. External webhook projections expose only authorized metadata and redacted reason categories.

Maintenance event families include `maintenance.run_scheduled`, `maintenance.run_started`, `maintenance.source_change_detected`, `maintenance.no_material_change`, `maintenance.locators_mapped`, `maintenance.claim_revalidated`, `maintenance.impact_ready`, `maintenance.patch_proposed`, `maintenance.review_requested`, `maintenance.patch_applied`, `maintenance.run_blocked`, `maintenance.run_failed`, `maintenance.run_cancelled`, and `maintenance.outcome_observed`. External webhook projections expose only authorized metadata, source class, materiality, safe refs, status, reason categories, counts, and redacted summaries; they cannot expose raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, unsupported private claim text, or unredacted patch bodies.

Approval event families include `approval.requested`, `approval.batched`, `approval.granted`, `approval.rejected`, `approval.expired`, `approval.superseded`, `approval.blocked`, `delegated_trust.proposed`, `delegated_trust.granted`, `delegated_trust.narrowed`, `delegated_trust.revoked`, `delegated_trust.expired`, `approval_load.threshold_crossed`, and `approval_fatigue.signal_recorded`. External webhook projections expose only authorized metadata, action class, status, and redacted reason categories; they cannot expose payload bodies, private source content, connector secrets, or approval receipt secrets.

Spatial event families include `spatial.workbench_updated`, `spatial.workset_created`, `spatial.workset_updated`, `spatial.workset_shared`, `spatial.workset_suspended`, `spatial.workset_restored`, `spatial.workset_archived`, `spatial.pane_pinned`, `spatial.pane_unpinned`, `spatial.snapshot_created`, `spatial.layout_suggestion_created`, `spatial.layout_suggestion_resolved`, `spatial.layout_invalidated`, and `spatial.restore_failed`. External webhook projections expose only authorized metadata, resource reference counts, stale or redacted reason categories, and restore status; they cannot expose pane content, prompts, source text, connector payloads, browser history, screenshots, clipboard contents, or operating-system window state.

Project health event families include `health.snapshot_created`, `health.snapshot_expired`, `health.finding_created`, `health.finding_snoozed`, `health.finding_dismissed`, `health.finding_resolved`, `health.finding_superseded`, `repair.playbook_dry_run_created`, `repair.action_card_created`, `repair.run_started`, `repair.run_blocked`, `repair.run_cancelled`, `repair.run_completed`, `repair.run_failed`, and `repair.outcome_observed`. External webhook projections expose only authorized metadata, reason categories, affected resource refs where allowed, status, and redacted summaries; they cannot expose raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, support notes, screenshots, clipboard contents, browser history, or operating-system state.

Support event families include `support.case_created`, `support.case_updated`, `support.diagnostic_bundle_created`, `support.diagnostic_bundle_exported`, `support.diagnostic_bundle_revoked`, `support.diagnostic_bundle_expired`, `support.access_requested`, `support.access_approved`, `support.access_denied`, `support.session_started`, `support.session_revoked`, `support.session_expired`, `support.break_glass_started`, `support.break_glass_reviewed`, and `support.audit_export_created`. External webhook projections expose only authorized case refs, status, action class, data-class categories, expiry, approver refs where allowed, redacted summaries, and audit-export refs; they cannot expose raw source text, private document bodies, prompts, private comments, hidden reasoning, credentials, connector payloads, private URLs, support notes, screenshots, clipboard contents, browser history, operating-system state, or support operator private notes.

Abuse event families include `abuse.signal_recorded`, `abuse.decision_recorded`, `abuse.limit_applied`, `abuse.challenge_required`, `abuse.review_requested`, `abuse.review_resolved`, `abuse.appeal_opened`, `abuse.appeal_resolved`, `abuse.enforcement_applied`, `abuse.enforcement_released`, `abuse.policy_updated`, and `abuse.outcome_observed`. External webhook projections expose only authorized metadata, target refs where allowed, decision state, reason category, retry class, appeal state, policy version, and redacted summaries; they cannot expose raw source text, private document bodies, prompts, private comments, hidden reasoning, credentials, connector payloads, private URLs, support notes, screenshots, clipboard contents, browser history, operating-system state, or raw provider traces.

Accessibility and internationalization event families include `accessibility.profile_updated`, `i18n.locale_profile_updated`, `i18n.language_direction_metadata_recorded`, `i18n.translation_artifact_created`, `i18n.translation_artifact_invalidated`, `accessibility.output_manifest_created`, `accessibility.output_manifest_failed`, `accessibility.validation_run_completed`, and `i18n.validation_run_completed`. External webhook projections expose only authorized metadata, resource refs where allowed, language tag, direction class, validation status, degraded-state category, and redacted summary; they cannot expose raw source text, private document bodies, prompts, private comments, hidden reasoning, credentials, connector payloads, private URLs, screenshots, clipboard contents, browser history, operating-system state, assistive-technology identity, or disability status.

Scenario event families include `scenario.created`, `scenario.input_snapshot_created`, `scenario.simulation_started`, `scenario.effect_recorded`, `scenario.simulation_completed`, `scenario.simulation_failed`, `scenario.comparison_created`, `scenario.decision_recorded`, `scenario.apply_candidate_created`, `scenario.invalidated`, and `scenario.outcome_observed`. External webhook projections expose only authorized metadata, target refs where allowed, scenario type, status, side-effect class, approval class, live-test class, stale-state reason, and redacted summaries; they cannot expose raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, support notes, screenshots, clipboard contents, browser history, or operating-system state.

Reversal event families include `reversal.capability_calculated`, `reversal.record_created`, `reversal.record_invalidated`, `reversal.recovery_action_card_created`, `reversal.restore_started`, `reversal.restore_completed`, `reversal.replay_started`, `reversal.replay_completed`, `reversal.withdrawal_started`, `reversal.withdrawal_completed`, `reversal.irreversible_acknowledged`, `compensation.plan_created`, `compensation.step_started`, `compensation.step_completed`, `compensation.step_failed`, `reconciliation.check_started`, `reconciliation.check_completed`, and `reversal.outcome_observed`. External webhook projections expose only authorized metadata, target refs where allowed, reversibility class, status, approval class, side-effect class, stale-state reason, compensation state, reconciliation state, irreversible-label state, and redacted summaries; they cannot expose raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, support notes, screenshots, clipboard contents, browser history, or operating-system state.

Progressive delivery event families include `progressive.envelope_created`, `progressive.event_recorded`, `partial_result.created`, `partial_result.updated`, `partial_result.promoted`, `partial_result.blocked`, `fast_path.hit`, `fast_path.miss`, `fast_path.invalidated`, `speculative_preparation.created`, `speculative_preparation.denied`, `speculative_preparation.used`, `speculative_preparation.cancelled`, `speculative_preparation.expired`, and `progressive.delivery_invalidated`. External webhook projections expose only authorized metadata, status, preparation level, policy result, denial reason category, freshness state, hit/miss state, and redacted summaries; they cannot expose raw source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, support notes, browser history, screenshots, clipboard contents, or material provider payloads.

Device continuity event families include `device.capability_profile_observed`, `local_cache.manifest_created`, `local_cache.manifest_invalidated`, `offline_draft.created`, `offline_draft.submitted`, `offline_draft.discarded`, `offline_queue.item_queued`, `offline_queue.item_blocked`, `offline_queue.item_cancelled`, `sync.attempt_started`, `sync.attempt_completed`, `sync.conflict_created`, `sync.conflict_resolved`, `device.continuity_link_created`, and `device.continuity_link_used`. External webhook projections expose only authorized metadata, capability classes, status, reason categories, counts, safe resource refs, and redacted summaries; they cannot expose local draft bodies, private source text, private document bodies, prompts, hidden reasoning, credentials, connector payloads, private URLs, support notes, browser history, screenshots, clipboard contents, operating-system state, or raw user-agent strings unless a specific diagnostic policy allows it.

Native companion event families include `native.install_observed`, `native.install_blocked`, `native.permission_grant_created`, `native.permission_grant_revoked`, `native.capture_preview_created`, `native.capture_blocked`, `native.capture_submitted`, `native.file_watch_grant_created`, `native.file_watch_event_queued`, `native.file_watch_paused`, `native.command_bridge_invoked`, `native.notification_binding_updated`, `native.deep_link_resolved`, `native.queue_item_blocked`, `native.queue_item_synced`, `native.support_diagnostic_created`, and `native.revocation_applied`. External webhook projections expose only authorized metadata, surface class, grant state, action class, blocked reason category, queue count, version class, and redacted summaries; they cannot expose selected text, active-tab contents, local file contents, raw file paths where redaction is required, browser history, screenshots, clipboard contents, keystrokes, camera, microphone, OS window state, prompts, private document bodies, credentials, connector payloads, hidden reasoning, or raw provider traces.

Preference event families include `preference.policy_updated`, `preference.item_created`, `preference.item_updated`, `preference.item_corrected`, `preference.item_deleted`, `preference.observation_recorded`, `preference.suggestion_created`, `preference.suggestion_resolved`, `preference.explanation_created`, `preference.conflict_created`, `preference.profile_rebuilt`, `preference.export_created`, `preference.reset_completed`, and `preference.invalidated`. External webhook projections expose only authorized metadata, preference class, scope, status, reason categories, policy-managed state, and redacted summaries; they cannot expose raw source text, private document bodies, prompts, private comments, hidden reasoning, credentials, connector payloads, private URLs, support notes, browser history, screenshots, clipboard contents, operating-system state, or raw provider traces.

## Domain event rules

- Emitted only after the authoritative transaction commits.
- Immutable once recorded.
- Identified by a globally unique event ID.
- At-least-once delivery; consumers must deduplicate.
- Per-resource ordering is supported through resource version, not assumed from global delivery order.
- Event payload contains the minimum stable fact; consumers fetch current authorized resources when appropriate.
- Events that authorize or explain side effects reference intent version, expected version, approval receipt, and idempotency key where applicable.
- Events that use delegated trust reference grant identity, policy snapshot, action class, scope hash, expected-version policy, and invalidation state where applicable.
- Events that describe Workset mutation, snapshot creation, or restore reference the layout schema version, expected Workset version, idempotency key, authorization result, and stale or redacted resource summary where applicable.
- Events that describe source-change maintenance reference MaintenanceRun id, SourceChangeSet version, affected SourceVersion refs, source-scope hash, freshness policy, ClaimRevalidation version, Impact Report ref where applicable, expected document versions, patch proposal id, approval state, idempotency key, blocker state, materiality, and redacted outcome summary where applicable.
- Events that describe health findings or repair execution reference diagnostic snapshot version, expected resource versions, repair playbook version, dry-run result, idempotency key, approval state, side-effect class, and redacted outcome summary where applicable.
- Events that describe support diagnostics or access reference support case id, diagnostic bundle version, access request id, access session id, support grant id, policy snapshot, data-class categories, purpose, expiry, revocation state, break-glass class, audit export id, and redacted outcome summary where applicable.
- Events that describe abuse decisions reference AbusePolicySnapshot version, AbuseDecision id, AbuseCase id where applicable, target refs where authorized, actor/client refs, action class, side-effect class, source scope hash, destination class, provider-policy result, throttle state, appeal state, false-positive outcome, idempotency key, and redacted outcome summary where applicable.
- Events that describe accessibility or internationalization reference AccessibilityProfile version, LocaleProfile version, LanguageDirectionMetadata version, AccessibleOutputManifest version, TranslationArtifact version, source-version refs, validation run refs, language tag, direction class, provider-policy result, derived-material state, degradation category, and redacted outcome summary where applicable.
- Events that describe scenario simulation reference ScenarioInputSnapshot version, expected resource versions, SimulationPlan version, live-test class, side-effect class, approval class, stale-plan state, apply-candidate idempotency key, and redacted outcome summary where applicable.
- Events that describe reversible work reference ReversalCapability version, target resource version, operation id, side-effect ledger entry, approval state, compensation plan, reconciliation check, irreversible-effect label, idempotency key, and redacted outcome summary where applicable.
- Events that describe progressive delivery or SpeculativePreparation reference Operation, IntentRecord, policy snapshot, preparation level, privacy class, budget class, material-spend state, expected benefit, expiry, cancellation state, invalidation cause, denial reason, hit/miss state, and redacted outcome summary where applicable.
- Events that describe device continuity, local cache, offline drafts, queued offline actions, sync attempts, or sync conflicts reference DeviceCapabilityProfile, LocalCachePolicy, LocalCacheManifest, source-scope hash, expected versions, local lease, offline packet class, idempotency key, authorization result, preflight result, conflict kind, ActionCard, and redacted outcome summary where applicable.
- Events that describe native companion installs, grants, context packets, capture intents, file-watch grants, command bridges, notification bindings, deep links, companion queues, or revocations reference install id, extension or desktop app version class, surface class, grant id, origin gesture, source-scope hash, destination ref, expected versions, policy hash, idempotency key, preflight result, blocked reason, and redacted outcome summary where applicable.
- Events that describe preference learning reference PreferencePolicy, PreferenceItem, PreferenceObservation, AdaptiveInterfaceProfile, PreferenceSuggestion, PreferenceExplanation, PreferenceConflict, preference scope, model-context policy, reset/export state, policy-managed state, correction state, invalidation cause, and redacted outcome summary where applicable.
- Events that describe automation debugging reference run id, recipe or automation version, operation id, step graph hash, context-pack refs, model-role refs, tool-call refs, policy-check refs, side-effect refs, divergence markers, failure taxonomy, replay eligibility, fixture candidate refs, and redacted outcome summary where applicable.
- Sensitive source content, prompts, document bodies, credentials, hidden reasoning, and raw provider payloads are excluded.

## Schema evolution

Additive optional fields are preferred. Renaming, changing meaning or type, removing a field, or altering ordering guarantees requires a new schema or event version and a compatibility window.

Consumers tolerate unknown fields and unknown event types. Producers do not reuse a field for a new meaning. Enum readers use a documented unknown fallback.

## Webhook endpoints

A webhook endpoint declares URL, Organization, subscribed event patterns, API version, signing secret version, enabled state, filters, delivery policy, and failure status. Project-specific endpoints cannot receive other Projects unless an Organization-level scope is explicitly authorized.

Endpoint verification prevents sending private data to an unconfirmed target. Redirects are not followed during delivery unless the endpoint is revalidated.

## Signing

Research signs the exact raw request body with an endpoint-specific secret and includes:

```text
Webhook-Id
Webhook-Timestamp
Webhook-Signature
Research-Event-Type
Research-Event-Version
User-Agent
```

The signature scheme, canonical input, supported algorithms, and key rotation are versioned. Receivers verify signature before JSON parsing, enforce a bounded timestamp window, compare in constant time, and deduplicate `Webhook-Id`.

During rotation, an endpoint can have an active and previous secret for a short declared overlap. Secret plaintext is displayed only at creation/rotation and never appears in logs or support tools.

## Delivery

Each endpoint/event pair creates a delivery record with stable ID, attempt count, next attempt, response classification, timing, payload hash, secret version, and terminal state.

- 2xx acknowledges delivery.
- 408, 409 where explicitly documented, 425, 429, and 5xx can be retried.
- Most other 4xx responses require endpoint correction and do not retry indefinitely.
- `Retry-After` is honored within platform limits.
- Exponential backoff uses jitter and a finite retention window.
- Operators and customers can inspect redacted attempts and request replay.

Retries send the same logical event and stable webhook ID unless replay is explicitly represented as a new delivery of the same event.

## Replay and recovery

Manual replay is authorized and audited. It cannot change the historical event or bypass current endpoint authorization. Consumers process by event ID and resource version so replay does not duplicate effects. Recovery replay is a separate Reversal Ledger action and requires current eligibility, side-effect reconciliation, and approval; webhook delivery replay is never a substitute for operation replay.

After an outage, Research resumes from durable delivery state. Lost webhook delivery cannot imply lost domain state; clients can reconcile through list or export APIs.

## Inbound webhooks

Connector webhooks use the inbox pattern in `durable-workflows-idempotency-and-outbox.md`: raw-byte signature verification, timestamp and replay checks, provider event ID deduplication, schema validation, installation authorization, and current-state reconciliation.

Inbound webhook handlers acknowledge quickly after durable acceptance. Expensive parsing, sync, model use, or external writes run asynchronously.

## Progress streams versus webhooks

SSE provides low-latency, replayable user-facing Operation progress and Progressive Delivery events. Webhooks notify external systems of durable state transitions. Neither contains private internal traces or model chain-of-thought. Polling remains available for reconciliation.

## Verification

Tests cover valid and invalid signatures, body mutation, timestamp expiry, duplicate delivery, out-of-order delivery, endpoint deletion, secret rotation, redirect, DNS/IP changes, 429 and 5xx retry, long outage, manual replay, tenant filter, unknown event version, spatial restore replay, stale or redacted Workset projection, maintenance run replay, maintenance patch redaction, source-change blocker projection, claim-revalidation redaction, local-cache invalidation redaction, offline-draft redaction, queue blocked-state projection, sync conflict redaction, device capability minimization, preference event minimization, preference reset/export redaction, preference invalidation replay, cross-Project preference isolation, model-context preference redaction, health finding redaction, repair run replay, support diagnostic bundle redaction, support access approval, session expiry, revocation, break-glass review, audit export redaction, abuse decision redaction, abuse appeal redaction, abuse enforcement redaction, abuse false-positive outcome projection, accessibility profile minimization, locale profile minimization, language direction metadata authorization, translation artifact redaction, accessible output manifest redaction, scenario redaction, stale apply-candidate rejection, live-test classification, reversal event redaction, stale recovery rejection, compensation event ordering, reconciliation-before-retry, irreversible-effect acknowledgement, and payload redaction.

Official references include GitHub’s webhook signature-validation guidance and the repository’s API and durable-workflow contracts.
