class Employees {
  #salary;
  #isHired;
  static #allEmployees = [];

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    this.#isHired = true;

    Employees.#allEmployees.push(this);
  }

  static getEmployees() {
    return Employees.#allEmployees;
  }

  static getTotalPayroll() {
    let totalSalary = 0;

    for (const employee of Employees.#allEmployees) {
      const salary = employee.getSalary();
      console.log(`Name: ${employee.name}, Salary: ${salary}`);
      
      if (salary === undefined) {
        totalSalary += 120000;
      } else {
        totalSalary += salary;
      }
    }

    return totalSalary;
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;

    return this.#salary;
  }

  getStatus() {
    return this.#isHired
  }

  setStatus(command) {
    if (command === 'hire') {
      this.#isHired = true;
    } else if (command === 'fire') {
      this.#isHired = false;
    }
  }
}

module.exports = {
    Employees,
}