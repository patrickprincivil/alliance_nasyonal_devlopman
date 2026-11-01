# Data Center MVP — acceptance matrix

| Case | Input | Expected |
|---|---|---|
| Valid | 2026-10-01,facebook,100,20 | revenue=100, spend=20, ROAS=5 |
| Zero spend | 2026-10-01,organic,100,0 | ROAS null/N/A, not infinity |
| Invalid date | 2026-15-40,organic,1,1 | rejected with row location |
| Negative | 2026-10-01,facebook,-5,3 | rejected |
| Non-numeric | 2026-10-01,facebook,hello,3 | rejected |
| Duplicate | same source/date/channel twice | deterministic rejection or declared upsert |
| Oversized | >2MB CSV or >10000 lines | rejected before persistence |
| CSV export injection | value begins = + - @ | escaped as literal when exported |
| Tenant isolation | organization A requests B records | 403/404 and audit |
| No access | anonymous upload in production | 401/403 |
| Malformed | wrong header or encoding | rejected safely |
| Precision | 0.1 + 0.2 currency | exact decimal representation |
| Audit | completed import | operator, tenant, hash, time and result recorded |
| Recovery | controlled staging DB backup | restore and checks validated |

All are planned tests. **Not executed by adding this document.**
