class ExchangeRate {
    constructor() {
        this.euro = 0.9;
        this.uah = 37;
        this.bitcoin = 0.00004;
        this.subscribers = [];
    }
    addSubscriber(sub) {
        this.subscribers.push(sub);
    }
    removeSubscriber(sub) {
        let i = this.subscribers.indexOf(sub);
        if (i != -1) {
            this.subscribers.splice(i, 1);
        }
    }
    setRate(euro, uah, bitcoin) {
        this.euro = euro;
        this.uah = uah;
        this.bitcoin = bitcoin;
        this.notify();
    }
    notify() {
        this.subscribers.forEach(sub => {
            sub.update(this);
        });
    }
    getEuro() {
        return this.euro;
    }
    getUAH() {
        return this.uah;
    }
    getBitcoin() {
        return this.bitcoin;
    }
}
class Shop {
    constructor(exchange) {
        this.iphone_price = 1000;
        this.mac_price = 3000;
        this.exchange = exchange;
    }
    update(exchange) {
        this.exchange = exchange;
    }
    getData() {
        console.log(`>>> iPhone price: ${this.exchange.getEuro() * this.iphone_price} Euro; ${this.exchange.getUAH() * this.iphone_price} UAH;`);
    }
    subscribe() {
        exchange.addSubscriber(this);
    }
    unsubscribe() {
        exchange.removeSubscriber(this);
    }
}
class Exchange {
    constructor(exchange) {
        this.old_data = [];
        this.new_data = [];
        this.exchange = exchange;
        this.old_data = [exchange.getEuro(), exchange.getUAH(), exchange.getBitcoin()];
        this.new_data = this.old_data;
    }
    update(exchange) {
        this.exchange = exchange;
        this.old_data = this.new_data;
        this.new_data = [exchange.getEuro(), exchange.getUAH(), exchange.getBitcoin()];
    }
    getData() {
        console.log(`>>> Euro: +${(1 / this.new_data[0]) - (1 / this.old_data[0])}; >>> Bitcoin: +${(1 / this.new_data[2]) - (1 / this.old_data[2])}`);
    }
    subscribe() {
        exchange.addSubscriber(this);
    }
    unsubscribe() {
        exchange.removeSubscriber(this);
    }
}
class InfoSite {
    constructor(exchange) {
        this.exchange = exchange;
    }
    update(exchange) {
        this.exchange = exchange;
    }
    getData() {
        console.log(`>>> Coefficient: Euro (${this.exchange.getEuro()}); UAH (${this.exchange.getUAH()}); Bitcoin (${this.exchange.getBitcoin()});`);
    }
    subscribe() {
        exchange.addSubscriber(this);
    }
    unsubscribe() {
        exchange.removeSubscriber(this);
    }
}
const exchange = new ExchangeRate();
const shop = new Shop(exchange);
const exc = new Exchange(exchange);
const info = new InfoSite(exchange);
shop.subscribe();
exc.subscribe();
info.subscribe();
console.log('>>> BEFORE: ');
shop.getData();
exc.getData();
info.getData();
exchange.setRate(0.8, 32, 0.00002);
console.log('>>> AFTER: ');
shop.getData();
exc.getData();
info.getData();
//# sourceMappingURL=observer.js.map