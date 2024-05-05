"use client"

import "./styles.css"
import Link from "next/link";
import {useSession} from "next-auth/react";

function Page() {
            const {data: session} = useSession();
    return (
            <div className="container">
                <h1>Profile</h1>
                <h2>user: {session?.user?.name}</h2>
                <h2>email: {session?.user?.email}</h2>
                <img src={(session?.user?.image) as string}/>

                <Link href={"/events/create"}>create event</Link>
            </div>
    )
}

export default Page;