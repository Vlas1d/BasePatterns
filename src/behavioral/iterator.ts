interface CollectionIterator {
    getNext(): Datatype;
    hasMore(): boolean;
}

interface DatatypeCollection {
    items: Datatype[];
    getIterator(): CollectionIterator;
}

interface Datatype {
    getInfo(): void;
}

interface CompositeCollection extends Datatype, DatatypeCollection { }

//------------------------------ITERATOR---------------------------------------------------------

class TreeIterator implements CollectionIterator {
    private collection: DatatypeCollection;
    private index: number;

    constructor(collection: DatatypeCollection) {
        this.collection = collection;
        this.index = 0;
    }

    getNext(): Datatype {
        return (this.collection as DatatypeContainer).items[this.index]
    }
    hasMore(): boolean {
        return ('items' in (this.collection as DatatypeContainer).items[this.index]) ? true : false;
    }
}

//------------------------------COLLECTION-------------------------------------------------------

class DatatypeItem implements Datatype {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getInfo(): void {
        console.log(`>>> Data type: ${this.name}`);
    }
}

class DatatypeContainer implements CompositeCollection {
    private name: string;
    items: (Datatype | CompositeCollection)[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(item: Datatype): void {
        this.items.push(item);
    }

    getIterator(): CollectionIterator {
        return new TreeIterator(this);
    }

    getInfo(): void {
        console.log(`>> Data type: ${this.name}`);
    }
}

//-------------------------------FUNCTIONS------------------------------------------

function addBranch(name: string, items: Datatype[]) {
    let branch: Datatype = new DatatypeContainer(name);
    items.forEach(item => {
        (branch as DatatypeContainer).add(item);
    });
    return branch;
}

function addLeaf(name: string) {
    return new DatatypeItem(name);
}

//--------------------------------CLIENT--------------------------------------------

const types: Datatype = addBranch('datatypes', [
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