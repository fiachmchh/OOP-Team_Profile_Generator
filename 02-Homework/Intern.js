const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(school, name, job, id, email) {
    super(name, id, email)
    this.school = school;
    this.job = job
  }

  getSchool() {
      console.log(`This intern went to school at ${this.school}`) ;
  }
  

  getRole() {
      return 'Intern';
  }
}

module.exports = Intern