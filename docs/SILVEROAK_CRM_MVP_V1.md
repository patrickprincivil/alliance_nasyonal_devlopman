# SILVEROAK AI CRM — unified MVP plan
Parent: MASTER DEVLOPMAN → Business & Commerce → Silveroak AI CRM.
Pipedrive is a product reference only; do not copy proprietary software or branding.

## Reuse before creating
- Shared authentication, organization-scoped permissions, contacts and audit when implemented.
- Shared Quote API catalog, Human Approval and RevenueOS.
- Shared Marketing Engine integrations; do not duplicate Gmail/WhatsApp OAuth connectors.
- Use a modular monolith until complexity warrants separate services.

## First release acceptance
1. Authenticated organization-specific companies and contacts with consent; CRUD must enforce tenant scoping.
2. Leads and opportunities with stage, owner, notes, next follow-up and reporting.
3. Quote drafts using server-owned pricing; a human approves issuing and pricing overrides.
4. Activities: due date, assignee, status; no automatic external messages without consent and review.
5. Pipeline summary calculated from real stored data (no fabricated counts).

## PostgreSQL model (design only)
- organization_id on companies, contacts, opportunities, activities and notes.
- companies(id, organization_id, name, country, created_at).
- contacts(id, organization_id, company_id, name, email, consent_status).
- opportunities(id, organization_id, company_id, stage, currency, expected_value_minor, expected_close, owner_id).
- activities(id, organization_id, opportunity_id, kind, due_at, completed_at, owner_id).
- Reuse existing quotes, approvals, audit_events, integrations, identities and membership.
- Add compound organization-scoped foreign keys and enforce server-side permissions; consider row-level security after policy tests.
- Encrypt backups, allow deletion/export subject to retention law, and maintain append-only audit trails.

## Integration order
1. Internal database and access control.
2. Gmail / Outlook opt-in through the existing shared integration hub.
3. WhatsApp Business approved templates / opt-in, subject to provider conditions.
4. Payments and accounting through verified provider callbacks.
5. AI suggested follow-ups and summaries with explicit approval before sending.
6. Optional interoperable CRM import/export; no Pipedrive subscription required.

## Current actual state
Only static, read-only CRM landing page and shared definitions are added. No connected database, authenticated CRM workflow, Pipedrive data, billing or deployed production service is claimed.
