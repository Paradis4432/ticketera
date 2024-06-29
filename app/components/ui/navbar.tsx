"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../../../assets/bynlogo.png';
import Buttons from "@/app/components/ui/buttons";


const Navbar = () => {

    const handleScroll = () => {}

    const router = useRouter();
    

    return (
        <header className="w-full bg-gray-100 max-h-[72px] z-10 absolute">
            <nav className="max-w-[1440px] mx-auto flex justify-around items-center sm:px-16 px-6 py-3">  
                <Link href="/" className='flex max-h-[39px] w-auto'>
                    <Image src={ logo } alt="Selva Tickets logo" />
                </Link>
                <div className='flex gap-8'>
                <Link href="/" className={router.pathname === '/' ? 'text-black font-medium text-sm' : 'text-blue-500 font-semibold text-sm'}>
                    Home
                </Link>
                <Link href="/profile/create/event" className="text-black font-medium text-sm">
                    Eventos
                </Link>
                <Link href="/profile/create/event" className="text-black font-medium text-sm ">
                    Productores
                </Link>
                <Link href="/profile/create/event" className="text-black font-medium text-sm ">
                    Preguntas
                </Link>
                </div>
                <Buttons 
                 text="Iniciar Sesion"
                 containerStyle="bg-blue-600 text-white rounded-xl py-[8px] px-[20px] text-base font-normal tracking-wide"
                 handleClick={handleScroll}
                />
                
            </nav>
        </header>
    );
}

export {
    Navbar
} 