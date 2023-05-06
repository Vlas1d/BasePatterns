enum WeaponRange {
    Near = '5 - 10',
    Middle = '11 - 20',
    Far = '21 - 100'
}

interface Weapon {
    damage: number;
    range: WeaponRange;
    price: number;
    aboutWeapon(): string;
}

class Sword implements Weapon {
    damage = 10;
    range = WeaponRange.Near;
    price = 1000;

    aboutWeapon(): string {
        return `Sword damage: ${this.damage}, range: ${this.range} and price: ${this.price}`;
    }
}

class Bow implements Weapon {
    damage = 3;
    range = WeaponRange.Far;
    price = 750;

    aboutWeapon(): string {
        return `Bow damage: ${this.damage}, range: ${this.range} and price: ${this.price}`;
    }
}

class Spear implements Weapon {
    damage = 7;
    range = WeaponRange.Middle;
    price = 1250;

    aboutWeapon(): string {
        return `Spear damage: ${this.damage}, range: ${this.range} and price: ${this.price}`;
    }
}

abstract class WeaponFactory {

    //Якісь функції із спільною реалізацією

    abstract createWeapon(): Weapon;
}

class SwordFactory extends WeaponFactory {

    createWeapon(): Weapon {
        return new Sword();
    }
}

class BowFactory extends WeaponFactory {

    createWeapon(): Weapon {
        return new Bow();
    }
}

class SpearFactory extends WeaponFactory {

    createWeapon(): Weapon {
        return new Spear();
    }
}


function createWeapon(type: string): Weapon {

    switch (type) {
        case 'sword': {
            return new SwordFactory().createWeapon();
        } break;
        case 'bow': {
            return new BowFactory().createWeapon();
        } break;
        case 'spear': {
            return new SpearFactory().createWeapon();
        } break;
        default: {
            throw new Error(`Weapon type "${type}" incorrect`);
        } break;
    }
}

//------Client-------------------------------------------------

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