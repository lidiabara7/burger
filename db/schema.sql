DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
 id AUTO_INCREMENT NOT NULL,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN, 
  PRIMARY KEY(id)
);



