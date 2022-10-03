
create table post
(
    id varchar(255) not null primary key,
    description varchar(255),
    title varchar(255)
);

alter table post
    owner to postgres;
