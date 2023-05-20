class SendError {
    send() {
        return `>>> Error 404`;
    }
}
class ErrorInfo {
    constructor(error) {
        this.err = error;
    }
}
class ErrorMessage extends ErrorInfo {
    constructor(error) {
        super(error);
    }
    send() {
        return `${this.err.send()}: Page not found!`;
    }
}
class ErrorSolution extends ErrorInfo {
    constructor(error) {
        super(error);
    }
    send() {
        return `${this.err.send()}; Check the correct links!`;
    }
}
console.time('>>> >>> Debug');
const base = new SendError();
const wrapper1 = new ErrorMessage(base);
const wrapper2 = new ErrorSolution(base);
const wrapper_full = new ErrorSolution(wrapper1);
console.log(base.send());
console.log(wrapper1.send());
console.log(wrapper2.send());
console.log(wrapper_full.send());
console.timeEnd('>>> >>> Debug');
//# sourceMappingURL=wrapper.js.map