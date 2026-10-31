# Silveroak Global Music Factory V3 — unified integration roadmap
Parent: MASTER DEVLOPMAN → MUSIC & MEDIA → SILVEROAK MUSIC FACTORY.
Source: user-supplied V3 concept, October 18, 2026. Implemented here as read-only pages and catalog definitions only.

## Product scope
Music control center (reuse Master Control), global catalog, digital scores, composition, production, education, original quizzes, playlists, AI assistants, rights, distribution, marketplace, app delivery and shared governance.

## Key boundaries
- MuseScore Studio notation software is distinct from MuseScore.com licensed score platform. A score appearing online does not grant republication rights.
- No scraping, copying, mirroring, mass importing or redistributing protected scores without the rights holder's authorization.
- Public-domain status must be verified by jurisdiction and arrangement; license evidence and attributions must be preserved.
- Rights statuses: ORIGINAL / PUBLIC_DOMAIN_VERIFIED / LICENSED / UNKNOWN. UNKNOWN cannot publish.
- SOCAN and DistroKid workflows are planned, not externally connected.
- Music AI output may be subject to provider terms and third-party rights; require human review.
- Proposed content preferences must not remove licensed catalog entries without administrative oversight.
- Financial actions, external distribution, and takedown actions require human authorization and audit events.

## Incremental engineering
1. Inventory existing Music Factory archives and legacy software outputs; keep provenance and SHA256 inventories.
2. Design music_works, contributors, scores, rights_evidence, licenses, courses, quizzes, quiz_attempts, recordings, releases and royalties, all with organization ID and owner authorization.
3. Add server-side authentication, license metadata validation and private file storage for original works.
4. Build legal ingestion via uploads from owners and approved open score providers, preserving sources and access restrictions.
5. Make original music theory quizzes with no copyrighted score or recording dependency.
6. Build lesson progress and playback using user-owned MIDI and properly licensed audio.
7. Connect rights administration and release workflows only with explicit credentials and verified provider capability.
8. Run accessibility, copyright, file upload security, backup/restore and content filtering tests before production.

## Acceptance criteria
- Every score has title, composers, source, format, territories, rights evidence and access scope.
- Unauthorized score download must fail server-side.
- Quizzes can be used without copyrighted third-party materials.
- No connection or deployment claimed until verified.
