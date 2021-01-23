const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }

  getGithub() {
      console.log(`https://github.com/${this.github}`)
  }
  
  getRole() {
      return 'Engineer';
  }
}

const engineer = new Engineer('', '')
engineer.getName()
engineer.getId()
engineer.getEmail()
engineer.getRole()






