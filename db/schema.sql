-- Created the burger db
CREATE DATABASE burger_db;
USE burger_db;

-- The burgerstable will have a column for id 
(PRIMARY KEY AUTO_INCREMENT int), burger_name (var,char) 
devoured (bool).


CREATE TABLE burgers(
id int AUTO_INCREMENT,
PRIMARY KEY (id),
burger_name varchar(50) NOT NULL,
devoured BOOLEAN default false,
date TIMESTAMP);
