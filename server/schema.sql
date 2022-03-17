CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id int not null primary key auto_increment,
  message varchar(180),
  user_id int,
  room_id int
  -- foreign key()

);

CREATE TABLE users (
  username varchar(20),
  user_id int not null primary key auto_increment
);

CREATE TABLE rooms (
  roomname varchar(50),
  room_id int not null primary key auto_increment
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

