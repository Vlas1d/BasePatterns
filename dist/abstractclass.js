class Geometry {
    constructor(color, border) {
        this.color = color;
        this.border = border;
    }
    showInfo() {
        return `Color: ${this.color} and Border: ${this.border}`;
    }
}
class Circle extends Geometry {
    constructor(color, border, radius) {
        super(color, border);
        this.radius = radius;
    }
    getArea() {
        return Math.round(Math.PI * (this.radius * this.radius) * 10) / 10;
    }
}
class Rectangle extends Geometry {
    constructor(color, border, side_1, side_2) {
        super(color, border);
        this.side_1 = side_1;
        this.side_2 = side_2;
    }
    getArea() {
        return (this.side_1 * this.side_2);
    }
}
const circle = new Circle("green", true, 10);
const rect = new Rectangle("red", false, 12, 15);
console.log(`Circle area: ${circle.getArea()} and ${circle.showInfo()}`);
console.log(`Rectangle area: ${rect.getArea()} and ${rect.showInfo()}`);
try {
}
catch (err) {
}
//# sourceMappingURL=abstractclass.js.map