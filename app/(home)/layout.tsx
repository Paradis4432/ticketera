import {PropsWithChildren} from "react";
import Navbar from "@/app/components/ui/navbar";
import {Footer} from "@/app/components/ui/footer";
import { Koulen } from 'next/font/google';

//Koulen Font
const koulen = Koulen({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-koulen',
});

export default function Home({children}: PropsWithChildren<{}>) {
    return (
        <html>
            <body className={koulen.className}>
              {children}
              <Footer/>
            </body>
        </html>
    )
}