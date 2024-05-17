interface IEvent {
    event_id: number,
    event_name: string,
    location: string,
    starting_date: Date,
    state: number,
}

interface IContactFormEmailProps {
    name: string,
    email: string,
    message: string
}

interface ITicket {
    ticket_id:number
    ticket_name: string,
    event_name: string,
    location: string,
    starting_date: string
}