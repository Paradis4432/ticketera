import {QRCodeSVG} from 'qrcode.react';
interface TicketProps {
    ticket: ITicket;
    userId: number;
}
function Ticket({ ticket, userId }: TicketProps) {
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

                qr code
            </ul>
        </>
    )
}

export {
    Ticket
}