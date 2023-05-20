class SimpleFile {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    getSize() {
        return this.size;
    }
    getData() {
        console.log(`>>> File name: ${this.name}; File size: ${this.size}kB`);
    }
}
class Directory {
    constructor(name) {
        this.files = [];
        this.name = name;
    }
    add(component) {
        this.files.push(component);
    }
    remove(component) {
        let i = this.files.indexOf(component);
        if (i !== -1) {
            this.files.splice(i, 1);
        }
    }
    getSize() {
        let size = 0;
        for (let file of this.files) {
            size += file.getSize();
        }
        return size;
    }
    getData() {
        console.log(`> Directory name: ${this.name}; Directory size: ${this.getSize()}kB`);
        for (let file of this.files) {
            file.getData();
        }
    }
}
function createDirectory(name, files) {
    let dir = new Directory(name);
    files.forEach(file => dir.add(file));
    return dir;
}
function createFile(name, size) {
    return new SimpleFile(name, size);
}
const DriveW = createDirectory('W', [
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
//# sourceMappingURL=composite.js.map