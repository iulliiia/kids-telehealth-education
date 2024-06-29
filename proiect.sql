Create table users (
id_user int(3) primary key auto_increment,
username varchar(40) unique,
password varchar(256),
email varchar(256) unique,
age int(3),
height int(4),
weight int(3)
);


select * from users;