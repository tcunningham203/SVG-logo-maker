class Shape {
    constructor (letters, txtcolor, bgcolor) {
        this.letters = letters
        this.txtcolor = txtcolor
        this.bgcolor = bgcolor
    }

}

class Circle extends Shape {
    constructor (letters, txtcolor, bgcolor) {
        super(letters, txtcolor, bgcolor);
        this.letters = `<text fill="${this.txtcolor}" font-weight="600" font-size="70" font-family="Century Gothic" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${this.letters}</text>`;
        this.shape = `<circle cx="150" cy="100" r="100" fill="${this.bgcolor}"/>`;
    }

    render () {
        return `<circle cx="150" cy="100" r="100" fill="${this.bgcolor}"/>`;
    }
}

class Triangle extends Shape {
    constructor (letters, txtcolor, bgcolor) {
        super(letters, txtcolor, bgcolor);
        this.letters = `<text fill="${this.txtcolor}" font-weight="600" font-size="70" font-family="Century Gothic" x="50%" y="30%" dominant-baseline="middle" text-anchor="middle">${this.letters}</text>`;
        this.shape = `<polygon points= "20,0 150,180 280,0" fill="${this.bgcolor}"/>`;
    }

    render () {
        return `<polygon points= "20,0 150,180 280,0" fill="${this.bgcolor}"/>`;
    }
}

class Square extends Shape {
    constructor (letters, txtcolor, bgcolor) {
        super(letters, txtcolor, bgcolor);
        this.letters = `<text fill="${this.txtcolor}" font-weight="600" font-size="70" font-family="Century Gothic" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${this.letters}</text>`;
        this.shape = `<rect x="65" y="12" width="170" height="170" fill="${this.bgcolor}"/>`;
    }

    render () {
        return `<rect x="65" y="12" width="170" height="170" fill="${this.bgcolor}"/>`;
    }
}

svgGen = (data) => {
    if( data.shape === 'Circular background') {
        const circle = new Circle (data.letters, data.txtcolor, data.bgcolor)
        return `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${circle.shape} 
        ${circle.letters}
        </svg>`
    } else if (data.shape === 'Triangular background') {
        const triangle = new Triangle (data.letters, data.txtcolor, data.bgcolor)
        return `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${triangle.shape} 
        ${triangle.letters}
        </svg>`

    } else if (data.shape === "Square background") {
        const square = new Square (data.letters, data.txtcolor, data.bgcolor)
        return `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${square.shape} 
        ${square.letters}
        </svg>`

    }

}



module.exports = {Circle, Triangle, Square, svgGen};