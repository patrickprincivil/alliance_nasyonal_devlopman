# SILVEROAK GLOBAL SATELLITE NETWORK — Haiti & Dominican Republic
Date: 2026-10-17. Parent: MASTER_DEVLOPMAN → TELECOM_WIFI → GLOBAL_COMMUNICATION_NETWORK.
**Status: proposed, no provider contracts, licenses, deployments or confirmed prices.**

## Scope and architecture
Operate two independent country-specific networks with licensed satellite or terrestrial backhaul and local authorized Wi-Fi/fibre delivery. Every isolated hub needs its own backhaul or a properly engineered point-to-point relay. Offline LAN functions without purchased internet; satellite broadband does not mean phones connect directly to satellites. Separate public users from management, CCTV, hospital and school networks with VLANs and firewall policy.

### Service tiers
- Free local: offline school library, local communications, camera LAN, GPS receiver functionality (GPS positioning needs satellite signal, not internet); FTA TV requires suitable dish and receiver.
- Community internet: approved upstream resale and regulator permissions, sponsored free-user vouchers optional; access control, fair use and bandwidth quotas.
- Enterprise: segmented priority traffic, SLA only when contracted, VPN, backups and optional redundant upstream.

## Provider comparison — eligibility subject to quote
| Provider | Technology | Intended use | Gate |
|---|---|---|---|
| Starlink | LEO | Small hub trial / secondary backhaul | Territory availability, plan and express authorization for resale; priority community Wi-Fi wording is not a nationwide ISP license |
| Eutelsat OneWeb / Eutelsat Community WiFi | LEO and community satellite portfolio | Managed community hotspot / certified partner | Coverage, certified partner, equipment/throughput quote |
| SES O3b mPOWER | MEO | Enterprise regional aggregation | Minimum capacity, terminal and commercial feasibility |
| Viasat | GEO/managed | Institutional redundancy | Country-specific enterprise quote |
| Hughes / EchoStar | GEO and managed | Rural and institutional services | Authorized local delivery partner |
| Amazon Leo | LEO | Future competitive option | Verify current commercial availability, territorial licenses, equipment and pricing |

Prioritize quotes from Eutelsat, Starlink authorized channels, SES. Never present these as signed partnerships.

## Two-hub pilot
| Hub | Purpose | Dependencies |
|---|---|---|
| San Pedro de Macorís, Dominican Republic | LAN/WiFi, QoS, captive portal, cameras, smart TV, radio, GPS, farm telemetry | Site survey, INDOTEL determination, upstream contract, power, municipal/property permissions |
| Jacmel / Morne-à-Brûlé, Haiti | Remote school, local library, offline video, solar energy, agricultural monitoring | Security/access survey, CONATEL determination, upstream licensing, power and maintenance |

### Pilot design: per site
1. Site intake: property rights, GPS coordinates held privately, users (peak/concurrent), required Mbps and uplink, power loads, heat, roof safety and line-of-sight.
2. Survey: available fibre/mobile/fixed wireless first, then satellite; document hazards and serviceable radius.
3. Redundant protected AC/DC power, SPD/lightning/grounding to local code, solar/UPS sized from measured daily Wh.
4. Backhaul modem/terminal → firewall router → managed PoE switch → isolated access points / wired edge → monitoring. Optional NAS cache for offline content; cameras record locally and respect privacy.
5. VLAN policy: admin, guest, education, cameras/IoT; separate firewall ACLs, unique credentials, disabled default passwords and firmware updates.
6. Test: latency, upload/download, jitter, packet loss, WAN uptime, RF coverage, 10/25/40-client loads, power autonomy, safety and restore.
7. Human sign-off before expanding Wi-Fi reach, charging subscribers, or posting content.

### Indicative planning budget (NOT supplier offers)
One demonstrator USD 2k–5k excluding ongoing connectivity, labor, permitting and taxes; three 6k–20k; ten 25k–100k; countrywide costs require engineered capacity + market studies. Treat as hypotheses until bills of materials/quotes.

### Project milestones
M0: provider and regulator responses collected
M1: legally approved scope, site surveyed, detailed bill of materials
M2: one-site isolated demo installed, power + LAN validated
M3: approved broadband trial with 30-day test and issue log
M4: replicate second site only after lessons and authorizations
M5: 10-site expansion business case; countrywide roll-out contingent on capital and licenses

### KPIs
Concurrently connected devices, median and p95 latency, backhaul availability, throughput at peak, power runtime, incident response, help-desk tickets, cost per served user, revenue minus operating costs, consent violations = 0.

## Regulatory review
- Haiti: CONATEL requires technical authorization details for telecom network, frequencies and international access methods. Satellite broadband licensing is distinct from terminal approval.
- DR: INDOTEL's 2024 resale regulation requires special registration before operations, geographic area, contracts and permitted modality. A residential plan alone does not authorize wholesale commercial redistribution.
- Seek written country-specific ruling before procurement.
Sources: https://www.conatel.gouv.ht/node/115 ; https://www.conatel.gouv.ht/node/523 ; https://indotel.gob.do/wp-content/uploads/2024/10/Reglamento-de-Reventa-Res.-Num.-116-2024.pdf

## Dependencies reused from existing MASTER
Use existing SILVEROAK_WIFI starter v1–v11 files only after ZIP inventory and code security review; existing billing, authentication, approvals, audit and inventory are shared. Do not create separate CRM/payment databases or publish credentials. No code integration assumed.
