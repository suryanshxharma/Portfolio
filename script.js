/**
 * Suryansh Sharma Portfolio - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initTerminal();
  initProjectDialogs();
  initDemos();
  initScrollFallback();
  initContactForm();
});

/* ==========================================================================
   THEME MANAGER
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const getTheme = () => {
    return document.documentElement.dataset.theme || 'dark';
  };

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    
    // Update color-scheme meta tag
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.content = theme === 'dark' ? 'dark' : 'light';
    }
  };

  // Click handler
  toggleBtn.addEventListener('click', () => {
    const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('active');
  });

  // Close menu when clicking link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
    });
  });
}

/* ==========================================================================
   TERMINAL CLI EMULATOR
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const history = document.getElementById('terminal-history');
  const shortcuts = document.querySelectorAll('.terminal-btn-cmd');
  if (!input || !history) return;

  // Pre-configured command outputs
  const commands = {
    help: () => `
      <p class="cmd-text">Available commands:</p>
      <p>  <span class="cmd-text">about</span>      - Personal summary and background</p>
      <p>  <span class="cmd-text">projects</span>   - Core project portfolio overview</p>
      <p>  <span class="cmd-text">skills</span>     - Technical capabilities checklist</p>
      <p>  <span class="cmd-text">football</span>   - Varsity football coordination & tactical vision</p>
      <p>  <span class="cmd-text">clear</span>      - Clear terminal console screen</p>
    `,
    about: () => `
      <p class="output-success">🙋‍♂️ Suryansh Sharma - Machine Learning Developer & Technical Growth Hacker</p>
      <p class="text-dim">--------------------------------------------------</p>
      <p>B.Tech CSE student at JUIT Class of 2026, bridging the gap between ML engineering and business growth.</p>
      <p>Focusing on: Deep Learning, Explainable AI (XAI), Chronological financial forecasting, and Multi-Agent lead scoring pipelines.</p>
      <p>Self-employed Full-Stack AI & Automation developer with remote freelance experience delivering 5+ enterprise applications.</p>
    `,
    projects: () => `
      <p class="output-success">📂 Core Project Portfolios:</p>
      <p class="text-dim">--------------------------------------------------</p>
      <p>1. <span class="cmd-text">crop-disease</span>  - ResNet-50 + ViT diagnostic system with Grad-CAM & LIME (97.91% validation accuracy).</p>
      <p>2. <span class="cmd-text">stock-forecast</span> - Chronological sequential LSTM/GRU compare pipelines with zero leakage.</p>
      <p>3. <span class="cmd-text">growth-agent</span>   - Social platform crawling multi-agent LLM scoring lead queue.</p>
      <p>4. <span class="cmd-text">billflow-wa</span>    - Free Digital receipts UPI invoice redirect tool with background cash chimes.</p>
      <p class="text-dim">Type any project name (e.g. <span class="cmd-text">billflow-wa</span>) to drill down directly.</p>
    `,
    skills: () => `
      <p class="output-success">🛠️ Technical Stack:</p>
      <p class="text-dim">--------------------------------------------------</p>
      <p><strong class="cmd-text">Languages:</strong> Python, C++, JAVA, MATLAB, HTML, CSS</p>
      <p><strong class="cmd-text">Libraries & ML:</strong> PyTorch, TensorFlow, Scikit-Learn, OpenCV, Hugging Face, Streamlit</p>
      <p><strong class="cmd-text">Cloud & Tools:</strong> AWS Certified Cloud Practitioner, Git, Vercel, PlantUML, Dialogflow NLP</p>
    `,
    football: () => `
      <p class="output-success">⚽ Varsity Football Captaincy:</p>
      <p class="text-dim">--------------------------------------------------</p>
      <p>Directed tactical squad training and regional player trial grids.</p>
      <p>Sports Organizer for Parakram '25 (coordinating 12+ external universities, 500+ athletes).</p>
      <p>National Cadet Corps (NCC) "C" Certificate candidate.</p>
    `,
    clear: () => {
      history.innerHTML = '';
      return '';
    },
    // Sub-project details mapped
    'crop-disease': () => `
      <p class="output-success">🌱 Crop Disease Detection System:</p>
      <p>Hybrid ResNet-50 & Vision Transformer (ViT) architecture.</p>
      <p>Post-hoc explainable frameworks using Grad-CAM & LIME.</p>
      <p>Validation Accuracy: 97.91% | ROC-AUC: 0.99</p>
    `,
    'stock-forecast': () => `
      <p>📈 Stock Price Prediction Pipeline:</p>
      <p>Sequential forecasting comparison comparing GRU vs LSTM models in TensorFlow.</p>
      <p>Engineered 21 technical metrics (EMA, RSI, MACD, OBV) with strict train-validation chronological splitting.</p>
    `,
    'growth-agent': () => `
      <p>🤖 Typewise AI Growth Agent:</p>
      <p>Autonomous B2B intent extractor and Reddit crawler.</p>
      <p>Integrates qualitative LLM scoring alongside Recency & Upvotes metrics to synthesize custom lead drafts.</p>
    `,
    'billflow-wa': () => `
      <p>⚡ BillFlow WA: WhatsApp Billing SaaS:</p>
      <p>Digital invoice dispatch using free redirection hooks instead of premium API routes.</p>
      <p>Synthesizes checkout audio alerts on dashboard using Web Audio API.</p>
    `
  };

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    
    // Add command input row to history
    const commandRow = document.createElement('p');
    commandRow.innerHTML = `<span class="prompt-symbol">suryansh@juit:~$</span> <span class="cmd-text">${cmdText}</span>`;
    history.appendChild(commandRow);

    if (cleanCmd === '') return;

    const responseDiv = document.createElement('div');
    if (commands[cleanCmd]) {
      responseDiv.innerHTML = commands[cleanCmd]();
    } else {
      responseDiv.innerHTML = `<p class="output-error">Command not found: "${cmdText}". Type <span class="cmd-text">help</span> to list available commands.</p>`;
    }
    history.appendChild(responseDiv);
    
    // Scroll terminal to bottom
    const windowEl = document.getElementById('terminal-body');
    if (windowEl) {
      windowEl.scrollTop = windowEl.scrollHeight;
    }
  };

  // Keyboard Enter Listener
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      handleCommand(val);
    }
  });

  // Shortcut triggers
  shortcuts.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      handleCommand(cmd);
    });
  });

  // Auto-run "about" and "help" command on page load to introduce the CLI
  setTimeout(() => {
    handleCommand('about');
  }, 500);
}

/* ==========================================================================
   PROJECT MODALS (DIALOGS)
   ========================================================================== */
function initProjectDialogs() {
  const triggers = document.querySelectorAll('.btn-dialog-trigger');
  
  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const dialogId = btn.getAttribute('data-dialog');
      const dialog = document.getElementById(dialogId);
      if (dialog) {
        dialog.showModal();
      }
    });
  });

  // Handle closing elements
  const closeBtns = document.querySelectorAll('.dialog-close-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dialogId = btn.getAttribute('data-close');
      const dialog = document.getElementById(dialogId);
      if (dialog) {
        dialog.close();
      }
    });
  });

  // Click outside backdrop to close
  const dialogs = document.querySelectorAll('.project-dialog');
  dialogs.forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  });
}

/* ==========================================================================
   INTERACTIVE DEMOS INSIDE DIALOGS
   ========================================================================== */
function initDemos() {
  /* --- 1. Crop Disease Detection Widget --- */
  const mcSlider = document.getElementById('mc-dropout-slider');
  const mcVal = document.getElementById('mc-val');
  const metricEce = document.getElementById('metric-ece');
  const metricConf = document.getElementById('metric-confidence');
  
  if (mcSlider) {
    mcSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (mcVal) mcVal.textContent = val;
      
      // Simulate calibration metrics changing based on MC passes
      // ECE drops as passes increase, confidence stabilizes
      const baseEce = 0.15;
      const calcEce = Math.max(0.015, baseEce - (val * 0.006)).toFixed(3);
      
      const calcConf = Math.min(96.8, 75.0 + (val * 1.1)).toFixed(1);
      
      if (metricEce) metricEce.textContent = calcEce;
      if (metricConf) metricConf.textContent = `${calcConf}%`;
    });
  }

  /* --- 2. Stock Prediction Chart Widget --- */
  const modelSelector = document.getElementById('model-selector');
  const pathGru = document.getElementById('path-gru');
  const pathLstm = document.getElementById('path-lstm');
  const legGru = document.getElementById('leg-gru');
  const legLstm = document.getElementById('leg-lstm');
  
  if (modelSelector) {
    modelSelector.addEventListener('change', (e) => {
      const val = e.target.value;
      
      // Toggle table highlights
      const maeCells = document.querySelectorAll('#row-mae td');
      const rmseCells = document.querySelectorAll('#row-rmse td');
      const mapeCells = document.querySelectorAll('#row-mape td');
      const dirCells = document.querySelectorAll('#row-dir td');

      const resetHighlights = () => {
        document.querySelectorAll('.custom-metrics-table td').forEach(c => c.classList.remove('highlight-val'));
      };
      
      resetHighlights();

      if (val === 'gru') {
        if (pathGru) { pathGru.style.opacity = '1'; pathGru.style.strokeWidth = '2'; }
        if (pathLstm) { pathLstm.style.opacity = '0.15'; pathLstm.style.strokeWidth = '1'; }
        if (legGru) legGru.style.opacity = '1';
        if (legLstm) legLstm.style.opacity = '0.3';
        
        // GRU is highlight
        if (maeCells[1]) maeCells[1].classList.add('highlight-val');
        if (rmseCells[1]) rmseCells[1].classList.add('highlight-val');
        if (mapeCells[1]) mapeCells[1].classList.add('highlight-val');
        if (dirCells[1]) dirCells[1].classList.add('highlight-val');
      } else if (val === 'lstm') {
        if (pathGru) { pathGru.style.opacity = '0.15'; pathGru.style.strokeWidth = '1'; }
        if (pathLstm) { pathLstm.style.opacity = '1'; pathLstm.style.strokeWidth = '2'; }
        if (legGru) legGru.style.opacity = '0.3';
        if (legLstm) legLstm.style.opacity = '1';
        
        // LSTM is highlight
        if (maeCells[2]) maeCells[2].classList.add('highlight-val');
        if (rmseCells[2]) rmseCells[2].classList.add('highlight-val');
        if (mapeCells[2]) mapeCells[2].classList.add('highlight-val');
        if (dirCells[2]) dirCells[2].classList.add('highlight-val');
      } else {
        // Both
        if (pathGru) { pathGru.style.opacity = '1'; pathGru.style.strokeWidth = '1.5'; }
        if (pathLstm) { pathLstm.style.opacity = '1'; pathLstm.style.strokeWidth = '1.5'; }
        if (legGru) legGru.style.opacity = '1';
        if (legLstm) legLstm.style.opacity = '1';
        
        // Highlight best values
        if (maeCells[1]) maeCells[1].classList.add('highlight-val');
        if (rmseCells[1]) rmseCells[1].classList.add('highlight-val');
        if (mapeCells[1]) mapeCells[1].classList.add('highlight-val');
        if (dirCells[2]) dirCells[2].classList.add('highlight-val');
      }
    });
  }

  /* --- 3. Typewise Growth Agent Simulator --- */
  const runAgentBtn = document.getElementById('btn-trigger-agent-simulation');
  const agentConsole = document.getElementById('agent-console-logs');
  
  if (runAgentBtn && agentConsole) {
    let simulating = false;
    
    const logs = [
      { text: 'System initialized. Connecting to Reddit scrapers...', delay: 200 },
      { text: 'Crawling r/SaaS, r/startups, and r/growth Hacking threads...', delay: 600 },
      { text: 'Scanned 14 new threads. Found 3 matches for keywords: "automated billing", "subscription analytics"', delay: 800 },
      { text: 'Analyzing thread: "Best way to handle receipt invoicing on WhatsApp?"', delay: 400 },
      { text: 'Agent Lead Scorer assessing intent...', delay: 500 },
      { text: 'QUALIFIED LEAD ID: u/saasbuilder99 | Karma: 1240 | Upvotes: 18 | Recency: 42m', delay: 300 },
      { text: 'Intent Category: Pain Point -> Automated Receipt dispatch expense high', delay: 400 },
      { text: 'Qualitative Intent Grade: A+ (High buying alignment)', delay: 200 },
      { text: 'Routing to Sales Copywriter Agent to synthesize pitch...', delay: 600 },
      { text: 'PITCH SYNTHESIZED: "Hey u/saasbuilder99, noticed you were looking for low cost billing. Have you checked out official WhatsApp redirection hooks? Mapped a tool BillFlow WA that does exactly this, scaling billing receipts dynamically at zero template expense..."', delay: 800 },
      { text: 'Queue item completed. Lead qualified successfully.', delay: 200, success: true }
    ];

    runAgentBtn.addEventListener('click', () => {
      if (simulating) return;
      simulating = true;
      runAgentBtn.disabled = true;
      runAgentBtn.textContent = 'Processing...';
      agentConsole.innerHTML = '';
      
      let index = 0;
      
      const printNextLog = () => {
        if (index >= logs.length) {
          simulating = false;
          runAgentBtn.disabled = false;
          runAgentBtn.textContent = 'Run Agent Pipeline';
          return;
        }

        const log = logs[index];
        const p = document.createElement('p');
        p.className = 'console-line';
        if (log.success) {
          p.classList.add('console-lead-success');
        }
        p.textContent = `[+] ${log.text}`;
        agentConsole.appendChild(p);
        agentConsole.scrollTop = agentConsole.scrollHeight;

        index++;
        setTimeout(printNextLog, log.delay);
      };

      printNextLog();
    });
  }

  /* --- 4. BillFlow WA Receipt & Audio Chime Synth --- */
  const uipBtn = document.getElementById('btn-generate-upi');
  const billAmount = document.getElementById('bill-amount');
  const receiptArea = document.getElementById('billflow-receipt-output');
  const receiptPriceText = document.getElementById('receipt-show-amount');
  
  const chimeBtn = document.getElementById('btn-trigger-chime');
  const volSlider = document.getElementById('chime-volume');
  const volVal = document.getElementById('vol-val');
  
  if (uipBtn && billAmount && receiptArea && receiptPriceText) {
    uipBtn.addEventListener('click', () => {
      const amt = parseFloat(billAmount.value).toFixed(2);
      if (isNaN(amt) || amt <= 0) return;
      
      receiptPriceText.textContent = `₹${amt}`;
      receiptArea.style.display = 'flex';
    });
  }

  if (volSlider && volVal) {
    volSlider.addEventListener('input', (e) => {
      volVal.textContent = `${e.target.value}%`;
    });
  }

  // Synthesis Audio chime using Web Audio API
  if (chimeBtn) {
    chimeBtn.addEventListener('click', () => {
      const volumeLevel = volSlider ? parseFloat(volSlider.value) / 100 : 0.6;
      playCashChime(volumeLevel);
    });
  }
}

// Cash register synthesizer via Web Audio API
function playCashChime(volume) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    
    // Check state (some browsers lock ctx on load)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    
    const now = ctx.currentTime;
    
    // Synth Node 1: Short metallic click
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(600, now);
    osc1.frequency.exponentialRampToValueAtTime(100, now + 0.08);
    
    gain1.gain.setValueAtTime(volume * 0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    
    // Synth Node 2: High frequency ring (chime)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1500, now + 0.02);
    osc2.frequency.exponentialRampToValueAtTime(2200, now + 0.12);
    osc2.frequency.linearRampToValueAtTime(1900, now + 0.35);
    
    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.linearRampToValueAtTime(volume * 0.8, now + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    // Play nodes
    osc1.start(now);
    osc1.stop(now + 0.1);
    
    osc2.start(now + 0.02);
    osc2.stop(now + 0.5);
  } catch (err) {
    console.error('Web Audio Synth failed:', err);
  }
}

/* ==========================================================================
   SCROLL INTERSECTION OBSERVER FALLBACK
   ========================================================================== */
function initScrollFallback() {
  // Check if standard CSS scroll timelines are supported
  const hasNativeScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
  
  if (!hasNativeScrollTimeline) {
    // CSS timeline is missing. Register IntersectionObserver fallback for smooth entry scale-up
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    const elementsToReveal = document.querySelectorAll('.scroll-reveal, .projects-grid .project-card, .leadership-card, .skill-category, .experience-card-item');
    
    elementsToReveal.forEach(el => {
      // Set initial styles
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px) scale(0.97)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
    
    // Also reveal hero items
    document.querySelectorAll('.scroll-fade').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
}

/* ==========================================================================
   CONTACT FORM SUBMISSION & VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  const fields = {
    name: { el: document.getElementById('contact-name'), error: document.getElementById('error-name') },
    email: { el: document.getElementById('contact-email'), error: document.getElementById('error-email') },
    message: { el: document.getElementById('contact-message'), error: document.getElementById('error-message') }
  };

  const validateField = (field) => {
    let isValid = true;
    if (field.el.required && field.el.value.trim() === '') {
      isValid = false;
    } else if (field.el.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.el.value.trim())) {
        isValid = false;
      }
    }

    if (!isValid) {
      field.error.style.display = 'block';
      field.el.setAttribute('aria-invalid', 'true');
    } else {
      field.error.style.display = 'none';
      field.el.setAttribute('aria-invalid', 'false');
    }

    return isValid;
  };

  // Blur validation
  Object.values(fields).forEach(field => {
    field.el.addEventListener('blur', () => {
      validateField(field);
    });
    field.el.addEventListener('input', () => {
      if (field.el.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    Object.values(fields).forEach(field => {
      const isFieldValid = validateField(field);
      if (!isFieldValid) isFormValid = false;
    });

    if (!isFormValid) return;

    // Simulate submission loading spinner
    const btn = form.querySelector('.btn-submit');
    if (btn) {
      btn.classList.add('loading');
      btn.disabled = true;
    }

    setTimeout(() => {
      // Success toast trigger
      alert(`Thank you, ${fields.name.el.value}! Your message has been sent successfully.`);
      
      // Reset form
      form.reset();
      if (btn) {
        btn.classList.remove('loading');
        btn.disabled = false;
      }
    }, 1500);
  });
}
