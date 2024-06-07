import Link from "next/link";


interface profileProps {
    session?: any;
}

export default function Profile({session}: profileProps) {
    return (
        <>
            <h1>Profile</h1>
            <img src={session.user.image} alt={session.user.name}/>
            <ul>
                <li>name: {session.user.name}</li>
                <li>email: {session.user.email}</li>
                <li><Link href={"/profile/myevents"}>My events</Link> </li>
                <li><Link href={"/profile/mytickets"}>My tickets</Link> </li>
            </ul>
        </>
    )
}