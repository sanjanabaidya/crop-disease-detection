import express from 'express';
import cors from 'cors';
import diagnoseRoutes from './routes/diagnoseRoutes.js';
import cropRoutes from './routes/cropRoutes.js';
import promptRoutes from './routes/promptRoutes.js';
import visionRoutes from './routes/visionRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';
import carbonRoutes from './routes/carbonRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', diagnoseRoutes);
app.use('/api', cropRoutes);
app.use('/api', promptRoutes);
app.use('/api', visionRoutes);
app.use('/api', weatherRoutes);
app.use('/api', carbonRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'AgroPulse Kisan AI & Precision Express REST API',
    version: '2.0.0-AI',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🌾 AgroPulse AI Backend Server running on http://localhost:${PORT}`);
});
