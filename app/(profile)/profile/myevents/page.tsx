"use client"

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {UserEvents} from "@/app/components/ui/events";
import {getUserEvent} from "@/app/(profile)/profile/actions";

function Page() {
    const {data: session} = useSession();

    const [events, setEvents] = useState<IEvent[]>([]);
    const [status, setStatus] = useState<String>("loading");


    useEffect(() => {
        if (session?.user) {
            if (session.user.email)
                getUserEvent(session.user.email)
                    .then(events => {
                        setEvents(events);

                    })
            else {
                setStatus("no events found")
            }
        } else {
            // TODO middleware so this cant happen
            setStatus("not logged in")
        }
    }, [session]);

    return (
        <div className="container">
            <h1>tus eventos</h1>
            {
                events.length == 0 ? (
                    <h2>{status}</h2>
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

