interface Subject {
    addSubscriber(obs: Observer): void;
    removeSubscriber(obs: Observer): void;
    notify(): void;

    getEuro(): number;
    getUAH(): number;
    getBitcoin(): number;
}

interface Observer {
    update(exchange: Subject): void;
    getData(): void;

    subscribe(): void;
    unsubscribe(): void;
}

//-------------------------SUBJECT------------------------------------

class ExchangeRate implements Subject {
    private euro: number = 0.9;
    private uah: number = 37;
    private bitcoin: number = 0.00004;

    private subscribers: Observer[] = [];

    addSubscriber(sub: Observer): void {
        this.subscribers.push(sub);
    }
    removeSubscriber(sub: Observer): void {
        let i = this.subscribers.indexOf(sub);
        if (i != -1) {
            this.subscribers.splice(i, 1);
        }
    }

    setRate(euro: number, uah: number, bitcoin: number) {
        this.euro = euro;
        this.uah = uah;
        this.bitcoin = bitcoin;
        this.notify();
    }

    notify(): void {
        this.subscribers.forEach(sub => {
            sub.update(this);
        });
    }

    getEuro(): number {
        return this.euro;
    }
    getUAH(): number {
        return this.uah;
    }
    getBitcoin(): number {
        return this.bitcoin;
    }
}

//-------------------------OBSERVER----------------------------------------

class Shop implements Observer {
    private iphone_price: number = 1000;
    private mac_price: number = 3000;

    private exchange: Subject;

    constructor(exchange: Subject) {
        this.exchange = exchange;
    }

    update(exchange: Subject): void {
        this.exchange = exchange;
    }

    getData(): void {
        console.log(`>>> iPhone price: ${this.exchange.getEuro() * this.iphone_price} Euro; ${this.exchange.getUAH() * this.iphone_price} UAH;`);
    }
    subscribe(): void {
        exchange.addSubscriber(this);
    }
    unsubscribe(): void {
        exchange.removeSubscriber(this);
    }
}

class Exchange implements Observer {
    private old_data: number[] = [];
    private new_data: number[] = []

    private exchange: Subject;

    constructor(exchange: Subject) {
        this.exchange = exchange;
        this.old_data = [exchange.getEuro(), exchange.getUAH(), exchange.getBitcoin()];
        this.new_data = this.old_data;
    }

    update(exchange: Subject): void {
        this.exchange = exchange;
        this.old_data = this.new_data;
        this.new_data = [exchange.getEuro(), exchange.getUAH(), exchange.getBitcoin()];
    }
    getData(): void {
        console.log(`>>> Euro: +${(1 / this.new_data[0]) - (1 / this.old_data[0])}; >>> Bitcoin: +${(1 / this.new_data[2]) - (1 / this.old_data[2])}`)
    }
    subscribe(): void {
        exchange.addSubscriber(this);
    }
    unsubscribe(): void {
        exchange.removeSubscriber(this);
    }
}

class InfoSite implements Observer {
    private exchange: Subject;

    constructor(exchange: Subject) {
        this.exchange = exchange;
    }

    update(exchange: Subject): void {
        this.exchange = exchange;
    }
    getData(): void {
        console.log(`>>> Coefficient: Euro (${this.exchange.getEuro()}); UAH (${this.exchange.getUAH()}); Bitcoin (${this.exchange.getBitcoin()});`)
    }
    subscribe(): void {
        exchange.addSubscriber(this);
    }
    unsubscribe(): void {
        exchange.removeSubscriber(this);
    }
}

//--------------------------CLIENT-----------------------------------------------

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