DROP TABLE IF EXISTS Person;

CREATE TABLE Person (
  id INTEGER PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(40) NOT NULL,
/*  dob DATE,
  address VARCHAR(100) NOT NULL,
  phone INTEGER,
  studyyear INTEGER,
  car BOOLEAN,
  seats INTEGER*/
);

INSERT INTO PERSON (id, firstname, lastname, email, password) VALUES (0, 'Tasmin', 'Steer', 'testemail0', 'testpw0');
INSERT INTO PERSON (id, firstname, lastname, email, password) VALUES (1, 'John', 'Brietenbach', 'testemail1', 'testpw1');

CREATE USER 'newuser1'@'localhost' IDENTIFIED BY 'password';

GRANT SELECT ON Trax.Person TO ‘newuser’@'localhost’;
