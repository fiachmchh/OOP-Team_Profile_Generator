const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, job, id, github, email) {
    super(name, id, email)
    this.github = github;
    this.job = job
  }

  getGithub() {
    return (this.github)
      
  }
  
  getRole() {
      return 'Engineer';
  }
}

module.exports = Engineer



