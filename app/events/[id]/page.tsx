"use client"

import {useEffect, useState} from "react";
import IEvent from "@/app/zints/IEvent";
import Event from "@/app/events/zcomps/Event";

function Page({params}: { params: { id: string } }) {
    const [events, setEvents] = useState<IEvent[]>([])

    useEffect(() => {
        fetch("/api/events/" + params.id)
            .then(res => res.json())
            .then(data => setEvents(data.data))
            .catch(err => console.error(err))
    }, [params.id])

    return (
        <div className="container">
            <h1>event id: {params.id}</h1>
            {
                events.length == 0 ? (
                    <h2>Loading...</h2>
                ) : (
                    <div>
                        {events.map((event, index) => (
                            <Event key={index} event={event}/>
                        ))}
                    </div>
                )
            }
        </div>
    )
}


export default Page;