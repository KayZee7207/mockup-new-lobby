const rosterData = {
  team1: [
    { name: "Hadigel", country: "TR", color: "#57d15d", role: "Player", os: "[12.35]os" },
    { name: "Croquet", country: "PL", color: "#79ef76", role: "Player", os: "[16.7]os" },
    { name: "DerPwn", country: "US", color: "#79afff", role: "Player", os: "[7.52]os" },
    { name: "[Crd]Achlem", country: "MA", color: "#a19aff", role: "Player", os: "[6.3]os" },
    { name: "Leeg", country: "NL", color: "#59eb37", role: "Player", os: "[24.85]os" },
    { name: "Dmgamerlol", country: "NL", color: "#54d4ff", role: "Player", os: "[24.81]os" },
    { name: "MrMalum", country: "US", color: "#8c67ff", role: "Player", os: "[18.07]os" },
    { name: "Deathmonster", country: "NL", color: "#4d72ff", role: "Player", os: "[25.03]os" }
  ],
  team2: [
    { name: "snake_case", country: "DE", color: "#ff7a1b", role: "Player", os: "[22.89]os" },
    { name: "TimmyG", country: "US", color: "#ff5d55", role: "Player", os: "[26.64]os" },
    { name: "watashimori", country: "BE", color: "#f36ab5", role: "Player", os: "[10.12]os" },
    { name: "Sdragona", country: "EG", color: "#ffb21f", role: "Player", os: "[26.17]os" },
    { name: "SuB_FocuUS786", country: "CA", color: "#ffd66f", role: "Player", os: "[7.91]os" },
    { name: "Luthbruk", country: "SE", color: "#f0c16d", role: "Player", os: "[13.49]os" },
    { name: "Abort", country: "US", color: "#ff6767", role: "Player", os: "[12.83]os" },
    { name: "damiann", country: "RO", color: "#ff568f", role: "Player", os: "[17.33]os" }
  ],
  spectators: [
    { name: "TheBrasilian", country: "BR", color: "#ffffff", role: "Spectator", os: "[27.93]os" }
  ]
};

const friendsData = [
  { name: "Hadigel", country: "TR", color: "#57d15d", status: "In Lobby" },
  { name: "TimmyG", country: "US", color: "#ff5d55", status: "In Game" },
  { name: "watashimori", country: "BE", color: "#f36ab5", status: "Watching Replay" },
  { name: "MrMalum", country: "US", color: "#8c67ff", status: "Online" },
  { name: "TheBrasilian", country: "BR", color: "#ffffff", status: "Offline 5m ago" },
  { name: "snake_case", country: "DE", color: "#ff7a1b", status: "In Lobby" }
];

const replayRows = [
  { mode: "8v8", date: "2026/04/17 11:10 PM", duration: "47m 29s", map: "Supreme Isthmus v2.1", status: "Ended Normally" },
  { mode: "8v8", date: "2026/04/16 11:45 PM", duration: "38m 26s", map: "All That Glitters v2.2.3", status: "Ended Normally" },
  { mode: "5v5", date: "2026/04/12 08:30 PM", duration: "4m 52s", map: "Downs_of_Destruction_V2", status: "Ended Normally" },
  { mode: "4v4", date: "2026/04/12 06:58 PM", duration: "6m 8s", map: "Canis River v1.4", status: "Ended Normally" },
  { mode: "8v8", date: "2026/03/12 04:15 PM", duration: "24m 4s", map: "All That Glitters v2.2.3", status: "Ended Normally" }
];

const reportGames = [
  { id: "g1", present: true, type: "Large Team", map: "Supreme Isthmus v2.1", result: "Won", teams: "2v8", length: "19m", playedAt: "2026-04-18 12:13:55" },
  { id: "g2", present: false, type: "Small Team", map: "Tabula_Remake 1.5", result: "-", teams: "2v3", length: "22m", playedAt: "2026-04-17 11:52:12" },
  { id: "g3", present: true, type: "Large Team", map: "Supreme Isthmus v2.1", result: "-", teams: "2v8", length: "51m", playedAt: "2026-04-17 10:01:12" },
  { id: "g4", present: false, type: "Large Team", map: "Supreme Isthmus v2.1", result: "-", teams: "2v8", length: "27m", playedAt: "2026-04-17 09:04:52" },
  { id: "g5", present: true, type: "Large Team", map: "Supreme Isthmus v2.1", result: "Won", teams: "2v8", length: "17m", playedAt: "2026-04-17 08:31:04" },
  { id: "g6", present: false, type: "Large Team", map: "Supreme Isthmus v2.1", result: "Won", teams: "2v8", length: "49m", playedAt: "2026-04-17 07:21:39" },
  { id: "g7", present: true, type: "Large Team", map: "Supreme Isthmus v2.1", result: "Won", teams: "2v8", length: "12m", playedAt: "2026-04-17 06:29:42" },
  { id: "g8", present: false, type: "Large Team", map: "Supreme Isthmus v2.1", result: "-", teams: "2v8", length: "60m", playedAt: "2026-04-17 06:13:13" }
];

const lobbyChat = [
  { author: "TimmyG", text: "a: I can air", time: "09:24:24" },
  { author: "damiann", text: "a: goi", time: "09:24:25" },
  { author: "damiann", text: "a: go", time: "09:24:28" },
  { author: "Host[US1][008]", text: "s: TimmyG changed pause state to false", time: "09:24:28" },
  { author: "watashimori", text: "a: we are pretty dead", time: "09:24:28" },
  { author: "Sdragona", text: "a: Added Point its ready lets start in 30 second", time: "09:24:29" },
  { author: "Croquet", text: "a: focus right side and don't int", time: "09:26:03" },
  { author: "snake_case", text: "a: if chat gets worse just report after", time: "09:26:19" },
  { author: "TimmyG", text: "a: I'll join in", time: "09:27:03" },
  { author: "Deathmonster", text: "a: Added Point their eco is helping can u too", time: "09:27:31" },
  { author: "Leeg", text: "a: Added Point rushing T3. 5 min", time: "09:27:38" },
  { author: "MrMalum", text: "a: getting eyes", time: "09:28:08" },
  { author: "Dmgamerlol", text: "a: why do U need spam", time: "09:29:18" },
  { author: "Deathmonster", text: "a: spam is not my job mate", time: "09:29:25" }
];

const gameChats = {
  g1: [
    { author: "TimmyG", text: "a: just ignore and play", time: "12:09:12" },
    { author: "watashimori", text: "a: keep flaming and see what happens", time: "12:09:24" },
    { author: "Croquet", text: "a: report after if needed", time: "12:09:35" },
    { author: "TimmyG", text: "a: that was a throw", time: "12:09:42" },
    { author: "TimmyG", text: "a: stop griefing top lane", time: "12:10:05" },
    { author: "snake_case", text: "a: timestamp this one", time: "12:10:11" }
  ],
  g2: [
    { author: "snake_case", text: "a: all good here", time: "11:43:01" },
    { author: "Hadigel", text: "a: gg", time: "11:43:22" }
  ],
  g3: [
    { author: "TimmyG", text: "a: you watching this?", time: "10:12:04" },
    { author: "TheBrasilian", text: "spec: yep", time: "10:12:33" },
    { author: "TimmyG", text: "a: clipping it for the report", time: "10:12:54" }
  ],
  default: lobbyChat
};

const contextMenus = {
  play: ["Message", "Invite to Party", "Friend", "Ignore", "Report User", "Copy Name"],
  watch: ["Message", "Ring", "Invite to Party", "Friend", "Ignore", "Report User", "Copy Name"],
  friends: ["Message", "Invite to Party", "Ignore", "Report User", "Copy Name"]
};

const state = {
  currentScreen: "main",
  selectedReplay: 0,
  reportType: "chat",
  reportStep: "details",
  reportTargets: [],
  confirmedTargets: [],
  reportSource: "Lobby",
  selectedGameId: "g1",
  selectedChatLines: [],
  contextSource: "play"
};

const screenTabs = [...document.querySelectorAll(".tab")];
const screens = [...document.querySelectorAll(".screen")];
const contextMenu = document.getElementById("contextMenu");
const reportModal = document.getElementById("reportModal");
const closeModalButton = document.getElementById("closeModal");
const selectedUsersNode = document.getElementById("selectedUsers");
const gamesTable = document.getElementById("gamesTable");
const chatSelection = document.getElementById("chatSelection");
const confirmUsers = document.getElementById("confirmUsers");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const cancelButton = document.getElementById("cancelButton");
const fileInput = document.getElementById("evidenceInput");
const fileSummary = document.getElementById("fileSummary");
const uploadText = document.getElementById("uploadText");
const reasonInput = document.getElementById("reasonInput");
const selectedGameLabel = document.getElementById("selectedGameLabel");
const successMessage = document.getElementById("successMessage");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const brandButton = document.getElementById("brandButton");
const relationModal = document.getElementById("relationModal");
const relationTitle = document.getElementById("relationTitle");
const relationSubtitle = document.getElementById("relationSubtitle");
const relationList = document.getElementById("relationList");
const closeRelationModalButton = document.getElementById("closeRelationModal");
const cancelRelationButton = document.getElementById("cancelRelationButton");
const confirmRelationButton = document.getElementById("confirmRelationButton");

function countryFlag(code) {
  const palettes = {
    TR: "linear-gradient(180deg,#cf1225 0 100%)",
    PL: "linear-gradient(180deg,#ffffff 0 50%,#dc1636 50% 100%)",
    US: "linear-gradient(180deg,#b0222f 0 15%,#fff 15% 30%,#b0222f 30% 45%,#fff 45% 60%,#b0222f 60% 75%,#fff 75% 90%,#b0222f 90% 100%)",
    MA: "linear-gradient(180deg,#bd2030 0 100%)",
    NL: "linear-gradient(180deg,#b02931 0 33%,#fff 33% 66%,#2356bf 66% 100%)",
    DE: "linear-gradient(180deg,#111 0 33%,#bf1c1c 33% 66%,#f1d026 66% 100%)",
    BE: "linear-gradient(90deg,#111 0 33%,#f3d44f 33% 66%,#d5314c 66% 100%)",
    EG: "linear-gradient(180deg,#c83e2f 0 33%,#fff 33% 66%,#111 66% 100%)",
    CA: "linear-gradient(90deg,#d13344 0 20%,#fff 20% 80%,#d13344 80% 100%)",
    SE: "linear-gradient(180deg,#0f4ea8 0 100%)",
    RO: "linear-gradient(90deg,#1b54b4 0 33%,#f2d144 33% 66%,#cc273b 66% 100%)",
    BR: "linear-gradient(180deg,#149646 0 100%)"
  };

  return palettes[code] || "linear-gradient(180deg,#555,#888)";
}

function renderRoster(container, options = {}) {
  const { includeOs = true, groups = rosterData } = options;
  container.innerHTML = Object.entries(groups).map(([key, players]) => {
    const title = key === "team1" ? "Team 1" : key === "team2" ? "Team 2" : "Spectators";
    return `
      <section class="roster-group">
        <h3>${title}</h3>
        ${players.map((player) => `
          <div class="player-row" data-context-source="${options.contextSource}" data-user="${player.name}" data-role="${player.role}">
            <span class="flag" style="background:${countryFlag(player.country)}"></span>
            <span class="player-name" style="color:${player.color}">${player.name} <span class="player-role">${player.role}</span></span>
            ${includeOs ? `<span class="os-score">${player.os}</span>` : ""}
          </div>
        `).join("")}
      </section>
    `;
  }).join("");
}

function renderFriends() {
  const node = document.getElementById("friendsList");
  node.innerHTML = friendsData.map((friend) => `
    <div class="friend-row" data-context-source="friends" data-user="${friend.name}" data-role="Friend">
      <span class="flag" style="background:${countryFlag(friend.country)}"></span>
      <span class="friend-name" style="color:${friend.color}">${friend.name}</span>
      <span class="player-role">${friend.status}</span>
    </div>
  `).join("");
}

function renderLobbyChat() {
  const node = document.getElementById("lobbyChat");
  node.innerHTML = lobbyChat.map((line, index) => `
    <div class="chat-line">
      <button class="chat-author context-trigger" data-context-source="play" data-user="${line.author}" data-line-index="${index}" type="button">${line.author}</button>
      <div class="chat-message">${line.text.includes("report") ? line.text.replace("report", "<em>report</em>") : line.text}</div>
      <div class="chat-time">${line.time}</div>
    </div>
  `).join("");
}

function renderReplayTable() {
  const node = document.getElementById("replayTable");
  node.innerHTML = `
    <div class="replay-head">
      <span>Mode</span>
      <span>Date</span>
      <span>Duration</span>
      <span>Map</span>
      <span>Status</span>
    </div>
    ${replayRows.map((row, index) => `
      <button class="replay-row ${index === state.selectedReplay ? "is-selected" : ""}" data-replay-index="${index}" type="button">
        <span>${row.mode}</span>
        <span>${row.date}</span>
        <span>${row.duration}</span>
        <span>${row.map}</span>
        <span>${row.status}</span>
      </button>
    `).join("")}
  `;
}

function renderGamesTable() {
  gamesTable.innerHTML = `
    <div class="game-head">
      <span></span>
      <span>Type</span>
      <span>Map</span>
      <span>Result</span>
      <span>Teams</span>
      <span>Length</span>
      <span>Played At</span>
    </div>
    ${reportGames.map((game) => `
      <label class="game-row ${state.selectedGameId === game.id ? "is-selected" : ""}" data-game-id="${game.id}">
        <input type="radio" name="gameSelect" ${state.selectedGameId === game.id ? "checked" : ""}>
        <span>${game.type} ${game.present ? '<span class="presence-flag">!</span>' : ""}</span>
        <span>${game.map}</span>
        <span>${game.result}</span>
        <span>${game.teams}</span>
        <span>${game.length}</span>
        <span>${game.playedAt}</span>
      </label>
    `).join("")}
  `;
}

function renderChatSelection() {
  const sourceChat = gameChats[state.selectedGameId] || gameChats.default;
  selectedGameLabel.textContent = (reportGames.find((game) => game.id === state.selectedGameId) || reportGames[0]).map;
  chatSelection.innerHTML = sourceChat.map((line, index) => `
    <label class="chat-select-row">
      <input type="checkbox" data-chat-line="${index}" ${state.selectedChatLines.includes(index) ? "checked" : ""}>
      <span class="chat-author">${line.author}</span>
      <span>${line.text}</span>
      <span class="chat-time">${line.time}</span>
    </label>
  `).join("");
}

function renderConfirmUsers() {
  const selectedLines = state.selectedChatLines.map((index) => (gameChats[state.selectedGameId] || gameChats.default)[index]).filter(Boolean);
  const uniqueNames = [...new Set(selectedLines.map((line) => line.author))];
  const baseTargets = uniqueNames.length ? uniqueNames : state.reportTargets;
  if (!state.confirmedTargets.length) {
    state.confirmedTargets = [...baseTargets];
  }

  confirmUsers.innerHTML = baseTargets.map((name) => `
    <label class="confirm-row">
      <input type="checkbox" data-confirm-user="${name}" ${state.confirmedTargets.includes(name) ? "checked" : ""}>
      <span>${name}</span>
    </label>
  `).join("");

  renderSelectedUsers();
}

function renderSelectedUsers() {
  const selectedLines = state.selectedChatLines.map((index) => (gameChats[state.selectedGameId] || gameChats.default)[index]).filter(Boolean);
  const chatTargets = [...new Set(selectedLines.map((line) => line.author))];
  const useConfirmedSelection =
    state.reportType === "chat" &&
    (state.reportStep === "confirm" || state.reportStep === "chat") &&
    state.confirmedTargets.length > 0;
  const sidebarUsers = useConfirmedSelection
    ? state.confirmedTargets
    : (state.reportStep === "confirm" && chatTargets.length ? chatTargets : state.reportTargets);

  selectedUsersNode.innerHTML = sidebarUsers.map((name) => `<span class="user-pill">${name}</span>`).join("");
}

function setScreen(screenId) {
  state.currentScreen = screenId;
  screenTabs.forEach((tab) => {
    const tabScreen = tab.dataset.screen;
    const active = (screenId === "main" && tabScreen === "playLobby") || tabScreen === screenId;
    tab.classList.toggle("is-active", active);
  });
  screens.forEach((screen) => {
    screen.classList.toggle("is-visible", screen.dataset.screen === screenId);
  });
  hideContextMenu();
}

function showContextMenu(x, y, source, users) {
  state.contextSource = source;
  const items = contextMenus[source];
  contextMenu.innerHTML = items.map((item) => `
    <button class="menu-item" data-menu-action="${item}" data-users="${users.join("|")}" type="button">${item}</button>
  `).join("");
  contextMenu.hidden = false;
  contextMenu.style.left = `${Math.min(x, window.innerWidth - 210)}px`;
  contextMenu.style.top = `${Math.min(y, window.innerHeight - 240)}px`;
}

function hideContextMenu() {
  contextMenu.hidden = true;
}

function openReportModal(users, source) {
  state.reportTargets = [...users];
  state.confirmedTargets = [...users];
  state.reportSource = source === "friends" ? "Friends list" : source === "watch" ? "Replay browser" : "Lobby";
  state.reportStep = "details";
  state.reportType = "chat";
  state.selectedGameId = "g1";
  state.selectedChatLines = [];
  reportModal.hidden = false;
  modalTitle.textContent = "Report User";
  modalSubtitle.textContent = "False or intentionally erroneous reports can result in loss of your ability to submit reports.";
  document.querySelectorAll("[data-report-type]").forEach((pill) => {
    pill.classList.toggle("is-selected", pill.dataset.reportType === "chat");
  });
  renderSelectedUsers();
  renderGamesTable();
  renderChatSelection();
  renderConfirmUsers();
  updateModalStep();
}

function closeReportModal() {
  reportModal.hidden = true;
}

function updateModalStep() {
  document.querySelectorAll(".report-step").forEach((step) => {
    step.classList.toggle("is-active", step.dataset.step === state.reportStep);
  });

  backButton.hidden = state.reportStep === "details" || state.reportStep === "success";
  cancelButton.hidden = state.reportStep === "success";

  if (state.reportStep === "details") {
    nextButton.hidden = false;
    nextButton.textContent = state.reportType === "chat" ? "Review Chat" : "Submit Report";
    nextButton.disabled = !state.selectedGameId || !reasonInput.value.trim();
  } else if (state.reportStep === "chat") {
    nextButton.hidden = false;
    nextButton.textContent = "Continue";
    nextButton.disabled = state.selectedChatLines.length === 0;
  } else if (state.reportStep === "confirm") {
    nextButton.hidden = false;
    nextButton.textContent = "Submit Report";
    nextButton.disabled = state.confirmedTargets.length === 0;
  } else {
    nextButton.hidden = true;
  }
}

function submitReport() {
  const reportNumber = String(Math.floor(1000000 + Math.random() * 9000000));
  const targets = state.reportType === "chat" ? state.confirmedTargets : state.reportTargets;
  state.reportStep = "success";
  successMessage.textContent = `Thank you for your report. The report number is ${reportNumber}. Your report is now in the queue. If there's a result, please check it on the BAR Discord. If there's no result after some time, it's probably because your incident didn't violate the code of conduct. Reported user(s): ${targets.join(", ")}.`;
  updateModalStep();
}

function getRelationUsers() {
  if (state.reportType === "chat" && state.confirmedTargets.length) {
    return state.confirmedTargets;
  }
  return state.reportTargets;
}

function openRelationModal(action) {
  const users = getRelationUsers();
  const actionClass = action.toLowerCase();
  relationTitle.textContent = `${action} Player`;
  relationSubtitle.textContent = `Choose which reported player should receive ${action.toLowerCase()}.`;
  relationList.innerHTML = users.map((name, index) => `
    <button class="relation-row ${index === 0 ? "is-selected" : ""}" type="button" data-relation-user="${name}">
      <input type="radio" name="relationUser" ${index === 0 ? "checked" : ""}>
      <span>${name}</span>
      <span class="relation-tag ${actionClass}">${action}</span>
    </button>
  `).join("");
  relationModal.dataset.selectedUser = users[0] || "";
  relationModal.hidden = false;
}

function closeRelationModal() {
  relationModal.hidden = true;
}

renderRoster(document.getElementById("playRoster"), { contextSource: "play" });
renderRoster(document.getElementById("watchRoster"), { includeOs: false, contextSource: "watch" });
renderFriends();
renderLobbyChat();
renderReplayTable();
renderGamesTable();
renderChatSelection();
renderConfirmUsers();

screenTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setScreen(tab.dataset.screen);
  });
});

brandButton.addEventListener("click", () => setScreen("main"));

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => setScreen(button.dataset.jump));
});

document.addEventListener("click", (event) => {
  if (!contextMenu.contains(event.target)) {
    hideContextMenu();
  }

  const relationActionButton = event.target.closest("[data-relation-action]");
  if (relationActionButton) {
    openRelationModal(relationActionButton.dataset.relationAction);
  }
});

document.addEventListener("contextmenu", (event) => {
  const row = event.target.closest(".player-row, .friend-row, .context-trigger");
  if (!row) {
    hideContextMenu();
    return;
  }

  event.preventDefault();
  showContextMenu(event.clientX, event.clientY, row.dataset.contextSource, [row.dataset.user]);
});

contextMenu.addEventListener("click", (event) => {
  const action = event.target.dataset.menuAction;
  if (!action) {
    return;
  }
  const users = (event.target.dataset.users || "").split("|").filter(Boolean);
  if (action === "Report User") {
    openReportModal(users, state.contextSource);
  }
  hideContextMenu();
});

document.getElementById("reportTypeGroup").addEventListener("click", (event) => {
  const button = event.target.closest("[data-report-type]");
  if (!button) {
    return;
  }
  state.reportType = button.dataset.reportType;
  document.querySelectorAll("[data-report-type]").forEach((pill) => {
    pill.classList.toggle("is-selected", pill === button);
  });
  updateModalStep();
});

gamesTable.addEventListener("click", (event) => {
  const row = event.target.closest(".game-row");
  if (!row) {
    return;
  }
  state.selectedGameId = row.dataset.gameId;
  renderGamesTable();
  renderChatSelection();
  updateModalStep();
});

chatSelection.addEventListener("change", (event) => {
  if (!event.target.matches("[data-chat-line]")) {
    return;
  }
  const lineIndex = Number(event.target.dataset.chatLine);
  if (event.target.checked) {
    state.selectedChatLines.push(lineIndex);
  } else {
    state.selectedChatLines = state.selectedChatLines.filter((index) => index !== lineIndex);
  }
  renderConfirmUsers();
  updateModalStep();
});

confirmUsers.addEventListener("change", (event) => {
  if (!event.target.matches("[data-confirm-user]")) {
    return;
  }
  const user = event.target.dataset.confirmUser;
  if (event.target.checked) {
    state.confirmedTargets = [...new Set([...state.confirmedTargets, user])];
  } else {
    state.confirmedTargets = state.confirmedTargets.filter((name) => name !== user);
  }
  renderSelectedUsers();
  updateModalStep();
});

reasonInput.addEventListener("input", updateModalStep);

fileInput.addEventListener("change", () => {
  const files = [...fileInput.files];
  const filtered = files.slice(0, 3);
  if (files.length > 3) {
    uploadText.textContent = `${filtered.length} files selected`;
    fileSummary.textContent = `Only the first 3 files will be used: ${filtered.map((file) => file.name).join(", ")}`;
  } else if (filtered.length) {
    uploadText.textContent = filtered.map((file) => file.name).join(", ");
    fileSummary.textContent = `Selected: ${filtered.map((file) => file.name).join(", ")}`;
  } else {
    uploadText.textContent = "No files selected.";
    fileSummary.textContent = "No files selected.";
  }
});

nextButton.addEventListener("click", () => {
  if (state.reportStep === "details") {
    if (state.reportType === "chat") {
      state.reportStep = "chat";
      modalTitle.textContent = "Chat Report";
      modalSubtitle.textContent = "Select one or more chat lines from the chosen game.";
    } else {
      submitReport();
    }
  } else if (state.reportStep === "chat") {
    const selectedLines = state.selectedChatLines.map((index) => (gameChats[state.selectedGameId] || gameChats.default)[index]).filter(Boolean);
    const uniqueNames = [...new Set(selectedLines.map((line) => line.author))];
    state.confirmedTargets = uniqueNames.length ? [...uniqueNames] : [...state.reportTargets];
    state.reportStep = "confirm";
    modalTitle.textContent = "Confirm Report";
    modalSubtitle.textContent = "Confirm every player that should be included before submitting.";
    renderConfirmUsers();
    renderSelectedUsers();
  } else if (state.reportStep === "confirm") {
    submitReport();
  }
  updateModalStep();
});

backButton.addEventListener("click", () => {
  if (state.reportStep === "chat") {
    state.reportStep = "details";
    modalTitle.textContent = "Report User";
    modalSubtitle.textContent = "False or intentionally erroneous reports can result in loss of your ability to submit reports.";
  } else if (state.reportStep === "confirm") {
    state.reportStep = "chat";
    modalTitle.textContent = "Chat Report";
    modalSubtitle.textContent = "Select one or more chat lines from the chosen game.";
  }
  renderSelectedUsers();
  updateModalStep();
});

cancelButton.addEventListener("click", closeReportModal);
closeModalButton.addEventListener("click", closeReportModal);

reportModal.addEventListener("click", (event) => {
  if (event.target === reportModal) {
    closeReportModal();
  }
});

relationList.addEventListener("click", (event) => {
  const row = event.target.closest("[data-relation-user]");
  if (!row) {
    return;
  }

  relationModal.dataset.selectedUser = row.dataset.relationUser;
  relationList.querySelectorAll(".relation-row").forEach((node) => {
    const isSelected = node.dataset.relationUser === relationModal.dataset.selectedUser;
    node.classList.toggle("is-selected", isSelected);
    const radio = node.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = isSelected;
    }
  });
});

confirmRelationButton.addEventListener("click", closeRelationModal);
cancelRelationButton.addEventListener("click", closeRelationModal);
closeRelationModalButton.addEventListener("click", closeRelationModal);

relationModal.addEventListener("click", (event) => {
  if (event.target === relationModal) {
    closeRelationModal();
  }
});

document.getElementById("replayTable").addEventListener("click", (event) => {
  const row = event.target.closest("[data-replay-index]");
  if (!row) {
    return;
  }
  state.selectedReplay = Number(row.dataset.replayIndex);
  renderReplayTable();
});

setScreen("main");
updateModalStep();
