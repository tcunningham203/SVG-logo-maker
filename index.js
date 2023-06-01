// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Links this to the generate markdown javascript file in the utils folder
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

// The questions asked were chosen based on the requirements for the assignment, as well as the "Professional Readme Guide" found in the credits section of this repository's readme.
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Please provide the title of your application, then press enter.',
        
    },
    {
        name: 'desc',
        type: 'input',
        message: 'Please provide a short description of your application, then press enter.',
        
    },

    {
        name: 'install',
        type: 'input',
        message: 'Please provide the instructions required to install your application, then press enter.',
        
    },

    {
        name: 'usage',
        type: 'input',
        message: 'Please provide information about the features and usage of your application, then press enter.',
        
    },

    {
        name: 'collab',
        type: 'input',
        message: 'Please provide any guidelines you would like other members of the community to follow if they wish to contribute to your application, then press enter.',
        
    },

    {
        name: 'test',
        type: 'input',
        message: 'Please provide any instructions you may have for testing, then press enter.',
        
    },
    {
        name: 'license',
        type: 'list',
        message: 'Would you like to add a license to your project? If so, please choose from the following four options. If you do not wish to add a license, please select option five. Use the up and down arrow keys to select an option, then press enter.',
        choices: [
            "an MIT license.",
            "an Apache license.",
            "a Mozilla public license.",
            "Unlicense, a public domain equivalent license.",
            "no license at this time."
        ],
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username for the purpose of allowing others to contact you if they have additional questions, then press enter.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address as well, to provide an alternate way for users to reach you, then press enter.',
    },


];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README generated.')
    });
};


// TODO: Create a function to initialize app
function init() {

// The code within this function was largely taken from the inquirer documentation.

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Writing answers...")
// NOTE: For the purpose of not deleting the readme that came with this application, the filename created will be placed in the "Generated-README" folder.
    writeToFile("./GENERATED-README/README.md", generateMarkdown(answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Error 1: Prompt couldn't be rendered in the current environment")
    } else {
      // Something else went wrong
      console.log("Error 2: Something else went wrong")
    }
  });

}

// Function call to initialize app
init();


