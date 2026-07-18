# Source-change maintenance and living docs

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research keeps documents current after sources, repositories, official references, product decisions, and user feedback change. Source-change maintenance is the user-facing contract for `MAINT-001`: source changes revalidate dependent Claims and produce the smallest safe document patches without silently rewriting canonical content.

The architecture is governed by [`../02-architecture/continuous-knowledge-maintenance.md`](../02-architecture/continuous-knowledge-maintenance.md). Dependency traversal is governed by [`../02-architecture/living-dependency-graph.md`](../02-architecture/living-dependency-graph.md). Publication blockers are governed by [`public-private-publishing.md`](public-private-publishing.md), and trust inspection is governed by [`trust-dashboard-and-evidence-coverage.md`](trust-dashboard-and-evidence-coverage.md).

## Sources reviewed

Official capability and documentation-practice references reviewed on 2026-07-18:

- [GitHub Dependabot version updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates)
- [GitHub webhooks documentation](https://docs.github.com/en/webhooks)
- [GitHub repository webhooks REST API](https://docs.github.com/rest/webhooks/repos)
- [Notion wikis and verified pages](https://www.notion.com/help/wikis-and-verified-pages)
- [Notion guide to verified knowledge](https://www.notion.com/help/guides/verify-knowledge-your-teammates-can-trust-with-page-verification)
- [Docusaurus versioning](https://docusaurus.io/docs/versioning)
- [Google NotebookLM source discovery](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-discover-sources/)
- [NotebookLM source handling help](https://support.google.com/notebooklm/answer/16215270?co=GENIE.Platform%3DDesktop&hl=en)

Public user-opinion and practitioner signals reviewed on 2026-07-18:

- [Hacker News discussion on drift between implementation and documentation](https://news.ycombinator.com/item?id=40317113)
- [Hacker News discussion on write-only developer documentation](https://news.ycombinator.com/item?id=48411510)
- [Hacker News discussion on internal documentation](https://news.ycombinator.com/item?id=41415619)
- [Reddit discussion on harmful outdated documentation](https://www.reddit.com/r/ExperiencedDevs/comments/1qejexx/documentation_is_three_years_out_of_date_and/)
- [Reddit discussion on outdated documentation and productivity](https://www.reddit.com/r/softwaredevelopment/comments/1k65vup/how_much_does_outdated_documentation_hurt_your/)
- [Reddit discussion on documentation becoming obsolete](https://www.reddit.com/r/devops/comments/vn0mkf/seems_that_documentation_becoming_obsolete_is_a/)

These signals are directional. They justify maintenance controls, review states, and validation tests; they are not customer-facing proof that Research eliminates documentation drift.

## Product purpose

The maintenance surface answers:

- What changed in a Source, repository, official reference, connector object, product decision, or user feedback theme?
- Which Claims, DocumentBlocks, MemoryItems, artifacts, PublicationSnapshots, exports, recipes, Product Truth records, or public claims depend on the old state?
- Which dependent Claims are still supported, weakened, contradicted, stale, removed, unsupported, or unresolved?
- What is the smallest safe patch or review action?
- Which outputs are blocked until a human or policy-approved automation resolves the change?
- Which maintenance work can run on a schedule, and which must remain manual or approval-gated?

This is the source-change autopilot promised by the advanced-feature bar, but "autopilot" means visible monitoring and reviewed patch proposals. It does not mean hidden background rewriting.

## User-facing surfaces

Maintenance appears in five places:

| Surface | User job |
|---|---|
| Sources | Inspect source freshness, latest SourceVersion, change summary, sync errors, and downstream impact. |
| Trust Dashboard | See stale, disputed, removed, unsupported, or unresolved Claims and publication blockers. |
| Project Atlas | Preview downstream effects through Impact Reports before accepting source, document, publication, recipe, retention, or repository changes. |
| Activity and Review Queue | Review MaintenanceActionCards, patch proposals, blocked publications, failed refreshes, and user decisions. |
| Automation Registry | Manage scheduled source refresh, repository sync, official-reference review, stale-claim sweeps, and maintenance Playbooks. |

Normal users should not need to understand graph internals. They should see "what changed," "what depends on it," "what Research recommends," and "what happens if I approve, defer, or reject."

## Maintenance states

Every maintenance run uses explicit visible state:

```text
not_configured
scheduled
queued
checking_source
diff_found
no_material_change
mapping_locators
revalidating_claims
impact_ready
patches_proposed
waiting_for_review
partially_applied
applied
blocked
failed
cancelled
stale
```

Each dependent Claim uses the canonical claim states from evidence policy:

```text
supported
corroborated
inferred
disputed
unsupported
stale
removed
unresolved
```

Unsupported, disputed, removed, unresolved, and policy-blocked Claims cannot silently remain publication-ready.

## Maintenance controls

Users and Project owners can configure:

- source family and source scope;
- schedule, quiet hours, and refresh cadence;
- freshness horizon by source type or claim risk;
- whether updates create patches, review cards, notifications, or only stale labels;
- cost class, concurrency, and monthly budget;
- approval class for low-risk patch batches, locked content, public content, external writes, repository patches, and publication changes;
- owner, fallback reviewer, and escalation path;
- stop conditions such as repeated failed fetches, parser drift, conflicting evidence, cost anomaly, connector permission loss, or unsupported high-risk Claims.

Maintenance cannot be enabled from a hidden system prompt, model suggestion, or connector event alone. The Automation Registry owns scheduled or recurring activation.

## Patch policy

Maintenance proposals are typed document patches with:

- changed SourceVersion, source diff, and locator mapping evidence;
- affected Claim, DocumentBlock, MemoryItem, artifact, publication, recipe, or Product Truth refs;
- expected base revision and stable block IDs;
- support-state changes and publication risk;
- minimal Markdown diff;
- confidence, risk class, cost class, and approval class;
- accessible rationale explaining what changed and why the patch is the smallest safe action;
- recovery path: reject, edit, split, defer, mark historical, request stronger evidence, open Scenario Lab, or create a follow-up Research Run.

Research may batch equivalent low-risk proposals only when policy allows and every patch still shows its own evidence, expected version, and rollback or correction path. Locked, published, public, externally written, billing-impacting, connector-widening, or high-risk evidence changes require configured approval.

## Advanced automation behavior

Maintenance automation may:

- monitor selected sources, repositories, web captures, connector objects, and official references;
- create new immutable SourceVersions;
- compute structural and semantic diffs;
- revalidate ClaimEvidence and EvidenceSpans;
- open Impact Reports for downstream effects;
- propose minimal patches;
- queue publication blockers;
- notify owners;
- create Product Truth signals for competitor, provider, official-reference, or user-opinion changes;
- recommend an Automation Recipe or Playbook when the same safe maintenance pattern repeats.

Maintenance automation may not:

- silently rewrite canonical Documents, MemoryItems, publications, or Product Truth decisions;
- keep stale Claims publication-ready to avoid user interruption;
- treat generated summaries as independent corroboration;
- infer authorization from source visibility;
- widen connector, file-watch, native companion, publication, support, GitHub, billing, or external-write permissions;
- hide disputed evidence, parser drift, or failed source refreshes to preserve a green status;
- make customer-facing benchmark, competitor, provider, pricing, legal, or policy claims from stale references.

## UX requirements

The maintenance experience must:

1. show a compact Project-level maintenance status without forcing a graph view;
2. label source freshness, last checked time, next check time, blocked reason, and owner;
3. group affected Claims and patches by user impact, not by internal table;
4. keep "no material change" separate from "refresh failed";
5. show publication and export blockers before optional cleanup;
6. preserve keyboard, screen-reader, and narrow-screen review flows;
7. let users compare the old support evidence with the new support evidence;
8. support bulk review only for equivalent low-risk patches;
9. expose cancellation, pause, retry, and defer actions;
10. record accepted, edited, rejected, deferred, and manually rewritten maintenance outcomes.

## Non-goals

- Do not replace human review for material factual, public, locked, legal, billing, connector, support, or external-write changes.
- Do not treat source freshness as factual support; a current source can still contradict or fail to support a Claim.
- Do not run OS-wide, browser-history, clipboard, screenshot, or broad filesystem monitoring to detect source changes.
- Do not make a generated maintenance summary the new source of evidence.
- Do not create a second document authority outside canonical Document revisions and typed patches.
- Do not hide maintenance cost by running unbounded scheduled research.

## Acceptance criteria

Source-change maintenance is production-ready only when:

- `MAINT-001` is implemented and tested;
- Sources show SourceVersion freshness, change summary, materiality, sync error, and downstream impact status;
- every maintenance run links to ActivityEvents, Operation state, SourceVersions, affected Claims, proposed patches, Impact Reports, and review decisions;
- claim revalidation distinguishes supported, corroborated, inferred, disputed, unsupported, stale, removed, and unresolved states;
- MaintenanceActionCards and patch proposals preserve expected versions, approval class, evidence links, and recovery paths;
- public/private projections, exports, and publication candidates block unresolved unsafe changes;
- scheduled maintenance appears in the Automation Registry with owner, cadence, budget, quiet hours, stop conditions, last useful output, and next review action;
- Product Truth signals are created for official-reference, public user-opinion, competitor, provider, runtime, or strategic-bet changes that affect product scope;
- metrics distinguish accepted patches, rejected patches, stale-claim resolution, false positives, cost, latency, approval burden, and user corrections;
- support diagnostics expose maintenance metadata without private content leakage;
- accessibility and performance tests cover large Projects, high-change sources, and review batches.

## Documentation update rule

Changes to source-change maintenance, living documentation, maintenance automation, stale-claim review, or maintenance patch behavior must update:

- [`../02-architecture/continuous-knowledge-maintenance.md`](../02-architecture/continuous-knowledge-maintenance.md)
- [`../02-architecture/living-dependency-graph.md`](../02-architecture/living-dependency-graph.md)
- [`trust-dashboard-and-evidence-coverage.md`](trust-dashboard-and-evidence-coverage.md)
- [`project-atlas-and-impact-navigator.md`](project-atlas-and-impact-navigator.md)
- [`activity-timeline-and-review-queue.md`](activity-timeline-and-review-queue.md)
- [`automation-ux-and-performance-principles.md`](automation-ux-and-performance-principles.md)
- [`composable-automation-recipes-and-playbooks.md`](composable-automation-recipes-and-playbooks.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/event-webhook-and-idempotency-contract.md`](../07-reference/event-webhook-and-idempotency-contract.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- routing, implementation-plan, and requirement metadata
