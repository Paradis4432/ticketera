interface IEvent {
    event_id: number,
    name: string
}

interface IContactFormEmailProps {
    name: string,
    email: string,
    message: string
}

interface ITickets {
    ticket_id:number
    ticket_name: string,
    event_name: string,
    location: string,
    starting_date: string
}