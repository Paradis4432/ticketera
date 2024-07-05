create table if not exists c_date
(
    creation_date timestamp default current_timestamp
);

create table if not exists temporal
(
    start_date timestamp not null,
    end_date   timestamp not null
);

create type event_stage as -- then user buys 1 or more stage access as ticket
(
    start_date timestamp,
    end_date   timestamp,
    stock      integer,
    name       varchar(50)
);

create table if not exists events
(
    event_id     serial primary key,
    rrpps        integer[],    -- nullable
    validators   integer[],    -- nullable
    partners     integer[],    -- nullable
    name         varchar(100) not null,
    description  varchar(500), -- nullable

    location     varchar(100) not null,
    max_capacity integer      not null,
    p18          bool         not null
-- current stage
    -- all stages?
) inherits (c_date);

create table if not exists users
(
    user_id  serial,
    email    varchar(255) not null,
    producer bool default false,
    primary key (user_id, email)
) inherits (c_date);
create index if not exists users_email_index on users (email);


-- ticket
-- notes[] -> string["entrada sin validar", "entrada validad", "cortesia", "entrada expirada"]

-- stages
-- price
-- remaining [0, inf?]


select *
from events;

update events
set rrpps = rrpps || '{5}'
where event_id = 1;

-- insert or add to list
insert into events (rrpps, event_id)
values ('{3,25,37}', 1)
on conflict (event_id)
    do update set rrpps = events.rrpps || excluded.rrpps;

-- override
insert into events (rrpps, event_id)
values ('{3,5,7}', 1)
on conflict (event_id)
    do update set rrpps = excluded.rrpps;

-- find rrpp events
select *
from events
where 3 = any (rrpps);

-- remove specific rrpp
update events
set rrpps = array_remove(rrpps, 37)
where event_id = 3;

select *
from events;