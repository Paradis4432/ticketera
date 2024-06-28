import { MouseEventHandler } from "react";


export interface ButtonProps {
    text: string;
    containerStyle?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}