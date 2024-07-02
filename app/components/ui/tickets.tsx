import {QRCodeSVG} from 'qrcode.react';
import {getUserId} from "@/app/(profile)/profile/actions";
interface TicketProps {
    ticket: ITicket;
    email?: string;
}
function Ticket({ ticket, email }: TicketProps) {
    const userId = getUserId(email)
    const qrValue = `https://localhost:3000/use/${ticket.ticket_id}/${userId}`
    return (
        <>
            <h4>{ticket.name}</h4>
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
            </ul>
        </>
    )
}

export {
    Ticket
}