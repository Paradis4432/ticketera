"use client"
import {useEffect, useState} from "react";
import {fetchEventByID} from "@/app/(events)/events/[id]/actions";
import {LoadingWrapper} from "@/app/components/ui/loader";

function Page({params}: { params: { id: string } }) {
    const [event, setEvent] = useState<IEvent>();

    useEffect(() => {
        fetchEventByID(params.id).then(data => {
            if (data) {
                setEvent(data)
            }
        })
    }, [params.id]);

    return (
        <LoadingWrapper of={event}>
            <h1>{event?.name}</h1>
            <ul>
                <li>
                    <h4> ID: {event?.event_id}</h4>
                </li>
                <li>
                    <h4>{event?.description}</h4>
                </li>
                <li>
                    <h4>{event?.starting_date.toString()}</h4>
                </li>
                <li>
                    <h4>{event?.location.toString()}</h4>
                </li>
                <li>
                    <h4>state: {event?.state}</h4>
                </li>
            </ul>
        </LoadingWrapper>
    )
}

export default Page
