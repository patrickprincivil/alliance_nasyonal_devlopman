# Silveroak App Factory — acceptance tests / next implementation gates

## Prototype pages
- Visit /silveroak-app-launch and inspect tiers and disclaimers.
- Visit /silveroak-app-launch/quote and change a package and add-ons; displayed totals must equal deterministic calculator outputs.
- Visit /silveroak-app-launch/request; check required fields, email validation and consent. Verify explicitly that a mailto draft opens and **no form submission or storage** occurs without sending an email.
- Visit /silveroak-app-launch/templates; all five specifications display as **planned**, not working products.
- Visit /agent-control-center; all proposed agents marked not configured.
- Visit /master-control-center; avoid fictional balances, customer counts or deployment status.

## Business logic
- Packages: Launch CA$1,500 + $149/month; Growth $3,000 + $299/month; AI Business from $5,000 + $499/month; prices are proposals.
- Reject unknown package ID and invalid addon amounts; never trust client-provided monetary amounts on a future server route.
- Project workflow: NEW_LEAD → QUALIFIED → DISCOVERY → QUOTE_SENT → DEPOSIT_PAID → BUILDING → REVIEW → LAUNCH → MONTHLY_CLIENT.
- Review can return to BUILDING; Quote can return to DISCOVERY; terminal state cannot transition further.
- Agent task workflow: BACKLOG → READY → RUNNING → REVIEW → APPROVED → DEPLOYED, with explicit FAILED/retry paths.
- State transition utilities **do not** enforce authentication, persistence or payments; a future backend must check all three.

## Pre-merge checks
- npm ci
- npm run lint
- npm run build
- Browser-level functional checks of all new routes.
- Verify existing pages and navigation still work.
- Verify CI result on this PR, and fix failures before merge.
- Never merge or deploy an untested production billing/auth integration.

## Future backend milestones
- Audit existing database/auth; choose schema without overwriting stored records.
- Introduce server-side tenancy and permissions with tests.
- Add durable project/client intake and anti-spam/rate limiting.
- Generate signed quotes only after controlled human approval.
- Add payment provider verified webhooks and idempotency.
- Integrate review queue, audit events and GitHub PR gates.
