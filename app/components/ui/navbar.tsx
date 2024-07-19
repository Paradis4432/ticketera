"use client"

import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import logo from '../../../assets/logoCol.png';
import Buttons from "@/app/components/ui/buttons";

function NavBarLink({link, path, valid, invalid, text}: {
    link: string,
    path: string,
    valid?: string,
    invalid?: string,
    text: string
}) {
    const pathname = usePathname(); // se llama multiples veces, mover o hacer global / compartido, o eliminar preferiblemente

    const defaultValidClass = "text-[#54E686] font-semibold text-sm";
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
            <nav className="max-w-[1440px] flex justify-around mx-auto items-center md:px-16 px-4 py-3">
                <Link href="/">
                    <Image className="h-[24px] md:h-[32px] w-[132px] md:w-[200px]" src={logo} alt="Selva Tickets logo"/>
                </Link>
                <div className='justify-center gap-8 ml-auto mr-auto hidden md:flex'>
                    <NavBarLink link={"/"} path={"/"} text={"Home"}></NavBarLink>
                    <NavBarLink link={"/events"} path={"/events"} text={"Eventos"}></NavBarLink>
                    <NavBarLink link={"/login"} path={"/login"} text={"Productores"}></NavBarLink>
                    <NavBarLink link={"/contact"} path={"/contact"} text={"Preguntas"}></NavBarLink>
                </div>
                <Buttons
                    text="Iniciar Sesion"
                    containerStyle="bg-black text-white rounded-xl py-[8px] px-[20px] text-base font-normal tracking-wide"
                    navigateTo='/login'
                />

            </nav>
        </header>
    );
}

export default Navbar

