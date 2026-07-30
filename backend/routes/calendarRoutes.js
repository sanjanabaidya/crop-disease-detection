import express from 'express';

const router = express.Router();

const CALENDARS = {
  wheat: {
    season: "Rabi Season (Oct - Apr)",
    cropName: "Wheat",
    schedule: [
      { month: "October", activity: "Field Preparation & Soil Testing", status: "Prep", fert: "Incorporate 2 tons/acre Vermicompost during plowing." },
      { month: "November", activity: "Sowing & Basal Fertilizer", status: "Sowing", fert: "Apply 100% DAP (50 kg/acre) + 50% MOP + 25% Neem Urea as Basal." },
      { month: "December", activity: "Crown Root Initiation (CRI) - 21 DAT", status: "Growth", fert: "First Irrigation + Top dress 50% Neem Urea (25 kg/acre)." },
      { month: "January", activity: "Tillering & Jointing Stage", status: "Tillering", fert: "Spray Zinc Sulfate 0.5% + Urea 1% foliar spray." },
      { month: "February", activity: "Flowering & Booting Stage", status: "Flowering", fert: "Top dress remaining 25% Neem Urea + 50% MOP." },
      { month: "March", activity: "Grain Filling & Milk Stage", status: "Grain Fill", fert: "Maintain light soil moisture. No heavy N fertilizer." },
      { month: "April", activity: "Maturation & Harvesting", status: "Harvest", fert: "Stop irrigation 10 days prior to harvest." }
    ]
  },
  rice: {
    season: "Kharif Season (Jun - Nov)",
    cropName: "Rice / Paddy",
    schedule: [
      { month: "June", activity: "Nursery Bed Preparation & Sowing", status: "Nursery", fert: "Apply compost + Azotobacter bio-fertilizer seed treatment." },
      { month: "July", activity: "Transplanting & Basal Dose", status: "Transplant", fert: "Apply 100% DAP + 50% MOP + Zinc Sulfate (10 kg/acre)." },
      { month: "August", activity: "Active Tillering Phase (30 DAT)", status: "Tillering", fert: "First Top Dressing: 50% Neem Coated Urea." },
      { month: "September", activity: "Panicle Initiation Stage", status: "Panicle", fert: "Second Top Dressing: 25% Neem Urea + 50% MOP." },
      { month: "October", activity: "Heading & Grain Filling", status: "Heading", fert: "Maintain 2-3 cm standing water. Foliar spray of Potassium Nitrate 1%." },
      { month: "November", activity: "Grain Ripening & Harvesting", status: "Harvest", fert: "Drain water 14 days before harvest." }
    ]
  }
};

// GET /api/crop-calendar
router.get('/crop-calendar', (req, res) => {
  const { crop = 'wheat' } = req.query;
  const cal = CALENDARS[crop] || CALENDARS.wheat;
  res.json({ success: true, calendar: cal });
});

export default router;
