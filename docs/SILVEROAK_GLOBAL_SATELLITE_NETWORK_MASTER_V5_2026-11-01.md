# SILVEROAK GLOBAL SATELLITE NETWORK — MASTER DEVLOPMAN V5
**Date:** 2026-11-01  
**Parent:** MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK  
**Status:** PLANNING / RFI / REGULATORY REVIEW — NOT DEPLOYED

## 1. Executive objective
Develop a phased, lawful, resilient satellite-backed connectivity platform serving Haiti and the Dominican Republic. Satellite is a backhaul option; local access requires site-specific terminals, routers, Wi-Fi access points, fiber or point-to-point wireless links, power, installation, capacity engineering, monitoring and support. A satellite footprint is not automatic household Wi-Fi coverage.

## 2. Single-system rule
All work remains inside MASTER_DEVLOPMAN. Reuse shared authentication/RBAC, organizations/tenancy, audit logs, approvals, document vault, CRM, RevenueOS, monitoring and backup. Do not create a second billing, customer, identity, AI-orchestration or project-management platform. Canonical module path:
`MASTER_DEVLOPMAN → TELECOM_WIFI → GLOBAL_SATELLITE_NETWORK`.

Existing GitHub technical documents to reuse (do not duplicate):
- `docs/SILVEROAK_SATELLITE_OPERATOR_RFP_V3.md`
- `docs/SILVEROAK_SATELLITE_TWO_PILOTS_V3.md`
- `docs/SILVEROAK_SATELLITE_REGULATORY_AND_MASTER_INTEGRATION_V3.md`

## 3. Provider shortlist — candidates, not selected partners
| Candidate | Orbit / role to evaluate | Required verification |
|---|---|---|
| Starlink / SpaceX | LEO; potential first pilot or backup | Country orderability, Priority plan, explicit community hotspot/resale rights, regulatory approvals, service terms |
| Eutelsat OneWeb | LEO enterprise backhaul | Local authorized partner, capacity and service availability, managed/community Wi-Fi terms |
| SES O3b mPOWER | MEO high-capacity enterprise backhaul | Gateway/terminal design, committed capacity, local partner, quote and SLA |
| Viasat | GEO enterprise/remote connectivity | Country service availability, capacity/latency, managed distribution terms |
| Hughes / EchoStar | Satellite managed connectivity | Contracting entity, wholesale offer, reseller rights, country approvals |
| Amazon Leo | Future LEO candidate | Commercial availability and authorized local service channel must be confirmed; do not assume current availability |

Do not rank or select a provider until written comparable quotes, legal permission, technical survey and 36-month total cost are available. Avoid purchasing six separate subscriptions. Evaluate one primary provider plus an independent backup only where justified.

## 4. Important contract rule
The current Starlink terms found during this review prohibit resale of standalone, integrated or value-added service unless Starlink authorizes it. The terms describe a limited community Wi-Fi/hotspot exception for Priority plans, subject to the agreement and its limitations. Obtain written confirmation that the specific plan, country and proposed network topology are permitted; a residential plan is not assumed to authorize resale.

## 5. Proposed pilot locations
### DR-001 — San Pedro de Macorís / Los Llanos, Dominican Republic
Purpose: controlled demonstration of a satellite or terrestrial business backhaul, managed Wi-Fi, network segmentation, power resilience, monitoring and offline local services. First conduct a site survey and confirm exact service orderability privately with provider. No public hotspot or resale before INDOTEL guidance and provider permission.

### HT-001 — Jacmel / Morne-à-Brûlé, Haiti
Purpose: controlled demonstration of rural connectivity, offline education, solar-backed power, agriculture/community services and local network. Separate site access, safety, local partner, CONATEL requirements and funding review are mandatory before equipment purchase or installation.

These are proposed locations only. No site is commissioned or confirmed as secured.

## 6. Network architecture
`Satellite / Fiber / Licensed Terrestrial Backhaul → Country Hub → Regional Hub → Community Node → Wi-Fi / Fiber / Point-to-Point Wireless → Homes, Schools, Clinics, Farms and Businesses`.

Each hub requires independent link and capacity design. One terminal cannot be presumed to cover two countries or distant towns. Wi-Fi coverage is local and depends on access-point placement, terrain, line of sight, interference, power and user density. Mesh links are not unlimited range.

Design separate management, customer, guest, camera/IoT and business VLANs; use firewall policies, WPA3 where supported, client isolation, secure administration, VPN where appropriate, logging with privacy controls, rate limits/QoS and monitored firmware updates. Use qualified installers for masts, grounding, lightning protection, rooftop work and electrical systems.

## 7. Service tiers
1. **Silveroak Free Local Network:** offline library, local learning content, local messaging and LAN services. Internet is not implied. Respect broadcast/content rights for FTA reception.
2. **Silveroak Community Internet:** sponsored or subsidized access only under a provider contract and local regulatory permission that expressly allows the proposed sharing model.
3. **Silveroak Business Network:** contracted enterprise connectivity, priority/support and private network services. No SLA claims until contracted and measured.

## 8. Regulatory workstream
### Haiti — CONATEL
CONATEL's published licensing material distinguishes concessions for public telecommunications networks/services (including ISP and commercial community relay services) from authorizations for independent private/shared networks and other listed categories. It also requests technical and administrative project details, including equipment, locations, frequencies and international access. Obtain a written classification from CONATEL for the exact pilot design before operating a public service. Equipment homologation is not equivalent to a service/network operating licence.

### Dominican Republic — INDOTEL
The Dominican Government's official service portal describes a concession for public telecommunications services, including Internet access. A separate special-registration route and spectrum authorizations may apply to other cases. Request written classification from INDOTEL for a private LAN demonstration versus public/community access or resale, and verify whether the entity needs a concession, special registration, spectrum permission, equipment homologation or other approvals.

Do not treat a foreign satellite subscription or terminal purchase as permission to operate a public ISP, community network or resale service.

## 9. Mandatory written RFI / RFQ questions
1. What legal entity contracts and who is the authorized local distributor/installer in each country?
2. Is service orderable at the proposed site? What exact coordinates/coverage checks are required?
3. Does the proposed plan expressly permit private multi-user access, sponsored community Wi-Fi, public hotspot and/or paid resale? List restrictions in writing.
4. What permits, licences, spectrum approvals and terminal homologation apply, and who is responsible?
5. What are terminal purchase/lease, accessories, installation, shipping, customs, taxes and lead times?
6. Quote 50/100/250 Mbps options, upload, CIR/MIR, data caps, contention and overage charges.
7. Provide latency, packet loss, uptime SLA, maintenance windows, support hours and restoration targets.
8. Explain weather performance, gateway diversity, backup/failover and outage procedures.
9. State IPv4/CGNAT/public IP, IPv6, VPN, static IP and security options.
10. State contract duration, minimum commitment, cancellation, price changes, warranty and equipment ownership.
11. Provide 36-month total cost for one pilot and indicative 10-site expansion, with all assumptions.
12. Describe monitoring APIs, privacy/data processing, incident notification and support escalation.
13. Provide reference deployments for comparable community/enterprise networks in the Caribbean, if available.

## 10. Pilot procurement gates
- **P0 — $0 commitment:** provider RFIs, regulator pre-consultations, site host consent and desk research.
- **P1 — feasibility:** site survey, link budget, demand/capacity model, power assessment, BOM and installation quote.
- **P2 — approval:** legal opinion/regulator response, explicit provider rights, funded 36-month TCO, privacy/security plan and human procurement approval.
- **P3 — one-site pilot:** staged purchase and installation by qualified parties; acceptance testing and documented configuration/rollback.
- **P4 — 30-day measured pilot:** record throughput, latency, packet loss, uptime, outages, power autonomy, incidents, user satisfaction and actual cost.
- **P5 — Go/No-Go:** independent review; only then decide whether to add the second country or additional sites.

The 90-day schedule is a planning target, not a promise from vendors or regulators.

## 11. Budget and financial model
Earlier USD 2,000–5,000 first-site estimates are preliminary placeholders, not supplier quotations. Prepare a site-specific 36-month total-cost model including terminal(s), routers/APs, switches, cabling, poles/masts, installation, electrical/solar/UPS, grounding/lightning, shipping, customs, taxes, permits, monthly backhaul, staff, maintenance, insurance, security, monitoring and replacement reserve. Model low/base/high traffic and revenue/subsidy cases. Do not commit funds without signed quote, funding source and approval.

## 12. Shared Master Devlopman modules
Reuse central services and add only telecom-specific records as needed:
- providers and provider_offers
- regulatory_cases and permits
- regions and sites
- equipment_inventory and site_assets
- upstream_contracts and service_levels
- network_links and capacity_plans
- service_profiles and network_incidents
- performance_measurements
- customer_subscriptions (reuse shared customers/subscriptions if already present)
- billing_reference (reuse RevenueOS invoices/payments)
- approval_requests and audit_events (reuse shared approvals/audit)

Every tenant-owned record must be scoped by organization. Exact site coordinates, camera locations, credentials and network diagrams are restricted data; do not expose them in public dashboards. Never store provider passwords or OAuth secrets in source code.

## 13. AI network management
AI agents may summarize telemetry, flag outages, forecast capacity, recommend channel/QoS changes and draft work orders. Human approval is required before firewall/routing changes, radio configuration, customer billing, public communication, procurement or service suspension. Include rollback, change logs and least privilege.

## 14. Risk register
- Unlicensed public service/resale — critical; written regulator guidance and provider rights before activation.
- Congestion/poor service — high; capacity model, load tests, QoS and transparent performance reporting.
- Storm/lightning/electrical damage — high; qualified design, grounding, surge protection and insurance.
- Theft/vandalism/site safety — high; secure host agreement, physical protection and emergency plan.
- Power outage — high; measured load and autonomy, UPS/solar sizing by qualified installer.
- Privacy/security breach — critical; network isolation, encryption, least privilege, retention limits and incident response.
- Vendor lock-in — medium; portability, contract exit clauses and independent backup where viable.
- Budget overrun — high; staged procurement, contingency and human approval.

## 15. 90-day work plan
- Days 1–15: reconcile existing TELECOM_WIFI library and GitHub documents; confirm site hosts; issue RFIs; submit regulator questions.
- Days 16–30: collect written answers and quotes; perform site/power/coverage surveys; draft HLD/LLD and BOM.
- Days 31–45: compare providers, legal path and 36-month TCO; choose only a legally viable pilot design.
- Days 46–60: approve funding, contract, privacy/security and procurement; lab-test equipment.
- Days 61–75: install only if permits, contracts and site approvals are complete.
- Days 76–90: run measured pilot and issue transparent Go/No-Go report.

## 16. Official reference links reviewed 2026-11-01
- Starlink Terms of Service: https://www.starlink.com/legal/documents/DOC-1044-74508-69
- Eutelsat Enterprise connectivity and Community WiFi: https://www.eutelsat.com/satellite-services/enterprise
- CONATEL licence regimes and procedures: https://www.conatel.gouv.ht/node/115
- CONATEL regimes: https://conatel.gouv.ht/node/119
- CONATEL satellite Internet licensing circular: https://conatel.gouv.ht/sites/default/files/CIRCULAIRE%20STARLINK%20CAHIER%20DES%20CHARGES%20circulaire%20%2020220011%20acces%20a%20internet%20par%20satellite.pdf
- Dominican Government / INDOTEL public telecom concession: https://www.gob.do/servicios/concesion-para-prestar-servicios-publicos-de-telecomunicaciones
- Dominican Government / INDOTEL spectrum licence: https://www.gob.do/servicios/licencia-para-usar-frecuencias-del-espectro-radioelectrico-que-se-encuentra-vinculada-a-una-autorizacion

## 17. Final status declaration
This is a consolidated planning and procurement framework. No operator partnership, wholesale quote, regulatory approval, signed contract, installed pilot, national coverage or live customer service is claimed. The next real-world action is written RFI and regulator pre-consultation, followed by site survey and a documented Go/No-Go decision.

**Principle:** SEARCH → CLASSIFY → REUSE → MERGE → LINK → CREATE.  
**One MASTER DEVLOPMAN. One shared architecture. No unnecessary duplicate systems.**