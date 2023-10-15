const { SVG } = require('./classes/svg');

class Circle extends SVG {
    constructor(shape, shapeColor) {
        super(shape, shapeColor) 
    }
    setColor() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
    render() {
        this.setColor();
    }
}
class Triangle extends SVG {
    constructor(shape, shapeColor) {
        super(shape, shapeColor)
    }
    setColor() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
    render() {
        this.setColor();
    }
}
class Square extends SVG {
    constructor(shape, shapeColor) {
        super(shape, shapeColor)
    }
    setColor() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
    render() {
        this.setColor();
    }
}

module.exports = { Circle, Triangle, Square };