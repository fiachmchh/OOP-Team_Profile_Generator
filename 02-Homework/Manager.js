const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(officeNumber, name, job, id, email) {
    super(name, id, email)
    this.officeNumber = officeNumber;
  }

  getRole() {
      return 'Manager';
  }
}
module.exports = Manager
