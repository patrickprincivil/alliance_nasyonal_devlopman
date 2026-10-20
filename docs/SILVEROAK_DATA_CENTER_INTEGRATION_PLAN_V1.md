# Silveroak Data Integration & AI Analytics — Unified Integration V1

**Parent:** MASTER DEVLOPMAN → AI Operations Center → Global Data Integration & AI Analytics Center.
**Do not create another standalone production platform.** Reuse existing Marketing Engine, RevenueOS, tenant identity and audit.

## Source prototype
User-described local FastAPI + SQLite + HTML prototype, Kreyol UI, CSV 2MB / 10000 rows, fields sale_date,channel,revenue,spend. User-described status: two tests passing locally; no production auth or connectors. Treat as **claimed demo capability, pending source-code inspection and independent regression verification**. Do not deploy SQLite publicly as shared multi-tenant storage.

## Supermetrics comparison
- Supermetrics: vendor prebuilt connectors, custom import, connector builder, mappings, destination transfer, reporting, managed service.
- Silveroak V1: offline/local CSV ingestion + revenue/spend/ROAS summary; planned reusable provider adapter interface and governed reporting; external connectors not active.
- Do not assume equal feature parity or vendor SLAs. Differentiate via Silveroak sector modules and governance *after* security and evidence.

## One canonical data flow
File or authorized API → validate and quarantine → import job/audit → tenant-scoped staging → normalized canonical records → metrics calculation → dashboard/report → optional AI recommendations → human approval for any external or financial action.

## CSV/Excel MVP validation contract
CSV columns (exact): sale_date, channel, revenue, spend.
- ISO dates YYYY-MM-DD; standard decimal numeric inputs; non-negative values, reject NaN/infinity.
- UTF-8 CSV with optional BOM, strict header and row limits; preserve source filename and checksum but avoid exposing customer PII.
- Duplicate strategy: tenant + data source + sale_date + channel unique, use an explicit upsert policy and import manifest.
- Validate file size before parsing; report line-number errors and preview staged results before committing.
- Aggregate revenue=sum(revenue), spend=sum(spend), ROAS=revenue/spend (null when spend=0), profit estimate requires cost of goods and fees; do **not** label revenue-minus-spend as net profit.
- Excel extension later: xlsx with worksheet selection, formula handling and upload resource limits; never execute macros or spreadsheet formula contents; protect CSV exports from formula injection.

## Single-core data model (design, not migrated)
organizations and members **reuse existing**; source_connections, datasets, import_jobs, import_errors, source_records, metric_snapshots, report_definitions, approval_requests, audit_events. All customer data scoped server-side to organization_id. Monetary precision: DECIMAL with currency and source timezone; use integer minor units for billing.

## Implementation milestones
### P0: inventory and build health
- Locate full demo ZIP, README, CSV and test suite in Library, confirm checksum.
- Inspect code for security, licensing, network calls and dependencies; avoid executing unknown programs.
- Repair npm build and GitHub Actions until CI green before merging any new module.
### P1: local import MVP
- Reproduce original FastAPI demo in isolated environment.
- Assert malformed data, oversized file, duplicate rows, zero spend, negative spend, and CSV injection protections.
- Provide OpenAPI docs and deterministic report fixtures.
### P2: shared authenticated backend
- Choose whether to embed APIs into current Next.js backend or attach FastAPI as worker/service.
- Shared login/RBAC/tenant schema, ingestion limits, migrations, audit trail, backups and restore tests.
- Migrate to PostgreSQL after staging parity tests; no duplicate independent customer database.
### P3: limited external connectors
- Consent-driven read-only pilot for GA4, then Meta insights where account and app permissions permit.
- OAuth state/PKCE, scope minimization, encrypted tokens, revocation, webhooks signature verification, retry and rate limit policies.
### P4: analytics and reporting
- Normalized dimensions, attribution methodology, spend and sales reconciliation, export permissions, reconciliation dashboard, alerts.
### P5: AI and commercial release
- Read-only analysis agents first; human approval for actions, legal/privacy compliance, paid customer pilot, pricing based on real provider costs.

## Exit gates
No production data without secured authentication and role enforcement; no billing without provider verified payments; no claim of live connector without an authorized successful test. All deployed functionality must pass lint, TS, build and integration/security checks.
