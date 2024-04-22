"use client"

import getEvents, {IEvent} from "@/app/utils/db/events/eventQueryManager";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Page() {
    // TODO fix this suspense
    const [events, setEvents] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState(true);

    const [fetch, setFetch] = useState(0);

    useEffect(() => {
        setLoading(true);
        getEvents().then(res => {
            setLoading(false);

            if (res.code != 200) {
                alert('Failed to fetch events: ' + res.message);
                setEvents([])
                return;
            }

            const events = res.data;
            setEvents(events);
        });
    }, [fetch]);

    const refresh = () => {
        setFetch(fetch => fetch + 1);
    }

    return (
        <div className="container-fluid">
            <button onClick={refresh}>refresh</button>

            <h1>events</h1>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <div className="container">
                        {events.map((event, index) => (
                            <Event key={index} event={event}/>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

function Loading() {
    return <h2>Loading...</h2>;
}

function Event({event}: { event: any }) {
    return (
        <div>
            <h2>{event.name}</h2>
            {/*            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.price.toFixed(2)}</p>
            <p>{event.capacity}</p>*/}
        </div>
    )
}

/**
 *     const [events, setEvents] = useState<IEvent[]>([]);
 *
 *     useEffect(() => {
 *         const fetchEvents = async () => {
 *             try {
 *                 const events = await getDemo();
 *                 setEvents(events);
 *             } catch (error) {
 *                 console.error('Failed to fetch events:', error);
 *             }
 *         };
 *
 *         fetchEvents();
 *     }, []);
 *
 * {events.map((event, index) => (
 *                         <div key={index}>
 *                             <h2>{event.name}</h2>
 *                             <p>{event.description}</p>
 *                             <p>{event.date}</p>
 *                             <p>{event.location}</p>
 *                             <p>{event.price.toFixed(2)}</p>
 *                             <p>{event.capacity}</p>
 *                         </div>
 *                     ))}
 */