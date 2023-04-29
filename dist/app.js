class Cat {
    speak() {
        console.log("Мяу!");
    }
}
class Dog {
    speak() {
        console.log("Гав!");
    }
}
let animals = [new Cat(), new Dog(), new Cat()];
for (let animal of animals) {
    animal.speak();
}
//# sourceMappingURL=app.js.map