class Shape {
    constructor(text, textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    setColor(chosenColor) {
      let fillColor = chosenColor;
      render(fillColor);
    }
    render(fillColor) {
        return `<circle cx="150" cy="100" r="80" fill="${fillColor}" />`
    }
}
class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    // setColor(chosenColor) {
      
    // }
    // render() {
    //     return '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />'
    // }
}

class Square extends Shape{
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    // setColor(chosenColor) {
      
    // }
    // render() {
    //     return '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />'
    // }
}
    
let circle;
const generateLogo = (response) => {
    switch(response.shape) {
        case 'Circle':
            const circle = new Circle(response.shape, response.shapeColor);
            setColor(response.shapeColor);
            break;
        case 'Triangle':
            const triangle = new Triangle(response.shape, response.shapeColor);
            setColor(response.shapeColor);
            break;
        case 'Square':
            const square = new Square(response.shape, response.shapeColor);
            setColor(response.shapeColor);
            break;
    }
    console.log(circle);
}

module.exports = generateLogo;