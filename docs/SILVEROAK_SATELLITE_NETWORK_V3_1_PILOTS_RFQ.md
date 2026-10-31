# SILVEROAK GLOBAL SATELLITE NETWORK — Haiti & Dominican Republic V3.1
Status: **CONCEPT + PROCUREMENT AND PILOT PLAN — not deployed**.
Parent: MASTER DEVLOPMAN > TELECOM_WIFI > Global Satellite Network.
Date: 2026-10-21. This supplements existing Wi-Fi and telecom artifacts; no second platform.
No carrier partnership, wholesale terms, regulatory authorization, bandwidth, quotes, pilot deployment, funding or licenses have been verified for Silveroak.

## 1. Phased MVP
- P0 — Reconcile existing Wi-Fi V1–V11 packages, Hispaniola Connect regulatory plan, satellite-connect archives, equipment manifests, and related master 26-program entries.
- P1 — Market and regulator preconsultations in each country, supplier RFIs/RFQs, backhaul architecture and security/privacy review.
- P2 — One permitted demonstrator near San Pedro de Macorís, Dominican Republic, first as private single-premises LAN if appropriate, subject to regulatory and supplier terms; test against actual connectivity and power.
- P3 — Jacmel / Morne-à-Brûlé demonstrator separately, subject to Haiti-specific feasibility, permits, partner access and security.
- P4 — Expand only after measured unit economics, licensed redistribution and reliable technical operations. Regional/national network is a separate feasibility gate.

## 2. Commercial operator comparison (RFI targets, NOT partners)
| Provider | Likely fit | Key diligence |
|---|---|---|
| Starlink | LEO last-mile for remote pilots | Authorized plan/resale model; commercial coverage, country license, limits and permission for each use |
| Eutelsat / OneWeb | Enterprise and community broadband | Country coverage, authorized local distributors, terminal/B2B model, pricing and CIR |
| SES O3b mPOWER | Higher-capacity aggregation hubs | Site footprint, terminal power/cost, SLA, minimum committed capacity |
| Viasat | Enterprise, backup, rural networks | Country footprint, bandwidth cap/FUP, equipment and commercial distribution rights |
| Hughes / EchoStar | Rural enterprise/community | Service partners, equipment, country licensing and latency |
| Amazon Leo | Future competitive option | Country availability, commercial maturity, regulated service and partner terms |

Evaluate providers independently; "six candidates" does not imply subscriptions or deals. Residential subscriptions are not a substitute for licensed redistribution. Revisit terms by country and tariff.

## 3. Formal RFQ questions — send to each commercial sales team
1. Do you directly supply or have **authorized** resellers for Haiti and Dominican Republic? Provide legal entity and regulator references.
2. Is **community Wi-Fi redistribution, captive-portal hotspot operation, or third-party resale** explicitly allowed? Under which contracts?
3. Provide current downlink/uplink, CIR vs burst, latency ranges, contention ratios, fair-use/throttling, max customer count and expected peak throughput.
4. Quote equipment purchase/lease, terminal and mounting, installation, commissioning, freight, duties, tax and local technical support.
5. Quote recurring service by capacity and package with clear billing currency, minimum terms, cancellation charges, trial/testing terms.
6. Specify uptime SLA, maintenance windows, fault response, spare parts, field repair, redundancy and failover pricing.
7. Explain CGNAT, public IP, IPv6, BGP/private interconnect/VPN options, API/network telemetry and allowed router integration.
8. Provide environmental/weather constraints, regulatory terminal certification, allowed power systems and installation standards.
9. Supply privacy, data location and security requirements plus support escalation channels.
10. Confirm whether education/health/community subsidized programs or multi-site tiers are eligible and any usage restrictions.
11. Quote one-site pilot first, then 3-, 10- and 100-site scale **without requiring Silveroak to commit to scale now**.
12. Specify whether quotations are firm, validity date, procurement lead time, and required proof of business standing.

## 4. Two-site pilot scope
### A. Dominican Republic — San Pedro de Macorís / Los Llanos region
- Confirm access to a secure roof/site, power budget, visibility and telecom legality.
- Local switch, Wi-Fi AP, gateway/firewall, surge protection, grounding, ventilated lockable enclosure, monitored UPS; add solar only after load and wind assessment.
- Private/local services: offline educational library, LAN messaging, on-site telemetry. Internet distribution beyond contract scope prohibited.
- Test 5/20/40 users according to actual hardware and bandwidth, hours of use, latency, packet loss, throughput at peak and uptime.
### B. Haiti — Jacmel / Morne-à-Brûlé
- Separate coverage check, site survey, safety and travel evaluation, local partner and relevant approvals.
- Use modular solar + battery with professional electrical design; offline-first education and community communications.
- Do **not** activate a public paid network until regulation and service contract permit it.

## 5. Preliminary equipment BOM per permitted site
| Category | Specification to quote | Qty concept |
|---|---|---:|
| Backhaul terminal | Approved country-specific enterprise/eligible plan | 1 |
| Firewall/gateway | VLAN, VPN, traffic shaping, signed updates, logs | 1 |
| Managed PoE switch | Sized to AP count and power draw | 1 |
| Outdoor AP(s) | Rated for heat, humidity and wind; site survey | 1–3 |
| UPS/surge/ground | Professional sizing; earth and lightning risk reviewed | 1 set |
| Enclosure/cabling | Weather-protected, labeled, tested | 1 set |
| Monitoring | Local NMS, alerts, backup configurations | 1 |
| Optional backup | Second licensed connection with automatic failover | site dependent |

Avoid buying terminals or installing towers before provider/regulatory preapproval. Radiation, lightning, tower construction and electrical connections require qualified professionals.

## 6. Illustrative budget (NOT operator quotes)
Pilot 1: USD 2k–5k; 3 pilots: USD 6k–20k; 10 sites: USD 25k–100k; regional: USD 100k–500k+.
**Exclude** unquoted regulatory, solar, real estate, safety, customs, recurring connectivity, insurance, salaries and support from these estimates; affordability cannot be determined from them.

## 7. Compliance and security approval gates
- Haiti: obtain written guidance from CONATEL on commercial ISP/resale, satellite terminal homologation, radio/wireless and any local permits.
- Dominican Republic: request written INDOTEL classification and required registration/concession/license for resale, satellite bearer and related services.
- Verify every provider's redistribution/resale rights and whether local approvals cover **Silveroak's** activities.
- Collect only minimum personal data with notice and retention; protect subscribers, Wi-Fi access, video camera and billing data.
- Guest/client/industrial equipment VLAN isolation; per-site credentials; MFA for admin; encryption and patch policy; outage escalation.
- Human approvals required for contracts, advertising, billing, subscriber exports, deployment and network changes.

## 8. Performance acceptance test
- Written permissions and signed contract appropriate for exact pilot use.
- Site-specific link budget and RF survey.
- 7–14 days network measurements including heavy rain and peak demand; repeat for availability.
- Internet, LAN and fallback clearly distinguished; offline library works without upstream.
- Measured cost per active household/user and support burden, not assumption.
- Signed no-go/go checklist with approval and rollback instructions.

## 9. Integration with MASTER DEVLOPMAN
Reuse existing core: organizations, access controls, projects, human approvals, asset register, telemetry, service tickets, RevenueOS.
Planned objects: satellite_providers, provider_offers, coverage_sites, site_assets, site_circuits, monitoring_samples, outage_events, compliance_evidence, approvals and subscriber contracts.
Connect read-only site KPIs into existing Master Control Center; do not claim dashboards are live until implemented.
Document source references and re-use existing Telecom/Wi-Fi and satellite files without overwriting them.

## 10. Public sources accessed during preparation
- Starlink authorized reseller FAQ: https://starlink.com/ht/support/article/9b7746f8-e2ee-0fd4-7ffb-3bbe0ab35cbc
- Starlink resale terms (contract and plan-specific): https://starlink.com/legal/documents/DOC-1540-49184-72
- Eutelsat community Wi-Fi: https://www.eutelsat.com/satellite-services/enterprise/community-wifi
- CONATEL Starlink note on homologation vs operating license: https://conatel.gouv.ht/node/513
- INDOTEL special registration listing: https://www.gob.do/servicios/inscripcion-en-registro-especial

**Operational truth:** This is a design and procurement document, not an installed network, current supplier quote, licensed ISP, or authorization to resell.
