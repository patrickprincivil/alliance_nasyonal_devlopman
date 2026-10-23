# Silveroak Game Development Studio — Modular City Learning Simulator V1

**Status:** Concept only. No game, simulation engine, licensed Draftula assets or production app implemented.
**Parent:** MASTER DEVLOPMAN → Education & Media → Game Development Studio
**Links:** Haiti Smart Vertical City, AI Factory, Education, Mobility, Energy & Water, Community Safety.

## Inspiration and originality
Draftula (IGN trailer, reportedly published 18 October 2026) is a creative reference for modular placement, spatial constraints and strategic feedback. This concept **does not** reproduce its intellectual property, characters, levels, code, interface, assets, title or trade dress.

## Original Silveroak concept: Smart City Builder — Hispaniola
An educational city-planning sandbox with a hex/square grid, modular buildings, roads, energy, water, schools, hospitals and accessible transport. Scenarios include disaster preparedness, grid restoration and community budgeting. No real-world engineering authorization is inferred from game results.

### Core loop
1. Choose map and scenario (Jacmel; San Pedro de Macorís; conceptual urban district).
2. Allocate a budget and place modules on a grid.
3. Connect services via network links: road, water, electricity, communications.
4. Run a simulation tick; inspect capacity, distance, access, cost and resilience.
5. Review warnings and improve the design; save a scenario locally.
6. Export a non-certified educational report.

### Initial scope
- 20x20 tile grid; modules: housing, roads, school, clinic, solar plant, battery storage, water supply, fire station.
- Grid constraints: placement collision, adjacency requirements, connection graph.
- Metrics: estimated population served, walking distance to essentials, daily energy balance, water coverage, cost, emergency accessibility.
- Deterministic rule-based simulations first; AI explanations later, clearly labeled as advisory.
- Accessibility: keyboard controls, multilingual labels (Kreyòl/French/English/Spanish), color-independent status descriptions.
- Offline-first learning activity; no account required in MVP.

### Draftula comparison (high-level, based on user-supplied description)
| Dimension | Draftula concept | Silveroak simulator concept |
|---|---|---|
| Primary structure | Fortress room placement | Community service and city modules |
| Goal | Defend against waves of attackers | Improve access, resilience and sustainability |
| Core challenge | Tactical room arrangement | Infrastructure capacities, costs, dependencies |
| Replay | Roguelike variation | Climate, budget, load and emergency scenarios |
| Intended user | Strategy game players | Students, planners and community learning groups |
| Output | Game outcomes | Educational planning report, not stamped designs |

### Engineering and safety boundaries
No simulation output may be used as authoritative electrical, structural, fire or municipal design. Real projects require measured data, utility coordination, permits and engineers.

### Phase gates
- G1: Game design document, original visuals and learning outcomes reviewed.
- G2: Pure TypeScript grid engine + repeatable tests; no new server required.
- G3: Accessible Next.js UI inside the existing repository; review navigation for duplicates.
- G4: Offline scenario save/load, localization and classroom trials.
- G5: Real-data integration only with authorization, provenance and consent.

**Integration:** A single MASTER DEVLOPMAN app and project registry; do not create a second platform or duplicate identity, billing, audit or project records.
