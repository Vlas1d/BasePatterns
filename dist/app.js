class Phone {
    constructor(model, nums, internet) {
        this.model = model;
        this.nums = nums;
        this.internet = internet;
    }
    getInfo() {
        return `Model: ${this.model}, Devices nums: ${this.nums}, Internet: ${this.internet}`;
    }
}
class Laptop {
    constructor(model, nums, internet) {
        this.model = model;
        this.nums = nums;
        this.internet = internet;
    }
    getInfo() {
        return `Model: ${this.model}, Devices nums: ${this.nums}, Internet: ${this.internet}`;
    }
}
class Headphone {
    constructor(model, nums, internet) {
        this.model = model;
        this.nums = nums;
        this.internet = internet;
    }
    getInfo() {
        return `Model: ${this.model}, Devices nums: ${this.nums}, Internet: ${this.internet}`;
    }
}
const phone = new Phone('Samsung', 100, '2G, 3G, 4G, WiFi');
const laptop = new Laptop('HP', 34, 'WiFi');
const headphone = new Headphone('Nokia', 234, false);
const devices = [phone, laptop, headphone];
function showInfo(device) {
    return device.getInfo();
}
for (let i = 0; i < devices.length; i++) {
    console.log(showInfo(devices[i]));
}
//# sourceMappingURL=app.js.map