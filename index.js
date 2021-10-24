const inquirer = require("inquirer");

const fs = require("fs")
const path = require("path")

function promptUser() {
    return inquirer.prompt([

        {
            type: "list",
            message: "What would you like to do?",
            name: "ask",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
        },

        {
            type: "input",
            message: "What is the name of the department?",
            name: "department",
        },

        {
            type: "input",
            message: "What would you like to do?",
            name: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
        },

        {
            type: "input",
            message: "Are you a baby or a boy",
            name: "Baby",
        },

        {
            type: "input",
            message: "What is your job like",
            name: "jobstatus",

        },
    ])
    
}

promptUser();

