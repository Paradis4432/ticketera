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

    console.log(user_id, event_id, ticket_id)
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
    console.log(userData)
    return (
        <ul>
            <li>
                <h3>User:</h3>
                <ul>
                    <li>
                        <h3>Name: {userData[0]?.user_name}</h3>
                    </li>
                    <li>
                        <h3>Email: {userData[0]?.user_email}</h3>
                    </li>
                </ul>
            </li>
            <li>
                <h3>Ticket Name: {userData[0]?.ticket_name}</h3>
                <ul>
                    <li>
                        <h3>Reason: {userData[0]?.ticket_reason}</h3>
                    </li>
                    <li>
                        <h3>Creation Date: {userData[0]?.ticket_creation_date.toLocaleString()}</h3>
                    </li>
                    <li>
                        <h3>Expiration Date: {userData[0]?.ticket_expiration_date.toLocaleString()}</h3>
                    </li>
                    <li>
                        <h3>Uses: {userData[0]?.ticket_uses}</h3>
                    </li>
                    <li>
                        <h3>Max Uses: {userData[0]?.ticket_max_uses}</h3>
                    </li>
                    <li>
                        <h3>Price: {userData[0]?.ticket_price}</h3>
                    </li>
                </ul>
            </li>
            <li>
                <h3>Event Name: {userData[0]?.event_name}</h3>
                <ul>
                    <li>
                        <h3>Description: {userData[0]?.event_description}</h3>
                    </li>
                    <li>
                        <h3>Location: {userData[0]?.event_location}</h3>
                    </li>
                    <li>
                        <h3>Starting Date: {userData[0]?.event_starting_date.toLocaleString()}</h3>
                    </li>
                    <li>
                        <h3>State: {userData[0]?.event_state}</h3>
                    </li>
                </ul>
            </li>
        </ul>

    )

}

export default Page;