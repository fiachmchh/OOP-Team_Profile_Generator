const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(id, name, job, github, email) {
    super(name, id, email)
    this.github = github;
    this.job = job
  }

  getGithub() {
    return (this.github)
      console.log(`https://github.com/${this.github}`)
  }
  
  getRole() {
      return 'Engineer';
  }
}

module.exports = Engineer



