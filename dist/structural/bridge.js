class Message {
    constructor(communication) {
        this.communication = communication;
    }
}
class SMS extends Message {
    constructor(communication) {
        super(communication);
        this.text = "This is text message";
    }
    sendMessage() {
        return `Message "${this.text}" sent via ${this.communication.transportMessage()}`;
    }
}
class Video extends Message {
    constructor(communication) {
        super(communication);
        this.video = "This is video message";
    }
    sendMessage() {
        return `Message "${this.video}" sent via ${this.communication.transportMessage()}`;
    }
}
class WiFi {
    transportMessage() {
        return "Wifi connection";
    }
}
class Satelite {
    transportMessage() {
        return "Satelite connection";
    }
}
class Wired {
    transportMessage() {
        return "Wired connection";
    }
}
function getCommunication(type) {
    switch (type) {
        case 'wifi': return new WiFi();
        case 'satelite': return new Satelite();
        case 'wired': return new Wired();
        default: return new Satelite();
    }
}
const conn = getCommunication('satelite');
const conn1 = getCommunication('wifi');
const mess = new SMS(conn);
const mess1 = new Video(conn1);
console.log(mess.sendMessage());
console.log(mess1.sendMessage());
//# sourceMappingURL=bridge.js.map