import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/app/componentes/header";
import Footer from "@/app/componentes/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Ticketera",
    description: "Ticketera",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>

        </html>
    );
}