const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(github, name, job, id, email) {
    super(name, id, email)
    this.github = github;
    this.job = job
  }

  getGithub() {
      console.log(`https://github.com/${this.github}`)
  }
  
  getRole() {
      return 'Engineer';
  }
}

module.exports = Engineer



