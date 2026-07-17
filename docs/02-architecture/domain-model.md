# Domain model

## Core aggregate map

```text
Organization
├── Membership
├── EntitlementAccount
└── Project
    ├── ProjectMember
    ├── ProjectPolicy
    ├── Conversation
    │   ├── Message
    │   └── ToolEvent
    ├── Source
    │   ├── SourceVersion
    │   │   ├── ParsedElement
    │   │   ├── Chunk
    │   │   └── EvidenceSpan
    │   ├── SourcePermission
    │   └── SourceDecision
    ├── Claim
    │   └── ClaimEvidence
    ├── Document
    │   ├── DocumentRevision
    │   ├── DocumentBlock
    │   └── DocumentPatch
    ├── Artifact
    │   └── ArtifactVersion
    ├── ResearchRun
    │   ├── ResearchTask
    │   └── ResearchStep
    ├── MemoryItem
    ├── GitHubWorkspace
    ├── Publication
    │   └── PublicationSnapshot
    ├── Operation
    ├── Approval
    └── AuditEvent
```

## Important invariants

- Every Project-owned record carries `project_id` and tenant identity.
- Every Research Run records the exact source-version, model-policy, prompt-policy, tool-policy, and budget snapshots used.
- Every factual claim has evidence or an explicit unsupported, inferred, disputed, or stale state.
- Every citation resolves to an immutable SourceVersion and locator.
- Every document patch carries an expected base revision.
- Every source and document permission is enforced at query time.
- Revoking a source hides or invalidates derived evidence the current principal may no longer inspect.
- Every privileged action produces an immutable audit event.

## Event model

Domain transactions write an outbox record in the same database transaction. Workers consume idempotently. Events describe facts such as source version created, parsing completed, claim changed, document revision committed, publication created, repository synchronized, approval resolved, entitlement reserved, or operation failed.

## Deletion

Deletion is a governed workflow. It identifies raw objects, derivatives, chunks, embeddings, claims, caches, exports, publications, and audit-retention obligations. User-visible removal and physical deletion are separate states when legal or operational retention applies.
