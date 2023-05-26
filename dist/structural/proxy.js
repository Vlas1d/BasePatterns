class CapitalService {
    constructor(country) {
        this.country = country;
    }
    getCapital() {
        let capital;
        console.log('-------------loading-------------');
        console.log('-------------loading-------------');
        switch (this.country) {
            case 'Ukraine':
                capital = 'Kyiv';
                break;
            case 'Poland':
                capital = 'Warsaw';
                break;
            case 'France':
                capital = 'Paris';
                break;
            default:
                capital = 'Not Found';
                break;
        }
        return capital;
    }
}
class CapitalProxy {
    constructor(country) {
        this.service = null;
        this.country = country;
    }
    getCapital() {
        if (CapitalProxy.cache.has(this.country)) {
            return `>>> ${CapitalProxy.cache.get(this.country)} from cache`;
        }
        else {
            this.service = new CapitalService(this.country);
            const data = this.service.getCapital();
            CapitalProxy.cache.set(this.country, data);
            return `>>> ${data} from service`;
        }
    }
}
CapitalProxy.cache = new Map();
console.time('1');
const proxy = new CapitalProxy('Ukraine');
console.log(proxy.getCapital());
console.timeEnd('1');
console.time('2');
const proxy1 = new CapitalProxy('Ukraine');
console.log(proxy1.getCapital());
console.timeEnd('2');
console.time('3');
const proxy2 = new CapitalProxy('Poland');
console.log(proxy2.getCapital());
console.timeEnd('3');
console.time('4');
const proxy3 = new CapitalProxy('France');
console.log(proxy3.getCapital());
console.timeEnd('4');
//# sourceMappingURL=proxy.js.map