# Silveroak Financial Services — MVP + licensing gates

**Parent:** MASTER DEVLOPMAN / BUSINESS_REVENUE / Financial Services. No second identity, accounting, CRM, grants, approval or audit infrastructure.

## Scope of initial MVP
- Educational and record-keeping tools: personal budget, business cash-flow tracker, income/expense classification, document organization and reporting.
- Models based on user-provided hypothetical figures, with clear assumptions and limitations.
- Reuse shared CRM, human approvals, reporting and authenticated organization access when available.
- Financial AI roles are proposed only; not active or integrated.

## Out of scope until licensed and approved
- Individualized recommendations to buy/sell/hold securities or manage investment portfolios.
- Acting as investment adviser, discretionary asset manager or broker.
- Custody of client assets, accepting deposits, initiating transfers/remittances or exchanging currency on behalf of users.
- Licensed tax, legal, estate-planning, or insurance advice represented as professional advice.
- Automated filing, trading, payments, financial promises or irreversible actions.

## Four-jurisdiction compliance gates
Canada: identify relevant provincial/territorial securities, insurance and professional registration obligations before regulated services; FINTRAC assessment for money-service activities.
United States: SEC/state investment adviser and brokerage status as applicable; FinCEN/MSB analysis for money transmission; state-by-state obligations.
Dominican Republic: verify competent banking, securities, insurance, tax and payments regulators for each proposed activity.
Haiti: verify banking, securities where applicable, money-transfer, tax and professional rules with qualified local counsel.
This is a research checklist, not a legal conclusion or license determination.

## Storage / security acceptance
- Organization-scoped records; authorization on the server, not in UI.
- Consented collection, data minimization, retention/deletion, audit logs, encrypted backups.
- No financial credentials, bank login passwords, tax IDs or account statements inside public GitHub files.
- No real bank API, transaction sync, billing or AI bank access until audited provider connectors and permission checks.
- Clearly distinguish test, simulated and real data.
- Human approval required for any operational financial action.

## Implementation order
1. Inventory existing business/RevenueOS schemas and permissions before new models.
2. Create non-sensitive standalone calculator and budget UI with automated tests.
3. Add secure sign-in, organization membership, authorization and audited Postgres migrations.
4. Implement budget and business reporting over demo data first, then opted-in user data.
5. Build secure import/export with validation and user-controlled deletion.
6. Review country/service licensing boundaries and partner arrangements before regulated offerings.
7. Connect finance dashboard into Master Control Center and acceptance test in staging.
