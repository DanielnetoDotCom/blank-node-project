import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import http from 'http';
import app from './app.js';
import logger from './logger.js';

// Load environment variables
dotenv.config({ path: './.env' });

const PORT = process.env.BACKEND_PORT || 5000;

// Load SSL paths from environment
const keyPath = process.env.SSL_KEY_PATH;
const certPath = process.env.SSL_CERT_PATH;
if (process.env.NODE_ENV !== 'test') {
  // Conditional HTTPS support
  if (keyPath && certPath && fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    // SSL files found, start HTTPS server
    const sslOptions = {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    };

    https.createServer(sslOptions, app).listen(PORT, () => {
      logger.info(`HTTPS server is running on port ${PORT}`);
    });
  } else {
    // SSL not configured, start regular HTTP server
    http.createServer(app).listen(PORT, () => {
      logger.info(`HTTP server is running on port ${PORT}`);
    });
  }
}

