# Debug Log

## 2026-08-17 — Feedback function omitted taxonomy data
- **Symptom:** Saving feedback returned `Could not save guide state`; production GET and POST requests returned HTTP 502.
- **Root cause:** Netlify's function bundle omitted the dynamically required `data/taxonomy.json`, so `guide-state.mjs` failed during module initialization. The state store also used eventual reads for a read-modify-write workflow, allowing newly written state to appear stale.
- **Fix:** Declared `data/taxonomy.json` in `netlify.toml` `included_files` and configured the guide-state Blob store for strong reads.
- **Verification:** Production POST, immediate GET, resolve POST, and immediate final GET all returned HTTP 200; the diagnostic note persisted and finished resolved.
- **Escape and prevention:** Syntax and taxonomy checks did not exercise Netlify's deployment artifact. Runtime data dependencies are now explicit, and state mutations read the latest Blob value.
- **Reusable pattern:** Declare dynamically loaded function files in the deployment bundle and use strong reads for Blob-backed read-modify-write state.
- **References:** `netlify.toml`, `netlify/functions/guide-state.mjs`, commits `8a3b09b` and `2f34094`.
