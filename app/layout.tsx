import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css"

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
        <div className="app">
            {children}
        </div>
        </body>
        </html>
    );
}
