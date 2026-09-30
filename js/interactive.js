/**
 * QUANTILE — High-Converting Interactive Engines:
 * 1. Interactive Capability Switcher (Copy, Brand, Video, Growth, Dev, AI)
 * 2. Sticky Conversion Bar & Urgency Controller
 * 3. Plan & Service Pre-fill Integration
 * 4. FAQ Accordion
 * 5. VIP Brief & Google Sheets Webhook Lead Ingestion Suite
 */

// ==========================================
// 1. CAPABILITY SWITCHER PRESETS & CONTROLLER
// ==========================================

const CAPABILITY_DATA = {
  copy: {
    badge: "Copywriting & Conversion",
    badgeClass: "accent-violet",
    title: "High-Converting Sales Copy & Brand Manifestos",
    desc: "Hypnotic sales letters, multi-million dollar VSL video scripts, brand manifestos, and high-retention email sequences that turn cold traffic into fanatical buyers.",
    bullets: [
      "Long-form direct response sales page or landing page copy",
      "High-converting VSL script with visual storyboard cues",
      "7-part automated email welcome & conversion sequence",
      "Founder brand voice guidelines & persuasive manifesto"
    ],
    velocity: "⚡ 48h to First Draft",
    impact: "📈 +35% Tested Conversion Lift",
    squad: "👥 Direct-Response Chief + Editor",
    serviceName: "Masterclass Copywriting",
    budgetDefault: "$950 (Sprint Starter)"
  },
  brand: {
    badge: "Haute Branding & Design",
    badgeClass: "accent-coral",
    title: "Luxury Brand Identity & Digital Flagships",
    desc: "Apple-caliber visual systems, bespoke 3D spatial motion, luxury digital interfaces, and packaging guidelines designed to command 10x pricing power.",
    bullets: [
      "Comprehensive luxury logo suite & typography system",
      "Complete Figma UI/UX design tokens & responsive components",
      "3D spatial product renders & unboxing aesthetics",
      "Commanding 10x premium perceived brand equity"
    ],
    velocity: "⚡ 72h Sprint Delivery",
    impact: "👑 2x-3x Higher Perceived Value",
    squad: "👥 Creative Director + 3D Motion Artist",
    serviceName: "Luxury Brand & UI/UX",
    budgetDefault: "$2,400 (Growth Accelerator)"
  },
  video: {
    badge: "8K Cinema & Viral Media",
    badgeClass: "accent-amber",
    title: "8K Commercial Cinema & Viral Content Studio",
    desc: "Commercial films, modular high-converting short-form creative factories for TikTok and Reels, founder podcasts, and cinematic brand storytelling.",
    bullets: [
      "3x High-converting commercial ad cuts (4K/8K)",
      "30+ Modular short-form Reels/TikTok creative variants",
      "Sound design, kinetic typography & visual effects",
      "Complete media buyer ready export pack"
    ],
    velocity: "⚡ 4-Day Rapid Turnaround",
    impact: "🎬 280K+ Organic Video Views",
    squad: "👥 Commercial Film Director + Colorist/Editor",
    serviceName: "8K Cinema Video Studio",
    budgetDefault: "$2,400 (Growth Accelerator)"
  },
  growth: {
    badge: "Performance & Viral Growth",
    badgeClass: "accent-cyan",
    title: "Multi-Channel Paid Ads & Viral Acquisition Blitz",
    desc: "Algorithmic paid media campaigns across Meta, TikTok, YouTube & Google, programmatic SEO domination, viral PR takeovers, and high-yield CRO funnels.",
    bullets: [
      "Multi-channel paid media blitz setup & creative matrix",
      "High-yield landing page CRO & multivariate testing",
      "Programmatic SEO architecture for top ranking search terms",
      "Predictable positive unit economics at scale"
    ],
    velocity: "⚡ 48h Campaign Setup",
    impact: "🚀 3.4x Target Return on Ad Spend",
    squad: "👥 Performance Media Lead + Growth Architect",
    serviceName: "Performance & Viral Growth",
    budgetDefault: "$2,400 (Growth Accelerator)"
  },
  dev: {
    badge: "Deep Tech & Software",
    badgeClass: "accent-indigo",
    title: "Ultra-Fast Bespoke Web & Mobile Platforms",
    desc: "Mission-critical full-stack applications, interactive 3D WebGL flagships, native iOS/Android mobile apps, and low-latency cloud backend engineering.",
    bullets: [
      "Ultra-fast responsive web flagship (99+ Google Lighthouse score)",
      "Native iOS & Android mobile application development",
      "Secure cloud database, authentication & API integrations",
      "100% clean production code & sovereign IP handover"
    ],
    velocity: "⚡ 5-Day Sprint Deployment",
    impact: "⚡ Sub-Second Load & Clean Architecture",
    squad: "👥 Senior Full-Stack Engineer + Systems Architect",
    serviceName: "Deep Tech & Bespoke Dev",
    budgetDefault: "$2,400 (Growth Accelerator)"
  },
  ai: {
    badge: "Applied AI & Automation",
    badgeClass: "accent-emerald",
    title: "Autonomous Multi-Agent AI & Operations Swarms",
    desc: "Custom LLM integrations, autonomous AI agents, private localized RAG pipelines, and automated CRM/ERP workflows that eliminate weeks of manual work in seconds.",
    bullets: [
      "Custom autonomous multi-agent operational workflows",
      "Private local RAG knowledge base & semantic search",
      "Real-time executive decision dashboard & CRM synchronization",
      "80%+ Operational overhead reduction guaranteed"
    ],
    velocity: "⚡ 48h to First Prototype",
    impact: "🤖 12+ Hours Saved Every Week",
    squad: "👥 Lead AI Researcher + ML Engineer",
    serviceName: "Applied AI & Automation",
    budgetDefault: "$2,400 (Growth Accelerator)"
  }
};

function initCapabilitySwitcher() {
  const tabs = document.querySelectorAll('.switcher-tab-btn');
  const previewCard = document.querySelector('.switcher-preview-card');
  const badgeElem = document.getElementById('switcher-badge');
  const titleElem = document.getElementById('switcher-title');
  const descElem = document.getElementById('switcher-desc');
  const bulletsElem = document.getElementById('switcher-bullets');
  const velocityElem = document.getElementById('switcher-velocity');
  const impactElem = document.getElementById('switcher-impact');
  const squadElem = document.getElementById('switcher-squad');
  const ctaBtn = document.getElementById('switcher-cta-btn');

  if (!tabs.length || !previewCard) return;

  let currentKey = 'copy';

  function renderCapability(key) {
    const data = CAPABILITY_DATA[key];
    if (!data) return;

    // Subtle fade transition
    previewCard.style.opacity = '0.35';
    previewCard.style.transform = 'translateY(6px)';

    setTimeout(() => {
      if (badgeElem) {
        badgeElem.textContent = data.badge;
        badgeElem.className = `switcher-badge ${data.badgeClass}`;
      }
      if (titleElem) titleElem.textContent = data.title;
      if (descElem) descElem.textContent = data.desc;

      if (bulletsElem) {
        bulletsElem.innerHTML = data.bullets.map(b => `
          <li><span class="switcher-check">✓</span> <span>${b}</span></li>
        `).join('');
      }

      if (velocityElem) velocityElem.textContent = data.velocity;
      if (impactElem) impactElem.textContent = data.impact;
      if (squadElem) squadElem.textContent = data.squad;

      if (ctaBtn) {
        ctaBtn.innerHTML = `<span>Book ${data.badge.split(' ')[0]} Sprint →</span>`;
      }

      previewCard.style.opacity = '1';
      previewCard.style.transform = 'translateY(0)';
    }, 150);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-cap');
      if (key && key !== currentKey) {
        currentKey = key;
        renderCapability(key);
        if (window.soundEngine) window.soundEngine.playClick();
      }
    });
  });

  // Action button inside preview card
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      const data = CAPABILITY_DATA[currentKey];
      if (data) {
        preselectBudgetAndBrief(data.budgetDefault, `[Interested in: ${data.serviceName} 48h Sprint]`);
      }
      openModal();
    });
  }
}

// ==========================================
// 2. PLAN & SERVICE PRE-FILL INTEGRATION
// ==========================================

function preselectBudgetAndBrief(budgetValue, briefText) {
  const budgetSelect = document.getElementById('client-budget');
  const briefInput = document.getElementById('client-brief');

  if (budgetSelect && budgetValue) {
    for (let i = 0; i < budgetSelect.options.length; i++) {
      if (budgetSelect.options[i].value.includes(budgetValue) || budgetValue.includes(budgetSelect.options[i].value)) {
        budgetSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (briefInput && briefText) {
    if (!briefInput.value.trim() || briefInput.value.startsWith('[Interested in:')) {
      briefInput.value = briefText + '\n\n';
    }
  }
}

function initPlanSelectors() {
  // Pricing card buttons
  const planButtons = document.querySelectorAll('.select-plan-btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const budget = btn.getAttribute('data-budget');
      const card = btn.closest('.pricing-card');
      const planName = card ? card.getAttribute('data-plan') : 'Sprint Plan';
      preselectBudgetAndBrief(budget, `[Selected Plan: ${planName}]`);
    });
  });

  // Discipline card CTA buttons
  const serviceButtons = document.querySelectorAll('[data-service]');
  serviceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service');
      preselectBudgetAndBrief('$2,400 (Growth Accelerator)', `[Interested in: ${serviceName} 48h Sprint]`);
    });
  });
}

// ==========================================
// 3. STICKY BOTTOM CONVERSION BAR
// ==========================================

function initStickyConversionBar() {
  const stickyBar = document.getElementById('sticky-conversion-bar');
  const closeBtn = document.getElementById('sticky-bar-close');
  if (!stickyBar) return;

  let isDismissed = false;

  window.addEventListener('scroll', () => {
    if (isDismissed) return;
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 380) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  }, { passive: true });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      isDismissed = true;
      stickyBar.classList.remove('visible');
      if (window.soundEngine) window.soundEngine.playClick();
    });
  }
}

// ==========================================
// 4. FAQ ACCORDION
// ==========================================

function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      if (window.soundEngine) window.soundEngine.playClick();

      // Close all other accordion items
      items.forEach(other => {
        other.classList.remove('active');
        const otherPanel = other.querySelector('.faq-panel');
        if (otherPanel) otherPanel.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 35 + 'px';
      }
    });
  });
}

// ==========================================
// 5. VIP LEAD INGESTION SUITE & WEBHOOK
// ==========================================

const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz6Ll8ocIBxZM_yeWigJpRQgUUS5xhrEXt69HLc7WWgd5uIHX4bdBbIyvEsa1OgwqA/exec";

function resetModalView() {
  const form = document.getElementById('consultation-form');
  const successScreen = document.getElementById('modal-success-screen');
  const modalHeader = document.querySelector('.modal-header');

  if (form) {
    form.style.display = 'block';
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Submit Project Brief</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
    }
  }

  if (modalHeader) {
    modalHeader.style.display = 'block';
  }

  if (successScreen) {
    successScreen.style.display = 'none';
  }

  const existingBar = document.querySelector('.modal-transmitting-bar');
  if (existingBar) existingBar.remove();
}

function openModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    resetModalView();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.soundEngine) window.soundEngine.playConfirm();
  }
}

function closeModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
    setTimeout(resetModalView, 350);
  }
}

function initModal() {
  const modal = document.getElementById('consultation-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('.open-modal-trigger');
  const form = document.getElementById('consultation-form');
  const successScreen = document.getElementById('modal-success-screen');
  const doneBtn = document.getElementById('modal-success-done');

  triggers.forEach(trig => {
    trig.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (doneBtn) {
    doneBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('client-name').value;
      const email = document.getElementById('client-email').value;
      const company = document.getElementById('client-company').value;
      const budget = document.getElementById('client-budget').value;
      const brief = document.getElementById('client-brief').value;

      const submitBtn = form.querySelector('button[type="submit"]');
      const modalCard = document.querySelector('.modal-card');
      const modalHeader = document.querySelector('.modal-header');
      const successClientMsg = document.getElementById('success-client-msg');

      // 1. Submit Click Animation: Spinner + Transmitting Status
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="btn-spinner"></span><span>TRANSMITTING EXECUTIVE BRIEF...</span>`;

      // Top glowing scanner bar animation across modal card
      if (modalCard && !modalCard.querySelector('.modal-transmitting-bar')) {
        const bar = document.createElement('div');
        bar.className = 'modal-transmitting-bar';
        modalCard.appendChild(bar);
      }

      if (window.soundEngine) window.soundEngine.playConfirm();

      // 2. Dispatch directly to Google Sheets Webhook
      const formData = new FormData();
      formData.append("timestamp", new Date().toLocaleString());
      formData.append("name", name);
      formData.append("email", email);
      formData.append("company", company || "N/A");
      formData.append("budget", budget);
      formData.append("brief", brief);

      fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      }).then(() => {
        console.log("✓ Transmitted lead directly to Google Sheets webhook:", GOOGLE_SHEET_WEBHOOK_URL);
      }).catch(err => {
        console.warn("Google Sheet transmission note:", err);
      });

      // 3. On Form Submit: Reveal Green Checkmark Animation!
      setTimeout(() => {
        // Update submit button with inline animated checkmark
        submitBtn.innerHTML = `
          <svg class="inline-tick-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color:#10B981;">TRANSMITTED SUCCESSFULLY ✓</span>
        `;

        if (window.soundEngine) window.soundEngine.playConfirm();

        // Reveal the animated green tick mark screen
        setTimeout(() => {
          if (modalHeader) modalHeader.style.display = 'none';
          form.style.display = 'none';
          const existingBar = document.querySelector('.modal-transmitting-bar');
          if (existingBar) existingBar.remove();

          if (successClientMsg) {
            successClientMsg.textContent = `Your project brief for ${company || name} has been securely delivered to executive leadership. A Managing Partner will review your requirements under strict non-disclosure protocol and connect with you ASAP.`;
          }

          if (successScreen) {
            successScreen.style.display = 'flex';
          }

          // Show Toast Notice
          showToast(`✓ Brief received for ${company || name}. We are glad to connect with you ASAP!`);

          // Auto-close modal after 4.5 seconds if still open
          setTimeout(() => {
            if (modal.classList.contains('open')) {
              closeModal();
            }
          }, 4500);
        }, 500);

      }, 850);
    });
  }
}

// Global toast notification helper
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="color:#10B981;">●</span> <span>${message}</span>`;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 5000);
}

// ==========================================
// 6. NEUMORPHIC DASHBOARD WIDGETS CONTROLLER
// ==========================================

function initNeumorphicDashboard() {
  const toggle = document.getElementById('neu-demo-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const knob = toggle.querySelector('.neu-toggle-knob');
      const isOff = toggle.classList.toggle('off');
      if (knob) {
        knob.textContent = isOff ? 'OFF' : 'ON';
      }
      if (window.soundEngine) {
        if (isOff) window.soundEngine.playClick();
        else window.soundEngine.playConfirm();
      }
      showToast(isOff ? 'Sprint Protocol: Paused' : 'Sprint Protocol: Active (48h Velocity)');
    });
  }

  // Interactive timeline nodes
  const timelineNodes = document.querySelectorAll('.neu-timeline-node');
  timelineNodes.forEach((node, idx) => {
    node.addEventListener('click', () => {
      timelineNodes.forEach((n, i) => {
        if (i <= idx) n.classList.add('active');
        else n.classList.remove('active');
      });
      const activeLine = document.querySelector('.neu-timeline-active-line');
      if (activeLine) {
        activeLine.style.width = ((idx + 1) / timelineNodes.length * 90) + '%';
      }
      if (window.soundEngine) window.soundEngine.playClick();
    });
  });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  initNeumorphicDashboard();
  initCapabilitySwitcher();
  initPlanSelectors();
  initStickyConversionBar();
  initFAQ();
  initModal();
});
