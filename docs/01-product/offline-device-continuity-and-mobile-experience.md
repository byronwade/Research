# Offline, device continuity, and mobile experience

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should feel reliable on desktop, tablet, mobile, browser tabs, and installed web-app contexts without pretending the entire product is local-first. Users should be able to reopen a Project, recover draft work, understand what is available on the current device, and safely resume after flaky connectivity. Canonical Sources, Claims, Documents, Activity, approvals, and publication state remain server-authoritative.

This document governs `DEVICE-001`. The architecture policy for local cache, offline queues, sync, and device capability records is governed by [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md). Optional native companion and browser extension install, grant, capture, and deep-link behavior is governed by [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md). Focus and resume behavior is governed by [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md), and cache or fast-path behavior is governed by [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md).

## Sources reviewed

Official capability references:

- [MDN offline and background operation for PWAs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Web.dev service workers](https://web.dev/learn/pwa/service-workers)
- [MDN Storage quotas and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Web.dev storage for the web](https://web.dev/articles/storage-for-the-web)
- [Microsoft Edge PWA background sync](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/background-syncs)
- [Microsoft Edge PWA offline storage](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/offline)
- [Apple Handoff overview](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html)
- [Microsoft responsive design techniques](https://learn.microsoft.com/en-us/windows/apps/design/layout/responsive-design)

Public user-opinion and practitioner signals:

- [Hacker News PWA mobile app experience discussion](https://news.ycombinator.com/item?id=41762614)
- [Hacker News successful PWA product discussion](https://news.ycombinator.com/item?id=40724774)
- [Reddit offline-first conflict discussion](https://www.reddit.com/r/programming/comments/pxkzdf/offline_first_is_not_about_having_no_internet/)
- [Hacker News local-first adoption discussion](https://news.ycombinator.com/item?id=45333021)
- [Hacker News local-first web development discussion](https://news.ycombinator.com/item?id=34857435)

The directional lesson is practical: users expect recently used work to survive flaky networks, reloads, and device switches, but browser capabilities, storage durability, background sync, install behavior, and mobile support differ by browser and operating system. Research should be offline-tolerant, capability-labeled, conflict-aware, and honest about limits.

## Product purpose

Device continuity answers:

- Can I keep reading or drafting if the network becomes unreliable?
- What works on this device, browser, viewport, and installation context?
- Which drafts, queues, cached views, and offline packets are local only?
- Which actions are waiting for reconnect, approval, or conflict review?
- What changed on another device while this device was offline?
- Which local data can I inspect, clear, export, or revoke?
- Why did a device fail to sync, lose local storage, or downgrade a feature?

Offline and device continuity are not a fourth primary surface. They are status, controls, and recovery behavior attached to Chat, Documents, Sources, Spatial Workbench, Focus, Activity, Command Center, Project settings, and API clients.

## Capability labels

Each signed-in session has a visible Device Capability Profile. The UI uses it to label what the current device can do rather than hiding platform differences.

Representative labels:

- online, degraded, reconnecting, offline, or captive-network state;
- browser tab, installed PWA, mobile browser, tablet, desktop browser, optional native companion, browser extension, or native wrapper where applicable;
- viewport class and input class, such as keyboard, touch, pointer, pen, or assistive technology;
- service worker, Cache API, IndexedDB, OPFS, persistent-storage request, push, background sync, background fetch, install, file-picker, share target, active-tab capture, selected-text capture, folder-watch, notification action, and deep-link capability support;
- local-cache status, available storage estimate, quota risk, eviction risk, last sync, queue count, draft count, and policy expiry;
- disabled reasons for features that are unavailable, unsupported, policy-blocked, not yet authorized, or unsafe on the current device.

Capability labels must be plain and actionable. They should not expose implementation jargon unless the user opens technical details.

## Continuity modes

Research uses explicit continuity modes:

| Mode | User meaning | Allowed behavior |
|---|---|---|
| `online-current` | Current server state is reachable. | Full authorized reads and eligible mutations. |
| `degraded` | Network or provider state is unreliable. | Progressive delivery, cached projections, retries, and clear degraded labels. |
| `offline-read` | The app can show an offline-safe shell or cached projections. | Read labeled cached metadata, offline packets, and local drafts where policy allows. |
| `offline-draft` | The user can create local-only draft work. | Draft edits and low-risk queued intents remain local until reauthorized. |
| `sync-pending` | Local work is waiting for reconnect or current authorization. | Queue inspection, retry, cancel, export draft, or discard. |
| `sync-conflict` | Server state changed or policy blocks automatic apply. | Conflict review with expected versions, source refs, and safe choices. |
| `unsupported` | The device cannot support a feature safely. | Explain disabled reason and offer supported alternatives. |

The product must never show offline, cached, or queued work as canonical unless the server has accepted it and the owning domain record confirms the result.

## Offline-safe work classes

### Safe by default

- loading a minimal app shell and signed-out recovery page;
- showing safe Project labels, recent Project refs, and unavailable state where policy allows;
- preserving local UI preferences, pane sizes, draft editor buffers, and unsent text;
- showing local queue status and reconnect diagnostics;
- letting the user discard local draft state.

### Allowed only with explicit Project policy

- saving recoverable local document drafts before canonical patch submission;
- keeping selected source metadata, citation locators, outlines, or reading packets for offline review;
- caching bounded Project navigation, Workset refs, Focus State refs, Resume Digest summaries, and Activity summaries;
- queueing low-risk idempotent commands that do not publish, delete, bill, write externally, widen permissions, or alter source truth;
- using push, background sync, or background fetch where the current browser supports it and policy permits it.

### Never offline-only

- publishing, unpublishing, deleting, restoring, billing, permission changes, support access, connector writes, GitHub pushes, public sharing, abuse enforcement release, or external notifications;
- creating canonical SourceVersions, Claims, EvidenceSpans, DocumentRevisions, PublicationSnapshots, approval receipts, or audit-critical records without server acceptance;
- deep research, model calls over private Project content, connector fetches, source ingestion, rights decisions, provider-policy checks, or abuse decisions that require current policy;
- silently applying a queued command after its source scope, expected version, approval class, destination, budget, or authorization has changed.

## Mobile and installed experience

Research should not treat mobile as a narrow desktop afterthought.

Required behavior:

- Chat, Documents, Sources, Activity, review queues, Command Center, Focus, and Project settings have responsive layouts for small screens and tablet widths;
- Spatial Workbench panes collapse into a clear task stack with visible context, return paths, and stale or redacted labels;
- dense evidence review has touch targets, keyboard paths, screen-reader structure, and reduced-motion alternatives;
- command search and review actions remain reachable without hover-only controls;
- install prompts appear only after the user has seen product value and understands what installation changes;
- installed contexts show local-cache, notification, background, and storage capabilities explicitly;
- browser-only contexts retain supported alternatives when installation, push, service workers, or background sync are unavailable;
- upload, source review, citation inspection, and document editing disclose when a mobile browser limits file access, background work, or storage durability.

Native wrappers, browser extensions, and OS-specific handoff APIs are adapters over Project state. They cannot become a second content store or bypass Project authorization. Companion-specific capture and file-watch behavior follows [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md).

## Cross-device handoff

Research handoff is Project-scoped. A user can move from one authorized device to another through application-owned state:

- Focus State and Resume Checkpoints identify active work;
- Worksets and pane refs identify current layout intent;
- local drafts can be exported, synced, or discarded according to policy;
- queued intents carry expected versions and idempotency;
- another device must reauthorize every referenced resource before display;
- stale, redacted, missing, deleted, unavailable, or conflict states are labeled before hydration;
- handoff links expire and are not bearer tokens.

Research does not capture OS window history, global browser history, screenshots, clipboard contents, or cross-app activity to create continuity.

## Reconnect and conflict experience

When a device reconnects, Research shows a compact sync status:

1. local drafts that can be submitted;
2. queued commands that can run after reauthorization;
3. items blocked by missing authorization, policy, quota, provider state, abuse policy, or approval;
4. conflicts caused by changed source versions, document revisions, comments, settings, Worksets, Focus State, or Project policy;
5. local data that appears lost, evicted, expired, or unreadable;
6. safe commands to retry, open conflict review, export draft text, discard local state, or contact support with a diagnostic ID.

Conflict review must show target, local base version, current server version, draft or queued effect, side-effect class, approval class, recovery path, and the reason automatic apply is blocked. Research must not use last-write-wins for overlapping document edits, source state, claims, citations, publication state, permissions, billing, support access, or external writes.

## User controls

Users and administrators can inspect and govern:

- device sessions and installed contexts;
- native companion installs, browser extensions, Project grants, active-tab invocation state, share targets, file-watch grants, notification bindings, and deep-link state where policy allows;
- last sync time, local queue count, draft count, and storage use;
- offline packet scope and expiry;
- local cache categories and clear-cache controls;
- persistent-storage request state where the browser exposes it;
- push, notification, background sync, quiet-hour, and Focus Session interactions;
- local data warnings for shared devices, ephemeral browsers, private browsing, managed browsers, and unsupported platforms;
- remote sign-out and device revocation behavior.

Local controls must explain consequences. Clearing a local cache deletes local projections and drafts on that device; it does not delete canonical Project records. Deleting canonical Project data follows server-side retention and deletion workflows.

## Privacy and security rules

- Store credentials only in approved session mechanisms, never in local drafts, IndexedDB, Cache API entries, OPFS files, service-worker state, or logs.
- Do not store private source bodies, raw prompts, private document bodies, full citations, connector payloads, hidden reasoning, private URLs, screenshots, clipboard contents, browser history, broad local file contents, or native companion payloads in local cache unless a stricter encrypted offline-data policy explicitly permits a bounded offline packet.
- Every local packet has Project, viewer, source-scope, retention, expiry, policy, and version dependencies.
- Reconnect reauthorizes local drafts, queued intents, cached projections, and handoff refs before use.
- A membership, policy, retention, rights, source, document, comment, approval, abuse, or support-access change invalidates affected local projections on the next online check.
- Offline state cannot hide required approvals, abuse blocks, provider-policy denials, destructive-risk alerts, security events, or support access state.
- Analytics and support diagnostics record safe metadata, reason codes, counts, and hashes, not local content bodies.

## Performance expectations

Device continuity should improve perceived reliability without making Project open slower.

Production validation measures:

- first shell and offline fallback load time;
- Project open latency on desktop, tablet, mobile, and installed contexts;
- local draft save and restore latency;
- reconnect detection and sync queue evaluation latency;
- conflict review render time for large drafts and Worksets;
- service worker update safety and stale-cache invalidation;
- storage usage, eviction handling, and persistent-storage request outcomes;
- mobile input latency, touch target correctness, keyboard behavior, and screen-reader state updates;
- user correction rate for sync, conflict, and capability labels.

## Non-goals

- Do not make the first release a fully local-first database product.
- Do not promise offline deep research, offline source ingestion, offline model calls, or offline publication.
- Do not use browser storage as the system of record.
- Do not silently sync private content to a new destination merely because a user installed the app.
- Do not make OS-level continuity, push, background sync, or persistent storage mandatory for core workflows.
- Do not hide platform limitations behind generic "works offline" marketing language.

## Acceptance criteria

Device continuity is production-ready only when:

- `DEVICE-001` is implemented with visible capability labels for supported browsers, installation contexts, mobile, tablet, desktop, and input modes;
- native companion and browser extension capability labels, grant states, blocked-capture states, and revocation paths are visible wherever companion surfaces ship;
- Project shell, Chat, Documents, Sources, Activity, review queue, Focus, Worksets, and Command Center have browser tests for narrow, tablet, desktop, and installed contexts;
- local draft and queue state is recoverable, inspectable, clearable, and never mistaken for canonical Project state;
- reconnect reauthorizes every local draft, queued command, cached projection, offline packet, handoff ref, and Workset ref before use;
- conflict review blocks unsafe automatic apply and rejects last-write-wins for overlapping material edits;
- unsupported browser capabilities show clear fallback paths;
- privacy controls prove local cache, analytics, support diagnostics, and telemetry exclude prohibited content classes;
- release evidence includes mobile usability, accessibility, performance, sync, conflict, storage-eviction, offline fallback, and cross-device resume validation.

## Documentation update rule

Changes to device capability labels, offline-safe work classes, local drafts, queue status, mobile behavior, installed-app behavior, handoff, reconnect, or conflict review must update:

- [`project-workspace.md`](project-workspace.md)
- [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md)
- [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md)
- [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md)
- [`project-settings-and-administration.md`](project-settings-and-administration.md)
- [`notifications-and-scheduled-automation.md`](notifications-and-scheduled-automation.md)
- [`native-workspace-companion-and-os-integration.md`](native-workspace-companion-and-os-integration.md)
- [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md)
- [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md)
- [`../02-architecture/progressive-delivery-and-fast-path-cache-policy.md`](../02-architecture/progressive-delivery-and-fast-path-cache-policy.md)
- [`../02-architecture/tenancy-authorization-and-capabilities.md`](../02-architecture/tenancy-authorization-and-capabilities.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
