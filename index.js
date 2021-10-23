const inquirer = require("inquirer");

const fs = require("fs")
const markdown = require("./db")
const path = require("path")

function promptUser(){
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
            name: "department"
        },

        {
            type: "input",
            message: "What would you like to do?",
            name: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
        },

        {
            type: "input",
            message: "",
            name: "",
        },

        {
            type: "input",
            message: "",
            name:"",
        },
    ])
}

    


