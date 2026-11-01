# Silveroak Global Education System V2.0 — phased delivery
Parent: MASTER DEVLOPMAN → Education → Global Academy. Reuse one auth, CRM, approvals, audit, documents and payment infrastructure.

## Implemented
- Read-only Next.js Global Academy catalog page.
- 15 proposed departments.
- One institution candidate (Arden University), without claiming institutional partnership.
- Six-level pathway for manufacturing, robotics and autonomous systems.

## Proposed institution catalog
Institution: id, legal_name, country, institution_type, official_url, accreditation_source, verified_at, partner_status.
Program: id, institution_id, title, qualification, delivery_mode, instruction_language, duration, entry_requirements, official_url, last_verified_at.
Fees: program_id, currency, amount, fee_type, eligibility_tier, effective_date, expiry_date, source_url, verified_at.
Applications: organization_id, learner_id, program_id, stage, approval records; use secure private storage, not the public website.
No institution/program cost should be presented as a confirmed quote without official verification of intake, residency, nationality, degree, tuition and scholarship conditions.

## Manufacturing academy: staged build
1. Safety and basic trades curricula; certified trainers and workshop safety.
2. CAD, electronics, sensors, vehicle mechanics and CNC skills.
3. Manufacturing QA and equipment maintenance, using approved lab/pilot equipment.
4. Robotics integration in controlled environments; no autonomous public-road deployment.
5. Real partner-led engineering or tertiary qualifications only under approved agreements.
6. Accreditation due diligence, job outcomes, learner feedback and cost tracking.

## Partner outreach packet
- Silveroak profile and legal registration information.
- Proposed training domains and learner countries: Haiti, Dominican Republic, Canada.
- Clear request for collaboration status, official program catalog, language, entry requirements, recognition/accreditation, fees and scholarship eligibility.
- Written clarification of whether tuition tiers use nationality, residence or both.
- Privacy, learner data and commercial terms; no unverified logos or endorsement claims.

## Release gates
Inventory existing school/training modules and prevent duplicate accounts. Verify the source of every program listing. Approve policies for learner consent, age-sensitive records, privacy and credentials. Implement tenant-aware database and audit trails before real learner intake. Maintain distinctions: Silveroak training content vs institution-issued accredited credentials. Test and deploy only after Next.js lint/build pass.
