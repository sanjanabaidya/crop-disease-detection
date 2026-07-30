/* ==========================================================================
   AgroPulse Kisan AI - Client App with Voice I/O & Weather Advisory
   ========================================================================== */

const API_BASE_URL = 'http://localhost:5000/api';

document.addEventListener('DOMContentLoaded', () => {

  const TRANSLATIONS = {
    en: {
      tagline: "Voice Input/Output & Weather Fertilizer Advisory",
      langLabel: "Language / ଭାଷା:",
      voiceBtn: "Read Out Recommendation (Farmer Voice)",
      modeBtn: "Farmer Easy Mode: OFF",
      tabDiagnostic: "Soil Diagnostic",
      tabCalculator: "Calculator",
      tabOrganic: "Eco Bio-Suite",
      tabCrops: "Crops DB",
      tabAiPrompt: "AI Copilot",
      btnSoilCard: "Official Soil Health Card",
      heroTitle: "Smart Fertilizer Recommendation for High Yield",
      heroDesc: "Combines chemical precision with eco-organic compost, bio-fertilizers, and soil microbial protection to ensure high crop production while keeping soil fertile for generations.",
      formHeading: "Soil Test & Field Setup",
      badgeLive: "Live Engine",
      colorPickerLabel: "Pick Soil Visual Color:",
      presetLabel: "Load Quick Presets:",
      labelCrop: "Target Crop",
      labelStage: "Growth Stage",
      labelLandSize: "Land Size",
      labelSoilType: "Soil Texture/Type",
      divNpTitle: "Primary Soil Nutrients (NPK)",
      nameNitrogen: "Nitrogen (kg/ha)",
      namePhosphorus: "Phosphorus (kg/ha)",
      namePotassium: "Potassium (kg/ha)",
      lvlLow: "Deficient / Low",
      lvlMed: "Medium",
      lvlHigh: "High",
      lvlOpt: "Optimal",
      lvlExc: "Excess",
      divChemistry: "Soil Chemistry & Organic Carbon",
      namePh: "Soil Acidity/Alkalinity",
      phAcidic: "Acidic (<6.0)",
      phNeutral: "Neutral (6.0-7.5)",
      phAlkaline: "Alkaline (>7.5)",
      labelOc: "Organic Carbon (%)",
      labelMoisture: "Moisture Level (%)",
      btnCalculate: "Fetch Backend REST API Prescription",
      headingAssessment: "Soil Health Index Assessment",
      chartHeader: "Nutrient Status vs Crop Requirement",
      tableHeader: "Balanced Chemical & Eco-Organic Prescription",
      thFertilizer: "Fertilizer / Bio-Input",
      thCategory: "Type",
      thPerAcre: "Per Acre",
      thTotalField: "Total Field Quantity",
      thMethod: "Application Method",
      ecoHeader: "Crop Health & Bio-Organic Soil Shield",
      ecoSub: "Protects soil earthworms, microbial biomass, and root health while maintaining maximum crop yields.",
      timelineHeader: "Split Application Growth Schedule",
      calcHeading: "Custom Fertilizer Blend & Quantity Calculator",
      calcSub: "Convert nutrient deficiency requirements (N, P₂O₅, K₂O) into exact commercial bag quantities for any field size."
    },
    or: {
      tagline: "ଭଏସ ଇନପୁଟ୍ ଓ ପାଣିପାଗ ଅନୁସାରେ ସାର ସିଫାରିଶ୍",
      langLabel: "ଭାଷା / Language:",
      voiceBtn: "ସିଫାରିଶ୍ ଶୁଣନ୍ତୁ (କୃଷକ ସ୍ୱର)",
      modeBtn: "କୃଷକ ସରଳ ମୋଡ୍: ବନ୍ଦ",
      tabDiagnostic: "ମାଟି ପରୀକ୍ଷା",
      tabCalculator: "ଖତ କାଲକୁଲେଟର",
      tabOrganic: "ଜୈବିକ ସୁଇଟ୍",
      tabCrops: "ଫସଲ ତାଲିକା",
      tabAiPrompt: "ଏଆଇ ସହାୟକ",
      btnSoilCard: "ସରକାରୀ ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଡ",
      heroTitle: "ଅଧିକ ଅମଳ ପାଇଁ ଉନ୍ନତ ସାର ସିଫାରିଶ୍",
      heroDesc: "ରାସାୟନିକ ସାର ସହ ଜୈବିକ ଖତ ଓ ଜୀବାଣୁ ରକ୍ଷାକୁ ମିଶାଇ ମାଟିର ଉର୍ବରତା ଏବଂ ଅମଳ ବୃଦ୍ଧି କରେ।",
      formHeading: "ମାଟି ପରୀକ୍ଷା ଓ ଜମି ବିବରଣୀ",
      badgeLive: "ଲାଇଭ୍ ଇଞ୍ଜିନ୍",
      colorPickerLabel: "ମାଟିର ରଙ୍ଗ ବାଛନ୍ତୁ:",
      presetLabel: "ତୁରନ୍ତ ସୁଝାବ ଲୋଡ୍ କରନ୍ତୁ:",
      labelCrop: "ମୁଖ୍ୟ ଫସଲ",
      labelStage: "ଫସଲ ଅବସ୍ଥା",
      labelLandSize: "ଜମିର ପରିମାଣ",
      labelSoilType: "ମାଟିର ପ୍ରକାର",
      divNpTitle: "ମୁଖ୍ୟ ମାଟି ପୋଷକ ତତ୍ତ୍ୱ (ଏନ୍.ପି.କେ.)",
      nameNitrogen: "ନାଇଟ୍ରୋଜେନ୍ (N) (କିଗ୍ରା/ହେକ୍ଟର)",
      namePhosphorus: "ଫସଫରସ୍ (P) (କିଗ୍ରା/ହେକ୍ଟର)",
      namePotassium: "ପୋଟାସିଅମ୍ (K) (କିଗ୍ରା/ହେକ୍ଟର)",
      lvlLow: "କମ୍ / ଅଭାବ",
      lvlMed: "ମଧ୍ୟମ",
      lvlHigh: "ଅଧିକ",
      lvlOpt: "ସନ୍ତୁଳିତ / ଉତ୍ତମ",
      lvlExc: "ଅତ୍ୟଧିକ",
      divChemistry: "ମାଟି ରସାୟନ ଓ ଜୈବିକ କାର୍ବନ୍",
      namePh: "ମାଟିର ପିଏଚ୍ (pH ଅଂକ)",
      phAcidic: "ଅମ୍ଳୀୟ (<6.0)",
      phNeutral: "ସାଧାରଣ (6.0-7.5)",
      phAlkaline: "କ୍ଷାରୀୟ (>7.5)",
      labelOc: "ଜୈବିକ କାର୍ବନ୍ (%)",
      labelMoisture: "ଓଦା ପରିମାଣ (%)",
      btnCalculate: "ସିଫାରିଶ୍ ଗ୍ରହଣ କରନ୍ତୁ",
      headingAssessment: "ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ ସୂଚକାଙ୍କ ମୂଲ୍ୟାଙ୍କନ",
      chartHeader: "ପୋଷକ ତତ୍ତ୍ୱ ସ୍ଥିତି ଓ ଫସଲ ଆବଶ୍ୟକତା",
      tableHeader: "ସନ୍ତୁଳିତ ରାସାୟନିକ ଓ ଜୈବିକ ସାର ତାଲିକା",
      thFertilizer: "ସାର / ଜୈବିକ ଉପାଦାନ",
      thCategory: "ପ୍ରକାର",
      thPerAcre: "ଏକର ପ୍ରତି",
      thTotalField: "ମୋଟ ଜମିର ପରିମାଣ",
      thMethod: "ଦେବାର ପ୍ରଣାଳୀ",
      ecoHeader: "ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ଓ ଜୈବିକ ମୃତ୍ତିକା କବଚ",
      ecoSub: "ଜିଆ ଓ ଉପକାରୀ ଜୀବାଣୁଙ୍କୁ ସୁରକ୍ଷିତ ରଖି ଅଧିକ ଅମଳ ଦିଏ।",
      timelineHeader: "ଫସଲ ପର୍ଯ୍ୟାୟାନୁସାରେ ସାର ସୂଚୀ",
      calcHeading: "ଖତ ବୋସ୍ତା କାଲକୁଲେଟର",
      calcSub: "ନିଜ ଜମି ପାଇଁ ୟୁରିଆ, ଡିଏପି ଓ ପୋଟାସ୍ର ସଠିକ୍ ବୋସ୍ତା ସଂଖ୍ୟା ହିସାବ କରନ୍ତୁ।"
    }
  };

  const PRESETS = {
    'wheat-depleted': { crop: 'wheat', n: 90, p: 25, k: 170, ph: 6.5, oc: 0.45 },
    'paddy-balanced': { crop: 'rice', n: 145, p: 32, k: 135, ph: 6.2, oc: 0.65 },
    'acidic-citrus': { crop: 'citrus', n: 180, p: 20, k: 210, ph: 4.8, oc: 0.50 },
    'alkaline-cotton': { crop: 'cotton', n: 130, p: 28, k: 140, ph: 8.4, oc: 0.40 }
  };

  const SOIL_COLOR_PROFILES = {
    black: { oc: 1.15, ph: 7.2, soilType: 'clay' },
    brown: { oc: 0.65, ph: 6.5, soilType: 'loamy' },
    red: { oc: 0.35, ph: 5.4, soilType: 'sandy' },
    yellow: { oc: 0.25, ph: 7.8, soilType: 'silt' }
  };

  const state = {
    lang: 'en',
    farmerMode: false,
    crop: 'wheat',
    stage: 'vegetative',
    landSize: 2.5,
    unit: 'acre',
    soilType: 'loamy',
    soilColor: 'black',
    n: 140,
    p: 22,
    k: 180,
    ph: 6.5,
    oc: 0.55,
    moisture: 45,
    theme: 'dark',
    weatherAdvisory: ''
  };

  // DOM Elements
  const elSelectLang = document.getElementById('select-lang');
  const elBtnVoice = document.getElementById('btn-voice-assistant');
  const elBtnMode = document.getElementById('btn-toggle-farmer-mode');
  const elBtnMicInput = document.getElementById('btn-mic-input');
  const elMicText = document.getElementById('mic-text');
  
  const elSelectCrop = document.getElementById('select-crop');
  const elSelectStage = document.getElementById('select-stage');
  const elInputLandSize = document.getElementById('input-land-size');
  const elSelectUnit = document.getElementById('select-unit');
  const elSelectSoilType = document.getElementById('select-soil-type');
  
  const elRangeN = document.getElementById('range-n');
  const elRangeP = document.getElementById('range-p');
  const elRangeK = document.getElementById('range-k');
  const elRangePh = document.getElementById('range-ph');
  const elRangeOc = document.getElementById('range-oc');
  const elRangeMoisture = document.getElementById('range-moisture');

  const elValN = document.getElementById('val-n');
  const elValP = document.getElementById('val-p');
  const elValK = document.getElementById('val-k');
  const elValPh = document.getElementById('val-ph');
  const elValOc = document.getElementById('val-oc');
  const elValMoisture = document.getElementById('val-moisture');

  const elBtnRecalculate = document.getElementById('btn-recalculate');
  const elThemeToggle = document.getElementById('theme-toggle');

  // Fetch Crops from REST API
  async function fetchCropsFromBackend() {
    try {
      const res = await fetch(`${API_BASE_URL}/crops`);
      const data = await res.json();
      if (data.success && data.crops) {
        populateCropSelect(data.crops);
        renderCropDatabaseCards(data.crops);
      }
    } catch (err) {
      console.warn("Backend API offline.", err);
    }
  }

  function populateCropSelect(crops) {
    elSelectCrop.innerHTML = '';
    crops.forEach(crop => {
      const opt = document.createElement('option');
      opt.value = crop.id;
      opt.textContent = `${crop.icon} ${crop.name}`;
      elSelectCrop.appendChild(opt);
    });
    elSelectCrop.value = state.crop;
  }

  // Initial Fetch Calls
  fetchCropsFromBackend();
  calculateAndRender();
  fetchSoilTipsData();
  fetchCropCalendarData('wheat');
  fetchDealersData();
  fetchWeatherAdvisoryData();

  // Multi-Language Switcher
  elSelectLang.addEventListener('change', (e) => {
    state.lang = e.target.value;
    applyLanguageTranslations();
    calculateAndRender();
  });

  function applyLanguageTranslations() {
    const dict = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    if (state.lang === 'or') {
      elBtnVoice.innerHTML = `<span class="pulse-ring"></span> 🔊 ସିଫାରିଶ୍ ଶୁଣନ୍ତୁ (କୃଷକ ସ୍ୱର)`;
      if (elMicText) elMicText.textContent = `କୁହନ୍ତୁ (Voice Input - ଭଏସ ଇନପୁଟ୍)`;
    } else {
      elBtnVoice.innerHTML = `<span class="pulse-ring"></span> 🔊 Read Out Recommendation (Farmer Voice)`;
      if (elMicText) elMicText.textContent = `Click & Speak Field Setup (Voice Input)`;
    }

    const modeText = state.farmerMode ? (state.lang === 'or' ? 'କୃଷକ ସରଳ ମୋଡ୍: ଚାଲୁ' : 'Farmer Easy Mode: ON') : (state.lang === 'or' ? 'କୃଷକ ସରଳ ମୋଡ୍: ବନ୍ଦ' : 'Farmer Easy Mode: OFF');
    elBtnMode.innerHTML = `👨‍🌾 ${modeText}`;
  }

  // =========================================================================
  // 1. VOICE-BASED INPUT (SpeechRecognition for Farmers)
  // =========================================================================
  if (elBtnMicInput) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      elBtnMicInput.addEventListener('click', () => {
        recognition.lang = state.lang === 'or' ? 'or-IN' : 'en-US';
        recognition.start();
        elBtnMicInput.classList.add('listening');
        if (elMicText) elMicText.textContent = state.lang === 'or' ? "🎙️ ଶୁଣୁଛୁ... (Speaking...)" : "🎙️ Listening... Speak your crop and land size";
        showToast(state.lang === 'or' ? "🎙️ କୃଷକ ଭଏସ ଇନପୁଟ୍ ସକ୍ରିୟ..." : "🎙️ Voice Input active! Speak now...");
      });

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log("Voice Transcript:", transcript);
        elBtnMicInput.classList.remove('listening');
        if (elMicText) elMicText.textContent = `" ${transcript} "`;

        // Parse transcript parameters
        if (transcript.includes('wheat') || transcript.includes('ଗହମ')) { state.crop = 'wheat'; elSelectCrop.value = 'wheat'; }
        else if (transcript.includes('rice') || transcript.includes('paddy') || transcript.includes('ଧାନ')) { state.crop = 'rice'; elSelectCrop.value = 'rice'; }
        else if (transcript.includes('cotton') || transcript.includes('କପା')) { state.crop = 'cotton'; elSelectCrop.value = 'cotton'; }

        const numMatch = transcript.match(/\d+(\.\d+)?/);
        if (numMatch) {
          state.landSize = parseFloat(numMatch[0]);
          elInputLandSize.value = state.landSize;
        }

        calculateAndRender();
        showToast(state.lang === 'or' ? "✅ ଭଏସ ଇନପୁଟ୍ ଅନୁସାରେ ଫର୍ମ ଅପଡେଟ୍ ହୋଇଛି!" : `✅ Voice recognized: "${transcript}" - Form updated!`);
      };

      recognition.onerror = () => {
        elBtnMicInput.classList.remove('listening');
        applyLanguageTranslations();
      };
    } else {
      elBtnMicInput.addEventListener('click', () => {
        showToast("⚠️ Speech Recognition not supported in this browser mode.");
      });
    }
  }

  // =========================================================================
  // 2. VOICE-BASED OUTPUT (SpeechSynthesis Audio Narration)
  // =========================================================================
  elBtnVoice.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const areaText = `${state.landSize} ${state.unit}`;
      let speechText = state.lang === 'or' 
        ? `ନମସ୍କାର କୃଷକ ଭାଇ, ଆପଣଙ୍କର ${areaText} ଜମି ପାଇଁ ନିମ୍ ୟୁରିଆ, ଡିଏପି ଏବଂ ଜୈବିକ ଖତର ସନ୍ତୁଳିତ ବ୍ୟବହାର କରିବାକୁ ସିଫାରିଶ୍ କରାଯାଉଛି। ${state.weatherAdvisory}`
        : `Hello Farmer! For your ${state.crop} crop on ${areaText}, we recommend a balanced prescription of Neem Coated Urea, DAP, and organic vermicompost to protect soil health. ${state.weatherAdvisory}`;
      
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      showToast(state.lang === 'or' ? "🔊 ସିଫାରିଶ ଓ ପାଣିପାଗ ସୂଚନା ଶୁଣାଯାଉଛି..." : "🔊 Speaking recommendation & weather advisory aloud...");
    }
  });

  // Toggle Farmer Mode
  elBtnMode.addEventListener('click', () => {
    state.farmerMode = !state.farmerMode;
    document.documentElement.setAttribute('data-mode', state.farmerMode ? 'farmer' : 'standard');
    applyLanguageTranslations();
  });

  // Soil Color Swatches
  document.querySelectorAll('.swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const colorKey = swatch.getAttribute('data-color');
      state.soilColor = colorKey;
      const profile = SOIL_COLOR_PROFILES[colorKey];
      if (profile) {
        state.oc = profile.oc; state.ph = profile.ph; state.soilType = profile.soilType;
        elRangeOc.value = state.oc; elValOc.textContent = state.oc + '%';
        elRangePh.value = state.ph; elValPh.textContent = state.ph;
        elSelectSoilType.value = state.soilType;
        calculateAndRender();
      }
    });
  });

  // Tab Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      
      const tabTarget = btn.getAttribute('data-tab');
      btn.classList.add('active');
      const pane = document.getElementById(`pane-${tabTarget}`);
      if (pane) pane.classList.add('active');
    });
  });

  // Input Range Listeners
  elRangeN.addEventListener('input', (e) => { elValN.textContent = e.target.value; state.n = parseFloat(e.target.value); });
  elRangeP.addEventListener('input', (e) => { elValP.textContent = e.target.value; state.p = parseFloat(e.target.value); });
  elRangeK.addEventListener('input', (e) => { elValK.textContent = e.target.value; state.k = parseFloat(e.target.value); });
  elRangePh.addEventListener('input', (e) => { elValPh.textContent = e.target.value; state.ph = parseFloat(e.target.value); });
  elRangeOc.addEventListener('input', (e) => { elValOc.textContent = e.target.value + '%'; state.oc = parseFloat(e.target.value); });
  elRangeMoisture.addEventListener('input', (e) => { elValMoisture.textContent = e.target.value + '%'; state.moisture = parseFloat(e.target.value); });

  elSelectCrop.addEventListener('change', (e) => { state.crop = e.target.value; });
  elSelectStage.addEventListener('change', (e) => { state.stage = e.target.value; });
  elInputLandSize.addEventListener('input', (e) => { state.landSize = parseFloat(e.target.value) || 1; });
  elSelectUnit.addEventListener('change', (e) => { state.unit = e.target.value; });
  elSelectSoilType.addEventListener('change', (e) => { state.soilType = e.target.value; });

  elBtnRecalculate.addEventListener('click', () => {
    calculateAndRender();
    showToast(state.lang === 'or' ? '⚡ ନୂତନ ସିଫାରିଶ୍ ଫେଚ୍ ହୋଇଛି!' : '⚡ Fetched fresh prescription from Backend REST API!');
  });

  elThemeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
  });

  // Presets
  document.querySelectorAll('.btn-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.getAttribute('data-preset');
      const data = PRESETS[presetKey];
      if (!data) return;

      state.crop = data.crop;
      state.n = data.n; state.p = data.p; state.k = data.k; state.ph = data.ph; state.oc = data.oc;

      elSelectCrop.value = state.crop;
      elRangeN.value = state.n; elValN.textContent = state.n;
      elRangeP.value = state.p; elValP.textContent = state.p;
      elRangeK.value = state.k; elValK.textContent = state.k;
      elRangePh.value = state.ph; elValPh.textContent = state.ph;
      elRangeOc.value = state.oc; elValOc.textContent = state.oc + '%';

      calculateAndRender();
    });
  });

  // =========================================================================
  // WEATHER-BASED FERTILIZER ADVISORY REST API (GET /api/weather-iot)
  // =========================================================================
  async function fetchWeatherAdvisoryData() {
    try {
      const res = await fetch(`${API_BASE_URL}/weather-iot`);
      const data = await res.json();
      if (data.success && data.aiLeachingRisk) {
        state.weatherAdvisory = state.lang === 'or' ? data.aiLeachingRisk.odiaAdvisory : data.aiLeachingRisk.advisory;
        
        const diagTitle = document.getElementById('diag-weather-title');
        const diagDesc = document.getElementById('diag-weather-desc');
        if (diagTitle && diagDesc) {
          diagTitle.textContent = state.lang === 'or' ? `🌦️ ପାଣିପାଗ ଅନୁସାରେ ସାର ଦେବାର ସମୟ ସୂଚନା` : `🌦️ Weather-Based Fertilizer Timing Advisory`;
          diagDesc.textContent = state.weatherAdvisory;
        }

        document.getElementById('weather-risk-title').textContent = `AI Rain Risk: ${data.aiLeachingRisk.riskLevel}`;
        document.getElementById('weather-advisory').textContent = data.aiLeachingRisk.advisory;
      }
    } catch (err) {
      console.warn("Weather API error", err);
    }
  }

  // DIAGNOSTIC REST API
  async function calculateAndRender() {
    try {
      const res = await fetch(`${API_BASE_URL}/diagnose`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      });
      const data = await res.json();
      if (data.success) renderBackendResults(data);
    } catch (err) {
      console.warn("Backend API offline.", err);
    }
  }

  function renderBackendResults(data) {
    const { crop, shiScore, deficits, prescriptions, timeline, amendmentText, potentialYieldBoostPct } = data;

    const elShiScore = document.getElementById('shi-score');
    const elShiMeter = document.getElementById('shi-meter');
    if (elShiScore && elShiMeter) {
      elShiScore.textContent = shiScore;
      const offset = 314 - (314 * shiScore) / 100;
      elShiMeter.style.strokeDashoffset = offset;
    }

    document.getElementById('res-crop-name').textContent = `${crop.icon} ${crop.name}`;
    document.getElementById('res-land-display').textContent = `${state.landSize} ${state.unit === 'acre' ? 'Acres' : 'Hectares'}`;
    
    const healthStatusEl = document.getElementById('res-health-status');
    if (shiScore >= 80) {
      healthStatusEl.textContent = state.lang === 'or' ? 'ଉତ୍ତମ ସ୍ୱାସ୍ଥ୍ୟ' : 'Optimal Health';
      healthStatusEl.className = 'badge badge-status optimal';
    } else if (shiScore >= 60) {
      healthStatusEl.textContent = state.lang === 'or' ? 'ମଧ୍ୟମ ସନ୍ତୁଳନ' : 'Moderate Balance';
      healthStatusEl.className = 'badge badge-status';
    } else {
      healthStatusEl.textContent = state.lang === 'or' ? 'ସତର୍କତା ଅଭାବ' : 'High Deficit Alert';
      healthStatusEl.className = 'badge badge-status deficit';
    }

    document.getElementById('res-yield-boost').textContent = `+${potentialYieldBoostPct}% Potential`;

    updateBar('n', state.n, crop.targetN, deficits.n);
    updateBar('p', state.p, crop.targetP, deficits.p);
    updateBar('k', state.k, crop.targetK, deficits.k);

    const tbody = document.getElementById('prescription-tbody');
    tbody.innerHTML = '';
    prescriptions.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="fert-name">${item.name}</td>
        <td><span class="badge ${item.category.includes('Organic') || item.category.includes('Bio') ? 'badge-organic' : 'badge-crop'}">${item.category}</span></td>
        <td>${item.perAcre}</td>
        <td class="fert-qty">${item.totalField}</td>
        <td>${item.method}</td>
      `;
      tbody.appendChild(tr);
    });

    const stepperContainer = document.getElementById('timeline-stepper');
    if (stepperContainer) {
      stepperContainer.innerHTML = '';
      timeline.forEach(s => {
        const div = document.createElement('div');
        div.className = 'step-card';
        div.innerHTML = `
          <span class="step-phase">${s.phase}</span>
          <h5 class="step-title">${s.title}</h5>
          <p class="step-desc">${s.desc}</p>
        `;
        stepperContainer.appendChild(div);
      });
    }

    document.getElementById('amendment-text').textContent = amendmentText;
    updateSoilHealthCardModal(crop, prescriptions, shiScore);
  }

  function updateBar(nutrient, current, target, deficit) {
    const pct = Math.min(100, Math.round((current / target) * 100));
    const fillEl = document.getElementById(`bar-${nutrient}`);
    const statsEl = document.getElementById(`stats-${nutrient}`);
    const defEl = document.getElementById(`def-${nutrient}`);

    if (fillEl) fillEl.style.width = `${pct}%`;
    if (statsEl) statsEl.textContent = `Current: ${current} | Target: ${target} kg/ha`;
    
    if (defEl) {
      if (deficit > 0) {
        defEl.textContent = `-${deficit.toFixed(0)} kg/ha Deficit`;
        defEl.className = 'deficit-badge';
      } else {
        defEl.textContent = 'Optimal Level';
        defEl.className = 'deficit-badge optimal';
      }
    }
  }

  // SOIL TIPS API
  async function fetchSoilTipsData() {
    try {
      const res = await fetch(`${API_BASE_URL}/soil-tips`);
      const data = await res.json();
      if (data.success && data.tips) {
        const grid = document.getElementById('soil-tips-grid');
        if (!grid) return;
        grid.innerHTML = '';
        data.tips.forEach(t => {
          grid.innerHTML += `
            <div class="crop-card">
              <div class="crop-card-header">
                <div class="crop-icon-bubble">${t.icon}</div>
                <div>
                  <h3>${t.title}</h3>
                  <span class="badge badge-organic">${t.category}</span>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${t.desc}</p>
            </div>
          `;
        });
      }
    } catch (err) {
      console.warn("Soil Tips API error", err);
    }
  }

  // CROP CALENDAR API
  const calendarCropSelect = document.getElementById('calendar-crop-select');
  if (calendarCropSelect) {
    calendarCropSelect.addEventListener('change', (e) => {
      fetchCropCalendarData(e.target.value);
    });
  }

  async function fetchCropCalendarData(cropKey) {
    try {
      const res = await fetch(`${API_BASE_URL}/crop-calendar?crop=${cropKey}`);
      const data = await res.json();
      if (data.success && data.calendar) {
        document.getElementById('calendar-season-title').textContent = `${data.calendar.cropName} - ${data.calendar.season}`;
        const container = document.getElementById('calendar-timeline-container');
        if (!container) return;
        container.innerHTML = '';

        data.calendar.schedule.forEach(s => {
          container.innerHTML += `
            <div class="step-card">
              <span class="step-phase">${s.month} (${s.status})</span>
              <h5 class="step-title">${s.activity}</h5>
              <p class="step-desc">${s.fert}</p>
            </div>
          `;
        });
      }
    } catch (err) {
      console.warn("Crop Calendar API error", err);
    }
  }

  // NEAREST DEALER LOCATOR API
  async function fetchDealersData() {
    try {
      const res = await fetch(`${API_BASE_URL}/dealers`);
      const data = await res.json();
      if (data.success && data.dealers) {
        const container = document.getElementById('dealer-list-container');
        if (!container) return;
        container.innerHTML = '';

        data.dealers.forEach(d => {
          container.innerHTML += `
            <div class="dealer-card">
              <div class="dealer-header">
                <div>
                  <span class="dealer-name">${d.name}</span>
                  <p style="font-size: 0.8rem; color: var(--text-muted);">${d.address} • ${d.type}</p>
                </div>
                <span class="dealer-distance">📍 ${d.distance}</span>
              </div>
              <div class="dealer-stock-tags">
                <span class="stock-tag">Neem Urea: ${d.stock.urea}</span>
                <span class="stock-tag">DAP: ${d.stock.dap}</span>
                <span class="stock-tag">Vermicompost: ${d.stock.vermicompost}</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.35rem;">
                <span style="font-size: 0.8rem; color: var(--accent-gold);">${d.rating}</span>
                <a href="tel:${d.phone}" class="btn-preset" style="text-decoration: none; display: inline-block;">📞 Call Dealer</a>
              </div>
            </div>
          `;
        });
      }
    } catch (err) {
      console.warn("Dealers API error", err);
    }
  }

  function renderCropDatabaseCards(crops) {
    const grid = document.getElementById('crops-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    crops.forEach(crop => {
      const card = document.createElement('div');
      card.className = 'crop-card';
      card.innerHTML = `
        <div class="crop-card-header">
          <div class="crop-icon-bubble">${crop.icon}</div>
          <div>
            <h3>${crop.name}</h3>
            <p>${crop.scientific}</p>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${crop.desc}</p>
        <div class="crop-stats-row">
          <div class="crop-stat"><span>Target N</span><strong class="n-color">${crop.targetN} kg/ha</strong></div>
          <div class="crop-stat"><span>Target P</span><strong class="p-color">${crop.targetP} kg/ha</strong></div>
          <div class="crop-stat"><span>Target K</span><strong class="k-color">${crop.targetK} kg/ha</strong></div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function updateSoilHealthCardModal(crop, prescriptions, shiScore) {
    document.getElementById('shc-crop').textContent = crop.name;
    document.getElementById('shc-area').textContent = `${state.landSize} ${state.unit.toUpperCase()}(S)`;
    document.getElementById('shc-shi').textContent = `${shiScore} / 100`;

    const prescTbody = document.getElementById('shc-prescription-tbody');
    if (prescTbody && prescriptions) {
      prescTbody.innerHTML = '';
      prescriptions.forEach(p => {
        prescTbody.innerHTML += `<tr><td>${p.name}</td><td>${p.category}</td><td>${p.perAcre}</td><td>${p.totalField}</td></tr>`;
      });
    }
  }

  // Modal Handlers
  const modalSoilCard = document.getElementById('soil-card-modal');
  const btnOpenModal = document.getElementById('btn-open-soil-card');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnPrintCard = document.getElementById('btn-print-card');

  if (btnOpenModal) btnOpenModal.addEventListener('click', () => modalSoilCard.classList.add('active'));
  if (btnCloseModal) btnCloseModal.addEventListener('click', () => modalSoilCard.classList.remove('active'));
  if (btnPrintCard) btnPrintCard.addEventListener('click', () => window.print());

  function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

});
