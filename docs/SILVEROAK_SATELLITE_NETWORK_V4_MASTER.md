# SILVEROAK GLOBAL SATELLITE NETWORK V4 — MASTER DEVLOPMAN
Status: engineering and commercialization blueprint, **not deployed**. Geographic focus: Haiti and Dominican Republic. Owner module: TELECOM_WIFI → Global Satellite Network. Preserve 35 prior categorized telecom files; audit their contents before reusing modules.

## 1. Mission and boundaries
Provide licensed connectivity and locally hosted/offline services for homes, schools, clinics, farms, enterprises, transportation and communities. A satellite beam is backhaul, **not a country-wide Wi-Fi signal**. Remote sites need terminals, power, LAN/WLAN/fiber, maintenance, permissions and service capacity. Neither provider partnership, allocation, government approval, satellite terminal purchase, nor operational hub is confirmed.

## 2. One unified technical architecture
Provider licensed satellite service or terrestrial fiber → country hub/point of presence where justified → regional aggregation → local community node → client CPE/Wi-Fi/LAN. Remote sites can have independent terminals, rather than implying one terminal serves both nations.

Shared services (do not duplicate): identity and RBAC, CRM/lead intake, inventory, projects, finance/quotes, subscriptions, audit, approval, monitoring, security, backups and document registry. Country-specific tenancy and regulatory status are mandatory.

### Network planes
- Connectivity: approved terminal + licensed ISP/backhaul + SD-WAN router/firewall.
- Access: Wi-Fi 6/6E or region-permitted equivalent, directional point-to-point links, fiber where available.
- Service: captive portal only if needed; local library/cache, DNS, educational content, public notices; optional VoIP and video only with necessary approvals.
- Operations: telemetry (uptime/latency/loss/jitter/bandwidth, power), alerting, help desk, ticketing, asset inventory.
- Security: VLAN separation for visitors/staff/cameras/industrial OT; WPA3 when supported; device onboarding, patching, MFA, logs and privacy safeguards. Security cameras require consent, retention and restrictive access.
- Resilience: dual WAN at critical sites, backup power, replaceable CPE, spare equipment, tested disaster recovery.

## 3. Provider shortlist — negotiation targets, NOT partners
1. Starlink/SpaceX (LEO): cost and installation flexibility, contract must explicitly authorize planned distribution/resale; residential terms alone are insufficient. Read latest country-specific terms.
2. Eutelsat OneWeb (LEO): managed enterprise/community arrangements through eligible distributors, pricing and terminal supply need confirmation.
3. SES O3b mPOWER (MEO): high-throughput regional aggregation / enterprise; capacity, service minimum and gateway requirements may exceed small pilot needs.
4. Viasat (GEO/other): backup/enterprise solutions subject to local offerings.
5. Hughes/EchoStar: rural and commercial solutions subject to footprint and licensing.
6. Amazon Leo: potential future alternative; verify operational commercial availability and local approvals before including in bids.

Shortlist first: Starlink, Eutelsat OneWeb, SES. Ask for licensed, written commercial offers — do not assert they approved Silveroak.

## 4. Regulatory gates — NO GO until cleared
Haiti: confirm with CONATEL which of concession, authorization or prior declaration applies to network operation, end-user retail, resale, terminal radio equipment, local links and any interconnection. Seek equipment homologation, spectrum and import clearance as applicable.
Dominican Republic: ask INDOTEL to classify service as own public internet network (concession), resale (special registration), satellite carrier, radio links, use of public spectrum, import/homologation, and coverage zone. Written provider agreement, client contract and required approvals before commercial redistribution.
Cross-border service does **not** make two countries one license zone; contracts, customs, consumer rights, taxes and security rules remain separate.
Special note: Starlink terms describe conditional community hotspot resale under eligible Priority Plans, but confirm *exact country, plan, scope and date* directly and reconcile with both regulators.

## 5. Service tiers
- Local/offline: LAN/Wi-Fi education library, offline videos, authorized cameras, local communications and FTA reception where legally/technically supported. Free to users only if costs are covered; no claim of free internet.
- Community internet: shared backhaul with fair-use and access controls, donor subsidy for qualifying users, published caps and realistic speeds.
- Enterprise: business SLA, private VLAN/VPN, optional redundancy, managed firewall, monitoring and support; quote individually.

## 6. Pilots — gates
DR-01 near San Pedro de Macorís; HT-01 Jacmel/Morne-à-Brûlé, **both proposed, neither installed**.
Phase 0: permissions, survey, legal classification, provider quotes, site access, power, preliminary demand.
Phase 1: lab: one small local network, offline services, secure Wi-Fi, simulated WAN failover (no unlicensed retransmission).
Phase 2: one authorized backhaul subscription per approved site and documented commissioning.
Phase 3: observe 30 days; refine budget/capacity; expand only with evidence.

### Site acceptance
- Signed site/roof consent and physical access plan.
- RF line-of-sight and interference survey where radio distribution planned.
- UPS/solar design with measured load, battery autonomy and grounding/surge protection.
- Tested speeds at busy hour, latency, packet loss and uptime; no invented SLA.
- Wi-Fi segmentation and access logs with approved retention.
- Privacy notice, safe credential storage and local point of contact.
- Failover tested if backup promised; maintenance and incident contacts trained.
- Permits, insurance and procurement sign-off filed.

## 7. Illustrative cash planning — not vendor quotes
Pilot assumptions (USD only as preliminary planning placeholders):
- One demonstration: 2,000–5,000 hardware/network setup before all subscription and legal costs.
- Three demo sites: 6,000–20,000.
- Ten community nodes: 25,000–100,000.
- Regional program: 100,000–500,000+.
- Two-country national scale: potentially millions, to be determined by engineering and financing.
Model recurring operating expenses independently: bandwidth, energy, repairs, site rent, licenses, labor, cybersecurity, insurance, customs, taxes, travel, backhaul redundancy and customer support. Revenue requires confirmed unit economics, consumer affordability, churn and utilization.

## 8. KPI and expansion rules
Per site: legally authorized Y/N, provisioned terminals, connected households, active users, busy-hour throughput, latency p95, loss %, measured monthly uptime, tickets opened/resolved, cost per served site, recurring bandwidth spend, energy autonomy and effective price/customer.
NO GO if no regulator/provider permissions, unbounded recurring deficits, inadequate physical/electrical safety, no trained support or lack of data controls.

## 9. Implementation through existing MASTER DEVLOPMAN
Provider Registry → Regulatory Gate → Site Survey → Engineering/BOM → Quote/Approval → Procurement → Commissioning → Network Operations → CRM/Billing → Audit.
Re-use existing shared PostgreSQL, not duplicate user tables. Start read-only plans/dashboard; no automated cross-border reselling, billing or remotely controlled industrial equipment without approvals.
