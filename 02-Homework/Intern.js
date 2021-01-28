const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(id, name, job, school, email) {
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