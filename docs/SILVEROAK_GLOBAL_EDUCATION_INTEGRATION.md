# Silveroak Global Education V1.1 — integrated directory

## Implemented
- Integrated the three original prototype CSV source catalogs into a typed, read-only module for the existing Next.js MASTER DEVLOPMAN.
- Counts verified from source: 35 institutions and directory entries, 137 professional subject categories, 69 university/college service categories.
- Searchable institution catalog with country/scope filter. Searchable professional topics and institutional services, each in own tab.
- Route: /global-education.
- No database, institution accounts, accreditation verification, official directory crawling or automatic updates. All provider websites are external.
- Original standalone HTML and CSV prototype remain historical source artifacts in the user's Library, not a second deployed platform.

## Security and compliance gates
1. Verify institution records/links, qualification status, fees, privacy notices and admission requirements at source.
2. Obtain permitted exports/licenses or documented authorization before ingesting bulk catalogs; respect provider terms and personal data safeguards.
3. Reuse shared PostgreSQL organization/identity/approval infrastructure when ready. No duplicate standalone database.
4. Design schema: institutions(id, official_name, country, provider_type, source_url, last_verified_at), education_programs(id, institution_id, qualification, discipline, tuition_currency, cost, verification_status), service_types(id, label), institution_services(institution_id, service_type_id), learning_paths(id, profession_id), enrollments(organization_id, user_id, program_id, status). Sensitive learner records must have authenticated tenancy scope.
5. Human review for scholarship offers, accreditation claims and course availability. Record updated_at, sourced_at and audit source for all imports.
6. Run CI npm ci, TypeScript, lint, production build, route smoke test and accessibility checks before merge.

## Expansion
Canada, USA, UK, Dominican Republic and UNESCO directories are discovery sources, not evidence that every affiliated university has already been indexed. Fashion and sewing sites may sell recurring memberships; confirm checkout terms before purchase. Preserve user preferences for content filtering as separate catalog metadata, not a claim that all external offerings are curated.
