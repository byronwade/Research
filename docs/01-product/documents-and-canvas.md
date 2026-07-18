# Documents and canvas

Documents are the durable output of Research. They are organized as logical `.md` files and edited through a rich canvas or raw Markdown view.

## Canonical authority

The persistent authority is a stable block schema with deterministic Markdown serialization. Editor runtime state is never the database authority.

Recommended editor stack:

- Plate for the primary rich document canvas.
- CodeMirror for raw Markdown and structured source mode.
- `unified`, `remark`, and MDAST for parsing, normalization, transforms, and serialization.
- Stable block IDs and a provenance sidecar for claims, evidence, comments, locks, and AI patch metadata.

## File organization

Users and the system can organize documents freely:

```text
README.md
research/
  executive-summary.md
  methodology.md
  findings/
  source-ledger.md
product/
engineering/
decisions/
private/
```

## AI changes

Agents return typed operations such as create file, move file, rename file, insert block, replace section, add citation, update table, or modify cross-document references. Every change has an expected base revision and a previewable diff.

## Collaboration and control

- Manual editing and autosave.
- Outline and table of contents.
- Revision history and restoration.
- Locked human-authored blocks.
- Comments, mentions, assignments, and approvals.
- Citation coverage and stale-content indicators.
- Side-by-side patch review.
- Public/private projection preview.
- Export to Markdown, JSON, HTML, Word, PDF, and other typed formats.

Comments, mentions, assignments, suggestions, review requests, decision records, and presence are governed by [`collaboration-review-and-decision-workflows.md`](collaboration-review-and-decision-workflows.md). They anchor to document revisions, blocks, ranges, and patch operations without becoming a second document authority.

## Long-form behavior

Large documents are assembled from section contracts rather than one-shot generation. Each section has required claims, evidence, target length, dependencies, terminology, prohibited duplication, and completion criteria. Global audits verify numerical, entity, terminology, citation, and structural consistency.
