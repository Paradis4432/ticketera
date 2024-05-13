export enum events {
    selAll = "select * from events;",
    selByID = "select * from events where event_id = ?;",


    isFound = "select * from users where user_id = ?;",
    //create = "insert into users (name, email, sex) values (?,?,?);",
    create = "insert into events (name, description, location, starting_date, state) values (?, 'desc', 'loc', '10-10-10', 0);",
    updateNameById = "update events set name = ? where event_id = ?;",
}