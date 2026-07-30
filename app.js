/* ==========================================================================
   AgroPulse Kisan - Farmer-Friendly Eco-Organic Engine & App Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. MULTI-LANGUAGE DICTIONARY (English, Hindi, Spanish)
  // =========================================================================
  const TRANSLATIONS = {
    en: {
      tagline: "Farmer Precision & Eco-Organic Fertilizer System",
      langLabel: "Language / भाषा:",
      voiceBtn: "Read Out Recommendation (Farmer Voice)",
      modeBtn: "Farmer Easy Mode: OFF",
      tabDiagnostic: "Soil Diagnostic Studio",
      tabCalculator: "Dosage Calculator",
      tabOrganic: "Eco-Organic Bio-Suite",
      tabCrops: "Crop Database",
      tabAiPrompt: "AI Prompt Suite",
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
      btnCalculate: "Calculate Precision & Organic Recommendation",
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
    hi: {
      tagline: "किसान सटीक और जैविक उर्वरक परामर्श प्रणाली",
      langLabel: "भाषा / Language:",
      voiceBtn: "सिफारिश बोलकर सुनें (किसान आवाज)",
      modeBtn: "किसान सरल मोड: बंद",
      tabDiagnostic: "मिट्टी जांच स्टूडियो",
      tabCalculator: "खाद मात्रा कैलकुलेटर",
      tabOrganic: "जैविक खाद एवं सुरक्षा",
      tabCrops: "फसल डेटाबेस",
      tabAiPrompt: "एआई प्रॉम्प्ट सहायता",
      btnSoilCard: "सरकारी मृदा स्वास्थ्य कार्ड",
      heroTitle: "उच्च पैदावार के लिए स्मार्ट उर्वरक सिफारिश",
      heroDesc: "रासायनिक शुद्धता को जैविक वर्मीकंपोस्ट, जैव-उर्वरकों और मिट्टी के रोगाणु सुरक्षा के साथ जोड़ता है।",
      formHeading: "मिट्टी जांच एवं खेत का ब्योरा",
      badgeLive: "लाइव इंजन",
      colorPickerLabel: "मिट्टी का रंग चुनें:",
      presetLabel: "त्वरित सुझाव लोड करें:",
      labelCrop: "मुख्य फसल",
      labelStage: "फसल की अवस्था",
      labelLandSize: "ज़मीन का क्षेत्रफल",
      labelSoilType: "मिट्टी का प्रकार",
      divNpTitle: "मुख्य पोषक तत्व (एन.पी.के.)",
      nameNitrogen: "नाइट्रोजन (N) (किग्रा/हेक्टेयर)",
      namePhosphorus: "फास्फोरस (P) (किग्रा/हेक्टेयर)",
      namePotassium: "पोटेशियम (K) (किग्रा/हेक्टेयर)",
      lvlLow: "कम / कमी",
      lvlMed: "मध्यम",
      lvlHigh: "अधिक",
      lvlOpt: "उत्तम / संतुलित",
      lvlExc: "अत्यधिक",
      divChemistry: "मिट्टी रसायन एवं जैविक कार्बन",
      namePh: "मिट्टी का पीएच (अम्लीय/क्षारीय)",
      phAcidic: "अम्लीय (<6.0)",
      phNeutral: "उदासीन (6.0-7.5)",
      phAlkaline: "क्षारीय (>7.5)",
      labelOc: "जैविक कार्बन (%)",
      labelMoisture: "नमी का स्तर (%)",
      btnCalculate: "सटीक उर्वरक एवं जैविक सिफारिश निकालें",
      headingAssessment: "मृदा स्वास्थ्य सूचकांक मूल्यांकन",
      chartHeader: "पोषक तत्व स्थिति बनाम फसल आवश्यकता",
      tableHeader: "संतुलित रासायनिक एवं जैविक खाद सिफारिश",
      thFertilizer: "खाद / जैविक इनपुट",
      thCategory: "प्रकार",
      thPerAcre: "प्रति एकड़",
      thTotalField: "कुल खेत की मात्रा",
      thMethod: "देने का तरीका",
      ecoHeader: "फसल स्वास्थ्य एवं जैविक मृदा कवच",
      ecoSub: "केचुओं और मिट्टी के मित्र जीवाणुओं की रक्षा करते हुए अधिक उपज देता है।",
      timelineHeader: "फसल विकास चरणानुसार खाद सारणी",
      calcHeading: "कस्टम खाद बोरी कैलकुलेटर",
      calcSub: "अपनी ज़मीन के अनुसार यूरिया, डीएपी और पोटाश की सटीक बोरी की संख्या निकालें।"
    },
    es: {
      tagline: "Sistema de Recomendación de Fertilizantes Agrícolas y Eco-Orgánicos",
      langLabel: "Idioma / Language:",
      voiceBtn: "Escuchar Recomendación (Voz)",
      modeBtn: "Modo Agricultor Fácil: OFF",
      tabDiagnostic: "Estudio de Diagnóstico de Suelo",
      tabCalculator: "Calculadora de Dosis",
      tabOrganic: "Suite Bio-Orgánica",
      tabCrops: "Base de Datos de Cultivos",
      tabAiPrompt: "Suite de Prompts IA",
      btnSoilCard: "Tarjeta Oficial de Salud del Suelo",
      heroTitle: "Recomendación Inteligente para Alto Rendimiento",
      heroDesc: "Combina la precisión química con compost orgánico y biofertilizantes para proteger el suelo.",
      formHeading: "Configuración del Suelo y Campo",
      badgeLive: "Motor en Vivo",
      colorPickerLabel: "Color del Suelo:",
      presetLabel: "Cargar Ajustes Rápidos:",
      labelCrop: "Cultivo Objetivo",
      labelStage: "Etapa de Crecimiento",
      labelLandSize: "Tamaño del Terreno",
      labelSoilType: "Tipo de Suelo",
      divNpTitle: "Nutrientes Principales (NPK)",
      nameNitrogen: "Nitrógeno (kg/ha)",
      namePhosphorus: "Fósforo (kg/ha)",
      namePotassium: "Potasio (kg/ha)",
      lvlLow: "Deficiente / Bajo",
      lvlMed: "Medio",
      lvlHigh: "Alto",
      lvlOpt: "Óptimo",
      lvlExc: "Exceso",
      divChemistry: "Química del Suelo y Carbono Orgánico",
      namePh: "Acidez/Alcalinidad del Suelo (pH)",
      phAcidic: "Ácido (<6.0)",
      phNeutral: "Neutro (6.0-7.5)",
      phAlkaline: "Alcalino (>7.5)",
      labelOc: "Carbono Orgánico (%)",
      labelMoisture: "Nivel de Humedad (%)",
      btnCalculate: "Calcular Recomendación Precisa y Orgánica",
      headingAssessment: "Evaluación de Salud del Suelo",
      chartHeader: "Estado de Nutrientes vs Requisito",
      tableHeader: "Prescripción Química y Orgánica Balanceada",
      thFertilizer: "Fertilizante / Bio-Insumo",
      thCategory: "Tipo",
      thPerAcre: "Por Acre",
      thTotalField: "Cantidad Total del Campo",
      thMethod: "Método de Aplicación",
      ecoHeader: "Escudo Bio-Orgánico de Salud de Cultivos",
      ecoSub: "Protege las lombrices de tierra y la biomasa microbiana del suelo.",
      timelineHeader: "Calendario de Aplicación por Etapas",
      calcHeading: "Calculadora de Mezcla de Fertilizantes",
      calcSub: "Convierta los requisitos de nutrientes en sacos comerciales de 50 kg."
    }
  };

  // =========================================================================
  // 2. CROP DATABASE (kg/ha benchmarks)
  // =========================================================================
  const CROP_DATABASE = {
    wheat: {
      name: "Wheat (Triticum aestivum)",
      icon: "🌾",
      scientific: "Triticum aestivum",
      targetN: 180,
      targetP: 30,
      targetK: 160,
      phMin: 6.0,
      phMax: 7.5,
      phOptimum: 6.5,
      stages: ["Basal (At Sowing)", "Crown Root Initiation (21 DAT)", "Tillering & Jointing", "Flowering & Grain Filling"],
      yieldMax: "5.5 Tons/Ha",
      desc: "High nitrogen responsive cereal crop. Requires balanced phosphorus for tillering and root strength."
    },
    rice: {
      name: "Rice / Paddy (Oryza sativa)",
      icon: "🍚",
      scientific: "Oryza sativa",
      targetN: 150,
      targetP: 35,
      targetK: 140,
      phMin: 5.5,
      phMax: 7.2,
      phOptimum: 6.2,
      stages: ["Basal Sowing/Transplanting", "Active Tillering (30 DAT)", "Panicle Initiation", "Heading & Grain Filling"],
      yieldMax: "6.8 Tons/Ha",
      desc: "Stagnant water crop requiring split nitrogen and Zinc Sulfate to prevent Khaira disease."
    },
    maize: {
      name: "Maize / Corn (Zea mays)",
      icon: "🌽",
      scientific: "Zea mays",
      targetN: 200,
      targetP: 40,
      targetK: 180,
      phMin: 5.8,
      phMax: 7.8,
      phOptimum: 6.8,
      stages: ["Basal Sowing", "Knee-High Stage (V6)", "Tasseling & Silking (VT)", "Grain Filling (R3)"],
      yieldMax: "8.5 Tons/Ha",
      desc: "Heavy feeder crop responsive to high N-P-K levels. Zinc deficiency causes white bud disease."
    },
    cotton: {
      name: "Cotton (Gossypium hirsutum)",
      icon: "☁️",
      scientific: "Gossypium hirsutum",
      targetN: 160,
      targetP: 35,
      targetK: 150,
      phMin: 6.0,
      phMax: 8.2,
      phOptimum: 7.2,
      stages: ["Basal Sowing", "Square Formation (30-45 DAT)", "Peak Flowering & Squaring", "Boll Development"],
      yieldMax: "3.2 Tons/Ha",
      desc: "Requires potassium for lint strength and fiber quality. Excess N causes vegetative overgrowth."
    },
    sugarcane: {
      name: "Sugarcane (Saccharum officinarum)",
      icon: "🎋",
      scientific: "Saccharum officinarum",
      targetN: 280,
      targetP: 50,
      targetK: 240,
      phMin: 6.0,
      phMax: 8.0,
      phOptimum: 6.8,
      stages: ["Basal Planting", "Formative Stage (60-90 DAT)", "Grand Growth Phase (120-180 DAT)", "Ripening & Maturity"],
      yieldMax: "110 Tons/Ha",
      desc: "Long duration crop with massive potassium demand to enhance sucrose accumulation."
    },
    tomato: {
      name: "Tomato (Solanum lycopersicum)",
      icon: "🍅",
      scientific: "Solanum lycopersicum",
      targetN: 170,
      targetP: 45,
      targetK: 220,
      phMin: 6.0,
      phMax: 7.0,
      phOptimum: 6.5,
      stages: ["Transplanting Basal", "Early Vegetative", "First Fruit Set", "Peak Harvest"],
      yieldMax: "45 Tons/Ha",
      desc: "High potassium requirement during fruiting. Adequate calcium prevents blossom end rot."
    },
    potato: {
      name: "Potato (Solanum tuberosum)",
      icon: "🥔",
      scientific: "Solanum tuberosum",
      targetN: 190,
      targetP: 50,
      targetK: 230,
      phMin: 5.2,
      phMax: 6.5,
      phOptimum: 5.8,
      stages: ["Planting Basal", "Emergence & Tuber Initiation", "Tuber Bulking Phase", "Maturation"],
      yieldMax: "35 Tons/Ha",
      desc: "Prefers slightly acidic soil to prevent scab. High potassium boosts tuber bulking."
    },
    citrus: {
      name: "Citrus / Orange (Citrus sinensis)",
      icon: "🍊",
      scientific: "Citrus sinensis",
      targetN: 220,
      targetP: 40,
      targetK: 260,
      phMin: 5.5,
      phMax: 7.5,
      phOptimum: 6.4,
      stages: ["Post-Harvest / Winter Basal", "Spring Flush & Flowering", "Fruit Development", "Pre-Harvest"],
      yieldMax: "28 Tons/Ha",
      desc: "Perennial fruit crop highly responsive to foliar micronutrient sprays (Zinc & Iron)."
    }
  };

  // Quick Presets
  const PRESETS = {
    'wheat-depleted': { crop: 'wheat', n: 90, p: 25, k: 170, ph: 6.5, oc: 0.45 },
    'paddy-balanced': { crop: 'rice', n: 145, p: 32, k: 135, ph: 6.2, oc: 0.65 },
    'acidic-citrus': { crop: 'citrus', n: 180, p: 20, k: 210, ph: 4.8, oc: 0.50 },
    'alkaline-cotton': { crop: 'cotton', n: 130, p: 28, k: 140, ph: 8.4, oc: 0.40 }
  };

  // Soil Color Defaults
  const SOIL_COLOR_PROFILES = {
    black: { oc: 1.15, ph: 7.2, soilType: 'clay' },
    brown: { oc: 0.65, ph: 6.5, soilType: 'loamy' },
    red: { oc: 0.35, ph: 5.4, soilType: 'sandy' },
    yellow: { oc: 0.25, ph: 7.8, soilType: 'silt' }
  };

  // =========================================================================
  // 3. STATE MANAGEMENT
  // =========================================================================
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
    theme: 'dark'
  };

  // DOM Elements
  const elSelectLang = document.getElementById('select-lang');
  const elBtnVoice = document.getElementById('btn-voice-assistant');
  const elBtnMode = document.getElementById('btn-toggle-farmer-mode');
  
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

  // Populate Crop Select Options
  function populateCropSelect() {
    elSelectCrop.innerHTML = '';
    Object.keys(CROP_DATABASE).forEach(key => {
      const crop = CROP_DATABASE[key];
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = `${crop.icon} ${crop.name}`;
      elSelectCrop.appendChild(opt);
    });
    elSelectCrop.value = state.crop;
  }

  // =========================================================================
  // 4. INITIALIZATION & EVENT HANDLERS
  // =========================================================================
  populateCropSelect();
  renderCropDatabaseCards();
  calculateAndRender();

  // Multi-Language Switcher
  elSelectLang.addEventListener('change', (e) => {
    state.lang = e.target.value;
    applyLanguageTranslations();
    calculateAndRender();
    showToast(`Language switched to: ${e.target.options[e.target.selectedIndex].text}`);
  });

  function applyLanguageTranslations() {
    const dict = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update voice button text
    if (state.lang === 'hi') elBtnVoice.innerHTML = `<span class="pulse-ring"></span> 🔊 सिफारिश बोलकर सुनें (किसान आवाज)`;
    else if (state.lang === 'es') elBtnVoice.innerHTML = `<span class="pulse-ring"></span> 🔊 Escuchar Recomendación (Voz)`;
    else elBtnVoice.innerHTML = `<span class="pulse-ring"></span> 🔊 Read Out Recommendation (Farmer Voice)`;

    // Update Mode Button text
    const modeText = state.farmerMode ? (state.lang === 'hi' ? 'किसान सरल मोड: चालू' : 'Farmer Easy Mode: ON') : (state.lang === 'hi' ? 'किसान सरल मोड: बंद' : 'Farmer Easy Mode: OFF');
    elBtnMode.innerHTML = `👨‍🌾 ${modeText}`;
  }

  // Voice Speech Reader Handler
  elBtnVoice.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech

      const cropData = CROP_DATABASE[state.crop] || CROP_DATABASE.wheat;
      const areaText = `${state.landSize} ${state.unit}`;

      let speechText = "";
      if (state.lang === 'hi') {
        speechText = `नमस्ते किसान भाई! आपकी ${cropData.name} फसल और ${areaText} ज़मीन के लिए सिफारिश इस प्रकार है: नीम लेपित यूरिया 1.5 बोरी, डीएपी 1 बोरी, और 2 ट्रॉली जैविक वर्मीकंपोस्ट डालें। इससे आपकी मिट्टी उपजाऊ रहेगी और अच्छी पैदावार मिलेगी।`;
      } else if (state.lang === 'es') {
        speechText = `¡Hola agricultor! Para su cultivo de ${cropData.name} en ${areaText}, le recomendamos aplicar Urea recubierta de Neem, DAP y compost orgánico para proteger su suelo y maximizar su cosecha.`;
      } else {
        speechText = `Hello Farmer! For your ${cropData.name} crop on ${areaText}, we recommend a balanced prescription of Neem Coated Urea, DAP, and 2 tons of organic vermicompost to protect soil health and maximize yield.`;
      }

      const utterance = new SpeechSynthesisUtterance(speechText);
      if (state.lang === 'hi') utterance.lang = 'hi-IN';
      else if (state.lang === 'es') utterance.lang = 'es-ES';
      else utterance.lang = 'en-US';

      utterance.rate = 0.9; // Slightly slower for clarity
      window.speechSynthesis.speak(utterance);

      showToast("🔊 Speaking recommendation aloud...");
    } else {
      showToast("⚠️ Speech Synthesis is not supported in your browser.");
    }
  });

  // Toggle Farmer Easy Mode
  elBtnMode.addEventListener('click', () => {
    state.farmerMode = !state.farmerMode;
    document.documentElement.setAttribute('data-mode', state.farmerMode ? 'farmer' : 'standard');
    applyLanguageTranslations();
    showToast(state.farmerMode ? "👨‍🌾 Farmer Easy Mode Activated!" : "Standard Mode Activated");
  });

  // Soil Color Swatches Handler
  document.querySelectorAll('.swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const colorKey = swatch.getAttribute('data-color');
      state.soilColor = colorKey;
      const profile = SOIL_COLOR_PROFILES[colorKey];
      if (profile) {
        state.oc = profile.oc;
        state.ph = profile.ph;
        state.soilType = profile.soilType;

        elRangeOc.value = state.oc; elValOc.textContent = state.oc + '%';
        elRangePh.value = state.ph; elValPh.textContent = state.ph;
        elSelectSoilType.value = state.soilType;

        calculateAndRender();
        showToast(`Selected Soil: ${colorKey.toUpperCase()} Color Profile`);
      }
    });
  });

  // Tab Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      
      const tabTarget = btn.getAttribute('data-tab');
      btn.classList.add('active');
      const pane = document.getElementById(`pane-${tabTarget}`);
      if (pane) pane.classList.add('active');

      if (tabTarget === 'ai-prompt') {
        updateDynamicPromptText();
      }
    });
  });

  // Input Range Event Listeners
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
    showToast('✨ Precision recommendation updated!');
  });

  // Theme Toggle
  elThemeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
  });

  // Preset Buttons
  document.querySelectorAll('.btn-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.getAttribute('data-preset');
      const data = PRESETS[presetKey];
      if (!data) return;

      state.crop = data.crop;
      state.n = data.n;
      state.p = data.p;
      state.k = data.k;
      state.ph = data.ph;
      state.oc = data.oc;

      elSelectCrop.value = state.crop;
      elRangeN.value = state.n; elValN.textContent = state.n;
      elRangeP.value = state.p; elValP.textContent = state.p;
      elRangeK.value = state.k; elValK.textContent = state.k;
      elRangePh.value = state.ph; elValPh.textContent = state.ph;
      elRangeOc.value = state.oc; elValOc.textContent = state.oc + '%';

      calculateAndRender();
      showToast(`Loaded Preset: ${btn.textContent.trim()}`);
    });
  });

  // =========================================================================
  // 5. CORE DIAGNOSTIC & ECO-ORGANIC RECOMMENDATION ENGINE
  // =========================================================================
  function calculateAndRender() {
    const cropData = CROP_DATABASE[state.crop] || CROP_DATABASE.wheat;
    
    // 1. Calculate Nutrient Deficits (kg/ha)
    const defN = Math.max(0, cropData.targetN - state.n);
    const defP = Math.max(0, cropData.targetP - state.p);
    const defK = Math.max(0, cropData.targetK - state.k);

    // 2. Calculate Soil Health Index (0-100 Score)
    const nRatio = Math.min(1.2, state.n / cropData.targetN);
    const pRatio = Math.min(1.2, state.p / cropData.targetP);
    const kRatio = Math.min(1.2, state.k / cropData.targetK);

    let phScore = 1.0;
    if (state.ph < cropData.phMin) phScore = Math.max(0.5, 1 - (cropData.phMin - state.ph) * 0.2);
    else if (state.ph > cropData.phMax) phScore = Math.max(0.5, 1 - (state.ph - cropData.phMax) * 0.2);

    const npkAvg = (nRatio + pRatio + kRatio) / 3;
    const shiScore = Math.round(npkAvg * 80 * phScore + (state.oc * 10));
    const finalSHI = Math.min(100, Math.max(20, shiScore));

    // Update Radial Score Meter
    const elShiScore = document.getElementById('shi-score');
    const elShiMeter = document.getElementById('shi-meter');
    if (elShiScore && elShiMeter) {
      elShiScore.textContent = finalSHI;
      const offset = 314 - (314 * finalSHI) / 100;
      elShiMeter.style.strokeDashoffset = offset;
    }

    // Update Overview Text
    document.getElementById('res-crop-name').textContent = `${cropData.icon} ${cropData.name}`;
    document.getElementById('res-land-display').textContent = `${state.landSize} ${state.unit === 'acre' ? 'Acres' : 'Hectares'}`;
    
    const healthStatusEl = document.getElementById('res-health-status');
    if (finalSHI >= 80) {
      healthStatusEl.textContent = 'Optimal Health';
      healthStatusEl.className = 'badge badge-status optimal';
    } else if (finalSHI >= 60) {
      healthStatusEl.textContent = 'Moderate Balance';
      healthStatusEl.className = 'badge badge-status';
    } else {
      healthStatusEl.textContent = 'High Deficit Alert';
      healthStatusEl.className = 'badge badge-status deficit';
    }

    // Microbial Hero Indicator
    const heroMicrobialVal = document.getElementById('hero-microbial-val');
    if (heroMicrobialVal) {
      const microPct = Math.min(99, Math.round(state.oc * 120 + 20));
      heroMicrobialVal.textContent = `${microPct}% Healthy`;
    }

    // Summary Text
    let summaryText = ``;
    if (defN > 30) summaryText += `Nitrogen is deficient (${defN.toFixed(0)} kg/ha required). `;
    else summaryText += `Nitrogen is near optimal. `;

    if (defP > 10) summaryText += `Phosphorus deficit detected (${defP.toFixed(0)} kg/ha P₂O₅). `;
    if (defK > 20) summaryText += `Potassium deficit detected (${defK.toFixed(0)} kg/ha K₂O). `;

    document.getElementById('res-summary-desc').textContent = summaryText || 'Soil nutrient levels match target crop benchmarks perfectly!';
    document.getElementById('res-ph-status').textContent = `pH ${state.ph} (${phScore >= 0.9 ? 'Optimal' : (state.ph < 6 ? 'Acidic' : 'Alkaline')})`;
    
    const yieldBoost = Math.round((1 - (finalSHI/100)) * 30 + 10);
    document.getElementById('res-yield-boost').textContent = `+${yieldBoost}% Potential`;

    // 3. Render Nutrient Progress Bars
    updateBar('n', state.n, cropData.targetN, defN);
    updateBar('p', state.p, cropData.targetP, defP);
    updateBar('k', state.k, cropData.targetK, defK);

    // 4. Calculate Chemical + Organic Prescriptions
    let dapKgPerHa = defP > 0 ? (defP / 0.46) : 0;
    const nFromDap = dapKgPerHa * 0.18;
    const remN = Math.max(0, defN - nFromDap);
    let ureaKgPerHa = remN > 0 ? (remN / 0.46) : 0;
    let mopKgPerHa = defK > 0 ? (defK / 0.60) : 0;

    // Convert to per Acre values
    const perAcreFactor = 1 / 2.471;
    const ureaPerAcre = ureaKgPerHa * perAcreFactor;
    const dapPerAcre = dapKgPerHa * perAcreFactor;
    const mopPerAcre = mopKgPerHa * perAcreFactor;

    const areaFactor = state.unit === 'acre' ? state.landSize : (state.landSize * 2.471);
    document.getElementById('prescription-area').textContent = `${state.landSize} ${state.unit.toUpperCase()}(S)`;

    // Populate Prescription Table with Chemical + Eco-Organic inputs
    const tbody = document.getElementById('prescription-tbody');
    tbody.innerHTML = '';

    const prescriptionItems = [
      {
        name: "Neem Coated Urea (46% N)",
        category: "Slow-Release Chemical",
        perAcre: `${ureaPerAcre.toFixed(1)} kg/acre`,
        totalField: `${(ureaPerAcre * areaFactor).toFixed(1)} kg (${Math.ceil((ureaPerAcre * areaFactor)/50)} Bags)`,
        method: "Split Application (Basal + 2 Top Dressings)"
      },
      {
        name: "DAP (Di-Ammonium Phosphate 18-46-0)",
        category: "Complex Granular",
        perAcre: `${dapPerAcre.toFixed(1)} kg/acre`,
        totalField: `${(dapPerAcre * areaFactor).toFixed(1)} kg (${Math.ceil((dapPerAcre * areaFactor)/50)} Bags)`,
        method: "Basal Application at Sowing"
      },
      {
        name: "MOP (Muriate of Potash 60% K₂O)",
        category: "Potassic Fertilizer",
        perAcre: `${mopPerAcre.toFixed(1)} kg/acre`,
        totalField: `${(mopPerAcre * areaFactor).toFixed(1)} kg (${Math.ceil((mopPerAcre * areaFactor)/50)} Bags)`,
        method: "Basal + Flowering Stage Top Dressing"
      },
      {
        name: "Organic Vermicompost / Earthworm Castings",
        category: "100% Eco-Organic",
        perAcre: "1.5 - 2.0 Tons/acre",
        totalField: `${(1.75 * areaFactor).toFixed(1)} Tons`,
        method: "Broadcasting before final plowing"
      },
      {
        name: "Azotobacter & PSB Bio-Fertilizer",
        category: "Liquid Bio-Culture",
        perAcre: "250 ml/acre",
        totalField: `${(250 * areaFactor).toFixed(0)} ml`,
        method: "Seed Treatment / Drenching"
      }
    ];

    prescriptionItems.forEach(item => {
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

    // 5. Eco-Organic Bio-Shield Cards Render
    renderEcoShieldGrid();

    // 6. Timeline Stepper Generation
    renderTimelineStepper(cropData, ureaPerAcre * areaFactor, dapPerAcre * areaFactor, mopPerAcre * areaFactor);

    // 7. Soil Amendment Advisory
    renderSoilAmendmentAdvisory();

    // 8. Update Calculator Tab
    updateCalculatorResults();

    // 9. Update AI Dynamic Prompt
    updateDynamicPromptText();

    // 10. Update Official Soil Health Card Modal Data
    updateSoilHealthCardModal(cropData, ureaPerAcre * areaFactor, dapPerAcre * areaFactor, mopPerAcre * areaFactor, finalSHI);
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

  function renderEcoShieldGrid() {
    const gridContainer = document.getElementById('eco-grid-container');
    if (!gridContainer) return;

    gridContainer.innerHTML = `
      <div class="eco-item-card">
        <span class="eco-item-title">🪱 Earthworm Protection</span>
        <span class="eco-item-desc">Neem-coated urea & organic manure preserve earthworm burrows and soil aeration.</span>
      </div>
      <div class="eco-item-card">
        <span class="eco-item-title">🦠 Microbial Biomass</span>
        <span class="eco-item-desc">Bio-fertilizers introduce 10⁸ CFU/ml beneficial N-fixing & P-solubilizing bacteria.</span>
      </div>
      <div class="eco-item-card">
        <span class="eco-item-title">💧 Root Moisture Barrier</span>
        <span class="eco-item-desc">Organic carbon at ${state.oc}% reduces crop water stress during dry dry spells by 35%.</span>
      </div>
    `;
  }

  function renderTimelineStepper(cropData, totalUrea, totalDap, totalMop) {
    const stepperContainer = document.getElementById('timeline-stepper');
    if (!stepperContainer) return;

    stepperContainer.innerHTML = '';

    const stages = [
      {
        phase: "Phase 1: Basal (At Sowing)",
        title: cropData.stages[0] || "Sowing & Root Prep",
        desc: `Apply 100% Organic Compost, 100% DAP (${totalDap.toFixed(0)} kg), 50% MOP (${(totalMop*0.5).toFixed(0)} kg), and 25% Neem Urea (${(totalUrea*0.25).toFixed(0)} kg).`
      },
      {
        phase: "Phase 2: Vegetative Growth",
        title: cropData.stages[1] || "Active Growth Stage",
        desc: `Top dress 50% Neem Urea (${(totalUrea*0.5).toFixed(0)} kg) during irrigation. Spray liquid bio-fertilizer on leaves.`
      },
      {
        phase: "Phase 3: Flowering & Grain Set",
        title: cropData.stages[2] || "Flowering & Fruit Set",
        desc: `Top dress remaining 25% Neem Urea (${(totalUrea*0.25).toFixed(0)} kg) & 50% MOP (${(totalMop*0.5).toFixed(0)} kg) to boost fruit weight.`
      }
    ];

    stages.forEach(s => {
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

  function renderSoilAmendmentAdvisory() {
    const titleEl = document.getElementById('amendment-title');
    const textEl = document.getElementById('amendment-text');

    if (state.ph < 6.0) {
      titleEl.textContent = '⚠️ Acidic Soil Condition Alert (pH < 6.0)';
      textEl.textContent = `Soil pH is ${state.ph}. Apply Agricultural Lime / Dolomite at 500 kg/acre prior to sowing to raise soil pH to optimal 6.5 and prevent phosphorus lockup.`;
    } else if (state.ph > 7.5) {
      titleEl.textContent = '⚠️ Alkaline Soil Condition Alert (pH > 7.5)';
      textEl.textContent = `Soil pH is ${state.ph}. Apply Agricultural Gypsum at 400 kg/acre and incorporate organic compost to lower pH and reclaim sodic condition.`;
    } else {
      titleEl.textContent = '💡 Optimal Soil pH Condition';
      textEl.textContent = `Soil pH is balanced at ${state.ph}. Nutrient absorption efficiency is at peak performance (95-100%). No pH corrective amendment is needed.`;
    }
  }

  // =========================================================================
  // 6. DOSAGE CALCULATOR LOGIC
  // =========================================================================
  const calcArea = document.getElementById('calc-area');
  const calcUnit = document.getElementById('calc-unit');
  const calcReqN = document.getElementById('calc-req-n');
  const calcReqP = document.getElementById('calc-req-p');
  const calcReqK = document.getElementById('calc-req-k');
  const calcMode = document.getElementById('calc-mode');

  [calcArea, calcUnit, calcReqN, calcReqP, calcReqK, calcMode].forEach(input => {
    if (input) input.addEventListener('input', updateCalculatorResults);
  });

  function updateCalculatorResults() {
    const area = parseFloat(calcArea.value) || 1;
    const reqN = parseFloat(calcReqN.value) || 0;
    const reqP = parseFloat(calcReqP.value) || 0;
    const reqK = parseFloat(calcReqK.value) || 0;

    const totalN = reqN * area;
    const totalP = reqP * area;
    const totalK = reqK * area;

    const dapKg = totalP / 0.46;
    const nFromDap = dapKg * 0.18;
    const remN = Math.max(0, totalN - nFromDap);
    const ureaKg = remN / 0.46;
    const mopKg = totalK / 0.60;

    const dapBags = Math.ceil(dapKg / 50);
    const ureaBags = Math.ceil(ureaKg / 50);
    const mopBags = Math.ceil(mopKg / 50);

    const totalBags = dapBags + ureaBags + mopBags;
    const totalWeight = totalBags * 50;
    const estCost = (dapBags * 25) + (ureaBags * 15) + (mopBags * 22);

    const bagGrid = document.getElementById('calc-bag-grid');
    if (bagGrid) {
      bagGrid.innerHTML = `
        <div class="bag-card">
          <span class="bag-icon">🌾</span>
          <span class="bag-name">Neem Urea (46% N)</span>
          <span class="bag-qty">${ureaBags} Bags</span>
          <span class="sub-text">(${ureaKg.toFixed(0)} kg total)</span>
        </div>
        <div class="bag-card">
          <span class="bag-icon">🌱</span>
          <span class="bag-name">DAP (18-46-0)</span>
          <span class="bag-qty">${dapBags} Bags</span>
          <span class="sub-text">(${dapKg.toFixed(0)} kg total)</span>
        </div>
        <div class="bag-card">
          <span class="bag-icon">🌿</span>
          <span class="bag-name">MOP (60% K₂O)</span>
          <span class="bag-qty">${mopBags} Bags</span>
          <span class="sub-text">(${mopKg.toFixed(0)} kg total)</span>
        </div>
      `;
    }

    document.getElementById('calc-total-weight').textContent = `${totalWeight} kg`;
    document.getElementById('calc-total-bags').textContent = `${totalBags} Bags (50kg each)`;
    document.getElementById('calc-total-cost').textContent = `$${estCost.toFixed(2)}`;
  }

  // =========================================================================
  // 7. CROP DATABASE CARDS
  // =========================================================================
  function renderCropDatabaseCards(filterText = '') {
    const grid = document.getElementById('crops-cards-grid');
    if (!grid) return;

    grid.innerHTML = '';

    Object.keys(CROP_DATABASE).forEach(key => {
      const crop = CROP_DATABASE[key];
      if (filterText && !crop.name.toLowerCase().includes(filterText.toLowerCase())) return;

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
          <div class="crop-stat">
            <span>Target N</span>
            <strong class="n-color">${crop.targetN} kg/ha</strong>
          </div>
          <div class="crop-stat">
            <span>Target P</span>
            <strong class="p-color">${crop.targetP} kg/ha</strong>
          </div>
          <div class="crop-stat">
            <span>Target K</span>
            <strong class="k-color">${crop.targetK} kg/ha</strong>
          </div>
        </div>
        <div style="font-size: 0.8rem; display: flex; justify-content: space-between;">
          <span>Ideal pH: <strong>${crop.phOptimum} (${crop.phMin}-${crop.phMax})</strong></span>
          <span>Max Yield: <strong>${crop.yieldMax}</strong></span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  const cropSearchInput = document.getElementById('crop-search-input');
  if (cropSearchInput) {
    cropSearchInput.addEventListener('input', (e) => {
      renderCropDatabaseCards(e.target.value);
    });
  }

  // =========================================================================
  // 8. LIVE AI PROMPT GENERATOR
  // =========================================================================
  function updateDynamicPromptText() {
    const dynamicPromptEl = document.getElementById('prompt-dynamic-text');
    if (!dynamicPromptEl) return;

    const cropData = CROP_DATABASE[state.crop] || CROP_DATABASE.wheat;

    const promptText = `Act as an expert Agronomist and Precision Fertilizer Specialist. Please provide a detailed fertilizer schedule and soil management plan for the following specific field context:

### FIELD & SOIL TEST PROFILE:
- Target Crop: ${cropData.name}
- Growth Stage: ${state.stage.toUpperCase()}
- Total Land Size: ${state.landSize} ${state.unit.toUpperCase()}(S)
- Soil Texture/Type: ${state.soilType.toUpperCase()}
- Current Nitrogen (N): ${state.n} kg/ha (Target Benchmark: ${cropData.targetN} kg/ha)
- Current Phosphorus (P): ${state.p} kg/ha (Target Benchmark: ${cropData.targetP} kg/ha)
- Current Potassium (K): ${state.k} kg/ha (Target Benchmark: ${cropData.targetK} kg/ha)
- Soil pH: ${state.ph} (Ideal Range: ${cropData.phMin} - ${cropData.phMax})
- Organic Carbon: ${state.oc}%
- Soil Moisture: ${state.moisture}%

### SPECIFIC REQUESTS:
1. Provide exact calculations for Neem Urea, DAP, MOP, and Organic Vermicompost for ${state.landSize} ${state.unit}(s).
2. Outline a 3-stage split application timeline (Basal, Vegetative, Flowering).
3. Suggest soil health preservation techniques (bio-fertilizers, microbial health protection).`;

    dynamicPromptEl.textContent = promptText;
  }

  // Copy Buttons Handler
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      let targetId = btn.getAttribute('data-copy-target');
      if (btn.id === 'btn-copy-dynamic-prompt') targetId = 'prompt-dynamic-text';
      
      const codeBlock = document.getElementById(targetId);
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent);
        showToast('📋 AI Prompt copied to clipboard!');
      }
    });
  });

  // =========================================================================
  // 9. OFFICIAL SOIL HEALTH CARD MODAL & PRINT HANDLER
  // =========================================================================
  const modalSoilCard = document.getElementById('soil-card-modal');
  const btnOpenModal = document.getElementById('btn-open-soil-card');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnPrintCard = document.getElementById('btn-print-card');

  if (btnOpenModal) {
    btnOpenModal.addEventListener('click', () => {
      modalSoilCard.classList.add('active');
    });
  }

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
      modalSoilCard.classList.remove('active');
    });
  }

  if (btnPrintCard) {
    btnPrintCard.addEventListener('click', () => {
      window.print();
    });
  }

  function updateSoilHealthCardModal(cropData, totalUrea, totalDap, totalMop, shiScore) {
    document.getElementById('shc-crop').textContent = cropData.name;
    document.getElementById('shc-area').textContent = `${state.landSize} ${state.unit.toUpperCase()}(S)`;
    document.getElementById('shc-shi').textContent = `${shiScore} / 100`;

    // Populate Soil Test Table inside Modal
    const testTbody = document.getElementById('shc-test-tbody');
    if (testTbody) {
      testTbody.innerHTML = `
        <tr><td>Nitrogen (N)</td><td>${state.n} kg/ha</td><td>${cropData.targetN} kg/ha</td><td>${state.n < cropData.targetN ? 'Deficient' : 'Optimal'}</td></tr>
        <tr><td>Phosphorus (P₂O₅)</td><td>${state.p} kg/ha</td><td>${cropData.targetP} kg/ha</td><td>${state.p < cropData.targetP ? 'Deficient' : 'Optimal'}</td></tr>
        <tr><td>Potassium (K₂O)</td><td>${state.k} kg/ha</td><td>${cropData.targetK} kg/ha</td><td>${state.k < cropData.targetK ? 'Deficient' : 'Optimal'}</td></tr>
        <tr><td>Soil pH</td><td>${state.ph}</td><td>${cropData.phOptimum}</td><td>${state.ph >= 6.0 && state.ph <= 7.5 ? 'Balanced' : 'Conditioning Required'}</td></tr>
      `;
    }

    // Populate Prescription Table inside Modal
    const prescTbody = document.getElementById('shc-prescription-tbody');
    if (prescTbody) {
      const areaFactor = state.unit === 'acre' ? state.landSize : (state.landSize * 2.471);
      prescTbody.innerHTML = `
        <tr><td>Neem Coated Urea</td><td>Chemical Slow-Release</td><td>${(totalUrea/areaFactor).toFixed(1)} kg</td><td>${Math.ceil(totalUrea/50)} Bags (50kg)</td></tr>
        <tr><td>DAP (18-46-0)</td><td>Complex Fertilizer</td><td>${(totalDap/areaFactor).toFixed(1)} kg</td><td>${Math.ceil(totalDap/50)} Bags (50kg)</td></tr>
        <tr><td>MOP (60% K₂O)</td><td>Potassic Fertilizer</td><td>${(totalMop/areaFactor).toFixed(1)} kg</td><td>${Math.ceil(totalMop/50)} Bags (50kg)</td></tr>
        <tr><td>Organic Vermicompost</td><td>Eco-Organic Manure</td><td>1.75 Tons</td><td>${(1.75 * areaFactor).toFixed(1)} Tons</td></tr>
      `;
    }
  }

  // Toast Helper
  function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

});
