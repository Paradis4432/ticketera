create table if not exists events
(
    event_id         serial primary key,
    rrpps            integer[],    -- nullable -> nullable reference to users.id
    validators       integer[],    -- nullable -> nullable reference to users.id
    name             varchar(100) not null,
    description      varchar(500), -- nullable
    location         varchar(100) not null,
    max_capacity     integer      not null,
    min_age          integer   default 18,
    cbu              varchar(21)  not null,
    event_c_date     timestamp default current_timestamp,
    event_start_date timestamp    not null,
    event_end_date   timestamp    not null,


    constraint min_age_check check (min_age >= 0 AND min_age <= 120),
    constraint cap_check check ( max_capacity >= 0 )
    );

create table if not exists users
(
    user_id     serial primary key,
    name        varchar(255) not null,
    email       varchar(255) not null unique,
    user_c_date timestamp default current_timestamp
    );

-- when user converts to producer -> del from users -> ins to producers
create table if not exists producers
(
    producer_id     serial primary key,
    name            varchar(50)  not null,
    display_name    varchar(255) not null, -- nombre de la productora
-- link to cdn?
    email           varchar(255) not null unique,
    producer_c_date timestamp default current_timestamp
    );

create table if not exists events_producers
(
    event_id    integer,
    producer_id integer,

    primary key (event_id, producer_id),
    foreign key (event_id) references events (event_id) on delete cascade,
    foreign key (producer_id) references producers (producer_id) on delete cascade
    );

create table if not exists events_stages
(
    event_stage_id         serial primary key,
    name                   varchar(100),
    event_id               integer,
    price                  integer,
    stock                  integer,
    event_stage_c_date     timestamp default current_timestamp,
    event_stage_start_date timestamp not null,
    event_stage_end_date   timestamp not null,

    foreign key (event_id) references events (event_id), -- dont delete on cascade to avoid
-- deleting the event when a stage is deleted
    constraint price_check check ( price > 0 ),
    constraint stock_check check ( stock > 0 )
    );
create index if not exists idx_events_stages_event_id on events_stages (event_id);

create table if not exists users_tickets
(
    ticket_id     serial primary key,
    user_id       integer,
    stage_id      integer,
    used          bool      default false,
    notes         varchar(50)[],
    ticket_c_date timestamp default current_timestamp,

    foreign key (user_id) references users (user_id),
    foreign key (stage_id) references events_stages (event_stage_id)
    );

create table if not exists validations
(
    validation_id     serial primary key,
    validator_id      integer,
    user_id           integer,
    name              varchar(100) not null,
    ticket_id         integer,
    state             varchar(100) not null,
    validation_c_date timestamp default current_timestamp,

    -- avoid delete cascade

    foreign key (validator_id) references users (user_id),
    foreign key (user_id) references users (user_id),
    foreign key (ticket_id) references users_tickets (ticket_id)
    );

create table if not exists metrics (
    event_id          integer not null,
    stage_id          integer not null,
    stage_name        varchar(100),
    tickets_sold      integer,
    tickets_available integer,
    revenue           numeric,
    last_updated      timestamp default current_timestamp,
    primary key (event_id, stage_id),
    foreign key (event_id) references events (event_id),
    foreign key (stage_id) references events_stages (event_stage_id)
);



drop table if exists c_date cascade;
drop table if exists events_stages cascade;
drop table if exists temporal cascade;
drop table if exists validations cascade;
drop table if exists events cascade;
drop table if exists events_producers cascade;
drop table if exists producers cascade;
drop table if exists users cascade;
drop table if exists users_tickets cascade;
drop table if exists metrics cascade;
