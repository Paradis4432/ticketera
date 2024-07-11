
"use client"
import { ButtonProps } from "../../types";
import { useRouter } from "next/navigation";


const Buttons = ({text, containerStyle, navigateTo }: ButtonProps) => {
    const router = useRouter();

    const onClick = ( ) => {
        if (navigateTo) {
            console.log('Button clicked');
            router.push(navigateTo);
        } else {
            console.error('No navigation target specified.');
        }
    };

    return (
        <button className={containerStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default Buttons;