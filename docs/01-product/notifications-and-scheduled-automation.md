# Notifications and scheduled automation

Notifications and automation keep Research useful after the first session. They must respect source rights, user attention, privacy, budgets, and quiet hours.

Focus Sessions, Resume Digests, attention ranking, caught-up checkpoints, and notification suppression are governed by [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md). Mobile push, installed-app state, background sync, reconnect, and local queue behavior are governed by [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md). Native companion notification actions, tray/menu status, and deep links are governed by [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md). Notifications remain delivery records; they are not the authority for Project state.

## Notification types

| Type | Example |
|---|---|
| Source | source parsed, parse failed, source changed, permission lost |
| Evidence | claim became stale, contradiction found, unsupported claim blocking publication |
| Document | patch proposed, review requested, export ready, merge conflict |
| Collaboration | mentioned, assigned, review requested, decision accepted, thread became stale |
| Research run | plan ready, approval needed, run paused, budget threshold hit |
| Focus and resume | digest ready, focus session ended, suppressed item requires attention |
| Device continuity | local queue blocked, sync conflict needs review, offline packet expired, device capability changed |
| Native companion | capture blocked, companion grant expired, file-watch paused, extension update required, deep-link authorization failed |
| Publication | snapshot ready, takedown requested, public link withdrawn |
| System | connector revoked, quota near limit, restore complete, incident update |

## Delivery channels

Initial channels:

- in-app inbox;
- email digest;
- webhook for developer accounts.

Future channels:

- Slack or Teams connector;
- mobile push;
- native companion tray/menu and desktop notification actions where policy allows;
- scheduled reports;
- external ticketing systems.

Every channel has opt-in, unsubscribe, frequency, and policy controls.
Push, native companion, deep-link, and background-sync behavior is capability-labeled. Unsupported browsers, revoked companion installs, blocked notification permissions, or installed contexts fall back to in-app status, email digest, webhook, or foreground reconnect where policy allows.
Mentions, assignments, review requests, and decision notifications are governed by [`collaboration-review-and-decision-workflows.md`](collaboration-review-and-decision-workflows.md); recipients must have access to the target before delivery.

## Scheduled automation

Scheduled automation can:

- recrawl approved web sources;
- synchronize connectors;
- refresh repository indexes;
- revalidate stale claims;
- run saved research contracts;
- prepare digests;
- check publication health;
- generate export packages.

Automation cannot silently publish, delete user sources, widen connector scopes, merge repository changes, or approve unsupported claims.

All scheduled automation is created and managed through the Project automation registry defined in [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md) and governed by [`../02-architecture/agent-development-lifecycle-and-automation-governance.md`](../02-architecture/agent-development-lifecycle-and-automation-governance.md).
Each scheduled run also follows [`intent-capture-and-prompt-friction.md`](intent-capture-and-prompt-friction.md): it records a run-specific intent, performs deterministic preflight, and creates a review queue action card when source scope, budget, notification target, publication state, connector permissions, or approval policy changes materially.

## Quiet hours and priority

Users and organizations can configure:

- quiet hours;
- digest windows;
- high-priority overrides;
- per-Project notifications;
- role-based delivery;
- webhook retry and signing policy.

Security incidents, customer-impacting publication issues, and explicit approval requests may bypass digest-only delivery according to policy.

## Notification content safety

Notification payloads minimize sensitive content. They should include:

- Project identifier;
- event type;
- required action;
- safe summary;
- Focus Session or Resume Digest grouping where applicable;
- link to the in-app review surface.

They should not include raw source text, private URLs, credentials, full prompts, generated document bodies, selected text, local file paths, browser history, screenshots, clipboard contents, or personal data unless explicitly approved for the channel.

## Auditability

Each automation and notification records:

- trigger;
- intent version and preflight summary;
- actor or system identity;
- policy used;
- recipients;
- channel;
- delivery status;
- retry state;
- suppression reason;
- Focus Session, Resume Checkpoint, or Resume Digest link where applicable;
- related run, source, claim, document, or publication.

## Launch gates

Notifications and scheduled automation require:

- idempotent scheduled jobs;
- automation lifecycle state enforcement;
- dry-run and preflight support for material recurring work;
- approval receipts for notification, connector, publication, export, or billing side effects;
- retry and dead-letter behavior;
- signed webhooks;
- quiet-hour tests;
- Focus Session suppression, high-priority override, Resume Digest grouping, and caught-up checkpoint tests;
- push, background-sync, local queue, sync-conflict, offline-expiry, unsupported-device, and reconnect notification tests;
- channel-specific privacy inspection;
- native companion notification action, deep-link authorization, revoked-grant, extension-update, and fallback tests where companion surfaces ship;
- unsubscribe and preference tests;
- budget and quota enforcement;
- operator runbooks for stuck automations.
