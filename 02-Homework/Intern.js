const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(school, name, job, id, email) {
    super(name, id, email)
    this.school = school;
  }

  getSchool() {
      console.log(`This intern went to school at ${this.school}`) ;
  }
  

  getRole() {
      return 'Intern';
  }
}

// const intern = new Intern('')
// intern.getName()
// intern.getId()
// intern.getEmail()
// intern.getRole()
module.exports = Intern