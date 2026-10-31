# SILVEROAK GLOBAL SATELLITE NETWORK — V3.1 IMPLEMENTATION BLUEPRINT
Status: PROJECT PROPOSAL / REQUEST-FOR-QUOTATION PACK — NOT DEPLOYED.
Parent: MASTER DEVLOPMAN > TELECOM_WIFI > GLOBAL SATELLITE NETWORK.
Geography: Haiti and Dominican Republic. Initial demonstration locations (proposed): San Pedro de Macorís/Los Llanos and Jacmel area.
No provider agreement, telecom license, permits, lease, equipment purchase, network activation, or operator quotation confirmed.

## Architecture (reuses Master shared core)
Providers LEO/MEO/GEO -> individually licensed/contracted terminals at each site -> firewall/multi-WAN -> managed switches & APs -> approved end-user network.
Offline local cache/library, optional legal free-to-air broadcast receivers, local camera/IoT isolated from guest Wi-Fi, resilient solar/UPS, NOC monitoring.
Backend: existing Next.js Master Control Center; org/site/device registry; PostgreSQL; audit; human approval; no independent telecom SaaS duplicate.
Separate Haiti/DR authorization, local contracts, taxation, privacy, radio permissions and service provisioning. Cross-border backhaul requires separate legal review.

## Operator evaluation matrix (commercial status UNVERIFIED)
| Provider | Class | Candidate role | Proof needed |
|---|---|---|---|
| Starlink | LEO | Small site/pilot/community hotspot where permitted | exact plan, lawful redistribution, geography, SLA, fair-use |
| Eutelsat OneWeb | LEO | enterprise/community backhaul | country availability, distribution partner, antenna/CIR, contract |
| SES O3b mPOWER | MEO | larger regional aggregation | minimum capacity, antenna, gateway handoff, SLA, costs |
| Viasat | GEO and other products | backup/enterprise | region-specific offer, latency, resale rights |
| Hughes/EchoStar | satellite service/infrastructure | remote community or enterprise | active product and jurisdiction terms |
| Amazon Leo | LEO | future procurement candidate | live availability and regulatory approval |

Commercial ranking must come from real RFQs, not marketing claims.

## Uniform RFQ (request separately for HAITI and DOMINICAN REPUBLIC)
- legal entity and intended wholesale/community redistribution, direct vs authorized reseller, pilot vs national expansion
- coverage footprint and ground gateway options, EIRP, terminal approvals, certifications
- bandwidth committed vs burst (down/up), busy-hour contention, data caps, IPv4/IPv6 and CGNAT options
- end-to-end latency/jitter/loss and availability SLA, MTTR, support language/response
- installation, CPE, antenna, shipping/customs, power consumption, security, tropical weather tolerance
- activation, recurring minimum, overage, cancellation, taxes, local currency, currency conversion
- express contract permission for multi-tenant community Wi-Fi and revenue model
- onboarding requirements, maximum sites and add-site procedure
- disaster backup option, failover and restoration SLA
- first site quote, three sites quote, ten sites quote, and scaling framework
Decision: require written offer and regulatory counsel review before purchase.

## Regulatory gate
Haiti: confirm licensing with CONATEL for provision and resale, authorized satellites/terminals and any radio spectrum requirements.
Dominican Republic: confirm INDOTEL concession/registration for reseller/public access, deployment details and terminal homologation.
Starlink reseller permission depends on contract/plan; business service does not automatically convey general ISP authority.
No assertion that any Silveroak permission is issued.

## Pilot A: San Pedro de Macorís / Los Llanos
1. Site survey: precise geolocation privately, roof/ground mounting, clear sky, power, grounding/lightning, line-of-sight, neighborhood demand.
2. Design: 1 approved satellite link; router/firewall with WAN failover capability; segregated guest, admin, school/community, IoT/camera VLANs; 1-3 managed APs as required by RF survey.
3. Power: UPS and optional solar sized from measured continuous load, outage duration, peak power, battery safety.
4. Network: captive portal/privacy notice as required; per-user fair-use/QoS; legal consent for cameras; internet access only where contract allows.
5. Acceptance: 72-hour observation plus peak hour test, uptime measurement, device isolation, outage test, security review, budget variance and written sign-off.
Pilot is conditional on regulatory and vendor permissions.

## Pilot B: Jacmel, Haiti
Repeat licensed provider/site process; prioritize offline education, emergency comms, solar resilience, clinics and local Wi-Fi. Assess hurricane/seismic exposure, equipment security, local technician training and spare parts. Do not presume equipment can be imported/activated or that public distribution is authorized.

## Costing method (illustrative only)
CAPEX/site = satellite terminal + mounting + firewall + Wi-Fi AP/switch + structured cabling + UPS/solar + labor + freight/customs + contingency.
OPEX/month = legal provider plan + power + monitoring + support + lease + tax/permits + replacements + backhaul contingency.
Unit economics = (monthly opex + amortized capex + reserve) / paid-user-equivalents.
Example for worksheet illustration only: monthly operating USD 250 + capital recovery USD 100, 50 paying-equivalent users => USD 7 per user/month before profit/taxes. NOT an operator quote.

## Rollout stage gates
G0 Verify legal entity, permissions and RFQs by country. NO purchase.
G1 Country-specific 1-site site survey and engineering drawing.
G2 Budget approval and procurement after contract checks.
G3 Secure build, connectivity, uptime/capacity/cybersecurity testing.
G4 Paid/charity pilot only if allowed; collect informed-consent feedback and support tickets.
G5 Three- and ten-site replication using validated economics.
G6 National expansion only following multi-year finance, spectrum/network license, municipal permissions, disaster-resilience and partner agreements.

## Data entities / NOC integration
network_providers, provider_offers, regulatory_requirements, network_sites, site_surveys, circuits, terminals, access_points, energy_assets, health_samples, incidents, support_tickets, subscribers, usage_aggregates, equipment_inventory, approvals and audit_events.
Use existing organization/user/permission/CRM/billing services instead of re-creating them. Collect only necessary subscriber data; encryption at rest/transit, retention limits and deletion rules.

## Human approvals mandatory
Contract signing; new subscription/site purchases; ad campaigns, subscriber notices, sharing identifiable data, sensitive surveillance, service shutdowns, network configuration changes affecting safety, and production deployments.

## 30/60/90-day operational plan
Days 1-30: complete regulatory question lists, six RFQs, five candidate site surveys per country, inventory existing TELECOM_WIFI ZIPs and hardware before code import.
Days 31-60: evaluate written offers with weighted criteria (compliance 30%, landed three-year cost 25%, bandwidth and latency 20%, reliability 15%, support 10%); publish design and funding gate.
Days 61-90: deploy only if contracts/permits/capital secured; otherwise maintain paper design, proof-of-concept testbed with lawful local-only network.

## Safety/truth
No “free satellite Internet”: offline local services can be free to users; upstream data costs and operational costs remain. GPS reception is not equivalent to unrestricted internet uplink. Local community Wi-Fi may use permitted priority plans or authorized resale only. Satellite footprint != usable household coverage.
Sources for verification:
- https://starlink.com/legal/documents/DOC-1119-56469-78
- https://www.eutelsat.com/satellite-network/oneweb-leo-constellation/leo-equipment/ow50sl-dac
- https://www.ses.com/network-and-technology/meo
- https://indotel.gob.do/wp-content/uploads/2024/10/Reglamento-de-Reventa-Res.-Num.-116-2024.pdf
- https://conatel.gouv.ht/sites/default/files/CIRCULAIRE%20STARLINK%20CAHIER%20DES%20CHARGES%20circulaire%20%2020220011%20acces%20a%20internet%20par%20satellite.pdf
