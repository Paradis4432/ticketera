"use client"

import Link from "next/link";
import {signIn, signOut} from "next-auth/react"
import {useSession} from "next-auth/react";

function Header() {
    const {data: session} = useSession();
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
                    <HeaderButton value={"EVENTS"} href={"/events"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"CREATE"} href={"/events/create"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"ETC"} href={"/events"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"PROFILE_PIC"} href={"/profile"}></HeaderButton>
                </div>
                {!session?.user &&
                    <div className="col">
                        <button onClick={() => signIn()} className="btn btn-primary">Sign in</button>
                    </div>
                }
                <div className="col">
                    <button onClick={() => signOut()} className="btn btn-primary">Log out</button>
                </div>


            </div>
        </div>
    )
}

type HeaderButtonProps = {
    value: string;
    href: string;
}

function HeaderButton({value, href}: HeaderButtonProps) {
    return (
        <Link href={href} passHref>
            <h1 style={{cursor: 'pointer'}}>{value}</h1>
        </Link>
    )
}

export default Header;