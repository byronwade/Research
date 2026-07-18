# External signal refresh and competitive watch

**Review date:** 2026-07-18
**Status:** delivery and Product Truth evidence contract, not runtime behavior

Research's operating-layer strategy depends on moving targets: operating systems, browser shells, workspace agents, model platforms, automation builders, user trust norms, and public sentiment change quickly. One-time audits are not enough. This contract defines how Research refreshes external capability evidence and user-opinion signals without letting fresh news, competitor motion, or public anecdotes create documentation drift.

## Source basis

Official sources reviewed on 2026-07-18:

- [Microsoft Support: Retrace your steps with Recall](https://support.microsoft.com/en-us/windows/ai/ai-features/retrace-your-steps-with-recall) and [Microsoft Learn: Recall overview](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/) for optional Recall behavior, local snapshots, filters, app and website exclusions, disk controls, and deep-link integration.
- [Microsoft Learn: App Actions on Windows](https://learn.microsoft.com/en-us/windows/ai/app-actions/) and [Action definition JSON schema](https://learn.microsoft.com/en-us/windows/ai/app-actions/actions-json) for registered atomic actions, typed entities, inputs, outputs, availability, and invocation metadata.
- [Apple Support: Use Apple Intelligence in Shortcuts on iPhone](https://support.apple.com/guide/iphone/use-apple-intelligence-in-shortcuts-iph78c41eaf8/ios), [Apple Developer: What's new in Shortcuts, WWDC26](https://developer.apple.com/videos/play/wwdc2026/310/), and [Apple App Intents](https://developer.apple.com/documentation/appintents) for intelligent Shortcut actions, on-device or Private Cloud Compute model choices, ChatGPT model use, app entities, App Intents, and cross-device shortcut information.
- [OpenAI Apps SDK tool planning](https://developers.openai.com/apps-sdk/plan/tools) and [Apps SDK reference](https://developers.openai.com/apps-sdk/reference) for model-facing tools, input and output schemas, structured content, read-only and destructive hints, and metadata-driven discovery.
- [OpenAI: Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/), [OpenAI ChatGPT Enterprise and Edu release notes](https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes), and [ChatGPT Work](https://chatgpt.com/work/) for workspace agents, admin controls, activity and usage visibility, recurring work, approved business context, and agent-driven deliverables.
- [Notion: How we built security into Custom Agents](https://www.notion.com/blog/how-we-built-security-into-custom-agents), [Notion Custom Agents security features](https://www.notion.com/help/custom-agents-security-features), and [Notion 3.3 Custom Agents release notes](https://www.notion.com/releases/2026-02-24) for build-from-nothing access, connected-resource editor checks, visible agent access, sharing, permissions, and behind-the-scenes team workflows.

Independent research and survey sources reviewed on 2026-07-18:

- [Mozilla Research: Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for 2026 browser-choice findings about harmful design patterns, regional variation, Windows migration default resets, and AI interfaces that ignore user browser defaults.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai) for high AI-tool adoption, mixed AI-tool favorability, low accuracy trust, AI-agent adoption limits, and strong agent accuracy, security, privacy, workflow-integration, learning-curve, and cost concerns.
- [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/) and [Pew worker AI attitudes](https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/) for broad concern, workplace worry, overwhelm, and regulatory-trust signals.
- [How Agents Ask for Permission](https://arxiv.org/html/2607.13718v1) and [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/html/2605.24309v1) for current research on user-level agent permission systems, policy enforcement, cognitive burden, approval fatigue, and scope creep.

Directional public user and practitioner signals reviewed on 2026-07-18:

- [Hacker News discussion of agent filesystem permissions and permission fatigue](https://news.ycombinator.com/item?id=47550282).
- [Reddit discussion of local-agent deletion gates and approval-level visibility](https://www.reddit.com/r/AI_Agents/comments/1uy4dei/after_building_a_local_agent_that_deletes_files_i/).
- [Hacker News discussion of approval-link gating for dangerous agent actions](https://news.ycombinator.com/item?id=47096253).
- [Reddit discussion of Windows Recall privacy and attack-surface concerns](https://www.reddit.com/r/sysadmin/comments/1rtgnsh/redesigned_windows_recall_cracked_again/).
- [Reddit discussion of iOS automations that become useful only when they save real effort](https://www.reddit.com/r/shortcuts/comments/1pnyy11/the_ios_automations_that_really_change_everyday/).
- [Reddit discussion of iOS 27 AI shortcut generation](https://www.reddit.com/r/shortcuts/comments/1u0on6n/how_good_is_ios_27_ai_shortcut_generation/).
- [Reddit discussion of Power Automate Copilot flow-authoring context gaps](https://www.reddit.com/r/PowerAutomate/comments/1tjr0j8/why_is_copilot_so_bad_at_creating_flows/).
- [Reddit discussion of MCP structured output](https://www.reddit.com/r/mcp/comments/1uw8gjr/the_best_thing_i_did_for_my_mcp_server_was_stop/).
- [Reddit discussion of MCP schema context budgets](https://www.reddit.com/r/LLMDevs/comments/1utvb34/mcp_tool_schemas_are_quietly_eating_my_context/).

Public user-opinion sources are directional signals and must be classified under [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md). Customer-facing wording and stale-source claim blocking are governed by [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md). Public signals can trigger watch items, Product Truth reviews, user-research plans, experiments, or non-action decisions; they cannot prove market demand, feature quality, trust, accessibility, or production readiness by themselves. When a user-opinion theme affects scope, validation gates, benchmark scenarios, launch evidence, or customer-facing language, the raw signal must route through [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) before it can be promoted.

## Authority

This contract feeds:

- [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md);
- [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md);
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md);
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md);
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md);
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md);
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md);
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md);
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md);
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md);
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md);
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md);
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md);
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md);
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md);
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md);
- [`../07-reference/official-references.md`](../07-reference/official-references.md).

It does not make competitor behavior authoritative. It keeps external evidence current enough that Research can make deliberate decisions about what to adopt, adapt, reject, defer, or validate with users.

## Watch domains

### Operating-system recall and context action

Track:

- Recall, Click to Do, AI Search, Spotlight, Siri, Apple Intelligence, Shortcuts, app intents, handoff, focus, notification, and window or workspace changes;
- opt-in or default state, removal, pause, filtering, retention, local storage, administrator controls, privacy guarantees, deep links, and user trust reactions;
- whether competitors use ambient capture, explicit grants, current-screen context, local-first state, or cloud processing.

Research default: Project-native state, explicit companion grants, no ambient capture, visible revocation, and no OS-wide memory authority.

### Workspace agents and team automation

Track:

- workspace agents, ChatGPT Work, Notion Custom Agents, Glean Agents, Atlassian Rovo, Zapier Agents, Copilot Studio, Power Automate, n8n, and similar systems;
- agent creation, preview, publishing, scheduling, sharing, permissions, editor checks, admin controls, usage visibility, activity logs, pricing, versioning, analytics, and retirement;
- user reactions to reliability, cost, approval fatigue, security, hidden access, and debugging.

Research default: Project-native Automation Recipes, deterministic preflight, dry-runs, canaries, outcome scorecards, run debugger, delegated trust, and hard-stop action classes.

### Performance and perceived latency

Track:

- streaming, resumable work, progressive delivery, long-running agents, background tasks, offline local state, preloading, speculative preparation, and status surfaces;
- user reactions to waiting, vigilance, hidden progress, unclear partial results, cancellation, and task-switching.

Research default: first useful status, Partial Results, stale labels, cancellation, recovery, wait confidence, and user-perceived latency measured alongside system SLOs.

### UX, workspaces, and task continuity

Track:

- command palettes, keyboard workflows, tab groups, browser spaces, OS workspaces, Stage Manager, PowerToys Workspaces, Snap, FancyZones, focus modes, notification summaries, and resume surfaces;
- user reactions to tab overload, brittle restore, hidden command surfaces, shortcut collisions, notification overload, and context reconstruction.

Research default: Worksets, Command Center, Focus State, Resume Digests, Project Atlas, and task-aware panes derived from canonical Project records rather than window capture.

### Typed action surfaces and model tools

Track:

- App Intents, Windows App Actions, Gemini Connected Apps, OpenAI Apps SDK, MCP tooling, Shortcuts, Power Automate, command palettes, native companion command bridges, browser-extension actions, and connected-app action catalogs;
- descriptor schemas, input and output contracts, entity binding, availability and disabled reasons, read-only or destructive hints, caller filtering, schema loading, action search, tool-routing accuracy, and context-budget behavior;
- user and practitioner reactions to vague action context, brittle authoring, hidden side effects, long tool descriptions, prose outputs, failed action selection, and hard-to-test tool-description changes.

Research default: Project Action Surface descriptors generated from canonical Project policy and domain contracts, with compact projections, server-owned preflight, expected versions, idempotency, approvals, Activity, audit, and no OS, assistant, MCP, companion, browser extension, or recipe bypass path.

### Trust, safety, privacy, and approval behavior

Track:

- permission models, agent access visibility, default-deny designs, editor ownership checks, admin controls, access revocation, approval prompts, delegated permissions, audit logs, EKM, data residency, and support diagnostics;
- user reactions to hidden access, agent sprawl, repeated approvals, review habituation, and broad OS surveillance.

Research default: least-privilege Project policy, mutation-boundary enforcement, visible grants, support-safe diagnostics, approval-load budgets, and Product Truth records for accepted and rejected signals.

## Refresh cadence

The watch refresh cadence is:

| Trigger | Required action |
|---|---|
| Monthly until first public launch | Refresh official sources for OS, workspace-agent, automation, model, browser, and documentation-control domains that affect accepted differentiators. |
| Before any implementation slice changes affected scope | Refresh official references and directional user signals for the affected requirement prefixes. |
| Before customer-facing claims | Recheck primary official sources and runtime evidence; public user posts remain directional only. |
| After major vendor release, pricing change, security update, beta/GA status change, or policy change | Create or update a TruthSignal and run semantic drift review. |
| After repeated customer feedback, usability blocker, support issue, or dogfood failure | Create a Product Truth review, user-research plan, non-action decision, or implementation issue. |
| Before production promotion | Include current watch snapshot, unresolved signal decisions, stale official-reference list, and non-action decisions in release evidence. |

If a source is unstable and cannot be refreshed, do not use it for launch claims. Mark the watch item stale or blocked.

## Watch item record

Every material external signal uses a `CompetitiveWatchItem` shape:

```text
id:
source_type: official | public-opinion | practitioner | research | customer | runtime
source_quality_record:
user_opinion_synthesis_record_refs:
source_url:
reviewed_at:
watch_domain:
capability_or_signal:
confidence: official-current | runtime-observed | customer-validated | validated-theme | repeated-signal | directional | anecdote | generated-only | stale | contradicted
representativeness: official | runtime | named-customer | validated-segment | probability-sample | opt-in-sample | self-selected | unknown | not-applicable
bias_risks:
affected_requirements:
affected_docs:
objective_dimension: performance | usability | user-experience | automation | trust | reviewability | recoverability | security | commercial-viability
decision: accept | reject | defer | research-more | accepted-risk | non-action | stale | contradicted
validation_needed:
owner:
revisit_trigger:
```

The record may live in Product Truth once implemented. During specification work, the canonical expression is the affected foundation audit, Product Truth contract, [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md), readiness gate, or implementation evidence entry.

When the signal is a newly surfaced OS, browser, workspace-agent, app-intent, connected-app, automation, agent-observability, performance-UX, permission-governance, customer, support, dogfood, runtime, research, generated-summary, or public-opinion pattern that could change accepted scope, rejected non-actions, benchmark comparators, implementation plans, or public claims, it must also create or update a `FrontierSignalReview` under [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md).

## Decision policy

External evidence can move Research only when the decision is explicit:

- `accept`: the signal changes requirements, docs, tests, launch gates, or implementation scope.
- `reject`: the signal is intentionally not adopted because it violates invariants, adds a second authority, weakens evidence, increases hidden capture, worsens approval fatigue, or lacks user value.
- `defer`: the signal is plausible but blocked by missing dependencies or unproven foundations.
- `research-more`: the signal requires user research, prototype testing, support analysis, or stronger official evidence.
- `accepted-risk`: the team knowingly ships a bounded risk with owner, mitigation, expiry, and customer impact.
- `non-action`: the team records why a tempting feature, competitor pattern, or public complaint does not change Research.
- `stale` or `contradicted`: the signal cannot guide current work until refreshed or resolved.

Novelty is never enough. A signal must improve performance, usability, user experience, automation leverage, trust, reviewability, recoverability, maintainability, commercial viability, or security without violating the non-negotiable invariants.

User-opinion signals require extra promotion discipline. A public thread, support note, dogfood comment, benchmark note, generated summary, or AI-highlight cluster can create or update a `CompetitiveWatchItem`, but it cannot update Product Truth, accepted scope, launch evidence, benchmark scope, outcome claims, or customer-facing claim language until a reviewed `UserOpinionSynthesisRecord` records the source basis, codebook, coding assignments, negative evidence, contradiction state, AI-assist disclosure, blocked claims, owner, and expiry.

## Current 2026 watch implications

The July 2026 signal set reinforces these decisions:

- OS recall and screen action are real market directions, but public privacy concerns remain strong. Research continues to reject OS-wide screenshot recall and ambient browser, clipboard, filesystem, keylogging, camera, microphone, or OS-window capture.
- Apple and Microsoft are moving more automation and continuity into system surfaces. Research should compete by making Project-scoped context more useful than generic device context, not by widening capture.
- Workspace-agent products are normalizing shared agents, schedules, admin controls, activity views, usage analytics, security checks, and credit-based pricing. Research should require automation registry, dry-runs, outcome scorecards, cost projections, and run debugger before unattended automation expands.
- Notion's default-deny and editor-access checks validate Research's deterministic permission posture. Research should keep agent access visible and fail closed when owner, editor, source, destination, or policy state drifts.
- User signals around shortcuts and automations favor quiet, durable, actually useful routines over flashy demos. Research should measure accepted outcomes, saved effort, mental-load reduction, and failure recovery instead of run count.
- User signals around approval and agent safety reinforce delegated risk policy: fewer prompts is good only when low-risk work is structurally bounded and high-risk work remains clearly gated.
- Browser-choice and AI-surface research reinforces that user choice is product trust evidence. Research should treat opt-in activation, disable controls, export/import, policy-managed state, no forced browser or assistant path, and no nag loops as launch evidence for advanced UX rather than treating them as secondary settings details.
- Typed action-surface signals reinforce that action discoverability is becoming a platform capability. Research should adapt that pattern through Project Action Surface descriptors and reject prompt-only mutation, source-defined actions, hidden handler code, and action/tool volume as value proof.
- Developer and public survey signals reinforce that adoption does not equal trust. Research should require accuracy, privacy, control, and security comprehension evidence before making productivity, safe-automation, or trusted-agent claims.

## Launch gates

Before production launch:

- all accepted advanced operating-layer differentiators have current watch items or confirmed no-change refreshes;
- frontier-driven changes have current FrontierSignalReviews or Product Truth equivalents before they create opportunities, prototypes, benchmark scope, implementation plans, or public claims;
- every customer-facing competitor, OS, model, platform, pricing, security, privacy, beta/GA, or capability claim has a current official source review;
- public, practitioner, survey, news, generated-summary, customer, official, and runtime signals that affect scope have source-quality records and are linked to Product Truth decisions or non-action decisions;
- user-opinion watch items that affect scope, validation gates, benchmark scenarios, outcome claims, Product Truth, or customer-facing language link to current `UserOpinionSynthesisRecord` records with codebook, coding, negative-evidence, contradiction, AI-assist, owner, expiry, and blocked-claim metadata;
- no stale watch item supports a launch claim;
- every stronger-than-specification external or competitor claim in public copy has a CustomerClaimEvidenceRecord with current official-source review, exact claim scope, blocked language, and excluded cases;
- semantic drift review confirms affected requirements, docs, routing, readiness, and launch gates moved together;
- user-research and experience-validation plans exist for accepted signals that affect UX, trust, performance perception, automation, native companion, or accessibility claims;
- advanced signals that moved through prototype, dogfood, or beta have current `AdvancedFeatureIncubation` records with feature-flag, kill-criteria, benchmark, and Product Truth evidence;
- advanced or better-than claims have current `AdvancedDifferentiationBenchmarkRecord` comparator sources or are blocked as stale;
- release evidence includes a watch snapshot, stale-source list, unresolved signal decisions, and follow-up owners.

## Documentation update rule

When competitive watch changes Product direction, update affected docs in the same change:

- [`../00-foundation/user-opinion-and-competitive-signal-audit.md`](../00-foundation/user-opinion-and-competitive-signal-audit.md)
- [`../00-foundation/ai-work-os-and-agent-automation-signal-audit.md`](../00-foundation/ai-work-os-and-agent-automation-signal-audit.md)
- [`../00-foundation/advanced-operating-layer-differentiation.md`](../00-foundation/advanced-operating-layer-differentiation.md)
- [`../00-foundation/advanced-feature-opportunity-register.md`](../00-foundation/advanced-feature-opportunity-register.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`semantic-drift-and-contradiction-review.md`](semantic-drift-and-contradiction-review.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`../01-product/product-truth-board-and-contradiction-radar.md`](../01-product/product-truth-board-and-contradiction-radar.md)
- [`../02-architecture/product-truth-graph-and-contradiction-detection.md`](../02-architecture/product-truth-graph-and-contradiction-detection.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)

If the watch refresh contradicts a current requirement or accepted differentiator, record the contradiction before implementation proceeds.
