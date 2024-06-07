import Link from "next/link";
import Image from "next/image";


interface profileProps {
    session?: any;
}

export default function Profile({session}: profileProps) {
    return (
        <>
            <h1>Profile</h1>
            <Image
                src={session.user.image}
                alt="Descripción de la imagen"
                width={96} // Define la anchura de la imagen
                height={96} // Define la altura de la imagen
            />
            <ul>
                <li>name: {session.user.name}</li>
                <li>email: {session.user.email}</li>
                <li><Link href={"/profile/myevents"}>My events</Link> </li>
                <li><Link href={"/profile/mytickets"}>My tickets</Link> </li>
            </ul>
        </>
    )
}