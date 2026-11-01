# SILVEROAK — GLOBAL WEALTH, TRUST & FINANCIAL SERVICES V2.0

**Owner:** MASTER DEVLOPMAN → BUSINESS_REVENUE → Global Wealth, Trust & Financial Services
**Reference event:** STEP Cayman Conference, 21–22 January 2027, Hotel Indigo Grand Cayman; 10 CPD hours and 54 advertised speakers at time of review.
**Status:** Planning/architecture only. No regulated fiduciary, investment, tax or legal services are offered by this document. No clients, bank accounts, tokens or third-party financial data are integrated.

## Conference topic → Silveroak mapping
These are the **11 session titles published in the event overview**. The full detailed agenda page did not expose its session timetable as text on 21 October 2026; session times, final speakers and day assignments are **not independently confirmed**.

| Published session | Silveroak capability mapping |
|---|---|
| 1. Trust under pressure | Trust Administration; Trustee Compliance |
| 2. Who else is in the room? AI, privilege and the confidentiality problem | AI Advisory Support; Privacy & Confidentiality |
| 3. Brave New World 2.0: Embryos, genetics and life after death | Estate & Inheritance; Succession & Legacy |
| 4. Ethical investing or the bottom line | Ethical Investment Analytics; Financial Risk |
| 5. Who decides when they can’t? Capacity, autonomy and the limits of protection | Capacity & Safeguarding; Family Governance |
| 6. Wide powers, narrow limits: What A v C means for trustee discretion and deadlock | Trustee Compliance; Governance Decision Log |
| 7. Crypto, gaming and self-made millions: Advising the new wealth creators | Digital Asset Register; Education |
| 8. Arbitration provisions in trust deeds: Where the law stands and what practice has taught us | Dispute Resolution |
| 9. When the family becomes the story | Family Wealth Governance |
| 10. Three passports, no fixed address: Mobility, residency and global hedging | Cross-Border Residency Planning |
| 11. Caught in the crossfire: Trustees, divorce and disclosure | Privacy; Dispute Resolution; Document Disclosure |

## 15 modules (proposed, not implemented)
- SO-WM-01 — Wealth Management Center
- SO-WM-02 — Trust Administration System
- SO-WM-03 — Estate & Inheritance Planning
- SO-WM-04 — Family Wealth Governance
- SO-WM-05 — Ethical Investment Analytics
- SO-WM-06 — AI Financial Advisory Support
- SO-WM-07 — Cryptocurrency Asset Monitoring
- SO-WM-08 — International Wealth Structuring
- SO-WM-09 — Trustee Compliance & Audit
- SO-WM-10 — Dispute Resolution Management
- SO-WM-11 — Privacy & Confidentiality Center
- SO-WM-12 — Financial Education Academy
- SO-WM-13 — Cross-Border Residency Planning
- SO-WM-14 — Succession & Legacy Management
- SO-WM-15 — Financial Risk Management

## MVP priorities
1. **Document Vault** — tenant-specific case folders, encrypted object storage, version history, consent records, optional time-limited sharing, strict RBAC, append-only audit.
2. **Family Wealth Dashboard** — user-entered assets/liabilities, currencies, valuation dates, document links, beneficiaries, net-worth aggregation as non-advisory accounting summaries. No custody, trading or financial advice.
3. **Wealth Academy** — neutral training resources, course progress and citations with professional review; no personalized recommendations or legal templates presented as professional advice.

## Shared services to REUSE (do not duplicate)
- Existing Next.js app, auth/RBAC, PostgreSQL, audit, human approvals and the central Document Vault when they exist.
- RevenueOS for software subscriptions, not management of customer investments or client funds.
- AI Orchestrator only for classification, summarization and draft generation with human review. **Never automatically draft binding trust instruments, change beneficiaries, transfer assets or make investment decisions.**

## Proposed secure data model (review before migration)
Organizations; memberships; wealth_cases; case_participants; case_documents (object key, checksum, encryption key ID, sensitivity, retention date); assets; liabilities; valuations (as-of date and currency); beneficiaries; succession_milestones; advisor_referrals; compliance_reviews; approvals; audit_events; learning_courses; enrollments. Every record carrying client data requires a server-derived organization boundary, and some cases require finer per-case authorization. Use UUID identifiers and integer minor units for amounts. Do not store credentials/identity scans publicly.

## API plan (not yet active)
- GET /api/wealth/cases — authorized scoped list.
- POST /api/wealth/cases — create case with validated consent.
- POST /api/wealth/documents/presign — short-lived upload authorization after scope/size/type checks.
- GET /api/wealth/assets — as-of-date balances and provenance.
- POST /api/wealth/approvals — human decision + append-only audit.
- GET /api/wealth/academy/courses — public educational metadata only.
All private endpoints require auth, role checks, rate limits, observability and penetration/security review before launch.

## AI roles (proposal)
Document classifier; estate topic explainer; family reporting analyst; privacy redaction assistant; compliance checklist assistant; education tutor. No autonomous client financial advice, discretionary management, or execution of transactions.

## Regulatory gates
Determine country, customer, activity and applicable regulators before offering trust management, investment recommendations, estate legal services or cross-border tax services. Licensed professionals review legal/tax/fiduciary work. Support privacy rights, sanctions/AML checks where applicable, record retention and breach response. Never claim STEP participation is a regulatory license.

## Milestones / acceptance
P1: UX mock + provider-neutral schema inventory. P2: auth, encrypted documents, tenant tests, audit. P3: manually entered financial dashboard with tests and disclaimers. P4: Wealth Academy. P5: regulated-partner review before advanced modules. Existing GitHub/Vercel build must pass before production deployment.

**Sources:** https://www.stepevents.org/event/Cayman/summary ; https://www.stepevents.org/event/Cayman/agenda
