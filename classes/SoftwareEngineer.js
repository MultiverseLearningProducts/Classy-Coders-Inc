const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees{
    #programmingLanguages;
    constructor(name, position, salary, programmingLanguages){
        super(name, position, salary);
        this.#programmingLanguages = programmingLanguages;
    }
    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language);
    }
    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }
    
    
}

module.exports = {
    SoftwareEngineer,
}