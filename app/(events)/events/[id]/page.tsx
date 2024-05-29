"use client"
import {useEffect, useState} from "react";
import {fetchEventByID} from "@/app/(events)/events/[id]/actions";

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
            public event detailed
            {/*<PublicEvent event={event}/>*/}
        </div>
    )
}

export default Page
