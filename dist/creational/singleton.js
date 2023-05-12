var Language;
(function (Language) {
    Language["UA"] = "Ukrainian";
    Language["EN"] = "English";
    Language["FR"] = "French";
})(Language || (Language = {}));
class Settings {
    constructor() {
        this.sound = true;
        this.lang = Language.UA;
        this.wifi = true;
    }
    static getInstance() {
        var _a;
        return (_a = this.instance) !== null && _a !== void 0 ? _a : (this.instance = new Settings());
    }
    setTheme(theme) {
        console.log(`Change theme to ${theme}`);
    }
}
const settings1 = Settings.getInstance();
const settings2 = Settings.getInstance();
console.log(settings1);
console.log(settings1.setTheme('Light'));
//# sourceMappingURL=singleton.js.map