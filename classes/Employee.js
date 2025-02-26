class Employee {
#salary
#isHired
constructor (name, position, amount, hired) {
    this.name = name;
    this.position = position;
    this.#salary = amount;
    this.#isHired = hired;
}
getSalary(){
    return this.#salary;
}
setSalary(amount){
    this.#salary = amount;
}
getStatus(){
    return this.#isHired;
}
setStatus(command){
    if(command === 'hire'){
        this.#isHired = true;
    } else if 
        (command === 'fire') {
            this.#isHired = false;   } 
}
}
// hello
module.exports = {
    Employee,
}
