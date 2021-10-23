DROP DATABASE IF EXISTS S.H.I.E.L.D. (
USE S.H.I.E.L.D.;

Use S.H.I.E.L.D.;
);

CREATE TABLE department (
id: INT PRIMARY KEY,
name: VARCHAR(30) 
);

CREATE TABLE role   (
id: INT PRIMARY KEY,
title: VARCHAR(30), 
salary: DECIMAL,
department_id: INT 
);

CREATE TABLE employee   (
id: INT PRIMARY KEY,
first_name: VARCHAR(30) 
last_name: VARCHAR(30)
role_id: INT 
manager_id: INT
);