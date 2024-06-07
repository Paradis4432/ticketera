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
    insertTicket = "insert into tickets (event_id, user_id, name, reason, expiration_date, uses, max_uses, price) values ($1, $2, 'vip pass', 'attendee', '2024-07-20 23:59:59', 0, 1, 150.00);",
    insertMetric = "insert into metrics (event_id,total_tickets_sold) values ($1,100);",
    insertMetricSale = "insert into metrics_sales (metric_id,ticket_id,ticket_name,sold,courtesies,cancelled,not_claimed,price,total) values ($1, $2, 'vip pass', 50, 10, 5, 5, 150.00, 7500.00);",
    insertMetricUser= "insert into metrics_users (metric_id,visits,started_but_denied,in_fav) values ($1, 500, 20, 30);",
    updateNameById = "update myevents set name = ? where event_id = ?;",
}