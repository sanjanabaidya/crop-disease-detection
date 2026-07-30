import express from 'express';

const router = express.Router();

const DEALERS = [
  {
    id: 1,
    name: "Government Krishi Vigyan Kendra (KVK)",
    type: "Govt Authorized Hub",
    distance: "1.8 km",
    phone: "+91 98765 43210",
    address: "Main Market Road, Block A",
    stock: {
      urea: "In Stock (Subsidized)",
      dap: "In Stock",
      mop: "In Stock",
      vermicompost: "Available (200 Bags)"
    },
    rating: "4.9 ⭐"
  },
  {
    id: 2,
    name: "Kisan Bio-Fertilizer & Seed Store",
    type: "Private Dealer",
    distance: "3.4 km",
    phone: "+91 98123 55443",
    address: "Station Road Near Farmers Mandi",
    stock: {
      urea: "In Stock",
      dap: "Low Stock",
      mop: "In Stock",
      vermicompost: "Available (500 Bags)"
    },
    rating: "4.7 ⭐"
  },
  {
    id: 3,
    name: "Green Earth Agro Services & Soil Lab",
    type: "Eco-Organic Agro Center",
    distance: "5.1 km",
    phone: "+91 97788 11223",
    address: "National Highway 44 Bypass",
    stock: {
      urea: "In Stock",
      dap: "In Stock",
      mop: "In Stock",
      vermicompost: "High Stock (Organic Certified)"
    },
    rating: "4.8 ⭐"
  }
];

// GET /api/dealers
router.get('/dealers', (req, res) => {
  res.json({ success: true, count: DEALERS.length, dealers: DEALERS });
});

export default router;
