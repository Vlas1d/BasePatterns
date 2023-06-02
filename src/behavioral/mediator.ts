interface Mediator {
    sendAction(action: string, component: any): void;
}

//-------------------------UICOMPONENT-------------------------------------------------

class UIComponent {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }
}

class TextInput extends UIComponent {
    text_field: string = '';

    constructor(mediator: Mediator) {
        super(mediator);
    }

    setData(text: string): void {
        this.text_field = text;
        this.onInput();
    }

    onInput(): void {
        this.mediator.sendAction('input', this);
    }
}

class AlertLabel extends UIComponent {
    onAction(message: string): void {
        console.log(`>>> Alert: ${message}`);
    }
}

class SendButton extends UIComponent {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    onClick(): void {
        this.mediator.sendAction('click', this);
    }
}

//-------------------------MEDIATOR-------------------------------------------------

class RegMediator implements Mediator {
    private input: TextInput;
    private label: AlertLabel;
    private button: SendButton;

    addComponent(input: TextInput, label: AlertLabel, button: SendButton): void {
        this.input = input;
        this.label = label;
        this.button = button;
    }

    private checkInput(input: TextInput): string {
        let message: string;

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

    sendAction(action: string, component: any): void {
        switch (action) {
            case 'click': {
                if (this.checkInput(this.input) != '') {
                    this.label.onAction(this.checkInput(this.input));
                }
                else {
                    console.log('>>> Registration is successful')
                }
            } break;
            case 'input': {
                if (this.checkInput(component) != '') {
                    this.label.onAction(this.checkInput(component));
                }
            } break;
            default: break;
        }
    }
}

//------------------------------------CLIENT-------------------------------------------

const mediator = new RegMediator();

const input = new TextInput(mediator);
const label = new AlertLabel(mediator);
const button = new SendButton(mediator);

mediator.addComponent(input, label, button);


button.onClick();

input.setData('use');
input.setData('vlas1d');

button.onClick();