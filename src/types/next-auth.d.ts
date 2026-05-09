import 'next-auth';
import { DefaultSession } from 'next-auth';
import { METHODS } from 'node:http';

declare module 'next-auth' {
    interface User{
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string; 
    }
    interface Session {
        user:{
            _id?: string;
            isVerified?: boolean;
            isAcceptingMessages?: boolean;
            username?: string; 
        } & DefaultSession['user']
    }
}

// diff METHODS
declare module 'next-auth/jwt' {
    interface JWT {
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string; 
    }
}