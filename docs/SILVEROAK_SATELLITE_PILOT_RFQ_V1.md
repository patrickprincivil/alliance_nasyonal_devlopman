# SILVEROAK GLOBAL SATELLITE NETWORK — V3.1 EXECUTION PACK
**MASTER DEVLOPMAN → TELECOM_WIFI → Global Communication Network**
Date: 2026-10-20. Status: proposal/RFQ only; no carrier partnership, telecom permit, purchased capacity, installed pilot or national coverage.

## 1. Anti-duplication
Reuse existing satellite-internet route, TELECOM_WIFI Library artifacts, shared identity/security, finance and audit. Existing unified V4 Tech City Network architecture is the conceptual source; this is its **implementation intake and RFQ annex**, not a second telecom platform.

## 2. Operator decision matrix (candidate providers, NOT negotiated)
| Candidate | Orbit / intended option | Pilot question / gate | Status |
|---|---|---|---|
| Starlink / SpaceX | LEO; local access, resilience | Enterprise/priority offer, written redistribution approval, Haiti and DR availability | Unverified |
| Eutelsat OneWeb | LEO; community/enterprise | Community Wi-Fi wholesale offering and distributor channels per country | Unverified |
| SES O3b mPOWER | MEO; high-capacity regional aggregation | Minimum capacity, gateway, managed partner, realistic enterprise pricing | Unverified |
| Viasat | Mainly GEO/mixed fleet; resilient enterprise | Contracted capacity, antenna, SLA and country rights | Unverified |
| Hughes / EchoStar | Rural/enterprise satellite options | Regional authorized reseller, volume tiers, service constraints | Unverified |
| Amazon Leo | LEO, potential future alternative | Actual service and regulatory availability in each country | Unverified |

Do **not** buy six subscriptions per node. Pilot one legally authorized primary link and optional independent backup, selected by real quotations. Supplier availability/footprints and launch dates must be reconfirmed at contracting.

## 3. Minimum commercial RFQ — send separately to each operator or authorized wholesaler
Project: Silveroak two-country connectivity pilots (not an existing licensed operator).
Pilot A: San Pedro de Macorís / Los Llanos, Dominican Republic.
Pilot B: Jacmel / Morne-à-Brûlé, Haiti.
Future option: multi-site school, clinic, agriculture and community broadband.

Request in writing:
1. Legal contracting entity and authorized sales channel for Haiti and Dominican Republic; reseller prerequisites.
2. Coverage at specific proposed coordinates (to be provided after site review), terminal eligibility and country restrictions.
3. Right to share, charge for, or resell access: permitted models and specific written conditions.
4. Bandwidth: committed information rate down/up, burst, fair-use, contention, latency and jitter.
5. SLA, credits, support hours, MTTR, maintenance windows, failover and availability targets.
6. One-time terminal, shipping/import, taxes, installation, activation; monthly and traffic charges.
7. Minimum contract duration, notice, cancellation, suspension, price escalation and currency.
8. Antenna placement, obstruction limits, power draw, IP addressing/CGNAT, VPN, IPv6 and public IP options.
9. Service availability for moving terminals (optional), infrastructure permissions and spectrum obligations.
10. Pilot duration, demonstration credits, partner references, NDA requirements and quote expiration.
11. Data protection, logs, abuse policy, regulatory cooperation, technical escalation and exit/export terms.
12. Whether wholesale is available directly or via licensed local partner.

Vendor scoring proposal (100 points, after evidence): regulatory/resale 25; monthly + installed total cost 20; capacity and SLA 20; coverage and field feasibility 15; support and continuity 10; security/data/exit 10. Any missing redistribution authorization or regulatory gate = **NO-GO**, regardless of score.

## 4. Two pilot site acceptance sheets
### A — Dominican Republic: San Pedro de Macorís / Los Llanos
- Ownership/landlord consent, GPS location, line-of-sight/obstructions, mounting wind load, lightning/earthing, weatherproof routes.
- Electricity voltage and hours, UPS/solar backup size after measured load, physical asset security.
- Survey households and service groups; estimate concurrency, application mix and peak busy hour.
- Plan independent VLANs for admin, guests, classroom, cameras and critical devices.
- Use legal local offline library and LAN apps even when Internet drops.
- Obtain INDOTEL written guidance on **private demo vs community resale/satellite carrier** prior to deployment.

### B — Haiti: Jacmel / Morne-à-Brûlé
- Confirm access/security, local operator partnership, site consent and import/homologation requirements.
- Solar + battery autonomy calculated from terminal/router/radio actual measured watts.
- Local offline education, device sync and agriculture sensors with controlled Internet backhaul.
- Obtain CONATEL written guidance on public ISP/resale vs closed private network.
- Do not move equipment into live commercial operation before documented clearance.

## 5. Network topology / bill of materials (per pilot, vendor-neutral)
Satellite terminal + outdoor rated mounting; firewall/router; managed PoE switch; 1–3 outdoor access points chosen by RF survey; optional directional backhaul; UPS + surge/lightning protection; secure cabinet; cables/grounding; local offline content server/storage; site monitoring probe; temperature and power sensors; spares and weatherproof labels. Camera systems on separate network. No universal quantity or coverage radius can be promised before RF survey.

Pilot traffic model: user groups × simultaneous users × expected Mbps at busy hour, with headroom and policy for fair allocation. Measure latency, packet loss, real throughput, power draw, uptime, failover recovery, user satisfaction and cost per active user. Satellite coverage does not imply Wi-Fi blanket coverage.

## 6. Budget — illustrative, not quote
Single demo USD 2k–5k; 3 demos 6k–20k; 10 community sites 25k–100k. These earlier conceptual ranges may **exclude** service fees, customs/taxes, licenses, transport, staffing, tower works, security, support, solar/battery and spares; therefore do NOT use as approved budgets. Produce CAPEX + 12-month OPEX for each site and a contingency only after supplier quotes.

## 7. Regulatory gates (verify latest rules directly)
- Haiti CONATEL: public networks/ISPs can require concession; private-network authorizations differ. Type approval is NOT an operating license. Confirm satellite-service distribution rights and terminal import process.
- Dominican Republic INDOTEL: special registration may apply to resale and satellite carrier services; other license/concession rules may apply depending on service/network. Confirm fees, current validity, local-company requirements and processing terms in writing.
- Starlink contract: resale is prohibited unless expressly allowed by applicable service terms/authorization; some priority-community hotspot exceptions may exist, but they do **not** override telecom rules.
- No frequencies, infrastructure, providers or operating rights presumed approved.

## 8. Architecture and internal shared data (proposal only)
Reuse organizations, projects, approvals, audit, finances, documents, security and customer service modules. Proposed additions after schema review:
satellite_providers; provider_quotes; network_sites; site_surveys; capacity_plans; equipment_inventory; regulatory_cases; internet_links; link_health_metrics; outage_incidents; pilot_tests. Every project-specific table must be tenant-scoped and permission-checked server-side; contracts and sensitive site coordinates private.

## 9. Decision gates and milestones
P0: review existing TELECOM_WIFI source ZIPs/docs and current GitHub build, identify overlaps.
P1: legal guidance + RFQ evidence + site permissions + 12-month budgets.
P2: engineer signs site electrical/RF/safety design, pilot acceptance plan and security segmentation.
P3: procure **only** approved equipment/service and install one small permitted pilot.
P4: 30-day measurement window and signed technical/commercial/consent report.
P5: compare second pilot, then regional replication with per-site authorization.
NO-GO: no resale rights, unlicensed public service, unsafe electrical/structural design, unsecured customer data, no feasible funding or no approved technical survey.

## 10. Operational messages — editable templates
**English vendor RFQ subject:** Haiti & Dominican Republic – Satellite Connectivity Pilot / Wholesale RFQ
Hello, we are evaluating two proposed Silveroak satellite connectivity pilots in San Pedro de Macorís (Dominican Republic) and Jacmel (Haiti). Please advise whether you offer a lawful enterprise or wholesale/community Wi-Fi option for each country, including redistribution rights, permitted user counts, coverage eligibility, installation costs, monthly prices, CIR/throughput, SLA, equipment, country-specific licensing responsibilities, lead times and cancellation terms. These pilots have not yet been installed. We welcome your written response and technical sales contact.

**Français — demande aux autorités haïtiennes:** Bonjour, nous sollicitons des indications écrites concernant les autorisations nécessaires à un projet pilote de réseau local avec liaison Internet satellitaire à Jacmel, avec une éventuelle redistribution communautaire. Merci de préciser le régime applicable à un réseau privé versus public, les licences/concessions, l'homologation et l'importation d'équipements, ainsi que la documentation technique à soumettre. Aucun service public n'est actuellement exploité dans le cadre de ce projet.

**Español — consulta INDOTEL:** Buenos días. Solicitamos orientación escrita sobre los requisitos legales para un proyecto piloto de conectividad satelital con red Wi-Fi local en San Pedro de Macorís, y la eventual prestación o reventa de Internet comunitario. Favor indicar la categoría de autorización o inscripción aplicable, los requisitos técnicos, homologación de equipos, tasas vigentes y responsabilidades de un operador o revendedor. El proyecto aún no presta servicios al público.

## 11. Source links checked Oct 20 2026
- CONATEL license overview: https://conatel.gouv.ht/node/119
- CONATEL warning on equipment approval vs telecom license: https://conatel.gouv.ht/node/513
- INDOTEL special registration service: https://www.gob.do/servicios/inscripcion-en-registro-especial
- Eutelsat Community WiFi: https://www.eutelsat.com/satellite-services/enterprise/community-wifi
- SES O3b mPOWER capacity update: https://www.ses.com/news/news-flash/newsflash-ses-adds-new-meo-capacity-as-latest-o3b-mpower-satellites-enter
- Starlink service terms, applicable contract must be checked: https://www.starlink.com/legal/documents/DOC-1354-58366-77

**Honest status**: This execution pack is documentation and business requirements only. No quotations requested, providers contacted, license issued, equipment purchased, pilots installed, production telecom APIs integrated or customers served by this document.
