// ====== HERO DATA (embedded for file:// compatibility) ======
const HEROES = [
  {"id":1,"name":"Admiral Proudmoore","image":"admiral-proudmoorejpg.png"},
  {"id":2,"name":"Alchemist","image":"alchemistjpg.png"},
  {"id":3,"name":"Ancient Apparition","image":"ancient-apparitionjpg.png"},
  {"id":4,"name":"Antimage","image":"antimagejpg.png"},
  {"id":5,"name":"Arc Warden","image":"arc-wardenjpg.png"},
  {"id":6,"name":"Auroth","image":"aurothjpg.png"},
  {"id":7,"name":"Axe","image":"axejpg.png"},
  {"id":8,"name":"Bane","image":"banejpg.png"},
  {"id":9,"name":"Barathrum","image":"barathrumjpg.png"},
  {"id":10,"name":"Batrider","image":"batriderjpg.png"},
  {"id":11,"name":"Beast Master","image":"beast-masterjpg.png"},
  {"id":12,"name":"Bloodseeker","image":"bloodseekerjpg.png"},
  {"id":13,"name":"Bounty Hunter","image":"bounty-hunterjpg.png"},
  {"id":14,"name":"Bristleback","image":"bristlebackjpg.png"},
  {"id":15,"name":"Broodmother","image":"broodmotherjpg.png"},
  {"id":16,"name":"Centaur Warchief","image":"centaur-warchiefjpg.png"},
  {"id":17,"name":"Chaos Knight","image":"chaos-knightjpg.png"},
  {"id":18,"name":"Chen","image":"chenjpg.png"},
  {"id":19,"name":"Clinkz","image":"clinkzjpg.png"},
  {"id":20,"name":"Clockwerk","image":"clockwerkjpg.png"},
  {"id":21,"name":"Crystal Maiden","image":"crystal-maidenjpg.png"},
  {"id":22,"name":"Dark Seer","image":"dark-seerjpg.png"},
  {"id":23,"name":"Dazzle","image":"dazzlejpg.png"},
  {"id":24,"name":"Death Knightpng","image":"death-knightpng.png"},
  {"id":25,"name":"Death Prophet","image":"death-prophetjpg.png"},
  {"id":26,"name":"Demon Witch","image":"demon-witchjpg.png"},
  {"id":27,"name":"Doom","image":"doomjpg.png"},
  {"id":28,"name":"Dragon Knight","image":"dragon-knightjpg.png"},
  {"id":29,"name":"Drow Ranger","image":"drow-rangerjpg.png"},
  {"id":30,"name":"Earthshaker","image":"earthshakerjpg.png"},
  {"id":31,"name":"Ember","image":"emberjpg.png"},
  {"id":32,"name":"Enchantress","image":"enchantressjpg.png"},
  {"id":33,"name":"Enigma","image":"enigmajpg.png"},
  {"id":34,"name":"Eredar","image":"eredarjpg.png"},
  {"id":35,"name":"Faceless Void","image":"faceless-voidjpg.png"},
  {"id":36,"name":"Furion","image":"furionjpg.png"},
  {"id":37,"name":"Geomancer","image":"geomancerjpg.png"},
  {"id":38,"name":"Goblin Shredder","image":"goblin-shredderjpg.png"},
  {"id":39,"name":"Gyrocopter","image":"gyrocopterjpg.png"},
  {"id":40,"name":"Huskar","image":"huskarjpg.png"},
  {"id":41,"name":"Invoker","image":"invokerjpg.png"},
  {"id":42,"name":"Juggernaut","image":"juggernautjpg.png"},
  {"id":43,"name":"Keeper Of The Light","image":"keeper-of-the-lightjpg.png"},
  {"id":44,"name":"Legion Commander","image":"legion-commanderjpg.png"},
  {"id":45,"name":"Lich","image":"lichjpg.png"},
  {"id":46,"name":"Lifestealer","image":"lifestealerjpg.png"},
  {"id":47,"name":"Lone Druid","image":"lone-druidjpg.png"},
  {"id":48,"name":"Lycanthrope","image":"lycanthropejpg.png"},
  {"id":49,"name":"Magnataur","image":"magnataurjpg.png"},
  {"id":50,"name":"Medusa","image":"medusajpg.png"},
  {"id":51,"name":"Mirana","image":"miranajpg.png"},
  {"id":52,"name":"Moon Rider","image":"moon-riderjpg.png"},
  {"id":53,"name":"Morphling","image":"morphlingjpg.png"},
  {"id":54,"name":"Naga Siren","image":"naga-sirenjpg.png"},
  {"id":55,"name":"Necrolyte","image":"necrolytejpg.png"},
  {"id":56,"name":"Nerubian Assassin","image":"nerubian-assassinjpg.png"},
  {"id":57,"name":"Nevermore","image":"nevermorejpg.png"},
  {"id":58,"name":"Night Stalker","image":"night-stalkerjpg.png"},
  {"id":59,"name":"Obsidian Destroyer","image":"obsidian-destroyerjpg.png"},
  {"id":60,"name":"Ogre Magi","image":"ogre-magijpg.png"},
  {"id":61,"name":"Omniknight","image":"omniknightjpg.png"},
  {"id":62,"name":"Pandaren Brewmaster","image":"pandaren-brewmasterjpg.png"},
  {"id":63,"name":"Phantom Assassin","image":"phantom-assassinjpg.png"},
  {"id":64,"name":"Phantom Lancer","image":"phantom-lancerjpg.png"},
  {"id":65,"name":"Phoenix","image":"phoenixjpg.png"},
  {"id":66,"name":"Pit Lord","image":"pit-lordjpg.png"},
  {"id":67,"name":"Puck","image":"puckjpg.png"},
  {"id":68,"name":"Pudge","image":"pudgejpg.png"},
  {"id":69,"name":"Pugna","image":"pugnajpg.png"},
  {"id":70,"name":"Queen Of Pain","image":"queen-of-painjpg.png"},
  {"id":71,"name":"Razor","image":"razorjpg.png"},
  {"id":72,"name":"Rikimaru","image":"rikimarujpg.png"},
  {"id":73,"name":"Rubick","image":"rubickjpg.png"},
  {"id":74,"name":"Sand King","image":"sand-kingjpg.png"},
  {"id":75,"name":"Shadow Shaman","image":"shadow-shamanjpg.png"},
  {"id":76,"name":"Silencer","image":"silencerjpg.png"},
  {"id":77,"name":"Skeleton King","image":"skeleton-kingjpg.png"},
  {"id":78,"name":"Skywrath Mage","image":"skywrath-magejpg.png"},
  {"id":79,"name":"Slardar","image":"slardarjpg.png"},
  {"id":80,"name":"Slark","image":"slarkjpg.png"},
  {"id":81,"name":"Slayer","image":"slayerjpg.png"},
  {"id":82,"name":"Sniper","image":"sniperjpg.png"},
  {"id":83,"name":"Spectre","image":"spectrejpg.png"},
  {"id":84,"name":"Storm Spirit","image":"storm-spiritjpg.png"},
  {"id":85,"name":"Sven","image":"svenjpg.png"},
  {"id":86,"name":"Tauren Chieftain","image":"tauren-chieftainjpg.png"},
  {"id":87,"name":"Techies","image":"techiesjpg.png"},
  {"id":88,"name":"Templar Assassin","image":"templar-assassinjpg.png"},
  {"id":89,"name":"Terrorblade","image":"terrorbladejpg.png"},
  {"id":90,"name":"Thrall","image":"thralljpg.png"},
  {"id":91,"name":"Tidehunter","image":"tidehunterjpg.png"},
  {"id":92,"name":"Tinker","image":"tinkerjpg.png"},
  {"id":93,"name":"Tinypng","image":"tinypng.png"},
  {"id":94,"name":"Tormented Soul","image":"tormented-souljpg.png"},
  {"id":95,"name":"Treant Protector","image":"treant-protectorjpg.png"},
  {"id":96,"name":"Troll Warlord","image":"troll-warlordjpg.png"},
  {"id":97,"name":"Tuskarr","image":"tuskarrjpg.png"},
  {"id":98,"name":"Twinheaddragon","image":"twinheaddragonjpg.png"},
  {"id":99,"name":"Undying","image":"undyingjpg.png"},
  {"id":100,"name":"Ursa Warrior","image":"ursa-warriorjpg.png"},
  {"id":101,"name":"Vengeful Spirit","image":"vengeful-spiritjpg.png"},
  {"id":102,"name":"Venomancer","image":"venomancerjpg.png"},
  {"id":103,"name":"Viper","image":"viperjpg.png"},
  {"id":104,"name":"Visage","image":"visagejpg.png"},
  {"id":105,"name":"Warlock","image":"warlockjpg.png"},
  {"id":106,"name":"Weaver","image":"weaverjpg.png"},
  {"id":107,"name":"Windrunner","image":"windrunnerjpg.png"},
  {"id":108,"name":"Wisp","image":"wispjpg.png"},
  {"id":109,"name":"Witch Doctor","image":"witch-doctorjpg.png"},
  {"id":110,"name":"Zeus","image":"zeusjpg.png"}
];

// IMG_PATH: relative from the HTML file (index.html at root)
const IMG_PATH = 'images/';

// ====== TURN TEMPLATES ======
const TURN_TEMPLATES = [
    // Phase 1 - Ban (A first)
    { teamRel: 'A', action: 'ban', phase: 1, label: 'Phase 1 - Ban' },
    { teamRel: 'B', action: 'ban', phase: 1, label: 'Phase 1 - Ban' },
    { teamRel: 'B', action: 'ban', phase: 1, label: 'Phase 1 - Ban' },
    { teamRel: 'A', action: 'ban', phase: 1, label: 'Phase 1 - Ban' },
    // Phase 2 - Pick (A first)
    { teamRel: 'A', action: 'pick', phase: 2, label: 'Phase 2 - Pick' },
    { teamRel: 'B', action: 'pick', phase: 2, label: 'Phase 2 - Pick' },
    { teamRel: 'B', action: 'pick', phase: 2, label: 'Phase 2 - Pick' },
    { teamRel: 'A', action: 'pick', phase: 2, label: 'Phase 2 - Pick' },
    // Phase 3 - Ban (B first)
    { teamRel: 'B', action: 'ban', phase: 3, label: 'Phase 3 - Ban' },
    { teamRel: 'A', action: 'ban', phase: 3, label: 'Phase 3 - Ban' },
    { teamRel: 'A', action: 'ban', phase: 3, label: 'Phase 3 - Ban' },
    { teamRel: 'B', action: 'ban', phase: 3, label: 'Phase 3 - Ban' },
    // Phase 4 - Pick (B first)
    { teamRel: 'B', action: 'pick', phase: 4, label: 'Phase 4 - Pick' },
    { teamRel: 'A', action: 'pick', phase: 4, label: 'Phase 4 - Pick' },
    { teamRel: 'A', action: 'pick', phase: 4, label: 'Phase 4 - Pick' },
    { teamRel: 'B', action: 'pick', phase: 4, label: 'Phase 4 - Pick' },
    // Phase 5 - Ban+Pick (B first - Phase 4 ended with B)
    { teamRel: 'B', action: 'ban', phase: 5, label: 'Phase 5 - Ban' },
    { teamRel: 'A', action: 'ban', phase: 5, label: 'Phase 5 - Ban' },
    { teamRel: 'B', action: 'pick', phase: 5, label: 'Phase 5 - Pick' },
    { teamRel: 'A', action: 'pick', phase: 5, label: 'Phase 5 - Pick' },
];
const TOTAL_TURNS = TURN_TEMPLATES.length;

// ====== STATE ======
let state = {
    totalGames: 3,
    currentGame: 1,
    firstBanTeam: 'sentinel',
    currentTurnIndex: 0,
    sentinel: { bans: [], picks: [] },
    scourge: { bans: [], picks: [] },
    globalBanned: [],
    history: [],
    gameComplete: false,
};

// ====== DOM REFS ======
const $ = id => document.getElementById(id);
const screenBo = $('screen-bo');
const screenBp = $('screen-bp');
const heroPool = $('heroPool');
const formatBadge = $('formatBadge');
const gameCounter = $('gameCounter');
const turnTeam = $('turnTeam');
const turnAction = $('turnAction');
const turnPhase = $('turnPhase');
const sentinelBans = $('sentinelBans');
const sentinelPicks = $('sentinelPicks');
const scourgeBans = $('scourgeBans');
const scourgePicks = $('scourgePicks');
const globalBanList = $('globalBanList');
const btnUndo = $('btnUndo');
const btnEndGame = $('btnEndGame');
const btnReset = $('btnReset');
const turnIndicator = $('turnIndicator');

// ====== INIT ======
function init() {
    setupBOScreen();
    setupButtons();
}

function setupBOScreen() {
    document.querySelectorAll('.bo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bo = parseInt(btn.dataset.bo);
            startNewSession(bo);
        });
    });
}

function setupButtons() {
    btnReset.addEventListener('click', resetAll);
    btnUndo.addEventListener('click', undoLast);
    btnEndGame.addEventListener('click', endGame);
}

// ====== START / RESET ======
function startNewSession(totalGames) {
    state.totalGames = totalGames;
    state.currentGame = 1;
    state.globalBanned = [];
    startNewGame();
}

function startNewGame() {
    state.firstBanTeam = Math.random() < 0.5 ? 'sentinel' : 'scourge';
    state.currentTurnIndex = 0;
    state.sentinel = { bans: [], picks: [] };
    state.scourge = { bans: [], picks: [] };
    state.history = [];
    state.gameComplete = false;

    screenBo.classList.remove('active');
    screenBp.classList.add('active');
    updateUI();
}

function resetAll() {
    if (!confirm('Reset all? Progress will be lost.')) return;
    screenBp.classList.remove('active');
    screenBo.classList.add('active');
}

// ====== RENDER ======
function renderAll() {
    renderHeroPool();
    renderSlots();
    renderGlobalBan();
}

function renderHeroPool() {
    heroPool.innerHTML = '';
    const usedSet = getAllUsedIds();

    HEROES.forEach(h => {
        const img = document.createElement('img');
        img.className = 'hero-icon';
        img.src = IMG_PATH + h.image;
        img.alt = h.name;
        img.title = h.name;
        img.dataset.heroId = h.id;

        if (usedSet.has(h.id)) {
            img.classList.add('used');
        }

        img.addEventListener('click', () => onHeroClick(h.id));
        heroPool.appendChild(img);
    });
}

function renderSlots() {
    renderTeamSlots(sentinelBans, state.sentinel.bans, 'ban');
    renderTeamSlots(sentinelPicks, state.sentinel.picks, 'pick');
    renderTeamSlots(scourgeBans, state.scourge.bans, 'ban');
    renderTeamSlots(scourgePicks, state.scourge.picks, 'pick');
    highlightActiveSlot();
}

function renderTeamSlots(container, heroIds, type) {
    const slots = container.querySelectorAll('.slot');
    slots.forEach((slot, i) => {
        slot.innerHTML = '';
        slot.className = 'slot';
        slot.classList.add(type + '-slot');
        if (i < heroIds.length) {
            const hero = HEROES.find(h => h.id === heroIds[i]);
            if (hero) {
                const img = document.createElement('img');
                img.src = IMG_PATH + hero.image;
                img.alt = hero.name;
                img.title = hero.name;
                slot.appendChild(img);
                slot.classList.add('filled-' + type);
            }
        }
    });
}

function renderGlobalBan() {
    globalBanList.innerHTML = '';
    if (state.globalBanned.length === 0) {
        globalBanList.innerHTML = '<span style="color:#555;font-size:0.8rem;">No heroes banned/picked yet</span>';
        return;
    }
    state.globalBanned.forEach(id => {
        const hero = HEROES.find(h => h.id === id);
        if (!hero) return;
        const img = document.createElement('img');
        img.className = 'hero-icon';
        img.src = IMG_PATH + hero.image;
        img.alt = hero.name;
        img.title = hero.name;
        globalBanList.appendChild(img);
    });
}

// ====== HERO CLICK ======
function onHeroClick(heroId) {
    if (state.gameComplete) return;

    const turn = getCurrentTurn();
    if (!turn) return;

    const team = turn.team;
    const action = turn.action;

    if (state.globalBanned.includes(heroId)) return;
    if (state.sentinel.bans.includes(heroId) || state.sentinel.picks.includes(heroId) ||
        state.scourge.bans.includes(heroId) || state.scourge.picks.includes(heroId)) return;

    if (state[team][action + 's'].length >= 5) return;

    state.history.push({ heroId, team, action });
    state[team][action + 's'].push(heroId);
    state.globalBanned.push(heroId);
    state.currentTurnIndex++;

    updateUI();
}

function getCurrentTurn() {
    if (state.currentTurnIndex >= TOTAL_TURNS) return null;
    const template = TURN_TEMPLATES[state.currentTurnIndex];
    const team = template.teamRel === 'A' ? state.firstBanTeam :
                 (state.firstBanTeam === 'sentinel' ? 'scourge' : 'sentinel');
    return {
        team,
        action: template.action,
        phase: template.phase,
        label: template.label,
    };
}

function getAllUsedIds() {
    return new Set(state.globalBanned);
}

// ====== UI UPDATE ======
function updateUI() {
    const turn = getCurrentTurn();

    formatBadge.textContent = 'BO' + state.totalGames;
    gameCounter.textContent = `Game ${state.currentGame} / ${state.totalGames}`;
    btnUndo.disabled = state.history.length === 0;

    if (!turn) {
        turnTeam.textContent = '✅';
        turnAction.textContent = 'DONE';
        turnPhase.textContent = '';
        turnIndicator.style.borderColor = '#2ecc71';
        state.gameComplete = true;
        btnEndGame.disabled = false;
        highlightActiveSlot();
        renderAll();
        return;
    }

    const teamName = turn.team === 'sentinel' ? 'SENTINEL' : 'SCOURGE';
    turnTeam.textContent = teamName;
    turnAction.textContent = turn.action.toUpperCase();
    turnPhase.textContent = turn.label;
    turnIndicator.style.borderColor = '#f7931e';
    btnEndGame.disabled = true;

    renderAll();
}

function highlightActiveSlot() {
    document.querySelectorAll('.slot.active-turn').forEach(s => s.classList.remove('active-turn'));
    const turn = getCurrentTurn();
    if (!turn || state.gameComplete) return;

    const nextIndex = state[turn.team][turn.action + 's'].length;
    if (nextIndex < 5) {
        const containerId = turn.team + (turn.action === 'ban' ? 'Bans' : 'Picks');
        const cont = document.getElementById(containerId);
        if (cont) {
            const slot = cont.querySelector(`.slot[data-index="${nextIndex}"]`);
            if (slot) slot.classList.add('active-turn');
        }
    }
}

// ====== UNDO ======
function undoLast() {
    if (state.history.length === 0 || state.currentTurnIndex === 0) return;

    const last = state.history.pop();
    state.currentTurnIndex--;

    state[last.team][last.action + 's'].pop();

    const idx = state.globalBanned.lastIndexOf(last.heroId);
    if (idx !== -1) state.globalBanned.splice(idx, 1);

    state.gameComplete = false;

    updateUI();
}

// ====== END GAME ======
function endGame() {
    if (!state.gameComplete) return;

    if (state.currentGame < state.totalGames) {
        state.currentGame++;
        const oldGlobal = [...state.globalBanned];

        state.firstBanTeam = Math.random() < 0.5 ? 'sentinel' : 'scourge';
        state.currentTurnIndex = 0;
        state.sentinel = { bans: [], picks: [] };
        state.scourge = { bans: [], picks: [] };
        state.history = [];
        state.gameComplete = false;
        state.globalBanned = oldGlobal;

        updateUI();
    } else {
        alert(`BO${state.totalGames} complete! Press Reset All to start over.`);
        btnEndGame.disabled = true;
    }
}

// ====== START ======
init();