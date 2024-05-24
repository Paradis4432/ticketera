"use client"
import {useEffect, useState} from "react";
import {getEventMetricSale, getEventMetricUser} from "@/app/(profile)/profile/myevents/[id]/actions";
import {getUserEvent} from "@/app/(profile)/profile/actions";
import {useSession} from "next-auth/react";
import {getUserData} from "@/app/use/[...data]/actions";


function Page (params:IParamsUse) {
    const {data: session} = useSession();
    const [userData, setUserData] = useState<IUserData[]>([]);
    const [status, setStatus] = useState<String>("loading");

    const user_id = params.params.data[0];
    const event_id = params.params.data[1];
    const ticket_id = params.params.data[2];

    useEffect(() => {
        if (session?.user) {
            getUserData(Number(user_id), Number(event_id), Number(ticket_id))
                .then(userData => {
                    setUserData(userData);
                })

        } else {
            // TODO middleware so this cant happen
            setStatus("not logged in")
        }
    }, [session, params]);
    return (
        <h2>Page</h2>

    )

}

export default Page;