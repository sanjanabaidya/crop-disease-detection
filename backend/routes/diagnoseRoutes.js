import express from 'express';
import { CROP_DATABASE } from '../data/cropDatabase.js';

const router = express.Router();

// POST /api/diagnose
router.post('/diagnose', (req, res) => {
  try {
    const { crop = 'wheat', landSize = 2.5, unit = 'acre', soilType = 'loamy', n = 140, p = 22, k = 180, ph = 6.5, oc = 0.55 } = req.body;

    const cropData = CROP_DATABASE[crop] || CROP_DATABASE.wheat;

    // 1. Calculate Nutrient Deficits (kg/ha)
    const defN = Math.max(0, cropData.targetN - n);
    const defP = Math.max(0, cropData.targetP - p);
    const defK = Math.max(0, cropData.targetK - k);

    // 2. Calculate Soil Health Index (0-100 Score)
    const nRatio = Math.min(1.2, n / cropData.targetN);
    const pRatio = Math.min(1.2, p / cropData.targetP);
    const kRatio = Math.min(1.2, k / cropData.targetK);

    let phScore = 1.0;
    if (ph < cropData.phMin) phScore = Math.max(0.5, 1 - (cropData.phMin - ph) * 0.2);
    else if (ph > cropData.phMax) phScore = Math.max(0.5, 1 - (ph - cropData.phMax) * 0.2);

    const npkAvg = (nRatio + pRatio + kRatio) / 3;
    const rawSHI = Math.round(npkAvg * 80 * phScore + (oc * 10));
    const shiScore = Math.min(100, Math.max(20, rawSHI));

    // 3. Chemical + Eco-Organic Dosage Calculations
    const dapKgPerHa = defP > 0 ? (defP / 0.46) : 0;
    const nFromDap = dapKgPerHa * 0.18;
    const remN = Math.max(0, defN - nFromDap);
    const ureaKgPerHa = remN > 0 ? (remN / 0.46) : 0;
    const mopKgPerHa = defK > 0 ? (defK / 0.60) : 0;

    const perAcreFactor = 1 / 2.471;
    const ureaPerAcre = ureaKgPerHa * perAcreFactor;
    const dapPerAcre = dapKgPerHa * perAcreFactor;
    const mopPerAcre = mopKgPerHa * perAcreFactor;

    const areaFactor = unit === 'acre' ? landSize : (landSize * 2.471);

    const prescriptions = [
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
        method: "Seed Treatment / Soil Drenching"
      }
    ];

    // Split Schedule
    const totalUreaKg = ureaPerAcre * areaFactor;
    const totalDapKg = dapPerAcre * areaFactor;
    const totalMopKg = mopPerAcre * areaFactor;

    const timeline = [
      {
        phase: "Phase 1: Basal (At Sowing)",
        title: cropData.stages[0] || "Sowing & Root Prep",
        desc: `Apply 100% Organic Compost, 100% DAP (${totalDapKg.toFixed(0)} kg), 50% MOP (${(totalMopKg * 0.5).toFixed(0)} kg), and 25% Neem Urea (${(totalUreaKg * 0.25).toFixed(0)} kg).`
      },
      {
        phase: "Phase 2: Vegetative Growth",
        title: cropData.stages[1] || "Active Growth Stage",
        desc: `Top dress 50% Neem Urea (${(totalUreaKg * 0.5).toFixed(0)} kg) during irrigation. Spray liquid bio-fertilizer on leaves.`
      },
      {
        phase: "Phase 3: Flowering & Grain Set",
        title: cropData.stages[2] || "Flowering & Fruit Set",
        desc: `Top dress remaining 25% Neem Urea (${(totalUreaKg * 0.25).toFixed(0)} kg) & 50% MOP (${(totalMopKg * 0.5).toFixed(0)} kg) to boost fruit weight.`
      }
    ];

    // Soil Amendment Advisory
    let amendmentText = "Soil pH is balanced. Nutrient availability is at peak performance.";
    if (ph < 6.0) amendmentText = `Soil pH is acidic (${ph}). Apply Agricultural Lime at 500 kg/acre prior to sowing to raise pH to 6.5.`;
    else if (ph > 7.5) amendmentText = `Soil pH is alkaline (${ph}). Apply Agricultural Gypsum at 400 kg/acre to reclaim sodic condition.`;

    res.json({
      success: true,
      timestamp: new Date().toISOString(),
      crop: cropData,
      shiScore,
      deficits: {
        n: defN,
        p: defP,
        k: defK
      },
      prescriptions,
      timeline,
      amendmentText,
      microbialHealthPct: Math.min(99, Math.round(oc * 120 + 20)),
      potentialYieldBoostPct: Math.round((1 - (shiScore/100)) * 30 + 10)
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
