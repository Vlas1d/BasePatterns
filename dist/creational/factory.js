var WeaponRange;
(function (WeaponRange) {
    WeaponRange["Near"] = "5 - 10";
    WeaponRange["Middle"] = "11 - 20";
    WeaponRange["Far"] = "21 - 100";
})(WeaponRange || (WeaponRange = {}));
class Sword {
    constructor() {
        this.damage = 10;
        this.range = WeaponRange.Near;
        this.price = 1000;
    }
    aboutWeapon() {
        return `Sword damage: ${this.damage}, range: ${this.range} and price: ${this.price}`;
    }
}
class Bow {
    constructor() {
        this.damage = 3;
        this.range = WeaponRange.Far;
        this.price = 750;
    }
    aboutWeapon() {
        return `Bow damage: ${this.damage}, range: ${this.range} and price: ${this.price}`;
    }
}
class Spear {
    constructor() {
        this.damage = 7;
        this.range = WeaponRange.Middle;
        this.price = 1250;
    }
    aboutWeapon() {
        return `Spear damage: ${this.damage}, range: ${this.range} and price: ${this.price}`;
    }
}
class WeaponFactory {
}
class SwordFactory extends WeaponFactory {
    createWeapon() {
        return new Sword();
    }
}
class BowFactory extends WeaponFactory {
    createWeapon() {
        return new Bow();
    }
}
class SpearFactory extends WeaponFactory {
    createWeapon() {
        return new Spear();
    }
}
function createWeapon(type) {
    switch (type) {
        case 'sword':
            {
                return new SwordFactory().createWeapon();
            }
            break;
        case 'bow':
            {
                return new BowFactory().createWeapon();
            }
            break;
        case 'spear':
            {
                return new SpearFactory().createWeapon();
            }
            break;
        default:
            {
                throw new Error(`Weapon type "${type}" incorrect`);
            }
            break;
    }
}
try {
    console.log(createWeapon('sword'));
    console.log(createWeapon('bow'));
    console.log(createWeapon('spear'));
    const sword = createWeapon('sword');
    console.log(sword.aboutWeapon());
}
catch (error) {
    console.log(`Error type: ${error.name}, "${error.message}"`);
}
//# sourceMappingURL=factory.js.map