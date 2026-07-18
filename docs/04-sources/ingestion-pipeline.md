# Source ingestion pipeline

## Pipeline

```text
Upload or connector event
→ authorization and rights check
→ abuse preflight and source-acquisition budget
→ immutable raw object
→ MIME and byte-signature inspection
→ malware, archive, and size controls
→ parser selection
→ normalized document elements
→ exact source locators
→ chunks, entities, and relationships
→ lexical, vector, metadata, scholarly, and code indexes
→ citation-ready evidence spans
```

## Uploads

Use resumable multipart uploads through an application-owned upload contract. Uppy and tus are candidate accelerators. Upload completion creates a Source and immutable SourceVersion before parsing begins.

## Parser routing

- Docling as the primary general document parser behind an isolated adapter.
- Apache Tika for broad fallback extraction.
- GROBID for scholarly PDFs.
- Tesseract, OCRmyPDF, or evaluated PaddleOCR for OCR.
- FFmpeg, MediaInfo, and faster-whisper for audio and video derivatives.
- LibreOffice for safe Office conversion where required.
- Sharp for image derivatives.

Every derivative records parser name, version, configuration hash, source checksum, confidence, and locator mapping.

## Web capture

Use HTTP-first capture, Readability or Trafilatura extraction, and Playwright escalation for JavaScript-dependent pages. Crawling is bounded by Project policy, rights decisions, AbusePolicy, robots and site restrictions where applicable, rate limits, and explicit depth/page budgets. Store an immutable response or rendered snapshot.

## Failure states

Ingestion distinguishes stored, inspectable, searchable, citable, and richly understood. A parsing failure does not erase the original source. Users see capability, confidence, warnings, and retry options.

## Safety

Parsers and archive expansion run in isolation. Source content is untrusted and cannot become agent instruction. Enforce decompression limits, file-type validation, malware controls, timeout and memory budgets, abuse throttles, and denial-of-wallet protections.
