
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Buttons from '../../../components/ui/buttons';
import logo from '../../../../assets/bynlogo.png';
import bgImage from '../../../../assets/bgimage.png';
import isoCol from "@/assets/isoColW.png";

const Page = () => {
  return (
    <main>
    <header className="w-full bg-gray-100 max-h-[72px] z-10 absolute top-0">
        <nav className="max-w-[1440px] flex mx-auto justify-between items-center sm:px-16 px-6 py-3">
            <Link href="/" className='flex max-h-[39px] w-auto'>
                <Image src={logo} alt="Selva Tickets logo"/>
            </Link>
            <Buttons
                text="Perfil"
                containerStyle="bg-blue-600 text-white rounded-xl py-[8px] px-[20px] text-base font-normal tracking-wide"
                navigateTo='/profile'
            />
        </nav>
    </header>
    <body>
    <div className="w-full min-h-[695px] max-h-[995px] relative content-center bg-top bg-cover">
            <Image className="z-0 max-h-[900px] w-full bg-custom-1 blur-sm" src={bgImage} alt="" />
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-2">
                <Image className="w-[56px] h-[56px] md:w-[80px] md:h-[80px] mb-3 md:mb-0" src={isoCol} alt="" />
                <h1 className="z-10 font-koulen text-center text-6xl text-white tracking-wider">
                ¡BIENVENIDO SANTIAGO!
                </h1>
                <h2 className="z-10 font-normal text-center text-xl text-gray-300 mt-3">
                    Descubre Selva Tickets, compra tus eventos de forma <br /> segura, rápida y sencilla, todo en un solo lugar.
                </h2>
                <div className='gap-8 flex justify-center '>
                <Buttons
                 text="Mis Tickets"
                 containerStyle="bg-white flex text-black rounded-xl mt-10 py-[8px] px-[10px] text-lg font-normal tracking-wide gap-[10px]"
                 navigateTo='/'
                 icon='/assets/qricon.png'
                />
                <Buttons 
                 text="Comprar Tickets"
                 containerStyle="bg-white text-black rounded-xl mt-10 py-[8px] px-[10px] text-lg font-normal tracking-wide gap-[10px]"
                 navigateTo='/'
                />
                <Buttons 
                 text="Soporte"
                 containerStyle="bg-white text-black     rounded-xl mt-10 py-[8px] px-[10px] text-lg font-normal tracking-wide gap-[10px]"
                 navigateTo='/'
                />
                </div>
            </div>
        </div>
    </body>
    </main>
  )
}

export default Page

