// --- datos de personajes con tier, puntuación y puntos de torneo ---
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

// --- elementos del menú de configuración ---
const configToggle = document.getElementById("configToggle");
const configContent = document.querySelector(".config-content");
const toggleMusicBtn = document.getElementById("toggleMusic");
const toggleNarrationBtn = document.getElementById("toggleNarration");
const toggleRandomAudioBtn = document.getElementById("toggleRandomAudio");
const resetPageBtn = document.getElementById("resetPage");

const itemWidth = 136;
let currentOffset = 0;
let animating = false;
let teams = [];
let currentTeamIndex = 0;
let currentSlotIndex = 0;
let waitingForConfirmation = false;
let allTeamsComplete = false;
let musicMuted = false;
let narrationMuted = false;
let randomAudioMuted = false;

// --- audio narrador ---
const narradorAudio = new Audio();

// --- música de fondo ---
const backgroundMusic = new Audio('audio/fondo.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.6;

// --- audio largo (12 minutos) para reproducción aleatoria ---
const longAudio = new Audio('audio/larga_duracion.mp3');
let longAudioLoaded = false;

// Cargar el audio largo
longAudio.addEventListener('canplaythrough', () => {
  longAudioLoaded = true;
  console.log("Audio largo cargado y listo para usar");
});

longAudio.addEventListener('error', (e) => {
  console.error("Error cargando el audio largo:", e);
});

let musicStarted = false;
function startMusic() {
  if (!musicStarted && !musicMuted) {
    backgroundMusic.play().catch(e => console.log("Error reproduciendo música:", e));
    musicStarted = true;
    document.removeEventListener("click", startMusic);
  }
}
document.addEventListener("click", startMusic);

// --- render carrusel ---
function renderCarousel() {
  roulette.innerHTML = "";
  const repeat = 5;
  for (let r = 0; r < repeat; r++) {
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
      p.appendChild(tierSpan);
      
      // Mostrar puntos de torneo (siempre, incluso cuando son 0)
      const pointsSpan = document.createElement("span");
      pointsSpan.className = "tournament-points";
      pointsSpan.textContent = ` ⭐${charactersData[name].tournamentPoints}`;
      p.appendChild(pointsSpan);
      
      div.appendChild(img);
      div.appendChild(p);
      roulette.appendChild(div);
    });
  }
}
renderCarousel();

// --- función para reproducir 6 segundos aleatorios del audio largo ---
function playRandomAudioSegment() {
  if (!longAudioLoaded || randomAudioMuted) {
    return;
  }
  
  // Duración total del audio en segundos (12 minutos = 720 segundos)
  const totalDuration = 720;
  const segmentDuration = 6; // 6 segundos
  
  // Generar un punto de inicio aleatorio (asegurando que no exceda el límite)
  const maxStartTime = totalDuration - segmentDuration;
  const randomStartTime = Math.floor(Math.random() * maxStartTime);
  
  console.log(`Reproduciendo audio aleatorio desde: ${randomStartTime}s hasta: ${randomStartTime + segmentDuration}s`);
  
  // Configurar el audio para reproducir el segmento
  longAudio.currentTime = randomStartTime;
  longAudio.volume = 0.7;
  
  // Reproducir el audio
  longAudio.play().catch(e => {
    console.error("Error reproduciendo el audio aleatorio:", e);
  });
  
  // Detener después de 6 segundos
  setTimeout(() => {
    longAudio.pause();
  }, segmentDuration * 1000);
}

// --- spin ---
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

      winnerDiv.classList.add("active");

      // --- reproducir audio narrador ---
      if (!narrationMuted) {
        narradorAudio.src = `audio/${winner}.mp3`;
        narradorAudio.play().catch(e => console.log("Error reproduciendo audio:", e));
      }

      if (!teams.length) {
        pushHistory(winner);
        spinBtn.disabled = false;
      } else {
        assignToTeamPending(winner);
      }

      animating = false;
    }
  }
  requestAnimationFrame(animate);
}

// --- eventos ---
generateTeamsBtn.addEventListener("click", () => {
  const size = parseInt(teamSizeInput.value, 10) || 3;
  createTeams(size);
  // Reproducir audio aleatorio al crear equipos
  playRandomAudioSegment();
});

// Agregar evento para reiniciar equipos al cambiar modo de asignación
assignModeRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    createTeams(parseInt(teamSizeInput.value, 10) || 3);
  });
});

spinBtn.addEventListener("click", spin);

// Evento para el botón MATCH
matchButton.addEventListener("click", () => {
  showWinnerSelection();
  // Reproducir audio aleatorio al hacer clic en MATCH
  playRandomAudioSegment();
});

// Evento para el botón de catálogo
catalogBtn.addEventListener("click", () => {
  // Guardar datos actuales en localStorage antes de ir al catálogo
  localStorage.setItem('smashCharacters', JSON.stringify(charactersData));
  window.location.href = 'catalog.html';
});

// Evento para cancelar selección de ganador
cancelWinnerSelection.addEventListener("click", () => {
  winnerSelection.classList.add("hidden");
});

// Menú de configuración
configToggle.addEventListener("click", () => {
  configContent.classList.toggle("show");
});

// Silenciar música
toggleMusicBtn.addEventListener("click", () => {
  musicMuted = !musicMuted;
  if (musicMuted) {
    backgroundMusic.pause();
    toggleMusicBtn.textContent = "🔊 Activar Música";
  } else {
    backgroundMusic.play();
    toggleMusicBtn.textContent = "🔇 Silenciar Música";
  }
});

// Silenciar narrador
toggleNarrationBtn.addEventListener("click", () => {
  narrationMuted = !narrationMuted;
  if (narrationMuted) {
    toggleNarrationBtn.textContent = "🔊 Activar Narrador";
  } else {
    toggleNarrationBtn.textContent = "🔇 Silenciar Narrador";
  }
});

// Silenciar audio aleatorio
toggleRandomAudioBtn.addEventListener("click", () => {
  randomAudioMuted = !randomAudioMuted;
  if (randomAudioMuted) {
    toggleRandomAudioBtn.textContent = "🔊 Activar Audio Aleatorio";
  } else {
    toggleRandomAudioBtn.textContent = "🔇 Silenciar Audio Aleatorio";
  }
});

// Reiniciar página
resetPageBtn.addEventListener("click", () => {
  localStorage.removeItem('smashCharacters');
  location.reload();
});

// --- calcular puntuación total del equipo ---
function calculateTeamScore(team) {
  return team.members.reduce((total, member) => {
    return total + (member ? charactersData[member].score : 0);
  }, 0);
}

// --- verificar si todos los equipos están completos ---
function checkAllTeamsComplete() {
  allTeamsComplete = teams.every(team => 
    team.members.every(member => member !== null)
  );
  
  if (allTeamsComplete) {
    spinBtn.disabled = true;
    matchButton.disabled = false;
  } else {
    spinBtn.disabled = false;
    matchButton.disabled = true;
  }
  
  return allTeamsComplete;
}

// --- mostrar selección de equipo ganador ---
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

// --- seleccionar equipo ganador ---
function selectWinner(teamIndex) {
  const winningTeam = teams[teamIndex];
  
  // Añadir punto de torneo a cada personaje del equipo ganador
  winningTeam.members.forEach(member => {
    if (member) {
      charactersData[member].tournamentPoints += 1;
    }
  });
  
  // Guardar cambios en localStorage
  localStorage.setItem('smashCharacters', JSON.stringify(charactersData));
  
  // Reproducir audios de los personajes del equipo ganador
  playCharacterAudios(winningTeam.members);
  
  // Ocultar selección de ganador
  winnerSelection.classList.add("hidden");
  
  // Bloquear el botón MATCH nuevamente
  matchButton.disabled = true;
  
  // Actualizar la visualización para mostrar los puntos de torneo
  renderCarousel();
  renderTeams();
  renderHistory();
}

// --- reproducir audios de personajes en orden ---
function playCharacterAudios(members) {
  if (narrationMuted) return;
  
  let index = 0;
  
  function playNext() {
    if (index < members.length) {
      const character = members[index];
      if (character) {
        narradorAudio.src = `audio/${character}.mp3`;
        narradorAudio.onended = playNext;
        narradorAudio.play().catch(e => {
          console.log("Error reproduciendo audio:", e);
          playNext();
        });
      } else {
        playNext();
      }
      index++;
    }
  }
  
  playNext();
}

// --- asignación ---
function assignToTeamPending(name) {
  const mode = [...assignModeRadios].find(r => r.checked)?.value || "round";
  const team = teams[currentTeamIndex];
  team.members[currentSlotIndex] = name;
  team.pending = true;
  team.lastAssigned = currentSlotIndex;
  waitingForConfirmation = true;
  renderTeams();
}

// --- reroll ---
function rerollMember(teamIndex, memberIndex) {
  const team = teams[teamIndex];
  if (!team || !team.pending || !team.rerollAvailable) return;
  const random = characters[Math.floor(Math.random() * characters.length)];
  team.members[memberIndex] = random;
  team.rerollAvailable = false;
  team.pending = false; // Quitar el estado pendiente después del reroll
  waitingForConfirmation = false;
  
  // Reproducir audio aleatorio al hacer reroll
  playRandomAudioSegment();
  
  spinBtn.disabled = false;
  renderTeams();
}

// --- confirmar ---
function confirmAssignment(teamIndex) {
  const team = teams[teamIndex];
  if (!team || !team.pending) return;
  const memberIndex = team.lastAssigned;
  const finalName = team.members[memberIndex];
  pushHistory(finalName);
  team.pending = false;
  team.lastAssigned = -1;
  waitingForConfirmation = false;

  const teamSize = teams[0].members.length;
  const mode = [...assignModeRadios].find(r => r.checked)?.value || "round";

  if (mode === "round") {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    if (currentTeamIndex === 0) currentSlotIndex++;
  } else {
    currentSlotIndex++;
    if (currentSlotIndex >= teamSize) {
      currentSlotIndex = 0;
      currentTeamIndex++;
    }
  }
  
  // Verificar si todos los equipos están completos
  checkAllTeamsComplete();
  
  spinBtn.disabled = false;
  renderTeams();
}

// --- historial ---
function pushHistory(name) {
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
  
  // Mostrar puntos de torneo (siempre, incluso cuando son 0)
  const pointsSpan = document.createElement("span");
  pointsSpan.className = "tournament-points";
  pointsSpan.textContent = ` ⭐${charactersData[name].tournamentPoints}`;
  p.appendChild(pointsSpan);
  
  p.appendChild(document.createTextNode(" "));
  p.appendChild(tierSpan);
  
  div.appendChild(img);
  div.appendChild(p);
  historyDiv.prepend(div);
}

// --- renderizar historial completo ---
function renderHistory() {
  historyDiv.innerHTML = "";
  // Recrear todo el historial para incluir puntos de torneo actualizados
  // Nota: Esto es simplificado, en una implementación real necesitarías
  // mantener un registro del historial de selecciones
}

// --- crear equipos ---
function createTeams(size) {
  const numTeams = parseInt(numTeamsInput.value, 10) || 2;
  teams = [];
  for (let i = 0; i < numTeams; i++) {
    teams.push({
      name: `Equipo ${i + 1}`,
      members: Array(size).fill(null),
      pending: false,
      lastAssigned: -1,
      rerollAvailable: true
    });
  }
  currentTeamIndex = 0;
  currentSlotIndex = 0;
  waitingForConfirmation = false;
  allTeamsComplete = false;
  spinBtn.disabled = false;
  matchButton.disabled = true;
  winnerSelection.classList.add("hidden");
  renderTeams();
}

// --- render equipos ---
function renderTeams() {
  teamsDiv.innerHTML = "";
  teams.forEach((team, ti) => {
    const div = document.createElement("div");
    div.className = "team";
    const h3 = document.createElement("h3");
    h3.textContent = team.name;
    div.appendChild(h3);
    
    // Mostrar puntuación total del equipo
    const totalScore = document.createElement("div");
    totalScore.className = "total-score";
    totalScore.textContent = `PA: ${calculateTeamScore(team).toFixed(1)}`;
    div.appendChild(totalScore);

    team.members.forEach((member, mi) => {
      const slot = document.createElement("div");
      slot.className = "slot";
      
      if (member) {
        const img = document.createElement("img");
        img.src = `images/${member}.png`;
        img.alt = member;
        slot.appendChild(img);
        
        // Contenedor para información del personaje
        const infoDiv = document.createElement("div");
        infoDiv.className = "character-info";
        
        const nameSpan = document.createElement("div");
        nameSpan.className = "character-name";
        nameSpan.textContent = member.toUpperCase();
        
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "character-details";
        
        const tierSpan = document.createElement("div");
        tierSpan.className = "character-tier";
        tierSpan.innerHTML = `Tier: <span>${charactersData[member].tier}</span>`;
        
        const scoreSpan = document.createElement("div");
        scoreSpan.className = "character-score";
        scoreSpan.innerHTML = `PA: <span>${charactersData[member].score}</span>`;
        
        detailsDiv.appendChild(tierSpan);
        detailsDiv.appendChild(scoreSpan);
        
        infoDiv.appendChild(nameSpan);
        infoDiv.appendChild(detailsDiv);
        
        // Mostrar puntos de torneo (siempre, incluso cuando son 0)
        const pointsDiv = document.createElement("div");
        pointsDiv.className = "tournament-points";
        pointsDiv.textContent = `Puntos de Torneo: ⭐${charactersData[member].tournamentPoints}`;
        infoDiv.appendChild(pointsDiv);
        
        // Contenedor para botones (solo mostrar si es el último asignado y está pendiente)
        if (team.pending && team.lastAssigned === mi) {
          const buttonsContainer = document.createElement("div");
          buttonsContainer.className = "buttons-container";
          
          if (rerollToggle.checked && team.rerollAvailable) {
            const rerollBtn = document.createElement("button");
            rerollBtn.textContent = "Reroll";
            rerollBtn.onclick = () => rerollMember(ti, mi);
            buttonsContainer.appendChild(rerollBtn);
          }
          
          const confirmBtn = document.createElement("button");
          confirmBtn.textContent = "Confirmar";
          confirmBtn.onclick = () => confirmAssignment(ti);
          buttonsContainer.appendChild(confirmBtn);
          
          infoDiv.appendChild(buttonsContainer);
        }
        
        slot.appendChild(infoDiv);
      } else {
        const emptySpan = document.createElement("div");
        emptySpan.className = "character-empty";
        emptySpan.textContent = "Vacío";
        slot.appendChild(emptySpan);
      }
      
      div.appendChild(slot);
    });
    teamsDiv.appendChild(div);
  });
  
  // Verificar si todos los equipos están completos
  checkAllTeamsComplete();
}