"use client"

import Image from "next/image";
import bgImage from "@/assets/homebg.png";
import Iso from "@/assets/Iso.png";
import Buttons from "@/app/components/ui/buttons";



const Hero = () => {
    const handleScroll = () => {

    }
    
    return (
        <div className="w-full min-h-[695px] max-h-[995px] absolute content-center bg-top bg-cover">
            <Image className="z-0 max-h-[900px] w-full bg-custom-1 blur-sm" src={bgImage} alt="" />
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <Image src={Iso} alt="isologo" />
                <h1 className="z-10 font-normal text-center text-5xl text-white">
                    Bienvenidos a Selva Tickets
                </h1>
                <h2 className="z-10 font-normal text-center text-3xl text-gray-400 mt-3">
                    Tus eventos en un solo lugar
                </h2>
                <Buttons 
                 text="Ver Eventos"
                 containerStyle="bg-gray-200 text-black rounded-full mt-10 py-[10px] px-[16px] text-xl font-normal"
                 handleClick={handleScroll}
                />
            </div>
        </div>
    );
}

export default Hero