# SILVEROAK Global Satellite Network V4.0 — Master Devlopman

Status: design specification, not connected/deployed. Country pilots: San Pedro de Macorís (Dominican Republic) and Jacmel (Haiti). Reuse existing TELECOM_WIFI and shared CRM, RevenueOS, RBAC, approval, audit and AI orchestration. Do not duplicate systems.

## Features
Provider commercial eligibility and RFQ; GIS coverage and site registry; regional PoPs; satellite uplinks plus Wi-Fi/fiber access; offline education; security and privacy; network operations center; signed inventory and maintenance; solar/battery engineering; dual-uplink failover; customer support; billing via existing RevenueOS; human-approved AI operations; regulated reseller compliance; transport/mobile endpoints only where authorized.

## Rollout gates
G0 examine existing source artifacts and perform content/dedupe review; G1 verify operator country service and redistribution contracts, Haiti CONATEL and Dominican INDOTEL legal authorization; G2 conduct two site surveys and obtain vendor quotes/BoMs; G3 secure lab and test failover/energy; G4 legally authorized small pilot and telemetry; G5 prove costs and governance; G6 phase regional replication; G7 national feasibility study and financing.

## Providers for evaluation (not partners)
Starlink, Eutelsat OneWeb, SES O3b mPOWER, Viasat, Hughes/EchoStar, Amazon Leo. Record for each: country commercial availability, resale/community permission, terminal equipment approval, CIR/MIR, latency, SLA, traffic shaping, actual prices and term, equipment, taxes, shipping, local support, outage remedy, data cap and cancellation. Zero provider status should be marked connected until verified.

## Data entities — planning only
Organizations, countries, provider_contracts, sites, equipment, uplinks, access_networks, service_plans, compliance_reviews, measurements, outages, work_orders, subscribers through shared CRM, approvals and audit_events. Server-side tenant authorization and encryption mandatory. Existing PostgreSQL status unverified; do not run migrations or use real subscriber data without prerequisites.

## Safety and legal references
CONATEL: equipment homologation is not a service network operating license (https://conatel.gouv.ht/node/513). Dominican government: special register includes resale and satellite-carrier activities (https://www.gob.do/servicios/inscripcion-en-registro-especial). Detailed local legal advice and operator permissions still required.

## Acceptance
No public service until written authorization, signed supplier terms allowing the use case, electrical and RF safety review, tested network security, user privacy/consent and transparent billing; no implied national coverage or free Internet from GPS positioning.

## File package
The associated local ZIP deliverable contains a more extensive README, six-provider RFI register, pilot checklist and SHA-256 manifest. It is an architecture backup, **not** a backup of all source files or a deployed system.
