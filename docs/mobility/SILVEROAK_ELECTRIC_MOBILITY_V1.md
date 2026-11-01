# SILVEROAK ELECTRIC MOBILITY V1.0
## E-Crate 2500W reference-class prototype — project dossier

**Parent:** MASTER DEVLOPMAN → SILVEROAK AI FACTORY → GLOBAL ELECTRIC MOBILITY SYSTEMS  
**Initial markets:** Haiti and the Dominican Republic  
**Document status:** Engineering concept / pre-prototype. This document is not a certified design, production drawing, purchase specification, or road-use approval.

## 1. Purpose and product boundary

Develop a compact, heavy-duty electric minibike inspired by the supplied Electro Crate reference image. The first product is the **Silveroak E-Crate**. The 2,500 W figure is a proposed target only; the reference photograph does not verify motor rating, battery voltage, speed, range, load capacity, or compliance.

The first prototype must prioritize predictable handling, braking, structural integrity, electrical protection, serviceability, and parts availability—not maximum speed.

## 2. Unified placement — no duplicate platform

This project is a product line under the existing Master Devlopman. It reuses shared services rather than creating parallel systems:

- Master Control Center: project status, budget, approvals, risk register.
- Shared procurement/vendor register: suppliers, quotations, purchase orders.
- Shared finance/revenue services: costing, invoices, warranty reserves, fleet subscriptions.
- Shared identity, roles, audit logs, document storage, and cybersecurity.
- Shared AI Factory: engineering assistance, document extraction, diagnostics research, and maintenance analytics; AI recommendations do not replace qualified engineering approval.
- Shared Global Communication Network: optional GPS/IoT connectivity, where lawful and consented.

Canonical project key: `MOB-ECRATE-001`. Product family keys should be children of the same mobility division, not separate applications.

## 3. Product family

- Silveroak E-Crate — compact minibike prototype.
- Silveroak E-City — urban mobility.
- Silveroak E-Cargo — delivery and light commercial use.
- Silveroak E-Utility — farm and property use.
- Silveroak E-Tricycle — passenger or cargo three-wheeler.
- Silveroak E-Transport — larger passenger platform.
- Silveroak E-Offroad — off-road-only variant unless separately certified.
- Silveroak E-Fleet — fleet management and service package.

Do not reuse one frame, battery, brake, or controller specification across variants without engineering validation.

## 4. Vehicle system architecture

1. Main frame and structural members.
2. Steering head, handlebar, steering stops, and bearings.
3. Front suspension and wheel assembly.
4. Rear swingarm, pivot, shock absorber(s), and wheel assembly.
5. Tires, rims, hubs, axles, and bearings.
6. Motor and mounting structure.
7. Chain drive, sprockets, tensioning, and full chain guard.
8. Battery pack, enclosure, BMS, and service disconnect.
9. Motor controller and power electronics.
10. High-voltage traction wiring, fuse, contactor, and emergency isolation.
11. Low-voltage DC-DC supply and protected accessory circuits.
12. Front and rear hydraulic brakes, brake switches, and brake light.
13. Lighting, indicators, reflectors, horn, and plate lighting as required.
14. Dashboard, speed sensing, battery indication, and fault display.
15. Seat, footrests, guards, mudguards, and cargo fittings.
16. Security, immobilizer, optional GPS, and diagnostic interface.

## 5. Engineering requirements to establish before design freeze

The engineering team must define and approve the following before issuing fabrication drawings:

- Intended vehicle classification in each country (moped, motorcycle, off-road vehicle, or other category).
- Rider capacity and maximum gross vehicle mass.
- Payload and luggage limits.
- Target speed and acceleration envelope.
- Required gradeability and duty cycle.
- Target range under a documented test cycle.
- Wheel/tire dimensions and ground clearance.
- Wheelbase, steering geometry, suspension travel, and turning circle.
- Frame material grade, tube sizes, wall thicknesses, weld details, and corrosion protection.
- Brake performance, stopping distance, fade resistance, and parking behavior.
- Environmental rating for rain, dust, heat, vibration, and water ingress.
- Battery chemistry, cell traceability, pack energy, BMS limits, and approved charger.
- Electrical insulation, cable sizing, connector ratings, fuse coordination, and thermal limits.
- Service access, replaceable parts, maintenance intervals, and warranty assumptions.

No numerical value in this concept should be treated as a final engineering limit until calculations, component datasheets, and tests support it.

## 6. Powertrain design envelope

**Concept target:** brushless electric traction motor, nominal class approximately 2.5 kW, chain-driven rear wheel. Final motor voltage, continuous/peak power, torque curve, RPM, cooling, controller, and reduction ratio must be selected as one compatible system.

Required supplier data:
- Continuous and peak output ratings and duration.
- Torque-versus-speed curve.
- Maximum RPM and thermal limits.
- Controller model and firmware limits.
- Hall sensor/encoder and phase wiring specification.
- Motor mounting dimensions and shaft specification.
- Environmental protection rating and warranty.
- Applicable safety and electromagnetic compatibility documentation.

The controller must be configured within the motor, battery, tire, brake, and legal vehicle limits. A marketing power label is not sufficient evidence.

## 7. Battery and charging architecture

The battery is a professionally designed, protected pack—not a loose collection of cells.

Subsystems:
- Traceable, matched cells from a qualified supplier.
- Battery Management System with cell voltage, current, and temperature protection.
- Pack enclosure with mechanical protection and controlled ventilation/thermal design appropriate to the chemistry.
- Main fuse, contactor, pre-charge where required by the controller, and service disconnect.
- Correctly rated connectors, insulated busbars, and protected cable routing.
- Charge port with interlock/protection as required by the selected system.
- Charger approved for the exact pack chemistry and voltage.
- State-of-charge and fault reporting.

Candidate energy options for evaluation only: 60 V × 30 Ah (1.8 kWh), 60 V × 40 Ah (2.4 kWh), 72 V × 30 Ah (2.16 kWh), and 72 V × 40 Ah (2.88 kWh). These are arithmetic nominal-energy examples, not approved pack designs. Final choice depends on duty cycle, mass, thermal design, supplier certification, and regulatory requirements.

Do not fabricate or charge a prototype pack without a qualified battery engineer, documented cell specifications, a validated BMS, suitable fire precautions, and a safe test location. Do not bypass the BMS or fuse.

## 8. Mechanical design and fabrication

Frame and swingarm design require CAD, load cases, stress/fatigue assessment, weld procedure, dimensional inspection, and prototype testing by qualified personnel.

Required design outputs:
- 3D assembly model and 2D dimensioned drawings.
- Frame tube and plate schedule with material certificates.
- Weld map and approved welding procedure.
- Motor and battery mounting drawings.
- Steering-head and swingarm alignment datums.
- Suspension travel and tire-clearance checks.
- Fastener schedule, grades, torque specifications, and locking method.
- Corrosion protection and finish specification.
- Inspection plan and non-conformance procedure.

No frame should be fabricated for road use solely from a photograph or this conceptual parts list.

## 9. Brakes, controls, and rider safety

Use independently controlled front and rear braking systems selected by a qualified vehicle engineer. Validate brake sizing and performance against maximum gross mass, maximum intended speed, tire grip, gradients, and applicable standards.

Safety functions to evaluate:
- Brake-light activation.
- Motor torque inhibit when braking, where compatible with safe control behavior.
- Throttle plausibility and return-to-zero behavior.
- Emergency electrical isolation.
- Side-stand or parking interlock if appropriate.
- Steering stops and pinch-point protection.
- Chain and sprocket guarding.
- Battery enclosure retention and impact protection.
- Audible warning device, lighting, reflectors, and visibility.
- Clear labels, warnings, owner manual, and maintenance instructions.

Remote immobilization, if later included, must never abruptly disable a moving vehicle. Any remote disable function must be designed to prevent unsafe operation and require a safe stationary state.

## 10. Electrical architecture — conceptual only

Traction path:

`Battery pack → service disconnect / main protection → contactor and required pre-charge → motor controller → motor`

Accessory path:

`Protected battery supply → correctly rated DC-DC converter → fused low-voltage distribution → lights, horn, dashboard, indicators, and approved accessories`

The final schematic must show wire gauges, insulation ratings, current limits, fuse and contactor ratings, connector pinouts, grounding/bonding, isolation boundaries, routing, and test points. A qualified electrical engineer must approve it before energization.

## 11. Preliminary bill of materials (BOM)

| Group | Item | Qty / note | Status |
|---|---|---:|---|
| Structure | Main frame assembly | 1 | Design required |
| Structure | Swingarm and pivot hardware | 1 set | Design required |
| Structure | Seat support, footrests, rack, guards | 1 set | Design required |
| Suspension | Front fork assembly | 1 | Select after geometry |
| Suspension | Rear shock(s) | 1 or 2 | Calculate and select |
| Wheels | Front wheel, hub, bearings, axle | 1 | Select |
| Wheels | Rear wheel, hub, bearings, axle | 1 | Select |
| Tires | Compatible tires and rims | 2 | Size not yet selected |
| Drive | BLDC motor | 1 | Datasheet/selection pending |
| Drive | Compatible controller | 1 | Match motor and pack |
| Drive | Chain, sprockets, tensioner, guard | 1 set | Ratio/calculation pending |
| Energy | Battery pack and BMS | 1 | Qualified supplier required |
| Energy | Enclosure, fuse, contactor, disconnect | 1 set | Engineer selection |
| Energy | Approved charger and charge port | 1 set | Match exact battery |
| Brakes | Front hydraulic disc brake | 1 set | Engineer selection |
| Brakes | Rear hydraulic disc brake | 1 set | Engineer selection |
| Controls | Handlebar, grips, throttle, switches | 1 set | Select |
| Electrical | DC-DC converter and harness | 1 set | Load calculation pending |
| Lighting | Headlamp, tail/brake lamp, indicators, reflectors | 1 set | Legal spec pending |
| Display | Dashboard and sensors | 1 set | Software/interface pending |
| Body | Seat, mudguards, side panels | 1 set | Design required |
| Safety | Horn, emergency isolation, immobilizer | 1 set | Select/validate |
| Optional | GPS/telematics module | 1 | Later phase; privacy review |

The BOM is a sourcing checklist, not authorization to purchase. Obtain at least two supplier quotations for critical components and compare datasheets, certification, warranty, lead time, local service, and total landed cost.

## 12. Manufacturing and quality organization

1. Product and vehicle engineering.
2. Mechanical CAD and analysis.
3. Materials and supplier quality.
4. Frame fabrication and welding.
5. Machining and finishing.
6. Battery systems engineering (qualified specialist).
7. Electrical and controls engineering.
8. Powertrain integration.
9. Vehicle assembly.
10. Software and diagnostics.
11. Quality assurance and inspection.
12. Regulatory compliance and homologation.
13. Service, warranty, and spare parts.
14. Procurement, logistics, sales, and fleet operations.

Outsource specialist battery pack work, certification testing, and safety-critical analysis until Silveroak has qualified personnel and compliant facilities.

## 13. Prototype validation plan

Testing must proceed in controlled stages with documented acceptance criteria:

- Design review and independent engineering review.
- Material certificates and incoming inspection.
- Frame dimensional and weld inspection.
- Static load and structural assessment.
- Steering, suspension, and clearance checks.
- Electrical continuity, insulation, polarity, and protection checks.
- Battery/BMS/charger validation by qualified specialists.
- Low-speed controlled functional tests in a closed test area.
- Brake tests at staged speeds and loads.
- Thermal and duty-cycle tests.
- Water/dust ingress checks appropriate to the claimed rating.
- Vibration, fastener-retention, and durability checks.
- Range testing using a repeatable route/load protocol.
- Fault handling and emergency isolation tests.
- Post-test inspection and corrective-action records.

No public-road testing or sale until the relevant authority requirements, insurance, registration, and vehicle approval have been satisfied.

## 14. Haiti and Dominican Republic compliance workstream

Create separate legal compliance files for each country. Determine the exact classification and requirements with the competent transport, vehicle, standards, customs, and telecommunications authorities as applicable.

Verify:
- Vehicle type approval/homologation and registration.
- Import duties, customs classification, and battery transport rules.
- Lighting, braking, tire, noise, and equipment requirements.
- Driver age/licence and helmet requirements.
- Insurance and roadworthiness obligations.
- Local rules for electric motorcycles and speed/power categories.
- Battery shipping and end-of-life recycling obligations.
- Data protection and consent for GPS/fleet tracking.

Do not assume the same configuration is legal in both countries.

## 15. Software and connected services

Future optional services, integrated with existing Master Devlopman shared modules:
- Dashboard firmware and diagnostics.
- Maintenance log and service reminders.
- Fleet inventory and vehicle assignment.
- GPS fleet tracking with consent and role-based access.
- Battery health and charge history.
- Theft alerts and safe immobilizer logic.
- Spare-parts and warranty management.
- Solar charging station monitoring.

Do not create a separate CRM, billing platform, identity service, or analytics system for mobility. Reuse the shared Master Devlopman services.

## 16. Product development gates and status

| Gate | Deliverable | Status |
|---|---|---|
| G0 | Reference image review | Completed as concept review |
| G1 | Vehicle architecture | Defined at concept level |
| G2 | Requirements and legal classification | Not started |
| G3 | CAD frame and vehicle geometry | Not started |
| G4 | Structural calculations and design review | Not started |
| G5 | Motor/controller selection | Not started |
| G6 | Battery pack and charging design | Not started |
| G7 | Brake/suspension/steering calculations | Not started |
| G8 | Electrical schematics and harness drawings | Not started |
| G9 | Supplier qualification and quotations | Not started |
| G10 | Prototype fabrication and assembly | Not started |
| G11 | Controlled validation and safety testing | Not started |
| G12 | Compliance/homologation | Not started |
| G13 | Pilot production readiness | Not started |
| G14 | Commercial launch and after-sales support | Not started |

No physical prototype, certification, supplier contract, or production capability is claimed by this plan.

## 17. Stage-gated roadmap

**Stage A — Requirements:** establish use case, rider/payload, speed class, range target, environment, and country-specific classification.

**Stage B — Engineering:** create CAD, calculations, frame drawings, suspension/brake selection, powertrain compatibility matrix, battery architecture, and schematics.

**Stage C — Procurement readiness:** supplier due diligence, quotations, datasheet review, certifications, delivery, customs, warranty, and serviceability.

**Stage D — Prototype:** fabricate only after design review and safety sign-off; assemble under documented procedures.

**Stage E — Validation:** controlled testing, issue tracking, design changes, and independent review.

**Stage F — Approval and pilot:** complete country-specific compliance, insurance, service network, training, and limited pilot.

**Stage G — Production:** release only after repeatable quality controls, supplier controls, manuals, traceability, and after-sales support are in place.

## 18. Project risks and controls

| Risk | Control |
|---|---|
| Frame failure or poor handling | Qualified structural design, analysis, inspection, controlled testing |
| Brake underperformance | Engineer-sized brakes and staged stopping tests |
| Battery fire or electric shock | Certified components, qualified pack design, BMS, fuse, isolation, safe test facility |
| Mismatched motor/controller/battery | Verify datasheets and compatibility as a complete system |
| Parts unavailable locally | Standardize serviceable components and maintain spares |
| Tropical corrosion/water ingress | Materials/finishes, sealing design, environmental validation |
| Regulatory non-compliance | Country-specific classification and written authority guidance |
| Cost overruns | Supplier quotations, landed-cost model, approval gates |
| Unsafe remote control | No moving-vehicle remote shutdown; safety analysis |
| Data/privacy exposure | Consent, least privilege, retention limits, secure telemetry |

## 19. Shared Master Devlopman records

Use existing shared entities where available; do not create duplicates:
- Project: `MOB-ECRATE-001`
- Product family: `GLOBAL-ELECTRIC-MOBILITY`
- Work packages: engineering, procurement, prototype, validation, compliance, production.
- Shared vendor records and quotations.
- Shared budget, approvals, risks, tasks, documents, and audit events.
- Shared customer, fleet, invoice, and warranty records when commercial operations begin.

Suggested project dashboard fields: stage gate, owner, next deliverable, budget estimate, committed spend, open risks, supplier status, test status, compliance status, and approval state.

## 20. Immediate next actions

1. Freeze the intended use case and vehicle classification for Haiti and the Dominican Republic.
2. Produce a requirements sheet and vehicle packaging layout.
3. Commission a qualified engineer to create and review frame geometry and structural calculations.
4. Request technical datasheets—not just prices—for candidate motor/controller and battery systems.
5. Commission the battery/electrical schematic and safety review.
6. Create the first controlled BOM with approved alternates and supplier quotations.
7. Establish test acceptance criteria and a safe closed test facility.
8. Do not order the battery, fabricate the frame, or test at road speed until the relevant engineering gates are passed.

**Final principle:** Silveroak E-Crate is one product under the single Master Devlopman system. Build the safest validated prototype first; expand to the wider electric mobility family only after engineering, compliance, and serviceability are demonstrated.
