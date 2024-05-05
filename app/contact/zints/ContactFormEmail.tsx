import React, {FC} from "react";

interface ContactFormEmailProps {
    name: string,
    email: string,
    message: string
}

const ContactFormEmail: FC<Readonly<ContactFormEmailProps>> = ({
    name,
    email,
    message
}) => (
    <div>
        <h1>Contact form</h1>
        <p>
            from {name} at {email}
        </p>
        <h2>message:</h2>
        <p>{message}</p>
    </div>
)

export default ContactFormEmail;