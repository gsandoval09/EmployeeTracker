USE work_db;

INSERT INTO department (name)
VALUES ("Engineering"), 
("Finance"),
("Legal"),
("Sales"),
("Service");
-- INSERT INTO department (id, name)
-- VALUES (1, "Finance");

-- INSERT INTO department (id, name)
-- VALUES (2, "Legal");

-- INSERT INTO department (id, name)
-- VALUES (3, "Sales");

-- INSERT INTO department (id,name)
-- VALUES (4, "Service");

<---Roles--->
INSERT INTO employeeRole (title, salary, department_id)
VALUES ("Sales Lead", 45000, 1), 
("Salesperson", 30000, 2), 
("Software Engineer", 90000, 3), 
("Accountant", 75000, 4), 
("Legal Team Lead", 60000, 5), 
("Lawyer", 1000, 3)


<--employee info--->
Insert INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Wilson", "Fisk",1, 1),
("Curt", "Connors", 2, 2),
("Eddie", "Brock",  1, 1),
("Norman", "Osborn", 3, 2),
("Cletus", "Kassidy", 2, 3),
("Otto", "Octavius", 4, 4),

<---employee roles--->

