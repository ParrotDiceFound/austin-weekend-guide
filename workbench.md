# Austin Weekend Guide — Workbench

## June 22, 2026

- **Taxonomy scope:** Agreed to review all 102 listings, assigning one primary Type and secondary tags rather than relying on the current duplicated category/tag model.
- **Classification standard:** Audit from existing guide descriptions, using current official sources only for ambiguous or hybrid venues.
- **Filter model:** Kid-Friendly and Dog-Friendly are additive hard constraints; selecting both returns only listings that satisfy both.
- **Dog policy:** Outdoors and Water are Dog-Friendly by default, with explicit indoor exceptions available as tags.
- **Mobile corrections:** Chose a Netlify Blobs override layer over a full live content migration so Taylor can correct a listing directly from his phone without a redeploy.
- **Feedback queue:** Scoped both global app feedback and notes attached to individual listings for future work sessions.
- **Audit completed:** Migrated all 102 activities into `data/taxonomy.json`, corrected Chicken Shit Bingo to Indoors, and classified Austin Nature & Science Center as Outdoors based on City of Austin visitor information.
- **Dog classification:** Rejected the blanket Outdoors = Dog-Friendly rule after primary-source checks found that Austin Nature & Science Center and UMLAUF prohibit pets. Seeded only 13 dog-friendly tags supported by existing copy or current source evidence.
- **Mobile persistence:** Added the Netlify Blobs-backed taxonomy override function, per-card mobile editor, global feedback form, and per-card feedback notes.
- **Deployment dependency:** The implementation requires a push to the existing Netlify-connected branch before edits and feedback can persist live.

**Decision: audited baseline plus live overrides** — Use a one-time full taxonomy audit as the baseline, then store mobile corrections as small Netlify Blobs overrides rather than move all content into a CMS. This preserves simple static content while removing the computer/Git bottleneck for taxonomy maintenance.

**Decision: public write endpoints** — Leave the taxonomy and feedback write endpoints unauthenticated at Taylor's explicit request, accepting that anyone discovering the deployed URL could alter data.
