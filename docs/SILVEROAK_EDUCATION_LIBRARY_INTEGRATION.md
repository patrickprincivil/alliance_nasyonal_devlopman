# Silveroak Global Education Center & Global Digital Library — integration record

These two products are modules inside **MASTER DEVLOPMAN**, not new standalone platforms.

## Current GitHub feature-branch implementation
- /global-education-center: four learning pathways and 14 topic headings.
- /global-digital-library: collection overview, lawful-use statement and references to the reported V2 catalog.
- No claim of affiliation with Arden University, accreditation, 193 imported items, offline functionality, student login, certified Windows 11 testing, or active AI Librarian.

## User-supplied source claims to verify
- Arden Course Lab V1: HTML/CSV offline lessons with local progress; original ZIP/source still needs inspection.
- Global Digital Library V2: 193 catalog references from seven sources; reported seven automated tests passed.
- These figures are reports about earlier artifacts and not results of tests run for these new website routes.

## Unification model
Reuse one shared Organization/Identity/Permissions service.
Create catalog_source, catalog_entry, course, lesson, enrollment and learning_progress entities only after existing database inventory.
Store provenance (source institution, URL, retrieved date, license, language, access type) per catalog record.
Course progress and enrollment require authenticated server-side storage; do not present browser-only data as synchronized student accounts.
Separate library *metadata* from licensed full-text content; never scrape/rehost copyrighted books without permission.
Use content review aligned with user collection preferences, with manual review and appeal process.
Use source-checkable retrieval for any future AI librarian; AI generation must not be labelled library source content.

## Acceptance steps
1. Locate and inspect original archived ZIP/CSV/JSON and verify counts by ID and source.
2. Validate source links, HTTPS, copyrights, rights and content categories.
3. Compare Arden modules against current official program details and avoid implying accreditation.
4. Restore and execute existing offline test suite in a sandbox; test Windows 11 separately.
5. Merge validated catalog data into the existing app without duplicating auth, CRM or payment systems.
6. Run npm ci, TypeScript, lint, build and manual navigation before Vercel preview.
