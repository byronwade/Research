# Tenancy, authorization, and capabilities

Research uses Organization and Project as explicit security boundaries. Identifiers, UI visibility, possession of a URL, connector membership, or model context never grant access by themselves.

User-facing Project policy, inherited settings, support grants, and administrative change controls are specified in [`../01-product/project-settings-and-administration.md`](../01-product/project-settings-and-administration.md).

## Principal types

- human user with one or more Organization memberships;
- service account scoped to an Organization or Project;
- connector installation acting for an authorized Project;
- native companion or browser extension install acting only through an explicit user gesture or Project-scoped grant;
- durable workflow identity derived from the initiating authorization snapshot;
- public anonymous viewer restricted to an immutable publication snapshot;
- support operator using a separately granted, time-bounded administrative capability.

## Authorization layers

```text
authentication
→ active session or service identity
→ organization membership
→ project membership and role
→ effective Organization and Project settings policy
→ resource relationship
→ action policy
→ data classification and residency policy
→ short-lived capability for high-impact work
→ audit decision
```

Every server entry point calls the same policy service. Hono routes, server functions, workflows, queues, webhooks, SDKs, CLI, MCP, support tooling, and internal jobs do not implement independent permission shortcuts.

## Project roles

The initial roles are intentionally small:

| Role | Typical authority |
|---|---|
| Owner | Organization and Project policy, membership, billing delegation, deletion, publication policy |
| Admin | Project configuration, members, connectors, source and document operations |
| Editor | Chat, research, source management, document and artifact edits |
| Researcher | Chat, research, source use, draft creation, comments |
| Viewer | Read authorized private Project content and evidence |
| Public viewer | Read one immutable public publication only |

Policies are expressed as actions over resources, not scattered role-name comparisons. Enterprise custom roles map to the same stable action vocabulary.

## Stable action vocabulary

Representative actions include:

```text
project.read
project.configure
membership.manage
source.create
source.read
source.exclude
source.delete
evidence.read
chat.write
research.start
research.cancel
document.edit
document.publish
comment.write
review.decide
decision.accept
artifact.edit
connector.authorize
connector.sync
native_companion.manage
native_companion.capture
native_companion.revoke
github.propose_change
github.open_pull_request
billing.read
billing.manage
support.grant_access
support.create_diagnostic_bundle
support.read_diagnostic_bundle
support.request_content_access
support.approve_access_request
support.revoke_access_session
support.export_audit
project.export
project.delete
```

## Capability tokens

High-impact or asynchronous actions receive a short-lived capability containing actor, Organization, Project, action set, resource constraints, source and revision snapshots, expiry, approval identity, and correlation ID.

Capabilities are required for publication, external writes, GitHub branch/PR creation, destructive deletion, connector scope changes, billing changes, exports containing private material, and support access. They are audience-bound, non-expandable, revocable, and recorded without exposing their secret value.

A workflow may continue only while its durable authorization contract remains valid. Permission reduction, member removal, connector revocation, source exclusion, Project suspension, or legal hold can pause or invalidate future steps.

## Query and retrieval enforcement

Authorization filters are part of the database and retrieval query. Private rows, chunks, vectors, cache entries, reranker candidates, and source excerpts are removed before model exposure. Post-filtering model output is not an acceptable substitute.

Every cache key that can contain private or derived content includes the effective tenant, Project, authorization or policy version, data class, model or transformation identity, and source-version set as applicable. Fast Paths, route preloading, stale-while-revalidate projections, Partial Results, and progressive delivery envelopes follow the stricter policy in [`progressive-delivery-and-fast-path-cache-policy.md`](progressive-delivery-and-fast-path-cache-policy.md): reauthorize before use, bind to source and document versions, and invalidate on membership, policy, rights, retention, source, document, parser, or index changes.

Local caches, service workers, offline drafts, offline packets, OfflineActionQueueItems, SyncAttempts, SyncConflicts, DeviceContinuityLinks, and installed-app state follow [`offline-sync-local-cache-and-device-policy.md`](offline-sync-local-cache-and-device-policy.md). Reconnect reauthorizes before local state is displayed, submitted, synced, retried, handed off, or used for a command. A local cache manifest, offline lease, queue item, handoff link, or device label is never an access grant.

Native companion installs, browser extensions, active-tab invocations, selected-context captures, OS share targets, file-watch grants, global command bridges, notification bindings, deep links, and companion queues follow [`native-companion-shell-and-os-adapter-policy.md`](native-companion-shell-and-os-adapter-policy.md). A companion install, extension ID, folder grant, active-tab gesture, local queue item, notification action, or deep link is never an access grant by possession and cannot bypass Project policy, browser/OS permissions, preflight, expected versions, idempotency, approvals, or audit.

Context-pack assembly, read, export, MCP exposure, and model use perform authorization checks independently. A context-pack URI or previous successful pack read does not grant future access after permission, source, policy, or retention changes.
Comment threads, mentions, assignments, review requests, decision records, and presence also perform target-resource authorization at creation, notification, read, export, publication, support, API, and MCP exposure time.

## Public sharing

Public links resolve only to immutable PublicationSnapshots. They cannot traverse back to private Documents, Sources, Claims, comments, assignments, review requests, decision records, presence, history, connector metadata, or tenant identifiers. Revocation and withdrawal stop future access without mutating the historical audit record.

## Service and administrative access

Background services receive the minimum database, queue, Blob, connector, and model permissions for one responsibility. Support access is metadata-first; private content requires explicit customer-authorized or break-glass scope, step-up authentication, expiry, reason, and immutable audit.

Support tooling uses three separate objects:

- `SupportDiagnosticBundle`: a content-minimized package of Project, policy, health, operation, Activity, telemetry, automation debug, webhook, incident, and release-evidence metadata that customers can inspect and revoke where policy allows.
- `SupportAccessRequest`: a pending request for content, diagnostic export, repair command, or break-glass access with case, purpose, scope, data classes, expected start, duration, approver, and policy snapshot.
- `SupportAccessSession`: the time-bounded access window created after approval or governed break-glass. It is read-only by default, non-expandable, revocable, step-up authenticated, and audited for every viewed resource and attempted action.

Support sessions cannot impersonate users, approve their own requests, widen connector or source scope, mutate Project state, publish, delete, bill, export arbitrary data, run arbitrary SQL, bypass retrieval authorization, or route private content to model evaluation unless a separate explicit product policy and approval permits that exact action.

Break-glass sessions require incident linkage, independent approval, shorter expiry, real-time monitoring, post-session review, customer-visible evidence where legally and contractually allowed, and follow-up Product Truth or runbook records for any defect found.

## Required tests

- cross-Organization and cross-Project ID substitution;
- role downgrade and stale-session behavior;
- inherited and Project-level settings policy enforcement;
- cache, search, vector, export, publication, workflow, webhook, and support isolation;
- SupportDiagnosticBundle minimization, SupportAccessRequest approval, SupportAccessSession expiry, revocation, stale-policy rejection, self-approval rejection, break-glass review, and audit export behavior;
- Fast Path, preload, Partial Result, stale projection, and progressive-delivery isolation;
- local-cache manifest isolation, OfflineDraft redaction, queue action rejection, reconnect reauthorization, SyncConflict redaction, device revocation, sign-out clear behavior, and service-worker stale-cache invalidation;
- native companion grant isolation, active-tab user-gesture enforcement, selected-context minimization, file-watch path restriction, companion queue reauthorization, deep-link authorization, emergency revocation, and no-ambient-capture behavior;
- permission loss during long-running research and connector sync;
- public-link enumeration and private relationship traversal;
- capability expiry, replay, audience mismatch, scope expansion, and self-approval;
- service account revocation and least-privilege database behavior.
