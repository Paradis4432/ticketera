"use client"

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {Ticket} from "@/app/components/ui/tickets";
import {UserEvents} from "@/app/components/ui/events";
import {getUserEvent} from "@/app/(profile)/profile/events/actions";
import Link from "next/link";

function Page() {
    const {data: session} = useSession();

    const [events, setEvents] = useState<IEvent[]>([]);


    useEffect(() => {
        if (session?.user) {
            getUserEvent(session.user.email)
                .then(events => {
                    setEvents(events);
                })
        } else {
            // redirect / login
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
        </div>
    )
}

export default Page;

