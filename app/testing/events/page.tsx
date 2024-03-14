import Link from "next/link";

export default function page() {
    return (
        <div className="container-fluid">
            <p>testing events</p>

            <p> create new event</p>
            <Link href={"/testing/events/create"}>create</Link>
            <hr/>
            <p> search event</p>
            <hr/>
            <p> event list</p>
            <hr/>
            <p> event info</p>
            <hr/>
            <p> event edit</p>
            <hr/>
            <p> event delete</p>
            <hr/>
            <p> event export metric</p>
            <hr/>
            <p> create event qr code</p>
            <hr/>
            <p> view event metrics</p>
            <hr/>

        </div>
    )
}