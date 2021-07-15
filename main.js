const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name'

  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address?'

  }, {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your site.',
    default: 'Digital Business Card'

  }, {
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of your site.',
    default: 'This is an auto-generated website/digital business card'

  }, {
    type: 'input',
    name: 'github',
    message: 'What is your github url?',

  }, {
    type: 'input',
    name: 'linkedin',
    message: 'What is your linkedin url?',

  }
];



// writes the file
const writeToFile = (fileName, data) => {
  console.log('writing to file');
  fs.writeFileSync(path.join(process.cwd(), fileName), data), err => err ? console.log(err) : console.log('success!');;
}

// initialize the app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('index.html', generateHTML(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
