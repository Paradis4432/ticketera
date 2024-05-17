function Ticket({ticket}: { ticket: ITicket }) {
    return (
        <p>ticket: {ticket.event_name}</p>
    )
}

export {
    Ticket
}