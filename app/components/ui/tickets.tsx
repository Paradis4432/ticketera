import {getUserId} from "@/app/(profile)/profile/actions";

interface TicketProps {
    email?: string;
}

function Ticket({ticket, email}: any) {
    const userId = getUserId(email)
    const qrValue = `https://localhost:3000/use/${ticket.ticket_id}/${userId}` // TODO redirect to link, not ip..
    return (
        <>
            {/* <h4>{ticket.name}</h4>
            <ul>
                <li>
                    <QRCodeSVG value= {qrValue}/>
                </li>
                <li>
                    {ticket.reason}
                </li>
                <li>
                    {ticket.price}
                </li>
                <li>
                    {ticket.uses}
                </li>
                <li>
                    {ticket.max_uses}
                </li>
                <li>
                    {ticket.creation_date.toString()}
                </li>
                <li>
                    {ticket.expiration_date.toString()}
                </li>
            </ul>*/}
        </>
    )
}

export {
    Ticket
}