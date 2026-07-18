# Adaptive personalization and preference controls

**Review date:** 2026-07-18
**Status:** product contract, not implemented runtime behavior

Research should learn how an authorized user wants to work inside a Project without becoming a hidden profile, a second memory authority, or a source of factual truth. Personalization exists to reduce repetition, surface better defaults, preserve user control, and make dense research work feel stable across sessions, devices, modes, and teams.

This document governs `PREF-001`. The architecture policy for preference records, adaptive interface state, learning observations, and enforcement is governed by [`../02-architecture/adaptive-preference-learning-and-interface-policy.md`](../02-architecture/adaptive-preference-learning-and-interface-policy.md). Project Memory remains governed by [`../03-ai/project-memory.md`](../03-ai/project-memory.md); product analytics and feedback remain governed by [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md).

## Sources reviewed

Official capability references:

- [ChatGPT Projects](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [ChatGPT Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)
- [Claude chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)
- [Gemini memory and personal intelligence controls](https://support.google.com/gemini/answer/16598469)
- [Microsoft 365 Copilot personalization and memory](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory)
- [Visual Studio Code Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync)
- [Visual Studio Code Profiles](https://code.visualstudio.com/docs/configure/profiles)
- [W3C Personalization Semantics Explainer](https://www.w3.org/TR/2020/WD-personalization-semantics-1.0-20200127/)
- [Notion 3.0 Agent personalization](https://www.notion.com/blog/introducing-notion-3-0)
- [Raycast AI Extensions custom instructions](https://manual.raycast.com/ai/ai-extensions)

Public user-opinion and practitioner signals:

- [Hacker News settings discussion](https://news.ycombinator.com/item?id=30181291)
- [Hacker News AI memory architecture discussion](https://news.ycombinator.com/item?id=45214908)
- [Hacker News AI memory control discussion](https://news.ycombinator.com/item?id=45684719)
- [Reddit Gemini personal context discussion](https://www.reddit.com/r/GeminiAI/comments/1mpgocw/geminis_new_personal_context_is_not_just_better/)
- [Reddit ChatGPT memory reliability discussion](https://www.reddit.com/r/ChatGPT/comments/1myikp7/the_memory_is_gone_the_hype_is_back_is_openai/)
- [Reddit selective memory concern](https://www.reddit.com/r/singularity/comments/1jw3a14/sam_announces_chat_gpt_memory_can_now_reference/)
- [Reddit Microsoft Copilot memory confusion](https://www.reddit.com/r/microsoft_365_copilot/comments/1kqar3v/microsoft_copilot_custom_instructions_and_memory/)
- [Reddit Notion AI instruction-set confusion](https://www.reddit.com/r/Notion/comments/1noknmu/notion_ai_personalize_multiple_instruction_sets/)
- [Mozilla Research Over the Edge 2.0](https://research.mozilla.org/browser-competition/over-the-edge-2/) for browser-choice, AI-interface routing, forced-action, preselection, nagging, and migration-reset signals that shape choice-respecting AI surface controls.
- [Stack Overflow 2025 Developer Survey AI section](https://survey.stackoverflow.co/2025/ai) and [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/) for current trust, accuracy, privacy, security, and concern signals that make user agency a launch evidence requirement for adaptive AI behavior.

The directional lesson is consistent: users value continuity, reduced repetition, portable preferences, and adaptive defaults, but they reject hidden profiling, unclear scope, inconsistent memory behavior, accidental cross-context influence, forced AI defaults, browser or assistant lock-in, and control panels that require constant micromanagement.

## Product purpose

Adaptive personalization answers:

- What does this Project already know about my preferred workflow, output style, source scope, mode, layout, commands, review cadence, and notification behavior?
- Why did Research suggest this default, command, layout, source scope, model role, template, or automation change?
- Which signals caused the suggestion, and can I correct or remove them?
- Is the preference personal, Project-scoped, Organization-scoped, device-local, accessibility-related, or a temporary session override?
- Will the preference affect Chat, Documents, Sources, Worksets, Focus, Command Center, automation, notifications, API clients, or model context?
- Can I turn adaptation off, reset it, export it, or keep it inside one Project?
- Will Research preserve my previous choice after import, migration, browser-extension install, companion install, model change, or Organization policy change?

Personalization is not a new primary surface. It is a control and explanation layer attached to Chat, Documents, Sources, Command Center, Spatial Workbench, Focus, Project Operating Layer, automation, notifications, Project settings, and Memory.

Choice-respecting AI behavior is part of personalization. Research must not use adaptive defaults, onboarding, import, migration, or companion/browser installation to silently re-enable disabled AI surfaces, widen data use, force a browser path, force an assistant path, or hide policy-managed state.

## Personalization surfaces

Research can personalize:

- Project setup defaults, templates, source preferences, prohibited sources, and first-run checklists;
- Chat tone, answer shape, clarification threshold, citation density, table or prose defaults, and handoff summaries;
- Document structure, Markdown conventions, heading depth, section templates, patch presentation, and review reminders;
- source-scope suggestions, reading order, evidence-density defaults, and stale-source triage paths;
- Command Center ranking, aliases, favorites, shortcut hints, and recent-work navigation;
- Spatial Workbench layouts, Worksets, pane density, evidence-aware splits, and restore defaults;
- Focus Sessions, Resume Digests, attention ranking, quiet hours, snoozes, and caught-up checkpoints;
- automation recipe recommendations, dry-run defaults, canary suggestions, budget prompts, and review cadence;
- notification channel defaults, batching, reminders, and escalation paths;
- API, SDK, CLI, and MCP examples where a user or team has explicit developer preferences.

Personalization cannot change authorization, source truth, evidence support, publication eligibility, approval class, abuse policy, provider policy, retention, residency, billing, support access, or security classification.

## Preference classes

| Class | Meaning | User control |
|---|---|---|
| `explicit-setting` | A user, Project, or administrator directly set a preference. | View, edit, export where policy allows, reset, and audit material changes. |
| `session-override` | A temporary preference for the current chat, Workset, Focus Session, or run. | Visible expiry and one-click clear. |
| `accepted-correction` | A user corrected output style, ranking, source scope, layout, notification timing, or automation behavior. | Inspect original signal, accept, reject, edit, or forget. |
| `outcome-derived` | Research inferred a default from repeated accepted outcomes, dismissals, edits, or reversals. | Shown as a suggestion before material use. |
| `project-instruction` | A Project-owned instruction or policy preference. | Governed by Project settings, expected versions, and administration controls. |
| `organization-policy` | An administrator-owned policy that constrains allowed personalization. | Visible effective policy, change audit, and disabled reasons. |
| `device-local` | A local display or interaction preference for the current device. | Inspect and clear on that device; never treated as canonical Project truth. |
| `accessibility-locale` | Presentation, language, direction, or accessibility preferences. | Governed by accessibility and i18n contracts; never used for pricing, ranking, or support priority. |

## Adaptation modes

Research exposes adaptation as a clear mode, not an invisible binary.

| Mode | Behavior |
|---|---|
| `off` | No adaptive defaults beyond required accessibility, policy, and explicit current-session state. |
| `explicit-only` | Use only saved settings, Project instructions, and direct user choices. |
| `suggest-before-use` | Learn from corrections and outcomes, but show suggestions before applying durable preferences. |
| `adaptive-defaults` | Apply low-risk UI defaults with explanation, undo, and reset controls. |
| `policy-managed` | Organization policy constrains or disables classes of personalization. |

High-risk adaptation never runs silently. Any personalization that changes source scope, destination, external write behavior, publication, deletion, billing, connector scope, automation trigger, approval envelope, support access, provider route, retention, residency, or model-use policy requires existing preflight, approval, and policy controls.

AI-surface choice controls are sticky across normal Project use. A disabled or narrowed AI surface can be changed only through explicit user action, administrator policy, or a documented migration review. Research may recommend a change, but the recommendation is dismissible and cannot block access to core Project work.

## User controls

The Preference Center in Project settings shows:

- active personal, Project, Organization, device-local, accessibility, locale, and session preferences;
- whether a preference is explicit, inferred, imported, policy-managed, stale, disputed, or disabled;
- why the preference exists and where it was last used;
- affected surfaces and examples of current behavior;
- source signals such as accepted corrections, repeated dismissals, edited patches, selected templates, Workset restores, command invocations, notification actions, or automation outcomes;
- edit, pin, lock, supersede, disable, forget, reset surface, reset Project, and export controls where policy allows;
- temporary chat, Workset, Focus Session, and run-level overrides;
- disabled reasons when policy prevents personalization.
- AI-surface choice controls for Chat assistance, Workspace Agent exposure where applicable, native companion behavior, browser extension behavior, model-context personalization, adaptive defaults, proactive suggestions, notification summaries, and automation recommendations.
- migration and import review states that show whether a previous choice was preserved, disabled, unsupported, policy-managed, or awaiting review.

The UI must avoid making users manage every minor signal. Low-confidence signals become suggestions or observations, not durable preferences. A user correction should improve future behavior without forcing the user into a settings audit.

## Explanation and correction

Whenever Research uses personalization in a visible output or recommendation, the user can inspect a concise explanation:

- preference name and scope;
- signal source class;
- last updated time;
- affected surface;
- confidence and expiry where applicable;
- whether the behavior came from explicit setting, Project instruction, outcome evidence, accessibility/locale profile, or policy;
- how to undo, correct, disable, or make the behavior temporary.

Examples:

- "Used your Project preference for executive-summary-first documents."
- "Suggested this Workset because you restored the same source/document/evidence split twice this week."
- "Ranked this command higher because you dismissed the longer run mode on similar source-refresh tasks."
- "Did not apply a saved memory because this Project is set to project-only personalization."

Explanations cannot expose hidden model reasoning, raw prompts, private source text, private document bodies, full connector payloads, credentials, or another user's private preference.

## Scope and sharing

Research defaults to Project-scoped personalization. A preference may be promoted beyond one Project only through explicit user or administrator action.

Scope rules:

- personal preferences are viewer-specific and do not grant access to Project content;
- Project preferences affect only the Project and carry expected versions;
- Organization policy can constrain or disable classes of personalization;
- shared Worksets can include safe layout and presentation preferences but not private user profiles;
- exported Project manifests can include preferences only where policy allows and with clear data-class labels;
- support diagnostics show preference metadata and reason codes, not private content or raw interaction history.

## Model context use

Preference use in model context is limited and visible.

Allowed:

- concise style, format, terminology, and workflow preferences;
- Project instructions and accepted decisions with provenance;
- preference IDs and safe labels needed to explain an output;
- current session overrides.

Not allowed:

- private raw source bodies, full documents, hidden reasoning, raw prompts, connector payloads, credentials, screenshots, clipboard contents, browser history, or operating-system state;
- using a preference as evidence for a factual claim;
- using a preference to bypass source authorization, evidence requirements, approval policy, or provider policy;
- silently importing unrelated Project or personal context into a new Project.

Factual preferences that need to support a claim must resolve through authorized Claims and EvidenceSpans. Preference records can guide behavior; they do not corroborate facts.

## Failure and recovery

Research must handle personalization failures explicitly:

- stale preference: label stale, show cause, fall back to safe default, and offer correction;
- wrong inference: let the user reject the suggestion and suppress similar signals;
- policy block: show the effective policy and recovery path;
- scope confusion: show whether the signal came from session, Project, Organization, device, accessibility, locale, or memory;
- conflict: route through a review card when two preferences produce materially different behavior;
- export/import mismatch: import as disabled suggestions until reviewed;
- model mismatch: record when a provider or model route does not support a requested behavior.

The product must not blame the user for a hidden preference. If personalization influenced the behavior, Research must be able to show the relevant preference or explain that the signal was too weak to apply.

## Privacy and trust rules

- Do not build a cross-Project personal profile by default.
- Do not infer protected traits, disability status, health status, financial condition, legal status, employment sensitivity, or demographic categories for personalization.
- Do not use accessibility or locale preferences for ranking, pricing, support priority, or entitlement decisions.
- Do not use personalization to make the assistant more agreeable at the expense of evidence, correctness, or critique.
- Do not silently widen tool permissions, connector scopes, model context, or publication audience.
- Do not force-enable AI surfaces, assistants, browser paths, companion behavior, notifications, proactive suggestions, or personalization during onboarding, import, migration, upgrade, or plan change.
- Do not use nag loops, trick wording, preselected controls, or repeated prompts to reverse a user's disabled or narrowed AI-surface choice.
- Do not store private source bodies, raw prompts, private document bodies, full citations, connector payloads, credentials, private URLs, screenshots, clipboard contents, browser history, operating-system state, or hidden reasoning in preference records.

## Non-goals

- Do not make personalization a replacement for Project Memory.
- Do not make analytics, feedback, or model evaluation datasets the preference authority.
- Do not turn every click into a saved preference.
- Do not create an ad-targeting, lead-scoring, or behavioral manipulation profile.
- Do not promise perfect memory or universal cross-chat recall.
- Do not hide personalization scope behind vague "AI got to know you" language.
- Do not make Research usability depend on using a specific browser, default assistant, installed companion, or model provider.

## Acceptance criteria

Adaptive personalization is production-ready only when:

- `PREF-001` is implemented with visible preference controls, adaptation modes, and scope labels;
- users can inspect, correct, disable, reset, export where policy allows, and explain preferences by surface;
- adaptive defaults are limited to low-risk UI and workflow behavior unless preflight and approval allow more;
- Project, personal, Organization, device-local, accessibility, locale, session, and memory scopes are visually distinct;
- every model-context use of preferences is minimized, authorized, and explainable;
- preference records cannot satisfy factual evidence requirements;
- preference signals from corrections, dismissals, accepted outcomes, Worksets, Focus, automation, and notifications remain content-minimized;
- support, analytics, webhook, API, SDK, CLI, and MCP views expose only authorized metadata and reason categories;
- AI-surface choice controls are findable, reversible, sticky across migration/import where supported, policy-explainable when locked, and accessible through keyboard and screen-reader journeys;
- tests cover control visibility, wrong-inference correction, reset, export/import, policy-managed mode, cross-Project isolation, accessibility, performance, and security.

## Documentation update rule

Changes to adaptive personalization, preference scopes, Preference Center controls, adaptation modes, preference explanations, correction handling, model-context use, or reset/export behavior must update:

- [`project-workspace.md`](project-workspace.md)
- [`chat.md`](chat.md)
- [`documents-and-canvas.md`](documents-and-canvas.md)
- [`command-center-and-keyboard-workflows.md`](command-center-and-keyboard-workflows.md)
- [`spatial-workbench-and-worksets.md`](spatial-workbench-and-worksets.md)
- [`focus-continuity-and-work-resume.md`](focus-continuity-and-work-resume.md)
- [`project-settings-and-administration.md`](project-settings-and-administration.md)
- [`notifications-and-scheduled-automation.md`](notifications-and-scheduled-automation.md)
- [`automation-outcome-scorecard-and-adaptive-workflows.md`](automation-outcome-scorecard-and-adaptive-workflows.md)
- [`../02-architecture/adaptive-preference-learning-and-interface-policy.md`](../02-architecture/adaptive-preference-learning-and-interface-policy.md)
- [`../02-architecture/product-analytics-feedback-and-experimentation.md`](../02-architecture/product-analytics-feedback-and-experimentation.md)
- [`../03-ai/project-memory.md`](../03-ai/project-memory.md)
- [`../05-security/data-governance.md`](../05-security/data-governance.md)
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md)
- [`../07-reference/database-schema-blueprint.md`](../07-reference/database-schema-blueprint.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
