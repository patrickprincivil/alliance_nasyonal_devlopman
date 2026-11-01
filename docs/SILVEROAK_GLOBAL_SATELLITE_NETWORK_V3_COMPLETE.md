# SILVEROAK GLOBAL SATELLITE NETWORK — HAITI + DOMINICAN REPUBLIC V3.1
Date: 18 October 2026. Status: **planning/engineering specification**, no connectivity resale approval, negotiated provider agreement, spectrum authority, deployed pilot, signed customer, or active national coverage is claimed.

Parent: MASTER DEVLOPMAN → TELECOM_WIFI → GLOBAL SATELLITE NETWORK. Reuse existing 35 classified Telecom/Wi-Fi artifacts, shared core Identity, Audit, Human Approval, RevenueOS, Document Vault, and AI Ops; do not create duplicate billing/CRM/authorization.

## 1. Goals and service tiers
- Tier L **local/offline**: intranet portal with lawful cached educational materials, downloadable learning content, local files, cameras operated with consent, LAN-only messages, local DNS; satellite access not needed for these LAN features. GPS positioning is receive-only and does not itself provide Internet.
- Tier C **community**: lawful redistribution via contracted wholesale/authorized hotspot services; sponsor-funded access may be zero-cost to eligible end users, but operating costs remain.
- Tier B **business**: dedicated or prioritized connectivity, private networks, failover and measured SLAs. Do not promise bandwidth/latency not contracted and tested.
- Privacy, accessibility, affordability and resilient power are universal requirements.

## 2. Provider diligence (request evidence for BOTH countries separately)
| Potential provider | Typical orbit | First-fit use | Mandatory confirmation |
|---|---|---|---|
| Starlink / SpaceX | LEO | Pilot site, SME, regional | Official enterprise or authorized reseller pathway, permitted Wi-Fi redistribution by plan, country coverage, committed capacity, support, prices |
| Eutelsat OneWeb | LEO | Community and enterprise | Country service rights, partner distributor, wholesale price, terminal type |
| SES O3b mPOWER | MEO | Aggregation/high-capacity hubs | Installation feasibility, minimum bandwidth/contract, redundancy, pricing |
| Viasat | GEO and other portfolio | Resilient and rural links | Regional distributor, contention, capacity, support |
| Hughes / EchoStar | Various satcom | Rural and enterprise | Coverage, reseller rules, terminal availability, tariffs |
| Amazon Leo | LEO | Future procurement watch | Commercial availability and authorization in each country, eligibility, pricing |

No presumed partnership or guaranteed coverage. Ask all suppliers for written quotes including USD/local-currency costs, tax, lead time, bandwidth, FUP/data caps, CIR/MIR, latency, packet loss, availability, lawful resale terms, support, SLAs, public IP/CGNAT, static route/IPv6, installation, customs, early termination and insurance.

## 3. Regulatory gates (must be cleared *before* a paid redistribution pilot)
- **Haiti / CONATEL**: establish whether an ISP concession, satellite high-speed license, spectrum permissions, equipment homologation and other permissions are applicable; submit technical description of service, sites, radio technology and upstream links. An equipment approval is not a business license.
- **Dominican Republic / INDOTEL**: assess concession/inscripción en Registro Especial for reventa and portador satelital, station/spectrum and equipment homologation requirements. Obtain formal classification/authorization in writing.
- International and local trade, tax, public-land/building permissions, privacy, cybersecurity, lawful installation and labor requirements vary by location; engage licensed advisers.
- Public source starting points (verify current forms/fees before filing): https://www.conatel.gouv.ht/node/115 ; https://www.gob.do/servicios/inscripcion-en-registro-especial ; https://www.starlink.com/legal/documents/DOC-1354-58366-77 .
- Provider contract permissions and national telecommunications licensing are **two different checks**.

## 4. Regional coverage architecture
National and regional hub locations are only candidates; build where demand, power, permission, geography and backhaul economics are demonstrably viable.
Haiti candidates: Port-au-Prince, Cap-Haïtien, Les Cayes, Gonaïves, Jacmel, Jérémie, Hinche, Miragoâne, Fort-Liberté.
Dominican candidates: Santo Domingo, San Pedro de Macorís, Santiago, Punta Cana, La Romana, Puerto Plata, Barahona, San Cristóbal, San Francisco de Macorís, Monte Cristi.
Per hub: licensed satellite/fiber backhaul → firewall/router/QoS → managed switches → lawful Wi-Fi/fiber/microwave distribution → access points/CPE → customer devices. Each physically separated region requires adequate local backhaul. Avoid assuming a single terminal can serve both countries.

## 5. Pilots
A. **San Pedro de Macorís, DR**: evaluate one legally permitted demonstration hub, 10–30 consenting test devices, 3 device categories (phone/laptop, IP camera, smart/IoT), local content server, UPS, monitoring, weatherproof installation and optional second backhaul. Exact site and customer enrollment pending.
B. **Jacmel / Morne-à-Brûlé, Haiti**: separate site approval and safety assessment; focus on offline school content, rural resilience, renewable power, throughput and locally managed services. No field work until site safety/legal feasibility is reviewed.
Acceptance gates: licensed/authorized operation as required; written operator resale permission if applicable; electrical/fire/grounding signoff; no exposed camera feeds; measurements for speed/latency/loss/availability; documented opt-in; support runbook; rollback and restore tests.

## 6. Pilot bill of materials (illustrative, not a procurement order)
- 1 approved carrier terminal + mounting and weatherproof grounding kits.
- 1 business router/firewall with QoS, VLAN, monitoring and automatic failover capability.
- 1 managed PoE switch and 2–4 outdoor/indoor access points selected after radio survey.
- 1 local content node with encrypted storage and offline educational catalog.
- 1 UPS + surge protection, grounding/lightning design; optional solar/battery only after licensed electrical sizing.
- Network cabinet, CAT6/fiber, conduit, brackets, weatherproof enclosures, PPE, commissioning meters, secure backup.
- Optional consented IP cameras, IoT test devices, accessibility signage and localized support materials.
- **Price and feasibility must be established using supplier quotes, local customs, taxes, engineering and real demand.**

## 7. Engineering and monitoring
Inventory sites, links, devices and subscriber classes; survey RF, line-of-sight, interference, power and local fiber alternatives.
Traffic engineering: active users × busy-hour average Mbps × concurrency factor + headroom; model uplink and downlink separately. For example, 25 users × 2 Mbps busy-hour × 0.4 = 20 Mbps demand before 30% headroom ≈ 26 Mbps planned downstream; this is an **illustration**, not a speed guarantee.
Observe utilization, jitter, outage duration, SNR/RSSI where applicable, latency, packet loss, energy state, cost per GB and support incidents. Preserve minimal diagnostic data; protect user identity; disclose retention and access control. Never use public dashboards for camera or subscriber data.
Segregate management, subscriber, IoT/camera and guest VLANs. Passwordless provider dashboards are prohibited. Use MFA, backups, patching and approved vulnerability testing. Avoid intercepting users' content.

## 8. Shared data model (design; do not duplicate existing core)
- network_providers (contract reference, country authorizations, service features)
- network_sites (country, coordinates by permission, site class, owner, status)
- network_links (provider, site, technology, capacity, monthly cost, measured SLA)
- network_devices (site, model, serial secured, IP inventory, firmware, state)
- network_subscribers (references to existing CRM contact IDs; consent; tariff)
- network_incidents (severity, opened/closed, resolution)
- network_metrics_hourly (site/link aggregates; no private content)
- network_contracts (provider terms, reseller permissions, approval, renewal)
- regulatory_evidence (jurisdiction, permit type, signed doc reference, expiry)
- network_change_approvals (reuse generic Human Approval and audit logs)
All customer records need server-derived organization scope, least privilege and retention. No passwords/tokens in GitHub.

## 9. Shared Master integrations
Master Control Center: milestones, contract/procurement approvals, finances, site status.
AI Operations: read-only analysis, outage triage suggestions, capacity forecasts; no unattended changes to live network, ad spend, payments, or customer messages.
RevenueOS: quote, approved contract, invoicing, subscription, taxes and reconciliation; avoid double-charging.
Education Library: licensed/offline catalog and delivery controls.
Health/Agri/Transport: opt-in segregated IoT services; high reliability cannot be inferred merely from connectivity.

## 10. Illustrative financing and phased roadmap
Phase 0 (0–30 days): existing-file audit, independent regulatory written determination, supplier RFQs, pilot specification and risk register. No public resale.
Phase 1 (30–90 days): one authorized lab/demonstration site, offline portal, secure Wi-Fi/LAN, metrics and commissioning record.
Phase 2 (3–6 months): add second site only after legal, budget, support and safety readiness.
Phase 3 (6–18 months): 3–10 authorized community hubs, cost/quality reports, independently assessed service economics.
Phase 4 (18+ months): multi-region scale only based on paid demand, regulatory approval and financial sustainability.
Historical budget bands ($2k–$5k first pilot; $6k–$20k three; $25k–$100k ten) are **old concept estimates**, not up-to-date vendor prices and may omit significant costs; do not use as procurement commitments.

## 11. Readiness scorecard
[ ] Site, location and ownership permission in writing
[ ] CONATEL or INDOTEL written regulatory determination, per country
[ ] Provider-specific resale/wholesale entitlement, where relevant
[ ] Supplier quotes, capacity, fair-use, SLA and cancellation terms
[ ] Radio/power survey and qualified installer signoff
[ ] Security threat model, segregated networks and backups
[ ] Human approval for spending, external publications and network changes
[ ] Test measurements, offline fallback and restoration drill
[ ] Client notices, privacy and retention
[ ] 12-month cash-flow with contingency
[ ] Written go/no-go decision
