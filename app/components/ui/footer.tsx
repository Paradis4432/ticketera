import Image from 'next/image';
import Link from 'next/link';
import logoW from '../../../assets/logow.png';

function Footer() {
    return (
        <div className="bg-blue-600 w-full bg-cover min-h-[100px] flex relative bottom-0">
            <div className="container max-w-[1440px] max-h-[232px] flex justify-around items-center ">
                <Link href="/" className='Logo'>
                    <Image className="max-h-[41px]" src={logoW} alt="white logo"/>
                </Link>
                <div className="links">
                    <Link href="/" className="text-white font-medium text-sm">
                        Terms
                    </Link>
                    <Link href="/profile/create/event" className="text-white font-medium text-sm mx-5">
                        Privacy
                    </Link>
                    <Link href="/profile/create/event" className="text-white font-medium text-sm ">
                        Cookies
                    </Link>
                </div>
                <div className="socials text-white">
                    Socials
                </div>
            </div>
        </div>
    )
}

export {
    Footer
}