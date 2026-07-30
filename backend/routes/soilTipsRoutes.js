import express from 'express';

const router = express.Router();

const SOIL_TIPS = [
  {
    category: "Organic Carbon Buildup",
    icon: "🪱",
    title: "Incorporate Farmyard Manure & Vermicompost",
    desc: "Apply 2-3 tons of well-decomposed FYM or vermicompost per acre before final plowing to increase soil organic carbon by 0.2% per season."
  },
  {
    category: "Soil Microbiome Protection",
    icon: "🦠",
    title: "Use Liquid Bio-Fertilizers (Azotobacter & PSB)",
    desc: "Drench soil with Azotobacter & PSB cultures @ 250ml/acre. Fixes up to 30 kg/ha atmospheric nitrogen naturally without chemical salt burn."
  },
  {
    category: "Earthworm Habitat Conservation",
    icon: "🌱",
    title: "Switch to Neem-Coated Slow-Release Urea",
    desc: "Neem oil coating prevents rapid ammonia volatilization and leeches, keeping earthworm burrows safe and active."
  },
  {
    category: "Salinity & pH Correction",
    icon: "💡",
    title: "Gypsum Application for Alkaline Sodic Soils",
    desc: "If soil pH > 7.5, broadcast 400 kg/acre Agricultural Gypsum along with green manuring (Dhaincha) to displace excess sodium."
  }
];

// GET /api/soil-tips
router.get('/soil-tips', (req, res) => {
  res.json({ success: true, count: SOIL_TIPS.length, tips: SOIL_TIPS });
});

export default router;
