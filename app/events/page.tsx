"use client"

import "./styles.css"
import {useEffect, useState} from "react";
import IEvent from "@/app/zints/IEvent";
import Event from "@/app/events/zcomps/Event";
import {log} from "node:util";

function Page() {
    const [events, setEvents] = useState<IEvent[]>([])
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        fetch("/api/events")
            .then(res => res.json())
            .then(data => setEvents(data.data))
            .catch(err => console.error(err))
    }, [refresh])

    return (
        <div className="container">
            <button onClick={() => setRefresh((v) => {
                setEvents([])
                return v + 1
            })}>refresh</button>

            <h1>events</h1>
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