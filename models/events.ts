// language=MySQL
enum queries {
    selAll = "select * from events;",
    selByID = "select * from events where id = ?;",

    create = "insert into events (names) values (?);",
    updateNameById = "update events set names = ? where id = ?;",
}

export default queries;