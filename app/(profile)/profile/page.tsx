"use client"

import {useSession} from "next-auth/react";
import {LoadingWrapper} from "@/app/components/ui/loader";
import Profile from "@/app/components/ui/profile";

export default function Page () {
    const {data: session} = useSession();

    return (
        <LoadingWrapper of={session}>
            {session && <Profile session={session}/> }
        </LoadingWrapper>
    )
}
