// language=MySQL
enum queries {
    selAll = "select * from events;",
    selByID = "select * from events where id = ?;",

    create = "insert into events (name) values (?);",
}

export default queries;