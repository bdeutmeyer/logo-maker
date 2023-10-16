//SVG class constructor
class SVG {
    constructor(){
        this.text = "";
        this.shape = "";
    }
        //Render function outlining code structure, additional code passed in from other functions based on user input
        render(){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
        }
        //Function to set text and text color, error to ensure text is short enough
        setText(text, textColor) {
            if (text.length < 4) {
                this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
            } else {
                throw new Error("Text must not exceed 3 characters.");
            }
        
        }
        //Sets shape based on user choice
        setShape(shape) {
        this.shape = shape.render();
    }
}

module.exports =  SVG;