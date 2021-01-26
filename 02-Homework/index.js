
// AS A manager
// I WANT to generate a webpage that displays my team's basic info.
// SO THAT I have quick access to their emails and GitHub profile

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
    //loop thru team array and make a chunck of html for each person
    //stick each chunck into the htmlArray
    // do fs.writeFIle with htmlPage

    var htmlArray = []

    // doo al ur things look thru team array anad make chucks of html!!

    // DO FOR LOOP



    var i;
    for (i = 0; i < team.length; i++) {

        if (team[i].job == 'Manager') {

            var managerChunk =
                `<div class="card col-md-4">
                <div class="card-header">
                    <h5>${team[i].name}</h5>
                    <h5>${team[i].job}</h5>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${team[i].id}</h5>
                    <p class="card-text">${team[i].email}</p> 

                    <p> ${team[i].officeNumber}  </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`

            htmlArray.push(managerChunk)
            console.log(managerChunk, 'this is manager chunk')



        } else if (team[i].job == 'Intern') {

            var internChunk =
                `<div class="card col-md-4">
                <div class="card-header">
                    <h5>${team[i].name}</h5>
                    <h5>${team[i].job}</h5>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${team[i].id}</h5>
                    <p class="card-text">${team[i].email}</p> 

                    <p> ${team[i].school}  </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
            htmlArray.push(internChunk)
            console.log(internChunk, 'this is intern chunk')




        } else if (team[i].job == 'Engineer') {

            var engineerChunk = `
    
            <div class="card col-md-4">
                <div class="card-header">
                    <h5>${team[i].name}</h5>
                    <h5>${team[i].job}</h5>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${team[i].id}</h5>
                    <p class="card-text">${team[i].email}</p> 

                    <p> ${team[i].github}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`

            htmlArray.push(engineerChunk)
            console.log(engineerChunk, 'this is engineer chunk')

        }

    }

    // }



    var pageHtml = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <style>
                
            </style>
    </head>
    
    <body>
    
        <div class="row">
    
        ${htmlArray.join()}
        
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

            newTeamMember = new Intern(answers.school, baseLineAnswers.name, baseLineAnswers.job, baseLineAnswers.id, baseLineAnswers.email)
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

            var newTeamMember = new Manager(answers.officenumber, baseLineAnswers.name, baseLineAnswers.job, baseLineAnswers.id, baseLineAnswers.email)
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
                message: "What is the engineer's github address?",
            },
        ]).then(function (answers) {
            console.log('final answer fro engineer!!!', answers)
            console.log('baseline answers ??', baseLineAnswers)

            var newTeamMember = new Engineer(answers.github, baseLineAnswers.name, baseLineAnswers.job, baseLineAnswers.id, baseLineAnswers.email)
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
                message: "Wat is the first name of the Employee?",
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

        //if = Engineer... get github address

        //if = Intern ... get School

        // if = Manager ... get office number

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


