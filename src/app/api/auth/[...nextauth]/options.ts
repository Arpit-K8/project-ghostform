import {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from '@/lib/dbConnect' 
import UserModel from '@/model/User'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                identifier: {
                    label: 'Email or Username',
                    type: 'text',
                    placeholder: 'Enter email or username'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials:any) : Promise<any> {
                // Implement your authorization logic here
                await dbConnect()
                try {
                    const user = await UserModel.findOne({
                        $or: [ // or operator to check both email and username
                            { email: credentials.identifier },
                            { username: credentials.identifier }
                        ]
                    })
                    if (!user) {
                        throw new Error('User not found with this email or username');
                    }

                    if(!user.isVerified) {
                        throw new Error('User email is not verified. Please verify your email before logging in.');
                    }

                    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                    if (!isPasswordValid) {
                        throw new Error('Invalid password');
                    }
                    return user;
                } catch (error: any) {
                    throw new Error(error);
                }
            }
        })
    ],
    pages:{
        signIn: '/sign-in',
    },
    callbacks:{
        async jwt({token, user}) { 
             if(user) {
                token._id = user._id?.toString()
                token.isVerified = user.isVerified;
                token.isAcceptingMessages = user.isAcceptingMessages;
                token.username = user.username
            }
            return token
        },
        async session({session, token}) {
            if(token) {
                session.user._id = token._id
                session.user.isVerified = token.isVerified 
                session.user.isAcceptingMessages = token.isAcceptingMessages 
                session.user.username = token.username
            }
            return session
        },
        
    },
    session:{
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
}