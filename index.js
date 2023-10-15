const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const prompts = require('./lib/prompts');
const { SVG } = require('./lib/classes/svg');

//Function to wrap inquirer so that it's not in the global scope
function init() {
  inquirer
    .prompt(prompts)
    .then((response) => {
      const logoSpecs = JSON.parse(response);
      const newLogo = new SVG(
        logoSpecs.text,
        logoSpecs.textColor,
        logoSpecs.shape,
        logoSpecs.shapeColor
      );
      const chosenLogo = newLogo.render();
      return writeFile('logo.svg', chosenLogo);
    })
    .then(() => {
      console.log('Logo created successfully!')
    })
}
// Function call to initialize app
init();