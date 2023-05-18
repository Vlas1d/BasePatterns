interface DriveComponent {
    getData(): void;
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
        console.log(`Directory name: ${this.name}; Directory size: ${this.getSize()}kB`);
        for (let file of this.files) {
            file.getData();
        }
    }
}

//--------------------Client--------------------------------------------------------

const DriveW: DriveComponent = new Directory('W');

const folder1: DriveComponent = new Directory('Gallery');
const folder2: DriveComponent = new Directory('Documents');

const folder1_1: DriveComponent = new Directory('Pictures');
const folder1_2: DriveComponent = new Directory('Videos');

const file1_1: DriveComponent = new SimpleFile('anim.gif', 100);
const file1_1_1: DriveComponent = new SimpleFile('photo.png', 150);
const file1_1_2: DriveComponent = new SimpleFile('photo1.jpg', 400);

const file1_2_1: DriveComponent = new SimpleFile('video.mp4', 1550);

const file2_1: DriveComponent = new SimpleFile('index.html', 20);
const file2_2: DriveComponent = new SimpleFile('style.css', 100);
const file2_3: DriveComponent = new SimpleFile('script.js', 70);

(folder1_1 as Directory).add(file1_1_1);
(folder1_1 as Directory).add(file1_1_2);

(folder1_2 as Directory).add(file1_2_1);

(folder1 as Directory).add(file1_1);
(folder1 as Directory).add(folder1_1);
(folder1 as Directory).add(folder1_2);

(folder2 as Directory).add(file2_1);
(folder2 as Directory).add(file2_2);
(folder2 as Directory).add(file2_3);

(DriveW as Directory).add(folder1);
(DriveW as Directory).add(folder2);

DriveW.getData();