"use client"
import {Ticket} from "@/app/components/ui/tickets";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {getUserTickets} from "@/app/(profile)/profile/actions";
import {LoadingWrapper} from "@/app/components/ui/loader";


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
                    tickets.map((ticket, id) => (
                        <LoadingWrapper of={tickets} key={id}>
                            {session && <Ticket ticket={ticket} email={session?.user?.email ?? undefined}/> }
                        </LoadingWrapper>
                    ))

            }
        </div>
    )
}

export default Page;