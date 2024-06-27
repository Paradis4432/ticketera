import {PropsWithChildren} from "react";
import {Navbar} from "@/app/components/ui/navbar";
import {Footer} from "@/app/components/ui/footer";

export default function Home({children}: PropsWithChildren<{}>) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}