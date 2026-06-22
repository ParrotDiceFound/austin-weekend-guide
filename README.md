# Austin Weekend Guide

Static Austin activity guide with a reviewed taxonomy, phone-first corrections, and a lightweight feedback queue.

## Local verification

```bash
npm install
npm run check
python3 -m http.server 8000
```

Open `http://localhost:8000`. The guide loads the audited baseline locally; taxonomy edits and feedback need the Netlify Function below.

## Netlify Blobs setup

1. Push this repository to the branch connected to the existing Netlify site.
2. Netlify deploys `netlify/functions/guide-state.mjs` automatically. Netlify Blobs is site-wide, so no separate store setup or environment variable is required.
3. The first taxonomy correction or feedback note creates the site-wide `austin-weekend-guide/guide-state` Blob entry.

The `Fix tags` and feedback write endpoint (`/.netlify/functions/guide-state`) intentionally has no authentication, per Taylor's decision. Anyone who finds the deployed URL can submit or alter this data.
