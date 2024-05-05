"use client"
import {ChangeEvent, useState} from "react";
import {bool} from "prop-types";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ContactFormInputs} from "@/app/contact/zcomps/ContactForm";

const InputSchema = z.object({
    message: z.string().min(5).max(255),
})

function Page() {
    const [text, setText] = useState("");
    const [invalid, setInvalid] = useState(true);

    const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
        if (event.target.value.length > 2) setInvalid(false)
        else setInvalid(true)
    }

    return (
        <div>
            <input type="text" onChange={handleChangeText}/>
            <button onClick={() => console.log("test")} disabled={invalid}>
                test
            </button>
        </div>
    )
}

export default Page;