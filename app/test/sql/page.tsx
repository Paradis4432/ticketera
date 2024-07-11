"use client"

import {useEffect, useState} from "react";
import {getRandomEvents} from "@/app/test/sql/actions";

function Page() {
    //let [data, setData] = useState<Awaited<ReturnType<typeof getRandomEvents>>[]>([]);
    let [data, setData] = useState<Awaited<ReturnType<typeof getRandomEvents>>>([]);


    useEffect(() => {
        getRandomEvents().then(events => {
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