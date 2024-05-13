function PublicEvent({event}: { event: IEvent | undefined }) {
    return (
        <div>{
            event ? (
                <p>event with name: {event.name}, id: {event.event_id}</p>
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

export {
    PublicEvent,
    RenderPublicEvents
}