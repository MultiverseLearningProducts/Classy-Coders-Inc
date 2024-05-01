const { Employees } = require('./Employees');

class Manager extends Employees {
  #employeesManaged;

  constructor(name, title, department) {
    super(name, title);
    this.department = department;
    this.#employeesManaged = [];
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    return this.#employeesManaged.push(employee);
  }
    
}

module.exports = {
    Manager,
}