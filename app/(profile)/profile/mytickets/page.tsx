"use client"
import {Ticket} from "@/app/components/tickets";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {getUserTickets} from "@/app/(profile)/profile/actions";


function Page() {
    const {data: session} = useSession();

    const [tickets, setTickets] = useState<ITicket[]>([]);

    useEffect(() => {
        if (session?.user) {
            getUserTickets(session.user.email)
                .then(tickets => {
                    setTickets(tickets);
                })
        } else {
            // redirect / [...login]
        }
    }, [session]);


    return (
        <div>
            <h1>tus tickets</h1>
            {
                tickets.length == 0 ? (
                    <h2>loading</h2>
                ) : (
                    // missing qr codes
                    tickets.map((ticket, id) => (
                        (session?.user?.email && <Ticket ticket={ticket} email={session?.user?.email} key={id}/>)
                    ))
                )
            }
        </div>
    )
}

export default Page;