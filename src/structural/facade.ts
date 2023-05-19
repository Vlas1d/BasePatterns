enum GoodsType {
    Food = "food",
    Gadgets = "gadgets",
    Furniture = "furniture"
}

interface Goods {
    type: GoodsType;
    name: string;
    price: number;
}
interface Wrapper {
    getData(): string;
}
interface Facade {
    createOrder(): object;
    generateReport(): string;
}


class Fruit implements Goods, Wrapper {
    type = GoodsType.Food;
    name = "Apple";
    price = 100;

    getData(): string {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}

class Meat implements Goods, Wrapper {
    type = GoodsType.Food;
    name = "Veal";
    price = 250;
    getData(): string {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}

class Phone implements Goods, Wrapper {
    type = GoodsType.Gadgets;
    name = "iPhone";
    price = 30000;
    getData(): string {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}

class Laptop implements Goods, Wrapper {
    type = GoodsType.Gadgets;
    name = "HP";
    price = 25000;
    getData(): string {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}

class Table implements Goods, Wrapper {
    type = GoodsType.Furniture;
    name = "ComputerDesk";
    price = 5000;
    getData(): string {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}

class Bed implements Goods, Wrapper {
    type = GoodsType.Food;
    name = "DoubleBed";
    price = 12000;
    getData(): string {
        return `>>> Type: ${this.type}; Name: ${this.name}; Price: ${this.price} UAH`;
    }
}

class GoodsWrapper implements Wrapper {
    private goods: Wrapper;

    constructor(goods: Wrapper) {
        this.goods = goods;
    }

    getData(): string {
        return `${this.goods.getData()}; !! This product was purchased from the Rozetka online store !!`;
    }
}

class GoodsPackage {
    private goods: { [key: string]: Wrapper } = {};

    addGoods(name: string, goods: Wrapper): void {
        this.goods[name] = goods;
    }

    getGoods(): Object {
        return this.goods;
    }
}

//---------------------------------FACADE----------------------------------

class Order implements Facade {

    private package: GoodsPackage = new GoodsPackage();

    private generatePackage(...goods: string[]): void {
        if (goods.includes('Apple')) this.package.addGoods('Apple', new Fruit());
        if (goods.includes('Veal')) this.package.addGoods('Veal', new Meat());
        if (goods.includes('iPhone')) this.package.addGoods('iPhone', new GoodsWrapper(new Phone));
        if (goods.includes('HP')) this.package.addGoods('HP', new GoodsWrapper(new Laptop));
        if (goods.includes('ComputerDesk')) this.package.addGoods('ComputerDesk', new Table());
        if (goods.includes('DoubleBed')) this.package.addGoods('DoubleBed', new Bed());
    }

    generateReport(): string {
        let report: string = 'Your order: \n';
        for (const key in this.package.getGoods()) {
            if (this.package.getGoods().hasOwnProperty(key)) {
                report += this.package.getGoods()[key].getData() + '\n';
            }
        }
        return report;
    }

    createOrder(...goods: string[]): object {
        this.generatePackage(...goods);
        return this.package.getGoods();
    }
}

//---------------------------------Client----------------------------------

const order: Order = new Order();

console.log(order.createOrder('Apple', 'iPhone', 'ComputerDesk'));
console.log(order.generateReport());