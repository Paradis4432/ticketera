export enum users {
    //selUserTicket = "select * from ticket as t join event as e join user as u where user_id = ? and e.event_id = t.event_id;"
    /*selUserEvents=`
        select
            e.name as event_name,
            e.event_id as event_id,
            e.description,
            e.location,
            e.starting_date,
            e.state
        from
            user u
        join
            user_event ue on u.user_id = ue.user_id
        join
            event e on ue.event_id = e.event_id
        where
            u.email = ?;
    `,
*/
    selUserEvents = `
        select ue.*, u.*
        from user_event ue
                 join users u on ue.user_id = u.user_id
        where u.email = ?
    `,
/*    selUserTickets = `
        select e.name     as event_name,
               e.event_id as event_id,
               t.name     as ticket_name,
               t.uses,
               t.max_uses,
               t.price,
               t.reason,
               t.creation_date,
               t.expiration_date
        from user u
                 join
             ticket t on u.user_id = t.user_id
                 join
             event e on t.event_id = e.event_id
        where u.email = 'facumartinezvidal@gmail.com';
    `,*/
    selUserTickets = `
        select t.*
        from tickets t
                 join users u on t.user_id = u.user_id
        where u.email = ?
    `,

    selUserData = `
        SELECT
            t.name AS ticket_name,
            t.reason,
            t.creation_date AS ticket_creation_date,
            t.expiration_date AS ticket_expiration_date,
            t.uses AS ticket_uses,
            t.max_uses AS ticket_max_uses,
            t.price AS ticket_price,
            e.name AS event_name,
            e.description AS event_description,
            e.location AS event_location,
            e.starting_date AS event_starting_date,
            e.state AS event_state,
            u.name AS user_name,
            u.email AS user_email
        FROM
            ticket t
        JOIN
            event e ON ? = ?
        JOIN
            user u ON ? = ?
            `,
}
