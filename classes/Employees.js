class Employees {
	#salary
	#isHired = true
	static #allEmployees = []

	constructor(name, position, salary) {
		this.name = name
		this.position = position
		this.#salary = salary
		Employees.#allEmployees.push(this)
	}

	static getEmployees() {
		return Employees.#allEmployees
	}

	getSalary() {
		return this.#salary
	}

	static getTotalPayroll() {
		let total = 0
		for (let employee of Employees.#allEmployees) {
			total += employee.getSalary()
		}
		return total
	}

	setSalary(amount) {
		this.#salary = amount
	}

	getStatus() {
		return this.#isHired
	}

	setStatus(command) {
		if (command === 'hire') {
			this.#isHired = true
		} else if (command === 'fire') {
			this.#isHired = false
		}
	}
}

module.exports = {
	Employees
}
