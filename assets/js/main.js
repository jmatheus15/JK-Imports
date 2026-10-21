// JK Imports — o site funciona sem JS; isto acrescenta menu, animações e o hero de vídeo de scroll.
document.documentElement.classList.add('js');

// Títulos com data-split entram palavra por palavra; leitores de tela leem a frase inteira
document.querySelectorAll('[data-split]').forEach((el) => {
  const text = el.textContent.trim();
  const words = text.split(' ').map((w, i) => `<span class="w" style="--i:${i};--th:${(i * 0.12).toFixed(2)}">${w}</span>`);
  el.innerHTML = `<span class="visually-hidden">${text}</span><span aria-hidden="true">${words.join(' ')}</span>`;
});
document.querySelectorAll('.stagger').forEach((el) => {
  [...el.children].forEach((child, i) => child.style.setProperty('--i', i));
});

const header = document.querySelector('.header');

// Revela tudo que já chegou a 90% da tela, inclusive o que uma rolagem rápida pulou
let pending = [...document.querySelectorAll('.reveal')];
const reveal = () => {
  pending = pending.filter((el) => {
    if (el.getBoundingClientRect().top > innerHeight * 0.9) return true;
    el.classList.add('is-in');
    // aposenta os atrasos da sequência depois da entrada, para o hover não herdar o atraso
    if (el.classList.contains('stagger')) setTimeout(() => el.classList.add('is-settled'), 700 + el.children.length * 90);
    return false;
  });
};

// Botão flutuante some enquanto houver um botão primário visível (design.md §8: 1 primário por tela)
const fab = document.querySelector('.fab');
const primaries = [...document.querySelectorAll('main .btn--primary')];
const primaryInView = () => primaries.some((b) => {
  const band = b.closest('[data-band]');
  if (band && band.style.opacity !== '' && +band.style.opacity < 0.5) return false;
  const r = b.getBoundingClientRect();
  return r.bottom > 0 && r.top < innerHeight;
});

const onScroll = () => {
  header.classList.toggle('is-scrolled', scrollY > 8);
  fab.classList.toggle('is-hidden', primaryInView());
  if (pending.length) reveal();
};
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll, { passive: true });
onScroll();

// Loops (luz de contorno) só rodam com a seção na tela; tudo pausa com a aba escondida
const liveIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => e.target.classList.toggle('live', e.isIntersecting));
});
document.querySelectorAll('main > section').forEach((s) => liveIO.observe(s));
document.addEventListener('visibilitychange', () => document.body.classList.toggle('paused', document.hidden));

// <dialog> modal já prende o foco e fecha com Esc
const menu = document.getElementById('menu');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.hidden = false;
menuToggle.addEventListener('click', () => menu.showModal());
menu.addEventListener('click', (e) => {
  if (e.target.closest('a, [data-close]')) menu.close();
});

// Escolha o seu: sem JS o formulário faz GET no wa.me; com JS a mensagem vai com %20 em vez de "+"
const pick = document.querySelector('.pick__inner');
pick.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = new FormData(pick).get('text');
  open(`${pick.action}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

// ---------- Hero com vídeo de scroll (padrão de references/pipeline-scrub.md da skill) ----------
const hero = document.querySelector('.hero');
const video = hero.querySelector('.hero__video');
const bands = [...hero.querySelectorAll('[data-band]')].map((el) => {
  const [a, b] = el.dataset.band.split(' ').map(Number);
  return { el, a, b, op: -1, k: -1 };
});
// Os cinco portões do hero estático; o primeiro usa 1024px (desvio da skill) porque o layout desktop começa ali
const GATES = [
  '(max-width: 63.99em)',
  '(orientation: portrait) and (max-width: 1024px)',
  '(orientation: portrait) and (pointer: coarse)',
  '(orientation: landscape) and (pointer: coarse) and (max-height: 560px)',
  '(prefers-reduced-motion: reduce)',
];
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const smoothstep = (p, e0, e1) => {
  const t = clamp((p - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
const heroProgress = () => {
  const r = hero.getBoundingClientRect();
  return clamp(-r.top / (r.height - innerHeight), 0, 1);
};

// Faixas de legenda: opacidade com smoothstep e --k de montagem, escritos só quando mudam
function updateBands(p) {
  let changed = false;
  bands.forEach((band, n) => {
    const { a, b } = band;
    const f = Math.min(0.02, (b - a) / 3);
    const enter = n === 0 ? 1 : smoothstep(p, a, a + f);
    const leave = n === bands.length - 1 ? 1 : 1 - smoothstep(p, b - f, b);
    const op = Math.round(enter * leave * 1000) / 1000;
    const k = Math.round(clamp((p - a) / Math.min(0.025, (b - a) * 0.35), 0, 1) * 125) / 125;
    if (op !== band.op) {
      band.op = op;
      band.el.style.opacity = op;
      band.el.style.visibility = op ? '' : 'hidden';
      changed = true;
    }
    if (n > 0 && k !== band.k) {
      band.k = k;
      band.el.style.setProperty('--k', k);
    }
  });
  if (changed) fab.classList.toggle('is-hidden', primaryInView()); // faixas com CTA mudam depois do evento de scroll
}

// Seeks travados: nunca escreve currentTime com um seek em voo; guarda só o alvo mais novo
let seekBusy = false;
let pendingTime = null;
function requestSeek(t) {
  if (!video.duration) return;
  if (seekBusy) { pendingTime = t; return; }
  seekBusy = true;
  video.currentTime = t;
}
video.addEventListener('seeked', () => {
  seekBusy = false;
  if (pendingTime !== null) {
    const t = pendingTime;
    pendingTime = null;
    requestSeek(t);
  }
});
video.addEventListener('error', () => {
  seekBusy = false;
  pendingTime = null;
  hero.classList.remove('video-ready');
});

// Loop rAF que suaviza o tempo exibido (normalizado por dt) e descansa quando converge
let target = 0;
let shown = 0;
let rafId = null;
let lastTick = 0;
let heroOnScreen = true;
function tick(now) {
  const dt = Math.min(100, now - (lastTick || now));
  lastTick = now;
  shown += (target - shown) * (1 - Math.pow(1 - 0.16, dt / 16.667));
  if (Math.abs(target - shown) < 0.0005) {
    shown = target;
    rafId = null;
    lastTick = 0;
  } else {
    rafId = requestAnimationFrame(tick);
  }
  requestSeek(shown * video.duration);
  updateBands(shown);
}
function onHeroScroll() {
  target = heroProgress();
  if (rafId === null && heroOnScreen) rafId = requestAnimationFrame(tick);
}

// Blob transmitido: funciona em hospedagem sem HTTP Range; 20 s sem progresso abortam para o hero estático
async function loadVideo() {
  const ctrl = new AbortController();
  let watchdog = setTimeout(() => ctrl.abort(), 20000);
  const res = await fetch(hero.dataset.video, { priority: 'low', signal: ctrl.signal });
  if (!res.ok) throw new Error(`vídeo ${res.status}`);
  const reader = res.body.getReader();
  const chunks = [];
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    clearTimeout(watchdog);
    watchdog = setTimeout(() => ctrl.abort(), 20000);
    chunks.push(value);
  }
  clearTimeout(watchdog);
  video.src = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }));
  video.addEventListener('canplay', () => {
    requestSeek(heroProgress() * video.duration);
    hero.classList.add('video-ready');
  }, { once: true });
}

let scrubOn = false;
let videoRequested = false;
function enableScrub() {
  if (scrubOn) return;
  scrubOn = true;
  hero.classList.add('is-scrub');
  if (!videoRequested) {
    videoRequested = true;
    // o pôster (primeiro quadro do vídeo) vence a corrida de banda: o Blob só começa quando ele chega ou falha
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      loadVideo().catch(() => hero.classList.add('video-failed')); // o pôster carrega a jornada sozinho
    };
    const poster = new Image();
    poster.onload = () => {
      video.poster = poster.src;
      hero.classList.add('poster-ready');
      start();
    };
    poster.onerror = start;
    poster.src = hero.dataset.poster;
    setTimeout(start, 4000); // um pôster travado nunca segura o vídeo
  }
  addEventListener('scroll', onHeroScroll, { passive: true });
  bands.forEach((b) => { b.op = -1; b.k = -1; });
  target = shown = heroProgress();
  updateBands(shown);
  onHeroScroll();
}
function disableScrub() {
  if (!scrubOn) return;
  scrubOn = false;
  hero.classList.remove('is-scrub');
  removeEventListener('scroll', onHeroScroll);
  if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
  bands.forEach(({ el }) => {
    el.style.removeProperty('opacity');
    el.style.removeProperty('visibility');
    el.style.removeProperty('--k');
  });
}
const applyHeroMode = () => (GATES.some((q) => matchMedia(q).matches) ? disableScrub() : enableScrub());

// Só arma quando o vídeo aprovado existir (data-video no hero); até lá, hero estático
if (hero.dataset.video) {
  const MQLS = GATES.map((q) => matchMedia(q)); // referências mantidas para os listeners não se perderem
  MQLS.forEach((m) => m.addEventListener('change', applyHeroMode));
  applyHeroMode();
  new IntersectionObserver(([e]) => {
    heroOnScreen = e.isIntersecting;
    if (heroOnScreen && scrubOn) onHeroScroll();
  }).observe(hero);
}
