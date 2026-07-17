# Model evaluation and change management

Models, prompts, retrieval settings, tool policies, and research-engine providers are versioned production dependencies. They may change output quality, cost, latency, safety, citation behavior, and customer trust without a code-schema change. Research therefore treats every material AI change as a controlled release.

## Versioned AI configuration

Every generation records:

- product capability and model role;
- provider and exact model identifier;
- provider route and fallback order;
- prompt and instruction-set version;
- tool definitions and policy version;
- retrieval, chunking, embedding, and reranking versions;
- structured-output schema;
- temperature and generation settings;
- source-version and memory snapshot identifiers;
- token, latency, cost, retry, and failure metadata.

The user-facing model selector resolves through a server-owned capability registry. UI labels never become the authority for provider identifiers or policy.

## Evaluation suites

### Grounded answering

Measure relevant-source recall, evidence precision, citation entailment, citation attribution, unsupported-claim rate, contradiction handling, temporal correctness, source diversity, source independence, and exact-locator resolution.

### Research planning and tools

Measure plan coverage, unnecessary work, query quality, tool selection, tool argument validity, loop termination, budget adherence, permission compliance, recovery from partial failure, and whether the agent asks for judgment only when necessary.

### Long-form generation

Measure outline coverage, section-contract completion, cross-section consistency, terminology, entity and date consistency, numeric reconciliation, duplication, unresolved contradictions, citation coverage, source freshness, editorial coherence, and selective-regeneration stability.

### Document changes

Measure patch validity, preservation of locked and human-authored regions, Markdown round-trip fidelity, minimality, provenance retention, stale-claim handling, public/private redaction, and merge-conflict behavior.

### Safety and governance

Measure prompt-injection resistance, data exfiltration, privilege escalation, unsafe tool use, excessive agency, sensitive-data handling, refusal correctness, rights and privacy compliance, tenant isolation, and denial-of-wallet behavior.

### Performance and economics

Measure time to first useful evidence, time to accepted artifact, end-to-end completion, model and tool cost, retry amplification, cache effectiveness, context utilization, and cost per accepted output.

## Datasets

Evaluation data is versioned and divided into development, regression, holdout, adversarial, and customer-reported sets. Test cases represent different source types, languages, document sizes, ambiguity levels, domains, permission boundaries, and expected failure modes.

Customer-derived cases require documented authorization, sanitization, retention, and access restrictions. They are not copied into public repositories or general analytics.

Each case defines the research question, permitted source snapshot, expected evidence or rubric, prohibited behavior, budgets, and scoring method. A single model judge is not the sole authority for factual or security correctness.

## Scoring

Use deterministic checks wherever possible:

- schema and tool-call validity;
- exact citation resolution;
- permission and source-scope compliance;
- numeric equality and tolerances;
- unsupported sentence detection;
- document-tree and Markdown invariants;
- cost, latency, and step limits.

Human review and calibrated model judges supplement deterministic checks for coherence, usefulness, and nuanced entailment. Judge prompts, models, thresholds, and calibration sets are versioned. Disagreement and confidence are retained rather than collapsed into false precision.

## Change classes

A patch-only provider alias correction may be low risk. A new frontier model, prompt architecture, retrieval strategy, tool permission, fallback route, or research engine is high risk. High-risk changes require broader evaluation, security review, staged rollout, and rollback evidence.

Model aliases that can move without notice are not used as the sole production identity. The registry records the resolved model observed for each run where the provider exposes it.

## Promotion process

1. State the hypothesis and affected capability.
2. Freeze baseline configuration and evaluation data.
3. Run offline regression and adversarial suites repeatedly where variance matters.
4. Analyze aggregate changes and case-level regressions.
5. Review safety, cost, latency, and provider-governance impact.
6. Deploy behind a server-side flag to internal and synthetic Projects.
7. Run shadow or sampled comparison without exposing unapproved output.
8. Expand through bounded cohorts with kill criteria.
9. Monitor accepted-output quality, corrections, complaints, cost, and latency.
10. Remove the old configuration only after the compatibility and observation window.

## Release gates

A change is blocked when it:

- increases unsupported claims or invalid citations beyond threshold;
- weakens permission, prompt-injection, or tool-safety behavior;
- causes material long-form inconsistency or document drift;
- exceeds cost, latency, step, or retry budgets;
- fails required language or accessibility cases;
- depends on an unapproved provider region, retention policy, or training-use policy;
- removes a required capability without a visible product-state change.

Aggregate improvement does not waive a severe regression in a protected or high-risk case.

## Online measurement

Online metrics distinguish model quality from retrieval, connector, parser, UI, and infrastructure failures. Feedback records the exact generation and evidence snapshot. User edits, citation opens, patch acceptance, regeneration, abandonment, and corrections are signals, not automatic labels of correctness.

Raw prompts, source bodies, and document content do not flow into general analytics. Sensitive investigation uses a separate audited workflow.

## Rollback

Every rollout preserves the prior compatible registry configuration, prompts, tools, and schemas. A kill switch can disable a model, provider, research engine, tool, or fallback independently. In-flight Research Runs either continue on their pinned configuration or transition through an explicit compatible migration.

Rollback criteria and authority are defined before rollout. Emergency fallback does not silently change source permissions, privacy policy, citation requirements, or customer-visible capability claims.

## Evidence retention

The release record stores evaluation versions, raw scores, confidence analysis, reviewed regressions, approvers, rollout cohorts, observed production metrics, and rollback target. Re-running the same suite against the same frozen configuration must be possible within provider reproducibility limits.
