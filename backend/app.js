// backend/app.js
import express from 'express';
import cors from 'cors';
import registerRoutes from './routes/index.js';
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Register API routes
registerRoutes(app);

export default app;
