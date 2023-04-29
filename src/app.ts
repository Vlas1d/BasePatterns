interface Animal {
    speak(): void;
}

class Cat implements Animal {
    speak() {
        console.log("Мяу!");
    }
}

class Dog implements Animal {
    speak() {
        console.log("Гав!");
    }
}

let animals: Animal[] = [new Cat(), new Dog(), new Cat()];

for (let animal of animals) {
    animal.speak();
}