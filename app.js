// Austin Weekend Guide — filtering, taxonomy, mobile corrections, and feedback

var ALL_ACTIVITIES = ACTIVITIES
  .concat(typeof PARKS_OUTDOOR_ACTIVITIES !== "undefined" ? PARKS_OUTDOOR_ACTIVITIES : [])
  .concat(typeof INDOOR_EVENING_ACTIVITIES !== "undefined" ? INDOOR_EVENING_ACTIVITIES : []);

var TAXONOMY_TAGS = ["kidFriendly", "dogFriendly", "food", "liveMusic", "comedy", "hiking", "playground"];
var ACTIVITY_TYPES = ["outdoors", "indoors", "water"];
var GUIDE_STATE_API = "/.netlify/functions/guide-state";
var BASE_TAXONOMY = {};
var GUIDE_STATE = { overrides: {}, feedback: [] };
var editingActivityId = null;

var state = {
  character: localStorage.getItem("character") || "ron",
  activityType: null,
  selectedTags: [],
  introIndex: null
};

function getTaxonomy(activity) {
  var base = BASE_TAXONOMY[activity.id];
  var override = GUIDE_STATE.overrides[activity.id];
  return override || base;
}

function filterActivities(activities) {
  return activities.filter(function(activity) {
    var taxonomy = getTaxonomy(activity);
    if (!taxonomy) return false;
    if (state.activityType && taxonomy.category !== state.activityType) return false;

    for (var i = 0; i < state.selectedTags.length; i++) {
      if (taxonomy.tags.indexOf(state.selectedTags[i]) === -1) return false;
    }

    if (activity.eventDate) {
      var today = new Date().toISOString().split("T")[0];
      if (activity.eventDate < today) return false;
    }

    return true;
  });
}

function getQuip(character, activity) {
  var taxonomy = getTaxonomy(activity);
  var priority = taxonomy.tags.concat([taxonomy.category]);

  for (var i = 0; i < priority.length; i++) {
    var quips = character.quips[priority[i]];
    if (quips) return quips[Math.floor(Math.random() * quips.length)];
  }

  var defaults = character.quips.default;
  return defaults[Math.floor(Math.random() * defaults.length)];
}

function getFilterReaction(character) {
  if (state.activityType && character.filterReactions[state.activityType]) {
    return character.filterReactions[state.activityType];
  }

  for (var i = 0; i < state.selectedTags.length; i++) {
    if (character.filterReactions[state.selectedTags[i]]) {
      return character.filterReactions[state.selectedTags[i]];
    }
  }

  return null;
}

function renderCharacterPicker() {
  var row = document.getElementById("character-row");
  var html = "";
  var ids = Object.keys(CHARACTERS);

  for (var i = 0; i < ids.length; i++) {
    var character = CHARACTERS[ids[i]];
    var isActive = state.character === character.id;
    html += '<button class="character-btn' + (isActive ? " active" : "") + '" '
      + 'data-character="' + character.id + '" '
      + 'style="' + (isActive ? "border-color: " + character.color + "; background: " + character.color + "15;" : "") + '">'
      + '<span class="character-emoji">' + character.emoji + '</span>'
      + '<span class="character-name">' + character.name.split(" ")[0] + '</span>'
      + '</button>';
  }

  row.innerHTML = html;
}

function renderFilters() {
  renderActiveButtons('[data-filter="activityType"]', state.activityType);
  var tagButtons = document.querySelectorAll('[data-filter="tag"]');

  for (var i = 0; i < tagButtons.length; i++) {
    var tag = tagButtons[i].getAttribute("data-value");
    tagButtons[i].classList.toggle("active", state.selectedTags.indexOf(tag) !== -1);
  }

  var clearButton = document.getElementById("clear-filters");
  clearButton.style.display = state.activityType || state.selectedTags.length ? "inline-block" : "none";
}

function renderActiveButtons(selector, value) {
  var buttons = document.querySelectorAll(selector);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("active", value === buttons[i].getAttribute("data-value"));
  }
}

function renderIntro() {
  var character = CHARACTERS[state.character];
  var introElement = document.getElementById("character-intro");

  if (state.introIndex === null) {
    state.introIndex = Math.floor(Math.random() * character.intros.length);
  }

  introElement.innerHTML = '<div class="intro-quote" style="border-left-color: ' + character.color + ';">'
    + '<p class="intro-text">"' + character.intros[state.introIndex] + '"</p>'
    + '<p class="intro-attribution">— ' + character.name + '</p>'
    + '</div>';
}

function renderFilterReaction() {
  var character = CHARACTERS[state.character];
  var reactionElement = document.getElementById("filter-reaction");
  var reaction = getFilterReaction(character);

  if (!reaction) {
    reactionElement.style.display = "none";
    return;
  }

  reactionElement.innerHTML = '<div class="reaction-bubble" style="border-color: ' + character.color + ';">'
    + '<p>"' + reaction + '" — ' + character.name.split(" ")[0] + '</p>'
    + '</div>';
  reactionElement.style.display = "block";
}

function renderResults() {
  var character = CHARACTERS[state.character];
  var filtered = filterActivities(ALL_ACTIVITIES);
  var resultsElement = document.getElementById("results");
  var metaElement = document.getElementById("results-meta");

  shuffleArray(filtered);

  if (filtered.length === 0) {
    metaElement.innerHTML = "";
    resultsElement.innerHTML = '<div class="empty-state" style="border-color: ' + character.color + ';">'
      + '<p class="empty-emoji">' + character.emoji + '</p>'
      + '<p class="empty-text">"' + character.emptyState + '"</p>'
      + '<p class="empty-attribution">— ' + character.name + '</p>'
      + '</div>';
    return;
  }

  metaElement.innerHTML = '<span class="results-count">Showing ' + filtered.length + ' activit' + (filtered.length === 1 ? 'y' : 'ies') + '</span>';
  resultsElement.innerHTML = filtered.map(function(activity) {
    return renderActivityCard(activity, character);
  }).join("");
}

function renderActivityCard(activity, character) {
  var taxonomy = getTaxonomy(activity);
  var tags = [taxonomy.category].concat(taxonomy.tags);
  var tagHtml = tags.map(function(tag) {
    return '<span class="card-tag' + (tag === taxonomy.category ? ' card-type-tag' : '') + '">' + formatTagName(tag) + '</span>';
  }).join("");
  var costMap = { free: "Free", cheap: "$", moderate: "$$", expensive: "$$$" };
  var costHtml = activity.cost ? '<span class="card-cost">' + (costMap[activity.cost] || "") + '</span>' : "";
  var linkHtml = activity.link ? '<a class="card-link" href="' + activity.link + '" target="_blank" rel="noopener">Visit Website →</a>' : "";

  return '<article class="activity-card">'
    + '<div class="card-header">'
    + '<h3 class="card-name">' + activity.name + '</h3>'
    + (activity.neighborhood ? '<span class="card-neighborhood">' + activity.neighborhood + '</span>' : "")
    + '</div>'
    + '<blockquote class="card-quip" style="border-left-color: ' + character.color + ';">'
    + '<p>"' + getQuip(character, activity) + '"</p>'
    + '<cite>— ' + character.name.split(" ")[0] + '</cite>'
    + '</blockquote>'
    + '<p class="card-description">' + activity.description + '</p>'
    + '<div class="card-footer">'
    + '<div class="card-tags">' + tagHtml + '</div>'
    + '<div class="card-meta">' + costHtml + linkHtml + '</div>'
    + '</div>'
    + '<div class="card-actions">'
    + '<button class="card-action" data-action="edit-taxonomy" data-activity-id="' + activity.id + '">✎ Fix tags</button>'
    + '<button class="card-action" data-action="leave-feedback" data-activity-id="' + activity.id + '">Leave note</button>'
    + '</div>'
    + '</article>';
}

function formatTagName(tag) {
  var names = {
    outdoors: "Outdoors",
    indoors: "Indoors",
    water: "Water",
    kidFriendly: "Kid-Friendly",
    dogFriendly: "Dog-Friendly",
    food: "Food & Drink",
    liveMusic: "Live Music",
    comedy: "Comedy",
    hiking: "Hiking",
    playground: "Playground"
  };
  return names[tag] || tag;
}

function validateTaxonomy(taxonomy) {
  var ids = {};
  ALL_ACTIVITIES.forEach(function(activity) { ids[activity.id] = true; });

  Object.keys(ids).forEach(function(id) {
    var entry = taxonomy[id];
    if (!entry || ACTIVITY_TYPES.indexOf(entry.category) === -1 || !Array.isArray(entry.tags)) {
      throw new Error("Invalid or missing taxonomy for " + id);
    }
    entry.tags.forEach(function(tag) {
      if (TAXONOMY_TAGS.indexOf(tag) === -1) throw new Error("Unknown taxonomy tag " + tag + " for " + id);
    });
  });

  Object.keys(taxonomy).forEach(function(id) {
    if (!ids[id]) throw new Error("Taxonomy has an unknown activity " + id);
  });
}

function stateToHash() {
  var parts = [];
  if (state.character !== "ron") parts.push("c=" + state.character);
  if (state.activityType) parts.push("a=" + state.activityType);
  if (state.selectedTags.length) parts.push("tags=" + state.selectedTags.join(","));
  return parts.length ? "#" + parts.join("&") : "";
}

function hashToState() {
  var hash = window.location.hash.replace("#", "");
  if (!hash) return;

  hash.split("&").forEach(function(pair) {
    var parts = pair.split("=");
    var key = parts[0];
    var value = parts[1];
    if (key === "c" && CHARACTERS[value]) state.character = value;
    if (key === "a" && ACTIVITY_TYPES.indexOf(value) !== -1) state.activityType = value;
    if (key === "tags" && value) {
      state.selectedTags = value.split(",").filter(function(tag) { return TAXONOMY_TAGS.indexOf(tag) !== -1; });
    }
  });
}

function updateHash() {
  var hash = stateToHash();
  history.replaceState(null, "", hash || window.location.pathname);
}

function setupEventHandlers() {
  document.getElementById("character-row").addEventListener("click", function(event) {
    var button = event.target.closest(".character-btn");
    if (!button) return;
    if (button.getAttribute("data-character") !== state.character) {
      state.character = button.getAttribute("data-character");
      state.introIndex = null;
      localStorage.setItem("character", state.character);
      updateHash();
      render();
    }
  });

  document.getElementById("filter-bar").addEventListener("click", function(event) {
    var button = event.target.closest(".pill");
    if (!button) return;
    var type = button.getAttribute("data-filter");
    var value = button.getAttribute("data-value");

    if (type === "activityType") {
      state.activityType = state.activityType === value ? null : value;
    } else if (type === "tag") {
      toggleArrayValue(state.selectedTags, value);
    }
    updateHash();
    render();
  });

  document.getElementById("clear-filters").addEventListener("click", function() {
    state.activityType = null;
    state.selectedTags = [];
    updateHash();
    render();
  });

  document.addEventListener("click", function(event) {
    var button = event.target.closest("[data-action]");
    if (!button) return;
    var action = button.getAttribute("data-action");
    var activityId = button.getAttribute("data-activity-id");

    if (action === "edit-taxonomy") openTaxonomyEditor(activityId);
    if (action === "leave-feedback") openFeedbackEditor(activityId);
    if (action === "open-feedback") openFeedbackEditor(null);
    if (action === "close-sheet") closeSheets();
    if (action === "resolve-feedback") resolveFeedback(button.getAttribute("data-feedback-id"));
  });

  document.getElementById("taxonomy-form").addEventListener("submit", saveTaxonomy);
  document.getElementById("feedback-form").addEventListener("submit", saveFeedback);
}

function openTaxonomyEditor(activityId) {
  var activity = findActivity(activityId);
  var taxonomy = getTaxonomy(activity);
  editingActivityId = activityId;
  document.getElementById("taxonomy-title").textContent = "Fix tags: " + activity.name;
  document.getElementById("taxonomy-choices").innerHTML = buildTaxonomyChoices(taxonomy);
  document.getElementById("taxonomy-status").textContent = "";
  setSheetOpen("taxonomy-sheet", true);
}

function buildTaxonomyChoices(taxonomy) {
  var typeChoices = ACTIVITY_TYPES.map(function(type) {
    return '<label class="editor-choice"><input type="radio" name="category" value="' + type + '"' + (taxonomy.category === type ? " checked" : "") + '> ' + formatTagName(type) + '</label>';
  }).join("");
  var tagChoices = TAXONOMY_TAGS.map(function(tag) {
    return '<label class="editor-choice"><input type="checkbox" name="tag" value="' + tag + '"' + (taxonomy.tags.indexOf(tag) !== -1 ? " checked" : "") + '> ' + formatTagName(tag) + '</label>';
  }).join("");

  return '<fieldset><legend>Type</legend><div class="editor-choices">' + typeChoices + '</div></fieldset>'
    + '<fieldset><legend>Tags</legend><div class="editor-choices">' + tagChoices + '</div></fieldset>';
}

async function saveTaxonomy(event) {
  event.preventDefault();
  var form = event.currentTarget;
  var category = form.querySelector('input[name="category"]:checked').value;
  var tags = Array.prototype.slice.call(form.querySelectorAll('input[name="tag"]:checked')).map(function(input) { return input.value; });
  var status = document.getElementById("taxonomy-status");
  status.textContent = "Saving…";

  try {
    GUIDE_STATE = await updateGuideState({ action: "saveTaxonomy", activityId: editingActivityId, taxonomy: { category: category, tags: tags } });
    status.textContent = "Saved.";
    render();
    window.setTimeout(closeSheets, 500);
  } catch (error) {
    status.textContent = "Could not save. Check your connection and try again.";
  }
}

function openFeedbackEditor(activityId) {
  var activity = activityId ? findActivity(activityId) : null;
  document.getElementById("feedback-activity-id").value = activityId || "";
  document.getElementById("feedback-title").textContent = activity ? "Note about " + activity.name : "Guide feedback";
  document.getElementById("feedback-text").value = "";
  document.getElementById("feedback-status").textContent = "";
  renderFeedbackList();
  setSheetOpen("feedback-sheet", true);
}

async function saveFeedback(event) {
  event.preventDefault();
  var text = document.getElementById("feedback-text").value.trim();
  var status = document.getElementById("feedback-status");
  if (!text) return;
  status.textContent = "Saving…";

  try {
    GUIDE_STATE = await updateGuideState({ action: "addFeedback", activityId: document.getElementById("feedback-activity-id").value || null, text: text });
    document.getElementById("feedback-text").value = "";
    status.textContent = "Saved.";
    renderFeedbackList();
  } catch (error) {
    status.textContent = "Could not save. Check your connection and try again.";
  }
}

async function resolveFeedback(feedbackId) {
  try {
    GUIDE_STATE = await updateGuideState({ action: "resolveFeedback", feedbackId: feedbackId });
    renderFeedbackList();
  } catch (error) {
    document.getElementById("feedback-status").textContent = "Could not update that note.";
  }
}

function renderFeedbackList() {
  var list = document.getElementById("feedback-list");
  var openItems = GUIDE_STATE.feedback.filter(function(item) { return item.status === "open"; });
  if (!openItems.length) {
    list.innerHTML = '<p class="feedback-empty">No open notes yet.</p>';
    return;
  }

  list.innerHTML = openItems.slice().reverse().map(function(item) {
    var activity = item.activityId ? findActivity(item.activityId) : null;
    return '<li class="feedback-item"><p>' + escapeHtml(item.text) + '</p>'
      + '<span>' + (activity ? escapeHtml(activity.name) + ' · ' : '') + formatFeedbackDate(item.createdAt) + '</span>'
      + '<button class="feedback-resolve" data-action="resolve-feedback" data-feedback-id="' + item.id + '">Resolve</button></li>';
  }).join("");
}

function setSheetOpen(id, isOpen) {
  var sheet = document.getElementById(id);
  sheet.hidden = !isOpen;
  document.body.classList.toggle("sheet-open", isOpen);
}

function closeSheets() {
  setSheetOpen("taxonomy-sheet", false);
  setSheetOpen("feedback-sheet", false);
}

async function loadData() {
  var taxonomyResponse = await fetch("data/taxonomy.json", { cache: "no-store" });
  if (!taxonomyResponse.ok) throw new Error("Could not load the activity taxonomy.");
  var taxonomyData = await taxonomyResponse.json();
  BASE_TAXONOMY = taxonomyData.activities;
  validateTaxonomy(BASE_TAXONOMY);

  try {
    GUIDE_STATE = await fetchGuideState();
  } catch (error) {
    GUIDE_STATE = { overrides: {}, feedback: [] };
    showPersistenceNotice("Edits and feedback will save after the Netlify function is deployed.");
  }
}

async function fetchGuideState() {
  var response = await fetch(GUIDE_STATE_API, { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load saved guide state.");
  return response.json();
}

async function updateGuideState(payload) {
  var response = await fetch(GUIDE_STATE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error("Could not save guide state.");
  return response.json();
}

function showPersistenceNotice(message) {
  document.getElementById("persistence-notice").textContent = message;
  document.getElementById("persistence-notice").hidden = false;
}

function findActivity(id) {
  return ALL_ACTIVITIES.filter(function(activity) { return activity.id === id; })[0];
}

function toggleArrayValue(array, value) {
  var index = array.indexOf(value);
  if (index === -1) array.push(value);
  else array.splice(index, 1);
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var index = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  return array;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, function(character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
  });
}

function formatFeedbackDate(date) {
  return new Date(date).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function render() {
  renderCharacterPicker();
  renderFilters();
  renderIntro();
  renderFilterReaction();
  renderResults();
}

async function initialize() {
  try {
    await loadData();
    hashToState();
    setupEventHandlers();
    render();
  } catch (error) {
    document.getElementById("results").innerHTML = '<div class="empty-state"><p class="empty-text">The guide could not load its taxonomy. Please refresh.</p></div>';
  }
}

initialize();
