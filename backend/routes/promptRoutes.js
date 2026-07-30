import express from 'express';
import { CROP_DATABASE } from '../data/cropDatabase.js';

const router = express.Router();

// POST /api/generate-prompt
router.post('/generate-prompt', (req, res) => {
  try {
    const { crop = 'wheat', stage = 'vegetative', landSize = 2.5, unit = 'acre', soilType = 'loamy', n = 140, p = 22, k = 180, ph = 6.5, oc = 0.55 } = req.body;
    const cropData = CROP_DATABASE[crop] || CROP_DATABASE.wheat;

    const promptText = `Act as an expert Agronomist and Precision Fertilizer Specialist. Please provide a detailed fertilizer schedule and soil management plan for the following specific field context:

### FIELD & SOIL TEST PROFILE:
- Target Crop: ${cropData.name}
- Growth Stage: ${stage.toUpperCase()}
- Total Land Size: ${landSize} ${unit.toUpperCase()}(S)
- Soil Texture/Type: ${soilType.toUpperCase()}
- Current Nitrogen (N): ${n} kg/ha (Target Benchmark: ${cropData.targetN} kg/ha)
- Current Phosphorus (P): ${p} kg/ha (Target Benchmark: ${cropData.targetP} kg/ha)
- Current Potassium (K): ${k} kg/ha (Target Benchmark: ${cropData.targetK} kg/ha)
- Soil pH: ${ph} (Ideal Range: ${cropData.phMin} - ${cropData.phMax})
- Organic Carbon: ${oc}%

### SPECIFIC REQUESTS:
1. Provide exact calculations for Neem Urea, DAP, MOP, and Organic Vermicompost for ${landSize} ${unit}(s).
2. Outline a 3-stage split application timeline (Basal, Vegetative, Flowering).
3. Suggest soil health preservation techniques (bio-fertilizers, microbial health protection).`;

    res.json({ success: true, prompt: promptText });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
