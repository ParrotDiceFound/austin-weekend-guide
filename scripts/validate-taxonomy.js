const taxonomy = require("../data/taxonomy.json");

const categories = new Set(["outdoors", "indoors", "water"]);
const tags = new Set(["kidFriendly", "dogFriendly", "food", "liveMusic", "comedy", "hiking", "playground"]);
const entries = Object.entries(taxonomy.activities);

if (entries.length !== 102) throw new Error(`Expected 102 activities, found ${entries.length}.`);

entries.forEach(([id, entry]) => {
  if (!categories.has(entry.category)) throw new Error(`Invalid category for ${id}.`);
  if (!Array.isArray(entry.tags)) throw new Error(`Tags must be an array for ${id}.`);
  if (new Set(entry.tags).size !== entry.tags.length) throw new Error(`Duplicate tags for ${id}.`);
  entry.tags.forEach((tag) => {
    if (!tags.has(tag)) throw new Error(`Unknown tag ${tag} for ${id}.`);
  });
});

console.log(`Taxonomy validation passed for ${entries.length} activities.`);
