interface StateEvents {
    name: string;
    create(): void | StateEvents;
    edit(): void | StateEvents;
    submit(): void | StateEvents;
    publish(): void | StateEvents;
    delete(): void | StateEvents;
}

//------------------------STATES-----------------------------------------------------

class New implements StateEvents {
    name = '>>>>>> New';
    create(): StateEvents {
        console.log('>>> Article created');
        return new Created();
    }
    edit(): void {
        console.log('>>> Unable to edit');
    }
    submit(): StateEvents {
        console.log('>>> Sent to review');
        return new Audit();
    }
    publish(): void {
        console.log('>>> Article not verified');
    }
    delete(): void {
        console.log('>>> Unable to delete');
    }
}

class Created implements StateEvents {
    name = '>>>>>> Created';
    create(): void {
        console.log('>>> Article already created');
    }
    edit(): StateEvents {
        console.log('>>> Start edit');
        return new Editing();
    }
    submit(): StateEvents {
        console.log('>>> Sent for review');
        return new Audit();
    }
    publish(): void {
        console.log('>>> Article not verified');
    }
    delete(): StateEvents {
        console.log('>>> Article deleted');
        return new New();
    }
}

class Editing implements StateEvents {
    name = '>>>>>> Editing';
    create(): void {
        console.log('>>> Article already created');
    }
    edit(): StateEvents {
        console.log('>>> Article edited');
        return new Created();
    }
    submit(): StateEvents {
        console.log('>>> Sent for review');
        return new Audit();
    }
    publish(): void {
        console.log('>>> Article not verified');
    }
    delete(): void {
        console.log('>>> Unable to delete');
    }
}

class Audit implements StateEvents {
    name = '>>>>>> Audit';
    create(): void {
        console.log('>>> Article already created');
    }
    edit(): StateEvents {
        console.log('>>> Audit disabled, edit article');
        return new Editing();
    }
    submit(): void {

    }
    publish(): StateEvents {
        console.log('>>> Article published');
        return new Published();
    }
    delete(): StateEvents {
        console.log('>>> Article deleted');
        return new New();
    }
}

class Published implements StateEvents {
    name = '>>>>>> Published';
    create(): void {
        console.log('>>> Article already created');
    }
    edit(): StateEvents {
        console.log('>>> Publication disabled, edit article');
        return new Editing();
    }
    submit(): void {

    }
    publish(): void {
        console.log('>>> Article already published');
    }
    delete(): StateEvents {
        console.log('>>> Article deleted');
        return new New();
    }
}

//------------------------CONTEXT-----------------------------------------------------

class Article {
    private state: StateEvents; //public для тестування

    constructor() {
        this.state = new New();
    }

    private updateState(state: StateEvents | void) {
        const new_state = state;
        if (typeof (new_state) !== 'undefined') {
            this.state = new_state;
        }
    }

    getState(): string {
        return this.state.name;
    }

    create(): void {
        this.updateState(this.state.create());
    }
    edit(): void {
        this.updateState(this.state.edit());
    }
    submit(): void {
        this.updateState(this.state.submit());
    }
    publish(): void {
        this.updateState(this.state.publish());
    }
    delete(): void {
        this.updateState(this.state.delete());
    }
}

//---------------------------CLIENT------------------------------

const article = new Article();

console.log(article.getState());
article.edit();
console.log(article.getState());
article.create();
console.log(article.getState());
article.create();
console.log(article.getState());
article.edit();
console.log(article.getState());
article.delete();
console.log(article.getState());
article.submit();
console.log(article.getState());
article.publish();
console.log(article.getState());
article.delete();
console.log(article.getState());