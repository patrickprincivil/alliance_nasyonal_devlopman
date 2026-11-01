# SATELLITE NETWORK — Legal, safety & Master Devlopman integration V3
## Architecture
MASTER_DEVLOPMAN / TELECOM_WIFI / GLOBAL_SATELLITE_NETWORK
- Operators and authorized resellers (not yet selected)
- DR and Haiti feasibility, hubs and sites (proposed)
- RFQ/commercial/legal files and decision approvals
- Site inventory, equipment, power, coverage/propagation, subscriber policy
- NOC monitoring and incident response
- Financial TCO and consent-respecting reporting

Reuse common services: master projects, CRM, identity/RBAC, approvals, audit events, document vault, cost tracking and backup. Do **not** create a parallel CRM, payments or users service.

## Regulatory gates
Haiti: request CONATEL guidance for resale, internet services, satellite terminal approvals, radio/frequencies, imports and tower authorizations.
Dominican Republic: request INDOTEL guidance for concessions/registrations, reventa, satellite landing/terminal, local radio use, consumer protection and equipment homologation.
The exact authorization depends on the commercial arrangement; neither a consumer terminal nor satellite footprint establishes ISP resale rights. Seek current local counsel and official written positions before sales.

## Technical minimum
Site-to-site VPN for management only; MFA on admin systems; VLAN isolation for guest, devices and operations; encryption at rest for subscriber records; network logs with retention controls; rate limits, routine patching, physical access and battery/fire safety; privacy policy and incident runbook.

## Expansion sequencing
P0: license/operator feasibility; P1: two controlled pilot demonstrations; P2: rural schools/clinics/farms where justified; P3: 10 community sites; P4: multi-regional backbone only after measured revenue, funding, reliable logistics and regulator clearance.

## Truth labels
Planned = architecture only. Under evaluation = survey/quote started. Permitted = written authority documented. Pilot live = commissioned and verified at specific site. Operational = monitored service with paid support, security and permissions.
Never mark a provider partner or national hub as active without signed evidence.
