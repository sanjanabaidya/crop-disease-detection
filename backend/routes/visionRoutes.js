import express from 'express';

const router = express.Router();

const SAMPLE_DIAGNOSES = {
  n_chlorosis: {
    title: "Nitrogen Deficiency Chlorosis",
    confidence: 96.8,
    severity: "Moderate",
    symptoms: "V-shaped yellowing along midrib extending from tip towards leaf base.",
    aiModel: "ResNet-50 Agronomy Vision v2.4",
    organicRemedy: "Apply 2 tons/acre Vermicompost + Foliar spray of Panchagavya 3%",
    chemicalRemedy: "Top dress 25 kg/acre Neem-Coated Urea during morning irrigation",
    prevention: "Maintain regular split nitrogen schedule to prevent v-yellowing."
  },
  leaf_blight: {
    title: "Bipolaris Maydis (Northern Leaf Blight)",
    confidence: 94.2,
    severity: "High Alert",
    symptoms: "Elongated grayish-green to tan lesions on foliage.",
    aiModel: "YOLOv8-PlantDoctor",
    organicRemedy: "Spray Trichoderma viride bio-fungicide @ 5g/liter water",
    chemicalRemedy: "Foliar spray of Mancozeb 75% WP @ 2.5 g/liter",
    prevention: "Avoid overhead sprinkler irrigation; ensure good row spacing."
  },
  yellow_rust: {
    title: "Puccinia striiformis (Stripe / Yellow Rust)",
    confidence: 98.1,
    severity: "Critical",
    symptoms: "Yellowish pustules arranged in linear stripes on upper leaf surface.",
    aiModel: "Vision Transformer (ViT-Agri)",
    organicRemedy: "Spray Neem Oil (10,000 ppm) @ 3ml/liter with soap solution",
    chemicalRemedy: "Spray Propiconazole 25% EC @ 1 ml/liter at first sign",
    prevention: "Grow rust-resistant crop varieties."
  },
  healthy: {
    title: "Healthy Leaf Profile (No Disease Detected)",
    confidence: 99.4,
    severity: "Optimal",
    symptoms: "Uniform deep green color, strong cellular structure, no lesions.",
    aiModel: "ResNet-50 Agronomy Vision v2.4",
    organicRemedy: "Continue standard organic compost maintenance",
    chemicalRemedy: "Maintain balanced baseline N-P-K supply",
    prevention: "Keep soil moisture at 45-60% capacity."
  }
};

// POST /api/vision-scan
router.post('/vision-scan', (req, res) => {
  try {
    const { sampleKey = 'n_chlorosis' } = req.body;
    const diagnosis = SAMPLE_DIAGNOSES[sampleKey] || SAMPLE_DIAGNOSES.n_chlorosis;

    res.json({
      success: true,
      timestamp: new Date().toISOString(),
      diagnosis
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
