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
    name: 'license',
    message: 'Enter the license used: ',
    choices: [
    {
        key:'0',
        name: 'GNU AGPLv3',
        message: 'GNU AGPLv3',
    },
    {
        key:'1',
        name: 'GNU GPLv3',
        message: 'GNU GPLv3',
    },
    {
        key:'2',
        name: 'GNU LGPLv3',
        message: 'GNU LGPLv3',
    },
    {
        key:'3',
        name: 'Mozilla Public License 2.0',
        message: 'Mozilla Public License 2.0',
    },
    {
        key:'4',
        name: 'Apache License 2.0',
        message: 'Apache License 2.0',
    },
    {
        key:'5',
        name: 'MIT License',
        message: 'MIT License',
    },
    {
        key:'6',
        name: 'Boost Software License 1.0',
        message: 'Boost Software License 1.0',
    },
    {
        key:'7',
        name: 'The Unlicense',
        message: 'The Unlicense',
    },
    ],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md has been created!")
    });
    
}

// TODO: Create a function to initialize app
async function init() {
    try {
    
    const userAnswer = await inquirer.prompt(questions);

    const genMarkdown = genMark(userAnswer);

    writeToFile("README.md", genMarkdown);
    
    } catch(error){
        console.log(error);
    }
};

// Function call to initialize app
init();

