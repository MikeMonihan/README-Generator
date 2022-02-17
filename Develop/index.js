const inquirer = require("inquirer");
const fs = require('fs');
const genMark = require('./utils/generateMarkdown');


console.log('Welcome to the GitHub Project README Generator!');

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter the title for your project: ',
      
},
{
    type: 'input',
    name:'description',
    message: 'Enter the description for your project: ',
},
{
    type: 'input',
    name:'installInfo',
    message: 'Enter installation information: ',
},
{
    type: 'input',
    name:'usageInfo',
    message: 'Enter usage information: ',
},
{
    type: 'list',
        message: "Enter the license used for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
},
{
    type: 'input',
    name:'contrib',
    message: 'Enter any contribution guidelines: ',
},
{
    type: 'input',
    name:'testInst',
    message: 'Enter any test instructions: ',
},
{
    type: 'input',
    name:'gitHubUser',
    message: 'If you would like to be contacted over github with questions, please enter your GitHub username: ',
},
{
    type: 'input',
    name:'email',
    message: 'If you would like to be contacted over email with questions, please enter your email: ',
},
];

function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md has been created!")
    });
    
}

async function init() {
    try {
    
    const userAnswer = await inquirer.prompt(questions);

    const genMarkdown = genMark(userAnswer);

    writeToFile("README.md", genMarkdown);
    
    } catch(error){
        console.log(error);
    }
};

init();

