

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    // Methods...
  
    getName() {
      return (this.name)
      // console.log(`This employee is called ${this.name}.`);
    }

    getId() {
      return (this.id)
        // console.log(`This employee has an id of ${this.id}`);
    }

    getEmail() {
      return (this.email)
        // console.log(`The email for this employee is ${this.email}.`)
    }

    getRole() {
        return 'Employee'
    }
  
}
  module.exports = Employee;
  