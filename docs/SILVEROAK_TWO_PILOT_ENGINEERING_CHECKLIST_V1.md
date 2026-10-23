# Silveroak DR + Haiti — pilot field checklist
Statuses are initially **NOT STARTED**. This is a reusable commissioning/QA worksheet; no site survey performed.

## Per-location survey record
Pilot ID, country, locality, GPS from authorized site owner, property consent, roof height, obstructions and photographs, grid reliability, cellular/fiber alternatives, protected equipment enclosure, outdoor cable distance, grounding, theft/storm exposure, nearby schools/clinics/farms (without storing beneficiary sensitive records), capacity estimate, authority/operator approvals.

## Proposed high-level BOM (quantities provisional per pilot)
- 1 licensed enterprise-appropriate satellite/fiber access terminal + mounting, approved surge protection.
- 1 managed dual-WAN router/firewall, optionally 1 PoE switch.
- 1–3 outdoor/indoor access points as justified by RF survey; sector directional devices only when licensed/appropriate.
- 1–2 UPS units plus optional engineered solar battery package; grounded enclosure and labeling.
- Cat6/outdoor-rated cable, conduit, grounding equipment, brackets and safety signage.
- 1 local offline content server or NAS **optional**, encrypted, with rights-cleared educational materials.
- Remote observability agent (no privileged cloud access without approvals).
- Spares and tools: cable tester, spare PoE injector, waterproof connectors, surge arrestors and personal protective equipment.

## Engineering calculations REQUIRED BEFORE PROCUREMENT
Peak simultaneous users × demand Mbps/user × oversubscription factor and business SLA; include protocol overhead and data caps. Power Wh/day = average watts × hours; battery usable Wh >= critical watts × desired backup hours / efficiency; confirm battery chemistry, charge controller and licensed installer. Wireless coverage based on site survey and interference; never assume line of sight or fixed kilometer reach.

## Acceptance matrix
1. Regulatory classification/written authorization — required.
2. Commercial redistribution rights — required for shared paid service.
3. Site power and structural/electrical safety approvals — required.
4. WAN and backup/UPS commissioning tests — required.
5. Security segmentation, MFA and privacy notice — required.
6. 7-day and 30-day uptime performance tracking — required before replication.
7. Community benefit, maintenance owner, incident contacts, support budget — required.
