import express from 'express';
import { CROP_DATABASE } from '../data/cropDatabase.js';

const router = express.Router();

// GET /api/crops
router.get('/crops', (req, res) => {
  const { search } = req.query;
  let crops = Object.values(CROP_DATABASE);

  if (search) {
    const query = search.toLowerCase();
    crops = crops.filter(c => c.name.toLowerCase().includes(query) || c.category.toLowerCase().includes(query));
  }

  res.json({ success: true, count: crops.length, crops });
});

// GET /api/crops/:id
router.get('/crops/:id', (req, res) => {
  const crop = CROP_DATABASE[req.params.id];
  if (!crop) return res.status(404).json({ success: false, message: 'Crop not found' });
  res.json({ success: true, crop });
});

export default router;
