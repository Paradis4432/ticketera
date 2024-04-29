"use client"

import {FormEvent, useState} from "react";

function Page() {
    const [eventName, setEventName] = useState("");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const name = new FormData(e.currentTarget).get("name");

        console.log(name)
        const res = await fetch("/api/events/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name})
        });
        console.log(res)
        if (res.status == 200) {
            window.location.href = "/events"
        }
    }

    return (
        <div className="container">
            <h2>create new event</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={eventName} onChange={e => setEventName(e.target.value)}/>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default Page;