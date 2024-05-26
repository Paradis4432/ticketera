"use client"

import {useSession} from "next-auth/react";

function Page() {
    const {data: session, status} = useSession();


    return (
        <div>
            <p>validated by middleware</p>
            <h1>welcome {session?.user?.name}</h1>
        </div>
    )
}

export default Page