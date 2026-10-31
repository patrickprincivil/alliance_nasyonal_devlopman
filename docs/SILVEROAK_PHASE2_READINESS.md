# Silveroak Phase 2 readiness and acceptance gates

This file documents future implementation requirements. It does not claim the backend is deployed.

## First operational milestone
1. Get passing GitHub Actions lint and build on the draft PR.
2. Inventory existing application routes, auth, CRM, database and payments.
3. Select one shared PostgreSQL backend and one auth system.
4. Create organization-scoped clients, projects, tasks, quote drafts and audit events.
5. Add form API with consent, validation, spam and abuse protection.
6. Require server-side role validation on all reads and writes.
7. Make Quote Preview amounts server-calculated before formal quotes.
8. Create approval workflow before payment, contracts or production deployment.
9. Integrate one verified payment provider with webhooks and idempotency.
10. Build reusable customer templates and run customer acceptance tests.

## Key security requirements
- Organizations must not access each other's clients or projects.
- Store monetary values with currency and integer cents.
- Never treat client browser input as a trusted charge or permission.
- Do not store card details or passwords in customer intake.
- Every approved action records who approved it and when.
- Backup and restore must be tested before live customer records.
- No automated deploy, charge, marketing email, or data deletion without the required authorization.

## Commercial readiness criteria
- Live contact channel verified and tested.
- Contract and package scope reviewed.
- Domain, hosting, AI and messaging expenses disclosed.
- Actual payment checkout tested with test mode before production.
- Customer handoff and support process documented.
