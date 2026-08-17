import { getStore } from "@netlify/blobs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const taxonomy = require("../../data/taxonomy.json");
const ACTIVITY_IDS = new Set(Object.keys(taxonomy.activities));
const CATEGORIES = new Set(["outdoors", "indoors", "water"]);
const TAGS = new Set(["kidFriendly", "dogFriendly", "food", "liveMusic", "comedy", "hiking", "playground"]);
const STORE_NAME = "austin-weekend-guide";
const STATE_KEY = "guide-state";

function emptyState() {
  return { version: 1, overrides: {}, feedback: [] };
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function validateTaxonomy(activityId, entry) {
  if (!ACTIVITY_IDS.has(activityId)) throw new Error("Unknown activity.");
  if (!entry || !CATEGORIES.has(entry.category) || !Array.isArray(entry.tags)) {
    throw new Error("A type and tag list are required.");
  }

  const tags = [...new Set(entry.tags)];
  if (tags.length !== entry.tags.length || tags.some((tag) => !TAGS.has(tag))) {
    throw new Error("One or more tags are not supported.");
  }

  return { category: entry.category, tags: tags.sort() };
}

function validateFeedback(activityId, text) {
  if (activityId !== null && activityId !== undefined && !ACTIVITY_IDS.has(activityId)) {
    throw new Error("Unknown activity.");
  }
  if (typeof text !== "string" || !text.trim() || text.trim().length > 1200) {
    throw new Error("Feedback must be between 1 and 1200 characters.");
  }
}

async function loadState(store) {
  const entry = await store.getWithMetadata(STATE_KEY, { type: "json" });
  if (!entry) return { state: emptyState() };
  if (!entry.data || !entry.data.overrides || !Array.isArray(entry.data.feedback)) {
    throw new Error("Saved guide state is invalid.");
  }
  return { state: entry.data };
}

async function updateState(store, mutator) {
  const { state } = await loadState(store);
  const updated = mutator(structuredClone(state));
  await store.setJSON(STATE_KEY, updated);
  return updated;
}

export default async (request) => {
  const store = getStore({ name: STORE_NAME, consistency: "strong" });

  if (request.method === "GET") {
    try {
      const { state } = await loadState(store);
      return json(state);
    } catch (error) {
      console.error("Could not load guide state", error);
      return json({ error: "Could not load guide state." }, 500);
    }
  }

  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);

  try {
    const body = await request.json();
    const state = await updateState(store, (current) => {
      if (body.action === "saveTaxonomy") {
        current.overrides[body.activityId] = validateTaxonomy(body.activityId, body.taxonomy);
        return current;
      }

      if (body.action === "addFeedback") {
        const activityId = body.activityId || null;
        validateFeedback(activityId, body.text);
        current.feedback.push({
          id: crypto.randomUUID(), activityId, text: body.text.trim(), status: "open", createdAt: new Date().toISOString()
        });
        return current;
      }

      if (body.action === "resolveFeedback") {
        const feedback = current.feedback.find((item) => item.id === body.feedbackId);
        if (!feedback) throw new Error("Unknown feedback item.");
        feedback.status = "resolved";
        feedback.resolvedAt = new Date().toISOString();
        return current;
      }

      throw new Error("Unknown guide state action.");
    });
    return json(state);
  } catch (error) {
    console.error("Could not save guide state", error);
    return json({ error: error.message || "Could not save guide state." }, 400);
  }
};
