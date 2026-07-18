# Source capability and format matrix

Research accepts broad source input without pretending every format has equal understanding or citation quality. Each SourceVersion records explicit capabilities and processing state.

## Capability levels

| Capability | Meaning |
|---|---|
| Stored | Original bytes or an authorized external reference are preserved |
| Inspectable | A user can view, play, browse, or download the authorized source |
| Searchable | Normalized text, metadata, entities, or code can participate in retrieval |
| Citable | Evidence resolves to a stable page, region, line, timecode, cell, message, commit, or structural locator |
| Richly understood | Tables, layout, figures, scenes, formulas, code symbols, relationships, or other native structure are modeled |

SourceVersions also record language, direction, reading-order, alt-text, caption, transcript, table-header, chart-data, and accessible-output capability where applicable. The interface shows these capabilities and never represents “uploaded” as “fully understood.”

## Initial support matrix

| Family | Representative formats | Primary processing | Citation locator | Initial target |
|---|---|---|---|---|
| Plain text | TXT, Markdown, JSON, YAML, CSV | encoding detection, structural parse | line, JSON pointer, row/cell | Rich |
| Web | HTML, public URL, saved page | HTTP capture, Readability, browser escalation | snapshot + DOM/paragraph region | Rich |
| PDF | born-digital, scanned, hybrid | Docling/PDF parser, OCR fallback, layout | page + bounding box + text span | Rich |
| Word processing | DOCX, ODT, RTF | structured document parser, LibreOffice fallback | paragraph/table/object path | Rich |
| Presentation | PPTX, ODP | slide and object extraction, rendering | slide + object/bounding box | Rich |
| Spreadsheet | XLSX, ODS, CSV | workbook parser, formula and table metadata | workbook revision + sheet + range | Rich |
| Image | PNG, JPEG, WebP, TIFF, SVG | metadata, OCR, vision adapter, tile viewer | image region/bounding box | Searchable and citable; rich by adapter |
| Audio | WAV, MP3, M4A, FLAC, OGG | metadata, normalization, transcription, diarization evaluation | time range + transcript span | Searchable and citable |
| Video | MP4, MOV, WebM, MKV, HLS reference | metadata, keyframes, audio transcription, scene analysis evaluation | time range + frame/region | Searchable and citable |
| Email | EML, MBOX, connected provider | MIME parse, thread and attachment extraction | message ID + header/body range | Rich |
| Chat/message export | JSON, HTML, TXT, connected provider | adapter-specific thread parse | channel/thread/message/time | Rich by adapter |
| Repository | GitHub repository, archive, local Git export | Git object model, Tree-sitter, ripgrep, dependency extraction | repository + commit + path + line/symbol | Rich |
| Scholarly | DOI, PubMed, arXiv, Crossref/OpenAlex records | metadata resolution, licensed full text, GROBID | work identity + version + page/section | Rich where full text authorized |
| Ebook | EPUB, MOBI-converted, HTML package | package and chapter parse | edition + chapter + paragraph | Rich |
| Notebook/code | IPYNB, source files, logs | cell/code parse and optional sandbox execution | notebook/cell or file/line | Rich |
| Archive | ZIP, TAR, GZIP, 7z when approved | bounded expansion and recursive routing | member path + child locator | Depends on members |

Support is versioned. A parser upgrade creates new derivatives under a new processing manifest; it does not mutate the SourceVersion.

## Ingestion manifest

Every processing attempt records:

```text
source_version_id
original checksum and MIME evidence
parser/router and version
configuration and feature flags
sandbox image or execution identity
start/end and resource usage
warnings and confidence
language and direction metadata
reading-order and accessibility capability status
normalized element schema version
derivative checksums
locator mapping version
index versions
failure or quarantine reason
```

## Format detection

File extension is advisory. Research checks byte signatures, container structure, declared content type, encoding, archive contents, and parser confidence. Mismatches are quarantined or explicitly reviewed.

## Limits and safety

Limits exist for original size, archive expansion ratio, member count, nesting depth, page/slide/sheet count, image dimensions, media duration, parser time, memory, generated derivatives, and total Project storage. Limits produce actionable partial or unsupported states; they are not silently truncated when truncation would invalidate citations.

Encrypted, password-protected, corrupted, macro-enabled, executable, or unsupported content receives an explicit state. Passwords and decryption keys use the secret boundary and are not stored in source metadata or logs.

## Locators and version stability

A locator includes the immutable SourceVersion and the native coordinate system required to reopen evidence. Extracted text alone is not the citation authority. Locator migration across parser versions is measured and may result in a new EvidenceSpan rather than mutating the old one.

## Quality and fallback

Parsing follows a declared router with primary and fallback tools. Fallback output is not automatically superior; Research records provenance and evaluates text completeness, reading order, table fidelity, OCR confidence, formula handling, and locator accuracy.

A source may remain stored and inspectable while search or citation processing fails. Users can retry with another parser, supply a replacement, correct metadata, or exclude the source.

## Acceptance fixtures

The format suite includes multilingual text, BCP 47 language metadata, mixed-direction text, RTL, complex tables, footnotes, multi-column PDFs, scans, handwriting samples for evaluation, charts with and without data fallback, embedded files, formulas, tracked changes, comments, speaker notes, spreadsheet formulas, long media, captions, transcripts, diarization, code repositories, symlinks, Git LFS references, malformed containers, polyglots, and decompression bombs.
