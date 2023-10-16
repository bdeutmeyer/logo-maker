const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const SVG = require("./lib/svg")
const prompts = require('./lib/prompts');
const { Circle, Triangle, Square} = require("./lib/shapes")

//Function to wrap inquirer so that it's not in the global scope
function init() {
  inquirer
    .prompt(prompts)
    .then(({text, shapeColor, textColor, shapeType}) => {
      let shape;
      switch(shapeType){
        case "Circle":
          shape = new Circle()
          break;
        case "Triangle":
          shape = new Triangle();
          break;
        default:
          shape = new Square();
          break;
      }
      shape.setColor(shapeColor);
      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);
      return writeFile("logo.svg", svg.render())
    })
    .then(() => {
      console.log("Generated logo.svg");
    })
    .catch((error) => {
      console.log(error);
    })
}
  // Function call to initialize app
init();