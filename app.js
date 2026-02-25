// Austin Weekend Guide — App Logic
// State management, filtering, rendering, event handlers, URL state

// ============================================================
// STATE
// ============================================================

const state = {
  character: localStorage.getItem("character") || "ron",
  weather: null,       // "hot" | "cool" | null (any)
  timeOfDay: [],       // ["morning", "afternoon", "evening"] — empty = any
  tags: [],            // ["water", "kidFriendly", ...] — empty = all
  introIndex: null     // Which intro to show (set on character change)
};

// ============================================================
// FILTERING
// ============================================================

function filterActivities(activities, state) {
  return activities.filter(function(activity) {
    // Weather filter: if selected, activity must include that weather or "any"
    if (state.weather) {
      if (!activity.weather.includes(state.weather) && !activity.weather.includes("any")) {
        return false;
      }
    }

    // Time of day filter: if any selected, activity must include at least one
    if (state.timeOfDay.length > 0) {
      var hasMatchingTime = false;
      for (var i = 0; i < state.timeOfDay.length; i++) {
        if (activity.timeOfDay.includes(state.timeOfDay[i])) {
          hasMatchingTime = true;
          break;
        }
      }
      if (!hasMatchingTime) return false;
    }

    // Tag filter: if any selected, activity must match at least one tag
    if (state.tags.length > 0) {
      var hasMatchingTag = false;
      for (var i = 0; i < state.tags.length; i++) {
        if (activity.tags[state.tags[i]]) {
          hasMatchingTag = true;
          break;
        }
      }
      if (!hasMatchingTag) return false;
    }

    // Phase 2: filter out expired events
    if (activity.eventDate) {
      var today = new Date().toISOString().split("T")[0];
      if (activity.eventDate < today) return false;
    }

    return true;
  });
}

// ============================================================
// QUIP SELECTION
// ============================================================

function getQuip(character, activity) {
  // Priority order: more specific tags first
  var tagPriority = ["water", "food", "liveMusic", "comedy", "hiking", "playground", "sports", "outdoors", "indoors", "kidFriendly"];

  for (var i = 0; i < tagPriority.length; i++) {
    var tag = tagPriority[i];
    if (activity.tags[tag] && character.quips[tag]) {
      var quips = character.quips[tag];
      return quips[Math.floor(Math.random() * quips.length)];
    }
  }

  var defaults = character.quips.default;
  return defaults[Math.floor(Math.random() * defaults.length)];
}

function getFilterReaction(character, state) {
  // Show a filter reaction for the most specific active filter
  var priority = ["water", "food", "liveMusic", "hiking", "sports", "kidFriendly", "indoors"];
  for (var i = 0; i < priority.length; i++) {
    if (state.tags.includes(priority[i]) && character.filterReactions[priority[i]]) {
      return character.filterReactions[priority[i]];
    }
  }
  return null;
}

// ============================================================
// RENDERING
// ============================================================

function renderCharacterPicker() {
  var row = document.getElementById("character-row");
  var html = "";
  var ids = Object.keys(CHARACTERS);

  for (var i = 0; i < ids.length; i++) {
    var c = CHARACTERS[ids[i]];
    var isActive = state.character === c.id;
    html += '<button class="character-btn' + (isActive ? " active" : "") + '" '
         + 'data-character="' + c.id + '" '
         + 'style="' + (isActive ? "border-color: " + c.color + "; background: " + c.color + "15;" : "") + '">'
         + '<span class="character-emoji">' + c.emoji + '</span>'
         + '<span class="character-name">' + c.name.split(" ")[0] + '</span>'
         + '</button>';
  }

  row.innerHTML = html;
}

function renderFilters() {
  // Weather pills
  var weatherBtns = document.querySelectorAll('[data-filter="weather"]');
  for (var i = 0; i < weatherBtns.length; i++) {
    var btn = weatherBtns[i];
    if (state.weather === btn.getAttribute("data-value")) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }

  // Time pills
  var timeBtns = document.querySelectorAll('[data-filter="time"]');
  for (var i = 0; i < timeBtns.length; i++) {
    var btn = timeBtns[i];
    if (state.timeOfDay.includes(btn.getAttribute("data-value"))) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }

  // Tag pills
  var tagBtns = document.querySelectorAll('[data-filter="tag"]');
  for (var i = 0; i < tagBtns.length; i++) {
    var btn = tagBtns[i];
    if (state.tags.includes(btn.getAttribute("data-value"))) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }

  // Show/hide clear button
  var clearBtn = document.getElementById("clear-filters");
  var hasFilters = state.weather || state.timeOfDay.length > 0 || state.tags.length > 0;
  clearBtn.style.display = hasFilters ? "inline-block" : "none";
}

function renderIntro() {
  var character = CHARACTERS[state.character];
  var introEl = document.getElementById("character-intro");

  // Pick a random intro if we haven't yet for this character
  if (state.introIndex === null) {
    state.introIndex = Math.floor(Math.random() * character.intros.length);
  }

  var intro = character.intros[state.introIndex];

  introEl.innerHTML = '<div class="intro-quote" style="border-left-color: ' + character.color + ';">'
    + '<p class="intro-text">"' + intro + '"</p>'
    + '<p class="intro-attribution">— ' + character.name + '</p>'
    + '</div>';
}

function renderFilterReaction() {
  var character = CHARACTERS[state.character];
  var reactionEl = document.getElementById("filter-reaction");
  var reaction = getFilterReaction(character, state);

  if (reaction) {
    reactionEl.innerHTML = '<div class="reaction-bubble" style="border-color: ' + character.color + ';">'
      + '<p>"' + reaction + '" — ' + character.name.split(" ")[0] + '</p>'
      + '</div>';
    reactionEl.style.display = "block";
  } else {
    reactionEl.style.display = "none";
  }
}

function renderResults() {
  var character = CHARACTERS[state.character];
  var filtered = filterActivities(ACTIVITIES, state);
  var resultsEl = document.getElementById("results");
  var metaEl = document.getElementById("results-meta");

  // Shuffle results so it feels fresh each time
  shuffleArray(filtered);

  if (filtered.length === 0) {
    metaEl.innerHTML = "";
    resultsEl.innerHTML = '<div class="empty-state" style="border-color: ' + character.color + ';">'
      + '<p class="empty-emoji">' + character.emoji + '</p>'
      + '<p class="empty-text">"' + character.emptyState + '"</p>'
      + '<p class="empty-attribution">— ' + character.name + '</p>'
      + '</div>';
    return;
  }

  metaEl.innerHTML = '<span class="results-count">Showing ' + filtered.length + ' activit' + (filtered.length === 1 ? 'y' : 'ies') + '</span>';

  var html = "";
  for (var i = 0; i < filtered.length; i++) {
    var activity = filtered[i];
    var quip = getQuip(character, activity);

    // Build tag pills
    var tagHtml = "";
    var tagNames = Object.keys(activity.tags);
    for (var j = 0; j < tagNames.length; j++) {
      if (activity.tags[tagNames[j]]) {
        tagHtml += '<span class="card-tag">' + formatTagName(tagNames[j]) + '</span>';
      }
    }

    // Cost display
    var costDisplay = "";
    if (activity.cost) {
      var costMap = { free: "Free", cheap: "$", moderate: "$$", expensive: "$$$" };
      costDisplay = '<span class="card-cost">' + (costMap[activity.cost] || "") + '</span>';
    }

    // Link
    var linkHtml = "";
    if (activity.link) {
      linkHtml = '<a class="card-link" href="' + activity.link + '" target="_blank" rel="noopener">Visit Website →</a>';
    }

    html += '<article class="activity-card">'
      + '<div class="card-header">'
      + '<h3 class="card-name">' + activity.name + '</h3>'
      + (activity.neighborhood ? '<span class="card-neighborhood">' + activity.neighborhood + '</span>' : '')
      + '</div>'
      + '<blockquote class="card-quip" style="border-left-color: ' + character.color + ';">'
      + '<p>"' + quip + '"</p>'
      + '<cite>— ' + character.name.split(" ")[0] + '</cite>'
      + '</blockquote>'
      + '<p class="card-description">' + activity.description + '</p>'
      + '<div class="card-footer">'
      + '<div class="card-tags">' + tagHtml + '</div>'
      + '<div class="card-meta">' + costDisplay + linkHtml + '</div>'
      + '</div>'
      + '</article>';
  }

  resultsEl.innerHTML = html;
}

// ============================================================
// HELPERS
// ============================================================

function formatTagName(tag) {
  var names = {
    outdoors: "Outdoors",
    indoors: "Indoors",
    water: "Water",
    kidFriendly: "Kid-Friendly",
    food: "Food & Drink",
    liveMusic: "Live Music",
    comedy: "Comedy",
    sports: "Sports",
    hiking: "Hiking",
    playground: "Playground"
  };
  return names[tag] || tag;
}

function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

// ============================================================
// URL STATE
// ============================================================

function stateToHash() {
  var parts = [];
  if (state.character !== "ron") parts.push("c=" + state.character);
  if (state.weather) parts.push("w=" + state.weather);
  if (state.timeOfDay.length > 0) parts.push("t=" + state.timeOfDay.join(","));
  if (state.tags.length > 0) parts.push("tags=" + state.tags.join(","));
  return parts.length > 0 ? "#" + parts.join("&") : "";
}

function hashToState() {
  var hash = window.location.hash.replace("#", "");
  if (!hash) return;

  var pairs = hash.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split("=");
    var key = parts[0];
    var val = parts[1];

    if (key === "c" && CHARACTERS[val]) {
      state.character = val;
    } else if (key === "w" && (val === "hot" || val === "cool")) {
      state.weather = val;
    } else if (key === "t") {
      state.timeOfDay = val.split(",").filter(function(v) {
        return ["morning", "afternoon", "evening"].includes(v);
      });
    } else if (key === "tags") {
      state.tags = val.split(",").filter(function(v) {
        return ["outdoors", "indoors", "water", "kidFriendly", "food", "liveMusic", "comedy", "sports", "hiking", "playground"].includes(v);
      });
    }
  }
}

function updateHash() {
  var newHash = stateToHash();
  if (newHash) {
    history.replaceState(null, "", newHash);
  } else {
    history.replaceState(null, "", window.location.pathname);
  }
}

// ============================================================
// EVENT HANDLERS
// ============================================================

function setupEventHandlers() {
  // Character picker
  document.getElementById("character-row").addEventListener("click", function(e) {
    var btn = e.target.closest(".character-btn");
    if (!btn) return;
    var newChar = btn.getAttribute("data-character");
    if (newChar !== state.character) {
      state.character = newChar;
      state.introIndex = null; // New random intro for new character
      localStorage.setItem("character", newChar);
      updateHash();
      render();
    }
  });

  // Filter pills (weather, time, tags)
  document.getElementById("filter-bar").addEventListener("click", function(e) {
    var btn = e.target.closest(".pill");
    if (!btn) return;

    var filterType = btn.getAttribute("data-filter");
    var value = btn.getAttribute("data-value");

    if (filterType === "weather") {
      // Toggle: click same one to deselect
      state.weather = (state.weather === value) ? null : value;
    } else if (filterType === "time") {
      var idx = state.timeOfDay.indexOf(value);
      if (idx >= 0) {
        state.timeOfDay.splice(idx, 1);
      } else {
        state.timeOfDay.push(value);
      }
    } else if (filterType === "tag") {
      var idx = state.tags.indexOf(value);
      if (idx >= 0) {
        state.tags.splice(idx, 1);
      } else {
        state.tags.push(value);
      }
    }

    updateHash();
    render();
  });

  // Clear all filters
  document.getElementById("clear-filters").addEventListener("click", function() {
    state.weather = null;
    state.timeOfDay = [];
    state.tags = [];
    updateHash();
    render();
  });
}

// ============================================================
// MASTER RENDER
// ============================================================

function render() {
  renderCharacterPicker();
  renderFilters();
  renderIntro();
  renderFilterReaction();
  renderResults();
}

// ============================================================
// INIT
// ============================================================

hashToState();
setupEventHandlers();
render();
