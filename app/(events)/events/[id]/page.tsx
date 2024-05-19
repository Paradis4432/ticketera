"use client"
import {useEffect, useState} from "react";
import {fetchEventByID} from "@/app/(events)/events/[id]/actions";
import {PublicEvent} from "@/app/components/ui/events";

function Page({params}: { params: { id: string } }) {
    const [event, setEvent] = useState<IEvent>();

    useEffect(() => {
        fetchEventByID(params.id).then(data => {
            if (data) {
                setEvent(data[0])
            }
        })
    }, [params.id]);

    return (
        <div>
            <PublicEvent event={event}/>
        </div>
    )
}

export default Page
