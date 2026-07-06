import { QUESTIONS } from './questions.js';

// Configuration
const TIER_INFO = {
  C: { name: "Critical", color: "var(--crit)" },
  W: { name: "Warning", color: "var(--warn)" },
  I: { name: "Info", color: "var(--info)" },
  B: { name: "Bonus", color: "var(--bonus)" }
};
const TIER_ORDER = ["C", "W", "I", "B"];

// State Variables
let answered = new Set();      // question indices answered
let correct = new Set();       // question indices answered correctly
let bookmarks = new Set();     // bookmarked/flagged indices
let chosenAnswers = {};        // index -> chosen option index
let isExamMode = false;
let examSubmitted = false;
let examTimer = null;
let examSecondsElapsed = 0;
let shuffledIndices = null;
let currentFilter = "RANKED";
let currentModFilter = "ALL";

// Initialize the Application
function init() {
  loadFromLocalStorage();
  populateModuleFilter();
  setupEventListeners();
  syncExamModeUI();
  updateProgressAndStats();
  renderAll();
}

// Load state from browser Local Storage
function loadFromLocalStorage() {
  try {
    const localAnswered = localStorage.getItem('cp_quiz_answered');
    if (localAnswered) answered = new Set(JSON.parse(localAnswered));

    const localCorrect = localStorage.getItem('cp_quiz_correct');
    if (localCorrect) correct = new Set(JSON.parse(localCorrect));

    const localBookmarks = localStorage.getItem('cp_quiz_bookmarks');
    if (localBookmarks) bookmarks = new Set(JSON.parse(localBookmarks));

    const localChosen = localStorage.getItem('cp_quiz_chosen');
    if (localChosen) chosenAnswers = JSON.parse(localChosen);

    const localExamMode = localStorage.getItem('cp_quiz_exam_mode');
    if (localExamMode) isExamMode = JSON.parse(localExamMode);

    const localExamSubmitted = localStorage.getItem('cp_quiz_exam_submitted');
    if (localExamSubmitted) examSubmitted = JSON.parse(localExamSubmitted);

    const localSeconds = localStorage.getItem('cp_quiz_exam_seconds');
    if (localSeconds) examSecondsElapsed = parseInt(localSeconds, 10);
  } catch (e) {
    console.error("Failed to load local storage state:", e);
  }
}

// Save state to browser Local Storage
function saveToLocalStorage() {
  try {
    localStorage.setItem('cp_quiz_answered', JSON.stringify([...answered]));
    localStorage.setItem('cp_quiz_correct', JSON.stringify([...correct]));
    localStorage.setItem('cp_quiz_bookmarks', JSON.stringify([...bookmarks]));
    localStorage.setItem('cp_quiz_chosen', JSON.stringify(chosenAnswers));
    localStorage.setItem('cp_quiz_exam_mode', JSON.stringify(isExamMode));
    localStorage.setItem('cp_quiz_exam_submitted', JSON.stringify(examSubmitted));
    localStorage.setItem('cp_quiz_exam_seconds', examSecondsElapsed.toString());
  } catch (e) {
    console.error("Failed to save local storage state:", e);
  }
}

// Populate Module Dropdown filter dynamically
function populateModuleFilter() {
  const sel = document.getElementById('modFilter');
  const mods = [...new Set(QUESTIONS.map(q => q.m))];
  mods.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    sel.appendChild(opt);
  });
}

// Toggle and configure UI depending on Exam vs Study mode
function syncExamModeUI() {
  const examCard = document.getElementById('examInfoCard');
  const submitBar = document.getElementById('examSubmitBar');
  const modeSelect = document.getElementById('tierFilter');

  if (isExamMode) {
    examCard.classList.add('active');
    if (!examSubmitted) {
      submitBar.classList.add('active');
      startExamTimer();
    } else {
      submitBar.classList.remove('active');
      stopExamTimer();
    }
  } else {
    examCard.classList.remove('active');
    submitBar.classList.remove('active');
    stopExamTimer();
  }
}

// Start stopwatch for exam mode
function startExamTimer() {
  if (examTimer) clearInterval(examTimer);
  const timerVal = document.getElementById('timerVal');
  
  // Format seconds to HH:MM:SS
  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600).toString().padStart(2, '0');
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  timerVal.textContent = formatTime(examSecondsElapsed);

  examTimer = setInterval(() => {
    examSecondsElapsed++;
    timerVal.textContent = formatTime(examSecondsElapsed);
    saveToLocalStorage();
  }, 1000);
}

function stopExamTimer() {
  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }
}

// Get ordered lists based on tier filter selection
function getRankedIndices() {
  return QUESTIONS.map((_, i) => i).sort((a, b) => {
    const ta = TIER_ORDER.indexOf(QUESTIONS[a].t);
    const tb = TIER_ORDER.indexOf(QUESTIONS[b].t);
    return ta - tb;
  });
}

// Get currently filtered list of indices
function getFilteredIndices() {
  if (shuffledIndices) return shuffledIndices.slice();
  
  let indices;
  if (currentFilter === "RANKED") {
    indices = getRankedIndices();
  } else if (currentFilter === "BOOKMARKED") {
    indices = [...bookmarks];
  } else {
    indices = QUESTIONS.map((_, i) => i).filter(i => QUESTIONS[i].t === currentFilter);
  }

  if (currentModFilter !== "ALL") {
    indices = indices.filter(i => QUESTIONS[i].m === currentModFilter);
  }

  return indices;
}

// Render Stats & Gauges
function updateProgressAndStats() {
  // Main header stats
  document.getElementById('statAnswered').textContent = `${answered.size}/${QUESTIONS.length}`;
  const accuracy = answered.size ? Math.round((correct.size / answered.size) * 100) : 0;
  document.getElementById('statAcc').textContent = answered.size ? `${accuracy}%` : '—';
  
  const modeText = isExamMode ? (examSubmitted ? "EXAM SUBMITTED" : "EXAM ACTIVE") : "STUDY MODE";
  const statMode = document.getElementById('statMode');
  statMode.textContent = modeText;
  
  if (isExamMode) {
    statMode.className = 'mode-indicator exam';
  } else {
    statMode.className = 'mode-indicator ranked';
  }

  // Draw 4 priority gauges
  const row = document.getElementById('gaugeRow');
  row.innerHTML = '';
  TIER_ORDER.forEach(t => {
    const qsOfTier = QUESTIONS.map((q, i) => i).filter(i => QUESTIONS[i].t === t);
    const done = qsOfTier.filter(i => answered.has(i)).length;
    const pct = qsOfTier.length ? Math.round((done / qsOfTier.length) * 100) : 0;
    const info = TIER_INFO[t];
    
    const div = document.createElement('div');
    div.className = 'gauge';
    div.innerHTML = `
      <div class="label">
        <span class="swatch" style="background:${info.color}"></span>
        ${info.name}
      </div>
      <div class="val mono">${done}/${qsOfTier.length}</div>
      <div class="bar"><i style="width:${pct}%;background:${info.color}"></i></div>
    `;
    row.appendChild(div);
  });

  // Draw module breakdown coverage
  const list = document.getElementById('modList');
  list.innerHTML = '';
  const mods = [...new Set(QUESTIONS.map(q => q.m))];
  mods.forEach(m => {
    const idxs = QUESTIONS.map((q, i) => i).filter(i => QUESTIONS[i].m === m);
    const done = idxs.filter(i => answered.has(i)).length;
    const pct = idxs.length ? Math.round((done / idxs.length) * 100) : 0;
    
    const rowDiv = document.createElement('div');
    rowDiv.className = 'mod-row';
    rowDiv.innerHTML = `
      <div class="name" title="${m}">${m}</div>
      <div class="track"><i style="width:${pct}%"></i></div>
      <div class="count">${done}/${idxs.length}</div>
    `;
    list.appendChild(rowDiv);
  });
}

// Render Questions
function renderAll() {
  const area = document.getElementById('quizArea');
  const indices = getFilteredIndices();
  area.innerHTML = '';

  if (indices.length === 0) {
    area.innerHTML = `
      <div class="qcard empty">
        <div class="big">—</div>
        <div>No questions match your current filter settings.</div>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();
  const letters = ['A', 'B', 'C', 'D'];

  indices.forEach((idx, pos) => {
    const q = QUESTIONS[idx];
    const info = TIER_INFO[q.t] || { name: "General", color: "var(--text)" };
    const card = document.createElement('div');
    card.className = 'qcard';
    card.id = `qcard-${idx}`;
    card.dataset.idx = idx;

    const isBookmarked = bookmarks.has(idx);
    const hasChosen = chosenAnswers[idx] !== undefined;

    card.innerHTML = `
      <div class="qcard-actions">
        <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-idx="${idx}" title="Flag/Bookmark Question">
          <svg width="20" height="20" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </button>
      </div>
      <div class="qmeta">
        <span class="tag ${q.t}">${info.name}</span>
        <span class="idx mono">#${pos + 1} / ${indices.length}</span>
        <span class="mod mono">${q.m}</span>
      </div>
      <p class="qtext">${q.q}</p>
      <div class="opts" id="opts-${idx}"></div>
      <div class="explanation-panel" id="expl-${idx}">
        <h4>Explanation</h4>
        <p>${q.e || ''}</p>
      </div>
      <div class="foot-row" style="margin-top: 14px;">
        <div class="result-note" id="note-${idx}"></div>
      </div>
    `;

    const optsWrap = card.querySelector(`#opts-${idx}`);
    const explPanel = card.querySelector(`#expl-${idx}`);
    const note = card.querySelector(`#note-${idx}`);

    q.o.forEach((optText, oi) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      btn.innerHTML = `<span class="letter">${letters[oi]}</span><span>${optText}</span>`;

      // Handle locking states
      if (isExamMode) {
        if (examSubmitted) {
          // Exam has been submitted: display final evaluation
          btn.classList.add('locked');
          btn.disabled = true;
          
          if (oi === q.a) {
            btn.classList.add('correct');
          }
          if (chosenAnswers[idx] === oi && oi !== q.a) {
            btn.classList.add('wrong');
          }
        } else {
          // Exam active: highlight user choice
          if (chosenAnswers[idx] === oi) {
            btn.classList.add('correct'); // Use active highlight color (emerald or blue indicator)
          }
          btn.addEventListener('click', () => selectExamAnswer(idx, oi));
        }
      } else {
        // Study Mode
        if (answered.has(idx)) {
          btn.classList.add('locked');
          btn.disabled = true;
          if (oi === q.a) btn.classList.add('correct');
          if (chosenAnswers[idx] === oi && oi !== q.a) btn.classList.add('wrong');
        } else {
          btn.addEventListener('click', () => selectStudyAnswer(idx, oi));
        }
      }

      optsWrap.appendChild(btn);
    });

    // Populate feedback and explanation panels
    if (isExamMode && examSubmitted) {
      explPanel.classList.add('show');
      const isCorrect = correct.has(idx);
      if (chosenAnswers[idx] !== undefined) {
        explPanel.classList.add(isCorrect ? 'correct-expl' : 'wrong-expl');
        note.textContent = isCorrect ? "Correct answer submitted." : `Incorrect submitted — correct: ${letters[q.a]}.`;
        note.classList.add(isCorrect ? 'ok' : 'bad');
      } else {
        note.textContent = `Unanswered — correct: ${letters[q.a]}.`;
        note.classList.add('bad');
      }
    } else if (!isExamMode && answered.has(idx)) {
      explPanel.classList.add('show');
      const isCorrect = correct.has(idx);
      explPanel.classList.add(isCorrect ? 'correct-expl' : 'wrong-expl');
      note.textContent = isCorrect ? "Correct!" : `Incorrect — correct answer is ${letters[q.a]}.`;
      note.classList.add(isCorrect ? 'ok' : 'bad');
    }

    fragment.appendChild(card);
  });

  area.appendChild(fragment);
  setupBookmarkButtons();
}

// Select choice in Study Mode
function selectStudyAnswer(idx, chosen) {
  if (answered.has(idx)) return;
  
  answered.add(idx);
  chosenAnswers[idx] = chosen;
  const q = QUESTIONS[idx];
  
  if (chosen === q.a) {
    correct.add(idx);
  }

  saveToLocalStorage();
  updateProgressAndStats();
  renderAll();
}

// Select choice in Exam Mode (State saved, visual changes rendered, no evaluation yet)
function selectExamAnswer(idx, chosen) {
  if (examSubmitted) return;

  chosenAnswers[idx] = chosen;
  saveToLocalStorage();
  
  // Re-render only options for the clicked question to ensure UI speed
  const optsWrap = document.getElementById(`opts-${idx}`);
  if (optsWrap) {
    const buttons = optsWrap.querySelectorAll('.opt');
    buttons.forEach((btn, oi) => {
      if (oi === chosen) {
        btn.classList.add('correct');
      } else {
        btn.classList.remove('correct');
      }
    });
  }
}

// Handle Bookmark triggers
function setupBookmarkButtons() {
  const btns = document.querySelectorAll('.bookmark-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx, 10);
      if (bookmarks.has(idx)) {
        bookmarks.delete(idx);
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
      } else {
        bookmarks.add(idx);
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
      }
      saveToLocalStorage();
      updateProgressAndStats();
      if (currentFilter === "BOOKMARKED") {
        renderAll();
      }
    });
  });
}

// Event Listeners setup
function setupEventListeners() {
  // Dropdown filter triggers
  document.getElementById('tierFilter').addEventListener('change', (e) => {
    currentFilter = e.target.value;
    shuffledIndices = null;
    renderAll();
  });

  document.getElementById('modFilter').addEventListener('change', (e) => {
    currentModFilter = e.target.value;
    shuffledIndices = null;
    renderAll();
  });

  // Shuffle button
  document.getElementById('shuffleBtn').addEventListener('click', () => {
    const indices = getFilteredIndices();
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    shuffledIndices = indices;
    renderAll();
  });

  // Reset Progress button
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all your progress, answers, bookmarks, and time metrics?")) {
      answered.clear();
      correct.clear();
      bookmarks.clear();
      chosenAnswers = {};
      shuffledIndices = null;
      examSecondsElapsed = 0;
      examSubmitted = false;
      
      localStorage.clear();
      stopExamTimer();
      syncExamModeUI();
      updateProgressAndStats();
      renderAll();
    }
  });

  // Exam vs Study Mode toggle switch
  const modeToggle = document.getElementById('examModeToggle');
  modeToggle.addEventListener('change', (e) => {
    isExamMode = e.target.checked;
    
    // Auto-reset state for exam if turning it on to keep exam integrity, or ask
    if (isExamMode && Object.keys(chosenAnswers).length > 0 && !examSubmitted) {
      if (!confirm("Entering Exam Mode. Do you want to preserve current progress or start a fresh exam? Cancel to keep, OK to clear and start fresh.")) {
        // Keep progress
      } else {
        // Fresh start
        chosenAnswers = {};
        answered.clear();
        correct.clear();
        examSecondsElapsed = 0;
        examSubmitted = false;
      }
    }
    
    shuffledIndices = null;
    saveToLocalStorage();
    syncExamModeUI();
    updateProgressAndStats();
    renderAll();
  });

  // Load toggled state if reloaded
  if (isExamMode) {
    modeToggle.checked = true;
  }

  // Submit Exam click handler
  document.getElementById('submitExamBtn').addEventListener('click', () => {
    if (!confirm("Are you sure you want to finish and submit your exam? You cannot modify answers after submission.")) return;
    
    stopExamTimer();
    examSubmitted = true;
    
    // Evaluate choices
    QUESTIONS.forEach((q, idx) => {
      const chosen = chosenAnswers[idx];
      if (chosen !== undefined) {
        answered.add(idx);
        if (chosen === q.a) {
          correct.add(idx);
        }
      }
    });

    saveToLocalStorage();
    syncExamModeUI();
    updateProgressAndStats();
    renderAll();
    
    // Scroll to top to see score
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Floating Action Button logic for scrolling to top
  const fab = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }
  });
  
  fab.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Launch application on DOM load
document.addEventListener('DOMContentLoaded', init);
