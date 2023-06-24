//----------Model------------------------------

class MVPModel {
    data: string;

    constructor(data: string) {
        this.data = data;
    }

    setData(data: string): void {
        this.data = data;
    }

    getData(): string {
        return this.data;
    }
}

//----------View------------------------------

class MVPView {
    render(data: string) {
        console.log(`>>> Data: ${data}`);
    }

    enter(data: string): string {
        return data;
    }
}

//----------Presenter------------------------------

class MVPPresenter {
    model: MVPModel;
    view: MVPView;

    constructor(model: MVPModel, view: MVPView) {
        this.model = model;
        this.view = view;
    }

    changeData(data: string): void {
        this.model.setData(this.view.enter(data));
        this.view.render(this.model.getData());
    }
}

//----------Client----------------------------------

const model2 = new MVPModel('data 1');
const view2 = new MVPView();
const presenter2 = new MVPPresenter(model2, view2);

presenter2.changeData(view2.enter('data 2'));