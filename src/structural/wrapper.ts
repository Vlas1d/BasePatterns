interface Errors {
    send(): string;
}

class SendError implements Errors {

    send(): string {
        return `>>> Error 404`;
    }
}

class ErrorInfo {
    protected err: Errors;

    constructor(error: Errors) {
        this.err = error;
    }

}

class ErrorMessage extends ErrorInfo implements Errors {

    constructor(error: Errors) {
        super(error);
    }

    send(): string {
        return `${this.err.send()}: Page not found!`;
    }
}

class ErrorSolution extends ErrorInfo implements Errors {

    constructor(error: Errors) {
        super(error);
    }

    send(): string {
        return `${this.err.send()}; Check the correct links!`;
    }
}

//-------------------Client-------------------------------------------------------------

const base = new SendError();

const wrapper1 = new ErrorMessage(base);

const wrapper2 = new ErrorSolution(base);
const wrapper_full = new ErrorSolution(wrapper1);

console.log(base.send());
console.log(wrapper1.send());
console.log(wrapper2.send());
console.log(wrapper_full.send());