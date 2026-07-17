# Developer platform API

Research exposes the same domain capabilities used by the browser through a versioned Hono API.

## Resource families

- Organizations, memberships, service accounts, and Projects.
- Conversations, messages, branches, attachments, and tool events.
- Sources, source versions, parsing jobs, synchronization, search, and context packs.
- Claims, evidence spans, contradictions, and verification.
- Research Runs, tasks, plans, approvals, usage, and partial artifacts.
- Documents, revisions, blocks, patches, comments, and exports.
- Artifacts and artifact versions.
- Memory and Project directives.
- Publications and public/private projections.
- GitHub workspaces, snapshots, indexes, change proposals, and pull-request operations.
- Operations, webhooks, events, quotas, usage, and billing views.

## Asynchronous operations

Long-running commands return `202 Accepted`:

```http
POST /v1/projects/{projectId}/research-runs
Idempotency-Key: ...
```

The response contains an Operation URL. Clients can poll, consume replayable server-sent events, reconnect with `Last-Event-ID`, cancel eligible work, approve blocked stages, and inspect partial results, usage, warnings, and stable error details.

## API guarantees

- OpenAPI 3.1 generated from shared schemas.
- Stable Problem Details errors.
- OAuth and service-account scopes.
- Idempotency keys on mutations.
- ETags and expected-base-version concurrency.
- Cursor pagination and consistent filtering.
- Signed, replay-protected webhooks.
- Dry-run and estimate modes for costly or destructive operations.
- Capability discovery for models, source types, artifact types, connectors, and tools.
- TypeScript and Python SDKs generated from the canonical contract.
- Read-first MCP resources and bounded tools.

## Security

API authorization is Project- and resource-aware. A service account receives explicit scopes and source visibility. API logs, analytics, and webhook payloads minimize source content and never expose secrets or hidden reasoning traces. High-impact actions require approvals or separately granted write scopes.
