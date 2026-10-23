# MASTER DEVLOPMAN — Silveroak Global Employment MVP

Design inspired by modern recruiter tooling; do not copy any third-party proprietary service or claim partnership. This is **not** an active recruitment platform.

## Reuse central infrastructure
Use existing MASTER DEVLOPMAN control center, shared organization auth/RBAC, candidate consent service, notifications, audit and human approval. Do not fork the platform or create parallel identity/CRM systems.

## MVP phases
1. Public source-linked jobs with publish date, source URL, source permissions, location, and verification status.
2. Candidate profile registration only with clear consent, privacy policy, secure storage, right to export/delete, and retention limits.
3. Employer verification: legal identity, website, independent contact check, current job availability, employment standards and recruitment licensing.
4. Explainable skills matching from role requirements; candidate review and qualified human judgment. Do not score race, disability, age, religion, gender or other protected attributes.
5. Opt-in job alert delivery with unsubscribe, frequency limits and duplicate suppression.
6. Recruiter dashboard with role-scoped tenant isolation, source attribution and audit trail.
7. Relocation readiness: actual travel, housing and living costs, licensing and visas. An internal 6-month living expense recommendation **is not** a universal government requirement.
8. Accessibility, anti-fraud controls, data breach response and compliance review before live applicant intake.

## Verification and legal gates
- Confirm applicable recruiter or immigration service licensing per jurisdiction before offering regulated services.
- LMIA requested does NOT mean LMIA approved. Do not imply guaranteed work permits, visas, hiring or placement.
- Validate job freshness and company authorization; do not scrape websites in violation of their terms or automated access restrictions.
- Never charge unlawful recruitment fees to workers or send unsolicited automated outreach.
- No automated hiring rejection or decision without human evaluation.
- No candidate records, external emails, payments or alerts are created by this branch.

## Draft data model (not a migration)
- Organizations (reuse), candidates, candidate_consents, skill_taxonomy.
- Employers, employer_verifications, job_postings, job_sources.
- Candidate_skills, job_requirements, match_explanations (non-binding).
- Alert_subscriptions, alert_deliveries, human_reviews, audit_events.
Scope customer data by organization and enforce server-side tenant identity. Do not collect sensitive identifying data until access controls and retention rules exist.

## Launch acceptance tests
- CI lint and Next build pass before merge; page labels must state planned status.
- No fake active job listings or confirmed employer relationships.
- Consent, access, deletion, opt-out and discrimination tests pass.
- Source provenance and human review visible for every published opportunity.
