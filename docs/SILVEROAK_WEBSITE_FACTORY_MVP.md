# Silveroak AI Website Factory — minimum viable product

Parent: MASTER DEVLOPMAN → AI OPERATIONS CENTER → WEBSITE FACTORY.
No parallel application. Reuse existing Silveroak App Launch templates, pricing, CRM, approvals and identity.

## Current build slice
- /website-factory: client-side business name/description/template form and deterministic draft preview.
- Draft content remains in React memory only. No API calls, AI generation, storage, user accounts, payments or deployment.
- Template selection reuses lib/silveroak/templates.ts. Language selector is UI metadata only, not automatic translation.
- Output displayed as React text, not raw HTML injection.

## MVP release criteria
1. Five actually implemented and tested responsive templates.
2. Tenant-aware authentication and scoped projects/websites in PostgreSQL.
3. Draft/editor autosave, revision history and export with verified access.
4. AI generation only after opt-in, approved provider credentials, content safety and human review.
5. Secure visual editing of approved components and assets; no arbitrary script execution.
6. Site preview and explicit human-approved publish/unpublish action, with rollback.
7. Custom-domain DNS verification, HTTPS, secure media storage and website backups.
8. Stripe/PayPal through existing RevenueOS, verified webhooks; avoid duplicate billing.
9. Accessibility, performance, SEO, analytics consent and multilingual QA.
10. CI lint/typecheck/build and staging tests must pass before merge.

## Comparison / differentiation
Reference Strikingly for no-code editing, templates, hosting, stores, membership and analytics; do not copy proprietary assets or UI source.
Silveroak's differentiator should be shared cross-sector project workflows, reusable services, multilingual support and human-approved AI assistance. Verify each third-party provider feature and current pricing separately.

## Phases
P1 practical client draft/editor and templates; P2 real AI with review; P3 publishing and domains; P4 store/membership and billing; P5 CRM/marketing/analytics; P6 cross-sector templates; P7 internationalization.
