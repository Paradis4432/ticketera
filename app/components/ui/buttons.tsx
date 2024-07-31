"use client"
import { ButtonProps } from "../../types";
import { useRouter } from "next/navigation";
import Image from 'next/image';



const Buttons = ({text, containerStyle, navigateTo, icon }: ButtonProps) => {
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
        <button className={`${containerStyle} flex items-center`} onClick={onClick}>
            {text}
            {icon && (
            <div className="icon-wrapper">
                <Image src={icon} alt="button icon" width={20} height={20} /> 
            </div>
        )}
        </button>
    );
};

export default Buttons;