import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/bynlogo.png';



const Navbar = () => {

    return (
        <header className="w-full bg-gray-200 max-h-[72px] z-10 absolute">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-3">  
                <Link href="/" className='flex max-h-[39px] w-auto'>
                    <Image src={ logo } alt="Selva Tickets logo" />
                </Link>
                <div className='flex gap-8'>
                <Link href="/" className="text-black font-medium text-base">
                    Home
                </Link>
                <Link href="/profile/create/event" className="text-black font-medium text-base">
                    Eventos
                </Link>
                <Link href="/profile/create/event" className="text-black font-medium text-base ">
                    Descubre Selva Tickets
                </Link>
                </div>
            </nav>
        </header>
    );
}

export {
    Navbar
} 