# Silveroak Global Commerce, Software Intelligence & Manufacturing — V4.1

Parent: MASTER DEVLOPMAN. Reuse common customer identity, CRM, RevenueOS, approval workflow, audit, catalog and marketing integration.

## Implementation in this feature branch
- `/global-commerce` is a read-only roadmap page.
- `lib/silveroak/commerce.ts` is a typed registry of modules and external candidates.
- No Etsy/Walmart/GoHighLevel API connection, purchases, subscriptions, product publishing or manufacturing orders have been made.

## First MVP (one database, no duplicate modules)
1. Shared product catalog: organization_id, SKU, type (digital/physical/service), eligibility status, revision, currency, price_minor, inventory policy.
2. Channel listings: product_id, platform, external_listing_id, state, last_sync_at; never publish without approval.
3. Manufacturing RFQ: client/project links, drawings/document storage, revision, tolerances, materials, quantity, vendor quotes, schedule.
4. Supplier verification: legal identity, capabilities, certifications as applicable, lead times, QA and provenance.
5. Cost model: material, tooling, manufacturing, freight, insurance, duty/tax, marketplace fees, refund reserve and margin. Recompute totals on server.
6. Reuse central CRM, invoice/payment workflow, human approvals and audit logs. No separate user directory.
7. Software Intelligence: compare licensed solutions by security, price, data portability, feature fit and total cost; Capterra as research source, not a copied proprietary review database.

## Etsy/Walmart gates
Check current seller eligibility, supported countries, listings and intellectual property; seller verification and API permissions; disclose production partners where necessary. Do not represent nonoriginal resale as handmade. Walmart marketplace onboarding is not guaranteed.

## MOD Leads/GoHighLevel evaluation
Verify vendor identity and offer terms directly, trial duration, auto-renewal charges, data export, privacy, and licensing rights. Marketing claims of bundle value are not verified savings. No enrollment without human review.

## Manufacturing safeguards
Only accept projects after scope, qualified vendor, payment milestones, sample/inspection plan, customs/logistics and engineering/legal safety review for regulated products. Never assert a design meets a safety standard without testing.

## Rollout
Phase 1: read-only catalog and RFQ prototypes; controlled admin review.
Phase 2: test tenants, private vendor quoting, customer approval and signed invoices.
Phase 3: authorized marketplace connectors and tracked fulfillment.
Do not deploy billing or storefront operations before end-to-end CI and authorization tests.
