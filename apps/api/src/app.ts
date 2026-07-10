import { randomUUID } from 'node:crypto';
import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import helmet from 'helmet';
import { healthResponseSchema } from '@last-laurel/shared';
import { env } from './config.js';

type ApiError = Error & { status?: number; code?: string };

export const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.corsOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Origin is not allowed by CORS'));
    },
  }),
);
app.use(express.json({ limit: '100kb' }));
app.use((req, res, next) => {
  res.locals.requestId = req.header('x-request-id') ?? randomUUID();
  res.setHeader('x-request-id', res.locals.requestId);
  next();
});

app.get('/api/health', (_req, res) => {
  const payload = healthResponseSchema.parse({ status: 'ok', requestId: res.locals.requestId });
  res.status(200).json(payload);
});

app.use((_req, _res, next) => {
  const error: ApiError = new Error('Route not found');
  error.status = 404;
  error.code = 'NOT_FOUND';
  next(error);
});

app.use((error: ApiError, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.status ?? 500;
  const body: { error: { code: string; message: string; requestId: string; details?: string } } = {
    error: {
      code: error.code ?? 'INTERNAL_ERROR',
      message: status >= 500 ? 'An unexpected error occurred.' : error.message,
      requestId: res.locals.requestId,
    },
  };
  if (env.NODE_ENV !== 'production' && status >= 500) body.error.details = error.message;
  res.status(status).json(body);
});
