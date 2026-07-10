import { once } from 'node:events';
import { describe, expect, it } from 'vitest';
import { healthResponseSchema } from '@last-laurel/shared';
import { app } from './app.js';

describe('health response contract', () => {
  it('accepts a valid health response', () => {
    expect(
      healthResponseSchema.safeParse({ status: 'ok', requestId: crypto.randomUUID() }).success,
    ).toBe(true);
  });

  it('serves health and normalized not-found responses', async () => {
    const server = app.listen(0);
    await once(server, 'listening');
    const address = server.address();
    if (!address || typeof address === 'string')
      throw new Error('Test server did not bind to a port');
    const baseUrl = `http://127.0.0.1:${address.port}`;

    try {
      const health = await fetch(`${baseUrl}/api/health`);
      expect(health.status).toBe(200);
      expect(healthResponseSchema.safeParse(await health.json()).success).toBe(true);

      const notFound = await fetch(`${baseUrl}/api/missing`);
      expect(notFound.status).toBe(404);
      await expect(notFound.json()).resolves.toMatchObject({ error: { code: 'NOT_FOUND' } });
    } finally {
      server.close();
      await once(server, 'close');
    }
  });
});
