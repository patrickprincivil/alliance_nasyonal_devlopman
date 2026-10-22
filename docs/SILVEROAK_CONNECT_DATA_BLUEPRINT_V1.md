# SILVEROAK — CONNECT DATA / Unified Marketing Data V1

Inspired by the **approach** described in Supermetrics Connect Data marketing copy supplied by the project owner. Do not copy its branded code, designs, licensed connectors or vendor marketing claims. Values such as '170+', '99.9%', '50%', and '5x' belong to Supermetrics' claims and are **not** Silveroak results.

Parent: MASTER_DEVLOPMAN → Silveroak AI Factory → Marketing Engine → Integration Hub. One shared CRM, identity, approval queue, financial ledger, audit, and PostgreSQL tenant boundary. **Do not create a second standalone data platform.**

## Three ingestion paths
1. **API adapters:** OAuth-authorized and permission-scoped read-only adapters for GA4, Meta, Shopify and HubSpot as individually supported; credentials server-side with encryption and token rotation.
2. **File import:** CSV first; Excel after library selection and scanning. Admin-approved upload into isolated object storage; check size limits, MIME + extension + magic bytes, formula injection, malware screening, schema preview, mapping, timezone and currency; do not run code inside imports.
3. **Custom adapter SDK:** Explicit allowlisted HTTP origins, credential vault, outbound network restrictions, schema validation and retry budgets. No arbitrary customer-provided executable connector code.

## Shared pipeline
SOURCE → AUTHORIZED INTAKE → RAW IMMUTABLE SNAPSHOT → SCHEMA VALIDATION → DATA MAPPING → DEDUPLICATION → QUALITY REVIEW → TENANT-SCOPED STORAGE → REPORTS / REVENUEOS / APPROVED AI ANALYSIS.

Support daily/batch freshness labels first. Avoid claims of live or real-time accuracy until source guarantees and measured latency justify them.

## Canonical fields (subject to database schema review)
organization_id; connection_id; provider; source_account_id; event_date; timezone; metric_name; numeric_value; currency; attribution_window; channel; campaign_external_id; imported_at; source_version; source_job_id.
Use integer minor currency units for money, provider native units in raw staging, normalized daily periods, unique external event keys and audit trails.

## KPI definitions / data quality
- CAC = eligible attributed acquisition spend / **new acquired customers**; undefined if zero.
- CPL = eligible spend / qualified leads; undefined if zero.
- ROAS = attributed revenue / eligible ad spend; undefined if zero.
- CTR = clicks / impressions; undefined if zero.
- Conversion rate requires a clearly defined denominator and attribution model.
- LTV must be cohort-based with refund/churn policy, **not** invented from one campaign.

Require reconciliation against first-party provider reports, explicit freshness and completeness, consent for personal data, per-tenant access tests and no cross-currency arithmetic without a defined exchange-rate source.

## Six phase build
P0 Discover existing Silveroak Library / source adapters, check for duplicates.
P1 File importer CSV with preview and strict schema mapping (admin only).
P2 PostgreSQL metrics staging, mapping tables, append-only sync logs, restore tests.
P3 GA4 read-only account pilot with OAuth and consent; compare to GA4 interface.
P4 HubSpot/Meta/Shopify one at a time, subject to API permission and legal terms.
P5 Controlled scheduling, tenant dashboards, RevenueOS attribution and opt-in AI reporting.

## Outbound destinations
Dashboard (first); downloadable CSV; approved Google Sheets/Excel/BI exports; optional warehouse destinations (Postgres/Snowflake) only when needed.
Any external export requires tenant authorization, logging, data minimization and rate limiting.

## Security and approval
OAuth scopes least privilege; encrypted tokens and storage; signed webhooks; idempotency keys; per-tenant RLS plus server authorization; retention and deletion. AI recommendations are read-only by default. Publishing, ads spending, outreach and payment need appropriate human approval.

## Current build truth
Only planning and sample normalized KPI calculation code are added. **No OAuth connection, live ingestion, file upload, sync job, data warehouse, dashboard KPI or provider performance data is implemented or verified.** Check CI and Vercel separately before claiming deployment.
