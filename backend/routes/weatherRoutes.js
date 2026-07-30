import express from 'express';

const router = express.Router();

// GET /api/weather-iot
router.get('/weather-iot', (req, res) => {
  res.json({
    success: true,
    timestamp: new Date().toISOString(),
    sensors: {
      soilMoisture: 48, // %
      soilTemp: 24.2, // °C
      ambientTemp: 29.5, // °C
      solarRadiation: "780 W/m²",
      phSensor: 6.5
    },
    forecast: [
      { day: "Today", temp: "30°C", rainProb: 15, condition: "Sunny" },
      { day: "Tomorrow", temp: "28°C", rainProb: 80, condition: "Heavy Rain Alert" },
      { day: "Day 3", temp: "26°C", rainProb: 60, condition: "Light Shower" },
      { day: "Day 4", temp: "29°C", rainProb: 20, condition: "Partly Cloudy" }
    ],
    aiLeachingRisk: {
      riskLevel: "HIGH (80% Rain Tomorrow)",
      advisory: "⚠️ Postpone top-dressing Urea today to prevent nitrogen leaching into groundwater."
    }
  });
});

export default router;
