# SILVEROAK GLOBAL SATELLITE NETWORK — MASTER DEVLOPMAN INDEX
Version: V4.1 consolidation index | Updated: 2026-11-01
Parent: MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL SATELLITE NETWORK
Status: CONCEPT + RFI PREPARATION + REGULATORY REVIEW. No provider contract, license, quote, funding approval, procurement, or deployed pilot is confirmed.

## Single-source structure
This index is the navigation and governance entry for the satellite program. Reuse the existing project artifacts below; do not copy their contents into duplicate documents.

- `docs/SILVEROAK_SATELLITE_PROVIDER_MATRIX_V3.md` — operator comparison and weighted procurement criteria.
- `docs/SILVEROAK_SATELLITE_RFI_TEMPLATE_V3.md` — provider request-for-information questions and templates.
- `docs/SILVEROAK_SATELLITE_PILOT_V3.md` — two-site pilot scope and acceptance criteria.
- `docs/SILVEROAK_SATELLITE_NETWORK_V3_OPERATIONS_2026-10-23.md` — operating gates and next actions.
- Library canonical engineering proposal: `SILVEROAK_SATELLITE_NETWORK_V4_COMPLETE.md` (stored under MASTER_DEVLOPMAN/TELECOM_WIFI).

## Parent and modules
MASTER_DEVLOPMAN
└── TELECOM_WIFI
    └── GLOBAL SATELLITE NETWORK
        ├── Provider Management (Starlink, Eutelsat/OneWeb, SES, Hughes/EchoStar, Viasat, Amazon Leo)
        ├── Haiti Network (country-specific licensing, sites, finance, operations)
        ├── Dominican Republic Network (country-specific licensing, sites, finance, operations)
        ├── Regional Hubs and Community Nodes
        ├── Community Wi-Fi and Enterprise Network
        ├── Offline Digital Services
        ├── Power, Solar, UPS and Grounding
        ├── Network Security, Monitoring and Support
        ├── Billing, Contracts and Customer Care
        └── AI Network Operations (recommendations only until approved)

Reuse MASTER shared identity/RBAC, audit, CRM, RevenueOS, procurement, document vault and human approval. Do not create a second billing, customer or identity platform.

## Provider inquiry matrix
| Candidate | Proposed role to investigate | Must be proven in writing |
|---|---|---|
| Starlink / SpaceX | Site/pilot backhaul | Exact country/site orderability, correct business/Priority offer, redistribution permission, SLA, IP/support terms |
| Eutelsat / OneWeb | Enterprise or community Wi-Fi via authorized partner | Local channel, country rights, wholesale capacity, terminal, SLA, resale/community hotspot rights |
| SES / O3b mPOWER | High-capacity institutional/regional aggregation | Site engineering, throughput commitment, gateway/antenna, minimum spend, SLA and price |
| Hughes / EchoStar | Rural/community satellite solution | Hispaniola availability, authorized reseller model, performance, contract and price |
| Viasat | Enterprise/backup/mobility | Local availability, distributor, capacity, latency, equipment, support and terms |
| Amazon Leo | Future option only | Actual commercial launch/serviceability, country availability, local partner and regulation |

No candidate is represented as a signed partner or confirmed available service. Compare legal permission first; any unresolved legal blocker is NO-GO regardless of technical score.

## Pilot sites
1. **Dominican Republic:** San Pedro de Macorís / Los Llanos. Begin with a site survey and written property consent. Test one authorized uplink, firewall/dual-WAN router, managed switch, 1–3 access points as radio survey requires, isolated staff and guest VLANs, offline cache, UPS/surge/grounding and support process. Cameras only with appropriate notice, consent and access restrictions.
2. **Haiti:** Jacmel / Morne-à-Brûlé. Separate site access, safety, regulatory, import, power, funding and backhaul feasibility assessment. Do not assume cross-border connectivity from the Dominican pilot.

Each site has its own terminal/uplink unless a licensed carrier designs and approves another backhaul. A satellite beam does not provide Wi-Fi to every home; local access points, capacity, power and authorized distribution are required.

## Three service layers
- **Local offline network:** local library/cache, courses, LAN messaging, local services and permitted free-to-air reception. Offline GPS is positioning, not internet access.
- **Community internet:** only after operator contract expressly permits sharing/resale and regulator requirements are satisfied; sponsored access needs a funded operating budget.
- **Business/critical network:** managed service, priority support, segmentation, SLA, optional independently routed backup and documented support.

## Procurement and financial control
Before purchase, obtain site-specific bills of materials and written quotes. Calculate 36-month TCO: terminal and accessories + freight/customs/tax + installation + recurring backhaul + power/UPS/solar + networking + permits/legal + staffing/support + maintenance/insurance + replacement reserve. Historical USD 2,000–5,000 pilot figures are planning assumptions only, not validated quotes. No supplier selection based solely on marketing claims.

## Regulatory workstream
- **Haiti / CONATEL:** request written classification of private LAN versus public/shared or resold internet; terminal approval/homologation; frequency and equipment requirements; import and authorization/concession obligations.
- **Dominican Republic / INDOTEL:** request written determination for internet resale/redistribution, community hotspot/public access, special registration/concession, radio equipment, import/homologation and consumer obligations.
- Local counsel/regulatory professionals should confirm the exact requirements before any public service. Terminal approval is not automatically permission to operate a public telecom service. Consumer residential terms are not assumed to permit resale.

## Security and service design
- Separate staff/management, guest/public, IoT/camera and customer networks with firewall rules.
- Unique credentials, MFA for management, encrypted configuration backup, least privilege and audit logs.
- No public exposure of exact sensitive site/camera locations.
- Camera privacy notice, purpose limitation, retention schedule and restricted access.
- UPS, surge protection, grounding, safe mounting, lightning assessment and safe cable routes.
- Monitor availability, latency, packet loss, utilization, power, tickets and security events.
- AI may recommend and draft work orders; routing/firewall changes, billing, procurement, public communications and service suspension require authorized human approval.

## 90-day gated plan
| Window | Deliverable | Exit gate |
|---|---|---|
| Days 1–15 | Inventory existing telecom library, site needs survey, provider RFIs | No duplicate module; written questions prepared |
| Days 16–30 | CONATEL/INDOTEL consultations, preliminary quotes, feasibility | Written legal pathway and serviceability |
| Days 31–45 | Provider comparison, 36-month TCO, site design and risk review | Legal, technical and financial GO/NO-GO |
| Days 46–60 | Contract/funding/permissions and procurement approval | Signed rights, funds, purchase authorization |
| Days 61–75 | Install first pilot only if authorized | QA, security, power and acceptance tests |
| Days 76–90 | 30-day/available-period measurements, support review, report | Evidence-based decision to expand, redesign or stop |

This is a planning schedule, not a supplier or regulator commitment.

## Status register
Use only these statuses: CONCEPT → RFI_PREPARATION → REGULATORY_REVIEW → FUNDED → PILOT_APPROVED → IN_FIELD_TEST → VERIFIED. Every status change requires dated evidence and named approver. Current overall status remains CONCEPT / RFI_PREPARATION / REGULATORY_REVIEW.

## Next actions
1. Confirm whether the two pilot property owners permit a site survey (no exact sensitive coordinates in public documents).
2. Send provider RFIs independently to each authorized enterprise sales channel and request written country-specific responses.
3. Send separate written regulatory inquiries to CONATEL and INDOTEL.
4. Build a site-specific equipment/power BOM and 36-month TCO after responses.
5. Convene human GO/NO-GO review before any contract or purchase.
6. Run a single-site pilot; document measured results before adding the second site.
7. Only then develop replication plans for other provinces/departments.

## Non-claims
This document does not claim nationwide coverage, active hubs, installed terminals, signed partnerships, current provider availability, approved resale, confirmed tariffs, committed funding or government authorization.
