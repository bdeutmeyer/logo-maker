function Circle(shapeColor) {
    this.shapeColor = shapeColor;
    this.setColor = function() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
    this.render = function() {
        this.setColor();
    }
}
function Triangle(shapeColor) {
    this.shapeColor = shapeColor;
    this.setColor = function() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
    this.render = function() {
        this.setColor();
    }
}
function Square(shapeColor) {
    this.shapeColor = shapeColor;
    this.setColor = function() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
    this.render = function() {
        this.setColor();
    }
}

module.exports = { Circle, Triangle, Square };