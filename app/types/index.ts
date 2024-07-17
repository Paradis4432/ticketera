import { MouseEventHandler } from "react";


export interface ButtonProps {
    text: string;
    containerStyle?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    navigateTo?:string;
    icon?:string;
}

export interface searchEventsProps {
    events: string;
    setEvents: (events: string) => void;
}