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
- Project Memory
- Studio artifacts and canvases
- GitHub workspaces
- Publications
- Activity and approvals
- Settings, plans, usage, and administration

## Success criteria

A successful product can produce a 40,000–60,000-word research artifact that is reopenable, editable, cited, audited, selectively regenerated, exportable, and maintainable when its sources change. It must also make a simple cited answer feel as immediate as a normal conversation.

## Explicit non-goals for the first release

- Building every connector before proving grounded PDF research.
- Allowing arbitrary autonomous write access to connected systems.
- Replacing canonical Markdown with a proprietary editor document model.
- Treating a vector database as the complete memory or evidence system.
- Shipping an uncontrolled swarm of agents.
- Claiming every uploaded media type is equally searchable or citable.
