import { z } from 'zod';

export const healthResponseSchema = z.object({
  status: z.literal('ok'),
  requestId: z.string().uuid(),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
