create table if not exists user
(
    user_id       bigint primary key auto_increment, -- index
    name          varchar(50) not null,
    email         varchar(50) not null,
    creation_date datetime    not null default current_timestamp,
    sex           varchar(1)  not null
);

create table if not exists event
(
    event_id      bigint primary key auto_increment, -- index
    name          varchar(50)  not null,
    description   text         not null,
    creation_date datetime     not null default current_timestamp,
    location      varchar(150) not null,
    starting_date datetime     not null,
    state         smallint     not null              -- TODO map to states
);

# using fk allows for 1 or more users to own the same event
create table if not exists user_event
(
    user_id  bigint not null,
    event_id bigint not null,
    primary key (user_id, event_id),
    foreign key (user_id) references user (user_id) on delete cascade,
    foreign key (event_id) references event (event_id) on delete cascade
);

create table if not exists ticket
(
    ticket_id       bigint primary key auto_increment, -- index
    user_id         bigint         not null,
    name            varchar(50)    not null,
    reason          varchar(50)    not null,
    creation_date   datetime       not null default current_timestamp,
    expiration_date datetime       not null,
    uses            int            not null,
    max_uses        int            not null,
    price           decimal(10, 2) not null,
    foreign key (user_id) references user (user_id)
);

create table if not exists metrics
(
    metric_id          bigint primary key auto_increment, -- index
    event_id           bigint not null,
    total_tickets_sold int    not null,
    foreign key (event_id) references event (event_id)
);

drop table if exists user_event;
drop table if exists event;
drop table if exists ticket;
drop table if exists user;
drop table if exists metrics;