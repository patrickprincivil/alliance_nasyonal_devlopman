# Silveroak shared services — database and security design

No database connection, authentication or payment provider is implemented by this file.

## Required entities
- organizations(id, name, created_at)
- users(id, email, created_at) — prefer existing auth provider user IDs
- memberships(organization_id, user_id, role)
- clients(id, organization_id, company_name, email, status)
- projects(id, organization_id, client_id, sector_id, stage, created_at)
- tasks(id, organization_id, project_id, assignee_id, state, created_at)
- quotes(id, organization_id, client_id, currency, setup_minor, monthly_minor, status)
- quote_items(id, quote_id, name, quantity, unit_minor)
- approvals(id, organization_id, actor_id, resource_type, resource_id, decision, created_at)
- audit_events(id, organization_id, actor_id, action, resource_id, created_at)
- agent_definitions(id, organization_id, name, tool_allowlist, cost_limit_minor)
- agent_runs(id, organization_id, agent_id, project_id, status, cost_minor)

## Invariants
- Every tenant-specific read/write must derive organization scope from authenticated server context.
- Never accept an organization ID from the browser as proof of access.
- Monetary amounts stored as integer minor units with explicit ISO currency.
- No hardcoded API secrets, customer messages or documents in public repositories.
- Payments require a provider-verified webhook and idempotency keys.
- Dangerous tool executions and production deployments require human approval.
- Consent and retention policies must be verified before storing client contact data.
- All AI model outputs must be treated as untrusted.
- Audit events should be append-only with retention and access controls.

## First safe milestone
Inventory existing auth and storage implementations; then add schema and migrations on a new branch, with backup and rollback plan. Do not use client-side localStorage as authoritative business storage.
