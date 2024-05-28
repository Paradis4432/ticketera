interface IEvent {
    event_id: number,
    event_name: string,
    event_description: string,
    event_location: string,
    event_starting_date: Date,
    event_state: number,
}

interface IContactFormEmailProps {
    name: string,
    email: string,
    message: string
}

interface ITicket {
    ticket_id:number
    ticket_name: string,
    ticket_reason: string,
    ticket_creation_date: Date,
    ticket_expiration_date: Date,
    ticket_uses: number,
    ticket_max_uses: number,
    ticket_price: number
    event_name: string,
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

}