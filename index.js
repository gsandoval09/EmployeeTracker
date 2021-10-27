const inquirer = require("inquirer");
require('console.table');
const fs = require("fs")
const path = require("path")
const db = require("./connect.js")
const dbemployee = require("./action.js")

// const consoleTable = require('console table');
function promptUser() {
    return inquirer.prompt(

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
        }
    )   
    .then((answer) => {
            switch (answer.ask) {
                case "View All Employees":
                viewAllEmployees();
                break;

                case "View All Departments":
                viewDepartments();
                break;

                case "View All Roles":
                viewAllRoles();
                break;
                
                default:
                    process.exit()
        }


            async function viewAllEmployees(){
                const employees = await dbemployee.employee()
                console.table(employees)
            }


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

        //     type: "list",
        //     message: "What would you like to do?",
        //     name: "askuser",
        //     choices: ["View All Employees",
        //         "Add Employee",
        //         "Update Employee Role",
        //         "View All Roles",
        //         "Add Role",
        //         "View All Departments",
        //         "Add Department"],
        // },

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



 // .then((answer) => {
        //     switch (answer.action) {
        //         case "View All Employees";
        //         viewAllEmployees();
        //         break;

        //         case "View all employees by department";
        //         viewAllEmployeesbyDepartment();
        //         break;

        //         case "view all employees by role";
        //         viewAllEmployeesbyRole();
        //         break;
        // }
