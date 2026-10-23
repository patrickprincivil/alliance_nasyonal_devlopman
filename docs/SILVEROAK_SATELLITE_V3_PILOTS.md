# Silveroak — Two-Site Connectivity Pilot Implementation Guide
Date: 17 October 2026. Proposal only; no sites commissioned, no purchases authorized.

## Sites
**Pilot DR:** Los Llanos / San Pedro de Macorís. Actual parcel, roof, power, line-of-sight, telecom permit and geolocation must be verified. Scope: community internet on a permissioned campus, CCTV on an isolated VLAN, local educational content, printer, smart-TV, GPS and IoT demos.

**Pilot Haiti:** Jacmel / Morne-à-Brûlé. Actual parcel/site survey, land permission, safe physical access, power security, equipment procurement and licensing must be verified. Scope: offline-first education, farm sensor/camera network, solar/battery monitoring, intermittent internet and locally usable content.

## Topology
Provider-licensed WAN terminal > surge protection > dual-WAN-capable router/firewall > managed PoE switch > segregated APs/VLANs (staff, guests, cameras, IoT, management) > local content server and monitoring.
Separate AC power, earthing, surge arrestors, mast wind loading and physical equipment enclosure designed to local code; qualified installer/electrician approves.
Optional failover link must be from legally permitted separate access network.

## Pilot bill of materials — **quantities for planning only**
| Item | Qty/site | Sourcing requirements |
|---|---:|---|
| Licensed provider terminal + plan | 1 | Official compatibility and terms; not purchased |
| Dual-WAN firewall/router | 1 | VLAN, bandwidth shaping, security updates |
| Managed PoE switch | 1 | 8–16 ports, adequate power budget |
| Wi-Fi 6 AP | 2–4 | Outdoor-rated as needed; local RF rules |
| Local server or NAS | 1 | offline-first learning, backups, encrypted storage |
| Surge protection and lightning/grounding | per design | certified installer |
| Battery, inverter, solar and/or UPS | sized after measurement | engineering load + autonomy calculation |
| Lockable enclosure, cabling, fiber or bridge links | after site survey | UV rated, distances confirmed |
| Security cameras | 2–4 | Privacy notices, isolated network, retention |
| Spares, tools and monitoring | per site | spare AP/PSU, temperature/network alerts |

## Initial objectives and acceptance tests
- Legal rights for access/resale and radio equipment **before** public service.
- Coverage survey (RSSI, SNR, throughput, roaming, interference) at defined campus boundaries.
- 72-hour monitored run per site with per-hour logs of availability, data usage and latency; goal >= 95% during pilot, not an SLA.
- Real device-count load test with at least 10 concurrent devices (or less if capacity constrained), documented QoS and fair-use.
- Confirm offline learning portal still functions when WAN disconnected.
- Separate CCTV/IoT from guest Wi-Fi and verify no cross-VLAN unauthorized access.
- Power-disconnect exercise and graceful shutdown; test restoration and local backup.
- Signed acceptance from site owner and authorized pilot lead.

## Provisional cost gates (not vendor quotes)
1 pilot: US$2k–5k **may be insufficient** for site construction or high-capacity business service; estimate hardware only after real proposals and surveyed electrical scope.
2 pilots combined: build granular hardware/civil/permit/connection/OPEX budget; do not extrapolate national prices from 1–2 sites.
Country network rollout: requires capacity dimensioning, backbone/backhaul per hub, licensed operators, local rights-of-way, tower safety, customer support and funding; potentially very large capital commitments.

## Six-phase operational roadmap
1. Existing asset audit (Silveroak TELECOM_WIFI archive) and legal/procurement due diligence.
2. Two physical site surveys, total-load estimate and local consent.
3. At least three written provider inquiries, side-by-side TCO; regulator consultation for each country.
4. Approve one proof-of-concept equipment list, purchase only after written authorization.
5. Build small, isolated test LAN first; then legally permitted internet pilot.
6. Record field metrics and go/no-go decision before extending to communities.

## Master Devlopman links
MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK
Reuse shared project tracking, audit, approval, revenue, equipment registry and document archive. No duplicated user database, contracts or billing system.
