// Central Coordinator and Game Loop for "Kraliçeyi Kurtarmak"
// Coordinates rich visual feedback (padlock opening, dialogue bubble reactions) and interactive map tooltips.
import { initCanvas, triggerExplosion, triggerConfetti, togglePauseCanvas, destroyCanvas } from './canvas.js';
import { initAudio, playClick, playSuccess, playFailure, playMagic, toggleDrone } from './audio.js';
import { puzzles } from './puzzles.js';
import { generateCertificate } from './certificate.js';
import { uiTranslations, dialogueTranslations, puzzleTranslations } from './translations.js';
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
let currentLang = localStorage.getItem('game_lang');
if (!currentLang) {
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (browserLang.startsWith('ru')) {
    currentLang = 'ru';
  } else if (browserLang.startsWith('en')) {
    currentLang = 'en';
  } else {
    currentLang = 'tr';
  }
}

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
        const defaultNames = currentLang === 'en' ? [
          "Math Explorer Alex",
          "Emerald Guardian Vanessa",
          "Magic Number Master Sam",
          "Hero of Lugubria Alex",
          "Mystery Solver Vanessa",
          "Labyrinth Wanderer Sam"
        ] : currentLang === 'ru' ? [
          "Искатель математики Алекс",
          "Изумрудный хранитель Ванесса",
          "Мастер волшебных чисел Сэм",
          "Герой Лугубрии Алекс",
          "Разгадыватель тайн Ванесса",
          "Скиталец по лабиринту Сэм"
        ] : [
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
        const metaLabel = currentLang === 'en' ? "Student's Full Name:" : currentLang === 'ru' ? "Имя и фамилия ученика:" : "Öğrencinin Adı Soyadı:";
        printNameEl.innerHTML = `<strong>${metaLabel}</strong> ${name}`;
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

  // Initialize language dropdown & translate UI
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
  changeLanguage(currentLang);

  // Auto-detect country if no user language preference is saved
  if (!localStorage.getItem('game_lang')) {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        // Double check no selection was made during the fetch
        if (!localStorage.getItem('game_lang')) {
          const country = (data.country_code || '').toLowerCase();
          let geoLang = 'en';
          if (country === 'tr' || country === 'az') {
            geoLang = 'tr';
          } else if (['ru', 'by', 'kz', 'kg', 'ua', 'uz', 'am', 'ge', 'md', 'tj', 'tm'].includes(country)) {
            geoLang = 'ru';
          } else {
            geoLang = 'en';
          }
          changeLanguage(geoLang);
        }
      })
      .catch(err => {
        console.log("Geo IP lookup failed, fell back to browser default locale:", err);
      });
  }

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
  const getTooltipData = (gateId) => {
    const data = {
      tr: {
        1: { title: "1. Kapı: Sihirli Kalem", desc: "Kral Recher'in ilk kapısı. Ters işlem boru hattını çözüp sihirli kalemin gücünü zihnimizle kurmalıyız." },
        2: { title: "2. Kapı: Lav Köprüsü", desc: "Altından kızgın lavların aktığı nehir. Köprünün taş kuralını çözerek karşıya güvenle geç." },
        3: { title: "3. Kapı: Zümrüt Kulesi", desc: "Kulenin tepesindeki kesir alevleri yolu kapadı. Zümrütleri kesir modellerine ayırarak bilmeceyi çöz." },
        4: { title: "4. Kapı: Muhafız Geçidi", desc: "Recher'in iki dev nöbetçisi kapıda bekliyor. Yaş katı terazi dengesini kurarak muhafızları aş." },
        5: { title: "5. Kapı: Kamyon Karşılaşması", desc: "A ve B kalelerinden karşılaşan sevimli kamyonların yolunu ve karşılaşma süresini hesapla." },
        6: { title: "6. Kapı: Gümüş Kuleler", desc: "Bahçedeki parıldayan gümüş kulelerin yükseklik örüntüsü kuralını bulup kilidi aç." },
        7: { title: "7. Kapı: Monoculus Soyu", desc: "Karanlık mağaradaki tek gözlü ve 3 gözlü canavarların toplam göz sayılarını varsayım yaparak dengele." },
        8: { title: "8. Kapı: Kraliçe'nin Zindanı", desc: "Kraliçe Jayden burada kilitli! Mantık sandıklarını analiz ederek doğru sandığı ve anahtarı belirle." }
      },
      en: {
        1: { title: "Gate 1: Magic Pencil", desc: "King Recher's first gate. Solve the reverse operation pipeline to restore the magic pencil's power in your mind." },
        2: { title: "Gate 2: Lava Bridge", desc: "A river flowing with hot lava. Unravel the stone pattern's rule to safely cross the bridge." },
        3: { title: "Gate 3: Emerald Tower", desc: "Fraction flames block the path at the top of the tower. Divide the emeralds into fractional models to solve it." },
        4: { title: "Gate 4: Guard Passage", desc: "Recher's two giant guards await at the gate. Balance the age-factor scale to bypass them." },
        5: { title: "Gate 5: Truck Encounter", desc: "Calculate the meeting distance and duration of the cute trucks heading from castles A and B." },
        6: { title: "Gate 6: Silver Towers", desc: "Find the height pattern rule of the glowing silver towers in the garden to open the lock." },
        7: { title: "Gate 7: Monoculus Clan", desc: "Balance the total eye counts of the 1-eyed and 3-eyed monsters in the dark cave by making assumptions." },
        8: { title: "Gate 8: Queen's Dungeon", desc: "Queen Jayden is locked here! Analyze the logic chests to determine the correct chest and key." }
      },
      ru: {
        1: { title: "Ворота 1: Волшебный Карандаш", desc: "Первые ворота Короля Решера. Решите обратные операции трубопровода, чтобы мысленно восстановить силу карандаша." },
        2: { title: "Ворота 2: Лавовый Мост", desc: "Река с горячей лавой. Разгадайте правило узора камней моста, чтобы безопасно переправиться." },
        3: { title: "Ворота 3: Изумрудная Башня", desc: "Пламя дробей на вершине башни преградило путь. Разделите изумруды на долевые модели, чтобы решить загадку." },
        4: { title: "Ворота 4: Пост Охраны", desc: "Два гигантских стражника Решера ждут у ворот. Сбалансируйте весы возраста стражей, чтобы пройти." },
        5: { title: "Ворота 5: Встреча Грузовиков", desc: "Рассчитайте расстояние и время встречи милых грузовиков, едущих из замков А и Б." },
        6: { title: "Ворота 6: Серебряные Башни", desc: "Найдите закономерность высоты светящихся серебряных башен в саду, чтобы открыть замок." },
        7: { title: "Ворота 7: Глаза Монстров", desc: "Сбалансируйте общее число глаз одноглазых и трехглазых монстров в темной пещере методом подбора." },
        8: { title: "Ворота 8: Темница Королевы", desc: "Королева Джейден заперта здесь! Проанализируйте сундуки, чтобы найти правильный сундук и ключ." }
      }
    };
    return data[currentLang] ? data[currentLang][gateId] : data['tr'][gateId];
  };

  for (let i = 1; i <= 8; i++) {
    const node = document.getElementById(`node-${i}`);
    if (!node) continue;

    node.addEventListener('mouseenter', () => {
      if (window.matchMedia('(pointer: coarse)').matches) return;

      const info = getTooltipData(i);
      let statusText = uiTranslations[currentLang]["status-locked"] || "Kilitli Bölge";
      let statusClass = "locked";

      if (unlockedGates.includes(i)) {
        statusText = uiTranslations[currentLang]["status-unlocked"] || "Kilidi Açıldı";
        statusClass = "unlocked";
      } else if (i === activeGate) {
        statusText = uiTranslations[currentLang]["status-active"] || "Aktif Kapı";
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

  // Resolve translated texts from translations
  const pTrans = puzzleTranslations[currentLang] ? puzzleTranslations[currentLang][p.id] : null;
  const chapterText = pTrans ? pTrans.chapter : p.chapter;
  const titleText = pTrans ? pTrans.title : p.title;
  const charText = pTrans ? pTrans.character : p.character;
  const narrativeText = pTrans ? pTrans.narrative : p.narrative;

  // Populate Worksheet Preview and print data
  if (p.worksheet) {
    const wsTrans = pTrans ? pTrans.worksheet : null;
    const wsTopicText = wsTrans ? wsTrans.topic : p.worksheet.topic;
    const wsOutcomeText = wsTrans ? wsTrans.outcome : p.worksheet.outcome;
    const wsQ1 = wsTrans ? wsTrans.q1 : p.worksheet.questions[0].text;
    const wsQ2 = wsTrans ? wsTrans.q2 : p.worksheet.questions[1].text;
    const wsTitleText = wsTrans ? wsTrans.title : p.worksheet.title;

    if (wsTopic) wsTopic.textContent = wsTopicText;
    if (wsOutcome) wsOutcome.textContent = wsOutcomeText;
    if (wsQ1Text) wsQ1Text.textContent = wsQ1;
    if (wsQ2Text) wsQ2Text.textContent = wsQ2;

    // Populate hidden printable worksheet details
    if (wsPrintTitle) wsPrintTitle.textContent = `${uiTranslations[currentLang]["chapter-lbl"]} ${p.id}: ${wsTitleText.toUpperCase()}`;
    if (wsPrintTopic) wsPrintTopic.textContent = wsTopicText;
    if (wsPrintOutcome) wsPrintOutcome.textContent = wsOutcomeText;
    if (wsPrintNarrative) wsPrintNarrative.textContent = narrativeText;
    if (wsPrintQ1Text) wsPrintQ1Text.textContent = wsQ1;
    if (wsPrintQ2Text) wsPrintQ2Text.textContent = wsQ2;
  }

  // Clean submit button mode attributes
  btnSubmitAnswer.removeAttribute('data-mode');

  // Reset padlock wrapper class
  padlockWrapper.classList.remove('padlock-wrapper--unlocked');
  magicKey.style.display = 'none';

  // Set modal core titles
  chapterLabel.textContent = `${uiTranslations[currentLang]["chapter-lbl"]} ${p.id}: ${chapterText}`;
  puzzleTitle.textContent = titleText;
  speechAvatar.textContent = p.avatar;
  speechName.textContent = charText;
  speechText.textContent = narrativeText;

  // Clean details
  visWorkarea.innerHTML = '';
  pInput.value = '';
  pInput.disabled = false;
  hintBox.classList.remove('info-box--active');
  solutionBox.classList.remove('info-box--active');
  
  btnSubmitAnswer.textContent = uiTranslations[currentLang]["btn-submit"] || "Kapıyı Aç 🗝️";
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
    const pTransTask = pTrans ? pTrans.tasks[currentTaskIndex] : null;
    questionText.textContent = pTransTask ? pTransTask.question : task.question;
    taskProgressLabel.textContent = uiTranslations[currentLang]["modal-completed"] || "Tamamlandı ✅";
    task.renderVisualizer(visWorkarea, currentLang);
    
    pInput.value = task.answer.toString();
    pInput.disabled = true;
    
    const solTitle = currentLang === 'en' ? 'This gate was opened before!' : currentLang === 'ru' ? 'Эти ворота были открыты ранее!' : 'Bu Kapı Daha Önce Açıldı!';
    solutionBox.innerHTML = `
      <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 ${solTitle}</p>
      ${pTransTask ? pTransTask.solution : task.solution}
    `;
    solutionBox.classList.add('info-box--active');
    
    btnSubmitAnswer.style.display = 'none';
    btnShowHint.style.display = 'none';
    pInput.style.display = 'none';
  } else {
    currentTaskIndex = 0;
    const task = p.tasks[currentTaskIndex];
    const pTransTask = pTrans ? pTrans.tasks[currentTaskIndex] : null;
    questionText.textContent = pTransTask ? pTransTask.question : task.question;
    taskProgressLabel.textContent = `${uiTranslations[currentLang]["modal-task-lbl"]} 1 / ${p.tasks.length}`;
    task.renderVisualizer(visWorkarea, currentLang);
    
    hintBox.textContent = pTransTask ? pTransTask.hint : task.hint;
    solutionBox.textContent = pTransTask ? pTransTask.solution : task.solution;
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
  const pTrans = puzzleTranslations[currentLang] ? puzzleTranslations[currentLang][puzzle.id] : null;
  const pTransTask = pTrans ? pTrans.tasks[currentTaskIndex] : null;

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
    const nextTransTask = pTrans ? pTrans.tasks[currentTaskIndex] : null;
    
    // Reset dialogue box info
    speechAvatar.textContent = puzzle.avatar;
    speechName.textContent = pTrans ? pTrans.character : puzzle.character;
    speechText.textContent = pTrans ? pTrans.narrative : puzzle.narrative;

    questionText.textContent = nextTransTask ? nextTransTask.question : task.question;
    taskProgressLabel.textContent = `${uiTranslations[currentLang]["modal-task-lbl"]} ${currentTaskIndex + 1} / ${puzzle.tasks.length}`;
    
    visWorkarea.innerHTML = '';
    task.renderVisualizer(visWorkarea, currentLang);

    hintBox.textContent = nextTransTask ? nextTransTask.hint : task.hint;
    solutionBox.textContent = nextTransTask ? nextTransTask.solution : task.solution;
    hintBox.classList.remove('info-box--active');
    solutionBox.classList.remove('info-box--active');
    
    pInput.value = '';
    pInput.disabled = false;
    pInput.style.display = 'inline-block';
    
    btnSubmitAnswer.textContent = uiTranslations[currentLang]["btn-submit"] || "Kapıyı Aç 🗝️";
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
      speechName.textContent = pTrans ? pTrans.character : task.speechCorrect.name;
      speechText.textContent = pTransTask ? pTransTask.speechCorrect : task.speechCorrect.text;
    }

    // Blast particles at solve button
    const btnRect = btnSubmitAnswer.getBoundingClientRect();
    triggerExplosion(btnRect.left + btnRect.width/2, btnRect.top + btnRect.height/2, 60);

    pInput.disabled = true;
    
    if (currentTaskIndex < puzzle.tasks.length - 1) {
      // Task 1 solved - Go to Task 2 next
      const solTitle = uiTranslations[currentLang]["correct-task-next"] || "🎉 Doğru Cevap! Görev Çözüldü!";
      solutionBox.innerHTML = `
        <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 ${solTitle}</p>
        ${pTransTask ? pTransTask.solution : task.solution}
      `;
      solutionBox.classList.add('info-box--active');
      hintBox.classList.remove('info-box--active');
      
      btnShowHint.style.display = 'none';
      btnSubmitAnswer.textContent = uiTranslations[currentLang]["btn-next-task"] || "Sonraki Göreve Geç ➔";
      btnSubmitAnswer.setAttribute('data-mode', 'next-task');
    } else {
      // Gate cleared!
      unlockedGates.push(puzzle.id);
      increasePencilEnergy();
      
      activeGate = puzzle.id + 1;
      updateMapVisuals(true); // Animate the avatar moving to the next gate!

      const solTitle = uiTranslations[currentLang]["correct-gate-all"] || "🎉 Harika! Tüm Görevler Tamamlandı, Kapı Açıldı!";
      solutionBox.innerHTML = `
        <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 ${solTitle}</p>
        ${pTransTask ? pTransTask.solution : task.solution}
      `;
      solutionBox.classList.add('info-box--active');
      hintBox.classList.remove('info-box--active');

      btnShowHint.style.display = 'none';
      btnSubmitAnswer.setAttribute('data-mode', 'continue');
      
      if (puzzle.id === 8) {
        btnSubmitAnswer.textContent = uiTranslations[currentLang]["btn-go-queen"] || "Kraliçe'nin Yanına Git 👑";
      } else {
        btnSubmitAnswer.textContent = uiTranslations[currentLang]["btn-continue-map"] || "Haritada Devam Et ➔";
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
    speechName.textContent = currentLang === 'en' ? "King Recher" : currentLang === 'ru' ? "Король Решер" : "Kral Recher";
    speechText.textContent = uiTranslations[currentLang]["recher-taunt"] || "Hahaha! Yanlış hesap! Zihniniz zindanlarımı aşmaya yetmiyor mu? Kaleminiz biraz daha kısaldı!";
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

  generateCertificate(name, pencilEnergy, currentLang);
}

// 9. Language Switcher Logic
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('game_lang', lang);
  document.documentElement.lang = lang;
  
  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = lang;

  // Update teaser video source based on language
  const teaserVideo = document.getElementById('teaserVideo');
  if (teaserVideo) {
    const isPlaying = !teaserVideo.paused;
    const currentSrc = teaserVideo.querySelector('source');
    let newSrc = "/intro.mp4";
    if (lang === 'en') {
      newSrc = "/intro_eng.mp4";
    } else if (lang === 'ru') {
      newSrc = "/intro_rusca.mp4";
    }
    
    if (currentSrc && currentSrc.getAttribute('src') !== newSrc) {
      currentSrc.setAttribute('src', newSrc);
      teaserVideo.load();
      if (isPlaying) {
        teaserVideo.play().catch(e => console.log("Video replay blocked:", e));
      }
    }
  }

  // Translate static data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
      const translation = uiTranslations[lang][key];
      if (translation.includes('<strong') || translation.includes('<em') || translation.includes('<span') || translation.includes('<br>')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Translate placeholders and titles
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
      el.placeholder = uiTranslations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
      el.title = uiTranslations[lang][key];
    }
  });

  // Translate SVG map text labels
  for (let i = 1; i <= 8; i++) {
    const node = document.getElementById(`node-${i}`);
    if (node) {
      const textEl = node.querySelector('.tower-text');
      if (textEl && uiTranslations[lang] && uiTranslations[lang][`node-${i}-text`]) {
        textEl.textContent = uiTranslations[lang][`node-${i}-text`];
      }
    }
  }

  // Update open modal if exists
  if (currentOpenPuzzle) {
    const { puzzle, solved } = currentOpenPuzzle;
    const pTrans = puzzleTranslations[lang] ? puzzleTranslations[lang][puzzle.id] : null;
    if (pTrans) {
      chapterLabel.textContent = `${uiTranslations[lang]["chapter-lbl"]} ${puzzle.id}: ${pTrans.chapter}`;
      puzzleTitle.textContent = pTrans.title;
      speechName.textContent = pTrans.character;

      if (solved) {
        taskProgressLabel.textContent = uiTranslations[lang]["modal-completed"] || "Tamamlandı ✅";
        speechText.textContent = pTrans.narrative;
        const lastTask = pTrans.tasks[puzzle.tasks.length - 1];
        const solTitle = lang === 'en' ? 'This gate was opened before!' : lang === 'ru' ? 'Эти ворота были открыты ранее!' : 'Bu Kapı Daha Önce Açıldı!';
        solutionBox.innerHTML = `
          <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 ${solTitle}</p>
          ${lastTask.solution}
        `;
      } else {
        taskProgressLabel.textContent = `${uiTranslations[lang]["modal-task-lbl"]} ${currentTaskIndex + 1} / ${puzzle.tasks.length}`;
        const activeTask = pTrans.tasks[currentTaskIndex];

        const isNextTask = btnSubmitAnswer.getAttribute('data-mode') === 'next-task';
        const isContinue = btnSubmitAnswer.getAttribute('data-mode') === 'continue';

        if (isNextTask) {
          speechText.textContent = activeTask.speechCorrect;
          const solTitle = uiTranslations[lang]["correct-task-next"] || "🎉 Doğru Cevap! Görev Çözüldü!";
          solutionBox.innerHTML = `
            <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 ${solTitle}</p>
            ${activeTask.solution}
          `;
          btnSubmitAnswer.textContent = uiTranslations[lang]["btn-next-task"];
        } else if (isContinue) {
          speechText.textContent = activeTask.speechCorrect;
          const solTitle = uiTranslations[lang]["correct-gate-all"] || "🎉 Harika! Tüm Görevler Tamamlandı, Kapı Açıldı!";
          solutionBox.innerHTML = `
            <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">🎉 ${solTitle}</p>
            ${activeTask.solution}
          `;
          btnSubmitAnswer.textContent = puzzle.id === 8 ? uiTranslations[lang]["btn-go-queen"] : uiTranslations[lang]["btn-continue-map"];
        } else {
          speechText.textContent = pTrans.narrative;
          questionText.textContent = activeTask.question;
          hintBox.textContent = activeTask.hint;
          solutionBox.textContent = activeTask.solution;
          
          if (btnSubmitAnswer.textContent.includes('Kapıyı Aç') || btnSubmitAnswer.textContent.includes('Open Gate') || btnSubmitAnswer.textContent.includes('Открыть')) {
            btnSubmitAnswer.textContent = uiTranslations[lang]["btn-submit"] || "Kapıyı Aç 🗝️";
          }
        }
      }

      // Re-populate worksheet tab if worksheet exists
      if (puzzle.worksheet && pTrans.worksheet) {
        if (wsTopic) wsTopic.textContent = pTrans.worksheet.topic;
        if (wsOutcome) wsOutcome.textContent = pTrans.worksheet.outcome;
        if (wsQ1Text) wsQ1Text.textContent = pTrans.worksheet.q1;
        if (wsQ2Text) wsQ2Text.textContent = pTrans.worksheet.q2;

        if (wsPrintTitle) wsPrintTitle.textContent = `${uiTranslations[lang]["chapter-lbl"]} ${puzzle.id}: ${pTrans.worksheet.title.toUpperCase()}`;
        if (wsPrintTopic) wsPrintTopic.textContent = pTrans.worksheet.topic;
        if (wsPrintOutcome) wsPrintOutcome.textContent = pTrans.worksheet.outcome;
        if (wsPrintNarrative) wsPrintNarrative.textContent = pTrans.narrative;
        if (wsPrintQ1Text) wsPrintQ1Text.textContent = pTrans.worksheet.q1;
        if (wsPrintQ2Text) wsPrintQ2Text.textContent = pTrans.worksheet.q2;
      }
      
      // Re-render visualizer
      const task = puzzle.tasks[currentTaskIndex];
      if (task && typeof task.renderVisualizer === 'function') {
        task.renderVisualizer(visWorkarea, lang);
      }
    }
  }
}
