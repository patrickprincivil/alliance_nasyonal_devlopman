# SILVEROAK GLOBAL SATELLITE NETWORK — RFQ & TWO PILOTS V3.1
Date: 2026-10-20. Status: planning only; no operator contracts, licenses, deployed sites or confirmed price quotations.
Parent: MASTER DEVLOPMAN / TELECOM_WIFI. Reuse shared project management, approval, accounting, security and audit.

## 1. Operator comparison (initial screening; not confirmed availability in Haiti/DR)
| Candidate | Orbit / offering | Potential fit | Critical checks |
|---|---|---|---|
| Starlink / SpaceX | LEO; business priority plans | Smaller pilot, standby | Confirm country-specific approval, plans, terms for redistribution and hotspot resale, installer and import rules |
| Eutelsat OneWeb | LEO managed enterprise via partners | Institutional links | Find authorized channel partner, coverage, terminal, wholesale and minimum commitments |
| Eutelsat Community Wi-Fi | Community satellite hotspot offering; product/regions vary | Community access | Confirm actual availability for Haiti / Dominican Republic, user/concurrency constraints |
| SES O3b mPOWER | MEO high throughput | Larger aggregation hubs | Check minimum contracted capacity, power/antenna/site, cost and partner eligibility |
| Viasat | GEO / enterprise | Redundant link | Confirm local licenses, latency, fair-use and quotes |
| Hughes / EchoStar | GEO/managed satellite services | Remote communities | Confirm country-specific distributor and lawful resale |
| Amazon Leo | LEO emerging option | Future comparison | Verify actual commercial offering, availability, licensing and prices |
Ranking is provisional. No current quotes or partnerships are established.

## 2. RFQ / provider questions (send in writing, no purchase commitment)
1. Do you directly serve both Haiti and Dominican Republic? What is the legal entity/reseller channel in each?
2. Do you permit paid resale, community hotspots, sponsored free access, and multi-site redistribution, in writing?
3. Which tariffs are eligible, including minimum term, termination, cancellation, installation, taxes, shipping and duties?
4. Provide throughput (committed and burst), data caps/FUP, latency, oversubscription, public IP, CGNAT and congestion priority.
5. Supply monthly and one-time prices for 1, 3, 10 and 25 sites, with volume discount and currency.
6. Provide uptime SLA, credits, NOC response times, escalation and field replacement times.
7. Specify terminal models, antenna mounting, power draw, earthing, surge protection, rain fade and environment ratings.
8. Clarify lead times, import compliance, certified installers and permit responsibilities.
9. Explain QoS, traffic filtering, monitoring APIs, data retention, incident response and security contacts.
10. Provide a 30–60-day pilot option and exact technical acceptance criteria.

## 3. Two-site engineering design and gates
### Pilot DR: San Pedro de Macorís / Los Llanos
- Site survey: GPS/location privately, rooftop view to sky, mounting safety, safe electrical feed and grounding.
- Test local offline LAN first: education library, private camera VLAN, technician portal; no unauthorized internet resale.
- Gateway: provider-approved terminal, router/firewall, managed PoE switch, AP(s), UPS; segregate admin, cameras, guests and critical systems.
- Assess backhaul, line-of-sight, weather protection, local power reliability and UPS endurance.
- Before public community internet: written operator agreement + INDOTEL classification/authorization confirmed.

### Pilot Haiti: Jacmel / Morne-à-Brûlé
- Site-specific safety and access risk assessment before any purchase.
- Solar plus battery sizing from measured daily energy load, weather, battery autonomy and surge demand.
- Offline learning and internal messaging should function without satellite connectivity.
- Internet availability subject to operator coverage and CONATEL legal clearance.
- Arrange local maintenance, physical security and spare parts.

### Universal acceptance tests
- 7-day sample: latency, jitter, packet loss, upload/download at peak and off-peak; track uptime against promised SLA.
- Verify role-based management, firewall default deny, no exposed admin ports, encrypted backups and patching.
- Load test with expected concurrent users and per-user bandwidth policies.
- Test offline operation, WAN outage, power loss/restart, fallback link where planned.
- Obtain installation inspection, regulatory signoff, financial approval and service policy before go-live.

## 4. Budget worksheet fields
Each site: terminal+shipping+customs; mount/tower+grounding; router/AP/switch/firewall; UPS or solar+battery; labor; data subscription; permits; monitoring; security; spares; taxes; recurring backhaul; maintenance; contingency. Unit costs must be quoted; V3 ranges are rough hypotheses, not offers.

## 5. No-duplicate integration
Existing TELECOM_WIFI files: Satellite Connect V1, Hispaniola regulatory master, Wi-Fi versions and associated manifests. Audit/reuse before creating live connector.
Backend eventual schema: sites; providers; provider_quotes; terminals; links; site_power; service_plans; service_contracts; telemetry; incidents; regulatory_approvals. Use existing organizations, finance, subscriptions, audit and approvals rather than duplicating. Scope all tenant data server-side.

## 6. Go/no-go approval
NO-GO until documented: written lawful redistribution rights; country regulatory route; actual operator quote; feasible site survey; cybersecurity review; sustainable budget; on-site support plan; signed approval. Any of these missing means planning or restricted offline demo only.

Sources to verify before contracting:
- Eutelsat Community Wi-Fi https://www.eutelsat.com/satellite-services/enterprise/community-wifi
- SES O3b mPOWER https://www.ses.com/press-release/sess-o3b-mpower-system-starts-providing-high-performance-connectivity-services
- Starlink legal terms https://starlink.com/legal/documents/DOC-1540-49184-72
- Dominican telecom concession https://www.gob.do/servicios/concesion-para-prestar-servicios-publicos-de-telecomunicaciones

## 7. Provider outreach status
RFQ drafted; NOT sent, no replies/quotes, no commercial commitments.
