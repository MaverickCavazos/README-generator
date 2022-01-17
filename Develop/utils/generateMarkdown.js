// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ''
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `* [License](#license)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    
    The license we are using ${license}`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  ${renderLicenseLink(data.license)}

  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Credits 

  ${data.credits}



  ${renderLicenseSection(data.license)}

  ## Badge

  ${renderLicenseBadge(data.license)}

  ## Features

  ${data.features}

  ## Contributing

  ${data.contributing}

  ## Questions

  [Github](https://github.com/${data.github})
  ${data.email}

`;
}

module.exports = generateMarkdown;
