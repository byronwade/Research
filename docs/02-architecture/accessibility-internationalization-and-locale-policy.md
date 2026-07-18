# Accessibility, internationalization, and locale policy

**Review date:** 2026-07-18
**Status:** canonical architecture contract
**Governs:** `A11Y-001`, `I18N-001`

This contract defines how Research represents accessible interaction, language, locale, direction, and export behavior across Project surfaces, APIs, generated documents, source processing, search, support diagnostics, and release evidence. Product behavior is specified in [`../01-product/accessibility-internationalization-and-inclusive-research.md`](../01-product/accessibility-internationalization-and-inclusive-research.md).

## Architectural principles

1. Semantic structure is the primary accessibility mechanism. ARIA is used only where native semantics cannot represent the supported interaction.
2. Language, locale, timezone, and direction are explicit metadata. They are not inferred from location or visual layout when authoritative metadata exists.
3. APIs are locale-neutral. Localized product copy is a presentation concern, not a stable API contract.
4. Translations and summaries are derived material. They cannot independently corroborate upstream claims.
5. Accessibility preferences and locale preferences are content-minimized user settings, not sensitive labels for authorization, ranking, pricing, or support priority.
6. Authorization happens before language detection, translation, embedding, reranking, model context assembly, support export, or publication.

## Canonical records

### AccessibilityProfile

Viewer-scoped preference record for presentation and interaction:

```text
profile_id
organization_id
user_id
project_id optional
keyboard_density
shortcut_hint_level
reduced_motion
contrast_preference
target_size_preference
announcement_verbosity
drag_alternative_preference
caption_transcript_preference
updated_at
```

AccessibilityProfile is not proof of a disability. It is redacted from ordinary analytics, support bundles, exports, public projections, and model context unless policy explicitly allows a minimized preference summary for a support case.

### LocaleProfile

Viewer or Project policy record for language and formatting:

```text
profile_id
organization_id
user_id optional
project_id optional
ui_locale
content_locale
timezone
calendar_system
number_system
date_format_policy
time_format_policy
currency_display_policy
fallback_locales
updated_at
```

APIs store timestamps, money, numbers, and durations in neutral formats. LocaleProfile controls presentation, export formatting, and product copy selection.

### LanguageDirectionMetadata

Reusable metadata attached to sources, parsed elements, document blocks, messages, citations, exports, and public projections:

```text
language_tag
script
region
direction
detection_source
detection_confidence
metadata_scope
review_state
```

`language_tag` follows BCP 47 where known. `direction` is `ltr`, `rtl`, `auto`, `mixed`, or `unknown`. `detection_source` distinguishes source-provided metadata, user selection, Project policy, parser inference, model inference, and import default.

### AccessibleOutputManifest

Generated outputs and exports record:

```text
manifest_id
resource_ref
format
semantic_structure_status
reading_order_status
heading_status
alt_text_status
caption_transcript_status
table_header_status
chart_data_fallback_status
language_direction_status
known_degradations
publication_blockers
validation_evidence_refs
```

The manifest is release and publication evidence. It does not replace tests or manual review for high-risk outputs.

### TranslationArtifact

When Research translates source excerpts, document blocks, UI-visible summaries, or exports, it records:

```text
translation_id
source_resource_ref
source_version_ref
source_language
target_language
translator_type
model_or_provider_ref optional
human_reviewer optional
purpose
claim_support_policy
quality_state
expiry_or_revalidation_policy
```

TranslationArtifact is derived material. Claims remain supported by the original EvidenceSpan unless a separate authoritative translated source exists.

## Storage and schema rules

- Store text as Unicode and normalize only through explicit, versioned normalization policy.
- Count user-visible text by grapheme clusters where product limits are visible to users; use bytes only for storage or protocol limits.
- Store timestamps in timezone-aware form and render through LocaleProfile.
- Store money in integer minor units and render through LocaleProfile.
- Store language and direction metadata near the resource that owns the text, not only as a global Project setting.
- Preserve original source text, parsed text, normalized text, translated text, and generated text as separate records with provenance.
- Avoid locale-dependent database ordering for canonical identity. User-facing sort can use locale-aware collation where implemented and tested.

## Source processing

Parsers produce language and direction metadata per SourceVersion and, where possible, per parsed element. Parser output distinguishes:

- source-declared language;
- source-declared direction;
- parser-inferred language;
- model-inferred language;
- mixed-language spans;
- unknown language;
- low-confidence reading order;
- missing alt text, captions, transcripts, table headers, or chart data.

Language detection, OCR, transcription, translation, and embedding are processing steps behind authorization and provider policy. Their outputs are derived and must preserve source-version lineage.

## Documents and canonical Markdown

DocumentBlock metadata can include language tag, direction, translation refs, generated-alt-text refs, and accessible-output status. Markdown serialization must preserve stable block identity and enough metadata to reconstruct language and direction without relying on visual heuristics.

AI patches that change language, direction, reading order, headings, alt text, table structure, or citation text are material document changes and require the same expected-base-version and review policy as other typed patches.

## Retrieval and model context

Retrieval supports language-aware query normalization and search where implemented. The retrieval plan records:

- query language;
- source language filters;
- tokenization or analyzer policy;
- translated query expansion, if used;
- cross-language retrieval route;
- unsupported language limitations;
- authorization and provider-policy result.

Unauthorized source text cannot reach language detection, translation, embedding, reranking, model context, or generated summaries. A model may answer in a target language, but citation support remains tied to authorized EvidenceSpans and ClaimEvidence.

## API and SDK contracts

API inputs and outputs use stable fields:

- `locale` for presentation preference;
- `language_tag` for natural-language content;
- `direction` for text direction;
- `timezone` for display policy;
- `format_locale` for export rendering;
- stable error codes independent of localized messages.

SDKs may expose helpers for localized display, but they must preserve raw canonical fields. Webhooks and audit events use stable codes plus optional localized summaries for human views.

## UI implementation rules

Research UI uses:

- semantic HTML landmarks, headings, lists, tables, buttons, links, dialogs, and forms before ARIA;
- ARIA Authoring Practices for composite widgets such as command palette, tabs, combobox, tree, grid, menu, disclosure, tooltip, dialog, and feed patterns;
- roving focus or managed focus only where the pattern requires it;
- no positive tabindex;
- visible focus and deterministic focus return after mutations;
- polite or assertive live regions only by event severity;
- reduced-motion alternatives for animation-heavy state transitions;
- keyboard, pointer, touch, and assistive-technology alternatives for drag and spatial manipulation.

Client components cannot create private callback-only mutation paths that bypass CommandActionDescriptor, preflight, ActivityEvent, support audit, or expected-version checks.

## Security and privacy

AccessibilityProfile, LocaleProfile, LanguageDirectionMetadata, TranslationArtifact, and AccessibleOutputManifest are subject to the same tenant boundaries and retention policies as other Project records.

Privacy controls:

- Do not store assistive-technology identity in routine telemetry.
- Do not use accessibility or language preference for pricing, ranking, or support priority.
- Do not route private content to translation, OCR, transcription, or model providers outside Project policy.
- Do not include raw source text, prompts, document bodies, private comments, hidden reasoning, credentials, or full connector payloads in accessibility telemetry, locale diagnostics, or support bundles.
- Do not expose private translation artifacts through public projections unless publication policy approves them.

## Validation requirements

Implementation slices touching user-facing surfaces must include:

- keyboard-only journeys for changed flows;
- screen-reader-critical assertions for names, roles, landmarks, live updates, focus return, and reading order;
- WCAG 2.2 AA mapping for primary surfaces and generated outputs;
- reduced-motion and contrast checks where visual state changed;
- Unicode fixtures for accented Latin, CJK, emoji/graphemes, mixed numbers, long tokens, and code;
- right-to-left and mixed-direction fixtures for document blocks, citations, source titles, tables, and exported files;
- locale fixtures for dates, times, numbers, currency, timezone boundaries, and sorting where supported;
- export validation for accessible structure and language metadata;
- release evidence linking the exact checks, fixtures, unsupported limitations, and waivers.

## Launch blockers

Production launch is blocked when:

- a primary workflow has no keyboard path;
- a generated output lacks required accessible structure for the claimed export format;
- citation or evidence inspection is not navigable with assistive technology;
- a translated or summarized source is treated as independent evidence;
- right-to-left content changes meaning or citation association;
- locale formatting changes canonical data or audit meaning;
- unsupported language limitations are hidden from the user;
- accessibility or locale telemetry stores private Project content;
- customer-facing accessibility, language, or export claims exceed verified evidence.
