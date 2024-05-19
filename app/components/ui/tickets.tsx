function Ticket({ticket}: { ticket: ITicket }) {
    return (
        <>
            <h4>{ticket.ticket_name}</h4>
            <ul>
                <li>
                    {ticket.event_name}
                </li>
                <li>
                    {ticket.reason}
                </li>
                <li>
                    {ticket.price}
                </li>
                <li>
                    {ticket.uses}
                </li>
                <li>
                    {ticket.max_uses}
                </li>
                <li>
                    {ticket.creation_date.toString()}
                </li>
                <li>
                    {ticket.expiration_date.toString()}
                </li>
            </ul>
        </>
    )
}

export {
    Ticket
}