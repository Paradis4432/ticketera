create table if not exists c_date
(
    creation_date timestamp default current_timestamp
);

create table if not exists temporal
(
    start_date timestamp not null,
    end_date   timestamp not null
);

create table if not exists events
(
    event_id     serial primary key,
    rrpps        integer[],    -- nullable -> nullable reference to users.id
    validators   integer[],    -- nullable -> nullable reference to users.id
    name         varchar(100) not null,
    description  varchar(500), -- nullable
    location     varchar(100) not null,
    max_capacity integer      not null,
    min_age      integer      not null default 18,
    cbu          varchar(21)  not null,

    constraint min_age_check check (min_age >= 0 AND min_age <= 120),
    constraint cap_check check ( max_capacity >= 0 )
) inherits (c_date, temporal);

create table if not exists users
(
    user_id serial primary key,
    name    varchar(255) not null,
    email   varchar(255) not null unique
) inherits (c_date);

create table if not exists validations
(
    validator_id integer,
    user_id      integer,
    name         varchar(100) not null,
    ticket_id    integer,
    state        varchar(100) not null,

    -- avoid delete cascade

    foreign key (validator_id) references users (user_id),
    foreign key (user_id) references users (user_id),
    foreign key (ticket_id) references users_tickets (ticket_id)
);

-- when user converts to producer -> del from users -> ins to producers
create table if not exists producers
(
    producer_id  serial primary key,
    name         varchar(50)  not null,
    display_name varchar(255) not null, -- nombre de la productora
    -- link to cdn?
    email        varchar(255) not null unique
) inherits (c_date);

create table if not exists events_producers
(
    event_id    integer,
    producer_id integer,

    primary key (event_id, producer_id), -- one event id for each producer unique and indexed TODO add trigger, same for delete update on events or producers
    foreign key (event_id) references events (event_id) on delete cascade,
    foreign key (producer_id) references producers (producer_id) on delete cascade
) inherits (c_date);

create table if not exists events_stages
(
    name     varchar(100),
    stage_id serial primary key,
    event_id integer,
    price    integer,
    stock    integer,

    foreign key (event_id) references events (event_id), -- dont delete on cascade to avoid
    -- deleting the event when a stage is deleted
    constraint price_check check ( price > 0 ),
    constraint stick_check check ( stock > 0 )
) inherits (c_date, temporal);
create index idx_events_stages_event_id on events_stages (event_id);

create table if not exists users_tickets
(
    ticket_id serial primary key,
    user_id   integer,
    stage_id  integer,
    used      bool default false,
    notes     varchar(50)[],

    foreign key (user_id) references users (user_id) -- also avoid delete on cascade
);

drop table events cascade;
drop table events_producers cascade;
drop table producers cascade;
drop table users cascade;
drop table users_tickets cascade;
