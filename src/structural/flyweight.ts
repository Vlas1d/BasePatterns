///*
class ParticleType {
    private size: number;
    private color: string;

    constructor(size: number, color: string) {
        this.size = size;
        this.color = color;
    }

    getSize(): number {
        return this.size;
    }
    getColor(): string {
        return this.color;
    }
}

class ParticleFactory {
    static particles: ParticleType[] = [];

    static getParticle(size: number, color: string): ParticleType {
        let particle = this.particles.find(particle => particle.getSize() === size && particle.getColor() === color);
        if (particle === undefined) {
            particle = new ParticleType(size, color);
            this.particles.push(particle);
        }
        return particle;
    }
}

class Particle {
    x: number;
    y: number;
    type: ParticleType;

    constructor(x: number, y: number, particle: ParticleType) {
        this.x = x;
        this.y = y;
        this.type = particle;
    }

    getParticle(): string {
        return `>>> Coords: ${this.x}, ${this.y}; Size: ${this.type.getSize()}; Color: ${this.type.getColor()}`;
    }

}

//------------------Client--------------------------------------------------

const usedMemoryBefore = process.memoryUsage().heapUsed;

let particles: Particle[] = [];

for (let i = 0; i < 1000000; i++) {
    particles.push(new Particle(1, 1, ParticleFactory.getParticle(1, 'green')));
    particles.push(new Particle(23, 14, ParticleFactory.getParticle(1, 'orange')));
    particles.push(new Particle(10, 1, ParticleFactory.getParticle(3, 'yellow')));
}

const usedMemoryAfter = process.memoryUsage().heapUsed;
const memoryUsage = usedMemoryAfter - usedMemoryBefore;

console.log(`Flyweight memory usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);

//*/

/*
class Particle {
    x: number;
    y: number;
    size: number;
    color: string;

    constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    getParticle(): string {
        return `>>> Coords: ${this.x}, ${this.y}; Size: ${this.size}; Color: ${this.color}`;
    }
}

const usedMemoryBefore = process.memoryUsage().heapUsed;

let particles: Particle[] = [];

for (let i = 0; i < 1000000; i++) {
    particles.push(new Particle(1, 1, 1, 'green'));
    particles.push(new Particle(1, 1, 1, 'orange'));
    particles.push(new Particle(1, 1, 3, 'yellow'));
}

const usedMemoryAfter = process.memoryUsage().heapUsed;
const memoryUsage = usedMemoryAfter - usedMemoryBefore;

console.log(`No flyweight memory usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);
*/