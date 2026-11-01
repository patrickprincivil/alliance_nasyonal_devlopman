# Silveroak Global Satellite Broadcasting — phased delivery and procurement plan

Parent system: MASTER DEVLOPMAN → Global Communications → Broadcasting. Reuse existing telecom infrastructure, media production, AI, CRM, billing, approval and audit; no second standalone platform.

## Architecture
Cameras and microphones → studio computer / production switcher → encoder / OBS → streaming platform or contracted CDN → approved web/mobile/TV viewers.

Later, only after an engineering design and appropriate permits:
Master Control and program rights system → licensed DVB-compatible encoder/multiplexer/modulator → authorized satellite uplink service → leased broadcasting satellite capacity → compatible authorized downlink receivers → distribution partners.

**An internet satellite terminal (e.g. Starlink) is not a licensed television uplink.** A satellite relay and uplink are contracted/regulatory infrastructure; do not fabricate, transmit or occupy frequencies without permits.

## Release 1: one small Pétion-Ville studio (weeks 1–4)
- Inventory existing laptop/phone/cameras/internet and power availability. Test local capture and two audio channels.
- Install trusted OBS Studio software; keep an offline recording path independent of internet.
- Produce 3–5 pilot episodes, recorded rather than live, with consent and content rights documented.
- Build a basic programme grid, languages (HT/FR/EN/ES), review/approval and backup files.
- Acceptance: repeatable 30-minute recording with intelligible audio, safe backup and documented ownership of music/video.

## Release 2: live digital broadcasting (weeks 5–8)
- Test reliable uplink speeds, packet loss, primary/failover connectivity and electricity outage recovery.
- Trial live stream on a permitted third-party platform using test audience.
- Add automated or human-assisted captions with review of translations and corrections.
- Acceptance: one-hour reliable monitored test live stream; switching and recording backup validated.

## Release 3: public digital channel and basic analytics (weeks 9–12)
- Publish programme schedule, privacy and editorial corrections policies.
- Add appropriate publishing approvals, publishing rights checks, access controls and basic streaming analytics.
- Run a low-volume launch; log uptime, incidents, audience complaints and operating costs.
- Acceptance: operator runbook, recovery procedure and recurring costs documented.

## Release 4: IPTV / smart TV / mobile
- Define content rights per territory and distribution channel. Determine whether licensing/registration applies.
- Use existing Silveroak app development modules. No commercial IPTV promise until rights, operations and delivery costs are verified.

## Release 5: satellite broadcasting feasibility
- Request proposals from authorized satellite broadcast distributors, teleport/uplink service providers and capacity aggregators.
- RF design by qualified engineer. Compare managed uplink versus owned ground station: satellite footprint, EIRP, modulation, symbol rates, FEC, availability, SLA, redundancy, encryption and receivers.
- Confirm with relevant Haitian and Dominican authorities licensing of broadcast programme service, teleport, transmission, downlink and terrestrial distribution as applicable.
- Do not buy BUC/HPA/dishes before selecting licensed provider, frequency plan and service agreement.

## Equipment budget (USD only, non-binding planning ranges)
| Item | Low | High |
|---|---:|---:|
| Production computer (reuse existing at low end) | 0 | 900 |
| Two 1080p cameras/webcams | 100 | 400 |
| Audio and two microphones | 80 | 250 |
| Lights and tripods | 80 | 220 |
| Video switch / capture (software-only to optional hardware) | 0 | 445 |
| Storage and cables | 70 | 180 |
| Backup power | 200 | 850 |
| Router / internet setup | 40 | 200 |
| **Total (planning only)** | **570** | **3,445** |

Add a 10–20% contingency, plus shipping/import taxes, electricity and service subscriptions, staff, premises, licences, and professional fees. No claim that all items are currently available locally.

**Observed reference prices (30 October 2026):** Blackmagic Design lists ATEM Mini Pro at USD 445. Elgato Facecam Neo official MSRP shown as USD 59.99 on comparison page; actual listings/stock vary. OBS software is free/open source. Sources:
- https://www.blackmagicdesign.com/products/atemmini
- https://www.elgato.com/us/en/explorer/products/camera/difference-between-facecam-4k-and-facecam-neo/
- https://obsproject.com/help/

## Editorial, security and rights gates
- Document rights, consent, music licences, logos, recordings and privacy retention.
- A human editor approves political reporting, emergency messages, medical information and AI-generated scripts before broadcast.
- Do not relay other broadcasters' copyrighted feeds without authorization.
- Keep production/studio networking separate from accounting and client data; rotate credentials, require MFA, test restoration.
- Define how to retract, correct, watermark or label AI-manipulated media.
- Record the owners and operators responsible for the emergency shutdown and disaster recovery plan.

## Regulatory gate
The Dominican government lists television/radio broadcasting, cable distribution and internet access among telecom concession categories; confirm the correct INDOTEL requirements per technology, entity and service.
For Haiti, obtain written guidance from CONATEL on the proposed audiovisual programme and RF/uplink operations, plus any other relevant media authorities. This is a compliance checklist, not a licence approval.

## Clear statuses
Planned: all 8 phases and listed infrastructure until tested.
Implemented in repo: a read-only planning page and equipment budget.
Not implemented: real live streams, subscriptions, CDN integrations, user accounts, satellites, teleports, licensed broadcast transmission, physical studios, actual channel distribution.
