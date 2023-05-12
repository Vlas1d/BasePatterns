var ButtonType;
(function (ButtonType) {
    ButtonType["standard"] = "Rectangle";
    ButtonType["experimental"] = "Figure";
})(ButtonType || (ButtonType = {}));
class ButtonsLib {
    constructor() {
        this.type = ButtonType.standard;
        this.color = 'black';
        this.size = 'middle';
    }
    setColor(color) {
        this.color = color;
    }
    setSize(size) {
        this.size = size;
    }
    getInfo() {
        return `${this.color} button, size: ${this.size}, type: ${this.type}`;
    }
}
class ButtonAdapter1 {
    constructor(button) {
        this.button = button;
    }
    getButton(color, size) {
        this.button.setColor(color);
        this.button.setSize(size);
        return this.button.getInfo();
    }
}
class ButtonAdapter2 extends ButtonsLib {
    constructor() {
        super();
        this.type = ButtonType.experimental;
    }
    getButton(color, size) {
        this.setColor(color);
        this.setSize(size);
        return this.getInfo();
    }
}
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
//# sourceMappingURL=adapter.js.map