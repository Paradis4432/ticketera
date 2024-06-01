// crate event form
"use client"



function Page() {
    return (
        <div>
            <h1>create event</h1>
            <form>
                <label>
                    name
                    <input type="text" name="name"/>
                </label>
                <label>
                    description
                    <input type="text" name="description"/>
                </label>
                <label>
                    location
                    <input type="text" name="location"/>
                </label>
                <label>
                    starting date
                    <input type="date" name="starting_date"/>
                </label>
                <label>
                    state
                    <input type="number" name="state"/>
                </label>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default Page;