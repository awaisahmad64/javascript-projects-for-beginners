class Employee {
  constructor(name = 'awais', cnic = 36502) {
    this.name = name;
    this.cnic = cnic;
  }
  setEmployee(name, cnic) {
    this.name = name;
    this.cnic = cnic;
  }
  getEmployee() {
    return { name: this.name, cnic: this.cnic };
  }
  print() {
    console.log('Your Name is: ' + this.name);
    console.log('Your CNIC is : ' + this.cnic);
  }
}
// creating two instance of class employee
var emp = new Employee('Awais', 36501);
var emp1 = new Employee('Tayyab', 35501);
// set value
emp.setEmployee('Shahid', 34501);
emp1.setEmployee('Zahid', 33200);
//getting value as ogject
console.log(emp.getEmployee());
console.log(emp1.getEmployee());
// print the value
emp.print();
emp1.print();
