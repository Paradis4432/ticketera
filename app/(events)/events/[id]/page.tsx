"use client"
import {useEffect, useState} from "react";
import {fetchEventByID} from "@/app/(events)/events/[id]/actions";
import {LoadingWrapper} from "@/app/components/ui/loader";
import {PublicEventDetailed} from "@/app/components/ui/events";

function Page({params}: { params: { id: number } }) {
    const [event, setEvent] = useState<IEvent>();

    useEffect(() => {
        fetchEventByID(params.id)
            .then(data => {
                if (data) {
                    if (data.length !== 1) {

                    }
                    console.log(data)
                    setEvent(data[0])
                } else {
                    // handle error
                }
            })
    }, [params.id]);

    return (
        <LoadingWrapper of={event}>
            <PublicEventDetailed event={event}/>
        </LoadingWrapper>
    )
}

export default Page
