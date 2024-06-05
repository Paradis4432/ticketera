import Link from "next/link";
import React from "react";


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

function deleteEvent() { // ERROR unused method?

}

interface UserEventsProps {
    event: IEvent;
    onDelete: () => void;
}

export const UserEvents: React.FC<UserEventsProps> = ({event, onDelete}) => { // ERROR user eventS pero usa 1 evento?

    return (
        <div>
            <h2>{event.name}</h2>
            <ul>
                <li>ID: {event.event_id}</li>
                <li>{event.description}</li>
                <li>{event.location}</li>
                <li>{event.starting_date.toString()}</li>
                <li> State: {event.state}</li>
            </ul>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export {
    PublicEvent,
    PublicEventDetailed
}