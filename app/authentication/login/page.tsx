import Link from "next/link";

export default function Page() {
    return (
        <div className="container-fluid">
            <h1>login with google</h1>
            forgot password? recover
            <Link href={"/register"}>register instead</Link>
        </div>
    )
}