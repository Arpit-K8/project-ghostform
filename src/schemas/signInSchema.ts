import {z} from 'zod';

export const signInSchema = z.object({
    identifier: z.string(), // better keyword used in production, it can be either username or email
    password: z.string(),
});
