abstract class Geometry {
    protected color: string;
    protected border: boolean;

    abstract getArea(): number;

    constructor(color: string, border: boolean) {
        this.color = color;
        this.border = border;
    }

    showInfo(): string {
        return `Color: ${this.color} and Border: ${this.border}`;
    }

}

class Circle extends Geometry {
    private radius: number;

    constructor(color: string, border: boolean, radius: number) {
        super(color, border);

        this.radius = radius;
    }

    getArea(): number {
        return Math.round(Math.PI * (this.radius * this.radius) * 10) / 10;
    }

}

class Rectangle extends Geometry {
    private side_1: number;
    private side_2: number;

    constructor(color: string, border: boolean, side_1: number, side_2: number) {
        super(color, border);

        this.side_1 = side_1;
        this.side_2 = side_2;
    }

    getArea(): number {
        return (this.side_1 * this.side_2);
    }
}

const circle = new Circle("green", true, 10);
const rect = new Rectangle("red", false, 12, 15);

console.log(`Circle area: ${circle.getArea()} and ${circle.showInfo()}`);
console.log(`Rectangle area: ${rect.getArea()} and ${rect.showInfo()}`);

try {

} catch (err) {

}