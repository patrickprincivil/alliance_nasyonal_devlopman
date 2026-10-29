# Silveroak Global Satellite Network — Execution Gate Register V6
Date: 2026-10-29. Parent: MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK.
**Status: unapproved planning, not a deployed or licensed network.**

## Canonical sources — reuse, never duplicate
- Library: SILVEROAK_SATELLITE_NETWORK_V5_OPERATIONAL_MASTER_2026-10-20.md
- GitHub: docs/SILVEROAK_SATELLITE_OPERATOR_RFP_V3.md
- GitHub: docs/SILVEROAK_SATELLITE_PROVIDER_MATRIX_V3.md
- GitHub: docs/SILVEROAK_SATELLITE_TWO_PILOTS_V3.md
- GitHub: docs/SILVEROAK_SATELLITE_REGULATORY_AND_MASTER_INTEGRATION_V3.md
This register tracks decisions and evidence; it supersedes no source content.

## Decisions and acceptance evidence
| ID | Gate | Required evidence | Status |
|---|---|---|---|
| SAT-01 | Provider feasibility | Written location-specific product availability for both countries | NOT VERIFIED |
| SAT-02 | Resale rights | Written redistribution and community-Wi-Fi rights in relevant agreement | NOT VERIFIED |
| SAT-03 | Haiti regulatory | CONATEL classification, licensing and equipment authorization in writing | NOT VERIFIED |
| SAT-04 | Dominican regulatory | INDOTEL classification, licensing and equipment authorization in writing | NOT VERIFIED |
| SAT-05 | Physical sites | Permission, roof structure/grounding, RF survey and installation access | NOT VERIFIED |
| SAT-06 | Full budget | Quotes for equipment, duty, shipping, installation, recurring fees and backup power | NOT VERIFIED |
| SAT-07 | Network design | Capacity estimates, per-client contention, VLANs, monitoring and failover | NOT VERIFIED |
| SAT-08 | Privacy & cybersecurity | Consent/data retention, firewall, segmentation, patching, incident playbook | NOT VERIFIED |
| SAT-09 | Pilot authority | Risk review, funding commitment and human GO/NO-GO approval | NOT APPROVED |
| SAT-10 | Field tests | 7-day measured uptime, latency, load, failover, electrical resilience | NOT STARTED |

## Pilot DR-001 — San Pedro de Macorís / Los Llanos
1. Get exact-site coverage/installation feasibility from providers.
2. Obtain INDOTEL guidance on whether a controlled closed demonstration, free access, sponsored access, or resale needs separate licensing.
3. Site-survey power quality and grounding; identify secure mounting points.
4. Quote one authorized enterprise backhaul and optional backup; **do not purchase until approved**.
5. Test local offline services before sharing any internet connection.
6. Configure guest isolation, bandwidth management, logging with limited retention, monitoring and emergency contact.

## Pilot HT-001 — Jacmel / Morne-à-Brûlé
1. Confirm site permission, physical access and travel safety.
2. Check applicable CONATEL authorizations and provider license/contract status.
3. Independently assess power, lightning/grounding, load and network security.
4. Pilot local-only offline network first; scale only on written approvals.

## Conceptual materials — quantity and cost to be established by survey
- Approved satellite terminal and mounting kit
- Secure enterprise router/firewall, managed PoE switch
- Outdoor-rated Wi-Fi access points, directional bridges *only where justified*
- Protected Ethernet/fiber runs, enclosure and environmental protection
- Proper grounding, surge/lightning protection designed by qualified installer
- UPS / solar-battery/inverter sized to measured power consumption
- Monitoring gateway, spare cables/connectors and test laptop
- Consent signage, equipment register, install QA form and service documents

## Procurement scorecard (100 points)
Written redistribution rights 25; country service/legal eligibility 20; 36-month total cost 20; capacity/latency 15; support/SLA 10; equipment/power/installation 10.
**Hard stop:** if regulatory or contract permissions are missing, provider remains NO-GO regardless of score.

## Communications
Send the existing RFP template to vendor commercial channels only after confirming the authorized recipient/contact. Ask for a written quote and do not imply an established partnership. All vendor outreach, orders, public pricing and signing require approval.

## Engineering limits
Satellite coverage ≠ Wi-Fi coverage. GPS receiver functions do not require internet; FTA broadcasting needs the correct dish/receiver and applicable rights. A residential subscription is not blanket authority for redistribution. No satellite terminal, tower, countrywide hub, or 50/100/250 Mbps performance is confirmed.

## Operational ownership
Master Control Center: approval, financial gates, audit.
TELECOM_WIFI: coverage, equipment, RF engineering and compliance.
Shared RevenueOS: authorized billing, not a second payment service.
AI Factory: analysis/recommendations only until controls and approvals are implemented.
