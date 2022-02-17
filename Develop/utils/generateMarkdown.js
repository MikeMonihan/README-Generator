var badgeImg;
var lsLink;

function renderLicenseBadge(license) {
  let codeLS = license;
  
  switch(codeLS){
    case "GNU AGPLv3":
    badgeImg = "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
    break;
    case "GNU GPLv3":
    badgeImg = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    break;
    case "GNU LGPLv3":
    badgeImg = "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
    break;
    case "Mozilla Public License 2.0":
    badgeImg = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    break;
    case "Apache License 2.0":
    badgeImg = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    break;
    case "MIT License":
    badgeImg = "https://img.shields.io/badge/License-MIT-yellow.svg";
    break;
    case "Boost Software License 1.0":
    badgeImg = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    break;
    case "The Unlicense":
    badgeImg = "https://img.shields.io/badge/license-Unlicense-blue.svg";
    break;
    default:
    badgeImg = "";
    break;

  }

}

function renderLicenseLink(license) {
  let codeLS = license;
  
  switch(codeLS){
    case "GNU AGPLv3":
    lsLink = "https://www.gnu.org/licenses/agpl-3.0";
    break;
    case "GNU GPLv3":
    lsLink = "https://www.gnu.org/licenses/gpl-3.0";
    break;
    case "GNU LGPLv3":
    lsLink = "https://www.gnu.org/licenses/lgpl-3.0";
    break;
    case "Mozilla Public License 2.0":
    lsLink = "https://opensource.org/licenses/MPL-2.0";
    break;
    case "Apache License 2.0":
    lsLink = "https://opensource.org/licenses/Apache-2.0";
    break;
    case "MIT License":
    lsLink = "https://opensource.org/licenses/MIT";
    break;
    case "Boost Software License 1.0":
    lsLink = "https://www.boost.org/LICENSE_1_0.txt";
    break;
    case "The Unlicense":
    lsLink = "https://unlicense.org";
    break;
    default:
    lsLink = "";
    break;

  }


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

  renderLicenseBadge(userAnswer.license);
  renderLicenseLink(userAnswer.license);

  readDraft +=
  `
  
  ## License
  
  ![${userAnswer.license}](${badgeImg})
  ${lsLink}
  
  `;
  

  return readDraft;
  

}

module.exports = generateMarkdown;
