-- user
insert into user (name, email, sex)
values
    ('facundo martinez vidal', 'facumartinezvidal@gmail.com', 'm');

-- events
insert into event (name, description, location, starting_date, state)
values
    ('music festival', 'a grand music festival', 'central park', '2024-07-20 16:00:00', 1),
    ('tech expo', 'a tech expo showcasing new gadgets', 'expo center', '2024-08-10 10:00:00', 1);

insert into user_event (user_id, event_id)
values
    ((select user_id from user where email = 'facumartinezvidal@gmail.com'), 1),
    ((select user_id from user where email = 'facumartinezvidal@gmail.com'), 2);


-- tickets
insert into ticket (event_id, user_id, name, reason, expiration_date, uses, max_uses, price)
values
    (1, (select user_id from user where email = 'facumartinezvidal@gmail.com'), 'vip pass', 'attendee', '2024-07-20 23:59:59', 0, 1, 150.00),
    (2, (select user_id from user where email = 'facumartinezvidal@gmail.com'), 'standard pass', 'attendee', '2024-08-10 20:00:00', 0, 1, 75.00);