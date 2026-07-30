import express from 'express';

const router = express.Router();

// POST /api/carbon-credits
router.post('/carbon-credits', (req, res) => {
  const { landSize = 2.5, oc = 0.55 } = req.body;

  // 1 Acre of eco-organic farming saves ~1.2 Tons CO2e / year
  const co2eSavedTons = (landSize * 1.25).toFixed(2);
  const carbonCreditsEarned = Math.round(landSize * 4.5);
  const carbonValueUSD = (carbonCreditsEarned * 18.50).toFixed(2);
  const microbialBiomassIndex = Math.min(100, Math.round(oc * 110 + 25));

  res.json({
    success: true,
    co2eSavedTons,
    carbonCreditsEarned,
    carbonValueUSD,
    microbialBiomassIndex,
    certificateId: `ECO-CARBON-2026-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

export default router;
