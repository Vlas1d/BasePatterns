interface Communication {
    transportMessage(): string;
}

abstract class Message {
    protected communication: Communication;

    constructor(communication: Communication) {
        this.communication = communication;
    }

    abstract sendMessage(): string;
}

class SMS extends Message {

    text: string;

    constructor(communication: Communication) {
        super(communication);
        this.text = "This is text message";
    }

    sendMessage(): string {
        return `Message "${this.text}" sent via ${this.communication.transportMessage()}`;
    }
}

class Video extends Message {

    video: string;

    constructor(communication: Communication) {
        super(communication);
        this.video = "This is video message";
    }

    sendMessage(): string {
        return `Message "${this.video}" sent via ${this.communication.transportMessage()}`;
    }
}

class WiFi implements Communication {
    transportMessage(): string {
        return "Wifi connection";
    }
}

class Satelite implements Communication {
    transportMessage(): string {
        return "Satelite connection";
    }
}

class Wired implements Communication {
    transportMessage(): string {
        return "Wired connection";
    }
}

function getCommunication(type: string): Communication {
    switch (type) {
        case 'wifi': return new WiFi();
        case 'satelite': return new Satelite();
        case 'wired': return new Wired();
        default: return new Satelite();
    }
}

//------------------------------------------------------------------------------

const conn = getCommunication('satelite');
const conn1 = getCommunication('wifi');

const mess = new SMS(conn);
const mess1 = new Video(conn1);

console.log(mess.sendMessage());
console.log(mess1.sendMessage());