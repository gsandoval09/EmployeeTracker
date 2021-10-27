const connection = require("./connect")
class work{
    contructor(connection) {
        this.connection = connection
    }
    employee(){
        return this.connection.query("")
    }
}


module.exports = new work(connection)

// employee ids, first names, last names, job titles, departments, salaries, and managers