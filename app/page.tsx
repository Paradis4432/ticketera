import Link from "next/link";

export default function page() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">

                    <h1>Tests</h1>

                    <Link href={"/testing/events"}>testing</Link>

                </div>
            </div>
        </div>
    )
}