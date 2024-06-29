"use client"

import Image from "next/image";
import bgImage from "@/assets/homebg.png";
import Iso from "@/assets/Iso.png";
import Buttons from "@/app/components/ui/buttons";



const Hero = () => {
    const handleScroll = () => {

    }
    
    return (
        <div className="w-full min-h-[695px] max-h-[995px] relative content-center bg-top bg-cover">
            <Image className="z-0 max-h-[900px] w-full bg-custom-1 blur-sm" src={bgImage} alt="" />
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-2">
                <h1 className="z-10 font-bold text-center text-6xl text-white tracking-wider">
                Experiencias únicas con <br /> Selva Tickets!
                </h1>
                <h2 className="z-10 font-normal text-center text-xl text-gray-300 mt-3">
                    Descubre Selva Tickets, compra tus eventos de forma <br /> segura, rápida y sencilla, todo en un solo lugar.
                </h2>
                <Buttons 
                 text="Ver Eventos"
                 containerStyle="bg-blue-600 text-white rounded-xl mt-10 py-[8px] px-[36px] text-lg font-normal tracking-wide gap-[10px]"
                 handleClick={handleScroll}
                />
            </div>
        </div>
    );
}

export default Hero