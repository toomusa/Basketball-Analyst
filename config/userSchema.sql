

USE bball_db;

DROP TABLE IF EXISTS users;


CREATE TABLE users (
	id INT AUTO_INCREMENT NOT NULL,
    user_token VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS configs;

CREATE TABLE configs (
	id INT AUTO_INCREMENT NOT NULL,
    user_token VARCHAR(255) NOT NULL,
    table_data LONGTEXT NOT NULL,
    column_data LONGTEXT NOT NULL,
    team_data LONGTEXT,
    PRIMARY KEY (id)
);

[{"name":"Last Updated On","field":"Last Updated On","layout":"fitData","resizableColumns":true,"movableColumns":true,
"columnVertAlign":"middle","headerFilterPlaceholder":"Filter Column","movableRows":true,"resizableRows":true,"align":"center",
"rowHandle...