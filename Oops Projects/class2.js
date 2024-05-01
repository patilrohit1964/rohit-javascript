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
/* Explanation
    Shape Class:
It serves as a base class for shapes and has a constructor method that takes a color parameter and assigns it to the color property of the shape.
It also has a method getColor() that returns the color of the shape.
Circle Class (extends Shape):
It extends the Shape class, inheriting its properties and methods.
It adds a radius property to represent the radius of the circle.
The constructor of Circle invokes super(color) to call the constructor of the superclass (Shape) and initialize the color property.
ColoredCircle Class (extends Circle):
It extends the Circle class, inheriting its properties and methods.
Its constructor also calls super(color, radius) to invoke the constructor of the superclass (Circle).
Creating an Instance:
An instance of ColoredCircle is created with the color "blue" and radius 5, stored in the variable coloredCircle.
Logging the Color:
console.log(coloredCircle.getColor()) is called, which retrieves the color of the coloredCircle object using the getColor() method inherited from the Shape class
*/