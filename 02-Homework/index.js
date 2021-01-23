
// AS A manager
// I WANT to generate a webpage that displays my team's basic info.
// SO THAT I have quick access to their emails and GitHub profile

const http = require('http');
var inquirer = require('inquirer');
var fs = require('fs');
var jest = require("jest")

inquirer
  .prompt([
    {
        name: "title",
        type: "input",
        message: "What is the project title?",
    },
  ])

  .then(answers => {
    
    var newpage = `

    # Title : ${answers.title}
    
`

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    const html = fs.readFileSync('./index.html');
    res.end(html);

}).listen(3000, () => {
    console.log("running on 3000");
})


//


fs.writeFile('index.html', newpage, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

})





