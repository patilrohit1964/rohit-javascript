class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

/* Explanation
The Animal class serves as a generic blueprint for any animal. It has a constructor method that takes a name parameter and assigns it to the instance variable this.name. It also has a method speak() that simply logs a message saying that the animal makes a noise.
The Dog class extends the Animal class, inheriting its properties and methods. However, it overrides the speak() method with its own implementation. In this case, the speak() method for Dog objects logs a message saying that the dog barks, including the dog's name.
After defining these classes, the code creates a new instance of the Dog class with the name "Buddy" and assigns it to the variable dog.
Finally, it calls the speak() method on the dog object. Since the Dog class overrides the speak() method, it executes the speak() method defined in the Dog class, resulting in the message "Buddy barks." being logged to the console.
 */