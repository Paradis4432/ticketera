"use client"

import {signIn, useSession} from "next-auth/react";

function Page() {
    const {data: session, status} = useSession();

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (!session || !session.user) {
        return <div>Access Denied, login:
            <button onClick={() => signIn()} className="btn btn-primary">
                Log in
            </button>
        </div>

    }

    return (
        <div>
            <h1>Page</h1>
            <p>name: {session.user.name}</p>
            <p>email: {session.user.email}</p>
        </div>
    )
}

export default Page