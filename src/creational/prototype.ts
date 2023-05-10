enum CardType {
    Key = 'Card Key',
    UnlimBar = 'Unlimited Bar Card',
    UnlimPool = 'Unlimited Pool Card',
    UnlimCafe = 'Unlimited Cafe Card'
}

interface CardPrototype {
    id: number;
    type: CardType;
    clone(): CardPrototype;
}

class CardKey implements CardPrototype {
    id: number;
    type: CardType;
    hotel_number: number;

    constructor(id: number, type: CardType, hotel_number: number) {
        this.id = id;
        this.type = type;
        this.hotel_number = hotel_number;
    }

    clone(): CardPrototype {
        return new CardKey(this.id, this.type, this.hotel_number);
    }
}

class CardUnlimited implements CardPrototype {
    id: number;
    type: CardType;

    constructor(id: number, type: CardType) {
        this.id = id;
        this.type = type;
    }

    clone(): CardPrototype {
        return new CardUnlimited(this.id, this.type);
    }
}

class CardRegistry {
    private cards: { [key: string]: CardPrototype } = {};

    addCard(name: string, card: CardPrototype): void {
        this.cards[name] = card;
    }

    getCard(name: string): CardPrototype {
        return this.cards[name].clone();
    }
}

//--------------------------------------------------------------------------------------

const registry = new CardRegistry();

registry.addCard('key', new CardKey(1, CardType.Key, 100));
registry.addCard('pool', new CardUnlimited(1, CardType.UnlimPool));
registry.addCard('bar', new CardUnlimited(1, CardType.UnlimBar));
registry.addCard('cafe', new CardUnlimited(1, CardType.UnlimCafe));

var pool_cards: CardPrototype[] = [];

for (let i = 0; i < 20; i++) {
    pool_cards[i] = registry.getCard('pool');

    pool_cards[i].id += i;
}

console.log(pool_cards);