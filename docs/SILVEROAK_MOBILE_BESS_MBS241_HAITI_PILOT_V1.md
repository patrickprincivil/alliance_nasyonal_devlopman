# SILVEROAK MASTER DEVLOPMAN — Mobile BESS MBS241 Pilot V1

**Status: concept / engineering feasibility only. No equipment purchased, permits approved or electrical installation commissioned.**
Parent: MASTER DEVLOPMAN → AGRICULTURE_ENERGY → Energy & Power Systems → Mobile BESS.
Pilot locations under consideration: Haiti (Jacmel region) and Dominican Republic (San Pedro de Macorís).

## Manufacturer facts to verify with signed quotation
- Polinovel MBS241 nominal battery energy: 241 kWh.
- Advertised AC power conversion system: 125 kW; DC output: 120 kW.
- Advertised AC input: 380 V; AC sockets: 220 V and 380 V; operating environment and mobile trailer require site checks.
- Confirm **60 Hz and 120/240 V compatibility** (manufacturer page specifies 380 V input, so direct household connection must NOT be assumed).
- Confirm AC island-mode output rating, phase balance, surge current, transfer behavior, integration protocol, solar input compatibility, neutral/ground scheme, fire-system certification, and warranty.
- Independent engineer must assess local installation, code, weather, seismic/hurricane hazards and transport requirements.

Manufacturer reference: https://www.polinovelbess.com/mobile-bess/241kwh-120kw-mobile-energy-storage-system.html

## Preliminary pilot single-line block diagram (NOT installation drawings)

Solar PV array → PV combiner + listed DC isolators/protection → compatible PV inverter/PCS → engineered AC bus / switchgear
Grid or generator → protected transfer system → engineered AC bus
MBS241 ↔ manufacturer-approved interconnection / switchgear ↔ engineered AC bus → metered critical-load panel

EMS/BMS/monitoring controls battery limits and emergency shutdown; protective devices, isolation and interlocks need stamped engineering review.
No backfeeding the grid, improvised neutral bonding, bypassing BMS, or connecting battery DC to third-party equipment without written manufacturer approval.

## Illustrative engineering energy model
Usable AC energy planning factor 85% (assumption, not guaranteed) = 241 × 0.85 = 204.85 kWh.
- 10 kW average load: 20.5 hours (before site derating).
- 20 kW: 10.2 hours.
- 50 kW: 4.1 hours.
To replace 205 kWh/day with 4.5 equivalent full-sun hours and 80% PV conversion/availability, minimum theoretical PV is ~57 kWp. Design allowance could start at 65–80 kWp, then validate using hourly weather/load simulation, seasonality, recharge time, and site space. This is not a vendor-certified PV sizing.

## Equipment and procurement register
1. Mobile MBS241 trailer unit, certified fire protection, BMS, EMS, service support.
2. 65–80 kWp solar modules and mounting (option, conditional on feasibility).
3. Manufacturer-approved PV inverters, switchgear, synchronisation/islanding and voltage conversion if needed.
4. Critical-load panel, circuit protection, grounding, surge protection, meters and disconnects.
5. Site works: pad, drainage, fencing, canopy/thermal protection, fire setbacks, security, access road.
6. Internet/telemetry monitoring, network segmentation, local-only emergency controls.
7. Logistics: ocean freight, customs, hazardous cargo declarations, trailer registration/transport.
8. Engineering, commissioning, staff training, spare parts, inspections, insurance.
9. Backup grid/generator strategy for cloudy days and extended outages.

## Budget framework — no verified vendor prices
Total installed cost (USD) =
BESS supplier price
+ PV system price (optional)
+ inverter/switchgear/transformer price
+ civil/site works
+ freight and insurance
+ import taxes and fees
+ engineering, inspection, testing
+ contingencies
+ first-year maintenance and internet fees.

Do not quote a single USD figure until manufacturer and EPC bids are received. Request distinct offers for BESS-only and solar-hybrid configurations, DDP and FOB, and operating expense estimates.

## Vendor RFQ questions
- Exact model/version; datasheet; electrical drawings; SOC and temperature derating.
- 60 Hz / 120-240 V transformer and low voltage transformer / output arrangements.
- Usable AC kWh guarantee and maximum continuous AC power under island mode.
- PV connection methods; protections; compatible brands and charge pathways.
- UN38.3 transportation report and applicable IEC/UL product/installation safety evidence.
- Warranty term, throughput/cycles, replacement conditions, service and spare parts.
- Fire detection/suppression documents, emergency-stop behavior, ventilation and environmental rating.
- Total FOB, freight to Haiti/DR, shipment insurance, lead time and onsite commissioning.
- Local EPC installer qualifications, training, parts supply, warranty support.
- Written permissions for commercial/public network use and any applicable registration.

## Acceptance gates
G0: loads and site surveyed; load profile and islanding performance specified.
G1: written BESS/solar/transformer quotes and compliance documents evaluated.
G2: engineer-stamped architecture, authority/utility permissions, fire review.
G3: factory acceptance test (FAT) and delivery inspection.
G4: installation, commissioning, emergency-stop drill and witness testing.
G5: monitoring, backup/restore, maintenance handbook and local staff training.

**No work in this document authorizes procurement or electrical installation.**
