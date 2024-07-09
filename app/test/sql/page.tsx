"use client"

import {useEffect, useState} from "react";
import {getRandomEvents} from "@/app/test/sql/actions";

function Page() {
    const [data, setData] = useState<(events_stages & events & IEvent)[]>();

    useEffect(() => {
        getRandomEvents().then(events => {
            console.log(events)

            return setData(events);
        })
    }, [])


    return (
        data?.map(e => {
            return <p key={e.stage_id}>name: {e.test}</p>
        })
    )
}

export default Page;