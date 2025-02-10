import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enhanced CORS and host validation middleware
app.use((req, res, next) => {
  const allowedHosts = (process.env.VITE_ALLOW_HOSTS || '*.replit.dev,localhost:5000').split(',');
  const origin = req.headers.origin;
  const host = req.headers.host;

  // Check both origin and host headers
  const isAllowedOrigin = origin && allowedHosts.some(allowed => 
    origin.match(new RegExp(allowed.replace('*', '.*')))
  );
  const isAllowedHost = host && allowedHosts.some(allowed => 
    host.match(new RegExp(allowed.replace('*', '.*')))
  );

  // Set comprehensive CORS headers
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours

  if (isAllowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // In development, allow all hosts to prevent Vite host blocking
  if (process.env.NODE_ENV === 'development') {
    return next();
  }

  // In production, enforce host restrictions
  if (!isAllowedOrigin && !isAllowedHost) {
    return res.status(403).json({
      error: 'Host not allowed',
      allowedHosts
    });
  }

  next();
});

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Serve static files for both development and production
  // First serve from the public directory for development assets
  app.use('/public', express.static(path.join(__dirname, '../client/public'), {
    maxAge: '1d',
    etag: true,
    lastModified: true
  }));

  // Then serve from dist/public for production builds
  app.use(express.static(path.join(__dirname, '../dist/public'), {
    maxAge: '1d',
    etag: true,
    lastModified: true
  }));

  if (process.env.NODE_ENV === 'development') {
    await setupVite(app, server);
  } else {
    // Handle all routes by serving index.html (for client-side routing)
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/public/index.html'));
    });
  }

  const PORT = parseInt(process.env.PORT || "5000", 10);
  const HOST = process.env.HOST || '0.0.0.0';

  server.listen(PORT, HOST, () => {
    log(`serving on ${HOST}:${PORT}`);
  });
})();