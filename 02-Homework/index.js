
// AS A manager
// I WANT to generate a webpage that displays my team's basic info.
// SO THAT I have quick access to their emails and GitHub profile

const http = require('http');
var inquirer = require('inquirer');
var fs = require('fs');
var jest = require("jest")

// is this needed?
var Employee = require('./Employee')
var Intern = require('./Intern')
var Manager = require('./Manager')

var team = []




function makeHtml() {
    //loop thru team array and make a chunck of html for each person
    //stick each chunck into the htmlArray
    // do fs.writeFIle with htmlPage

    var htmlArray = [`<h1 class=''>Name: Bill</h1>`, `<h1>Name: Tall</h1>`, `<h1>Name: lol</h1>`]




    // doo al ur things look thru team array anad make chucks of html!!

    // DO FOR LOOP
         var newChunk = `


                <div> Title : ${team[i].name}</div>

                ID: ${answer.id}

                Email: ${answers.email}

            `
            htmlArray.push(newChunk)




    var pageHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OOPHW</title>
    <style>

    </style>
</head>
<body>
    <h1>Placeholder</h1>
    ${htmlArray.join()}
    
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

            var newTeamMember = new Intern(answers.school, baseLineAnswers.name, baseLineAnswers.job, baseLineAnswers.id, baseLineAnswers.email)
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

function engineerQ() {
    console.log('time to ask eng Q!!')
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

            //Insert something to choose from Employee roles

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
                engineerQ()
            } else if (answers.job == 'Intern') {
                internQ(answers)
            } else if (answers.job == 'Manager') {
                managerQ(answers)
            }




            //     var newpage = `


            //     <div> Title : ${answers.name}</div>

            //     ID: ${answer.id}

            //     Email: ${answers.email}

            // `

            // http.createServer(function(req, res){
            //     res.writeHead(200, {'content-type': 'text/html'});
            //     const html = fs.readFileSync('./index.html');
            //     res.end(html);

            // }).listen(3000, () => {
            //     console.log("running on 3000");
            // })


            // //


            // fs.writeFile('index.html', newpage, function (err) {
            //     if (err) throw err;
            //     console.log('Saved!');
            // });

        })

}






mainQuestions()

