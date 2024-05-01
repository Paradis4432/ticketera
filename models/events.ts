// language=MySQL
enum queries {
    selAll = "select * from events;",
    selByID = "select * from events where id = ?;",


    isFound = "select * from users where id = ?;",
    create = "insert into users (id, name) values (?);",
    updateNameById = "update events set names = ? where id = ?;",
}

export default queries;