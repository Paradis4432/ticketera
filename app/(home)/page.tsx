"use client"

import Hero from '@/app/components/ui/hero';
import {useEffect, useState} from "react";
import {fetchTop10Events} from "@/app/(home)/actions";
import {LoadingWrapper} from "@/app/components/ui/loader";
import Image from "next/image";

export default function Home() {
    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        fetchTop10Events()
            .then(events => { // .then solo si es Promise
                setEvents(events)
            })
    }, []);

    return (
        <main>
            <Hero/>
            <div className="w-full min-h-[112px] bg-purple-700 z-1 mt-0 flex items-center justify-start">
                <div className="w-full text-white font-medium text-4xl overflow-hidden">
                    <h1 className="right-to-left whitespace-nowrap">Selecciona tus Eventos Selecciona tus Eventos
                        Selecciona
                        tus Eventos Selecciona tus Eventos Selecciona tus Eventos Selecciona tus Eventos Selecciona tus
                        Eventos Selecciona tus Ev</h1>
                </div>
            </div>
            <LoadingWrapper of={events}>
                {
                    events.map(e => (
                        (e.name)
                    ))
                }
            </LoadingWrapper>

        </main>
    )
}