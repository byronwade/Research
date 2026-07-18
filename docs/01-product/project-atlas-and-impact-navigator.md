# Project Atlas and impact navigator

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research needs a way to show users what is connected, what will be affected, and what safe action comes next without turning the workspace into a decorative graph. The Project Atlas is a contextual map over Chat, Documents, Sources, Claims, EvidenceSpans, Research Runs, Automation Recipes, Scenario Lab simulations, Reversible Work records, Activity, Product Truth, GitHub proposals, publications, exports, and collaboration state. Source-change maintenance and living-document review are governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md); Atlas supplies Impact Reports to maintenance but cannot apply patches by itself. Project Operating Layer Work Packets and next-action ranking are governed by [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md); Atlas can supply map context and Impact Reports to that layer but cannot execute actions by itself. Project-wide simulation and option comparison are governed by [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md). Recovery actions are governed by [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md).

This document governs `MAP-001` and `MAP-002`.

## Sources reviewed

Official capability references:

- [Apple Spotlight on Mac](https://support.apple.com/guide/mac-help/search-with-spotlight-mchlp1008/mac)
- [Microsoft Recall consumer documentation](https://support.microsoft.com/en-us/windows/ai/ai-features/retrace-your-steps-with-recall)
- [Microsoft Recall management documentation](https://learn.microsoft.com/en-us/windows/client-management/manage-recall)
- [Notion relations and rollups](https://www.notion.com/help/relations-and-rollups)
- [Notion links and backlinks](https://www.notion.com/help/create-links-and-backlinks)
- [Obsidian Graph view](https://obsidian.md/help/plugins/graph)
- [Obsidian backlinks](https://obsidian.md/help/plugins/backlinks)
- [Obsidian outgoing links](https://obsidian.md/help/plugins/outgoing-links)
- [GitHub dependency graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph)
- [GitHub dependency graph REST API](https://docs.github.com/en/rest/dependency-graph)

Directional public user-opinion and practitioner signals:

- [Obsidian graph view usefulness debate](https://www.reddit.com/r/ObsidianMD/comments/1efesl5/graph_view_is_so_fucking_useless/)
- [Obsidian local graph usefulness discussion](https://www.reddit.com/r/ObsidianMD/comments/1qk2mfh/how_is_the_knowledge_graph_useful_to_you/)
- [Hacker News discussion of graph maps for agent memory](https://news.ycombinator.com/item?id=48514124)
- [Windows Recall privacy and usefulness discussion](https://www.reddit.com/r/Windows11/comments/1d1fedu/what_do_you_think_about_windows_recalls_new/)
- [Spotlight search degradation discussion](https://www.reddit.com/r/MacOS/comments/1guyo7t/am_i_the_only_one_who_finds_spotlight_search_has/)
- [macOS Finder tags and organization discussion](https://www.reddit.com/r/mac/comments/13502sg/do_you_use_tags_in_finder_if_yes_how_do_you_use_it/)

The product lesson is narrow: users do not need a giant graph for its own sake. They need focused local neighborhoods, path finding, impact previews, search filters, missing-link suggestions, and permission-safe recall of why something exists. Project Atlas should outperform ordinary operating-system search by knowing evidence, claims, revisions, automations, and publication risk, while avoiding Recall-style ambient screen capture.

## Product purpose

The Project Atlas answers:

- What is this document, source, claim, run, recipe, artifact, or decision connected to?
- Why am I seeing this recommendation, blocker, stale label, or review item?
- What documents, publications, exports, recipes, GitHub proposals, and claims will be affected if this source changes, is revoked, or is deleted?
- Which path connects two pieces of Project state?
- Which areas of the Project are isolated, unsupported, stale, overloaded, or repeatedly repaired?
- What can Research safely fix, refresh, patch, export, publish, or automate from here?
- Which connected records are hidden because of permissions, source rights, retention, privacy, or publication policy?

Atlas is not the authority for evidence or dependencies. It is a focused, permission-filtered projection over canonical records.

## User experience model

Atlas appears contextually from:

- Project header, current Work Packet, and Command Center;
- selected source, claim, citation, document block, artifact component, publication, recipe, Research Run, ActivityEvent, ActionCard, Product Truth signal, GitHub proposal, or export;
- Trust Dashboard coverage rows;
- source-change, publication, deletion, restore, repair, policy, release-candidate, and recipe simulation previews;
- developer API diagnostics where policy allows.

Atlas opens with a focused neighborhood, not the entire Project graph. Users can expand by depth, edge type, time window, source scope, claim state, automation, publication target, or owner. Every node and edge has an accessible list/table representation and a keyboard path.

## Lenses

### Evidence lens

Shows SourceVersions, ParsedElements, EvidenceSpans, Claims, DocumentBlocks, artifacts, and publications. It highlights unsupported, weak, disputed, stale, removed, rights-blocked, or private nodes.

### Impact lens

Shows what will change or become blocked if a source, document revision, claim, policy, connector, parser, model role, recipe, or publication changes. It produces an Impact Report before risky work proceeds.

### Maintenance lens

Shows stale claims, source-change propagation, open document patches, recurring repairs, source refresh failures, and upcoming maintenance windows.

### Automation lens

Shows Automation Recipes, triggers, runs, gates, outputs, side effects, outcome observations, adaptive-routing recommendations, and recipe invalidations.

### Product truth lens

Shows official references, feedback, public user-opinion signals, truth themes, requirements, implementation slices, documentation patches, contradictions, decisions, non-action decisions, and release evidence links.

### Collaboration lens

Shows comments, assignments, suggestions, reviews, decision records, unresolved objections, stale anchors, and review queue items attached to the selected resource.

### GitHub lens

Shows repository snapshots, code symbols, file paths, dependencies, documentation blocks, validation runs, change proposals, branches, commits, and draft pull requests.

## Impact report

An Impact Report is a reviewable preview with:

- target resource and expected version;
- direct and indirect dependents;
- affected claims, document blocks, artifacts, publications, exports, recipes, notifications, and GitHub proposals;
- hidden or redacted dependents count by reason;
- source rights, privacy, residency, retention, and publication implications;
- expected patches, review items, ActionCards, automation pauses, and invalidations;
- cost and latency class for repair or regeneration;
- confidence, unknowns, and untraversed edges;
- safest next actions.

Impact Reports can become Scenario Lab inputs when the user needs option comparison, cost and latency estimates, live-test labeling, stale-plan rejection, or an apply-candidate handoff. They can also become Reversible Work inputs when a restore, withdrawal, compensation, or reconciliation action may affect downstream resources. Atlas still owns graph traversal and redaction; Scenario Lab owns simulation records and decisions; Reversible Work owns recovery eligibility and outcomes.

Impact Reports are required before:

- deleting, revoking, replacing, or reprocessing sources used by documents or publications;
- accepting patches that change supported claims;
- publishing or withdrawing snapshots;
- activating or changing high-risk recipes;
- changing policy, model roles, parser versions, connector scope, or retention where downstream state exists;
- generating release evidence for a candidate;
- restoring, withdrawing, compensating, or reconciling high-risk Project state.

## Missing-link and path suggestions

Atlas can suggest:

- unlinked source mentions in documents;
- claims with related evidence but no direct support;
- isolated notes, artifacts, or decisions that are not connected to sources;
- related feedback or Product Truth signals that may affect requirements;
- path candidates between a user question and a document section;
- recipe candidates when a repeated path of actions appears.

Suggestions are drafts. They cannot create evidence support, product truth, document patches, or automation unless the owning contract approves the change.

## Search and command integration

Atlas extends search by making results explainable. A result can show:

- why it matched;
- which source, claim, document, or activity path supports it;
- whether it is stale, partial, private, or blocked;
- what other records depend on it;
- the safest next command.

Command Center actions include open Atlas, show local neighborhood, find path, run impact preview, open Scenario Lab from an Impact Report, open Reversible Work from an Impact Report, expand evidence lens, expand automation lens, create ActionCard, propose patch, simulate recipe impact, and export redacted map summary.
Work Packet recommendations can link to Atlas neighborhoods and Impact Reports when source changes, stale evidence, publication risk, recipe activation, deletion, or retention changes affect the viewer's current work.

## Safety and privacy

- Atlas never captures ambient screen activity, clipboard history, or OS-wide user behavior.
- Atlas never reveals unauthorized node titles, counts, edge labels, private comments, source text, hidden reasoning, credentials, connector payloads, or publication blockers.
- Redacted regions show reason categories only when that does not leak sensitive state.
- Public exports include only approved public projections and declared citation metadata.
- Support diagnostics default to metadata, hashes, and policy decisions.
- Every impact action follows expected versions, idempotency, ActivityEvents, and approval receipts.

## Performance expectations

Atlas must remain useful for large Projects:

- load a bounded neighborhood first;
- show aggregate counts before detailed nodes;
- paginate and virtualize lists;
- cap graph depth by default;
- cache permission-filtered projections with explicit invalidation;
- avoid full-graph browser rendering;
- preserve keyboard interaction while background expansion runs;
- show partial, stale, queued, degraded, blocked, unsupported, or cancelled state through Progressive Delivery.

## Non-goals

- Do not replace the three primary surfaces.
- Do not make a global graph the default Project home.
- Do not create a second evidence, document, memory, workflow, publication, or Product Truth authority.
- Do not use raw model embeddings as unexplained edges.
- Do not infer private work from ambient OS capture.
- Do not hide uncertainty behind a clean-looking map.
- Do not treat visual graph complexity as advanced UX.

## Acceptance criteria

Project Atlas is production-ready only when:

- `MAP-001` and `MAP-002` are implemented and tested;
- every displayed node and edge is derived from canonical records with viewer authorization;
- local neighborhoods, path search, and Impact Reports agree with the living dependency graph and source, claim, document, recipe, publication, activity, and Product Truth authorities;
- redacted and hidden nodes cannot leak private source, comment, support, connector, or publication state;
- Impact Reports are required for source revocation, publication, high-risk recipe activation, deletion, retention, policy, parser, model-role, recovery action, and release-candidate changes with downstream effects;
- Impact Reports handed to Scenario Lab preserve expected versions, redaction summaries, hidden-dependents policy, unknowns, cost and latency class, and recovery path;
- Impact Reports handed to Reversible Work preserve expected versions, redaction summaries, hidden-dependents policy, side-effect class, current drift, and irreversible-effect labels;
- missing-link suggestions create typed reviewable proposals, not silent links;
- performance tests cover large Projects without full-graph browser loading;
- Work Packet next-action recommendations that reference Atlas include the map view, Impact Report, redaction summary, and recovery path;
- accessibility tests cover graph, table, search, path, impact report, and command-center flows;
- release evidence includes impact-report correctness, redaction, stale-projection invalidation, path-query accuracy, and recovery behavior.

## Documentation update rule

Changes to Project Atlas, graph lenses, map search, Impact Reports, path queries, missing-link suggestions, or impact automation must update:

- [`project-workspace.md`](project-workspace.md)
- [`trust-dashboard-and-evidence-coverage.md`](trust-dashboard-and-evidence-coverage.md)
- [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`project-operating-layer-and-work-control.md`](project-operating-layer-and-work-control.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`scenario-lab-and-change-simulation.md`](scenario-lab-and-change-simulation.md)
- [`reversible-work-and-project-history.md`](reversible-work-and-project-history.md)
- [`../02-architecture/project-map-and-impact-analysis.md`](../02-architecture/project-map-and-impact-analysis.md)
- [`../02-architecture/reversal-ledger-and-compensation-engine.md`](../02-architecture/reversal-ledger-and-compensation-engine.md)
- [`../02-architecture/scenario-simulation-engine.md`](../02-architecture/scenario-simulation-engine.md)
- [`../02-architecture/living-dependency-graph.md`](../02-architecture/living-dependency-graph.md)
- [`../02-architecture/developer-platform-api.md`](../02-architecture/developer-platform-api.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
