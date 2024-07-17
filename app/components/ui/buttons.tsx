"use client"
import { ButtonProps } from "../../types";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useEffect, useState } from 'react';



const Buttons = ({text, containerStyle, navigateTo, icon }: ButtonProps) => {
    const router = useRouter();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

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
            {icon ? (
                <div className={`mr-2 inline-block ${!hasMounted ? 'hidden' : ''}`}>
                    <Image src={icon} alt="button icon" width={20} height={20} />
                </div>
            ) : null}
            {text}
        </button>
    );
};

export default Buttons;