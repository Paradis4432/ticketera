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

    const handleDeleteEvent = async (eventId: number) => { // ERROR action in client, use callbacks
        try {
            await deleteUserEvent(eventId);
            setEvents((prevEvents) => prevEvents.filter(event => event.event_id !== eventId));
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    return (
        <div>
            <h1>My Events</h1>
            {
                events.map((event) => ( // ERROR events.map afuera del wrapper? | no events found?
                    <LoadingWrapper of={events} key={event.event_id}>
                        <UserEvents event={event} onDelete={() => handleDeleteEvent(event.event_id)}/>
                    </LoadingWrapper>
                ))
            }
        </div>
    );
}

export default Page;