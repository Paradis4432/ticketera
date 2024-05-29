
interface IEvent {
    id: number,
    name: string,
    description: string,
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
    id:number
    name: string,
    reason: string,
    creation_date: Date,
    expiration_date: Date,
    uses: number,
    max_uses: number,
    price: number
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