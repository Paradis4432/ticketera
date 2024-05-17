import {PropsWithChildren} from "react";
import {Header} from "@/app/components/ui/header";
import {Footer} from "@/app/components/ui/footer";

export default function Home({children}: PropsWithChildren<{}>) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}