/**
 * Suryansh Sharma Portfolio - Interactive Scripts
 */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.scrollTo(0, 0);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  initTheme();
  initMobileMenu();
  initTerminal();
  initProjectDialogs();
  initDemos();
  initScrollFallback();
  initContactForm();
  initGTALoadingScreen();
  initGTAWantedHUD();
  initGTARadioStation();
  initGTAScrollBackground();
  initGTACursor();
  initGTAHUDClock();
  initSanAndreasPauseMenu();
  initRadioWheelModal();
  initCheatCodes();
  initHybridModeSwitch();
  initProjectCardMiniDemos();
  initPro3DWebGL();
  initPro3DCardTilt();
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
      <p>  <span class="cmd-text">about</span>        - Personal summary and background</p>
      <p>  <span class="cmd-text">projects</span>     - Core project portfolio overview</p>
      <p>  <span class="cmd-text">skills</span>       - Technical capabilities checklist</p>
      <p>  <span class="cmd-text">git log</span>      - View career & engineering commit history</p>
      <p>  <span class="cmd-text">cat resume</span>   - Display full resume dossier</p>
      <p>  <span class="cmd-text">sudo hire</span>    - Request contract or interview discussion</p>
      <p>  <span class="cmd-text">wanted</span>       - Check current Vice City 6-Star Reputation level</p>
      <p>  <span class="cmd-text">football</span>     - Varsity football coordination & tactical vision</p>
      <p>  <span class="cmd-text">clear</span>        - Clear terminal console screen</p>
    `,
    'git log': () => `
      <p style="color: #ffcc00;">commit a1b2c3d4 (HEAD -> main)</p>
      <p class="text-dim">Author: Suryansh Sharma &lt;suryanshxharma@gmail.com&gt;</p>
      <p class="text-dim">Date:   Class of 2026</p>
      <p>&nbsp;&nbsp;feat(ai): Vision Transformer & ResNet-50 97.91% crop disease XAI</p>
      <p>&nbsp;</p>
      <p style="color: #ffcc00;">commit e5f6a7b8</p>
      <p class="text-dim">Author: Suryansh Sharma &lt;suryanshxharma@gmail.com&gt;</p>
      <p>&nbsp;&nbsp;feat(quant): sequential LSTM/GRU 21-indicator stock prediction pipeline</p>
      <p>&nbsp;</p>
      <p style="color: #ffcc00;">commit c9d0e1f2</p>
      <p class="text-dim">Author: Suryansh Sharma &lt;suryanshxharma@gmail.com&gt;</p>
      <p>&nbsp;&nbsp;feat(growth): multi-agent intent extractor & Reddit lead generator</p>
    `,
    'cat resume': () => `
      <p class="output-success">📄 SURYANSH SHARMA - RESUME DOSSIER</p>
      <p class="text-dim">--------------------------------------------------</p>
      <p><strong>Education:</strong> B.Tech in CSE @ Jaypee University of Information Technology (2022 - 2026)</p>
      <p><strong>Location:</strong> Himachal Pradesh / Delhi NCR, India (Open to Remote / Relocation)</p>
      <p><strong>Role:</strong> Machine Learning Engineer & Technical Growth Hacker</p>
      <p><strong>Certifications:</strong> AWS Certified Cloud Practitioner</p>
      <p><strong>Contact:</strong> suryanshxharma@gmail.com | <a href="https://linkedin.com/in/suryanshxharma" target="_blank" rel="noopener noreferrer" style="color: #00f0ff;">linkedin.com/in/suryanshxharma</a></p>
      <p class="text-dim">--------------------------------------------------</p>
      <p>📥 Direct PDF Download: <a href="Suryansh_Sharma_Resume.pdf" download="Suryansh_Sharma_Resume.pdf" target="_blank" rel="noopener noreferrer" style="color: #ff007f; font-weight: 700; text-decoration: underline;">[Download Suryansh_Sharma_Resume.pdf]</a></p>
    `,
    'sudo hire': () => {
      addCash(500000);
      addReputationStar();
      triggerGTAMissionPassed('OFFER EXTENDED! ⭐⭐⭐', '+$500,000 SIGNING BONUS');
      return `
        <p class="output-success">🎉 [ACCESS GRANTED - ROOT PRIVILEGES] 🎉</p>
        <p class="text-dim">--------------------------------------------------</p>
        <p>You've unlocked the executive hiring fast-track!</p>
        <p>Let's build scalable AI engineering and growth systems together:</p>
        <p>👉 <a href="mailto:suryanshxharma@gmail.com?subject=Opportunity%20Discussion%20with%20Suryansh" style="color: #2ecc71; font-weight: 700; text-decoration: underline;">Email suryanshxharma@gmail.com</a></p>
        <p>👉 Or scroll down to the <a href="#contact" style="color: #ff007f; font-weight: 700;">#contact</a> section to send a direct message.</p>
      `;
    },
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
      <p>1. <span class="cmd-text">crop-disease</span>   - ResNet-50 + ViT diagnostic system with Grad-CAM & LIME (97.91% validation accuracy).</p>
      <p>2. <span class="cmd-text">stock-forecast</span>  - Chronological sequential LSTM/GRU compare pipelines with zero leakage.</p>
      <p>3. <span class="cmd-text">growth-agent</span>    - Social platform crawling multi-agent LLM scoring lead queue.</p>
      <p>4. <span class="cmd-text">billflow-wa</span>     - Free Digital receipts UPI invoice redirect tool with background cash chimes.</p>
      <p>5. <span class="cmd-text">zen-study-timer</span> - Ambient study timer with React 19, Supabase sync & Razorpay Pro SaaS.</p>
      <p>6. <span class="cmd-text">exambro</span>         - AI exam prep copilot with adaptive quiz generation & weakness analytics.</p>
      <p class="text-dim">Type any project name (e.g. <span class="cmd-text">exambro</span>) to drill down directly.</p>
    `,
    skills: () => `
      <p class="output-success">🛠️ Technical Stack:</p>
      <p class="text-dim">--------------------------------------------------</p>
      <p><strong class="cmd-text">Languages:</strong> Python, C++, JAVA, MATLAB, HTML, CSS, JavaScript, React 19</p>
      <p><strong class="cmd-text">Libraries & ML:</strong> PyTorch, TensorFlow, Scikit-Learn, OpenCV, Hugging Face, Streamlit</p>
      <p><strong class="cmd-text">Cloud & Tools:</strong> AWS Certified Cloud Practitioner, Supabase, Razorpay API, Git, Vercel</p>
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
    `,
    'zen-study-timer': () => `
      <p>🧘 Zen Study Timer & Focus Suite:</p>
      <p>React 19 + Vite ambient productivity dashboard with multi-track soundscape audio synth.</p>
      <p>Supabase Cloud user sync & Razorpay Pro subscription payments with webhook verification.</p>
    `,
    'exambro': () => `
      <p>🎓 ExamBro: AI Exam Prep & Study Copilot:</p>
      <p>Converts lecture notes & syllabus slides into adaptive practice quizzes and flashcard decks.</p>
      <p>Generates real-time topic weakness heatmaps and step-by-step AI answer explanations.</p>
    `,
    'wanted': () => {
      addReputationStar();
      return `
        <p class="output-success">⭐ VICE CITY REPUTATION STATUS:</p>
        <p class="text-dim">--------------------------------------------------</p>
        <p>Current Wanted Level: <strong style="color: #ffcc00;">${currentWantedStars} / 6 STARS</strong></p>
        <p>Keep exploring projects, running demos, and submitting contact forms to reach MAX REPUTATION!</p>
      `;
    }
  };

  const escapeHtml = (str) => {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    const safeCmdText = escapeHtml(cmdText);
    
    // Add command input row to history
    const commandRow = document.createElement('p');
    commandRow.innerHTML = `<span class="prompt-symbol">suryansh@juit:~$</span> <span class="cmd-text">${safeCmdText}</span>`;
    history.appendChild(commandRow);

    if (cleanCmd === '') return;

    const responseDiv = document.createElement('div');
    if (commands[cleanCmd]) {
      responseDiv.innerHTML = commands[cleanCmd]();
    } else {
      responseDiv.innerHTML = `<p class="output-error">Command not found: "${safeCmdText}". Type <span class="cmd-text">help</span> to list available commands.</p>`;
    }
    history.appendChild(responseDiv);
    
    // Scroll terminal to bottom
    const windowEl = document.getElementById('terminal-body');
    if (windowEl) {
      windowEl.scrollTop = windowEl.scrollHeight;
    }
  };

  // Command history buffer for up/down arrows
  const cmdHistoryBuffer = [];
  let historyIndex = -1;

  // Keyboard Enter & Tab Autocomplete Listener
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      if (val.trim()) {
        cmdHistoryBuffer.push(val);
        historyIndex = cmdHistoryBuffer.length;
      }
      input.value = '';
      handleCommand(val);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const currentVal = input.value.trim().toLowerCase();
      if (!currentVal) return;
      const allCmds = Object.keys(commands);
      const match = allCmds.find(c => c.startsWith(currentVal));
      if (match) {
        input.value = match;
        playGTAMenuClickSound();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistoryBuffer.length > 0 && historyIndex > 0) {
        historyIndex--;
        input.value = cmdHistoryBuffer[historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < cmdHistoryBuffer.length - 1) {
        historyIndex++;
        input.value = cmdHistoryBuffer[historyIndex] || '';
      } else {
        historyIndex = cmdHistoryBuffer.length;
        input.value = '';
      }
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
        addReputationStar();
        addCash(100000);
        const projTitle = dialog.querySelector('h2') ? dialog.querySelector('h2').textContent : 'PROJECT DISCOVERED';
        triggerGTAMissionPassed(projTitle, '+$100,000 RESPECT');
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
      if (e.target === dialog) {
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

  /* --- 5. Zen Study Timer Demo Widget --- */
  initZenTimerDemo();

  /* --- 6. ExamBro Demo Widget --- */
  initExamBroDemo();
}

function initZenTimerDemo() {
  const toggleBtn = document.getElementById('btn-zen-timer-toggle');
  const display = document.getElementById('zen-demo-time-display');
  const cardDisplay = document.getElementById('card-timer-display');
  const soundBtns = document.querySelectorAll('.sound-chip-btn');

  let seconds = 25 * 60;
  let timerInterval = null;
  let isRunning = false;

  const updateDisplay = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (display) display.textContent = formatted;
    if (cardDisplay) cardDisplay.textContent = formatted;
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        toggleBtn.textContent = '▶ Resume Focus Session';
      } else {
        isRunning = true;
        toggleBtn.textContent = '⏸ Pause Session';
        timerInterval = setInterval(() => {
          if (seconds > 0) {
            seconds--;
            updateDisplay();
          } else {
            clearInterval(timerInterval);
            isRunning = false;
            toggleBtn.textContent = '▶ Start Focus Session';
            seconds = 25 * 60;
            updateDisplay();
            playAmbientTone(528, 0.4); // Solfeggio 528Hz bell chime on completion
          }
        }, 1000);
      }
    });
  }

  // Audio Soundscape Synthesizer
  soundBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isActive = btn.classList.toggle('active');
      const soundType = btn.getAttribute('data-sound');
      if (isActive) {
        const freqs = { rain: 220, cafe: 330, fire: 440, forest: 550 };
        playAmbientTone(freqs[soundType] || 440, 0.2);
      }
    });
  });
}

function playAmbientTone(freq, volume) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  } catch (err) {
    console.error('Ambient Audio synth failed:', err);
  }
}

function initExamBroDemo() {
  const quizBtns = document.querySelectorAll('.quiz-option-btn');
  const feedbackBox = document.getElementById('exambro-quiz-feedback');

  quizBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Reset active selections
      quizBtns.forEach(b => {
        b.classList.remove('correct-selected', 'wrong-selected');
      });

      const isCorrect = btn.getAttribute('data-correct') === 'true';
      if (isCorrect) {
        btn.classList.add('correct-selected');
        if (feedbackBox) {
          feedbackBox.className = 'quiz-explanation-box success';
          feedbackBox.style.display = 'block';
          feedbackBox.innerHTML = `<strong>Correct!</strong> Grad-CAM (Gradient-weighted Class Activation Mapping) produces coarse localization maps highlighting key visual regions used by deep CNNs.`;
        }
        playAmbientTone(660, 0.3);
      } else {
        btn.classList.add('wrong-selected');
        if (feedbackBox) {
          feedbackBox.className = 'quiz-explanation-box error';
          feedbackBox.style.display = 'block';
          feedbackBox.innerHTML = `<strong>Not quite.</strong> Ridge regression and one-hot encoding are tabular/labeling methods, whereas Grad-CAM visualizes spatial CNN attention heatmaps.`;
        }
        playAmbientTone(220, 0.3);
      }
    });
  });
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
      // Preload and launch direct email client with message body
      const name = encodeURIComponent(fields.name.el.value.trim());
      const email = encodeURIComponent(fields.email.el.value.trim());
      const userMsg = encodeURIComponent(fields.message.el.value.trim());

      const mailtoUrl = `mailto:suryanshxharma@gmail.com?subject=Portfolio%20Inquiry%20from%20${name}&body=Name%3A%20${name}%0AEmail%3A%20${email}%0A%0AMessage%3A%0A${userMsg}`;

      addReputationStar();
      addCash(250000);
      triggerGTAMissionPassed('CONTACT INITIATED!', '+$250,000 RESPECT');

      // Trigger user's mail client with prefilled data
      window.location.href = mailtoUrl;
      
      // Reset form
      form.reset();
      if (btn) {
        btn.classList.remove('loading');
        btn.disabled = false;
      }
    }, 800);
  });
}

/* ==========================================================================
   GTA VICE CITY THEME INTERACTIVE LOGIC & SYNTHESIZERS
   ========================================================================== */

let currentWantedStars = 1;
let currentStationIndex = 0;
const radioStations = [
  { name: 'FLASH FM', freq: 440 },
  { name: 'WAVE 103', freq: 520 },
  { name: 'V-ROCK', freq: 660 },
  { name: 'LO-FI CHILL', freq: 330 }
];

function initGTALoadingScreen() {
  const loadingScreen = document.getElementById('gta-loading-screen');
  const fill = document.getElementById('gta-loading-fill');
  const pctText = document.getElementById('gta-loading-pct');
  const enterBtn = document.getElementById('gta-enter-btn');
  const slides = document.querySelectorAll('.gta-slide');

  if (!loadingScreen || !fill || !pctText || !enterBtn) return;

  // Slide rotator
  let currentSlide = 0;
  const slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 2500);

  // Loading bar simulation
  let pct = 0;
  const loadInterval = setInterval(() => {
    pct += Math.floor(Math.random() * 15) + 5;
    if (pct >= 100) {
      pct = 100;
      clearInterval(loadInterval);
      fill.style.width = '100%';
      pctText.textContent = '100%';
      pctText.style.color = '#ff007f';
      enterBtn.style.display = 'inline-block';
      playGTALoadedChime();
    } else {
      fill.style.width = `${pct}%`;
      pctText.textContent = `${pct}%`;
    }
  }, 120);

  const dismissLoading = () => {
    clearInterval(slideInterval);
    loadingScreen.classList.add('hidden');

    // Slide navbar into view smoothly
    const mainHeader = document.getElementById('main-header');
    if (mainHeader) {
      mainHeader.classList.add('header-visible');
    }

    playGTASynthArp(440, 880);

    const currentMode = document.documentElement.getAttribute('data-mode') || 'arcade';
    if (currentMode === 'arcade' && typeof window.openSanAndreasPauseMenu === 'function') {
      // In Arcade Mode: open the GTA San Andreas Pause / Options Menu right after loading
      setTimeout(() => {
        window.openSanAndreasPauseMenu('GAME MENU // SURYANSH SHARMA');
      }, 350);
    } else {
      // Show mode explanation modal on first entry
      setTimeout(() => {
        checkShowWelcomeModal();
      }, 600);
    }
  };

  enterBtn.addEventListener('click', dismissLoading);
  document.addEventListener('keydown', (e) => {
    if (!loadingScreen.classList.contains('hidden') && pct >= 100) {
      dismissLoading();
    }
  });
}

function initGTAWantedHUD() {
  updateWantedStarsUI();
}

function addReputationStar() {
  if (currentWantedStars < 6) {
    currentWantedStars++;
    updateWantedStarsUI();
    playGTASynthArp(500, 750);
    if (currentWantedStars === 6) {
      triggerGTAMissionPassed('MAX REPUTATION REACHED! ⭐⭐⭐⭐⭐⭐', '6-STAR MASTER ARCHITECT');
    }
  }
}

function updateWantedStarsUI() {
  const stars = document.querySelectorAll('.gta-star');
  stars.forEach((star, idx) => {
    if (idx < currentWantedStars) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function initGTARadioStation() {
  const radioBtn = document.getElementById('gta-radio-toggle');
  const stationName = document.getElementById('gta-station-name');

  if (!radioBtn || !stationName) return;

  radioBtn.addEventListener('click', () => {
    currentStationIndex = (currentStationIndex + 1) % radioStations.length;
    const st = radioStations[currentStationIndex];
    stationName.textContent = st.name;
    radioBtn.classList.add('playing');
    playGTASynthArp(st.freq, st.freq * 1.5);

    setTimeout(() => {
      radioBtn.classList.remove('playing');
    }, 1500);
  });
}

function triggerGTAMissionPassed(title, reward) {
  const overlay = document.getElementById('gta-mission-passed');
  const nameEl = document.getElementById('gta-mission-name');

  if (!overlay || !nameEl) return;

  nameEl.textContent = title || 'PROJECT DISCOVERED';
  overlay.classList.add('show');
  playGTAMissionPassedChime();

  setTimeout(() => {
    overlay.classList.remove('show');
  }, 3500);
}

// Web Audio API Synthesizers for Vice City 80s Soundscapes
function playGTALoadedChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    const freqs = [440, 554.37, 659.25, 880];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.5);
    });
  } catch (e) {
    console.error('Vice City audio synth error:', e);
  }
}

function playGTASynthArp(startFreq, endFreq) {
  try {
    const isPro = document.documentElement.getAttribute('data-mode') === 'pro';
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (isPro) {
      // Pro Mode: Warm harmonic glass tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(650, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } else {
      // Arcade Mode: 80s arcade square wave arpeggio
      osc.type = 'square';
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    }
  } catch (e) {
    console.error('Vice City synth arp error:', e);
  }
}

function playGTAMissionPassedChime() {
  try {
    const isPro = document.documentElement.getAttribute('data-mode') === 'pro';
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    if (isPro) {
      // Pro Mode: Elegant two-tone major chime
      const proNotes = [440, 659.25];
      proNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.06, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.5);
      });
      return;
    }

    // Classic Vice City fanfare arpeggio synth
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - High C
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
      gain.gain.setValueAtTime(0.3, ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 0.7);
    });
  } catch (e) {
    console.error('Vice City Mission Passed chime error:', e);
  }
}

/* ==========================================================================
   GTA SCROLL BACKGROUND ARTWORK CROSS-FADER & PAUSE MENU NAV TRACKER
   ========================================================================== */
function initGTAScrollBackground() {
  const slides = document.querySelectorAll('.gta-scroll-slide');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], #hero');
  if (!slides.length || !sections.length) return;

  const sectionToBgMap = {
    'hero': 'hero',
    'about': 'about',
    'experience': 'experience',
    'terminal': 'terminal',
    'projects': 'projects',
    'skills': 'skills',
    'leadership': 'leadership',
    'contact': 'contact'
  };

  let activeSectionId = '';

  const switchSectionBg = (sectionId) => {
    if (!sectionId || sectionId === activeSectionId) return;
    activeSectionId = sectionId;

    const targetBgKey = sectionToBgMap[sectionId] || 'hero';

    slides.forEach(slide => {
      if (slide.dataset.bgSection === targetBgKey) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
      if (link.dataset.section === sectionId || link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  // Robust scroll position calculation
  const checkActiveSectionOnScroll = () => {
    const viewportCenter = window.innerHeight * 0.4;
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
        closestSection = section;
        minDistance = -1;
      } else if (minDistance !== -1) {
        const distance = Math.abs(rect.top - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      }
    });

    if (closestSection) {
      const id = closestSection.getAttribute('id');
      if (id) switchSectionBg(id);
    }
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkActiveSectionOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial check on load
  checkActiveSectionOnScroll();

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      playGTAMenuClickSound();
    });
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href')?.replace('#', '');
      if (targetId) {
        switchSectionBg(targetId);
      }
    });
  });
}

/* ==========================================================================
   GTA VICE CITY DYNAMIC NEON RETICLE CURSOR SYSTEM
   ========================================================================== */
function initGTACursor() {
  const cursor = document.getElementById('gta-custom-cursor');
  if (!cursor || window.matchMedia('(max-width: 768px)').matches) return;

  let mouseX = -1000;
  let mouseY = -1000;
  let cursorX = -1000;
  let cursorY = -1000;
  let isInitialized = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isInitialized) {
      cursorX = mouseX;
      cursorY = mouseY;
      isInitialized = true;
      cursor.classList.add('active');
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });

  document.addEventListener('mouseenter', () => {
    if (isInitialized) cursor.classList.add('active');
  });

  const animateCursor = () => {
    if (isInitialized) {
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;
      cursor.style.transform = `translate3d(${cursorX - 11}px, ${cursorY - 11}px, 0)`;
    }
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  const interactiveSelectors = 'a, button, input, textarea, select, .project-card, .stat-card, .highlight-card, .leadership-card, .skill-item, .terminal-btn-cmd, .gta-radio-btn, .btn-dialog-trigger';
  
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.add('hovering');
    }
  });

  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.remove('hovering');
    }
  });

  document.body.addEventListener('mousedown', () => {
    // Only fire gun sound and reticle burst in Arcade Mode
    if (document.documentElement.getAttribute('data-mode') !== 'pro') {
      cursor.classList.add('clicking');
      cursor.classList.add('firing');
      playGTAGunfireSound();
      setTimeout(() => {
        cursor.classList.remove('firing');
      }, 150);
    }
  });

  document.body.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
  });
}

/* Synthesizes GTA Arcade Pistol Gunshot Audio using Web Audio API */
function playGTAGunfireSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    const t = ctx.currentTime;

    // 1. Heavy Low Frequency Impact Punch (Sawtooth 190Hz -> 30Hz drop)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(190, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.08);

    oscGain.gain.setValueAtTime(0.35, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.12);

    // 2. High Frequency Transient Crack + Echo Tail (Noise Buffer + Bandpass Filter)
    const bufferSize = Math.floor(ctx.sampleRate * 0.22);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1300, t);
    filter.frequency.exponentialRampToValueAtTime(220, t + 0.18);
    filter.Q.value = 1.4;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.38, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    whiteNoise.start(t);
    whiteNoise.stop(t + 0.2);

  } catch (e) {
    // silent fallback
  }
}

function playGTAMenuClickSound() {
  try {
    const isPro = document.documentElement.getAttribute('data-mode') === 'pro';
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (isPro) {
      // Pro Mode: Sophisticated, soft Apple/Linear style tactile tap
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
    } else {
      // Arcade Mode: Crisp retro 8-bit blip
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    }

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + (isPro ? 0.04 : 0.05));
  } catch (e) {
    // silent fallback
  }
}

/* ==========================================================================
   TASK 1: GTA HUD CLOCK & BOUNTY
   ========================================================================== */
let playerCash = 1337420;

function initGTAHUDClock() {
  const clockEl = document.getElementById('gta-hud-clock');
  const cashEl = document.getElementById('gta-hud-cash');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    clockEl.textContent = `${hours}:${minutes} ${ampm}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  if (cashEl) {
    cashEl.textContent = `$${playerCash.toLocaleString()}`;
  }
}

function addCash(amount) {
  playerCash += amount;
  const cashEl = document.getElementById('gta-hud-cash');
  if (cashEl) {
    cashEl.textContent = `$${playerCash.toLocaleString()}`;
    cashEl.style.color = '#ffffff';
    setTimeout(() => { cashEl.style.color = '#2ecc71'; }, 300);
  }
}

/* ==========================================================================
   TASK 2: SAN ANDREAS FULLSCREEN PAUSE MENU SYSTEM (ESC & CLICK)
   ========================================================================== */
function initSanAndreasPauseMenu() {
  const pauseModal = document.getElementById('sa-pause-menu');
  const pauseBtn = document.getElementById('gta-pause-btn');
  const menuItems = document.querySelectorAll('.sa-menu-item');
  const photoImg = document.getElementById('sa-pause-photo-img');
  if (!pauseModal) return;

  const photos = [
    'pics/gta_slide_1.png',
    'pics/gta_slide_2.jpg',
    'pics/gta_slide_3.jpg',
    'pics/gta_slide_4.png',
    'pics/gta_slide_5.png',
    'pics/gta_slide_7.jpg'
  ];

  let selectedIdx = 0;
  let isPaused = false;

  function openPauseMenu(customTitle) {
    isPaused = true;
    const headerEl = document.getElementById('sa-pause-header');
    if (headerEl) {
      headerEl.textContent = customTitle || 'PAUSE // SURYANSH SHARMA';
    }
    pauseModal.style.display = 'block';
    pauseModal.setAttribute('aria-hidden', 'false');
    playGTASynthArp(300, 600);
  }

  function closePauseMenu() {
    isPaused = false;
    pauseModal.style.display = 'none';
    pauseModal.setAttribute('aria-hidden', 'true');
    const headerEl = document.getElementById('sa-pause-header');
    if (headerEl) {
      headerEl.textContent = 'PAUSE // SURYANSH SHARMA';
    }
    playGTAMenuClickSound();
  }

  window.openSanAndreasPauseMenu = openPauseMenu;
  window.closeSanAndreasPauseMenu = closePauseMenu;

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      if (isPaused) closePauseMenu();
      else openPauseMenu();
    });
  }

  // Keyboard navigation & ESC handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const radioModal = document.getElementById('gta-radio-wheel-modal');
      if (radioModal && radioModal.style.display !== 'none') {
        radioModal.style.display = 'none';
        return;
      }
      if (isPaused) {
        closePauseMenu();
      } else {
        openPauseMenu();
      }
      return;
    }

    if (!isPaused) return;

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = (selectedIdx - 1 + menuItems.length) % menuItems.length;
      updateActiveMenuItem();
      playGTAMenuClickSound();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = (selectedIdx + 1) % menuItems.length;
      updateActiveMenuItem();
      playGTAMenuClickSound();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      executeMenuItem(menuItems[selectedIdx]);
    }
  });

  function updateActiveMenuItem() {
    menuItems.forEach((item, idx) => {
      if (idx === selectedIdx) {
        item.classList.add('active');
        if (photoImg && photos[idx % photos.length]) {
          photoImg.src = photos[idx % photos.length];
        }
      } else {
        item.classList.remove('active');
      }
    });
  }

  menuItems.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
      selectedIdx = idx;
      updateActiveMenuItem();
      playGTAMenuClickSound();
    });

    item.addEventListener('click', () => {
      executeMenuItem(item);
    });
  });

  function executeMenuItem(item) {
    const action = item.getAttribute('data-action');
    const target = item.getAttribute('data-target');

    if (action === 'resume') {
      closePauseMenu();
    } else if (action === 'resume-pdf') {
      closePauseMenu();
      const a = document.createElement('a');
      a.href = 'Suryansh_Sharma_Resume.pdf';
      a.download = 'Suryansh_Sharma_Resume.pdf';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (action === 'radio') {
      closePauseMenu();
      const radioBtn = document.getElementById('gta-radio-toggle');
      if (radioBtn) radioBtn.click();
    } else if (action === 'toggle-mode') {
      closePauseMenu();
      toggleHybridMode();
    } else if (action === 'quit') {
      closePauseMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target) {
      closePauseMenu();
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

/* ==========================================================================
   TASK 3: RADIO STATION WHEEL DIAL POPUP
   ========================================================================== */
function initRadioWheelModal() {
  const radioBtn = document.getElementById('gta-radio-toggle');
  const wheelModal = document.getElementById('gta-radio-wheel-modal');
  const closeBtn = document.getElementById('radio-close-btn');
  const muteBtn = document.getElementById('radio-mute-btn');
  const stationCards = document.querySelectorAll('.station-card');
  const stationNameEl = document.getElementById('gta-station-name');
  if (!wheelModal) return;

  if (radioBtn) {
    radioBtn.addEventListener('click', (e) => {
      // Toggle popup on click
      wheelModal.style.display = 'flex';
      wheelModal.setAttribute('aria-hidden', 'false');
      playGTASynthArp(400, 700);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      wheelModal.style.display = 'none';
      wheelModal.setAttribute('aria-hidden', 'true');
      playGTAMenuClickSound();
    });
  }

  const overlay = wheelModal.querySelector('.radio-wheel-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      wheelModal.style.display = 'none';
      wheelModal.setAttribute('aria-hidden', 'true');
    });
  }

  stationCards.forEach(card => {
    card.addEventListener('click', () => {
      stationCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const idx = parseInt(card.getAttribute('data-station'), 10) || 0;
      currentStationIndex = idx;
      const st = radioStations[idx] || radioStations[0];
      if (stationNameEl) stationNameEl.textContent = st.name;
      
      playGTASynthArp(st.freq, st.freq * 1.5);
      setTimeout(() => {
        wheelModal.style.display = 'none';
        wheelModal.setAttribute('aria-hidden', 'true');
      }, 400);
    });
  });

  if (muteBtn) {
    let isMuted = false;
    muteBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      muteBtn.textContent = isMuted ? 'Unmute Audio 🔊' : 'Mute Audio 🔇';
      if (stationNameEl) stationNameEl.textContent = isMuted ? 'OFF AIR' : radioStations[currentStationIndex].name;
    });
  }
}

/* ==========================================================================
   TASK 5: CHEAT CODES ENGINE (HESOYAM, AEZAKMI, BAGUVIX)
   ========================================================================== */
function initCheatCodes() {
  let keyBuffer = '';
  const cheatToast = document.getElementById('gta-cheat-toast');
  const cheatNameEl = document.getElementById('gta-cheat-name');

  const cheats = {
    'hesoyam': () => {
      addCash(250000);
      showCheatToast('HESOYAM - HEALTH, ARMOR & +$250,000 CASH');
      playGTAMissionPassedChime();
    },
    'aezakmi': () => {
      currentWantedStars = 6;
      updateWantedStarsUI();
      showCheatToast('AEZAKMI - 6-STAR MAXIMUM WANTED REPUTATION');
      playGTASynthArp(600, 1200);
    },
    'professionalskit': () => {
      showCheatToast('PROFESSIONALSKIT - ALL ARSENAL & ML TOOLS UNLOCKED');
      playGTALoadedChime();
    },
    'leavemealone': () => {
      currentWantedStars = 0;
      updateWantedStarsUI();
      showCheatToast('LEAVEMEALONE - 0 WANTED LEVEL CLEARED');
    }
  };

  document.addEventListener('keydown', (e) => {
    // Ignore input if user is typing in form or terminal
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    
    keyBuffer += e.key.toLowerCase();
    if (keyBuffer.length > 25) {
      keyBuffer = keyBuffer.slice(-25);
    }

    for (const [code, handler] of Object.entries(cheats)) {
      if (keyBuffer.endsWith(code)) {
        handler();
        keyBuffer = '';
        break;
      }
    }
  });

  function showCheatToast(text) {
    if (!cheatToast || !cheatNameEl) return;
    cheatNameEl.textContent = text;
    cheatToast.classList.add('show');
    setTimeout(() => {
      cheatToast.classList.remove('show');
    }, 3500);
  }
}

/* ==========================================================================
   TASK 6: HYBRID MODE TOGGLE (GTA ARCADE vs PRO RECRUITER)
   ========================================================================== */
function initHybridModeSwitch() {
  const modeBtn = document.getElementById('mode-toggle-btn');
  const modeIcon = document.getElementById('mode-icon');
  const modeLabel = document.getElementById('mode-label');

  // Check saved mode in localStorage
  const savedMode = localStorage.getItem('portfolio-mode') || 'arcade';
  setPortfolioMode(savedMode);

  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      toggleHybridMode();
    });
  }

  // Keyboard shortcut: Shift + P to toggle mode
  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key.toLowerCase() === 'p') {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      toggleHybridMode();
    }
  });
}

function toggleHybridMode() {
  const currentMode = document.documentElement.getAttribute('data-mode') || 'arcade';
  const newMode = currentMode === 'arcade' ? 'pro' : 'arcade';
  setPortfolioMode(newMode);
}

function setPortfolioMode(mode) {
  const modeIcon = document.getElementById('mode-icon');
  const modeLabel = document.getElementById('mode-label');
  const mainHeader = document.getElementById('main-header');

  document.documentElement.setAttribute('data-mode', mode);
  localStorage.setItem('portfolio-mode', mode);

  if (mode === 'pro') {
    if (modeIcon) modeIcon.textContent = '💼';
    if (modeLabel) modeLabel.textContent = 'PRO MODE';
    if (mainHeader) mainHeader.classList.add('header-visible');
  } else {
    if (modeIcon) modeIcon.textContent = '🎮';
    if (modeLabel) modeLabel.textContent = 'ARCADE';
  }
  updatePro3DRunningState();
  playGTAMenuClickSound();
}

/* ==========================================================================
   LIVE INTERACTIVE MINI-DEMOS INSIDE PROJECT CARDS
   ========================================================================== */
function initProjectCardMiniDemos() {
  // 1. Crop Disease Interactive Heatmap Reveal Slider
  const slider = document.getElementById('card-xai-slider');
  const heatmapLayer = document.getElementById('card-heatmap-layer');
  const divider = document.getElementById('card-xai-divider');

  if (slider && heatmapLayer && divider) {
    slider.addEventListener('input', (e) => {
      const val = e.target.value;
      heatmapLayer.style.clipPath = `polygon(${val}% 0%, 100% 0%, 100% 100%, ${val}% 100%)`;
      divider.style.left = `${val}%`;
    });
  }

  // 2. Stock Prediction Live Timeframe/Model Scrubber
  const modelButtons = document.querySelectorAll('.timeframe-btn');
  const actualPath = document.getElementById('stock-actual-path');
  const predPath = document.getElementById('stock-pred-path');
  const hoverDot = document.getElementById('stock-hover-dot');
  const modelLabel = document.getElementById('stock-model-label');

  const modelPaths = {
    lstm: {
      pred: 'M 0 52 L 20 46 L 40 48 L 60 39 L 80 40 L 100 22 L 120 28 L 140 16 L 160 10',
      stroke: '#2ecc71',
      label: 'MODEL: LSTM (98.2%)'
    },
    gru: {
      pred: 'M 0 52 L 20 45 L 40 49 L 60 41 L 80 43 L 100 25 L 120 29 L 140 19 L 160 13',
      stroke: '#00f0ff',
      label: 'MODEL: GRU (97.8%)'
    },
    baseline: {
      pred: 'M 0 52 L 20 50 L 40 47 L 60 45 L 80 44 L 100 38 L 120 35 L 140 30 L 160 26',
      stroke: '#ff007f',
      label: 'MODEL: ARIMA (BASELINE)'
    }
  };

  modelButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      modelButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-model');
      if (modelPaths[key]) {
        if (predPath) {
          predPath.setAttribute('d', modelPaths[key].pred);
          predPath.setAttribute('stroke', modelPaths[key].stroke);
        }
        if (modelLabel) {
          modelLabel.textContent = modelPaths[key].label;
          modelLabel.style.color = modelPaths[key].stroke;
        }
        playGTAMenuClickSound();
      }
    });
  });

  // Scrubber mousemove inside Stock visual
  const stockBox = document.getElementById('stock-mini-interactive');
  if (stockBox && hoverDot) {
    stockBox.addEventListener('mousemove', (e) => {
      const rect = stockBox.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const targetX = pct * 160;
      hoverDot.setAttribute('cx', targetX);
      // Rough bezier interpolation for Y
      const targetY = 52 - pct * 40;
      hoverDot.setAttribute('cy', targetY);
    });
  }
}

/* ==========================================================================
   TASK 1: PRO MODE INTERACTIVE 3D NEURAL PARTICLE WEBGL ENGINE
   ========================================================================== */
let pro3DState = {
  active: false,
  renderer: null,
  scene: null,
  camera: null,
  points: null,
  lines: null,
  coreMesh: null,
  mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
  reqId: null
};

function initPro3DWebGL() {
  const canvas = document.getElementById('pro-3d-canvas');
  if (!canvas) return;

  function checkInitThree() {
    if (typeof THREE === 'undefined') {
      setTimeout(checkInitThree, 100);
      return;
    }
    setupThreeScene(canvas);
  }
  checkInitThree();
}

function setupThreeScene(canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 240;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Generate 3D Neural Particle Constellation
  const particleCount = 200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 500;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 300;

    velocities.push({
      x: (Math.random() - 0.5) * 0.4,
      y: (Math.random() - 0.5) * 0.4,
      z: (Math.random() - 0.5) * 0.3
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMaterial = new THREE.PointsMaterial({
    color: 0x818cf8, // Indigo / Violet
    size: 4,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(geometry, pMaterial);
  scene.add(particleSystem);

  // 2. Synapse Line Connections
  const maxLines = 150;
  const linePositions = new Float32Array(maxLines * 6);
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x4f46e5,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending
  });

  const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineSystem);

  // 3. Floating Neural 3D Icosahedron Core
  const coreGeo = new THREE.IcosahedronGeometry(36, 1);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreMesh.position.set(100, 20, -50);
  scene.add(coreMesh);

  // Internal glowing nucleus
  const innerNucleus = new THREE.Mesh(
    new THREE.SphereGeometry(12, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    })
  );
  coreMesh.add(innerNucleus);

  pro3DState = {
    active: false,
    renderer,
    scene,
    camera,
    particleSystem,
    positions,
    velocities,
    lineSystem,
    linePositions,
    coreMesh,
    innerNucleus,
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    reqId: null
  };

  // Mouse tilt tracking
  window.addEventListener('mousemove', (e) => {
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;
    pro3DState.mouse.targetX = (e.clientX - halfX) / halfX;
    pro3DState.mouse.targetY = (e.clientY - halfY) / halfY;
  });

  // Window resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Sync with portfolio mode
  updatePro3DRunningState();
}

function updatePro3DRunningState() {
  const currentMode = document.documentElement.getAttribute('data-mode') || 'arcade';
  if (currentMode === 'pro' && !pro3DState.active) {
    pro3DState.active = true;
    animatePro3D();
  } else if (currentMode !== 'pro' && pro3DState.active) {
    pro3DState.active = false;
    if (pro3DState.reqId) {
      cancelAnimationFrame(pro3DState.reqId);
      pro3DState.reqId = null;
    }
  }
}

function animatePro3D() {
  if (!pro3DState.active || !pro3DState.renderer) return;

  const { renderer, scene, camera, particleSystem, positions, velocities, lineSystem, linePositions, coreMesh, innerNucleus, mouse } = pro3DState;

  // Elastic mouse camera damping
  mouse.x += (mouse.targetX - mouse.x) * 0.05;
  mouse.y += (mouse.targetY - mouse.y) * 0.05;
  camera.position.x = mouse.x * 45;
  camera.position.y = -mouse.y * 35;
  camera.lookAt(0, 0, 0);

  // Rotate Core Mesh
  if (coreMesh) {
    coreMesh.rotation.x += 0.005;
    coreMesh.rotation.y += 0.008;
    if (innerNucleus) {
      innerNucleus.rotation.x -= 0.01;
      innerNucleus.rotation.y -= 0.012;
    }
  }

  // Update particles and compute synapse lines
  const count = positions.length / 3;
  let lineIndex = 0;
  const maxLineDist = 65;

  for (let i = 0; i < count; i++) {
    positions[i * 3] += velocities[i].x;
    positions[i * 3 + 1] += velocities[i].y;
    positions[i * 3 + 2] += velocities[i].z;

    // Bounce off 3D bounding box
    if (Math.abs(positions[i * 3]) > 250) velocities[i].x *= -1;
    if (Math.abs(positions[i * 3 + 1]) > 200) velocities[i].y *= -1;
    if (Math.abs(positions[i * 3 + 2]) > 150) velocities[i].z *= -1;

    // Connect close neighbors
    for (let j = i + 1; j < count; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < maxLineDist && lineIndex < 150 * 6) {
        linePositions[lineIndex++] = positions[i * 3];
        linePositions[lineIndex++] = positions[i * 3 + 1];
        linePositions[lineIndex++] = positions[i * 3 + 2];

        linePositions[lineIndex++] = positions[j * 3];
        linePositions[lineIndex++] = positions[j * 3 + 1];
        linePositions[lineIndex++] = positions[j * 3 + 2];
      }
    }
  }

  particleSystem.geometry.attributes.position.needsUpdate = true;
  lineSystem.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
  pro3DState.reqId = requestAnimationFrame(animatePro3D);
}

/* ==========================================================================
   TASK 2: 3D GYROSCOPIC CARD TILT & SPECULAR Z-AXIS GLARE
   ========================================================================== */
function initPro3DCardTilt() {
  const cards = document.querySelectorAll('.project-card, .stat-card, .highlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      // Only active in Pro Mode
      if (document.documentElement.getAttribute('data-mode') !== 'pro') {
        card.style.transform = '';
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate percentage for specular glow
      const pctX = (x / rect.width) * 100;
      const pctY = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${pctX}%`);
      card.style.setProperty('--mouse-y', `${pctY}%`);

      // 3D rotation math
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      if (document.documentElement.getAttribute('data-mode') === 'pro') {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      } else {
        card.style.transform = '';
      }
    });
  });
}

/* ==========================================================================
   TASK 3: WELCOME MODE GUIDE MODAL (CHOOSE YOUR EXPERIENCE)
   ========================================================================== */
function checkShowWelcomeModal() {
  const modal = document.getElementById('mode-welcome-modal');
  const arcadeCard = document.getElementById('btn-choose-arcade');
  const proCard = document.getElementById('btn-choose-pro');
  const enterBtn = document.getElementById('btn-dismiss-welcome');
  if (!modal) return;

  const hasSeenModal = localStorage.getItem('portfolio-welcome-seen');
  if (hasSeenModal) {
    triggerGTAMissionPassed('WELCOME TO VICE CITY', 'WELCOME TO SURYANSH SHARMA PORTFOLIO');
    return;
  }

  let selectedChoice = localStorage.getItem('portfolio-mode') || 'arcade';
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');

  function updateChoiceUI() {
    if (arcadeCard && proCard) {
      if (selectedChoice === 'arcade') {
        arcadeCard.classList.add('active');
        proCard.classList.remove('active');
      } else {
        proCard.classList.add('active');
        arcadeCard.classList.remove('active');
      }
    }
  }
  updateChoiceUI();

  if (arcadeCard) {
    arcadeCard.addEventListener('click', () => {
      selectedChoice = 'arcade';
      updateChoiceUI();
      setPortfolioMode('arcade');
    });
  }

  if (proCard) {
    proCard.addEventListener('click', () => {
      selectedChoice = 'pro';
      updateChoiceUI();
      setPortfolioMode('pro');
    });
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      localStorage.setItem('portfolio-welcome-seen', 'true');
      playGTAMissionPassedChime();
      triggerGTAMissionPassed('INTERFACE READY', `MODE: ${selectedChoice.toUpperCase()}`);
    });
  }
}


