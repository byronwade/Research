# Native companion shell and OS adapter policy

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/native-workspace-companion-and-os-integration.md`](../01-product/native-workspace-companion-and-os-integration.md). Advanced operating-layer no-ambient-capture differentiation is governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). This contract defines how optional native shells, browser extensions, OS share targets, global shortcuts, tray or menu status, file-watch grants, notifications, and deep links operate as permission-scoped projections over canonical Project state.

The native companion is an adapter layer. It does not own source truth, document truth, workflow truth, memory truth, evidence truth, authorization truth, notification truth, or command truth.

## Goals

- Provide fast Project entry, capture, command, notification, and deep-link paths from browser and operating-system contexts.
- Keep native and browser adapters optional, inspectable, revocable, content-minimized, and Project-scoped.
- Route capture and command effects through existing Source, Intent, Command, Activity, Notification, Operation, approval, and audit contracts.
- Prevent ambient screen capture, broad clipboard monitoring, keylogging, browser-history capture, global filesystem indexing, hidden camera or microphone capture, and hidden OS-window profiling.
- Make security, privacy, update, telemetry, accessibility, and performance validation explicit before any production launch claim.

## Processing chain

```text
user invokes companion surface
-> resolve actor, account, device, browser, Project, and surface state
-> verify companion install and version policy
-> verify NativePermissionGrant or browser active-tab user gesture
-> build NativeContextPacket from selected or invoked context
-> classify content, source type, sensitivity, rights, destination, and action class
-> create preview or CommandActionDescriptor input
-> run server-owned authorization and deterministic preflight
-> create SourceCandidate, DocumentDraft, CommandInvocation, NotificationAction, or Operation
-> emit ActivityEvent, audit event, telemetry metadata, and local queue update
-> sync or block through owning domain service
```

The server owns policy and canonical mutations. The companion can prepare local previews and queues, but it cannot apply canonical effects without server acceptance.

## Adapter boundaries

### Desktop shell adapter

The desktop shell can provide:

- global command shortcut registration where the OS permits it;
- tray or menu bar status and quick open controls;
- deep-link registration;
- share target or file association handoff where supported;
- file picker and Project-scoped folder-watch bridge;
- local notification action bridge;
- signed update channel and version policy checks.

The desktop shell cannot read arbitrary windows, screenshots, screen recordings, keystrokes outside registered shortcuts, clipboard contents, microphone, camera, full filesystem, or application activity.

### Browser extension adapter

The browser extension can provide:

- toolbar action and side panel;
- context menu for selected text, selected links, or current tab;
- active-tab user-gesture capture;
- URL-only capture;
- visible page metadata capture where the browser grant allows it;
- extension command shortcut routed to Command Center;
- deep-link return to the web app.

The browser extension cannot read all tabs, all browsing history, cookies, form fields, credentials, private windows, hidden DOM content outside the granted tab context, or pages without user invocation.

### Web-app fallback

The web app remains the canonical fallback for upload, URL capture, command execution, settings, grant review, notification review, support diagnostics, and revocation. Companion-only flows are not acceptable for primary workflows.

## Core records

Representative schema details live in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md).

### NativeCompanionInstall

Tracks an installed companion surface for a user, device, browser, or managed environment.

Representative fields:

```text
native_companion_install_id
organization_id
user_id
device_capability_profile_id
surface_type
platform_class
browser_family
extension_id
desktop_app_id
version
signature_state
update_channel
managed_device_state
policy_state
last_seen_at
revoked_at
```

Install records store capability and version metadata, not private content.

### NativePermissionGrant

Defines what a companion surface can do for a Project.

Representative fields:

```text
native_permission_grant_id
organization_id
project_id
user_id
install_id
surface_type
grant_kind
source_scope_hash
destination_ref
allowed_action_classes
allowed_content_classes
local_retention_seconds
expires_at
revoked_at
policy_version_hash
created_by
```

Grants are deny-by-default and explicit. A grant cannot widen Project authorization, connector scope, approval policy, support access, model routing, billing policy, or publication policy.

### NativeContextPacket

Represents a minimized packet created from an explicit invocation.

Representative fields:

```text
native_context_packet_id
organization_id
project_id
user_id
install_id
origin_surface
origin_gesture
target_resource_ref
content_class
source_type_hint
locator_hash
metadata
payload_ref
payload_hash
redaction_summary
policy_result
expires_at
```

Packets store metadata and payload references according to policy. Selected text, page content, or local file content becomes durable only through Source, Document draft, or Operation workflows.

### NativeCaptureIntent

Connects an invocation to a preview, source candidate, draft, or operation.

Representative fields:

```text
native_capture_intent_id
organization_id
project_id
user_id
context_packet_id
destination_kind
destination_ref
source_scope_hash
capture_mode
rights_result
sensitivity_result
preflight_result
preview_state
operation_id
activity_event_id
status
created_at
completed_at
```

Capture intents are not evidence. Evidence starts at immutable SourceVersion and exact locator records.

### NativeFileWatchGrant

Defines a Project-scoped watch over a user-selected folder.

Representative fields:

```text
native_file_watch_grant_id
organization_id
project_id
user_id
install_id
path_alias
path_hash
allowed_extensions
allowed_mime_classes
max_file_bytes
max_events_per_window
follow_symlinks
retention_seconds
last_event_at
paused_at
revoked_at
```

Path aliases must avoid exposing sensitive local folder names where policy requires redaction. The companion rejects paths outside the granted root and symlink escapes unless an explicit policy allows them.

### NativeCommandBridge

Links global shortcuts, tray/menu commands, extension commands, and OS intents to canonical command descriptors.

Representative fields:

```text
native_command_bridge_id
organization_id
project_id
user_id
install_id
origin_surface
shortcut_binding_id
command_descriptor_id
command_descriptor_version
allowed_input_schema
conflict_state
last_invoked_at
disabled_reason
```

The bridge cannot execute handler code directly. It resolves to a `CommandActionDescriptor` and follows [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md).

### NativeNotificationBinding

Routes notification delivery and actions through current authorization.

Representative fields:

```text
native_notification_binding_id
organization_id
project_id
user_id
install_id
channel_type
notification_policy_ref
allowed_action_classes
quiet_hour_policy_ref
deep_link_policy_ref
last_delivery_at
revoked_at
```

Notification payloads contain only safe labels and action metadata. Private content is fetched after deep-link authorization.

## Policy enforcement

Native companion policy composes:

- Organization policy;
- Project policy;
- actor role and membership;
- device capability and managed-device state;
- install version, signature, extension ID, update channel, and platform;
- surface type and browser permission model;
- source class, sensitivity, rights, residency, retention, and provider policy;
- action class, side-effect class, approval class, and expected versions;
- feature flags, entitlements, quotas, budgets, and abuse policy.

The server returns one of:

- `allowed`
- `preview-required`
- `approval-required`
- `online-required`
- `policy-blocked`
- `unsupported-platform`
- `revoked`
- `stale-version`
- `unsafe-content`
- `rights-blocked`
- `rate-limited`

The companion must show blocked reasons where useful and fail closed when policy cannot be evaluated.

## Capture and command execution

Browser tab, selected text, file, folder, share target, and OS intent inputs become `NativeContextPacket` records. The owning service then decides the canonical path:

- source ingestion creates a `SourceCandidate` and then immutable `SourceVersion` only after source policy accepts it;
- document insertion creates a draft patch with expected base version;
- command entry creates a `CommandInvocation`;
- notification action creates or opens an ActionCard or Operation;
- file-watch change creates a queued capture preview or ingestion candidate;
- deep link opens a resource after current authorization.

The companion cannot silently:

- publish or withdraw content;
- approve ActionCards;
- bill, reserve paid budget, or change plan;
- create support access;
- delete, purge, or restore canonical records;
- write to connectors or GitHub;
- run private-content model calls;
- widen source scope or connector permissions.

## Local queue and offline behavior

The companion can queue capture previews and metadata-only actions when offline or degraded if [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md) allows it. Queued items carry expected versions, grant refs, content class, payload hash, expiry, idempotency key, and policy version hash.

Reconnect revalidates install state, grant state, Project membership, policy, source rights, retention, residency, expected versions, abuse policy, and destination state before upload, ingestion, draft creation, command execution, notification action, or file-watch processing.

## Security and privacy

- Source content is untrusted data and cannot alter companion permissions, grant prompts, shortcut bindings, command descriptors, extension manifests, update channels, or policy decisions.
- Companion update, signing, extension ID, native app ID, and release provenance are part of the security boundary.
- Browser extension manifests request the narrowest permission set available and prefer active-tab user gestures over persistent host permissions.
- Desktop shell capabilities are window-scoped and permission-scoped where the runtime supports it.
- Local companion storage uses approved encryption when content payloads are permitted, and otherwise stores only minimized metadata.
- Support diagnostics expose install version, policy state, disabled reason, queue counts, hashes, and redaction summaries, not raw selected text, file contents, browser history, clipboard, screenshots, prompts, private document bodies, credentials, or hidden reasoning.
- Emergency revocation can disable companion surfaces by Organization, Project, install version, extension ID, update channel, platform class, or grant kind.

## API surface

The public API can expose companion-related resources only as policy-filtered metadata:

- list installs;
- list grants;
- revoke grant;
- create capture preview;
- submit capture intent;
- list local queue metadata;
- resolve deep link;
- discover companion command descriptors;
- fetch support-safe diagnostic summary.

API responses never include raw local file paths, broad browser history, raw selected text, raw page content, screenshots, clipboard contents, credentials, or hidden reasoning unless a specific Source or Document workflow returns authorized content through its own contract.

## Observability

Telemetry records metadata-only signals:

- install, enable, disable, revoke, and version state counts;
- capture preview latency, block reason, and destination correction;
- global command open and invocation latency;
- active-tab capture, selected-text capture, URL-only capture, share target, and file-watch event counts;
- queue length, queue expiry, sync success, sync block, and conflict counts;
- notification delivery, click, dismissal, and deep-link authorization outcomes;
- extension memory, CPU, network, and startup overhead;
- shortcut conflict and fallback use;
- support diagnostic export and redaction outcomes.

Telemetry cannot store private content bodies, full private URLs, selected text, source text, prompt text, document bodies, connector payloads, local file contents, screenshots, clipboard content, browser history, raw provider traces, or hidden reasoning.

## Tests

Required coverage:

- extension manifest permission minimization and active-tab invocation behavior;
- desktop shell capability restrictions and signed update validation;
- Project-scoped grant creation, revocation, expiry, policy block, and stale-version handling;
- selected text, URL-only, active tab, context-menu, side-panel, share target, file picker, folder watch, notification, and deep-link flows;
- path traversal, symlink escape, oversized file, unsupported MIME, rate limit, and revoked folder watch rejection;
- companion queue reauthorization after membership, policy, rights, destination, retention, residency, and source-scope changes;
- command bridge descriptor resolution, shortcut conflict handling, preflight, approval, idempotency, and ActivityEvent linkage;
- denial of ambient screen, clipboard, keylogging, browser history, cookies, form-field, camera, microphone, broad filesystem, and hidden window-state capture;
- content minimization in local cache, telemetry, support diagnostics, API, SDK, CLI, MCP, and audit projections;
- accessibility fallbacks, focus return, keyboard-only paths, screen-reader labels, reduced motion, and mobile alternatives;
- performance under browser extension and desktop shell startup, idle, capture, file-watch, and queue-drain scenarios.

## Launch gates

Native companion architecture is production-ready only when:

- `NATIVE-002` is implemented and all companion surfaces are optional;
- server-owned policy controls install, grant, capture, command, notification, file-watch, queue, and revocation behavior;
- browser extension and desktop shell permissions are minimal, reviewed, signed, and release-pinned;
- active-tab, selected-context, share, file, and folder inputs create previews or queues before canonical ingestion;
- every mutation, external write, publication, billing, support, or destructive effect routes through owning services with preflight, expected versions, idempotency, ActivityEvents, audit, and approvals where required;
- telemetry and diagnostics prove prohibited content classes are absent;
- emergency revocation and version block controls are tested;
- accessibility and web fallback evidence exists for each primary companion workflow;
- performance and browser/OS compatibility evidence is attached to the release bundle.

## Documentation update rule

Changes to native installs, browser extension manifests, desktop shell capabilities, permission grants, context packets, capture intents, file-watch grants, command bridges, notification bindings, deep links, local queue behavior, companion telemetry, or emergency revocation must update:

- [`../01-product/native-workspace-companion-and-os-integration.md`](../01-product/native-workspace-companion-and-os-integration.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md)
- [`tenancy-authorization-and-capabilities.md`](tenancy-authorization-and-capabilities.md)
- [`configuration-and-feature-flags.md`](configuration-and-feature-flags.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md)
- [`../05-security/web-application-security-baseline.md`](../05-security/web-application-security-baseline.md)
- [`../05-security/secure-software-supply-chain.md`](../05-security/secure-software-supply-chain.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
