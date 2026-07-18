# Research product contract

## Vision

Research is a source-native workspace that turns questions, files, repositories, connected systems, and public-web research into verified, editable, continuously maintained documentation.

The interface remains simple enough for a first-time user:

```text
Project
├── Chat
├── Documents
└── Sources
```

Advanced systems remain available contextually rather than becoming permanent navigation complexity.

## Target users

- Researchers producing reports, papers, literature reviews, and evidence collections.
- Developers designing or expanding software projects and needing high-quality context for humans and coding agents.
- Teams maintaining product, technical, policy, or operational documentation.
- Analysts combining public information with private organizational sources.
- API developers embedding source-grounded research and documentation workflows in other products.

## Core jobs

1. Collect any authorized source and make its capabilities explicit.
2. Ask grounded questions across selected sources and the public web.
3. Run durable, inspectable deep-research processes.
4. Convert evidence into structured claims and exact citations.
5. Create and maintain organized Markdown document sets.
6. Publish public and private projections without content drift.
7. Detect when sources change and propose the smallest safe document updates.
8. Package high-quality context for people, language models, and software agents.
9. Understand GitHub repositories and produce reviewable, tested contribution proposals.
10. Expose the same platform through a clear developer API, SDKs, webhooks, SSE, and MCP.

## Product principles

- **Chat orchestrates; documents persist.** Important work does not die in conversation history.
- **Sources are first-class.** Every claim can be inspected at its exact source location.
- **One canonical truth.** Public, private, exported, and model-context outputs derive from canonical content and claims.
- **Simple by default, advanced by expansion.** Normal use does not require understanding agents, embeddings, or workflows.
- **User control remains visible.** Users can select source scope, inspect plans, interrupt research, edit documents, and approve patches.
- **No silent destructive action.** Agents cannot silently delete uploads, overwrite locked content, publish, merge code, or widen permissions.
- **Providers are replaceable.** Models, search engines, parsers, and research engines are adapters.
- **Quality is measured.** Citation support, retrieval recall, contradiction detection, freshness, edit acceptance, and cost are evaluated separately.

## Primary surfaces

### Chat

Chat answers questions, develops research contracts, shows progress, invokes tools, explains source use, proposes document updates, and coordinates Studio and GitHub workflows.

### Documents

Documents are logical Markdown files with stable blocks, outlines, revisions, citations, comments, locked regions, typed AI patches, public/private projections, and export adapters.

### Sources

Sources contain uploads, websites, repositories, connected-service records, media, structured data, immutable versions, parsing derivatives, permissions, evidence spans, synchronization state, and audit history.

## Contextual systems

- Research Runs
- Evidence and Claims
- Trust dashboard and evidence coverage
- Model council and disagreement resolution
- Intent capture and prompt-friction policy
- Command center and keyboard workflows
- Spatial Workbench and Worksets
- Focus continuity, Focus Sessions, and Resume Digests
- Offline, device continuity, mobile, and installed-app behavior
- Native companion, browser extension, and OS integration
- Adaptive personalization and preference controls
- Project Operating Layer and Work Packets
- Project Health causal diagnostics and safe repair playbooks
- Support Operations Center and customer diagnostics
- Scenario Lab and change simulation
- Reversible Work and Project history
- Delegated trust and approval-load control
- Latency-aware progressive workflows
- Project Atlas and impact navigator
- Automation outcome scorecard and adaptive workflows
- Automation registry, dry-run review, and run debugger
- Composable automation recipes and playbooks
- Project Memory
- Context packs and agent handoff
- Collaboration, reviews, decisions, and presence
- Product truth board and contradiction radar
- Source-change maintenance and living docs
- Studio artifacts and canvases
- GitHub workspaces
- Publications
- Activity timeline, review queue, and approvals
- Project settings, policy, plans, usage, and administration
- Accessibility, internationalization, locale, and accessible export controls
- Abuse prevention, trust safety, appeals, and acceptable-use controls

## Success criteria

A successful product can produce a 40,000–60,000-word research artifact that is reopenable, editable, cited, audited, selectively regenerated, exportable, and maintainable when its sources change. It must also make a simple cited answer feel as immediate as a normal conversation while long work remains progressive, interruptible, and honest about partial or stale state.

The successful product also preserves source-change trust over time: SourceVersions, Claim revalidation, Impact Reports, maintenance ActionCards, typed patch proposals, scheduled refreshes, and publication blockers make living documentation visible without hidden rewrites or a second evidence authority.

The successful product also preserves accessibility and international research quality: keyboard and assistive-technology paths work for primary journeys, citations remain inspectable across generated outputs, Unicode and mixed-direction content preserve meaning, translations are labeled as derived material, and public/export claims match verified runtime evidence.

The successful product prevents abuse without hiding useful work behind arbitrary blocks: source acquisition, automation, publication, GitHub proposals, connector writes, notifications, exports, API clients, and MCP tools expose limits, review states, appeals, false-positive outcomes, and support-safe diagnostics while preserving private content minimization.

The successful product is also reliable across realistic devices and networks: desktop, tablet, mobile, browser-tab, and installed-app contexts label their capabilities clearly, recover local drafts, handle reloads and reconnects honestly, review sync conflicts, and never treat local cache or offline packets as canonical Project truth.

The successful product is reachable from the user's work context without becoming invasive: optional native and browser companion surfaces support explicit quick capture, active-tab or selected-text capture, share/import targets, scoped file-watch grants, notifications, deep links, and global command entry while remaining Project-scoped, revocable, accessible, and free of ambient OS or browser surveillance.

The successful product learns user and Project preferences without hidden profiling: adaptive defaults remain scoped, explainable, correctable, resettable, exportable where policy allows, and unable to override evidence, source authority, approval policy, privacy, provider policy, accessibility, or authorization.

The successful product makes automation understandable before and after execution: Project automation registry, dry-run review, Automation Run Debugger, failure taxonomy, replay eligibility, trace comparison, fixture creation, side-effect safety, and outcome links make repeated work inspectable without exposing raw private content or hidden reasoning.

The successful product differentiates from operating-system recall and generic workspace agents by staying Project-native: Work Packets, next safe actions, Worksets, Scenario Lab, Reversible Work, delegated trust, automation debugging, and Product Truth derive from canonical Project records rather than ambient OS capture or generic app automation.

## Explicit non-goals for the first release

- Building every connector before proving grounded PDF research.
- Allowing arbitrary autonomous write access to connected systems.
- Replacing canonical Markdown with a proprietary editor document model.
- Treating a vector database as the complete memory or evidence system.
- Shipping an uncontrolled swarm of agents.
- Claiming every uploaded media type is equally searchable or citable.
- Shipping ambient screen, clipboard, browser-history, filesystem, keylogging, camera, microphone, or OS-window capture as a productivity shortcut.
- Building a hidden cross-Project personalization profile or treating preferences as factual evidence.
- Letting maintenance automation silently rewrite canonical documents, memory, publications, requirements, or Product Truth decisions.
- Treating automation traces, dry-runs, or debugger summaries as a second authority over canonical Project records.
- Treating operating-system recall, generic window restoration, raw trace viewers, or generic app-automation canvases as Research differentiation without an accepted Product Truth decision and validation path.
