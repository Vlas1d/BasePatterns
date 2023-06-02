class UIComponent {
    constructor(mediator) {
        this.mediator = mediator;
    }
}
class TextInput extends UIComponent {
    constructor(mediator) {
        super(mediator);
        this.text_field = '';
    }
    setData(text) {
        this.text_field = text;
        this.onInput();
    }
    onInput() {
        this.mediator.sendAction('input', this);
    }
}
class AlertLabel extends UIComponent {
    onAction(message) {
        console.log(`>>> Alert: ${message}`);
    }
}
class SendButton extends UIComponent {
    constructor(mediator) {
        super(mediator);
    }
    onClick() {
        this.mediator.sendAction('click', this);
    }
}
class RegMediator {
    addComponent(input, label, button) {
        this.input = input;
        this.label = label;
        this.button = button;
    }
    checkInput(input) {
        let message;
        if (input.text_field === '') {
            message = '>>> Input field is empty!';
        }
        else if (input.text_field === 'use') {
            message = '>>> This name is used!';
        }
        else {
            message = '';
        }
        return message;
    }
    sendAction(action, component) {
        switch (action) {
            case 'click':
                {
                    if (this.checkInput(this.input) != '') {
                        this.label.onAction(this.checkInput(this.input));
                    }
                    else {
                        console.log('>>> Registration is successful');
                    }
                }
                break;
            case 'input':
                {
                    if (this.checkInput(component) != '') {
                        this.label.onAction(this.checkInput(component));
                    }
                }
                break;
            default: break;
        }
    }
}
const mediator = new RegMediator();
const input = new TextInput(mediator);
const label = new AlertLabel(mediator);
const button = new SendButton(mediator);
mediator.addComponent(input, label, button);
button.onClick();
input.setData('use');
input.setData('vlas1d');
button.onClick();
//# sourceMappingURL=mediator.js.map