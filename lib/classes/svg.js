const { Circle, Triangle, Square } = require('../../lib/shapes');

class SVG {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    setText(text, textColor) {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShape(shape) {
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
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.setShape()}${this.setText()}</svg>`
    }
}

module.exports = { SVG };