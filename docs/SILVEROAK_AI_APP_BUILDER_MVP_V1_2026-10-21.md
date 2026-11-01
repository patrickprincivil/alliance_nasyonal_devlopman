# SILVEROAK — MASTER DEVLOPMAN
## AI App Builder & Business Automation — unified module architecture V1.1
Date: 2026-10-21
Status: product architecture and phased implementation plan; NOT a claim of deployed features.
Reference inspiration: Hercules.app (capabilities concept only, no copied code or branded assets).

## Principle
**One platform, shared infrastructure.** Extend existing Next.js repository and Master Control Center. Reuse the existing planned CRM, RevenueOS, Marketing Engine, AI orchestrator, identity, audit, human approvals and files service. Avoid independent clones.

## Clean module hierarchy
MASTER DEVLOPMAN
- 01 Master Control Center: portfolio, projects, budgets, reports, approvals and audit
- 02 Silveroak AI Factory
  - 02.1 App Studio: prompt/spec intake, template selection, project workspace, app preview
  - 02.2 Build Engine: requirements -> design -> generated code -> test -> PR; human review required
  - 02.3 Template Registry: website templates, business workflows, versions and license metadata
  - 02.4 Business Modules: reuse CRM / RevenueOS / Marketing / project tracking, later ERP/HCM/etc.
  - 02.5 Agent Studio: defined tools, scopes, run monitoring, quotas, approvals
  - 02.6 Automation Studio: approved triggers, jobs, retry/failure history
  - 02.7 Deployment Center: staging, domains, environments, approved production deploys
  - 02.8 App Marketplace: *later*, only after safe multi-tenant commerce
- 03 Shared Platform Services (not separate products)
  - Identity & Organizations: OIDC / roles / tenant isolation
  - PostgreSQL: shared records / migrations / audit / backups
  - File and Asset Vault: storage / versioning / retention
  - API & Integration Hub: OAuth / webhooks / rate limits / provider permissions
  - AI Model Gateway: credentials, routing, usage budgets, moderation
  - Payments & RevenueOS: billing, invoices, subscriptions and provider webhooks
  - Observability & Security: logs, alerts, secret management, RBAC, recovery

## MVP (Phase 1: first demonstrable product)
**User journey**: business request -> choose one of 5 starter templates -> editable structured spec -> approval -> preview -> human-reviewed GitHub PR -> staging build -> feedback.
1. Single internal operator workspace, **no public multi-tenant editor initially**.
2. Reuse existing App Launch landing, request form and indicative quote API; ensure CI is green.
3. Reuse 5 existing planned template specifications; implement **one** production-grade sample template first.
4. Save specifications, project status and revisions in the existing/selected secured PostgreSQL backend only after auth.
5. Controlled code generation; bounded filesystem and tool permissions, dependency allowlists and branch isolation.
6. Generate PR and run lint, typecheck and production build; show failures, no auto-merge.
7. Approval gate before public domain, payment, client messaging or production deployment.
8. Minimum security: auth, project ownership, audit, rate limit, model spend caps, backup and restore test.
9. Acceptance: 1 complete template runs end-to-end on a preview, reproducible build and rollback documentation.

## Phase 2: Business Applications
Extend **shared** CRM, project management, appointment scheduling, inventory and invoicing. Avoid building separate identities or ledger. ERP, HCM, healthcare and regulated data workflows require separate scope and controls.

## Phase 3: Agent & Workflow Factory
Versioned task plans, tool allowlists, sandbox, evaluations, human review, retries, audit, marketing assistant; external messages/posts/spend always require explicit permission and approval.

## Phase 4: Commercial platform
Multiple organizations, subscription billing, self-service customer portal, web/PWA distribution, template catalog licensing, billing support and abuse detection. Marketplace only once operational support exists.

## Phase 5: Global expansion
Language packs, international tax/payment compliance, Android/iOS wrappers or native apps where required, enterprise controls, disaster recovery, country-aware data policy.

## No-duplication map
| Requested feature | Home |
|---|---|
| AI app/website/mobile builder | AI Factory / App Studio, shared Build Engine |
| AI agent builder and automation | AI Factory / Agent Studio & Automation Studio |
| CRM, customers, lead management | Shared CRM / Marketing Engine |
| Accounting, invoices, payment | RevenueOS |
| OAuth, integrations, API gateway | Shared Integration Hub |
| Auth, permissions, audit, backups | Shared Platform Services |
| Application deployment and domains | AI Factory / Deployment Center |
| Analytics | Master Control Center with reusable analytics service |

## Technical risks & sequencing
- Fix npm lockfile/CI/Vercel preview issues **before** attempting to claim deployment.
- Do not add Python workers, Redis, Docker orchestration or mobile app build infrastructure until a job requires them.
- Never publish secrets or client data in public GitHub PRs or AI generation prompts.
- Generated code requires secret scanning, dependency and licensing checks, test execution, review and rollback.
- Payments/regulated health/employment apps require compliance review before launch.

## Adjacent concept — natural household products (do not merge into App Builder)
MASTER DEVLOPMAN -> AGRICULTURE_ENERGY -> Natural Products & Household Solutions -> Botanical Home Aromas (research only).
Research references: orange peel + cinnamon, lemon peel + ginger, citrus/clove.
Claims: pleasant scent, possibly small humidity increase; **not** air disinfection, smoke removal or medical treatment. For dry mixes: proper drying, hygienic storage, allergen/fragrance warnings, supervised heating and mold control in humid climates. Any manufacturing/marketing requires label, cost and regulatory review. Avoid medicinal claims without appropriate scientific and regulatory evidence.

## Truth boundary
This is a documented product structure. It does not create live app generation, database migrations, AI agents, third-party OAuth connections, payment systems or production deployment by itself.
