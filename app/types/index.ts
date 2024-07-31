export interface ButtonProps {
    text: string;
    containerStyle?:string;
    navigateTo?:string;
    icon?:string;
}

interface searchEventsProps {
    events: string;
    setEvents: (events: string) => void;
}


