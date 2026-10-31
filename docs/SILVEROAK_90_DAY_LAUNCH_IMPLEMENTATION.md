# Silveroak 90-day App Factory launch — implementation baseline

## Scope and source of truth
Repository: patrickprincivil/alliance_nasyonal_devlopman. This document is a plan, not evidence that services, customers or automation exist.

**Principle:** SEARCH → CLASSIFY → REUSE → MERGE → LINK → CREATE.
Reuse existing Next.js pages and revenue/AI services before adding packages or infrastructure. Do not build a separate parent platform.

## Phase 0 — audit
- [x] Inspect package.json, layout, homepage, shared CSS, Navbar, and existing dashboard.
- [x] Identify stray JSX in app/components/Navbar.tsx.
- [ ] Run npm ci, npm run lint, npm run build locally/CI.
- [ ] Inventory all routes and back-end integrations.
- [ ] Check auth, database schemas and secrets without exposing their values.
- [ ] Document existing contact form and deployment configuration.

## Phase 1 — sellable offer (weeks 1–4)
- [x] Create public-facing proposed package page /silveroak-app-launch.
- [x] Link an existing /contact route for inquiries; verify the route and its submission behavior before using for real sales.
- [ ] Create intake form with server-side validation, consent, spam protections and notification.
- [ ] Define deliverables, exclusions, tax, cancellations and SLA in client agreement.
- [ ] Build and review one customer template, reusable modules, FAQ assistant and one payment provider.
- [ ] Verify provider merchant eligibility and acceptable use before enabling payments.

## Phase 2 — governed agent workspace (weeks 5–8)
- [x] Create informational /agent-control-center registry UI, clearly marked as nonoperational.
- [ ] Implement authenticated project/task storage in PostgreSQL.
- [ ] Build role/policy-based approval queue and immutable audit history.
- [ ] Implement tool permission scopes, bounded task runner, retries and cancellation.
- [ ] GitHub integration through least-privilege token/app; branch → PR → CI → human approval.
- [ ] Assess n8n versus existing automation; avoid duplicate orchestrators.

## Phase 3 — templates, customers and sales (weeks 9–13)
- [ ] Build five shared templates: local service, restaurant, professional, shop, nonprofit.
- [ ] Customer dashboard showing only verified data with tenant access isolation.
- [ ] Quote/payment pipeline through existing RevenueOS.
- [ ] Customer case studies and referral terms (with consent).
- [ ] Review realized revenue, refunds, AI costs and customer support load.

## Security and acceptance gates
- [ ] No exposed secrets, personal data, or API keys in code or build artifacts.
- [ ] MFA for admin; deny cross-organization data access.
- [ ] Server-side RBAC, audit events and approval for deployment or payments.
- [ ] Staging build + tests pass; rollback documented; database backup restored in test.
- [ ] No mock revenue represented as live metrics.
- [ ] Accessibility, responsive layout, working client inquiry channel and legal pages.

## Initial proposed pricing (CAD; not contractual)
| Tier | Setup | Monthly |
| --- | ---: | ---: |
| Launch | $1,500 | $149 |
| Growth | $3,000 | $299 |
| AI Business | $5,000+ | $499+ |

90-day goals: 3–5 paying clients, CA$5,000–20,000 cumulative setup, CA$500–2,500 MRR. Goals, not promises.

## Next implementation gate
Inspect all existing routes and payments/auth/data services before choosing Prisma, n8n, Redis, FastAPI or any new integration. Do not deploy to production automatically.
