# Silveroak Global Adventist Digital Library & Education Center V4.0
**Parent:** MASTER DEVLOPMAN → Education → Global Digital Library → Adventist Education

The user-supplied V4 blueprint defines **30 planned modules**, from Bible Library and Sabbath School to AI Librarian, rights management and reporting. Reuse the existing global-digital-library page, AI OS, user accounts, audit trail, search, education and commerce modules. Do not create a separate platform.

## Implementation in this PR
- Static discovery page at /global-digital-library/adventist
- 30 named planning modules and external publisher/archive reference links
- Shared rights-status vocabulary
- Explicit notices: no licensed content, imported catalogs, active courses or official publisher partnerships

## Catalog schema proposal (not applied)
publishers, authors, works, editions, work_authors, edition_languages, edition_formats, source_links, collections, catalog_imports, import_errors, rights_reviews, content_assets. Use canonical work + edition IDs, with ISBN identifiers on editions where applicable. Reuse central organizations, users, roles, audit, courses, lessons, progress and subscriptions rather than duplicating them.

## Rights gate
A public bibliographic reference does not confer download or redistribution rights. Every edition has source URL, source verification date, copyright status, permission evidence, permitted jurisdictions, approved actions and review status. Do not ingest or republish paid/protected text without written authorization.

## Catalog intake and QA
1. Select official permitted metadata source.
2. Record provenance and applicable license.
3. Validate work, author, publisher, edition and ISBN if present.
4. Fuzzy-match possible duplicates; human review before merge.
5. Apply rights gates to assets and downloads.
6. Test search, language filtering, accessibility, offline allowed metadata, security and backup restoration.
7. Mark releases live only after CI, source and rights checks.

## Content policy
Prioritize Christian education, science, health, history, professions and sacred music. Keep editorial/religious filters separate from descriptive historical and academic classifications. Protect minors, users' privacy and lawful access.

**Status:** planning UI built, database/importer/AI Librarian/Windows installer not built. Existing 193-entry Global Digital Library V2.0 catalog is a separate reported source count, not asserted as imported into the app.
