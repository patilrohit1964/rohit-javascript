class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());