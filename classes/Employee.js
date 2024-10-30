class Employee {

#salary;
#isHired;
 #allEmployees

constructor(name, position, salary ){
    this.name = name,
    this.position = position,
    this.#salary = salary,
    this.#isHired = true;
    this.#allEmployees = []
}
 getSalary() {
        return this.#salary;
 }   

 setSalary(amount){
        this.#salary = amount;
 }
 
 getStatus(){
    return this.#isHired;
 }

 setStatus(command) {
    if(command = "hire"){
             this.#isHired = false ;
    }

    else if (command = "false"){
       return  this.#isHired = true;
    }
 }

 getEmployees(){
    return this.#allEmployees
 }

 addEmployee (){
    let newEmployee
    this.#allEmployees.push(newEmployee)
    return this.#allEmployees
    }


  getTotalPayroll () {
    let total = 0 
    let employees = this.#allEmployees

    employees.forEach((employee) => {
        total += employee.salary
    })

    return total
    
 }



}

module.exports = {
    Employee,
}
