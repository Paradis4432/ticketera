/*
interface time {
    creation_date
}
*/

interface users {
    user_id: number,
    name: string,
    email: string,


}

interface Castable {
}

// deprecated
interface IEvent extends Castable {
    event_id: number,
    name: string,
    description: string,
    location: string,
    starting_date: Date,
    state: number,
    test: string
}

interface c_date {
    creation_date: Date,
}

interface temporal {
    start_date: Date,
    end_date: Date
}

interface events extends c_date, temporal {
    event_id: number;
    rrpps: number[] | null,
    validators: number[] | null;
    name: string;
    description: string | null;
    location: string;
    max_capacity: number;
    min_age: number;
    cbu: string;
}

interface events_stages extends c_date, temporal {
    name: string;
    stage_id: number;
    event_id: number;
    price: number;
    stock: number;
}

interface IContactFormEmailProps {
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