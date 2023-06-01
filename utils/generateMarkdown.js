// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'an MIT license.') {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === 'an Apache license.') {
      return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    } else if (license === 'a Mozilla public license.') {
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    } else if (license === 'Unlicense, a public domain equivalent license.') {
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    } else {
      return '';
    };
  };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'an MIT license.') {
      return "Learn more about the MIT license here: https://opensource.org/licenses/MIT";
    } else if (license === 'an Apache license.') {
      return "Learn more about the Apache license here: https://opensource.org/licenses/Apache-2.0";
    } else if (license === 'a Mozilla public license.') {
      return "Learn more about the Mozilla public license here: https://opensource.org/licenses/MPL-2.0";
    } else if (license === 'Unlicense, a public domain equivalent license.') {
      return "Learn more about Unlicense here: http://unlicense.org/";
    } else {
      return '';
    };
  };
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `## License
  
  This application is covered under ${license}
  `;
    } else {
      return '';
    }
  }
  
  
  // TODO: Create a function to generate markdown for README
  
  
  
  
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    return `# ${data.title}
    ${licenseBadge}
    ## Description
    ${data.desc}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
  
    ## Installation
    ${data.install}
  
    ## Usage
    ${data.usage}
  
    ## Contributing
    ${data.collab}
  
    ## Tests
    ${data.test}
  
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
  
    ## Questions
  
    For additional questions, comments, or concerns, the creator can be reached via GitHub or email.
  
    GitHub: [${data.github}](https://github.com/${data.github})
  
    Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  