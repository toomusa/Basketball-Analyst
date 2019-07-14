DROP DATABASE IF EXISTS bball_db;

CREATE DATABASE bball_db;

USE bball_db;

CREATE TABLE users (
	id INT AUTO_INCREMENT,
    user_token VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    table1 LONGTEXT,
    table2 LONGTEXT,
    table3 LONGTEXT,
    table4 LONGTEXT,
    table5 LONGTEXT,
    table6 LONGTEXT,
    table7 LONGTEXT,
    table8 LONGTEXT,
    table9 LONGTEXT,
    table10 LONGTEXT, 
    table11 LONGTEXT,
    table12 LONGTEXT,
    table13 LONGTEXT,
    table14 LONGTEXT,
    table15 LONGTEXT,
    table16 LONGTEXT,
    table17 LONGTEXT,
    table18 LONGTEXT,
    table19 LONGTEXT,
    table20 LONGTEXT,
    PRIMARY KEY (id)
);


[{"name":"Last Updated On","field":"Last Updated On","layout":"fitData","resizableColumns":true,"movableColumns":true,
"columnVertAlign":"middle","headerFilterPlaceholder":"Filter Column","movableRows":true,"resizableRows":true,"align":"center",
"rowHandle...