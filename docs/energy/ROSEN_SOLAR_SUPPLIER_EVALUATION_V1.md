# SILVEROAK GLOBAL ENERGY — ROSEN SOLAR SUPPLIER EVALUATION V1

**Parent:** MASTER DEVLOPMAN → AGRICULTURE_ENERGY → GLOBAL ENERGY → SOLAR → SUPPLIER REGISTER  
**Supplier:** Rosen Solar Energy Co., Ltd.  
**Status:** PROSPECTIVE / NOT APPROVED  
**Markets:** Haiti and Dominican Republic  
**Source status:** Preliminary intake based on information supplied by the project owner; independent verification pending.

## 1. Purpose and non-duplication

Record Rosen Solar as a potential equipment supplier within the existing Silveroak Global Energy/Solar program. This is not a new standalone platform or a second solar program. Reuse the existing Silveroak Community Energy OS, Energy Gateway, vendor-neutral Device Adapter API, and shared procurement, inventory, customer, billing, monitoring and maintenance services.

Workflow: SEARCH → CLASSIFY → REUSE → LINK → VERIFY → APPROVE. Do not duplicate existing solar design, monitoring, procurement, inventory, billing or maintenance modules.

## 2. Supplier intake information

- Company: Rosen Solar Energy Co., Ltd.
- Location stated: Hefei, Anhui, China.
- Website stated: https://www.rosensolar.com/
- Email stated: info@rosensolar.com
- Telephone / WhatsApp stated: +86 159 5510 4975
- Product families stated: monocrystalline, TOPCon and bifacial PV modules; hybrid inverters; LiFePO4 batteries; residential, commercial and industrial storage; grid-connected and off-grid systems; monitoring and energy management.

These details are intake information, not independently verified facts. Verify company identity, domain, contacts, manufacturing/export role, product availability, certifications and bank beneficiary before any commitment.

## 3. Product families and technical due diligence

| Product family | Candidate range stated in intake | Required verification |
|---|---|---|
| PV modules | Monocrystalline, TOPCon, bifacial | Exact model, wattage, dimensions, efficiency, temperature coefficients, IEC reports, serial traceability |
| Hybrid inverters | 5 kW, 10 kW and larger | Continuous/surge output, MPPT range, battery voltage, 50/60 Hz, local voltage, grid code, anti-islanding, neutral/grounding |
| Batteries | LiFePO4, 48 V / 51.2 V | Usable kWh, current limits, BMS, cycle-life conditions, UN 38.3, applicable IEC safety reports |
| Residential storage | 5–16 kWh | Complete BOM, inverter pairing, usable capacity, protection, warranty, installation requirements |
| Commercial storage | 30–500 kWh | Cabinet design, HVAC, fire detection/suppression, EMS, commissioning and O&M scope |
| Industrial storage | 1 MWh and larger | Engineering study, protection coordination, fire engineering, grid interconnection, EPC and operations scope |
| Solar plants | Grid-connected / off-grid | Project references, design responsibility, interconnection studies, performance guarantees, O&M |
| Monitoring / EMS | Wi-Fi or cloud monitoring | API and protocols, local operation during internet outages, data ownership, cybersecurity, user roles, data export |

All ranges are unconfirmed until model-specific datasheets and signed quotations are received.

## 4. Preliminary Silveroak pilot envelope — not a final design

- Hybrid inverter target: approximately 5 kW.
- PV array: two panels may be used only for a limited proof-of-concept; calculate final panel count and capacity from actual loads, solar resource and inverter MPPT limits. Two panels should not be represented as a complete 5 kW solar system.
- Battery target: 5–10 kWh nominal, subject to usable energy, surge load, autonomy and inverter compatibility.
- Monitoring: local-first monitoring with optional cloud/Wi-Fi.
- Generator: optional backup with engineered transfer/interlocking and correct neutral/grounding.
- Protection: correctly rated DC/AC isolators, breakers/fuses, surge protection, grounding, cable sizing, labels and emergency shutdown as required by applicable code.

No equipment order before load schedule, site survey, electrical design, environmental assessment, local standards and installation responsibility are documented.

## 5. Supplier qualification checklist

1. Verify legal company name, registration, physical address and bank beneficiary name.
2. Determine whether Rosen is manufacturer, exporter, trading company or authorized distributor for each product.
3. Obtain model-specific datasheets, manuals, wiring diagrams and complete BOMs.
4. Obtain relevant certificates and full reports from accredited laboratories; validate report numbers and issuing bodies independently.
5. For batteries, obtain UN 38.3 test summary, applicable IEC reports, MSDS, cell maker/model, BMS specifications and transport classification.
6. For inverters, confirm 50/60 Hz, country voltage, grid-code support, grounding/neutral and approved battery list.
7. Obtain warranty terms: duration, throughput/cycle limits, exclusions, claim process, labor, freight and replacement location.
8. Request comparable project references and permission to contact customers.
9. Obtain tiered wholesale prices, MOQ, Incoterms, lead time, payment terms and quotation validity.
10. Obtain separate shipping, insurance, dangerous-goods handling, customs documents and landed-cost estimates for Haiti and Dominican Republic.
11. Confirm spare-parts stock, firmware support, remote diagnostics, technician training and after-sales response times.
12. Check sanctions/export restrictions, import rules, taxes, customs and local electrical approvals.
13. Do not pay personal accounts or accept changed bank details without independent callback verification.
14. No exclusivity, distributor appointment, purchase order, deposit or public partnership claim before written approval.

## 6. Country workstreams

Treat Haiti and Dominican Republic separately for electrical standards, utility interconnection, import duties, product certification, installer qualifications, permits, battery transport/fire rules and warranty obligations. Confirm requirements with competent local authorities and licensed professionals. Approval in one country does not automatically authorize sale or installation in the other.

## 7. Integration structure

```text
MASTER DEVLOPMAN
└── AGRICULTURE_ENERGY
    └── GLOBAL ENERGY
        ├── COMMUNITY ENERGY OS (shared platform)
        ├── ENERGY GATEWAY (shared integration layer)
        ├── SOLAR ENGINEERING & SYSTEM DESIGN
        ├── PROCUREMENT / VENDOR REGISTER (shared service)
        │   └── ROSEN SOLAR — PROSPECTIVE SUPPLIER
        ├── DEVICE ADAPTER API (vendor-neutral)
        ├── MONITORING & MAINTENANCE (shared service)
        ├── FINANCING & BILLING (shared service)
        └── HAITI / DOMINICAN REPUBLIC DELIVERY WORKSTREAMS
```

Develop a Rosen-specific adapter only after exact models, communication protocols, API documentation, security model and test hardware are available. Prefer open protocols and vendor-neutral interfaces; do not hard-code Rosen as the only supported vendor.

## 8. Procurement approval gates

| Gate | Required action | Status |
|---|---|---|
| 0 | Record intake from user-provided information | COMPLETE |
| 1 | Verify identity and contacts | PENDING |
| 2 | Review product documentation and certificates | PENDING |
| 3 | Engineering compatibility and safety review | PENDING |
| 4 | Commercial quotation and landed-cost review | PENDING |
| 5 | Pilot site survey, design and permits | PENDING |
| 6 | Written supplier approval and purchase authorization | PENDING |
| 7 | Delivery inspection, commissioning and acceptance tests | PENDING |

No gate is passed by this document alone.

## 9. Supplier enquiry checklist

Request current catalogue and model list; datasheets and manuals; certificates and test reports; factory identity and role; 5 kW and 10 kW inverter options; compatible 48 V / 51.2 V LiFePO4 batteries; PV module specifications; monitoring/API details; warranty and service terms; training; MOQ; wholesale and pilot pricing; lead times; Incoterms; shipping and insurance to both destinations; spare-parts arrangements; and authorized-distributor requirements. Request separate quotations for Haiti and Dominican Republic, with assumptions and exclusions clearly stated.

## 10. Current status

- Intake record and product families: RECORDED — based on user-provided information.
- Reuse of existing Silveroak solar architecture: DEFINED — architecture only.
- Supplier identity/contact verification: PENDING.
- Technical and certification evaluation: PENDING.
- Country-specific compliance: PENDING.
- Wholesale quotation/landed cost: PENDING.
- Pilot engineering/site survey: PENDING.
- Supplier approval/partnership: NOT APPROVED.
- Purchase order/payment: NOT AUTHORIZED.

## 11. Decision

Rosen Solar is recorded as a **potential supplier under evaluation** within Silveroak Global Energy. It is not an approved partner, verified manufacturer, distributor or exclusive supplier. Next action: send a documented supplier due-diligence enquiry, independently verify the response, complete technical and country compliance reviews, then compare pilot quotations before any approval or purchase.
