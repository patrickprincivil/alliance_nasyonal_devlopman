# SILVEROAK GLOBAL SATELLITE NETWORK — V4 FUTURE ROADMAP ADDENDUM
Status: planning, not deployed. Parent: MASTER DEVLOPMAN / TELECOM_WIFI. Reuses existing library artifact SILVEROAK_SATELLITE_NETWORK_V4_COMPLETE.md rather than creating a second master system.

## Provider sourcing matrix
RFI/RFQ to Starlink authorized enterprise distribution, Eutelsat OneWeb channel partners, SES commercial mPOWER, Hughes Community Wi-Fi, Viasat Enterprise, and emerging LEO market entrants only when commercially available in each country. No existing relationship is implied.
Score: regulatory/licensing path (pass/fail), contract resale authorization (pass/fail), genuine serviceability by GPS region, monthly cost 20%, user equipment 10%, committed throughput 20%, resilience & support 15%, installation lead time 10%, scalability 10%, security & integration 15%. Obtain comparable 36-month TCO and enforce regulatory veto.

## Pilot architecture
Separate two potential sites: Dominican Republic (San Pedro de Macorís / Los Llanos) and Haiti (Jacmel area).
Site terminal -> edge firewall/router -> managed PoE switching -> distinct VLAN/SSID networks (admin, guest/community, educational cache, IoT/camera, network management); local backup storage; UPS + inspected ground/ surge protection; optional licensed directional distribution links. A satellite terminal alone is not national coverage. Each independent hub needs validated backhaul path and sufficient aggregate capacity.

## Pilot kit procurement categories
- Authorized upstream and matched terminal/mount.
- Business-capable firewall/router, QoS, site-to-site encrypted management tunnels.
- VLAN managed PoE switch and outdoor rated access points.
- Proper mast/mount/cabling/surge and grounding, certified installer survey.
- UPS, safe AC protection and optionally engineered solar + battery.
- Monitoring server, inventory/asset register, secure logs and local education cache.
- Spare equipment and installation/maintenance allowance.
Supplier model, price, support, geography and type approval must be verified before purchase.

## 90-day staged plan
0-15: baseline existing library and asset inventory, site permissions and regulatory counsel pre-consultation; send RFQs.
16-30: commercial responses + line of sight, power and capacity assessments; safety and privacy plans.
31-45: Go/No-Go for legally authorized controlled pilot, selected supplier, reviewed budget and support terms.
46-60: controlled install and configuration, isolated LAN tests, inventory and security evidence.
61-75: measurements for latency, uplink/downlink, concurrency, energy, outages, uptime and support tickets.
76-90: audit economics, regulator compliance and contingency; decide expansion or stop.
No live public resale before obtaining permits and contract rights. Do not assert positive test results that have not been measured.

## Future technologies (not claims of installed services)
Multi-orbit failover, hybrid fiber/LTE/satellite, licensed PtP wireless, local cache/offline learning, Wi-Fi calling where supported, privacy-safe camera LAN, smart agriculture sensors, fleet connectivity, emergency communications, IPv6, DNS caching, zero trust, network AI advisory, remote support, managed SD-WAN, subsidized vouchers and enterprise SLA tiers.
AI may advise on alerts; human authorized approval required for route changes, firmware rollout, credential rotations, charges and physical installations.

## Required operator RFQ fields
Country & coordinates; business type; multi-site quantity; 95th percentile throughput targets; number of users; monthly data quota vs unmetered policy; permitted community Wi-Fi resale; equipment homologation; provider licensing; legal entity and onboarding; service credits and support availability; latency/jitter; weather outage history; power draw; terminal lead time; contract length, minimum, tax/duties, installation, public/static IP, CGNAT, IPv6, failover design, security logs, data location, termination and ownership. Require written confirmation of authorization in Haiti and DR.

## Regulatory gates
Haiti: determine CONATEL authorization type, spectrum/ground station and homologation before public service; equipment homologation alone is not ISP operating license.
Dominican Republic: review INDOTEL reventa Registration Especial Resolution 116-2024, licensed geographic area, contracts and applicable concessions, radio authorizations and homologation before providing service to third parties.
Starlink terms limit resale except specifically authorized arrangements and specified priority hotspot allowances; validate current local contract rather than relying on residential plan.

## Data model to build only after shared DB review
sites, service_areas, carriers, carrier_contracts, terminals, customer_networks, access_policies, network_events, health_checks, incident_tickets, regulatory_documents, device_inventory, usage_metrics, invoices, approvals and audit_events. Scope all tables by organization; re-use existing core identity, CRM, revenue, approvals and audit. Never publish restricted location or camera feeds.
