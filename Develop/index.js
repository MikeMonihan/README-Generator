const inquirer = require("inquirer");
const fs = require('fs');
const genMark = require('./utils/generateMarkdown');
var a = "a";

console.log('Welcome to the GitHub Project README Generator!');
console.log(typeof genMark.renderLicenseBadge);

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
    type: 'checkbox',
    name: 'tOC',
    message: 'Enter a table of contents: ',
    choices: [
    {
        key:'0',
        name: 'Installation',
        value: 'Installation',
    },
    {
        key:'1',
        name: 'Usage',
        value: 'Usage',
    },
    {
        key:'2',
        name: 'Credits',
        value: 'Credits',
    },
    {
        key:'3',
        name: 'License',
        value: 'License',
    },
    ],
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
        value: 'GNU AGPLv3',
    },
    {
        key:'1',
        name: 'GNU GPLv3',
        value: 'GNU GPLv3',
    },
    {
        key:'2',
        name: 'GNU LGPLv3',
        value: 'GNU LGPLv3',
    },
    {
        key:'3',
        name: 'Mozilla Public License 2.0',
        value: 'Mozilla Public License 2.0',
    },
    {
        key:'4',
        name: 'Apache License 2.0',
        value: 'Apache License 2.0',
    },
    {
        key:'5',
        name: 'MIT License',
        value: 'MIT License',
    },
    {
        key:'6',
        name: 'Boost Software License 1.0',
        value: 'Boost Software License 1.0',
    },
    {
        key:'7',
        name: 'The Unlicense',
        value: 'The Unlicense',
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
    message: 'Please enter your GitHub username: ',
},
{
    type: 'input',
    name:'email',
    message: 'Please enter your email: ',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    inquirer.prompt(questions).then((answers) => {
        console.log('\nOrder receipt:');
        console.log(JSON.stringify(answers, null, '  '));
      });
    
}

// TODO: Create a function to initialize app
function init() {writeToFile();}

//module.exports = index;
// Function call to initialize app
init();

