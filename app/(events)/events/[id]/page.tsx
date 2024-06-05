"use client"
import {useEffect, useState} from "react";
import {fetchEventByID} from "@/app/(events)/events/[id]/actions";
import {LoadingWrapper} from "@/app/components/ui/loader";
import {PublicEventDetailed} from "@/app/components/ui/events";

function Page({params}: { params: { id: string } }) {
    const [event, setEvent] = useState<IEvent>();

    useEffect(() => {
        fetchEventByID(params.id).then(data => {
            if (data) {
                setEvent(data)
            }
        })
    }, [params.id]);

    // ERROR missing PublicEventDetailed?
    return (
        <LoadingWrapper of={event}>
            <PublicEventDetailed event={event}/>
        </LoadingWrapper>
    )
}

export default Page
