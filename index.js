const inquirer = require('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('./questions.js');
const EmployeeDatabase = require('./db/EmployeeDatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'employee_db'
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
        console.table(results);
        doMenuQuestions();
    });
}

const view_roles = () => {
    db.getroles().then((results) => {
        console.table(results);
        doMenuQuestions();
    });
}

const view_employees = () => {
    db.getEmployees().then((results) => {
        console.table(results);
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
        results.forEach((department) => {
            departmentQuestion.choices.push({
                value: department_id,
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
