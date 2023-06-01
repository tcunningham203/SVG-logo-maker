// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require('fs');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// Links this to the generate markdown javascript file in the utils folder
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

// The questions asked were chosen based on the requirements for the assignment, as well as the "Professional Readme Guide" found in the credits section of this repository's readme.
const questions = [
    {
        name: 'letters',
        type: 'input',
        message: 'The following is a series of questions to help you create your SVG logo. First, the logo text. Type up to 3 letters to be printed on your logo, then press enter.',
        maxLength: 3
        
    },
    {
        name: 'color',
        type: 'input',
        message: 'What color would you like for your logo text? Type a color or hex code, then press enter.',
        
    },

    {
        name: 'shape',
        type: 'list',
        message: 'Which shape would you like as the background of the logo? Use the up and down arrow keys to select an option, then press enter.',
        choices: [
            "Circle",
            "Triangle",
            "Square",
     
        ],
        
    },
    {  
        name: 'github',
        type: 'input',
        message: 'Final question: What color would you like for your background shape? Type a color or hex code, then press enter.',
    },


];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('All done! View your logo in the examples folder. If you want to make a new logo without erasing this one, please rename this logo to something else.')
    });
};


// TODO: Create a function to initialize app
function init() {

// The code within this function was largely taken from the inquirer documentation.

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Creating logo...")
// NOTE: For the purpose of not deleting the readme that came with this application, the filename created will be placed in the "Generated-README" folder.
    writeToFile("./examples/README.md", generateMarkdown(answers))
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


