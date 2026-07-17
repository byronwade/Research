# Tenancy, authorization, and capabilities

Research uses Organization and Project as explicit security boundaries. Identifiers, UI visibility, possession of a URL, connector membership, or model context never grant access by themselves.

## Principal types

- human user with one or more Organization memberships;
- service account scoped to an Organization or Project;
- connector installation acting for an authorized Project;
- durable workflow identity derived from the initiating authorization snapshot;
- public anonymous viewer restricted to an immutable publication snapshot;
- support operator using a separately granted, time-bounded administrative capability.

## Authorization layers

```text
authentication
→ active session or service identity
→ organization membership
→ project membership and role
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
artifact.edit
connector.authorize
connector.sync
github.propose_change
github.open_pull_request
billing.read
billing.manage
support.grant_access
project.export
project.delete
```

## Capability tokens

High-impact or asynchronous actions receive a short-lived capability containing actor, Organization, Project, action set, resource constraints, source and revision snapshots, expiry, approval identity, and correlation ID.

Capabilities are required for publication, external writes, GitHub branch/PR creation, destructive deletion, connector scope changes, billing changes, exports containing private material, and support access. They are audience-bound, non-expandable, revocable, and recorded without exposing their secret value.

A workflow may continue only while its durable authorization contract remains valid. Permission reduction, member removal, connector revocation, source exclusion, Project suspension, or legal hold can pause or invalidate future steps.

## Query and retrieval enforcement

Authorization filters are part of the database and retrieval query. Private rows, chunks, vectors, cache entries, reranker candidates, and source excerpts are removed before model exposure. Post-filtering model output is not an acceptable substitute.

Every cache key that can contain private or derived content includes the effective tenant, Project, authorization or policy version, data class, model or transformation identity, and source-version set as applicable.

## Public sharing

Public links resolve only to immutable PublicationSnapshots. They cannot traverse back to private Documents, Sources, Claims, comments, history, connector metadata, or tenant identifiers. Revocation and withdrawal stop future access without mutating the historical audit record.

## Service and administrative access

Background services receive the minimum database, queue, Blob, connector, and model permissions for one responsibility. Support access is metadata-first; private content requires explicit customer-authorized or break-glass scope, step-up authentication, expiry, reason, and immutable audit.

## Required tests

- cross-Organization and cross-Project ID substitution;
- role downgrade and stale-session behavior;
- cache, search, vector, export, publication, workflow, webhook, and support isolation;
- permission loss during long-running research and connector sync;
- public-link enumeration and private relationship traversal;
- capability expiry, replay, audience mismatch, scope expansion, and self-approval;
- service account revocation and least-privilege database behavior.
