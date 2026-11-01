# Silveroak AI Robotics & Advanced Electronics — 12-Month Pilot Build Plan

**Parent:** MASTER DEVLOPMAN → AI & SOFTWARE → ROBOTICS_ELECTRONICS  
**Version:** 1.0 | **Status:** Proposed pilot; not yet built or funded  
**Repository:** `patrickprincivil/alliance_nasyonal_devlopman`  
**Build principle:** SEARCH → CLASSIFY → REUSE → MERGE → LINK → CREATE

## 1. Executive decision

Start with a **small, safe robotics and electronics prototyping lab**, not a factory and not a humanoid robot.

**First prototype: Silveroak ROVER-01**, a low-speed, differential-drive educational/agricultural inspection rover. It should initially operate by remote control on a closed, flat test area. It can later support modular sensors for temperature, humidity, soil moisture, obstacle detection and camera inspection.

Why this first:
- lower cost and mechanical complexity than a humanoid or industrial arm;
- useful for robotics education and controlled agricultural demonstrations;
- modular chassis, motors, controller and sensors can be replaced independently;
- allows the team to learn electronics, embedded software, telemetry, safety and testing before scaling.

**Explicit limits for the first pilot:** no road operation, no people-carrying, no lifting heavy loads, no autonomous operation near people/animals, no medical use, and no high-voltage battery experiments. Autonomous navigation is a later gated feature after safety testing.

## 2. Twelve-month pilot roadmap

| Period | Work package | Deliverables | Exit gate |
|---|---|---|---|
| Months 1–2 | Requirements, site and safety | Use cases, risk register, workspace layout, supplier shortlist, bill of materials, test plan | Budget and safety review approved |
| Months 2–3 | Software MVP foundation | Robotics project register, prototype inventory, test records, role permissions, audit trail | MVP build and access tests pass |
| Months 3–4 | Electronics bench | ESD-safe workbench, low-voltage power supplies, multimeter, soldering/rework tools, ventilation, labelled storage | Electrical and ESD checklist signed |
| Months 4–5 | ROVER-01 mechanical build | Chassis, guarded wheels, motor mounts, emergency stop, enclosure | Mechanical inspection passed |
| Months 5–6 | Embedded control | Motor driver, microcontroller, battery monitoring, encoder/sensor inputs | Bench tests and emergency-stop tests pass |
| Months 6–7 | Remote operation | Wired test first, then secured local wireless control, speed limit and telemetry | Controlled-area driving test passed |
| Months 7–8 | Sensor payload | Camera and low-voltage environmental/soil sensors | Sensor calibration records complete |
| Months 8–9 | ROS 2 integration | ROS 2 nodes, topic map, simulation model, documented interfaces | Repeatable simulation and hardware test |
| Months 9–10 | Reliability and safety | Runtime, thermal, braking, loss-of-link and fault tests | No unresolved critical safety defects |
| Months 10–11 | Education/agriculture demo | Lesson plan, operator guide, demo scenario and data report | Demonstration reviewed by users |
| Month 12 | Pilot review | Cost report, lessons learned, maintenance plan and phase-2 decision | Go / revise / stop decision documented |

The schedule is a planning target, not a promise. Delays in funding, parts, facilities, connectivity or qualified supervision change the timeline.

## 3. First prototype — ROVER-01

### 3.1 Baseline configuration
- Four-wheel or tracked low-speed chassis; choose after checking local terrain and parts availability.
- Differential drive with two independently controlled motor channels.
- Low-voltage DC motors with suitable gearbox and encoders.
- Microcontroller for deterministic motor/sensor control.
- Single-board computer only if needed for camera processing or ROS 2; do not buy it before the use case is confirmed.
- Motor driver matched to measured motor stall current, with margin and thermal protection.
- Removable, fused battery pack from a reputable supplier; battery management and charger matched to the chemistry.
- Physical emergency-stop switch that removes motor power independently of software.
- Wheel guards, protected wiring, strain relief, fuse, master disconnect and labelled connectors.
- Optional modules: camera, ultrasonic or time-of-flight obstacle sensor, temperature/humidity sensor and soil-moisture probe.

### 3.2 Operating stages
1. Bench test with wheels lifted and current-limited supply.
2. Wired low-speed control in a clear, closed area.
3. Wireless teleoperation with a dead-man control and automatic stop on communication loss.
4. Add sensor telemetry and camera.
5. Run ROS 2 in simulation, then connect hardware.
6. Consider limited autonomous waypoint trials only after a separate hazard review and supervised test approval.

### 3.3 Acceptance tests
- Emergency stop works every time and cannot be bypassed by software.
- Loss of control link stops motion within a measured, documented distance.
- Motor driver, wiring and battery remain within manufacturer temperature/current limits.
- No exposed moving parts or loose wiring.
- Battery is secured and protected from impact and short circuit.
- Operator can identify battery state, faults and current operating mode.
- Each test has date, operator, firmware version, result and corrective action.

## 4. Robotics software MVP

Build this as a **module inside the existing MASTER DEVLOPMAN application**, not a second platform.

### Proposed navigation
- `/robotics` — Robotics dashboard and programme overview
- `/robotics/projects` — prototypes and project status
- `/robotics/prototypes/rover-01` — ROVER-01 profile, components and revisions
- `/robotics/inventory` — parts, suppliers, stock and reorder thresholds
- `/robotics/tests` — test plans, results, defects and approvals
- `/robotics/lab` — equipment, calibration and maintenance register
- `/robotics/learning` — courses, procedures and training records
- `/robotics/safety` — hazards, incidents, mitigations and sign-offs

These are proposed routes; they are not represented as implemented until code, tests and deployment verify them.

### MVP roles
- Administrator: manages configuration and user access.
- Engineering lead: approves design revisions and technical tests.
- Technician: records assembly, inventory use and test results.
- Safety reviewer: reviews hazards and blocks unsafe test release.
- Viewer/trainee: reads approved procedures and learning material.

Apply least privilege. Record sensitive changes in an audit log. Require a human approval before a prototype changes from bench testing to powered movement.

### Core records
- `robotics_projects`: organization, name, purpose, status, owner.
- `robot_prototypes`: project, model, serial number, revision, operating state.
- `components`: part number, description, supplier, electrical/mechanical rating.
- `inventory_items`: component, quantity, location, minimum stock.
- `prototype_bom_items`: prototype revision, component, quantity.
- `test_plans`: prototype revision, test method, acceptance criteria.
- `test_runs`: test plan, operator, date, result, evidence reference.
- `defects`: severity, description, owner, resolution status.
- `safety_hazards`: hazard, risk rating, mitigation, reviewer, approval state.
- `maintenance_records`: equipment/prototype, action, date, next due.
- `training_records`: trainee, course, trainer, completion evidence.
- `audit_events`: actor, action, target, timestamp.

All records must use the existing organization/user/role model if it exists. Do not create duplicate authentication, organization, permission or audit systems. Confirm the current schema before adding tables. Store documents/media in object storage when available and keep references/metadata in PostgreSQL. Never store API keys or OAuth secrets in ordinary records.

## 5. Software and electronics architecture

### Application layer
- Existing Next.js + React + TypeScript application remains the user interface.
- Reuse existing navigation, design system, authentication, permissions and audit services.
- PostgreSQL is the proposed source of truth after the existing database approach is audited.
- Redis is optional for background jobs only when real workload requires it.

### Robotics layer
- ROS 2 for robot middleware and message-based integration.
- Gazebo (or a compatible simulator) for simulation before hardware testing.
- Microcontroller firmware handles motor control, encoder sampling and hard safety interlocks.
- A single-board computer may run higher-level ROS 2 nodes where needed.
- KiCad for PCB design; begin with safe breakout boards and modules before custom PCB fabrication.
- GitHub stores source code, firmware, CAD references, test procedures and versioned documentation.

### Boundary between systems
The web application manages projects, inventory, approvals, test records and reports. It must **not** directly issue unrestricted motor commands from a public web page. Robot control runs on a secured local network with authenticated commands, bounded speed, emergency stop and local fail-safe behavior.

## 6. Minimum pilot lab

### Work areas
1. Clean electronics bench with ESD mat and wrist strap.
2. Low-voltage electrical test bench.
3. Mechanical assembly bench with guarded tools.
4. Robotics test zone with barriers and marked exclusion area.
5. Locked parts and battery storage.
6. Computer/software workstation.
7. Training and documentation area.

### Starter equipment
- ESD mat, wrist strap and ESD-safe storage.
- Digital multimeter and current-limited low-voltage bench supply.
- Temperature-controlled soldering station, fume extraction and PPE.
- Hand tools, crimpers, wire strippers and insulated probes.
- Calipers, rulers, fasteners and labelled component bins.
- Fire safety equipment appropriate to the facility and battery chemistry.
- Computer for CAD, firmware and simulation.
- Basic robot chassis, motors, motor driver, controller, sensors and fused battery pack.

Do not purchase industrial CNC, welding cells, humanoid platforms, high-power battery test equipment or a production line during the first pilot.

## 7. Preliminary budget envelope

These are **planning allowances in USD, not supplier quotes**. Freight, taxes, import duties, rent, salaries, legal fees and recurring cloud/software costs may be additional.

| Category | Lean pilot allowance |
|---|---:|
| ESD bench, hand tools and basic instruments | $500–$1,500 |
| Soldering, fume extraction and PPE | $300–$900 |
| ROVER-01 chassis, motors and drivetrain | $250–$800 |
| Controller, motor driver and sensors | $200–$700 |
| Battery, charger, fuses and protection | $200–$600 |
| Computer and development accessories (if needed) | $400–$1,200 |
| Storage, wiring, connectors and spare parts | $200–$600 |
| Contingency | 15–20% |

**Indicative total:** approximately **$2,400–$7,600**, depending on equipment already available and local sourcing. Obtain at least two written quotes for major purchases and confirm import/shipping costs before ordering. Start with the tools already owned and buy only what the first test requires.

## 8. Safety, compliance and governance

- Appoint a technically qualified supervisor for powered tests.
- Maintain a written risk assessment before each new test stage.
- Use low-voltage, current-limited systems for initial prototyping.
- Follow manufacturer instructions for batteries, chargers, motors and tools.
- Keep battery charging supervised and away from combustible materials.
- Provide physical barriers and keep bystanders outside the test zone.
- Do not test autonomous movement around children, animals, traffic or the public.
- Document incidents and stop testing until corrective action is reviewed.
- Verify applicable electrical, radio, workplace, import and product-safety requirements in Haiti, the Dominican Republic and Canada before operation or sale.
- Do not market the prototype as certified, medical-grade or industrially safe without the relevant independent assessment and approvals.

## 9. Commercialization gates

Do not begin mass production. First validate:
1. A repeatable prototype build.
2. Demonstrated user need from an education or agriculture partner.
3. A documented bill of materials and real landed cost.
4. Repairability and parts availability.
5. Safety and regulatory requirements.
6. Maintenance, warranty and support capacity.
7. A viable customer price and service model.

Possible future revenue: robotics training, educational kits, prototype development, sensor installation, agricultural monitoring demonstrations, maintenance and integration services. No revenue is assumed until a paying customer and signed agreement exist.

## 10. Dependencies and decisions still required

- Confirm the pilot location and available workspace.
- Confirm which tools/computers are already owned.
- Obtain local supplier quotes for chassis, motors, controllers and battery.
- Select wheel versus tracked chassis after reviewing terrain and maintenance.
- Confirm qualified technical supervision.
- Confirm funding ceiling before purchasing.
- Audit existing authentication, database, navigation and CI/Vercel status before coding application routes.

## 11. Definition of pilot success

At month 12, the pilot is successful only if:
- one ROVER-01 prototype is assembled and documented;
- remote low-speed operation and emergency stop pass recorded tests;
- sensor data is collected and stored reproducibly;
- software MVP tracks inventory, prototype revisions, tests and approvals;
- training material and operator instructions exist;
- total costs and maintenance needs are documented;
- a safety reviewer signs the pilot report;
- management makes a documented go/revise/stop decision for phase 2.

## 12. Status register

| Workstream | Status |
|---|---|
| Concept and division structure | Defined from programme brief |
| First prototype selection | Proposed: ROVER-01 |
| 12-month pilot roadmap | Defined in this document |
| MVP data model and routes | Specified; not yet implemented |
| Physical laboratory | Not established/verified |
| Equipment procurement | Not ordered/verified |
| Prototype assembly | Not started/verified |
| ROS 2 / Gazebo integration | Not implemented/verified |
| Safety testing | Not performed |
| Commercial production | Not started |

**Final rule:** MASTER DEVLOPMAN remains the single parent platform. Robotics reuses common identity, organization, permissions, audit, inventory and financial services where they already exist. Build only the missing robotics-specific capabilities.
