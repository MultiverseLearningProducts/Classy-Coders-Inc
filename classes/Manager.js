const { Employee } = require("./Employee")



class Manager extends Employee {
    #employeesManaged

    constructor(name, position, salary, department){
       super(name,position,department, salary)
       this.#employeesManaged = []
    }

    getEmployeesManaged() {
        return this.#employeesManaged
    }

    setEmployeesManaged(employee){
     return this.#employeesManaged.push(employee)
    }
}

module.exports = {
    Manager,
}