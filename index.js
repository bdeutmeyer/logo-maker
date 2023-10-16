//Dependencies
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const SVG = require("./lib/svg")
const prompts = require('./lib/prompts');
const { Circle, Triangle, Square} = require("./lib/shapes")

//Function to wrap inquirer so that it's not in the global scope
function init() {
  inquirer
  //Prompts imported from prompt.js
    .prompt(prompts)
    .then(({text, shapeColor, textColor, shapeType}) => {
      //Switch statement to create new object based on chosen shape
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
      //Set fill color for shape
      shape.setColor(shapeColor);
      //Create new object for svg, set text content and color
      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);
      //Create and fill logo.svg file
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