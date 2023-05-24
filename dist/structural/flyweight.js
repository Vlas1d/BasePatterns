class ParticleType {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
    getSize() {
        return this.size;
    }
    getColor() {
        return this.color;
    }
}
class ParticleFactory {
    static getParticle(size, color) {
        let particle = this.particles.find(particle => particle.getSize() === size && particle.getColor() === color);
        if (particle === undefined) {
            particle = new ParticleType(size, color);
            this.particles.push(particle);
        }
        return particle;
    }
}
ParticleFactory.particles = [];
class Particle {
    constructor(x, y, particle) {
        this.x = x;
        this.y = y;
        this.type = particle;
    }
    getParticle() {
        return `>>> Coords: ${this.x}, ${this.y}; Size: ${this.type.getSize()}; Color: ${this.type.getColor()}`;
    }
}
const usedMemoryBefore = process.memoryUsage().heapUsed;
let particles = [];
for (let i = 0; i < 1000000; i++) {
    particles.push(new Particle(1, 1, ParticleFactory.getParticle(1, 'green')));
    particles.push(new Particle(23, 14, ParticleFactory.getParticle(1, 'orange')));
    particles.push(new Particle(10, 1, ParticleFactory.getParticle(3, 'yellow')));
}
const usedMemoryAfter = process.memoryUsage().heapUsed;
const memoryUsage = usedMemoryAfter - usedMemoryBefore;
console.log(`Flyweight memory usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);
//# sourceMappingURL=flyweight.js.map