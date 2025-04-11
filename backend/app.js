// backend/app.js
import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Register API routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

export default app;
