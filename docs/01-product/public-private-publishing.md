# Public and private publishing

Public and private documentation are deterministic projections of one canonical document revision and one underlying claim/evidence graph. Source-change maintenance and stale-output blockers are governed by [`source-change-maintenance-and-living-docs.md`](source-change-maintenance-and-living-docs.md).

## No duplicate authorities

The product does not maintain an independently edited public copy and private copy. Projection rules select, redact, summarize, or transform canonical blocks while preserving stable relationships to the underlying revision.

## Publication workflow

1. Select document revision and projection policy.
2. Resolve claim and evidence dependencies.
3. Apply visibility, quotation, attribution, privacy, license, and rights rules.
4. Detect private-source leakage, unsupported claims, stale, disputed, removed, unresolved, rights-blocked, or provider-policy-blocked claims, private comments, reviewer identity, unresolved objections, and internal decision discussion.
5. Render a preview and source ledger.
6. Obtain required approval.
7. Create an immutable PublicationSnapshot.
8. Serve or export that snapshot.

Historical snapshots never change when canonical content changes. A new publication produces a new snapshot.

If a later source change affects a published claim, maintenance creates a review item with affected PublicationSnapshots, replacement or withdrawal options, and any required correction notice. Historical snapshots remain immutable until a governed withdrawal, replacement, or correction path creates a new public state.

## Public source behavior

A public document may cite a private source only when publication policy permits an appropriately redacted or summarized citation. Otherwise the affected claim is blocked, replaced with public evidence, or removed from the projection.

## Collaboration metadata

Publication preview shows unresolved comments, assignments, review requests, and decision records that affect the candidate snapshot. Private collaboration metadata is excluded from public projections by default, and any public-facing caveat must be generated from approved canonical content or an accepted publication decision rather than raw comment text. Collaboration behavior is governed by [`collaboration-review-and-decision-workflows.md`](collaboration-review-and-decision-workflows.md).

## Withdrawal and takedown

Publications support immediate withdrawal, legal or rights-based takedown, correction notices, replacement snapshots, audit history, and dependency tracing. Removing a source from active research does not erase historical publication evidence without a governed deletion process.
