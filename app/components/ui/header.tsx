import Link from "next/link";
import {LogIn, LogOut} from "../userLog";

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
                    <HeaderButton value={"Logo"} href={"/"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"create_event"} href={"/profile/create/event"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"contact"} href={"/contact"}></HeaderButton>
                </div>
                {/*<div className="col">
                    <HeaderButton value={"profile"} href={"/profile"}></HeaderButton>
                </div>*/}

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