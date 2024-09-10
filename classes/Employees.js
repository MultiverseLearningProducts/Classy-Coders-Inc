class Employees {
    #salary
    #isHired
    constructor(name, position, salary, isHired){
        this.name=name
        this.position=position
        this.#salary=salary
        isHired = true
        this.#isHired = isHired
    }
    getSalary(){
        console.log(this.#salary)
        return this.#salary}
    setSalary(amount){
        this.#salary = amount
    }
    getStatus(){return this.#isHired}
    
    setStatus(command){
        if(command === "fire"){
            this.#isHired = false
            return this.#isHired
        }
    }
}

module.exports = {
    Employees,
}