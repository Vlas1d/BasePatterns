interface CharacterHandler {
    setNext(next: CharacterHandler): CharacterHandler;
    handleRequest(type: string): void;
}

class MainHandler implements CharacterHandler {
    private nextHandler: CharacterHandler;
    protected freeSlots: number = 2;

    setNext(next: CharacterHandler): CharacterHandler {
        this.nextHandler = next;
        return next;
    }
    handleRequest(type: string): void {
        this.nextHandler.handleRequest(type);
    }
}

class CreateHandler extends MainHandler {
    handleRequest(type: string): void {
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
    handleRequest(type: string): void {
        if (type === 'Warrior') {
            console.log(`>>> Create new >>> ${type} <<< character`);
        }
        else {
            super.handleRequest(type);
        }
    }
}

class MagHandler extends MainHandler {
    handleRequest(type: string): void {
        if (type === 'Mag') {
            console.log(`>>> Create new >>> ${type} <<< character`);
        }
        else {
            super.handleRequest(type);
        }
    }
}

class TankHandler extends MainHandler {
    handleRequest(type: string): void {
        if (type === 'Tank') {
            console.log(`>>> Create new >>> ${type} <<< character`);
        }
        else {
            super.handleRequest(type);
        }
    }
}

class DefaultHandler extends MainHandler {
    handleRequest(type: string): void {
        console.log(`>>> Create new >>> ${type} <<< character`);
    }
}

//--------------------------------Client------------------------------------

const isCreate = new CreateHandler();
const warrior = new WarriorHandler();
const mag = new MagHandler();
const tank = new TankHandler();
const isDefault = new DefaultHandler();

isCreate.setNext(warrior).setNext(mag).setNext(tank).setNext(isDefault);

isCreate.handleRequest('Tank');
isCreate.handleRequest('Warrior');
isCreate.handleRequest('Mag');