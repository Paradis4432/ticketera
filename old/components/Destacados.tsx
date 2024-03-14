"use client"
import {fetchDestacados} from "@/old/data/DataManager";
import {useEffect, useState} from "react";
import {NormalEvent} from "@/old/data/events/impls/NormalEvent";

export default function Destacados() {
    const [destacados, setDestacados] = useState<NormalEvent[]>([]);

    const setupDestacados = async () => {
        const data = await fetchDestacados();
        setDestacados(data);
    }

    useEffect(() => {
        setupDestacados()
    }, []);
    return (
        <div className="container">
            <p>destacados</p>

            {destacados.map((event, index) => (
                    <div key={index}>
                        <p>{event.id} {event.name} onclick -{">"} event info -{">"} save metric</p>
                    </div>
                )
            )}
        </div>
    )
}