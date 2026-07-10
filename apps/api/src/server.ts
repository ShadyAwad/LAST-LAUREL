import { app } from './app.js';
import { env } from './config.js';

const server = app.listen(env.PORT, () => {
  console.log(`LAST & LAUREL API listening on port ${env.PORT}`);
});

function shutdown(signal: string) {
  console.log(`${signal} received; closing server.`);
  server.close((error) => {
    if (error) {
      console.error('Graceful shutdown failed.', error);
      process.exitCode = 1;
    }
    process.exit();
  });
  setTimeout(() => process.exit(1), 10_000).unref();
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
