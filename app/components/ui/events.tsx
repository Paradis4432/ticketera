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
    event?: IEvent;

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
                <li>
                    <button>
                        buy ticket redirect a mp
                    </button>
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
            </ul>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

const Events = () => {
    return(
    <div className="max-w-[1440px] flex justify-center relative mx-auto">
        <div className="flex flex-col justify-center">
            <div className="py-[8px] px-4 bg-gray-300 text-black rounded-3xl text-xl font-normal mt-5 mx-auto">Accesos Rápidos & seguros con nuestros QRs</div>
            <h1 className="text-black text-5xl font-bold mt-5 mx-auto">Todos Los Eventos Disponibles</h1>
            <p className="text-gray-400 text-base font-normal mt-3 mx-auto">Busca todos los eventos que existen en nuestra plataforma.</p>
        </div>
    </div>
    )
}

export default Events

export {
    PublicEvent,
    PublicEventDetailed,
}