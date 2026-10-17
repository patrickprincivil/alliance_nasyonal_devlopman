# PostgreSQL schema design (review-only)

This is a database design reference, NOT a migration or deployed schema.

## Tables
| Table | Primary fields | Rules |
|---|---|---|
| organizations | id UUID, name, created_at | Tenant root |
| organization_members | organization_id, user_id, role | Unique member per organization; auth identities resolved server-side |
| clients | id UUID, organization_id, company_name, contact_email, stage | Tenant scope required for read/write |
| projects | id UUID, organization_id, client_id, name, stage | Client and project must belong to the same tenant |
| tasks | id UUID, organization_id, project_id, assigned_to, state | Explicit workflow transitions |
| quotes | id UUID, organization_id, client_id, currency, setup_minor, monthly_minor, status | Server-calculated, approval before issuing |
| quote_lines | quote_id, description, quantity, unit_minor | Pricing catalog reference |
| approvals | id UUID, organization_id, requested_by, decided_by, action, state | Separate approver for sensitive actions |
| audit_events | id, organization_id, actor_id, action, entity_id, created_at | Append-only |
| agent_runs | id UUID, organization_id, project_id, status, cost_minor | Default disabled until verified tools and human approvals |

## Launch-safe rollout
1. Audit existing data/auth packages first.
2. Design multi-tenant access tests and unique compound FK constraints.
3. Apply a reviewed migration to staging and test restore before production.
4. Enable server-side input validation, authorization, and audit transactions.
5. Add CRM intake using consent, spam/rate limits and deletion policy.
6. Enable provider webhooks and idempotency before accepting actual payments.

**No database connection or migrations have been executed from this document.**
