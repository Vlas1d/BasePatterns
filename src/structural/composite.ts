interface DriveComponent {
    getData(): void;
    getSize(): number;
}

class SimpleFile implements DriveComponent {
    private name: string;
    private size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }
    getData(): void {
        console.log(`>>> File name: ${this.name}; File size: ${this.size}kB`);
    }
}

class Directory implements DriveComponent {
    private name: string;
    private files: DriveComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: DriveComponent): void {
        this.files.push(component);
    }
    remove(component: DriveComponent): void {
        let i = this.files.indexOf(component);
        if (i !== -1) {
            this.files.splice(i, 1);
        }
    }

    getSize(): number {
        let size: number = 0;
        for (let file of this.files) {
            size += (file as SimpleFile).getSize();
        }
        return size;
    }

    getData(): void {
        console.log(`> Directory name: ${this.name}; Directory size: ${this.getSize()}kB`);
        for (let file of this.files) {
            file.getData();
        }
    }
}

function createDirectory(name: string, files: DriveComponent[]): DriveComponent {
    let dir: DriveComponent = new Directory(name);
    files.forEach(file => (dir as Directory).add(file));
    return dir;
}

function createFile(name: string, size: number) {
    return new SimpleFile(name, size);
}

//--------------------Client--------------------------------------------------------

const DriveW: DriveComponent = createDirectory('W', [
    createDirectory('Pictures', [
        createDirectory('Pictures', [
            createFile('photo.jpeg', 150),
            createFile('picture.png', 250),
        ]),
        createDirectory('Videos', [
            createFile('video.mp4', 1550),
        ]),
        createFile('anim.gif', 100)
    ]),
    createDirectory('Documents', [
        createFile('index.html', 30),
        createFile('style.css', 100),
        createFile('script.js', 70)
    ]),
]);

DriveW.getData();