// =======================================
// script.js - Versión corregida y completa
// =======================================

// --- datos de personajes (carga desde localStorage si existe) ---
const charactersData = JSON.parse(localStorage.getItem('smashCharacters')) || {
  "mario": {tier:"A+", score:7.5, tournamentPoints: 0},
  "donkeykong": {tier:"C+", score:5, tournamentPoints: 0},
  "link": {tier:"C-", score:4.5, tournamentPoints: 0},
  "samus": {tier:"S+", score:10, tournamentPoints: 0},
  "darksamus": {tier:"S+", score:10, tournamentPoints: 0},
  "yoshi": {tier:"A", score:7, tournamentPoints: 0},
  "kirby": {tier:"C+", score:5, tournamentPoints: 0},
  "fox": {tier:"S-", score:8, tournamentPoints: 0},
  "pikachu": {tier:"S-", score:8, tournamentPoints: 0},
  "luigi": {tier:"S-", score:8, tournamentPoints: 0},
  "ness": {tier:"B-", score:5.5, tournamentPoints: 0},
  "captainfalcon": {tier:"B+", score:6, tournamentPoints: 0},
  "jigglypuff": {tier:"C-", score:4.5, tournamentPoints: 0},
  "peach": {tier:"A", score:7, tournamentPoints: 0},
  "daisy": {tier:"A", score:7, tournamentPoints: 0},
  "bowser": {tier:"C+", score:5, tournamentPoints: 0},
  "iceclimbers": {tier:"B-", score:5.5, tournamentPoints: 0},
  "sheik": {tier:"B-", score:5.5, tournamentPoints: 0},
  "zelda": {tier:"D", score:4, tournamentPoints: 0},
  "drmario": {tier:"C-", score:4.5, tournamentPoints: 0},
  "pichu": {tier:"B-", score:5.5, tournamentPoints: 0},
  "falco": {tier:"A", score:7, tournamentPoints: 0},
  "marth": {tier:"C-", score:4.5, tournamentPoints: 0},
  "lucina": {tier:"A-", score:6.5, tournamentPoints: 0},
  "younglink": {tier:"B+", score:6, tournamentPoints: 0},
  "ganondorf": {tier:"B-", score:5.5, tournamentPoints: 0},
  "mewtwo": {tier:"C+", score:5, tournamentPoints: 0},
  "roy": {tier:"A+", score:7.5, tournamentPoints: 0},
  "chrom": {tier:"C+", score:5, tournamentPoints: 0},
  "mrgamewatch": {tier:"S", score:9, tournamentPoints: 0},
  "metaknight": {tier:"B-", score:5.5, tournamentPoints: 0},
  "pit": {tier:"B+", score:6, tournamentPoints: 0},
  "darkpit": {tier:"B+", score:6, tournamentPoints: 0},
  "samuszero": {tier:"A-", score:6.5, tournamentPoints: 0},
  "wario": {tier:"A", score:7, tournamentPoints: 0},
  "snake": {tier:"S+", score:10, tournamentPoints: 0},
  "ike": {tier:"D", score:4, tournamentPoints: 0},
  "pokemontrainer": {tier:"A-", score:6.5, tournamentPoints: 0},
  "diddykong": {tier:"S-", score:8, tournamentPoints: 0},
  "lucas": {tier:"C+", score:5, tournamentPoints: 0},
  "sonic": {tier:"S", score:9, tournamentPoints: 0},
  "kingdedede": {tier:"D", score:4, tournamentPoints: 0},
  "olimar": {tier:"A", score:7, tournamentPoints: 0},
  "lucario": {tier:"C+", score:5, tournamentPoints: 0},
  "rob": {tier:"S", score:9, tournamentPoints: 0},
  "toonlink": {tier:"A-", score:6.5, tournamentPoints: 0},
  "wolf": {tier:"A", score:7, tournamentPoints: 0},
  "villager": {tier:"D", score:4, tournamentPoints: 0},
  "megaman": {tier:"B-", score:5.5, tournamentPoints: 0},
  "wiifittrainer": {tier:"C+", score:5, tournamentPoints: 0},
  "rosalinaluma": {tier:"B+", score:6, tournamentPoints: 0},
  "littlemac": {tier:"E", score:3, tournamentPoints: 0},
  "greninja": {tier:"A-", score:6.5, tournamentPoints: 0},
  "mii": {tier:"A-", score:6.5, tournamentPoints: 0},
  "palutena": {tier:"A+", score:7.5, tournamentPoints: 0},
  "pacman": {tier:"A-", score:6.5, tournamentPoints: 0},
  "robin": {tier:"C+", score:5, tournamentPoints: 0},
  "shulk": {tier:"A-", score:6.5, tournamentPoints: 0},
  "bowserjr": {tier:"C+", score:5, tournamentPoints: 0},
  "duckhunt": {tier:"C-", score:4.5, tournamentPoints: 0},
  "ryu": {tier:"A-", score:6.5, tournamentPoints: 0},
  "ken": {tier:"B+", score:6, tournamentPoints: 0},
  "cloud": {tier:"A+", score:7.5, tournamentPoints: 0},
  "corrin": {tier:"A", score:7, tournamentPoints: 0},
  "bayonetta": {tier:"S", score:9, tournamentPoints: 0},
  "inkling": {tier:"B-", score:5.5, tournamentPoints: 0},
  "ridley": {tier:"A+", score:7.5, tournamentPoints: 0},
  "simon": {tier:"D", score:4, tournamentPoints: 0},
  "richter": {tier:"D", score:4, tournamentPoints: 0},
  "kingkrool": {tier:"D", score:4, tournamentPoints: 0},
  "isabelle": {tier:"C-", score:4.5, tournamentPoints: 0},
  "incineroar": {tier:"A+", score:7.5, tournamentPoints: 0},
  "piranhaplant": {tier:"C-", score:4.5, tournamentPoints: 0},
  "joker": {tier:"S-", score:8, tournamentPoints: 0},
  "hero": {tier:"A-", score:6.5, tournamentPoints: 0},
  "banjokazooie": {tier:"C+", score:5, tournamentPoints: 0},
  "terry": {tier:"A+", score:7.5, tournamentPoints: 0},
  "byleth": {tier:"A+", score:7.5, tournamentPoints: 0},
  "minmin": {tier:"S-", score:8, tournamentPoints: 0},
  "steve": {tier:"S+", score:10, tournamentPoints: 0},
  "sephiroth": {tier:"A+", score:7.5, tournamentPoints: 0},
  "pyraymythra": {tier:"S", score:9, tournamentPoints: 0},
  "kazuya": {tier:"S+", score:10, tournamentPoints: 0},
  "sora": {tier:"A", score:7, tournamentPoints: 0}
};
const characters = Object.keys(charactersData);

// --- refs DOM ---
const roulette = document.getElementById("roulette");
const spinBtn = document.getElementById("spin");
const historyDiv = document.getElementById("history");
const teamsDiv = document.getElementById("teams");
const generateTeamsBtn = document.getElementById("generateTeams");
const teamSizeInput = document.getElementById("teamSize");
const rerollToggle = document.getElementById("enableReroll");
const numTeamsInput = document.getElementById("numTeams");
const assignModeRadios = document.getElementsByName("assignMode");
const matchButton = document.getElementById("matchButton");
const winnerSelection = document.getElementById("winnerSelection");
const teamButtons = document.querySelector(".team-buttons");
const cancelWinnerSelection = document.getElementById("cancelWinnerSelection");
const catalogBtn = document.getElementById("catalogBtn");

// config
const configToggle = document.getElementById("configToggle");
const configContent = document.querySelector(".config-content");
const toggleMusicBtn = document.getElementById("toggleMusic");
const toggleNarrationBtn = document.getElementById("toggleNarration");
const toggleRandomAudioBtn = document.getElementById("toggleRandomAudio");
const resetPageBtn = document.getElementById("resetPage");

// audio & UI state
const itemWidth = 136;
let currentOffset = 0;
let animating = false;
let teams = []; // tendrá objetos { name, members: [{character, pending, locked}], rerollAvailable }
let currentTeamIndex = 0;
let currentSlotIndex = 0;
let waitingForConfirmation = false; // true cuando hay un slot pendiente por confirmar/re-roll
let allTeamsComplete = false;
let musicMuted = false;
let narrationMuted = false;
let randomAudioMuted = false;

// audios
const narradorAudio = new Audio();
const backgroundMusic = new Audio('audio/fondo.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.6;
const longAudio = new Audio('audio/larga_duracion.mp3');
let longAudioLoaded = false;
longAudio.addEventListener('canplaythrough', () => { longAudioLoaded = true; });
longAudio.addEventListener('error', (e)=> console.error("Error audio largo:", e));

let musicStarted = false;
function startMusic() {
  if (!musicStarted && !musicMuted) {
    backgroundMusic.play().catch(()=>{});
    musicStarted = true;
    document.removeEventListener("click", startMusic);
  }
}
document.addEventListener("click", startMusic);

// ------------------------
// Helper: Persistencia
// ------------------------
function saveCharacters() {
  localStorage.setItem('smashCharacters', JSON.stringify(charactersData));
}
function saveAllState() {
  saveCharacters();
  // no guardo teams/historial por simplicidad (puedes añadir si quieres)
}

// ------------------------
// Render: carrusel
// ------------------------
function renderCarousel() {
  if (!roulette) return;
  roulette.innerHTML = "";
  const repeat = 5;
  for (let r=0; r<repeat; r++) {
    characters.forEach(name => {
      const div = document.createElement("div");
      div.className = "character";
      const img = document.createElement("img");
      img.src = `images/${name}.png`;
      img.alt = name;
      img.onerror = () => { img.style.opacity = "0.4"; };
      const p = document.createElement("p");
      p.textContent = name.toUpperCase() + " ";
      const tierSpan = document.createElement("span");
      tierSpan.className = "tier-text";
      tierSpan.textContent = charactersData[name].tier;
      const pointsSpan = document.createElement("span");
      pointsSpan.className = "tournament-points";
      pointsSpan.textContent = ` ⭐${charactersData[name].tournamentPoints}`; // siempre mostrar, incluso 0
      p.appendChild(tierSpan);
      p.appendChild(pointsSpan);
      div.appendChild(img);
      div.appendChild(p);
      roulette.appendChild(div);
    });
  }
}
renderCarousel();

// ------------------------
// Historial (solo confirmados)
// ------------------------
let historyList = []; // guardamos solo los confirmados
function pushHistory(name) {
  historyList.unshift(name);
  renderHistory();
}
function renderHistory() {
  if (!historyDiv) return;
  historyDiv.innerHTML = "";
  historyList.forEach(name => {
    const div = document.createElement("div");
    div.className = "history-item";
    const img = document.createElement("img");
    img.src = `images/${name}.png`;
    img.alt = name;
    const p = document.createElement("p");
    p.textContent = name.toUpperCase();
    const tierSpan = document.createElement("span");
    tierSpan.className = "tier-text";
    tierSpan.textContent = charactersData[name].tier;
    const pointsSpan = document.createElement("span");
    pointsSpan.className = "tournament-points";
    pointsSpan.textContent = ` ⭐${charactersData[name].tournamentPoints}`;
    p.appendChild(pointsSpan);
    p.appendChild(document.createTextNode(" "));
    p.appendChild(tierSpan);
    div.appendChild(img);
    div.appendChild(p);
    historyDiv.appendChild(div);
  });
}

// ------------------------
// Crear equipos
// ------------------------
function createTeams(size) {
  const numTeams = parseInt(numTeamsInput.value, 10) || 2;
  teams = [];
  for (let i = 0; i < numTeams; i++) {
    const members = [];
    for (let s = 0; s < size; s++) {
      members.push({
        character: null,   // nombre del personaje asignado (string) o null
        pending: false,    // true justo después del spin antes de confirmar/reroll
        locked: false      // true cuando confirmado o auto-confirmado por reroll
      });
    }
    teams.push({
      name: `Equipo ${i+1}`,
      members,
      rerollAvailable: true // 1 por equipo
    });
  }
  currentTeamIndex = 0;
  currentSlotIndex = 0;
  waitingForConfirmation = false;
  allTeamsComplete = false;
  spinBtn.disabled = false;
  matchButton.disabled = true;
  winnerSelection.classList.add("hidden");
  historyList = [];
  renderTeams();
  renderHistory();
}

// ------------------------
// Render equipos
// ------------------------
function calculateTeamScore(team) {
  return team.members.reduce((acc, m) => {
    if (!m.character) return acc;
    return acc + (charactersData[m.character]?.score || 0);
  }, 0);
}
function renderTeams() {
  if (!teamsDiv) return;
  teamsDiv.innerHTML = "";
  teams.forEach((team, ti) => {
    const div = document.createElement("div");
    div.className = "team";
    const h3 = document.createElement("h3");
    h3.textContent = team.name;
    div.appendChild(h3);

    const totalScore = document.createElement("div");
    totalScore.className = "total-score";
    totalScore.textContent = `PA: ${calculateTeamScore(team).toFixed(1)}`;
    div.appendChild(totalScore);

    team.members.forEach((slot, mi) => {
      const slotDiv = document.createElement("div");
      slotDiv.className = "slot";
      if (slot.character) {
        const img = document.createElement("img");
        img.src = `images/${slot.character}.png`;
        img.alt = slot.character;
        slotDiv.appendChild(img);

        const infoDiv = document.createElement("div");
        infoDiv.className = "character-info";

        const nameSpan = document.createElement("div");
        nameSpan.className = "character-name";
        nameSpan.textContent = slot.character.toUpperCase();
        infoDiv.appendChild(nameSpan);

        const detailsDiv = document.createElement("div");
        detailsDiv.className = "character-details";

        const tierEl = document.createElement("div");
        tierEl.className = "character-tier";
        tierEl.innerHTML = `Tier: <span>${charactersData[slot.character].tier}</span>`;

        const scoreEl = document.createElement("div");
        scoreEl.className = "character-score";
        scoreEl.innerHTML = `PA: <span>${charactersData[slot.character].score}</span>`;

        detailsDiv.appendChild(tierEl);
        detailsDiv.appendChild(scoreEl);

        // puntos torneo (siempre se muestran)
        const pointsDiv = document.createElement("div");
        pointsDiv.className = "tournament-points";
        pointsDiv.textContent = `Puntos de Torneo: ⭐${charactersData[slot.character].tournamentPoints}`;
        infoDiv.appendChild(detailsDiv);
        infoDiv.appendChild(pointsDiv);

        // Si el slot está pendiente y no está locked, mostrar botones
        if (slot.pending && !slot.locked) {
          // Confirmar
          const confirmBtn = document.createElement("button");
          confirmBtn.textContent = "✔️ Confirmar";
          confirmBtn.onclick = () => confirmAssignment(ti, mi);
          infoDiv.appendChild(confirmBtn);

          // Reroll (si el equipo todavía tiene reroll disponible)
          if (rerollToggle && rerollToggle.checked && team.rerollAvailable) {
            const rerollBtn = document.createElement("button");
            rerollBtn.textContent = "🔄 Reroll";
            rerollBtn.onclick = () => rerollMember(ti, mi);
            infoDiv.appendChild(rerollBtn);
          }
        } else {
          // Si está locked, mostrar etiqueta
          if (slot.locked) {
            const lockedEl = document.createElement("div");
            lockedEl.style.fontSize = "12px";
            lockedEl.style.color = "#9e9e9e";
            lockedEl.textContent = slot.pending ? "Pendiente (bloqueado)" : "Fijo";
            infoDiv.appendChild(lockedEl);
          }
        }

        slotDiv.appendChild(infoDiv);
      } else {
        const empty = document.createElement("div");
        empty.className = "character-empty";
        empty.textContent = "Vacío";
        slotDiv.appendChild(empty);
      }
      div.appendChild(slotDiv);
    });

    teamsDiv.appendChild(div);
  });

  checkAllTeamsComplete();
}

// ------------------------
// Avanzar puntero al siguiente slot libre (skip locked)
// Devuelve true si avanzó a un slot válido, false si no hay más slots.
// ------------------------
function findNextAvailableSlot() {
  const teamSize = teams.length ? teams[0].members.length : 0;
  let iterations = 0;
  const maxIterations = teams.length * teamSize + 5;

  while (iterations < maxIterations) {
    if (currentTeamIndex >= teams.length) return false;
    const slot = teams[currentTeamIndex].members[currentSlotIndex];
    // si slot está vacío y no locked => es válido
    if (!slot.character && !slot.locked) return true;
    // si no vacío but not locked? shouldn't happen, but skip
    // mover puntero al siguiente
    // Avanzar en modo round/full de acuerdo a radio
    const mode = [...assignModeRadios].find(r=>r.checked)?.value || "round";
    if (mode === "round") {
      currentTeamIndex = (currentTeamIndex + 1) % teams.length;
      if (currentTeamIndex === 0) currentSlotIndex++;
    } else { // full
      currentSlotIndex++;
      if (currentSlotIndex >= teamSize) {
        currentSlotIndex = 0;
        currentTeamIndex++;
      }
    }
    iterations++;
  }
  return false;
}

// ------------------------
// Asignar ganador del spin al slot actual (pendiente)
// ------------------------
function assignToTeamPending(name) {
  if (!teams.length) {
    pushHistory(name); // sin teams, solo historial
    spinBtn.disabled = false;
    return;
  }

  // Buscar un slot válido (skip locked)
  const hasSlot = findNextAvailableSlot();
  if (!hasSlot) {
    // ya no hay slots disponibles
    checkAllTeamsComplete();
    spinBtn.disabled = false;
    return;
  }

  // Asignar al slot actual
  const team = teams[currentTeamIndex];
  const slot = team.members[currentSlotIndex];

  // Si de alguna manera está locked, no debemos asignar
  if (slot.locked) {
    spinBtn.disabled = false;
    return;
  }

  slot.character = name;
  slot.pending = true; // necesita confirmación o reroll
  waitingForConfirmation = true;

  // Mostrar UI: botones (confirm/reroll) aparecerán en renderTeams
  renderTeams();

  // Si equipo no puede usar reroll (desmarcado) y no se desea confirmar manualmente,
  // entonces dejamos que el usuario confirme. Por seguridad, deshabilitamos spin
  spinBtn.disabled = true;
}

// ------------------------
// Spin (mantengo tu animación, pero llamo a assignToTeamPending al final)
// ------------------------
function spin() {
  if (animating || waitingForConfirmation || allTeamsComplete) return;
  animating = true;
  spinBtn.disabled = true;

  const randomIndex = Math.floor(Math.random() * characters.length);
  const targetItemIndex = randomIndex + characters.length * 2;
  const containerWidth = document.querySelector(".roulette-container").offsetWidth;
  const offsetCenter = (containerWidth / 2) - (itemWidth / 2);
  const finalOffset = - (targetItemIndex * itemWidth) + offsetCenter;

  const startOffset = currentOffset;
  const distance = finalOffset - startOffset;
  const duration = 3000;
  const startTime = performance.now();
  document.querySelectorAll(".character").forEach(c => c.classList.remove("active"));

  function animate(time) {
    const elapsed = time - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const newOffset = startOffset + distance * eased;
    roulette.style.transform = `translateX(${newOffset}px)`;

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      currentOffset = finalOffset;
      const winner = characters[randomIndex];
      const allCharacters = document.querySelectorAll(".character");
      const winnerDiv = allCharacters[randomIndex + characters.length * 2];
      if (winnerDiv) winnerDiv.classList.add("active");

      // reproducir narrador si corresponde
      if (!narrationMuted) {
        narradorAudio.src = `audio/${winner}.mp3`;
        narradorAudio.play().catch(()=>{});
      }

      // asignar a equipo o pushHistory si no hay equipos
      assignToTeamPending(winner);

      animating = false;
    }
  }
  requestAnimationFrame(animate);
}

// ------------------------
// Reroll: reemplaza y bloquea el slot (auto-confirm), consume reroll del equipo y avanza
// ------------------------
function rerollMember(teamIndex, memberIndex) {
  const team = teams[teamIndex];
  if (!team) return;
  const slot = team.members[memberIndex];
  if (!slot || !slot.pending || !team.rerollAvailable) return;

  // elegir personaje aleatorio diferente al actual
  let newChar;
  const available = characters.slice();
  // remover el personaje actual si está en available
  const current = slot.character;
  if (current) {
    const idx = available.indexOf(current);
    if (idx !== -1) available.splice(idx,1);
  }
  newChar = available[Math.floor(Math.random() * available.length)];

  slot.character = newChar;
  slot.pending = false;
  slot.locked = true;          // auto-confirm
  team.rerollAvailable = false; // consume reroll

  // registrar en historial (porque se auto-confirma)
  pushHistory(newChar);

  // avanzar puntero
  advancePointerAfterAssignment();

  waitingForConfirmation = false;
  spinBtn.disabled = false;

  renderTeams();
  renderCarousel();
  renderHistory();
  checkAllTeamsComplete();
  saveAllState();
  // reproducir segmento de audio aleatorio si está habilitado
  playRandomAudioSegment();
}

// ------------------------
// Confirmar: fija el slot y avanza
// ------------------------
function confirmAssignment(teamIndex, memberIndex) {
  const team = teams[teamIndex];
  if (!team) return;
  const slot = team.members[memberIndex];
  if (!slot || !slot.pending) return;

  slot.pending = false;
  slot.locked = true;
  // guardar en historial
  pushHistory(slot.character);

  // avanzar puntero
  advancePointerAfterAssignment();

  waitingForConfirmation = false;
  spinBtn.disabled = false;

  renderTeams();
  renderCarousel();
  renderHistory();
  checkAllTeamsComplete();
  saveAllState();
}

// ------------------------
// Avanzar puntero según modo (round o full)
// ------------------------
function advancePointerAfterAssignment() {
  const teamSize = teams.length ? teams[0].members.length : 0;
  const mode = [...assignModeRadios].find(r=>r.checked)?.value || "round";

  if (mode === "round") {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    if (currentTeamIndex === 0) currentSlotIndex++;
  } else { // full
    currentSlotIndex++;
    if (currentSlotIndex >= teamSize) {
      currentSlotIndex = 0;
      currentTeamIndex++;
    }
  }

  // saltar automáticamente a la siguiente posición libre (si está bloqueada)
  // findNextAvailableSlot usa currentTeamIndex/currentSlotIndex para ubicar el siguiente libre cuando se vuelva a spin.
}

// ------------------------
// Verificar equipos completos
// ------------------------
function checkAllTeamsComplete() {
  allTeamsComplete = teams.length > 0 && teams.every(team =>
    team.members.every(slot => slot.locked) // completado sólo si todos los slots están locked
  );

  if (allTeamsComplete) {
    spinBtn.disabled = true;
    matchButton.disabled = false;
  } else {
    spinBtn.disabled = waitingForConfirmation; // si hay pendiente, spin está deshabilitado
    matchButton.disabled = true;
  }
  return allTeamsComplete;
}

// ------------------------
// Mostrar selección de ganador (MATCH)
// ------------------------
function showWinnerSelection() {
  winnerSelection.classList.remove("hidden");
  teamButtons.innerHTML = "";
  teams.forEach((team, index) => {
    const button = document.createElement("button");
    button.className = "team-winner-btn";
    button.textContent = team.name;
    button.onclick = () => selectWinner(index);
    teamButtons.appendChild(button);
  });
}

// ------------------------
// Seleccionar ganador: sumar puntos y bloquear match
// ------------------------
function selectWinner(teamIndex) {
  const winningTeam = teams[teamIndex];
  winningTeam.members.forEach(slot => {
    if (slot.character) charactersData[slot.character].tournamentPoints += 1;
  });
  saveAllState();
  // reproducir audios en orden
  playCharacterAudios(winningTeam.members.map(m=>m.character));
  // ocultar modal
  winnerSelection.classList.add("hidden");
  // deshabilitar match
  matchButton.disabled = true;
  // actualizar vistas
  renderCarousel();
  renderTeams();
  renderHistory();
}

// reproducir audios de personajes (si existen)
function playCharacterAudios(members) {
  if (narrationMuted) return;
  let idx = 0;
  function playNext() {
    if (idx >= members.length) return;
    const name = members[idx];
    idx++;
    if (!name) return playNext();
    narradorAudio.src = `audio/${name}.mp3`;
    narradorAudio.onended = playNext;
    narradorAudio.play().catch(()=>{ playNext(); });
  }
  playNext();
}

// ------------------------
// reproducir segmento aleatorio del audio largo (6s)
// ------------------------
function playRandomAudioSegment() {
  if (!longAudioLoaded || randomAudioMuted) return;
  const total = longAudio.duration || 720;
  const seg = 3;
  const maxStart = Math.max(0, total - seg);
  const start = Math.random() * maxStart;
  longAudio.currentTime = start;
  longAudio.play().catch(()=>{});
  setTimeout(()=> { try { longAudio.pause(); } catch(e){} }, seg*1000);
}

// ------------------------
// Eventos
// ------------------------
generateTeamsBtn && generateTeamsBtn.addEventListener("click", () => {
  const size = parseInt(teamSizeInput.value, 10) || 3;
  createTeams(size);
  playRandomAudioSegment();
});
assignModeRadios && Array.from(assignModeRadios).forEach(radio => {
  radio.addEventListener("change", () => {
    createTeams(parseInt(teamSizeInput.value, 10) || 3);
  });
});
spinBtn && spinBtn.addEventListener("click", spin);
matchButton && matchButton.addEventListener("click", () => {
  showWinnerSelection();
  playRandomAudioSegment();
});
catalogBtn && catalogBtn.addEventListener("click", () => {
  saveCharacters();
  window.location.href = 'catalog.html';
});
cancelWinnerSelection && cancelWinnerSelection.addEventListener("click", () => {
  winnerSelection.classList.add("hidden");
});
configToggle && configToggle.addEventListener("click", () => configContent.classList.toggle("show"));
toggleMusicBtn && toggleMusicBtn.addEventListener("click", () => {
  musicMuted = !musicMuted;
  if (musicMuted) { backgroundMusic.pause(); toggleMusicBtn.textContent = "🔊 Activar Música"; }
  else { backgroundMusic.play().catch(()=>{}); toggleMusicBtn.textContent = "🔇 Silenciar Música"; }
});
toggleNarrationBtn && toggleNarrationBtn.addEventListener("click", () => {
  narrationMuted = !narrationMuted;
  toggleNarrationBtn.textContent = narrationMuted ? "🔊 Activar Narrador" : "🔇 Silenciar Narrador";
});
toggleRandomAudioBtn && toggleRandomAudioBtn.addEventListener("click", () => {
  randomAudioMuted = !randomAudioMuted;
  toggleRandomAudioBtn.textContent = randomAudioMuted ? "🔊 Activar Audio Aleatorio" : "🔇 Silenciar Audio Aleatorio";
});
resetPageBtn && resetPageBtn.addEventListener("click", () => {
  localStorage.removeItem('smashCharacters');
  location.reload();
});

// ------------------------
// Inicialización
// ------------------------
(function init() {
  // si en localStorage ya hay datos actualizados, los usamos
  // (charactersData ya vino cargado arriba desde localStorage si existía)
  renderCarousel();
  renderTeams(); // inicialmente teams vacío hasta crear
  renderHistory();
})();
