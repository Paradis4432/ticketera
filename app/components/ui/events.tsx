import Link from "next/link";

function PublicEvent({event}: { event: IEvent | undefined }) {
    return (
        <div>{
            event ? (
                <p>event with name: {event.event_name}, id: {event.event_id}</p>
                <Link href={/events/id}>detalles del evento -> comprar ticket etc</Link>
            ) : (
                <p>not found</p>
            )
        }
        </div>

    )
}

function RenderPublicEvents(events: IEvent[]) {
    return (
        events.map((e, i) => (
            <div key={i}>
                <PublicEvent event={e}/>
            </div>
        ))
    )
}

function UserEvents({event}: { event: IEvent }) {
    return (
        <>
            <ul>
                <li>
                    {event.location}
                </li>
                <li>
                    {event.starting_date.toString()}
                </li>
                <li>
                    {event.state}
                </li>
            </ul>

        </>

    )
}

export {
    PublicEvent,
    RenderPublicEvents,
    UserEvents

}