class BrowserGame {
    constructor() {
        this.coins = 0;
        this.score = 0;
        this.lvl = 1;
        this.currentSave = null;
    }
    setData(coins, score, lvl) {
        this.coins = coins;
        this.score = score;
        this.lvl = lvl;
    }
    getData() {
        console.log(`>>> Coins: ${this.coins}; Score: ${this.score}; Level: ${this.lvl}`);
    }
    saveGame(name) {
        let save = new Memento(this.coins, this.score, this.lvl, name);
        this.currentSave = save;
        SaveDirectory.saves.push(save);
    }
    loadGame(name) {
        let save = SaveDirectory.saves.find((save) => save.name === name);
        if (save) {
            this.coins = save.getCoins();
            this.score = save.getScore();
            this.lvl = save.getLevel();
            console.log(`Loaded game: ${name}`);
        }
        else {
            console.log(`Save '${name}' not found.`);
        }
    }
    undo() {
        if (this.currentSave) {
            this.coins = this.currentSave.getCoins();
            this.score = this.currentSave.getScore();
            this.lvl = this.currentSave.getLevel();
            console.log('Undo successful');
        }
        else {
            console.log('No previous save found');
        }
    }
}
class Memento {
    constructor(coins, score, lvl, name) {
        this.coins = coins;
        this.score = score;
        this.lvl = lvl;
        this.name = name;
    }
    getCoins() {
        return this.coins;
    }
    getScore() {
        return this.score;
    }
    getLevel() {
        return this.lvl;
    }
}
class SaveDirectory {
}
SaveDirectory.saves = [];
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
//# sourceMappingURL=memento.js.map