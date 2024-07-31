interface Events {
    event_id?: number;
    rrpps: number[] | null;
    validators: number[] | null;
    name: string;
    description?: string | null;
    location: string;
    max_capacity: number;
    min_age?: number | null;
    cbu: string;
    event_c_date?: string | null;
    event_start_date: string;
    event_end_date: string;
}



interface Users {
    user_id?: number;
    name: string;
    email: string;
    user_c_date?: string | null;
}

interface Producers {
    producer_id?: number;
    name: string;
    display_name: string;
    email: string;
    producer_c_date?: string;
}

interface EventsProducers {
    event_id: number;
    producer_id: number;
}

interface EventsStages {
    event_stage_id?: number;
    name: string;
    event_id: number;
    price: number;
    stock: number;
    event_stage_c_date?: string;
    event_stage_start_date: string;
    event_stage_end_date: string;
}



interface UsersTickets {
    ticket_id?: number;
    user_id: number;
    stage_id: number;
    used?: boolean;
    notes: string[];
    ticket_c_date?: string;
}

interface Validations {
    validation_id?: number;
    validator_id: number;
    user_id: number;
    name: string;
    ticket_id: number;
    state: string;
    validation_c_date?: string;
}


interface ButtonProps {
    text: string;
    containerStyle?:string;
    navigateTo?:string;
    icon?:string;
}

interface searchEventsProps {
    events: string;
    setEvents: (events: string) => void;
}