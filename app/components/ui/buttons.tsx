
"use client"
import { ButtonProps } from "../../types";


const Buttons = ({text, containerStyle, handleClick }: ButtonProps) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className={'flex-1'}>
                {text}
            </span>
        </button>
    );
}


export default Buttons;