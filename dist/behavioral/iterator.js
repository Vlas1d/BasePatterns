class TreeIterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }
    getNext() {
        return this.collection.items[this.index];
    }
    hasMore() {
        return ('items' in this.collection.items[this.index]) ? true : false;
    }
}
class DatatypeItem {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        console.log(`>>> Data type: ${this.name}`);
    }
}
class DatatypeContainer {
    constructor(name) {
        this.items = [];
        this.name = name;
    }
    add(item) {
        this.items.push(item);
    }
    getIterator() {
        return new TreeIterator(this);
    }
    getInfo() {
        console.log(`>> Data type: ${this.name}`);
    }
}
function addBranch(name, items) {
    let branch = new DatatypeContainer(name);
    items.forEach(item => {
        branch.add(item);
    });
    return branch;
}
function addLeaf(name) {
    return new DatatypeItem(name);
}
const types = addBranch('datatypes', [
    addBranch('number', [
        addBranch('int', [
            addLeaf('tinyint'),
            addLeaf('smallint'),
            addLeaf('int'),
            addLeaf('bigint')
        ]),
        addLeaf('float'),
        addLeaf('double')
    ]),
    addBranch('string', [
        addLeaf('char'),
        addLeaf('varchar'),
        addLeaf('string')
    ]),
    addLeaf('boolean'),
    addLeaf('null')
]);
console.log(types);
//# sourceMappingURL=iterator.js.map