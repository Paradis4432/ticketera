import React from 'react'
import Image from 'next/image';
import isoCol from "@/assets/isoColW.png";


const Eventsec = () => {

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
            </div>
        </div>
    )
}


export default Eventsec