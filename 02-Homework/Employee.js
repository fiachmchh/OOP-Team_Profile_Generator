

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    // Method which prints all of the stats for a character
  
    getName() {
      console.log(`This employee is called ${this.name}.`);
    }

    getId() {
        console.log(`This employee has an id of ${this.id}`);
    }

    getEmail() {
        console.log(`The email for this employee is ${this.email}.`)
    }

    getRole() {
        return 'Employee'
    }
  
}
  module.exports = Employee;
  