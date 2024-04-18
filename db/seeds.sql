INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', 200000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 180000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 150000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Legal Team Lead', 200000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', 180000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('John', 'Walker', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Jack', 'Harper', 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Marcus', 'White', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Jacob', 'Jackson', 5, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Harry', 'Edwards', 6, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Joanne', 'Smith', 7, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Patrick', 'Rogers', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Clint', 'Jones', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Jackie', 'Robinson', 7, 6);