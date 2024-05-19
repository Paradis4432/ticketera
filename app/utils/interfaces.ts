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
    uses: number,
    max_uses: number,
    price: number,
    reason: string,
    expiration_date: Date
    creation_date: Date
}

interface IMetricSales {
    ticket_name: string,
    sold: number,
    courtesies: number,
    cancelled: number,
    not_claimed: number,
    price: number,
    total: number
}

interface IMetricUsers {
    visits: number,
    started_but_denied: number,
    in_fav: number
}