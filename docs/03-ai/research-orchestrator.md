# Research orchestrator

Deep research is a durable evidence workflow, not a single oversized model call.

## Workflow

```text
Classify request
→ capture intent and run preflight
→ clarify and compile ResearchContract
→ create editable plan and outline
→ freeze permissions, source versions, model policy, and budgets
→ retrieve Project corpus
→ identify evidence gaps
→ dispatch bounded discovery workers
→ ingest and normalize new sources
→ extract claims and exact evidence
→ corroborate and challenge findings
→ build coverage matrix
→ draft bounded sections
→ reconcile global consistency
→ assemble documents and artifacts
→ audit citations, claims, privacy, and structure
→ propose typed patches
→ open review requests and decision records where required
→ obtain approval and commit revisions
→ schedule maintenance where requested
```

## Research contract

A contract records the accepted intent version, question, objectives, audience, deliverables, date and geographic scope, source rules, required viewpoints, prohibited sources, citation standard, output structure, target length, model policy, tools, budgets, approval points, assumptions, open questions, and completion criteria.

Intent capture and clarification policy are governed by [`../01-product/intent-capture-and-prompt-friction.md`](../01-product/intent-capture-and-prompt-friction.md) and [`../02-architecture/intent-preflight-and-clarification-policy.md`](../02-architecture/intent-preflight-and-clarification-policy.md). The orchestrator asks only when missing information materially changes source authority, risk, cost, output structure, approval path, or result scope. Otherwise it records safe assumptions and proceeds with an editable plan or reversible draft.
Review requests, suggestions, and decisions produced by research work are governed by [`../01-product/collaboration-review-and-decision-workflows.md`](../01-product/collaboration-review-and-decision-workflows.md) and [`../02-architecture/collaboration-comments-and-decisions.md`](../02-architecture/collaboration-comments-and-decisions.md).

## Durable behavior

Research Runs survive navigation, refreshes, disconnects, worker crashes, retries, and deployments. Every step is persisted. The user can inspect progress, modify eligible scope, interrupt work, approve sensitive actions, and retrieve partial artifacts.

## Engine fabric

The orchestrator can delegate bounded tasks to:

- Project-native AI SDK workers;
- OpenAI Deep Research;
- Gemini Deep Research;
- Tavily or Perplexity research services;
- isolated open-source workers such as GPT Researcher, PaperQA2, STORM, or Open Deep Research.

External engines never mutate canonical Project state directly. Their searches, citations, tool events, and outputs are normalized into ResearchStep, SourceCandidate, SourceVersion, EvidenceSpan, and Claim records.

## Long-form generation

A 40,000–60,000-word result is generated through section contracts and a global consistency ledger. Independent writers receive only authorized evidence, required claims, terminology, dependencies, and anti-duplication rules. Global audits detect unsupported claims, citation mismatch, contradictions, duplicate prose, numerical disagreement, entity drift, and private-data leakage.
