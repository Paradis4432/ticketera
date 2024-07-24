"use client"
import React from 'react'
import Image from 'next/image';
import isoCol from "@/assets/isoColW.png";
import { useEffect, useState } from 'react';
import { readEvents } from '@/models/queries/events';

type Events = {
  id: string;
  name: string;
};


const Eventsec = () => {

  const [events, setEvents] = useState<Events[]>([]);
  const limit = 9;

  useEffect(() => {
    async function readEvents() {
      const response = await fetch(`/api/events?limit=${limit}`);
      const data = await response.json();
      setEvents(data);
    }
    readEvents();
  }, [limit]);

    return (
        <div className="max-w-[1440px] flex justify-center relative mx-auto">
            <div className="flex flex-col justify-center">
                <div
                    className="py-[8px] px-4 bg-[#292929] text-white rounded-3xl text-xl font-normal mt-5 mx-auto flex">
                    <Image className="w-[25px] mr-[10px]" src={isoCol} alt=""/>
                    Accesos Rápidos & seguros con nuestros QRs
                </div>
                <h1 className="text-black text-5xl font-koulen mt-5 mx-auto">descubre los eventos disponibles</h1>
                <p className="text-gray-400 text-base font-normal mt-3 mx-auto">Busca todos los eventos que existen en
                    nuestra plataforma.</p>

                    <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Events</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
             {events.map(event => (
            <li key={event.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold">{event.name}</h2>
          </li>
        ))}
      </ul>
    </div>
            </div>
            
        </div>
    )
}


export default Eventsec