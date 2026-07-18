# Deep research and long-form generation

Long-form output needs a stricter process than short answers. Research should generate reports through contracts, evidence ledgers, section plans, citation audits, and reviewable document patches.

## Deep research lifecycle

```text
Intent record and preflight
-> clarification or safe assumptions
Research contract
-> source plan
-> acquisition and review
-> evidence inventory
-> claim ledger
-> outline and section contracts
-> draft sections
-> global consistency audit
-> citation audit
-> editorial pass
-> document patch proposal
```

## Research contract

A contract defines:

- accepted intent version;
- objective;
- audience;
- scope;
- excluded areas;
- source types;
- citation requirements;
- freshness requirements;
- length and structure;
- budget;
- approval points;
- assumptions and open questions;
- completion criteria.

The contract is editable before work begins and revisioned after changes.
Intent and prompt-friction behavior are governed by [`../01-product/intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md) and [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md).

## Section contracts

Each section has:

- thesis or job;
- required claims;
- allowed sources;
- required evidence density;
- unresolved questions;
- word budget;
- dependency on other sections;
- output schema;
- acceptance criteria.

Section contracts prevent one model pass from owning the whole report.

## Claim ledger

The claim ledger records:

- claim text;
- status;
- evidence spans;
- contradictions;
- confidence;
- source freshness;
- section dependencies;
- publication eligibility.

The final document is generated from ledger-backed sections, not from untracked notes.

## Consistency controls

Large documents need:

- terminology ledger;
- entity and date normalization;
- repeated-claim detection;
- contradiction detection;
- citation coverage thresholds;
- stale-source checks;
- unsupported-claim blocking;
- editorial tone pass;
- export validation.

## Regeneration

Users should be able to regenerate:

- one section;
- one claim explanation;
- one table;
- one summary;
- one citation audit;
- the final editorial pass.

Regeneration must preserve approved sections unless the user explicitly includes them.

## Launch standard

Deep research is production-ready only when:

- runs survive deploys and provider outages;
- cancellation works;
- costs are bounded;
- preflight and clarification policy are enforced before expensive work;
- citations are inspectable;
- partial results are safe;
- unsupported claims are blocked;
- long outputs remain editable Markdown;
- accepted documents can be maintained when sources change.
