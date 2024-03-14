"use client"

export default function page() {
    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log("submit")
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={"name"}/>

                <input type="submit" value="submit"/>
            </form>

        </div>
    )
}