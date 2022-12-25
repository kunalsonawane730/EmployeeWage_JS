class EmployeePayrollData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get id() {
        return this._id;
    }

    set id(id) {
        let idRegex=RegExp('^[1-9][0-9]*$');
        if(idRegex.test(id))
        this._id = id;
        else
        throw '------------- id is incorrect ---------------'
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else
            throw '---------- Name is Incorrect ----------';
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        let salaryRegex=RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary))
        this._salary = salary;
        else
        throw '------------- salary is incorrect ---------------'
        
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        let genderRegex=RegExp('^[F][M]$');
        if(genderRegex.test(gender))
        this._gender = gender;
        else
        throw '------------- gender is incorrect ---------------'
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        if(startDate<=newdate())
    
        this._startDate = startDate;
    else
     throw "Starting date is incorrect";
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ", Name = " + this.name + ", Gender = " + this.gender + ", Salary = " + this.salary + ", Start Date = " + employeeDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

try{
    employeePayrollData.id = 0;
    employeePayrollData.name = "Joe";
    employeePayrollData.gender="M"
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}


let teresaPayrollData = new EmployeePayrollData(1, "Teresa", 50000, "F", new Date());
console.log(teresaPayrollData.toString());