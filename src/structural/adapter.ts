enum ButtonType {
    standard = 'Rectangle',
    experimental = 'Figure'
}

interface ButtonCreator {
    getButton(color: string, size: string): string;
}

class ButtonsLib {
    protected type: ButtonType;

    color: string;
    size: string;

    constructor() {
        this.type = ButtonType.standard;
        this.color = 'black';
        this.size = 'middle';
    }

    setColor(color: string): void {
        this.color = color;
    }
    setSize(size: string): void {
        this.size = size;
    }

    getInfo(): string {
        return `${this.color} button, size: ${this.size}, type: ${this.type}`;
    }

}

class ButtonAdapter1 implements ButtonCreator {
    private button: ButtonsLib;

    constructor(button: ButtonsLib) {
        this.button = button;
    }

    getButton(color: string, size: string): string {
        this.button.setColor(color);
        this.button.setSize(size);
        return this.button.getInfo();
    }
}

class ButtonAdapter2 extends ButtonsLib implements ButtonCreator {
    constructor() {
        super();
        this.type = ButtonType.experimental;
    }

    getButton(color: string, size: string): string {
        this.setColor(color);
        this.setSize(size);
        return this.getInfo();
    }
}

//------------------------------------------------------------------------------------------

const button_lib = new ButtonsLib();
const button_adapter1 = new ButtonAdapter1(button_lib);
const button_adapter2 = new ButtonAdapter2();

const button_a1 = button_adapter1.getButton('green', 'big');
const button_a2 = button_adapter1.getButton('black', 'small');

const button_b1 = button_adapter2.getButton('green', 'big');
const button_b2 = button_adapter2.getButton('black', 'small');

console.log(button_a1);
console.log(button_a2);
console.log(button_b1);
console.log(button_b2);