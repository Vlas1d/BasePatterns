interface GUI {
    onClick(): void;
}

class Button implements GUI {
    private command: GameCommand;

    constructor(command: GameCommand) {
        this.command = command;
    }

    onClick(): void {
        this.command.execute();
    }
}

class Toggle implements GUI {
    private command: GameCommand;

    constructor(command: GameCommand) {
        this.command = command;
    }

    onClick(): void {
        this.command.execute();
    }
}

//---------------------COMMAND----------------------------------------------

abstract class GameCommand {
    protected receiver: Game;

    constructor(receiver: Game) {
        this.receiver = receiver;
    }

    abstract execute(): void;
}

class Continue extends GameCommand {
    constructor(receiver: Game) {
        super(receiver);
    }
    execute(): void {
        console.log(this.receiver.continue());
    }
}
class NewGame extends GameCommand {
    constructor(receiver: Game) {
        super(receiver);
    }
    execute(): void {
        console.log(this.receiver.newGame());
    }
}
class Save extends GameCommand {
    private saveName: string;

    constructor(receiver: Game, saveName: string) {
        super(receiver);
        this.saveName = saveName;
    }
    execute(): void {
        console.log(this.receiver.save(this.saveName));
    }
}
class Load extends GameCommand {
    private saveName: string;

    constructor(receiver: Game, saveName: string) {
        super(receiver);
        this.saveName = saveName;
    }
    execute(): void {
        console.log(this.receiver.load(this.saveName));
    }
}
class Exit extends GameCommand {
    constructor(receiver: Game) {
        super(receiver);
    }
    execute(): void {
        console.log(this.receiver.exit());
    }
}
class Music extends GameCommand {
    constructor(receiver: Game) {
        super(receiver);
    }
    execute(): void {
        this.receiver.music = !this.receiver.music;
        console.log(`>>> Change music meaning to "${this.receiver.music}"`);
    }
}
class Sound extends GameCommand {
    constructor(receiver: Game) {
        super(receiver);
    }
    execute(): void {
        this.receiver.sound = !this.receiver.sound;
        console.log(`>>> Change sound meaning to "${this.receiver.sound}"`);
    }
}
class Vibration extends GameCommand {
    constructor(receiver: Game) {
        super(receiver);
    }
    execute(): void {
        this.receiver.vibration = !this.receiver.vibration;
        console.log(`>>> Change vibration meaning to "${this.receiver.vibration}"`);
    }
}

//---------------------RECEIVER--------------------------------------------------------------------

class Game {
    music: boolean = false;
    sound: boolean = false;
    vibration: boolean = false;

    continue(): string {
        return `>>> Continue the game from the moment it was stopped`;
    }
    newGame(): string {
        return `>>> Start new game (You loss unsaved progress)`;
    }
    load(name: string): string {
        return `>>> Loading save "${name}"`;
    }
    save(name: string): string {
        return `>>> Save game to slot "${name}"`;
    }
    exit(): string {
        return `>>> Exit game`;
    }
}

//--------------------------CLIENT-------------------------------------------

const game = new Game();

const continue_button: GUI = new Button(new Continue(game));
const save_button: GUI = new Button(new Save(game, 'save1'));
const exit_button: GUI = new Button(new Exit(game));

const sound_toggle: GUI = new Toggle(new Sound(game));

continue_button.onClick();
save_button.onClick();
exit_button.onClick();
sound_toggle.onClick();