const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, job, id, officeNumber, email) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    this.job = job
  }

  getOfficeNumber () {
    return (this.officeNumber)
  }

  getRole() {
      return 'Manager';
  }
}
module.exports = Manager
