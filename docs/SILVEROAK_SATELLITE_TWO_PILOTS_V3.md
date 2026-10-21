# SILVEROAK SATELLITE — TWO-SITE PILOT EXECUTION PLAN V3
**Proposed**: site DR-001 near Los Llanos / San Pedro de Macorís, Dominican Republic; site HT-001 near Jacmel / Morne-à-Brûlé, Haiti. These are candidates, not commissioned installations.

## Governance gates (no bypass)
G0: site-owner permission, site survey, installation safety review.
G1: applicable operator agreement **and** national regulator counsel's written assessment of required concessions/licences, reseller rights and equipment approval.
G2: funding approval and signed itemized quote; power backup/cyber plan.
G3: bench/local-only network functional tests before switching on upstream connectivity.
G4: authorized limited connectivity trial; privacy, fairness and complaint/incident process.
G5: measured go/no-go: expand only after acceptable throughput, service quality, regulatory compliance and financing.

## DR-001 technical pilot
- Phase A: site survey; candidate coordinates privately collected, not published; clear sky, roof rights, wind/rain exposure, power and surge/grounding.
- Phase B: local-only learning portal with lawful content, captive information page, low-cost Wi-Fi AP and VLANs for admin/guest/camera/IoT.
- Phase C: approved backhaul test; managed router, fail-closed firewall, limited QoS and capped clients; collect consent-respecting aggregate counters only.
- Phase D: demonstration for local school/community/business and a basic local offline library. **No public ISP/resale** without approvals.

## HT-001 technical pilot
- Survey site safety, hurricane exposure, access and security.
- Solar + battery sized against measured loads and autonomy requirements; certified electrical installer.
- Cache offline lessons and public-service information; local network remains useful during backhaul outage.
- Limit service to authorized participants until terms and regulatory approvals are documented.

## Capacity model (illustrative, not an operator quote)
Traffic design target: 25 concurrent users * 2 Mbps average = **50 Mbps aggregate** plus 30% headroom = **65 Mbps busy-hour downstream planning demand** per pilot. Actual throughput depends on usage patterns, upstream, AP layout and quotas.
For 50 concurrent users at 3 Mbps: 150 Mbps + 30% = 195 Mbps planning target.
Use a site-specific busy-hour and 95th-percentile traffic study. Do not promise fixed speed per user without verified CIR.

## Bill of materials (quantity/site estimates; brands not selected)
- 1 legally authorized satellite/business backhaul terminal and mounting kit (model after quotation)
- 1 router/firewall with separate admin/guest/IoT network segments
- 1 managed PoE switch sized for expected APs
- 2–4 outdoor-rated Wi-Fi APs after coverage survey; weatherproof cabling and enclosures
- 1 UPS or battery-backed supply; solar optional after watt-hour design
- Surge protection, protective earthing, conduit, fixtures, ladders and fall-protection equipment
- Local learning server/cache with encrypted admin access and routine backup
- Asset labels, spares, approved monitoring and documentation
No remote radio installation should violate local spectrum limits, structural rules or installer safety requirements.

## Timeline / dependencies
Weeks 1–2: regulatory screening, ownership permission, provider RFQs, site surveys.
Weeks 3–4: quotes, engineering layout, budget/funding gate.
Weeks 5–6: procurement **only if licensed/approved**, pre-configuration and local network QA.
Weeks 7–8: install and 7–14 day controlled connectivity benchmark.
Weeks 9–10: stakeholder review and budget/operations reconciliation.
Dates are targets, not booked appointments.

## Quality acceptance (sample targets subject to contracts)
- Local portal available without satellite backhaul.
- Guest network cannot reach infrastructure admin network.
- Network monitoring records uptime, latency, packet loss and traffic aggregate.
- Scheduled backup and documented recovery drill succeed.
- Written legal and reseller authorization before any paying public subscribers.
- User-facing outages/support and termination policies tested.

## Financial model
Capital expenditure = terminal + install + router/AP/switch + power + travel + customs/tax.
Monthly operating expenditure = bandwidth + site rent + electricity + insurance + staff + support + replacements + regulatory.
Compare 12/24/36 month TCO per site; add 15–25% contingency as a planning assumption; no vendor prices are quoted here.
