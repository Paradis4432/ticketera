import Link from "next/link";
import {LogIn, LogOut} from "@/app/components/userLog";

type HeaderButtonProps = {
    value: string;
    href: string;
}

function Header() {
    return (
        // TODO space between logo, buttons and profile pic
        // TODO add profile pic
        // TODO add mobile version -> add dropdown menuasd
        <div className="container">
            <div className="row">
                <div className="col">
                    <HeaderButton value={"LOGO"} href={"/"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"EVENTS"} href={"/myevents"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"CREATE"} href={"/myevents/create"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"contact"} href={"/contact"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"PROFILE_PIC"} href={"/profile"}></HeaderButton>
                </div>

                <div className="col">
                    <LogIn/>
                </div>
                <div className="col">
                    <LogOut/>
                </div>
            </div>
        </div>
    )
}


function HeaderButton({value, href}: HeaderButtonProps) {
    return (
        <Link href={href} passHref>
            <h1 style={{cursor: 'pointer'}}>{value}</h1>
        </Link>
    )
}

export {
    Header,
    HeaderButton
}