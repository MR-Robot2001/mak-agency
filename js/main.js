/**
 * QUANTILE — Core UX & Sensory Architecture
 * Web Audio Engine, Custom Cursor, Preloader, Scroll Mechanics
 */

// ==========================================
// 1. WEB AUDIO API HAPTIC SYNTHESIZER
// ==========================================

class LuxuryAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('quantile_muted') === 'true';
    this.hasInteracted = false;
    this.updateIcon();
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('quantile_muted', this.isMuted);
    this.updateIcon();
    if (!this.isMuted) {
      this.playConfirm();
    }
  }

  updateIcon() {
    const btn = document.getElementById('sound-toggle');
    if (!btn) return;
    if (this.isMuted) {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
        </svg>
      `;
      btn.classList.remove('sound-on');
      btn.setAttribute('title', 'Sound Muted (Click to enable audio experience)');
    } else {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      btn.classList.add('sound-on');
      btn.setAttribute('title', 'Audio Active (Click to mute)');
    }
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // Audio autoplay policy
    }
  }

  playHover() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(750, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {}
  }

  playConfirm() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [587.33, 880, 1174.66].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.04, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.25);
      });
    } catch (e) {}
  }
}

// Instantiate Sound Engine
window.soundEngine = new LuxuryAudioEngine();

// ==========================================
// 2. CUSTOM CURSOR WITH FLUID LERP
// ==========================================

function initCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states for interactive elements
  const interactives = document.querySelectorAll('a, button, input, select, textarea, .switcher-tab-btn, .disc-card, .work-card, .pricing-card, .card-quantile-way, .faq-trigger');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      if (window.soundEngine) window.soundEngine.playHover();
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
    el.addEventListener('click', () => {
      if (window.soundEngine) window.soundEngine.playClick();
    });
  });
}

// ==========================================
// 3. PRELOADER INITIALIZATION
// ==========================================

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.querySelector('.preloader-bar');
  const percentText = document.querySelector('.preloader-percent');

  if (!preloader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (bar) bar.style.width = '100%';
      if (percentText) percentText.textContent = '100%';

      setTimeout(() => {
        preloader.classList.add('loaded');
        triggerEntranceReveals();
      }, 350);
    } else {
      if (bar) bar.style.width = progress + '%';
      if (percentText) percentText.textContent = progress + '%';
    }
  }, 40);
}

function triggerEntranceReveals() {
  const elements = document.querySelectorAll('.hero-section .reveal-fade-up, .hero-section .stagger-parent');
  elements.forEach(el => el.classList.add('is-revealed'));
}

// ==========================================
// 4. SCROLL REVEALS & NAVBAR BEHAVIOR
// ==========================================

function initScrollEffects() {
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // IntersectionObserver for reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-fade-up, .stagger-parent').forEach(el => {
    observer.observe(el);
  });
}

// ==========================================
// 5. LUXURY CARD SPOTLIGHT EFFECT
// ==========================================

function initSpotlights() {
  const cards = document.querySelectorAll('.disc-card, .work-card, .pricing-card, .card-quantile-way, .card-old-way, .switcher-preview-card');

  cards.forEach(card => {
    card.classList.add('lux-spotlight');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ==========================================
// 6. SOUND TOGGLE BUTTON
// ==========================================

function initSoundToggle() {
  const btn = document.getElementById('sound-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      window.soundEngine.toggle();
    });
  }
}

// ==========================================
// 7. MOBILE MENU
// ==========================================

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.soundEngine) window.soundEngine.playConfirm();
  }

  function closeMenu() {
    menu.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  menu.querySelectorAll('a, .open-modal-trigger').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// ==========================================
// 8. MEGA-MENU INTERACTION & ACCESSIBILITY
// ==========================================

function initMegaMenu() {
  const item = document.getElementById('mega-menu-item');
  const trigger = document.getElementById('mega-menu-trigger');
  const menu = document.getElementById('nav-mega-menu');
  if (!item || !trigger || !menu) return;

  let timer = null;

  function show() {
    clearTimeout(timer);
    item.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function hide() {
    timer = setTimeout(() => {
      item.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }, 150);
  }

  // Hover support
  item.addEventListener('mouseenter', show);
  item.addEventListener('mouseleave', hide);
  menu.addEventListener('mouseenter', show);
  menu.addEventListener('mouseleave', hide);

  // Click / Touch toggle support
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = item.classList.contains('active');
    if (isOpen) {
      item.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      show();
    }
    if (window.soundEngine) window.soundEngine.playClick();
  });

  // Close when clicking any link inside mega menu
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      item.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!item.contains(e.target)) {
      item.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Escape key support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      item.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initScrollEffects();
  initSpotlights();
  initSoundToggle();
  initMobileMenu();
  initMegaMenu();
});
