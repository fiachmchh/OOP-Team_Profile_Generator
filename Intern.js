const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, job, id, school, email) {
    super(name, id, email)
    this.school = school;
    this.job = job
  }

  getSchool() {
    return (this.school);
      // console.log(`This intern went to school at ${this.school}`) ;
  }
  

  getRole() {
      return 'Intern';
  }
}

module.exports = Intern