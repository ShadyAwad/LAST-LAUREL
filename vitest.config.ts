import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['apps/**/*.test.{ts,tsx}', 'packages/**/*.test.{ts,tsx}'],
    env: { NODE_ENV: 'test', CORS_ORIGINS: 'http://localhost:5173' },
    environment: 'jsdom',
  },
});
