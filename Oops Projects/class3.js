class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

/*Explanation
    The code defines two classes: Vehicle and Car. Car is a subclass of Vehicle, inheriting its properties and methods. An instance of Car is created with the make 'Toyota', model 'Camry', and year 2020. When myCar.getInfo() is called, it returns a string including the make, model, and year, which is then logged to the console.
*/