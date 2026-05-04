import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2, 'Username must be at least 2 characters long')  
    .max(20, 'Username must be at most 20 characters long')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores');

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'})
}); 

// zod is a powerful schema validation library that allows us to define complex validation rules in a clear and concise way. In this schema, we are validating the username, email, and password fields for the sign-up process. The username must be between 2 and 20 characters long and can only contain letters, numbers, and underscores. The email must be a valid email address, and the password must be at least 6 characters long.

/*
So the flow is usually:

1. User submits data from the UI.
2. Zod schema in signUpSchema.ts, signInSchema.ts, verifySchema.ts, acceptMessageSchema.ts, or messageSchema.ts validates the input shape.
3. If validation passes, your server code creates or updates a Mongoose document using User.ts.
4. Mongoose then enforces the database schema when saving.
5. The key reason you need both is that Mongoose and Zod solve different problems. Mongoose protects the database shape. Zod protects the API boundary. Also, TypeScript types disappear at runtime, so TypeScript alone cannot validate a request coming from a browser.
 */