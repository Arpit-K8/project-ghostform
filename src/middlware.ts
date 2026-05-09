import { NextRequest, NextResponse } from "next/server";
export {default} from "next-auth/middleware"; // this will use the default next-auth middleware which checks for the session and redirects to sign-in if not authenticated
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    const url = request.nextUrl;
    if(token && (url.pathname.startsWith('/sign-in') || url.pathname.startsWith('/sign-up') || url.pathname.startsWith('/verify') ||  url.pathname.startsWith('/'))) 
    {
        return NextResponse.redirect(new URL('/dashboard', request.url)); // redirect authenticated users away from sign-in, sign-up, and verify pages to dashboard
    }
    if (!token && url.pathname !== '/sign-in' && url.pathname !== '/sign-up' && url.pathname !== '/verify') {
        return NextResponse.redirect(new URL('/sign-in', request.url)); // redirect unauthenticated users to sign-in page
    }
}

// this will protect the routes specified in the matcher array, you can add more routes as needed
export const config = { 
    matcher: [
        '/sign-in',
        '/sign-up',
        '/',
        '/dashboard/:path*',
        '/verify/:path*' //  means all routes under /verify/ will be protected
    ]
}