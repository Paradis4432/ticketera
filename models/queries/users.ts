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
    selUserId = `select user_id from users where email = $1`,
    selUserEvents = `
        select e.*
        from events e
                 join user_event ue on e.event_id = ue.event_id
        where ue.user_id = $1
    `,

    saveUser = `
        insert into users (email, name)
        values ($1, $2) on conflict do nothing 
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
        where u.email = $1
    `,
    selUserData=  `
        select t.*, e.*
        from tickets t
                 join events e on t.event_id = e.event_id
        where user_id = $1 and ticket_id = $2
    `,
    selTicketDataByID = `
        select t.*, e.*
        from tickets t
                 join events e on t.event_id = e.event_id
        where user_id = ?
          and ticket_id = ?
    `,
    selAllUserTickets = `
        select t.*
        from tickets t
        where user_id = ?
    `,
    // tecnicamente esto no hace falta
    selTicketEventById = `
        select t.*, e.*
        from tickets t
                 join events e on t.event_id = e.event_id and e.event_id = ?
        where user_id = ?
          and ticket_id = ?

    `

}
