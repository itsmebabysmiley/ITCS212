CREATE DATABASE	`itcs212-2`;
CREATE TABLE `personal_info`(
	StudentID int(10) PRIMARY KEY,
    Firstname varchar(100) NOT NULL,
    Lastname varchar(100) NOT NULL,
    Birthdate DATE	NOT NULL,
	MobilePhone varchar(10) NOT NULL
);

INSERT INTO personal_info()
value
(1, "Robert", "Dolls", "1985-01-20", "0919998877"),
(2, "Peter", "Jones", "1982-6-10","0834455667"),
(3, "Lily", "James", "1991-10-20", "0889988776");
