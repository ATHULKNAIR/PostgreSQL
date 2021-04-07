-- Create a table say person

CREATE TABLE person(
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone_no INT(10) ,
    date_of_birth DATE NOT NULL
);

-- Insert Values to the table 

INSERT INTO person(first_name,last_name,gender,email,phone_no,date_of_birth)
VALUES ('Athul','K Nair','MALE','athul123@gmail.com','1234567890','24-09-1998')
       ('Muralidharan','KK','MALE','muralidharan123@gmail.com','1234543212','01-03-1969');

INSERT INTO person(first_name,last_name,gender,email,date_of_birth)
VALUES ('Athulya','K Nair','FEMALE','athulya123@gmail.com','23-09-2001')
       ('Reena','Murali','FEMALE','reena123@gmail.com','25-05-1972');

-- To get the first_name of all the users

SELECT first_name FROM person;

-- To get full name of the user 

SELECT first_name ||' '||last_name  full_name FROM person;

-- To get data in a order in descending order

SELECT first_name FROM person ORDER BY date_of_birth DESC;

-- To filter datas we use WHERE

SELECT first_name FROM person WHERE last_name = 'Nair' OR gender = 'MALE';

-- filter data with less words

SELECT first_name,last_name,email FROM person WHERE first_name LIKE 'Ath%';



