var GoodsType;
(function (GoodsType) {
    GoodsType["Food"] = "food";
    GoodsType["Gadgets"] = "gadgets";
    GoodsType["Furniture"] = "furniture";
})(GoodsType || (GoodsType = {}));
class Fruit {
    constructor() {
        this.type = GoodsType.Food;
        this.name = "Apple";
        this.price = 100;
    }
    getData() {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}
class Meat {
    constructor() {
        this.type = GoodsType.Food;
        this.name = "Veal";
        this.price = 250;
    }
    getData() {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}
class Phone {
    constructor() {
        this.type = GoodsType.Gadgets;
        this.name = "iPhone";
        this.price = 30000;
    }
    getData() {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}
class Laptop {
    constructor() {
        this.type = GoodsType.Gadgets;
        this.name = "HP";
        this.price = 25000;
    }
    getData() {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}
class Table {
    constructor() {
        this.type = GoodsType.Furniture;
        this.name = "ComputerDesk";
        this.price = 5000;
    }
    getData() {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}
class Bed {
    constructor() {
        this.type = GoodsType.Food;
        this.name = "DoubleBed";
        this.price = 12000;
    }
    getData() {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}
class GoodsWrapper {
    constructor(goods) {
        this.goods = goods;
    }
    getData() {
        return `${this.goods.getData()}; !! This product was purchased from the Rozetka online store !!`;
    }
}
class GoodsPackage {
    constructor() {
        this.goods = {};
    }
    addGoods(name, goods) {
        this.goods[name] = goods;
    }
    getGoods() {
        return this.goods;
    }
}
class Order {
    constructor() {
        this.package = new GoodsPackage();
    }
    generatePackage(...goods) {
        if (goods.includes('Apple'))
            this.package.addGoods('Apple', new Fruit());
        if (goods.includes('Veal'))
            this.package.addGoods('Veal', new Meat());
        if (goods.includes('iPhone'))
            this.package.addGoods('iPhone', new GoodsWrapper(new Phone));
        if (goods.includes('HP'))
            this.package.addGoods('HP', new GoodsWrapper(new Laptop));
        if (goods.includes('ComputerDesk'))
            this.package.addGoods('ComputerDesk', new Table());
        if (goods.includes('DoubleBed'))
            this.package.addGoods('DoubleBed', new Bed());
    }
    generateReport() {
        let report = 'Your order: \n';
        for (const key in this.package.getGoods()) {
            if (this.package.getGoods().hasOwnProperty(key)) {
                report += this.package.getGoods()[key].getData() + '\n';
            }
        }
        return report;
    }
    createOrder(...goods) {
        this.generatePackage(...goods);
        return this.package.getGoods();
    }
}
const order = new Order();
console.log(order.createOrder('Apple', 'iPhone', 'ComputerDesk'));
console.log(order.generateReport());
//# sourceMappingURL=facade.js.map