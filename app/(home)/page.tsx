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
        /*fetchAllEvents().then(data => {
            console.log(data)
            setEvents(data);
        })*/

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

            <h1>Main events: disabled</h1>
            {/*            {events.map((e,i) => (
                <p>test</p>
            ))}*/}
            {/*            {
                events.length > 0 ? (
                    <p>loading</p>
                ) : (
                    <p></p>
                )
            }*/}

{/*            <LoadingWrapper of={events}>
                {events.map((e, i) => (
                    <ul key={i}>
                        <li>
                            <PublicEvent event={e}/>
                        </li>

                    </ul>
                ))}
            </LoadingWrapper>*/}
            {/*
                ))}*/}


            <Link href={"/profile/myevents"}>tus eventos</Link>
        </div>
    )
}

export default Page;