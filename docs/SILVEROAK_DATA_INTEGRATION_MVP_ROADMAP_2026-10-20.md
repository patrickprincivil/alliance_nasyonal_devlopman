# SILVEROAK — Unified Data Integration & AI Analytics — MVP and 90-Day Roadmap
Date: 2026-10-20. Parent: MASTER DEVLOPMAN > AI Operations Center > Global Data Integration & Analytics Center.

## Source and implementation boundaries
The separate local FastAPI + SQLite + HTML demonstration described in the user's Library README is an **evaluation source**, not a new production platform. Its existence in Library does not imply that its code has been reviewed, merged, deployed, or validated independently here.
Reuse the existing Next.js app, organization access, CRM, Marketing Engine, approvals, audit, and RevenueOS modules. Keep SQLite only for isolated local prototypes; PostgreSQL is the proposed durable multi-tenant source of truth.

## Product comparison (features, not performance equivalence)
Supermetrics publicly describes prebuilt source connectors, custom CSV/Excel imports, a low-code connector builder, transfers, dashboards and warehouse/BI destinations.
Silveroak current status: documented architecture, read-only Marketing Engine prototype and separate local demo artifact described in README. No verified commercial OAuth connectors or production data transfer service.
Differentiation to pursue: integrated cross-sector dashboards, project-centric workflows, localized multilingual training and human-approved AI analytics; never claim more integrations or reliability than an established vendor.

## CSV MVP (first deliverable)
Contract: sale_date ISO YYYY-MM-DD, channel nonempty standardized string, revenue decimal >= 0, spend decimal >= 0, currency ISO 4217, source_file, import_batch_id, organization_id (derived from authenticated server context, not CSV). Add separate mapping step for files with alternate headers. Locale decimal normalization explicit.
- Reject malformed dates, negative/nonfinite currency, empty channel and oversized files.
- Reject unexpected columns unless mapping is approved. Do not import PII for pilot.
- Ingest with streaming/parser limits; preview errors with row numbers.
- Fingerprint file and dedupe by tenant + source + file hash + import batch; retain immutable source metadata.
- Store integer currency minor units, and never combine currencies without an explicit conversion rate.
- Summary: total revenue, spend, ROAS = revenue / spend when spend > 0 else null; profit is NOT revenue minus ad spend because COGS and other expenses are missing. Name revenue-spend 'contribution before other costs' only.
- Group by channel and period; show data freshness, source, sample status, currency and import errors.
- Workbook Excel import is phase 2: convert chosen sheet to normalized CSV with formula/macro execution disabled, size and row limits.

## Multi-tenant schemas (design only)
organizations existing; data_sources; import_batches; imported_sales_rows; source_column_mappings; metric_definitions; analytics_snapshots; sync_jobs; sync_logs; audit_events. Reuse existing CRM, marketing integrations and approval tables.
Enforce server-side tenant scoping, RBAC, encryption at rest and in transit, least-privilege credentials, private object storage, backups and retention/deletion workflow. Never accept tenant_id from a user form as authority.
Do not apply schema until inventory of existing migrations and rollback plan.

## 90-day implementation
Days 1-15: inspect local ZIP and tests, compare code dependencies/security, map existing shared services and inspect CI failure, define acceptance tests.
Days 16-30: CSV upload validation and preview via authenticated backend, schema migration in staging, no real client data until access review.
Days 31-45: marketing KPI dashboard, revenue/spend/ROAS by channel, basic exports and audit logs.
Days 46-60: Excel mapping pipeline, scheduled import retry and failure notifications, documented restore exercise.
Days 61-75: one approved read-only API connector (prefer GA4 based on access), reconcile values with provider dashboard.
Days 76-90: security and data isolation tests, human-approval gates, cost tracking, user acceptance pilot, review Vercel/production release.

## Acceptance
- Valid sample CSV ingests expected rows and returns reproducible totals.
- Invalid dates, negative money, unknown currencies, duplicate batches, oversized and cross-tenant requests rejected.
- Zero ad spend returns undefined/null ROAS rather than Infinity.
- File upload cannot execute macros/formula payloads or script.
- Tenant A cannot query tenant B.
- Rollback and backup restore tested.
- CI (npm ci, tsc, lint, build) passing before merge.
- Status clearly distinguishes demo, staging, and operational connections.

## Provider integration priorities
1. CSV file imports; 2. Excel; 3. GA4 read-only; 4. Meta Ads read-only; 5. Stripe/PayPal reconciled with RevenueOS; 6. commerce and CRM connectors by verified customer demand.
All provider connections require consent, applicable API scopes, terms and sometimes verification/subscription.
