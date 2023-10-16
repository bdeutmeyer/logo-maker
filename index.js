const inquirer = require('inquirer');
const fs = require('fs');
const prompts = require('./lib/prompts');
const generateLogo = require('./lib/generateLogo');

//Function to wrap inquirer so that it's not in the global scope
function init() {
  inquirer
    .prompt(prompts)
    .then((response) =>
    fs.writeFile('logo.svg', generateLogo(response), (err) =>
    err ? console.error(err) : console.log('Success!')));
}
  // Function call to initialize app
init();