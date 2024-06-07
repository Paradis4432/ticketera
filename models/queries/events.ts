export enum events {
    selAll = `
        select *
        from events
        limit 10;
    `,
    selByID = "select * from events where event_id = $1;",
    insertEvent = "insert into events (name, description, location, starting_date, state) values ($1, $2, $3, $4, $5) RETURNING *;",
    insertUserEvent = "insert into user_event (user_id, event_id) values ($1, $2);",
    deleteEvent = "delete from events where event_id = $1;",
    isFound = "select * from users where user_id = ?;",
    //create = "insert into users (name, email, sex) values (?,?,?);",
    create = "insert into myevents (name, description, location, starting_date, state) values (?, 'desc', 'loc', '10-10-10', 0);",
    updateNameById = "update myevents set name = ? where event_id = ?;",
}