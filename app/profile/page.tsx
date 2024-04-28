import "./styles.css"
import Link from "next/link";

function Page() {
    return (
        <div className="container">

            <Link href={"/events/create"}>create event</Link>
        </div>
    )
}

export default Page;