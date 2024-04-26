// language=MySQL
enum queries {
    selEvents = "select * from events;",
    sqlById = "select * from events where id = ?;"
}

export default queries;