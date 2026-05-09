'use client'

import {useSession, signIn, signOut} from "next-auth/react";
export default function Component() {
    const {data: session} = useSession();

    if(session) {
        return (
            <>
                <p>Welcome, {session.user?.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="mb-3">Not signed in</p>

            <button
                className="bg-orange-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-orange-600 transition duration-200 shadow-md"
                onClick={() => signIn()}
            >
                Sign in
            </button>
        </div>
    )
}