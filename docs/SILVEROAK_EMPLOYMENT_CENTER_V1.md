# Silveroak Employment Center — Canada / USA V1

## Scope
Career discovery across Canada and the United States, as a module of MASTER DEVLOPMAN. Sources: Canada Job Bank, GC Jobs, USAJOBS, Indeed and employers' official recruitment pages. Search broad skilled and unskilled sectors; verify roles individually.

## Delivered in code
- Static employer-source directory and category discovery page.
- No live listings, no scraping, no Indeed / Job Bank account integration, no CRM sync, and no automatic applicant applications.

## Existing scheduled monitoring
ChatGPT daily search/watch automation is separate from this web application. Do not display its activity as an app backend connection. Its notifications depend on the user's ChatGPT notification settings.

## Next functional gates
1. Select compliant official feeds/APIs; comply with site terms and avoid undocumented scraping.
2. Store only verified role metadata: provider, provider_job_id, URL, title, employer, location, posted_at, expiry, pay and license notes.
3. Stable deduplication: provider + provider_job_id, plus secondary URL fingerprint, with recheck date and provenance.
4. Job updates and personal alerts require opt-in, secure user account, provider licensing and data retention practices.
5. Show Canada's and USA's separate work-eligibility conditions and provincial/state licensing requirements; never guarantee immigration.
6. Provide a six-month cost planning worksheet based on locally sourced, dated cost estimates, clearly distinguishing recommendations from legal conditions.
7. Do not charge workers prohibited recruitment fees or misrepresent vacancies, LMIA or employer partnerships.
8. Acceptance: 0 invented listings, every listing has a verifiable application URL, unknown salary remains unknown, alerts only for new jobs.
