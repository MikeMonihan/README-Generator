// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //var 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {



}

function generateMarkdown(userAnswer) {


  let genToC = `## Table of Contents`;

  if (userAnswer.installInfo !== null) { genToC += `
  * [Installation](#installation)` };

  if (userAnswer.usageInfo !== null) { genToC += `
  * [Usage](#usage)` };

  if (userAnswer.contrib !== null) { genToC += `
  * [Contributions](#contributions)` };

  if (userAnswer.license !== null) { genToC += `
  * [License](#license)` };

  let readDraft = 
  `# ${userAnswer.title}
  
  
  ## Description 
  
  ${userAnswer.description}
  `

  readDraft += genToC;
  
  readDraft +=
  `
  
  ## Installation

  *Dependencies needed to before running the project*
  
  ${userAnswer.installInfo}
  
  
  ## Usage 
  
  *How to use the application*
  
  ${userAnswer.usageInfo}

  `
  
  if (userAnswer.contrib !== null) {

  readDraft +=
    
  `
  
  ## Contributions
  
  *Guidelines on how to contribute*
  
  ${userAnswer.contrib}`
  };
  

  if (userAnswer.testInst !== null) {
  
  readDraft +=
  `
  
  ## Tests
  
  *Application tests and how to use them*
  
  ${userAnswer.testInst}`
  };

  if (userAnswer.gitHubUser !== null) {
  
  readDraft += 

  `

  ## Questions - Github
  
  For any questions, connect with me through my Github: 
  
  https://github.com/${userAnswer.gitHubUser}
  `
  };

  if (userAnswer.email !== null) {
  
   readDraft += 
  
  `
  
  ## Questions - Email
    
  Or please contact me through my email:
  
  [${userAnswer.email}](mailto:${userAnswer.email})
  `
  };


  readDraft +=
  `
  
  ## License
  
  ${userAnswer.license}
  `;


  return readDraft;
  

}

module.exports = generateMarkdown;
