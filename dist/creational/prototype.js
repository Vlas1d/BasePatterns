var CardType;
(function (CardType) {
    CardType["Key"] = "Card Key";
    CardType["UnlimBar"] = "Unlimited Bar Card";
    CardType["UnlimPool"] = "Unlimited Pool Card";
    CardType["UnlimCafe"] = "Unlimited Cafe Card";
})(CardType || (CardType = {}));
class CardKey {
    constructor(id, type, hotel_number) {
        this.id = id;
        this.type = type;
        this.hotel_number = hotel_number;
    }
    clone() {
        return new CardKey(this.id, this.type, this.hotel_number);
    }
}
class CardUnlimited {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
    clone() {
        return new CardUnlimited(this.id, this.type);
    }
}
class CardRegistry {
    constructor() {
        this.cards = {};
    }
    addCard(name, card) {
        this.cards[name] = card;
    }
    getCard(name) {
        return this.cards[name].clone();
    }
}
const registry = new CardRegistry();
registry.addCard('key', new CardKey(1, CardType.Key, 100));
registry.addCard('pool', new CardUnlimited(1, CardType.UnlimPool));
registry.addCard('bar', new CardUnlimited(1, CardType.UnlimBar));
registry.addCard('cafe', new CardUnlimited(1, CardType.UnlimCafe));
var pool_cards = [];
for (let i = 0; i < 20; i++) {
    pool_cards[i] = registry.getCard('pool');
    pool_cards[i].id += i;
}
console.log(pool_cards);
//# sourceMappingURL=prototype.js.map