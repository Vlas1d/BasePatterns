interface Device<T> {
    model: string;
    nums: number;
    internet: T;

    getInfo(): string;
}

class Phone implements Device<string> {
    model: string;
    nums: number;
    internet: string;

    constructor(model: string, nums: number, internet: string) {
        this.model = model;
        this.nums = nums;
        this.internet = internet;
    }

    getInfo(): string {
        return `Model: ${this.model}, Devices nums: ${this.nums}, Internet: ${this.internet}`;
    }
}

class Laptop implements Device<string> {
    model: string;
    nums: number;
    internet: string;

    constructor(model: string, nums: number, internet: string) {
        this.model = model;
        this.nums = nums;
        this.internet = internet;
    }

    getInfo(): string {
        return `Model: ${this.model}, Devices nums: ${this.nums}, Internet: ${this.internet}`;
    }
}

class Headphone implements Device<boolean> {
    model: string;
    nums: number;
    internet: boolean;

    constructor(model: string, nums: number, internet: boolean) {
        this.model = model;
        this.nums = nums;
        this.internet = internet;
    }

    getInfo(): string {
        return `Model: ${this.model}, Devices nums: ${this.nums}, Internet: ${this.internet}`;
    }
}


const phone = new Phone('Samsung', 100, '2G, 3G, 4G, WiFi');
const laptop = new Laptop('HP', 34, 'WiFi');
const headphone = new Headphone('Nokia', 234, false);

type internetData = string | boolean;

const devices: Device<internetData>[] = [phone, laptop, headphone];

function showInfo(device: Device<internetData>) {
    return device.getInfo();
}

for (let i = 0; i < devices.length; i++) {
    console.log(showInfo(devices[i]));
}