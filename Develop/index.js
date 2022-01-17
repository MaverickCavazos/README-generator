// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and example for use of project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their Github profiles.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Input license',
        choices: ['MIT','Apache 2.0', 'BSD 3.0', 'None']
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, add a heading called "features" and list them.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created a app or package and would like other devs to contribute, add guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github profile name.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email and instructions on how to reach you for additional questions.'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('writeToFile');
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!! 
        writeToFile('README.md', generateMarkdown({...answers}))
    
      })
      .catch((error) => {
        if (error.isTtyError) {
            console.log(error);
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();
