
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
  * [Contributing](#contributing)` };

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
  
  
  ${userAnswer.installInfo}
  
  
  ## Usage 
  
  
  ${userAnswer.usageInfo}

  `
  
  if (userAnswer.contrib !== null) {

  readDraft +=
    
  `
  
  ## Contributing
  
  
  ${userAnswer.contrib}`
  };
  

  if (userAnswer.testInst !== null) {
  
  readDraft +=
  `
  
  ## Tests
  
  
  ${userAnswer.testInst}`
  };


  readDraft +=
  `
  
  ## License
  
  ${userAnswer.license}
  `;


  return readDraft;
  

}

module.exports = generateMarkdown;
