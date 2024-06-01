import {QRCodeSVG} from 'qrcode.react';
function Ticket({ticket}: { ticket: ITicket }) {
    return (
        <>
            <h4>{ticket.name}</h4>
            <ul>
                <li>
                    <QRCodeSVG value="https://localhost:3000/use/1/1" />
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