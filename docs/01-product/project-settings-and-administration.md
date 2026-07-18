# Project settings and administration

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Project settings are the user-visible control surface for policy, administration, usage, and operating defaults. They do not replace Organization policy, domain contracts, or security controls. They make inherited policy and Project-level choices understandable, auditable, and reversible where possible.

This contract governs Project settings, Organization-inherited defaults as shown inside a Project, member-visible policy, support grants, abuse policy visibility, trust-safety review state, usage and budget visibility, notification preferences, Focus Session and Resume Digest preferences, adaptive personalization and preference controls, device continuity and local-cache controls, native companion and browser extension grants, automation defaults, delegated-trust grants, approval-load budgets, source policy, model/tool policy, publication controls, exports, and administrative change history.

This document governs `ADMIN-001`, `ADMIN-002`, `SUPPORT-001`, `SUPPORT-002`, `ABUSE-001`, and `ABUSE-002`.

## Sources reviewed

Official references:

- [Google Cloud Access Approval](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- [Microsoft Purview Customer Lockbox](https://learn.microsoft.com/en-us/purview/customer-lockbox-requests)
- [Microsoft Azure Customer Lockbox](https://learn.microsoft.com/en-us/azure/security/fundamentals/customer-lockbox-overview)
- [Slack audit logs](https://slack.com/help/articles/360000394286-Audit-logs-in-Slack)
- [GitHub organization audit log](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)
- [GitHub audit log streaming](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)
- [OpenTelemetry semantic conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)

Public user-opinion and practitioner signals:

- [SaaS login-history access discussion](https://www.reddit.com/r/sysadmin/comments/sf29jz/no_login_history_without_a_warrant/)
- [Hacker News account-recovery and customer-evidence discussion](https://news.ycombinator.com/item?id=47189749)
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for browser-choice, AI-interface routing, forced-action, preselection, nagging, and migration-reset patterns that can make control surfaces misleading.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai) and [Pew Research Center 2026 AI attitude summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/) for directional trust, accuracy, privacy, security, and control concerns around AI tools and agents.

These user-opinion sources are directional signals only. They show that customers expect useful access evidence, support escalation paths, and understandable control over AI surfaces, but they are not statistical proof and must not become customer-facing claims.

## Product purpose

Settings should answer:

- What policy applies to this Project?
- Which settings are inherited from the Organization, and which are Project overrides?
- Who can change each setting?
- What source, model, tool, publication, retention, notification, automation, and support behavior will change?
- What will happen to in-flight work?
- What approval, preflight, or rollback path is required?
- What usage, budget, quota, or entitlement limit is currently active?
- Which AI surfaces are enabled, disabled, policy-managed, or unavailable, and why?
- Will onboarding, import, migration, native companion install, browser extension install, provider change, notification summaries, or automation recommendations alter an explicit user choice?

The user should not need to infer policy from failed actions, hidden admin state, billing emails, or support interactions.

## Settings areas

Initial Project settings are grouped by job, not by internal package:

| Area | User-facing controls |
|---|---|
| Project profile | name, description, icon, default language, timezone, visibility label |
| Instructions | Project instructions, terminology, writing preferences, non-goals, durable decisions |
| Members and roles | Project members, role view, invite state, service accounts where permitted |
| Sources and evidence | allowed source types, default source scope, citation standard, stale-source policy |
| Models and tools | Auto policy view, allowed model roles, tool availability, provider restrictions |
| Automations | default budget class, quiet hours, approval policy, delegated-trust grants, approval-load budgets, lifecycle defaults, registry link |
| Notifications and focus | channel preferences, digest windows, Focus Session defaults, Resume Digest preferences, high-priority overrides, webhook settings |
| Personalization | adaptation mode, Preference Center, preference explanations, correction history, scope labels, model-context inclusion, reset, export, and policy-managed controls |
| AI surface choice | Chat assistance, Workspace Agent exposure where applicable, proactive suggestions, notification summaries, automation recommendations, companion or extension activation, browser and default-route preservation, opt-in, disable, reset, export where policy allows, policy-managed state, and migration or import review |
| Devices and local data | signed-in devices, installed-app state, local-cache categories, offline packet policy, local queue state, storage-use summary, clear-cache controls, and sync conflict links |
| Native companion | companion installs, browser extensions, active Project grants, active-tab capture, selected-text capture, OS share/import targets, file-watch grants, global shortcuts, tray/menu state, notification deep links, local companion queue, revoke, pause, clear, and disabled reason controls |
| Publishing and exports | public/private projection policy, publication approval, export formats, takedown owner |
| Data governance | retention, deletion, residency, provider policy, support access, legal hold visibility |
| Abuse prevention and trust safety | effective AbusePolicy, API and automation limits, provider-policy blocks, review queue state, appeal state, suspension state, emergency controls, and false-positive outcomes |
| Usage and billing | current plan, entitlement state, quotas, budget alerts, metering summary, anomaly links |
| Developer access | API keys, service accounts, webhooks, MCP exposure, SDK/CLI diagnostics where allowed |

Deep controls can link to specialized surfaces, but settings remains the place where the current effective policy is visible.

## Inheritance model

Every setting is one of:

- Organization-enforced;
- Organization default with Project override allowed;
- Project-owned;
- user preference;
- system-derived;
- unavailable because entitlement, region, connector, or policy does not allow it.

The UI must show inherited values and override eligibility. A disabled control explains the governing policy and the owner who can change it.

AI-surface choice state is part of the effective policy shown in settings. A disabled or narrowed AI surface cannot be treated as an engagement preference to optimize away, and a recommendation cannot become a setting change without explicit user action or administrator policy.

## Change behavior

Material setting changes create a versioned setting change record with:

- actor;
- before and after values;
- effective policy source;
- affected resources and workflows;
- preflight result;
- approval class;
- expected version;
- rollback or forward-fix path where applicable;
- activity and audit links.

Low-risk display changes can apply immediately. High-risk changes use the intent, preflight, and approval policy in [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md) and [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md). Delegated-trust grants, approval batches, and approval-load thresholds use [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md) and [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md).

Material AI-surface choice changes require a visible actor, before/after state, affected surfaces, policy source, and review path. Onboarding, import, migration, upgrade, plan change, browser extension install, native companion install, provider change, or Organization policy change must not silently re-enable disabled AI behavior, widen model-context use, force a browser path, force an assistant path, force a companion path, or hide policy-managed state.

## In-flight work

Settings changes do not silently rewrite history or mutate already-accepted work. The system distinguishes:

- applies immediately to new operations;
- applies at next scheduled run;
- requires restarting an in-flight operation;
- invalidates a context pack, source scope, publication candidate, automation approval, or export;
- blocks until affected owners approve.

Long-running work records the setting and policy snapshot it used. If the setting changes mid-run, the run either continues under its frozen snapshot, pauses for review, or starts a linked successor run according to the governing contract.

## Usage and budget visibility

Project settings show current usage without becoming the billing authority:

- active plan and entitlement summary;
- quota and budget state;
- current period usage by service class;
- recurring automation projection;
- unusual cost or usage events;
- disabled or degraded capabilities caused by limits;
- link to entitlement and metering details governed by [`../02-architecture/entitlements-metering-and-billing.md`](../02-architecture/entitlements-metering-and-billing.md).

Usage views are customer-facing summaries of authoritative usage records, not editable counters.

## Support and diagnostics

Support access is visible and revocable according to policy. Project settings show:

- active support grants;
- pending support requests;
- scope, purpose, expiry, and approving actor;
- metadata-first diagnostics available without private content;
- audit history for support access.

Support settings follow [`../05-security/data-governance.md`](../05-security/data-governance.md), [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md), and [`../02-architecture/tenancy-authorization-and-capabilities.md`](../02-architecture/tenancy-authorization-and-capabilities.md).

## Support Operations Center

The Support Operations Center is the Project settings area where authorized owners inspect support cases, support requests, SupportDiagnosticBundles, SupportAccessRequests, SupportAccessSessions, grants, revocations, and exported support audit evidence. It is customer-facing first and operator-facing second: the customer can see the same safe metadata that support uses to diagnose ordinary issues.

The surface has these states:

- no support access configured;
- metadata-only diagnostics available;
- SupportDiagnosticBundle created and waiting for customer review;
- SupportAccessRequest pending owner decision;
- SupportAccessSession approved, active, revoked, expired, denied, or break-glass review pending;
- support case resolved with retained audit evidence.

### SupportDiagnosticBundle

A SupportDiagnosticBundle is a customer-reviewable diagnostic package assembled from authorized Project records. It contains:

- case or request ref;
- Project, actor, policy, membership, support-grant, entitlement, usage, residency, and retention versions;
- relevant Operation, ActivityEvent, HealthFinding, RepairRun, Scenario, ReversalRecord, automation debug, webhook, and incident refs;
- service-class latency, queue, budget, feature-flag, provider-route, connector, and release-evidence summaries;
- redaction summary, data classes, retention expiry, export eligibility, and reviewer;
- explicit statement of whether private source text, prompt bodies, document bodies, connector payloads, credentials, screenshots, clipboard content, hidden reasoning, or unredacted support notes are absent.

The default bundle is metadata-only. A bundle that needs private content becomes a SupportAccessRequest and cannot be opened by support until the governing approval path succeeds.

### SupportAccessRequest and SupportAccessSession

A SupportAccessRequest asks a Project or Organization approver for narrowly scoped support access. It records:

- support case, requester, support operator, manager approval where required, and customer approver;
- purpose, requested data classes, resource scope, allowed actions, expected start, duration, expiry, and emergency class;
- whether access is metadata-only, private-content read, diagnostic export, repair command, or break-glass;
- affected residency, retention, provider, support-plan, and legal-hold policy;
- customer-facing risk summary, redaction summary, and expected audit output.

A SupportAccessSession is created only after approval or an explicitly governed break-glass path. Sessions are time-bounded, revocable, read-only by default, step-up authenticated, and tied to immutable audit events. They cannot silently impersonate a user, export arbitrary content, approve their own access, widen scope, mutate Project state, change billing, publish, delete, run arbitrary SQL, or feed private content into model evaluation.

### Customer UX

The Support Operations Center must let authorized customers:

- review and approve, deny, narrow, revoke, or let SupportAccessRequests expire;
- inspect active and historical SupportAccessSessions;
- download or stream support audit evidence where policy allows;
- open the SupportDiagnosticBundle that explains what support can see;
- see why a request needs private content when metadata-first diagnostics were insufficient;
- convert repeated support findings into Product Truth signals, ActionCards, repair playbooks, or documentation defects without exposing private content.

Support status also appears in Activity, Project Health, Work Packets, Command Center, audit exports, release evidence, and incident reviews.

## UX rules

- Settings pages show effective policy first, then editable controls.
- Dangerous changes require a preview of affected resources and workflows.
- Policy diffs are understandable without exposing raw private content.
- Empty, disabled, inherited, degraded, and pending states have explicit reasons.
- Saved changes appear in Activity.
- Advanced settings are searchable.
- AI-surface controls use direct state labels, accessible disabled reasons, dismissible recommendations, and no nag loops or preselected reversals.
- Keyboard, screen-reader, responsive, and localization behavior matches primary surfaces.

## Non-goals

- Do not make Project settings a second source of truth for entitlement, identity, evidence, publication, memory, or source state.
- Do not let Project owners override Organization-enforced security, residency, retention, billing, or provider policy.
- Do not hide policy failures behind generic disabled controls.
- Do not apply settings changes retroactively to immutable source versions, document revisions, approval receipts, publication snapshots, or release evidence.
- Do not expose raw private content in diagnostics or usage summaries.
- Do not force a browser, default assistant, companion, provider, notification-summary, proactive-suggestion, or automation-recommendation path through settings, onboarding, import, migration, upgrade, plan change, or install flows.
- Do not use nag loops, trick wording, preselected controls, or migration resets to reverse a disabled or narrowed AI-surface choice.

## Acceptance criteria

Project settings and administration are production-ready only when:

- `ADMIN-001` and `ADMIN-002` are implemented and tested;
- effective inherited and Project-level policy can be inspected by authorized users;
- every material settings change emits audit and activity events;
- high-risk changes run deterministic preflight and require the configured approval class;
- in-flight work behavior is explicit and tested;
- usage summaries reconcile to authoritative metering records;
- support grants are time-bounded, metadata-first, revocable, and audited;
- SupportDiagnosticBundles are customer-reviewable, content-minimized, expiring, exportable where policy allows, and tied to case, Activity, Health, Operation, audit, and release-evidence refs;
- SupportAccessRequests and SupportAccessSessions enforce explicit scope, purpose, expiry, step-up, approval, revocation, audit, and break-glass review without support impersonation or hidden content access;
- abuse limits, provider-policy blocks, review queues, appeals, suspensions, emergency controls, and false-positive outcomes are visible where policy allows and do not expose private source content;
- delegated-trust grants and approval-load budgets are visible, searchable, revocable, and audited;
- device sessions, local-cache categories, offline packet policy, local queue state, storage-use summaries, clear-cache controls, sign-out effects, and sync conflicts are visible where policy allows and do not expose private local content;
- native companion installs, browser extensions, active-tab grants, selected-context capture, share/import targets, file-watch grants, global shortcuts, notification deep links, local companion queues, blocked captures, revocation, pause, emergency disable, and clear-local-state controls are visible where policy allows and do not expose prohibited local, browser, or OS content;
- adaptive preference controls are visible, searchable, correctable, resettable, exportable where policy allows, and labeled when Organization policy manages them;
- AI-surface choice controls for Chat assistance, Workspace Agent exposure where applicable, proactive suggestions, notification summaries, automation recommendations, companion behavior, browser extension behavior, model-context personalization, adaptive defaults, and provider routing are findable, reversible, sticky across migration and import where supported, policy-explainable when locked, exportable where policy allows, and accessible through keyboard and screen-reader journeys;
- onboarding, import, migration, upgrade, plan change, browser extension install, native companion install, provider change, and Organization policy change preserve disabled or narrowed AI-surface choices unless an explicit user action or administrator policy changes them;
- disabled controls explain the governing policy and owner;
- accessibility and localization checks cover settings forms, support bundle review, access request decisions, session revocation, diffs, warnings, and confirmation flows.

## Documentation update rule

Changes to Project settings or administration behavior must update:

- [`project-workspace.md`](project-workspace.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`delegated-trust-and-approval-load.md`](delegated-trust-and-approval-load.md)
- [`notifications-and-scheduled-automation.md`](notifications-and-scheduled-automation.md)
- [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md)
- [`adaptive-personalization-and-preference-controls.md`](adaptive-personalization-and-preference-controls.md)
- [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md)
- [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md)
- [`../02-architecture/tenancy-authorization-and-capabilities.md`](../02-architecture/tenancy-authorization-and-capabilities.md)
- [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md)
- [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md)
- [`../02-architecture/adaptive-preference-learning-and-interface-policy.md`](../02-architecture/adaptive-preference-learning-and-interface-policy.md)
- [`../02-architecture/entitlements-metering-and-billing.md`](../02-architecture/entitlements-metering-and-billing.md)
- [`../02-architecture/delegated-trust-policy-and-approval-engine.md`](../02-architecture/delegated-trust-policy-and-approval-engine.md)
- [`../02-architecture/abuse-prevention-policy-and-enforcement.md`](../02-architecture/abuse-prevention-policy-and-enforcement.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../05-security/privacy-and-compliance-operations.md`](../05-security/privacy-and-compliance-operations.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
