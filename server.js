const express = require('express');
const mysql = require('mysql12');
const PORT = process.env.PORT || 
3001;
const app = express();
// const consoleTable =require('console.table');
const db = mysql.createConnection(
    {
        host: "localhost",
        user: 'root',
        password: 'password',
        database: 'Theraft'
    },
    console.log('Connectd to Theraft database.')
);
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
// .then((responses) => {
//     if (responses.option === "view all departments") {
//         connection.query(`SELECT * FROM department`, (err, res) => {
//             if (err)
//                 throw err;
//             console.table(res);
        
        