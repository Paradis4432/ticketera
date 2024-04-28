function Event({event}: { event: any }) {
    return (
        <div>
            <h2>{event.name}</h2>
            {/*            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.price.toFixed(2)}</p>
            <p>{event.capacity}</p>*/}
        </div>
    )
}

export default Event;