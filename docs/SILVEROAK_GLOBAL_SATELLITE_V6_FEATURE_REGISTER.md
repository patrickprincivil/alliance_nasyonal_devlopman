# SILVEROAK GLOBAL SATELLITE NETWORK — V6 Feature and Delivery Register
**Status: engineering specification, not installed hardware, license, or live internet.**
Parent: MASTER DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK. This document extends V3–V5; do not fork a new platform.

## Canonical reuse
Reuse existing shared authentication, organizational RBAC, procurement, CRM, revenue, audit, human approval, backup, document vault and AI Operations. Reuse existing wifi schema and API inventory after review. No second identity, billing, or logging engine.

## Full feature modules and acceptance criteria
| Module | Data and actions | Minimum acceptance |
|---|---|---|
| Provider directory | provider, country, technology, contact status, commercial eligibility | Evidence-linked, no fabricated partnerships |
| RFQ procurement | quotes for 50/100/250 Mbps, term, taxes, 36-month TCO | Signed vendor terms and redistributable use verified |
| Country licensing | CONATEL/INDOTEL obligations and permit artifacts | Counsel-approved, service-class-specific GO |
| Hub registry | country, location, owner, geodata restrictions | Site IDs and restricted coordinates |
| RF survey | sight lines, obstruction, throughput plan | Signed RF survey, safe mount clearance |
| Network design | local LAN, VLAN, mesh, PtP/PtMP, fiber | Capacity model and no exaggerated coverage |
| Satellite upstream | terminal contract, capacity, quota, beam | Verified availability and contracted SLA |
| High availability | backhaul backup, automatic/manual failover | Tested recovery and rollback |
| Local offline services | licensed content, cache, local messaging | Functions with upstream disconnected |
| Community Wi-Fi | lawful access plan, voucher/quota, captive portal | Consent and abuse/retention review |
| Business service | service tier, isolation, support | Verified tenant separation |
| Device management | routers, AP, switches, cameras, IoT | Inventory + patch plan |
| Security | firewall, isolated management, encrypted credentials | Independent config review |
| Privacy | retention, logs, camera permissions | Written privacy notice and deletion workflow |
| Solar/microgrid | PV, battery, UPS, lightning protection | Qualified electrical safety review |
| Network Operations | health, packet loss, uptime, bandwidth | 30-day measured dashboard |
| Incident Response | outage, provider ticket, field repair | Contact tree and drill |
| Customer support | tickets, language, installation | First-response and escalation measured |
| RevenueOS link | invoices, vouchers, sponsored access | No charging without compliant approval |
| AI NOC advisor | fault classification, safe suggested fixes | No autonomous firewall/route/charge changes |
| GIS planning | service points and coverage polygons | Field-tested not claimed from satellite footprint |
| Disaster resilience | priority traffic, communication fallback | Drill, backup power and alternate contact |
| Digital learning | school-local library, offline lessons | Licensed curriculum and access controls |
| Connected agriculture | soil/irrigation telemetry | Safe segmentation and farmer consent |
| Transportation/IoT | fleet telemetry and managed devices | Privacy, connectivity and permissions |
| CCTV | NVR local recording, remote access optional | Camera retention limits and no internet dependency |
| Legal FTA television | receive permitted public broadcasts | Rights and local compatibility verified |

## Proposed data entities (no migrations applied)
network_providers, provider_rfq, provider_contracts, regulatory_gates, network_sites, site_surveys, uplink_services, network_links, access_points, devices, equipment_inventory, power_systems, community_access_policies, connectivity_plans, outages, measurements, incidents, maintenance_orders, telecom_approvals. Every row scoped to organization_id and country; reuse existing users/clients/audit/approvals/invoices.

## Pilot comparison
**Dominican Republic:** San Pedro de Macorís. **Haiti:** Jacmel/Morne-à-Brûlé. Both **candidate** sites only; exact sites and permits not verified.

Gate 0: owner/site authorization and lawfully redistributable backhaul offer; do not order service before review.
Gate 1: comparative RFQs, coverage confirmation in writing, TCO, energy, safety and regulatory advice.
Gate 2: survey and design, approved BOM, contractor and staff training.
Gate 3: staged installation, WAN failover, separated management/camera/guest LAN, offline content tests.
Gate 4: minimum 30-day measured trial, outages and costs, independent GO/NO-GO signed.
Gate 5: replicate to second country only after separate regulatory/partner checks.

## Provider scoring template
Legal redistribution / licensing 25; service availability 20; 36-month total cost 20; capacity/latency/traffic policy 15; availability/support 10; power and equipment 10. Reject any quote without permission for its intended service regardless of numeric score.

## Typical site components — specification only
Authorized satellite or fixed backhaul, compliant weather-rated mounting, grounding and surge protection, edge router, managed PoE switch, 2–6 outdoor/indoor AP as justified by survey, UPS, optional solar+battery (engineered separately), service cabinet, lock, local content box, NVR if CCTV is authorized. Hardware totals are not reliable before vendor offers and site survey.

## Nonnegotiable operations
- Distinguish free offline LAN from free internet, which requires sponsor funding.
- GPS receivers do not provide arbitrary internet access.
- Never claim one satellite subscription will deliver both countries' service without separate authorized sites and network capacity.
- No open or anonymous public camera feeds.
- No collection of unnecessary client IDs, precise household location or sensitive CCTV.
- No unauthorized service resale, radio operation, public post, spending or deployment.
- Do not reveal exact critical infrastructure coordinates in public dashboards.

## Delivery status
Existing Library references: TELECOM_WIFI/SILVEROAK_SATELLITE_NETWORK_V4_COMPLETE.md and TELECOM_WIFI/GLOBAL_SATELLITE_NETWORK/V5_IMPLEMENTATION, PROVIDER_RFQ.csv, PILOT_ACCEPTANCE.csv; other historical packages archived in TELECOM_WIFI.
**Completed now:** requirements inventory and proposed acceptance criteria.
**Not completed:** provider contracts, real API/carrier connectors, licenses, funded BOM, installed pilot, measured SLA, billing, or national coverage.
