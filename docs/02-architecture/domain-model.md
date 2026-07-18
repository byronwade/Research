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
    ├── Collaboration
    │   ├── CommentThread
    │   ├── Assignment
    │   ├── Suggestion
    │   ├── ReviewRequest
    │   └── DecisionRecord
    ├── Artifact
    │   └── ArtifactVersion
    ├── ResearchRun
    │   ├── ResearchTask
    │   └── ResearchStep
    ├── CommandCenter
    │   ├── CommandActionDescriptor
    │   ├── CommandInvocation
    │   └── ShortcutBinding
    ├── FocusState
    │   ├── ResumeCheckpoint
    │   ├── ResumeDigest
    │   ├── AttentionItem
    │   └── FocusSession
    ├── SpatialWorkbench
    │   ├── Workset
    │   ├── PaneLayoutTemplate
    │   ├── PaneInstance
    │   ├── WorksetSnapshot
    │   └── SpatialLayoutSuggestion
    ├── Automation
    │   ├── AutomationRun
    │   ├── AutomationOutcomeScorecard
    │   └── AdaptiveRoutingRecommendation
    ├── MemoryItem
    ├── GitHubWorkspace
    ├── Publication
    │   └── PublicationSnapshot
    ├── Reversal
    │   ├── ReversalCapability
    │   ├── ReversalRecord
    │   ├── RecoveryActionCard
    │   ├── CompensationPlan
    │   ├── CompensationStep
    │   ├── ReconciliationCheck
    │   └── ReversalOutcomeObservation
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
- Every collaboration object anchors to a Project resource and immutable target version where reviewability matters.
- Every command invocation resolves to a versioned command descriptor, authorization decision, expected version, preflight result, idempotency key, and ActivityEvent before material effects.
- Every material mutation records current recovery capability, irreversible side-effect labeling, and reversal-ledger handoff where user-visible or external state can later require restore, replay, withdrawal, compensation, or reconciliation.
- Every focus and resume projection stores minimized references to canonical Project state, reauthorizes before use, and invalidates when source, document, membership, policy, retention, or rights state changes.
- Every Spatial Workbench projection stores minimized Project resource references, reauthorizes before pane restore or sharing, and labels stale, deleted, unavailable, conflict, or redacted panes instead of exposing hidden state.
- Every automation outcome scorecard is a rebuildable projection over authorized run, activity, feedback, claim, evidence, patch, truth, and release records.
- Every source and document permission is enforced at query time.
- Revoking a source hides or invalidates derived evidence the current principal may no longer inspect.
- Every privileged action produces an immutable audit event.

## Event model

Domain transactions write an outbox record in the same database transaction. Workers consume idempotently. Events describe facts such as source version created, parsing completed, claim changed, document revision committed, publication created, reversal capability changed, compensation step completed, repository synchronized, approval resolved, entitlement reserved, or operation failed.

## Deletion

Deletion is a governed workflow. It identifies raw objects, derivatives, chunks, embeddings, claims, caches, exports, publications, reversal records, compensation records, and audit-retention obligations. User-visible removal, recovery eligibility, irreversible acknowledgement, and physical deletion are separate states when legal or operational retention applies.
