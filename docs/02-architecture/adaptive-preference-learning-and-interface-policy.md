# Adaptive preference learning and interface policy

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/adaptive-personalization-and-preference-controls.md`](../01-product/adaptive-personalization-and-preference-controls.md). This contract defines how Research records preferences, learns from corrections and outcomes, explains adaptive defaults, enforces scope, and prevents personalization from becoming a hidden memory, analytics, model-training, or authorization authority.

Research treats personalization as a governed projection over explicit settings, Project instructions, safe user corrections, outcome observations, and policy. It can improve defaults and recommendations, but it cannot create facts, grant access, bypass approvals, or silently reshape high-risk work.

## Goals

- Reduce repeated setup and formatting work without hiding why behavior changed.
- Keep Project, personal, Organization, session, device-local, accessibility, locale, and memory scopes distinct.
- Convert low-risk corrections and repeated accepted outcomes into explainable suggestions before durable behavior changes.
- Let users inspect, correct, disable, reset, and export preferences where policy allows.
- Keep preference records content-minimized and revalidated before use.
- Preserve explicit AI-surface choices across onboarding, import, migration, browser extension install, native companion install, provider change, and policy change unless a user or administrator explicitly changes them.
- Prevent preference learning from overriding authorization, evidence, approval, provider, privacy, retention, residency, billing, support, abuse, or accessibility policy.

## Authority boundary

Preference learning may read:

- Project settings, instructions, policy, templates, source preferences, prohibited sources, and model policy;
- user-visible settings, session overrides, ShortcutBindings, Worksets, Focus State, Resume Digests, notification settings, accessibility profiles, and locale profiles;
- ActivityEvents, CommandInvocations, WorkControlObservations, SpatialLayoutObservations, automation outcome scorecards, feedback records, and Product Truth decisions;
- Project Memory items only when they are authorized, fresh, and scoped for the current purpose.

Preference learning may create:

- `PreferenceItem` records;
- `PreferenceObservation` records;
- `AdaptiveInterfaceProfile` projections;
- `PreferenceSuggestion` review items;
- `PreferenceExplanation` references;
- `PreferenceConflict` and `PreferenceInvalidation` records.

It must not own canonical mutations for documents, sources, claims, citations, publications, approvals, support access, memory, analytics, automations, Project policy, or billing. Owning services enforce their own authorization, expected versions, validation, ActivityEvents, audit, preflight, and approval boundaries.

## Processing chain

```text
interaction, correction, setting change, or outcome observation
-> classify data class, surface, risk, scope, and consent basis
-> minimize signal to safe refs, labels, hashes, counts, and reason codes
-> evaluate Organization and Project PreferencePolicy
-> decide ignore, session-only, explicit preference, suggestion, observation, conflict, or invalidation
-> reauthorize referenced Project resources
-> create or update PreferenceItem, PreferenceObservation, or PreferenceSuggestion
-> update AdaptiveInterfaceProfile projection where allowed
-> expose explanation and correction controls
-> invalidate affected WorkPackets, Worksets, Focus digests, commands, notifications, context packs, and model-context assemblies
```

Model-generated preference summaries can only describe already-classified signals. Models do not decide authorization, policy eligibility, approval class, retention, or whether a learned preference may be applied.

## Core records

### PreferencePolicy

Representative fields:

```text
preference_policy_id
organization_id
project_id
policy_version
allowed_scopes
allowed_signal_classes
allowed_surfaces
default_adaptation_mode
ai_surface_choice_policy
requires_suggestion_before_use
requires_admin_control
max_retention_seconds
export_policy
model_context_policy
support_diagnostic_policy
protected_inference_policy
updated_at
```

PreferencePolicy is derived from Organization policy, Project policy, feature flags, data classification, consent, residency, retention, provider policy, and security posture.

### PreferenceItem

Representative fields:

```text
preference_item_id
organization_id
project_id
user_id
scope
surface
preference_kind
statement
source_class
source_refs
confidence_class
status
authority
sensitivity
policy_version_hash
valid_from
valid_until
last_used_at
created_at
updated_at
```

`statement` is a concise behavior preference such as "default document patches to compact rationale" or "prefer source maintenance Workset after source imports." It is not a raw transcript, prompt, document body, source body, or hidden reasoning trace.

AI-surface choice preferences record explicit user or administrator choices for Chat assistance, proactive suggestions, model-context personalization, Workspace Agent exposure where applicable, native companion behavior, browser extension behavior, notification summaries, automation recommendations, and import or migration review state. They are not marketing preferences, engagement levers, or a reason to re-enable disabled behavior.

### PreferenceObservation

Representative fields:

```text
preference_observation_id
organization_id
project_id
user_id
surface
signal_kind
target_ref
safe_label
reason_code
result_state
outcome_ref
weight_class
policy_version_hash
created_at
expires_at
```

Observation kinds include `correction`, `dismissal`, `accepted_default`, `rejected_default`, `manual_override`, `shortcut_changed`, `template_selected`, `workset_restored`, `digest_marked_caught_up`, `notification_snoozed`, `recipe_dry_run_accepted`, `patch_edited`, `source_scope_adjusted`, and `style_reset`.

### AdaptiveInterfaceProfile

Representative fields:

```text
adaptive_interface_profile_id
organization_id
project_id
user_id
adaptation_mode
surface_states
active_preference_refs
disabled_preference_refs
conflict_refs
last_rebuilt_at
expires_at
```

This is a rebuildable projection for fast UI defaults. It is not a user profile for advertising, scoring, entitlement, support priority, or authorization.

### PreferenceSuggestion

Representative fields:

```text
preference_suggestion_id
organization_id
project_id
user_id
suggested_preference_item
evidence_observation_refs
affected_surfaces
risk_class
approval_class
status
action_card_id
created_at
expires_at
```

Suggestions are required when a preference would become durable, cross-surface, cross-device, Project-shared, model-context-visible, automation-affecting, or otherwise material.

### PreferenceExplanation

Representative fields:

```text
preference_explanation_id
organization_id
project_id
user_id
surface
output_ref
preference_refs
observation_refs
policy_refs
scope_summary
redaction_summary
created_at
```

Explanations connect user-visible behavior to the exact preference and policy refs that influenced it. They expose safe labels and reason categories, not private content bodies.

### PreferenceConflict

Representative fields:

```text
preference_conflict_id
organization_id
project_id
user_id
conflicting_preference_refs
affected_surface
conflict_kind
default_resolution
status
action_card_id
created_at
resolved_at
```

Conflicts route through user or policy review when two preferences materially disagree or when a user correction contradicts a locked Project or Organization instruction.

## Scope rules

- `personal-project`: default scope for learned user preferences inside one Project.
- `personal-global`: allowed only when the user explicitly promotes a preference beyond one Project.
- `project`: applies to Project-owned instructions or settings and requires Project expected versions.
- `organization`: applies to administrator policy and cannot be changed by ordinary users.
- `session`: expires with the current chat, Workset, Focus Session, run, or temporary mode.
- `device-local`: stays in device-local or local-cache policy and is not canonical Project truth.
- `accessibility-locale`: follows the accessibility and i18n contracts.
- `memory-backed`: references an authorized MemoryItem but does not replace memory authority.

Cross-scope reads require an explicit policy decision. A personal preference cannot leak a hidden Project, source, collaborator, support case, or private work pattern into another Project.

## Application rules

Low-risk automatic application is allowed for:

- command ranking and shortcut hints;
- document formatting defaults and patch display density;
- Workset layout defaults and pane density;
- Focus digest grouping and non-urgent notification batching;
- default template suggestions;
- UI density, sort, filter, and presentation preferences;
- low-risk session-level mode defaults.

Suggestion or approval is required for:

- durable preference creation from inferred signals;
- Project-shared preferences;
- model-context-visible preferences;
- AI-surface choice changes after onboarding, migration, import, browser extension install, native companion install, provider change, or Organization policy change;
- automation trigger, schedule, budget, source-scope, destination, or canary changes;
- notification channel changes beyond non-urgent batching;
- source preferences that affect retrieval or publication readiness;
- any behavior that could affect another user.

Application is prohibited for:

- authorization, membership, role, entitlement, billing, support access, provider policy, abuse policy, retention, residency, source rights, publication eligibility, evidence support, approval class, or security classification;
- hidden cross-Project profiling;
- force-enabling AI surfaces, assistants, browser routes, companion behavior, proactive suggestions, notification summaries, or personalization after a user disabled or narrowed them;
- nag-loop or preselected-control flows that steer users back to disabled AI behavior;
- protected-trait inference;
- ad targeting, lead scoring, manipulation, or support prioritization;
- making factual claims without authorized evidence.

## Model-context policy

Preference context for models is assembled through ContextPacks and follows purpose-bound minimization:

- include only relevant preference IDs, concise statements, scopes, provenance summaries, and expiry;
- exclude raw observations unless explicitly needed and policy allows a redacted summary;
- reauthorize Project, viewer, policy, MemoryItem, and data-class scope before assembly;
- label preference context separately from evidence context;
- invalidate context packs when preferences are deleted, superseded, disabled, expired, or policy-blocked.

Provider-specific memory or personalization features remain behind adapters. Research-owned PreferenceItems are the application record of behavior; provider memory cannot become the canonical preference store.

## API, SDK, CLI, and MCP exposure

Supported clients can expose minimized resources for:

- current adaptation mode;
- visible PreferenceItems;
- PreferenceSuggestions and ActionCards;
- PreferenceExplanations for a user-visible output or recommendation;
- reset, disable, forget, export, and import review operations;
- effective PreferencePolicy summaries;
- stable errors for preference disabled, policy managed, scope blocked, stale preference, preference conflict, export prohibited, and model context prohibited.

Representative route families:

- `GET /v1/projects/{project_id}/preferences`
- `POST /v1/projects/{project_id}/preferences/{preference_id}/disable`
- `POST /v1/projects/{project_id}/preferences/{preference_id}/forget`
- `GET /v1/projects/{project_id}/preference-suggestions`
- `POST /v1/projects/{project_id}/preference-suggestions/{suggestion_id}/accept`
- `POST /v1/projects/{project_id}/preference-suggestions/{suggestion_id}/reject`
- `GET /v1/projects/{project_id}/preference-explanations/{output_ref}`

Mutations require authorization, expected versions, idempotency keys where material, ActivityEvents, and audit events where policy requires.

## Events and Activity

Preference event families include:

- `preference.item_created`
- `preference.item_updated`
- `preference.item_disabled`
- `preference.item_forgotten`
- `preference.observation_recorded`
- `preference.suggestion_created`
- `preference.suggestion_resolved`
- `preference.explanation_created`
- `preference.conflict_created`
- `preference.conflict_resolved`
- `preference.profile_rebuilt`
- `preference.policy_updated`
- `preference.invalidated`

External webhook projections expose only authorized metadata, surface, scope, preference kind, status, reason category, safe refs where allowed, and redacted summaries. They cannot expose raw source text, private document bodies, prompts, hidden reasoning, connector payloads, credentials, private URLs, screenshots, clipboard contents, browser history, operating-system state, or protected-trait inferences.

## Invalidation

Adaptive profiles and preference-derived context invalidate on:

- Project membership, role, policy, retention, residency, provider, support, entitlement, or feature-flag change;
- preference edit, disable, forget, expiry, conflict, import, export, or scope change;
- Project instruction, source preference, model policy, notification policy, shortcut binding, Workset, Focus State, or accessibility/locale profile change;
- MemoryItem deletion, supersession, lock, or policy change;
- user correction, repeated dismissal, accepted outcome, or rejected suggestion that materially changes confidence;
- evidence, citation, source, document, publication, automation, abuse, or approval state that blocks a suggested behavior.

Invalidation never rewrites historical audit records beyond governed privacy and retention workflows. It does prevent stale preferences from entering new model context or UI defaults.

## Security and privacy rules

- Authorization runs before preference state is read or applied.
- Preference records are Project-scoped unless explicitly promoted.
- Preference observations store safe refs, labels, hashes, counts, reason codes, and outcome refs rather than content bodies.
- Sensitive categories and protected-trait inferences are prohibited unless a separate legal/compliance contract explicitly defines a required accessibility or policy use case.
- Support diagnostics show preference metadata only when policy allows and never include raw user instructions, private content, or raw interaction history.
- Preference learning cannot access browser history, screenshots, clipboard contents, operating-system state, raw provider traces, hidden reasoning, or private connector payloads.
- Preference exports label data classes and must exclude another user's private preferences.

## Tests

Required coverage:

- PreferencePolicy scope and data-class selection;
- PreferenceItem creation, edit, disable, forget, reset, export, and import review;
- PreferenceObservation minimization for corrections, dismissals, accepted outcomes, Worksets, Focus, notifications, commands, and automation;
- suggestion-before-use thresholds and ActionCard routing;
- explanation generation with redacted source signals;
- cross-Project isolation and explicit promotion checks;
- model context assembly and invalidation;
- provider adapter isolation so provider memory cannot become canonical preference authority;
- protected-trait inference rejection;
- support diagnostic redaction and webhook minimization;
- accessibility, keyboard, screen-reader, and reduced-motion controls in the Preference Center;
- AI-surface choice preservation across onboarding, import, migration, browser extension install, native companion install, provider change, policy-managed mode, disable, reset, and export where policy allows;
- performance tests for Project open, command search, Workset restore, Focus Digest, and Chat context assembly with many preferences.

## Launch gates

Adaptive preference learning is production-ready only when:

- `PREF-001` and `PREF-002` pass implementation and conformance tests;
- PreferenceItems, observations, suggestions, explanations, conflicts, and profiles are proved to be governed projections, not evidence, memory, authorization, analytics, or model-training authority;
- every model-context use of preferences is minimized, scoped, visible, and invalidated on deletion or policy change;
- users can inspect, correct, disable, reset, and export preferences where policy allows;
- users can find and preserve explicit AI-surface choices, and migration or import cannot silently re-enable disabled AI behavior or force a browser, assistant, companion, notification, or provider path;
- Project, Organization, personal, session, device-local, accessibility, locale, and memory-backed scopes are distinct in UI and API;
- support, analytics, webhooks, SDK, CLI, and MCP views are content-minimized;
- release evidence includes privacy, security, accessibility, cross-device, performance, wrong-inference correction, reset, import/export, and policy-managed behavior validation.

## Documentation update rule

Changes to PreferencePolicy, PreferenceItem, PreferenceObservation, AdaptiveInterfaceProfile, PreferenceSuggestion, PreferenceExplanation, PreferenceConflict, model-context use, APIs, events, invalidation, or export/import behavior must update:

- [`../01-product/adaptive-personalization-and-preference-controls.md`](../01-product/adaptive-personalization-and-preference-controls.md)
- [`project-operating-layer-control-plane.md`](project-operating-layer-control-plane.md)
- [`command-action-routing-and-shortcuts.md`](command-action-routing-and-shortcuts.md)
- [`spatial-workbench-layout-and-worksets.md`](spatial-workbench-layout-and-worksets.md)
- [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md)
- [`automation-outcome-evaluation-and-adaptive-routing.md`](automation-outcome-evaluation-and-adaptive-routing.md)
- [`product-analytics-feedback-and-experimentation.md`](product-analytics-feedback-and-experimentation.md)
- [`context-packs-and-agent-handoff.md`](context-packs-and-agent-handoff.md)
- [`../03-ai/project-memory.md`](../03-ai/project-memory.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
