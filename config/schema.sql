DROP DATABASE IF EXISTS bball_db;

CREATE DATABASE bball_db;

USE bball_db;

DROP TABLE IF EXISTS ????

CREATE TABLE players (
    id INTEGER NOT NULL AUTO_INCREMENT,
    playerId INTEGER (10) NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    teamName VARCHAR(100) NOT NULL,
    teamId INTEGER (10) NOT NULL,
    PRIMARY KEY (id)
);

-- JSON data coming in
-- translate to:
-- INSERT INTO players (playerId, firstName, lastName, teamName, teamId)