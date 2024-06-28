import {PropsWithChildren} from "react";
import {Navbar} from "@/app/components/ui/navbar";
import {Footer} from "@/app/components/ui/footer";

export default function Home({children}: PropsWithChildren<{}>) {
    return (
        <html>
            <body>
              <Navbar />
              {children}
              <Footer/>
            </body>
        </html>
    )
}