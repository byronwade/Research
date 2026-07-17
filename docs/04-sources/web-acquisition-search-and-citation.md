# Web acquisition, search, and citation

Web research is a source-acquisition system with rights, safety, reproducibility, and provenance requirements. A search-result snippet or mutable URL is not sufficient evidence for a durable document.

## Acquisition modes

1. **Search discovery:** approved search providers return candidates, snippets, ranking metadata, and result identifiers.
2. **Direct HTTP capture:** fetch the canonical URL with bounded redirects, content negotiation, and response limits.
3. **Browser escalation:** use isolated Playwright only when client rendering, authentication, or interaction is necessary and authorized.
4. **User-authorized capture:** browser extension, upload, export, or connected system for content the server cannot access directly.
5. **Scheduled refresh:** recapture an existing Source according to freshness and rights policy.

Search and fetch are separate tools. Search discovers candidates; fetch creates or updates a SourceVersion after validation.

## Safety boundary

Before any request, Research validates scheme, hostname, port, DNS resolution, IP range, redirect target, credential policy, and Project egress rules. Private, loopback, link-local, metadata-service, file, and unsupported protocols are denied unless an isolated approved connector explicitly owns them.

DNS and redirect checks repeat at connection time. Response bytes, time, redirects, decompression, media type, and browser resources are bounded. Browser sessions have no ambient cloud, connector, tenant, or secret access.

## Rights and policy

Acquisition records the request purpose, actor, access method, authentication basis, robots and site-policy observations where applicable, license or rights classification, quotation limits, redistribution limits, and takedown path.

Robots directives and terms inform acquisition policy but are not treated as a complete legal determination. Public accessibility does not automatically authorize full-text redistribution or public publication.

## Capture record

A web SourceVersion preserves:

```text
requested URL
final URL and redirect chain
canonical and alternate URLs
retrieval timestamp and HTTP metadata
response and normalized-content checksums
HTML or authorized rendered snapshot
main-content extraction
page title, author, publication and modification dates
language and structured metadata
outgoing links used by research
capture tool, version, and configuration
rights and privacy decision
```

Where permitted, the original response or browser snapshot is stored privately so citations remain reproducible after the live page changes.

## Canonicalization and duplicates

Canonicalization removes tracking parameters only through reviewed rules, preserves semantically meaningful query parameters, normalizes host and URL representation, and respects explicit canonical metadata without trusting it blindly.

Duplicate detection uses content hashes, near-duplicate text, publication identity, redirect relationships, and source lineage. Syndicated copies remain related sources but do not count as independent corroboration.

## Content extraction

HTTP-first extraction uses response metadata, structured data, DOM landmarks, Readability-style main content, headings, paragraphs, lists, tables, figures, captions, code blocks, footnotes, and link context. Browser rendering is a fallback rather than the default.

Extraction preserves a mapping from normalized elements to the captured DOM or rendered region. Boilerplate removal cannot destroy the ability to reopen the cited passage.

## Search workflow

```text
research question
→ query decomposition
→ provider search under policy and budget
→ candidate normalization and deduplication
→ source-quality and diversity review
→ fetch selected candidates
→ exact evidence extraction
→ gap and contradiction search
→ stop when coverage criteria are met
```

Queries, provider, result IDs, ranking position, filters, time, and selected/rejected decisions become ResearchStep records. The final report distinguishes discovered, examined, cited, contradictory, excluded, and inaccessible candidates.

## Freshness

Date-sensitive Claims carry a freshness policy. Scheduled refresh creates a new immutable SourceVersion, computes structural and semantic differences, remaps locators where possible, and revalidates dependent evidence and documents.

A changed `Last-Modified` header alone is not proof of meaningful content change; a stable header is not proof that content is unchanged.

## Citation behavior

A citation points to the exact captured SourceVersion and element, paragraph, table cell, DOM range, or rendered region. The user can open the normalized passage and, where policy permits, the original snapshot and live URL.

Citations record retrieval time because the live page may change. Search snippets, model summaries, and derived notes cannot replace the fetched evidence.

## Authenticated and dynamic sites

Authenticated capture uses a scoped connector or user-controlled capture path. Session material is encrypted, isolated, short-lived where possible, and excluded from browser logs and snapshots. Research never attempts to bypass access controls, paywalls, anti-bot systems, or technical restrictions without explicit authorization and policy.

## Verification fixtures

Tests include redirect chains, DNS rebinding, metadata endpoints, large responses, compressed bombs, client-rendered pages, infinite scroll, login expiry, consent interstitials, canonical conflicts, duplicate syndication, structured-data disagreement, multilingual and RTL pages, page updates, removed passages, and prompt-injection instructions embedded in HTML, metadata, comments, or invisible text.

Official references include the selected search-provider contracts, browser and crawler documentation, and the application’s content-rights, SSRF, and source-version policies.
