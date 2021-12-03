const mysql = require('mysql');
const util = require('util');
const db = mysql.createConnection(
    {
        host: "localhost",
        user: 'root',
        password: 'password',
        multipleStatements: true
    },
);
db.connect(function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
    // console.log('Connectd to work database.')

})
db.query = util.promisify(db.query)

var initializationQuery = `DROP DATABASE IF EXISTS work_db;
CREATE DATABASE work_db;

USE work_db;

CREATE TABLE department (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) 
);

CREATE TABLE employeeRole   (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30), 
salary DECIMAL,
department_id INT 
);

CREATE TABLE employee   (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30), 
last_name VARCHAR(30),
title VARCHAR(30),
role_id INT ,
manager_id INT
);`

var seedQuery = `INSERT INTO department (name)
VALUES ("Engineering"), 
("Finance"),
("Legal"),
("Sales"),
("Service");
INSERT INTO employeeRole (title, salary, department_id)
VALUES ("Sales Lead", 45000, 1), 
("Salesperson", 30000, 2), 
("Software Engineer", 90000, 3), 
("Accountant", 75000, 4), 
("Legal Team Lead", 60000, 5), 
("Lawyer", 1000, 3);
Insert INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Wilson", "Fisk",1, 1),
("Curt", "Connors", 2, 2),
("Eddie", "Brock",  1, 1),
("Norman", "Osborn", 3, 2),
("Cletus", "Kassidy", 2, 3),
("Otto", "Octavius", 4, 4);`

db.query(initializationQuery, function (err, results) {
    if (err){
        console.log(err);
        throw err;
    }
})
db.query(seedQuery, function (err, results) {
    if (err){
        console.log(err);
        throw err;
    }
})
// console.log("Connect.js");
module.exports = db;

