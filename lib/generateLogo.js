const { SVG } = require('./svg')

function generateLogo(response) {
    const svg = new SVG();
    svg.setText(response.text, response.textColor);
    svg.setShape(response.shape, response.shapeColor);
    return svg.render();
}

module.exports = generateLogo;