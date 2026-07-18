# Privacy and compliance operations

Research handles user-authored documents, connected workspace data, repositories, communications, media, and generated analysis. Privacy controls must therefore be part of product architecture and daily operations rather than a policy added after launch.

This contract defines engineering and operational requirements. It does not substitute for jurisdiction-specific legal advice.

Customer-visible controls for retention, provider policy, abuse policy, support access, public sharing, exports, usage, and Project administration are surfaced through [`../01-product/project-settings-and-administration.md`](../01-product/project-settings-and-administration.md) where policy allows.
Collaboration metadata such as comments, mentions, assignments, review requests, decisions, reviewer identity, and presence is governed by [`../01-product/collaboration-review-and-decision-workflows.md`](../01-product/collaboration-review-and-decision-workflows.md) and requires its own retention, export, redaction, and public-sharing policy.

## Data inventory

Every stored or transmitted data class has an owner and record containing:

- purpose and product capability;
- source and collection method;
- tenant and subject relationships;
- classification and sensitivity;
- canonical or derived status;
- storage systems and regions;
- processors and subprocessors;
- encryption and key ownership;
- retention and deletion rules;
- export and subject-request behavior;
- analytics, support, evaluation, and model-use restrictions.

Unknown data flows are launch blockers. System diagrams and the processing inventory are updated together with implementation changes.

## Purpose limitation and minimization

The application collects and exposes only the data required for the enabled capability. Connector scopes, source selection, model context, support diagnostics, analytics, and exports are minimized independently.

Access to one connected system does not authorize broad indexing, publication, training, analytics, or unrelated tool actions. New secondary uses require an explicit product, policy, and customer-communication review.

## Customer controls

Authorized customers can:

- inspect connected accounts and granted scopes;
- see source status, versions, derived artifacts, and sharing state;
- inspect device sessions, local-cache categories, offline packet state, local queue status, storage-use summaries, sync conflicts, and clear-cache or sign-out effects where policy allows;
- inspect native companion installs, browser extension state, Project grants, active-tab capture state, selected-context capture state, share/import targets, file-watch grants, notification bindings, deep-link state, blocked captures, local companion queues, revocation, pause, clear-local-state controls, and disabled reasons where policy allows;
- inspect, correct, reset, export, disable, or narrow adaptive preferences, PreferenceSuggestions, explanation history, model-context inclusion, and policy-managed personalization controls where policy allows;
- inspect and update AccessibilityProfile, LocaleProfile, language and direction metadata, and accessible-output validation state where policy allows;
- exclude, archive, revoke, export, and delete supported data;
- configure retention and publication policy where entitled;
- review Project members, service accounts, and public links;
- inspect and govern collaboration records such as comments, assignments, review requests, decision records, and presence retention where policy allows;
- understand which AI and processing providers may receive data;
- review SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, revocations, and support audit exports where policy allows;
- inspect AbuseDecisions, limits, review state, appeal state, false-positive outcomes, and enforcement state where policy allows;
- request a portable Project export;
- inspect effective Project settings and inherited policy where allowed;
- receive confirmation and status for deletion or privacy requests.

Controls use plain language and disclose meaningful consequences. Dark patterns and ambiguous consent are prohibited.

## Data-subject and customer requests

The operating process supports access, export, correction, deletion, restriction, and objection requests as applicable. Each request is authenticated, scoped, tracked, and completed within the governing deadline.

The system maps a request through identities, organizations, Projects, sources, source versions, documents, publications, memory, messages, model metadata, device continuity records, local cache manifests, offline draft refs, offline queue records, sync attempts, sync conflicts, native companion installs, permission grants, context packets, capture intents, file-watch grants, command bridges, notification bindings, companion queues, PreferenceItems, PreferenceObservations, AdaptiveInterfaceProfiles, PreferenceSuggestions, PreferenceExplanations, PreferenceConflicts, preference exports, preference resets, accessibility profiles, locale profiles, language and direction metadata, translation artifacts, accessible-output manifests, abuse records, exports, support records, billing records, backups, and derived indexes. Legal holds and required financial or security records are separated from general product content and access-restricted.

A deletion request is not complete when a primary row is removed. It must propagate to objects, chunks, embeddings, indexes, caches, derived files, generated exports, connector tokens, and pending workflows. Backups follow documented expiry and restoration-suppression procedures.

## Retention

Retention is defined by data class, product state, customer policy, contract, and legal obligation. Defaults favor minimization. Expired data is deleted through observable, retryable workflows with completion evidence.

Temporary uploads, parser workspaces, provider files, sandbox disks, stream buffers, support bundles, and debug artifacts have short explicit lifetimes. They do not inherit indefinite Project retention accidentally.

## AI provider handling

Every model, search, transcription, OCR, parsing, evaluation, and research provider has a profile covering:

- data categories allowed;
- retention and deletion behavior;
- training and human-review policy;
- processing and storage regions;
- subprocessors;
- encryption and access controls;
- contractual and enterprise settings;
- incident notification;
- prohibited Project classifications.

Provider routing filters by Project policy and data classification before considering quality, latency, or price. A provider-policy change can disable or migrate a route without silently weakening customer commitments.

## Public and shared output

Public publication and external sharing perform separate checks for authorization, confidential material, personal data, source rights, unsupported claims, private comments, reviewer identity, internal objections, redaction, attribution, robots or indexing policy, link lifetime, takedown, AbusePolicy, content-safety, provider-policy, and publication-spam risk.

Removing a public link withdraws delivery and search exposure under product control, while preserving an access-restricted audit record. Historical private revisions do not become public merely because a later revision is published.

## Analytics and evaluation

General analytics receive allowlisted event names and classified metadata only. Raw source text, prompts, generated documents, citations, credentials, connector payloads, private URLs, local draft bodies, offline packet contents, preference explanation bodies that reveal private context, and model-context preference summaries are excluded.

Session replay is disabled or fully masked on sensitive surfaces. Evaluation data derived from customer activity requires an approved purpose, minimization, access control, retention period, and deletion path. Feedback does not automatically authorize model training. Device continuity telemetry can record capability classes, storage classes, queue counts, sync outcomes, conflict kinds, and disabled reason codes, but not local content bodies, raw user-agent strings, screenshots, clipboard contents, browser history, or operating-system activity unless a separately approved diagnostic workflow governs it. Accessibility and locale telemetry cannot record disability status, assistive-technology identity, raw source text, raw prompts, private document bodies, private comments, credentials, or full connector payloads.
Native companion telemetry can record surface type, install version class, grant state, capture mode, blocked reason, queue count, sync result, deep-link result, shortcut conflict class, update state, and revocation reason. It cannot record selected text, active-tab contents, local file contents, raw file paths where redaction is required, private raw URLs, browser history, screenshots, clipboard contents, keystrokes, camera, microphone, OS window state, raw prompts, private document bodies, credentials, connector payloads, hidden reasoning, or raw provider traces.
Adaptive preference telemetry can record preference class, scope, adaptation mode, explanation opened, suggestion outcome, correction class, reset/export use, policy-managed state, and invalidation reason. It cannot record raw source text, prompts, private document bodies, citations, private comments, credentials, connector payloads, private URLs, screenshots, clipboard contents, browser history, operating-system activity, hidden reasoning, support notes, or raw provider traces.

## Support access

Support begins with tenant-safe metadata, health indicators, identifiers, and sanitized diagnostics. Content access requires a case, customer or policy authorization, stated purpose, narrow scope, time limit, and immutable audit record.

SupportDiagnosticBundles are the default support handoff. They contain case refs, Project and policy versions, HealthFindings, HealthLineageEdge refs, suspected-cause summaries, counterevidence refs, unknown-state summaries, false-cause classifications, diagnostic-waste classes, Operation refs, Activity refs, telemetry aggregates, provider-route summaries, feature-flag refs, error classes, queue state, redaction summaries, retention class, and explicit absence flags for raw source text, prompts, completions, tool payloads, document bodies, connector payloads, credentials, screenshots, clipboard content, browser history, operating-system state, raw OpenTelemetry span bodies, raw GenAI trace content, hidden reasoning, and unredacted support notes.

SupportAccessRequests are required before private content, diagnostic export, repair command, or break-glass access. They record purpose, case, data class, resource scope, requested action, expected start, duration, approver, support operator, support-manager approval where required, residency and retention policy, and customer-visible risk summary.

SupportAccessSessions are time-bounded, revocable, step-up authenticated, read-only by default, and audited per resource and action. Session records remain visible to authorized customers according to contract and legal policy. They cannot impersonate a user silently, export arbitrary content, approve their own access, widen scope, mutate Project state, change billing, publish, delete, run arbitrary SQL, or route private content into model evaluation without a separate approved policy path.

Break-glass access is separately approved, monitored, shorter-lived, and reviewed. It requires incident linkage, immutable audit, post-session review, and customer-visible evidence where policy allows. Support tooling cannot bypass tenant policy without leaving evidence.

## Security and breach response

Privacy incidents include unauthorized access, cross-tenant exposure, excessive connector scope, unintended public publication, provider-policy violation, source-change maintenance private-content leakage, hidden maintenance rewrite, stale public output left unblocked, local-cache or offline-packet leakage, offline draft exposure, sync conflict leakage, native companion ambient capture, companion grant leakage, active-tab capture without user invocation, file-watch scope escape, companion telemetry that captures private content, hidden-profile creation, cross-Project preference leakage, preference telemetry that captures private content, stale preference use after revocation, abuse telemetry that captures private content, missing deletion, analytics leakage, stale or overbroad support access, support diagnostic leakage, and restoration of data that should remain deleted.

Incident response preserves evidence, stops processing, determines affected data and subjects, applies contractual and legal notification rules, and tracks remediation. Customer communication distinguishes confirmed facts, ongoing investigation, and protective actions.

## International processing

Data-residency and transfer requirements are policy inputs to storage, provider routing, translation, OCR, transcription, language detection, locale rendering, logs, backups, support, and disaster recovery. Region selection in the user interface is not sufficient if subprocessors, observability, translation providers, or support copy data elsewhere.

Localization does not change privacy meaning. Consent, retention, export, deletion, and public-sharing controls remain understandable and functional across supported languages and right-to-left layouts.

## Assessments and evidence

High-risk changes receive a documented privacy assessment covering purpose, necessity, data flow, subjects, risks, mitigations, residual risk, providers, retention, security, and user controls.

Release evidence includes the current inventory, processor review, data-flow changes, retention tests, request-flow tests, deletion propagation, public-sharing tests, analytics inspection, DeviceCapabilityProfile minimization, LocalCacheManifest minimization, OfflineDraft and OfflineActionQueueItem redaction, SyncConflict redaction, clear-cache and sign-out evidence, storage-eviction handling, NativeCompanionInstall minimization, NativePermissionGrant revocation, NativeContextPacket redaction, NativeFileWatchGrant path-boundary tests, companion queue minimization, active-tab user-gesture evidence, no-ambient-capture tests, PreferenceObservation minimization, PreferenceExplanation redaction, Preference Center correction/reset/export evidence, model-context preference minimization, cross-Project preference isolation, AbuseSignal and AbuseDecision minimization, AbuseAppeal and false-positive evidence, AccessibilityProfile and LocaleProfile minimization, LanguageDirectionMetadata review, TranslationArtifact lineage, AccessibleOutputManifest evidence, SupportDiagnosticBundle minimization tests, SupportAccessRequest and SupportAccessSession audits, break-glass review evidence, and outstanding accepted risks.
