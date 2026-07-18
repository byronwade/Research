# Native workspace companion and OS integration

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should be fast to reach from the user space where research work begins: a browser tab, selected text, a local file, an operating-system share sheet, a notification, or a global command shortcut. The optional native workspace companion and browser extension provide those entry points without turning Research into an ambient surveillance product.

This document governs `NATIVE-001`. Advanced operating-layer no-ambient-capture differentiation is governed by [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md). The architecture policy for native shells, browser extension adapters, context packets, permission grants, command bridges, file-watch grants, notifications, and deep links is governed by [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md). Command execution is governed by [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md), device continuity is governed by [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md), and Project settings are governed by [`project-settings-and-administration.md`](project-settings-and-administration.md).

## Sources reviewed

Official capability and privacy references:

- [Microsoft Recall privacy and controls](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience)
- [Microsoft Recall security and privacy architecture update](https://blogs.windows.com/windowsexperience/2024/09/27/update-on-recall-security-and-privacy-architecture/)
- [Apple App Intents](https://developer.apple.com/documentation/appintents)
- [Chrome side panel API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel)
- [Chrome activeTab permission](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab)
- [Tauri capabilities](https://v2.tauri.app/security/capabilities/)

Public user-opinion and practitioner signals:

- [Hacker News Raycast for Windows discussion](https://news.ycombinator.com/item?id=46024754)
- [Hacker News command palette interface discussion](https://news.ycombinator.com/item?id=27378590)
- [Hacker News Raycast and Alfred discussion](https://news.ycombinator.com/item?id=40635505)
- [Hacker News Microsoft Recall opt-in discussion](https://news.ycombinator.com/item?id=40610435)

The directional lesson is narrow and important: users value fast launchers, file search, clipboard-like productivity, selected-context capture, and low-friction browser workflows, but they strongly resist broad background capture, vague AI automation, performance-heavy extensions, and unclear subscription or privacy tradeoffs. Research should offer explicit Project-scoped capture and command entry, not screen history, browser history, keylogging, broad clipboard monitoring, or global filesystem indexing.

## Product purpose

The native companion answers:

- How do I capture the current page, selected text, citation candidate, or local file into a Project without interrupting my work?
- Can I open the Project Command Center from the operating system, browser toolbar, or menu bar without navigating through the full app first?
- Which Project, source scope, and destination will a captured item use?
- Which local folder, tab, selected text, or OS integration has been granted access, by whom, for what purpose, and for how long?
- What is queued, blocked, synced, or revoked on this device?
- How do I disable, clear, or revoke the companion without losing canonical Project state?

The companion is not a fourth primary surface. It is an optional entry and capture layer over Projects, Chat, Documents, Sources, Command Center, Activity, Notifications, and Project settings.

## Supported companion surfaces

Initial supported surfaces:

- **Global command entry:** opens Project search, recent Projects, recent Worksets, safe commands, and capture destinations through the same Command Center descriptor catalog.
- **Browser extension panel:** captures the active tab, current URL, page title, selected text, visible citation metadata, user-selected page region where supported, and explicit save-to-Project actions.
- **Browser context menu:** sends selected text, selected links, or current tab metadata to a specific Project after user invocation.
- **Share and import targets:** receive files, URLs, text snippets, PDFs, images, and exported bundles from OS share sheets or file pickers.
- **Tray or menu bar status:** shows signed-in state, active Project, sync queue count, blocked capture count, notification state, and quick open controls.
- **Scoped file-watch grants:** watch user-selected folders for supported source changes only after a Project-scoped grant and visible folder selection.
- **Notifications and deep links:** route review requests, Resume Digest actions, sync conflicts, publication blockers, and automation approvals back to the exact Project resource.
- **Selected-context handoff:** creates a minimized Context Packet from explicit selection, active tab permission, share intent, file picker, or Project command invocation.

All surfaces require visible UI and accessible alternatives. A workflow hidden only behind a global shortcut, browser toolbar icon, tray icon, or extension context menu is not production-ready.

## Permission model

Research uses explicit companion permission states:

| State | User meaning | Allowed behavior |
|---|---|---|
| `not-installed` | No companion is present. | Web app remains fully usable through supported browser paths. |
| `installed-disabled` | Companion exists but is not enabled for this account or Project. | Show enable path and policy reason where allowed. |
| `enabled-no-grants` | Companion can open the app but cannot capture private context. | Navigation, sign-in status, and safe command entry only. |
| `project-granted` | A specific Project can receive user-invoked captures. | Capture only selected or invoked context into that Project. |
| `folder-granted` | A selected folder is watched for a Project and source class. | Watch metadata and eligible file changes inside the granted path. |
| `tab-invoked` | Browser active-tab access exists for the current user gesture. | Read only the invoked tab context allowed by the browser grant. |
| `policy-blocked` | Organization or Project policy forbids the companion action. | Explain disabled reason and offer supported web alternatives. |
| `revoked` | User, admin, browser, OS, or security policy revoked the grant. | Stop capture, invalidate local queues, and route conflicts to review. |

Grants are scoped by actor, Organization, Project, device, surface, source class, destination, retention, and expiry. A companion grant cannot authorize retrieval, model context assembly, source ingestion, connector writes, publication, billing, support access, or repository mutation by itself.

## Capture flows

### Browser tab capture

A browser tab capture starts only from a user gesture such as toolbar click, side panel action, context menu action, keyboard command routed through the extension, or explicit Project command. The capture preview shows:

- Project destination;
- URL, title, selected text length, and page metadata classes;
- whether full-page fetch, current visible content, selected text, or URL-only capture is requested;
- source rights and robots or provider-policy status where relevant;
- expected source type and parsing capability;
- privacy labels, retention, and local queue state;
- blocked reason when capture is unsafe.

The product must never silently read all tabs, browser history, cookies, form fields, passwords, private windows, or pages the user did not invoke.

### Selected text and citation capture

Selected text capture creates a draft source candidate, note, quote, or citation candidate only after preview. If a selection contains private, credential-like, sensitive, rights-restricted, or unsupported content, the capture is blocked or routed through a higher-risk review state. Selected text is not evidence until it becomes an immutable SourceVersion or authorized SourceVersion locator through the source pipeline.

### File and folder capture

File capture uses file picker, drag and drop, OS share, or explicit folder grant. Folder grants require:

- visible path label or redacted path alias;
- Project destination;
- allowed extensions or MIME classes;
- maximum size and rate limits;
- source rights and sensitivity prompts where required;
- watcher status, queue count, and last sync;
- revoke, pause, and clear-local-state controls.

The companion cannot index the whole filesystem, follow unapproved symlinks, scrape cloud-drive caches, or upload file contents without an eligible Project source workflow.

### Global command entry

Global command entry uses the same command descriptor catalog as the web app. It can navigate, open recent Projects, create capture previews, open review items, and start allowed low-risk commands. Material commands still require deterministic preflight, expected versions, approvals, ActivityEvents, and side-effect ledgers through the owning service.

### Notifications and deep links

Notifications contain only safe labels, resource class, urgency class, and action class. They deep-link into a Project view where current authorization is checked before private content appears. Notification actions cannot approve, publish, delete, bill, widen permissions, or write externally unless the owning approval flow opens and validates current state.

## User and admin controls

Users can inspect and control:

- installed companion surfaces by device and browser;
- active Project grants, folder grants, active-tab capture use, share targets, notification subscriptions, and global shortcuts;
- local queue, blocked captures, failed sync, and revoked grants;
- local companion cache categories and clear controls;
- companion ActivityEvents and audit history where policy allows;
- Project default destination and source type mappings;
- revoke, pause, disable, uninstall, and reauthorize actions.

Administrators can configure:

- whether native companion and browser extension use is allowed;
- which surfaces are available by plan, Organization, Project, device trust, browser family, managed device state, data residency, and source sensitivity;
- maximum local retention, file-watch scope, allowed file types, notification channels, and support diagnostics;
- security review requirements for extension versions, signing, update channels, and desktop wrapper capabilities.

Administrative restrictions must appear in Project settings and in disabled companion controls. The product must provide browser-only and web-app alternatives for primary workflows when native installation is blocked.

## Privacy and security rules

- Native and browser companions are optional adapters, not canonical stores.
- Companion surfaces cannot perform ambient screen capture, screen recording, keylogging, broad clipboard monitoring, global browser-history capture, global filesystem indexing, hidden microphone or camera capture, hidden window-state capture, or cross-app behavior profiling.
- Active-tab, selected-text, file, folder, notification, and shortcut access require explicit user gestures or visible grants.
- Source content remains untrusted and cannot redefine companion permissions, shortcuts, command descriptors, Project policy, or system instructions.
- Captured content must enter normal Source, Document draft, Activity, Intent, or Command workflows before it becomes Project state.
- Local companion caches store only minimized metadata, queue state, grant refs, and safe labels unless an explicit encrypted offline packet policy allows more.
- Companion telemetry cannot include raw source text, selected text, document bodies, prompts, credentials, full URLs when private, screenshots, browser history, clipboard contents, local file contents, hidden reasoning, or raw provider traces.
- Revocation invalidates queued captures and local projections before next use.

## Accessibility and fallback requirements

Every companion workflow needs:

- visible web-app equivalent where the platform permits it;
- keyboard, pointer, touch, and screen-reader paths;
- visible focus return after deep-link handling;
- reduced-motion notification and tray/menu interactions;
- command labels that identify target, effect, Project, and disabled reason;
- conflict handling for browser, OS, text-editor, and assistive-technology shortcuts;
- localized labels and locale-neutral canonical records.

Global shortcuts are convenience paths. They cannot be the only way to capture, review, revoke, approve, or recover work.

## Performance expectations

Companion surfaces should feel instant without slowing the Project app or browser.

Production validation measures:

- global command open latency;
- browser side-panel open and capture-preview latency;
- active-tab permission prompt to preview latency;
- file-watch event batching and queue latency;
- notification click to authorized Project view latency;
- extension memory, CPU, network, and startup overhead;
- desktop wrapper memory, CPU, disk, and auto-update overhead;
- local queue drain and blocked-capture recovery latency;
- user correction rate for Project destination, source type, and disabled reason labels.

Companion performance claims require device, browser, and OS-specific evidence. If the browser or OS blocks a capability, Research labels the limitation instead of pretending the companion is broken.

## Non-goals

- Do not build ambient recall, screenshot history, cross-app history, or always-on activity recording.
- Do not make a native app mandatory for core Research workflows.
- Do not let a browser extension become a second connector or retrieval authority.
- Do not use companion install state as proof of device trust without policy.
- Do not let selected text or active-tab snippets become evidence without immutable source processing.
- Do not run private-content model calls from the companion without server-side Project authorization and policy.
- Do not hide broad permissions behind productivity language.

## Acceptance criteria

Native companion work is production-ready only when:

- `NATIVE-001` is implemented with visible install, enable, grant, revoke, pause, clear, and disabled-reason states;
- browser extension active-tab, context-menu, side-panel, selected-text, and URL-only capture paths require user invocation and show preview before ingestion;
- OS share/import targets, file-picker capture, and folder-watch grants are Project-scoped, inspectable, rate-limited, and revocable;
- global command entry uses the canonical Command Center descriptor catalog and cannot bypass typed preflight or approvals;
- notification and deep-link actions reauthorize current Project state before private content or mutation appears;
- local companion caches and telemetry exclude prohibited content classes;
- admins can allow, block, or restrict companion surfaces by Organization and Project policy;
- accessibility tests cover non-shortcut alternatives, shortcut conflicts, screen-reader state, and focus return;
- security tests prove no ambient screen, clipboard, browser-history, keylogging, broad filesystem, hidden camera, hidden microphone, or hidden window-state capture occurs;
- release evidence includes browser, OS, extension, desktop wrapper, performance, revocation, offline queue, support diagnostic, and update-channel validation.

## Documentation update rule

Changes to native companion install behavior, browser extension capture, OS share targets, global shortcuts, tray or menu status, file-watch grants, selected-context capture, notification deep links, or companion permissions must update:

- [`project-workspace.md`](project-workspace.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`offline-device-continuity-and-mobile-experience.md`](offline-device-continuity-and-mobile-experience.md)
- [`project-settings-and-administration.md`](project-settings-and-administration.md)
- [`notifications-and-scheduled-automation.md`](notifications-and-scheduled-automation.md)
- [`latency-aware-progressive-workflows.md`](latency-aware-progressive-workflows.md)
- [`../02-architecture/native-companion-shell-and-os-adapter-policy.md`](../02-architecture/native-companion-shell-and-os-adapter-policy.md)
- [`../02-architecture/command-action-routing-and-shortcuts.md`](../02-architecture/command-action-routing-and-shortcuts.md)
- [`../02-architecture/offline-sync-local-cache-and-device-policy.md`](../02-architecture/offline-sync-local-cache-and-device-policy.md)
- [`../02-architecture/tenancy-authorization-and-capabilities.md`](../02-architecture/tenancy-authorization-and-capabilities.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../05-security/threat-model.md`](../05-security/threat-model.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/performance-capacity-and-load-engineering.md`](../06-delivery/performance-capacity-and-load-engineering.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../08-build/ui-system-and-chatgpt-patterns.md`](../08-build/ui-system-and-chatgpt-patterns.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
