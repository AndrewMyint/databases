CREATE DATABASE chat;

USE chat;

CREATE TABLE Messages
(
  /* Describe your table here.*/
  MessageId INT,
  Text VARCHAR(255),
  Date DATE,
  UserId INT,
  RoomId INT,
  PRIMARY KEY (MessageId),
  FOREIGN KEY (UserId)
      REFERENCES Users (UserId),
  FOREIGN KEY (RoomId)
      REFERENCES Rooms (RoomId)
);


/* Create other tables and define schemas for them here! */
CREATE TABLE Users
(
  /* Describe your table here.*/
  UserId INT,
  UserName VARCHAR(30),
  PRIMARY KEY (UserId)
);

CREATE TABLE Rooms
(
  /* Describe your table here.*/
  RoomId INT,
  RoomName VARCHAR(30),
  PRIMARY KEY (RoomId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

