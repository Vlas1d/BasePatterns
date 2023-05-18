interface Button {
    bg_color: string;
    shape: string;
}
interface TextInput {
    border: boolean;
    color: string;
    getText(): string;
}
interface Cursor {
    color: string;
}

//------------------------------------------------------------
class LightButton implements Button {
    bg_color = "Black";
    shape = 'Rectangle';
}
class DarkButton implements Button {
    bg_color = "White";
    shape = 'Ellipse';
}
class ColorfullButton implements Button {
    bg_color = "Gradient";
    shape = 'Rectangle';
}
//------------------------------------------------------------
class LightTextInput implements TextInput {
    border = true;
    color = 'Black';
    getText(): string {
        return `Input color: ${this.color}`;
    };
}
class DarkTextInput implements TextInput {
    border = false;
    color = 'Black';
    getText(): string {
        return `Input color: ${this.color}`;
    };
}
class ColorfullTextInput implements TextInput {
    border = true;
    color = 'Colorfull';
    getText(): string {
        return `Input color: ${this.color}`;
    };
}
//------------------------------------------------------------
class LightCursor implements Cursor {
    color = 'Black';
}
class DarkCursor implements Cursor {
    color = 'Grey';
}
class ColorfullCursor implements Cursor {
    color = 'Gradient';
}
//------------------------------------------------------------

interface GUIFactory {
    createButton(): Button;
    createTextInput(): TextInput;
    createCursor(): Cursor;
}

//------------------------------------------------------------

class LightGUIFactory implements GUIFactory {
    createButton(): Button {
        return new LightButton();
    }
    createTextInput(): TextInput {
        return new LightTextInput();
    }
    createCursor(): Cursor {
        return new LightCursor();
    }
}

class DarkGUIFactory implements GUIFactory {
    createButton(): Button {
        return new DarkButton();
    }
    createTextInput(): TextInput {
        return new DarkTextInput();
    }
    createCursor(): Cursor {
        return new DarkCursor();
    }
}

class ColorfullGUIFactory implements GUIFactory {
    createButton(): Button {
        return new ColorfullButton();
    }
    createTextInput(): TextInput {
        return new ColorfullTextInput();
    }
    createCursor(): Cursor {
        return new ColorfullCursor();
    }
}

//-------------------------------------------------------------

class CreateGUI {
    private factory: GUIFactory;

    constructor(factory: string) {
        switch (factory) {
            case 'Light': {
                this.factory = new LightGUIFactory();
            } break;
            case 'Dark': {
                this.factory = new DarkGUIFactory();
            } break;
            case 'Colorfull': {
                this.factory = new LightGUIFactory();
            } break;
            default: {
                throw new Error(`Type factory "${factory}" is incorrect`);
            } break;
        }
    }

    getFactory(): GUIFactory {
        return this.factory;
    }
}

//---------------------------------------------------------------

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