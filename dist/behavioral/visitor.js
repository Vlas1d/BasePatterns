class Figure {
}
class Circle extends Figure {
    constructor() {
        super(...arguments);
        this.radius = 5;
    }
    visit(visitor) {
        return visitor.calculateCircle(this);
    }
}
class Rectangle extends Figure {
    constructor() {
        super(...arguments);
        this.sideA = 10;
        this.sideB = 7;
    }
    visit(visitor) {
        return visitor.calculateRectangle(this);
    }
}
class Triangle extends Figure {
    constructor() {
        super(...arguments);
        this.sideA = 3;
        this.sideB = 4;
        this.sideC = 5;
    }
    visit(visitor) {
        return visitor.calculateTriangle(this);
    }
}
class Perimeter {
    calculateCircle(circle) {
        return 2 * Math.PI * circle.radius;
    }
    calculateRectangle(rectangle) {
        return (rectangle.sideA * 2) + (rectangle.sideB * 2);
    }
    calculateTriangle(triangle) {
        return triangle.sideA + triangle.sideB + triangle.sideC;
    }
}
class Area {
    calculateCircle(circle) {
        return Math.PI * Math.abs(circle.radius);
    }
    calculateRectangle(rectangle) {
        return rectangle.sideA * rectangle.sideB;
    }
    calculateTriangle(triangle) {
        let p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
        return Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC));
    }
}
const circle = new Circle();
const rectangle = new Rectangle();
const triangle = new Triangle();
console.log(`>>> P >>> ${circle.visit(new Perimeter())}`);
console.log(`>>> S >>> ${circle.visit(new Area())}`);
console.log(`>>> P >>> ${rectangle.visit(new Perimeter())}`);
console.log(`>>> S >>> ${rectangle.visit(new Area())}`);
console.log(`>>> P >>> ${triangle.visit(new Perimeter())}`);
console.log(`>>> S >>> ${triangle.visit(new Area())}`);
//# sourceMappingURL=visitor.js.map