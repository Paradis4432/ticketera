interface Castable {
}

interface IEvent extends Castable {
    event_id: number,
    name: string,
    description: string,
    location: string,
    starting_date: Date,
    state: number,
}

interface IContactFormEmailProps extends Castable {
    name: string,
    email: string,
    message: string
}

interface ITicket extends Castable {
    ticket_id: number
    name: string,
    reason: string,
    creation_date: Date,
    expiration_date: Date,
    uses: number,
    max_uses: number,
    price: number
    event_id: number,
}

interface IMetricSales extends Castable {
    ticket_name: string,
    sold: number,
    courtesies: number,
    cancelled: number,
    not_claimed: number,
    price: number,
    total: number
}

interface IMetricUsers extends Castable {
    visits: number,
    started_but_denied: number,
    in_fav: number
}

interface IParamsUse extends Castable {
    params: {
        data: string[]
    }
}

interface IUserData extends ITicket, IEvent {

}