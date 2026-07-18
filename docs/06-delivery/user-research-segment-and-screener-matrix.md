# User research segment and screener matrix

**Review date:** 2026-07-18
**Status:** delivery research-sampling contract, not runtime behavior

Research already requires user opinions, observed tasks, telemetry, benchmark evidence, and Product Truth decisions for every major surface. The remaining risk is sampling drift: a team could ask convenient users, coworkers, fans of AI, or only one buyer persona and then treat those opinions as representative of researchers, developers, admins, skeptical users, automation operators, accessibility participants, or enterprise owners.

This matrix turns participant recruiting, screening, exclusion, and segment coverage into a governed documentation surface. It does not create runtime research tooling, a CRM, a survey system, or customer data processing. It defines the minimum `UserResearchSegmentScreener` evidence required before user opinions can update requirements, StrategicBetScorecards, Product Truth, launch evidence, CustomerClaimEvidenceRecords, or advanced-feature decisions.

## Source basis

Methodology, survey, and work-AI references reviewed on 2026-07-18:

- [Nielsen Norman Group on recruiting and screening research candidates](https://www.nngroup.com/articles/recruiting-screening-research-candidates/) for screening users against target-audience experience, reducing biased samples, and excluding poor-fit candidates.
- [Nielsen Norman Group on recruiting expert users](https://www.nngroup.com/videos/recruiting-expert-users-usability-study-participants/) for complex, domain-specific products where ordinary participant pools may not represent real work.
- [AAPOR Best Practices for Survey Research](https://aapor.org/standards-and-ethics/best-practices/) for explicit research objectives, mode choice, sampling frames, mixed methods, and the limits of survey-only evidence.
- [Pew Research Center 2026 AI attitudes summary](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/) and [Pew public and expert AI comparison](https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/) for current evidence that AI awareness, use, concern, age, worker status, expertise, and control expectations vary by population.
- [User Interviews State of Synthetic Users](https://www.userinterviews.com/state-of-synthetic-users-report) for researcher skepticism, accuracy concerns, overtrust risk, bias risk, and the need for governance when AI is used in research workflows.
- [Microsoft 2026 Work Trend Index](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization) for current workplace-agent adoption pressure, agency framing, and the gap between individual AI use and organizational readiness.
- [Glean Work AI Index 2026](https://www.glean.com/work-ai-institute/reports/work-ai-index) for current survey evidence that AI time savings can be offset by context feeding, supervision, debugging, and untracked review labor.
- [Okta AI Agents at Work 2026](https://www.okta.com/newsroom/articles/ai-agents-at-work-2026-agentic-enterprise-security/) for executive and knowledge-worker differences around agent visibility, governance, permissions, and shadow AI.
- [Future of Work with AI Agents](https://futureofwork.saltlab.stanford.edu/) for task-level worker preferences about automation versus augmentation and the Human Agency Scale framing.

These sources shape sampling and screener design. They do not prove Research demand, usability, trust, accessibility, enterprise readiness, automation value, or launch claims.

## Authority and relationship

This matrix governs `FEEDBACK-003` and supports `FEEDBACK-001`, `FEEDBACK-002`, `BENCH-001` through `BENCH-004`, `TRUTH-001` through `TRUTH-003`, `READY-001` through `READY-004`, `AUTO-003`, `PERF-001` through `PERF-006`, `A11Y-001`, and `I18N-001`.

It operationalizes:

- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md) for ExperienceValidationPlans, sessions, findings, evidence packages, participant coverage, and severity thresholds;
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md) for per-surface user-opinion coverage and blocked claims;
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md) for UserOpinionEvidenceItems, codebooks, coding assignments, AI-assisted analysis review, negative-evidence review, UserOpinionSynthesisRecords, promotion thresholds, and blocked claims;
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md) for feedback intake, source-quality records, themes, opportunities, and closed-loop follow-up;
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md) for source-quality, confidence, representativeness, bias, allowed excerpts, and allowed decisions;
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md) for baselines, outcome definitions, guardrails, anti-metrics, and StrategicBetScorecards;
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md) for repeatable scenario evidence;
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md) for screened target-user inputs and excluded segments behind same-task comparator baselines;
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md) for FrontierSignalReview links, novelty-control promotion gates, user-opinion synthesis, and blocked claims when fresh frontier signals affect scope;
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md) for telemetry-backed segment, denominator, and privacy boundaries;
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md) for claim-language scope and CustomerClaimEvidenceRecords;
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md) for prototype, dogfood, beta, adoption, deferral, kill, and non-action decisions;
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md) for specification-mode signal decisions until runtime Product Truth exists.

If participant evidence conflicts with product, architecture, security, implementation status, launch evidence, public claims, or another segment's evidence, Product Truth records the contradiction before the user-research update is complete.

## Screener record

Every study, survey, interview round, dogfood cohort, beta cohort, support-feedback synthesis, customer advisory session, benchmark participant run, or public-signal synthesis that can change Research scope creates or updates a `UserResearchSegmentScreener`:

```text
id
study_or_signal_ref
objective
surface_refs
target_segments
excluded_segments
required_experience
disqualifying_experience
job_to_be_done
agency_preference: human-led | equal-partnership | supervised-automation | automation-preferred | varies-by-task | unknown
ai_trust_posture: skeptical | cautious | pragmatic | enthusiastic | administrator-risk | unknown
automation_maturity: none | light | power-user | operator | builder | administrator | unknown
accessibility_locale_device_coverage
privacy_security_sensitivity
buyer_user_operator_role
sampling_source
sampling_frame
recruiting_mode
sample_size_or_denominator
representativeness_limit
bias_risks
compensation_or_incentive
consent_retention_redaction_policy
synthetic_or_ai_assist_allowed: none | planning-only | gap-fill-only
claims_supported
claims_blocked
linked_user_opinion_coverage_records
linked_outcome_metrics
linked_benchmarks
Product Truth links
owner
reviewed_at
expiry
revisit_trigger
```

A user opinion without this record remains an anecdote or planning signal. It cannot satisfy launch evidence or support stronger-than-specification customer-facing claims.

## Segment matrix

These segments are not personas for marketing copy. They are evidence-coverage cells used to prevent overgeneralization. A participant can map to more than one row, but the screener must state which row their evidence supports.

| ID | Segment | Required screener evidence | Product risks this segment catches | Claims blocked when missing |
|---|---|---|---|---|
| `URS-001` | Researchers and analysts producing cited long-form work | Has produced or reviewed research output with citations, evidence packs, policy references, or source-backed deliverables in the last 90 days. | weak source-status language, citation-inspection friction, unsupported-claim tolerance, document durability confusion. | "trusted research workflow", "cited answers users can verify", "durable evidence-backed documentation". |
| `URS-002` | Technical teams and developers maintaining docs, repositories, APIs, SDKs, or implementation plans | Maintains source-controlled docs, code, APIs, SDKs, schema, release notes, or implementation plans and can judge drift, patch review, and developer workflow. | doc drift, bad patch review, unclear API/MCP behavior, unhelpful generated docs, developer automation friction. | "developer-ready", "repository-aware", "agent-ready API/SDK/MCP", "keeps implementation docs current". |
| `URS-003` | Product, operations, and support owners | Owns product decisions, support triage, customer feedback, release readiness, runbooks, or operations for a software product or research workflow. | unmanaged feedback loops, weak Product Truth disposition, poor support diagnostics, unclear release blockers. | "learns from users", "supportable", "keeps product truth current", "closed-loop discovery". |
| `URS-004` | Admin, security, privacy, compliance, and enterprise buyers | Evaluates access control, retention, residency, support access, agent governance, audit, or enterprise risk; may not be the daily end user. | permission widening, shadow AI, weak agent identity, support-access ambiguity, unsupported enterprise claims. | "enterprise-ready", "admin-safe", "privacy-safe", "auditable agent governance". |
| `URS-005` | Skeptical or low-trust AI users | Has avoided, limited, or carefully reviewed AI tools because of hallucination, hidden capture, cost, workplace risk, or poor debugging. | overtrust, false completion, weak no-ambient-capture explanation, unclear limitations, vigilance fatigue. | "trustworthy AI", "users trust automation", "low-review burden", "safe companion". |
| `URS-006` | Automation power users, operators, and builders | Has created, maintained, debugged, approved, scheduled, or governed automations, scripts, workflows, agents, or no-code recipes. | brittle triggers, cost surprise, hidden side effects, replay gaps, dry-run misunderstanding, run-count-as-value bias. | "automation saves time", "debuggable agents", "safe scheduled work", "adaptive automation value". |
| `URS-007` | Accessibility, locale, mobile, low-connectivity, and assistive-technology participants | Uses keyboard-only, screen reader, reduced motion, low vision settings, mobile/tablet/narrow screen, multilingual/RTL workflows, or low-connectivity conditions relevant to shipped surfaces. | inaccessible citations, broken focus return, layout traps, local-draft confusion, language/direction bugs, inaccessible exports. | "accessible", "mobile-ready", "offline-tolerant", "global-ready". |
| `URS-008` | AI-assisted research practitioners and research-method owners | Uses or governs AI for research planning, synthesis, note analysis, survey design, or synthetic-user workflows. | synthetic-user overtrust, biased generated synthesis, weak method selection, missing human follow-up. | "always-on user research", "AI validates demand", "synthetic users prove direction". |
| `URS-009` | Executives, budget owners, and deployment sponsors | Owns budget, adoption risk, procurement, rollout, team enablement, or success criteria for AI/workflow tools. | individual-productivity claims that miss organizational outcome, unclear rollout support, weak ROI baselines. | "saves teams time", "improves organizational performance", "ready for broad rollout". |
| `URS-010` | Agent-as-user, integration, and tool-builder clients | Builds or evaluates API, SDK, CLI, MCP, webhook, or agent workflows where non-human clients inspect capabilities and execute preflight. | human-only assumptions in developer contracts, bypassable preflight, unstable error semantics, poor tool recovery. | "agent-ready platform", "safe MCP/API control", "developer-friendly automation". |

## Cross-segment gates

Before a study or synthesis can change product direction:

1. The target segment and excluded segments are explicit.
2. The screener states the participant's relevant job, recent experience, role in buying, using, approving, operating, supporting, or governing the workflow.
3. The screener captures AI trust posture, automation maturity, agency preference, privacy or security sensitivity, and accessibility, locale, device, or connectivity coverage when relevant.
4. Sampling source and recruiting mode are recorded, including employee, customer, prospect, panel, community, support, beta, dogfood, public thread, or survey source.
5. Bias risks are named, including professional testers, convenience sample, power-user skew, fan/critic skew, customer-only skew, buyer-only skew, accessibility undercoverage, locale undercoverage, industry skew, and AI-adoption skew.
6. Compensation or incentive is recorded when applicable.
7. Synthetic or AI-assisted research is labeled planning-only or gap-fill-only and cannot satisfy a segment gate.
8. Claims supported and claims blocked are explicit, including segment, environment, task, denominator, and exclusion limits.
9. Product Truth or specification-mode signal records link the screener to accepted, rejected, deferred, research-more, non-action, stale, or contradicted decisions.

## Opinion-to-action routing

Different user opinions are routed by evidence strength:

| Evidence state | Allowed action | Blocked action |
|---|---|---|
| one unscreened opinion | open a research-more item, adjust study questions, create a weak signal | change requirement, claim demand, launch feature |
| screened segment interview | create a segment-specific TruthSignal, study finding, or support follow-up | generalize to all users |
| repeated screened findings | update a UserOpinionCoverageRecord, StrategicBetScorecard, benchmark scenario, or advanced-feature hypothesis | claim release readiness without runtime evidence |
| observed task plus screener | update UX, benchmark, telemetry, and Product Truth for the tested segment | claim untested segment support |
| representative disclosed-method survey | support directional quantitative signal with denominator and bias limits | replace observed task or accessibility evidence |
| beta or dogfood cohort | support limited release evidence with cohort boundaries | imply GA readiness or broad customer proof |

## First screener backlog

Before `foundation-01` exits as more than an implementation scaffold, prepare screener templates for:

- first Project and cited-answer workflow across `URS-001`, `URS-002`, and `URS-005`;
- progressive delivery and wait confidence across `URS-001`, `URS-002`, `URS-005`, and `URS-007`;
- automation dry-run, debugger, and outcome scoring across `URS-003`, `URS-006`, and `URS-010`;
- delegated trust and approval load across `URS-004`, `URS-005`, and `URS-006`;
- Worksets, resume, and no-ambient-capture companion comprehension across `URS-001`, `URS-005`, and `URS-007`;
- Product Truth and closed-loop discovery across `URS-003`, `URS-008`, and `URS-009`.

## Launch gates

Before launch evidence can cite user opinion:

- every ExperienceValidationPlan links to at least one `UserResearchSegmentScreener`;
- every UserOpinionCoverageRecord names missing target segments and blocked claims;
- every UserOpinionSynthesisRecord that affects launch evidence links to current screener records, codebook version, coding assignments, negative-evidence review, contradiction state, and AI-assist disclosure where applicable;
- every StrategicBetScorecard names the segment whose outcome is expected to improve;
- every CustomerClaimEvidenceRecord excludes untested segments, untested environments, untested accessibility/locale/device states, and untested agency-preference levels;
- every public survey, public thread, support synthesis, beta cohort, and dogfood cohort has source-quality, representativeness, bias, denominator, and segment limitations;
- every FrontierSignalReview that depends on public opinion, customer feedback, support feedback, dogfood, beta, survey, or benchmark-participant evidence links to current `UserResearchSegmentScreener` records and blocked-claim limits;
- no unresolved `S0` or launch-impacting `S1` contradiction exists between segment evidence, product docs, implementation status, benchmark results, telemetry, release evidence, and public claims.

## Documentation update rule

Changes to segment definitions, screener fields, recruiting modes, sampling-source policy, representativeness limits, segment-backed claims, or launch gates must update:

- [`user-research-and-experience-validation.md`](user-research-and-experience-validation.md)
- [`user-opinion-research-coverage-matrix.md`](user-opinion-research-coverage-matrix.md)
- [`user-opinion-coding-and-synthesis-ledger.md`](user-opinion-coding-and-synthesis-ledger.md)
- [`continuous-discovery-and-user-feedback-operations.md`](continuous-discovery-and-user-feedback-operations.md)
- [`public-signal-source-quality-and-citation-policy.md`](public-signal-source-quality-and-citation-policy.md)
- [`specification-signal-decision-ledger.md`](specification-signal-decision-ledger.md)
- [`product-outcome-metrics-and-strategic-bet-scorecard.md`](product-outcome-metrics-and-strategic-bet-scorecard.md)
- [`telemetry-and-experience-instrumentation-matrix.md`](telemetry-and-experience-instrumentation-matrix.md)
- [`research-experience-benchmark-suite.md`](research-experience-benchmark-suite.md)
- [`advanced-differentiation-benchmark-matrix.md`](advanced-differentiation-benchmark-matrix.md)
- [`frontier-feature-watch-and-novelty-control.md`](frontier-feature-watch-and-novelty-control.md)
- [`advanced-feature-incubation-and-prototype-governance.md`](advanced-feature-incubation-and-prototype-governance.md)
- [`customer-facing-claim-and-evidence-boundary-matrix.md`](customer-facing-claim-and-evidence-boundary-matrix.md)
- [`launch-readiness-and-release-evidence.md`](launch-readiness-and-release-evidence.md)
- [`product-readiness-gap-audit.md`](product-readiness-gap-audit.md)
- [`documentation-change-evidence-log.md`](documentation-change-evidence-log.md)
- [`../07-reference/official-references.md`](../07-reference/official-references.md)
- [`../07-reference/terminology.md`](../07-reference/terminology.md)
- [`../07-reference/requirements-traceability-matrix.md`](../07-reference/requirements-traceability-matrix.md)
- [`../_meta/requirements.json`](../_meta/requirements.json)
- [`../_meta/agent-routing.json`](../_meta/agent-routing.json)
- [`../_meta/implementation-build-plan.json`](../_meta/implementation-build-plan.json)
