DROP DATABASE IF EXISTS bball_db;

CREATE DATABASE bball_db;

USE bball_db;

CREATE TABLE players (
    id INTEGER NOT NULL AUTO_INCREMENT,
    playerName VARCHAR(100) NOT NULL,
    teamName VARCHAR(100) NOT NULL,
    teamId INTEGER,
    PRIMARY KEY (id)
);

