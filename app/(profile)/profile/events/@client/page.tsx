"use client"

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {Ticket} from "@/app/components/ui/tickets";
import {UserEvents} from "@/app/components/ui/events";
import {getUserEvent, getUserTickets} from "@/app/(profile)/profile/events/actions";

function Page() {
    const {data: session} = useSession();

    const [events, setEvents] = useState<IEvent[]>([]);
    const [tickets, setTickets] = useState<ITicket[]>([]);


    useEffect(() => {
        if (session?.user) {
            getUserEvent(session.user.email)
                .then(events => {
                    setEvents(events);
                })
        } else {
            // redirect / [...login]
        }
    }, [session]);

    useEffect(() => {
        if (session?.user) {
            getUserTickets(session.user.email)
                .then(tickets => {
                    setTickets(tickets);
                })
        } else {
            // redirect / [...login]
        }
    }, [session]);

    return (
        <div className="container">
            <h1>tus eventos</h1>
            {
                events.length == 0 ? (
                    <h2>loading</h2>
                ) : (
                    events.map((event, id) => (
                        <UserEvents event={event} key={id}/>
                    ))
                )
            }
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

export default Page;

