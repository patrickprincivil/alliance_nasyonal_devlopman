# Silveroak Satellite Network — pilot execution gates

Parent: MASTER_DEVLOPMAN → TELECOM_WIFI → GLOBAL SATELLITE NETWORK.

**Reuse** Library source: `/MASTER_DEVLOPMAN/TELECOM_WIFI/SILVEROAK_SATELLITE_NETWORK_V4_COMPLETE.md`. Additional V3.1/V3.2 execution bundles are stored at `/MASTER_DEVLOPMAN/TELECOM_WIFI/GLOBAL_SATELLITE_NETWORK/`. This file is an implementation gate checklist, not a duplicate architecture or working ISP.

## Two-site pilot
- **DR:** Los Llanos / San Pedro de Macorís. Host, exact location, power, survey and contracting entity: unverified.
- **Haiti:** Jacmel / Morne-à-Brûlé. Site, physical security, electrical works and access: unverified.
- Do not expose site addresses, CCTV feeds or personal information on public dashboards.

## RFQ tracker (no vendor contracts implied)
| Vendor | Country/service authorization | Redistribution allowed in writing | Wholesale Mbps / monthly quote | Hardware + install quote | SLA | State |
|---|---|---|---|---|---|---|
| Starlink | Pending | Pending | Pending | Pending | Pending | Inquiry needed |
| Eutelsat / OneWeb | Pending | Pending | Pending | Pending | Pending | Inquiry needed |
| SES / O3b mPOWER | Pending | Pending | Pending | Pending | Pending | Inquiry needed |
| Hughes / EchoStar | Pending | Pending | Pending | Pending | Pending | Comparison |
| Viasat | Pending | Pending | Pending | Pending | Pending | Comparison |
| Amazon Leo | Pending | Pending | Pending | Pending | Pending | Watch |

## Procurement decision: GO only after all are true
- [ ] Written provider authorization for proposed redistribution/use and service at the pilot location.
- [ ] Country telecom regulator's written classification and relevant license/registration.
- [ ] Itemized 36-month total cost, service data policy, SLA, import, customs and tax.
- [ ] RF and electrical design signed off by qualified professionals.
- [ ] Network segmentation for guest, staff, cameras and management with privacy controls.
- [ ] Tested captive portal/customer notices, service throttling and fair use.
- [ ] Documented support, outage response, backups, spare parts and operator training.
- [ ] Human approval for purchase order, contract, public Wi-Fi operation and expansion.

## Workstreams and owners (roles not assigned)
1. Commercial: send RFQ and score **written offers**, no invented quotes.
2. Regulatory: written advice from CONATEL and INDOTEL; evaluate separate DR/HT requirements.
3. Engineering: site survey, power load, line of sight for local distribution, capacity and weather.
4. Finance: real BOM, 36-month cash flows, currency volatility and contingency.
5. Security: site LAN, backups, data retention, CCTV consent and device patch management.
6. Software: reuse shared Silveroak auth, CRM, audit, grants and RevenueOS; only add telecom domain models when migration and CI verified.
7. Operations: run offline-first service test, measure 30-day uptime and incident logs before public expansion.

## Requested vendor response format
Quote ID; issue/expiry date; eligible country/coordinates; lawful use cases; customer/terminal license; minimum commitments; installation and equipment; CIR/MIR upload/download; capacity aggregation policy; prices and taxes; IPv4/IPv6; uptime/repair commitment; support coverage; termination terms; APIs and monitoring; subcontractors and import obligations; commercial contact.

No operator has been contacted, no regulatory application filed, and no equipment ordered by this file.
