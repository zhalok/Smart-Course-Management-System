create table teachers(
    id varchar(100) not null  ,
    name varchar(50) not null ,
    email varchar(50) not null unique ,
    password varchar(500)  not null ,
    institution varchar(100) not null 
    courses, int
);