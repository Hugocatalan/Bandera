/* ==========================================================================
   CEREMONY SYSTEM STATE & INITIALIZATION
   ========================================================================== */
const DEFAULT_STUDENTS = [
    "Juan Martín Belgrano",
    "María Sol De Mayo",
    "Facundo Tomás Sarmiento",
    "Sofía Valentina San Martín",
    "Mateo Ignacio Güemes",
    "Delfina Rocío Cabral",
    "Bautista León Necochea",
    "Catalina Paz Alvear",
    "Santiago Joel Brown",
    "Emilia Luz French",
    "Ignacio Gabriel Cardozo",
    "Clara Agustina Saavedra",
    "Federico Manuel Moreno",
    "Juana Isabel Azurduy",
    "Benjamín Francisco Castelli"
];

// Authentic educational historical data for the Curiosities section
const CURIOSITIES_DATA = {
    "0": {
        title: "El Sol de Mayo: Historia e Identidad Incaica",
        icon: "fa-sun",
        body: "El Sol de Mayo fue incorporado en la bandera argentina en 1818 por el Director Supremo Juan Martín de Pueyrredón para distinguir la bandera de guerra de la de uso civil. Este símbolo posee una profunda raíz identitaria: representa al sol incaico <em>Inti</em>, vinculando las luchas de la independencia con la historia precolombina de América del Sur. Asimismo, rememora la Revolución de Mayo de 1810, cuando en una jornada nublada asomó el sol en Buenos Aires, considerado por el pueblo como un augurio de libertad. El diseño del sol es figurado y cuenta con rostro humano (ojos, cejas, nariz y boca), rodeado de <strong>32 rayos</strong> distribuidos de forma simétrica: 16 de ellos son rectos y representan el sol radiante, mientras que los otros 16 son ondulados alternando entre sí, simbolizando las llamas de fuego y el calor que da vida."
    },
    "1": {
        title: "El Monumento Nacional a la Bandera en Rosario",
        icon: "fa-landmark",
        body: "Ubicado en la ciudad de Rosario, provincia de Santa Fe, el Monumento Histórico Nacional a la Bandera es una obra monumental única en el mundo, dedicada exclusivamente a homenajear a una insignia patria. Fue construido sobre las barrancas del Río Paraná, en el mismo predio histórico donde Manuel Belgrano izó por primera vez la bandera patria el 27 de febrero de 1812. Diseñado por los arquitectos Ángel Guido y Alejandro Bustillo con esculturas de Lola Mora, Alfredo Bigatti y José Fioravanti, el monumento abarca más de 10.000 metros cuadrados y fue inaugurado el 20 de junio de 1957. Su estructura principal simula una gran nave o proa que avanza en el agua, simbolizando a la Patria marchando hacia el futuro, coronada por una imponente torre de 70 metros de altura."
    },
    "2": {
        title: "Proyecto 'Alta en el Cielo': La Bandera de Todos",
        icon: "fa-arrows-left-right",
        body: "El proyecto comunitario 'Alta en el Cielo' fue una de las manifestaciones de unión popular más grandes de la historia argentina. Nacido en la ciudad de Rosario y liderado por el periodista Julio Vacaflor, convocó a ciudadanos de todo el país y del extranjero a coser retazos de tela celeste y blanca de 4.5 metros de ancho. Durante más de una década, escuelas, familias, clubes y asociaciones de toda la Argentina se sumaron a coser costura tras costura de manera solidaria. La bandera creció año tras año hasta alcanzar <strong>más de 20 kilómetros de largo</strong>, requiriendo de miles de voluntarios para ser transportada y desplegada en los desfiles del 20 de Junio, convirtiéndose en un conmovedor símbolo de unión y hermandad nacional."
    },
    "3": {
        title: "La Bandera Flameante Más Grande del País",
        icon: "fa-ruler-combined",
        body: "La bandera flameante más grande de la República Argentina se encuentra en la localidad de Alta Gracia, en la provincia de Córdoba. Se trata de un paño patrio de dimensiones colosales: mide <strong>24 metros de largo por 12 metros de ancho</strong> (un área de 288 metros cuadrados), requiriendo condiciones climáticas específicas y textiles de alta resistencia al viento para poder flamear sin desgarrarse. Esta bandera está izada de manera permanente en un mástil gigante de <strong>60 metros de altura</strong>, ubicado en un predio especialmente preparado, y puede ser vista desde varios kilómetros de distancia, sirviendo como un faro de patriotismo y un homenaje monumental a los símbolos patrios."
    },
    "4": {
        title: "El Origen de los Colores Celeste y Blanco",
        icon: "fa-cloud",
        body: "El origen de los colores celeste y blanco de la bandera tiene fundamentos históricos fascinantes. En 1812, Manuel Belgrano adoptó estos colores basándose en la escarapela nacional aprobada por el Triunvirato. Estos colores eran los de la Real Orden de Carlos III de la Casa de Borbón española, instaurada en 1771. En los primeros años de la revolución, los patriotas criollos utilizaban estos colores para demostrar lealtad y legitimidad al rey cautivo Fernando VII (quien había sido depuesto por Napoleón Bonaparte) como estrategia política frente a las autoridades coloniales leales a la junta de España. Con el tiempo, esta lealtad monárquica inicial se transformó en un símbolo de la soberanía e independencia absolutas de la nueva nación, asociándose popularmente con los colores del firmamento y las nubes."
    },
    "5": {
        title: "El Juramento de Promesa de Lealtad a la Bandera",
        icon: "fa-file-signature",
        body: "La promesa de lealtad a la bandera nacional es una de las tradiciones cívicas más importantes y emotivas en el sistema educativo argentino. Esta ceremonia es realizada por los alumnos de 4° grado de la escuela primaria (generalmente de entre 9 y 10 años de edad) cada 20 de junio. En el acto, la máxima autoridad escolar pronuncia un discurso solemne en el que invita a los alumnos a comprometerse a defender y respetar la bandera como símbolo de libertad, igualdad y justicia. A la pregunta protocolar, los alumnos responden con un enérgico <strong>'¡Sí, prometo!'</strong>. Esta ceremonia no representa una jura de carácter militar, sino un compromiso civil e histórico del estudiante con los valores de la democracia, la solidaridad social y el respeto a la diversidad."
    }
};

let state = {
    students: [...DEFAULT_STUDENTS],
    currentIndex: 0,
    isPlaying: false,
    intervalDuration: 5000, // in ms
    fontSizeScale: 100, // in percentage
    schoolName: "Instituto de Enseñanza Oficial",
    ceremonyTitle: "Promesa de Lealtad a la Bandera Nacional",
    ceremonySubtitle: "Acto Escolar Oficial - 20 de Junio",
    colorStudentName: "#ffffff",
    colorMainTitle: "#ffffff",
    colorSubtitle: "#74acdf",
    audioEnabled: true,
    bgTheme: "cinematic"
};

let timerId = null;
let audioCtx = null;

// DOM Elements
const bodyEl = document.body;
const nameDisplay = document.getElementById('nameDisplay');
const studentAffiliation = document.getElementById('studentAffiliation');
const studentCard = document.getElementById('studentCard');
const progressBarFill = document.getElementById('progressBarFill');
const statCounter = document.getElementById('statCounter');
const footerSchoolName = document.getElementById('footerSchoolName');
const mainTitleEl = document.querySelector('.main-title');
const subtitleEl = document.querySelector('.subtitle');
const historySchoolName = document.getElementById('historySchoolName');
const curioSchoolName = document.getElementById('curioSchoolName');
const ceremonyNav = document.getElementById('ceremonyNav');
const studentPhoto = document.getElementById('studentPhoto');

// Curiosities Modal DOM Elements
const curioModalOverlay = document.getElementById('curioModalOverlay');
const curioModalTitle = document.getElementById('curioModalTitle');
const curioModalIcon = document.getElementById('curioModalIcon');
const curioModalBody = document.getElementById('curioModalBody');
const curioModalCloseBtn = document.getElementById('curioModalCloseBtn');

// Settings DOM Elements
const settingsToggleBtn = document.getElementById('settingsToggleBtn');
const controlPanelOverlay = document.getElementById('controlPanelOverlay');
const controlPanel = document.getElementById('controlPanel');
const panelCloseBtn = document.getElementById('panelCloseBtn');

const schoolNameInput = document.getElementById('schoolNameInput');
const ceremonyTitleInput = document.getElementById('ceremonyTitleInput');
const ceremonySubtitleInput = document.getElementById('ceremonySubtitleInput');
const studentListInput = document.getElementById('studentListInput');
const btnPrev = document.getElementById('btnPrev');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnNext = document.getElementById('btnNext');
const btnRestart = document.getElementById('btnRestart');
const btnFullscreen = document.getElementById('btnFullscreen');
const intervalSlider = document.getElementById('intervalSlider');
const intervalValue = document.getElementById('intervalValue');
const fontSizeSlider = document.getElementById('fontSizeSlider');
const fontSizeValue = document.getElementById('fontSizeValue');
const audioToggle = document.getElementById('audioToggle');
const bgThemeSelect = document.getElementById('bgThemeSelect');
const studentColorInput = document.getElementById('studentColorInput');
const titleColorInput = document.getElementById('titleColorInput');
const subtitleColorInput = document.getElementById('subtitleColorInput');

/* ==========================================================================
   LOCAL STORAGE PERSISTENCE
   ========================================================================== */
function loadStateFromStorage() {
    try {
        const storedStudents = localStorage.getItem('ceremony_students');
        if (storedStudents) {
            state.students = JSON.parse(storedStudents);
        }

        const storedSchool = localStorage.getItem('ceremony_school_name');
        if (storedSchool) {
            state.schoolName = storedSchool;
        }

        const storedInterval = localStorage.getItem('ceremony_interval');
        if (storedInterval) {
            state.intervalDuration = parseInt(storedInterval);
        }

        const storedFontSize = localStorage.getItem('ceremony_font_size');
        if (storedFontSize) {
            state.fontSizeScale = parseInt(storedFontSize);
        }

        const storedAudio = localStorage.getItem('ceremony_audio_enabled');
        if (storedAudio !== null) {
            state.audioEnabled = storedAudio === 'true';
        }

        const storedTheme = localStorage.getItem('ceremony_theme');
        if (storedTheme) {
            state.bgTheme = storedTheme;
        }

        const storedTitle = localStorage.getItem('ceremony_title');
        if (storedTitle) {
            state.ceremonyTitle = storedTitle;
        }

        const storedSubtitle = localStorage.getItem('ceremony_subtitle');
        if (storedSubtitle) {
            state.ceremonySubtitle = storedSubtitle;
        }

        const storedColorStudent = localStorage.getItem('ceremony_color_student');
        if (storedColorStudent) {
            state.colorStudentName = storedColorStudent;
        }

        const storedColorTitle = localStorage.getItem('ceremony_color_title');
        if (storedColorTitle) {
            state.colorMainTitle = storedColorTitle;
        }

        const storedColorSubtitle = localStorage.getItem('ceremony_color_subtitle');
        if (storedColorSubtitle) {
            state.colorSubtitle = storedColorSubtitle;
        }
    } catch (e) {
        console.warn("No se pudo cargar la configuración de localStorage: ", e);
    }
}

function saveStateToStorage() {
    try {
        localStorage.setItem('ceremony_students', JSON.stringify(state.students));
        localStorage.setItem('ceremony_school_name', state.schoolName);
        localStorage.setItem('ceremony_interval', state.intervalDuration);
        localStorage.setItem('ceremony_font_size', state.fontSizeScale);
        localStorage.setItem('ceremony_audio_enabled', state.audioEnabled);
        localStorage.setItem('ceremony_theme', state.bgTheme);
        localStorage.setItem('ceremony_title', state.ceremonyTitle);
        localStorage.setItem('ceremony_subtitle', state.ceremonySubtitle);
        localStorage.setItem('ceremony_color_student', state.colorStudentName);
        localStorage.setItem('ceremony_color_title', state.colorMainTitle);
        localStorage.setItem('ceremony_color_subtitle', state.colorSubtitle);
    } catch (e) {
        console.warn("No se pudo guardar la configuración en localStorage: ", e);
    }
}

/* ==========================================================================
   PATRIOTIC WEB AUDIO SYNTHESIZER (CHIME)
   ========================================================================== */
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playCeremonyChime() {
    if (!state.audioEnabled) return;
    
    initAudio();
    
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    
    // Ringing F-Major 9 arpeggio (celeste patrio bells)
    // F4 (349.23 Hz), A4 (440.00 Hz), C5 (523.25 Hz), E5 (659.25 Hz), F5 (698.46 Hz)
    const notes = [349.23, 440.00, 523.25, 659.25, 698.46];
    
    notes.forEach((freq, index) => {
        const playTime = now + (index * 0.08); // Arpeggiated sequence
        
        const oscNode = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        // Combine sine for pure bell tone and triangle for richness
        oscNode.type = index % 2 === 0 ? 'sine' : 'triangle';
        oscNode.frequency.setValueAtTime(freq, playTime);
        
        // Volume envelope (slow attack for solemn feel, long exponential decay)
        gainNode.gain.setValueAtTime(0.0, playTime);
        gainNode.gain.linearRampToValueAtTime(0.08, playTime + 0.06); 
        gainNode.gain.exponentialRampToValueAtTime(0.0001, playTime + 1.8);
        
        // Add a lowpass filter to soften the chime
        const filterNode = audioCtx.createBiquadFilter();
        filterNode.type = 'lowpass';
        filterNode.frequency.setValueAtTime(2000, playTime);
        
        oscNode.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscNode.start(playTime);
        oscNode.stop(playTime + 2.0);
    });
}

/* ==========================================================================
   CORE PRESENTATION LOGIC & ANIMATION
   ========================================================================== */

// Dynamic SVG filter flag wave animation (simulates fabric moving in wind)
function initFlagWavingAnimation() {
    const feTurbulence = document.querySelector('feTurbulence');
    if (!feTurbulence) return;
    
    const startTime = Date.now();
    
    function step() {
        const elapsed = (Date.now() - startTime) / 1000;
        
        // Smooth sine oscillations for base frequencies
        const baseFreqX = 0.005 + Math.sin(elapsed * 0.7) * 0.0012;
        const baseFreqY = 0.010 + Math.cos(elapsed * 0.4) * 0.0022;
        
        feTurbulence.setAttribute('baseFrequency', `${baseFreqX} ${baseFreqY}`);
        requestAnimationFrame(step);
    }
    
    requestAnimationFrame(step);
}

function adjustFontSize(name) {
    // Dynamically scale font size based on name length to prevent container overflow
    const baseSize = state.fontSizeScale;
    const length = name.length;
    let multiplier = 1.0;
    
    if (length > 28) {
        multiplier = 0.52; // Very long name
    } else if (length > 22) {
        multiplier = 0.68;
    } else if (length > 16) {
        multiplier = 0.85;
    }
    
    const remValue = (baseSize * multiplier * 5.0) / 100;
    nameDisplay.style.fontSize = `${remValue}rem`;
}

function updateScreen() {
    if (state.students.length === 0) {
        nameDisplay.textContent = "Sin Alumnos Cargados";
        studentAffiliation.textContent = "Por favor, añade alumnos en configuración";
        progressBarFill.style.width = "0%";
        statCounter.textContent = "0 / 0 Alumnos";
        return;
    }

    // Ensure index is within boundaries
    if (state.currentIndex >= state.students.length) {
        state.currentIndex = 0;
    }
    if (state.currentIndex < 0) {
        state.currentIndex = state.students.length - 1;
    }

    const currentName = state.students[state.currentIndex];
    
    // Add transition classes for smooth crossfade
    nameDisplay.classList.add('fade-transition');
    studentAffiliation.classList.add('fade-transition');
    if (studentPhoto) studentPhoto.classList.add('fade-transition');

    // Wait for fade-out, update contents, and then fade-in
    setTimeout(() => {
        nameDisplay.textContent = currentName;
        studentAffiliation.textContent = "Promesa de Lealtad";
        
        // Cycle through the 4 student photo assets sequentially based on index
        if (studentPhoto) {
            const photoNum = (state.currentIndex % 4) + 1;
            studentPhoto.src = `student_${photoNum}.png`;
        }
        
        // Adjust font sizing for the layout
        adjustFontSize(currentName);
        
        // Play audio chord if active
        if (state.isPlaying) {
            playCeremonyChime();
        }

        // Trigger fade-in
        nameDisplay.classList.remove('fade-transition');
        studentAffiliation.classList.remove('fade-transition');
        if (studentPhoto) studentPhoto.classList.remove('fade-transition');
    }, 280);

    // Progress updates
    const progressPercent = ((state.currentIndex + 1) / state.students.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;
    statCounter.textContent = `${state.currentIndex + 1} / ${state.students.length} Alumnos`;
    footerSchoolName.textContent = state.schoolName;
}

function startPresentation() {
    if (state.isPlaying) return;
    
    state.isPlaying = true;
    btnPlayPause.innerHTML = `<i class="fa-solid fa-pause"></i> Pausar`;
    btnPlayPause.classList.add('btn-active');
    studentCard.classList.add('playing');
    
    // Try to trigger chime on the first student when start is clicked
    playCeremonyChime();
    
    scheduleNext();
}

function pausePresentation() {
    if (!state.isPlaying) return;
    
    state.isPlaying = false;
    btnPlayPause.innerHTML = `<i class="fa-solid fa-play"></i> Continuar`;
    btnPlayPause.classList.remove('btn-active');
    studentCard.classList.remove('playing');
    
    if (timerId) {
        clearTimeout(timerId);
        timerId = null;
    }
}

function scheduleNext() {
    if (timerId) clearTimeout(timerId);
    
    timerId = setTimeout(() => {
        if (!state.isPlaying) return;
        
        state.currentIndex++;
        if (state.currentIndex >= state.students.length) {
            state.currentIndex = 0; // Loop back
        }
        
        updateScreen();
        scheduleNext();
    }, state.intervalDuration);
}

function nextStudent() {
    const wasPlaying = state.isPlaying;
    pausePresentation();
    
    state.currentIndex++;
    updateScreen();
    
    if (wasPlaying) {
        startPresentation();
    }
}

function prevStudent() {
    const wasPlaying = state.isPlaying;
    pausePresentation();
    
    state.currentIndex--;
    updateScreen();
    
    if (wasPlaying) {
        startPresentation();
    }
}

function restartPresentation() {
    pausePresentation();
    state.currentIndex = 0;
    updateScreen();
}

/* ==========================================================================
   UI CONTROLS & INTERACTION HANDLERS
   ========================================================================== */
function applyTheme(themeName) {
    bodyEl.classList.remove('theme-aurora', 'theme-minimalist');
    if (themeName !== 'cinematic') {
        bodyEl.classList.add(`theme-${themeName}`);
    }
}

function toggleSettingsPanel() {
    initAudio(); // Warm up Audio Context on user action
    controlPanelOverlay.classList.toggle('active');
}

function syncInputsWithState() {
    schoolNameInput.value = state.schoolName;
    ceremonyTitleInput.value = state.ceremonyTitle;
    ceremonySubtitleInput.value = state.ceremonySubtitle;
    studentListInput.value = state.students.join('\n');
    
    const durationSec = state.intervalDuration / 1000;
    intervalSlider.value = durationSec;
    intervalValue.textContent = `${durationSec}s`;
    
    fontSizeSlider.value = state.fontSizeScale;
    fontSizeValue.textContent = `${state.fontSizeScale}%`;
    
    audioToggle.checked = state.audioEnabled;
    bgThemeSelect.value = state.bgTheme;
    
    studentColorInput.value = state.colorStudentName;
    titleColorInput.value = state.colorMainTitle;
    subtitleColorInput.value = state.colorSubtitle;
    
    // Apply texts
    mainTitleEl.textContent = state.ceremonyTitle;
    subtitleEl.textContent = state.ceremonySubtitle;
    footerSchoolName.textContent = state.schoolName;
    if (historySchoolName) historySchoolName.textContent = state.schoolName;
    if (curioSchoolName) curioSchoolName.textContent = state.schoolName;
    
    // Apply colors to CSS variables
    document.documentElement.style.setProperty('--color-student-name', state.colorStudentName);
    document.documentElement.style.setProperty('--color-main-title', state.colorMainTitle);
    document.documentElement.style.setProperty('--color-subtitle', state.colorSubtitle);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error al intentar pantalla completa: ${err.message}`);
        });
        btnFullscreen.innerHTML = `<i class="fa-solid fa-compress"></i> Salir Completa`;
    } else {
        document.exitFullscreen();
        btnFullscreen.innerHTML = `<i class="fa-solid fa-expand"></i> Pantalla Completa`;
    }
}

// Attach Event Listeners to Control UI
function registerEventListeners() {
    // Floating settings controls
    settingsToggleBtn.addEventListener('click', toggleSettingsPanel);
    panelCloseBtn.addEventListener('click', toggleSettingsPanel);
    controlPanelOverlay.addEventListener('click', (e) => {
        if (e.target === controlPanelOverlay) {
            toggleSettingsPanel();
        }
    });

    // School Name Input
    schoolNameInput.addEventListener('input', () => {
        state.schoolName = schoolNameInput.value.trim() || "Instituto de Enseñanza Oficial";
        footerSchoolName.textContent = state.schoolName;
        saveStateToStorage();
    });

    // Student List Input
    studentListInput.addEventListener('input', () => {
        const text = studentListInput.value;
        state.students = text.split('\n')
                             .map(name => name.trim())
                             .filter(name => name.length > 0);
        
        // If list is completely cleared, fallback
        if (state.students.length === 0) {
            state.students = [];
        }
        
        saveStateToStorage();
        updateScreen();
    });

    // Button controls
    btnPlayPause.addEventListener('click', () => {
        if (state.isPlaying) {
            pausePresentation();
        } else {
            startPresentation();
        }
    });

    btnNext.addEventListener('click', nextStudent);
    btnPrev.addEventListener('click', prevStudent);
    btnRestart.addEventListener('click', restartPresentation);
    btnFullscreen.addEventListener('click', toggleFullscreen);

    // Sync fullscreen button icon with browser change events (e.g. if Esc key is pressed)
    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            btnFullscreen.innerHTML = `<i class="fa-solid fa-compress"></i> Salir Completa`;
        } else {
            btnFullscreen.innerHTML = `<i class="fa-solid fa-expand"></i> Pantalla Completa`;
        }
    });

    // Slideshow Interval Duration
    intervalSlider.addEventListener('input', () => {
        const val = parseInt(intervalSlider.value);
        state.intervalDuration = val * 1000;
        intervalValue.textContent = `${val}s`;
        saveStateToStorage();
        
        // If playing, reschedule next student interval dynamically
        if (state.isPlaying) {
            scheduleNext();
        }
    });

    // Student Font Size Scaling
    fontSizeSlider.addEventListener('input', () => {
        const val = parseInt(fontSizeSlider.value);
        state.fontSizeScale = val;
        fontSizeValue.textContent = `${val}%`;
        saveStateToStorage();
        updateScreen();
    });

    // Audio Switch Toggle
    audioToggle.addEventListener('change', () => {
        state.audioEnabled = audioToggle.checked;
        saveStateToStorage();
    });

    // Background Theme select
    bgThemeSelect.addEventListener('change', () => {
        state.bgTheme = bgThemeSelect.value;
        applyTheme(state.bgTheme);
        saveStateToStorage();
    });

    // Custom titles & subtitles editing
    ceremonyTitleInput.addEventListener('input', () => {
        state.ceremonyTitle = ceremonyTitleInput.value.trim() || "Promesa de Lealtad a la Bandera Nacional";
        mainTitleEl.textContent = state.ceremonyTitle;
        saveStateToStorage();
    });

    ceremonySubtitleInput.addEventListener('input', () => {
        state.ceremonySubtitle = ceremonySubtitleInput.value.trim() || "Acto Escolar Oficial - 20 de Junio";
        subtitleEl.textContent = state.ceremonySubtitle;
        saveStateToStorage();
    });

    // Color pickers logic
    studentColorInput.addEventListener('input', () => {
        state.colorStudentName = studentColorInput.value;
        document.documentElement.style.setProperty('--color-student-name', state.colorStudentName);
        saveStateToStorage();
    });

    titleColorInput.addEventListener('input', () => {
        state.colorMainTitle = titleColorInput.value;
        document.documentElement.style.setProperty('--color-main-title', state.colorMainTitle);
        saveStateToStorage();
    });

    subtitleColorInput.addEventListener('input', () => {
        state.colorSubtitle = subtitleColorInput.value;
        document.documentElement.style.setProperty('--color-subtitle', state.colorSubtitle);
        saveStateToStorage();
    });

    // Navigation Tab Switching
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.ceremony-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            
            // Toggle active class on navigation buttons
            navItems.forEach(btn => btn.classList.remove('active'));
            item.classList.add('active');
            
            // Toggle active section views
            sections.forEach(sec => sec.classList.remove('active-section'));
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active-section');
            }
            
            // Stop names slideshow when navigating away from the actoSection
            if (targetId !== 'actoSection') {
                pausePresentation();
            }
            
            // Recalculate auto-hide for navigation bar
            resetNavTimeout();
        });
    });

    // Auto-hide navigation bar on mouse inactivity during Acto Section
    let navHideTimeout = null;

    function resetNavTimeout() {
        ceremonyNav.classList.remove('nav-hidden');
        
        if (navHideTimeout) {
            clearTimeout(navHideTimeout);
            navHideTimeout = null;
        }
        
        const activeSection = document.querySelector('.ceremony-section.active-section');
        const isConfigOpen = controlPanelOverlay.classList.contains('active');
        
        // Hide only if we are on the ceremony main screen and settings panel is closed
        if (activeSection && activeSection.id === 'actoSection' && !isConfigOpen) {
            navHideTimeout = setTimeout(() => {
                ceremonyNav.classList.add('nav-hidden');
            }, 3000);
        }
    }

    // Monitor mouse movements and keyboard keys for nav bar wake-up
    document.addEventListener('mousemove', resetNavTimeout);
    document.addEventListener('keydown', resetNavTimeout);

    // Stop hiding nav bar when settings panel is opened
    settingsToggleBtn.addEventListener('click', resetNavTimeout);
    panelCloseBtn.addEventListener('click', resetNavTimeout);

    // Initialize nav bar auto-hide countdown
    resetNavTimeout();

    // Curiosities Cards Modals click events
    const curioCards = document.querySelectorAll('.curio-card');
    curioCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const data = CURIOSITIES_DATA[index];
            if (data) {
                curioModalTitle.textContent = data.title;
                curioModalIcon.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
                curioModalBody.innerHTML = data.body;
                
                // Show modal overlay
                curioModalOverlay.classList.add('active');
            }
        });
    });

    // Close Curiosities Modal events
    if (curioModalCloseBtn) {
        curioModalCloseBtn.addEventListener('click', () => {
            curioModalOverlay.classList.remove('active');
        });
    }

    curioModalOverlay.addEventListener('click', (e) => {
        if (e.target === curioModalOverlay) {
            curioModalOverlay.classList.remove('active');
        }
    });

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        // Prevent shortcuts if user is typing in forms/textareas
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
            return;
        }

        switch (e.code) {
            case 'Space':
                e.preventDefault(); // Stop default browser page scrolling
                if (state.isPlaying) {
                    pausePresentation();
                } else {
                    startPresentation();
                }
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                nextStudent();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                prevStudent();
                break;
            case 'KeyF':
                toggleFullscreen();
                break;
            case 'KeyC':
                toggleSettingsPanel();
                break;
        }
    });
}

/* ==========================================================================
   APPLICATION ENTRY POINT
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
    // 1. Recover configurations
    loadStateFromStorage();
    
    // 2. Synchronize visual inputs in settings panel
    syncInputsWithState();
    
    // 3. Attach listeners
    registerEventListeners();
    
    // 4. Initial screen draw
    updateScreen();

    // 5. Initialize background flag waving simulation
    initFlagWavingAnimation();
});
