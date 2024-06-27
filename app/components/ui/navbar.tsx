import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className="w-full bg-black max-h-[72px] z-10 absolute">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">  
                <Link href="/" className='text-white' >
                    Logo
                </Link>
                <div className='flex space-x-6'>
                <Link href="/contact" className="text-white">
                    Contact
                </Link>
                <Link href="/profile/create/event" className="text-white">
                    Crear Evento
                </Link>
                </div>
            </nav>
        </header>
    );
}

export {
    Navbar
} 