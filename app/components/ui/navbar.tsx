"use client"

import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import logo from '../../../assets/bynlogo.png';
import Buttons from "@/app/components/ui/buttons";

function NavBarLink({link, path, valid, invalid, text}: {
    link: string,
    path: string,
    valid?: string,
    invalid?: string,
    text: string
}) {
    const pathname = usePathname(); // se llama multiples veces, mover o hacer global / compartido, o eliminar preferiblemente

    const defaultValidClass = "text-blue-500 font-semibold text-sm";
    const defaultInvalidClass = "text-black font-medium text-sm";

    return (
        <Link href={link} className={pathname === path ? (valid || defaultValidClass) : (invalid || defaultInvalidClass)}>
            {text}
        </Link>
    );
}

const Navbar = () => {
    return (
        <header className="w-full bg-gray-100 max-h-[72px] z-10 absolute">
            <nav className="max-w-[1440px] flex mx-auto justify-center items-center sm:px-16 px-6 py-3">
                <Link href="/" className='flex max-h-[39px] w-auto'>
                    <Image src={logo} alt="Selva Tickets logo"/>
                </Link>
                <div className='flex justify-center gap-8 ml-auto mr-auto'>
{/*                    <Link href="/"
                          className={isClient && pathname === '/' ? 'text-blue-500 font-semibold text-sm' : ''}>
                        Home
                    </Link>*/}
                    <NavBarLink link={"/"} path={"/"} text={"home"}></NavBarLink>
                    {/*<Link href="/profile"
                          className={isClient && pathname === '/profile' ? 'text-blue-500 font-semibold text-sm' : 'text-black font-medium text-sm'}>
                        Eventos
                    </Link>*/}
{/*                    <Link href="/profile/create/event"
                          className={isClient && pathname === '/profile/create/event' ? 'text-blue-500 font-semibold text-sm' : 'text-black font-medium text-sm'}>
                        Productores
                    </Link>
                    <Link href="/contact"
                          className={isClient && pathname === '/contact' ? 'text-blue-500 font-semibold text-sm' : 'text-black font-medium text-sm'}>
                        Preguntas
                    </Link>*/}
                </div>
                <Buttons
                    text="Iniciar Sesion"
                    containerStyle="bg-blue-600 text-white rounded-xl py-[8px] px-[20px] text-base font-normal tracking-wide"
                    navigateTo='/login'
                />

            </nav>
        </header>
    );
}

export {
    Navbar
}
