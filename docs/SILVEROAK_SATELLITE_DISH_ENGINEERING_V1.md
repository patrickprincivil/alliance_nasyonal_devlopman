# Silveroak Global Satellite Network — Dish Engineering & Pilot V1
Status: conceptual engineering planning, not installed, licensed, tested or purchased.
Parent: MASTER DEVLOPMAN → TELECOM_WIFI → GLOBAL SATELLITE NETWORK.
Countries: Haiti and Dominican Republic. Reuse centralized network operations, assets, CRM, billing, solar and human approvals.

## Two different systems — do not interchange parts
**Receive-only satellite TV:** parabolic reflector, certified LNB, mounting kit, 75-ohm coax, grounding block, F-connectors, compatible authorized TV receiver, HDMI and display. An LNB cannot provide satellite internet, nor transmit internet data.
**Two-way satellite internet:** provider-approved bidirectional terminal (integrated antenna/transceiver as required), provider power supply, authorized service plan, Ethernet/router interface, firewall, Wi-Fi, surge/earth system, reliable backup power. Terminal shape and pointing requirements depend on operator; do not retrofit a TV dish.

## Engineering bill of materials — pilot quantities (planning assumptions)
| ID | Item | Satellite TV proof-of-concept | Internet pilot | Engineering note |
|---|---|---:|---:|---|
| TV01 | Dish reflector and brackets | 1 | 0 | Select for licensed receive-only broadcast band |
| TV02 | LNB + feed assembly | 1 | 0 | LNB compatible with receiver and satellite |
| TV03 | 75-ohm outdoor coax, connectors | As measured | 0 | Weatherproof and avoid sharp bends |
| TV04 | DVB-compatible receiver + HDMI | 1 | 0 | Free-to-air reception only as legally permitted |
| NET01 | Operator-approved internet terminal | 0 | 1 | Includes Tx/Rx equipment as specified |
| NET02 | Operator subscription/permission | 0 | 1 | Check redistribution rights before sharing WAN |
| NET03 | Firewall/router | 0 | 1 | Guest isolation and managed rules |
| NET04 | Managed gigabit PoE switch | 0 | 1 | Size by access point/camera count |
| NET05 | Outdoor rated access points | 0 | 1–2 | Coverage depends on site RF survey |
| NET06 | Point-to-point/backhaul radios | 0 | Optional | Only with approved spectrum rules |
| PWR01 | PV panels, controller, battery | Optional | Sizing required | Engineer from measured load and autonomy |
| PWR02 | Breakers, disconnects, earthing, surge | Required | Required | Follow local electrical and lightning codes |
| CIV01 | Wind-rated mast, anchors, foundation | 1 | As required | Licensed structural review for rooftop/tower |
| OPS01 | UPS, monitoring and documentation | Optional | 1 | Record uptime, heat, signal and network use |

## Solar sizing: calculation method
Daily energy Wh = sum of (equipment watts × operating hours) + estimated conversion losses.
Usable battery Wh = daily load during non-solar hours ÷ power-path efficiency.
PV watts ≈ daily energy Wh ÷ (design peak-sun-hours × system derating).
Use local measured loads, site shade and climate; include safety margins and professional electrical protection. No exact battery/panel sizing can be justified without equipment specifications.

## Two-country pilot topology (separate physical WAN sites)
Operator-approved terminal at each authorized site → router/firewall → managed PoE switch → segmented guest Wi-Fi, operations network and monitoring VLANs → approved local clients.
Each location needs its own backhaul and local distribution engineering. Satellite geographic coverage is not the same as household availability.

Pilot A: San Pedro de Macorís, Dominican Republic: site survey, permit/operator check, power budget, one approved terminal, firewall and single approved AP; test stability, capacity, security and uptime.
Pilot B: Jacmel / Morne-à-Brûlé, Haiti: site feasibility and security assessment first, solar feasibility, licensed terminal/plan and offline education pilot.
Both are proposed, not established sites.

## Acceptance and safety gates
1. Verify CONATEL / INDOTEL licensing and redistribution rights for exact business model.
2. Verify site/landlord permissions and RF clear sky exposure; account for hurricane winds and lightning.
3. Select certified terminal, mast, approved solar components and cable specs based on local conditions.
4. Test grounding/surge, electrical isolation, weather sealing and safe rooftop work by qualified personnel.
5. Verify actual throughput, latency, data cap/priority, VPN, firewall policy, guest isolation and outage handling.
6. No transmission with uncertified homemade RF hardware; no customer billing until legal and contractual permission is established.
7. No operator, equipment contract, deployed hub or current provider quotation is claimed.

## Delivery artifacts
Site survey checklist, official provider quote, regulator determination, RF/topology diagram, load calculation, purchasing BOM and inspection/maintenance log.
