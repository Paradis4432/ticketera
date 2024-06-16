"use client"

import {useEffect, useState} from "react";
import {fetchAllEvents} from "@/app/(home)/actions";
import {PublicEvent} from "@/app/components/ui/events";
import {LoadingWrapper} from "@/app/components/ui/loader";
import Link from "next/link";

function Page() {
    // TODO convert finder by id to component and load this server side, but the component client side
    const [events, setEvents] = useState<IEvent[]>([])
    useEffect(() => {
        fetchAllEvents().then(data => {
            setEvents(data);
        })
    }, []);


    return (
        <div className="container-fluid">
            <h1 className={"test"}>Tests</h1>

            <h1>find by id:</h1>
            <input type="text" id="find-by-id" placeholder="id"/>
            <button onClick={() => {
                const id = (document.getElementById("find-by-id") as HTMLInputElement).value
                window.location.href = `/events/${id}`
            }}>find
            </button>

            <h1>Main events:</h1>

            <LoadingWrapper of={events}>
                {events.map((e, i) => (
                    <ul key={i}>
                        <li>
                            <PublicEvent event={e}/>
                        </li>

                    </ul>
                ))}

            </LoadingWrapper>

            <Link href={"/profile/myevents"}>tus eventos</Link>
        </div>
    )
}

export default Page;