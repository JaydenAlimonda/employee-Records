
const employees = []
function Employee (name, title, Salary, status) {
    this.name = name
    this.title = title
    this.Salary = Salary
    this.status = "Full Time"
    employees.push(this)
    }

//}
Employee.prototype.printEmployeeForm = function(){
    console.log(this)
}
var Bob = new Employee("Bob", "worker", "30,000")
var Rob = new Employee("Rob", "worker", "25,000")
var Lob = new Employee("Lob", "worker", "35,000")
Bob.printEmployeeForm()
Rob.printEmployeeForm()
Lob.printEmployeeForm()
console.log("/////////////////////////////////////////////////////////////////////")
console.log(employees)