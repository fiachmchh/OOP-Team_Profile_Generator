const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(id, name, job, officeNumber, email) {
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
