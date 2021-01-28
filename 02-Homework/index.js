const http = require('http');
var inquirer = require('inquirer');
var fs = require('fs');
var jest = require("jest")


var Employee = require('./Employee')
var Intern = require('./Intern')
var Manager = require('./Manager')
var Engineer = require('./Engineer')

var team = []
var newTeamMember = ''


function makeHtml() {

    var htmlArray = []

    var i;
    for (i = 0; i < team.length; i++) {

        if (team[i].job == 'Manager') {

            var managerChunk =
                `<div class="card col-md-3">
                <div class="card-header">
                    <h5>${team[i].name} :</h5>
                    <h5>${team[i].job}</h5>
                </div>
                <div class="card-body">
                    <p class="card-title">ID : ${team[i].id}</p>

                    <p>Office Number : ${team[i].officeNumber}  </p>

                    <a href = "mailto: ${team[i].email}" class="btn btn-link">${team[i].email}</a>

        </div>
        </div>`
            htmlArray.push(managerChunk)


        } else if (team[i].job == 'Intern') {

            var internChunk =
                `<div class="card col-md-3">
                <div class="card-header">
                    <h5>${team[i].name} :</h5>
                    <h5>${team[i].job}</h5>
                </div>
                <div class="card-body">
                    <p class="card-title">ID : ${team[i].id}</p>

                    <p>Alma Mater : ${team[i].school}</p>

                    <a href = "mailto: ${team[i].email}" class="btn btn-link">${team[i].email}</a>
                    
        </div>
    </div>`
            htmlArray.push(internChunk)


        } else if (team[i].job == 'Engineer') {

            var engineerChunk = `
    
            <div class="card col-md-3">
                <div class="card-header">
                    <h5>${team[i].name} :</h5>
                    <h5>${team[i].job}</h5>
                </div>
                <div class="card-body">
                    <p class="card-title"> ID : ${team[i].id}</p>

                    <p><a href="https://github.com/${team[i].github}" class="btn btn-link">GitHub Profile</a></p>

                    <a href = "mailto: ${team[i].email}" class="btn btn-link">${team[i].email}</a>

        </div>
    </div>`
            htmlArray.push(engineerChunk)

        }

    }

    var pageHtml = `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    
        </style>
    </head>
    
    <body>
    
        <header>
            <h1>Team Profile</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"/>
            </svg>
          </header>
    
            <div class="row">
    

    ${htmlArray.join("")}


    </div>

</body>

</html>
    
    `



    console.log('page test ????', pageHtml)
    fs.writeFile('indexTest.html', pageHtml, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


}



function internQ(baseLineAnswers) {
    console.log('time to ask intern Q!!')
    inquirer
        .prompt([
            {
                name: "school",
                type: "input",
                message: "Wat school did the Intern attend?",
            },
        ]).then(function (answers) {
            console.log('final answer fro intern!!!', answers)
            console.log('baseline answers ??', baseLineAnswers)

            newTeamMember = new Intern(baseLineAnswers.name, baseLineAnswers.job, baseLineAnswers.id, answers.school, baseLineAnswers.email)
            console.log(newTeamMember)

            team.push(newTeamMember)

            console.log(team)

            addAnother()


        })
}

function managerQ(baseLineAnswers) {
    console.log('time to ask manger Q!!')
    inquirer
        .prompt([
            {
                name: "officenumber",
                type: "input",
                message: "Wat is the office number?",
            },
        ]).then(function (answers) {
            console.log('final answer fro intern!!!', answers)
            console.log('baseline answers ??', baseLineAnswers)

            var newTeamMember = new Manager(baseLineAnswers.name, baseLineAnswers.job, baseLineAnswers.id, answers.officenumber, baseLineAnswers.email)
            console.log(newTeamMember)

            team.push(newTeamMember)

            console.log(team)

            addAnother()


        })
}

function engineerQ(baseLineAnswers) {
    console.log('time to ask eng Q!!')
    inquirer
        .prompt([
            {
                name: "github",
                type: "input",
                message: "What is the engineer's github username?",
            },
        ]).then(function (answers) {
            console.log('final answer fro engineer!!!', answers)
            console.log('baseline answers ??', baseLineAnswers)

            var newTeamMember = new Engineer(baseLineAnswers.name, baseLineAnswers.job, baseLineAnswers.id, answers.github, baseLineAnswers.email)
            console.log(newTeamMember)

            team.push(newTeamMember)

            console.log(team)

            addAnother()


        })

}

function addAnother() {
    inquirer
        .prompt([
            {
                name: "another",
                type: "confirm",
                message: "add another employee ?",
            },
        ]).then(function (answers) {

            console.log('did they wanna add another ???', answers)
            if (answers.another == true) {
                mainQuestions()
            } else {
                console.log('time to make the html')
                makeHtml()
            }

        })
}


function mainQuestions() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Wat is the name of the Employee?",
            },

            {
                name: "job",
                type: "list",
                message: "Wat is the Employee's job?",
                choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "Manager"]
            },

            {
                name: "id",
                type: "input",
                message: "Wat is the Employee's id?",
            },
            {
                name: "email",
                type: "input",
                message: "Wat is the Employee's email adress?",
            },
        ])


        .then(answers => {
            console.log('answers!!', answers)

            if (answers.job == 'Engineer') {
                engineerQ(answers)
            } else if (answers.job == 'Intern') {
                internQ(answers)
            } else if (answers.job == 'Manager') {
                managerQ(answers)
            }


        })

}

mainQuestions()


