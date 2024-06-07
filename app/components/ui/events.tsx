import Link from "next/link";
import React from "react";
import {deleteUserEvent} from "@/app/(profile)/profile/actions";


// evento que aparecen en el home, minimo -> on click render public event detailed on endpoint
function PublicEvent({event}: { event: IEvent }) {
    return (
        <div>{
            event ? (
                <>
                    <Link href={`/events/${event.event_id}`}>
                        <h3>{event.name}</h3>

                    </Link>
                    <p>{event.description}</p>
                </>

                /*<Link href={/events/id}>detalles del evento -> comprar ticket etc</Link>*/
            ) : (
            <p>not found</p>
            )
        }
        </div>
    )
}

interface propsPEV {
    event?: IEvent ;

}

function PublicEventDetailed({event}: propsPEV) {
    return (
        <>
            <h1>{event?.name}</h1>
            <ul>
                <li>
                    <h4> ID: {event?.event_id}</h4>
                </li>
                <li>
                    <h4>{event?.description}</h4>
                </li>
                <li>
                    <h4>{event?.starting_date.toString()}</h4>
                </li>
                <li>
                    <h4>{event?.location.toString()}</h4>
                </li>
                <li>
                    <h4>state: {event?.state}</h4>
                </li>
            </ul>
        </>
    )
}



interface UserEventsProps {
    event: IEvent;
    setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
}



export const UserEventDetailed: React.FC<UserEventsProps> = ({event, setEvents}) => {
    const onDelete = async () => {
        await deleteUserEvent(event.event_id);
        setEvents((prevEvents) => prevEvents.filter((e) => e.event_id !== event.event_id));
    };
    return (
        <div>
            <h2>{event.name}</h2>
            <ul>
                <li>ID: {event.event_id}</li>
                <li>{event.description}</li>
                <li>{event.location}</li>
                <li>{event.starting_date.toString()}</li>
                <li> State: {event.state}</li>
                <li> <Link href={`/profile/myevents/${event.event_id}`}>Metrics</Link></li>
            </ul>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export {
    PublicEvent,
    PublicEventDetailed
}