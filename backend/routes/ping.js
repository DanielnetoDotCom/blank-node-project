import { Router } from 'express';
import logger from '../logger.js';

const router = Router();

router.get('/ping', (req, res) => {
  // Log the request details
  logger.warn(`pong request from ${req.ip}`);
  res.json({ message: 'pong' });
});

export default router;
