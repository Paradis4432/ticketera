import {FC} from "react";

function ContactForm() {
    return (
        <p>missing domain</p>
    )
}

const ContactFormEmail: FC<Readonly<IContactFormEmailProps>> = ({ // porque pone 38 tabs :sad:
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

export {
    ContactForm,
    ContactFormEmail
}