const { SVG } = require('./svg')
const { Circle, Triangle, Square } = require('./shapes');

function generateLogo(response) {
    const svg = new SVG();
    svg.setText(response.text, response.textColor);
    switch(response.shape) {
        case 'Circle':
            const circle = new Circle(response.shapeColor);
            svg.setShape(circle);
            break;
        case 'Triangle':
            const triangle = new Triangle(response.shapeColor);
            svg.setShape(triangle);
            break;
        case 'Square':
            const square = new Square(response.shapeColor);
            svg.setShape(square);
            break;
    }
    svg.render();
}

module.exports = generateLogo;