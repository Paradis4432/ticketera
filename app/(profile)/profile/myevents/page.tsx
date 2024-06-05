"use client"
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {UserEvents} from "@/app/components/ui/events";
import {deleteUserEvent, getUserEvent} from "@/app/(profile)/profile/actions"; // Asegúrate de tener esta función definida
import {LoadingWrapper} from "@/app/components/ui/loader";

function Page() {
    const {data: session} = useSession();
    const [events, setEvents] = useState<IEvent[]>([]);

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
                    <LoadingWrapper of={events} key={event.event_id}>
                        <UserEvents event={event} setEvents={setEvents}/>
                    </LoadingWrapper>
                ))
            }
        </div>
    );
}

export default Page;