abstract class Figure {
    abstract visit(visitor: Visitor): number;
}

class Circle extends Figure {
    radius: number = 5;

    visit(visitor: Visitor): number {
        return visitor.calculateCircle(this);
    }
}

class Rectangle extends Figure {
    sideA: number = 10;
    sideB: number = 7;

    visit(visitor: Visitor): number {
        return visitor.calculateRectangle(this);
    }
}

class Triangle extends Figure {
    sideA: number = 3;
    sideB: number = 4;
    sideC: number = 5;

    visit(visitor: Visitor): number {
        return visitor.calculateTriangle(this);
    }
}

//-----------------------VISITOR--------------------------------------------

interface Visitor {
    calculateCircle(circle: Circle): number;
    calculateRectangle(rectangle: Rectangle): number;
    calculateTriangle(triangle: Triangle): number;
}

//-----------------------VISITORS----------------------------------------------

class Perimeter implements Visitor {
    calculateCircle(circle: Circle): number {
        return 2 * Math.PI * circle.radius;
    }
    calculateRectangle(rectangle: Rectangle): number {
        return (rectangle.sideA * 2) + (rectangle.sideB * 2);
    }
    calculateTriangle(triangle: Triangle): number {
        return triangle.sideA + triangle.sideB + triangle.sideC;
    }
}
class Area implements Visitor {
    calculateCircle(circle: Circle): number {
        return Math.PI * Math.abs(circle.radius);
    }
    calculateRectangle(rectangle: Rectangle): number {
        return rectangle.sideA * rectangle.sideB;
    }
    calculateTriangle(triangle: Triangle): number {
        let p: number = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
        return Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC));
    }
}

//------------------------CLIENT------------------------------------

const circle = new Circle();
const rectangle = new Rectangle();
const triangle = new Triangle();

console.log(`>>> P >>> ${circle.visit(new Perimeter())}`);
console.log(`>>> S >>> ${circle.visit(new Area())}`);
console.log(`>>> P >>> ${rectangle.visit(new Perimeter())}`);
console.log(`>>> S >>> ${rectangle.visit(new Area())}`);
console.log(`>>> P >>> ${triangle.visit(new Perimeter())}`);
console.log(`>>> S >>> ${triangle.visit(new Area())}`);