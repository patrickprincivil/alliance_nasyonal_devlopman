# Silveroak Quote API V1

GET /api/silveroak/quote?package=launch&addon=booking&addon=crm

This public API returns a non-binding CAD estimate from an internal server catalog. It does **not** record clients, charge money, issue formal quotes, or confirm service availability.

Accepted package IDs: launch, growth, ai-business.
Accepted add-on IDs: ecommerce, booking, crm, automation, portal, payments, membership, multilingual, dashboard, agent, pwa.

Response fields: currency, package, addons, setupCad, monthlyCad, status = ESTIMATE_ONLY, notice.

Reject unknown package IDs, unknown add-ons, duplicates, and excessive add-ons with HTTP 400. The API does not accept custom client-supplied prices, amounts, discount rates, customer records or card information.

Before real billing: authentication and rate limits for write paths, formal quote model + authorized approval, taxes and jurisdiction handling, provider webhooks and idempotency, detailed acceptance tests, and legal agreement.

## QA cases
- package=launch -> setup 1500, monthly 149.
- package=launch&addon=booking&addon=crm -> setup 2400, monthly 149.
- package=growth -> setup 3000, monthly 299.
- package=invalid -> HTTP 400.
- addon=invalid -> HTTP 400.
- addon=crm&addon=crm -> HTTP 400.

The front-end price calculator remains a preview. Backend estimate is the authoritative pricing computation for any future order flow.
