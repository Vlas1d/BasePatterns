class BrowserGame {
    private coins: number = 0;
    private score: number = 0;
    private lvl: number = 1;

    private currentSave: Memento | null = null;

    setData(coins: number, score: number, lvl: number): void {
        this.coins = coins;
        this.score = score;
        this.lvl = lvl;
    }

    getData(): void {
        console.log(`>>> Coins: ${this.coins}; Score: ${this.score}; Level: ${this.lvl}`);
    }

    saveGame(name: string): void {
        let save = new Memento(this.coins, this.score, this.lvl, name);
        this.currentSave = save;
        SaveDirectory.saves.push(save);
    }

    loadGame(name: string): void {
        let save = SaveDirectory.saves.find((save) => save.name === name);
        if (save) {
            this.coins = save.getCoins();
            this.score = save.getScore();
            this.lvl = save.getLevel();
            console.log(`Loaded game: ${name}`);
        } else {
            console.log(`Save '${name}' not found.`);
        }
    }

    undo(): void {
        if (this.currentSave) {
            this.coins = this.currentSave.getCoins();
            this.score = this.currentSave.getScore();
            this.lvl = this.currentSave.getLevel();
            console.log('Undo successful');
        } else {
            console.log('No previous save found');
        }
    }
}

//---------------------------SAVE----------------------------------

class Memento {
    private coins: number;
    private score: number;
    private lvl: number;

    public name: string;

    constructor(coins: number, score: number, lvl: number, name: string) {
        this.coins = coins;
        this.score = score;
        this.lvl = lvl;
        this.name = name;
    }

    getCoins(): number {
        return this.coins;
    }

    getScore(): number {
        return this.score;
    }

    getLevel(): number {
        return this.lvl;
    }
}

class SaveDirectory {
    static saves: Memento[] = [];
}

//----------------------------CLIENT---------------------------------

const browser_game = new BrowserGame();

browser_game.getData();

browser_game.saveGame('save1');
browser_game.setData(100, 1000, 3);
browser_game.saveGame('save2');
browser_game.setData(200, 2000, 5);
browser_game.saveGame('save3');

browser_game.loadGame('save2');
browser_game.getData();
browser_game.undo();
browser_game.getData();