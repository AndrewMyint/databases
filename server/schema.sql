CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT,
  text VARCHAR(255),
  date DATE,
  PRIMARY KEY (id)
);


/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  Id INT,
  Name VARCHAR(30),
  PRIMARY KEY (Id)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  Id INT,
  roomName VARCHAR(30),
  PRIMARY KEY (Id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

