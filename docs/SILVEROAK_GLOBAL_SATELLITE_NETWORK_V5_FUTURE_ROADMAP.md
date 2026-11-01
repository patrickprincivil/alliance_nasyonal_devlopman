# SILVEROAK GLOBAL SATELLITE NETWORK — FUTURE EXPANSION V5.0
**Parent:** MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK
**Status:** Planned future-capabilities addendum, not an installed or licensed network.
**Reuses:** SILVEROAK_SATELLITE_NETWORK_V4_COMPLETE.md and V3.1/V3.2 pilot materials in Library. Do not create second network/control stack.

## Purpose
Build lawful, resilient hybrid satellite/fiber/fixed-wireless infrastructure across Haiti and Dominican Republic, starting with separately authorized, surveyed pilots. A satellite coverage beam does not deliver Wi-Fi to all users.

## Capability roadmap (all conditional and not yet implemented)
1. **Multi-provider:** LEO/MEO/GEO procurement and diversity, verified wholesale/resale rights.
2. **Backhaul:** per-site terminal, licensed fiber, fixed-wireless or mobile uplink; independent local links.
3. **Edge networking:** failover WAN, encrypted VPN, QoS, VLAN separation, IPv6 and secure management.
4. **Access:** surveyed indoor/outdoor Wi-Fi, point-to-point radio, community hotspots and accessibility.
5. **Offline-first:** local educational library/cache, lawful FTA broadcasting, local communications, local-first apps.
6. **Critical sites:** school, clinic, disaster center service profiles with safety and continuity planning.
7. **Smart agriculture:** sensors, pump telemetry and secure field gateways; manual emergency operation.
8. **Industrial IoT:** segmented authorized sensors, maintenance alerts and controlled machine interfaces.
9. **Mobility:** bus/depot connectivity, GPS telemetry and fleet tools subject to carrier and road safety rules.
10. **Telehealth support:** connectivity only, not autonomous medical decisions or unsupported clinical promises.
11. **Power:** solar + storage engineering, monitored UPS, fire protection and compliant lightning grounding.
12. **Content:** rights-cleared courses, digital library, accessibility and multilingual interfaces.
13. **Monitoring:** uptime, traffic, packet loss, latency, congestion, power, security and support tickets.
14. **AI operations:** read-only anomaly detection and draft recommendations; approval for configuration changes.
15. **Cybersecurity:** zero trust, MFA, least privilege, encryption, patching, incident response and backup drills.
16. **Privacy:** regional data policies, camera consent, child data controls, retention and cross-border safeguards.
17. **Commerce:** CRM, customer helpdesk, quotes, invoices, subscription reconciliation and permitted tariffs via shared RevenueOS.
18. **Regulatory:** separate CONATEL/INDOTEL case files, equipment homologation, spectrum, wholesale and consumer compliance.
19. **Emergency resilience:** alert messages only with authorized sources, communications continuity and tested incident plans.
20. **Expansion:** repeatable site kit and training, independent financial gates and regional rollout.

## Pilot A / Dominican Republic
Target: San Pedro de Macorís / Los Llanos, site selected only with host consent and site survey. Initial: single authorized backhaul, router/firewall, 1–3 access points as surveyed, local cache, power backup, restricted telemetry. No unauthorized public resale.

## Pilot B / Haiti
Target: Jacmel / Morne-à-Brûlé after separate regulatory approval and access/security review. Satellite or lawful alternate backhaul; solar where justified; offline learning cache; farm telemetry. No assumptions of identical capacity, approvals, providers or prices.

## Regional planning
HT candidate locations: Port-au-Prince, Cap-Haïtien, Jacmel, Les Cayes, Gonaïves, Jérémie, Hinche, Miragoâne, Fort-Liberté. DR candidates: Santo Domingo, San Pedro de Macorís, Santiago, La Romana, Punta Cana, Puerto Plata, Barahona, San Cristóbal, San Francisco de Macorís, Monte Cristi. These are **proposed demand-study areas**, not built sites.

## Provider RFQ: compare on identical basis
Seek bids from **Starlink, Eutelsat/OneWeb, SES, Viasat, Hughes/EchoStar, Amazon Leo (watch)** when their authorized local channel can confirm suitability. No claimed partnerships or pricing. Request, for each country and pilot site:
- serviceability, authorized local reseller, written hotspot/commercial redistribution rights;
- hardware, support, installation, term, quotas, congestion, upload/downlink rates, CIR/MIR and latency;
- SLA, uptime, outage credits, severe-weather degradation, failover/backup;
- all-in 36-month TCO including tax, duties, licensing, training, power, repairs and staff;
- privacy and data transfer terms, API access and lawful cancellation.
**Decision gate:** Any missing legality/required permit = NO-GO.

## Architecture and software boundaries
Existing MASTER shared services provide identity, RBAC, approvals, audit, CRM, billing, storage, incident tracking and AI orchestrator. New telecom-specific objects only: provider offers, regulator cases, sites, access nodes, topology links, equipment, uptime samples, traffic plans, permits, maintenance events and service profiles. Every record is organization scoped; exact sites and camera coordinates are restricted.

## Six execution stages
- **Stage 0 — Rights and demand:** operator RFQs, regulator questions, host agreements, community requirements, full 36-month cost and risk register.
- **Stage 1 — Engineering:** country- and site-specific coverage survey, energy audit, design, materials list, fire and lightning assessment, install quote.
- **Stage 2 — Lab:** simulate failover, VLAN isolation, patching, offline cache, system restore and abusive traffic protections.
- **Stage 3 — First pilot:** install a legally authorized site and run at least 30 days of measured operational acceptance.
- **Stage 4 — Second pilot:** separately authorize and test the other country only after lessons, budget and permissions.
- **Stage 5 — Scale:** repeat only when stable uptime, affordable TCO, trained support, legal permits and documented demand are demonstrated.

## Measured acceptance (example targets, not claims)
- Record p50/p95 latency and packet loss, daily/weekly uptime, upload/download and busy-hour usage.
- Document actual served premises and lawful hotspot radius via site survey; no national coverage claim.
- Demonstrate WAN outage behaviour, local offline service and restoration from backup.
- Validate isolation between guest, operations, school, health and CCTV networks.
- Verify usable customer support channels, escalation contacts and warranty/spares.
- Obtain human written GO/NO-GO, sign-off by network engineer and local regulatory professional before any public service.

## Phased revenue model
Sponsored educational/community LAN, permitted paid hotspot/managed network, enterprise service agreements, installation and ongoing support. Free access to the public requires a payer/sponsor for upstream, electricity, labor, equipment and replacement costs. No promised free internet via GPS or FTA receiver alone.

## Future finance and staffing
Use provider bids to derive capital expenditure, operating expenses, 36-month TCO and break-even; maintain separate country ledgers. Assign accountable owners for legal, engineering, security, procurement, community outcomes, support, finance and data protection. Do not procure or charge before approvals.

## Status truth
This file is a **future plan only**. No operator contract, public ISP license, nationwide coverage, satellite infrastructure, direct household satellite service, running AI agents or Vercel production module is represented as completed.
