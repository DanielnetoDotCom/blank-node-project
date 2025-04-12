import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import registerRoutes from './routes/index.js';

const app = express();

// Optional: Define allowed origins here (can also be read from env)
/*
const allowedOrigins = [
  'http://localhost:5173',
  'https://my-frontend.example.com',
  // Add more domains as needed
];
*/
const allowedOrigins = [];

// CORS config: allow all if array is empty
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
};

// Middlewares
app.use(cors(corsOptions));
// Parse JSON requests and add security headers
app.use(express.json());
// Parse URL-encoded requests (for form submissions)
app.use(helmet());
/**
 * Rate limiting middleware to prevent abuse.
 * This limits each IP to 60 requests per minute.
 */
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 60, // limit each IP to 60 requests per windowMs
  })
);

// Register routes
registerRoutes(app);

export default app;
