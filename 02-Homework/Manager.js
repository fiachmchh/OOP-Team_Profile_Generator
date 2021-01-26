const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(officeNumber, name, job, id, email) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    this.job = job
  }

  getRole() {
      return 'Manager';
  }
}
module.exports = Manager
