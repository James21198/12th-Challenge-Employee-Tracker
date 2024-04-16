INSERT INTO department (id, name) VALUES (1, 'Sales');
INSERT INTO department (id, name) VALUES (2, 'Engineering');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Sales Lead', 100000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Salesperson', 80000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Lead Engineer', 200000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Software Engineer', 180000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Accountant', 150000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Legal Team Lead', 200000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Lawyer', 180000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(1, 'John', 'Walker', 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(2, 'Jane', 'Smith', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(3, 'Jack', 'Harper', 3, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(4, 'Marcus', 'White', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(5, 'Jacob', 'Jackson', 5, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(6, 'Harry', 'Edwards', 6, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(7, 'Joanne', 'Smith', 7, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(8, 'Patrick', 'Rogers', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(9, 'Clint', 'Jones', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(10, 'Jackie', 'Robinson', 7, 6);