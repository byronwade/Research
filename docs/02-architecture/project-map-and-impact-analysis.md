# Project map and impact analysis

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

The product behavior is specified in [`../01-product/project-atlas-and-impact-navigator.md`](../01-product/project-atlas-and-impact-navigator.md). This architecture defines the Project Atlas read model, path query, and Impact Report system over canonical Project records. Scenario simulation and option comparison are governed by [`scenario-simulation-engine.md`](scenario-simulation-engine.md). Recovery options, reversal records, compensation, and irreversible-effect labels are governed by [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md).

## Goals

- Provide fast, permission-filtered local graph neighborhoods without loading the whole Project graph.
- Explain why a resource, blocker, recommendation, or search result is connected to the current work.
- Produce Impact Reports before high-risk mutations, recovery actions, publication, source revocation, recipe activation, policy changes, or release qualification.
- Feed Impact Reports into Scenario simulations when users need option comparison, cost and latency estimates, live-test labeling, stale-plan handling, or apply-candidate handoff.
- Keep Atlas as a projection over canonical authorities rather than a new evidence, document, memory, workflow, or product-truth store.
- Make map views usable through visual graph, table/list, keyboard, screen reader, API, SDK, CLI, MCP, and support-safe diagnostics.

## Authority boundary

Project Atlas reads and projects:

- Projects, policies, memberships, entitlements, retention, and residency;
- Sources, SourceVersions, ParsedElements, EvidenceSpans, Claims, ClaimEvidence, Trust blockers, and parser/index generations;
- Documents, DocumentBlocks, revisions, patches, comments, reviews, decisions, artifacts, publications, and exports;
- Research Runs, IntentRecords, PreflightChecks, ApprovalReceipts, Operations, ActivityEvents, ActionCards, side-effect ledgers, ReversalCapabilities, ReversalRecords, RecoveryActionCards, CompensationPlans, ReconciliationChecks, and irreversible-effect acknowledgements;
- Scenarios, SimulationRuns, ScenarioApplyCandidates, RecoveryActionCards, ReversalRecords, and SimulationOutcomeObservations as linked consumers of impact data;
- Automation Recipes, RecipeVersions, RecipeRuns, gates, side effects, outcome scorecards, and adaptive-routing recommendations;
- Product Truth signals, themes, requirements, slices, documentation patches, contradictions, truth decisions, non-action decisions, and release evidence;
- GitHub snapshots, code indexes, change proposals, validation runs, branches, commits, and pull-request records.

Atlas may create projections, suggestions, Impact Reports, ActionCards, Scenario Lab inputs, RecoveryActionCard context, and ActivityEvents. It cannot directly mutate canonical Sources, Claims, Documents, Publications, Recipes, ReversalRecords, Product Truth, billing, connectors, repositories, or policy.

## Processing chain

```text
resource selected or query submitted
-> normalize ProjectMapIntent
-> authorize viewer and requested lens
-> resolve seed resources and expected versions
-> run bounded graph traversal against canonical dependency records
-> join allowed status projections from Activity, Trust, Recipe, Product Truth, GitHub, and Publication state
-> redact or suppress unauthorized nodes and edges
-> build ProjectMapNeighborhood or ProjectImpactReport
-> emit Progressive Delivery events for long traversals
-> store content-minimized report metadata and invalidation dependencies
```

Every query has depth, node count, edge count, time window, lens, source scope, and cost limits. Over-limit results return partial state and safe expansion commands.

## Core records

### ProjectMapView

Represents a saved or generated Atlas view.

```text
project_map_view_id
organization_id
project_id
owner_id
title
lens
seed_resource_refs
filter_policy_ref
layout_hint
visibility_policy_ref
created_at
updated_at
```

### ProjectMapNodeProjection

Content-minimized node projection for a viewer or saved report.

```text
project_map_node_projection_id
project_id
view_or_report_ref
resource_type
resource_id
resource_version
safe_label
status_tags
risk_tags
redaction_state
authority_ref
updated_at
```

### ProjectMapEdgeProjection

Content-minimized edge projection.

```text
project_map_edge_projection_id
project_id
view_or_report_ref
from_resource_ref
to_resource_ref
edge_type
edge_authority_ref
provenance_ref
redaction_state
confidence_or_strength
updated_at
```

### ProjectMapQuery

Records a path, neighborhood, or lens query.

```text
project_map_query_id
project_id
actor_id
query_type
lens
seed_resource_refs
target_resource_refs
constraints_ref
authorization_policy_ref
result_ref
status
created_at
```

### ProjectImpactReport

Reviewable impact preview.

```text
project_impact_report_id
project_id
target_resource_ref
expected_version
change_intent_ref
direct_dependents_count
indirect_dependents_count
redacted_dependents_summary
affected_resource_refs
blocked_reason_refs
recommended_action_refs
cost_latency_class
confidence_summary
unknowns_summary
approval_class
status
created_at
expires_at
```

### ProjectMapSuggestion

Reviewable suggestion such as missing link, evidence candidate, patch candidate, isolated resource, or recipe candidate.

```text
project_map_suggestion_id
project_id
suggestion_type
source_resource_refs
target_resource_refs
reason_code
evidence_refs
confidence
owner_id
action_card_id
status
created_at
expires_at
```

## Edge model

Atlas uses edge types from [`living-dependency-graph.md`](living-dependency-graph.md) and adds projection-only relationship labels for navigation:

- `mentions`
- `references`
- `blocked_by`
- `reviewed_by`
- `proposed_by`
- `invalidated_by`
- `scheduled_by`
- `generated_by`
- `observed_by`
- `affects`
- `path_candidate`

Projection-only labels cannot prove claim support. Claim support remains governed by Claims, EvidenceSpans, and ClaimEvidence relationships.

## Impact analysis policy

Impact analysis runs before actions that can affect downstream trust, publication, cost, privacy, or automation:

- source deletion, revocation, replacement, reprocessing, rights change, parser change, or retention change;
- document patch acceptance where claims, citations, publications, exports, or locked regions are affected;
- publication, withdrawal, export, recovery, compensation, reconciliation, or public/private projection changes;
- Automation Recipe activation, trigger change, connector widening, high-risk output change, or retirement;
- Project policy, model-role, provider, residency, connector, billing, or support-grant change with linked operations;
- reversal, restore, replay, duplicate-as-draft, withdrawal, compensation, reconciliation, or irreversible acknowledgement for a material Project resource;
- release candidate generation.

If the analyzer cannot traverse required authorities, activation or mutation is blocked, degraded to canary, or routed to an ActionCard depending on risk class.
Scenario Lab and Reversible Work can consume the Impact Report to compare options and decide recovery eligibility, but missing traversal, hidden dependents, redacted state, unsupported authorities, irreversible effects, or stale graph dependencies must remain visible and cannot be summarized away as a safe plan.

## Invalidation

Atlas projections invalidate when:

- membership, Project policy, source permission, rights, retention, residency, or support grant changes;
- SourceVersion, ParsedElement, EvidenceSpan, Claim, DocumentRevision, PublicationSnapshot, Export, ArtifactVersion, or GitHub snapshot changes;
- IntentRecord, Operation, ActivityEvent, ActionCard, RecipeVersion, RecipeRun, OutcomeScorecard, or Product Truth record changes;
- Scenario, ScenarioInputSnapshot, SimulationRun, ScenarioDecision, ScenarioApplyCandidate, or SimulationOutcomeObservation changes when Atlas views include scenario state;
- parser, index, embedding, model-role, or route policy changes;
- a redaction policy changes.

Invalidation stores reason, affected view or report, authoritative resource version, and next rebuild policy.

## API and command exposure

The platform API can expose:

- create Atlas query;
- inspect local neighborhood;
- find path between resources;
- create Impact Report;
- create Scenario Lab simulation from an Impact Report;
- list Impact Reports for a resource;
- approve, reject, or expire map suggestions through ActionCards;
- export redacted Atlas summary where policy allows.

Command Center actions resolve through typed descriptors. External clients cannot bypass authorization, depth limits, redaction, expected versions, preflight, or approval policy.

## Storage model

Representative structures are defined in [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md):

- `project_map_views`
- `project_map_queries`
- `project_map_node_projections`
- `project_map_edge_projections`
- `project_impact_reports`
- `project_impact_report_items`
- `project_map_suggestions`
- `project_map_invalidations`

Projection rows are rebuildable. Authoritative state remains in owning domain tables.

## Tests

Required coverage:

- authorization-filtered neighborhood traversal;
- local graph depth, node cap, edge cap, time window, and pagination behavior;
- path query correctness across source, claim, document, artifact, recipe, Activity, Product Truth, GitHub, and publication records;
- Impact Report completeness for source revocation, publication, recovery action, compensation plan, high-risk recipe activation, policy change, retention change, parser change, and release candidate generation;
- hidden and redacted node behavior without leaking private counts or labels;
- stale projection invalidation after permission, source, claim, document, recipe, Product Truth, publication, and policy changes;
- missing-link suggestion review flow with ActionCards;
- Progressive Delivery states for long traversals;
- API, SDK, CLI, MCP, Command Center, Activity, Trust Dashboard, support, and release-evidence projections;
- keyboard, screen-reader, pointer, touch, narrow-screen, graph, and table/list accessibility.

## Launch gates

Project Atlas is production-ready only when:

- `MAP-001` and `MAP-002` are implemented;
- Atlas query results agree with canonical dependency graph, Trust Dashboard, Activity, Recipe, Reversal Ledger, Product Truth, Publication, and GitHub authorities;
- Impact Reports block high-risk changes when required traversal, authorization, or redaction evidence is missing;
- map suggestions cannot silently mutate evidence, documents, recipes, Product Truth, publications, or repositories;
- cache and projection invalidation preserve authorization and source truth;
- support diagnostics expose metadata and redacted relationships without private content;
- release evidence records path-query accuracy, impact-report correctness, recovery-impact correctness, redaction, stale-projection invalidation, accessibility, and large-Project performance.
- Scenario Lab handoff evidence proves Impact Report inputs preserve expected versions, hidden-dependents policy, unknowns, redaction summaries, and stale-plan invalidation.

## Documentation update rule

Changes to ProjectMapView, ProjectMapQuery, ProjectMapNodeProjection, ProjectMapEdgeProjection, ProjectImpactReport, ProjectMapSuggestion, map APIs, path query semantics, redaction, or impact analysis must update:

- [`../01-product/project-atlas-and-impact-navigator.md`](../01-product/project-atlas-and-impact-navigator.md)
- [`living-dependency-graph.md`](living-dependency-graph.md)
- [`scenario-simulation-engine.md`](scenario-simulation-engine.md)
- [`reversal-ledger-and-compensation-engine.md`](reversal-ledger-and-compensation-engine.md)
- [`developer-platform-api.md`](developer-platform-api.md)
- [`activity-event-log-and-replay.md`](activity-event-log-and-replay.md)
- [`product-truth-graph-and-contradiction-detection.md`](product-truth-graph-and-contradiction-detection.md)
- [`automation-recipe-graph-and-execution-policy.md`](automation-recipe-graph-and-execution-policy.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
