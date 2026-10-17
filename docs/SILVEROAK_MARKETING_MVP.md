# Silveroak Marketing Ecosystem & Integration Hub — MVP V1
Parent: MASTER DEVLOPMAN → AI Factory → Marketing Engine → Integration Hub.
Architecture: reuse existing Next.js monolith, shared identity, CRM, approval, audit and RevenueOS. Do not create duplicate platforms.

## Implemented in current branch
- Read-only marketing navigation pages and seven mock provider inventory entries.
- Eight proposed agent roles, labelled planned.
- No OAuth setup, credentials, background synchronization, real data, external posting, CRM modifications or payments.

## Milestones / acceptance
1. Inventory existing app modules, migrations, authorization and provider integrations.
2. Create migration (only after DB selection): organizations, marketing_integrations, integration_accounts, sync_jobs, sync_logs, campaigns, campaign_metrics, social_posts. Every table with customer data needs tenant FK and scoped authorization. Reuse existing clients/leads, approvals, audit and payment tables.
3. Create OAuth consent start and callback on server with state, PKCE when supported, exact redirect URI, session tenancy check, encrypted token storage and least-privilege scopes.
4. Webhook handlers: verify signatures, deduplicate events, rate-limit, use audit trails and retries with backoff.
5. Read-only analytics sync for a single test tenant; reconcile metrics against provider UI.
6. Enable a human review queue for publishing, ad spend and outgoing communication. No automatic sensitive action by default.
7. Add user-facing connection/disconnect, token rotation, failure alert, deletion and data retention controls.

## Google integration plan
- Google Cloud project and OAuth consent setup; restrict test users until verification.
- Choose GA4 Reporting API for first read-only pilot, configure minimum scopes and allowlist redirect URIs.
- Google Ads requires developer token, account permissions and applicable OAuth approval; do not assume availability.
- Google Sheets should be a distinct least-privilege connector only if an approved customer workflow needs it.
- Record and handle per-API quota, access reviews, retention and consent revocation.

## Meta integration plan
- Register a Meta app, set allowed OAuth redirect and webhook URLs and secure app secrets.
- Request appropriate Graph API permissions for explicitly authorized Pages/Instagram accounts; elevated access and review may be required.
- Start with read-only insights where account eligibility permits; delay publishing and Meta Ads spend automation.
- Handle token expiration, role changes, app reviews, API rate limits, signed webhooks and user deletion requests.

## Security, materials and cost
Materials: development computer, test phone, stable internet, GitHub, Vercel preview, Postgres hosting, encrypted secret manager/storage, monitoring and backup.
Keep secrets on server, never in source control. Encrypt OAuth credentials, limit role access and scope exports by organization. Prefer existing cloud resources. Production budget depends on actual customer usage and providers' API rules.

## Rollout gates
Run npm ci, TypeScript, lint, Next build, integration tests, secret scanning and code review. Provider connections must be marked **not connected** until successfully authorized and verified. Never claim a plan is deployed integration.
