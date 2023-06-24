//----------Model------------------------------

class MVCModel {
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

class MVCView {
    render(model: MVCModel) {
        console.log(`>>> Data: ${model.getData()}`);
    }

    enter(data: string): string {
        return data;
    }
}

//----------Controller------------------------------

class MVCController {
    model: MVCModel;
    view: MVCView;

    constructor(model: MVCModel, view: MVCView) {
        this.model = model;
        this.view = view;
    }

    changeData(data: string): void {
        this.model.setData(data);
        this.view.render(this.model);
    }
}

//----------Client----------------------------------

const model1 = new MVCModel('data 1');
const view1 = new MVCView();
const controller1 = new MVCController(model1, view1);

view1.render(model1);
controller1.changeData(view1.enter('data 2'));