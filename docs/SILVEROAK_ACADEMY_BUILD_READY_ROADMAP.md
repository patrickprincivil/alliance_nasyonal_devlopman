# Silveroak Global Python & AI Engineering Academy — phased build roadmap

Parent: MASTER DEVLOPMAN / GLOBAL EDUCATION / PYTHON & AI ENGINEERING ACADEMY.
Do not duplicate existing Global Education routes, identity, payment, CRM, document library, audit, or AI agent management.

## Product boundaries
**Learning**: original courses, curriculum, lessons, quizzes, exercises, grading, verified certificates, learner progress.
**Commercial**: team training contracts, pricing, support, marketing and billing; reuse RevenueOS and CRM.
**Engineering**: application delivery stays in Software Factory. Educational projects may lead to separately reviewed commercial work.
**Source policy**: Real Python is a reference for subject categories, not licensed Silveroak teaching material. Obtain permission for third-party redistribution.

## MVP milestones
1. Audit existing /global-education pages, identity and storage.
2. Validate 40-track reference list, reconcile categories, then author an original 12-course starter curriculum.
3. Implement a course catalog and navigation; route /global-education/python-academy is a roadmap UI, not a live LMS.
4. Design tenant-aware tables: courses, lessons, enrollments, learning_progress, exercises, submissions, assessments, attempts, certificates.
5. Add auth + role checks (learner/instructor/admin) and content publishing approval.
6. Implement first original Python Basics lessons and accessible static assessments.
7. Add autograding with robust per-student isolation; never run untrusted Python in Next.js or production host. Use isolated sandbox execution with CPU/time/memory/network constraints and logs.
8. Add learner dashboard and progress history.
9. Issue signed, revocable certificates only after validated completion.
10. Integrate a properly licensed content library and multilingual translations with quality review.
11. Pilot with a small cohort and measure completion, security and accessibility.
12. Activate paid enrollments via existing approved RevenueOS; no duplicate billing.

## Acceptance gates
- npm ci / tsc / lint / build pass, staging deploy verified.
- Enrollment permissions, consent, privacy and retention policies reviewed.
- No invented certificates, test scores, accreditation or third-party partnership.
- No arbitrary code evaluation on application server.
- Tests for cross-organization access and assessment integrity.
- Budget, licenses, legal and instructor reviews complete before commercial launch.

## Infrastructure
Reuse Next.js/TypeScript frontend; add Python/FastAPI worker only when assessment execution requires it. Use central PostgreSQL for durable records, Redis only for queues when needed, scoped object storage for learning assets.
