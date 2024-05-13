"use client"

import {signIn, signOut, useSession} from "next-auth/react";

function LogIn() {
    const {data: session} = useSession();

    return (
        <div>
            {
                session ? (
                    <p>logged in</p>
                ) : (
                    <button onClick={() => signIn()} className="btn btn-primary">Log in</button>
                )
            }
        </div>
    )
}

function LogOut() {
    return (
        <button onClick={() => signOut()} className="btn btn-primary">Log out</button>
    )
}

export {
    LogIn,
    LogOut
}