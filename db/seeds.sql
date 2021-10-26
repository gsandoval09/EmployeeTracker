-- INSERT INTO department (department_id);
-- VALUES ("Engineering", 
-- "Finance",
-- "Legal",
-- "Sales",
-- "Service");
INSERT INTO department (id, name)
VALUES (1, "Finance");

INSERT INTO department (id, name)
VALUES (2, "Legal");

INSERT INTO department (id, name)
VALUES (3, "Sales");

INSERT INTO department (id,name)
VALUES (4, "Service");

<---Roles--->
INSERT INTO role(title, salary, department_id);
VALUES ("Sales Lead", 45000, 1), 
("Salesperson", 30000, 2), 
("Software Engineer", 90000, 3), 
("Accountant", 75000, 4), 
("Legal Team Lead", 60000, 5), 
("Lawyer", 1000, 6)


<--employee info--->
Insert INTO employee (first_name,last_name,department, title, role_id, manager_id,);
VALUES ("Wilson", "Fisk","Finance","Sales Lead",1, 1),


Insert INTO employee (first_name,last_name,department, title, role_id, manager_id,);
VALUES ("Curt", "Connors","Legal", 2, 2),


Insert INTO employee (first_name,last_name,department, title, role_id, manager_id,);
VALUES ("Eddie", "Brock", "Lawyer", 1, 1),


Insert INTO employee (first_name,last_name,department, title, role_id, manager_id,);
VALUES ("Norman", "Osborn","Accountant", 3, 2),


Insert INTO employee (first_name,last_name,department, title, role_id, manager_id,);
VALUES ("Cletus", "Kassidy","Salesperson", 2, 3),


Insert INTO employee (first_name,last_name,department, title, role_id, manager_id,);
VALUES ("Otto", "Octavius", "Lawyer", 4, 4),

<---employee roles--->

