---
id: delivery-performance-capacity-load-engineering
title: Performance, capacity, and load engineering
status: accepted
owner: operations
last_reviewed: 2026-07-17
---

# Performance, capacity, and load engineering

## Purpose

Research combines interactive chat, large uploads, parsing, crawling, hybrid retrieval, long-running research, multi-agent fan-out, document editing, GitHub indexing, exports, notifications, and public reads. Average latency is insufficient: the system must remain fair, bounded, observable, and truthful under concurrency, provider degradation, and unusually large Projects.

## Service classes

Capacity is planned by workload class rather than one global request rate:

| Class | Examples | Primary objective |
|---|---|---|
| Interactive | navigation, source filtering, document reads, chat start | low latency and predictable admission |
| Streaming | chat and research progress | fast first event, stable reconnect, bounded buffering |
| Background | parsing, OCR, indexing, source refresh, exports | durable throughput and fair scheduling |
| Research | web discovery, agents, verification, long-form assembly | bounded concurrency, cost, and completion visibility |
| External write | GitHub PR, publication, notification, connector mutation | idempotency, approval, and low duplication risk |
| Public read | published documents and assets | cacheability, abuse resistance, and origin protection |

Every workload declares tenant, Project, user, operation, cost, memory, CPU, I/O, model, network, and storage dimensions used for admission and scheduling.

## Service-level objectives

Initial production SLOs are hypotheses and must be calibrated with beta evidence. At minimum, measure:

- Project shell and document/source list server response latency;
- Chat request acceptance and first streamed event;
- citation activation to exact source context;
- upload session creation and resumable progress;
- source time-to-stored, time-to-searchable, and time-to-citable by format/size;
- Research Run queue delay, stage duration, completion, cancellation, and partial-result rate;
- public publication availability and cache hit rate;
- workflow/event backlog age;
- retrieval latency, candidate count, rerank latency, and citation verification latency;
- provider latency, error, throttle, fallback, token, and cost distributions.

SLOs use percentiles and good-event definitions, not averages. Error budgets govern release velocity for affected service classes.

## Capacity model

A quarterly capacity plan records:

- active organizations, Projects, users, sources, document bytes, chunks, vectors, evidence spans, and revisions;
- upload and sync arrival distributions;
- parsing/OCR/transcription CPU and memory per format;
- database connections, transaction rate, table/index growth, WAL and replication lag;
- object operations and egress;
- retrieval QPS, vector dimensions, index build time, and cache behavior;
- concurrent streams, workflows, agents, browser sessions, Sandboxes, and provider requests;
- queue backlog and drain rate;
- expected peak, seasonal, launch, migration, and incident multipliers;
- provider and regional quota headroom.

Capacity thresholds produce alerts and an owned remediation date before exhaustion. Storage growth includes immutable-history and deletion/retention behavior, not only current visible content.

## Admission control and fairness

The system reserves capacity before starting expensive work. Admission evaluates entitlement, current usage, tenant/project/user concurrency, estimated cost, source size, model/tool quotas, provider health, queue delay, and regional capacity.

Scheduling uses weighted fairness so one organization, large import, crawler, or runaway agent cannot starve interactive work. Interactive reads and cancellation/control commands retain reserved capacity during background saturation.

When work cannot start, the API returns an explicit queued, deferred, downgraded, or rejected state with reason and retry guidance. It must not accept work and then leave it indefinitely invisible.

## Backpressure

Every bounded queue has a maximum depth or age, dead-letter policy, retry class, and shedding strategy. Producers respond to downstream saturation by slowing, aggregating, deferring, or rejecting work rather than creating unbounded memory or database growth.

Streams have bounded event sizes, heartbeat intervals, replay windows, and client-consumption limits. Slow or disconnected clients do not retain unbounded server memory. Durable events remain available for reconnection according to retention policy.

## Load test portfolio

Load tests include:

1. Normal interactive traffic with representative Project sizes.
2. Burst traffic after a launch, webhook storm, or scheduled refresh boundary.
3. Large uploads and concurrent parsing across mixed formats.
4. Hybrid retrieval over small, medium, and very large source corpora.
5. Deep research fan-out with provider throttling and partial failures.
6. Long-form 40,000–60,000-word assembly and export.
7. GitHub repository sync and change-proposal validation.
8. Public traffic with cache misses and abuse-shaped request patterns.
9. Database migration/backfill while ordinary reads and writes continue.
10. Regional/provider degradation, queue backlog recovery, and reconnect storms.

Tests use synthetic or approved fixtures and may not copy customer research into load environments. Results record environment equivalence, dataset profile, generator version, thresholds, bottlenecks, and remediation.

## Performance budgets

The repository maintains budgets for:

- browser JavaScript, route chunks, CSS, fonts, images, and editor/viewer lazy loading;
- server response, database query count and time, serialization, and response size;
- search candidate/rerank counts and context assembly;
- message/event size and stream frequency;
- model input/output tokens, tool calls, agent depth, and research concurrency;
- source processing CPU, memory, temporary disk, archive expansion, page/frame count, and elapsed time;
- export render time and artifact size.

A changed critical path that exceeds budget requires an accepted tradeoff, a staged rollout, or remediation before release.

## Database and search engineering

Critical queries have explain plans, representative cardinalities, index ownership, and regression tests. Request paths may not perform unbounded scans or N+1 queries. Tenant filters are present in query plans before private data is returned.

Connection pools are sized against database limits across regions and deployment concurrency. Long transactions, idle sessions, locks, bloat, vacuum lag, replication lag, and index-build progress are monitored. Derived index generations support parallel build and atomic switch.

## Provider-aware degradation

Model, search, browser, OCR, and connector providers receive per-provider concurrency, timeout, retry, circuit-breaker, and budget policies. Fallback may reduce quality or delay work only within Project privacy, residency, model, source, and cost policy. The user sees when a run is queued, partial, or degraded.

## Continuous production verification

Synthetic checks exercise Project open, source retrieval, chat stream start, citation navigation, and public publication from representative regions. Real-user and server telemetry is aggregated without retaining private research content. Performance regressions are linked to release candidates and flags.

## Definition of done

Performance readiness requires measured SLOs, reproducible load tests, capacity headroom, fair admission, bounded queues and streams, migration-under-load evidence, provider degradation behavior, and operational controls that keep cancellation and status paths available during saturation.
