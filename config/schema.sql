DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todos (
    id INTEGER AUTO_INCREMENT,
    text VARCHAR (255) NOT NULL,
    completed BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);

