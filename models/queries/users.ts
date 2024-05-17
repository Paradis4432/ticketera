export enum users {
    //selUserTicket = "select * from ticket as t join event as e join user as u where user_id = ? and e.event_id = t.event_id;"
    selUserEvents=`
        select
            e.name as event_name,
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
    `
}
