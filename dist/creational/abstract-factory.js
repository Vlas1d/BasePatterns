class LightButton {
    constructor() {
        this.bg_color = "Black";
        this.shape = 'Rectangle';
    }
}
class DarkButton {
    constructor() {
        this.bg_color = "White";
        this.shape = 'Ellipse';
    }
}
class ColorfullButton {
    constructor() {
        this.bg_color = "Gradient";
        this.shape = 'Rectangle';
    }
}
class LightTextInput {
    constructor() {
        this.border = true;
        this.color = 'Black';
    }
    getText() {
        return `Input color: ${this.color}`;
    }
    ;
}
class DarkTextInput {
    constructor() {
        this.border = false;
        this.color = 'Black';
    }
    getText() {
        return `Input color: ${this.color}`;
    }
    ;
}
class ColorfullTextInput {
    constructor() {
        this.border = true;
        this.color = 'Colorfull';
    }
    getText() {
        return `Input color: ${this.color}`;
    }
    ;
}
class LightCursor {
    constructor() {
        this.color = 'Black';
    }
}
class DarkCursor {
    constructor() {
        this.color = 'Grey';
    }
}
class ColorfullCursor {
    constructor() {
        this.color = 'Gradient';
    }
}
class LightGUIFactory {
    createButton() {
        return new LightButton();
    }
    createTextInput() {
        return new LightTextInput();
    }
    createCursor() {
        return new LightCursor();
    }
}
class DarkGUIFactory {
    createButton() {
        return new DarkButton();
    }
    createTextInput() {
        return new DarkTextInput();
    }
    createCursor() {
        return new DarkCursor();
    }
}
class ColorfullGUIFactory {
    createButton() {
        return new ColorfullButton();
    }
    createTextInput() {
        return new ColorfullTextInput();
    }
    createCursor() {
        return new ColorfullCursor();
    }
}
class CreateGUI {
    constructor(factory) {
        switch (factory) {
            case 'Light':
                {
                    this.factory = new LightGUIFactory();
                }
                break;
            case 'Dark':
                {
                    this.factory = new DarkGUIFactory();
                }
                break;
            case 'Colorfull':
                {
                    this.factory = new LightGUIFactory();
                }
                break;
            default:
                {
                    throw new Error(`Type factory "${factory}" is incorrect`);
                }
                break;
        }
    }
    getFactory() {
        return this.factory;
    }
}
try {
    const createGUI = new CreateGUI('Dark').getFactory();
    const textInput = createGUI.createTextInput().getText();
    console.log(createGUI.createButton());
    console.log(createGUI.createTextInput());
    console.log(createGUI.createCursor());
    console.log(textInput);
}
catch (error) {
    console.log(`Error message: ${error.message}`);
}
//# sourceMappingURL=abstract-factory.js.map