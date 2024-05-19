"use client"

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {getUserTickets} from "@/app/(profile)/profile/actions";
import {Ticket} from "@/app/components/ui/tickets";

function Page() {
    const {data: session} = useSession();

    const [tickets, setTickets] = useState<ITickets[]>([]);


    useEffect(() => {
        if (session?.user) {
            getUserTickets(session.user.email)
                .then(tickets => {
                    setTickets(tickets);
                })
        } else {
            // redirect / login
        }
    }, [session]);

    return (
        <div className="container">
            <h1>Profile</h1>
            <h2>user: {session?.user?.name}</h2>
            <h2>email: {session?.user?.email}</h2>
            <img src={(session?.user?.image) as string} alt={"profilePic"}/>

            <br/>

            <h1>tus eventos</h1>
            {
                tickets.length == 0 ? (
                    <h2>loading</h2>
                ) : (
                    tickets.map((t, id) => (
                        <Ticket ticket={t} key={id}/>
                    ))
                )
            }
        </div>
    )
}

export default Page;

