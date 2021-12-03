const inquirer = require("inquirer");
require('console.table');
const fs = require("fs")
const path = require("path")
const db = require("./connect.js")
const dbemployee = require("./action.js")

function createNewManagerInDatabase() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the team manager?"
        },
        {
            type: "input",
            name: "id",
            message: "Team Manager's ID number:"
        },
        {
            type: "input",
            name: "email",
            message: "Team Manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Team Manager's office number:"
        }
    ]).then(val => {
        let name = val.name;
        let id = val.id;
        let email = val.email;
        let officeNo = val.officeNumber;

        let manager = {
            name: name,
            id: id,
            email: email,
            officeNumber: officeNo
        }
    })
};
createNewManagerInDatabase();
// const consoleTable = require('console table');
// function promptUser() {
// inquirer.prompt([{
//     type: "list",
//     message: "What would you like to do?",
//     name: "ask",
//     choices: ["View All Employees",
//         "Add Employee",
//         "Update Employee Role",
//         "View All Roles",
//         "Add Role",
//         "View All Departments",
//         "Add Department"],
// },]).then(answer => { console.log(answer.ask); });
// switch (answer.ask) {
//     case "View All Employees":
//         viewAllEmployees();
//         break;

//     case "View All Departments":
//         viewDepartments();
//         break;

//     case "View All Roles":
//         viewAllRoles();
//         break;

//     default:
//         process.exit()
// }


// async function viewAllEmployees() {
//     const employees = await dbemployee.employee()
//     console.table(employees)
// }


        // {
        //     type: "list",
        //         message: "What is the name of the Department?",
        //             name: "department",
        //                 choices: ["Engineering",
        //                     "Finance",
        //                     "Legal",
        //                     "Sales",
        //                     "Service"
        //                 ]
        // },

        // {

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

        //             {
        //                 type: "input",
        //                     message: "What is the name of the role?",
        //                         name: "askrole",
        //     },

        //             {
        //                 type: "list",
        //                     message: "What would you like to do?",
        //                         name: "jobstatus",
        //                             choices: ["View All Employees",
        //                                 "Add Employee",
        //                                 "Update Employee Role",
        //                                 "View All Roles",
        //                                 "Add Role",
        //                                 "View All Departments",
        //                                 "Add Department"],

        //     },
        // ])

    // })
// }
// promptUser();



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
