# Command action routing and shortcuts

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md). Spatial Workbench and Workset behavior is specified in [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md). Project Operating Layer Work Packets and NextActionCandidates are specified in [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md). This contract defines the typed catalog, shortcut, routing, preflight, execution, and audit model that prevents a fast command surface from becoming an unsafe hidden automation layer.

## Goals

- Expose Project actions through a typed, searchable, authorization-aware catalog.
- Keep command invocation fast while making mutation safety explicit.
- Route material commands through the same IntentRecord, PreflightCheck, DelegatedTrustGrant, ActionCard, ApprovalReceipt, Operation, and ActivityEvent systems as Chat, Automation Recipes, automation, API, SDK, CLI, and MCP.
- Treat OS-style app actions, connected-app actions, model-facing tools, and companion entry points as projections of the canonical Project Action Surface, not as separate handler systems.
- Support remappable shortcuts and aliases without bypassing policy.
- Preserve enough evidence for replay, support, accessibility, product analytics, and release validation without storing private content unnecessarily.

## Processing chain

```text
UI context or shortcut
-> resolve CommandContext
-> filter local CommandCatalog
-> request server-authorized candidates when needed
-> resolve CommandActionDescriptor
-> run command preflight
-> execute navigation, create draft, create ActionCard, or start Operation
-> emit CommandInvocation and ActivityEvent
-> return CommandResult with recovery path
```

The local catalog can improve perceived speed, but the server owns authorization, policy, expected-version checks, and material execution.

## Core records

### CommandActionDescriptor

A `CommandActionDescriptor` is the canonical description of a command that can be displayed, searched, invoked, suggested, or bound to a shortcut.

Required fields:

- `command_id`
- `command_version`
- `project_id` or shared-library scope
- `title`
- `description`
- `group`
- `action_class`: navigation, read, focus_resume, draft, review, mutation, external_write, publication, billing, destructive, or administration
- `target_resource_type`
- `entity_binding_policy`
- `required_capabilities`
- `required_input_schema`
- `result_schema`
- `side_effect_class`
- `approval_class`
- `preflight_policy`
- `idempotency_scope`
- `expected_version_policy`
- `disabled_reason_policy`
- `activity_event_type`
- `external_projection_policy`
- `tool_exposure_policy`
- `handler_contract_ref`
- `accessibility_label`
- `shortcut_eligibility`
- `owner_package`

Descriptors are versioned. A shortcut, alias, macro, recommendation, API tool, SDK method, CLI command, MCP tool, native bridge entry, browser-extension action, or Automation Recipe step binds to a descriptor version or compatible version range, not to arbitrary handler code.

### Project Action Surface

The Project Action Surface is the server-owned projection of all user-visible and machine-visible Project actions. It exists to keep command palettes, app-intent-style integrations, connected apps, model tools, native companion shortcuts, browser-extension actions, API clients, SDKs, CLIs, MCP clients, and Automation Recipes aligned on the same action contract.

Representative fields:

- descriptor version refs;
- source projection family: command_center, api, sdk, cli, mcp, native_companion, browser_extension, automation_recipe, or external_app_action;
- visible title, short description, and compact discovery metadata;
- full input and result schema refs;
- read/write/destructive hints;
- required capabilities, grant class, and destination scope;
- preflight, approval, idempotency, expected-version, and side-effect policies;
- availability, disabled reason, and policy-managed reason;
- audit, ActivityEvent, Operation, ActionCard, and support-diagnostic refs;
- model-facing context budget and schema-loading policy.

The Project Action Surface is a projection. The owning domain service remains the mutation authority, and source content cannot define, override, or hide actions.

### CommandContext

`CommandContext` is a minimized snapshot of the actor and UI state used to filter commands:

- actor, Organization, Project, and policy identity;
- active surface;
- selected resource references;
- selected text or block references where policy allows;
- current intent version, mode, source scope, and budget class;
- operation, review, automation, or run state;
- FocusState, ResumeCheckpoint, ResumeDigest, FocusSession, and attention-item state;
- SpatialWorkbenchState, active Workset, pane refs, snapshot refs, and layout suggestion state;
- current WorkPacket and NextActionCandidate references where available;
- current NativeCompanionInstall, NativePermissionGrant, active-tab invocation, selected-context packet, file-watch grant, notification binding, and deep-link state where available;
- device, accessibility, and input modality hints.

CommandContext stores resource identifiers, locators, classifications, and hashes where possible. It does not store raw private source text, raw prompts, hidden reasoning, credentials, or full connector payloads.

### CommandCatalogEntry

The catalog entry is the searchable projection of a descriptor:

- command ID and version;
- localized title, aliases, keywords, group, and shortcut hints;
- safe summary;
- disabled reason where useful;
- rank signals;
- target type;
- action class;
- approval class.

Catalog entries are content-minimized and permission-filtered. Server projections can invalidate local caches when Project policy, membership, source scope, feature flags, descriptor versions, or shortcut settings change.

### ShortcutBinding

A `ShortcutBinding` records user, Project, Organization, and default shortcut mappings:

- binding scope;
- key chord or sequence;
- platform and input context;
- command descriptor version;
- conflict status;
- priority and fallback behavior;
- enabled state;
- created by and updated by.

Shortcut resolution considers focused text editors, browser-reserved shortcuts, assistive-technology reservations, operating-system conventions, and Project policy. A binding that cannot be safely captured remains visible but disabled with a reason.

### CommandInvocation

A `CommandInvocation` records the attempt to run a command:

- invocation ID;
- command ID and version;
- actor and Project;
- origin: keyboard, header, context menu, suggestion, native companion, browser extension, tray/menu, share target, API, CLI, MCP, automation, or system;
- target resource and expected version;
- input hash;
- intent ID and version where applicable;
- preflight result;
- operation ID or action card ID where applicable;
- status;
- idempotency key;
- causation and correlation IDs;
- started and completed timestamps.

Invocation payloads are minimized. Detailed domain state stays in the owning records.

## Execution classes

| Class | Examples | Execution rule |
|---|---|---|
| Navigation | open Activity, jump to source, open recent document | immediate when authorized |
| Read | inspect citation, view scorecard, search commands | immediate, content-minimized |
| Focus/resume | continue work, mark digest caught up, start or end focus, open next attention item | requires focus policy, expected version, content minimization, and activity |
| Draft | create draft answer, prepare patch, compile draft recipe, dry-run automation | creates reversible draft or Operation |
| Review | open ActionCard, approve with receipt, request changes | follows review and approval contracts |
| Mutation | accept patch, update setting, pause automation | requires expected version, preflight, idempotency, activity |
| External write | GitHub branch, notification, connector write | requires side-effect ledger and approval policy |
| Publication | publish or withdraw snapshot | requires rights, privacy, support, and approval gates |
| Billing | change plan, reserve budget, enable paid automation | requires entitlement and billing policy |
| Destructive | delete, revoke, purge, retire with irreversible effect | requires explicit target, preview, approval, and audit |
| Administration | support grant, SupportDiagnosticBundle export, SupportAccessRequest decision, SupportAccessSession revocation, policy change, service-account action | requires elevated policy, audit, expiry, and step-up where private-content access is involved |

Natural-language command search can select or draft commands, but execution always resolves to one of these classes.

## Integration points

### Project shell

The Project shell loads a content-minimized catalog for authorized navigation, search, mode, and context actions. It never renders unauthorized private data into the local command index.

### Intent and preflight

Material commands create or reference an `IntentRecord`. Command preflight extends [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md) with descriptor version, shortcut binding, selected resource, expected version, input schema, side-effect class, and result schema checks.

### Activity and review

Command invocation events flow through [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md). High-risk commands create or open ActionCards in the review queue. Approval receipts bind to command descriptor version, payload hash, expected version, and idempotency key. Repeated low-risk command approvals can propose delegated-trust grants, but execution still verifies the grant through [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md) before mutation.

### Operations and idempotency

Long-running commands return Operations. Mutating commands store idempotency records by actor, Project, command descriptor, normalized input hash, target, and retention window. Retried invocations cannot widen payload, source scope, approval class, or side-effect class.

### API, SDK, CLI, and MCP

The public platform can expose read-only command discovery and selected command invocation only where policy allows. External clients may propose command input, but server-owned descriptor resolution, preflight, approval, idempotency, and ActivityEvent writing are mandatory.

Model-facing and external-client action projections must be generated from the Project Action Surface. The projection can reduce description length, hide unavailable actions, or lazy-load schemas to fit context and latency budgets, but it cannot remove a required preflight, weaken a side-effect class, omit disabled reasons needed for recovery, or expose a mutation path that the Command Center could not show to the same actor.

Every projected action declares whether it is discovery-only, read-only, draft-only, review-only, mutation-capable, external-write-capable, publication-capable, destructive, billing-affecting, or administrative. Read/write/destructive hints are advisory to clients; server preflight remains authoritative.

### Native companion and browser extension

Native and browser companion entry points resolve through [`native-companion-shell-and-os-adapter-policy.md`](native-companion-shell-and-os-adapter-policy.md). A global shortcut, tray/menu action, browser extension command, context menu item, active-tab capture, selected-text capture, or share target can propose command input, but it cannot execute handler code directly. The command bridge verifies companion install state, grant state, descriptor version, shortcut conflict state, active user gesture, expected versions, and preflight before navigation, draft creation, ActionCard creation, Operation start, or mutation.

If a future OS, assistant, or connected-app integration consumes Research actions, it uses the same NativeCommandBridge and Project Action Surface projection rules. Research does not grant the OS, assistant, or connected-app layer independent Project authority.

## Suggested commands and macros

Command recommendations are projections over safe metadata such as recent navigation, current blocker, selected resource type, failed search terms, unresolved review items, WorkPackets, NextActionCandidates, recipe blockers, automation scorecards, and Project policy. A recommendation stores its reason, rank inputs, dismissal state, correction state, outcome link, and expiry. Next-action recommendations use the operating-layer ranking and invalidation policy rather than a separate command-only ranking authority.

Macros are draft command bundles until approved. A macro cannot:

- contain unknown descriptor versions;
- skip preflight;
- suppress approval;
- introduce a higher-risk command without preview;
- widen source or connector scope;
- hide intermediate side effects;
- execute destructive, billing, publication, or external-write actions without explicit review.

Repeated approved macro patterns can suggest a draft Automation Recipe. The suggestion is non-runnable until the recipe graph, trigger, simulation, owner approval, and activation policy defined in [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md) are complete.

## Storage model

Representative tables are defined in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md):

- `command_descriptors`
- `command_catalog_entries`
- `command_context_snapshots`
- `shortcut_bindings`
- `command_invocations`
- `command_recommendations`
- `command_macro_drafts`

Descriptor source files live in the owning package and are validated during build. Database rows store deployed descriptor identity, search projections, user preferences, invocation state, and audit links.

## Security and privacy

- Source content is untrusted and cannot create commands, change shortcuts, widen permissions, or alter approval policy.
- Command IDs and catalog URIs are identifiers, not bearer secrets.
- Local command indexes contain only safe summaries and authorized resource references.
- Project Action Surface projections are generated from trusted descriptor source files and runtime policy state, never from source text, model output, connector payloads, public comments, or user-authored document prose.
- Model-facing tool descriptions, connected-app metadata, native bridge records, and MCP tool schemas are treated as security- and UX-relevant contracts; changing them can change action selection and must be reviewed like an API contract.
- Shortcut bindings cannot override high-risk approval or browser security expectations.
- Native companion and browser extension command bridges cannot bypass active-tab user gestures, Project grants, descriptor resolution, preflight, approvals, or no-ambient-capture restrictions.
- Command suggestions must not reveal private source, reviewer, support, billing, or connector details to unauthorized viewers.
- Support diagnostics show descriptor, policy, state, and redacted input hashes before sensitive detail.

## Observability

Telemetry records metadata-only signals:

- command open latency and filter latency;
- action descriptor projection size, lazy-load rate, routing miss rate, disabled-reason recovery, and model/tool selection mismatch counts;
- no-result queries and recovery paths;
- invocation class, success, cancellation, denial, and failure counts;
- shortcut conflict and remapping counts;
- command-to-ActionCard conversion;
- focus command completion, stale digest, redacted digest, and notification suppression counts;
- approval wait and stale expected-version rates;
- delegated-trust grant use, grant invalidation, approval batch completion, and approval-load threshold counts;
- keyboard-only completion for primary workflows;
- accessibility-critical command failures.

Command frequency is not a success metric by itself. Product analytics must connect command paths to accepted outcomes, reduced friction, fewer support cases, or safer recovery.

## Tests

Required coverage:

- descriptor schema validation and version compatibility;
- Project Action Surface projection parity across Command Center, API, SDK, CLI, MCP, native companion, browser extension, and Automation Recipe surfaces;
- compact tool/action descriptor generation, schema lazy-loading, and routing fixtures that detect overbroad, duplicate, stale, or ambiguous action descriptions;
- permission-filtered catalog projection;
- local cache invalidation after policy, membership, source, feature flag, and descriptor changes;
- shortcut conflict detection across text editors, browser shortcuts, operating-system conventions, and assistive-technology reservations;
- native companion, browser extension, tray/menu, share-target, active-tab, selected-context, and notification command bridge descriptor resolution;
- command preflight for unauthorized target, stale expected version, revoked connector, budget limit, missing approval, and unsupported side effect;
- focus command preflight for stale FocusState, invalidated ResumeDigest, unauthorized attention item, policy-required immediate delivery, and conflicting expected version;
- spatial command preflight for stale Workset, unauthorized pane ref, invalidated snapshot, unsupported layout template, redacted resource, and conflicting expected version;
- ActionCard creation for high-risk commands;
- idempotent retry without duplicate side effects;
- ActivityEvent reconstruction for invocation, denial, cancellation, and failure;
- content minimization in catalog, telemetry, support, API, SDK, CLI, and MCP views;
- prompt-injection fixtures proving source content, generated summaries, comments, and connector payloads cannot define actions, change descriptors, widen scopes, or suppress disabled reasons;
- keyboard, screen-reader, pointer, touch, and narrow-screen command paths.

## Launch gates

Command routing is production-ready only when:

- `UX-003` and `UX-004` are implemented;
- Project shell, Chat, Documents, Sources, Activity, automation, and review queue all use the same command descriptor contract;
- WorkPacket next-action invocation, dismissal, correction, and outcome observations remain linked to command invocation, ActivityEvent, and owning resource state;
- delegated-trust decisions for command invocations remain linked to approval requests, grants, receipts, ActivityEvents, and audit records;
- high-risk command paths prove expected-version, preflight, approval, idempotency, audit, and side-effect-ledger behavior;
- shortcut customization has conflict tests and accessibility tests;
- native companion and browser extension command entry proves user gesture, grant, descriptor, preflight, ActivityEvent, and no-ambient-capture behavior;
- command suggestions are explainable, dismissible, permission-filtered, and content-minimized;
- API, SDK, CLI, and MCP command exposure cannot bypass UI policy;
- Project Action Surface projections prove action-descriptor parity, compactness, disabled-reason fidelity, lazy-load behavior, and no prompt-only mutation across UI, API, SDK, CLI, MCP, native companion, browser extension, and recipe surfaces;
- performance tests prove the Command Center opens under interactive latency budgets during background saturation.

## Documentation update rule

Changes to command descriptors, command catalog projection, shortcut binding, command recommendations, macros, or command execution routing must update:

- [`../01-product/command-center-and-keyboard-workflows.md`](../01-product/command-center-and-keyboard-workflows.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md)
- [`delegated-trust-policy-and-approval-engine.md`](delegated-trust-policy-and-approval-engine.md)
- [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`native-companion-shell-and-os-adapter-policy.md`](native-companion-shell-and-os-adapter-policy.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../08-build/developer-platform-api-sdk.md`](../08-build/developer-platform-api-sdk.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
