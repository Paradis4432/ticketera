import {FC} from "react";

function ContactForm() {
    return (
        <>
            <h1>Contact Us!</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required/>
                <button type="submit">Send</button>
            </form>
        </>
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