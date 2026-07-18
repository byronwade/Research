# Context packs and agent handoff

**Review date:** 2026-07-18
**Status:** architecture contract, not implemented runtime behavior

Research packages high-quality Project context for people, models, software agents, MCP clients, SDK users, and handoff workflows. A context pack is a governed, versioned, scope-bound bundle assembled from canonical Project state. It is not a memory dump, prompt transcript, unfiltered RAG payload, or export shortcut.

Context packs solve a recurring user problem: long-running work loses continuity, overfills model context, repeats stale assumptions, or leaks irrelevant/private material. Research should make context portable and precise without replacing Sources, Claims, Documents, Memory, or permission checks.
Intent records and clarification decisions are governed by [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md) and may be included in a pack only as minimized task state.
Focus State, Resume Checkpoints, Resume Digests, Focus Sessions, and attention items are governed by [`focus-state-and-resume-digests.md`](focus-state-and-resume-digests.md) and may be included only when the pack purpose requires resumable work state.
PreferenceItems, AdaptiveInterfaceProfiles, and model-context preference summaries are governed by [`adaptive-preference-learning-and-interface-policy.md`](adaptive-preference-learning-and-interface-policy.md) and may be included only when the pack purpose requires visible, scoped personalization.

## Sources reviewed

Official references:

- [Model Context Protocol introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- [MCP specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [MCP resources specification](https://modelcontextprotocol.io/specification/2025-06-18/server/resources)
- [MCP tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)
- [MCP prompts specification](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts)
- [OpenAI Apps SDK MCP server documentation](https://developers.openai.com/apps-sdk/concepts/mcp-server)
- [OpenAI API MCP server documentation](https://developers.openai.com/api/docs/mcp)
- [Anthropic Model Context Protocol announcement](https://www.anthropic.com/news/model-context-protocol)
- [GitHub Copilot custom instructions documentation](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions)

Public user-opinion signals:

- [ChatGPT Projects context continuity complaint](https://www.reddit.com/r/ChatGPTPro/comments/1i4h83m/why_is_the_chatgpt_projects_feature_so_terrible/)
- [ChatGPT project context isolation complaint](https://www.reddit.com/r/OpenAI/comments/1tipung/it_has_become_obvious_that_chatgpt_project/)
- [Claude project knowledge context-flow complaint](https://www.reddit.com/r/ClaudeAI/comments/1o93qas/project_knowledge_is_now_just_snippets_lost/)
- [Claude Code context-management discussion](https://www.reddit.com/r/ClaudeAI/comments/1rrkv0h/how_are_you_guys_managing_context_in_claude_code/)
- [Context loss between Claude Code sessions](https://www.reddit.com/r/ClaudeCode/comments/1qn5tfc/how_do_you_handle_context_loss_between_claude/)
- [Hacker News discussion of agent context limits](https://news.ycombinator.com/item?id=44230838)
- [Hacker News discussion of context-clean subagents](https://news.ycombinator.com/item?id=46515696)

The product lesson is consistent: users want continuity and less repeated setup, but they also need context boundaries, freshness, source provenance, and clear handoff state.

## Context pack types

| Type | Purpose |
|---|---|
| `human-brief` | A concise handoff for a teammate, reviewer, support agent, or stakeholder. |
| `model-task` | Bounded model context for a specific Chat, research, verification, writing, or extraction task. |
| `agent-handoff` | State packet for a worker, subagent, or future resumed run. |
| `developer-handoff` | Repository and product context for coding agents or contributors. |
| `mcp-resource` | Read-first resource payload exposed through MCP or SDK clients. |
| `publication-context` | Evidence, rights, and claim state needed to verify a publication or export. |
| `support-diagnostic` | Metadata-first packet for troubleshooting without raw private content by default. |

Each type has its own schema, max size, allowed data classes, retention, redaction policy, and freshness rule.

## Assembly chain

Context packs are assembled from canonical state:

```text
Request objective
-> Project and authorization snapshot
-> accepted intent version, assumptions, and non-goals where relevant
-> source scope and SourceVersion set
-> relevant Documents, Claims, EvidenceSpans, MemoryItems, Runs, ReviewRequests, and DecisionRecords
-> FocusState, ResumeCheckpoint, ResumeDigest, and AttentionItems when the purpose requires resume state
-> approved PreferenceItems or preference summaries when the purpose requires personalization
-> minimization and ranking
-> redaction and rights checks
-> token, byte, and section budget
-> pack manifest and immutable version
```

The pack manifest records:

- Project, actor, purpose, and audience;
- accepted intent version and originating operation where relevant;
- creating operation and correlation ID;
- source version IDs and document revision IDs;
- claim IDs, evidence span IDs, memory IDs, and run IDs included;
- preference IDs and preference-summary policy included when personalization is used;
- excluded or unavailable content with reason;
- data classification, residency, provider policy, and retention;
- token and byte budget;
- prompt or tool policy when applicable;
- expiration and invalidation rules;
- content hash and schema version.

## Inclusion policy

Context packs include only what the target task needs. They prefer:

- authoritative Project instructions over conversation fragments;
- canonical Markdown blocks over transient chat prose;
- Claims and EvidenceSpans over generated summaries;
- current accepted DecisionRecords over stale alternatives;
- unresolved comments or review blockers as explicit handoff state, not hidden context;
- explicit source scope over broad Project access;
- links to exact evidence over copied long excerpts;
- structured summaries with provenance over raw dumps.

If exact content is required, the pack links to authorized source locators and records the reason. Large source excerpts are bounded and reviewed by classification and rights policy.

## Freshness and invalidation

A context pack becomes invalid, stale, or restricted when:

- Project, Organization, role, or service-account permissions change;
- a source is revoked, excluded, deleted, quarantined, or superseded;
- a relevant SourceVersion, DocumentRevision, Claim, MemoryItem, or policy changes;
- a relevant PreferenceItem, PreferencePolicy, AdaptiveInterfaceProfile, user correction, reset, export, or model-context preference rule changes;
- model/provider policy or residency eligibility changes;
- retention, legal hold, or customer deletion rules require suppression;
- the pack expires or exceeds allowed reuse count.

Invalid packs cannot be reused by agents, MCP clients, SDKs, exports, or support tools. Stale packs can be opened for review but must be rebuilt before use in model context.

## Agent handoff

An agent handoff pack records:

- task objective and non-goals;
- accepted intent version, assumptions, and clarification decisions;
- current plan, completed steps, blocked steps, and next safe action;
- source scope and evidence coverage;
- files, documents, claims, artifacts, and operations touched;
- accepted DecisionRecords, unresolved review blockers, and rejected alternatives;
- FocusState, ResumeCheckpoint, ResumeDigest groups, and attention items relevant to the next safe action;
- tool allowlist, prohibited actions, approval class, and budget;
- validation commands, tests, and evidence already run;
- open risks, assumptions, and required user approvals;
- replay or resume constraints.

Handoff packs are typed results from a run, not freeform chat summaries. A downstream agent must still perform policy checks before reading linked content or taking action.

## MCP and API exposure

Research exposes context packs through:

- browser UI export and copy actions;
- API resources and asynchronous operations;
- SDK helpers;
- CLI diagnostics;
- MCP read resources and bounded tools;
- webhooks that announce pack creation, expiry, invalidation, or review outcome.

MCP resources are read-first and may expose Project context, document trees, source inventories, claim summaries, evidence summaries, or operation state. MCP tools that create, refresh, or apply a context pack follow the same authorization, idempotency, expected-version, approval, and audit rules as the public API.

## User experience

Users should see:

- why a context pack exists;
- what it includes and excludes;
- who or what can use it;
- how fresh it is;
- what source versions and document revisions it depends on;
- whether it contains private, rights-restricted, or provider-limited data;
- what action will rebuild, revoke, export, or share it.

Context pack UX must avoid making users manage token budgets manually. The system should show tradeoffs such as concise, balanced, full-evidence, code-agent, reviewer, or support-safe mode.

## Security and governance

Context packs must not:

- bypass Project authorization;
- carry private source text into analytics, support tools, or public projections;
- outlive the permissions or source versions that authorized them;
- outlive the preferences, corrections, or policies that authorized personalization in the pack;
- hide stale or excluded sources;
- collapse disputed evidence into one confident summary;
- include credentials, secrets, private model traces, or hidden reasoning;
- let MCP clients or agents infer access from a pack URI alone.

Every pack read is authorized, attributable, and auditable. Pack URIs are identifiers, not bearer secrets.

## Metrics

Measure:

- pack creation latency;
- pack size and token use by type;
- context rebuild rate;
- stale or invalidated pack use attempts;
- agent task success by pack type;
- user corrections caused by missing or stale context;
- source leakage or policy-blocked pack attempts;
- cost reduction from bounded context versus broad retrieval;
- handoff restart time and repeated-question reduction.

These metrics guide product improvement. They do not prove correctness without citation, authorization, and outcome evidence.

## Non-goals

- Do not replace canonical Documents, Claims, Sources, or Memory with context-pack contents.
- Do not make one global Project prompt carry all product knowledge.
- Do not optimize only for maximum context-window size.
- Do not expose entire source corpora through MCP by default.
- Do not use context packs to preserve deleted, revoked, or rights-blocked content.
- Do not treat a handoff pack as completion evidence unless the referenced validation evidence exists.

## Launch gates

Context packs and handoff are production-ready only when:

- pack manifests are versioned and queryable;
- authorization is enforced before pack assembly, read, export, MCP exposure, and model use;
- source, document, claim, memory, and policy changes invalidate affected packs;
- preference reset, correction, deletion, policy changes, and model-context preference changes invalidate affected packs;
- pack content is minimized, redacted, and rights-checked;
- preference summaries in packs are minimized, scoped, explainable, and excluded from evidence support;
- focus and resume state included in a pack is minimized to references, versions, blockers, and next actions, and is reauthorized before downstream use;
- private comments, reviewer identity, unresolved objections, and internal decision discussion are excluded unless the pack purpose and viewer authorization explicitly allow them;
- API, SDK, CLI, and MCP representations match the same schema;
- handoff packs preserve task state, non-goals, approvals, and validation evidence;
- deletion and retention traversals suppress dependent packs;
- telemetry records pack lifecycle without private content;
- tests prove cross-tenant isolation, stale-pack rejection, source revocation, replay behavior, and support-safe diagnostics.

## Documentation update rule

Changes to context-pack behavior must update:

- [`developer-platform-api.md`](developer-platform-api.md)
- [`intent-preflight-and-clarification-policy.md`](intent-preflight-and-clarification-policy.md)
- [`collaboration-comments-and-decisions.md`](collaboration-comments-and-decisions.md)
- [`../08-build/developer-platform-api-sdk.md`](../08-build/developer-platform-api-sdk.md)
- [`../03-ai/project-memory.md`](../03-ai/project-memory.md)
- [`adaptive-preference-learning-and-interface-policy.md`](adaptive-preference-learning-and-interface-policy.md)
- [`../04-sources/indexing-and-retrieval.md`](../04-sources/indexing-and-retrieval.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../06-delivery/product-readiness-gap-audit.md`](../06-delivery/product-readiness-gap-audit.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)

If context-pack behavior conflicts with source authorization, deletion, evidence, memory, or publication policy, the governing contract wins and the pack contract must be corrected.
