const { Circle, Triangle, Square } = require('./shapes');

function SVG(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        
        this.setText = function(text, textColor) {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        }
        this.setShape = function(shape) {
            switch(shape) {
                case 'Circle':
                    const circle = new Circle();
                    break;
                case 'Triangle':
                    const triangle = new Triangle();
                    break;
                case 'Square':
                    const square = new Square();
                    break;
            }
        }
        this.render = function() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.setShape()}${this.setText()}</svg>`
        }
}

module.exports = { SVG };