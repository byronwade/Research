# Project memory

Memory preserves inspectable Project continuity without becoming a hidden substitute for sources or evidence.

## Memory layers

1. Project policy and standing instructions.
2. Explicit durable user preferences.
3. Project knowledge.
4. Accepted decisions.
5. Active work state.
6. Conversation summaries.
7. Retrieval adaptations.

## Memory record

A MemoryItem stores type, statement, status, provenance, authority, sensitivity, valid time, confidence, conflict state, version history, and relationships to claims, sources, conversations, documents, comments, review requests, and decisions.

## User controls

The Memory view supports:

- why this is remembered;
- edit;
- pin;
- lock;
- supersede;
- archive;
- forget;
- and inspect dependent outputs.

## Evidence rule

Memory can guide terminology, formatting, planning, and continuity. It cannot satisfy a citation requirement. A factual memory used in grounded output must resolve to a current authorized Claim and EvidenceSpan.

Accepted decisions may enter memory only through explicit `DecisionRecord` consolidation governed by [`../01-product/collaboration-review-and-decision-workflows.md`](../01-product/collaboration-review-and-decision-workflows.md) and [`../02-architecture/collaboration-comments-and-decisions.md`](../02-architecture/collaboration-comments-and-decisions.md). A resolved comment, AI summary, or approval note is not a memory item until the consolidation workflow records provenance and authority.

## Preference boundary

Explicit durable preferences may appear as MemoryItems when the user or policy records them as standing instructions. Learned preferences, PreferenceObservations, AdaptiveInterfaceProfiles, PreferenceSuggestions, PreferenceExplanations, PreferenceConflicts, reset/export behavior, and model-context preference summaries are governed by [`../01-product/adaptive-personalization-and-preference-controls.md`](../01-product/adaptive-personalization-and-preference-controls.md) and [`../02-architecture/adaptive-preference-learning-and-interface-policy.md`](../02-architecture/adaptive-preference-learning-and-interface-policy.md). Preference learning cannot convert a behavioral signal into memory without visible provenance, user control, and the consolidation workflow required for the target authority level.

## Context packs

Context packs may include accepted MemoryItems when they are relevant, authorized, fresh, and marked with provenance. Preference summaries in context packs are separate minimized projections, not MemoryItems unless accepted by the memory workflow. A context pack cannot turn memory or preference summaries into evidence, and memory deletion, preference reset, or preference supersession invalidates affected packs. See [`../02-architecture/context-packs-and-agent-handoff.md`](../02-architecture/context-packs-and-agent-handoff.md).

## Consolidation

Memory consolidation is a durable workflow. It proposes additions or supersessions, detects conflicts, preserves provenance, respects retention policy, and requires approval for sensitive or high-authority records. Decision records can provide accepted rationale and rejected alternatives, but raw assistant prose, unresolved comments, and review discussion are never copied wholesale into permanent memory.

## Forgetting

Forgetting traverses dependent summaries, indexes, caches, context packs, and derived memory. It does not rewrite historical audit records beyond governed privacy and retention requirements. If forgetting invalidates documents, the system marks affected content for review.
