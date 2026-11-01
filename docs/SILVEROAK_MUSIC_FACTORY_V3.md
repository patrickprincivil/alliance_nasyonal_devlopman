# Silveroak Global Music Factory & Digital Score Library V3
Date: 2026-10-18

## Placement
MASTER DEVLOPMAN → MUSIC & MEDIA → existing /music route → /music/factory.
One shared platform, reuse existing identity, projects, billing, approvals, audit, storage and agent orchestrator.

## V3 scope
Fourteen sections defined in lib/silveroak/music.ts: control center, catalog, digital scores, composition, production, education, games, playlists, AI agents, rights, distribution, marketplace, applications and governance. This is a public planning dashboard, **not deployed or operational services**.

## MuseScore and third-party workflows
- MuseScore Studio is notation software; MuseScore.com is a separate score sharing/service platform.
- Users may import only files for which they have a legal right to use or distribute them. No wholesale scraping/downloading/copying of paid or protected scores.
- Existing local tools (Finale PrintMusic, SONAR, FL Studio, Band-in-a-Box) are external desktop workflows, not remotely controlled by this page.
- Suno content requires review of applicable service terms and generated-music rights before commercial use.
- SOCAN and DistroKid are separate portals; account connections, filings, registrations or releases have not been performed.
- Music quizzes should use original prompts and properly licensed short excerpts, not copy MuseScore's proprietary assets.
- Content moderation: apply user-directed educational and moral filters without obscuring legal rights or attribution.

## Proposed next shared tables (design, not migrations)
music_works(id, organization_id, title, composer, license_status, copyright_owner)
music_scores(id, work_id, storage_key, media_type, rights_evidence, visibility)
music_recordings(id, work_id, storage_key, isrc, status)
music_releases(id, organization_id, title, distributor, status)
music_rights(id, work_id, rights_holder, territory, permitted_uses, evidence)
music_lessons(id, organization_id, skill_level, instrument)
music_quizzes(id, organization_id, prompt, licensed_asset_id, answer_key)
music_royalties(id, work_id, period, currency, amount_minor, source)
All tenant records must be server-scoped and access controlled. Private assets require signed storage URLs, retention policy, permission review and audit log.

## Operating gates
1. Inventory existing 8 Silveroak Music Factory files and 7 related Education/Media files in the Library; compare by checksum, never discard versions merely by similar names.
2. Agree rights-evidence schema; import a small set of original or public-domain scores only with provenance.
3. Build secure search and preview for permitted score files; use offline cache only when redistribution rights allow.
4. Implement a quiz with original question bank and clear answer verification.
5. Add approved artist/composer credit workflow and SOCAN registration assistance (no automatic rights assertions).
6. Build a separate release management checklist for DistroKid without asserting a release took place.
7. Integrate AI agents only through the existing orchestrator, human approvals and spend limits.
8. Validate npm ci, TypeScript, lint, build, authorization, storage permissions and mobile views before deploy.
