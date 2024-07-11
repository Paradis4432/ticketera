------ examples
select *
from events
where event_id = 4;

-- search event
select *
from events
where name like '%7%';
-- could replace with starting with instead <value>%

-- lowest price first, se le puede agregar filtros para sacar los que no tienen remaining, +18 etc
-- para fechas cambiar t.price por e.start_date
select distinct on (e.event_id) *
from events e
         join events_stages es on es.event_id = e.event_id
order by e.event_id and es.price ASC
limit 10;

select e.*, es.*
from events e
         join (
    select distinct on (es.event_id) *
    from events_stages es
    order by es.event_id
) es on es.event_id = e.event_id
order by es.price;

select e.*, es.*
from events e
         join (
    select distinct on (es.event_id) *
    from events_stages es
    order by es.event_id
    limit 10
) es on es.event_id = e.event_id;

select *
from events;

select *
from events_stages;

-- qr code with user_id and stage_id
-- if ticket is already used:
select *
from users_tickets
where user_id = 3
  and stage_id = 8;
-- if nothing found show qr invalid
-- if used show qr duplicated

-- else check if the validator has perms:
-- if validators contains this.user_id of validator, 4 for example
select *
from events_stages es
         join events e on es.event_id = e.event_id
where stage_id = 8;
-- TODO mover este check a algun boton en la lista de eventos o referenciarlo
-- de alguna manera, es demasiado caro para permitir a todos
-- show qr validated
-- update users_tickets ->
insert into validations (validator_id, user_id, name, ticket_id, state)
values (4 /*this.user_id as id of user validating ticket*/, 3 /*id of validated user*/, 'event_name' /*events.name*/,
        0 /* users_tickets.ticket_id*/, 'validated');

-- update validations

-- else show no perm


-- get user tickets TODO split tickets and event stages
-- TODO maybe setup stage and then on buy ins ticket fk to stage.id
/*select *
from users u
join tickets*/

select *
from events_stages;

create or replace function seed_events(num_rows integer) returns void as
$$
declare
    i integer;
begin
    for i in 1..num_rows
        loop
            insert into events
            (rrpps, validators, name, description, location, max_capacity, min_age, cbu, event_start_date,
             event_end_date)
            values (ARRAY(SELECT floor(random() * 100 + 1)::INTEGER
                          FROM generate_series(1, floor(random() * 5 + 1)::INTEGER)),
                    ARRAY(SELECT floor(random() * 100 + 1)::INTEGER
                          FROM generate_series(1, floor(random() * 5 + 1)::INTEGER)),
                    'Random Event ' || floor(random() * 100 + 1),
                    'Description for event ' || floor(random() * 100 + 1),
                    'Location ' || floor(random() * 100 + 1),
                    floor(random() * 500 + 50)::INTEGER,
                    floor(random() * 121)::INTEGER,
                    substring(md5(random()::text), 1, 21),
                    NOW() + INTERVAL '1 day' * floor(random() * 5 + 1),
                    NOW() + INTERVAL '1 day' * floor(random() * 10 + 6));
        end loop;
end;
$$ language plpgsql;

select seed_events(10);

select *
from events;

create or replace function seed_users(num_rows integer) returns void as
$$
declare
    i integer;
begin
    for i in 1..num_rows
        loop
            insert into users
            (name, email)
            values ('Random Username ' || floor(random() * 100 + 1),
                    'random' || floor(random() * 10000 + 1) || '@gmail.com');
        end loop;
end;
$$ language plpgsql;

select seed_users(10);

create or replace function seed_events_stages(num_rows integer) returns void as
$$
declare
    i               integer;
    random_event_id integer;
begin
    for i in 1..num_rows
        loop
            select event_id
            into random_event_id
            from events
            order by random()
            limit 1;
            insert into events_stages (event_stage_start_date, event_stage_end_date, event_id, price, stock)

            values (NOW() + INTERVAL '1 day' * floor(random() * 5 + 1),
                    NOW() + INTERVAL '1 day' * floor(random() * 5 + 1),
                    random_event_id,
                    floor(random() * 500 + 50)::INTEGER,
                    floor(random() * 500 + 50)::INTEGER);

        end loop;
end;
$$ language plpgsql;

select seed_events_stages(10);

create or replace function seed_users_tickets(num_rows integer) returns void as
$$
declare
    i               integer;
    random_user_id  integer;
    random_stage_id integer;
begin
    for i in 1..num_rows
        loop
            select user_id
            into random_user_id
            from users
            order by random()
            limit 1;

            select event_stage_id
            into random_stage_id
            from events_stages
            order by random()
            limit 1;

            insert into users_tickets (user_id, stage_id, used, notes)
            values (random_user_id,
                    random_stage_id,
                    (floor(random() * 2)::int = 1),
                    array ['gift', 'random']);
        end loop;
end;
$$ language plpgsql;

select seed_users_tickets(10);

select *
from users_tickets;
select *
from users;

select *
from users_tickets;

-- get user tickest
select *
from users_tickets ut
         join events_stages es on ut.stage_id = es.stage_id
         join events e on es.event_id = e.event_id

where ut.user_id = 5