# Silveroak Global Employment — MVP & Wrangle reference
Date: 2026-10-23. Parent: MASTER DEVLOPMAN → Global Employment & Recruitment.

## Reuse audit
Existing code on the feature branch:
- lib/silveroak/recruitment.ts — six defined scopes, 8 sectors, 4 countries and candidate safeguards.
- app/global-employment/page.tsx — informational landing page.
- app/global-employment/[section]/page.tsx — informational pages for six modules.
**Do not duplicate this as a second recruitment platform.** Extend these components and reuse shared identity, CRM, approvals, audit and notification infrastructure after verification.

## Wrangle AI comparison — product inspiration, not a copied service
| Capability | Wrangle AI (user-supplied characterization; verify independently) | Silveroak currently |
|---|---|---|
| Candidate sourcing | AI agent searches | Planned |
| Candidate evaluation | Automated candidate assessment | Planned, human oversight required |
| Outreach | Automated contacting | Planned; opt-in consent and approval required |
| Candidate management | Candidate records | Planning page only; no applicant database |
| ATS connections | Provider-specific integrations | No verified ATS connector |
| Always-on work | Agent tasks | No active recruitment agent |
| International relocation | Not established in provided source | Proposed multilingual relocation module |

Do not present any Wrangle subscription prices or advertised savings as independently verified. Check official pricing, terms and data handling before business decisions.

## Minimum viable scope — 90-day pilot criteria
1. Job directory with real employer-origin source URL, posted date, country, wage currency, employment eligibility, expiry, verification date, and clearly labelled verification status.
2. Employer verification workflow with consent and source evidence; never mark LMIA **requested** as approved.
3. Voluntary candidate profile with minimal necessary data, clear retention/deletion policy, revocable consent and protected-attribute exclusion from ranking.
4. Explainable job-to-skill matching as *non-binding suggestions*, not automated hiring or eligibility determinations.
5. Opt-in job alerts with unsubscribe, source timestamps, deduplication and throttling.
6. Relocation readiness: cost-of-living estimate for six months or verified support as an **internal checklist**, never a universal immigration rule.
7. Partner/licensing gate before regulated recruitment and independent verification of immigration/labor rules per jurisdiction.
8. Human review before outreach, shortlisting decisions that affect candidates, or handling external data.

## Data model proposal (not applied)
Use existing organizations/users and audit events, not duplicates:
- employer_profiles (id, organization_id, legal_name, country, verification_state, verified_at)
- job_posts (id, organization_id, employer_id, source_url, source_last_verified_at, posted_at, expires_at, country, occupation, currency, wage_min_minor, wage_max_minor, evidence_state)
- candidate_profiles (id, organization_id, user_id, consent_version, consent_at, deleted_at)
- skills (id, label), candidate_skills (candidate_id, skill_id, evidence), job_skills (job_id, skill_id, importance)
- matching_suggestions (id, candidate_id, job_id, explanation, status, reviewed_by)
- alert_subscriptions (id, candidate_id, country, occupation, consent_at, unsubscribed_at)
- employer_checks (id, employer_id, reviewer_id, source_url, decision, reviewed_at)
Tenant-scoped foreign keys and server-side permissions are mandatory. Encrypt sensitive data and do not commit candidate PII.

## Acceptance gates
- No scraping from restricted sources or evasion of provider limits.
- Verify job source and expiration before notifying people.
- Human review and anti-discrimination checks.
- No recruitment fee from workers where prohibited.
- Consent/revocation, deletion exports and security tests.
- CI npm ci / typecheck / lint / build + Vercel preview green before production.
- No claim of a live vacancy, licensed recruitment or confirmed sponsorship without evidence.
