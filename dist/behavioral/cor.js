class MainHandler {
    constructor() {
        this.freeSlots = 2;
    }
    setNext(next) {
        this.nextHandler = next;
        return next;
    }
    handleRequest(type) {
        this.nextHandler.handleRequest(type);
    }
}
class CreateHandler extends MainHandler {
    handleRequest(type) {
        if (this.freeSlots > 0) {
            super.handleRequest(type);
            this.freeSlots -= 1;
        }
        else {
            console.log('>>> Empty slots not found');
        }
    }
}
class WarriorHandler extends MainHandler {
    handleRequest(type) {
        if (type === 'Warrior') {
            console.log(`>>> Create new >>> ${type} <<< character`);
        }
        else {
            super.handleRequest(type);
        }
    }
}
class MagHandler extends MainHandler {
    handleRequest(type) {
        if (type === 'Mag') {
            console.log(`>>> Create new >>> ${type} <<< character`);
        }
        else {
            super.handleRequest(type);
        }
    }
}
class TankHandler extends MainHandler {
    handleRequest(type) {
        if (type === 'Tank') {
            console.log(`>>> Create new >>> ${type} <<< character`);
        }
        else {
            super.handleRequest(type);
        }
    }
}
class DefaultHandler extends MainHandler {
    handleRequest(type) {
        console.log(`>>> Create new >>> ${type} <<< character`);
    }
}
const isCreate = new CreateHandler();
const warrior = new WarriorHandler();
const mag = new MagHandler();
const tank = new TankHandler();
const isDefault = new DefaultHandler();
isCreate.setNext(warrior).setNext(mag).setNext(tank).setNext(isDefault);
isCreate.handleRequest('Tank');
isCreate.handleRequest('Warrior');
isCreate.handleRequest('Mag');
//# sourceMappingURL=cor.js.map