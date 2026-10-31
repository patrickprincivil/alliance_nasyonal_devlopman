# SILVEROAK SMART NAVIGATION — Malaysia Waze / TuJu case study
Date: 21 October 2026
Parent: MASTER DEVLOPMAN → Mobility & Infrastructure → Smart Navigation & Traffic Management.
Status: verified news context + proposed architecture only. No deployed routing system or navigation provider agreement.

## Source facts and qualifications
- Malaysian civil servants were instructed to stop using Waze immediately under a government letter dated **20 October 2026**, reported on 21 October 2026.
- Prime Minister Anwar Ibrahim raised data and national security concerns and encouraged the Malaysian alternative **TuJu**.
- Reuters reported that the Prime Minister **did not provide technical details supporting the claimed security risk**. The government concern is not independent proof that Waze shared location data with any foreign government.
- TuJu was developed by the Malaysian Highway Authority with Prosignal Consortium and launched in November 2025, according to Bernama; reported features include routes, ETA, tolls, traffic, CCTV and emergency help.
Sources:
https://www.reuters.com/world/asia-pacific/malaysia-bans-civil-servants-using-mapping-app-waze-citing-links-israel-2026-10-21/
https://web26.bernama.com/en/news.php?id=2623504

## Existing-module integration — NOT another independent platform
Use MASTER DEVLOPMAN shared identity, permissions, audit, database, notifications, and the Mobility/Transport modules for:
- **Offline-aware maps and routing:** licensed OpenStreetMap-based tiles/data, updates, and route engine evaluation.
- **Public transit:** bus stops, schedules and route quality; distinguish planned routes from confirmed public service.
- **Logistics:** fleet routing and travel-time estimates with human dispatch review.
- **Emergency mobility:** assistance to accredited responders; never claim emergency-grade reliability without field validation.
- **Traffic data:** aggregate congestion and crowd reports, validated before publishing.
- **Privacy Center:** purpose-specific location permission, minimized coordinate precision, strict TTL, encryption, user deletion/export, no unapproved tracking.
- **Government mode:** stronger data controls and independent security review where authorized.

## MVP pilot proposal
1. Select one limited rural road corridor in Dominican Republic; perform licensing and mapping data-quality review.
2. Read-only mobile map; allow optional on-device GPS and offline cached tiles.
3. Display community-reported road issues only after moderation, with timestamps and confidence.
4. Test battery use, weak signal, map completeness, and routing failures; retain human fallback.
5. Expand to buses and logistics only after authorization, safety review, and reliable validation.

## Acceptance and security gates
- No secret route tracking, covert surveillance or storage of exact historical location by default.
- Document OSM contributor attribution and applicable ODbL conditions; verify tiles, geocoding and routing providers' usage policies.
- Signed software updates, authentication for editing, abuse/rate limits, incident response and backup.
- Emergency routing is informational until agreements, tests and qualified safety review establish suitability.
- Do not equate local hosting with proven digital sovereignty without full data-flow and jurisdiction audit.
