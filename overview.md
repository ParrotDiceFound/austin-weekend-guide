# Austin Weekend Guide

Phone-first Austin activity guide with an audited taxonomy that Taylor can correct while browsing the deployed site.

## Present State

The audited 102-listing baseline, simplified filters, mobile taxonomy editor, feedback queue, and Netlify Blobs function are implemented locally. Deployment remains pending: push to the branch connected to Netlify, then verify phone persistence against the live URL.

## Decisions

- **Taxonomy model:** Every listing has exactly one Type; Kid-Friendly, Dog-Friendly, Food & Drink, Hiking, Playground, Live Music, and Comedy are additive tags.
- **Audit standard:** Review all 102 listings from their descriptions, verifying ambiguous or hybrid cases against current official sources.
- **Dog policy:** Dog-Friendly is evidence-based, not implied by Outdoors. The audit seeds listings supported by current guide copy or official sources; the mobile editor handles future corrections.
- **Persistence:** Keep audited source data as the baseline and store post-audit mobile corrections as Netlify Blobs overrides.
- **Access:** Deployed taxonomy and feedback write endpoints are unauthenticated at Taylor's request.

## Tasks

- [ ] Implement the audited, mobile-editable taxonomy
  - [x] Audit all 102 activities into one Type and secondary tags
  - [x] Replace duplicated category/tag data with the audited taxonomy structure
  - [x] Remove Sports and time-of-day filtering from the guide
  - [x] Add Kid-Friendly and Dog-Friendly constraint filters with AND behavior
  - [x] Add Netlify Blobs taxonomy override API and phone-friendly per-card editor
  - [x] Add global and per-card feedback queue backed by Netlify Blobs
  - [ ] Verify taxonomy validation, cross-device persistence, feedback retrieval, and invalid-write handling
