const mysql = require('mysql12');
const util = require ('util');
const db = mysql.createConnection(
    {
        host: "localhost",
        user: 'root',
        password: 'password',
        database: 'work'
    },
    console.log('Connectd to work database.')
);
db.connect()
db.query = util.promisify(db.query)

module.exports= db;
