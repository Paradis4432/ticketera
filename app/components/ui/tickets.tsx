function Ticket({ticket}: { ticket: ITickets }) {
    return (
        <p>ticket: {ticket.event_name}</p>
    )
}

export {
    Ticket
}