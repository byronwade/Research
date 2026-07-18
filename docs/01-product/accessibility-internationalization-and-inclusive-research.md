# Accessibility, internationalization, and inclusive research

**Review date:** 2026-07-18
**Status:** canonical product contract
**Governs:** `A11Y-001`, `I18N-001`

Research is a source-native product for long, evidence-heavy work. Accessibility and internationalization are therefore product capabilities, not a late quality pass. Users must be able to inspect evidence, citations, progress, approvals, documents, exports, and support evidence with keyboard, assistive technology, multilingual content, and right-to-left presentation where supported.

This document defines user-facing behavior. Architecture and data contracts live in [`../02-architecture/accessibility-internationalization-and-locale-policy.md`](../02-architecture/accessibility-internationalization-and-locale-policy.md).

## Sources reviewed

Official references reviewed on 2026-07-18:

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/) for current web accessibility success criteria and the recommendation to use the latest WCAG version.
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) and [WAI-ARIA overview](https://www.w3.org/WAI/standards-guidelines/aria/) for accessible widget patterns and the rule that semantic HTML remains the default path.
- [W3C Internationalization Best Practices for Spec Developers](https://www.w3.org/TR/international-specs/), [Strings on the Web: Language and Direction Metadata](https://www.w3.org/TR/string-meta/), and [Language Tags and Locale Identifiers](https://www.w3.org/TR/ltli/) for language tags, string direction, and field-level metadata.
- [Unicode CLDR](https://cldr.unicode.org/) and [CLDR specifications](https://cldr.unicode.org/index/cldr-spec) for locale data used by software internationalization.

Public user-opinion and practitioner signals reviewed on 2026-07-18 include Hacker News discussions of bad ARIA, skip links, and keyboard navigation, plus Reddit discussions of accessibility overlays, screen-reader testing, and unwanted language switching by location. These signals are directional only, not statistical proof or customer-facing claims.

## Product goals

1. Make the first product proof accessible: create Project, upload source, ask grounded question, inspect citation, save document, reopen, and export.
2. Make advanced surfaces accessible before launch: Command Center, Spatial Workbench, Worksets, Focus, Project Health, support diagnostics, Scenario Lab, Reversible Work, approvals, Activity, Trust, citations, and publication.
3. Preserve source language, output language, and citation truth independently. Translation can help comprehension but cannot replace the upstream source or evidence state.
4. Treat language and direction as explicit metadata on Project settings, sources, document blocks, generated outputs, exports, API responses, and public projections.
5. Provide localizable, locale-neutral product behavior without changing authorization, evidence, support, retention, or audit meaning.

## Non-goals

- Research is not a general machine-translation product in the first release.
- Research does not promise legal accessibility compliance from documentation alone.
- Research does not use AI overlays, summary-only page interpretation, or alternate inaccessible views as a substitute for semantic implementation.
- Research does not auto-translate source evidence, customer content, support records, or public projections without explicit user or policy intent.
- Research does not infer language from physical location when user, browser, Project, source, or document preferences say otherwise.

## User settings and state

### Accessibility preferences

Users can configure or inherit:

- keyboard density and visible shortcut hints;
- reduced motion;
- high contrast or system contrast compatibility;
- larger hit targets and text scaling compatibility;
- screen-reader-friendly announcements for streaming, progress, stale state, and errors;
- drag-free alternatives for pane layout, evidence splits, Worksets, artifacts, and table reordering;
- notification verbosity and progress announcement frequency.

These preferences are not proof of disability and must not change authorization, pricing, source ranking, or support priority. They are presentation and interaction preferences.

### Locale and language preferences

Research distinguishes:

- viewer locale for UI formatting;
- Project default language;
- Project timezone;
- source language and direction;
- document block language and direction;
- generated output language;
- export locale;
- public projection language;
- search query language.

Changing viewer locale changes formatting and product copy. It does not rewrite canonical documents, translate sources, alter citations, or change audit history.

## Accessible product behavior

### Navigation

Every primary workflow has:

- visible navigation and keyboard-first command access;
- predictable landmark structure;
- skip-to-main and skip-to-current-work paths where dense chrome exists;
- logical reading order that matches visual order;
- visible focus state;
- disabled reasons and recovery actions;
- non-color-only status labels;
- responsive behavior that preserves control access on narrow screens.

Command Center and shortcuts accelerate work but never become the only path to a primary action.

### Streaming and progress

Streaming chat, Research Runs, Progressive Delivery, Partial Results, repair progress, simulations, exports, and automation runs announce:

- what started;
- current stage;
- partial, stale, blocked, degraded, unsupported, or complete state;
- next safe action;
- cancellation and reconnect state;
- error recovery.

The UI avoids noisy live-region floods. Long work uses summarized announcements and lets users inspect details on demand.

### Evidence and citations

Citations are accessible objects, not only superscript links. A citation exposes:

- claim or block relationship;
- source title and SourceVersion;
- exact locator such as page, section, timestamp, line, or cell;
- support state;
- source language and direction when known;
- stale, removed, disputed, inferred, or unsupported status;
- privacy or rights blocker where relevant;
- keyboard path to source context and back to the originating claim.

Generated summaries, translations, diagrams, and tables preserve citation relationships to the original SourceVersion. A translated citation label does not become new evidence.

### Documents and editing

Documents support:

- semantic headings and lists;
- stable focus recovery after AI patches, comments, suggestions, and review decisions;
- keyboard-accessible outline, block movement, citation insertion, and patch review;
- language and direction controls at document and block level;
- mixed-direction content isolation for citations, code, numbers, names, and source titles;
- accessible conflict, stale, locked, and publication states;
- raw Markdown mode that preserves stable block identity and language metadata.

AI-generated alt text, table summaries, translations, or reading-order suggestions are draft assistance. Users can review and edit them before publication.

### Sources, media, and artifacts

Sources show accessibility-relevant capability separately from search and citation capability:

- text extractable;
- structure extractable;
- reading order confidence;
- image alt text available or generated draft;
- captions or transcript available;
- table headers available;
- chart data available;
- language and direction known, inferred, mixed, or unknown.

Research Studio artifacts such as charts, canvases, diagrams, tables, and maps require accessible alternatives for supported outputs. A visual artifact must have a machine-readable table, summary, label, or structured fallback before it can be treated as publication-ready.

### Workbench, Atlas, and visual systems

Spatial Workbench, Worksets, Project Atlas, Scenario Lab, Reversible Work, and Project Health must support non-drag alternatives, table/list equivalents, keyboard traversal, screen-reader labels, reduced-motion behavior, and explicit redaction/stale labels.

Graph views and spatial layouts are optional projections. They cannot hide required review actions, source state, authorization blockers, support access state, or publication risk from users who use a list or table view.

## International research behavior

### Source language and output language

Source language is part of source metadata. Output language is part of user intent, Project policy, or document settings. Research can answer in a selected language while preserving citation metadata to the source language.

When source and output language differ, Research shows whether the answer relies on:

- original-language evidence inspected directly;
- translated source excerpt;
- model translation;
- user-provided translation;
- prior generated summary.

Only authorized SourceVersions and EvidenceSpans support Claims. Translations and summaries are derived material unless separately backed by an authoritative source.

### Right-to-left and mixed-direction content

Right-to-left support covers product chrome, documents, citations, source titles, names, numbers, code, paths, table cells, exported files, and public projections where supported. Mixed-direction content uses explicit metadata and isolation instead of fragile visual heuristics.

If direction is unknown, Research labels it as unknown or inferred. It does not silently rewrite content direction in a way that changes meaning.

### Search and retrieval

Search supports Unicode text, diacritics, punctuation, script-specific tokenization where implemented, and transparent language fallback. Cross-language retrieval is opt-in or policy-driven and must label translated query expansion, translation confidence, and unsupported language limitations.

Authorization is enforced before language detection, translation, query expansion, embedding, reranking, or model context assembly.

### Exports and public projections

Exports and public projections preserve:

- document structure;
- language and direction metadata;
- accessible headings and landmarks where the format supports them;
- citation and evidence links;
- table headers and chart alternatives;
- reading order;
- locale-specific formatting chosen by policy or user intent;
- publication blockers for unsupported claims, missing alt text, inaccessible artifacts, or unverified translated material.

If an export format cannot preserve required accessibility or language metadata, the export is labeled degraded and may be blocked for publication depending on policy.

## Acceptance criteria

- WCAG 2.2 AA expectations are mapped to primary Project journeys and generated outputs.
- Browser tests cover keyboard-only and screen-reader-critical paths for first-run activation, citation inspection, document editing, publication preview, support diagnostics, and approval flows.
- Tests include English, mixed left-to-right and right-to-left content, CJK text, accented Latin text, emoji/grapheme clusters, long unbroken tokens, localized dates/numbers, and timezone boundaries.
- Product telemetry records content-minimized accessibility and locale failures without storing private source text, prompts, document bodies, assistive-technology identity, or disability status.
- Release evidence records accessibility checks, locale fixtures, RTL fixtures, export behavior, public projection behavior, and remaining unsupported-language limitations.
- Customer-facing claims about accessibility, languages, exports, or locale coverage match verified runtime evidence.

## Update rules

Changes to accessibility or internationalization behavior must update:

- this document;
- [`../02-architecture/accessibility-internationalization-and-locale-policy.md`](../02-architecture/accessibility-internationalization-and-locale-policy.md);
- [`../08-build/ui-system-and-chatgpt-patterns.md`](../08-build/ui-system-and-chatgpt-patterns.md);
- [`../06-delivery/test-strategy-and-quality-gates.md`](../06-delivery/test-strategy-and-quality-gates.md);
- [`../06-delivery/launch-readiness-and-release-evidence.md`](../06-delivery/launch-readiness-and-release-evidence.md);
- [`../07-reference/terminology.md`](../07-reference/terminology.md);
- [`../07-reference/official-references.md`](../07-reference/official-references.md);
- `_meta` routing or requirements when scope changes.
