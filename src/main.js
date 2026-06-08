// Central Coordinator and Game Loop for "Kraliçeyi Kurtarmak"
// Coordinates rich visual feedback (padlock opening, dialogue bubble reactions) and interactive map tooltips.
import { initCanvas, triggerExplosion, triggerConfetti, togglePauseCanvas, destroyCanvas } from './canvas.js';
import { initAudio, playClick, playSuccess, playFailure, playMagic, toggleDrone } from './audio.js';
import { puzzles } from './puzzles.js';
import { generateCertificate } from './certificate.js';
import gsap from 'gsap';
import Lenis from 'lenis';

// Global Game State
let activeGate = 1;
let unlockedGates = []; // Array of solved gate IDs
let pencilEnergy = 100;
let isMuted = false;
let isBgActive = true;
let currentOpenPuzzle = null;
let currentTaskIndex = 0; // Index of the sub-task in the active gate (0 or 1)

// Initialize smooth scrolling with Lenis
const lenis = new Lenis();
function scrollLoop(time) {
  lenis.raf(time);
  requestAnimationFrame(scrollLoop);
}
requestAnimationFrame(scrollLoop);

// DOM Elements
const soundToggle = document.getElementById('soundToggle');
const soundOnIcon = document.getElementById('soundOnIcon');
const soundOffIcon = document.getElementById('soundOffIcon');

const bgToggle = document.getElementById('bgToggle');
const bgOnIcon = document.getElementById('bgOnIcon');
const bgOffIcon = document.getElementById('bgOffIcon');
const magicalAuras = document.getElementById('magicalAuras');

const pencilBar = document.getElementById('pencilBar');
const pencilPercent = document.getElementById('pencilPercent');

const heroScreen = document.getElementById('heroScreen');
const mapScreen = document.getElementById('mapScreen');
const successScreen = document.getElementById('successScreen');

const btnStartAdventure = document.getElementById('btnStartAdventure');
const btnPlayAgain = document.getElementById('btnPlayAgain');
const btnDownloadCert = document.getElementById('btnDownloadCert');
const playerNameInput = document.getElementById('playerNameInput');

// Puzzle Modal Elements
const puzzleModal = document.getElementById('puzzleModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const chapterLabel = document.getElementById('chapterLabel');
const taskProgressLabel = document.getElementById('taskProgressLabel');
const puzzleTitle = document.getElementById('puzzleTitle');
const speechAvatar = document.getElementById('speechAvatar');
const speechName = document.getElementById('speechName');
const speechText = document.getElementById('speechText');
const questionText = document.getElementById('questionText');
const visWorkarea = document.getElementById('visWorkarea');
const pInput = document.getElementById('pInput');
const btnShowHint = document.getElementById('btnShowHint');
const btnSubmitAnswer = document.getElementById('btnSubmitAnswer');
const hintBox = document.getElementById('hintBox');
const solutionBox = document.getElementById('solutionBox');
const padlockWrapper = document.getElementById('padlockWrapper');
const magicKey = document.getElementById('magicKey');
const mapTooltip = document.getElementById('mapTooltip');

// New V2 DOM Elements
const btnToggleTeaser = document.getElementById('btnToggleTeaser');
const btnBackToIllustration = document.getElementById('btnBackToIllustration');
const heroIllustrationWrapper = document.getElementById('heroIllustrationWrapper');
const heroVideoWrapper = document.getElementById('heroVideoWrapper');

const tabBtnInteractive = document.getElementById('tabBtnInteractive');
const tabBtnWorksheet = document.getElementById('tabBtnWorksheet');
const tabContentInteractive = document.getElementById('tabContentInteractive');
const tabContentWorksheet = document.getElementById('tabContentWorksheet');

const wsTopic = document.getElementById('wsTopic');
const wsOutcome = document.getElementById('wsOutcome');
const wsQ1Text = document.getElementById('wsQ1Text');
const wsQ2Text = document.getElementById('wsQ2Text');
const btnPrintWorksheet = document.getElementById('btnPrintWorksheet');

// Hidden printable element placeholders
const printableWorksheet = document.getElementById('printableWorksheet');
const wsPrintTitle = document.getElementById('wsPrintTitle');
const wsPrintTopic = document.getElementById('wsPrintTopic');
const wsPrintOutcome = document.getElementById('wsPrintOutcome');
const wsPrintNarrative = document.getElementById('wsPrintNarrative');
const wsPrintQ1Text = document.getElementById('wsPrintQ1Text');
const wsPrintQ2Text = document.getElementById('wsPrintQ2Text');

// 1. Initial Setup
window.addEventListener('DOMContentLoaded', () => {
  // Start canvas background
  initCanvas('particleCanvas');
  
  // Register click to initialize/resume audio context
  document.body.addEventListener('click', () => {
    initAudio();
  }, { once: true });

  // Bind Buttons
  btnStartAdventure.addEventListener('click', startAdventure);
  btnPlayAgain.addEventListener('click', restartGame);
  btnDownloadCert.addEventListener('click', handleDownloadCertificate);
  
  soundToggle.addEventListener('click', handleSoundToggle);
  if (bgToggle) {
    bgToggle.addEventListener('click', handleBgToggle);
  }
  
  btnCloseModal.addEventListener('click', closeModal);
  btnShowHint.addEventListener('click', toggleHint);
  btnSubmitAnswer.addEventListener('click', handleSubmitAnswer);
  
  // Map Tower Clicks & Tooltips
  for (let i = 1; i <= 8; i++) {
    const node = document.getElementById(`node-${i}`);
    if (node) {
      node.addEventListener('click', () => handleTowerClick(i));
    }
  }

  // Teaser Video Controls & Transition
  const teaserVideo = document.getElementById('teaserVideo');
  const btnPlayPauseVideo = document.getElementById('btnPlayPauseVideo');
  const btnMuteVideo = document.getElementById('btnMuteVideo');

  function transitionToIllustration() {
    if (teaserVideo) {
      teaserVideo.pause();
    }
    gsap.to(heroVideoWrapper, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        heroVideoWrapper.style.display = 'none';
        heroIllustrationWrapper.style.display = 'block';
        gsap.fromTo(heroIllustrationWrapper, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      }
    });
  }

  if (teaserVideo && btnPlayPauseVideo && btnMuteVideo) {
    btnPlayPauseVideo.addEventListener('click', (e) => {
      e.stopPropagation();
      if (teaserVideo.paused) {
        teaserVideo.play().catch(err => console.log("Video play failed:", err));
        btnPlayPauseVideo.innerHTML = '<span class="video-icon">⏸️</span>';
      } else {
        teaserVideo.pause();
        btnPlayPauseVideo.innerHTML = '<span class="video-icon">▶️</span>';
      }
    });

    btnMuteVideo.addEventListener('click', (e) => {
      e.stopPropagation();
      teaserVideo.muted = !teaserVideo.muted;
      if (teaserVideo.muted) {
        btnMuteVideo.innerHTML = '<span class="video-icon">🔇</span>';
      } else {
        btnMuteVideo.innerHTML = '<span class="video-icon">🔊</span>';
      }
    });

    teaserVideo.addEventListener('play', () => {
      btnPlayPauseVideo.innerHTML = '<span class="video-icon">⏸️</span>';
    });
    teaserVideo.addEventListener('pause', () => {
      btnPlayPauseVideo.innerHTML = '<span class="video-icon">▶️</span>';
    });
    teaserVideo.addEventListener('ended', () => {
      btnPlayPauseVideo.innerHTML = '<span class="video-icon">▶️</span>';
      transitionToIllustration();
    });
  }
  // V2 Tab Bindings in modal
  if (tabBtnInteractive && tabBtnWorksheet) {
    tabBtnInteractive.addEventListener('click', () => {
      playSoundEffect(playClick);
      tabBtnInteractive.classList.add('tab-btn--active');
      tabBtnWorksheet.classList.remove('tab-btn--active');
      tabContentInteractive.classList.add('tab-content--active');
      tabContentWorksheet.classList.remove('tab-content--active');
    });

    tabBtnWorksheet.addEventListener('click', () => {
      playSoundEffect(playClick);
      tabBtnWorksheet.classList.add('tab-btn--active');
      tabBtnInteractive.classList.remove('tab-btn--active');
      tabContentWorksheet.classList.add('tab-content--active');
      tabContentInteractive.classList.remove('tab-content--active');
    });
  }

  // V2 Print Worksheet trigger
  if (btnPrintWorksheet) {
    btnPrintWorksheet.addEventListener('click', () => {
      playSoundEffect(playClick);
      let name = playerNameInput.value.trim();
      if (name === '') {
        const defaultNames = [
          "Matematik Kaşifi Aleks",
          "Zümrüt Koruyucusu Vanessa",
          "Sihirli Sayı Ustası Sam",
          "Lugubriya Kahramanı Aleks",
          "Gizem Çözücü Vanessa",
          "Labirent Gezgini Sam"
        ];
        name = defaultNames[Math.floor(Math.random() * defaultNames.length)];
      }
      
      // Fill name in printable worksheet header
      const printNameEl = document.querySelector('.ws-header-meta .meta-field:first-child');
      if (printNameEl) {
        printNameEl.innerHTML = `<strong>Öğrencinin Adı Soyadı:</strong> ${name}`;
      }
      
      // Trigger printing
      window.print();
    });
  }

  // V2 Landing Video showcase toggle bindings
  if (btnToggleTeaser && btnBackToIllustration && heroIllustrationWrapper && heroVideoWrapper) {
    btnToggleTeaser.addEventListener('click', (e) => {
      e.stopPropagation();
      playSoundEffect(playClick);
      
      gsap.to(heroIllustrationWrapper, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          heroIllustrationWrapper.style.display = 'none';
          heroVideoWrapper.style.display = 'block';
          gsap.fromTo(heroVideoWrapper, { opacity: 0 }, { opacity: 1, duration: 0.3 });
          
          if (teaserVideo) {
            teaserVideo.play().catch(err => console.log("Video autoplay failed:", err));
          }
        }
      });
    });

    btnBackToIllustration.addEventListener('click', (e) => {
      e.stopPropagation();
      playSoundEffect(playClick);
      transitionToIllustration();
    });
  }

  // Autoplay video on load (unmuted by default, browser fallback to muted + unmute on interaction)
  if (teaserVideo && btnMuteVideo) {
    teaserVideo.muted = false;
    const playPromise = teaserVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay unmuted blocked by browser, falling back to muted autoplay...");
        teaserVideo.muted = true;
        btnMuteVideo.innerHTML = '<span class="video-icon">🔇</span>';
        teaserVideo.play().catch(e => console.log("Muted autoplay failed too:", e));
        
        // Listen for first interaction on body to unmute
        const unmuteOnInteraction = () => {
          teaserVideo.muted = false;
          btnMuteVideo.innerHTML = '<span class="video-icon">🔊</span>';
          teaserVideo.play().catch(e => {});
          document.body.removeEventListener('click', unmuteOnInteraction);
        };
        document.body.addEventListener('click', unmuteOnInteraction);
      });
    }
  }

  setupMapTooltips();

  // Update starting states
  updatePencilTracker();
  updateMapVisuals();
});

// 2. Navigation Actions
function switchScreen(fromScreen, toScreen) {
  gsap.to(fromScreen, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      fromScreen.classList.remove('screen--active');
      toScreen.classList.add('screen--active');
      gsap.fromTo(toScreen, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }
  });
}

function startAdventure() {
  playSoundEffect(playClick);
  
  // Pause teaser video if playing
  const teaserVideo = document.getElementById('teaserVideo');
  if (teaserVideo) {
    teaserVideo.pause();
  }

  // Unlock ambient audio if unmuted
  if (!isMuted) {
    setTimeout(() => {
      toggleDrone(true);
    }, 500);
  }

  // Transition to map
  switchScreen(heroScreen, mapScreen);
  
  // Animate map entrance
  gsap.from('.map-svg-wrapper', {
    scale: 0.95,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  });
}

function restartGame() {
  playSoundEffect(playClick);
  
  // Reset states
  activeGate = 1;
  unlockedGates = [];
  pencilEnergy = 100;
  
  updatePencilTracker();
  updateMapVisuals();
  
  switchScreen(successScreen, mapScreen);
}

// 3. Sound Control
function handleSoundToggle() {
  isMuted = !isMuted;
  if (isMuted) {
    soundOnIcon.style.display = 'none';
    soundOffIcon.style.display = 'block';
    toggleDrone(false);
  } else {
    soundOffIcon.style.display = 'none';
    soundOnIcon.style.display = 'block';
    initAudio();
    toggleDrone(true);
  }
}

// Background Animation Toggle Control
function handleBgToggle() {
  playSoundEffect(playClick);
  isBgActive = !isBgActive;
  
  if (isBgActive) {
    if (bgOnIcon) bgOnIcon.style.display = 'block';
    if (bgOffIcon) bgOffIcon.style.display = 'none';
    
    togglePauseCanvas(false);
    
    if (magicalAuras) {
      magicalAuras.classList.remove('magical-auras--disabled');
    }
  } else {
    if (bgOnIcon) bgOnIcon.style.display = 'none';
    if (bgOffIcon) bgOffIcon.style.display = 'block';
    
    togglePauseCanvas(true);
    
    if (magicalAuras) {
      magicalAuras.classList.add('magical-auras--disabled');
    }
  }
}

// Helper to play synthesized sounds with sound state check
function playSoundEffect(audioFunction) {
  if (!isMuted) {
    audioFunction();
  }
}

// Coordinate coordinates of the towers on the SVG canvas (viewBox 800x500)
const nodeCoords = {
  1: { x: 100, y: 400 },
  2: { x: 220, y: 350 },
  3: { x: 160, y: 220 },
  4: { x: 300, y: 150 },
  5: { x: 450, y: 260 },
  6: { x: 410, y: 410 },
  7: { x: 580, y: 350 },
  8: { x: 700, y: 200 }
};

// 4. Map Logic & Path styling
function updateMapVisuals(animate = false) {
  for (let i = 1; i <= 8; i++) {
    const node = document.getElementById(`node-${i}`);
    if (!node) continue;
    
    // Clear old status classes
    node.classList.remove('tower-node--locked', 'tower-node--unlocked', 'tower-node--active');
    
    if (unlockedGates.includes(i)) {
      node.classList.add('tower-node--unlocked');
    } else if (i === activeGate) {
      node.classList.add('tower-node--active');
    } else {
      node.classList.add('tower-node--locked');
    }
  }

  // Update connecting lines
  for (let i = 1; i <= 7; i++) {
    const path = document.getElementById(`path-${i}-${i+1}`);
    if (!path) continue;
    
    path.classList.remove('map-path--unlocked', 'map-path--active');
    
    if (unlockedGates.includes(i)) {
      path.classList.add('map-path--unlocked');
    } else if (i === activeGate - 1) {
      path.classList.add('map-path--active'); // Flowing gold towards the active node
    }
  }

  // Animate map avatar
  const coords = nodeCoords[activeGate];
  if (coords) {
    if (animate) {
      gsap.killTweensOf('#mapAvatar');
      gsap.killTweensOf('#avatarEmoji');
      
      // Bouncing walk timeline
      const tl = gsap.timeline();
      tl.to('#avatarEmoji', { y: -25, yoyo: true, repeat: 5, duration: 0.15, ease: 'power1.inOut' })
        .to('#mapAvatar', { x: coords.x, y: coords.y, duration: 1.5, ease: 'power2.inOut' }, 0);
    } else {
      gsap.set('#mapAvatar', { x: coords.x, y: coords.y });
      gsap.set('#avatarEmoji', { y: 0 });
    }
  }
}

function handleTowerClick(gateId) {
  if (unlockedGates.includes(gateId)) {
    openPuzzleModal(gateId, true);
  } else if (gateId === activeGate) {
    openPuzzleModal(gateId, false);
  } else {
    // Locked node shake
    playSoundEffect(playFailure);
    const node = document.getElementById(`node-${gateId}`);
    const icon = node.querySelector('.tower-icon');
    gsap.to(icon || node, {
      x: 8,
      yoyo: true,
      repeat: 5,
      duration: 0.04,
      onComplete: () => {
        gsap.set(icon || node, { x: 0 });
      }
    });
  }
}

// Floating map tooltip tracking
function setupMapTooltips() {
  const towerDescriptions = {
    1: { title: "1. Kapı: Sihirli Kalem", desc: "Kral Recher'in ilk kapısı. Ters işlem boru hattını çözüp sihirli kalemin gücünü zihnimizle kurmalıyız.", chapter: "Zindana Giriş" },
    2: { title: "2. Kapı: Lav Köprüsü", desc: "Altından kızgın lavların aktığı nehir. Köprünün taş kuralını çözerek karşıya güvenle geç.", chapter: "Lav Nehri" },
    3: { title: "3. Kapı: Zümrüt Kulesi", desc: "Kulenin tepesindeki kesir alevleri yolu kapadı. Zümrütleri kesir modellerine ayırarak bilmeceyi çöz.", chapter: "Zümrüt Labirenti" },
    4: { title: "4. Kapı: Muhafız Geçidi", desc: "Recher'in iki dev nöbetçisi kapıda bekliyor. Yaş katı terazi dengesini kurarak muhafızları aş.", chapter: "Muhafız Kışlası" },
    5: { title: "5. Kapı: Kamyon Karşılaşması", desc: "A ve B kalelerinden karşılaşan sevimli kamyonların yolunu ve karşılaşma süresini hesapla.", chapter: "Kanyon Geçidi" },
    6: { title: "6. Kapı: Gümüş Kuleler", desc: "Bahçedeki parıldayan gümüş kulelerin yükseklik örüntüsü kuralını bulup kilidi aç.", chapter: "Kraliyet Bahçesi" },
    7: { title: "7. Kapı: Monoculus Soyu", desc: "Karanlık mağaradaki tek gözlü ve 3 gözlü canavarların toplam göz sayılarını varsayım yaparak dengele.", chapter: "Karanlık Mağara" },
    8: { title: "8. Kapı: Kraliçe'nin Zindanı", desc: "Kraliçe Jayden burada kilitli! Mantık sandıklarını analiz ederek doğru sandığı ve anahtarı belirle.", chapter: "Büyük Salon" }
  };

  for (let i = 1; i <= 8; i++) {
    const node = document.getElementById(`node-${i}`);
    if (!node) continue;

    node.addEventListener('mouseenter', () => {
      if (window.matchMedia('(pointer: coarse)').matches) return;

      const info = towerDescriptions[i];
      let statusText = "Kilitli Bölge";
      let statusClass = "locked";

      if (unlockedGates.includes(i)) {
        statusText = "Kilidi Açıldı";
        statusClass = "unlocked";
      } else if (i === activeGate) {
        statusText = "Aktif Kapı";
        statusClass = "active";
      }

      mapTooltip.innerHTML = `
        <div class="tooltip-title">${info.title}</div>
        <div class="tooltip-status tooltip-status--${statusClass}">${statusText}</div>
        <div class="tooltip-desc">${info.desc}</div>
      `;
      mapTooltip.classList.add('map-tooltip--active');
    });

    node.addEventListener('mousemove', (e) => {
      // Offset from mouse pointer
      mapTooltip.style.left = `${e.clientX + 15}px`;
      mapTooltip.style.top = `${e.clientY + 15}px`;
    });

    node.addEventListener('mouseleave', () => {
      mapTooltip.classList.remove('map-tooltip--active');
    });
  }
}

// 5. Pencil Tracker (Health UI)
function updatePencilTracker() {
  pencilBar.style.width = `${pencilEnergy}%`;
  pencilPercent.textContent = `${pencilEnergy}%`;

  if (pencilEnergy > 60) {
    pencilBar.style.background = 'linear-gradient(90deg, #d97706, #fbbf24)';
  } else if (pencilEnergy > 30) {
    pencilBar.style.background = 'linear-gradient(90deg, #ea580c, #f97316)';
  } else {
    pencilBar.style.background = 'linear-gradient(90deg, #be123c, #f43f5e)';
  }
}

function decreasePencilEnergy() {
  pencilEnergy = Math.max(10, pencilEnergy - 10);
  updatePencilTracker();
}

function increasePencilEnergy() {
  pencilEnergy = Math.min(100, pencilEnergy + 5);
  updatePencilTracker();
}

// 6. Puzzle Modal Controls & Padlock animations
function openPuzzleModal(gateId, isAlreadySolved = false) {
  const p = puzzles.find(x => x.id === gateId);
  if (!p) return;
  
  currentOpenPuzzle = { puzzle: p, solved: isAlreadySolved };
  
  // Reset tabs default view
  if (tabBtnInteractive && tabBtnWorksheet) {
    tabBtnInteractive.classList.add('tab-btn--active');
    tabBtnWorksheet.classList.remove('tab-btn--active');
    tabContentInteractive.classList.add('tab-content--active');
    tabContentWorksheet.classList.remove('tab-content--active');
  }

  // Populate Worksheet Preview and print data
  if (p.worksheet) {
    if (wsTopic) wsTopic.textContent = p.worksheet.topic;
    if (wsOutcome) wsOutcome.textContent = p.worksheet.outcome;
    if (wsQ1Text) wsQ1Text.textContent = p.worksheet.questions[0].text;
    if (wsQ2Text) wsQ2Text.textContent = p.worksheet.questions[1].text;

    // Populate hidden printable worksheet details
    if (wsPrintTitle) wsPrintTitle.textContent = `BÖLÜM ${p.id}: ${p.worksheet.title.toUpperCase()}`;
    if (wsPrintTopic) wsPrintTopic.textContent = p.worksheet.topic;
    if (wsPrintOutcome) wsPrintOutcome.textContent = p.worksheet.outcome;
    if (wsPrintNarrative) wsPrintNarrative.textContent = p.narrative;
    if (wsPrintQ1Text) wsPrintQ1Text.textContent = p.worksheet.questions[0].text;
    if (wsPrintQ2Text) wsPrintQ2Text.textContent = p.worksheet.questions[1].text;
  }

  // Clean submit button mode attributes
  btnSubmitAnswer.removeAttribute('data-mode');

  // Reset padlock wrapper class
  padlockWrapper.classList.remove('padlock-wrapper--unlocked');
  magicKey.style.display = 'none';

  // Set modal core titles
  chapterLabel.textContent = `BÖLÜM ${p.id}: ${p.chapter}`;
  puzzleTitle.textContent = p.title;
  speechAvatar.textContent = p.avatar;
  speechName.textContent = p.character;
  speechText.textContent = p.narrative;

  // Clean details
  visWorkarea.innerHTML = '';
  pInput.value = '';
  pInput.disabled = false;
  hintBox.classList.remove('info-box--active');
  solutionBox.classList.remove('info-box--active');
  
  btnSubmitAnswer.textContent = "Kapıyı Aç 🗝️";
  btnSubmitAnswer.style.display = 'inline-flex';
  btnShowHint.style.display = 'inline-flex';
  pInput.style.display = 'inline-block';

  // Reset dialogue box borders to gold
  gsap.set('.dialogue-box', { borderColor: 'var(--color-gold)', backgroundColor: 'rgba(0,0,0,0.2)' });

  if (isAlreadySolved) {
    // Lock looks opened
    padlockWrapper.classList.add('padlock-wrapper--unlocked');

    currentTaskIndex = p.tasks.length - 1;
    const task = p.tasks[currentTaskIndex];
    questionText.textContent = task.question;
    taskProgressLabel.textContent = "Tamamlandı ✅";
    task.renderVisualizer(visWorkarea);
    
    pInput.value = task.answer.toString();
    pInput.disabled = true;
    
    solutionBox.innerHTML = `
      <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 Bu Kapı Daha Önce Açıldı!</p>
      ${task.solution}
    `;
    solutionBox.classList.add('info-box--active');
    
    btnSubmitAnswer.style.display = 'none';
    btnShowHint.style.display = 'none';
    pInput.style.display = 'none';
  } else {
    currentTaskIndex = 0;
    const task = p.tasks[currentTaskIndex];
    questionText.textContent = task.question;
    taskProgressLabel.textContent = `Görev 1 / ${p.tasks.length}`;
    task.renderVisualizer(visWorkarea);
    
    hintBox.textContent = task.hint;
    solutionBox.textContent = task.solution;
  }

  // Animate Open Modal
  puzzleModal.classList.add('puzzle-modal--active');
  gsap.fromTo('.puzzle-panel', 
    { scale: 0.85, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.4)' }
  );

  playSoundEffect(playClick);
}

function closeModal() {
  playSoundEffect(playClick);
  // Hide tooltip just in case it got stuck
  mapTooltip.classList.remove('map-tooltip--active');
  
  gsap.to('.puzzle-panel', {
    scale: 0.85,
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      puzzleModal.classList.remove('puzzle-modal--active');
      currentOpenPuzzle = null;
    }
  });
}

function toggleHint() {
  playSoundEffect(playClick);
  hintBox.classList.toggle('info-box--active');
}

// Custom golden key spin & padlock unlocking animation
function animateUnlock() {
  if (!magicKey || !padlockWrapper) return;
  
  magicKey.style.display = 'block';
  magicKey.style.opacity = '0';
  
  gsap.timeline()
    .fromTo(magicKey, 
      { x: -40, y: 15, rotation: -45, scale: 0.4, opacity: 0 },
      { x: -5, y: -5, rotation: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
    )
    .to(magicKey, { rotation: 90, scale: 0.8, duration: 0.4, delay: 0.1 })
    .to(magicKey, { opacity: 0, duration: 0.2, onComplete: () => {
      magicKey.style.display = 'none';
      // Unlock the SVG Padlock graphic
      padlockWrapper.classList.add('padlock-wrapper--unlocked');
      playSoundEffect(playMagic);
      
      // Explosion at padlock coordinate
      const rect = padlockWrapper.getBoundingClientRect();
      triggerExplosion(rect.left + rect.width/2, rect.top + rect.height/2, 25, 150); // Emerald green particles
    }});
}

// 7. Answer Evaluation & Multi-task routing
function handleSubmitAnswer() {
  if (!currentOpenPuzzle) return;
  const { puzzle } = currentOpenPuzzle;
  const currentMode = btnSubmitAnswer.getAttribute('data-mode');

  // A. Continue on Map / Go to Success screen
  if (currentMode === 'continue') {
    closeModal();
    btnSubmitAnswer.removeAttribute('data-mode');
    
    if (activeGate > 8) {
      switchScreen(mapScreen, successScreen);
      playSoundEffect(playSuccess);
      triggerConfetti();
      triggerExplosion(window.innerWidth / 2, window.innerHeight / 2, 120);
    } else {
      playSoundEffect(playMagic);
      const nodeEl = document.getElementById(`node-${activeGate - 1}`);
      if (nodeEl) {
        const rect = nodeEl.getBoundingClientRect();
        triggerExplosion(rect.left + rect.width/2, rect.top + rect.height/2, 45);
      }
    }
    return;
  }

  // B. Switch to Next Task
  if (currentMode === 'next-task') {
    currentTaskIndex++;
    btnSubmitAnswer.removeAttribute('data-mode');
    
    // Relock padlock for next task
    padlockWrapper.classList.remove('lock-shackle--unlocked', 'padlock-wrapper--unlocked');
    gsap.set('.dialogue-box', { borderColor: 'var(--color-gold)', backgroundColor: 'rgba(0,0,0,0.2)' });

    const task = puzzle.tasks[currentTaskIndex];
    
    // Reset dialogue box info
    speechAvatar.textContent = puzzle.avatar;
    speechName.textContent = puzzle.character;
    speechText.textContent = puzzle.narrative;

    questionText.textContent = task.question;
    taskProgressLabel.textContent = `Görev ${currentTaskIndex + 1} / ${puzzle.tasks.length}`;
    
    visWorkarea.innerHTML = '';
    task.renderVisualizer(visWorkarea);

    hintBox.textContent = task.hint;
    solutionBox.textContent = task.solution;
    hintBox.classList.remove('info-box--active');
    solutionBox.classList.remove('info-box--active');
    
    pInput.value = '';
    pInput.disabled = false;
    pInput.style.display = 'inline-block';
    
    btnSubmitAnswer.textContent = "Kapıyı Aç 🗝️";
    btnShowHint.style.display = 'inline-flex';
    
    playSoundEffect(playClick);
    return;
  }

  // C. Evaluate standard Task answer
  const task = puzzle.tasks[currentTaskIndex];
  const rawInput = pInput.value.trim();
  
  if (rawInput === '') {
    playSoundEffect(playFailure);
    shakeInput();
    return;
  }

  let isCorrect = false;

  if (typeof task.answer === 'number') {
    const numVal = parseFloat(rawInput);
    isCorrect = numVal === task.answer;
  } else {
    isCorrect = rawInput.toLowerCase() === task.answer.toLowerCase();
  }

  if (isCorrect) {
    // Play triumph chime
    playSoundEffect(playSuccess);
    
    // Trigger screen-filling confetti celebration
    triggerConfetti();
    
    // Key turn and padlock unlock animation
    animateUnlock();

    // Flash dialog box with green border!
    gsap.fromTo('.dialogue-box', 
      { borderColor: 'var(--color-gold)', backgroundColor: 'rgba(99, 102, 241, 0.06)' },
      { borderColor: 'var(--color-emerald)', backgroundColor: 'rgba(16,185,129,0.12)', duration: 0.4, yoyo: true, repeat: 1 }
    );

    // Dynamic dialogue text update!
    if (task.speechCorrect) {
      speechAvatar.textContent = task.speechCorrect.avatar;
      speechName.textContent = task.speechCorrect.name;
      speechText.textContent = task.speechCorrect.text;
    }

    // Blast particles at solve button
    const btnRect = btnSubmitAnswer.getBoundingClientRect();
    triggerExplosion(btnRect.left + btnRect.width/2, btnRect.top + btnRect.height/2, 60);

    pInput.disabled = true;
    
    if (currentTaskIndex < puzzle.tasks.length - 1) {
      // Task 1 solved - Go to Task 2 next
      solutionBox.innerHTML = `
        <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 Doğru Cevap! Görev Çözüldü!</p>
        ${task.solution}
      `;
      solutionBox.classList.add('info-box--active');
      hintBox.classList.remove('info-box--active');
      
      btnShowHint.style.display = 'none';
      btnSubmitAnswer.textContent = "Sonraki Göreve Geç ➔";
      btnSubmitAnswer.setAttribute('data-mode', 'next-task');
    } else {
      // Gate cleared!
      unlockedGates.push(puzzle.id);
      increasePencilEnergy();
      
      activeGate = puzzle.id + 1;
      updateMapVisuals(true); // Animate the avatar moving to the next gate!

      solutionBox.innerHTML = `
        <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 Harika! Tüm Görevler Tamamlandı, Kapı Açıldı!</p>
        ${task.solution}
      `;
      solutionBox.classList.add('info-box--active');
      hintBox.classList.remove('info-box--active');

      btnShowHint.style.display = 'none';
      btnSubmitAnswer.setAttribute('data-mode', 'continue');
      
      if (puzzle.id === 8) {
        btnSubmitAnswer.textContent = "Kraliçe'nin Yanına Git 👑";
      } else {
        btnSubmitAnswer.textContent = "Haritada Devam Et ➔";
      }
    }
  } else {
    // Incorrect answer - shake input and flash red dialogue box
    playSoundEffect(playFailure);
    shakeInput();
    decreasePencilEnergy();

    gsap.fromTo('.dialogue-box', 
      { borderColor: 'var(--color-gold)' },
      { borderColor: 'var(--color-recher)', duration: 0.15, yoyo: true, repeat: 3 }
    );

    // Recher taunts student on failure
    speechAvatar.textContent = "👑";
    speechName.textContent = "Kral Recher";
    speechText.textContent = "Hahaha! Yanlış hesap! Zihniniz zindanlarımı aşmaya yetmiyor mu? Kaleminiz biraz daha kısaldı!";
  }
}

function shakeInput() {
  gsap.fromTo('#pInput', 
    { x: -10 }, 
    { x: 10, yoyo: true, repeat: 5, duration: 0.05, onComplete: () => {
      gsap.set('#pInput', { x: 0 });
    }}
  );
  pInput.classList.add('answer-input--error');
  setTimeout(() => {
    pInput.classList.remove('answer-input--error');
  }, 500);
}

// 8. Certificate Generation Download
function handleDownloadCertificate() {
  playSoundEffect(playClick);
  const name = playerNameInput.value.trim();
  
  if (name === '') {
    gsap.fromTo('#playerNameInput', 
      { x: -8 }, 
      { x: 8, yoyo: true, repeat: 5, duration: 0.05, onComplete: () => {
        gsap.set('#playerNameInput', { x: 0 });
      }}
    );
    return;
  }

  generateCertificate(name, pencilEnergy);
}
