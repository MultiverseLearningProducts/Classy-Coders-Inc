class Employee {
#salary
#isHired
constructor (name, position) {
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
        return true;
    } else if 
        (command === 'fire') {
            return false;   } 
}
}
module.exports = {
    Employee,
}
