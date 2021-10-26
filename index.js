const inquirer = require("inquirer");
const cTable = require('console.table');
const fs = require("fs")
const path = require("path")
const consoleTable = require('console table');
function promptUser() {
    return inquirer.prompt([

        {
            type: "list",
            message: "What would you like to do?",
            name: "ask",
            choices: ["View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department"
            ]
        },

        
            .then((answer) => {
                switch (answer.action) {
                    case "View All Employees";
                    viewAllEmployees();
                    break;

                    case "View all employees by department";
                    viewAllEmployeesbyDepartment();
                    break;

                    case "view all employees by role";
                    viewAllEmployeesbyRole();
                    break;
            }
            }),
        
        {
            type: "list",
            message: "What is the name of the Department?",
            name: "department",
            choices: ["Engineering",
                "Finance",
                "Legal",
                "Sales",
                "Service"
            ]
        },

        {

            type: "list",
            message: "What would you like to do?",
            name: "askuser",
            choices: ["View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department"],
        },

        {
            type: "input",
            message: "What is the name of the role?",
            name: "askrole",
        },

        {
            type: "list",
            message: "What would you like to do?",
            name: "jobstatus",
            choices: ["View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department"],

        },
    ])

}

promptUser();

