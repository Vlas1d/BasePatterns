class Button {
    constructor(command) {
        this.command = command;
    }
    onClick() {
        this.command.execute();
    }
}
class Toggle {
    constructor(command) {
        this.command = command;
    }
    onClick() {
        this.command.execute();
    }
}
class GameCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }
}
class Continue extends GameCommand {
    constructor(receiver) {
        super(receiver);
    }
    execute() {
        console.log(this.receiver.continue());
    }
}
class NewGame extends GameCommand {
    constructor(receiver) {
        super(receiver);
    }
    execute() {
        console.log(this.receiver.newGame());
    }
}
class Save extends GameCommand {
    constructor(receiver, saveName) {
        super(receiver);
        this.saveName = saveName;
    }
    execute() {
        console.log(this.receiver.save(this.saveName));
    }
}
class Load extends GameCommand {
    constructor(receiver, saveName) {
        super(receiver);
        this.saveName = saveName;
    }
    execute() {
        console.log(this.receiver.load(this.saveName));
    }
}
class Exit extends GameCommand {
    constructor(receiver) {
        super(receiver);
    }
    execute() {
        console.log(this.receiver.exit());
    }
}
class Music extends GameCommand {
    constructor(receiver) {
        super(receiver);
    }
    execute() {
        this.receiver.music = !this.receiver.music;
        console.log(`>>> Change music meaning to "${this.receiver.music}"`);
    }
}
class Sound extends GameCommand {
    constructor(receiver) {
        super(receiver);
    }
    execute() {
        this.receiver.sound = !this.receiver.sound;
        console.log(`>>> Change sound meaning to "${this.receiver.sound}"`);
    }
}
class Vibration extends GameCommand {
    constructor(receiver) {
        super(receiver);
    }
    execute() {
        this.receiver.vibration = !this.receiver.vibration;
        console.log(`>>> Change vibration meaning to "${this.receiver.vibration}"`);
    }
}
class Game {
    constructor() {
        this.music = false;
        this.sound = false;
        this.vibration = false;
    }
    continue() {
        return `>>> Continue the game from the moment it was stopped`;
    }
    newGame() {
        return `>>> Start new game (You loss unsaved progress)`;
    }
    load(name) {
        return `>>> Loading save "${name}"`;
    }
    save(name) {
        return `>>> Save game to slot "${name}"`;
    }
    exit() {
        return `>>> Exit game`;
    }
}
const game = new Game();
const continue_button = new Button(new Continue(game));
const save_button = new Button(new Save(game, 'save1'));
const exit_button = new Button(new Exit(game));
const sound_toggle = new Toggle(new Sound(game));
continue_button.onClick();
save_button.onClick();
exit_button.onClick();
sound_toggle.onClick();
//# sourceMappingURL=action.js.map