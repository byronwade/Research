# Offline sync, local cache, and device capability policy

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/offline-device-continuity-and-mobile-experience.md`](../01-product/offline-device-continuity-and-mobile-experience.md). This contract defines how Research labels device capabilities, stores local projections, preserves recoverable drafts, queues offline-safe intents, and reconciles reconnect without creating a second source of truth.

Research remains server-authoritative. Local state is a bounded projection, draft, or pending intent over canonical Project records.

Optional native companion and browser extension queues are governed by [`native-companion-shell-and-os-adapter-policy.md`](native-companion-shell-and-os-adapter-policy.md). They can reuse device capability labels and offline queue vocabulary, but companion grants and context packets remain separate policy-bound records.

## Goals

- Make Project work resilient to reloads, flaky networks, browser tab lifecycle, mobile constraints, and supported installed-app contexts.
- Label device capabilities and limitations explicitly.
- Preserve drafts and local UI state without storing prohibited private content.
- Queue only low-risk, idempotent, policy-allowed work while offline or degraded.
- Reauthorize and preflight every local draft, cached projection, and queued intent before use.
- Detect conflicts and route them through review instead of silent last-write-wins.
- Keep local cache, sync, telemetry, API, support, and release evidence content-minimized.

## Authority model

Canonical authority remains in:

- Project membership, policy, entitlements, residency, retention, rights, and abuse policy;
- Sources, SourceVersions, parsed elements, EvidenceSpans, Claims, and Trust blockers;
- Documents, DocumentRevisions, patches, comments, reviews, and publications;
- Operations, ActivityEvents, audit events, outbox, side-effect ledgers, approvals, and support records;
- Focus State, Resume Digests, Worksets, Progressive Delivery records, ContextPacks, Automation Recipes, and Product Truth records.

LocalCacheManifests, OfflineDrafts, OfflineActionQueueItems, DeviceCapabilityProfiles, and DeviceContinuityLinks do not override owning records. If local state conflicts with canonical state, the owning record wins and local state is redacted, invalidated, blocked, or routed for review.

## Processing chain

```text
session starts or device changes
-> authenticate actor and resolve Project policy
-> probe browser, device, input, installation, storage, and background capabilities
-> build DeviceCapabilityProfile
-> evaluate LocalCachePolicy and offline-safe data classes
-> create or update LocalCacheManifest
-> save local drafts, cached projections, and offline packets within policy
-> queue eligible low-risk intents with expected versions and idempotency keys
-> detect reconnect or foreground sync
-> reauthorize Project, source scope, policy, rights, retention, budget, and abuse state
-> re-run deterministic preflight
-> compare expected versions and dependency hashes
-> apply through owning domain service, block, or create SyncConflict
-> write ActivityEvents, audit events, metrics, and release-evidence hooks
```

The client can store local work only after policy evaluation. The server is responsible for accepting canonical mutations.

## Core records

### DeviceCapabilityProfile

Representative fields:

```text
device_capability_profile_id
organization_id
project_id
user_id
session_id
device_label_hash
platform_class
browser_family
browser_version_class
installation_context
viewport_class
input_capabilities
network_state
service_worker_supported
cache_api_supported
indexeddb_supported
opfs_supported
persistent_storage_supported
native_companion_supported
browser_extension_supported
active_tab_capture_supported
share_target_supported
file_watch_supported
notification_deep_link_supported
persistent_storage_state
background_sync_supported
background_fetch_supported
push_supported
storage_estimate_bytes
storage_quota_bytes
capability_policy_result
disabled_reason_codes
last_observed_at
expires_at
```

Profiles are content-minimized. They do not store user-agent strings in raw form unless policy allows a diagnostic workflow. They cannot be used for fingerprinting beyond the authorized session and Project purpose.

### LocalCachePolicy

Representative fields:

```text
local_cache_policy_id
organization_id
project_id
policy_version
allowed_cache_classes
allowed_offline_packet_classes
requires_encryption
requires_persistent_storage_request
max_bytes
max_age_seconds
offline_lease_seconds
allowed_queue_action_classes
prohibited_data_classes
clear_on_signout
clear_on_membership_change
support_diagnostic_policy
updated_at
```

LocalCachePolicy is derived from Organization policy, Project policy, data classification, device trust, feature flags, residency, retention, provider policy, and security posture. It does not permit local storage of credentials, hidden reasoning, raw provider traces, or prohibited private content classes.

### LocalCacheManifest

Representative fields:

```text
local_cache_manifest_id
organization_id
project_id
user_id
device_capability_profile_id
cache_scope_ref
source_scope_hash
policy_version_hash
retention_version_hash
entries
byte_count
storage_backend
encryption_state
last_verified_at
expires_at
invalidated_at
invalidation_reason
```

The manifest records what classes of local projection exist, their dependency hashes, and their expiry. It does not need to store local content bodies server-side.

### OfflineDraft

Representative fields:

```text
offline_draft_id
organization_id
project_id
user_id
device_capability_profile_id
target_resource_ref
draft_kind
base_resource_version
local_version
source_scope_hash
policy_version_hash
created_offline
status
redaction_summary
expires_at
submitted_operation_id
```

OfflineDrafts represent local work before server acceptance. They can become canonical only through owning domain patch APIs with current authorization, expected versions, idempotency, preflight, and ActivityEvents.

### OfflineActionQueueItem

Representative fields:

```text
offline_action_queue_item_id
organization_id
project_id
user_id
device_capability_profile_id
intent_id
command_descriptor_ref
target_resource_ref
action_class
side_effect_class
expected_versions
idempotency_key
payload_hash
queued_at
first_sync_attempt_at
last_sync_attempt_at
status
blocked_reason
operation_id
sync_conflict_id
```

Queue items are limited to allowed low-risk action classes. High-risk mutation classes are rejected while offline and can only be recreated after current preflight when the device is online.

### SyncAttempt

Representative fields:

```text
sync_attempt_id
organization_id
project_id
user_id
queue_item_id
offline_draft_id
attempt_number
network_state
authorization_result
policy_result
preflight_result
expected_version_result
idempotency_result
operation_id
result_state
started_at
completed_at
```

SyncAttempt records provide user-visible progress, support-safe diagnostics, and release evidence. They do not store raw draft bodies, source text, prompts, connector payloads, credentials, or hidden reasoning.

### SyncConflict

Representative fields:

```text
sync_conflict_id
organization_id
project_id
user_id
target_resource_ref
conflict_kind
base_version
local_version_ref
current_server_version
action_class
side_effect_class
approval_class
resolution_state
action_card_id
redaction_summary
created_at
resolved_at
```

SyncConflicts are review records, not mutation authority. Resolution runs through owning services and current preflight.

### DeviceContinuityLink

Representative fields:

```text
device_continuity_link_id
organization_id
project_id
user_id
source_device_profile_id
target_device_profile_id
focus_state_ref
workset_ref
resume_checkpoint_ref
offline_draft_ref
purpose
expiry
status
created_at
used_at
```

DeviceContinuityLinks support application-owned handoff. They expire, require authentication, and never grant access by possession alone.

## Local storage backends

Research uses the lowest-risk storage backend sufficient for the data class:

| Data class | Preferred storage | Rules |
|---|---|---|
| public app shell and static assets | Cache API via service worker | Versioned, purgeable, no private content. |
| safe Project metadata | IndexedDB or Cache API | Project-scoped, policy-bound, labels stale or offline. |
| local UI state and layout preferences | IndexedDB or browser state | No raw content, no credentials, no hidden reasoning. |
| draft edit buffers | IndexedDB or OPFS where supported | Encrypted where policy requires, expiry-bound, user-clearable. |
| offline evidence packets | IndexedDB or OPFS where explicitly allowed | Bounded, encrypted where required, source-scope and lease-bound. |
| companion queue metadata | IndexedDB or native secure storage where supported | Grant-scoped, content-minimized, expiry-bound, clearable, no ambient capture. |
| credentials and secrets | approved session or secret systems only | Never Cache API, IndexedDB, OPFS, localStorage, or service-worker globals. |

`localStorage` is not used for private content or durable drafts. It may store only harmless feature flags or presentation preferences when a stricter storage option is unavailable.

## Service worker and PWA policy

Service workers can cache the public shell, versioned assets, offline fallback, safe route metadata, and selected policy-bound projections. They cannot cache credentials, private source bodies, private document bodies, raw prompts, hidden reasoning, connector payloads, private URLs, or support notes.

Service worker updates require:

- versioned cache names and migration policy;
- stale shell detection;
- controlled activation prompts where data loss is possible;
- rollback or cache clear behavior;
- tests for first load, upgrade, refresh, offline fallback, and multi-tab behavior.

Background Sync and Periodic Background Sync are optional capability adapters. They may process small, low-risk queue items only when supported, when policy permits, and when the service worker can complete the work safely. Large uploads, source ingestion, provider calls, publication, external writes, deletion, billing, support access, GitHub pushes, and connector writes require foreground or server-side workflows after current preflight.

## Offline queue eligibility

A queued action is eligible only when all checks pass:

- the action class is allowed by LocalCachePolicy;
- the action has a typed CommandActionDescriptor or IntentRecord;
- target resource, source scope, policy hash, expected versions, and idempotency key are recorded;
- payload is content-minimized or encrypted according to policy;
- the action has no high-risk side effect while offline;
- the user can inspect, retry, cancel, export draft content where allowed, or discard the item;
- retry behavior is bounded and visible.

Actions that affect publication, deletion, billing, permissions, support access, external writes, connector scope, GitHub pushes, public notifications, or abuse enforcement release are never eligible for offline automatic execution.

## Reauthorization and preflight

Reconnect is a security boundary. Before using local state, Research rechecks:

- actor, session, Project membership, role, and capability;
- Organization and Project policy;
- source scope, source rights, retention, residency, and provider policy;
- source-version, document-revision, comment, Workset, Focus, approval, abuse, and support-access dependencies;
- native companion install, grant, context-packet, file-watch, notification-binding, deep-link, and extension-version dependencies where applicable;
- entitlement, quota, budget, and rate limits;
- expected versions and idempotency state;
- local cache expiry and offline lease;
- storage integrity, schema version, and encryption state where applicable.

Failure produces a disabled reason, ActionCard, SyncConflict, or local invalidation. A stale or unauthorized local item cannot prove that a hidden server resource exists.

## Conflict policy

Automatic merge is allowed only for explicitly commutative, low-risk preferences or local UI state.

Conflict review is required for:

- overlapping document edits or patch anchors;
- source-version changes, source revocation, rights changes, parser changes, or evidence dependency changes;
- Claim, EvidenceSpan, citation, publication, export, or Trust blocker changes;
- comments, reviews, decisions, mentions, assignments, and private collaboration visibility;
- Workset or Focus State changes that point to stale, deleted, redacted, or unavailable resources;
- settings, policy, notification, support, approval, delegated-trust, abuse, billing, connector, GitHub, or external-write changes.

Conflict review creates an ActionCard or equivalent review surface with local base, current server version, local effect, target, risk, approval class, and recovery path. Last-write-wins is not allowed for material Project state.

## API, SDK, CLI, and MCP exposure

Supported clients can expose minimized endpoints and resources for:

- current DeviceCapabilityProfile;
- LocalCachePolicy summaries;
- local-cache manifest inspection and clear commands;
- native companion queue metadata and blocked-capture status through companion-specific routes where policy allows;
- offline draft status and submission;
- queue status, retry, cancel, discard, and conflict review;
- sync attempt diagnostics;
- continuity link creation and use;
- stable errors for unsupported capability, expired local lease, stale offline draft, queue action prohibited, sync conflict, local cache invalidated, and offline storage unavailable.

External clients must tolerate unknown capability flags and disabled reason codes. Mutations require idempotency keys and expected versions.

## Events and Activity

Device and sync event families include:

- `device.capability_profile_observed`
- `local_cache.manifest_created`
- `local_cache.manifest_invalidated`
- `offline_draft.created`
- `offline_draft.submitted`
- `offline_draft.discarded`
- `offline_queue.item_queued`
- `offline_queue.item_blocked`
- `offline_queue.item_cancelled`
- `sync.attempt_started`
- `sync.attempt_completed`
- `sync.conflict_created`
- `sync.conflict_resolved`
- `device.continuity_link_created`
- `device.continuity_link_used`

External webhook projections expose only authorized metadata, status, reason categories, counts, safe resource refs, and redacted summaries.

## Privacy and security rules

- Local state is Project-scoped and viewer-scoped.
- Browser storage is treated as less durable than server state and can be evicted by the platform.
- Private local storage requires secure contexts and approved storage APIs.
- Encryption is required for any allowed offline packet containing private content where platform and policy support it.
- Persistent storage may be requested only after user value is clear and policy allows the data class.
- Sign-out, session expiry, membership change, device revocation, policy change, source revocation, deletion, retention expiry, and rights changes invalidate affected local projections.
- Support diagnostics use manifest metadata, reason codes, counts, hashes, and timestamps, not local content bodies.
- Device telemetry cannot become fingerprinting, session replay, or a shadow activity log.
- Companion queue and device telemetry cannot include selected text, active-tab contents, browser history, screenshots, clipboard contents, local file contents, raw file paths, keystrokes, camera, microphone, OS window state, prompts, private document bodies, or hidden reasoning.

## Failure behavior

If local storage is unavailable, Research opens in online-only mode and preserves unsent text in memory where safe.

If local storage is evicted or unreadable, Research explains that local drafts or packets may be unavailable, opens server state, and provides support-safe diagnostics. It must not imply canonical data was deleted unless server records confirm deletion.

If reconnect succeeds but preflight fails, the queue item remains blocked with a reason and recovery command.

If a queued action conflicts, Research creates SyncConflict and stops automatic execution.

If background sync is unsupported or terminated, Research retries through foreground sync or server-side Operations when safe.

## Performance and capacity

Device continuity is interactive workload for app shell, draft saves, queue inspection, reconnect checks, and conflict display. Detailed sync, large offline packet generation, and large Project comparisons are background workload.

Performance budgets cover:

- first shell and offline fallback;
- capability-profile evaluation;
- local draft save and restore;
- local-cache manifest read;
- service worker startup and update;
- queue listing and retry;
- reconnect preflight;
- conflict detection and review surface render;
- mobile input responsiveness and touch target stability.

Capacity controls bound local queue size, packet size, retry count, background sync frequency, sync concurrency, storage usage, and telemetry volume.

## Tests

Required coverage:

- DeviceCapabilityProfile schema, disabled reason, and capability-probe fallback behavior;
- LocalCachePolicy selection by Organization policy, Project policy, data class, device trust, retention, and feature flag;
- LocalCacheManifest invalidation after membership, policy, rights, retention, source, document, comment, approval, abuse, and support changes;
- service worker first-load, offline fallback, update, cache migration, and multi-tab behavior;
- local draft save, restore, export where allowed, discard, expiry, and unreadable-storage behavior;
- queue eligibility, idempotency, expected-version storage, retry bounds, cancellation, and unsupported action rejection;
- reconnect reauthorization, preflight, budget, provider-policy, and abuse-policy checks;
- conflict creation for overlapping document edits, source version drift, policy revocation, Workset drift, Focus drift, and collaboration visibility changes;
- cross-device handoff without bearer-token access;
- companion queue reauthorization after grant, extension, policy, path, notification, deep-link, and source-scope changes;
- storage eviction and persistent-storage denial scenarios;
- mobile, tablet, desktop, installed, private-browsing, managed-browser, keyboard, touch, pointer, and screen-reader journeys;
- support-safe diagnostics and analytics minimization;
- load tests for reconnect storms, notification storms, and many local queue items.

## Launch gates

Offline sync and local cache are production-ready only when:

- `DEVICE-001` and `DEVICE-002` are implemented where applicable;
- local state is proved to be a projection, draft, or pending intent over canonical Project records;
- service worker and storage behavior is tested across supported browsers and installation contexts;
- every local draft, queue item, cache manifest, offline packet, and handoff ref reauthorizes before use;
- companion local queues, blocked-capture records, context-packet refs, and grant-dependent local projections reauthorize before use where companion surfaces ship;
- high-risk actions are impossible to execute offline or silently after stale policy;
- conflict review rejects unsafe last-write-wins behavior;
- local data controls, clear-cache controls, sign-out behavior, storage-eviction handling, and device revocation are validated;
- release evidence includes privacy, security, accessibility, mobile, performance, sync, conflict, and recovery results.

## Documentation update rule

Changes to DeviceCapabilityProfile, LocalCachePolicy, LocalCacheManifest, OfflineDraft, OfflineActionQueueItem, SyncAttempt, SyncConflict, DeviceContinuityLink, service worker policy, local storage classes, background sync, reconnect, or conflict behavior must update:

- [`../01-product/offline-device-continuity-and-mobile-experience.md`](../01-product/offline-device-continuity-and-mobile-experience.md)
- [`../01-product/native-workspace-companion-and-os-integration.md`](../01-product/native-workspace-companion-and-os-integration.md)
- [`progressive-delivery-and-fast-path-cache-policy.md`](progressive-delivery-and-fast-path-cache-policy.md)
- [`native-companion-shell-and-os-adapter-policy.md`](native-companion-shell-and-os-adapter-policy.md)
- [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md)
- [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`tenancy-authorization-and-capabilities.md`](tenancy-authorization-and-capabilities.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../05-security/web-application-security-baseline.md`](../05-security/web-application-security-baseline.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
