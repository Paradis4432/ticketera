"use client"
import "./styles.css"

function Page() {
    // TODO convert finder by id to component and load this server side, but the component client side
    return (
        <div className="container-fluid">
            <h1 className={"test"}>Tests</h1>

            <h1>find by id:</h1>
            <input type="text" id="find-by-id" placeholder="id"/>
            <button onClick={() => {
                const id = (document.getElementById("find-by-id") as HTMLInputElement).value
                window.location.href = `/events/${id}`
            }}>find
            </button>
        </div>
    )
}

export default Page;