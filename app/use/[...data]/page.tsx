"use client";
import { useEffect, useState } from "react";
import { getUserData } from "@/app/use/[...data]/actions";
import { useSession } from "next-auth/react";
import { LoadingWrapper } from "@/app/components/ui/loader";

function Page(params: IParamsUse) {
    const { data: session } = useSession();
    const [userData, setUserData] = useState<IUserData[]>([]);
    const user_id = params.params.data[0];
    const ticket_id = params.params.data[1];

    useEffect(() => {
        if (session?.user) {
            getUserData(Number(user_id), Number(ticket_id))
                .then((userData) => {
                    setUserData(userData);
                    console.log(userData[0])
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        } else {
        }
    }, [session, user_id, ticket_id]);

    return (
        <div>
            <LoadingWrapper of={userData}>
                <ul>
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
            </LoadingWrapper>
        </div>
    );
}

export default Page;