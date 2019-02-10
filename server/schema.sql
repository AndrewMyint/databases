CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  UserId INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  UserName TEXT NOT NULL
);

CREATE TABLE messages (
  MessageId INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Text TEXT,
  UserName TEXT,
  RoomName TEXT
);
