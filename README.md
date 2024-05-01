la biblia: https://github.com/adrianhajdin/project_next_14_ai_prompt_sharing

que se puede usar para simular post y get requests?

- ...

## TODO high prio

- [ ] ver como hacer pagos con mercado pago y primsa
- [ ] emails y notificaciones, que usar, server secundario? aws?
- [ ] generacion de codigos qr por entradas. verificar que el usuario esta logeado. como crear un qr que
- [ ] login por cuenta de google, logout, etc. en "la biblia" muestra como hacer para preparar
  esto

## TODO mid prio

- [ ] hay un sector en el must read del obsidian "metrics" tiene un par de links sobre charts y cosas
  la idea es armar un dashboard que se pueda armar con las metricas que se quieran,
  ex: https://spark.lucko.me/k3g3sWguAo
  se puede ver el grafico que permite seleccionar entre las distintas opciones, eso seria lo ideal

## TODO

- [ ] revisar que endpoitns se pueden convertir a dynamics
- [ ] stress test mysql, no tiene auto reconnect y no esta usando pooling, creo. goal: undefined
- [ ] me gustaria tener un sistema de ids para errores, ej: "E00001". documentarlos
- [ ] documentar los endpoints
- [ ] index for mysql tables
- [ ] validation for arguments via body or params, use zod?
- [ ] cuidado con open endpoints sin validacion, cuialquiera puede simplemente hacer requests a la api, limitar por
  cuenta. usar algun token

## TODO low prio

- [ ] mejorar los mensajes de los endpoints, son muy basicos y no dicen mucho

## facu

- docker / google login usando la biblia

## lucas

- schemas
- notificaciones



````mysql
create table user
(
    user_id       bigint primary key auto_increment, -- index
    name          varchar(50) not null,
    email         varchar(50) not null,
    creation_date datetime    not null default current_timestamp,
    sex           varchar(1)  not null
);

create table event
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
create table user_event
(
    user_id  bigint not null,
    event_id bigint not null,
    primary key (user_id, event_id),
    foreign key (user_id) references user (user_id) on delete cascade,
    foreign key (event_id) references event (event_id) on delete cascade
);

create table ticket
(
    ticket_id       bigint primary key auto_increment, -- index
    user_id         bigint         not null,
    name            varchar(50)    not null,
    reason          varchar(50)    not null,
    creation_date   datetime       not null default current_timestamp,
    expiration_date datetime       not null,
    uses            int            not null,
    max_uses        int            not null check ( uses <= ticket.max_uses ),
    price           decimal(10, 2) not null,
    foreign key (user_id) references user (user_id)
);

create table metrics
(
    metric_id          bigint primary key auto_increment, -- index
    event_id           bigint not null,
    total_tickets_sold int    not null,
    foreign key (event_id) references event (event_id)
);
````