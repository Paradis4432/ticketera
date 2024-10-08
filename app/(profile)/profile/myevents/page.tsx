"use client"
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {getUserEvent} from "@/app/(profile)/profile/actions";
import {LoadingWrapper} from "@/app/components/ui/loader";

function Page() {
    const {data: session} = useSession();
    const [events, setEvents] = useState<Events[]>([]);

    useEffect(() => {
        if (session?.user) {
            getUserEvent(session.user.email) // TODO replace email with id
                .then((events) => {
                    setEvents(events);
                })
                .catch((error) => {
                    console.error("Error fetching user events:", error);
                })
        }
    }, [session]);


    return (
        <div>
            <h1>My Events</h1>
            {
                events.map((event) => (
/*                    <LoadingWrapper of={events} key={event.event_id}>
                        {/!*<UserEventDetailed event={event} setEvents={setEvents}/>*!/}
                    </LoadingWrapper>*/
                    <></>
                ))
            }
        </div>
    );
}

export default Page;