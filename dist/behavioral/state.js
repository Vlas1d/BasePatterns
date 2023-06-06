class New {
    constructor() {
        this.name = '>>>>>> New';
    }
    create() {
        console.log('>>> Article created');
        return new Created();
    }
    edit() {
        console.log('>>> Unable to edit');
    }
    submit() {
        console.log('>>> Sent to review');
        return new Audit();
    }
    publish() {
        console.log('>>> Article not verified');
    }
    delete() {
        console.log('>>> Unable to delete');
    }
}
class Created {
    constructor() {
        this.name = '>>>>>> Created';
    }
    create() {
        console.log('>>> Article already created');
    }
    edit() {
        console.log('>>> Start edit');
        return new Editing();
    }
    submit() {
        console.log('>>> Sent for review');
        return new Audit();
    }
    publish() {
        console.log('>>> Article not verified');
    }
    delete() {
        console.log('>>> Article deleted');
        return new New();
    }
}
class Editing {
    constructor() {
        this.name = '>>>>>> Editing';
    }
    create() {
        console.log('>>> Article already created');
    }
    edit() {
        console.log('>>> Article edited');
        return new Created();
    }
    submit() {
        console.log('>>> Sent for review');
        return new Audit();
    }
    publish() {
        console.log('>>> Article not verified');
    }
    delete() {
        console.log('>>> Unable to delete');
    }
}
class Audit {
    constructor() {
        this.name = '>>>>>> Audit';
    }
    create() {
        console.log('>>> Article already created');
    }
    edit() {
        console.log('>>> Audit disabled, edit article');
        return new Editing();
    }
    submit() {
    }
    publish() {
        console.log('>>> Article published');
        return new Published();
    }
    delete() {
        console.log('>>> Article deleted');
        return new New();
    }
}
class Published {
    constructor() {
        this.name = '>>>>>> Published';
    }
    create() {
        console.log('>>> Article already created');
    }
    edit() {
        console.log('>>> Publication disabled, edit article');
        return new Editing();
    }
    submit() {
    }
    publish() {
        console.log('>>> Article already published');
    }
    delete() {
        console.log('>>> Article deleted');
        return new New();
    }
}
class Article {
    constructor() {
        this.state = new New();
    }
    updateState(state) {
        const new_state = state;
        if (typeof (new_state) !== 'undefined') {
            this.state = new_state;
        }
    }
    getState() {
        return this.state.name;
    }
    create() {
        this.updateState(this.state.create());
    }
    edit() {
        this.updateState(this.state.edit());
    }
    submit() {
        this.updateState(this.state.submit());
    }
    publish() {
        this.updateState(this.state.publish());
    }
    delete() {
        this.updateState(this.state.delete());
    }
}
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
//# sourceMappingURL=state.js.map