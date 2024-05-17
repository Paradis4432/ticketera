"use client"

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {Ticket} from "@/app/components/ui/tickets";
import {getUserTickets} from "@/app/(profile)/profile/tickets/actions";

function Page() {
    const {data: session} = useSession();

    const [tickets, setEvents] = useState<ITicket[]>([]);


    useEffect(() => {
        if (session?.user) {
            getUserTickets(session.user.email)
                .then(tickets => {
                    setEvents(tickets);
                })
        } else {
            // redirect / login
        }
    }, [session]);

    return (
        <div className="container">
            <h1>tus tickets</h1>
            {
                tickets.length == 0 ? (
                    <h2>loading</h2>
                ) : (
                    tickets.map((ticket, id) => (
                        <Ticket ticket={ticket} key={id}/>
                    ))
                )
            }
        </div>
    )
}

export default Page