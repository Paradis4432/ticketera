create table if not exists user
(
    user_id       bigint primary key auto_increment, -- index
    name          varchar(50)        not null,
    email         varchar(50) unique not null,
    creation_date datetime           not null default current_timestamp,
    sex           varchar(1),
    index (email)
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
    event_id        bigint         not null,
    user_id         bigint         not null,
    name            varchar(50)    not null,
    reason          varchar(50)    not null,
    creation_date   datetime       not null default current_timestamp,
    expiration_date datetime       not null,
    uses            int            not null,
    max_uses        int            not null,
    price           decimal(10, 2) not null,
    foreign key (user_id) references user (user_id),
    foreign key (event_id) references event (event_id)
);

create table if not exists metrics
(
    metric_id          bigint primary key auto_increment, -- index
    event_id           bigint not null,
    total_tickets_sold int    not null,
    foreign key (event_id) references event (event_id)
);

create table if not exists metrics_sales
(
    metric_sale_id bigint primary key auto_increment, -- index
    metric_id      bigint         not null,
    ticket_id      bigint unique,
    ticket_name    VARCHAR(100),
    sold           int default 0,
    courtesies     int default 0,
    cancelled      int default 0,
    not_claimed    int default 0,
    price          decimal(10, 2) not null,
    total          decimal(10, 2) not null,
    foreign key (metric_id) references metrics (metric_id)
);

create table if not exists metrics_users
(
    metric_user_id     bigint primary key auto_increment, -- index
    metric_id          bigint not null,
    visits             int default 0,
    started_but_denied int default 0,
    in_fav             int default 0,
    foreign key (metric_id) references metrics (metric_id)
);

