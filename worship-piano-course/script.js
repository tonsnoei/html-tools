/* ============================================
   Piano Worship Fundamentals — script.js
   ============================================ */

const TOTAL_LESSONS = 12;
const STORAGE_KEY = 'pwf_visited';

/* ─── Visited lessons ─── */
function getVisited() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function setVisited(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function markCurrentLesson() {
  const meta = document.querySelector('meta[name="lesson-number"]');
  if (!meta) return;
  const num = parseInt(meta.content, 10);
  if (!num) return;

  const visited = getVisited();
  if (!visited.includes(num)) {
    visited.push(num);
    setVisited(visited);
  }
  return num;
}

/* ─── Progress bar (lesson pages) ─── */
function updateLessonProgressBar(currentLesson) {
  const visited = getVisited();
  const pct = Math.round((visited.length / TOTAL_LESSONS) * 100);

  const fill = document.getElementById('progress-fill');
  const pctEl = document.getElementById('progress-pct');
  const labelEl = document.getElementById('progress-label');

  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (labelEl) labelEl.textContent = `Les ${currentLesson} van ${TOTAL_LESSONS}`;

  // Update dots
  const dots = document.querySelectorAll('.lesson-dot');
  dots.forEach(dot => {
    const n = parseInt(dot.dataset.lesson, 10);
    dot.classList.remove('visited', 'current');
    if (n === currentLesson) dot.classList.add('current');
    else if (visited.includes(n)) dot.classList.add('visited');
  });
}

/* ─── Progress bar (index page) ─── */
function updateIndexProgress() {
  const visited = getVisited();
  const pct = Math.round((visited.length / TOTAL_LESSONS) * 100);

  const fill = document.getElementById('progress-fill');
  const pctEl = document.getElementById('progress-pct');
  const labelEl = document.getElementById('progress-label');

  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (labelEl) labelEl.textContent = `${visited.length} van ${TOTAL_LESSONS} lessen bezocht`;

  // Mark lesson cards as visited
  const cards = document.querySelectorAll('.lesson-card[data-lesson]');
  cards.forEach(card => {
    const n = parseInt(card.dataset.lesson, 10);
    if (visited.includes(n)) card.classList.add('visited');
  });
}

/* ─── Mobile nav toggle ─── */
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  // Close when clicking a link
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

/* ─── Smooth progress bar animation on load ─── */
function animateProgressBar() {
  const fill = document.getElementById('progress-fill');
  if (!fill) return;
  const target = fill.style.width;
  fill.style.width = '0%';
  requestAnimationFrame(() => {
    setTimeout(() => { fill.style.width = target; }, 80);
  });
}

/* ─── Reset progress (dev helper, accessible via console) ─── */
window.resetProgress = function() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
};

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();

  const isIndex = document.body.classList.contains('page-index');
  const isLesson = document.body.classList.contains('page-lesson');

  if (isLesson) {
    const current = markCurrentLesson();
    updateLessonProgressBar(current);
    animateProgressBar();
  }

  if (isIndex) {
    updateIndexProgress();
    animateProgressBar();
  }
});
