/**
 * QUANTILE — Interactive Engines:
 * 1. The "Name It" Oracle Engine
 * 2. Project Scoper & Investment Estimator
 * 3. Case Studies Filter
 * 4. FAQ Accordion
 * 5. VIP Brief & Consultation Suite
 */

// ==========================================
// 1. THE "NAME IT" ORACLE ENGINE
// ==========================================

const ORACLE_PRESETS = {
  copy: {
    query: "Write a high-converting brand manifesto, sales page, & video script",
    code: "ORCL-CPY-501",
    title: "Masterclass Hypnotic Copywriting & Conversion Architecture",
    tag: "High-Ticket Copywriting & Narrative",
    squad: "Master Copywriter (ex-Ogilvy/Agora), Direct Response Strategist, Consumer Psychologist",
    timeline: "2 Sprints (4 Weeks to Master Copy Package)",
    deliverables: "Comprehensive brand voice doctrine, long-form sales page, high-converting VSL script, 14-part email retention sequence, advertorials",
    impact: "380% average conversion lift, commanding 5x higher customer lifetime value (LTV)"
  },
  content: {
    query: "Build an 8K commercial video ad campaign & content studio engine",
    code: "ORCL-MED-808",
    title: "Cinema Studio Commercials & Viral Social Blitz",
    tag: "Media Studio & Video Production",
    squad: "Commercial Film Director, Senior Colorist/Editor, Viral Short-Form Producer, VFX Lead",
    timeline: "3 Sprints (6 Weeks to Global Premiere)",
    deliverables: "3x 60s cinema-grade commercials (4K/8K), 60+ modular TikTok/Reels variants, studio podcast setup, media buyer creative pack",
    impact: "Over 14M+ organic views generated, viral engagement spikes, prestigious cultural footprint"
  },
  ai: {
    query: "Automate our enterprise operations with custom autonomous AI agents",
    code: "ORCL-AI-902",
    title: "Autonomous Enterprise Intelligence Matrix",
    tag: "Applied AI & Neural Architecture",
    squad: "Lead AI Researcher (ex-DeepMind), LLM Ops Engineer, Enterprise Data SRE",
    timeline: "3 Sprints (6 Weeks to Full Deployment)",
    deliverables: "Bespoke multi-agent swarm, private localized RAG pipeline, real-time decision dashboard, automated CRM/ERP syncing",
    impact: "82% reduction in manual triage, 4.8x velocity increase, zero external data leakage guarantee"
  },
  brand: {
    query: "Rebrand our company to command 10x luxury market pricing",
    code: "ORCL-LUX-441",
    title: "Sovereign Haute-Couture Identity & Digital Flagship",
    tag: "Haute Couture Brand & UI/UX",
    squad: "Executive Creative Director (ex-Apple/Pentagram), 3D Motion Lead, Senior Design Systems Architect",
    timeline: "4 Sprints (8 Weeks to Global Reveal)",
    deliverables: "Complete luxury brand design system, bespoke 3D brand assets, award-worthy web flagship, typography & physical packaging guidelines",
    impact: "340% increase in perceived brand equity, 2.6x pricing power elevation, top 0.1% market positioning"
  },
  fintech: {
    query: "Build a bespoke high-frequency fintech platform & trading infrastructure",
    code: "ORCL-FIN-780",
    title: "Ultra-Low Latency Sovereign Financial Engine",
    tag: "Deep Tech & Cryptographic Architecture",
    squad: "Principal Systems Engineer, High-Throughput Cloud Architect, Security & Compliance Lead",
    timeline: "5 Sprints (10 Weeks to Production Audit)",
    deliverables: "Sub-millisecond order processing engine, distributed ledger/banking API integrations, military-grade end-to-end encryption",
    impact: "SOC2/ISO27001 ready, 99.999% uptime SLA, capacity to process 150,000 tx/sec"
  },
  viral: {
    query: "Execute a viral multi-million dollar product launch campaign",
    code: "ORCL-MKT-312",
    title: "Exponential Market Takeover & Global Narrative Launch",
    tag: "Hyper-Growth & Media Production",
    squad: "Viral Growth Hacker, Hollywood Cinema Director, Algorithmic Media Strategist",
    timeline: "2 Sprints (4 Weeks to Zero-Hour Launch)",
    deliverables: "Cinema-grade launch film, 150+ high-converting creative variants, tier-1 media placements, programmatic influencer syndication",
    impact: "Projected 10M+ impressions, 28,000+ pre-orders, #1 trending across target verticals"
  },
  fractional: {
    query: "Deploy a fractional C-Suite & secure Series B institutional capital",
    code: "ORCL-CAP-105",
    title: "Capital Architecture & Institutional Sovereign Scaling",
    tag: "Corporate Strategy & Venture Syndicate",
    squad: "Fractional CFO (ex-Goldman/Blackstone), Fractional CTO, Venture Narrative Architect",
    timeline: "6 Sprints (12 Weeks to Term Sheet)",
    deliverables: "Institutional-grade financial model, $50M+ benchmark pitch deck, dataroom construction, direct roadshow introductions",
    impact: "Closed over $480M+ aggregate funding for Quantile enterprise partners"
  },
  mobile: {
    query: "Build custom iOS/Android mobile apps & cloud backend in 30 days",
    code: "ORCL-DEV-619",
    title: "Rapid Tactical Native Mobile & Cloud Ecosystem",
    tag: "Deep Tech & Software Engineering",
    squad: "2x Senior Swift/Kotlin Engineers, Full-Stack Cloud Architect, Lead Product Designer",
    timeline: "2 Sprints (4 Weeks to App Store Submission)",
    deliverables: "Native iOS & Android apps (Swift/Kotlin/React Native), serverless GraphQL backend, biometric auth, offline caching",
    impact: "App Store Editor's Choice design standard, 60fps fluid performance, production-ready scale"
  }
};

function initOracle() {
  const input = document.getElementById('oracle-input');
  const submitBtn = document.getElementById('oracle-submit-btn');
  const chips = document.querySelectorAll('.oracle-chip');
  const codeElem = document.getElementById('blueprint-code');
  const titleElem = document.getElementById('blueprint-title');
  const tagElem = document.getElementById('blueprint-tag');
  const squadElem = document.getElementById('blueprint-squad');
  const timelineElem = document.getElementById('blueprint-timeline');
  const delivElem = document.getElementById('blueprint-deliverables');
  const impactElem = document.getElementById('blueprint-impact');
  const scopeThisBtn = document.getElementById('oracle-scope-btn');

  if (!input || !submitBtn) return;

  function displayBlueprint(data) {
    const displayCard = document.getElementById('oracle-blueprint');
    if (displayCard) {
      displayCard.style.opacity = '0.3';
      displayCard.style.transform = 'translateY(8px)';
    }

    setTimeout(() => {
      if (codeElem) codeElem.textContent = data.code;
      if (titleElem) titleElem.textContent = data.title;
      if (tagElem) tagElem.textContent = data.tag;
      if (squadElem) squadElem.textContent = data.squad;
      if (timelineElem) timelineElem.textContent = data.timeline;
      if (delivElem) delivElem.textContent = data.deliverables;
      if (impactElem) impactElem.textContent = data.impact;

      if (displayCard) {
        displayCard.style.opacity = '1';
        displayCard.style.transform = 'translateY(0)';
      }
    }, 200);
  }

  function parseCustomQuery(text) {
    const q = text.toLowerCase();
    
    // Intelligently classify query
    if (q.includes('copy') || q.includes('write') || q.includes('script') || q.includes('email') || q.includes('story') || q.includes('words') || q.includes('ghostwrit')) {
      return {
        code: "ORCL-CPY-" + Math.floor(100 + Math.random() * 900),
        title: "High-Ticket Copywriting & Conversion Narrative",
        tag: "Copywriting & Strategic Storytelling",
        squad: "Direct Response Copy Chief, Senior Narrative Strategist, Conversion Psychologist",
        timeline: "2 Sprints (4 Weeks)",
        deliverables: `Persuasive sales narrative tailored to: "${text.slice(0, 45)}...", high-converting landing copy, multi-channel email sequence, brand manifesto`,
        impact: "Measurable 3x-5x lift in conversions and premium pricing elasticity"
      };
    } else if (q.includes('market') || q.includes('ad') || q.includes('growth') || q.includes('traffic') || q.includes('seo') || q.includes('media') || q.includes('video') || q.includes('film') || q.includes('podcast')) {
      return {
        code: "ORCL-MKT-" + Math.floor(100 + Math.random() * 900),
        title: "Omni-Channel Media Takeover & Performance Blitz",
        tag: "Growth Marketing & Media Studio",
        squad: "Paid Media Architect, Hollywood Commercial Director, Viral Content Lead",
        timeline: "3 Sprints (6 Weeks)",
        deliverables: `Comprehensive media acquisition blitz: "${text.slice(0, 45)}...", high-yield paid ads, cinema-grade creative assets, multi-platform syndicate`,
        impact: "Guaranteed rapid customer acquisition with positive unit economics at 8-figure scale"
      };
    } else if (q.includes('ai') || q.includes('bot') || q.includes('llm') || q.includes('agent') || q.includes('neural') || q.includes('automate')) {
      return {
        code: "ORCL-AI-" + Math.floor(100 + Math.random() * 900),
        title: "Bespoke Neural Synthesis & Autonomous Operations",
        tag: "Applied AI & Automation",
        squad: "Lead AI Researcher, Autonomous Agent Architect, Python/Rust SRE",
        timeline: "2 - 4 Sprints (4 - 8 Weeks)",
        deliverables: `Tailored automated workflow for: "${text.slice(0, 50)}...", custom agent logic, enterprise-grade vector indexing`,
        impact: "Guaranteed 60-80% operational overhead reduction & 10x throughput capacity"
      };
    } else if (q.includes('brand') || q.includes('design') || q.includes('logo') || q.includes('luxury') || q.includes('ui') || q.includes('web') || q.includes('site')) {
      return {
        code: "ORCL-DSGN-" + Math.floor(100 + Math.random() * 900),
        title: "High-Aesthetic Sovereign Brand & Digital Architecture",
        tag: "Luxury Brand & Interface Engineering",
        squad: "Design Director (Awarded), Senior Motion Artist, UI/UX Principal",
        timeline: "3 Sprints (6 Weeks)",
        deliverables: `Comprehensive design identity overhaul tailored to: "${text.slice(0, 45)}...", design token system, 3D visual language`,
        impact: "Instant elevated market positioning, 3x conversion velocity, elite perception"
      };
    } else if (q.includes('money') || q.includes('fund') || q.includes('invest') || q.includes('pitch') || q.includes('crypto') || q.includes('fintech') || q.includes('trade')) {
      return {
        code: "ORCL-CAP-" + Math.floor(100 + Math.random() * 900),
        title: "Capital Engineering & High-Throughput Financial Systems",
        tag: "Venture Architecture & Fintech",
        squad: "Ex-Wall Street Financial Modeler, Principal Quant Systems Engineer, Legal/Compliance Counsel",
        timeline: "4 Sprints (8 Weeks)",
        deliverables: `Institutional financial model, automated liquidity/transaction architecture for: "${text.slice(0, 45)}..."`,
        impact: "Institutional compliance, rapid deployment, maximum capital efficiency"
      };
    } else {
      return {
        code: "ORCL-SOV-" + Math.floor(100 + Math.random() * 900),
        title: "Bespoke Full-Spectrum Enterprise Execution",
        tag: "Special Operations Squad",
        squad: "Executive Copy Director, Creative Director, Enterprise Architect, Growth Lead",
        timeline: "3 - 5 Sprints (Custom Roadmap)",
        deliverables: `End-to-end execution blueprint addressing: "${text.slice(0, 60)}...", zero-legacy infrastructure, sovereign IP handover`,
        impact: "Absolute project completion with 99.4% precision guarantee and dedicated 24/7 war room"
      };
    }
  }

  // Handle preset chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const key = chip.getAttribute('data-oracle');
      if (ORACLE_PRESETS[key]) {
        input.value = ORACLE_PRESETS[key].query;
        displayBlueprint(ORACLE_PRESETS[key]);
        if (window.soundEngine) window.soundEngine.playClick();
      }
    });
  });

  // Handle submit query
  function handleQuery() {
    const val = input.value.trim();
    if (!val) return;

    if (window.soundEngine) window.soundEngine.playConfirm();

    // Check if matches preset closely or custom parse
    let result = null;
    for (const key in ORACLE_PRESETS) {
      if (ORACLE_PRESETS[key].query.toLowerCase() === val.toLowerCase()) {
        result = ORACLE_PRESETS[key];
        break;
      }
    }

    if (!result) {
      result = parseCustomQuery(val);
    }

    displayBlueprint(result);
  }

  submitBtn.addEventListener('click', handleQuery);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleQuery();
  });

  // Scope This Project CTA
  if (scopeThisBtn) {
    scopeThisBtn.addEventListener('click', () => {
      const modal = document.getElementById('consultation-modal');
      const briefInput = document.getElementById('client-brief');
      if (modal && briefInput) {
        briefInput.value = `[Oracle Blueprint: ${titleElem ? titleElem.textContent : 'Custom'}]\nDeliverables: ${delivElem ? delivElem.textContent : ''}\nSquad: ${squadElem ? squadElem.textContent : ''}`;
        openModal();
      }
    });
  }
}

// ==========================================
// 2. PROJECT SCOPER & INVESTMENT ESTIMATOR
// ==========================================

// ==========================================
// GOOGLE SHEETS WEBHOOK CONFIGURATION
// ==========================================
// Live Google Apps Script Web App URL for Quantile Leads
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz6Ll8ocIBxZM_yeWigJpRQgUUS5xhrEXt69HLc7WWgd5uIHX4bdBbIyvEsa1OgwqA/exec";

function initScoper() {
  const stageBtns = document.querySelectorAll('.stage-btn');
  const capCheckboxes = document.querySelectorAll('.capability-check');
  const speedSlider = document.getElementById('scoper-speed-slider');
  
  const tierNameElem = document.getElementById('scoper-tier-name');
  const squadSizeElem = document.getElementById('scoper-squad-size');
  const velocityElem = document.getElementById('scoper-velocity');
  const guaranteeElem = document.getElementById('scoper-guarantee');
  const priceDisplayElem = document.getElementById('scoper-price-display');
  const deployScopeBtn = document.getElementById('scoper-deploy-btn');

  let currentStage = 'growth'; // seed, growth, enterprise
  let currentSpeed = 2; // 1 = 14-day, 2 = 4-week, 3 = 8-week

  function calculateScope() {
    // Count active capabilities
    let selectedCount = 0;
    const selectedCaps = [];
    capCheckboxes.forEach(cb => {
      if (cb.checked) {
        selectedCount++;
        selectedCaps.push(cb.value);
        cb.closest('.capability-check-item').classList.add('selected');
      } else {
        cb.closest('.capability-check-item').classList.remove('selected');
      }
    });

    if (selectedCount === 0) selectedCount = 1;

    // Stage baseline calculation (Budget-friendly USD)
    let basePrice = 2400;
    let baseSquad = 3;
    let tierTitle = "Full-Spectrum Growth Engine";

    if (currentStage === 'seed') {
      basePrice = 950;
      baseSquad = 2;
      tierTitle = "Starter / Micro Sprint";
    } else if (currentStage === 'growth') {
      basePrice = 2400;
      baseSquad = 4;
      tierTitle = "Full-Spectrum Growth Engine";
    } else if (currentStage === 'enterprise') {
      basePrice = 4800;
      baseSquad = 6;
      tierTitle = "Complete Agency Armada";
    }

    // Adjust for number of capabilities (budget-friendly $350 per additional discipline)
    const squadSize = baseSquad + Math.floor(selectedCount * 0.7);
    let estimatedInvestment = basePrice + (selectedCount - 1) * 350;

    // Adjust for speed
    let velocityStr = "4 Sprints (8 Weeks)";
    let guaranteeText = "Full IP Handover + Bi-Weekly Deliveries";

    if (currentSpeed == 1) {
      // 14-Day Red Alert
      estimatedInvestment *= 1.25;
      velocityStr = "14-Day Tactical Blitz";
      guaranteeText = "Dedicated War Room + Rapid Daily Turnarounds";
    } else if (currentSpeed == 2) {
      // 4-Week Sprint
      estimatedInvestment *= 1.10;
      velocityStr = "2 Sprints (4-Week Accelerated)";
      guaranteeText = "Rapid Production-Ready Launch";
    } else {
      velocityStr = "4 Sprints (8-Week Full Build)";
      guaranteeText = "Complete Systems Build & Dedicated Support";
    }

    const roundedPrice = Math.round(estimatedInvestment / 50) * 50;
    const formattedPrice = "$" + roundedPrice.toLocaleString();

    // Update UI
    if (tierNameElem) tierNameElem.textContent = tierTitle;
    if (squadSizeElem) squadSizeElem.textContent = `${squadSize} Specialists`;
    if (velocityElem) velocityElem.textContent = velocityStr;
    if (guaranteeElem) guaranteeElem.textContent = guaranteeText;
    if (priceDisplayElem) {
      priceDisplayElem.innerHTML = `${formattedPrice} <small>/ sprint</small>`;
    }

    return {
      tierTitle,
      squadSize,
      velocityStr,
      formattedPrice,
      selectedCaps
    };
  }

  // Bind stage buttons
  stageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStage = btn.getAttribute('data-stage');
      if (window.soundEngine) window.soundEngine.playClick();
      calculateScope();
    });
  });

  // Bind checkboxes
  capCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      if (window.soundEngine) window.soundEngine.playClick();
      calculateScope();
    });
  });

  // Bind slider
  if (speedSlider) {
    speedSlider.addEventListener('input', (e) => {
      currentSpeed = parseInt(e.target.value, 10);
      calculateScope();
    });
  }

  // Deploy Scope CTA
  if (deployScopeBtn) {
    deployScopeBtn.addEventListener('click', () => {
      const scopeData = calculateScope();
      const briefInput = document.getElementById('client-brief');
      if (briefInput) {
        briefInput.value = `[Configured Scope: ${scopeData.tierTitle}]\nInvestment: ${scopeData.formattedPrice}/sprint\nTimeline: ${scopeData.velocityStr}\nSquad: ${scopeData.squadSize} Dedicated Specialists\nCapabilities: ${scopeData.selectedCaps.join(', ')}`;
      }
      openModal();
    });
  }

  // Initial calculation
  calculateScope();
}

// ==========================================
// 3. CASE STUDIES FILTER (THE VAULT)
// ==========================================

function initVaultFilters() {
  const filterBtns = document.querySelectorAll('.vault-filter-btn');
  const cards = document.querySelectorAll('.vault-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      if (window.soundEngine) window.soundEngine.playClick();

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat.includes(cat)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
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

      // Close all others
      items.forEach(other => {
        other.classList.remove('active');
        const otherPanel = other.querySelector('.faq-panel');
        if (otherPanel) otherPanel.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 30 + 'px';
      }
    });
  });
}

// ==========================================
// 5. VIP BRIEF MODAL & CONSULTATION
// ==========================================

function resetModalView() {
  const form = document.getElementById('consultation-form');
  const successScreen = document.getElementById('modal-success-screen');
  const modalHeader = document.querySelector('.modal-header');

  if (form) {
    form.style.display = 'block';
    form.reset();
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Transmit Executive Brief</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
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

      // 2. Dispatch to Google Sheets Webhook
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
        console.log("✓ Transmitted lead directly to Google Sheets:", GOOGLE_SHEET_WEBHOOK_URL);
      }).catch(err => {
        console.warn("Google Sheet transmission note:", err);
      });

      // 3. On Form Submit: Show Green Tick Mark Animation!
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
            successClientMsg.textContent = `Your executive brief for ${company || name} has been securely delivered. A Managing Partner will review your requirements under strict non-disclosure protocol and connect with you ASAP.`;
          }

          if (successScreen) {
            successScreen.style.display = 'flex';
          }

          // Show Toast Notice
          showToast(`✓ Executive brief received for ${company || name}. We are glad to connect with you ASAP!`);

          // Auto-close modal after 4.2 seconds if still open
          setTimeout(() => {
            if (modal.classList.contains('open')) {
              closeModal();
            }
          }, 4200);
        }, 500);

      }, 850);
    });
  }
}

// Toast notification helper
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

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  initOracle();
  initScoper();
  initVaultFilters();
  initFAQ();
  initModal();
});
