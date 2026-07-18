# Research Studio and canvas tooling

Research Studio turns evidence-backed work into artifacts such as diagrams, tables, maps, timelines, charts, notebooks, slides, and media views. Studio artifacts are typed projections, not separate truth stores.

See also [`../01-product/research-studio.md`](../01-product/research-studio.md).

## Artifact contract

Every artifact records:

- Project;
- artifact type;
- schema version;
- source dependencies;
- claim dependencies;
- generated and edited regions;
- renderer;
- export adapters;
- version history;
- stale state;
- permissions.

Artifacts cite the same evidence graph as documents.

## Initial artifact types

| Type | Purpose |
|---|---|
| Evidence table | Compare claims, sources, status, and confidence. |
| Timeline | Show dated source events and claim changes. |
| Concept map | Show entities, relationships, and supporting sources. |
| Chart | Visualize structured extracted data. |
| Diagram | Explain workflows, systems, or architecture. |
| Notebook | Combine code, data, notes, and outputs. |
| Slide outline | Convert document sections into presentation structure. |

The first release should implement only the artifact types needed by the grounded vertical slice and early research workflows.

## Canvas principles

- Artifacts are editable.
- Evidence dependencies remain visible.
- Generated content is labeled.
- Unsupported content is blocked or marked.
- Exports preserve source and revision metadata.
- Regeneration is scoped to selected elements.

## Tool candidates

- Excalidraw for diagrams and freeform sketching;
- React Flow for graphs and workflows;
- Vega-Lite for charts;
- CodeMirror or Monaco for code and data blocks;
- Sandpack or JupyterLite-style execution for constrained notebooks after isolation is proven;
- PDF, DOCX, spreadsheet, slide, and image export adapters after document foundations work.

Tooling is selected per artifact type and wrapped behind product-owned schemas.

## Collaboration

Studio collaboration should preserve:

- stable element IDs;
- comments;
- revision history;
- conflict resolution;
- patch review;
- permissions;
- audit trail.

## Launch gates

Studio is production-ready only when:

- artifact schemas are versioned;
- source and claim dependencies are maintained;
- regeneration is bounded;
- exports are validated;
- accessibility alternatives exist;
- stale-state behavior is visible;
- artifacts cannot bypass publication policy.
