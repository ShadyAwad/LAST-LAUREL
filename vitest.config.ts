import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['apps/**/*.test.ts', 'packages/**/*.test.ts'],
    env: { NODE_ENV: 'test', CORS_ORIGINS: 'http://localhost:5173' },
  },
});
