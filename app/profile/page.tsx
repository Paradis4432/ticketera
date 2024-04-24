import Link from "next/link";

export default function Page() {
    // TODO check if user is logged in

    return (
        <div className="container-fluid">
            <Link href={"/events/create"}>create event</Link>

            <h1>my events:</h1>
        </div>
    )

}