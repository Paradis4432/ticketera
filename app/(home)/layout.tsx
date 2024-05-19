import {PropsWithChildren} from "react";
import {Providers} from "@/app/utils/providers";
import {Header} from "@/app/components/ui/header";
import {Footer} from "@/app/components/ui/footer";

export default function Home({children}: PropsWithChildren<{}>) {
    return (
        <Providers>
            <Header/>
            {children}
            <Footer/>
        </Providers>
    )
}