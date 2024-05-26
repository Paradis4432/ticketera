
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
    ticket_event_name: string,
    ticket_uses: number,
    ticket_max_uses: number,
    ticket_price: number,
    ticket_reason: string,
    ticket_expiration_date: Date
    ticket_creation_date: Date
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

interface IParamsUse {
    params: {
        data: string[]
    }
}

interface IUserData extends ITicket, IEvent{
    ticket_creation_date: Date,
    ticket_expiration_date: Date,
    ticket_uses: number,
    ticket_max_uses: number,
    event_name: string,
    event_description: string,
    event_location: string,
    event_starting_date: Date,
    event_state: number
    user_name: string,
    user_email: string,
}