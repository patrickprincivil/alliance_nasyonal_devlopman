# SILVEROAK GLOBAL SATELLITE NETWORK — MASTER DEVLOPMAN V4.0
## Haiti + Dominican Republic | Integrated business, engineering, procurement and pilot execution blueprint
**Date:** 20 October 2026 · **Status:** Concept/design only. No licenses, signed operator agreements, provider quotations, deployed hubs or confirmed coverage.  
**Parent:** MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK  
**Source principle:** SEARCH → CLASSIFY → REUSE → MERGE → LINK → CREATE.

## 1. Decision statement
Create **one** telecommunications program, not a second platform. Reuse the archived Wi-Fi deployment packages, satellite regulatory master packages, main AI Control Center, organization identity/permissions, audit, procurement, CRM, monitoring and RevenueOS. Treat existing artifacts as reference material until their contents and security have been reviewed.

A satellite beam footprint is not equivalent to direct Wi-Fi coverage for every home. A terminal at each aggregation location connects satellite backhaul to a legal, engineered last-mile access network. Remote regions generally need separate terminals or terrestrial backhaul. The Haiti and DR networks remain distinct regulatory operations under one planning umbrella.

## 2. Demand and service architecture
### Services
- **L1 offline local services:** authorized local educational library, school intranet, community bulletin, local CCTV, GPS map caches, lawful free-to-air media. No outside internet needed for local-only services; GPS receivers do not require internet to calculate position, but live navigation/traffic needs fresh data.
- **L2 sponsored community internet:** internet access shared only where provider contract + regulator permit redistribution. Grant/subsidy pricing depends on funding. Enforce bandwidth quotas, fairness, content security, and safeguarding.
- **L3 business institutional services:** contracted business connectivity, SLA tiers, dedicated/reserved bandwidth where available, managed secure LAN, cloud/AI access, failover, monitored backup power. No guarantee unless contracted.

### Logical network
```text
Approved provider(s) [LEO/MEO/GEO]
   ├── Haiti: legally authorized gateway/terminal → regional hub → village POP → Wi-Fi/fiber/radio
   └── Dominican Republic: legally authorized gateway/terminal → regional hub → village POP → Wi-Fi/fiber/radio
         ↑            shared NOC observability, configuration templates, procurement & reporting
         └── country-specific licensing, commercial contracts, customer consent and taxation
```

Each site requires an independently validated RF/link budget, line-of-sight survey, power assessment, safe grounding/lightning design, approved channel plan, battery/solar sizing, load management and physical security. Network equipment may need INDOTEL/CONATEL homologation or spectrum authorization as applicable.

## 3. Six candidate operators (not contracted)
| Provider | Orbit | Candidate role | Items to request |
|---|---|---|---|
| Starlink/SpaceX | LEO | Pilot backhaul, diverse backup where authorized | Business/service availability for precise addresses, redistribution and authorized reseller status, equipment, public IP, quota, SLA, install and termination |
| Eutelsat OneWeb | LEO | Managed community/enterprise via certified distribution partners | Distributor, service footprint, terminal class, committed throughput, service activation and minimum commitments |
| SES O3b mPOWER | MEO | High-throughput institutional/regional trunk, generally larger volume | Minimum capacity, gateway feasibility, terminal capex, lead time, redundancy, SLA and local approvals |
| Viasat | GEO/other services | Enterprise or resilience alternative | Local commercial availability, latency/throughput, coverage, failover and eligible reseller terms |
| Hughes/EchoStar | Satellite services | Rural enterprise/local distribution option | Certified partner, throughput tiers, data policy, hardware and lawful community redistribution |
| Amazon Leo | LEO | Future competitive evaluation | Commercial service availability, eligibility, reseller framework and coverage; do not assume purchase possible |

**Selection**: score commercial eligibility (25%), legal redistribution rights (20%), total cost of ownership (20%), availability/SLA (15%), capacity/latency (10%), equipment/service support (10%). Pilot requires written permission for intended use, not marketing material alone.

## 4. Proposed geographic program (NOT BUILT)
### Haiti candidate locations
Jacmel, Port-au-Prince, Cap-Haïtien, Les Cayes, Gonaïves, Jérémie, Hinche, Miragoâne, Fort-Liberté; remote communities in Sud-Est considered separately. Avoid listing Jacmel twice as if it were two hubs.

### Dominican Republic candidate locations
Santo Domingo, San Pedro de Macorís, Santiago, Punta Cana, La Romana, Puerto Plata, Barahona, San Cristóbal, San Francisco de Macorís, Monte Cristi.

These are **screening candidates**, not a coverage guarantee or engineering site list. Rank them against school/clinic demand, anchor-client commitments, access/security, solar exposure, existing tower/fiber, legal risk and affordability.

## 5. Pilot A — San Pedro de Macorís / Los Llanos (DR)
**Scope:** one privately authorized demonstration site, with lawful and explicitly permitted test clients only. Never resell consumer satellite service without express provider and regulator approval.

Acceptance:
1. Signed site-owner permission, power and security survey, geocoordinates from owner.
2. Written regulatory preconsultation; provider verifies intended service model.
3. Test terminal/network installed by competent technician.
4. Separate guest/staff/IoT VLANs, strong passwords/WPA3 where supported, disable default administrator credentials.
5. Function tests: 24-hour latency, jitter, packet loss, uplink/downlink, reboots, capacity under peak load.
6. Wi-Fi design: indoor/outdoor RF survey, permitted radio EIRP, coverage measurements, guest captive portal only if lawful.
7. Power: validated consumption → autonomy design; surge/lightning/ground safety signed off.
8. Written pilot closure report and actual monthly costs.
**No installation or ISP operation authorized by this plan alone.**

## 6. Pilot B — Jacmel / Morne-à-Brûlé (Haiti)
**Scope:** one authorized rural proof of concept with independent connectivity or local offline-first system if backhaul approval unavailable.
- Verify community need and host organization, physical safety, road access and equipment security.
- Confirm CONATEL service/terminal legal pathway before public connectivity.
- Demonstrate offline education server, caching, local networking, solar+battery and low-cost radio where lawful.
- Validate hurricane/weather protection, surge/earthing, battery safety, maintainability, training and spare parts.
- Community pricing/grant model needs consent and sustainable OPEX, not a promise of free internet.

## 7. Regulatory gating
### Haiti
CONATEL distinguishes concession for public telecom networks from authorization for independent/private networks; the legal category depends on actual activity. Equipment homologation does not itself grant a license to operate a network. Obtain written project-specific guidance, spectrum and terminal approval where required. Sources:
- https://conatel.gouv.ht/node/119
- https://conatel.gouv.ht/node/513

### Dominican Republic
INDOTEL's Registro Especial includes resale and satellite carrier service categories; a reseller may need a reseller agreement with an authorized concessionaire and a customer contract model. Regulatory fee/schedule and applicability must be confirmed directly for the exact business activity. Source:
- https://www.gob.do/servicios/inscripcion-en-registro-especial

**Hold point:** no customer billing, public Wi-Fi resale or large-scale RF deployment before country-specific legal reviews and written provider rights.

## 8. Equipment BOM for one pilot (quantities placeholders)
| Component | Qty | Selection gate |
|---|---:|---|
| Authorized enterprise satellite terminal + mount | 1 | Licensed, reseller-compliant, climate-rated |
| Business router/firewall dual-WAN-ready | 1 | VLANs, traffic shaping, VPN, monitoring |
| Managed PoE switch | 1 | Power budget and surge compliance |
| Wi-Fi access points rated for site | 2–4 | Survey-driven quantity, radio compliance |
| UPS + surge + properly designed grounding | 1 system | Engineer/electrician approval |
| Cabinet, lock and cabling, labels | 1 set | Weather, theft and fire safety |
| Outdoor point-to-point radios (optional) | 0–2 | LOS + licensed/unlicensed power compliance |
| Offline content server/storage (optional) | 1 | Copyright/rights, secure updates |
| Backup WAN (optional) | 1 | Independent provider/medium if viable |
| Solar + appropriately sized battery (optional) | Site-specific | Electrical design and battery fire protection |
| Laptop test kit, cable tester, spare connectors | 1 set | Commissioning checklist |
No fixed prices or equipment brands assumed until site quote and duty/tax validation.

## 9. Budget and economics
Legacy draft order-of-magnitude assumptions (NOT provider quotations):
- 1 demonstration hub USD 2,000–5,000
- 3 hubs USD 6,000–20,000
- 10 community hubs USD 25,000–100,000
- expansion USD 100,000–500,000+
- two national-scale networks potentially multiple millions USD

These ranges are **nonbinding and may underestimate** local licensing, towers, transport, insurance, subscriptions, customs, engineering, weatherproofing and staff.

For each hub calculate:
CAPEX = terminals + radio/Wi-Fi + power + mounting + land/site + installation + fees + customs + contingency.
Monthly OPEX = committed connectivity + hosting + power + site rental + support + transport + maintenance + insurance + licensing amortization + taxes.
Break-even subscriptions = ceiling(monthly OPEX / net monthly contribution per paid customer).
Do not claim profitability without verified vendor prices, measured utilization, payment collection risk, and conservative sensitivity case.

## 10. Procurement and provider RFQ — questions for all six
1. Are your enterprise/community internet services legally available at **the precise pilot locality** in Haiti and/or DR? Via what licensed entities?
2. Can Silveroak **redistribute/resell/shared community access**? Supply contractual clause and authorized reseller requirements.
3. Who supplies the licensed terminal? Model/spec, installation/safety rules, import/homologation documentation, ownership?
4. What committed information rate (CIR), peak rate, contention, quota/FUP, latency/jitter, availability, SLA credits and traffic management apply?
5. Can a dual-WAN failover be used? Static/public IP, CGNAT, VPN, IPv6, monitoring and API capabilities?
6. One-off installation, monthly fixed/usage fees, minimum term, currency, taxes, early termination, replacement and support?
7. Lead time, approved installers, training, spares, RMA support and hurricane/recovery procedures?
8. Can services be subsidized for schools/clinics and what permitted sponsored community model applies?
9. Is there a minimum regional/national capacity purchase? Can contracts start with 1 pilot site and scale?
10. Ask for nonbinding written RFQ response and pricing validity date. Do not claim partnership until signed.

## 11. Provider scoring and go/no-go
| Gate | GO evidence | NO-GO |
|---|---|---|
| Legal | Written regulator pathway and reseller rights | No permission or unresolved license |
| Site | Valid access, RF survey and approved power safety | Unsafe site/electrics |
| Technical | Tested service & workable 95th-percentile latency/capacity for chosen use | Insufficient backhaul |
| Finance | Signed capex/OPEX budget with runway and contingency | No financing for recurring obligations |
| Safety/privacy | Documented IoT isolation, logging/retention and secure admin | Default passwords/exposed CCTV |
| Community | Consent, complaint channel, school/clinic safeguards | Unconsented installation |
Go/no-go authorized by designated human approver and recorded in shared audit module.

## 12. NOC and cybersecurity
- NOC reads monitored uptime, latency, jitter, loss, modem status, router alerts, per-site throughput, Wi-Fi occupancy, power and link redundancy.
- Enforce zero-trust administration, MFA, least-privilege, VPN for management, patching, encrypted backups and role-separated client data.
- Separate cameras, critical care/industrial IoT, school users and guest Wi-Fi networks.
- No public dashboard exposes individuals' GPS/camera footage, credentials or device serials.
- Define incident severity and 24h response for critical communication sites only where funded and contracted.

## 13. Database & API additions — reuse central identity/CRM
Proposed shared entities, tenant+country scoped: service_providers, provider_offers, coverage_requests, network_sites, network_assets, site_links, subscribers, plans, invoices (REUSE), approvals (REUSE), regulatory_cases, rfq_requests, operational_metrics, maintenance_tickets, incidents, audit_events (REUSE).
Do not duplicate customers, organizations, permissions, billing, CRM, audit or auth. Credentials stay in server secrets vault, never GitHub.

Proposed Next.js route hierarchy:
- /telecom/satellite (overview, **planned** status)
- /telecom/satellite/providers (RFQ comparison)
- /telecom/satellite/sites (proposed pilots)
- /telecom/satellite/regulatory (evidence checklist)
- /telecom/satellite/budget (capex/opex assumptions)
- /telecom/satellite/operations (NOC design)
No claim of live network, external API connections or paid customers.

## 14. Work program and dependency order
**Phase 0 (discovery):** audit existing 35+ archived telecom files; provider/license research, site owner authorization, connectivity demand surveys, GIS scoping.
**Phase 1 (legal + RFQ):** INDOTEL and CONATEL preconsultation, market sounding; obtain written provider quotes and eligibility.
**Phase 2 (engineering):** topographic/RF/power survey, detailed bill of materials, safety and cybersecurity, total cost estimates.
**Phase 3 (pilot A):** approval → procurement → professional installation → commissioning → 30-day measurements; documented costs.
**Phase 4 (pilot B):** analogous with Haiti-specific licensing, local safety and offline-first support.
**Phase 5 (replication):** regional hubs based on demonstrated SLA, community demand, funded operations and legal grants.
**Phase 6 (scale):** commercial multi-provider terms, redundancy and expansion only after audited economics.

## 15. Program ownership / decisions
- Technical lead: site and design acceptance, commissioning tests and maintenance
- Legal/regulatory lead: CONATEL/INDOTEL and resale authorization
- Procurement lead: RFQ comparison and conflict-of-interest controls
- Finance lead: cost/risk model and funding sustainability
- Security/Privacy lead: PII, cameras, school/health system security
- Program director: human GO/NO-GO; no disbursement or external commitment without approval

## 16. KPI and pilot acceptance worksheet
Site ID; GPS coordinates (internal only); country; regulatory reference; host approval; provider/contract; authorized redistribution yes/no; CAPEX actual; monthly OPEX actual; design subscribers; tested users; peak/median throughput; p50/p95 RTT; p95 packet loss; available power autonomy; link uptime; incident MTTR; complaints; satisfaction; school/offline content usage; revenue/subsidy collected. Record baseline plus 30-day observations; exact threshold depends on service class and contract.

## 17. Source status
Verified regulatory/background sources dated by their webpages:
- https://conatel.gouv.ht/node/119 (licensing categories)
- https://conatel.gouv.ht/node/513 (homologation vs operating right)
- https://www.gob.do/servicios/inscripcion-en-registro-especial (INDOTEL register)
- https://www.eutelsat.com/es/servicios-satelitales/enterprise (enterprise/community offering)
Provider/territorial availability, regulatory rules and prices must be reconfirmed before any purchase.
**No quotes requested, messages sent, licenses obtained or installations made in this plan.**
