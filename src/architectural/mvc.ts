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

const model = new MVCModel('data 1');
const view = new MVCView();
const controller = new MVCController(model, view);

view.render(model);
controller.changeData('data 2');