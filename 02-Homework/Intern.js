const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }

  getSchool() {
      console.log(`This intern went to school at ${this.school}`) ;
  }
  

  getRole() {
      return 'Intern';
  }
}

module.exports = Intern;