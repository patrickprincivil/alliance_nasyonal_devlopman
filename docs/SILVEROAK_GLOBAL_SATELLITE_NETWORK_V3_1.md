# SILVEROAK GLOBAL SATELLITE NETWORK V3.1 — HAITI + DOMINICAN REPUBLIC
**Status:** Concept and procurement-readiness; no provider contract, regulatory license, live nationwide network, or verified market quotations. Parent: MASTER DEVLOPMAN / TELECOM_WIFI. Reuse centralized identity, procurement, finance, approvals, audit, and document registry.

## 1. Complete capability register (planned)
**Connectivity:** multi-orbit GEO/MEO/LEO supplier evaluation; two-provider failover where affordable; satellite terminals; licensed terrestrial backhaul; point-to-point microwave; fiber; community Wi-Fi; LAN; offline-first local servers; roaming/handoffs only where technically supported.
**Community service:** homes, schools, clinics, farms, small businesses, emergency shelters, transport depots, libraries, municipal facilities; free local content separate from paid global Internet.
**Devices:** phones, laptops, televisions, radio receivers/FTA dishes, cameras, environmental sensors, GPS (GPS navigation does not itself provide Internet), printers, smart keyboards, access-control devices, IoT gateways, agricultural machines, robotics and vehicle telematics.
**Operations:** provisioning, customer portal, tickets, GIS map, site survey, installation scheduling, inventory, asset lifecycle, service eligibility, prepaid/subscription billing, grants/donor subsidies, usage/fair-use, network status, incident response, maintenance, accessibility, multilingual communication (HT/FR/ES/EN).
**Technical:** VLAN/guest separation, bandwidth QoS, captive portal where lawful, monitoring/alerts, DNS/DHCP, secure router configuration, signed software updates, backup power, generator/solar/UPS, lightning/surge/earthing, physical security, optical/fiber termination, redundancy and capacity forecasting.
**Security/legal:** consent, privacy notice, encrypted secrets, RBAC, audit, minimal data, children's data protections, safety, local telecom permissions, lawful redistribution rights, radio-spectrum and equipment authorization, cross-border data protection, procurement due diligence.
**AI:** capacity forecasts, ticket triage, anomaly alerts, automated drafts, failure prediction and inventory alerts; no autonomous service suspension, financial charges, mass messaging or external changes without approved permissions and human review.

## 2. Operator comparison — verify by RFI, no assumed partnership
| Candidate | Architecture | Potential role | Questions before selection |
|---|---|---|---|
| Starlink / SpaceX | LEO | Local terminal, pilot backhaul | Authorized commercial resale/community sharing in each country? service territory, plan, support, committed capacity, equipment |
| Eutelsat OneWeb | LEO | Enterprise/community backhaul | Approved distributor and availability, SLA, terminals, minimum commitments |
| SES O3b mPOWER | MEO | High-capacity regional hub | Suitable gateway/location, SLA, availability, minimum spend, terminal footprint |
| Viasat | GEO / portfolio | Continuity and enterprise | Bandwidth/latency, capacity, coverage, SLA, regional licensing |
| Hughes / EchoStar | Satellite services | Rural/back-up pilot | Distributor, contention, equipment, data caps, terms |
| Amazon Leo | LEO | Long-term competitive option | Commercial availability by country/date, reseller access and support |
Mark all supplier status **NOT CONTACTED / UNVERIFIED** until evidence is recorded. Provider product offerings and availability can change.

## 3. Mandatory provider RFI (send separately, no claims of representation)
1. Can you supply enterprise/wholesale bandwidth for **Haiti** and **Dominican Republic**, separately?
2. Which exact services and terminals are available in each location and via which licensed entity?
3. May a licensed third-party operator distribute or resell service to multiple households, schools and businesses? Provide written contract terms.
4. What are CIR/MIR, contention ratios, traffic policies, latency, jitter and uptime SLA? Is static/public IP or CGNAT included?
5. Provide itemized USD pricing: setup, terminals, monthly recurring, bandwidth, overages, support, taxes, customs and minimum order.
6. Equipment power draw, environmental rating, mounting requirements, spares and replacements?
7. Where does traffic egress? What privacy, data residency, security and lawful-intercept obligations apply?
8. Redundancy options and fault restoration procedures?
9. Support language, availability, installation certification and partner program?
10. Required filings with **CONATEL (Haiti)** and **INDOTEL (Dominican Republic)**? Supplier's answer is not a substitute for regulator confirmation.
11. Project milestones and quote validity?
12. Terms for disaster relief service and nonprofit subsidies?

## 4. Regulatory approval checklist (country-specific)
**Haiti — CONATEL:** classify resale/network operation, radio frequencies, ground equipment, import/homologation, rights-of-way, public service obligations and local entity licensing. Obtain written advice.
**Dominican Republic — INDOTEL:** confirm service classification, concession/registration, resale, radio spectrum, terminal homologation, tax and consumer rights obligations. Obtain written advice.
**Never** equate consumer equipment approval, GPS signal reception or residential connectivity subscription with blanket right to operate a national ISP. Cross-border links may require separate permission in both countries.

## 5. Pilots: independent, repeatable sites
### Dominican pilot — San Pedro de Macorís / Los Llanos candidate
- Local inspection: exact GPS coordinates **only after permission**, line-of-sight, congestion, power quality, mounting rights, site security, density and backhaul options.
- Layout: licensed uplink → secure edge router → managed PoE switch → access points with separated guest, ops and camera networks → local content cache/offline service.
- Acceptance: ≥7 days of telemetry, throughput during peak and off-peak, outage recovery, safe electrical installation, client feedback and documented bill of materials.

### Haiti pilot — Jacmel / Morne-à-Brûlé candidate
- Repeat same design with solar/UPS/generator sizing based on measured watt-hours and storage runtime.
- Offline school content, clinic/charity administrative tools, local messaging and camera network (with privacy rules); satellite Internet as optional approved uplink.
- Assess transport, installation logistics, climate/weather, customs, security and local staffing before procurement.

**Pilot stage gate:** site rights, written regulatory position, provider quote, signed redistribution authority (if needed), safety/electrical design, backup/maintenance, funding and independent technical review BEFORE any public service launch.

## 6. Budget framework (not quotations)
Planning placeholders: one pilot USD 2,000–5,000; three USD 6,000–20,000; ten USD 25,000–100,000; expanded regional USD 100,000–500,000+; national scale may require millions. **Exclude** recurring bandwidth, licenses, labor, taxes, customs, civil works, power/backup, security, towers, support and contingency until scoped. Do not present as vendor pricing.
Track CAPEX, OPEX, data demand, active users, average bandwidth, backhaul utilization, availability, cost per connected user, subsidy per household, collections and churn.

## 7. Delivery workstreams / state
- Provider outreach: template ready; no message sent.
- Regulatory dossier: checklist ready; no permit obtained.
- Pilot site surveys: proposed, not performed.
- Equipment BOM & CAD drawings: require field survey first.
- Local network prototype: planned.
- Network operations / subscriber billing / AI features: planned.
- National rollout: **future only**, dependent on funded successful pilot and licences.

## 8. Anti-duplication and privacy safeguards
Existing Silveroak Wi-Fi starter ZIPs, Haiti Satellite Connect, Hispaniola regulatory master, and network Jira/schema files in Library **must be audited before reuse**. Keep their source versions intact. Do not auto-extract/run code or publish proprietary/customer/child data. Reuse single CRM, authentication, ledger and audit services rather than creating separate databases.

**Decision path:** RFI → regulator advice → survey → architecture/BOM → financial approval → pilot → independent tests → phased expansion.
