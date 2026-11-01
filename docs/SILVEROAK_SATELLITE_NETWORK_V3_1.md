# SILVEROAK GLOBAL SATELLITE NETWORK — Haiti & Dominican Republic
**MASTER DEVLOPMAN / P03 TELECOM_WIFI / V3.1 — 20 October 2026**
**Status:** planning and provider due diligence. No contract, license, pilot, national deployment, or validated service-level performance is implied.

## 1. Purpose and shared architecture
Build a lawful, resilient hybrid satellite/fiber/fixed-wireless connectivity service for homes, schools, farms, clinics, communities and businesses in Haiti and the Dominican Republic. Reuse the existing Master Control Center, CRM, RBAC, finance, human approval, AI operations, monitoring and audit. Satellite coverage does not itself imply broadband capacity delivered to each home.

```text
AUTHORIZED SATELLITE / TERRESTRIAL UPSTREAM PROVIDERS
       | independent links at eligible sites
       v
COUNTRY GATEWAYS / REGIONAL HUBS  (Haiti | Dominican Republic)
       | routing, firewall, QoS, monitoring, power, lawful contracts
       +---- licensed fiber / point-to-point microwave backhaul
       +---- managed community hotspots / local fiber / private LAN
       +---- offline education and local services
       v
HOMES  SCHOOLS  CLINICS  FARMS  BUSINESSES
       |
MASTER DEVLOPMAN: tenants / billing / support / NOC / audit
```
Sites that lack physical interconnection require their own licensed backhaul, not one magical nation-wide hotspot.

## 2. Provider comparison and RFQ shortlist
| Provider | Orbit / offering to examine | Potential fit | Required verification |
|---|---|---|---|
| Starlink / SpaceX | LEO; appropriate authorized business/priority service | rapid pilot, primary or backup link | official per-country service area, selected plan, resale rights, data priority, power, equipment, SLA |
| Eutelsat OneWeb / Eutelsat | LEO and community broadband portfolio | enterprise/community managed Wi-Fi | local partner, minimum commitment, upstream bandwidth, per-country authorization |
| SES O3b mPOWER | MEO enterprise-grade trunk connectivity | regional aggregation and high-capacity hubs | feasibility, equipment, local landing, NOC, cost, minimum capacity |
| Viasat | GEO and enterprise services | resilient backup and remote locations | footprint, latency, SLA, local channel |
| Hughes / EchoStar | GEO and managed satellite offers | rural/community programs | provider availability, channel, equipment and fair-use |
| Amazon Leo | LEO evolving commercial offering | evaluate when accessible locally | real operational availability, prices and reseller terms |

**Do not assume** partnership, wholesale price, country availability or permission to resell based only on the existence of a provider's website.

### RFQ checklist — ask every vendor in writing
1. Can you legally provide managed wholesale/community redistribution connectivity in Haiti and/or the DR? Cite contractual and local authorization requirements.
2. Provide precise serviceable coordinates/coverage and representative satellite elevation/site surveys.
3. Provide guaranteed and best-effort down/up bandwidth, latency, jitter, packet loss, contention, FUP, peak congestion, uptime/SLA and support escalation.
4. Price hardware, import, commissioning, subscription, bandwidth increments, taxes, NOC, installation, maintenance, cancellation and contract duration separately.
5. Describe minimum spend/term, approved distribution topologies, reseller/partner conditions and geographic restrictions.
6. Explain backup/failover, static/public IP and CGNAT, IPv6, VPN and security posture.
7. Explain APIs, metrics, customer management, alerting and privacy/data retention.
8. Confirm lead times, technical training, replacement equipment, warranties and local partners.
9. Confirm power draw, surge/lightning protection, wind requirements and environmental specifications.
10. Supply written proposal, product terms, SLA and regulatory prerequisites; no commitment without review.

### Objective scoring (total 100)
Legality and resale permission 25; total cost of ownership 20; capacity/performance 20; uptime/support 15; deployment ease 10; cybersecurity/data governance 10. **Regulatory and authorization pass is an absolute gate** even if a vendor scores highly.

## 3. Candidate hubs — *proposed only*
Haiti: Port-au-Prince, Cap-Haïtien, Les Cayes, Gonaïves, Jacmel, Jérémie, Hinche, Miragoâne, Fort-Liberté (Jacmel counted once; future rural sites separate).
DR: Santo Domingo, San Pedro de Macorís, Santiago, Punta Cana, La Romana, Puerto Plata, Barahona, San Cristóbal, San Francisco de Macorís, Monte Cristi.
These are planning candidates; each needs field survey, safe power, backhaul and local agreement before approval.

## 4. Priority pilots
**Pilot DR-01: San Pedro de Macorís / Los Llanos.** On-site survey, household/education/business demand, site permission, electricity/solar, local network-only offline catalog, authorized satellite uplink, managed Wi-Fi hotspot, security and consent.
**Pilot HT-01: Jacmel / Morne-à-Brûlé.** Same baseline with higher focus on solar, rugged backhaul, offline curriculum, local maintenance and storm resilience.
A site may offer offline LAN services even without an Internet subscription. GPS receiver positioning does not require Internet, but online maps/routing do.

### Example engineering worksheet (placeholders, not vendor quotes)
- 40 concurrent users × assumed 1.5 Mbps average busy-hour downstream = **60 Mbps** site demand; add 25% headroom → **75 Mbps** planning target. Measured usage may differ substantially.
- Determine uplink needs separately for video meetings, cameras and backups; keep surveillance traffic isolated from public hotspot.
- Establish 30-day baseline: availability, actual 95th-percentile throughput, latency, jitter, energy use, user feedback, incidents and costs.
- Define acceptable bandwidth, uptime, complaint resolution and sustainability from measured pilot evidence before multi-site replication.

## 5. Three service tiers
**Tier 1: Free local offline network** — offline digital library, intranet pages, community bulletin, prerecorded education, locally accessible camera streams only with consent/security, local radio/FTA reception where lawful. Free-to-user does not mean zero maintenance cost. Offline navigation requires downloadable maps.
**Tier 2: Community Internet** — authorized shared service, subsidized/free-to-beneficiary only when funding covers recurrent expenses, bandwidth shaping, acceptable-use rules, captive portal if appropriate, privacy safeguards.
**Tier 3: Enterprise/critical sites** — priority links, private networks/VLANs, redundancy, advanced support, backups, firewall/VPN and measured SLA. Critical safety or hospital services must not depend on an unproven single uplink.

## 6. Hardware / bill of materials per pilot (quote-dependent)
- Provider-approved satellite terminal, mounting, grounding and cable
- WAN dual-link capable router/firewall, managed PoE switch, Wi-Fi 6/6E APs and outdoor-rated distribution if needed
- UPS, surge/lightning protection, properly designed grounding, breakers, AC/DC power monitoring
- Site-dependent solar PV, battery, inverter/MPPT and generator contingency (licensed electrician designs)
- Rack/enclosure, environmental/weatherproof cable routing, poles/structural inspection and fall protection
- Offline local content server/NAS, logging/monitoring, backups and spares
- Segmented guest, admin, camera and industrial VLANs; WPA3 where supported
- Remote NOC access by secure VPN; never expose admin UI publicly
- Local safety and building-code review, permissions, physical security, user privacy notices

## 7. Pilot budget and finance
Historical conceptual estimates: one site USD 2k–5k; three 6k–20k; ten sites 25k–100k; expanded regional 100k–500k+; national networks potentially millions. **Not vendor quotes**, often omit licenses, contracts, tower sites, staff, customs, civil works and power.
Track CAPEX (terminal, distribution, solar, mounting, tools, security, freight and installation), recurring OPEX (ISP, energy, staff, permits, support, lease, tax, insurance, software), reserves (spares, storm damage, currency) and beneficiary subsidy.
Unit economics: monthly revenue + committed subsidy – connectivity – field support – energy – replacement reserve – tax; approve expansion only if measured coverage, quality and cash-flow gates pass.

## 8. Regulation and procurement gating
**Haiti / CONATEL:** satellite high-speed Internet operation requires review of current licensing and equipment/other approvals; seek written clarification for resale, spectrum and terminal import/homologation.
**Dominican Republic / INDOTEL:** determine exact concession, license or special registration depending on public telecom, resale, satellite carriage and distribution model; official government listing includes reseller/satellite-related special register procedures and document requirements. Verify current fees with regulator before budgeting.
An operator subscription is NOT an automatic telecom reseller license. Never activate paid redistribution until the relevant approvals and agreements exist. Obtain competent in-country legal counsel.

## 9. Security, safety and governance
- No production deployment without documented permits, technical design signoff, site access and insurance review.
- Credential vault, MFA, RBAC, individual tenant separation, centralized audit and retained change history.
- Consent, minimal collection, retention policy, incident response and lawful data handling.
- Segregate surveillance cameras and industrial controllers; deny public inbound administration.
- Critical outages go to human operator; AI can detect anomalies and propose tickets, not autonomously alter public routing, initiate charges or disable safety systems.

## 10. Roadmap / deliverables
**G0 — Audit**: classify current 35 TELECOM_WIFI files and related satellite/regulatory packages; deduplicate by content; inventory GitHub features.
**G1 — Legal/provider**: write regulator inquiries and request 3 comparable RFQs; obtain reseller permission and partner requirements.
**G2 — Site selection**: survey DR-01 and HT-01 with coordinates, demand, power, line-of-sight, security, community consent.
**G3 — Engineering**: link budget, IP/VLAN/QoS/security diagram, power model, CAPEX/OPEX/TCO, construction method statement.
**G4 — Procurement**: board/human approval, signed service contracts, procurement controls, insurance and delivery.
**G5 — Deploy**: supervised pilot, asset registry, installation checklist, cybersecurity test, monitoring and documentation.
**G6 — Prove**: 30-day measurement, SLA/uptime and unit economics; fix failures and decide expansion.
**G7 — Scale**: staged regional clusters, disaster recovery and country-specific legal compliance.

Each task: owner, country, site, dependency, acceptance evidence, due date, status, budget, permit and approval_id in existing Master Control Center.

## 11. Integration map
MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK — ONE MODULE.
Reuse shared CRM, identity, finance, contract vault, human approvals, inventory, monitoring, procurement and AI Orchestrator.
Planned routes: /satellite-internet (existing informational page), then /network-operations, /network-sites, /network-providers, /network-coverage. New routes are *proposals*, not deployed.

## 12. Current truth and sources
No satellite company has agreed to supply Silveroak, no tariff proposal or regulatory clearance has been confirmed, and no Haiti/DR-wide network is installed. No public affordability or guaranteed speed is asserted.
Official public reference materials:
- Eutelsat community Wi-Fi: https://www.eutelsat.com/satellite-services/enterprise/community-wifi
- Eutelsat enterprise: https://www.eutelsat.com/satellite-services/enterprise
- Starlink terms: https://www.starlink.com/legal/documents/DOC-1354-58366-77
- Dominican government/INDOTEL special registry: https://www.gob.do/servicios/inscripcion-en-registro-especial
- CONATEL satellite Internet circular CIR-20220011: https://conatel.gouv.ht/sites/default/files/CIRCULAIRE%20STARLINK%20CAHIER%20DES%20CHARGES%20circulaire%20%2020220011%20acces%20a%20internet%20par%20satellite_0.pdf

**Next decision:** select first two survey sites, obtain legally usable wholesale quotes, then approve a contained, affordable pilot. No purchase order based on this planning document alone.
