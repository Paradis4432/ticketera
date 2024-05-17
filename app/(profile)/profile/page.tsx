"use client"

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {getUserTickets} from "@/app/(profile)/profile/actions";
import {Ticket} from "@/app/components/ui/tickets";
import Link from "next/link";

function Page() {
    const {data: session} = useSession();

    return (
        <div className="container">
            <h1>Profile</h1>
            <h2>user: {session?.user?.name}</h2>
            <h2>email: {session?.user?.email}</h2>
            <img src={(session?.user?.image) as string} alt={"profilePic"}/>

            <br/>
            <br/>
            <br/>
            <Link href={"profile/events"}>
                <h2>Tus eventos</h2>
            </Link>
            <br/>   

        </div>
    )
}

export default Page;

