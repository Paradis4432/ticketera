// language=MySQL
enum queries {
    selAll = "select * from event;",
    selByID = "select * from event where id = ?;",


    isFound = "select * from users where id = ?;",
    create = "insert into users (id, name) values (?);",
    updateNameById = "update events set names = ? where id = ?;",
}

export default queries;