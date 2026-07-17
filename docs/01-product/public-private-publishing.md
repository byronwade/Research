# Public and private publishing

Public and private documentation are deterministic projections of one canonical document revision and one underlying claim/evidence graph.

## No duplicate authorities

The product does not maintain an independently edited public copy and private copy. Projection rules select, redact, summarize, or transform canonical blocks while preserving stable relationships to the underlying revision.

## Publication workflow

1. Select document revision and projection policy.
2. Resolve claim and evidence dependencies.
3. Apply visibility, quotation, attribution, privacy, license, and rights rules.
4. Detect private-source leakage and unsupported claims.
5. Render a preview and source ledger.
6. Obtain required approval.
7. Create an immutable PublicationSnapshot.
8. Serve or export that snapshot.

Historical snapshots never change when canonical content changes. A new publication produces a new snapshot.

## Public source behavior

A public document may cite a private source only when publication policy permits an appropriately redacted or summarized citation. Otherwise the affected claim is blocked, replaced with public evidence, or removed from the projection.

## Withdrawal and takedown

Publications support immediate withdrawal, legal or rights-based takedown, correction notices, replacement snapshots, audit history, and dependency tracing. Removing a source from active research does not erase historical publication evidence without a governed deletion process.
