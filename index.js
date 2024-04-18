const inquirer = require('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('./questions.js');
const EmployeeDatabase = require('./db/EmployeeDatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'postgres',
    // Enter postgress password below
    password: 'Bcfc@1998',
    database: 'employees'
});

db.connect ();

const doMenuQuestions = () => {
    inquirer
        .prompt(MainMenuQuestions)
        .then((response) => {
            switch (response.option) {
                case 'view_departments':
                    view_departments();
                    break;
                case 'view_roles':
                    view_roles();
                    break;
                case 'view_employees':
                    view_employees();
                    break;
                case 'add_department':
                    add_department();
                    break;
                case 'add_role':
                    add_role();
                    break;
                case 'add_employee':
                    add_employee();
                    break;
                case 'update_role':
                    update_role();
                    break;
            }
        })
}

const view_departments = () => {
    db.getDepartments().then((results) => {
        console.table(results.rows);
        doMenuQuestions();
    });
}

const view_roles = () => {
    db.getRoles().then((results) => {
        console.table(results.rows);
        doMenuQuestions();
    });
}

const view_employees = () => {
    db.getEmployees().then((results) => {
        console.table(results.rows);
        doMenuQuestions();
    });
}

const add_department = () => {
    inquirer
        .prompt(AddDepartmentQuestions)
        .then((response) => {
            db.addDepartment(response).then((results) => {
                console.log('\n', results, '\n');
                doMenuQuestions();
            });
        })
}

const add_role = () => {
    db.getDepartments().then((results) => {
        const departmentQuestion = AddRoleQuestions[2];
        results.rows.forEach((department) => {
            departmentQuestion.choices.push({
                value: department.id,
                name: department.name
            });
        });

        inquirer
            .prompt(AddRoleQuestions)
            .then((response) => {
                db.addRole(response).then((results) => {
                    console.log('\n', results, '\n');
                    doMenuQuestions();
                });
            })
    });
}

const add_employee = () => {
    db.getRoles().then((results) => {

        const roleQuestion = AddEmployeeQuestions[2];
        results.rows.forEach((role) => {
            const role_summary = `${role.title} (${role.name}: ${role.salary})`;
            roleQuestion.choices.push({
                value: role.id,
                name: role_summary
            });
        });

        db.getEmployees().then((results) => {

            const managerQuestion = AddEmployeeQuestions[3];
            results.rows.forEach((employee) => {
                managerQuestion.choices.push({
                    value: employee.id,
                    name: employee.name
                });
            });

            inquirer
                .prompt(AddEmployeeQuestions)
                .then((response) => {
                    db.addEmployee(response).then((results) => {
                        console.log('\n', results, '\n');
                        doMenuQuestions();
                    });
                })
        });
    });
}

const update_role = () => {
    db.getEmployees().then((results) => {
        const employeeQuestion = UpdateEmployeeRoleQuestions[0];
        results.rows.forEach((employee) => {
            employeeQuestion.choices.push({
                value: employee.id,
                name: employee.first_name + ' ' + employee.last_name
            });
        });

        db.getRoles().then((results) => {

            const roleQuestion = UpdateEmployeeRoleQuestions[1];
            results.rows.forEach((role) => {
                roleQuestion.choices.push({
                    value: role.id,
                    name: role.title
                });
            });

            inquirer
                .prompt(UpdateEmployeeRoleQuestions)
                .then((response) => {
                    db.updateEmployeeRole(response).then((results) => {
                        console.log('Employee Updated Successfully');
                        doMenuQuestions();
                    });
                })
        });
    });
}

doMenuQuestions();
