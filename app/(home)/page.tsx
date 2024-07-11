"use client"

import Events from '@/app/components/ui/events';
import Hero from '@/app/components/ui/hero';
import Navbar from '@/app/components/ui/navbar';
import Productor from '@/app/components/ui/productor';
import Pregsec from '@/app/components/ui/pregsec';
import {SearchBar} from '../components';
import {useEffect, useState} from "react";
import {fetchAllEvents} from "@/app/(home)/actions";
import Link from "next/link";
import {readEvents} from "@/models/queries/events";
import {LoadingWrapper} from "@/app/components/ui/loader";
import Image from "next/image";
import bynlogo from "../../assets/bynlogo.png"

export default function Home() {
    const [events, setEvents] = useState<Events[]>([]);

    useEffect(() => {
/*        fetchTop10Events()
            .then(events => { // .then solo si es Promise
                setEvents(events)
            })*/
    });

    return (
        <main>
            <Navbar/>
            <Hero/>
            <div className="w-full min-h-[76px] bg-[#54E686] z-1 mt-0 flex items-center justify-start">
                <div className="w-full text-white overflow-hidden flex space-around mx-0">
                    <Image className="h-[32px] w-[195px]" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px]" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px]" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px]" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px]" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px]" src={bynlogo} alt=""/>
                </div>
            </div>
            <Events/>
            <SearchBar/>
            <LoadingWrapper of={events}>
                {
                    events.map(e => (
                        (e.name)
                    ))
                }
            </LoadingWrapper>
            <Productor/>
            <Pregsec/>
        </main>
    )
}