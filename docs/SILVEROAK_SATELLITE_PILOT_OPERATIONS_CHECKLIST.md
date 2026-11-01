# Silveroak Satellite Network — Two-site field acceptance checklist
Parent: MASTER DEVLOPMAN / TELECOM_WIFI. Companion to SILVEROAK_GLOBAL_SATELLITE_NETWORK_V3_1.md. Planning only.

## Site records — one per country
| Field | Dominican pilot | Haiti pilot |
|---|---|---|
| Candidate locality | Los Llanos / San Pedro de Macorís | Jacmel / Morne-à-Brûlé |
| Landholder permission | Pending | Pending |
| Regulator decision | INDOTEL pending | CONATEL pending |
| Licensed provider + resale rights | Not confirmed | Not confirmed |
| Provider quote and 12-month cost | Not confirmed | Not confirmed |
| Site survey + coordinates (private) | Not conducted | Not conducted |
| Electrical and lightning safety plan | Not approved | Not approved |
| Budget and procurement approval | Not approved | Not approved |
| Installation and support owner | Not assigned | Not assigned |

## Equipment to quote
Satellite enterprise terminal and mounting; edge firewall/multi-WAN router; managed PoE switch; 2–4 outdoor access points after survey; CAT6 and weather-rated cable; earthing and lightning protection; UPS; optionally solar, MPPT and LiFePO4 battery engineered to measured demand; secure outdoor cabinet; offline content server; spare parts and testing laptop.

## Test procedure
1. Confirm operator licence/product allows desired usage; regulator confirms Silveroak's role in writing.
2. Approve the site, safety design and CAPEX/OPEX before purchase.
3. Create separate administration, guest and IoT VLANs; apply strong authentication, least privilege and firmware management.
4. Record terminal and network device actual watts over one representative day; size batteries for desired outage autonomy.
5. Measure speeds, jitter, latency and loss at off-peak and peak use, with 1, 10 and target concurrent clients.
6. Test no-Internet/offline learning experience and local network functions.
7. Test outage recovery and WAN failover without compromising private customer data.
8. Run 30-day availability monitoring; log privacy-respecting aggregate measurements and actual costs.
9. Require engineer and owner sign-off, service desk and rollback plan before public launch.

## Pilot measurements
Record site_id, country, date, permitted provider/plan, connected_users, total_mbps_down/up, latency_p50/p95_ms, packet_loss_percent, uptime_percent, power_watts, outage_hours, capex_usd, monthly_opex_usd, blockers and reviewer. Avoid collecting personal browsing histories.

## Decision
GO only if legal authorization, safe installation, budget ceiling, reliable connectivity, privacy controls, provider support and data-backed 30-day report pass. Otherwise NO-GO: keep offline services and revise scope.

**No pilot, telecom licence, account connection or vendor quote is claimed by this document.**
