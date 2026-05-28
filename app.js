/* ============================================================
   Quiz Copa do Mundo 2026 — Main Application Logic
   ============================================================ */

// ─── DATA ───────────────────────────────────────────────────

const FLAGS_DATA = [
  // ── Grupo A ──
  { code: "mx", name: "México", group: "A", difficulty: 1 },
  { code: "za", name: "África do Sul", group: "A", difficulty: 2 },
  { code: "kr", name: "República da Coreia", group: "A", difficulty: 2 },
  { code: "cz", name: "República Tcheca", group: "A", difficulty: 3 },

  // ── Grupo B ──
  { code: "ca", name: "Canadá", group: "B", difficulty: 1 },
  { code: "ba", name: "Bósnia e Herzegovina", group: "B", difficulty: 3 },
  { code: "qa", name: "Catar", group: "B", difficulty: 3 },
  { code: "ch", name: "Suíça", group: "B", difficulty: 2, bgColor: '#FF0000', objectFit: 'contain', scale: 0.9 },

  // ── Grupo C ──
  { code: "br", name: "Brasil", group: "C", difficulty: 1 },
  { code: "ma", name: "Marrocos", group: "C", difficulty: 2 },
  { code: "ht", name: "Haiti", group: "C", difficulty: 3 },
  { code: "gb-sct", name: "Escócia", group: "C", difficulty: 2 },

  // ── Grupo D ──
  { code: "us", name: "Estados Unidos", group: "D", difficulty: 1 },
  { code: "py", name: "Paraguai", group: "D", difficulty: 3 },
  { code: "au", name: "Austrália", group: "D", difficulty: 2, position: 'left top', bgColor: '#012169', objectFit: 'contain', scale: 0.99 },
  { code: "tr", name: "Turquia", group: "D", difficulty: 2 },

  // ── Grupo E ──
  { code: "de", name: "Alemanha", group: "E", difficulty: 1 },
  { code: "cw", name: "Curaçau", group: "E", difficulty: 3 },
  { code: "ci", name: "Costa do Marfim", group: "E", difficulty: 3 },
  { code: "ec", name: "Equador", group: "E", difficulty: 2 },

  // ── Grupo F ──
  { code: "nl", name: "Holanda", group: "F", difficulty: 1 },
  { code: "jp", name: "Japão", group: "F", difficulty: 2 },
  { code: "se", name: "Suécia", group: "F", difficulty: 2 },
  { code: "tn", name: "Tunísia", group: "F", difficulty: 3 },

  // ── Grupo G ──
  { code: "be", name: "Bélgica", group: "G", difficulty: 2 },
  { code: "eg", name: "Egito", group: "G", difficulty: 2 },
  { code: "ir", name: "Irã", group: "G", difficulty: 3 },
  { code: "nz", name: "Nova Zelândia", group: "G", difficulty: 3, position: 'left top', bgColor: '#012169', objectFit: 'contain', scale: 0.99 },

  // ── Grupo H ──
  { code: "es", name: "Espanha", group: "H", difficulty: 1 },
  { code: "cv", name: "Cabo Verde", group: "H", difficulty: 3 },
  { code: "sa", name: "Arábia Saudita", group: "H", difficulty: 3 },
  { code: "uy", name: "Uruguai", group: "H", difficulty: 2 },

  // ── Grupo I ──
  { code: "fr", name: "França", group: "I", difficulty: 1 },
  { code: "sn", name: "Senegal", group: "I", difficulty: 2 },
  { code: "iq", name: "Iraque", group: "I", difficulty: 3 },
  { code: "no", name: "Noruega", group: "I", difficulty: 2 },

  // ── Grupo J ──
  { code: "ar", name: "Argentina", group: "J", difficulty: 1 },
  { code: "dz", name: "Argélia", group: "J", difficulty: 3 },
  { code: "at", name: "Áustria", group: "J", difficulty: 2 },
  { code: "jo", name: "Jordânia", group: "J", difficulty: 3, position: 'left' },

  // ── Grupo K ──
  { code: "pt", name: "Portugal", group: "K", difficulty: 1 },
  { code: "cd", name: "República Democrática do Congo", group: "K", difficulty: 3 },
  { code: "uz", name: "Uzbequistão", group: "K", difficulty: 3, position: 'left top' },
  { code: "co", name: "Colômbia", group: "K", difficulty: 2 },

  // ── Grupo L ──
  { code: "gb-eng", name: "Inglaterra", group: "L", difficulty: 1 },
  { code: "hr", name: "Croácia", group: "L", difficulty: 2 },
  { code: "gh", name: "Gana", group: "L", difficulty: 2 },
  { code: "pa", name: "Panamá", group: "L", difficulty: 3 }
];

const DISTRACTORS = [
  "Itália", "Chile", "Bolívia", "Venezuela", "Peru",
  "Camarões", "Nigéria", "Síria", "China", "Jamaica",
  "Grécia", "Mali", "Honduras", "Irlanda", "Nova Caledônia",
  "Tailândia", "Omã", "Angola", "Islândia", "Finlândia"
];

const FLAG_CONTINENTS = {
  mx: "América do Norte",
  za: "África",
  kr: "Ásia",
  cz: "Europa",
  ca: "América do Norte",
  ba: "Europa",
  qa: "Ásia",
  ch: "Europa",
  br: "América do Sul",
  ma: "África",
  ht: "América do Norte",
  "gb-sct": "Europa",
  us: "América do Norte",
  py: "América do Sul",
  au: "Oceania",
  tr: "Europa",
  de: "Europa",
  cw: "América do Norte",
  ci: "África",
  ec: "América do Sul",
  nl: "Europa",
  jp: "Ásia",
  se: "Europa",
  tn: "África",
  be: "Europa",
  eg: "África",
  ir: "Ásia",
  nz: "Oceania",
  es: "Europa",
  cv: "África",
  sa: "Ásia",
  uy: "América do Sul",
  fr: "Europa",
  sn: "África",
  iq: "Ásia",
  no: "Europa",
  ar: "América do Sul",
  dz: "África",
  at: "Europa",
  jo: "Ásia",
  pt: "Europa",
  cd: "África",
  uz: "Ásia",
  co: "América do Sul",
  "gb-eng": "Europa",
  hr: "Europa",
  gh: "África",
  pa: "América do Norte"
};

const DISTRACTOR_CONTINENTS = {
  "Itália": "Europa",
  "Chile": "América do Sul",
  "Bolívia": "América do Sul",
  "Venezuela": "América do Sul",
  "Peru": "América do Sul",
  "Camarões": "África",
  "Nigéria": "África",
  "Síria": "Ásia",
  "China": "Ásia",
  "Jamaica": "América do Norte",
  "Grécia": "Europa",
  "Mali": "África",
  "Honduras": "América do Norte",
  "Irlanda": "Europa",
  "Nova Caledônia": "Oceania",
  "Tailândia": "Ásia",
  "Omã": "Ásia",
  "Angola": "África",
  "Islândia": "Europa",
  "Finlândia": "Europa"
};

const SIMILAR_FLAG_GROUPS = [
  ["gh", "sn", "ci", "ma", "cv", "Camarões", "Mali"],
  ["dz", "ma", "tn", "tr", "jo", "sa", "iq", "ir", "Síria", "Omã"],
  ["ar", "uy", "py", "ec", "co", "Venezuela", "Bolívia"],
  ["au", "nz", "gb-sct", "gb-eng"],
  ["se", "no", "Finlândia", "Islândia"],
  ["fr", "nl", "be", "ci", "ir", "Itália", "Irlanda"],
  ["at", "ca", "ch", "jp", "gb-eng"],
  ["hr", "cz", "ba", "gb-sct"],
  ["jp", "kr", "bd"],
  ["us", "my", "lr", "Chile"],
  ["mx", "it", "ir", "hu", "Bolívia"],
  ["br", "gh", "sn", "za", "Camarões"],
  ["de", "be", "ug", "Angola"],
  ["es", "co", "ec", "Venezuela", "Bolívia"],
  ["pt", "mx", "it", "ir", "Bolívia"],
  ["pa", "cr", "cu", "py", "Chile"],
  ["qa", "bh", "jo", "ps", "Síria"],
  ["uz", "ar", "uy", "hn", "Honduras"],
  ["cw", "ar", "uy", "uz", "Honduras"],
  ["ht", "fr", "nl", "py", "Chile"],
  ["eg", "iq", "jo", "sa", "Síria", "Omã"],
  ["za", "br", "gh", "sn", "Camarões"],
  ["cz", "hr", "ba", "gb-sct"],
  ["ch", "ca", "jp", "gb-eng", "at"]
];

const NEARBY_COUNTRY_GROUPS = [
  ["mx", "us", "ca", "pa", "ht", "cw", "Jamaica", "Honduras"],
  ["br", "ar", "uy", "py", "co", "ec", "Chile", "Bolívia", "Peru", "Venezuela"],
  ["gh", "sn", "ci", "cv", "ma", "Mali", "Nigéria", "Camarões"],
  ["dz", "ma", "tn", "eg", "Mali"],
  ["za", "cd", "Angola", "Camarões", "Nigéria"],
  ["qa", "sa", "jo", "iq", "ir", "tr", "Síria", "Omã"],
  ["jp", "kr", "China", "Tailândia"],
  ["uz", "ir", "China", "Omã"],
  ["fr", "be", "nl", "ch", "de", "at", "Itália", "Irlanda"],
  ["es", "pt", "fr", "ma", "Itália"],
  ["gb-eng", "gb-sct", "fr", "nl", "be", "Irlanda"],
  ["hr", "ba", "cz", "at", "ch"],
  ["se", "no", "Finlândia", "Islândia"],
  ["au", "nz", "Nova Caledônia"]
];

/*
const TRIVIA_DATA = [
  {
    question: "Qual país ganhou a primeira Copa do Mundo em 1930?",
    correct: "Uruguai",
    options: ["Brasil", "Argentina", "Uruguai", "Itália"]
  },
  {
    question: "Quantas Copas do Mundo o Brasil já venceu?",
    correct: "5",
    options: ["4", "5", "6", "3"]
  },
  {
    question: "Quem é o maior artilheiro da história das Copas?",
    correct: "Miroslav Klose",
    options: ["Pelé", "Ronaldo", "Miroslav Klose", "Gerd Müller"]
  },
  {
    question: "Em que ano o Brasil perdeu de 7x1 para a Alemanha?",
    correct: "2014",
    options: ["2010", "2014", "2018", "2006"]
  },
  {
    question: "Qual seleção venceu a Copa do Mundo de 2022?",
    correct: "Argentina",
    options: ["França", "Argentina", "Brasil", "Croácia"]
  },
  {
    question: "Qual foi o primeiro país africano a chegar nas semifinais?",
    correct: "Camarões",
    options: ["Gana", "Senegal", "Camarões", "Nigéria"]
  },
  {
    question: "Quantos jogadores tem em campo por time em uma partida oficial?",
    correct: "11",
    options: ["10", "11", "12", "9"]
  },
  {
    question: "Qual Copa do Mundo teve mais gols marcados?",
    correct: "1998 (França)",
    options: ["2014 (Brasil)", "1998 (França)", "2006 (Alemanha)", "1970 (México)"]
  },
  {
    question: "Qual jogador marcou o 'Gol do Século' em 1986?",
    correct: "Maradona",
    options: ["Pelé", "Maradona", "Zidane", "Romário"]
  },
  {
    question: "Em que ano a Espanha ganhou sua primeira Copa do Mundo?",
    correct: "2010",
    options: ["2006", "2010", "2014", "2002"]
  },
  {
    question: "Qual seleção detém o recorde de mais finais de Copa?",
    correct: "Alemanha",
    options: ["Brasil", "Alemanha", "Argentina", "Itália"]
  },
  {
    question: "Em qual Copa o gol de ouro foi usado pela última vez?",
    correct: "2002",
    options: ["1998", "2002", "2006", "1994"]
  },
  {
    question: "Qual país sediou a Copa de 2018?",
    correct: "Rússia",
    options: ["Brasil", "Rússia", "Catar", "Alemanha"]
  },
  {
    question: "Quem fez 3 gols na final da Copa de 1966?",
    correct: "Geoff Hurst",
    options: ["Bobby Charlton", "Geoff Hurst", "Gordon Banks", "Pelé"]
  },
  {
    question: "Qual seleção venceu a Copa de 2006?",
    correct: "Itália",
    options: ["França", "Alemanha", "Itália", "Brasil"]
  },
  {
    question: "Qual foi a primeira Copa realizada na Ásia?",
    correct: "2002",
    options: ["1998", "2002", "2010", "2006"]
  },
  {
    question: "Ronaldo Fenômeno marcou quantos gols em Copas?",
    correct: "15",
    options: ["12", "15", "18", "10"]
  },
  {
    question: "Qual o único jogador a vencer 3 Copas do Mundo?",
    correct: "Pelé",
    options: ["Pelé", "Zagallo", "Cafu", "Ronaldo"]
  },
  {
    question: "Em qual Copa aconteceu o 'Maracanazo'?",
    correct: "1950",
    options: ["1950", "1954", "1938", "1962"]
  },
  {
    question: "Quantas Copas do Mundo a França já venceu?",
    correct: "2",
    options: ["1", "2", "3", "0"]
  },
  {
    question: "Qual o estádio da final da Copa de 2014?",
    correct: "Maracanã",
    options: ["Mineirão", "Maracanã", "Arena Corinthians", "Castelão"]
  },
  {
    question: "Quantos países sediarão a Copa de 2026?",
    correct: "3",
    options: ["1", "2", "3", "4"]
  },
  {
    question: "Qual jogador levou cartão vermelho mais rápido em Copas?",
    correct: "José Batista",
    options: ["Zinedine Zidane", "José Batista", "David Beckham", "Wayne Rooney"]
  },
  {
    question: "Qual Copa teve o menor número de seleções participantes?",
    correct: "1930",
    options: ["1930", "1934", "1938", "1950"]
  },
  {
    question: "Quem é o técnico com mais títulos de Copa do Mundo?",
    correct: "Vittorio Pozzo",
    options: ["Vittorio Pozzo", "Vicente Del Bosque", "Didier Deschamps", "Mário Zagallo"]
  }
];
*/

// Flag URL helper using flagcdn.com
function getFlagUrl(code) {
  return `https://flagcdn.com/w640/${code}.png`;
}

// ─── STATE ──────────────────────────────────────────────────

// Load unlocked flags from localStorage
function loadUnlockedFlags() {
  try {
    const saved = localStorage.getItem('quiz_unlocked_flags');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveUnlockedFlags() {
  try {
    localStorage.setItem('quiz_unlocked_flags', JSON.stringify(state.unlockedFlags));
  } catch (e) { /* noop */ }
}

let state = {
  mode: 'flags',        // 'flags' | 'shields' | 'trivia'
  questions: [],
  currentIndex: 0,
  score: 0,
  totalQuestions: 12,
  timePerQuestion: 15,   // seconds
  timerRemaining: 15,
  timerInterval: null,
  answered: false,
  responseTimes: [],
  questionStartTime: 0,
  unlockedFlags: loadUnlockedFlags()
};

// ─── DOM ELEMENTS ───────────────────────────────────────────

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const screenStart = $('#screen-start');
const screenQuiz = $('#screen-quiz');
const screenResults = $('#screen-results');
const screenAlbum = $('#screen-album');

const btnStart = $('#btn-start');
const btnRestart = $('#btn-restart');
const btnShare = $('#btn-share');
const btnAlbum = $('#btn-album');
const btnAlbumBack = $('#btn-album-back');
const albumGrid = $('#album-grid');
const albumProgress = $('#album-progress');
const modeBtns = $$('.mode-btn');

const questionCounter = $('#question-counter');
const progressFill = $('#progress-fill');
const timerDisplay = $('#timer-display');
const timerValue = $('#timer-value');
const levelBadge = $('#level-badge');
const questionText = $('#question-text');
const flagDisplay = $('#flag-display');
const mediaContainer = $('#media-container');
const optionsContainer = $('#options-container');
const feedbackOverlay = $('#feedback-overlay');
const feedbackIcon = $('#feedback-icon');
const feedbackText = $('#feedback-text');

const resultsEmoji = $('#results-emoji');
const resultsTitle = $('#results-title');
const resultsSubtitle = $('#results-subtitle');
const scorePercent = $('#score-percent');
const scoreRingFill = $('#score-ring-fill');
const statCorrect = $('#stat-correct');
const statWrong = $('#stat-wrong');
const statAvgTime = $('#stat-avg-time');

// ─── UTILITIES ──────────────────────────────────────────────

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getLevel(index) {
  if (index < 4) return 1;
  if (index < 8) return 2;
  return 3;
}

function getLevelLabel(level) {
  return `Nível ${level}`;
}

function getTimerForLevel(level) {
  if (level === 1) return 10;
  if (level === 2) return 10;
  return 7;
}

function showScreen(screen) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ─── QUESTION GENERATION ────────────────────────────────────

function getCountryNameByCodeOrName(codeOrName) {
  const flag = FLAGS_DATA.find(f => f.code === codeOrName);
  if (flag) return flag.name;
  if (DISTRACTORS.includes(codeOrName)) return codeOrName;
  return null;
}

function getSimilarFlagNames(item) {
  const groups = SIMILAR_FLAG_GROUPS.filter(group => group.includes(item.code));
  const names = groups.flatMap(group => group)
    .filter(codeOrName => codeOrName !== item.code)
    .map(getCountryNameByCodeOrName)
    .filter(Boolean);

  return shuffleArray(names);
}

function getNearbyCountryNames(item) {
  const groups = NEARBY_COUNTRY_GROUPS.filter(group => group.includes(item.code));
  const names = groups.flatMap(group => group)
    .filter(codeOrName => codeOrName !== item.code)
    .map(getCountryNameByCodeOrName)
    .filter(Boolean);

  return shuffleArray(names);
}

function getSameContinentNames(item) {
  const continent = FLAG_CONTINENTS[item.code];
  if (!continent) return [];

  const teamsFromContinent = FLAGS_DATA
    .filter(f => f.code !== item.code && FLAG_CONTINENTS[f.code] === continent)
    .map(f => f.name);

  const distractorsFromContinent = DISTRACTORS
    .filter(name => DISTRACTOR_CONTINENTS[name] === continent);

  return shuffleArray([...teamsFromContinent, ...distractorsFromContinent]);
}

function addUniqueOptions(options, candidates, correctAnswer, limit = 3) {
  candidates.forEach(candidate => {
    if (options.length >= limit) return;
    if (candidate !== correctAnswer && !options.includes(candidate)) {
      options.push(candidate);
    }
  });
}

function getWrongOptionsForFlag(item, level) {
  const wrongOptions = [];
  const similarFlags = getSimilarFlagNames(item);
  const nearbyCountries = getNearbyCountryNames(item);
  const sameContinent = getSameContinentNames(item);
  const similarNearby = similarFlags.filter(name => nearbyCountries.includes(name));
  const priorityPool = shuffleArray([
    ...similarNearby,
    ...nearbyCountries,
    ...similarFlags,
    ...nearbyCountries,
    ...similarFlags,
    ...sameContinent,
    ...nearbyCountries
  ]);
  const otherQualifiedTeams = shuffleArray(FLAGS_DATA)
    .filter(f => f.code !== item.code)
    .map(f => f.name);
  const otherDistractors = shuffleArray(DISTRACTORS);

  addUniqueOptions(wrongOptions, similarNearby, item.name, 2);

  if (level === 1) {
    addUniqueOptions(wrongOptions, nearbyCountries, item.name, 2);
    addUniqueOptions(wrongOptions, similarFlags, item.name, 3);
  } else {
    addUniqueOptions(wrongOptions, similarFlags, item.name, 2);
    addUniqueOptions(wrongOptions, nearbyCountries, item.name, 3);
  }

  addUniqueOptions(wrongOptions, priorityPool, item.name, 3);
  addUniqueOptions(wrongOptions, sameContinent, item.name, 3);
  addUniqueOptions(wrongOptions, otherQualifiedTeams, item.name, 3);
  addUniqueOptions(wrongOptions, otherDistractors, item.name, 3);

  return wrongOptions;
}

function generateFlagQuestions() {
  // If all flags are unlocked (complete album), use full pool; otherwise filter out unlocked
  const albumComplete = state.unlockedFlags.length >= FLAGS_DATA.length;
  const availableFlags = albumComplete
    ? FLAGS_DATA
    : FLAGS_DATA.filter(f => !state.unlockedFlags.includes(f.code));

  // Fallback: if filtering leaves too few flags per difficulty, use full pool
  const usePool = availableFlags.length >= 12 ? availableFlags : FLAGS_DATA;

  // Pool sizes based on getLevel() thresholds: 4 for Level 1, 4 for Level 2, 4 for Level 3
  const easyFlags = shuffleArray(usePool.filter(f => f.difficulty === 1)).slice(0, 4);
  const mediumFlags = shuffleArray(usePool.filter(f => f.difficulty === 2)).slice(0, 4);
  const hardFlags = shuffleArray(usePool.filter(f => f.difficulty === 3)).slice(0, 4);

  const selected = [...easyFlags, ...mediumFlags, ...hardFlags];

  return selected.map((item, idx) => {
    const level = getLevel(idx);
    const wrongOptions = getWrongOptionsForFlag(item, level);

    const allOptions = shuffleArray([item.name, ...wrongOptions]);

    return {
      type: 'flag',
      flagCode: item.code,
      flagUrl: getFlagUrl(item.code),
      questionLabel: 'De qual país é esta bandeira?',
      correct: item.name,
      options: allOptions,
      level: level,
      position: item.position,
      bgColor: item.bgColor,
      objectFit: item.objectFit,
      scale: item.scale,
      padding: item.padding
    };
  });
}

function generateTriviaQuestions() {
  const shuffled = shuffleArray(TRIVIA_DATA);
  const selected = shuffled.slice(0, Math.min(state.totalQuestions, TRIVIA_DATA.length));

  return selected.map((item, idx) => ({
    type: 'trivia',
    questionLabel: item.question,
    correct: item.correct,
    options: shuffleArray(item.options),
    level: getLevel(idx)
  }));
}

function generateQuestions() {
  if (state.mode === 'flags' || state.mode === 'shields') {
    return generateFlagQuestions();
  }
  return generateTriviaQuestions();
}

// ─── RENDER ─────────────────────────────────────────────────

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const level = q.level;

  // Header
  questionCounter.textContent = `${state.currentIndex + 1}/${state.totalQuestions}`;
  progressFill.style.width = `${((state.currentIndex + 1) / state.totalQuestions) * 100}%`;
  levelBadge.textContent = getLevelLabel(level);

  // Question text
  questionText.textContent = q.questionLabel;

  // Media
  if (q.type === 'flag') {
    mediaContainer.style.display = 'flex';
    flagDisplay.innerHTML = '';
    const img = document.createElement('img');
    img.src = q.flagUrl;
    img.alt = `Bandeira para identificar`;
    img.loading = 'eager';
    if (q.position) {
      img.style.objectPosition = q.position;
    }

    flagDisplay.style.backgroundColor = q.bgColor || 'var(--bg-card)';

    if (q.objectFit) {
      img.style.objectFit = q.objectFit;
    }
    if (q.scale) {
      img.style.transform = `scale(${q.scale})`;
    }
    if (q.padding) {
      img.style.padding = q.padding;
      img.style.boxSizing = 'border-box';
    }
    // Fallback to emoji if image fails
    img.onerror = () => {
      flagDisplay.innerHTML = `<span class="flag-emoji">🏳️</span>`;
    };
    flagDisplay.appendChild(img);
  } else {
    mediaContainer.style.display = 'none';
  }

  // Options
  optionsContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `option-${i}`;
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(opt, btn));
    optionsContainer.appendChild(btn);
  });

  // Reset
  state.answered = false;
  feedbackOverlay.classList.add('hidden');

  // Timer
  startTimer(getTimerForLevel(level));
  state.questionStartTime = Date.now();
}

// ─── TIMER ──────────────────────────────────────────────────

function startTimer(seconds) {
  clearInterval(state.timerInterval);
  state.timerRemaining = seconds;
  updateTimerDisplay();
  timerDisplay.classList.remove('warning');

  state.timerInterval = setInterval(() => {
    state.timerRemaining--;
    updateTimerDisplay();

    if (state.timerRemaining <= 3) {
      timerDisplay.classList.add('warning');
    }

    if (state.timerRemaining <= 0) {
      clearInterval(state.timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerValue.textContent = `${state.timerRemaining}s`;
}

function handleTimeout() {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.currentIndex];
  state.responseTimes.push(getTimerForLevel(q.level));

  // Disable all options
  const optionBtns = optionsContainer.querySelectorAll('.option-btn');
  optionBtns.forEach(btn => btn.classList.add('disabled'));

  showFeedback(false, q.correct);
  setTimeout(nextQuestion, 1800);
}

// ─── ANSWER HANDLING ────────────────────────────────────────

function handleAnswer(answer, btnEl) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.questions[state.currentIndex];
  const isCorrect = answer === q.correct;
  const elapsed = (Date.now() - state.questionStartTime) / 1000;
  state.responseTimes.push(elapsed);

  if (isCorrect) {
    state.score++;
    btnEl.classList.add('correct');

    // Unlock flag in album
    if (q.type === 'flag' && q.flagCode && !state.unlockedFlags.includes(q.flagCode)) {
      state.unlockedFlags.push(q.flagCode);
      saveUnlockedFlags();
    }
  } else {
    btnEl.classList.add('wrong');
  }

  // Disable all
  const optionBtns = optionsContainer.querySelectorAll('.option-btn');
  optionBtns.forEach(btn => btn.classList.add('disabled'));

  showFeedback(isCorrect, q.correct);
  setTimeout(nextQuestion, 1500);
}

function showFeedback(isCorrect, correctAnswer) {
  feedbackOverlay.classList.remove('hidden');
  if (isCorrect) {
    feedbackIcon.innerHTML = '<span class="material-symbols-outlined" style="color: #16a34a;">check_circle</span>';
    feedbackText.textContent = 'Correto!';
    feedbackText.className = 'feedback-text correct';
  } else {
    feedbackIcon.innerHTML = '<span class="material-symbols-outlined" style="color: #ef4444;">cancel</span>';
    feedbackText.textContent = 'Errou!';
    feedbackText.className = 'feedback-text wrong';
  }
}

// ─── NAVIGATION ─────────────────────────────────────────────

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ─── RESULTS ────────────────────────────────────────────────

function showResults() {
  clearInterval(state.timerInterval);
  showScreen(screenResults);

  const total = state.questions.length;
  const correct = state.score;
  const wrong = total - correct;
  const pct = Math.round((correct / total) * 100);
  const avgTime = state.responseTimes.length > 0
    ? (state.responseTimes.reduce((a, b) => a + b, 0) / state.responseTimes.length).toFixed(1)
    : 0;

  // Emoji & message based on performance
  if (pct >= 90) {
    resultsEmoji.innerHTML = '<img src="assets/incrivel.svg" alt="Incrível!" style="height: 80px; width: auto;">';
    resultsTitle.textContent = 'É heeeeexaaa!';
    resultsSubtitle.textContent = 'Você é um verdadeiro gênio da bola!';
  } else if (pct >= 70) {
    resultsEmoji.innerHTML = '<img src="assets/muito-bom.svg" alt="Muito bem!" style="height: 80px; width: auto;">';
    resultsTitle.textContent = 'Gol de placaaaa!';
    resultsSubtitle.textContent = 'Você é craque no assunto!';
  } else if (pct >= 50) {
    resultsEmoji.innerHTML = '<img src="assets/bom-jogo.svg" alt="Bom jogo!" style="height: 80px; width: auto;">';
    resultsTitle.textContent = 'Na traaaave!';
    resultsSubtitle.textContent = 'Quase lá, continua treinando!';
  } else {
    resultsEmoji.innerHTML = '<img src="assets/nao-desista.svg" alt="Não desista!" style="height: 80px; width: auto;">';
    resultsTitle.textContent = 'Cartão bobo!';
    resultsSubtitle.textContent = 'Respira, volta pro jogo e tenta mais uma!';
  }

  // Stats
  statCorrect.textContent = correct;
  statWrong.textContent = wrong;
  statAvgTime.textContent = `${avgTime}s`;

  // Score ring animation
  const circumference = 2 * Math.PI * 52; // r=52
  const offset = circumference - (pct / 100) * circumference;

  // Add SVG gradient if not exists
  const svg = document.querySelector('.score-ring');
  if (!svg.querySelector('defs')) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'gold-gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#c4170c');
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#e02d1b');

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.prepend(defs);
  }

  // Animate
  scoreRingFill.style.strokeDashoffset = circumference;
  scorePercent.textContent = '0%';

  requestAnimationFrame(() => {
    setTimeout(() => {
      scoreRingFill.style.strokeDashoffset = offset;
      // Animate percent counter
      animateCounter(scorePercent, 0, pct, 1200);
    }, 200);
  });
}

function animateCounter(el, from, to, duration) {
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const val = Math.round(from + (to - from) * eased);
    el.textContent = `${val}%`;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

// ─── GAME FLOW ──────────────────────────────────────────────

function startGame() {
  state.currentIndex = 0;
  state.score = 0;
  state.responseTimes = [];
  state.questions = generateQuestions();

  showScreen(screenQuiz);
  renderQuestion();
}

// ─── EVENT LISTENERS ────────────────────────────────────────

// Mode selection
modeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
  });
});

// Start
btnStart.addEventListener('click', startGame);

// Restart
btnRestart.addEventListener('click', () => {
  showScreen(screenStart);
});

// Share — Menu Popup & Social Sharing
const SHARE_URL = 'https://g1.globo.com/quiz-copa-2026';
const shareMenu = $('#share-menu');
const shareWhatsApp = $('#share-whatsapp');
const shareTwitter = $('#share-twitter');
const shareInstagram = $('#share-instagram');
const shareCopy = $('#share-copy');

function getShareStats() {
  const total = state.questions.length;
  const correct = state.score;
  const wrong = total - correct;
  const pct = Math.round((correct / total) * 100);
  const avgTime = state.responseTimes.length > 0
    ? (state.responseTimes.reduce((a, b) => a + b, 0) / state.responseTimes.length).toFixed(1)
    : 0;
  return { total, correct, wrong, pct, avgTime };
}

function getShareText() {
  const { total, correct, pct } = getShareStats();
  return `⚽ Quiz Copa do Mundo 2026 no g1\n🏆 Acertei ${correct}/${total} (${pct}%)\nTente você também!\n${SHARE_URL}`;
}

function getShareSvgInfo(pct) {
  if (pct >= 90) return { svgName: 'incrivel.svg', titleMsg: 'Incrível!' };
  if (pct >= 70) return { svgName: 'muito-bom.svg', titleMsg: 'Muito bem!' };
  if (pct >= 50) return { svgName: 'bom-jogo.svg', titleMsg: 'Bom jogo!' };
  return { svgName: 'nao-desista.svg', titleMsg: 'Não desista!' };
}

async function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (e) {
      // Some embeds expose navigator.clipboard but block it at runtime.
    }
  }

  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.top = '-1000px';
  ta.style.left = '-1000px';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (e) {
    copied = false;
  } finally {
    document.body.removeChild(ta);
  }

  if (!copied) {
    throw new Error('Clipboard copy failed');
  }
}

function getMenuItemDefaultText(btn) {
  const span = btn.querySelector('span');
  if (!span.dataset.defaultText) {
    span.dataset.defaultText = span.textContent;
  }
  return span.dataset.defaultText;
}

function setMenuItemText(btn, msg) {
  const span = btn.querySelector('span');
  getMenuItemDefaultText(btn);
  span.textContent = msg;
}

function resetMenuItemText(btn) {
  const span = btn.querySelector('span');
  span.textContent = getMenuItemDefaultText(btn);
}

function showMenuItemFeedback(btn, msg, duration = 2000) {
  setMenuItemText(btn, msg);
  setTimeout(() => { resetMenuItemText(btn); }, duration);
}

async function createShareImageFile() {
  const { correct, wrong, pct, avgTime } = getShareStats();
  const { svgName, titleMsg } = getShareSvgInfo(pct);
  const blob = await generateShareImage(correct, wrong, pct, avgTime, svgName, titleMsg);

  return {
    blob,
    file: new File([blob], 'quiz-g1.jpg', { type: 'image/jpeg' })
  };
}

async function shareSocialWithImage(btn, fallbackUrl) {
  const text = getShareText();

  setMenuItemText(btn, 'Gerando...');

  try {
    const { file } = await createShareImageFile();

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: 'Quiz Copa do Mundo 2026',
        text,
        url: SHARE_URL,
        files: [file]
      });
      showMenuItemFeedback(btn, 'Compartilhado! ✓');
    } else if (navigator.share) {
      await navigator.share({
        title: 'Quiz Copa do Mundo 2026',
        text,
        url: SHARE_URL
      });
      showMenuItemFeedback(btn, 'Compartilhado! ✓');
    } else {
      await copyToClipboard(text);
      window.open(fallbackUrl(text), '_blank');
      showMenuItemFeedback(btn, 'Texto copiado! ✓');
    }
  } catch (err) {
    console.error(err);
    showMenuItemFeedback(btn, 'Erro', 2000);
  } finally {
    setTimeout(() => { resetMenuItemText(btn); }, 2200);
  }

  shareMenu.classList.add('hidden');
}

// Toggle share menu popup
btnShare.addEventListener('click', (e) => {
  e.stopPropagation();
  shareMenu.classList.toggle('hidden');
});

// Close share menu on outside click
window.addEventListener('click', (e) => {
  if (!shareMenu.classList.contains('hidden') && !shareMenu.contains(e.target) && !btnShare.contains(e.target)) {
    shareMenu.classList.add('hidden');
  }
});

// Close share menu on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !shareMenu.classList.contains('hidden')) {
    shareMenu.classList.add('hidden');
  }
});

// WhatsApp — generate image, then share on mobile or fallback to text + link
shareWhatsApp.addEventListener('click', async () => {
  await shareSocialWithImage(
    shareWhatsApp,
    (text) => `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
  );
});

// Twitter / X — generate image, then share on mobile or fallback to text + link
shareTwitter.addEventListener('click', async () => {
  await shareSocialWithImage(
    shareTwitter,
    (text) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  );
});

// Instagram — generate image + try native share, or download + copy text
shareInstagram.addEventListener('click', async () => {
  await shareSocialWithImage(
    shareInstagram,
    () => 'https://www.instagram.com/'
  );
});

// Copy — copy text + link to clipboard
shareCopy.addEventListener('click', async () => {
  const text = getShareText();
  try {
    await copyToClipboard(text);
    showMenuItemFeedback(shareCopy, 'Copiado! ✓');
  } catch (err) {
    console.error(err);
    showMenuItemFeedback(shareCopy, 'Erro');
  }
  setTimeout(() => { shareMenu.classList.add('hidden'); }, 1200);
});

// ─── SHARE IMAGE GENERATION ────────────────────────────────

async function generateShareImage(correct, wrong, pct, avgTime, svgName, titleMsg) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, 1350);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(1, '#f4f4f7');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1350);

  const img = new Image();
  img.src = 'assets/g1_logo.svg';
  await new Promise(r => { img.onload = r; img.onerror = r; });

  ctx.drawImage(img, 80, 100, 120, 131);

  ctx.textAlign = 'left';

  ctx.fillStyle = '#555555';
  ctx.font = '400 50px Globotipo, sans-serif';
  ctx.fillText('Quiz Copa do Mundo 2026', 80, 320);

  const resultImg = new Image();
  resultImg.src = `assets/${svgName}`;
  await new Promise(r => { resultImg.onload = r; resultImg.onerror = r; });

  const resultImgHeight = 120;
  const resultImgWidth = resultImg.width && resultImg.height ? (resultImg.width / resultImg.height) * resultImgHeight : 120;
  ctx.drawImage(resultImg, 80, 400, resultImgWidth, resultImgHeight);

  ctx.fillStyle = '#1a1a1a';
  ctx.font = '900 120px Globotipo, sans-serif';
  ctx.fillText(titleMsg, 80 + resultImgWidth + 30, 500);

  ctx.fillStyle = '#c4170c';
  ctx.font = '900 280px Globotipo, sans-serif';
  ctx.fillText(`${pct}%`, 80, 850);

  ctx.fillStyle = '#4b4b4b';
  ctx.font = '700 42px Globotipo, sans-serif';
  ctx.fillText(`Acertos: ${correct}   |   Erros: ${wrong}   |   Tempo Médio: ${avgTime}s`, 80, 1000);

  ctx.fillStyle = '#9ba3af';
  ctx.font = '400 38px Globotipo, sans-serif';
  ctx.fillText('g1.globo.com', 80, 1220);

  return new Promise(resolve => {
    canvas.toBlob(blob => resolve(blob), 'image/jpeg', 0.9);
  });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (!screenQuiz.classList.contains('active') || state.answered) return;

  const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
  if (keyMap[e.key] !== undefined) {
    const btns = optionsContainer.querySelectorAll('.option-btn');
    if (btns[keyMap[e.key]]) {
      btns[keyMap[e.key]].click();
    }
  }
});

// ─── INIT ───────────────────────────────────────────────────

// Preload some flag images
function preloadFlags() {
  FLAGS_DATA.slice(0, 10).forEach(f => {
    const img = new Image();
    img.src = getFlagUrl(f.code);
  });
}

preloadFlags();

// ─── ALBUM ──────────────────────────────────────────────────

function renderAlbum() {
  albumGrid.innerHTML = '';

  // Group flags by World Cup group
  const groups = {};
  FLAGS_DATA.forEach(f => {
    if (!groups[f.group]) groups[f.group] = [];
    groups[f.group].push(f);
  });

  // Sort group keys alphabetically (A, B, C...)
  const sortedGroups = Object.keys(groups).sort();

  let totalUnlocked = 0;

  sortedGroups.forEach(groupKey => {
    // Group label
    const label = document.createElement('div');
    label.className = 'sticker-group-label';
    label.textContent = `Grupo ${groupKey}`;
    albumGrid.appendChild(label);

    // Sort countries in each group alphabetically by name
    const sortedCountries = groups[groupKey].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

    sortedCountries.forEach(flag => {
      const isUnlocked = state.unlockedFlags.includes(flag.code);
      if (isUnlocked) totalUnlocked++;

      const item = document.createElement('div');
      item.className = `sticker-item${isUnlocked ? ' unlocked' : ''}`;

      const box = document.createElement('div');
      box.className = 'sticker-box';

      if (isUnlocked) {
        const img = document.createElement('img');
        img.src = getFlagUrl(flag.code);
        img.alt = flag.name;
        img.loading = 'lazy';
        if (flag.bgColor) box.style.backgroundColor = flag.bgColor;
        if (flag.objectFit) img.style.objectFit = flag.objectFit;
        if (flag.position) img.style.objectPosition = flag.position;
        if (flag.scale) img.style.transform = `scale(${flag.scale})`;
        box.appendChild(img);
      } else {
        const placeholder = document.createElement('span');
        placeholder.className = 'sticker-placeholder';
        placeholder.textContent = '?';
        box.appendChild(placeholder);
      }

      const name = document.createElement('span');
      name.className = 'sticker-name';
      name.textContent = flag.name;

      item.appendChild(box);
      item.appendChild(name);
      albumGrid.appendChild(item);
    });
  });

  // Update progress counter
  albumProgress.textContent = `${totalUnlocked}/${FLAGS_DATA.length} figurinhas`;
}

// Album navigation
btnAlbum.addEventListener('click', () => {
  renderAlbum();
  showScreen(screenAlbum);
});

btnAlbumBack.addEventListener('click', () => {
  showScreen(screenStart);
});

// ─── ROTATING TEXTS ─────────────────────────────────────────

const startTexts = ["Começar", "Start", "Empezar", "Commencer", "Beginnen", "Starten", "始める"];
const albumTexts = ["Salão das bandeiras", "Hall of flags", "Salón de banderas", "Salle des drapeaux", "Vlaggenzaal", "Saal der Flaggen", "旗のホール"];

let rotateIndex = 0;
const btnStartText = btnStart.querySelector('.btn-text');
const btnAlbumText = btnAlbum.querySelector('.btn-text');

if (btnStartText && btnAlbumText) {
  // Wait a bit before first rotation
  setTimeout(() => {
    setInterval(() => {
      // 1. Slide up and fade out
      btnStartText.classList.add('slide-out');
      btnAlbumText.classList.add('slide-out');

      setTimeout(() => {
        // 2. Change text
        rotateIndex = (rotateIndex + 1) % startTexts.length;
        btnStartText.textContent = startTexts[rotateIndex];
        btnAlbumText.textContent = albumTexts[rotateIndex];

        // 3. Move instantly to bottom
        btnStartText.classList.remove('slide-out');
        btnAlbumText.classList.remove('slide-out');
        btnStartText.classList.add('slide-prepare');
        btnAlbumText.classList.add('slide-prepare');

        // Force reflow so browser applies the instant move before we remove the class
        void btnStartText.offsetWidth;
        void btnAlbumText.offsetWidth;

        // 4. Slide up to center and fade in
        btnStartText.classList.remove('slide-prepare');
        btnAlbumText.classList.remove('slide-prepare');
      }, 300); // Wait for the 0.3s CSS transition to finish sliding out
    }, 3000); // Rotate every 3 seconds
  }, 1000);
}
