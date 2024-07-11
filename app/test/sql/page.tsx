"use client"

import {useEffect, useState} from "react";
import {getRandomEvents} from "@/app/test/sql/actions";
import {RT} from "@/app/utils/providers";

function Page() {
/*    //let [data, setData] = useState<Awaited<ReturnType<typeof getRandomEvents>>[]>([]);
    let [data, setData] = useState<RT<typeof getRandomEvents>>([]);


    useEffect(() => {
        getRandomEvents().then(events => {
            return setData(events);
        })
    }, [])*/


    return (
        <p>lol</p>

    )
}

export default Page;