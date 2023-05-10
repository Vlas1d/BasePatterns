enum Language {
    UA = "Ukrainian",
    EN = "English",
    FR = "French"
}

class Settings {
    private static instance: Settings; //Чому статичні властивості не можна вказати в інтерфейсі

    sound: boolean;
    lang: Language;
    wifi: boolean;

    private constructor() {
        this.sound = true;
        this.lang = Language.UA;
        this.wifi = true;
    }

    static getInstance(): Settings {
        return this.instance ??= new Settings();
    }

    setTheme(theme: string): void {
        console.log(`Change theme to ${theme}`);
    }
}

const settings1 = Settings.getInstance();
const settings2 = Settings.getInstance();

console.log(settings1);
console.log(settings1.setTheme('Light'));