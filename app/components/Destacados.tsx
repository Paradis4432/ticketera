"use client"
import {fetchDestacados} from "@/data/DataManager";
import {useEffect, useState} from "react";
import {TEvent} from "@/data/TEvent";

export default function Destacados() {
    const [destacados, setDestacados] = useState<TEvent[]>([]);

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
                        <p>{event.id} {event.name} onclick -{">"} event info</p>
                    </div>
                )
            )}
        </div>
    )
}